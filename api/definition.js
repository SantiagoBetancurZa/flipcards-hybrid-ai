const MODEL = process.env.OPENAI_MODEL || "gpt-5-nano";
const REQUEST_TIMEOUT_MS = 25000;
const MAX_REQUEST_BYTES = 2048;
const MAX_CONCEPT_LENGTH = 240;
const MAX_CONTEXT_LENGTH = 500;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = Number(process.env.DEFINITION_RATE_LIMIT || "20");
const RATE_LIMIT_MAX_KEYS = Number(process.env.DEFINITION_RATE_LIMIT_MAX_KEYS || "500");
const rateLimitHits = new Map();
const languagePrompts = {
  es: {
    context: "espanol",
    instruction: "Responde solo con una definicion breve, clara y memorizable en espanol."
  },
  en: {
    context: "ingles",
    instruction: "Respond only with one brief, clear, memorable definition in English."
  },
  hi: {
    context: "hindi",
    instruction: "Respond only with one brief, clear, memorable definition in Hindi."
  },
  zh: {
    context: "chino simplificado",
    instruction: "Respond only with one brief, clear, memorable definition in Simplified Chinese."
  },
  fr: {
    context: "frances",
    instruction: "Respond only with one brief, clear, memorable definition in French."
  },
  de: {
    context: "aleman",
    instruction: "Respond only with one brief, clear, memorable definition in German."
  },
  ja: {
    context: "japones",
    instruction: "Respond only with one brief, clear, memorable definition in Japanese."
  },
  ko: {
    context: "coreano",
    instruction: "Respond only with one brief, clear, memorable definition in Korean."
  },
  ar: {
    context: "arabe",
    instruction: "Respond only with one brief, clear, memorable definition in Arabic."
  }
};

const baseCorsHeaders = {
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
};

const getCorsHeaders = (request) => {
  const origin = request.headers.get("origin");
  const allowedOrigins = new Set(
    (process.env.ALLOWED_ORIGINS || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  );

  if (process.env.VERCEL_URL) {
    allowedOrigins.add(`https://${process.env.VERCEL_URL}`);
  }

  allowedOrigins.add("http://127.0.0.1:4173");
  allowedOrigins.add("http://localhost:4173");

  if (!origin || !allowedOrigins.has(origin)) {
    return baseCorsHeaders;
  }

  return {
    ...baseCorsHeaders,
    "Access-Control-Allow-Origin": origin,
    Vary: "Origin",
  };
};

const jsonResponse = (request, payload, status = 200) =>
  Response.json(payload, {
    status,
    headers: getCorsHeaders(request),
  });

const normalizeClientAddress = (value) => {
  if (!value) {
    return "";
  }

  let address = value.split(",")[0].trim().replace(/^"|"$/g, "");

  if (!address || address.toLowerCase() === "unknown" || address.length > 128) {
    return "";
  }

  if (address.startsWith("[")) {
    address = address.slice(1, address.indexOf("]") > 0 ? address.indexOf("]") : undefined);
  } else if (/^\d{1,3}(?:\.\d{1,3}){3}:\d+$/.test(address)) {
    address = address.slice(0, address.lastIndexOf(":"));
  }

  return /^[a-z0-9:._%-]+$/i.test(address) ? address : "";
};

const getForwardedAddress = (request) => {
  const forwarded = request.headers.get("forwarded");
  const match = forwarded?.split(",")[0]?.match(/(?:^|;)\s*for=(?:"?)([^;,"]+)/i);

  return normalizeClientAddress(match?.[1] || "");
};

const getClientKey = (request) => {
  const candidates = [
    request.headers.get("x-nf-client-connection-ip"),
    request.headers.get("cf-connecting-ip"),
    request.headers.get("true-client-ip"),
    request.headers.get("x-real-ip"),
    request.headers.get("x-forwarded-for"),
  ];

  for (const candidate of candidates) {
    const address = normalizeClientAddress(candidate);

    if (address) {
      return address;
    }
  }

  return getForwardedAddress(request) || "local";
};

const pruneRateLimitHits = (now) => {
  for (const [key, hit] of rateLimitHits) {
    if (now - hit.startedAt > RATE_LIMIT_WINDOW_MS) {
      rateLimitHits.delete(key);
    }
  }

  if (rateLimitHits.size <= RATE_LIMIT_MAX_KEYS) {
    return;
  }

  const oldestKeys = [...rateLimitHits.entries()]
    .sort((a, b) => a[1].startedAt - b[1].startedAt)
    .slice(0, rateLimitHits.size - RATE_LIMIT_MAX_KEYS)
    .map(([key]) => key);

  for (const key of oldestKeys) {
    rateLimitHits.delete(key);
  }
};

