/*
 * FlipAI — the hybrid inference engine behind the FlipCards study coach.
 *
 * Every AI task goes through Firebase AI Logic. Each task picks where it
 * prefers to run:
 *   - private, quick tasks (grading your own words, hints, memory hooks,
 *     custom-card definitions) prefer Gemini Nano on the device, so a
 *     learner's attempts never leave the browser when the device can serve
 *     them;
 *   - tasks that need more reasoning (exam-style scenarios, comparing two
 *     confusable concepts) prefer Gemini in the cloud and fall back to the
 *     device when the network is gone.
 * Routing is language-aware: when the on-device model cannot serve the
 * learner's language, Firebase AI Logic sends the call to the cloud.
 *
 * Every call returns { data, text, source, ms, model } so the UI can show
 * where it ran, and a local "privacy ledger" counts on-device vs cloud calls.
 */
import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { getAI, getGenerativeModel, GoogleAIBackend, InferenceMode } from "firebase/ai";
import { getRemoteConfig, fetchAndActivate, getValue } from "firebase/remote-config";

const VERSION = "1.0.0";
const LEDGER_KEY = "flipcards.aiLedger";
const ROUTE_KEY = "flipcards.aiRoute";
const SUPPORTED_LANGUAGES = ["en", "es", "hi", "zh", "fr", "de", "ja", "ko", "ar"];
const LANGUAGE_NAMES = {
  en: "English",
  es: "Spanish",
  hi: "Hindi",
  zh: "Simplified Chinese",
  fr: "French",
  de: "German",
  ja: "Japanese",
  ko: "Korean",
  ar: "Arabic"
};

const ROUTES = ["auto", "device", "cloud"];

// Remote Config lets us retune routing and the cloud model without a deploy.
const RC_DEFAULTS = {
  ai_cloud_model: "gemini-3.5-flash-lite",
  ai_pass_score: 70,
  ai_route_grade: InferenceMode.PREFER_ON_DEVICE,
  ai_route_hint: InferenceMode.PREFER_ON_DEVICE,
  ai_route_hook: InferenceMode.PREFER_ON_DEVICE,
  ai_route_define: InferenceMode.PREFER_ON_DEVICE,
  ai_route_exam: InferenceMode.PREFER_IN_CLOUD,
  ai_route_compare: InferenceMode.PREFER_IN_CLOUD
};

const TASKS = {
  grade: { json: true, temperature: 0.2 },
  hint: { json: false, temperature: 0.6 },
  hook: { json: true, temperature: 0.9 },
  define: { json: false, temperature: 0.3 },
  exam: { json: true, temperature: 0.8 },
  compare: { json: true, temperature: 0.4 }
};

// Plain JSON Schema objects: the same schema constrains Gemini Nano
// (Prompt API responseConstraint) and Gemini in the cloud (responseSchema).
const SCHEMAS = {
  grade: {
    type: "object",
    properties: {
      score: { type: "integer", description: "0 to 100: how much of the meaning the learner recalled correctly" },
      covered: { type: "array", items: { type: "string" }, description: "Up to 3 key ideas of the reference that the learner expressed, 2-6 words each" },
      missing: { type: "array", items: { type: "string" }, description: "Up to 3 key ideas from the reference that the learner left out (empty if none), 2-6 words each" },
      misconception: { type: "string", description: "One wrong statement found in the learner's answer, or an empty string" },
      feedback: { type: "string", description: "One short, encouraging sentence to the learner (use \"you\") with the most useful fix" }
    },
    required: ["score", "covered", "missing", "misconception", "feedback"]
  },
  hook: {
    type: "object",
    properties: {
      mnemonic: { type: "string", description: "A short, catchy memory phrase, max 18 words" },
      analogy: { type: "string", description: "An everyday analogy, max 25 words" },
      example: { type: "string", description: "A concrete project situation, max 30 words" }
    },
    required: ["mnemonic", "analogy", "example"]
  },
  exam: {
    type: "object",
    properties: {
      scenario: { type: "string", description: "A realistic project situation in 2-3 sentences" },
      question: { type: "string", description: "The question asked about the situation" },
      options: { type: "array", items: { type: "string" }, description: "Exactly 4 plausible answer options" },
      answer: { type: "integer", description: "0-based index of the single correct option" },
      explanation: { type: "string", description: "1-2 sentences on why the correct option is right" }
    },
    required: ["scenario", "question", "options", "answer", "explanation"]
  },
  compare: {
    type: "object",
    properties: {
      summary: { type: "string", description: "One sentence with the core difference" },
      rows: {
        type: "array",
        description: "Exactly 3 aspects that tell the two terms apart",
        items: {
          type: "object",
          properties: {
            aspect: { type: "string" },
            a: { type: "string" },
            b: { type: "string" }
          },
          required: ["aspect", "a", "b"]
        }
      },
      tip: { type: "string", description: "One memorable way to tell them apart" },
      example: { type: "string", description: "One short project situation that shows both terms" }
    },
    required: ["summary", "rows", "tip", "example"]
  }
};

