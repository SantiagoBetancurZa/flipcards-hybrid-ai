import { readFile, writeFile } from "node:fs/promises";

const fromRoot = (path) => new URL(`../${path}`, import.meta.url);
const sourcePath = "data/standards/pmbok-8.json";
const outputPath = "data/standards/pmbok-8.translations.json";
const splitMarker = "@@FLIPCARDS_SPLIT@@";
const targets = [
  { appLanguage: "hi", translateLanguage: "hi" },
  { appLanguage: "zh", translateLanguage: "zh-CN" },
  { appLanguage: "fr", translateLanguage: "fr" },
  { appLanguage: "de", translateLanguage: "de" },
  { appLanguage: "ja", translateLanguage: "ja" },
  { appLanguage: "ko", translateLanguage: "ko" },
  { appLanguage: "ar", translateLanguage: "ar" }
];
const chunkSize = 18;
const termOverrides = {
  agile: { hi: "एजाइल" },
  artifact: { hi: "आर्टिफैक्ट", zh: "工件" },
  authority: { zh: "职权" },
  benefit: { hi: "लाभ", zh: "收益" },
  blocker: { hi: "अवरोधक", zh: "阻碍事项" },
  "burn-chart": { zh: "燃尽图" },
  change: { zh: "变更" },
  "change-control": { hi: "परिवर्तन नियंत्रण" },
  "closing-focus-area": { hi: "समापन फोकस क्षेत्र", zh: "收尾焦点领域" },
  contingency: { zh: "应急事项" },
  crashing: { hi: "क्रैशिंग", zh: "赶工" },
  "critical-path": { hi: "क्रिटिकल पाथ" },
  "definition-of-done-dod": { hi: "पूर्णता की परिभाषा (DoD)", zh: "完成定义 (DoD)" },
  effort: { hi: "कार्य प्रयास", zh: "工作量" },
  epic: { hi: "एपिक" },
  "estimate-to-complete-etc": { hi: "पूरा करने का अनुमान (ETC)", zh: "完工尚需估算 (ETC)" },
  "executing-focus-area": { hi: "निष्पादन फोकस क्षेत्र", zh: "执行焦点领域" },
  feature: { hi: "फीचर", zh: "特性" },
  flow: { zh: "流程" },
  "function-point": { zh: "功能点" },
  "incremental-approach": { zh: "增量方法" },
  "initiating-focus-area": { hi: "आरंभ फोकस क्षेत्र", zh: "启动焦点领域" },
  "iteration-review": { zh: "迭代评审" },
  log: { hi: "लॉग" },
  metric: { hi: "मेट्रिक", zh: "指标" },
  milestone: { hi: "माइलस्टोन" },
  "milestone-schedule": { hi: "माइलस्टोन शेड्यूल", zh: "里程碑进度计划" },
  modeling: { zh: "建模" },
  "monitoring-and-controlling-focus-area": { hi: "निगरानी और नियंत्रण फोकस क्षेत्र", zh: "监控焦点领域" },
  objective: { zh: "目标" },
  outcome: { zh: "成果" },
  "phase-gate": { zh: "阶段关口" },
  product: { zh: "产品" },
  program: { zh: "项目集" },
  "program-management": { zh: "项目集管理" },
  quality: { zh: "质量" },
  register: { hi: "रजिस्टर", zh: "登记册" },
  release: { hi: "रिलीज़" },
  report: { hi: "रिपोर्ट" },
  requirement: { zh: "需求" },
  rework: { hi: "पुनःकार्य" },
  "risk-exposure": { hi: "जोखिम अनावरण", zh: "风险敞口" },
  "schedule-model": { zh: "进度模型" },
  scope: { zh: "范围" },
  specification: { zh: "规范" },
  sprint: { hi: "स्प्रिंट" },
  standard: { zh: "标准" },
  tailoring: { hi: "टेलरिंग", zh: "裁剪" },
  threat: { hi: "खतरा" },
  threshold: { hi: "सीमा" },
  tolerance: { zh: "容差" },
  "use-case": { hi: "उपयोग मामला", zh: "用例" },
  validation: { hi: "वैधकरण", zh: "确认" },
  verification: { zh: "验证" },
  waste: { hi: "अपव्यय", zh: "浪费" }
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const translateChunk = async (texts, targetLanguage) => {
  const params = new URLSearchParams({
    client: "gtx",
    sl: "en",
    tl: targetLanguage,
    dt: "t",
    q: texts.join(`\n${splitMarker}\n`)
  });
  const response = await fetch(`https://translate.googleapis.com/translate_a/single?${params}`);

  if (!response.ok) {
    throw new Error(`Translation failed with HTTP ${response.status}`);
  }

  const data = await response.json();
  const translated = (data[0] ?? [])
    .map((part) => part[0] ?? "")
    .join("")
    .split(splitMarker)
    .map((text) => text.trim());

  if (translated.length !== texts.length) {
    throw new Error(`Expected ${texts.length} translations, received ${translated.length}`);
  }

  return translated;
};

const translateTexts = async (texts, targetLanguage) => {
  const translated = [];

  for (let index = 0; index < texts.length; index += chunkSize) {
    const chunk = texts.slice(index, index + chunkSize);
    translated.push(...await translateChunk(chunk, targetLanguage));
    await sleep(80);
  }

  return translated;
};

const standard = JSON.parse(await readFile(fromRoot(sourcePath), "utf8"));
const concepts = {};

for (const concept of standard.concepts) {
  concepts[concept.id] = {
    localizedTerms: {},
    definitions: {}
  };
}

for (const target of targets) {
  const termTranslations = await translateTexts(
    standard.concepts.map((concept) => concept.term),
    target.translateLanguage
  );
  const definitionTranslations = await translateTexts(
    standard.concepts.map((concept) => concept.definitions.en),
    target.translateLanguage
  );

  standard.concepts.forEach((concept, index) => {
    concepts[concept.id].localizedTerms[target.appLanguage] =
      termOverrides[concept.id]?.[target.appLanguage] || termTranslations[index];
    concepts[concept.id].definitions[target.appLanguage] = definitionTranslations[index];
  });
}

await writeFile(fromRoot(outputPath), `${JSON.stringify({
  standardId: standard.id,
  sourceLanguage: "en",
  concepts
}, null, 2)}\n`);