const checkRateLimit = (request) => {
  const now = Date.now();
  pruneRateLimitHits(now);
  const key = getClientKey(request);
  const hit = rateLimitHits.get(key) ?? { count: 0, startedAt: now };

  if (now - hit.startedAt > RATE_LIMIT_WINDOW_MS) {
    rateLimitHits.set(key, { count: 1, startedAt: now });
    pruneRateLimitHits(now);
    return true;
  }

  hit.count += 1;
  rateLimitHits.set(key, hit);
  pruneRateLimitHits(now);
  return hit.count <= RATE_LIMIT_MAX_REQUESTS;
};

const readJsonBody = async (request) => {
  const rawBody = await request.text();
  const size = new TextEncoder().encode(rawBody).byteLength;

  if (size > MAX_REQUEST_BYTES) {
    const error = new Error("Solicitud demasiado grande");
    error.status = 413;
    throw error;
  }

  return JSON.parse(rawBody || "{}");
};

const validateFieldLength = (value, maxLength, fieldName) => {
  if (value.length > maxLength) {
    const error = new Error(`${fieldName} supera el límite permitido`);
    error.status = 400;
    throw error;
  }

  return value;
};

const normalizeLanguage = (language) =>
  Object.hasOwn(languagePrompts, language) ? language : "es";

const extractText = (data) => {
  if (data.output_text) {
    return data.output_text.trim();
  }

  const parts = [];

  for (const item of data.output ?? []) {
    for (const content of item.content ?? []) {
      if (content.text) {
        parts.push(content.text);
      }
    }
  }

  const definition = parts.join(" ").trim();

  if (!definition) {
    throw new Error("La IA no devolvio texto");
  }

  return definition;
};

const compactOpenAIError = async (response) => {
  try {
    const data = await response.json();
    return data?.error?.type || "openai_error";
  } catch {
    return "openai_error";
  }
};

const genericGenerationError = "No se pudo generar la definición; intenta de nuevo";

export function OPTIONS(request) {
  return new Response(null, {
    status: 204,
    headers: getCorsHeaders(request),
  });
}

export function GET(request) {
  const apiKey = process.env.OPENAI_API_KEY?.trim();

  if (!apiKey) {
    return jsonResponse(request, { ok: false, configured: false });
  }

  return jsonResponse(request, { ok: true, configured: true });
}

export async function POST(request) {
  const apiKey = process.env.OPENAI_API_KEY?.trim();

  if (!apiKey) {
    return jsonResponse(request, { error: "Falta OPENAI_API_KEY" }, 503);
  }

  if (!checkRateLimit(request)) {
    return jsonResponse(request, { error: "Demasiadas solicitudes; intenta más tarde" }, 429);
  }

  let concept = "";
  let standard = "";
  let alternateTerm = "";
  let language = "es";

  try {
    const payload = await readJsonBody(request);
    concept = validateFieldLength(String(payload?.concept ?? "").trim(), MAX_CONCEPT_LENGTH, "concepto");
    standard = validateFieldLength(String(payload?.standard ?? "").trim(), MAX_CONTEXT_LENGTH, "estándar");
    alternateTerm = validateFieldLength(String(payload?.alternateTerm ?? "").trim(), MAX_CONTEXT_LENGTH, "término equivalente");
    language = normalizeLanguage(payload?.language);
  } catch (error) {
    return jsonResponse(request, { error: error.message || "Solicitud invalida" }, error.status || 400);
  }

  if (!concept) {
    return jsonResponse(request, { error: "Falta el concepto" }, 400);
  }

  const context = [
    standard ? `Estandar o disciplina: ${standard}` : "",
    alternateTerm ? `Termino equivalente: ${alternateTerm}` : "",
    `Idioma de respuesta: ${languagePrompts[language].context}`
  ].filter(Boolean).join("\n");
  const definitionInstruction = languagePrompts[language].instruction;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  let response;

  try {
    response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        reasoning: { effort: "minimal" },
        instructions: [
          "Generate educational definitions for flipcards.",
          definitionInstruction,
          "If a standard, discipline, or equivalent term is provided, use that context without translating acronyms unnecessarily.",
          "Do not use lists, markdown, or introductions.",
        ].join(" "),
        input: `Concepto: ${concept}${context ? `\n${context}` : ""}`,
        max_output_tokens: 180,
        store: false,
      }),
      signal: controller.signal,
    });
  } catch (error) {
    return jsonResponse(request, {
      error: error.name === "AbortError"
        ? "Tiempo agotado; intenta de nuevo"
        : "No se pudo conectar con OpenAI",
    }, 502);
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) {
    await compactOpenAIError(response);
    return jsonResponse(request, { error: genericGenerationError }, 502);
  }

  try {
    const data = await response.json();
    return jsonResponse(request, { definition: extractText(data), language });
  } catch (error) {
    return jsonResponse(request, { error: genericGenerationError }, 502);
  }
}

const methodHandlers = { GET, OPTIONS, POST };

export default {
  async fetch(request) {
    const handler = methodHandlers[request.method?.toUpperCase()];

    if (!handler) {
      return jsonResponse(request, { error: "Metodo no permitido" }, 405);
    }

    return handler(request);
  },
};