const SYSTEM = {
  grade: "You are a fair, kind study coach for project-management flashcards. You compare a learner's own explanation with a reference definition and judge MEANING, not wording: paraphrases, synonyms and examples count. Reply only with the requested JSON.",
  hint: "You are a study coach. You help a learner recall a definition without revealing it. Never quote the definition. Reply with plain text only, at most two short sentences, no markdown.",
  hook: "You are a memory coach. You create vivid, short memory aids for project-management terms. Reply only with the requested JSON.",
  define: "You write concise glossary definitions for flashcards: one or two sentences, 15 to 45 words, plain language, no lists, no markdown, no quotes.",
  exam: "You write realistic PMP-style situational exam questions that test applying a concept, not memorizing it. Exactly 4 options and exactly one correct option. Reply only with the requested JSON.",
  compare: "You are a project-management tutor who explains the difference between two commonly confused terms, clearly and briefly. Reply only with the requested JSON."
};

const languageName = (code) => LANGUAGE_NAMES[code] || "English";

const PROMPTS = {
  grade: ({ term, definition, answer, language }) => [
    `Term: ${term}`,
    `Reference definition: ${definition}`,
    `Learner's explanation: ${answer}`,
    "",
    "Score from 0 to 100 how completely and correctly the learner explained the meaning of the term:",
    "90-100 = every key idea; 70-89 = the main idea with small gaps; 40-69 = partly right; 0-39 = wrong, off-topic or empty.",
    "Covered: up to 3 key ideas of the reference definition that the learner expressed, even in other words.",
    "Missing: up to 3 key ideas of the reference definition that the learner left out, never a rewording of a covered idea; an empty list if nothing important is missing.",
    "Misconception: a statement in the learner's explanation that contradicts the reference definition, or an empty string.",
    "Feedback: one short sentence that speaks to the learner as \"you\". Use plain text, no markdown.",
    `Write every text field in ${languageName(language)}.`
  ].join("\n"),
  hint: ({ term, definition, level, language }) => (level === 1
    ? [
      `Term: ${term}`,
      `Secret definition (do not reveal it): ${definition}`,
      "",
      "Give a gentle nudge: the big idea or a familiar everyday comparison, in one sentence, without using the words of the definition.",
      `Write in ${languageName(language)}.`
    ]
    : [
      `Term: ${term}`,
      `Secret definition: ${definition}`,
      "",
      "Line 1: the 3 to 5 most important key words of the definition, comma-separated.",
      "Line 2: one short sentence on how they connect, without quoting the definition.",
      `Write in ${languageName(language)}.`
    ]).join("\n"),
  hook: ({ term, definition, language }) => [
    `Term: ${term}`,
    `Definition: ${definition}`,
    "",
    "Create a memory hook: a mnemonic, an everyday analogy, and a concrete project example.",
    `Write every text field in ${languageName(language)}.`
  ].join("\n"),
  define: ({ concept, standard, alternateTerm, language }) => [
    `Write a flashcard definition for "${concept}"${alternateTerm ? ` (also called "${alternateTerm}")` : ""}`,
    standard ? `in the context of ${standard}.` : "in the context of project management.",
    `Write it in ${languageName(language)}.`
  ].join(" "),
  exam: ({ term, definition, language, avoid }) => [
    `Concept: ${term}`,
    `Definition: ${definition}`,
    avoid ? `Do not reuse this earlier scenario: ${avoid}` : "",
    "",
    "Write one situational multiple-choice question, in the style of the PMP exam, that checks whether the learner can APPLY this concept in a realistic project.",
    "The scenario has 2-3 sentences. Give exactly 4 plausible options; \"answer\" is the 0-based index of the only correct one.",
    `Write all text in ${languageName(language)}.`
  ].filter(Boolean).join("\n"),
  compare: ({ a, b, language }) => [
    `Term A: ${a.term}`,
    `Definition A: ${a.definition}`,
    `Term B: ${b.term}`,
    `Definition B: ${b.definition}`,
    "",
    "Explain how A and B differ. Use exactly 3 aspects (for example purpose, timing, who owns it).",
    `Write all text in ${languageName(language)}.`
  ].join("\n")
};

