import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import { execFileSync } from "node:child_process";

const readJson = (path) => JSON.parse(fs.readFileSync(path, "utf8"));

test("PWA manifest uses relative launch scope for Android packaging", () => {
  const manifest = readJson("manifest.json");
  const assetlinks = readJson(".well-known/assetlinks.json");
  const serviceWorker = fs.readFileSync("sw.js", "utf8");

  assert.equal(manifest.start_url, ".");
  assert.equal(manifest.scope, "./");
  assert.ok(manifest.icons.every((icon) => icon.type === "image/png"));
  assert.ok(manifest.icons.some((icon) => icon.purpose?.includes("maskable")));
  assert.equal(assetlinks[0].target.package_name, "app.flipcards.mobile");
  assert.ok(assetlinks[0].target.sha256_cert_fingerprints[0].includes(":"));
  assert.match(serviceWorker, /request\.cache === "no-store"/);
  assert.match(serviceWorker, /url\.pathname\.startsWith\("\/data\/standards\/"\)/);
  assert.match(serviceWorker, /if \(shouldBypassCache\(request, url\)\) \{[\s\S]*event\.respondWith\(fetch\(request\)\)/);
});

test("repo ignore files protect local secrets and tooling artifacts", () => {
  const gitignore = fs.readFileSync(".gitignore", "utf8");
  const vercelignore = fs.readFileSync(".vercelignore", "utf8");

  for (const pattern of [".env", ".env.*", "__pycache__/", ".claude/", "dist/", "android-twa/signing.properties"]) {
    assert.match(gitignore, new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }

  assert.match(vercelignore, /\.claude\//);
  assert.match(vercelignore, /tests\//);
});

test("first-run study copy guides cloze and profile empty states", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.match(html, /appicon-2026-05-28/);
  assert.doesNotMatch(script, /Completa los huecos\. La app valida cada palabra al escribir\./);
  assert.doesNotMatch(script, /Fill the blanks\. The app validates each word as you type\./);
  assert.doesNotMatch(script, /setStudyFeedback\(t\("clozeHelp"\)/);
  assert.match(script, /Complete one session to fill your library\./);
  assert.doesNotMatch(html, /class="home-header"/);
  assert.doesNotMatch(html, /welcome-view/);
  assert.doesNotMatch(html, /data-welcome-start/);
  assert.doesNotMatch(html, /data-home-today/);
  assert.doesNotMatch(html, /data-home-action="standard"/);
  assert.doesNotMatch(html, /home-action--primary/);
  assert.doesNotMatch(html, /data-creator-title/);
  assert.doesNotMatch(html, /class="view-title"/);
  assert.doesNotMatch(script, /homeToday/);
  assert.doesNotMatch(script, /welcomeSeen/);
  assert.doesNotMatch(script, /showWelcome/);
  assert.doesNotMatch(script, /homeStandardAction/);
  assert.doesNotMatch(script, /creatorTitle/);
  assert.doesNotMatch(script, /createCardView/);
  assert.match(script, /removeLegacyFrontTitle/);
  assert.doesNotMatch(styles, /\.home-header/);
  assert.doesNotMatch(styles, /\.welcome-/);
  assert.doesNotMatch(styles, /\.home-action--primary/);
  assert.doesNotMatch(styles, /\.view-title/);
  assert.doesNotMatch(html, /flip-card__hint/);
  assert.doesNotMatch(html, /data-front-context/);
  assert.doesNotMatch(script, /tapToStudy/);
  assert.doesNotMatch(script, /frontContext/);
  assert.doesNotMatch(styles, /\.flip-card__hint/);
  assert.doesNotMatch(styles, /\.flip-card__context/);
  assert.match(styles, /\.study-feedback\s*{[^}]*clip-path:\s*inset\(50%\)/s);
  assert.match(styles, /\.study-feedback\.is-help/);
  assert.match(styles, /\.study-status\s*{[^}]*clip-path:\s*inset\(50%\)/s);
  assert.doesNotMatch(styles, /\.study-status\s*{[^}]*text-transform:\s*uppercase/s);
  assert.match(styles, /\.library-empty/);
  assert.match(html, /class="profile-avatar"/);
  assert.match(html, /data-profile-calendar-title/);
  assert.match(html, /data-profile-week/);
  assert.match(html, /data-reset-memory/);
  assert.match(html, /data-reset-memory-label/);
  assert.match(html, /data-theme-toggle/);
  assert.match(html, /role="switch"/);
  assert.match(script, /profileLearnerName: "FlipCards Learner"/);
  assert.match(script, /themeStorageKey = "flipcards\.theme"/);
  assert.match(script, /resetMemory: "Reiniciar memoria"/);
  assert.match(script, /const studyMemoryStorageKeys = \[[\s\S]*completedStorageKey[\s\S]*standardProgressKey[\s\S]*standardReviewProgressKey[\s\S]*standardStreakKey[\s\S]*wordMasteryProgressKey[\s\S]*\]/);
  assert.match(script, /const removeStoredJson = \(key\) => \{[\s\S]*memoryStorage\.delete\(key\);[\s\S]*localStorage\.removeItem\(key\)/);
  assert.match(script, /const resetStudyMemory = \(\) => \{[\s\S]*studyMemoryStorageKeys\.forEach\(removeStoredJson\);[\s\S]*renderProfile\(\);[\s\S]*setStudyFeedback\(t\("resetMemoryDone"\), "help"\)/);
  assert.match(script, /resetMemoryButton\?\.addEventListener\("click"[\s\S]*window\.confirm\(t\("resetMemoryConfirm"\)\)[\s\S]*resetStudyMemory\(\)/);
  assert.match(script, /const normalizeTheme = \(theme\) =>/);
  assert.match(script, /document\.documentElement\.dataset\.theme = selectedTheme/);
  assert.match(script, /themeToggle\?\.addEventListener\("click"/);
  assert.match(script, /const getCurrentWeekDates = \(\) =>/);
  assert.match(script, /const renderProfileCalendar = \(completedConcepts\) =>/);
  assert.match(script, /profileWeek\.replaceChildren\(\)/);
  assert.match(styles, /:root\[data-theme="dark"\]\s*{[^}]*--page:\s*#0d1117/s);
  assert.match(styles, /\.theme-toggle/);
  assert.match(styles, /\.theme-toggle\[aria-checked="true"\] \.theme-toggle__switch/);
  assert.match(styles, /\.memory-reset/);
  assert.match(styles, /\.memory-reset__icon svg\s*{[^}]*stroke:\s*currentColor/s);
  assert.match(styles, /\.profile-identity/);
  assert.match(styles, /\.profile-calendar-card/);
  assert.match(styles, /\.profile-week\s*{[^}]*grid-template-columns:\s*repeat\(7,\s*minmax\(0,\s*1fr\)\)/s);
  assert.match(styles, /\.profile-week__day\.is-today strong/);
});

test("standard catalog contains the 204 project management glossary concepts", () => {
	const index = readJson("data/standards/index.json");
	const pmbok = readJson("data/standards/pmbok-8.json");
	const pmbokTranslations = readJson("data/standards/pmbok-8.translations.json");
	const html = fs.readFileSync("index.html", "utf8");
	const script = fs.readFileSync("script.js", "utf8");
	const bundle = fs.readFileSync("data/standards/bundle.js", "utf8");
	const bundledPayload = JSON.parse(bundle.match(/window\.FLIPCARDS_STANDARDS_BUNDLE = (.*);\n$/s)[1]);
  const expectedTerms = [
    "Acceptance Criteria",
    "Accuracy",
    "Actual Cost (AC)",
    "Adaptive Approach",
    "Agile",
    "Ambiguity",
    "Artifact",
    "Assumption",
    "Authority",
    "Baseline",
    "Benefit",
    "Bid Documents",
    "Bidder Conference",
    "Blocker",
    "Budget",
    "Budget at Completion (BAC)",
    "Burn Chart",
    "Business Value",
    "Cadence",
    "Change",
    "Change Control",
    "Change Control Board (CCB)",
    "Change Management",
    "Closing Focus Area",
    "Complexity",
    "Confirmation Bias",
    "Conformance",
    "Constraint",
    "Contingency",
    "Contingency Reserve",
    "Continuous Delivery",
    "Contract",
    "Control",
    "Cost Performance Index (CPI)",
    "Cost Variance (CV)",
    "Cost-Reimbursable Contract",
    "Crashing",
    "Criteria",
    "Critical Path",
    "Cumulative Flow Diagram",
    "Dashboard",
    "Definition of Done (DoD)",
    "Duration",
    "Earned Value (EV)",
    "Effort",
    "Epic",
    "Estimate",
    "Estimate at Completion (EAC)",
    "Estimate to Complete (ETC)",
    "Executing Focus Area",
    "Expected Monetary Value (EMV)",
    "Explicit Knowledge",
    "External Dependencies",
    "Fast Tracking",
    "Feature",
    "Fixed-Price Contract",
    "Flow",
    "Forecast",
    "Function Point",
    "Gantt Chart",
    "Governance",
    "Histogram",
    "Hybrid Approach",
    "Impediment",
    "Incremental Approach",
    "Initiating Focus Area",
    "Internal Dependencies",
    "Issue",
    "Iteration",
    "Iteration Plan",
    "Iteration Planning",
    "Iteration Review",
    "Iterative Approach",
    "Kanban Board",
    "Knowledge",
    "Lessons Learned",
    "Life Cycle",
    "Log",
    "Management Reserve",
    "Mandatory Dependency",
    "Method",
    "Methodology",
    "Metric",
    "Milestone",
    "Milestone Schedule",
    "Minimum Viable Product (MVP)",
    "Modeling",
    "Monitoring",
    "Monitoring and Controlling Focus Area",
    "Monte Carlo Analysis/Simulation",
    "Net Promoter Score",
    "Network Path",
    "Objective",
    "Opportunity",
    "Organizational Breakdown Structure",
    "Outcome",
    "Performance Measurement",
    "Phase Gate",
    "Plan",
    "Planned Value (PV)",
    "Planning Focus Area",
    "Portfolio",
    "Portfolio Management",
    "Precision",
    "Predictive Approach",
    "Prioritization Matrix",
    "Product",
    "Product Life Cycle",
    "Product Management",
    "Product Owner",
    "Product Scope",
    "Program",
    "Program Management",
    "Progressive Elaboration",
    "Project",
    "Project Calendar",
    "Project Governance",
    "Project Lead",
    "Project Life Cycle",
    "Project Management",
    "Project Management Body of Knowledge",
    "Project Management Focus Areas",
    "Project Management Office (PMO)",
    "Project Management Team",
    "Project Manager",
    "Project Phase",
    "Project Review",
    "Project Scope",
    "Project Sponsor",
    "Project Success",
    "Project Team",
    "Prototype",
    "Quality",
    "Register",
    "Regulations",
    "Release",
    "Release Planning",
    "Report",
    "Requirement",
    "Reserve",
    "Responsibility",
    "Result",
    "Rework",
    "Risk",
    "Risk Acceptance",
    "Risk Appetite",
    "Risk Avoidance",
    "Risk Breakdown Structure (RBS)",
    "Risk Enhancement",
    "Risk Escalation",
    "Risk Exploiting",
    "Risk Exposure",
    "Risk Mitigation",
    "Risk Review",
    "Risk Sharing",
    "Risk Threshold",
    "Risk Transference",
    "Roadmap",
    "Role",
    "S-Curve Diagram",
    "Schedule Model",
    "Schedule Performance Index (SPI)",
    "Schedule Variance (SV)",
    "Scope",
    "Scope Creep",
    "Self-Organizing Team",
    "Specification",
    "Sponsor",
    "Sprint",
    "Stakeholder",
    "Standard",
    "Statement of Work (SOW)",
    "Status Meeting",
    "Steering Committee",
    "Story Point",
    "Strategic Plan",
    "Swarm",
    "Tacit Knowledge",
    "Tailoring",
    "Task Board",
    "Technical Performance Measures",
    "Template",
    "Threat",
    "Threshold",
    "Throughput",
    "Time and Materials (T&M) Contract",
    "Timebox",
    "Tolerance",
    "Triple Bottom Line",
    "Uncertainty",
    "Use Case",
    "Validation",
    "Value",
    "Value Delivery System",
    "Value Proposition",
    "Vanity Metric",
    "Variance",
    "Variance at Completion (VAC)",
    "Verification",
    "Vision Statement",
    "Volatility",
    "Waste",
    "Wideband Delphi",
    "Work Package",
  ];

	  assert.deepEqual(index.map(({ id }) => id), ["pmbok-8"]);
	  assert.equal(index[0].path, "data/standards/pmbok-8.json");
	  assert.equal(index[0].translationsPath, "data/standards/pmbok-8.translations.json");
	  assert.equal(pmbok.shortName, "PM Glossary");
	  assert.deepEqual(pmbok.concepts.map(({ term }) => term), expectedTerms);
	  assert.equal(new Set(pmbok.concepts.map(({ id }) => id)).size, expectedTerms.length);
	  assert.equal(new Set(pmbok.concepts.map(({ term }) => term)).size, expectedTerms.length);
	  assert.ok(pmbok.concepts.every(({ spanishTerm }) => spanishTerm?.trim()));
	  assert.ok(pmbok.concepts.every(({ definitions }) => definitions?.es?.trim() && definitions?.en?.trim()));
	  assert.equal(pmbokTranslations.standardId, "pmbok-8");
	  assert.equal(Object.keys(pmbokTranslations.concepts).length, expectedTerms.length);
	  const expectedStudyLanguages = ["hi", "zh", "fr", "de", "ja", "ko", "ar"];
	  assert.ok(pmbok.concepts.every(({ id }) => {
	    const item = pmbokTranslations.concepts[id];
	    return expectedStudyLanguages.every((language) =>
	      item?.localizedTerms?.[language]?.trim()
	      && item?.definitions?.[language]?.trim()
	    );
	  }));
	  assert.equal(
	    pmbokTranslations.concepts["acceptance-criteria"].localizedTerms.hi,
	    "स्वीकृति मानदंड"
	  );
	  assert.equal(
	    pmbokTranslations.concepts["acceptance-criteria"].localizedTerms.zh,
	    "验收标准"
	  );
	  assert.equal(
	    pmbokTranslations.concepts["acceptance-criteria"].localizedTerms.fr,
	    "Critères d'acceptation"
	  );
	  assert.equal(
	    pmbokTranslations.concepts["acceptance-criteria"].localizedTerms.de,
	    "Akzeptanzkriterien"
	  );
	  assert.equal(
	    pmbokTranslations.concepts["acceptance-criteria"].localizedTerms.ja,
	    "合格基準"
	  );
	  assert.equal(
	    pmbokTranslations.concepts["acceptance-criteria"].localizedTerms.ko,
	    "수락 기준"
	  );
	  assert.equal(
	    pmbokTranslations.concepts["acceptance-criteria"].localizedTerms.ar,
	    "معايير القبول"
	  );
	  assert.match(html, />PM Glossary</);
	  assert.match(html, /data\/standards\/bundle\.js\?v=original-definitions-2026-11-27[\s\S]*script\.js\?v=hybrid-ai-2026-11-26/);
	  assert.match(bundle, /window\.FLIPCARDS_STANDARDS_BUNDLE = /);
	  assert.match(bundle, /"path":"data\/standards\/pmbok-8\.json"/);
	  assert.match(bundle, /"translationsPath":"data\/standards\/pmbok-8\.translations\.json"/);
	  assert.deepEqual(bundledPayload.standards["data/standards/pmbok-8.json"], pmbok);
	  assert.deepEqual(
	    bundledPayload.translations["data/standards/pmbok-8.translations.json"],
	    pmbokTranslations
	  );
	  assert.equal(
	    bundledPayload.translations["data/standards/pmbok-8.translations.json"].concepts["acceptance-criteria"].definitions.ja,
	    pmbokTranslations.concepts["acceptance-criteria"].definitions.ja
	  );
	  assert.match(bundle, /"term":"Work Package"/);
	  assert.match(script, /const bundledStandardsPayload = window\.FLIPCARDS_STANDARDS_BUNDLE/);
	  assert.match(script, /const mergeStandardTranslations = \(standard, translationPack\) =>/);
	  assert.match(script, /const loadBundledStandards = \(\) => \{/);
	  assert.match(script, /bundledStandardsPayload\.translations\?\.\[entry\.translationsPath\]/);
	  assert.match(script, /const loadStandardTranslationPack = async \(entry\) =>/);
	  assert.match(script, /window\.location\.protocol === "file:" && bundledStandards\.length/);
	  assert.match(script, /pruneUnavailableStandardStorage/);
  assert.equal(fs.existsSync("data/standards/disciplined-agile.json"), false);
  assert.equal(fs.existsSync("data/standards/sebok.json"), false);
});

test("study navigation stays in the top chrome without answer buttons", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.match(html, /<nav class="bottom-nav"[\s\S]*class="language-switch"[\s\S]*<\/nav>/);
  assert.doesNotMatch(html, /class="card-tools"/);
  assert.doesNotMatch(html, /data-check-slots/);
  assert.doesNotMatch(html, /data-preview-definition/);
  assert.doesNotMatch(html, /data-show-front/);
  assert.doesNotMatch(html, /<div class="study-shell">[\s\S]*class="card-tools"/);
  assert.doesNotMatch(html, /<\/main>\s*<nav class="bottom-nav"/);
  assert.doesNotMatch(script, /checkSlotsButton/);
  assert.doesNotMatch(script, /previewDefinitionButton/);
  assert.match(script, /document\.body\.classList\.toggle\("is-study-mode", isActive\)/);
  assert.match(styles, /--study-page:\s*#f5f6f8/);
  assert.match(styles, /body\.is-study-mode\s*{[^}]*background:\s*var\(--study-page\)/s);
  assert.match(styles, /body\.is-study-mode \.app\s*{[^}]*padding-bottom:\s*calc\(112px \+ env\(safe-area-inset-bottom\)\)/s);
  assert.match(styles, /body\.is-study-mode \.flip-card\s*{[^}]*height:\s*min\(78svh,\s*680px,\s*calc\(100svh - 190px\)\)/s);
  assert.match(styles, /\.top-actions\s*{[^}]*position:\s*fixed/s);
  assert.match(styles, /@media \(max-width:\s*700px\)[\s\S]*body\.is-study-mode \.app-back-button\s*{[^}]*top:\s*50%[^}]*left:\s*0[^}]*opacity:\s*\.64[^}]*transform:\s*translateY\(-50%\)/s);
  assert.match(styles, /@media \(max-width:\s*700px\)[\s\S]*body\.is-study-mode \.app-back-button svg\s*{[^}]*width:\s*20px/s);
  assert.match(styles, /body\.is-study-mode \.bottom-nav\s*{[^}]*grid-template-columns:\s*54px 54px auto/s);
  assert.match(styles, /body\.is-study-mode \.nav-button\[data-view="library"\]/);
  assert.doesNotMatch(styles, /\.card-tools/);
  assert.doesNotMatch(styles, /\.card-tool/);
  assert.match(script, /backFace\.addEventListener\("click"/);
  assert.match(script, /const getBackFaceInteractiveTarget = \(event\) =>\s*event\.target\.closest\?\.\("button, input, textarea, select, a, \[contenteditable='true'\]"\)/);
  assert.match(script, /const handleBackFacePointerDown = \(event\) => \{[\s\S]*startFrontPressFill\(event, backFace\);[\s\S]*}/);
  assert.match(script, /backFace\.addEventListener\("pointerdown", handleBackFacePointerDown\)/);
  assert.match(script, /showFrontFace\(\{ feedback: true, event \}\)/);
  assert.doesNotMatch(styles, /is-backtap-feedback/);
  assert.doesNotMatch(script, /showFrontButton/);
});

test("language selector modal locks background scroll and focus", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.match(html, /data-language-menu-trigger[\s\S]*aria-haspopup="dialog"[\s\S]*aria-expanded="false"[\s\S]*aria-controls="languagePicker"/);
  assert.match(html, /<div class="language-modal" data-language-modal hidden>/);
  assert.match(html, /<div class="language-modal__backdrop" data-language-modal-close aria-hidden="true"><\/div>/);
  assert.doesNotMatch(html, /<button class="language-modal__backdrop"/);
  assert.match(html, /id="languagePicker" role="dialog" aria-modal="true" aria-labelledby="languagePickerTitle"/);
  assert.match(html, /data-language-dialog-option="hi"[\s\S]*data-language-dialog-short>HI/);
  assert.match(html, /data-language-dialog-option="zh"[\s\S]*data-language-dialog-short>ZH/);
  assert.match(html, /data-language-dialog-option="fr"[\s\S]*data-language-dialog-short>FR/);
  assert.match(html, /data-language-dialog-option="de"[\s\S]*data-language-dialog-short>DE/);
  assert.match(html, /data-language-dialog-option="ja"[\s\S]*data-language-dialog-short>JA/);
  assert.match(html, /data-language-dialog-option="ko"[\s\S]*data-language-dialog-short>KO/);
  assert.match(html, /data-language-dialog-option="ar"[\s\S]*data-language-dialog-short>AR/);
  assert.match(styles, /body\.is-language-modal-open\s*{[^}]*overflow:\s*hidden/s);
  assert.match(styles, /\.language-modal\[hidden\]\s*{[^}]*display:\s*none/s);
  assert.match(styles, /\.language-modal\s*{[^}]*position:\s*fixed[^}]*inset:\s*0/s);
  assert.match(styles, /\.language-modal__backdrop\s*{[^}]*position:\s*absolute[^}]*inset:\s*0/s);
  assert.match(styles, /\.language-modal__panel\s*{[^}]*max-height:\s*min\(82svh,\s*620px\)/s);
  assert.match(styles, /\.language-modal__options\s*{[^}]*overflow-y:\s*auto/s);
  assert.match(script, /const isLanguageModalOpen = \(\) => Boolean\(languageModal && !languageModal\.hidden\)/);
  assert.match(script, /const setLanguageModalBackgroundInert = \(isInert\) => \{[\s\S]*\[topActions, appRoot\]\.forEach[\s\S]*element\.inert = isInert[\s\S]*element\.setAttribute\("inert", ""\)[\s\S]*element\.removeAttribute\("inert"\)/);
  assert.match(script, /languageModalRestoreFocus = document\.activeElement instanceof HTMLElement[\s\S]*languageModal\.hidden = false[\s\S]*document\.body\.classList\.add\("is-language-modal-open"\)[\s\S]*languageMenuTrigger\?\.setAttribute\("aria-expanded", "true"\)[\s\S]*setLanguageModalBackgroundInert\(true\)/);
  assert.match(script, /window\.requestAnimationFrame\(\(\) => \{[\s\S]*getSelectedLanguageDialogButton\(\)\?\.focus\(\{ preventScroll: true \}\)/);
  assert.match(script, /languageModal\.hidden = true[\s\S]*document\.body\.classList\.remove\("is-language-modal-open"\)[\s\S]*languageMenuTrigger\?\.setAttribute\("aria-expanded", "false"\)[\s\S]*setLanguageModalBackgroundInert\(false\)/);
  assert.match(script, /languageModalRestoreFocus\.focus\(\{ preventScroll: true \}\)/);
  assert.match(script, /const handleLanguageModalKeydown = \(event\) => \{[\s\S]*event\.key === "Escape"[\s\S]*closeLanguageModal\(\)[\s\S]*event\.key !== "Tab"/);
  assert.match(script, /event\.shiftKey && document\.activeElement === firstElement[\s\S]*lastElement\.focus\(\{ preventScroll: true \}\)/);
  assert.match(script, /!event\.shiftKey && document\.activeElement === lastElement[\s\S]*firstElement\.focus\(\{ preventScroll: true \}\)/);
  assert.match(script, /document\.addEventListener\("keydown", handleLanguageModalKeydown\)/);
  assert.match(script, /languageModalCloseButtons\.forEach\(\(button\) => \{[\s\S]*closeLanguageModal\(\)/);
});

test("app edge-back gesture is disabled while studying", () => {
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.match(script, /const getCurrentAppRoute = \(\) => \{[\s\S]*if \(!stage\.hidden\) \{[\s\S]*return \{ view: "study" \}/);
  assert.match(script, /const showStudyFromHistory = \(\) => \{[\s\S]*setStudyChromeActive\(true\)[\s\S]*setBottomNavVisible\(true\)[\s\S]*setCardFaceState\(card\.classList\.contains\("is-flipped"\)\)/);
  assert.match(script, /const startAppBackGesture = \(event\) => \{[\s\S]*appBackStack\.length === 0[\s\S]*document\.body\.classList\.contains\("is-study-mode"\)[\s\S]*event\.target\.closest\?\.\("input, textarea, select, button, a, \[contenteditable='true'\]"\)[\s\S]*return;/);
  assert.match(script, /const finishAppBackGesture = \(event\) => \{[\s\S]*resetAppBackGesture\(\);[\s\S]*if \(deltaX > appBackGestureDistance && deltaX > Math\.abs\(deltaY\) \* swipeHorizontalBias\) \{[\s\S]*navigateBack\(\)/);
  assert.match(script, /document\.addEventListener\("pointerdown", startAppBackGesture\)/);
  assert.match(script, /document\.addEventListener\("pointermove", moveAppBackGesture, \{ passive: false \}\)/);
  assert.match(script, /document\.addEventListener\("pointerup", finishAppBackGesture\)/);
  assert.match(script, /document\.addEventListener\("pointercancel", resetAppBackGesture\)/);
  assert.match(styles, /body\.is-study-mode \.bottom-nav\s*{[\s\S]*grid-template-columns:\s*54px 54px auto/);
  assert.doesNotMatch(script, /popstate|pushState|replaceState|history\.back|hashchange/);
});

test("cloze practice advances one word at a time before completing concepts", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.match(html, /data-difficulty-tracker/);
  assert.match(html, /data-standard-study-hud/);
  assert.match(script, /wordMasteryProgressKey = "flipcards\.wordMasteryProgress"/);
  assert.match(script, /standardReviewProgressKey = "flipcards\.standardReviewProgress"/);
  assert.match(script, /standardStreakKey = "flipcards\.standardStreaks"/);
  assert.match(script, /standardStreakThreshold = 3/);
  assert.match(script, /sanitizeWordMasteryProgress/);
  assert.match(script, /sanitizeStandardStreaks/);
  assert.match(script, /loadStandardStreaks/);
  assert.match(script, /loadWordMasteryProgress/);
  assert.match(script, /getPracticeWordTargets/);
  assert.match(script, /getPracticeWordPlan/);
  assert.match(script, /maxWordDifficultyLevels = 3/);
  assert.match(script, /maxPracticeHiddenWords = 5/);
  assert.match(script, /secondWordDifficultyTarget = 3/);
  assert.match(script, /getDifficultyWordThresholds/);
  assert.match(script, /Math\.min\(maxPracticeHiddenWords,\s*Math\.max\(0,\s*Number\(totalWords\) \|\| 0\)\)/);
  assert.match(script, /\.slice\(0, maxPracticeHiddenWords\)/);
  assert.match(script, /getNextDifficultyPlan/);
  assert.match(script, /nextUnmasteredTarget/);
  assert.match(script, /nextUnmasteredTargets[\s\S]*slice\(0, Math\.max\(1, nextDifficultyPlan\.nextWordCount\)\)/);
  assert.match(script, /currentPracticeRepeatAnswers = new Set\(\)/);
  assert.match(script, /const repeatAnswers = new Set\([\s\S]*currentPracticeRepeatAnswers/);
  assert.match(script, /masteredPieceIndexes: new Set\(masteredPieceIndexes\)/);
  assert.match(script, /slot-context-word--mastered/);
  assert.match(script, /bindMasteredWordRepeat/);
  assert.match(script, /queueWordRepeat/);
  assert.match(script, /currentPracticeTargetAnswers = practicePlan\.targetAnswers/);
  assert.match(script, /currentPracticeRoundAnswers = practicePlan\.roundAnswers/);
  assert.match(script, /renderDifficultyTracker/);
  assert.match(script, /createDifficultyFlame/);
  assert.match(script, /difficultyProgress/);
  assert.match(script, /difficultyProgress: \(\{ completed, total \}\) => `\$\{completed\}\/\$\{total\} niveles superados`/);
  assert.match(script, /rememberWordMasteryRound/);
  assert.match(script, /advanceWordMasteryRound/);
  assert.match(script, /wordMasteryAdvance/);
  assert.match(script, /renderDifficultyTracker\(wordMasteryResult\)/);
  assert.match(script, /renderStudyProgressHud/);
  assert.match(script, /standardStudyRatio: \(\{ advanced, total \}\) => `\$\{advanced\} de \$\{total\}`/);
  assert.match(script, /standardSessionRatio\.textContent = t\("standardStudyRatio"/);
  assert.match(script, /advanced: stats\.advanced/);
  assert.doesNotMatch(script, /standardSessionRatio\.textContent = `\$\{stats\.remaining\}\/\$\{stats\.total\}`/);
  assert.doesNotMatch(script, /data-standard-mastered-bar/);
  assert.match(script, /createStandardTrackSegment/);
  assert.match(script, /standardSessionTrack\.replaceChildren/);
  assert.match(styles, /\.difficulty-tracker/);
  assert.match(styles, /\.answer-card\s*{[^}]*grid-template:\s*minmax\(0,\s*1fr\)\s*auto\s*\/\s*1fr/s);
  assert.match(styles, /\.difficulty-tracker\s*{[^}]*grid-area:\s*2 \/ 1[^}]*position:\s*relative/s);
  assert.match(styles, /\.answer-card:not\(\.is-answer-ready\) \.difficulty-tracker\s*{[^}]*display:\s*none/s);
  assert.doesNotMatch(styles, /\.difficulty-tracker\s*{[^}]*position:\s*absolute/s);
  assert.match(styles, /\.word-slots\s*{[^}]*padding:\s*4px 0 0/s);
  assert.match(styles, /\.word-slots\.is-dense\s*{[^}]*padding:\s*12px 0 0/s);
  assert.match(styles, /\.slot-context-word--mastered\s*{[^}]*background:\s*var\(--ink\)[^}]*color:\s*var\(--mastered\)/s);
  assert.match(styles, /\.word-slot\.is-live-match\s*{[^}]*color:\s*var\(--mastered\)/s);
  assert.match(styles, /\.difficulty-flame\.is-lit/);
  assert.match(styles, /\.standard-study-hud/);
  assert.match(styles, /grid-template-columns:\s*repeat\(var\(--standard-track-total,\s*1\),\s*minmax\(0,\s*1fr\)\)/);
  assert.match(styles, /\.standard-study-hud\.is-streaking \.standard-study-hud__track/);
  assert.match(styles, /\.standard-study-hud\.is-streaking::before/);
  assert.match(styles, /\.standard-study-hud\.is-streaking \.standard-study-hud__pill--mastered::after/);
  assert.match(styles, /@keyframes streak-track-shine/);
  assert.match(styles, /@keyframes streak-hud-glow/);
  assert.match(styles, /@keyframes streak-ring-flare/);
  assert.match(styles, /@keyframes streak-count-glow/);
  assert.match(styles, /\.standard-study-hud__segment--pending/);
  assert.match(styles, /\.standard-study-hud__pill--review/);
  assert.match(styles, /\.standard-study-hud__pill--mastered/);
  assert.match(script, /if \(!wordMasteryResult\.isComplete\)\s*{[\s\S]*advanceWordMasteryRound\(wordMasteryResult\);[\s\S]*return;[\s\S]*}/);
  assert.match(script, /rememberCompletedConcept\(\);[\s\S]*rememberStandardProgress\(\);/);
});

test("completed cloze uses card swipe decisions instead of a saved modal", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.doesNotMatch(html, /mastery-feedback/);
  assert.doesNotMatch(html, /data-mastery/);
  assert.match(html, /data-swipe-decision/);
  assert.match(html, /data-swipe-review-action/);
  assert.match(html, /data-swipe-known-action/);
  assert.match(script, /showSwipeDecision/);
  assert.match(script, /showSwipeDecision\(\{ celebrateMastery: true \}\)/);
  assert.match(script, /triggerMasteryCelebration/);
  assert.match(script, /navigator\.vibrate\?\.\(\[18, 28, 32\]\)/);
  assert.match(script, /card\.classList\.add\("is-mastery-celebrating"\)/);
  assert.match(script, /card\.classList\.remove\("is-mastery-celebrating"\)/);
  assert.match(script, /commitSwipeDecision/);
  assert.match(script, /swipeActivationDistance = 8/);
  assert.match(script, /isCurrentConceptMasteryReady/);
  assert.match(script, /canSwipeCurrentCard/);
  assert.match(script, /getEffectiveSwipeDecision/);
  assert.match(script, /decisionNeedsDifficulty/);
  assert.match(script, /lowerWordMasteryLevel/);
  assert.match(script, /markConceptForReviewFromSwipe/);
  assert.match(script, /rememberStandardReviewProgress/);
  assert.match(script, /resetStandardStreak\(\)/);
  assert.match(script, /clearCardTransitionTimers/);
  assert.match(script, /clearFrontPressFill/);
  assert.match(script, /window\.clearTimeout\(backIntroTimer\)/);
  assert.match(script, /const loadCard = \(concept, definition, meta = \{\}\) => \{[\s\S]*clearCardTransitionTimers\(\);[\s\S]*setSwipeDecisionActive\(false\);/);
  assert.match(script, /forgetStandardReviewProgress/);
  assert.match(script, /completeConceptFromSwipe/);
  assert.match(script, /increaseStandardStreak/);
  assert.match(script, /triggerStandardStreakAnimation\(streak\)/);
  assert.match(script, /getNextStandardConcept/);
  assert.match(script, /pendingIds\.has\(id\)[\s\S]*reviewIds\.has\(id\)/);
  assert.match(script, /loadNextStandardConcept/);
  assert.match(script, /currentStandardId[\s\S]*loadNextStandardConcept\(\)/);
  assert.match(script, /const effectiveDirection = getEffectiveSwipeDecision\(direction\)/);
  assert.match(script, /swipeCommitted = true;[\s\S]*clearCardTransitionTimers\(\);[\s\S]*card\.classList\.remove\("is-swipe-dragging"\)/);
  assert.match(script, /if \(effectiveDirection === "known"\)[\s\S]*completeConceptFromSwipe/);
  assert.match(script, /skippedBeforeMastery: direction === "known"/);
  assert.match(script, /const swipeHorizontalBias = 1\.18/);
  assert.match(script, /const swipeEdgeTouchInset = 12/);
  assert.match(script, /const isHorizontalSwipeIntent = \(deltaX, deltaY, minDistance = swipeActivationDistance\) =>[\s\S]*Math\.abs\(deltaX\) > Math\.abs\(deltaY\) \* swipeHorizontalBias/);
  assert.match(script, /const queueFaceClickSuppression = \(\) => \{[\s\S]*suppressNextFaceClick = true;[\s\S]*120/);
  assert.match(script, /const consumeSuppressedFaceClick = \(event\) => \{[\s\S]*event\?\.preventDefault\(\);[\s\S]*event\?\.stopPropagation\(\);/);
  assert.match(script, /const isKnownPreview = direction === "known"/);
  assert.match(script, /card\.classList\.remove\("is-swipe-needs-mastery"\)/);
  assert.match(script, /card\.classList\.toggle\("is-swipe-known", isKnownPreview\)/);
  assert.match(script, /swipeDecisionHint\.textContent = t\("decisionHint"\)/);
  assert.match(script, /swipeKnownLabel\.textContent = t\("decisionKnown"\)/);
  assert.match(script, /!isSwipeDecisionActive && !canSwipeCurrentCard\(\)/);
  assert.match(script, /setSwipeDecisionActive\(true, \{ preserveDrag: true \}\)/);
  assert.match(script, /if \(isSwipeDecisionActive\)\s*{[\s\S]*beginSwipeDecisionDrag\(event\);[\s\S]*}/);
  assert.match(script, /const isFreeSwipeDragIntent = \(deltaX, deltaY, minDistance = swipeActivationDistance\) =>[\s\S]*Math\.hypot\(deltaX, deltaY\) > minDistance/);
  assert.match(script, /const isSwipePointerButton = \(event\) =>/);
  assert.match(script, /event\.isPrimary === false/);
  assert.match(script, /card\.setPointerCapture\?\.\(event\.pointerId\);[\s\S]*if \(isSwipeDecisionActive\)/);
  assert.match(script, /event\.pointerType !== "mouse" && isFreeSwipeDragIntent\(deltaX, deltaY, 2\)/);
  assert.match(script, /const shouldActivateSwipe = isFreeSwipeDragIntent\(deltaX, deltaY\)/);
  assert.match(script, /if \(!isSwipeDecisionActive && shouldActivateSwipe\)\s*{[\s\S]*openSwipeDecisionForDrag\(event, \{ suppressFaceClick: true \}\);[\s\S]*}/);
  assert.match(script, /const swipeDirection = getSwipeCommitDirection\(deltaX, deltaY\)/);
  assert.match(script, /const getSwipeProjectedBounds = \(deltaX = 0\) => \{[\s\S]*leftX: centerX - halfWidth,[\s\S]*rightX: centerX \+ halfWidth/);
  assert.match(script, /leftX <= swipeEdgeTouchInset \|\| centerX <= viewportWidth \* swipeDropZoneRatio/);
  assert.match(script, /rightX >= viewportWidth - swipeEdgeTouchInset \|\| centerX >= viewportWidth \* \(1 - swipeDropZoneRatio\)/);
  assert.match(script, /const maxOffset = viewportWidth \+ width/);
  assert.match(script, /const maxYOffset = viewportHeight \+ height/);
  assert.doesNotMatch(script, /commitSwipeIfDropZoneTouched/);
  assert.match(script, /if \(isSwipeDecisionActive\) \{[\s\S]*event\.preventDefault\(\);[\s\S]*updateSwipeDecisionVisual\(deltaX, deltaY\);[\s\S]*\}/);
  assert.match(script, /const isCommittedSwipe = Boolean\(swipeDirection\)/);
  assert.match(script, /const settleUncommittedSwipeDrag = \(\) => \{[\s\S]*if \(swipeStartedInDecisionMode\)[\s\S]*resetSwipeDecisionVisual\(\);[\s\S]*return;/);
  assert.match(html, /data-next-card-preview/);
  assert.match(html, /data-next-card-output/);
  assert.match(script, /const renderNextCardPreview = \(\) => \{[\s\S]*getUpcomingStudyConcept\(\)[\s\S]*card\.classList\.add\("has-next-card"\)/);
  assert.match(script, /renderNextCardPreview\(\);[\s\S]*card\.classList\.toggle\("is-card-lifted", card\.classList\.contains\("has-next-card"\)\)/);
  assert.match(script, /if \(card\.hasPointerCapture\?\.\(event\.pointerId\)\)\s*{[\s\S]*card\.releasePointerCapture\(event\.pointerId\);[\s\S]*}/);
  assert.match(script, /\.ready-button/);
  assert.match(script, /card\.addEventListener\("pointerdown", startSwipeDecisionDrag\)/);
  assert.match(script, /event\.key === "ArrowLeft"[\s\S]*commitSwipeDecision\("review"\)/);
  assert.match(script, /event\.key === "ArrowRight" \|\| event\.key === "Enter"[\s\S]*commitSwipeDecision\("known"\)/);
  assert.match(styles, /\.flip-card\.is-decision \.flip-card__inner/);
  assert.match(styles, /\.flip-card\.is-decision \.flip-card__face\s*{[^}]*display:\s*none[^}]*visibility:\s*hidden/s);
  assert.match(styles, /--swipe-y:\s*0px/);
  assert.match(styles, /\.flip-card\.is-swipe-ready\s*{[^}]*touch-action:\s*none/s);
  assert.match(styles, /\.card-stage\s*{[^}]*touch-action:\s*none/s);
  assert.match(styles, /\.study-shell\s*{[^}]*touch-action:\s*none/s);
  assert.match(styles, /\.flip-card\.is-swipe-ready \.flip-card__inner,[\s\S]*\.flip-card\.is-swipe-ready \.flip-card__decision\s*{[^}]*touch-action:\s*none/s);
  assert.match(styles, /\.flip-card\.is-swipe-review \.flip-card__decision/);
  assert.match(styles, /--review:\s*#b77900/);
  assert.match(styles, /\.standard-study-hud__segment--review\s*{[^}]*background:\s*var\(--review-fill\)/s);
  assert.doesNotMatch(styles, /\.flip-card\.is-swipe-needs-mastery \.flip-card__decision/);
  assert.doesNotMatch(styles, /\.flip-card\.is-swipe-needs-mastery \.swipe-choice--known/);
  assert.match(styles, /\.flip-card\.is-swipe-known \.flip-card__decision/);
  assert.match(styles, /\.flip-card\.is-mastery-celebrating \.flip-card__decision/);
  assert.match(styles, /\.flip-card\.is-mastery-celebrating \.flip-card__decision::after\s*{[^}]*animation:\s*mastery-shine-sweep/s);
  assert.match(styles, /\.flip-card\.is-mastery-celebrating \.flip-card__decision-label,[\s\S]*\.flip-card\.is-mastery-celebrating \.flip-card__decision-concept\s*{[^}]*color:\s*var\(--mastered\)/s);
  assert.match(styles, /@keyframes mastery-shine-sweep/);
  assert.match(styles, /\.flip-card\s*{[^}]*touch-action:\s*pan-y/s);
  assert.match(styles, /\.swipe-choice/);
  assert.match(styles, /\.flip-card__next-card/);
  assert.match(styles, /\.flip-card\.has-next-card \.flip-card__next-card\s*{[^}]*opacity:\s*\.34/s);
  assert.match(styles, /\.flip-card\.has-next-card\.is-card-lifted \.flip-card__next-card/);
  assert.match(styles, /\.flip-card\.is-decision\.is-swipe-dragging \.flip-card__next-card\s*{[^}]*box-shadow:\s*none/s);
});

test("swipe drag is always available and only mastered is gated", () => {
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  // Dragging is always available for a standard card. Only the mastered/green
  // decision requires at least one completed difficulty level or saved history.
  assert.match(
    script,
    /const hasCurrentStandardConceptDecisionHistory = \(\) => \{[\s\S]*loadStandardProgress\(\)[\s\S]*masteredIds\.has\(currentStandardConceptId\)[\s\S]*loadCompletedConcepts\(\)\.some/
  );
  assert.doesNotMatch(script, /masteredIds\.has\(currentStandardConceptId\) \|\| reviewIds\.has\(currentStandardConceptId\)/);
  assert.match(
    script,
    /const canMasterSwipeDecision = \(\) =>\s*currentPracticeTargetAnswers\.length === 0\s*\|\| getCompletedDifficultyLevel\([\s\S]*getPracticeMasteredCount\(\),[\s\S]*currentPracticeTargetAnswers\.length[\s\S]*\) >= 1\s*\|\| hasCurrentStandardConceptDecisionHistory\(\)/
  );
  assert.doesNotMatch(script, /orderedConcepts\.find\(\(\{ id \}\) => id !== currentConceptId\)/);
  assert.match(script, /if \(!nextConcept \|\| nextConcept\.id === currentStandardConceptId\) \{[\s\S]*card\.classList\.remove\("has-next-card"\)/);
  assert.match(script, /if \(activeSession\) \{[\s\S]*activeSession = null;[\s\S]*showHome\(\);[\s\S]*return;[\s\S]*\}/);
  assert.match(script, /navigateWithHistory\(\(\) => loadStandardConcept\(concept\)\)/);
  assert.match(
    script,
    /const canChooseSwipeDecision = \(\) => canSwipeCurrentCard\(\)/
  );
  // A completed level makes "known" honored; otherwise it is blocked instead
  // of being converted to progress.
  assert.match(
    script,
    /const getEffectiveSwipeDecision = \(direction\) =>\s*direction === "known"[\s\S]*canMasterSwipeDecision\(\)[\s\S]*\? "known"[\s\S]*: "blocked"[\s\S]*: "review"/
  );
  // Committing green with no level is refused with the shake + rejection tone.
  assert.match(
    script,
    /const commitSwipeDecision = \(direction\) => \{[\s\S]*if \(direction === "known" && !canMasterSwipeDecision\(\)\) \{[\s\S]*denySwipeAttempt\(\);[\s\S]*return;/
  );
  assert.match(
    script,
    /const denySwipeAttempt = \(\) => \{[\s\S]*card\.classList\.add\("is-swipe-denied"\);[\s\S]*playRejectionSound\(\);/
  );
  assert.match(script, /let swipeStartedFlipped = false;/);
  assert.match(script, /card\.classList\.toggle\("is-flipped", swipeStartedFlipped\);[\s\S]*setSwipeDecisionActive\(false\);/);
  // Left/progress remains a valid zero-level decision.
  assert.match(script, /if \(effectiveDirection === "known"\)[\s\S]*completeConceptFromSwipe\(\);[\s\S]*return;[\s\S]*markConceptForReviewFromSwipe/);
  // The shake animates the outer card so it never fights the flip/swipe transforms.
  assert.match(styles, /\.flip-card\.is-swipe-denied\s*{[^}]*animation:\s*swipe-deny-shake/s);
  assert.match(styles, /\.flip-card\.is-swipe-denied:not\(\.is-decision\) \.flip-card__face\s*{[^}]*border-color:\s*var\(--miss\)/s);
  assert.match(styles, /@keyframes swipe-deny-shake/);
});

test("bottom navigation keeps route icons and study language together", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");
  const expectedLanguageOrder = ["es", "en", "hi", "zh", "fr", "de", "ja", "ko", "ar"];
  const compactLanguageOrder = [...html.matchAll(/data-language-option="([^"]+)"/g)]
    .map((match) => match[1]);
  const dialogLanguageOrder = [...html.matchAll(/data-language-dialog-option="([^"]+)"/g)]
    .map((match) => match[1]);
  const expectedFlagFiles = [
    "assets/flags/es.svg",
    "assets/flags/us.svg",
    "assets/flags/in.svg",
    "assets/flags/cn.svg",
    "assets/flags/fr.svg",
    "assets/flags/de.svg",
    "assets/flags/jp.svg",
    "assets/flags/kr.svg",
    "assets/flags/arab.svg",
    "assets/flags/flag-icons-LICENSE.txt",
    "assets/flags/README.md",
  ];

  assert.match(html, /aria-label="Inicio"/);
  assert.match(html, /aria-label="Biblioteca"/);
  assert.match(html, /aria-label="Perfil"/);
  assert.match(html, /data-app-back/);
  assert.match(html, /data-study-toolbar/);
  assert.match(html, /data-study-heading/);
  assert.match(html, /data-profile-identity/);
  assert.match(html, /data-profile-metrics/);
  assert.match(html, /data-profile-preferences/);
  assert.match(html, /data-profile-achievements/);
  assert.match(html, /<nav class="bottom-nav"[\s\S]*data-view="home"[\s\S]*data-view="library"[\s\S]*data-view="profile"[\s\S]*data-language-menu-trigger[\s\S]*data-language-option="es"[\s\S]*data-language-option="en"[\s\S]*data-language-option="hi"[\s\S]*data-language-option="zh"[\s\S]*data-language-option="fr"[\s\S]*data-language-option="de"[\s\S]*data-language-option="ja"[\s\S]*data-language-option="ko"[\s\S]*data-language-option="ar"[\s\S]*<\/nav>/);
  assert.match(html, /data-language-modal/);
  assert.match(html, /data-language-dialog-option="es"[\s\S]*data-language-dialog-option="en"[\s\S]*data-language-dialog-option="hi"[\s\S]*data-language-dialog-option="zh"[\s\S]*data-language-dialog-option="fr"[\s\S]*data-language-dialog-option="de"[\s\S]*data-language-dialog-option="ja"[\s\S]*data-language-dialog-option="ko"[\s\S]*data-language-dialog-option="ar"/);
  assert.match(html, /class="library-view"/);
  assert.match(html, /class="profile-view"/);
  assert.match(script, /showLibrary/);
  assert.match(script, /setActiveNav\("library"\)/);
  assert.match(script, /let appBackStack = \[\]/);
  assert.match(script, /const recordCurrentAppRoute = \(\) =>/);
  assert.match(script, /const navigateBack = \(\) =>/);
  assert.match(script, /const showStudyFromHistory = \(\) =>/);
  assert.match(script, /document\.addEventListener\("pointerdown", startAppBackGesture\)/);
  assert.match(script, /showLibrary\(\{ preserveStudyState \}\)/);
  assert.match(styles, /\.app-back-button/);
  assert.match(script, /let activeLibraryLetter = ""/);
  assert.match(script, /marker\.dataset\.libraryLetter = letter/);
  assert.match(script, /activeLibraryLetter\s*\?\s*displayedConcepts\.filter\(\(\{ alphabetKey \}\) => alphabetKey === activeLibraryLetter\)/);
  assert.match(script, /alphabetIndex\.addEventListener\("click"/);
  assert.match(styles, /\.alphabet-index__letter\.is-active/);
  assert.doesNotMatch(html, /data-home-action="review"/);
  assert.match(html, /home-standard__button/);
  assert.match(html, /aria-controls="homeSourceList"/);
  assert.match(html, /class="home-standard__chevron"/);
  assert.match(html, /data-home-source-list/);
  assert.match(script, /--home-standard-mastered-progress/);
  assert.match(script, /button\.classList\.toggle\("has-mastered-progress", hasMasteredProgress\)/);
  assert.match(script, /button\.classList\.toggle\("is-standard-mastered", isStandardMastered\)/);
  assert.match(script, /setHomeSourceExpanded\(!isHomeSourceExpanded\)/);
  assert.match(script, /homeSourceList\?\.addEventListener\("click"/);
  assert.match(script, /\$\{isHomeSourceExpanded \? t\("collapseSources"\) : t\("expandSources"\)\}/);
  assert.doesNotMatch(html, /home-progress/);
  assert.doesNotMatch(html, /data-home-standard-status/);
  assert.doesNotMatch(styles, /\.home-standard\s*{[^}]*border-(top|bottom):/s);
  assert.doesNotMatch(styles, /\.home-progress/);
  assert.match(styles, /\.home-standard__button::before\s*{[^}]*width:\s*var\(--home-standard-mastered-progress\)/s);
  assert.match(styles, /\.home-standard__chevron\s*{[^}]*color:\s*#050505/s);
  assert.match(styles, /\.home-source-list/);
  assert.match(styles, /\.home-source-option/);
  assert.match(styles, /\.home-standard__button\.has-mastered-progress::before\s*{[^}]*min-width:\s*8px/s);
  assert.match(styles, /\.home-standard__button\.has-mastered-progress span\s*{[^}]*color:\s*#10875d/s);
  assert.match(styles, /grid-template-columns:\s*repeat\(4,\s*54px\)/);
  assert.match(styles, /body\.is-study-mode \.bottom-nav\s*{[^}]*grid-template-columns:\s*54px 54px auto/s);
  assert.match(styles, /body\.is-study-mode \.nav-button\[data-view="library"\]/);
  assert.doesNotMatch(styles, /body\.is-study-mode \.language-menu-trigger\s*{[^}]*display:\s*none/s);
  assert.match(styles, /body\.is-study-mode \.language-switch\s*{[^}]*display:\s*grid/s);
  assert.match(styles, /body\.is-language-modal-open\s*{[^}]*overflow:\s*hidden/s);
  assert.match(styles, /:root\[data-theme="dark"\] \.language-modal__close/);
  assert.match(styles, /\.language-modal\[hidden\]\s*{[^}]*display:\s*none/s);
  assert.match(styles, /\.language-switch\s*{[^}]*min-width:\s*108px/s);
  assert.match(styles, /\.language-switch\s*{[^}]*display:\s*none/s);
  assert.match(styles, /\.language-switch\s*{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(44px,\s*1fr\)\)/s);
  assert.match(styles, /\.language-switch button\[hidden\]\s*{[^}]*display:\s*none/s);
  assert.match(styles, /\.language-flag\s*{[^}]*border-radius:\s*999px[^}]*object-fit:\s*cover/s);
  assert.match(styles, /\.language-switch \.language-flag\s*{[^}]*width:\s*18px/s);
  assert.match(styles, /\.language-modal__options button\s*{[^}]*grid-template-columns:\s*auto minmax\(0,\s*1fr\) auto/s);
  assert.match(styles, /\.language-switch button\.is-study-quick-secondary\s*{[^}]*border-left:/s);
  assert.match(styles, /@media \(max-width:\s*380px\)[\s\S]*\.language-switch\s*{[^}]*min-width:\s*96px/s);
  assert.match(styles, /\.profile-metrics/);
  assert.match(styles, /\.bottom-nav\s*{[^}]*backdrop-filter:\s*blur\(22px\)\s*saturate\(180%\)/s);
  assert.match(styles, /\.bottom-nav\s*{[^}]*-webkit-backdrop-filter:\s*blur\(22px\)\s*saturate\(180%\)/s);
  assert.match(styles, /\.nav-button\.is-active\s*{[^}]*linear-gradient/s);
  assert.match(styles, /\.nav-button__label\s*{[^}]*clip-path:\s*inset\(50%\)/s);
  assert.doesNotMatch(styles, /\.nav-button\s*{[^}]*grid-template-columns:\s*auto auto/s);
	  assert.deepEqual(compactLanguageOrder, expectedLanguageOrder);
	  assert.deepEqual(dialogLanguageOrder, expectedLanguageOrder);
	  assert.match(script, /const languageOrder = \["es", "en", "hi", "zh", "fr", "de", "ja", "ko", "ar"\]/);
	  assert.match(script, /const supportedLanguages = \[\.\.\.languageOrder\]/);
	  assert.match(script, /flagCode:\s*"us"/);
	  assert.match(script, /flagCode:\s*"arab"/);
	  assert.match(script, /const getLanguageFlagSrc = \(language\) =>/);
	  assert.match(script, /assets\/flags\/\$\{flagCode\}\.svg/);
	  assert.match(script, /flag\.dataset\.languageFlag = ""/);
	  assert.match(script, /const syncCompactLanguageButton = \(button, language, shortText\) =>/);
	  assert.match(script, /let studyQuickLanguage = "es"/);
	  assert.match(script, /studyQuickLanguage = selectedLanguage === "en" \? "es" : selectedLanguage/);
	  assert.match(script, /const updateStudyQuickLanguage = \(language\) =>/);
	  assert.match(script, /copy\.hi = \{/);
	  assert.match(script, /copy\.zh = \{/);
	  assert.match(script, /copy\.fr = \{/);
	  assert.match(script, /copy\.de = \{/);
	  assert.match(script, /copy\.ja = \{/);
	  assert.match(script, /copy\.ko = \{/);
	  assert.match(script, /copy\.ar = \{/);
	  assert.match(script, /studyToolbarAria:\s*"Study actions"/);
	  assert.match(script, /profileIdentityAria:\s*"Learner profile"/);
	  assert.match(script, /profilePreferencesAria:\s*"التفضيلات"/);
	  assert.match(script, /home:\s*"होम"/);
	  assert.match(script, /home:\s*"首页"/);
	  assert.match(script, /home:\s*"Accueil"/);
	  assert.match(script, /home:\s*"Start"/);
	  assert.match(script, /home:\s*"ホーム"/);
	  assert.match(script, /home:\s*"홈"/);
	  assert.match(script, /home:\s*"الرئيسية"/);
	  assert.doesNotMatch(script, /copy\.hi = \{[\s\S]*संकल्पना mastered[\s\S]*copy\.zh =/);
	  assert.doesNotMatch(script, /copy\.hi = \{[\s\S]*\$\{mastered\} mastered[\s\S]*copy\.zh =/);
	  assert.match(script, /document\.documentElement\.dir = selectedLanguage === "ar" \? "rtl" : "ltr"/);
	  assert.match(script, /const navButtons = document\.querySelectorAll\("\.nav-button\[data-view\]"\)/);
  assert.match(script, /const openLanguageModal = \(\) =>/);
  assert.match(script, /const setLanguageModalBackgroundInert = \(isInert\) =>/);
  assert.match(script, /const handleLanguageModalKeydown = \(event\) =>/);
  assert.match(script, /document\.addEventListener\("keydown", handleLanguageModalKeydown\)/);
  assert.match(script, /languageMenuTrigger\?\.addEventListener\("click"/);
  assert.match(script, /languageDialogButtons\.forEach\(\(button\) =>/);
  assert.match(script, /\|\| document\.body\.classList\.contains\("is-study-mode"\)/);
	  assert.match(script, /const getCopyForLanguage = \(language = selectedLanguage\) =>/);
	  assert.match(script, /button\.hidden = !isQuickLanguage/);
	  assert.match(script, /button\.classList\.toggle\("is-study-quick-secondary", language === "en" && quickLanguage !== "en"\)/);
	  assert.match(script, /updateStudyQuickLanguage\(selectedLanguage\)/);
	  assert.doesNotMatch(script, /language === "hi" \|\| language === "zh" \? copy\.en/);
  expectedFlagFiles.forEach((file) => assert.equal(fs.existsSync(file), true, `${file} should exist`));
  assert.match(fs.readFileSync("assets/flags/README.md", "utf8"), /flag-icons 7\.5\.0/);
  assert.match(fs.readFileSync("assets/flags/flag-icons-LICENSE.txt", "utf8"), /MIT License/);
	  assert.match(script, /homeView\.setAttribute\("aria-label", t\("homeAria"\)\)/);
	  assert.match(script, /studyToolbar\?\.setAttribute\("aria-label", t\("studyToolbarAria"\)\)/);
	  assert.match(script, /standardSessionTrack\.setAttribute\("aria-label", t\("standardProgress"\)\)/);
	  assert.match(script, /studyHeading\.textContent = t\("studyCard"\)/);
	  assert.match(script, /profileIdentity\?\.setAttribute\("aria-label", t\("profileIdentityAria"\)\)/);
	  assert.match(script, /profileMetrics\?\.setAttribute\("aria-label", t\("profileMetricsAria"\)\)/);
	  assert.match(script, /profilePreferences\?\.setAttribute\("aria-label", t\("profilePreferencesAria"\)\)/);
	  assert.match(script, /profileAchievements\?\.setAttribute\("aria-label", t\("profileAchievements"\)\)/);
	  assert.match(script, /swipeDecisionLabel\.textContent = getSwipeDecisionLabel\(\)/);
	  assert.match(script, /swipeDecisionHint\.textContent = getSwipeDecisionHint\(\)/);
	  assert.match(script, /bottomNav\.setAttribute\("aria-label", t\("mainNavigation"\)\)/);
	  assert.match(script, /const requestLanguage = selectedLanguage/);
  assert.match(script, /selectedLanguage !== requestLanguage/);
	  assert.match(script, /const getConceptDefinitionLanguage = \(concept, language = selectedLanguage\) =>/);
	  assert.match(script, /const getConceptLocalizedTerm = \(concept, language = selectedLanguage\) =>/);
	  assert.match(script, /const latinAlphabetLanguages = new Set\(\["es", "en", "fr", "de"\]\)/);
	  assert.match(script, /const getLibraryAlphabet = \(filledLetters\) => \{/);
	  assert.match(script, /return useLatinAlphabet \? "#" : upperCharacter/);
	  assert.match(script, /const getCompletedConceptLibraryData = \(concept\) => \{/);
	  assert.match(script, /searchText: \[/);
	  assert.match(script, /normalizeWord\(searchText\)\.includes\(query\)/);
	  assert.match(script, /secondaryTerm:\s*normalizeWord\(primaryTerm\) !== normalizeWord\(term\) \? term : ""/);
	  assert.match(styles, /html\[dir="rtl"\] \.home-standard__button/);
	  assert.match(styles, /html\[dir="rtl"\] \.field select/);
	  assert.match(styles, /html\[dir="rtl"\] body\.is-study-mode \.app-back-button/);
});

test("answer button owns the reading timer fill", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.match(html, /<button class="ready-button"[^>]*data-ready-answer>[\s\S]*data-definition-timer[\s\S]*data-ready-answer-label/);
  assert.doesNotMatch(html, /class="definition-timer"/);
  assert.match(styles, /\.ready-button__fill\s*{[^}]*transition-property:\s*transform/s);
  assert.match(styles, /\.ready-button\s*{[^}]*overflow:\s*hidden/s);
  assert.match(styles, /\.ready-button:focus-visible\s*{[^}]*box-shadow:\s*none/s);
  assert.doesNotMatch(styles, /\.ready-button:focus-visible\s*{[^}]*outline-offset/s);
  assert.match(styles, /\.flip-card__face--front:focus-visible\s*{[^}]*outline:\s*none/s);
  assert.match(styles, /\.flip-card__face\s*{[^}]*--press-fill-x:\s*50%[^}]*--press-fill-y:\s*50%/s);
  assert.match(styles, /\.flip-card__face::before\s*{[^}]*left:\s*var\(--press-fill-x\)[^}]*top:\s*var\(--press-fill-y\)[^}]*border-radius:\s*999px[^}]*background:\s*#dfe4ec[^}]*transform:\s*translate\(-50%, -50%\) scale\(0\)/s);
  assert.match(styles, /\.flip-card__face::before\s*{[^}]*transform 300ms var\(--ease\)/s);
  assert.match(styles, /\.flip-card__face\.is-press-filling::before\s*{[^}]*transform:\s*translate\(-50%, -50%\) scale\(1\)/s);
  assert.match(styles, /\.flip-card__text\s*{[^}]*position:\s*relative[^}]*z-index:\s*1/s);
  assert.match(styles, /\.answer-card\s*{[^}]*position:\s*relative[^}]*z-index:\s*1/s);
  assert.doesNotMatch(styles, /\.flip-card__face--front:focus-visible\s*{[^}]*outline-offset/s);
  assert.doesNotMatch(styles, /\.definition-timer/);
  assert.match(script, /const frontPressFillDuration = 260/);
  assert.match(script, /let frontPressFillTimer = 0/);
  assert.match(script, /let frontPressFillStartedAt = 0/);
  assert.match(script, /const setFrontPressFillOrigin = \(event, face = frontFaceButton\) => \{[\s\S]*Math\.hypot\(farthestX, farthestY\) \* 2[\s\S]*--press-fill-size/);
  assert.match(script, /const startFrontPressFill = \(event, face = frontFaceButton\) => \{[\s\S]*setFrontPressFillOrigin\(event, face\);[\s\S]*face\.classList\.add\("is-press-filling"\)/);
  assert.match(script, /const getFrontPressFlipDelay = \(\) => \{[\s\S]*frontPressFillDuration - elapsed/);
  assert.match(script, /const flipFrontFaceToBack = \(\) => \{[\s\S]*card\.classList\.add\("is-flipped"\);[\s\S]*clearFrontPressFill\(\);[\s\S]*startBackIntro\(\);/);
  assert.match(script, /const handleFrontFacePointerDown = \(event\) => \{[\s\S]*startFrontPressFill\(event\);[\s\S]*}/);
  assert.match(script, /frontFaceButton\.addEventListener\("pointerdown", handleFrontFacePointerDown\)/);
  assert.match(script, /frontFaceButton\.addEventListener\("pointercancel", clearFrontPressFill\)/);
  assert.match(script, /backFace\.addEventListener\("pointercancel", clearFrontPressFill\)/);
  assert.match(script, /frontFaceButton\.addEventListener\("click", \(event\) => \{[\s\S]*consumeSuppressedFaceClick\(event\)[\s\S]*window\.setTimeout\(flipFrontFaceToBack, getFrontPressFlipDelay\(\)\)/);
  assert.doesNotMatch(script, /frontPressFlipTimer/);
  assert.match(script, /readyAnswerLabel\.textContent = t\("answer"\)/);
});

test("gesture sounds use local CC0 assets with synthetic fallback", () => {
  const script = fs.readFileSync("script.js", "utf8");
  const audioReadme = fs.readFileSync("audio/README.md", "utf8");

  for (const file of [
    "audio/ui-flip.ogg",
    "audio/ui-decision.ogg",
    "audio/ui-progress.ogg",
    "audio/ui-mastered.ogg",
  ]) {
    assert.equal(fs.existsSync(file), true);
  }

  assert.match(audioReadme, /Kenney UI Audio/);
  assert.match(audioReadme, /Creative Commons CC0/);
  assert.match(script, /const gestureSoundSources = \{[\s\S]*flip: "audio\/ui-flip\.ogg"[\s\S]*decision: "audio\/ui-decision\.ogg"[\s\S]*progress: "audio\/ui-progress\.ogg"[\s\S]*mastered: "audio\/ui-mastered\.ogg"/);
  assert.match(script, /const canPlayLocalGestureAudio = \(\(\) => \{/);
  assert.match(script, /new Audio\(source\)/);
  assert.match(script, /const getFeedbackAudioContext = \(\) => \{/);
  assert.match(script, /const primeFeedbackAudioContext = \(\) => \{/);
  assert.match(script, /window\.addEventListener\("pointerdown", primeFeedbackAudioContext/);
  assert.match(script, /const playProgressSound = \(\) => \{/);
  assert.match(script, /const playStreakSound = \(streak = standardStreakThreshold\) => \{/);
  assert.match(script, /const playLocalGestureSound = \(name, fallback\) => \{/);
  assert.match(script, /playLocalGestureSound\("flip", \(\) => playFeedbackTone/);
  assert.match(script, /playLocalGestureSound\("decision", playDecisionSound\)/);
  assert.match(script, /playLocalGestureSound\("progress", null\);[\s\S]*playProgressSound\(\)/);
  assert.match(script, /playLocalGestureSound\("mastered", null\);[\s\S]*playApprovalSound\(\)/);
  assert.match(script, /playRejectionSound[\s\S]*type: "sawtooth"[\s\S]*type: "square"/);
  assert.match(script, /playStreakSound\(streak\)/);
  assert.match(script, /const flipFrontFaceToBack = \(\) => \{[\s\S]*playFlipGestureSound\(\);[\s\S]*card\.classList\.add\("is-flipped"\);/);
  assert.match(script, /frontFaceButton\.addEventListener\("click", \(event\) => \{[\s\S]*consumeSuppressedFaceClick\(event\)[\s\S]*window\.setTimeout\(flipFrontFaceToBack, getFrontPressFlipDelay\(\)\)/);
  assert.match(script, /backFace\.addEventListener\("click", \(event\) => \{[\s\S]*consumeSuppressedFaceClick\(event\)[\s\S]*playFlipGestureSound\(\);[\s\S]*showFrontFace/);
  assert.match(script, /showSwipeDecision[\s\S]*playDecisionGestureSound\(\)/);
  assert.match(script, /markConceptForReviewFromSwipe[\s\S]*playProgressGestureSound\(\)/);
  assert.match(script, /completeConceptFromSwipe[\s\S]*playMasteredGestureSound\(\)/);
});

test("manual cards can live in local sets with standard progress", () => {
  const html = fs.readFileSync("index.html", "utf8");
  const script = fs.readFileSync("script.js", "utf8");
  const styles = fs.readFileSync("styles.css", "utf8");

  assert.match(html, /data-custom-set-panel/);
  assert.match(html, /id="customSetSelect"/);
  assert.match(html, /value="__new__">Crear conjunto nuevo/);
  assert.match(html, /id="customSetName"/);
  assert.match(styles, /\.custom-set-panel/);
  assert.match(styles, /\.custom-set-help\.is-error/);
  assert.match(script, /customStandardsStorageKey = "flipcards\.customStandards"/);
  assert.match(script, /customSetCreateValue = "__new__"/);
  assert.match(script, /const sanitizeCustomStandards = \(value\) => \{/);
  assert.match(script, /definitionLanguage = normalizeLanguage/);
  assert.match(script, /\[definitionLanguage\]: primaryDefinition/);
  assert.match(script, /const loadCustomStandards = \(\) =>[\s\S]*customStandardsStorageKey/);
  assert.match(script, /const renderCustomSetOptions = \(\) => \{/);
  assert.match(script, /const addManualCardToCustomSet = \(\{ concept, definition, setId = "", setName = "", language \}\) => \{/);
  assert.match(script, /const definitions = \{\s*\[definitionLanguage\]: definition\s*\}/);
  assert.doesNotMatch(script, /const definitions = \{\s*es: definition,\s*en: definition\s*\}/);
  assert.match(script, /standards = \[[\s\S]*loadedStandards\.filter[\s\S]*\.\.\.loadCustomStandards\(\)[\s\S]*\]/);
  assert.match(script, /saveActiveStandardId\(standard\.id\);[\s\S]*syncCustomStandardsInRuntime\(customStandards\)/);
  assert.match(script, /loadCard\(concept, definition, cardMeta\)/);
  assert.match(script, /standardId: standard\.id,[\s\S]*conceptId/);
  assert.match(script, /customSetSelect\.addEventListener\("change"/);
});

test("build publishes the AI bundle and a generated Firebase config without debug tokens", () => {
  const packageJson = readJson("package.json");
  const buildScript = fs.readFileSync("scripts/build-dist.mjs", "utf8");
  const vercelConfig = readJson("vercel.json");

  assert.equal(packageJson.license, "Apache-2.0");
  assert.match(packageJson.scripts.build, /build:standards[\s\S]*build:ai[\s\S]*build-dist\.mjs/);
  assert.match(packageJson.scripts["build:ai"], /esbuild src\/main\.js --bundle --format=esm/);
  assert.match(buildScript, /"ai\.bundle\.js"/);
  assert.match(buildScript, /delete firebaseSettings\.appCheckDebugToken/);
  assert.match(buildScript, /FIREBASE_API_KEY/);
  assert.equal(vercelConfig.outputDirectory, "dist");
  assert.equal(vercelConfig.functions, undefined);
  assert.ok(!fs.existsSync("api/definition.js"), "the old server-side AI endpoint is gone");
});

test("index loads the Firebase config, the classic app, then the hybrid AI module", () => {
  const html = fs.readFileSync("index.html", "utf8");

  assert.match(html, /<html lang="en"/);
  assert.match(
    html,
    /<script src="firebase-config\.js[^"]*"><\/script>[\s\S]*<script src="script\.js[^"]*"><\/script>[\s\S]*<script type="module" src="ai\.bundle\.js[^"]*"><\/script>/
  );
});

test("FlipAI uses Firebase AI Logic hybrid inference behind App Check", () => {
  const engine = fs.readFileSync("src/flip-ai.js", "utf8");

  assert.match(engine, /from "firebase\/ai"/);
  assert.match(engine, /initializeAppCheck\(app, \{[\s\S]*ReCaptchaEnterpriseProvider/);
  assert.match(engine, /getAI\(app, \{ backend: new GoogleAIBackend\(\) \}\)/);
  assert.match(engine, /getGenerativeModel\(ai, \{\s*mode,/);
  assert.match(engine, /ai_route_grade: InferenceMode\.PREFER_ON_DEVICE/);
  assert.match(engine, /ai_route_exam: InferenceMode\.PREFER_IN_CLOUD/);
  assert.match(engine, /expectedInputs: \[\{ type: "text", languages: unique\(\["en", language\]\) \}\]/);
  assert.match(engine, /promptOptions: \{ responseConstraint: schema \}/);
  assert.match(engine, /responseMimeType: "application\/json", responseSchema: schema/);
  assert.match(engine, /inferenceSource/);
  assert.match(engine, /getRemoteConfig\(app\)/);
  // Model text reaches the UI as plain text: markdown markers are stripped.
  assert.match(engine, /const cleanText = \(value, maxLength = 400\) => stripMarkdown\(/);
  assert.match(engine, /stripMarkdown\(line\.replace/);
  assert.doesNotMatch(engine, /api\.openai\.com|OPENAI_API_KEY/);
});

test("the classic app exposes a narrow bridge and card events for the coach", () => {
  const script = fs.readFileSync("script.js", "utf8");
  const coach = fs.readFileSync("src/coach.js", "utf8");

  assert.match(script, /window\.FlipCardsBridge = Object\.freeze\(\{/);
  assert.match(script, /emitFlipCardsEvent\("card", getBridgeCard\(\)\)/);
  assert.match(script, /emitFlipCardsEvent\("study", \{ active: isActive \}\)/);
  assert.match(script, /emitFlipCardsEvent\("language", \{ language: selectedLanguage \}\)/);
  assert.match(script, /window\.FlipAI\.define\(\{/);
  assert.doesNotMatch(script, /api\.openai\.com/);
  // AI output is inserted as text, never as HTML.
  assert.doesNotMatch(coach, /innerHTML/);
});

test("no Firebase keys, App Check debug tokens or OpenAI keys are committed", () => {
  let tracked = [];
  try {
    tracked = execFileSync("git", ["ls-files"], { encoding: "utf8" }).split("\n").filter(Boolean);
  } catch {
    return;
  }

  assert.ok(!tracked.includes("firebase-config.js"), "firebase-config.js must stay local");

  const textFiles = tracked.filter((file) =>
    /\.(m?js|json|html|css|md|py|toml|txt|ya?ml)$/i.test(file) && fs.existsSync(file)
  );

  for (const file of textFiles) {
    const content = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(content, /AIza[0-9A-Za-z_-]{35}/, `${file} contains a Google API key`);
    assert.doesNotMatch(content, /\bsk-[A-Za-z0-9_-]{24,}/, `${file} contains an OpenAI-style key`);
    assert.doesNotMatch(content, /appCheckDebugToken\s*:\s*"[0-9a-f]{8}-/i, `${file} contains an App Check debug token`);
  }
});
