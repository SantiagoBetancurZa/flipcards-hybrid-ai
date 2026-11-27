/*
 * FlipCards study coach — the UI on top of FlipAI.
 *
 * It talks to the classic app (script.js) only through window.FlipCardsBridge
 * and the flipcards:* events, so the original study loop keeps working when
 * the module or the AI is unavailable.
 */
import FlipAI from "./flip-ai.js";
import { STRINGS } from "./coach-strings.js";

const bridge = () => window.FlipCardsBridge || null;
const COACH_SEEN_KEY = "flipcards.coachSeen";
const TABS = ["explain", "hint", "hook", "exam", "compare"];

// ---------------------------------------------------------------------------
// i18n
// ---------------------------------------------------------------------------

const currentLanguage = () => {
  const language = bridge()?.getLanguage?.() || document.documentElement.lang || "en";
  return String(language).slice(0, 2).toLowerCase();
};

const lookup = (table, path) => path.split(".").reduce((value, part) => (value == null ? value : value[part]), table);

const tr = (key, values = {}) => {
  const language = currentLanguage();
  const template = lookup(STRINGS[language], key) ?? lookup(STRINGS.en, key) ?? key;
  return String(template).replace(/\{(\w+)\}/g, (_, name) => (values[name] ?? `{${name}}`));
};

// ---------------------------------------------------------------------------
// DOM helpers (AI text is always inserted as text, never as HTML)
// ---------------------------------------------------------------------------