// ---------------------------------------------------------------------------
// Firebase bootstrap
// ---------------------------------------------------------------------------

const firebaseSettings = window.FLIPCARDS_FIREBASE && typeof window.FLIPCARDS_FIREBASE === "object"
  ? window.FLIPCARDS_FIREBASE
  : null;
const isLocalHost = ["localhost", "127.0.0.1", "[::1]", "::1"].includes(location.hostname);

let app = null;
let ai = null;
let appCheckMode = "off";
let remoteConfigState = "defaults";
const settings = { ...RC_DEFAULTS };

if (firebaseSettings?.config?.apiKey && firebaseSettings?.config?.appId) {
  try {
    app = initializeApp(firebaseSettings.config);

    if (isLocalHost) {
      // Local development uses an App Check debug token registered in the
      // Firebase console. Production uses reCAPTCHA Enterprise.
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = firebaseSettings.appCheckDebugToken || true;
    }

    if (firebaseSettings.recaptchaEnterpriseSiteKey) {
      initializeAppCheck(app, {
        provider: new ReCaptchaEnterpriseProvider(firebaseSettings.recaptchaEnterpriseSiteKey),
        isTokenAutoRefreshEnabled: true
      });
      appCheckMode = isLocalHost ? "debug-token" : "recaptcha-enterprise";
    }

    ai = getAI(app, { backend: new GoogleAIBackend() });
  } catch (error) {
    console.warn("[FlipAI] Firebase setup failed", error);
    app = null;
    ai = null;
  }
}

const remoteConfigReady = (async () => {
  if (!app) {
    return;
  }

  try {
    const remoteConfig = getRemoteConfig(app);
    remoteConfig.settings.minimumFetchIntervalMillis = 60 * 60 * 1000;
    remoteConfig.settings.fetchTimeoutMillis = 4000;
    remoteConfig.defaultConfig = RC_DEFAULTS;
    await fetchAndActivate(remoteConfig);

    for (const key of Object.keys(RC_DEFAULTS)) {
      const value = getValue(remoteConfig, key);
      if (value.getSource() === "static") {
        continue;
      }
      settings[key] = typeof RC_DEFAULTS[key] === "number" ? value.asNumber() : value.asString();
    }
    remoteConfigState = "remote";
  } catch (error) {
    remoteConfigState = "defaults";
    console.info("[FlipAI] Remote Config unavailable, using defaults", error?.code || error?.message || error);
  }
})();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const normalizeLanguage = (language) => {
  const code = String(language || "en").toLowerCase().slice(0, 2);
  return SUPPORTED_LANGUAGES.includes(code) ? code : "en";
};

const unique = (values) => Array.from(new Set(values));

const readJson = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const writeJson = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage can be blocked (private mode); the ledger is a convenience.
  }
};

const emit = (name, detail) => {
  window.dispatchEvent(new CustomEvent(`flipai:${name}`, { detail }));
};

const getRoute = () => {
  const stored = (() => {
    try {
      return localStorage.getItem(ROUTE_KEY);
    } catch {
      return null;
    }
  })();
  return ROUTES.includes(stored) ? stored : "auto";
};

const setRoute = (route) => {
  const next = ROUTES.includes(route) ? route : "auto";
  try {
    localStorage.setItem(ROUTE_KEY, next);
  } catch {
    // ignore
  }
  emit("route", { route: next });
  return next;
};

const taskMode = (task) => {
  const route = getRoute();
  if (route === "device") {
    return InferenceMode.ONLY_ON_DEVICE;
  }
  if (route === "cloud") {
    return InferenceMode.ONLY_IN_CLOUD;
  }
  const configured = settings[`ai_route_${task}`];
  return Object.values(InferenceMode).includes(configured)
    ? configured
    : RC_DEFAULTS[`ai_route_${task}`];
};

const ledger = () => {
  const stored = readJson(LEDGER_KEY, null);
  return {
    device: Number(stored?.device) || 0,
    cloud: Number(stored?.cloud) || 0,
    deviceMs: Number(stored?.deviceMs) || 0,
    cloudMs: Number(stored?.cloudMs) || 0
  };
};

const recordCall = (source, ms) => {
  const current = ledger();
  if (source === "on_device") {
    current.device += 1;
    current.deviceMs += ms;
  } else {
    current.cloud += 1;
    current.cloudMs += ms;
  }
  writeJson(LEDGER_KEY, current);
  emit("ledger", current);
};

const resetLedger = () => {
  writeJson(LEDGER_KEY, { device: 0, cloud: 0, deviceMs: 0, cloudMs: 0 });
  emit("ledger", ledger());
};

const parseJson = (text) => {
  const cleaned = String(text || "")
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(cleaned.slice(start, end + 1));
    }
    throw new Error("The model returned text that is not valid JSON.");
  }
};