const h = (tag, attributes = {}, ...children) => {
  const element = document.createElement(tag);
  for (const [name, value] of Object.entries(attributes || {})) {
    if (value === false || value == null) {
      continue;
    }
    if (name === "class") {
      element.className = value;
    } else if (name === "text") {
      element.textContent = value;
    } else if (name.startsWith("on") && typeof value === "function") {
      element.addEventListener(name.slice(2), value);
    } else if (name === "style" && typeof value === "object") {
      for (const [property, propertyValue] of Object.entries(value)) {
        element.style.setProperty(property.startsWith("--") ? property : property.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`), propertyValue);
      }
    } else {
      element.setAttribute(name, value === true ? "" : String(value));
    }
  }
  for (const child of children.flat()) {
    if (child == null || child === false) {
      continue;
    }
    element.append(child instanceof Node ? child : document.createTextNode(String(child)));
  }
  return element;
};

const svg = (paths, className = "") => {
  const element = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  element.setAttribute("viewBox", "0 0 24 24");
  element.setAttribute("aria-hidden", "true");
  element.setAttribute("focusable", "false");
  if (className) {
    element.setAttribute("class", className);
  }
  for (const d of paths) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    element.append(path);
  }
  return element;
};

const ICONS = {
  spark: ["M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9L12 3.5Z", "M19 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"],
  chip: ["M8 4.5h8A3.5 3.5 0 0 1 19.5 8v8a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 16V8A3.5 3.5 0 0 1 8 4.5Z", "M9.5 9.5h5v5h-5z", "M9 2v2.5M15 2v2.5M9 19.5V22M15 19.5V22M2 9h2.5M2 15h2.5M19.5 9H22M19.5 15H22"],
  cloud: ["M7 18.5h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.1 9.6 4.5 4.5 0 0 0 7 18.5Z"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  check: ["m5 12.5 4.5 4.5L19 7.5"],
  cross: ["M7 7l10 10", "M17 7 7 17"],
  bolt: ["M13 2.5 5.5 13H11l-1 8.5L18.5 11H13l0-8.5Z"],
  shield: ["M12 3 5 6v5.5c0 4.3 2.9 8.1 7 9.5 4.1-1.4 7-5.2 7-9.5V6l-7-3Z", "m9 12 2.2 2.2L15.5 10"]
};

const formatMs = (ms) => (ms >= 1000 ? `${(ms / 1000).toFixed(1)} s` : `${ms} ms`);

const sourceBadge = (result) => {
  const onDevice = result.source === "on_device";
  return h(
    "p",
    { class: "coach-source", "data-source": result.source },
    svg(onDevice ? ICONS.chip : ICONS.cloud),
    h("span", { text: onDevice ? tr("sourceDevice") : tr("sourceCloud", { model: result.model }) }),
    h("span", { class: "coach-source__time", text: formatMs(result.ms) }),
    result.fellBack ? h("span", { class: "coach-source__switch", text: tr("fellBack") }) : null
  );
};

const errorMessage = (error) => tr(`errors.${error?.kind || "error"}`);

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------

let root = null;
let sheet = null;
let body = null;
let termLabel = null;
let ledgerLabel = null;
let routeLabel = null;
let trigger = null;
let tabButtons = new Map();
let activeTab = "explain";
let lastFocus = null;
let cardKey = "";
let cardState = {};

const freshCardState = () => ({
  explain: { answer: "", result: null, busy: false, error: "" },
  hint: { steps: [], busy: false, error: "" },
  hook: { result: null, busy: false, error: "" },
  exam: { result: null, picked: null, busy: false, error: "", history: [] },
  compare: { other: null, result: null, busy: false, error: "" }
});

const getCard = () => bridge()?.getCard?.() || null;

const keyForCard = (card) => (card ? `${card.standardId}|${card.conceptId}|${card.term}|${card.language}` : "");

const syncCard = () => {
  const card = getCard();
  const key = keyForCard(card);
  if (key !== cardKey) {
    cardKey = key;
    cardState = freshCardState();
  }
  return card;
};

const thinkingLabel = (task) => {
  const mode = FlipAI.taskMode(task);
  if (!navigator.onLine || mode === "only_on_device" || mode === "prefer_on_device") {
    return tr("thinkingDevice");
  }
  return tr("thinkingCloud");
};

const thinking = (task) => h(
  "p",
  { class: "coach-thinking", role: "status" },
  h("span", { class: "coach-thinking__dots", "aria-hidden": "true" }, h("i"), h("i"), h("i")),
  h("span", { text: thinkingLabel(task) })
);

const errorLine = (message) => (message ? h("p", { class: "coach-error", role: "alert", text: message }) : null);

// ---------------------------------------------------------------------------
// Panels
// ---------------------------------------------------------------------------

const verdictFor = (score) => {
  const pass = FlipAI.passScore();
  if (score >= pass) {
    return "pass";
  }
  if (score >= Math.max(35, pass - 30)) {
    return "close";
  }
  return "miss";
};

const renderExplain = (card) => {
  const state = cardState.explain;
  const input = h("textarea", {
    class: "coach-input",
    rows: "4",
    maxlength: "800",
    placeholder: tr("explainPlaceholder"),
    "aria-label": tr("explainPlaceholder"),
    oninput: (event) => {
      state.answer = event.target.value;
    }
  });
  input.value = state.answer;

  const submit = async () => {
    const answer = state.answer.trim();
    if (answer.split(/\s+/).filter(Boolean).length < 3) {
      state.error = tr("needWords");
      render();
      return;
    }
    state.busy = true;
    state.error = "";
    state.result = null;
    render();
    try {
      state.result = await FlipAI.grade({
        term: card.term,
        definition: card.definition,
        answer,
        language: card.language
      });
    } catch (error) {
      state.error = errorMessage(error);
    } finally {
      state.busy = false;
      render();
    }
  };

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      submit();
    }
  });

  const children = [
    h("p", { class: "coach-lead" }, tr("explainPrompt", { term: card.term })),
    input,
    h("button", {
      class: "coach-primary",
      type: "button",
      disabled: state.busy,
      onclick: submit
    }, svg(ICONS.spark), h("span", { text: state.busy ? tr("checking") : tr("check") }))
  ];

  if (state.busy) {
    children.push(thinking("grade"));
  }
  children.push(errorLine(state.error));

  if (state.result) {
    const { data } = state.result;
    const verdict = verdictFor(data.score);
    const canDecide = Boolean(bridge()?.canDecide?.());
    children.push(
      h(
        "div",
        { class: "coach-result" },
        h(
          "div",
          { class: "coach-score", "data-verdict": verdict },
          h("span", { class: "coach-score__ring", style: { "--score": String(data.score) } }, h("b", { text: String(data.score) })),
          h(
            "span",
            { class: "coach-score__copy" },
            h("strong", { text: tr(verdict === "pass" ? "verdictPass" : verdict === "close" ? "verdictClose" : "verdictMiss") }),
            h("span", { text: data.feedback })
          )
        ),
        data.covered.length
          ? h("div", { class: "coach-list coach-list--ok" }, h("small", { text: tr("covered") }), h("ul", {}, data.covered.map((item) => h("li", {}, svg(ICONS.check), h("span", { text: item })))))
          : null,
        data.missing.length
          ? h("div", { class: "coach-list coach-list--miss" }, h("small", { text: tr("missing") }), h("ul", {}, data.missing.map((item) => h("li", {}, svg(ICONS.cross), h("span", { text: item })))))
          : null,
        data.misconception
          ? h("p", { class: "coach-warning" }, h("strong", { text: tr("misconception") }), " ", data.misconception)
          : null,
        h(
          "div",
          { class: "coach-actions" },
          canDecide && verdict === "pass"
            ? h("button", { class: "coach-action coach-action--known", type: "button", onclick: () => decide("known") }, svg(ICONS.check), h("span", { text: tr("markKnown") }))
            : null,
          canDecide && verdict !== "pass"
            ? h("button", { class: "coach-action coach-action--review", type: "button", onclick: () => decide("review") }, h("span", { text: tr("reviewLater") }))
            : null,
          h("button", {
            class: "coach-action",
            type: "button",
            onclick: () => {
              state.result = null;
              state.answer = "";
              render();
              body.querySelector(".coach-input")?.focus();
            }
          }, h("span", { text: tr("tryAgain") }))
        ),
        sourceBadge(state.result)
      )
    );
  }

  return children;
};

const firstLetters = (definition) => definition
  .split(/(\s+)/)
  .map((token) => {
    if (/^\s+$/.test(token)) {
      return token;
    }
    const match = token.match(/^([\p{L}\p{N}])([\p{L}\p{N}'’-]*)(.*)$/u);
    if (!match || match[2].length < 2) {
      return token;
    }
    return `${match[1]}${"_".repeat(Math.min(match[2].length, 8))}${match[3]}`;
  })
  .join("");

const hasSpaces = (text) => /\s/.test(text.trim());

const renderHint = (card) => {
  const state = cardState.hint;
  const level = state.steps.length + 1;
  const labels = [tr("hint1"), tr("hint2"), tr("hint3")];

  const next = async () => {
    if (level === 3) {
      state.steps.push({
        level: 3,
        text: hasSpaces(card.definition) ? firstLetters(card.definition) : `${card.definition.slice(0, Math.ceil(card.definition.length / 3))}…`,
        local: true
      });
      render();
      body.scrollTop = body.scrollHeight;
      return;
    }
    const step = { level, text: "", result: null };
    state.steps.push(step);
    state.busy = true;
    state.error = "";
    render();
    body.scrollTop = body.scrollHeight;
    try {
      step.result = await FlipAI.hint({
        term: card.term,
        definition: card.definition,
        level,
        language: card.language
      }, (partial) => {
        step.text = partial;
        const bubble = body.querySelector(`[data-hint-level="${level}"] .coach-hint__text`);
        if (bubble) {
          bubble.textContent = partial;
        }
      });
      step.text = step.result.data;
    } catch (error) {
      state.steps.pop();
      state.error = errorMessage(error);
    } finally {
      state.busy = false;
      render();
      body.scrollTop = body.scrollHeight;
    }
  };

  return [
    h("p", { class: "coach-lead", text: tr("hintIntro") }),
    h(
      "ol",
      { class: "coach-ladder" },
      labels.map((label, index) => h(
        "li",
        {
          class: "coach-ladder__step",
          "data-state": index < state.steps.length ? "done" : index === state.steps.length ? "next" : "locked"
        },
        h("span", { text: String(index + 1) }),
        h("small", { text: label })
      ))
    ),
    state.steps.map((step) => h(
      "div",
      { class: "coach-hint", "data-hint-level": String(step.level) },
      h("small", { text: labels[step.level - 1] }),
      h("p", { class: "coach-hint__text", text: step.text || "…" }),
      step.local
        ? h("p", { class: "coach-source", "data-source": "local" }, svg(ICONS.bolt), h("span", { text: tr("hintLocal") }))
        : step.result
          ? sourceBadge(step.result)
          : null
    )),
    state.busy && !state.steps.at(-1)?.text ? thinking("hint") : null,
    errorLine(state.error),
    level <= 3
      ? h("button", { class: "coach-primary", type: "button", disabled: state.busy, onclick: next }, svg(ICONS.spark), h("span", { text: labels[level - 1] }))
      : null
  ];
};

const renderHook = (card) => {
  const state = cardState.hook;
  const make = async () => {
    state.busy = true;
    state.error = "";
    render();
    try {
      state.result = await FlipAI.hook({ term: card.term, definition: card.definition, language: card.language });
    } catch (error) {
      state.error = errorMessage(error);
    } finally {
      state.busy = false;
      render();
    }
  };

  const children = [h("p", { class: "coach-lead", text: tr("hookIntro") })];
  if (state.result) {
    const { data } = state.result;
    children.push(
      h(
        "div",
        { class: "coach-cards" },
        [["mnemonic", data.mnemonic], ["analogy", data.analogy], ["example", data.example]]
          .filter(([, value]) => value)
          .map(([key, value]) => h("article", { class: `coach-tile coach-tile--${key}` }, h("small", { text: tr(key) }), h("p", { text: value })))
      ),
      sourceBadge(state.result)
    );
  }
  if (state.busy) {
    children.push(thinking("hook"));
  }
  children.push(errorLine(state.error));
  children.push(h("button", { class: "coach-primary", type: "button", disabled: state.busy, onclick: make }, svg(ICONS.spark), h("span", { text: state.result ? tr("another") : tr("makeHook") })));
  return children;
};

const renderExam = (card) => {
  const state = cardState.exam;
  const make = async () => {
    state.busy = true;
    state.error = "";
    state.picked = null;
    render();
    try {
      const avoid = state.history.at(-1) || "";
      state.result = await FlipAI.exam({ term: card.term, definition: card.definition, language: card.language, avoid });
      state.history.push(state.result.data.scenario.slice(0, 160));
    } catch (error) {
      state.error = errorMessage(error);
    } finally {
      state.busy = false;
      render();
    }
  };

  const children = [h("p", { class: "coach-lead" }, tr("examIntro", { term: card.term }))];

  if (state.result && !state.busy) {
    const { data } = state.result;
    const letters = ["A", "B", "C", "D"];
    children.push(
      h(
        "div",
        { class: "coach-exam" },
        h("p", { class: "coach-exam__scenario", text: data.scenario }),
        h("p", { class: "coach-exam__question", text: data.question }),
        h(
          "div",
          { class: "coach-exam__options", role: "group" },
          data.options.map((option, index) => {
            const answered = state.picked !== null;
            const stateName = !answered
              ? "open"
              : index === data.answer
                ? "right"
                : index === state.picked
                  ? "wrong"
                  : "dim";
            return h(
              "button",
              {
                class: "coach-option",
                type: "button",
                "data-state": stateName,
                disabled: answered,
                onclick: () => {
                  state.picked = index;
                  render();
                }
              },
              h("b", { text: letters[index] }),
              h("span", { text: option })
            );
          })
        ),
        state.picked !== null
          ? h(
            "div",
            { class: "coach-exam__feedback", "data-correct": String(state.picked === data.answer) },
            h("strong", { text: state.picked === data.answer ? tr("correct") : tr("incorrect", { letter: letters[data.answer] }) }),
            h("p", { text: data.explanation })
          )
          : null
      ),
      sourceBadge(state.result)
    );
  }

  if (state.busy) {
    children.push(thinking("exam"));
  }
  children.push(errorLine(state.error));
  children.push(h("button", { class: "coach-primary", type: "button", disabled: state.busy, onclick: make }, svg(ICONS.spark), h("span", { text: state.result ? tr("nextQuestion") : tr("makeExam") })));
  return children;
};

const STOP_WORDS = new Set("a an the of to in on for and or by with from as at is are be that this which its it into over under than not all any each other their them his her our your can may must should will would de la el los las del y o en un una que por para con se su sus al lo le les des du et ou une der die das und oder ein eine im zu von mit".split(" "));

const tokens = (text) => new Set(
  String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .split(/[^\p{L}\p{N}]+/u)
    .filter((word) => word.length > 2 && !STOP_WORDS.has(word))
);

const overlap = (a, b) => {
  if (!a.size || !b.size) {
    return 0;
  }
  let shared = 0;
  for (const word of a) {
    if (b.has(word)) {
      shared += 1;
    }
  }
  return shared / Math.sqrt(a.size * b.size);
};

// Pairs that PMP candidates mix up, by English glossary term. Picked locally,
// with no AI call: a curated group first, then lexical similarity.
const CONFUSABLE_GROUPS = [
  ["Accuracy", "Precision"],
  ["Agile", "Adaptive Approach", "Predictive Approach", "Hybrid Approach", "Iterative Approach", "Incremental Approach"],
  ["Assumption", "Constraint"],
  ["Risk", "Issue", "Threat", "Opportunity", "Uncertainty"],
  ["Blocker", "Impediment", "Issue"],
  ["Ambiguity", "Uncertainty", "Complexity", "Volatility"],
  ["Budget", "Budget at Completion (BAC)", "Estimate", "Estimate at Completion (EAC)"],
  ["Contingency Reserve", "Management Reserve", "Reserve", "Contingency"],
  ["Change", "Change Control", "Change Management", "Change Control Board (CCB)"],
  ["Cost Variance (CV)", "Schedule Variance (SV)", "Variance at Completion (VAC)", "Variance"],
  ["Cost Performance Index (CPI)", "Schedule Performance Index (SPI)"],
  ["Earned Value (EV)", "Planned Value (PV)", "Actual Cost (AC)"],
  ["Estimate at Completion (EAC)", "Estimate to Complete (ETC)", "Forecast"],
  ["Crashing", "Fast Tracking"],
  ["Duration", "Effort"],
  ["Explicit Knowledge", "Tacit Knowledge", "Knowledge", "Lessons Learned"],
  ["External Dependencies", "Internal Dependencies", "Mandatory Dependency"],
  ["Fixed-Price Contract", "Cost-Reimbursable Contract", "Time and Materials (T&M) Contract", "Contract"],
  ["Epic", "Feature", "Use Case"],
  ["Iteration", "Sprint", "Timebox", "Release"],
  ["Iteration Planning", "Release Planning", "Iteration Plan"],
  ["Iteration Review", "Project Review", "Risk Review", "Status Meeting"],
  ["Kanban Board", "Task Board", "Cumulative Flow Diagram", "Burn Chart"],
  ["Burn Chart", "S-Curve Diagram", "Gantt Chart"],
  ["Life Cycle", "Product Life Cycle", "Project Life Cycle", "Project Phase"],
  ["Log", "Register", "Report"],
  ["Method", "Methodology", "Tailoring"],
  ["Metric", "Vanity Metric", "Performance Measurement", "Technical Performance Measures"],
  ["Milestone", "Milestone Schedule", "Phase Gate"],
  ["Minimum Viable Product (MVP)", "Prototype", "Release"],
  ["Monitoring", "Control", "Monitoring and Controlling Focus Area"],
  ["Objective", "Outcome", "Result", "Benefit"],
  ["Value", "Business Value", "Benefit", "Value Proposition"],
  ["Portfolio", "Program", "Project"],
  ["Portfolio Management", "Program Management", "Project Management", "Product Management"],
  ["Product Owner", "Project Manager", "Project Sponsor", "Project Lead"],
  ["Sponsor", "Stakeholder", "Steering Committee"],
  ["Product Scope", "Project Scope", "Scope", "Scope Creep"],
  ["Quality", "Conformance", "Validation"],
  ["Requirement", "Acceptance Criteria", "Specification", "Definition of Done (DoD)"],
  ["Risk Acceptance", "Risk Avoidance", "Risk Mitigation", "Risk Transference", "Risk Escalation"],
  ["Risk Exploiting", "Risk Enhancement", "Risk Sharing", "Risk Acceptance"],
  ["Risk Appetite", "Risk Threshold", "Risk Exposure", "Tolerance", "Threshold"],
  ["Validation", "Verification"],
  ["Roadmap", "Plan", "Strategic Plan", "Vision Statement"],
  ["Role", "Responsibility", "Authority"],
  ["Governance", "Project Governance", "Steering Committee"],
  ["Statement of Work (SOW)", "Contract", "Bid Documents", "Bidder Conference"],
  ["Self-Organizing Team", "Project Team", "Swarm", "Project Management Team"],
  ["Standard", "Regulations", "Template"],
  ["Throughput", "Flow", "Cadence"],
  ["Rework", "Waste"],
  ["Critical Path", "Network Path", "Schedule Model"],
  ["Story Point", "Estimate", "Wideband Delphi", "Function Point"],
  ["Dashboard", "Report", "Status Meeting"],
  ["Continuous Delivery", "Release", "Cadence"],
  ["Progressive Elaboration", "Iterative Approach", "Incremental Approach"],
  ["Monte Carlo Analysis/Simulation", "Expected Monetary Value (EMV)"],
  ["Initiating Focus Area", "Planning Focus Area", "Executing Focus Area", "Monitoring and Controlling Focus Area", "Closing Focus Area"],
  ["Organizational Breakdown Structure", "Risk Breakdown Structure (RBS)"],
  ["Project Management Office (PMO)", "Project Management Team", "Steering Committee"],
  ["Value Delivery System", "Value Proposition", "Portfolio"],
  ["Project Success", "Outcome", "Business Value"],
  ["Work Package", "Feature", "Epic"]
];

const groupKey = (term) => String(term || "").trim().toLowerCase();

const curatedPartners = (englishTerm) => {
  const key = groupKey(englishTerm);
  const partners = [];
  for (const group of CONFUSABLE_GROUPS) {
    const keys = group.map(groupKey);
    if (!keys.includes(key)) {
      continue;
    }
    for (const candidate of keys) {
      if (candidate !== key && !partners.includes(candidate)) {
        partners.push(candidate);
      }
    }
  }
  return partners;
};

const confusableConcepts = (card) => {
  const concepts = (bridge()?.getConcepts?.() || [])
    .filter((concept) => concept.term && concept.definition && concept.id !== card.conceptId && concept.term !== card.term);
  const partners = curatedPartners(card.englishTerm || card.term);
  const termTokens = tokens(card.term);
  const definitionTokens = tokens(card.definition);
  const ownTerm = groupKey(card.term);
  return concepts
    .map((concept) => {
      const curatedRank = partners.indexOf(groupKey(concept.englishTerm || concept.term));
      const otherTerm = groupKey(concept.term);
      const mentions = (ownTerm.length >= 5 && concept.definition.toLowerCase().includes(ownTerm))
        || (otherTerm.length >= 5 && card.definition.toLowerCase().includes(otherTerm));
      return {
        ...concept,
        score: (curatedRank >= 0 ? 100 - curatedRank : 0)
          + (mentions ? 3 : 0)
          + overlap(termTokens, tokens(concept.term)) * 3
          + overlap(definitionTokens, tokens(concept.definition))
      };
    })
    .sort((left, right) => right.score - left.score)
    .slice(0, 4);
};

const renderCompare = (card) => {
  const state = cardState.compare;
  const candidates = confusableConcepts(card);
  if (!state.other && candidates.length) {
    state.other = candidates[0];
  }

  const run = async () => {
    if (!state.other) {
      return;
    }
    state.busy = true;
    state.error = "";
    state.result = null;
    render();
    try {
      state.result = await FlipAI.compare({
        a: { term: card.term, definition: card.definition },
        b: { term: state.other.term, definition: state.other.definition },
        language: card.language
      });
    } catch (error) {
      state.error = errorMessage(error);
    } finally {
      state.busy = false;
      render();
    }
  };

  const children = [
    h("p", { class: "coach-lead" }, tr("compareIntro", { term: card.term })),
    h(
      "div",
      { class: "coach-chips", role: "radiogroup" },
      candidates.map((concept) => h("button", {
        class: "coach-chip",
        type: "button",
        role: "radio",
        "aria-checked": String(state.other?.id === concept.id),
        onclick: () => {
          state.other = concept;
          state.result = null;
          render();
        }
      }, concept.term))
    )
  ];

  if (state.result && !state.busy) {
    const { data } = state.result;
    children.push(
      h(
        "div",
        { class: "coach-compare" },
        h("p", { class: "coach-compare__summary", text: data.summary }),
        h(
          "table",
          { class: "coach-table" },
          h("thead", {}, h("tr", {}, h("th", { text: "" }), h("th", { text: card.term }), h("th", { text: state.other.term }))),
          h("tbody", {}, data.rows.map((row) => h("tr", {}, h("th", { scope: "row", text: row.aspect }), h("td", { text: row.a }), h("td", { text: row.b }))))
        ),
        data.tip ? h("article", { class: "coach-tile coach-tile--tip" }, h("small", { text: tr("tellApart") }), h("p", { text: data.tip })) : null,
        data.example ? h("article", { class: "coach-tile coach-tile--example" }, h("small", { text: tr("onProject") }), h("p", { text: data.example })) : null
      ),
      sourceBadge(state.result)
    );
  }

  if (state.busy) {
    children.push(thinking("compare"));
  }
  children.push(errorLine(state.error));
  if (candidates.length) {
    children.push(h("button", { class: "coach-primary", type: "button", disabled: state.busy || !state.other, onclick: run }, svg(ICONS.spark), h("span", { text: tr("compareRun") })));
  }
  return children;
};

const PANELS = {
  explain: renderExplain,
  hint: renderHint,
  hook: renderHook,
  exam: renderExam,
  compare: renderCompare
};

// ---------------------------------------------------------------------------
// Sheet
// ---------------------------------------------------------------------------

const updateLedger = () => {
  if (!ledgerLabel) {
    return;
  }
  const { device, cloud } = FlipAI.ledger();
  ledgerLabel.replaceChildren(svg(ICONS.shield), h("span", { text: tr("ledger", { device, cloud }) }));
  const route = FlipAI.getRoute();
  routeLabel.textContent = tr(route === "device" ? "routeDevice" : route === "cloud" ? "routeCloud" : "routeAuto");
};

const render = () => {
  if (!root || root.hidden) {
    return;
  }
  const card = syncCard();
  if (!card) {
    close();
    return;
  }
  termLabel.textContent = card.term;
  for (const [tab, button] of tabButtons) {
    button.textContent = tr(`tabs.${tab}`);
    button.setAttribute("aria-selected", String(tab === activeTab));
    button.tabIndex = tab === activeTab ? 0 : -1;
  }
  const focused = document.activeElement;
  const keepInputFocus = focused?.classList?.contains("coach-input");
  body.replaceChildren(...PANELS[activeTab](card).flat().filter(Boolean));
  if (keepInputFocus) {
    const input = body.querySelector(".coach-input");
    if (input) {
      input.focus();
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }
  updateLedger();
};

const decide = async (direction) => {
  const api = bridge();
  close();
  if (direction === "known") {
    await api?.markKnown?.();
  } else {
    await api?.markReview?.();
  }
};

const open = (tab = activeTab) => {
  if (!root) {
    build();
  }
  if (!getCard()) {
    return;
  }
  activeTab = TABS.includes(tab) ? tab : "explain";
  lastFocus = document.activeElement;
  root.hidden = false;
  document.body.classList.add("is-coach-open");
  try {
    localStorage.setItem(COACH_SEEN_KEY, "1");
  } catch {
    // ignore
  }
  trigger?.classList.remove("is-new");
  trigger?.setAttribute("aria-expanded", "true");
  render();
  requestAnimationFrame(() => {
    root.classList.add("is-open");
    (body.querySelector(".coach-input") || tabButtons.get(activeTab))?.focus({ preventScroll: true });
  });
};

const close = () => {
  if (!root || root.hidden) {
    return;
  }
  root.classList.remove("is-open");
  root.hidden = true;
  document.body.classList.remove("is-coach-open");
  trigger?.setAttribute("aria-expanded", "false");
  if (lastFocus && document.contains(lastFocus)) {
    lastFocus.focus({ preventScroll: true });
  }
};

const build = () => {
  termLabel = h("h2", { class: "coach-term", id: "coachTitle" });
  body = h("div", { class: "coach-body" });
  ledgerLabel = h("span", { class: "coach-ledger" });
  routeLabel = h("button", {
    class: "coach-route",
    type: "button",
    onclick: () => {
      const order = ["auto", "device", "cloud"];
      const next = order[(order.indexOf(FlipAI.getRoute()) + 1) % order.length];
      FlipAI.setRoute(next);
      render();
    }
  });

  const tablist = h("div", { class: "coach-tabs", role: "tablist", "aria-label": tr("eyebrow") });
  tabButtons = new Map();
  for (const tab of TABS) {
    const button = h("button", {
      class: "coach-tab",
      type: "button",
      role: "tab",
      "data-tab": tab,
      onclick: () => {
        activeTab = tab;
        render();
      }
    });
    tabButtons.set(tab, button);
    tablist.append(button);
  }
  tablist.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
      return;
    }
    event.preventDefault();
    const rtl = document.documentElement.dir === "rtl";
    const step = (event.key === "ArrowRight") !== rtl ? 1 : -1;
    activeTab = TABS[(TABS.indexOf(activeTab) + step + TABS.length) % TABS.length];
    render();
    tabButtons.get(activeTab)?.focus();
  });

  sheet = h(
    "section",
    { class: "coach-sheet", role: "dialog", "aria-modal": "true", "aria-labelledby": "coachTitle" },
    h("span", { class: "coach-grip", "aria-hidden": "true" }),
    h(
      "header",
      { class: "coach-header" },
      h("div", { class: "coach-heading" }, h("small", { class: "coach-eyebrow" }, svg(ICONS.spark), h("span", { "data-coach-eyebrow": "", text: tr("eyebrow") })), termLabel),
      h("button", { class: "coach-close", type: "button", "aria-label": tr("close"), onclick: close }, svg(ICONS.close))
    ),
    tablist,
    body,
    h("footer", { class: "coach-footer" }, ledgerLabel, routeLabel)
  );

  root = h("div", { class: "coach", hidden: true }, h("div", { class: "coach-backdrop", onclick: close }), sheet);
  root.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (event.key === "Tab") {
      const focusable = [...sheet.querySelectorAll("button:not([disabled]), textarea, [tabindex='0']")].filter((element) => element.offsetParent !== null);
      if (!focusable.length) {
        return;
      }
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
  document.body.append(root);
};

const buildTrigger = () => {
  const nav = document.querySelector(".bottom-nav");
  if (!nav || nav.querySelector(".coach-trigger")) {
    return;
  }
  trigger = h(
    "button",
    {
      class: "coach-trigger",
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": "false",
      onclick: () => open()
    },
    svg(ICONS.spark),
    h("span", { class: "coach-trigger__label" })
  );
  let seen = false;
  try {
    seen = localStorage.getItem(COACH_SEEN_KEY) === "1";
  } catch {
    seen = false;
  }
  trigger.classList.toggle("is-new", !seen);
  const languageTrigger = nav.querySelector("[data-language-menu-trigger]");
  nav.insertBefore(trigger, languageTrigger || null);
  relabelTrigger();
};

const relabelTrigger = () => {
  if (!trigger) {
    return;
  }
  trigger.querySelector(".coach-trigger__label").textContent = tr("coach");
  trigger.setAttribute("aria-label", tr("openCoach"));
  trigger.title = tr("openCoach");
};

// ---------------------------------------------------------------------------
// Profile panel: device status, per-language routing, routing switch, ledger
// ---------------------------------------------------------------------------

let panel = null;
let panelBusy = false;
let downloadWatch = 0;

const deviceLabel = (availability) => ({
  available: tr("deviceReady"),
  downloadable: tr("deviceDownloadable"),
  downloading: tr("deviceDownloading"),
  unavailable: tr("deviceUnavailable"),
  unsupported: tr("deviceUnsupported")
}[availability] || tr("deviceUnavailable"));

const renderPanel = async () => {
  if (!panel || panelBusy) {
    return;
  }
  panelBusy = true;
  try {
    const language = currentLanguage();
    const [info, matrix] = await Promise.all([FlipAI.status(language), FlipAI.languageMatrix()]);
    const downloading = info.device === "downloading";
    const progress = h("span", { class: "ai-panel__progress", hidden: !downloading, "data-indeterminate": String(downloading) }, h("i"));
    const statusText = h("strong", { text: `Gemini Nano · ${deviceLabel(info.device)}` });
    const showProgress = (value) => {
      const pct = Math.max(0, Math.min(100, Math.round((Number(value) || 0) * 100)));
      progress.hidden = false;
      progress.dataset.indeterminate = "false";
      progress.firstChild.style.width = `${pct}%`;
      statusText.textContent = `Gemini Nano · ${deviceLabel("downloading")} ${pct}%`;
    };
    const startDownload = async (button) => {
      if (button) {
        button.disabled = true;
        button.textContent = deviceLabel("downloading");
      }
      progress.hidden = false;
      statusText.textContent = `Gemini Nano · ${deviceLabel("downloading")}`;
      try {
        await FlipAI.downloadDeviceModel(showProgress);
      } catch (error) {
        if (button) {
          button.disabled = false;
          button.textContent = errorMessage(error);
        }
      }
      renderPanel();
    };
    const download = info.device === "downloadable"
      ? h("button", { class: "ai-panel__download", type: "button", onclick: (event) => startDownload(event.currentTarget) }, tr("download"))
      : null;
    if (downloading) {
      // Chrome is already fetching the model (for example after a reload): watch it until it is ready.
      clearTimeout(downloadWatch);
      downloadWatch = setTimeout(async () => {
        if ((await FlipAI.deviceAvailability(language)) !== "downloading") renderPanel();
        else if (panel?.isConnected) renderPanel();
      }, 4000);
    }

    const route = info.route;
    const routes = [["auto", tr("routeAuto")], ["device", tr("routeDevice")], ["cloud", tr("routeCloud")]];
    const tasks = [["grade", tr("taskGrade")], ["hint", tr("taskHint")], ["hook", tr("taskHook")], ["define", tr("taskDefine")], ["exam", tr("taskExam")], ["compare", tr("taskCompare")]];
    const languageNames = { en: "EN", es: "ES", hi: "HI", zh: "ZH", fr: "FR", de: "DE", ja: "JA", ko: "KO", ar: "AR" };

    panel.replaceChildren(
      h("div", { class: "profile-section-heading" }, h("strong", { text: tr("panelTitle") }), h("span", { text: tr("panelMeta") })),
      h(
        "div",
        { class: "ai-panel__card" },
        h(
          "div",
          { class: "ai-panel__device", "data-availability": info.device },
          svg(ICONS.chip),
          h("span", {}, h("small", { text: tr("deviceModel") }), statusText),
          download
        ),
        progress,
        info.device === "unavailable" || info.device === "unsupported"
          ? h("p", { class: "ai-panel__help", text: tr(info.device === "unsupported" ? "deviceUnsupportedHelp" : "deviceUnavailableHelp") })
          : null,
        h("small", { class: "ai-panel__label", text: tr("languagesTitle") }),
        h(
          "div",
          { class: "ai-panel__langs" },
          FlipAI.languages.map((code) => {
            const onDevice = matrix[code] === "available";
            return h(
              "span",
              { class: "ai-panel__lang", "data-where": onDevice ? "device" : "cloud", title: onDevice ? tr("langDevice") : tr("langCloud") },
              h("b", { text: languageNames[code] }),
              svg(onDevice ? ICONS.chip : ICONS.cloud)
            );
          })
        ),
        h("small", { class: "ai-panel__label", text: tr("routingTitle") }),
        h(
          "div",
          { class: "ai-panel__routes", role: "radiogroup", "aria-label": tr("routingTitle") },
          routes.map(([value, label]) => h("button", {
            type: "button",
            role: "radio",
            "aria-checked": String(route === value),
            onclick: () => {
              FlipAI.setRoute(value);
              renderPanel();
            }
          }, label))
        ),
        h("p", { class: "ai-panel__help", text: tr("routingHelp") }),
        h(
          "ul",
          { class: "ai-panel__tasks" },
          tasks.map(([task, label]) => {
            const mode = FlipAI.taskMode(task);
            const device = mode === "prefer_on_device" || mode === "only_on_device";
            return h("li", { "data-where": device ? "device" : "cloud" }, svg(device ? ICONS.chip : ICONS.cloud), h("span", { text: label }), h("small", { text: device ? tr("prefDevice") : tr("prefCloud") }));
          })
        ),
        h(
          "div",
          { class: "ai-panel__ledger" },
          svg(ICONS.shield),
          h("span", { text: tr("privacyLine", { device: info.ledger.device, cloud: info.ledger.cloud }) }),
          h("button", {
            type: "button",
            onclick: () => {
              FlipAI.resetLedger();
              renderPanel();
            }
          }, tr("reset"))
        ),
        h(
          "p",
          { class: "ai-panel__meta" },
          h("span", { text: tr("security", { mode: info.appCheck === "recaptcha-enterprise" ? tr("securityRecaptcha") : info.appCheck === "debug-token" ? tr("securityDebug") : tr("securityOff") }) }),
          h("span", { text: tr("cloudModel", { model: info.cloudModel }) })
        )
      )
    );
  } finally {
    panelBusy = false;
  }
};

const buildPanel = () => {
  const profile = document.querySelector(".profile-view .profile-panel");
  if (!profile || profile.querySelector(".ai-panel")) {
    return;
  }
  panel = h("section", { class: "ai-panel", "aria-label": "Hybrid AI" });
  const anchor = profile.querySelector("[data-profile-achievements]");
  if (anchor) {
    anchor.before(panel);
  } else {
    profile.append(panel);
  }
  const view = document.querySelector(".profile-view");
  new MutationObserver(() => {
    if (!view.hidden) {
      renderPanel();
    }
  }).observe(view, { attributes: true, attributeFilter: ["hidden"] });
  if (!view.hidden) {
    renderPanel();
  }
};

// ---------------------------------------------------------------------------
// Wiring
// ---------------------------------------------------------------------------

const init = () => {
  if (!FlipAI.isConfigured()) {
    return;
  }
  document.body.classList.add("has-ai-coach");
  buildTrigger();
  buildPanel();

  window.addEventListener("flipcards:card", () => {
    if (root && !root.hidden) {
      render();
    }
  });
  window.addEventListener("flipcards:study", (event) => {
    if (!event.detail?.active) {
      close();
    }
  });
  window.addEventListener("flipcards:language", () => {
    relabelTrigger();
    root?.querySelector("[data-coach-eyebrow]")?.replaceChildren(tr("eyebrow"));
    root?.querySelector(".coach-close")?.setAttribute("aria-label", tr("close"));
    render();
    renderPanel();
  });
  window.addEventListener("flipai:ledger", updateLedger);
  window.addEventListener("flipai:route", updateLedger);
  window.addEventListener("flipai:network", () => renderPanel());
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

export { open as openCoach, close as closeCoach };