// Models sometimes add markdown emphasis or code ticks; the coach shows plain text.
const stripMarkdown = (text) => text.replace(/\*+|`+/g, "");

const cleanText = (value, maxLength = 400) => stripMarkdown(String(value ?? ""))
  .replace(/\s+/g, " ")
  .replace(/^["'“”]+|["'“”]+$/g, "")
  .trim()
  .slice(0, maxLength);

const cleanList = (value, max = 3, maxLength = 120) => (Array.isArray(value) ? value : [])
  .map((item) => cleanText(item, maxLength))
  .filter(Boolean)
  .slice(0, max);

// Plain-text answers keep their line breaks (a hint is "key words" + a line).
const cleanMultiline = (value, maxLength = 900) => String(value ?? "")
  .replace(/\r/g, "")
  .split("\n")
  .map((line) => stripMarkdown(line.replace(/[ \t]+/g, " ").replace(/^[*•-]\s+/, "")).trim())
  .filter(Boolean)
  .join("\n")
  .replace(/^["'“”]+|["'“”]+$/g, "")
  .slice(0, maxLength);

// Models like to put the right answer in the same slot; shuffle client-side.
const shuffleOptions = (options, answer) => {
  const order = options.map((_, index) => index);
  for (let index = order.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(Math.random() * (index + 1));
    [order[index], order[swap]] = [order[swap], order[index]];
  }
  return {
    options: order.map((index) => options[index]),
    answer: order.indexOf(answer)
  };
};

const NORMALIZERS = {
  grade: (data) => {
    const score = Math.max(0, Math.min(100, Math.round(Number(data?.score) || 0)));
    return {
      score,
      covered: cleanList(data?.covered),
      missing: cleanList(data?.missing),
      misconception: cleanText(data?.misconception, 220),
      feedback: cleanText(data?.feedback, 260)
    };
  },
  hook: (data) => ({
    mnemonic: cleanText(data?.mnemonic, 200),
    analogy: cleanText(data?.analogy, 260),
    example: cleanText(data?.example, 300)
  }),
  exam: (data) => {
    const options = cleanList(data?.options, 4, 260).map((option) => option.replace(/^[A-D][).:]\s+/, ""));
    const answer = Math.round(Number(data?.answer));
    if (options.length !== 4 || !Number.isInteger(answer) || answer < 0 || answer > 3) {
      throw new Error("The exam question came back incomplete.");
    }
    return {
      scenario: cleanText(data?.scenario, 700),
      question: cleanText(data?.question, 320),
      ...shuffleOptions(options, answer),
      explanation: cleanText(data?.explanation, 600)
    };
  },
  compare: (data) => {
    const rows = (Array.isArray(data?.rows) ? data.rows : [])
      .map((row) => ({
        aspect: cleanText(row?.aspect, 60),
        a: cleanText(row?.a, 160),
        b: cleanText(row?.b, 160)
      }))
      .filter((row) => row.aspect && (row.a || row.b))
      .slice(0, 4);
    if (!rows.length) {
      throw new Error("The comparison came back empty.");
    }
    return {
      summary: cleanText(data?.summary, 300),
      rows,
      tip: cleanText(data?.tip, 240),
      example: cleanText(data?.example, 320)
    };
  }
};

// ---------------------------------------------------------------------------
// Models
// ---------------------------------------------------------------------------

const modelCache = new Map();

const getModel = (task, language, mode) => {
  const cloudModel = String(settings.ai_cloud_model || RC_DEFAULTS.ai_cloud_model);
  const key = `${task}|${language}|${mode}|${cloudModel}`;

  if (modelCache.has(key)) {
    return modelCache.get(key);
  }

  const spec = TASKS[task];
  const schema = spec.json ? SCHEMAS[task] : null;
  const model = getGenerativeModel(ai, {
    mode,
    onDeviceParams: {
      createOptions: {
        // Text only (the SDK default also expects images) and the learner's
        // language, so availability is checked for what we actually send.
        expectedInputs: [{ type: "text", languages: unique(["en", language]) }],
        expectedOutputs: [{ type: "text", languages: [language] }],
        initialPrompts: [{ role: "system", content: SYSTEM[task] }]
      },
      ...(schema ? { promptOptions: { responseConstraint: schema } } : {})
    },
    inCloudParams: {
      model: cloudModel,
      systemInstruction: SYSTEM[task],
      generationConfig: {
        temperature: spec.temperature,
        ...(schema ? { responseMimeType: "application/json", responseSchema: schema } : {})
      }
    }
  });

  modelCache.set(key, model);
  return model;
};

const withTimeout = (promise, ms, message) => {
  let timer = null;
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(message)), ms);
    })
  ]).finally(() => clearTimeout(timer));
};

const describeError = (error) => {
  const message = String(error?.message || error || "");
  if (/only_on_device|on-device model is not available|LanguageModel API not available/i.test(message)) {
    return "device-unavailable";
  }
  if (/app.?check|attestation|recaptcha/i.test(message)) {
    return "app-check";
  }
  if (/quota|429|resource.?exhausted/i.test(message)) {
    return "quota";
  }
  if (/fetch|network|failed to fetch|offline/i.test(message) || !navigator.onLine) {
    return "offline";
  }
  if (/timed out/i.test(message)) {
    return "timeout";
  }
  return "error";
};

const execute = async (model, prompt, onChunk) => {
  if (!onChunk) {
    const result = await model.generateContent(prompt);
    return { text: result.response.text(), source: result.response.inferenceSource || "in_cloud" };
  }

  const { stream, response } = await model.generateContentStream(prompt);
  let text = "";
  let source = null;
  for await (const chunk of stream) {
    source = source || chunk.inferenceSource || null;
    try {
      text += chunk.text();
    } catch {
      // A chunk without text (safety metadata) is fine to skip.
    }
    onChunk(text);
  }
  const final = await response;
  if (!text) {
    try {
      text = final.text();
    } catch {
      text = "";
    }
  }
  return { text, source: final.inferenceSource || source || "in_cloud" };
};

const isConfigured = () => Boolean(ai);

const run = async (task, payload, options = {}) => {
  if (!ai) {
    const error = new Error("Firebase AI Logic is not configured for this build.");
    error.kind = "not-configured";
    throw error;
  }

  await Promise.race([remoteConfigReady, new Promise((resolve) => setTimeout(resolve, 1500))]);

  const language = normalizeLanguage(payload.language);
  const route = getRoute();
  let mode = taskMode(task);

  // Offline in Auto: go straight to the device instead of waiting for the
  // cloud call to fail first.
  if (route === "auto" && !navigator.onLine) {
    mode = InferenceMode.ONLY_ON_DEVICE;
  }

  const prompt = PROMPTS[task]({ ...payload, language });
  const startedAt = performance.now();
  const timeoutMs = options.timeoutMs || 60000;
  let outcome = null;
  let fellBack = false;

  const attempt = async (attemptMode) => {
    const model = getModel(task, language, attemptMode);
    const raw = await withTimeout(execute(model, prompt, options.onChunk), timeoutMs, "The AI request timed out.");
    const data = TASKS[task].json ? NORMALIZERS[task](parseJson(raw.text)) : cleanMultiline(raw.text, 900);
    return { ...raw, data };
  };

  try {
    outcome = await attempt(mode);
  } catch (error) {
    // Auto mode is allowed to try the other side once: the device model can
    // fail mid-flight, and the cloud can be unreachable or refuse the call.
    const prefersDevice = mode === InferenceMode.PREFER_ON_DEVICE || mode === InferenceMode.ONLY_ON_DEVICE;
    const retryMode = prefersDevice
      ? (navigator.onLine ? InferenceMode.ONLY_IN_CLOUD : null)
      : (hasPromptApi() ? InferenceMode.ONLY_ON_DEVICE : null);

    if (route !== "auto" || !retryMode) {
      error.kind = error.kind || describeError(error);
      throw error;
    }

    try {
      outcome = await attempt(retryMode);
      fellBack = true;
    } catch (secondError) {
      secondError.kind = secondError.kind || describeError(secondError);
      throw secondError;
    }
  }

  const ms = Math.round(performance.now() - startedAt);
  const source = outcome.source === "on_device" ? "on_device" : "in_cloud";
  recordCall(source, ms);

  return {
    data: outcome.data,
    text: outcome.text,
    source,
    ms,
    fellBack,
    model: source === "on_device" ? "Gemini Nano" : String(settings.ai_cloud_model),
    language
  };
};

// ---------------------------------------------------------------------------
// On-device status
// ---------------------------------------------------------------------------

const hasPromptApi = () => typeof self.LanguageModel?.availability === "function";

const deviceAvailability = async (language = "en") => {
  if (!hasPromptApi()) {
    return "unsupported";
  }
  const code = normalizeLanguage(language);
  try {
    return await self.LanguageModel.availability({
      expectedInputs: [{ type: "text", languages: unique(["en", code]) }],
      expectedOutputs: [{ type: "text", languages: [code] }]
    });
  } catch {
    return "unavailable";
  }
};

const languageMatrix = async () => {
  const entries = await Promise.all(
    SUPPORTED_LANGUAGES.map(async (code) => [code, await deviceAvailability(code)])
  );
  return Object.fromEntries(entries);
};

// Must run from a user gesture: the Prompt API only downloads Gemini Nano
// after the learner interacts with the page.
const downloadDeviceModel = async (onProgress) => {
  if (!ai) {
    throw new Error("Firebase AI Logic is not configured for this build.");
  }
  if (!hasPromptApi()) {
    throw new Error("This browser has no built-in Prompt API.");
  }
  const model = getModel("hint", "en", InferenceMode.PREFER_ON_DEVICE);
  await model.initializeDeviceModel((value) => onProgress?.(value));
  emit("device", { availability: await deviceAvailability("en") });
};

const status = async (language = "en") => ({
  version: VERSION,
  configured: isConfigured(),
  appCheck: appCheckMode,
  remoteConfig: remoteConfigState,
  route: getRoute(),
  cloudModel: String(settings.ai_cloud_model),
  passScore: Number(settings.ai_pass_score) || RC_DEFAULTS.ai_pass_score,
  promptApi: hasPromptApi(),
  device: await deviceAvailability(language),
  online: navigator.onLine,
  ledger: ledger()
});

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

const FlipAI = {
  version: VERSION,
  languages: SUPPORTED_LANGUAGES.slice(),
  isConfigured,
  status,
  deviceAvailability,
  languageMatrix,
  downloadDeviceModel,
  getRoute,
  setRoute,
  ledger,
  resetLedger,
  passScore: () => Number(settings.ai_pass_score) || RC_DEFAULTS.ai_pass_score,
  taskMode,
  grade: (payload) => run("grade", payload),
  hint: (payload, onChunk) => run("hint", payload, { onChunk }),
  hook: (payload) => run("hook", payload),
  exam: (payload) => run("exam", payload, { timeoutMs: 75000 }),
  compare: (payload) => run("compare", payload, { timeoutMs: 75000 }),
  define: (payload) => run("define", payload)
};

window.FlipAI = FlipAI;
window.addEventListener("online", () => emit("network", { online: true }));
window.addEventListener("offline", () => emit("network", { online: false }));
emit("ready", { configured: isConfigured() });

export default FlipAI;
