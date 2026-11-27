const languageSwitch = document.querySelector(".language-switch");
const languageButtons = document.querySelectorAll("[data-language-option]");
const languageMenuTrigger = document.querySelector("[data-language-menu-trigger]");
const languageMenuCurrent = document.querySelector("[data-language-menu-current]");
const languageModal = document.querySelector("[data-language-modal]");
const languageModalTitle = document.querySelector("[data-language-modal-title]");
const languageModalCloseButtons = document.querySelectorAll("[data-language-modal-close]");
const languageDialogButtons = document.querySelectorAll("[data-language-dialog-option]");
const topActions = document.querySelector(".top-actions");
const appRoot = document.querySelector(".app");
const studyToolbar = document.querySelector("[data-study-toolbar]");
const homeView = document.querySelector(".home-view");
const homeStandardTitle = document.querySelector("[data-home-standard-title]");
const homeStandardRatio = document.querySelector("[data-home-standard-ratio]");
const homeStandardButton = document.querySelector("[data-home-action='choose-standard']");
const homeSourceList = document.querySelector("[data-home-source-list]");
const homeActionButtons = document.querySelectorAll("[data-home-action]");
const appBackButton = document.querySelector("[data-app-back]");
const form = document.querySelector(".creator");
const standardFieldLabel = document.querySelector("[data-standard-field-label]");
const standardSelect = document.querySelector("#standardSelect");
const standardPanel = document.querySelector(".standard-panel");
const manualCreator = document.querySelector(".manual-creator");
const standardTitle = document.querySelector("[data-standard-title]");
const standardCount = document.querySelector("[data-standard-count]");
const standardProgressText = document.querySelector("[data-standard-progress-text]");
const standardProgressBar = document.querySelector("[data-standard-progress-bar]");
const standardProgress = document.querySelector(".standard-progress");
const standardSearchLabel = document.querySelector("[data-standard-search-label]");
const standardSearch = document.querySelector("#standardSearch");
const standardStatus = document.querySelector("[data-standard-status]");
const standardConcepts = document.querySelector("[data-standard-concepts]");
const customSetPanel = document.querySelector("[data-custom-set-panel]");
const customSetLabel = document.querySelector("[data-custom-set-label]");
const customSetSelect = document.querySelector("#customSetSelect");
const customSetNameField = document.querySelector("[data-custom-set-name-field]");
const customSetNameLabel = document.querySelector("[data-custom-set-name-label]");
const customSetNameInput = document.querySelector("#customSetName");
const customSetHelp = document.querySelector("[data-custom-set-help]");
const conceptFieldLabel = document.querySelector("[data-concept-field-label]");
const frontInput = document.querySelector("#frontText");
const definitionModeGroup = document.querySelector(".definition-mode");
const backInput = document.querySelector("#backText");
const definitionModeInputs = document.querySelectorAll("[name='definitionMode']");
const definitionModeLabels = document.querySelectorAll(".definition-mode span");
const definitionFieldLabel = document.querySelector("[data-definition-field-label]");
const aiTools = document.querySelector(".ai-tools");
const aiButton = document.querySelector(".ai-button");
const aiStatus = document.querySelector(".ai-status");
const generateButton = document.querySelector(".generate-button");
const definitionError = document.querySelector("[data-definition-error]");
const stage = document.querySelector(".card-stage");
const studyHeading = document.querySelector("[data-study-heading]");
const standardStudyHud = document.querySelector("[data-standard-study-hud]");
const standardReviewCount = document.querySelector("[data-standard-review-count]");
const standardMasteredCount = document.querySelector("[data-standard-mastered-count]");
const standardSessionRatio = document.querySelector("[data-standard-session-ratio]");
const standardSessionTrack = document.querySelector("[data-standard-session-track]");
const card = document.querySelector(".flip-card");
const frontFaceButton = document.querySelector(".flip-card__face--front");
const backFace = document.querySelector(".flip-card__face--back");
const frontOutput = document.querySelector("[data-front-output]");
const nextCardPreview = document.querySelector("[data-next-card-preview]");
const nextCardOutput = document.querySelector("[data-next-card-output]");
const answerCard = document.querySelector(".answer-card");
const studyStatus = document.querySelector("[data-study-status]");
const studyFeedback = document.querySelector("[data-study-feedback]");
const definitionPreview = document.querySelector("[data-definition-preview]");
const definitionTimer = document.querySelector("[data-definition-timer]");
const readyAnswerButton = document.querySelector("[data-ready-answer]");
const readyAnswerLabel = document.querySelector("[data-ready-answer-label]");
const wordSlots = document.querySelector("[data-word-slots]");
const difficultyTracker = document.querySelector("[data-difficulty-tracker]");
const libraryView = document.querySelector(".library-view");
const libraryTitle = document.querySelector("[data-library-title]");
const librarySummary = document.querySelector("[data-library-summary]");
const librarySearchField = document.querySelector(".library-search-field");
const librarySearchLabel = document.querySelector("[data-library-search-label]");
const librarySearch = document.querySelector("#librarySearch");
const alphabetIndex = document.querySelector(".alphabet-index");
const completedList = document.querySelector(".completed-list");
const libraryEmpty = document.querySelector(".library-empty");
const libraryEmptyAction = document.querySelector("[data-library-start]");
const profileView = document.querySelector(".profile-view");
const profileTitle = document.querySelector("[data-profile-title]");
const profileSummary = document.querySelector("[data-profile-summary]");
const profileName = document.querySelector("[data-profile-name]");
const profileIdentity = document.querySelector("[data-profile-identity]");
const profileMetrics = document.querySelector("[data-profile-metrics]");
const profilePreferences = document.querySelector("[data-profile-preferences]");
const profileTodayLabel = document.querySelector("[data-profile-today-label]");
const profileTodayValue = document.querySelector("[data-profile-today-value]");
const profileLibraryLabel = document.querySelector("[data-profile-library-label]");
const profileLibraryValue = document.querySelector("[data-profile-library-value]");
const profileStandardLabel = document.querySelector("[data-profile-standard-label]");
const profileStandardValue = document.querySelector("[data-profile-standard-value]");
const profileAchievements = document.querySelector("[data-profile-achievements]");
const profileAchievementsTitle = document.querySelector("[data-profile-achievements-title]");
const profileCalendarMeta = document.querySelector("[data-profile-calendar-meta]");
const profileCalendarTitle = document.querySelector("[data-profile-calendar-title]");
const profileCalendarBadge = document.querySelector("[data-profile-calendar-badge]");
const profileCalendarCopy = document.querySelector("[data-profile-calendar-copy]");
const profileWeek = document.querySelector("[data-profile-week]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeToggleLabel = document.querySelector("[data-theme-toggle-label]");
const themeToggleValue = document.querySelector("[data-theme-toggle-value]");
const resetMemoryButton = document.querySelector("[data-reset-memory]");
const resetMemoryLabel = document.querySelector("[data-reset-memory-label]");
const profileStartAction = document.querySelector("[data-profile-start]");
const privacyLink = document.querySelector("[data-privacy-link]");
const navButtons = document.querySelectorAll(".nav-button[data-view]");
const bottomNav = document.querySelector(".bottom-nav");
const navHomeLabel = document.querySelector("[data-nav-home-label]");
const navLibraryLabel = document.querySelector("[data-nav-library-label]");
const navProfileLabel = document.querySelector("[data-nav-profile-label]");

const removeLegacyFrontTitle = () => {
  document.querySelectorAll(".flip-card__context, [data-front-context]").forEach((element) => {
    element.remove();
  });
};

removeLegacyFrontTitle();
const swipeDecision = document.querySelector("[data-swipe-decision]");
const swipeDecisionLabel = document.querySelector("[data-swipe-decision-label]");
const swipeDecisionConcept = document.querySelector("[data-swipe-decision-concept]");
const swipeDecisionHint = document.querySelector("[data-swipe-decision-hint]");
const swipeReviewLabel = document.querySelector("[data-swipe-review-label]");
const swipeKnownLabel = document.querySelector("[data-swipe-known-label]");
const swipeReviewAction = document.querySelector("[data-swipe-review-action]");
const swipeKnownAction = document.querySelector("[data-swipe-known-action]");

let definitionText = "";
let selectedDefinitionMode = "manual";
let selectedLanguage = "es";
let selectedTheme = "light";
let isGeneratingDefinition = false;
let previewTimer = 0;
let backIntroTimer = 0;
let flipSequenceTimer = 0;
let frontPressFillTimer = 0;
let frontPressFillStartedAt = 0;
let backFaceReturnTimer = 0;
let wordMasteryAdvanceTimer = 0;
let approvalAudioContext = null;
let isSwipeDecisionActive = false;
let isAdvancingWordMastery = false;
let swipePointerId = null;
let swipeStartX = 0;
let swipeStartY = 0;
let swipeCurrentX = 0;
let swipeCurrentY = 0;
let swipeStartCenterX = 0;
let swipeStartHalfWidth = 0;
let swipeStartedInDecisionMode = false;
let swipeStartedFlipped = false;
let swipeDragActivated = false;
let swipeCommitted = false;
let swipeAttemptDenied = false;
let swipeDenyTimer = 0;
let suppressNextFaceClick = false;
let faceClickSuppressionTimer = 0;
let masteryCelebrationTimer = 0;
let isHomeSourceExpanded = false;
let languageModalRestoreFocus = null;
let studyQuickLanguage = "es";
let activeLibraryLetter = "";
let appBackStack = [];
let appBackGesturePointerId = null;
let appBackGestureStartX = 0;
let appBackGestureStartY = 0;
let appBackGestureStarted = false;
let activeSession = null;
const missFeedbackTimers = new WeakMap();
const wordRepeatPressTimers = new WeakMap();
const wordRepeatPressDelay = 560;
let standards = [];
let selectedStandard = null;
let standardsError = "";
let currentStandardId = "";
let currentStandardConceptId = "";
let currentConceptTerm = "";
let currentConceptSpanishTerm = "";
let currentConceptPrimaryTerm = "";
let currentConceptSecondaryTerm = "";
let currentDefinitionLanguage = "es";
let currentPracticeTargetAnswers = [];
let currentPracticeRoundAnswers = [];
let currentPracticeRepeatAnswers = new Set();
let standardMessage = "";
let standardBusyConceptId = "";
let standardRequestId = 0;
let standardDefinitionController = null;
let standardStreakAnimationTimer = 0;
let aiBackendAvailable = false;

const completedStorageKey = "flipcards.completedConcepts";
const standardProgressKey = "flipcards.standardProgress";
const standardReviewProgressKey = "flipcards.standardReviewProgress";
const standardStreakKey = "flipcards.standardStreaks";
const customStandardsStorageKey = "flipcards.customStandards";
const wordMasteryProgressKey = "flipcards.wordMasteryProgress";
const activeStandardKey = "flipcards.activeStandard";
const languageStorageKey = "flipcards.language";
const themeStorageKey = "flipcards.theme";
const studyMemoryStorageKeys = [
  completedStorageKey,
  standardProgressKey,
  standardReviewProgressKey,
  standardStreakKey,
  wordMasteryProgressKey
];
const dailyGoal = 3;
const definitionRequestTimeoutMs = 35000;
const flipDuration = 680;
const frontPressFillDuration = 260;
const swipeActivationDistance = 8;
const swipeHorizontalBias = 1.18;
const swipeDropZoneRatio = 0.28;
const swipeEdgeTouchInset = 12;
const appBackGestureEdge = 28;
const appBackGestureDistance = 72;
const standardStreakThreshold = 3;
const customSetCreateValue = "__new__";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const alphabet = "#ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
const latinAlphabetLanguages = new Set(["es", "en", "fr", "de"]);
const practiceStopWords = {
  es: new Set([
    "a", "al", "algo", "como", "con", "de", "del", "el", "en", "es", "esa",
    "ese", "esta", "este", "la", "las", "lo", "los", "o", "para", "por",
    "que", "se", "sin", "su", "sus", "un", "una", "unas", "unos", "y"
  ]),
  en: new Set([
    "a", "an", "and", "are", "as", "at", "be", "by", "for", "from", "in",
    "into", "is", "it", "its", "of", "on", "or", "that", "the", "their",
    "this", "to", "with"
  ]),
  fr: new Set([
    "a", "au", "aux", "avec", "ce", "ces", "dans", "de", "des", "du", "en",
    "est", "et", "la", "le", "les", "ou", "par", "pour", "que", "qui", "un",
    "une"
  ]),
  de: new Set([
    "als", "am", "an", "auf", "aus", "bei", "das", "dem", "den", "der", "des",
    "die", "ein", "eine", "einen", "einer", "eines", "für", "im", "in", "ist",
    "mit", "oder", "und", "von", "zu"
  ]),
  ja: new Set([
    "こと", "これ", "その", "ため", "など", "もの"
  ]),
  ko: new Set([
    "및", "또는", "그리고", "에서", "으로", "하는", "있는", "대한"
  ]),
  ar: new Set([
    "أو", "أن", "إلى", "التي", "الذي", "على", "عن", "في", "قد", "ما", "من",
    "هذا", "هذه", "هو", "هي", "و"
  ])
};
const feedbackMessages = {
  es: {
    correct: ["Bien", "Esa era", "Va tomando forma", "Una más"],
    nearMiss: ["Casi", "Prueba esa otra vez", "Ajusta esta palabra"]
  },
  en: {
    correct: ["Good", "That was it", "Taking shape", "One more"],
    nearMiss: ["Almost", "Try that one again", "Adjust this word"]
  },
  fr: {
    correct: ["Bien", "C'était ça", "Ça prend forme", "Encore une"],
    nearMiss: ["Presque", "Essaie encore", "Ajuste ce mot"]
  },
  de: {
    correct: ["Gut", "Das war es", "Es nimmt Form an", "Noch eins"],
    nearMiss: ["Fast", "Versuch es noch einmal", "Passe dieses Wort an"]
  },
  ja: {
    correct: ["よし", "それです", "形になっています", "もう一つ"],
    nearMiss: ["惜しい", "もう一度試して", "この語を調整して"]
  },
  ko: {
    correct: ["좋아요", "맞았어요", "점점 잡혀가요", "하나 더"],
    nearMiss: ["거의 맞았어요", "다시 해보세요", "이 단어를 조정하세요"]
  },
  ar: {
    correct: ["جيد", "هذا هو", "تتضح الفكرة", "واحدة أخرى"],
    nearMiss: ["قريب", "جرّب مرة أخرى", "عدّل هذه الكلمة"]
  }
};
const languageOrder = ["es", "en", "hi", "zh", "fr", "de", "ja", "ko", "ar"];
const supportedLanguages = [...languageOrder];
const languageMetadata = {
  es: {
    labelKey: "spanish",
    shortKey: "languageSpanishShort",
    htmlLang: "es",
    flagCode: "es"
  },
  en: {
    labelKey: "english",
    shortKey: "languageEnglishShort",
    htmlLang: "en",
    flagCode: "us"
  },
  hi: {
    labelKey: "hindi",
    shortKey: "languageHindiShort",
    htmlLang: "hi",
    flagCode: "in"
  },
  zh: {
    labelKey: "chinese",
    shortKey: "languageChineseShort",
    htmlLang: "zh",
    flagCode: "cn"
  },
  fr: {
    labelKey: "french",
    shortKey: "languageFrenchShort",
    htmlLang: "fr",
    flagCode: "fr"
  },
  de: {
    labelKey: "german",
    shortKey: "languageGermanShort",
    htmlLang: "de",
    flagCode: "de"
  },
  ja: {
    labelKey: "japanese",
    shortKey: "languageJapaneseShort",
    htmlLang: "ja",
    flagCode: "jp"
  },
  ko: {
    labelKey: "korean",
    shortKey: "languageKoreanShort",
    htmlLang: "ko",
    flagCode: "kr"
  },
  ar: {
    labelKey: "arabic",
    shortKey: "languageArabicShort",
    htmlLang: "ar",
    flagCode: "arab"
  }
};
const maxWordDifficultyLevels = 3;
const maxPracticeHiddenWords = 5;
const secondWordDifficultyTarget = 3;
const copy = {
	  es: {
	    alphabeticalIndex: "Índice alfabético",
	    answer: "Completar",
	    aiEmptyDefinition: "La IA no generó una definición",
	    back: "Volver",
	    ai: "IA",
	    aiDefinitionLanguageChanged: "Cambiaste de idioma. Genera la definición otra vez para mantenerla alineada.",
    aiDefinitionReady: "Definición lista; puedes editarla",
    aiModeHelp: "Genera una definición con IA o escríbela manualmente.",
    aiUnavailable: "No pude conectar con IA ahora. Puedes escribirla manualmente.",
    anotherReady: "hay otro listo si quieres seguir",
    closeToday: "Cerrar por hoy",
    completeDefinition: "Completar definición",
	    completeKeywords: "Completa las palabras clave",
	    completed: "Completado",
	    completedConcepts: "Conceptos completados",
	    concept: "Concepto",
	    conceptCount: ({ total }) => `${total} conceptos`,
	    conceptPlaceholder: "Ej. Diseño minimalista",
    conceptsAvailable: "Conceptos disponibles",
    conceptsStatus: ({ count, pulse }) => `${count} conceptos${pulse ? ` · ${pulse}` : ""}`,
    conceptSaved: "Concepto guardado",
    continue: "Continuar",
	    createAnother: "Crear otra",
	    createCard: "Crear tarjeta",
	    createdCardAria: "Tarjeta creada",
	    createCustomSet: "Crear conjunto nuevo",
    customSet: "Conjunto",
    customSetAria: "Conjunto de tarjetas",
	    customSetHelp: "Guarda esta tarjeta en un conjunto para activar conteos y rachas.",
	    customSetName: "Nombre del conjunto",
	    customSetNamePlaceholder: "Ej. Certificación Scrum",
	    customSetNameRequired: "Ponle nombre al conjunto para guardar la tarjeta ahí.",
	    customSetSaved: ({ name }) => `Guardada en ${name}`,
	    customSetFallback: ({ index }) => `Conjunto ${index}`,
	    definition: "Definición",
	    definitionErrorShort: "No pude generar la definición. Puedes escribirla manualmente.",
	    definitionGeneratedPlaceholder: "Aquí aparecerá la definición generada",
	    definitionMinimumWords: "Escribe una definición con al menos dos palabras.",
	    definitionMode: "Modo de definición",
	    definitionPlaceholder: "Escribe una definición breve",
    decisionDominated: "Dominado",
    decisionHint: "Izquierda en progreso · derecha seguir adelante",
    decisionKnown: "Dominado",
    decisionKnownAction: "Guardar y seguir",
    decisionNeedsDifficulty: "Aún no has completado ningún nivel de dificultad",
    decisionReview: "En progreso",
    decisionReviewAction: "Marcar en progreso",
    decisionReviewFeedback: "Lo dejamos en progreso",
    decisionSaved: "Concepto dominado",
    difficultyProgress: ({ completed, total }) => `${completed}/${total} niveles superados`,
    doneToday: "listo por hoy",
    emptyProfile: "Aún no hay conceptos guardados. Completa una sesión para llenar tu biblioteca.",
    arabic: "Árabe",
    chinese: "Chino",
    english: "Inglés",
    excellent: "Excelente",
    french: "Francés",
	    generateAI: "Generar con IA",
	    generatingDefinition: "Generando definición… puede tardar unos segundos",
    german: "Alemán",
	    home: "Inicio",
	    homeAria: "Inicio",
	    hindi: "Hindi",
    japanese: "Japonés",
    korean: "Coreano",
	    cardSource: "Fuente de tarjetas",
	    collapseSources: "Colapsar fuentes",
	    expandSources: "Desplegar fuentes",
    languageControl: "Idioma de estudio",
    languageArabicShort: "AR",
    languageChineseShort: "ZH",
    languageEnglishShort: "EN",
    languageFrenchShort: "FR",
    languageGermanShort: "DE",
    languageHindiShort: "HI",
    languageJapaneseShort: "JA",
    languageKoreanShort: "KO",
    languageMenuTrigger: ({ language }) => `Cambiar idioma: ${language}`,
    languagePickerClose: "Cerrar selector de idioma",
    languagePickerTitle: "Elige idioma",
    languageSpanishShort: "ES",
    library: "Tu biblioteca",
    libraryComplete: "Biblioteca completa",
	    libraryNav: "Biblioteca",
	    loadIndexError: "No se pudo cargar el índice",
	    loading: "Cargando…",
	    loadingCard: "Cargando tarjeta…",
	    mainNavigation: "Navegación principal",
	    manual: "Manual",
	    noResults: "Sin resultados. Prueba otra búsqueda.",
    noCustomSet: "Sin conjunto",
	    preparingConcepts: "Preparando conceptos…",
	    prepareConcept: "Preparando concepto…",
	    prepareFirstCard: "Preparando primera tarjeta…",
	    prepareNextConcept: "Preparando siguiente concepto",
	    primaryActions: "Acciones principales",
	    profile: "Perfil",
    profileAchievements: "Logros",
    profileIdentityAria: "Perfil del estudiante",
    profileMetricsAria: "Resumen del perfil",
    profilePreferencesAria: "Preferencias",
    profileCalendarAria: "Calendario semanal",
    profileCalendarCopy: ({ active, total }) =>
      active
        ? `${active}/${total} días con estudio esta semana.`
        : "Empieza tu racha semanal estudiando hoy.",
    profileCalendarMeta: "Semana actual",
    profileCalendarTitle: "1 semana",
    profileLearnerName: "Estudiante FlipCards",
    profileLibraryMetric: "Biblioteca",
    profileStandardMetric: "Estándar",
    profileSummaryLine: ({ total }) =>
      total
        ? `${total} concepto${total === 1 ? "" : "s"} en tu biblioteca`
        : "Tu progreso vive aquí",
    profileTitle: "Tu perfil",
    profileTodayMetric: "Hoy",
    profileTodayWord: "hoy",
    readIdea: "Lee la idea",
    rememberedToday: ({ completed, goal }) => {
      const progress = Math.min(completed, goal);
      if (completed <= 0) {
        return `0/${goal} para recordar hoy`;
      }
      if (completed < goal) {
        return `${progress}/${goal} recordados hoy`;
      }
      return `${progress}/${goal} recordados hoy · listo por hoy`;
    },
    remaining: ({ remaining }) => `${remaining} por explorar`,
    resetMemory: "Reiniciar memoria",
    resetMemoryConfirm: "Esto borrará progreso, rachas y biblioteca completada. Tus conjuntos creados se conservan. ¿Reiniciar memoria?",
    resetMemoryDone: "Memoria reiniciada",
    reviewAnswer: "Revisa la respuesta",
    repeatWord: ({ word }) => `${word}. Mantén presionado para repetir esta palabra.`,
    repeatWordQueued: "Esa palabra vuelve a práctica",
    savedInLibrary: "Guardado en tu biblioteca",
	    search: "Buscar",
	    searchConcept: "Buscar concepto",
	    searchSavedConcept: "Buscar concepto guardado",
	    sessionProgress: ({ current, total }) => `Concepto ${current}/${total}`,
	    sessionSaved: ({ completed, goal }) => `${Math.min(completed, goal)}/${goal} de esta sesión`,
	    shortSession: "Empezar sesión corta",
	    showConceptsStartingWith: ({ letter }) => `Mostrar conceptos que empiezan por ${letter}`,
	    showConcept: "Ver concepto",
	    showDefinition: "Ver definición",
    slotProgress: ({ matches, total }) => `${matches}/${total} palabras`,
    spanish: "Español",
    standard: "Estándar",
	    sourceSelected: "Fuente activa",
	    standardConceptsAria: "Conceptos del estándar",
	    standardProgress: "Progreso del estándar",
	    standardProgressAriaText: ({ completed, total }) => `${completed} de ${total} conceptos completados`,
	    standardReady: "Estándares no disponibles",
	    standardUnavailable: "Estándares no disponibles",
	    studyCard: "Tarjeta de estudio",
    studyToolbarAria: "Acciones de estudio",
    suggestedContinue: "Seguir sesión sugerida",
    suggestedSession: ({ count, pulse }) => `Sesión sugerida: ${count} conceptos${pulse ? ` · ${pulse}` : ""}`,
    switchStandard: "Cambiar estándar",
    todayDone: "listo por hoy",
    viewProfile: "Ver perfil",
    wordCorrect: "Palabra correcta",
    wordMasteryAdvance: ({ level, total, words }) =>
      `Bien. Nivel ${level}/${total}: ${words} palabra${words === 1 ? "" : "s"}`,
    slotContext: ({ index, total, previousWord, nextWord }) => [
      `Hueco ${index} de ${total}.`,
      previousWord ? `Después de ${previousWord}.` : "",
      nextWord ? `Antes de ${nextWord}.` : ""
    ].filter(Boolean).join(" "),
    standardDefinitionMissing: "Este concepto no tiene definición local completa.",
    standardInProgress: "En progreso",
    standardStudyProgress: ({ advanced, total, review, mastered }) =>
      `${advanced}/${total} avanzados · ${review} en progreso · ${mastered} dominados`,
    standardStudyRatio: ({ advanced, total }) => `${advanced} de ${total}`,
	    standardNote: ({ language }) =>
	      `Elige un concepto; la definición local se cargará en ${language}.`,
	    themeDark: "Oscuro",
	    themeLight: "Claro",
	    themeToggle: "Modo oscuro",
	    timeoutTryAgain: "Tiempo agotado; intenta de nuevo",
	    profileSummary: ({ total, shown, query }) =>
	      query
	        ? `${shown} resultado${shown === 1 ? "" : "s"} · ${total} guardado${total === 1 ? "" : "s"}`
	        : `${total} concepto${total === 1 ? "" : "s"} guardado${total === 1 ? "" : "s"} · a tu ritmo`,
	    privacy: "Privacidad",
	    weekdayLabels: ["D", "L", "M", "M", "J", "V", "S"],
	    wordSlotAria: ({ index, total }) => `Palabra ${index} de ${total} de la definición`
	  },
	  en: {
	    alphabeticalIndex: "Alphabetical index",
	    answer: "Complete",
	    aiEmptyDefinition: "AI did not generate a definition",
	    back: "Back",
	    ai: "AI",
    aiDefinitionLanguageChanged: "Language changed. Generate the definition again to keep it aligned.",
    aiDefinitionReady: "Definition ready; you can edit it",
    aiModeHelp: "Generate a definition with AI or write it manually.",
    aiUnavailable: "I could not connect to AI right now. You can write it manually.",
    anotherReady: "another one is ready if you want to continue",
    closeToday: "Close for today",
    completeDefinition: "Complete definition",
	    completeKeywords: "Complete the key words",
	    completed: "Done",
	    completedConcepts: "Completed concepts",
	    concept: "Concept",
	    conceptCount: ({ total }) => `${total} concepts`,
    conceptPlaceholder: "E.g. Minimalist design",
    conceptsAvailable: "Available concepts",
    conceptsStatus: ({ count, pulse }) => `${count} concepts${pulse ? ` · ${pulse}` : ""}`,
    conceptSaved: "Concept saved",
    continue: "Continue",
	    createAnother: "Create another",
	    createCard: "Create card",
	    createdCardAria: "Created card",
	    createCustomSet: "Create new set",
    customSet: "Set",
    customSetAria: "Card set",
    customSetHelp: "Save this card in a set to unlock counts and streaks.",
	    customSetName: "Set name",
	    customSetNamePlaceholder: "E.g. Scrum certification",
	    customSetNameRequired: "Name the set to save this card there.",
	    customSetSaved: ({ name }) => `Saved in ${name}`,
	    customSetFallback: ({ index }) => `Custom set ${index}`,
	    definition: "Definition",
	    definitionErrorShort: "I could not generate the definition. You can write it manually.",
	    definitionGeneratedPlaceholder: "The generated definition will appear here",
	    definitionMinimumWords: "Write a definition with at least two words.",
	    definitionMode: "Definition mode",
    definitionPlaceholder: "Write a short definition",
    decisionDominated: "Mastered",
    decisionHint: "Left in progress · right keep going",
    decisionKnown: "Mastered",
    decisionKnownAction: "Save and continue",
    decisionNeedsDifficulty: "Complete one difficulty level before marking it mastered",
    decisionReview: "In progress",
    decisionReviewAction: "Mark in progress",
    decisionReviewFeedback: "Kept in progress",
    decisionSaved: "Concept mastered",
    difficultyProgress: ({ completed, total }) => `${completed}/${total} levels cleared`,
    doneToday: "done for today",
    emptyProfile: "No saved concepts yet. Complete one session to fill your library.",
    arabic: "Arabic",
    chinese: "Chinese",
    english: "English",
    excellent: "Excellent",
    french: "French",
	    generateAI: "Generate with AI",
	    generatingDefinition: "Generating definition… this can take a few seconds",
    german: "German",
	    home: "Home",
	    homeAria: "Home",
	    hindi: "Hindi",
    japanese: "Japanese",
    korean: "Korean",
    cardSource: "Card source",
    collapseSources: "Collapse sources",
    expandSources: "Expand sources",
    languageControl: "Study language",
    languageArabicShort: "AR",
    languageChineseShort: "ZH",
    languageEnglishShort: "EN",
    languageFrenchShort: "FR",
    languageGermanShort: "DE",
    languageHindiShort: "HI",
    languageJapaneseShort: "JA",
    languageKoreanShort: "KO",
    languageMenuTrigger: ({ language }) => `Change language: ${language}`,
    languagePickerClose: "Close language picker",
    languagePickerTitle: "Choose language",
    languageSpanishShort: "ES",
	    library: "Your library",
	    libraryComplete: "Library complete",
	    libraryNav: "Library",
	    loadIndexError: "Could not load the index",
	    loading: "Loading…",
	    loadingCard: "Loading card…",
	    mainNavigation: "Main navigation",
	    manual: "Manual",
    noResults: "No results. Try another search.",
    noCustomSet: "No set",
	    preparingConcepts: "Preparing concepts…",
	    prepareConcept: "Preparing concept…",
	    prepareFirstCard: "Preparing first card…",
	    prepareNextConcept: "Preparing next concept",
	    primaryActions: "Primary actions",
	    profile: "Profile",
    profileAchievements: "Achievements",
    profileIdentityAria: "Learner profile",
    profileMetricsAria: "Profile summary",
    profilePreferencesAria: "Preferences",
    profileCalendarAria: "Weekly calendar",
    profileCalendarCopy: ({ active, total }) =>
      active
        ? `${active}/${total} study days this week.`
        : "Start your weekly streak by studying today.",
    profileCalendarMeta: "Current week",
    profileCalendarTitle: "1 week",
    profileLearnerName: "FlipCards Learner",
    profileLibraryMetric: "Library",
    profileStandardMetric: "Standard",
    profileSummaryLine: ({ total }) =>
      total
        ? `${total} concept${total === 1 ? "" : "s"} in your library`
        : "Your progress lives here",
    profileTitle: "Your profile",
    profileTodayMetric: "Today",
    profileTodayWord: "today",
    readIdea: "Read the idea",
    rememberedToday: ({ completed, goal }) => {
      const progress = Math.min(completed, goal);
      if (completed <= 0) {
        return `0/${goal} to recall today`;
      }
      if (completed < goal) {
        return `${progress}/${goal} recalled today`;
      }
      return `${progress}/${goal} recalled today · done for today`;
    },
    remaining: ({ remaining }) => `${remaining} to explore`,
    resetMemory: "Reset memory",
    resetMemoryConfirm: "This will clear progress, streaks, and completed library items. Your created sets stay saved. Reset memory?",
    resetMemoryDone: "Memory reset",
    reviewAnswer: "Review the answer",
    repeatWord: ({ word }) => `${word}. Hold to practice this word again.`,
    repeatWordQueued: "That word is back in practice",
    savedInLibrary: "Saved in your library",
    search: "Search",
    searchConcept: "Search concept",
    searchSavedConcept: "Search saved concept",
	    sessionProgress: ({ current, total }) => `Concept ${current}/${total}`,
	    sessionSaved: ({ completed, goal }) => `${Math.min(completed, goal)}/${goal} in this session`,
	    shortSession: "Start short session",
	    showConceptsStartingWith: ({ letter }) => `Show concepts starting with ${letter}`,
	    showConcept: "Show concept",
    showDefinition: "Show definition",
    slotProgress: ({ matches, total }) => `${matches}/${total} words`,
    spanish: "Spanish",
    standard: "Standard",
	    sourceSelected: "Active source",
	    standardConceptsAria: "Standard concepts",
	    standardProgress: "Standard progress",
	    standardProgressAriaText: ({ completed, total }) => `${completed} of ${total} concepts completed`,
	    standardReady: "Standards unavailable",
    standardUnavailable: "Standards unavailable",
    studyCard: "Study card",
    studyToolbarAria: "Study actions",
    suggestedContinue: "Continue suggested session",
    suggestedSession: ({ count, pulse }) => `Suggested session: ${count} concepts${pulse ? ` · ${pulse}` : ""}`,
    switchStandard: "Change standard",
    todayDone: "done for today",
    viewProfile: "View profile",
    wordCorrect: "Correct word",
    wordMasteryAdvance: ({ level, total, words }) =>
      `Good. Level ${level}/${total}: ${words} word${words === 1 ? "" : "s"}`,
    slotContext: ({ index, total, previousWord, nextWord }) => [
      `Blank ${index} of ${total}.`,
      previousWord ? `After ${previousWord}.` : "",
      nextWord ? `Before ${nextWord}.` : ""
    ].filter(Boolean).join(" "),
    standardDefinitionMissing: "This concept does not have a complete local definition.",
    standardInProgress: "In progress",
    standardStudyProgress: ({ advanced, total, review, mastered }) =>
      `${advanced}/${total} advanced · ${review} in progress · ${mastered} mastered`,
    standardStudyRatio: ({ advanced, total }) => `${advanced} of ${total}`,
    standardNote: () => "Choose a concept; its local definition will load in English.",
	    themeDark: "Dark",
	    themeLight: "Light",
	    themeToggle: "Dark mode",
	    timeoutTryAgain: "Timed out; try again",
	    profileSummary: ({ total, shown, query }) =>
	      query
	        ? `${shown} result${shown === 1 ? "" : "s"} · ${total} saved`
	        : `${total} saved concept${total === 1 ? "" : "s"} · at your pace`,
	    privacy: "Privacy",
	    weekdayLabels: ["S", "M", "T", "W", "T", "F", "S"],
	    wordSlotAria: ({ index, total }) => `Word ${index} of ${total} in the definition`
	  }
	};
copy.hi = {
  ...copy.en,
  alphabeticalIndex: "वर्णानुक्रम सूचकांक",
  answer: "पूरा करें",
  ai: "AI",
  aiDefinitionLanguageChanged: "भाषा बदल गई। परिभाषा को मिलाने के लिए फिर से जनरेट करें।",
  aiDefinitionReady: "परिभाषा तैयार है; आप इसे संपादित कर सकते हैं",
  aiEmptyDefinition: "AI ने परिभाषा नहीं बनाई",
  aiModeHelp: "AI से परिभाषा बनाएं या स्वयं लिखें।",
  aiUnavailable: "अभी AI से कनेक्ट नहीं हो पाया। आप इसे स्वयं लिख सकते हैं।",
  anotherReady: "यदि आगे बढ़ना चाहें तो एक और तैयार है",
  back: "वापस",
  cardSource: "कार्ड स्रोत",
  chinese: "चीनी",
  closeToday: "आज के लिए बंद करें",
  collapseSources: "स्रोत समेटें",
  completeDefinition: "परिभाषा पूरी करें",
  completeKeywords: "मुख्य शब्द पूरे करें",
  completed: "पूर्ण",
  completedConcepts: "पूर्ण संकल्पनाएँ",
  concept: "संकल्पना",
  conceptCount: ({ total }) => `${total} संकल्पनाएँ`,
  conceptPlaceholder: "जैसे न्यूनतम डिज़ाइन",
  conceptSaved: "संकल्पना सहेजी गई",
  conceptsAvailable: "उपलब्ध संकल्पनाएँ",
  conceptsStatus: ({ count, pulse }) => `${count} संकल्पनाएँ${pulse ? ` · ${pulse}` : ""}`,
  continue: "जारी रखें",
  createAnother: "एक और बनाएं",
  createCard: "कार्ड बनाएं",
  createCustomSet: "नया सेट बनाएं",
  createdCardAria: "बनाया गया कार्ड",
  customSet: "सेट",
  customSetAria: "कार्ड सेट",
  customSetFallback: ({ index }) => `सेट ${index}`,
  customSetHelp: "गिनती और स्ट्रीक सक्रिय करने के लिए इस कार्ड को किसी सेट में सहेजें।",
  customSetName: "सेट का नाम",
  customSetNamePlaceholder: "जैसे Scrum प्रमाणन",
  customSetNameRequired: "कार्ड सहेजने के लिए सेट का नाम दें।",
  customSetSaved: ({ name }) => `${name} में सहेजा गया`,
  definition: "परिभाषा",
  definitionErrorShort: "परिभाषा नहीं बन सकी। आप इसे स्वयं लिख सकते हैं।",
  definitionGeneratedPlaceholder: "बनी हुई परिभाषा यहाँ दिखाई देगी",
  definitionMinimumWords: "कम से कम दो शब्दों वाली परिभाषा लिखें।",
  definitionMode: "परिभाषा मोड",
  definitionPlaceholder: "संक्षिप्त परिभाषा लिखें",
  decisionDominated: "महारत",
  decisionHint: "बाएँ प्रगति में · दाएँ आगे बढ़ें",
  decisionKnown: "महारत",
  decisionKnownAction: "सहेजें और आगे बढ़ें",
  decisionNeedsDifficulty: "महारत चिह्नित करने से पहले एक कठिनाई स्तर पूरा करें",
  decisionReview: "प्रगति में",
  decisionReviewAction: "प्रगति में चिह्नित करें",
  decisionReviewFeedback: "प्रगति में रखा गया",
  decisionSaved: "संकल्पना में महारत हासिल हुई",
  difficultyProgress: ({ completed, total }) => `${completed}/${total} स्तर पूरे`,
  doneToday: "आज के लिए पूरा",
  emptyProfile: "अभी कोई सहेजी गई संकल्पना नहीं है। अपनी लाइब्रेरी भरने के लिए एक सत्र पूरा करें।",
  arabic: "अरबी",
  english: "अंग्रेज़ी",
  excellent: "उत्कृष्ट",
  expandSources: "स्रोत खोलें",
  french: "फ़्रेंच",
  generateAI: "AI से बनाएं",
  generatingDefinition: "परिभाषा बन रही है… इसमें कुछ सेकंड लग सकते हैं",
  german: "जर्मन",
  hindi: "हिंदी",
  home: "होम",
  homeAria: "होम",
  japanese: "जापानी",
  korean: "कोरियाई",
  languageControl: "अध्ययन भाषा",
  languageArabicShort: "AR",
  languageChineseShort: "ZH",
  languageEnglishShort: "EN",
  languageFrenchShort: "FR",
  languageGermanShort: "DE",
  languageHindiShort: "HI",
  languageJapaneseShort: "JA",
  languageKoreanShort: "KO",
  languageMenuTrigger: ({ language }) => `भाषा बदलें: ${language}`,
  languagePickerClose: "भाषा चयन बंद करें",
  languagePickerTitle: "भाषा चुनें",
  languageSpanishShort: "ES",
  library: "आपकी लाइब्रेरी",
  libraryComplete: "लाइब्रेरी पूर्ण",
  libraryNav: "लाइब्रेरी",
  loadIndexError: "सूचकांक लोड नहीं हो सका",
  loading: "लोड हो रहा है…",
  loadingCard: "कार्ड लोड हो रहा है…",
  mainNavigation: "मुख्य नेविगेशन",
  manual: "मैनुअल",
  noCustomSet: "कोई सेट नहीं",
  noResults: "कोई परिणाम नहीं। दूसरी खोज आज़माएँ।",
  prepareConcept: "संकल्पना तैयार हो रही है…",
  prepareFirstCard: "पहला कार्ड तैयार हो रहा है…",
  prepareNextConcept: "अगली संकल्पना तैयार हो रही है",
  preparingConcepts: "संकल्पनाएँ तैयार हो रही हैं…",
  primaryActions: "मुख्य क्रियाएँ",
  privacy: "गोपनीयता",
  profile: "प्रोफ़ाइल",
  profileAchievements: "उपलब्धियाँ",
  profileIdentityAria: "विद्यार्थी प्रोफ़ाइल",
  profileMetricsAria: "प्रोफ़ाइल सारांश",
  profilePreferencesAria: "प्राथमिकताएँ",
  profileCalendarAria: "साप्ताहिक कैलेंडर",
  profileCalendarCopy: ({ active, total }) =>
    active
      ? `इस सप्ताह ${active}/${total} अध्ययन दिवस।`
      : "आज अध्ययन करके अपनी साप्ताहिक स्ट्रीक शुरू करें।",
  profileCalendarMeta: "वर्तमान सप्ताह",
  profileCalendarTitle: "1 सप्ताह",
  profileLearnerName: "FlipCards विद्यार्थी",
  profileLibraryMetric: "लाइब्रेरी",
  profileStandardMetric: "मानक",
  profileSummary: ({ total, shown, query }) =>
    query
      ? `${shown} परिणाम · ${total} सहेजे गए`
      : `${total} सहेजी गई संकल्पनाएँ · अपनी गति से`,
  profileSummaryLine: ({ total }) =>
    total
      ? `${total} संकल्पनाएँ आपकी लाइब्रेरी में`
      : "आपकी प्रगति यहाँ रहेगी",
  profileTitle: "आपकी प्रोफ़ाइल",
  profileTodayMetric: "आज",
  profileTodayWord: "आज",
  readIdea: "विचार पढ़ें",
  rememberedToday: ({ completed, goal }) => {
    const progress = Math.min(completed, goal);
    if (completed <= 0) {
      return `आज याद करने के लिए 0/${goal}`;
    }
    if (completed < goal) {
      return `आज ${progress}/${goal} याद`;
    }
    return `आज ${progress}/${goal} याद · आज के लिए पूरा`;
  },
  remaining: ({ remaining }) => `${remaining} खोजने बाकी`,
  repeatWord: ({ word }) => `${word}. इस शब्द का फिर अभ्यास करने के लिए दबाए रखें।`,
  repeatWordQueued: "यह शब्द फिर अभ्यास में आएगा",
  resetMemory: "मेमोरी रीसेट करें",
  resetMemoryConfirm: "यह प्रगति, स्ट्रीक और पूर्ण लाइब्रेरी आइटम मिटा देगा। आपके बनाए सेट सुरक्षित रहेंगे। मेमोरी रीसेट करें?",
  resetMemoryDone: "मेमोरी रीसेट हो गई",
  reviewAnswer: "उत्तर जाँचें",
  savedInLibrary: "आपकी लाइब्रेरी में सहेजा गया",
  search: "खोजें",
  searchConcept: "संकल्पना खोजें",
  searchSavedConcept: "सहेजी गई संकल्पना खोजें",
  sessionProgress: ({ current, total }) => `संकल्पना ${current}/${total}`,
  sessionSaved: ({ completed, goal }) => `इस सत्र में ${Math.min(completed, goal)}/${goal}`,
  shortSession: "छोटा सत्र शुरू करें",
  showConcept: "संकल्पना देखें",
  showConceptsStartingWith: ({ letter }) => `${letter} से शुरू होने वाली संकल्पनाएँ दिखाएँ`,
  showDefinition: "परिभाषा देखें",
  slotContext: ({ index, total, previousWord, nextWord }) => [
    `रिक्त स्थान ${index}/${total}.`,
    previousWord ? `${previousWord} के बाद।` : "",
    nextWord ? `${nextWord} से पहले।` : ""
  ].filter(Boolean).join(" "),
  slotProgress: ({ matches, total }) => `${matches}/${total} शब्द`,
  sourceSelected: "सक्रिय स्रोत",
  spanish: "स्पेनी",
  standard: "मानक",
  standardConceptsAria: "मानक की संकल्पनाएँ",
  standardDefinitionMissing: "इस संकल्पना की पूर्ण स्थानीय परिभाषा नहीं है।",
  standardInProgress: "प्रगति में",
  standardNote: ({ language }) => `संकल्पना चुनें; स्थानीय परिभाषा ${language} में लोड होगी।`,
  standardProgress: "मानक प्रगति",
  standardProgressAriaText: ({ completed, total }) => `${completed} में से ${total} संकल्पनाएँ पूर्ण`,
  standardReady: "मानक उपलब्ध नहीं हैं",
  standardStudyProgress: ({ advanced, total, review, mastered }) =>
    `${advanced}/${total} आगे · ${review} प्रगति में · ${mastered} महारत`,
  standardStudyRatio: ({ advanced, total }) => `${advanced} में से ${total}`,
  standardUnavailable: "मानक उपलब्ध नहीं हैं",
  studyCard: "अध्ययन कार्ड",
  studyToolbarAria: "अध्ययन क्रियाएँ",
  suggestedContinue: "सुझाया गया सत्र जारी रखें",
  suggestedSession: ({ count, pulse }) => `सुझाया गया सत्र: ${count} संकल्पनाएँ${pulse ? ` · ${pulse}` : ""}`,
  switchStandard: "मानक बदलें",
  themeDark: "डार्क",
  themeLight: "लाइट",
  themeToggle: "डार्क मोड",
  timeoutTryAgain: "समय समाप्त; फिर प्रयास करें",
  todayDone: "आज के लिए पूरा",
  viewProfile: "प्रोफ़ाइल देखें",
  weekdayLabels: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
  wordCorrect: "शब्द सही है",
  wordMasteryAdvance: ({ level, total, words }) =>
    `अच्छा। स्तर ${level}/${total}: ${words} शब्द`,
  wordSlotAria: ({ index, total }) => `परिभाषा में शब्द ${index}/${total}`
};
copy.zh = {
  ...copy.en,
  alphabeticalIndex: "字母索引",
  answer: "完成",
  ai: "AI",
  aiDefinitionLanguageChanged: "语言已更改。请重新生成定义以保持一致。",
  aiDefinitionReady: "定义已准备好；你可以编辑",
  aiEmptyDefinition: "AI 未生成定义",
  aiModeHelp: "用 AI 生成定义，或手动编写。",
  aiUnavailable: "现在无法连接 AI。你可以手动编写。",
  anotherReady: "如果想继续，下一张已经准备好",
  back: "返回",
  cardSource: "卡片来源",
  chinese: "中文",
  closeToday: "今天结束",
  collapseSources: "收起来源",
  completeDefinition: "完成定义",
  completeKeywords: "补全关键词",
  completed: "已完成",
  completedConcepts: "已完成的概念",
  concept: "概念",
  conceptCount: ({ total }) => `${total} 个概念`,
  conceptPlaceholder: "例如：极简设计",
  conceptSaved: "概念已保存",
  conceptsAvailable: "可用概念",
  conceptsStatus: ({ count, pulse }) => `${count} 个概念${pulse ? ` · ${pulse}` : ""}`,
  continue: "继续",
  createAnother: "再创建一张",
  createCard: "创建卡片",
  createCustomSet: "创建新集合",
  createdCardAria: "已创建的卡片",
  customSet: "集合",
  customSetAria: "卡片集合",
  customSetFallback: ({ index }) => `集合 ${index}`,
  customSetHelp: "将这张卡片保存到集合，以启用计数和连续学习。",
  customSetName: "集合名称",
  customSetNamePlaceholder: "例如：Scrum 认证",
  customSetNameRequired: "请为集合命名，以便把卡片保存到这里。",
  customSetSaved: ({ name }) => `已保存到 ${name}`,
  definition: "定义",
  definitionErrorShort: "无法生成定义。你可以手动编写。",
  definitionGeneratedPlaceholder: "生成的定义会显示在这里",
  definitionMinimumWords: "请写一个至少包含两个词的定义。",
  definitionMode: "定义模式",
  definitionPlaceholder: "写一个简短定义",
  decisionDominated: "已掌握",
  decisionHint: "左侧进展中 · 右侧继续前进",
  decisionKnown: "已掌握",
  decisionKnownAction: "保存并继续",
  decisionNeedsDifficulty: "标记为已掌握前，请先完成一个难度等级",
  decisionReview: "进展中",
  decisionReviewAction: "标记为进展中",
  decisionReviewFeedback: "已保留为进展中",
  decisionSaved: "概念已掌握",
  difficultyProgress: ({ completed, total }) => `${completed}/${total} 个等级已完成`,
  doneToday: "今天已完成",
  emptyProfile: "还没有保存的概念。完成一次学习后，图书馆会开始填充。",
  arabic: "阿拉伯语",
  english: "英语",
  excellent: "非常好",
  expandSources: "展开来源",
  french: "法语",
  generateAI: "用 AI 生成",
  generatingDefinition: "正在生成定义…可能需要几秒",
  german: "德语",
  hindi: "印地语",
  home: "首页",
  homeAria: "首页",
  japanese: "日语",
  korean: "韩语",
  languageControl: "学习语言",
  languageArabicShort: "AR",
  languageChineseShort: "ZH",
  languageEnglishShort: "EN",
  languageFrenchShort: "FR",
  languageGermanShort: "DE",
  languageHindiShort: "HI",
  languageJapaneseShort: "JA",
  languageKoreanShort: "KO",
  languageMenuTrigger: ({ language }) => `更改语言：${language}`,
  languagePickerClose: "关闭语言选择器",
  languagePickerTitle: "选择语言",
  languageSpanishShort: "ES",
  library: "你的图书馆",
  libraryComplete: "图书馆已完成",
  libraryNav: "图书馆",
  loadIndexError: "无法加载索引",
  loading: "正在加载…",
  loadingCard: "正在加载卡片…",
  mainNavigation: "主导航",
  manual: "手动",
  noCustomSet: "无集合",
  noResults: "没有结果。请尝试其他搜索。",
  prepareConcept: "正在准备概念…",
  prepareFirstCard: "正在准备第一张卡片…",
  prepareNextConcept: "正在准备下一个概念",
  preparingConcepts: "正在准备概念…",
  primaryActions: "主要操作",
  privacy: "隐私",
  profile: "个人资料",
  profileAchievements: "成就",
  profileIdentityAria: "学习者个人资料",
  profileMetricsAria: "个人资料摘要",
  profilePreferencesAria: "偏好设置",
  profileCalendarAria: "周历",
  profileCalendarCopy: ({ active, total }) =>
    active
      ? `本周 ${active}/${total} 天学习。`
      : "今天开始学习，建立你的每周连续记录。",
  profileCalendarMeta: "本周",
  profileCalendarTitle: "1 周",
  profileLearnerName: "FlipCards 学习者",
  profileLibraryMetric: "图书馆",
  profileStandardMetric: "标准",
  profileSummary: ({ total, shown, query }) =>
    query
      ? `${shown} 个结果 · ${total} 个已保存`
      : `${total} 个已保存概念 · 按你的节奏`,
  profileSummaryLine: ({ total }) =>
    total
      ? `你的图书馆中有 ${total} 个概念`
      : "你的进度会显示在这里",
  profileTitle: "你的个人资料",
  profileTodayMetric: "今天",
  profileTodayWord: "今天",
  readIdea: "阅读想法",
  rememberedToday: ({ completed, goal }) => {
    const progress = Math.min(completed, goal);
    if (completed <= 0) {
      return `今天要回忆 0/${goal}`;
    }
    if (completed < goal) {
      return `今天已回忆 ${progress}/${goal}`;
    }
    return `今天已回忆 ${progress}/${goal} · 今天已完成`;
  },
  remaining: ({ remaining }) => `还有 ${remaining} 个待探索`,
  repeatWord: ({ word }) => `${word}。长按可再次练习这个词。`,
  repeatWordQueued: "这个词会回到练习中",
  resetMemory: "重置记忆",
  resetMemoryConfirm: "这会清除进度、连续记录和已完成图书馆项目。你创建的集合会保留。要重置记忆吗？",
  resetMemoryDone: "记忆已重置",
  reviewAnswer: "检查答案",
  savedInLibrary: "已保存到你的图书馆",
  search: "搜索",
  searchConcept: "搜索概念",
  searchSavedConcept: "搜索已保存的概念",
  sessionProgress: ({ current, total }) => `概念 ${current}/${total}`,
  sessionSaved: ({ completed, goal }) => `本次学习 ${Math.min(completed, goal)}/${goal}`,
  shortSession: "开始短学习",
  showConcept: "查看概念",
  showConceptsStartingWith: ({ letter }) => `显示以 ${letter} 开头的概念`,
  showDefinition: "查看定义",
  slotContext: ({ index, total, previousWord, nextWord }) => [
    `空格 ${index}/${total}。`,
    previousWord ? `在 ${previousWord} 之后。` : "",
    nextWord ? `在 ${nextWord} 之前。` : ""
  ].filter(Boolean).join(" "),
  slotProgress: ({ matches, total }) => `${matches}/${total} 个词`,
  sourceSelected: "当前来源",
  spanish: "西班牙语",
  standard: "标准",
  standardConceptsAria: "标准概念",
  standardDefinitionMissing: "这个概念没有完整的本地定义。",
  standardInProgress: "进展中",
  standardNote: ({ language }) => `选择一个概念；本地定义会以${language}加载。`,
  standardProgress: "标准进度",
  standardProgressAriaText: ({ completed, total }) => `${total} 个概念中已完成 ${completed} 个`,
  standardReady: "标准不可用",
  standardStudyProgress: ({ advanced, total, review, mastered }) =>
    `${advanced}/${total} 已推进 · ${review} 进展中 · ${mastered} 已掌握`,
  standardStudyRatio: ({ advanced, total }) => `${advanced}/${total}`,
  standardUnavailable: "标准不可用",
  studyCard: "学习卡片",
  studyToolbarAria: "学习操作",
  suggestedContinue: "继续建议学习",
  suggestedSession: ({ count, pulse }) => `建议学习：${count} 个概念${pulse ? ` · ${pulse}` : ""}`,
  switchStandard: "更改标准",
  themeDark: "深色",
  themeLight: "浅色",
  themeToggle: "深色模式",
  timeoutTryAgain: "已超时；请重试",
  todayDone: "今天已完成",
  viewProfile: "查看个人资料",
  weekdayLabels: ["日", "一", "二", "三", "四", "五", "六"],
  wordCorrect: "单词正确",
  wordMasteryAdvance: ({ level, total, words }) =>
    `很好。等级 ${level}/${total}：${words} 个词`,
  wordSlotAria: ({ index, total }) => `定义中的第 ${index}/${total} 个词`
};
copy.fr = {
  ...copy.en,
  alphabeticalIndex: "Index alphabétique",
  answer: "Compléter",
  aiDefinitionLanguageChanged: "La langue a changé. Générez à nouveau la définition pour la garder alignée.",
  aiDefinitionReady: "Définition prête ; vous pouvez la modifier",
  aiEmptyDefinition: "L'IA n'a pas généré de définition",
  aiModeHelp: "Générez une définition avec l'IA ou écrivez-la manuellement.",
  aiUnavailable: "Impossible de se connecter à l'IA pour le moment. Vous pouvez l'écrire manuellement.",
  anotherReady: "une autre carte est prête si vous voulez continuer",
  arabic: "Arabe",
  back: "Retour",
  cardSource: "Source des cartes",
  chinese: "Chinois",
  closeToday: "Fermer pour aujourd'hui",
  collapseSources: "Réduire les sources",
  completeDefinition: "Compléter la définition",
  completeKeywords: "Complétez les mots clés",
  completed: "Terminé",
  completedConcepts: "Concepts terminés",
  concept: "Concept",
  conceptCount: ({ total }) => `${total} concepts`,
  conceptPlaceholder: "Ex. design minimaliste",
  conceptSaved: "Concept enregistré",
  conceptsAvailable: "Concepts disponibles",
  conceptsStatus: ({ count, pulse }) => `${count} concepts${pulse ? ` · ${pulse}` : ""}`,
  continue: "Continuer",
  createAnother: "Créer une autre",
  createCard: "Créer une carte",
  createCustomSet: "Créer un nouvel ensemble",
  createdCardAria: "Carte créée",
  customSet: "Ensemble",
  customSetAria: "Ensemble de cartes",
  customSetFallback: ({ index }) => `Ensemble ${index}`,
  customSetHelp: "Enregistrez cette carte dans un ensemble pour activer les compteurs et les séries.",
  customSetName: "Nom de l'ensemble",
  customSetNamePlaceholder: "Ex. certification Scrum",
  customSetNameRequired: "Nommez l'ensemble pour y enregistrer cette carte.",
  customSetSaved: ({ name }) => `Enregistré dans ${name}`,
  definition: "Définition",
  definitionErrorShort: "Impossible de générer la définition. Vous pouvez l'écrire manuellement.",
  definitionGeneratedPlaceholder: "La définition générée apparaîtra ici",
  definitionMinimumWords: "Écrivez une définition d'au moins deux mots.",
  definitionMode: "Mode de définition",
  definitionPlaceholder: "Écrivez une définition courte",
  decisionDominated: "Maîtrisé",
  decisionHint: "Gauche en progression · droite continuer",
  decisionKnown: "Maîtrisé",
  decisionKnownAction: "Enregistrer et continuer",
  decisionNeedsDifficulty: "Terminez un niveau de difficulté avant de marquer comme maîtrisé",
  decisionReview: "En progression",
  decisionReviewAction: "Marquer en progression",
  decisionReviewFeedback: "Gardé en progression",
  decisionSaved: "Concept maîtrisé",
  difficultyProgress: ({ completed, total }) => `${completed}/${total} niveaux réussis`,
  doneToday: "terminé pour aujourd'hui",
  emptyProfile: "Aucun concept enregistré pour l'instant. Terminez une session pour remplir votre bibliothèque.",
  english: "Anglais",
  excellent: "Excellent",
  expandSources: "Déployer les sources",
  french: "Français",
  generateAI: "Générer avec l'IA",
  generatingDefinition: "Génération de la définition… cela peut prendre quelques secondes",
  german: "Allemand",
  hindi: "Hindi",
  home: "Accueil",
  homeAria: "Accueil",
  japanese: "Japonais",
  korean: "Coréen",
  languageArabicShort: "AR",
  languageChineseShort: "ZH",
  languageControl: "Langue d'étude",
  languageEnglishShort: "EN",
  languageFrenchShort: "FR",
  languageGermanShort: "DE",
  languageHindiShort: "HI",
  languageJapaneseShort: "JA",
  languageKoreanShort: "KO",
  languageMenuTrigger: ({ language }) => `Changer de langue : ${language}`,
  languagePickerClose: "Fermer le sélecteur de langue",
  languagePickerTitle: "Choisir la langue",
  languageSpanishShort: "ES",
  library: "Votre bibliothèque",
  libraryComplete: "Bibliothèque complète",
  libraryNav: "Bibliothèque",
  loadIndexError: "Impossible de charger l'index",
  loading: "Chargement…",
  loadingCard: "Chargement de la carte…",
  mainNavigation: "Navigation principale",
  manual: "Manuel",
  noCustomSet: "Aucun ensemble",
  noResults: "Aucun résultat. Essayez une autre recherche.",
  prepareConcept: "Préparation du concept…",
  prepareFirstCard: "Préparation de la première carte…",
  prepareNextConcept: "Préparation du concept suivant",
  preparingConcepts: "Préparation des concepts…",
  primaryActions: "Actions principales",
  privacy: "Confidentialité",
  profile: "Profil",
  profileAchievements: "Réussites",
  profileIdentityAria: "Profil de l'apprenant",
  profileMetricsAria: "Résumé du profil",
  profilePreferencesAria: "Préférences",
  profileCalendarAria: "Calendrier hebdomadaire",
  profileCalendarCopy: ({ active, total }) =>
    active
      ? `${active}/${total} jours d'étude cette semaine.`
      : "Commencez votre série hebdomadaire en étudiant aujourd'hui.",
  profileCalendarMeta: "Semaine actuelle",
  profileCalendarTitle: "1 semaine",
  profileLearnerName: "Apprenant FlipCards",
  profileLibraryMetric: "Bibliothèque",
  profileStandardMetric: "Standard",
  profileSummary: ({ total, shown, query }) =>
    query
      ? `${shown} résultat${shown === 1 ? "" : "s"} · ${total} enregistré${total === 1 ? "" : "s"}`
      : `${total} concept${total === 1 ? "" : "s"} enregistré${total === 1 ? "" : "s"} · à votre rythme`,
  profileSummaryLine: ({ total }) =>
    total
      ? `${total} concept${total === 1 ? "" : "s"} dans votre bibliothèque`
      : "Votre progression vit ici",
  profileTitle: "Votre profil",
  profileTodayMetric: "Aujourd'hui",
  profileTodayWord: "aujourd'hui",
  readIdea: "Lire l'idée",
  rememberedToday: ({ completed, goal }) => {
    const progress = Math.min(completed, goal);
    if (completed <= 0) return `0/${goal} à mémoriser aujourd'hui`;
    if (completed < goal) return `${progress}/${goal} mémorisés aujourd'hui`;
    return `${progress}/${goal} mémorisés aujourd'hui · terminé`;
  },
  remaining: ({ remaining }) => `${remaining} à explorer`,
  repeatWord: ({ word }) => `${word}. Maintenez appuyé pour retravailler ce mot.`,
  repeatWordQueued: "Ce mot revient en pratique",
  resetMemory: "Réinitialiser la mémoire",
  resetMemoryConfirm: "Cela effacera la progression, les séries et la bibliothèque terminée. Vos ensembles créés sont conservés. Réinitialiser ?",
  resetMemoryDone: "Mémoire réinitialisée",
  reviewAnswer: "Réviser la réponse",
  savedInLibrary: "Enregistré dans votre bibliothèque",
  search: "Rechercher",
  searchConcept: "Rechercher un concept",
  searchSavedConcept: "Rechercher un concept enregistré",
  sessionProgress: ({ current, total }) => `Concept ${current}/${total}`,
  sessionSaved: ({ completed, goal }) => `${Math.min(completed, goal)}/${goal} dans cette session`,
  shortSession: "Commencer une session courte",
  showConcept: "Voir le concept",
  showConceptsStartingWith: ({ letter }) => `Afficher les concepts commençant par ${letter}`,
  showDefinition: "Voir la définition",
  slotContext: ({ index, total, previousWord, nextWord }) => [
    `Blanc ${index} sur ${total}.`,
    previousWord ? `Après ${previousWord}.` : "",
    nextWord ? `Avant ${nextWord}.` : ""
  ].filter(Boolean).join(" "),
  slotProgress: ({ matches, total }) => `${matches}/${total} mots`,
  sourceSelected: "Source active",
  spanish: "Espagnol",
  standard: "Standard",
  standardConceptsAria: "Concepts du standard",
  standardDefinitionMissing: "Ce concept n'a pas de définition locale complète.",
  standardInProgress: "En progression",
  standardNote: ({ language }) => `Choisissez un concept ; sa définition locale se chargera en ${language}.`,
  standardProgress: "Progression du standard",
  standardProgressAriaText: ({ completed, total }) => `${completed} sur ${total} concepts terminés`,
  standardReady: "Standards indisponibles",
  standardStudyProgress: ({ advanced, total, review, mastered }) =>
    `${advanced}/${total} avancés · ${review} en progression · ${mastered} maîtrisés`,
  standardStudyRatio: ({ advanced, total }) => `${advanced} sur ${total}`,
  standardUnavailable: "Standards indisponibles",
  studyCard: "Carte d'étude",
  studyToolbarAria: "Actions d'étude",
  suggestedContinue: "Continuer la session suggérée",
  suggestedSession: ({ count, pulse }) => `Session suggérée : ${count} concepts${pulse ? ` · ${pulse}` : ""}`,
  switchStandard: "Changer de standard",
  themeDark: "Sombre",
  themeLight: "Clair",
  themeToggle: "Mode sombre",
  timeoutTryAgain: "Temps écoulé ; réessayez",
  todayDone: "terminé pour aujourd'hui",
  viewProfile: "Voir le profil",
  weekdayLabels: ["D", "L", "M", "M", "J", "V", "S"],
  wordCorrect: "Mot correct",
  wordMasteryAdvance: ({ level, total, words }) =>
    `Bien. Niveau ${level}/${total} : ${words} mot${words === 1 ? "" : "s"}`,
  wordSlotAria: ({ index, total }) => `Mot ${index} sur ${total} dans la définition`
};
copy.de = {
  ...copy.en,
  alphabeticalIndex: "Alphabetischer Index",
  answer: "Vervollständigen",
  aiDefinitionLanguageChanged: "Die Sprache wurde geändert. Erzeuge die Definition erneut, damit sie passt.",
  aiDefinitionReady: "Definition bereit; du kannst sie bearbeiten",
  aiEmptyDefinition: "Die KI hat keine Definition erzeugt",
  aiModeHelp: "Erzeuge eine Definition mit KI oder schreibe sie manuell.",
  aiUnavailable: "Ich konnte gerade keine Verbindung zur KI herstellen. Du kannst sie manuell schreiben.",
  anotherReady: "eine weitere Karte ist bereit, wenn du weitermachen möchtest",
  arabic: "Arabisch",
  back: "Zurück",
  cardSource: "Kartenquelle",
  chinese: "Chinesisch",
  closeToday: "Für heute schließen",
  collapseSources: "Quellen einklappen",
  completeDefinition: "Definition vervollständigen",
  completeKeywords: "Schlüsselwörter vervollständigen",
  completed: "Fertig",
  completedConcepts: "Abgeschlossene Konzepte",
  concept: "Konzept",
  conceptCount: ({ total }) => `${total} Konzepte`,
  conceptPlaceholder: "Z. B. minimalistisches Design",
  conceptSaved: "Konzept gespeichert",
  conceptsAvailable: "Verfügbare Konzepte",
  conceptsStatus: ({ count, pulse }) => `${count} Konzepte${pulse ? ` · ${pulse}` : ""}`,
  continue: "Weiter",
  createAnother: "Weitere erstellen",
  createCard: "Karte erstellen",
  createCustomSet: "Neues Set erstellen",
  createdCardAria: "Erstellte Karte",
  customSet: "Set",
  customSetAria: "Kartenset",
  customSetFallback: ({ index }) => `Set ${index}`,
  customSetHelp: "Speichere diese Karte in einem Set, um Zähler und Serien zu aktivieren.",
  customSetName: "Setname",
  customSetNamePlaceholder: "Z. B. Scrum-Zertifizierung",
  customSetNameRequired: "Benenne das Set, um die Karte dort zu speichern.",
  customSetSaved: ({ name }) => `In ${name} gespeichert`,
  definition: "Definition",
  definitionErrorShort: "Die Definition konnte nicht erzeugt werden. Du kannst sie manuell schreiben.",
  definitionGeneratedPlaceholder: "Die erzeugte Definition erscheint hier",
  definitionMinimumWords: "Schreibe eine Definition mit mindestens zwei Wörtern.",
  definitionMode: "Definitionsmodus",
  definitionPlaceholder: "Schreibe eine kurze Definition",
  decisionDominated: "Beherrscht",
  decisionHint: "Links in Arbeit · rechts weiter",
  decisionKnown: "Beherrscht",
  decisionKnownAction: "Speichern und weiter",
  decisionNeedsDifficulty: "Schließe zuerst eine Schwierigkeitsstufe ab",
  decisionReview: "In Arbeit",
  decisionReviewAction: "Als in Arbeit markieren",
  decisionReviewFeedback: "In Arbeit belassen",
  decisionSaved: "Konzept beherrscht",
  difficultyProgress: ({ completed, total }) => `${completed}/${total} Stufen geschafft`,
  doneToday: "für heute fertig",
  emptyProfile: "Noch keine gespeicherten Konzepte. Beende eine Sitzung, um deine Bibliothek zu füllen.",
  english: "Englisch",
  excellent: "Ausgezeichnet",
  expandSources: "Quellen ausklappen",
  french: "Französisch",
  generateAI: "Mit KI erzeugen",
  generatingDefinition: "Definition wird erzeugt… das kann ein paar Sekunden dauern",
  german: "Deutsch",
  hindi: "Hindi",
  home: "Start",
  homeAria: "Start",
  japanese: "Japanisch",
  korean: "Koreanisch",
  languageArabicShort: "AR",
  languageChineseShort: "ZH",
  languageControl: "Lernsprache",
  languageEnglishShort: "EN",
  languageFrenchShort: "FR",
  languageGermanShort: "DE",
  languageHindiShort: "HI",
  languageJapaneseShort: "JA",
  languageKoreanShort: "KO",
  languageMenuTrigger: ({ language }) => `Sprache ändern: ${language}`,
  languagePickerClose: "Sprachauswahl schließen",
  languagePickerTitle: "Sprache wählen",
  languageSpanishShort: "ES",
  library: "Deine Bibliothek",
  libraryComplete: "Bibliothek vollständig",
  libraryNav: "Bibliothek",
  loadIndexError: "Index konnte nicht geladen werden",
  loading: "Laden…",
  loadingCard: "Karte wird geladen…",
  mainNavigation: "Hauptnavigation",
  manual: "Manuell",
  noCustomSet: "Kein Set",
  noResults: "Keine Ergebnisse. Versuche eine andere Suche.",
  prepareConcept: "Konzept wird vorbereitet…",
  prepareFirstCard: "Erste Karte wird vorbereitet…",
  prepareNextConcept: "Nächstes Konzept wird vorbereitet",
  preparingConcepts: "Konzepte werden vorbereitet…",
  primaryActions: "Hauptaktionen",
  privacy: "Datenschutz",
  profile: "Profil",
  profileAchievements: "Erfolge",
  profileIdentityAria: "Lernendenprofil",
  profileMetricsAria: "Profilübersicht",
  profilePreferencesAria: "Einstellungen",
  profileCalendarAria: "Wochenkalender",
  profileCalendarCopy: ({ active, total }) =>
    active
      ? `${active}/${total} Lerntage diese Woche.`
      : "Starte deine Wochenserie, indem du heute lernst.",
  profileCalendarMeta: "Aktuelle Woche",
  profileCalendarTitle: "1 Woche",
  profileLearnerName: "FlipCards Lernende Person",
  profileLibraryMetric: "Bibliothek",
  profileStandardMetric: "Standard",
  profileSummary: ({ total, shown, query }) =>
    query
      ? `${shown} Ergebnis${shown === 1 ? "" : "se"} · ${total} gespeichert`
      : `${total} gespeicherte${total === 1 ? "s" : ""} Konzept${total === 1 ? "" : "e"} · in deinem Tempo`,
  profileSummaryLine: ({ total }) =>
    total
      ? `${total} Konzept${total === 1 ? "" : "e"} in deiner Bibliothek`
      : "Dein Fortschritt lebt hier",
  profileTitle: "Dein Profil",
  profileTodayMetric: "Heute",
  profileTodayWord: "heute",
  readIdea: "Idee lesen",
  rememberedToday: ({ completed, goal }) => {
    const progress = Math.min(completed, goal);
    if (completed <= 0) return `0/${goal} heute zu erinnern`;
    if (completed < goal) return `${progress}/${goal} heute erinnert`;
    return `${progress}/${goal} heute erinnert · fertig`;
  },
  remaining: ({ remaining }) => `${remaining} zu erkunden`,
  repeatWord: ({ word }) => `${word}. Gedrückt halten, um dieses Wort erneut zu üben.`,
  repeatWordQueued: "Dieses Wort kommt zurück in die Übung",
  resetMemory: "Speicher zurücksetzen",
  resetMemoryConfirm: "Dies löscht Fortschritt, Serien und abgeschlossene Bibliothekseinträge. Deine erstellten Sets bleiben erhalten. Zurücksetzen?",
  resetMemoryDone: "Speicher zurückgesetzt",
  reviewAnswer: "Antwort prüfen",
  savedInLibrary: "In deiner Bibliothek gespeichert",
  search: "Suchen",
  searchConcept: "Konzept suchen",
  searchSavedConcept: "Gespeichertes Konzept suchen",
  sessionProgress: ({ current, total }) => `Konzept ${current}/${total}`,
  sessionSaved: ({ completed, goal }) => `${Math.min(completed, goal)}/${goal} in dieser Sitzung`,
  shortSession: "Kurze Sitzung starten",
  showConcept: "Konzept anzeigen",
  showConceptsStartingWith: ({ letter }) => `Konzepte anzeigen, die mit ${letter} beginnen`,
  showDefinition: "Definition anzeigen",
  slotContext: ({ index, total, previousWord, nextWord }) => [
    `Lücke ${index} von ${total}.`,
    previousWord ? `Nach ${previousWord}.` : "",
    nextWord ? `Vor ${nextWord}.` : ""
  ].filter(Boolean).join(" "),
  slotProgress: ({ matches, total }) => `${matches}/${total} Wörter`,
  sourceSelected: "Aktive Quelle",
  spanish: "Spanisch",
  standard: "Standard",
  standardConceptsAria: "Standardkonzepte",
  standardDefinitionMissing: "Dieses Konzept hat keine vollständige lokale Definition.",
  standardInProgress: "In Arbeit",
  standardNote: ({ language }) => `Wähle ein Konzept; die lokale Definition wird auf ${language} geladen.`,
  standardProgress: "Standardfortschritt",
  standardProgressAriaText: ({ completed, total }) => `${completed} von ${total} Konzepten abgeschlossen`,
  standardReady: "Standards nicht verfügbar",
  standardStudyProgress: ({ advanced, total, review, mastered }) =>
    `${advanced}/${total} fortgeschritten · ${review} in Arbeit · ${mastered} beherrscht`,
  standardStudyRatio: ({ advanced, total }) => `${advanced} von ${total}`,
  standardUnavailable: "Standards nicht verfügbar",
  studyCard: "Lernkarte",
  studyToolbarAria: "Lernaktionen",
  suggestedContinue: "Vorgeschlagene Sitzung fortsetzen",
  suggestedSession: ({ count, pulse }) => `Vorgeschlagene Sitzung: ${count} Konzepte${pulse ? ` · ${pulse}` : ""}`,
  switchStandard: "Standard wechseln",
  themeDark: "Dunkel",
  themeLight: "Hell",
  themeToggle: "Dunkelmodus",
  timeoutTryAgain: "Zeit abgelaufen; versuche es erneut",
  todayDone: "für heute fertig",
  viewProfile: "Profil anzeigen",
  weekdayLabels: ["S", "M", "D", "M", "D", "F", "S"],
  wordCorrect: "Wort richtig",
  wordMasteryAdvance: ({ level, total, words }) =>
    `Gut. Stufe ${level}/${total}: ${words} Wort${words === 1 ? "" : "er"}`,
  wordSlotAria: ({ index, total }) => `Wort ${index} von ${total} in der Definition`
};
copy.ja = {
  ...copy.en,
  alphabeticalIndex: "五十音順インデックス",
  answer: "補完",
  aiDefinitionLanguageChanged: "言語が変わりました。定義を合わせるためにもう一度生成してください。",
  aiDefinitionReady: "定義の準備ができました。編集できます",
  aiEmptyDefinition: "AI が定義を生成しませんでした",
  aiModeHelp: "AI で定義を生成するか、手動で書いてください。",
  aiUnavailable: "現在 AI に接続できません。手動で書けます。",
  anotherReady: "続けたい場合は次のカードがあります",
  arabic: "アラビア語",
  back: "戻る",
  cardSource: "カードのソース",
  chinese: "中国語",
  closeToday: "今日は終了",
  collapseSources: "ソースを折りたたむ",
  completeDefinition: "定義を補完",
  completeKeywords: "キーワードを補完",
  completed: "完了",
  completedConcepts: "完了した概念",
  concept: "概念",
  conceptCount: ({ total }) => `${total} 個の概念`,
  conceptPlaceholder: "例: ミニマルデザイン",
  conceptSaved: "概念を保存しました",
  conceptsAvailable: "利用可能な概念",
  conceptsStatus: ({ count, pulse }) => `${count} 個の概念${pulse ? ` · ${pulse}` : ""}`,
  continue: "続ける",
  createAnother: "もう一枚作成",
  createCard: "カードを作成",
  createCustomSet: "新しいセットを作成",
  createdCardAria: "作成済みカード",
  customSet: "セット",
  customSetAria: "カードセット",
  customSetFallback: ({ index }) => `セット ${index}`,
  customSetHelp: "このカードをセットに保存すると、カウントと連続記録が有効になります。",
  customSetName: "セット名",
  customSetNamePlaceholder: "例: Scrum 認定",
  customSetNameRequired: "このカードを保存するセット名を入力してください。",
  customSetSaved: ({ name }) => `${name} に保存しました`,
  definition: "定義",
  definitionErrorShort: "定義を生成できませんでした。手動で書けます。",
  definitionGeneratedPlaceholder: "生成された定義がここに表示されます",
  definitionMinimumWords: "少なくとも2語の定義を書いてください。",
  definitionMode: "定義モード",
  definitionPlaceholder: "短い定義を書く",
  decisionDominated: "習得済み",
  decisionHint: "左は進行中 · 右は続ける",
  decisionKnown: "習得済み",
  decisionKnownAction: "保存して続ける",
  decisionNeedsDifficulty: "習得済みにする前に難易度を1段階完了してください",
  decisionReview: "進行中",
  decisionReviewAction: "進行中にする",
  decisionReviewFeedback: "進行中にしました",
  decisionSaved: "概念を習得しました",
  difficultyProgress: ({ completed, total }) => `${completed}/${total} レベル完了`,
  doneToday: "今日は完了",
  emptyProfile: "保存済みの概念はまだありません。セッションを完了するとライブラリに入ります。",
  english: "英語",
  excellent: "すばらしい",
  expandSources: "ソースを展開",
  french: "フランス語",
  generateAI: "AI で生成",
  generatingDefinition: "定義を生成中…数秒かかることがあります",
  german: "ドイツ語",
  hindi: "ヒンディー語",
  home: "ホーム",
  homeAria: "ホーム",
  japanese: "日本語",
  korean: "韓国語",
  languageArabicShort: "AR",
  languageChineseShort: "ZH",
  languageControl: "学習言語",
  languageEnglishShort: "EN",
  languageFrenchShort: "FR",
  languageGermanShort: "DE",
  languageHindiShort: "HI",
  languageJapaneseShort: "JA",
  languageKoreanShort: "KO",
  languageMenuTrigger: ({ language }) => `言語を変更: ${language}`,
  languagePickerClose: "言語選択を閉じる",
  languagePickerTitle: "言語を選択",
  languageSpanishShort: "ES",
  library: "ライブラリ",
  libraryComplete: "ライブラリ完了",
  libraryNav: "ライブラリ",
  loadIndexError: "インデックスを読み込めませんでした",
  loading: "読み込み中…",
  loadingCard: "カードを読み込み中…",
  mainNavigation: "メインナビゲーション",
  manual: "手動",
  noCustomSet: "セットなし",
  noResults: "結果がありません。別の検索を試してください。",
  prepareConcept: "概念を準備中…",
  prepareFirstCard: "最初のカードを準備中…",
  prepareNextConcept: "次の概念を準備中",
  preparingConcepts: "概念を準備中…",
  primaryActions: "主な操作",
  privacy: "プライバシー",
  profile: "プロフィール",
  profileAchievements: "実績",
  profileIdentityAria: "学習者プロフィール",
  profileMetricsAria: "プロフィール概要",
  profilePreferencesAria: "設定",
  profileCalendarAria: "週間カレンダー",
  profileCalendarCopy: ({ active, total }) =>
    active
      ? `今週 ${active}/${total} 日学習しました。`
      : "今日学習して週間ストリークを始めましょう。",
  profileCalendarMeta: "今週",
  profileCalendarTitle: "1週間",
  profileLearnerName: "FlipCards 学習者",
  profileLibraryMetric: "ライブラリ",
  profileStandardMetric: "標準",
  profileSummary: ({ total, shown, query }) =>
    query
      ? `${shown} 件の結果 · ${total} 件保存済み`
      : `${total} 件の保存済み概念 · 自分のペースで`,
  profileSummaryLine: ({ total }) =>
    total
      ? `${total} 個の概念がライブラリにあります`
      : "進捗はここに表示されます",
  profileTitle: "プロフィール",
  profileTodayMetric: "今日",
  profileTodayWord: "今日",
  readIdea: "アイデアを読む",
  rememberedToday: ({ completed, goal }) => {
    const progress = Math.min(completed, goal);
    if (completed <= 0) return `今日思い出す: 0/${goal}`;
    if (completed < goal) return `今日 ${progress}/${goal} 思い出しました`;
    return `今日 ${progress}/${goal} 思い出しました · 完了`;
  },
  remaining: ({ remaining }) => `あと ${remaining} 個`,
  repeatWord: ({ word }) => `${word}。長押しするとこの語をもう一度練習します。`,
  repeatWordQueued: "この語は練習に戻ります",
  resetMemory: "メモリをリセット",
  resetMemoryConfirm: "進捗、ストリーク、完了済みライブラリ項目が消えます。作成したセットは残ります。リセットしますか？",
  resetMemoryDone: "メモリをリセットしました",
  reviewAnswer: "答えを確認",
  savedInLibrary: "ライブラリに保存しました",
  search: "検索",
  searchConcept: "概念を検索",
  searchSavedConcept: "保存済み概念を検索",
  sessionProgress: ({ current, total }) => `概念 ${current}/${total}`,
  sessionSaved: ({ completed, goal }) => `このセッション ${Math.min(completed, goal)}/${goal}`,
  shortSession: "短いセッションを開始",
  showConcept: "概念を見る",
  showConceptsStartingWith: ({ letter }) => `${letter} で始まる概念を表示`,
  showDefinition: "定義を見る",
  slotContext: ({ index, total, previousWord, nextWord }) => [
    `空欄 ${index}/${total}。`,
    previousWord ? `${previousWord} の後。` : "",
    nextWord ? `${nextWord} の前。` : ""
  ].filter(Boolean).join(" "),
  slotProgress: ({ matches, total }) => `${matches}/${total} 語`,
  sourceSelected: "現在のソース",
  spanish: "スペイン語",
  standard: "標準",
  standardConceptsAria: "標準の概念",
  standardDefinitionMissing: "この概念には完全なローカル定義がありません。",
  standardInProgress: "進行中",
  standardNote: ({ language }) => `概念を選択してください。ローカル定義は ${language} で読み込まれます。`,
  standardProgress: "標準の進捗",
  standardProgressAriaText: ({ completed, total }) => `${total} 個中 ${completed} 個の概念が完了`,
  standardReady: "標準を利用できません",
  standardStudyProgress: ({ advanced, total, review, mastered }) =>
    `${advanced}/${total} 進行 · ${review} 進行中 · ${mastered} 習得済み`,
  standardStudyRatio: ({ advanced, total }) => `${advanced}/${total}`,
  standardUnavailable: "標準を利用できません",
  studyCard: "学習カード",
  studyToolbarAria: "学習操作",
  suggestedContinue: "提案セッションを続ける",
  suggestedSession: ({ count, pulse }) => `提案セッション: ${count} 個の概念${pulse ? ` · ${pulse}` : ""}`,
  switchStandard: "標準を変更",
  themeDark: "ダーク",
  themeLight: "ライト",
  themeToggle: "ダークモード",
  timeoutTryAgain: "時間切れです。もう一度試してください",
  todayDone: "今日は完了",
  viewProfile: "プロフィールを見る",
  weekdayLabels: ["日", "月", "火", "水", "木", "金", "土"],
  wordCorrect: "正しい語",
  wordMasteryAdvance: ({ level, total, words }) =>
    `よし。レベル ${level}/${total}: ${words} 語`,
  wordSlotAria: ({ index, total }) => `定義内の語 ${index}/${total}`
};
copy.ko = {
  ...copy.en,
  alphabeticalIndex: "가나다 색인",
  answer: "완성",
  aiDefinitionLanguageChanged: "언어가 변경되었습니다. 맞게 유지하려면 정의를 다시 생성하세요.",
  aiDefinitionReady: "정의가 준비되었습니다. 편집할 수 있습니다",
  aiEmptyDefinition: "AI가 정의를 생성하지 않았습니다",
  aiModeHelp: "AI로 정의를 만들거나 직접 작성하세요.",
  aiUnavailable: "지금은 AI에 연결할 수 없습니다. 직접 작성할 수 있습니다.",
  anotherReady: "계속하고 싶다면 다음 카드가 준비되어 있습니다",
  arabic: "아랍어",
  back: "뒤로",
  cardSource: "카드 소스",
  chinese: "중국어",
  closeToday: "오늘은 닫기",
  collapseSources: "소스 접기",
  completeDefinition: "정의 완성",
  completeKeywords: "핵심 단어 완성",
  completed: "완료",
  completedConcepts: "완료한 개념",
  concept: "개념",
  conceptCount: ({ total }) => `${total}개 개념`,
  conceptPlaceholder: "예: 미니멀 디자인",
  conceptSaved: "개념이 저장되었습니다",
  conceptsAvailable: "사용 가능한 개념",
  conceptsStatus: ({ count, pulse }) => `${count}개 개념${pulse ? ` · ${pulse}` : ""}`,
  continue: "계속",
  createAnother: "하나 더 만들기",
  createCard: "카드 만들기",
  createCustomSet: "새 세트 만들기",
  createdCardAria: "생성된 카드",
  customSet: "세트",
  customSetAria: "카드 세트",
  customSetFallback: ({ index }) => `세트 ${index}`,
  customSetHelp: "카운트와 연속 기록을 활성화하려면 이 카드를 세트에 저장하세요.",
  customSetName: "세트 이름",
  customSetNamePlaceholder: "예: Scrum 인증",
  customSetNameRequired: "이 카드를 저장할 세트 이름을 입력하세요.",
  customSetSaved: ({ name }) => `${name}에 저장됨`,
  definition: "정의",
  definitionErrorShort: "정의를 생성할 수 없습니다. 직접 작성할 수 있습니다.",
  definitionGeneratedPlaceholder: "생성된 정의가 여기에 표시됩니다",
  definitionMinimumWords: "최소 두 단어 이상의 정의를 작성하세요.",
  definitionMode: "정의 모드",
  definitionPlaceholder: "짧은 정의 작성",
  decisionDominated: "마스터",
  decisionHint: "왼쪽 진행 중 · 오른쪽 계속",
  decisionKnown: "마스터",
  decisionKnownAction: "저장하고 계속",
  decisionNeedsDifficulty: "마스터로 표시하기 전에 난이도 한 단계를 완료하세요",
  decisionReview: "진행 중",
  decisionReviewAction: "진행 중으로 표시",
  decisionReviewFeedback: "진행 중으로 유지했습니다",
  decisionSaved: "개념을 마스터했습니다",
  difficultyProgress: ({ completed, total }) => `${completed}/${total}단계 완료`,
  doneToday: "오늘 완료",
  emptyProfile: "아직 저장된 개념이 없습니다. 세션을 완료하면 라이브러리가 채워집니다.",
  english: "영어",
  excellent: "훌륭해요",
  expandSources: "소스 펼치기",
  french: "프랑스어",
  generateAI: "AI로 생성",
  generatingDefinition: "정의를 생성 중… 몇 초 걸릴 수 있습니다",
  german: "독일어",
  hindi: "힌디어",
  home: "홈",
  homeAria: "홈",
  japanese: "일본어",
  korean: "한국어",
  languageArabicShort: "AR",
  languageChineseShort: "ZH",
  languageControl: "학습 언어",
  languageEnglishShort: "EN",
  languageFrenchShort: "FR",
  languageGermanShort: "DE",
  languageHindiShort: "HI",
  languageJapaneseShort: "JA",
  languageKoreanShort: "KO",
  languageMenuTrigger: ({ language }) => `언어 변경: ${language}`,
  languagePickerClose: "언어 선택 닫기",
  languagePickerTitle: "언어 선택",
  languageSpanishShort: "ES",
  library: "내 라이브러리",
  libraryComplete: "라이브러리 완료",
  libraryNav: "라이브러리",
  loadIndexError: "색인을 불러올 수 없습니다",
  loading: "불러오는 중…",
  loadingCard: "카드 불러오는 중…",
  mainNavigation: "기본 탐색",
  manual: "수동",
  noCustomSet: "세트 없음",
  noResults: "결과가 없습니다. 다른 검색을 시도하세요.",
  prepareConcept: "개념 준비 중…",
  prepareFirstCard: "첫 카드 준비 중…",
  prepareNextConcept: "다음 개념 준비 중",
  preparingConcepts: "개념 준비 중…",
  primaryActions: "주요 작업",
  privacy: "개인정보",
  profile: "프로필",
  profileAchievements: "업적",
  profileIdentityAria: "학습자 프로필",
  profileMetricsAria: "프로필 요약",
  profilePreferencesAria: "환경설정",
  profileCalendarAria: "주간 달력",
  profileCalendarCopy: ({ active, total }) =>
    active
      ? `이번 주 ${active}/${total}일 학습.`
      : "오늘 학습을 시작해 주간 연속 기록을 만들어 보세요.",
  profileCalendarMeta: "이번 주",
  profileCalendarTitle: "1주",
  profileLearnerName: "FlipCards 학습자",
  profileLibraryMetric: "라이브러리",
  profileStandardMetric: "표준",
  profileSummary: ({ total, shown, query }) =>
    query
      ? `${shown}개 결과 · ${total}개 저장됨`
      : `${total}개 저장된 개념 · 내 속도로`,
  profileSummaryLine: ({ total }) =>
    total
      ? `라이브러리에 ${total}개 개념`
      : "진행 상황이 여기에 표시됩니다",
  profileTitle: "내 프로필",
  profileTodayMetric: "오늘",
  profileTodayWord: "오늘",
  readIdea: "아이디어 읽기",
  rememberedToday: ({ completed, goal }) => {
    const progress = Math.min(completed, goal);
    if (completed <= 0) return `오늘 기억할 것 0/${goal}`;
    if (completed < goal) return `오늘 ${progress}/${goal} 기억`;
    return `오늘 ${progress}/${goal} 기억 · 완료`;
  },
  remaining: ({ remaining }) => `${remaining}개 남음`,
  repeatWord: ({ word }) => `${word}. 길게 눌러 이 단어를 다시 연습하세요.`,
  repeatWordQueued: "이 단어가 다시 연습에 들어갑니다",
  resetMemory: "메모리 재설정",
  resetMemoryConfirm: "진행 상황, 연속 기록, 완료된 라이브러리 항목이 삭제됩니다. 만든 세트는 유지됩니다. 재설정할까요?",
  resetMemoryDone: "메모리가 재설정되었습니다",
  reviewAnswer: "답 확인",
  savedInLibrary: "라이브러리에 저장됨",
  search: "검색",
  searchConcept: "개념 검색",
  searchSavedConcept: "저장된 개념 검색",
  sessionProgress: ({ current, total }) => `개념 ${current}/${total}`,
  sessionSaved: ({ completed, goal }) => `이번 세션 ${Math.min(completed, goal)}/${goal}`,
  shortSession: "짧은 세션 시작",
  showConcept: "개념 보기",
  showConceptsStartingWith: ({ letter }) => `${letter}(으)로 시작하는 개념 표시`,
  showDefinition: "정의 보기",
  slotContext: ({ index, total, previousWord, nextWord }) => [
    `빈칸 ${index}/${total}.`,
    previousWord ? `${previousWord} 다음.` : "",
    nextWord ? `${nextWord} 전.` : ""
  ].filter(Boolean).join(" "),
  slotProgress: ({ matches, total }) => `${matches}/${total} 단어`,
  sourceSelected: "활성 소스",
  spanish: "스페인어",
  standard: "표준",
  standardConceptsAria: "표준 개념",
  standardDefinitionMissing: "이 개념에는 완전한 로컬 정의가 없습니다.",
  standardInProgress: "진행 중",
  standardNote: ({ language }) => `개념을 선택하세요. 로컬 정의가 ${language}(으)로 로드됩니다.`,
  standardProgress: "표준 진행률",
  standardProgressAriaText: ({ completed, total }) => `${total}개 중 ${completed}개 개념 완료`,
  standardReady: "표준을 사용할 수 없습니다",
  standardStudyProgress: ({ advanced, total, review, mastered }) =>
    `${advanced}/${total} 진행 · ${review} 진행 중 · ${mastered} 마스터`,
  standardStudyRatio: ({ advanced, total }) => `${advanced}/${total}`,
  standardUnavailable: "표준을 사용할 수 없습니다",
  studyCard: "학습 카드",
  studyToolbarAria: "학습 작업",
  suggestedContinue: "추천 세션 계속",
  suggestedSession: ({ count, pulse }) => `추천 세션: ${count}개 개념${pulse ? ` · ${pulse}` : ""}`,
  switchStandard: "표준 변경",
  themeDark: "어둡게",
  themeLight: "밝게",
  themeToggle: "다크 모드",
  timeoutTryAgain: "시간이 초과되었습니다. 다시 시도하세요",
  todayDone: "오늘 완료",
  viewProfile: "프로필 보기",
  weekdayLabels: ["일", "월", "화", "수", "목", "금", "토"],
  wordCorrect: "단어 정답",
  wordMasteryAdvance: ({ level, total, words }) =>
    `좋아요. 단계 ${level}/${total}: ${words}개 단어`,
  wordSlotAria: ({ index, total }) => `정의의 ${index}/${total}번째 단어`
};
copy.ar = {
  ...copy.en,
  alphabeticalIndex: "فهرس أبجدي",
  answer: "إكمال",
  aiDefinitionLanguageChanged: "تغيّرت اللغة. أنشئ التعريف مرة أخرى ليبقى متوافقًا.",
  aiDefinitionReady: "التعريف جاهز؛ يمكنك تعديله",
  aiEmptyDefinition: "لم ينشئ الذكاء الاصطناعي تعريفًا",
  aiModeHelp: "أنشئ تعريفًا بالذكاء الاصطناعي أو اكتبه يدويًا.",
  aiUnavailable: "تعذر الاتصال بالذكاء الاصطناعي الآن. يمكنك كتابته يدويًا.",
  anotherReady: "هناك بطاقة أخرى جاهزة إذا أردت المتابعة",
  arabic: "العربية",
  back: "رجوع",
  cardSource: "مصدر البطاقات",
  chinese: "الصينية",
  closeToday: "إغلاق لهذا اليوم",
  collapseSources: "طي المصادر",
  completeDefinition: "إكمال التعريف",
  completeKeywords: "أكمل الكلمات المفتاحية",
  completed: "مكتمل",
  completedConcepts: "المفاهيم المكتملة",
  concept: "المفهوم",
  conceptCount: ({ total }) => `${total} مفاهيم`,
  conceptPlaceholder: "مثال: تصميم بسيط",
  conceptSaved: "تم حفظ المفهوم",
  conceptsAvailable: "المفاهيم المتاحة",
  conceptsStatus: ({ count, pulse }) => `${count} مفاهيم${pulse ? ` · ${pulse}` : ""}`,
  continue: "متابعة",
  createAnother: "إنشاء أخرى",
  createCard: "إنشاء بطاقة",
  createCustomSet: "إنشاء مجموعة جديدة",
  createdCardAria: "بطاقة منشأة",
  customSet: "مجموعة",
  customSetAria: "مجموعة بطاقات",
  customSetFallback: ({ index }) => `مجموعة ${index}`,
  customSetHelp: "احفظ هذه البطاقة في مجموعة لتفعيل العدّادات والسلاسل.",
  customSetName: "اسم المجموعة",
  customSetNamePlaceholder: "مثال: شهادة Scrum",
  customSetNameRequired: "سمّ المجموعة لحفظ البطاقة فيها.",
  customSetSaved: ({ name }) => `تم الحفظ في ${name}`,
  definition: "التعريف",
  definitionErrorShort: "تعذر إنشاء التعريف. يمكنك كتابته يدويًا.",
  definitionGeneratedPlaceholder: "سيظهر التعريف المنشأ هنا",
  definitionMinimumWords: "اكتب تعريفًا من كلمتين على الأقل.",
  definitionMode: "وضع التعريف",
  definitionPlaceholder: "اكتب تعريفًا قصيرًا",
  decisionDominated: "متقن",
  decisionHint: "يسار قيد التقدم · يمين متابعة",
  decisionKnown: "متقن",
  decisionKnownAction: "حفظ ومتابعة",
  decisionNeedsDifficulty: "أكمل مستوى صعوبة واحدًا قبل وضعها كمتقنة",
  decisionReview: "قيد التقدم",
  decisionReviewAction: "وضعها قيد التقدم",
  decisionReviewFeedback: "بقيت قيد التقدم",
  decisionSaved: "تم إتقان المفهوم",
  difficultyProgress: ({ completed, total }) => `${completed}/${total} مستويات مكتملة`,
  doneToday: "انتهى اليوم",
  emptyProfile: "لا توجد مفاهيم محفوظة بعد. أكمل جلسة لملء مكتبتك.",
  english: "الإنجليزية",
  excellent: "ممتاز",
  expandSources: "فتح المصادر",
  french: "الفرنسية",
  generateAI: "إنشاء بالذكاء الاصطناعي",
  generatingDefinition: "جارٍ إنشاء التعريف… قد يستغرق بضع ثوانٍ",
  german: "الألمانية",
  hindi: "الهندية",
  home: "الرئيسية",
  homeAria: "الرئيسية",
  japanese: "اليابانية",
  korean: "الكورية",
  languageArabicShort: "AR",
  languageChineseShort: "ZH",
  languageControl: "لغة الدراسة",
  languageEnglishShort: "EN",
  languageFrenchShort: "FR",
  languageGermanShort: "DE",
  languageHindiShort: "HI",
  languageJapaneseShort: "JA",
  languageKoreanShort: "KO",
  languageMenuTrigger: ({ language }) => `تغيير اللغة: ${language}`,
  languagePickerClose: "إغلاق اختيار اللغة",
  languagePickerTitle: "اختر اللغة",
  languageSpanishShort: "ES",
  library: "مكتبتك",
  libraryComplete: "المكتبة مكتملة",
  libraryNav: "المكتبة",
  loadIndexError: "تعذر تحميل الفهرس",
  loading: "جارٍ التحميل…",
  loadingCard: "جارٍ تحميل البطاقة…",
  mainNavigation: "التنقل الرئيسي",
  manual: "يدوي",
  noCustomSet: "بلا مجموعة",
  noResults: "لا توجد نتائج. جرّب بحثًا آخر.",
  prepareConcept: "جارٍ تجهيز المفهوم…",
  prepareFirstCard: "جارٍ تجهيز البطاقة الأولى…",
  prepareNextConcept: "جارٍ تجهيز المفهوم التالي",
  preparingConcepts: "جارٍ تجهيز المفاهيم…",
  primaryActions: "الإجراءات الرئيسية",
  privacy: "الخصوصية",
  profile: "الملف الشخصي",
  profileAchievements: "الإنجازات",
  profileIdentityAria: "ملف المتعلم",
  profileMetricsAria: "ملخص الملف الشخصي",
  profilePreferencesAria: "التفضيلات",
  profileCalendarAria: "تقويم أسبوعي",
  profileCalendarCopy: ({ active, total }) =>
    active
      ? `${active}/${total} أيام دراسة هذا الأسبوع.`
      : "ابدأ سلسلتك الأسبوعية بالدراسة اليوم.",
  profileCalendarMeta: "الأسبوع الحالي",
  profileCalendarTitle: "أسبوع واحد",
  profileLearnerName: "متعلم FlipCards",
  profileLibraryMetric: "المكتبة",
  profileStandardMetric: "المعيار",
  profileSummary: ({ total, shown, query }) =>
    query
      ? `${shown} نتيجة · ${total} محفوظة`
      : `${total} مفاهيم محفوظة · على وتيرتك`,
  profileSummaryLine: ({ total }) =>
    total
      ? `${total} مفاهيم في مكتبتك`
      : "تقدمك يظهر هنا",
  profileTitle: "ملفك الشخصي",
  profileTodayMetric: "اليوم",
  profileTodayWord: "اليوم",
  readIdea: "اقرأ الفكرة",
  rememberedToday: ({ completed, goal }) => {
    const progress = Math.min(completed, goal);
    if (completed <= 0) return `0/${goal} للتذكر اليوم`;
    if (completed < goal) return `${progress}/${goal} تم تذكرها اليوم`;
    return `${progress}/${goal} تم تذكرها اليوم · انتهى`;
  },
  remaining: ({ remaining }) => `${remaining} للاستكشاف`,
  repeatWord: ({ word }) => `${word}. اضغط مطولًا للتدرب على هذه الكلمة مرة أخرى.`,
  repeatWordQueued: "ستعود هذه الكلمة إلى التدريب",
  resetMemory: "إعادة ضبط الذاكرة",
  resetMemoryConfirm: "سيؤدي هذا إلى حذف التقدم والسلاسل وعناصر المكتبة المكتملة. ستبقى مجموعاتك المنشأة محفوظة. هل تريد إعادة الضبط؟",
  resetMemoryDone: "تمت إعادة ضبط الذاكرة",
  reviewAnswer: "راجع الإجابة",
  savedInLibrary: "تم الحفظ في مكتبتك",
  search: "بحث",
  searchConcept: "بحث عن مفهوم",
  searchSavedConcept: "بحث عن مفهوم محفوظ",
  sessionProgress: ({ current, total }) => `مفهوم ${current}/${total}`,
  sessionSaved: ({ completed, goal }) => `${Math.min(completed, goal)}/${goal} في هذه الجلسة`,
  shortSession: "بدء جلسة قصيرة",
  showConcept: "عرض المفهوم",
  showConceptsStartingWith: ({ letter }) => `عرض المفاهيم التي تبدأ بـ ${letter}`,
  showDefinition: "عرض التعريف",
  slotContext: ({ index, total, previousWord, nextWord }) => [
    `فراغ ${index} من ${total}.`,
    previousWord ? `بعد ${previousWord}.` : "",
    nextWord ? `قبل ${nextWord}.` : ""
  ].filter(Boolean).join(" "),
  slotProgress: ({ matches, total }) => `${matches}/${total} كلمات`,
  sourceSelected: "المصدر النشط",
  spanish: "الإسبانية",
  standard: "المعيار",
  standardConceptsAria: "مفاهيم المعيار",
  standardDefinitionMissing: "لا يحتوي هذا المفهوم على تعريف محلي كامل.",
  standardInProgress: "قيد التقدم",
  standardNote: ({ language }) => `اختر مفهومًا؛ سيتم تحميل تعريفه المحلي باللغة ${language}.`,
  standardProgress: "تقدم المعيار",
  standardProgressAriaText: ({ completed, total }) => `${completed} من ${total} مفاهيم مكتملة`,
  standardReady: "المعايير غير متاحة",
  standardStudyProgress: ({ advanced, total, review, mastered }) =>
    `${advanced}/${total} متقدمة · ${review} قيد التقدم · ${mastered} متقنة`,
  standardStudyRatio: ({ advanced, total }) => `${advanced} من ${total}`,
  standardUnavailable: "المعايير غير متاحة",
  studyCard: "بطاقة دراسة",
  studyToolbarAria: "إجراءات الدراسة",
  suggestedContinue: "متابعة الجلسة المقترحة",
  suggestedSession: ({ count, pulse }) => `جلسة مقترحة: ${count} مفاهيم${pulse ? ` · ${pulse}` : ""}`,
  switchStandard: "تغيير المعيار",
  themeDark: "داكن",
  themeLight: "فاتح",
  themeToggle: "الوضع الداكن",
  timeoutTryAgain: "انتهى الوقت؛ حاول مرة أخرى",
  todayDone: "انتهى اليوم",
  viewProfile: "عرض الملف الشخصي",
  weekdayLabels: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  wordCorrect: "الكلمة صحيحة",
  wordMasteryAdvance: ({ level, total, words }) =>
    `جيد. المستوى ${level}/${total}: ${words} كلمات`,
  wordSlotAria: ({ index, total }) => `الكلمة ${index} من ${total} في التعريف`
};
const memoryStorage = new Map();

const apiBaseUrl = window.location.protocol === "file:"
  ? "http://127.0.0.1:4173"
  : "";
const bundledStandardsPayload = window.FLIPCARDS_STANDARDS_BUNDLE;

const applyAiBackendAvailability = () => {
  const isAvailable = aiBackendAvailable;
  definitionModeGroup.hidden = !isAvailable;

  if (!isAvailable) {
    selectedDefinitionMode = "manual";
    const manualInput = document.querySelector("[name='definitionMode'][value='manual']");
    if (manualInput) {
      manualInput.checked = true;
    }
    aiTools.hidden = true;
    aiStatus.textContent = "";
  }

  updateButtonState();
};

let lastDefinitionSource = "";

const detectAiBackend = async () => {
  if (window.FlipAI?.isConfigured?.()) {
    aiBackendAvailable = true;
    applyAiBackendAvailability();
    return;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/api/definition`, {
      method: "GET",
      cache: "no-store"
    });
    const contentType = response.headers.get("content-type") || "";

    if (!response.ok || !contentType.includes("application/json")) {
      aiBackendAvailable = false;
    } else {
      const data = await response.json();
      aiBackendAvailable = data?.ok === true;
    }
  } catch {
    aiBackendAvailable = false;
  }

  applyAiBackendAvailability();
};

const getCopyForLanguage = (language = selectedLanguage) =>
  copy[language] ?? copy.es;

const t = (key, values = {}) => {
  const value = getCopyForLanguage(selectedLanguage)?.[key] ?? copy.es[key] ?? key;
  return typeof value === "function" ? value(values) : value;
};

const getLocalizedLanguageName = (language = selectedLanguage) =>
  t(getLanguageMetadata(language).labelKey);

const getLanguageFlagSrc = (language) => {
  const { flagCode } = getLanguageMetadata(language);
  return `assets/flags/${flagCode}.svg`;
};

const ensureLanguageFlag = (container, className = "language-flag") => {
  let flag = container.querySelector("[data-language-flag]");

  if (!flag) {
    flag = document.createElement("img");
    flag.dataset.languageFlag = "";
    flag.alt = "";
    flag.decoding = "async";
    flag.loading = "lazy";
    flag.setAttribute("aria-hidden", "true");
  }

  flag.className = className;
  return flag;
};

const syncLanguageFlag = (flag, language) => {
  const languageName = t(getLanguageMetadata(language).labelKey);

  flag.src = getLanguageFlagSrc(language);
  flag.title = languageName;
};

const syncCompactLanguageButton = (button, language, shortText) => {
  const flag = ensureLanguageFlag(button);
  let shortLabel = button.querySelector("[data-language-short]");

  if (!shortLabel) {
    shortLabel = document.createElement("span");
    shortLabel.dataset.languageShort = "";
    shortLabel.className = "language-option-short";
  }

  syncLanguageFlag(flag, language);
  shortLabel.textContent = shortText;

  if (button.children.length !== 2 || button.firstElementChild !== flag || button.lastElementChild !== shortLabel) {
    button.replaceChildren(flag, shortLabel);
  }
};

const updateStudyQuickLanguage = (language) => {
  const normalizedLanguage = normalizeLanguage(language);

  if (normalizedLanguage !== "en") {
    studyQuickLanguage = normalizedLanguage;
  }
};

const parseStoredJson = (key, fallback) => {
  if (memoryStorage.has(key)) {
    return memoryStorage.get(key);
  }

  let storedValue = null;

  try {
    storedValue = localStorage.getItem(key);
  } catch {
    return fallback;
  }

  try {
    return JSON.parse(storedValue) ?? fallback;
  } catch {
    return fallback;
  }
};

const isPlainObject = (value) =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const writeStoredJson = (key, value) => {
  memoryStorage.set(key, value);

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Safari privado o una cuota llena no deben romper el estudio.
  }
};

const removeStoredJson = (key) => {
  memoryStorage.delete(key);

  try {
    localStorage.removeItem(key);
  } catch {
    // La memoria temporal tambien se limpia aunque el almacenamiento falle.
  }
};

const normalizeTheme = (theme) =>
  theme === "dark" ? "dark" : "light";

const loadTheme = () => {
  try {
    return normalizeTheme(localStorage.getItem(themeStorageKey));
  } catch {
    return "light";
  }
};

const saveTheme = (theme) => {
  try {
    localStorage.setItem(themeStorageKey, normalizeTheme(theme));
  } catch {
    // El tema no debe bloquear el estudio si el almacenamiento falla.
  }
};

const syncThemeToggle = () => {
  const isDark = selectedTheme === "dark";

  document.documentElement.dataset.theme = selectedTheme;
  document.documentElement.style.colorScheme = selectedTheme;
  document.querySelector("meta[name='theme-color']")?.setAttribute(
    "content",
    isDark ? "#0d1117" : "#ffffff"
  );

  if (!themeToggle) {
    return;
  }

  themeToggle.setAttribute("aria-checked", String(isDark));
  themeToggle.setAttribute("aria-label", t("themeToggle"));
  themeToggleLabel.textContent = t("themeToggle");
  themeToggleValue.textContent = isDark ? t("themeDark") : t("themeLight");
};

const setTheme = (theme) => {
  selectedTheme = normalizeTheme(theme);
  saveTheme(selectedTheme);
  syncThemeToggle();
};

const normalizeLanguage = (language) =>
  supportedLanguages.includes(language) ? language : "es";

const getLanguageMetadata = (language = selectedLanguage) =>
  languageMetadata[normalizeLanguage(language)] ?? languageMetadata.es;

// First visit: follow the browser language when FlipCards supports it,
// otherwise start in English.
const getBrowserLanguage = () => {
  const candidates = [...(navigator.languages || []), navigator.language].filter(Boolean);
  const match = candidates
    .map((candidate) => String(candidate).toLowerCase().slice(0, 2))
    .find((code) => supportedLanguages.includes(code));

  return match || "en";
};

const loadLanguage = () =>
  normalizeLanguage(parseStoredJson(languageStorageKey, getBrowserLanguage()));

const saveLanguage = (language) => {
  writeStoredJson(languageStorageKey, normalizeLanguage(language));
};

selectedLanguage = loadLanguage();
studyQuickLanguage = selectedLanguage === "en" ? "es" : selectedLanguage;
currentDefinitionLanguage = selectedLanguage;
selectedTheme = loadTheme();
syncThemeToggle();

const loadSanitizedStorage = (key, fallback, sanitizer) => {
  const storedValue = parseStoredJson(key, fallback);
  const sanitizedValue = sanitizer(storedValue);

  if (JSON.stringify(storedValue) !== JSON.stringify(sanitizedValue)) {
    writeStoredJson(key, sanitizedValue);
  }

  return sanitizedValue;
};

const sanitizeCompletedConcepts = (value) => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item) =>
      isPlainObject(item)
      && typeof item.concept === "string"
      && typeof item.definition === "string"
    )
    .map((item) => {
      const concept = item.concept.trim();
      const definition = item.definition.trim();
      const spanishTerm = typeof item.spanishTerm === "string"
        ? item.spanishTerm.trim()
        : "";
      const language = normalizeLanguage(item.language);
      const completedAt = typeof item.completedAt === "string"
        ? item.completedAt
        : "";

      return {
        id: typeof item.id === "string" && item.id
          ? item.id
          : `${normalizeWord(concept)}::${normalizeWord(definition)}`,
        concept,
        definition,
        completedAt,
        ...(typeof item.standardId === "string" && item.standardId
          ? { standardId: item.standardId }
          : {}),
        ...(typeof item.conceptId === "string" && item.conceptId
          ? { conceptId: item.conceptId }
          : {}),
        ...(typeof item.standardName === "string" && item.standardName
          ? { standardName: item.standardName }
          : {}),
        ...(spanishTerm ? { spanishTerm } : {}),
        language
      };
    })
    .filter(({ concept, definition }) => concept && definition);
};

const sanitizeStandardProgress = (value) => {
  if (!isPlainObject(value)) {
    return {};
  }

  return Object.fromEntries(Object.entries(value).map(([standardId, ids]) => {
    const cleanIds = Array.isArray(ids)
      ? ids.filter((id) => typeof id === "string" && id)
      : typeof ids === "string" && ids
        ? [ids]
        : [];

    return [standardId, [...new Set(cleanIds)]];
  }));
};

const sanitizeStandardStreaks = (value) => {
  if (!isPlainObject(value)) {
    return {};
  }

  return Object.fromEntries(Object.entries(value).map(([standardId, streak]) => {
    const count = Number(streak);

    return [
      standardId,
      Number.isFinite(count) && count > 0
        ? Math.floor(count)
        : 0
    ];
  }).filter(([, streak]) => streak > 0));
};

const sanitizeWordMasteryProgress = (value) => {
  if (!isPlainObject(value)) {
    return {};
  }

  return Object.fromEntries(Object.entries(value).map(([key, item]) => {
    if (!isPlainObject(item)) {
      return [key, {
        level: 1,
        masteredWords: [],
        lastPracticeWords: []
      }];
    }

    const level = Number.isInteger(item.level) && item.level > 0
      ? item.level
      : 1;
    const masteredWords = Array.isArray(item.masteredWords)
      ? item.masteredWords.map((word) => normalizeWord(String(word))).filter(Boolean)
      : [];
    const lastPracticeWords = Array.isArray(item.lastPracticeWords)
      ? item.lastPracticeWords.map((word) => normalizeWord(String(word))).filter(Boolean)
      : [];

    return [key, {
      level,
      masteredWords: [...new Set(masteredWords)],
      lastPracticeWords: [...new Set(lastPracticeWords)]
    }];
  }));
};

const normalizeWord = (word) =>
  word
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const slugify = (text) =>
  normalizeWord(text)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "concepto";

const getCustomStandardNameFallback = (index = 0) =>
  t("customSetFallback", { index: index + 1 });

const sanitizeCustomStandards = (value) => {
  if (!Array.isArray(value)) {
    return [];
  }

  const seenStandardIds = new Set();

  return value
    .map((item, standardIndex) => {
      if (!isPlainObject(item)) {
        return null;
      }

      const name = typeof item.name === "string" && item.name.trim()
        ? item.name.trim()
        : getCustomStandardNameFallback(standardIndex);
      const rawId = typeof item.id === "string" && item.id.trim()
        ? item.id.trim()
        : `custom-${slugify(name)}`;
      const baseId = rawId.startsWith("custom-")
        ? rawId
        : `custom-${slugify(rawId)}`;
      let id = baseId;
      let suffix = 2;

      while (seenStandardIds.has(id)) {
        id = `${baseId}-${suffix}`;
        suffix += 1;
      }

      seenStandardIds.add(id);

      const seenConceptIds = new Set();
      const concepts = (Array.isArray(item.concepts) ? item.concepts : [])
        .map((concept) => {
          if (!isPlainObject(concept)) {
            return null;
          }

          const term = typeof concept.term === "string"
            ? concept.term.trim()
            : "";
          const definitions = isPlainObject(concept.definitions)
            ? concept.definitions
            : {};
          const fallbackDefinition = typeof concept.definition === "string"
            ? concept.definition.trim()
            : "";
          const definitionLanguage = normalizeLanguage(
            concept.definitionLanguage ?? concept.language ?? "es"
          );
          const firstDefinition = supportedLanguages
            .map((language) => definitions[language])
            .find((value) => typeof value === "string" && value.trim());
          const primaryDefinition =
            (typeof definitions[definitionLanguage] === "string" && definitions[definitionLanguage].trim())
              ? definitions[definitionLanguage].trim()
              : fallbackDefinition || (typeof firstDefinition === "string" ? firstDefinition.trim() : "");
          const cleanDefinitions = getCleanDefinitions(definitions, {
            [definitionLanguage]: primaryDefinition
          });

          if (!term || Object.keys(cleanDefinitions).length === 0) {
            return null;
          }

          const conceptBaseId = typeof concept.id === "string" && concept.id.trim()
            ? slugify(concept.id)
            : slugify(term);
          let conceptId = conceptBaseId;
          let conceptSuffix = 2;

          while (seenConceptIds.has(conceptId)) {
            conceptId = `${conceptBaseId}-${conceptSuffix}`;
            conceptSuffix += 1;
          }

          seenConceptIds.add(conceptId);

          return {
            id: conceptId,
            term,
            spanishTerm: typeof concept.spanishTerm === "string" && concept.spanishTerm.trim()
              ? concept.spanishTerm.trim()
              : term,
            definitions: cleanDefinitions,
            definitionLanguage,
            ...(Object.keys(getCleanLocalizedTerms(concept)).length
              ? { localizedTerms: getCleanLocalizedTerms(concept) }
              : {}),
            ...(typeof concept.createdAt === "string" && concept.createdAt
              ? { createdAt: concept.createdAt }
              : {})
          };
        })
        .filter(Boolean);

      return {
        id,
        name,
        shortName: typeof item.shortName === "string" && item.shortName.trim()
          ? item.shortName.trim()
          : name,
        source: "custom",
        isCustom: true,
        concepts,
        createdAt: typeof item.createdAt === "string" && item.createdAt
          ? item.createdAt
          : new Date().toISOString(),
        updatedAt: typeof item.updatedAt === "string" && item.updatedAt
          ? item.updatedAt
          : new Date().toISOString()
      };
    })
    .filter((standard) => standard && standard.concepts.length > 0);
};

const updateButtonState = () => {
  const hasFront = Boolean(frontInput.value.trim());
  const hasBack = Boolean(backInput.value.trim());
  const needsCustomSetName = customSetSelect?.value === customSetCreateValue;
  const hasCustomSetName = Boolean(customSetNameInput?.value.trim());

  aiButton.disabled = !aiBackendAvailable
    || selectedDefinitionMode !== "ai"
    || !hasFront
    || isGeneratingDefinition;
  generateButton.disabled = !hasFront
    || !hasBack
    || isGeneratingDefinition
    || (needsCustomSetName && !hasCustomSetName);
};

const setStandardStatus = (message) => {
  standardMessage = message;
  standardStatus.textContent = message;
};

const setCustomSetHelp = (message = t("customSetHelp"), isError = false) => {
  if (!customSetHelp) {
    return;
  }

  customSetHelp.textContent = message;
  customSetHelp.classList.toggle("is-error", isError);
  customSetNameInput?.setAttribute("aria-invalid", String(isError));
};

const loadCompletedConcepts = () =>
  loadSanitizedStorage(completedStorageKey, [], sanitizeCompletedConcepts);

const saveCompletedConcepts = (concepts) => {
  writeStoredJson(completedStorageKey, sanitizeCompletedConcepts(concepts));
};

const loadCustomStandards = () =>
  loadSanitizedStorage(customStandardsStorageKey, [], sanitizeCustomStandards);

const saveCustomStandards = (customStandards) => {
  writeStoredJson(customStandardsStorageKey, sanitizeCustomStandards(customStandards));
};

const loadStandardProgress = () =>
  loadSanitizedStorage(standardProgressKey, {}, sanitizeStandardProgress);

const saveStandardProgress = (progress) => {
  writeStoredJson(standardProgressKey, sanitizeStandardProgress(progress));
};

const loadStandardReviewProgress = () =>
  loadSanitizedStorage(standardReviewProgressKey, {}, sanitizeStandardProgress);

const saveStandardReviewProgress = (progress) => {
  writeStoredJson(standardReviewProgressKey, sanitizeStandardProgress(progress));
};

const loadStandardStreaks = () =>
  loadSanitizedStorage(standardStreakKey, {}, sanitizeStandardStreaks);

const saveStandardStreaks = (streaks) => {
  writeStoredJson(standardStreakKey, sanitizeStandardStreaks(streaks));
};

const loadWordMasteryProgress = () =>
  loadSanitizedStorage(wordMasteryProgressKey, {}, sanitizeWordMasteryProgress);

const saveWordMasteryProgress = (progress) => {
  writeStoredJson(wordMasteryProgressKey, sanitizeWordMasteryProgress(progress));
};

const pruneUnavailableStandardStorage = () => {
  const availableStandardIds = new Set(standards.map((standard) => standard.id));
  const progress = loadStandardProgress();
  const filteredProgress = Object.fromEntries(
    Object.entries(progress).filter(([standardId]) => availableStandardIds.has(standardId))
  );

  if (Object.keys(filteredProgress).length !== Object.keys(progress).length) {
    saveStandardProgress(filteredProgress);
  }

  const reviewProgress = loadStandardReviewProgress();
  const filteredReviewProgress = Object.fromEntries(
    Object.entries(reviewProgress).filter(([standardId]) => availableStandardIds.has(standardId))
  );

  if (Object.keys(filteredReviewProgress).length !== Object.keys(reviewProgress).length) {
    saveStandardReviewProgress(filteredReviewProgress);
  }

  const streaks = loadStandardStreaks();
  const filteredStreaks = Object.fromEntries(
    Object.entries(streaks).filter(([standardId]) => availableStandardIds.has(standardId))
  );

  if (Object.keys(filteredStreaks).length !== Object.keys(streaks).length) {
    saveStandardStreaks(filteredStreaks);
  }

  const completedConcepts = loadCompletedConcepts();
  const filteredConcepts = completedConcepts.filter(({ standardId }) =>
    !standardId || availableStandardIds.has(standardId)
  );

  if (filteredConcepts.length !== completedConcepts.length) {
    saveCompletedConcepts(filteredConcepts);
  }

  const wordProgress = loadWordMasteryProgress();
  const filteredWordProgress = Object.fromEntries(
    Object.entries(wordProgress).filter(([key]) => {
      const standardId = key.split("::")[0] ?? "";
      return standardId === "manual" || availableStandardIds.has(standardId);
    })
  );

  if (Object.keys(filteredWordProgress).length !== Object.keys(wordProgress).length) {
    saveWordMasteryProgress(filteredWordProgress);
  }

  const activeStandardId = loadActiveStandardId();
  if (activeStandardId && !availableStandardIds.has(activeStandardId)) {
    saveActiveStandardId(standards[0]?.id ?? "");
  }
};

const loadActiveStandardId = () => {
  const activeStandardId = parseStoredJson(activeStandardKey, "");
  return typeof activeStandardId === "string" ? activeStandardId : "";
};

const saveActiveStandardId = (standardId) => {
  writeStoredJson(activeStandardKey, typeof standardId === "string" ? standardId : "");
};

const getCustomStandards = () =>
  standards.filter((standard) => standard.isCustom || standard.source === "custom");

const getCustomStandardByName = (customStandards, name) => {
  const normalizedName = normalizeWord(name.trim());
  return customStandards.find((standard) =>
    normalizeWord(standard.name) === normalizedName
    || normalizeWord(standard.shortName ?? "") === normalizedName
  ) ?? null;
};

const getPrimaryStandard = () => {
  const activeStandardId = loadActiveStandardId();
  return standards.find((standard) => standard.id === activeStandardId) ?? standards[0] ?? null;
};

const getStandardById = (standardId) =>
  standards.find((standard) => standard.id === standardId) ?? null;

const getStandardConceptId = (standardId, concept) => {
  const standard = getStandardById(standardId);
  const normalizedConcept = normalizeWord(concept);

  return standard?.concepts.find((item) => {
    const localizedTerms = isPlainObject(item.localizedTerms) ? item.localizedTerms : {};
    const terms = [
      item.term,
      item.spanishTerm,
      item.hindiTerm,
      item.chineseTerm,
      ...Object.values(localizedTerms)
    ].filter((value) => typeof value === "string" && value.trim());

    return terms.some((term) => normalizeWord(term) === normalizedConcept);
  })?.id ?? "";
};

const getStandardConceptById = (standardId, conceptId) => {
  const standard = getStandardById(standardId);
  return standard?.concepts.find(({ id }) => id === conceptId) ?? null;
};

const getDisplaySpanishTerm = (term, spanishTerm = "") => {
  const cleanTerm = term.trim();
  const cleanSpanishTerm = spanishTerm.trim();

  if (!cleanSpanishTerm || normalizeWord(cleanSpanishTerm) === normalizeWord(cleanTerm)) {
    return "";
  }

  return cleanSpanishTerm;
};

const getStandardConceptSpanishTerm = (standardId, conceptId, fallbackTerm = "") => {
  const concept = getStandardConceptById(standardId, conceptId);
  const term = concept?.term ?? fallbackTerm;

  return getDisplaySpanishTerm(term, concept?.spanishTerm ?? "");
};

const formatSecondaryTerm = (text) => {
  const value = (text ?? "").trim();
  if (!value) return "";
  return value.includes("(") || value.includes(")") ? value : `(${value})`;
};

const getConceptLocalizedTerm = (concept, language = selectedLanguage) => {
  if (typeof concept === "string") {
    return "";
  }

  const normalizedLanguage = normalizeLanguage(language);
  const termKeys = {
    es: ["spanishTerm", "termEs", "conceptEs"],
    hi: ["hindiTerm", "termHi", "conceptHi"],
    zh: ["chineseTerm", "termZh", "conceptZh"]
  }[normalizedLanguage] ?? [];
  const directTerm = termKeys
    .map((key) => concept?.[key])
    .find((value) => typeof value === "string" && value.trim());
  const localizedTerms = isPlainObject(concept?.localizedTerms)
    ? concept.localizedTerms
    : {};
  const localizedTerm = typeof localizedTerms[normalizedLanguage] === "string"
    ? localizedTerms[normalizedLanguage].trim()
    : "";

  return (directTerm || localizedTerm || "").trim();
};

const getConceptDisplay = (concept, language = selectedLanguage) => {
  const term = typeof concept === "string" ? concept : concept.term ?? "";
  const normalizedLanguage = normalizeLanguage(language);
  const localizedTerm = normalizedLanguage === "en"
    ? ""
    : getConceptLocalizedTerm(concept, normalizedLanguage);
  const primaryTerm = localizedTerm && normalizeWord(localizedTerm) !== normalizeWord(term)
    ? localizedTerm
    : term;

  return {
    primaryTerm,
    secondaryTerm: normalizeWord(primaryTerm) !== normalizeWord(term) ? term : ""
  };
};

const getConceptDefinitionLanguage = (concept, language = selectedLanguage) => {
  const definitions = isPlainObject(concept?.definitions) ? concept.definitions : {};
  const requestedLanguage = normalizeLanguage(language);

  if (typeof definitions[requestedLanguage] === "string" && definitions[requestedLanguage].trim()) {
    return requestedLanguage;
  }

  if (typeof definitions.en === "string" && definitions.en.trim()) {
    return "en";
  }

  if (typeof definitions.es === "string" && definitions.es.trim()) {
    return "es";
  }

  return requestedLanguage;
};

const getConceptDefinition = (concept, language = selectedLanguage) => {
  const definitions = isPlainObject(concept?.definitions) ? concept.definitions : {};
  const definition = definitions[getConceptDefinitionLanguage(concept, language)];
  return typeof definition === "string" ? definition.trim() : "";
};

const getCardConceptLabel = () =>
  currentConceptSecondaryTerm
    ? `${currentConceptPrimaryTerm} (${currentConceptSecondaryTerm})`
    : currentConceptPrimaryTerm;

const getStandardDisplayName = (standardId, fallback = "") => {
  const standard = getStandardById(standardId);

  return standard
    ? standard.shortName || standard.name
    : fallback;
};

const getFriendlyDefinitionError = (error) => {
  const message = error?.message ?? "";

  if (
    error instanceof TypeError
    || /openai|api|clave|key|fetch|failed|network|tiempo agotado|timeout/i.test(message)
  ) {
    return t("aiUnavailable");
  }

  return message || t("definitionErrorShort");
};

const setDefinitionError = (message = "") => {
  definitionError.textContent = message;
  definitionError.hidden = !message;
  backInput.setAttribute("aria-invalid", String(Boolean(message)));

  if (message) {
    backInput.setAttribute("aria-describedby", "definitionError");
    return;
  }

  backInput.removeAttribute("aria-describedby");
};

const isToday = (isoDate) => {
  const date = new Date(isoDate);
  const today = new Date();

  if (Number.isNaN(date.getTime())) {
    return false;
  }

  return date.getFullYear() === today.getFullYear()
    && date.getMonth() === today.getMonth()
    && date.getDate() === today.getDate();
};

const getLocalDateKey = (date) => {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const getWeekdayLabels = () =>
  Array.isArray(t("weekdayLabels"))
    ? t("weekdayLabels")
    : copy.es.weekdayLabels;

const getCurrentWeekDates = () => {
  const today = new Date();
  const start = new Date(today);

  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - start.getDay());

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return date;
  });
};

const getCompletedDateKeys = (concepts) =>
  new Set(concepts
    .map(({ completedAt }) => {
      const date = new Date(completedAt);
      return getLocalDateKey(date);
    })
    .filter(Boolean));

const getCompletedTodayCount = () =>
  loadCompletedConcepts().filter(({ completedAt }) =>
    completedAt && isToday(completedAt)
  ).length;

const getDailyGoalText = (completedToday) => {
  return t("rememberedToday", {
    completed: completedToday,
    goal: dailyGoal
  });
};

const getReadingDuration = () => {
  const wordCount = (definitionText.match(/[\p{L}\p{N}]+/gu) ?? []).length;
  return Math.max(7000, Math.min(16000, wordCount * 650));
};

const countStudyWords = (text) =>
  (text.match(/[\p{L}\p{N}]+/gu) ?? []).length;

const getSessionProgressText = () =>
  activeSession
    ? t("sessionProgress", {
      current: Math.min(activeSession.index + 1, activeSession.queue.length),
      total: activeSession.queue.length
    })
    : "";

const getSlotProgressText = () => {
  const slots = getSlotInputs();

  if (!slots.length) {
    return "";
  }

  const matches = slots.filter((slot) =>
    normalizeWord(slot.value.trim()) === slot.dataset.answer
  ).length;

  return t("slotProgress", {
    matches,
    total: slots.length
  });
};

const getStandardPulseText = (stats) => {
  if (!stats.total) {
    return "";
  }

  const remaining = Math.max(stats.total - stats.completed, 0);

  if (!remaining) {
    return t("libraryComplete");
  }

  return t("remaining", { remaining });
};

const pulseProgressBar = (bar) => {
  if (!bar || prefersReducedMotion.matches) {
    return;
  }

  bar.classList.remove("is-ink-pulsing");
  window.requestAnimationFrame(() => {
    bar.classList.add("is-ink-pulsing");
  });
};

const triggerStandardStreakAnimation = (streak) => {
  window.clearTimeout(standardStreakAnimationTimer);
  standardStreakAnimationTimer = 0;

  if (
    !standardStudyHud
    || standardStudyHud.hidden
    || streak < standardStreakThreshold
  ) {
    standardStudyHud?.classList.remove("is-streaking");
    standardStudyHud?.removeAttribute("data-streak");
    return;
  }

  standardStudyHud.dataset.streak = String(streak);
  playStreakSound(streak);

  if (prefersReducedMotion.matches) {
    standardStudyHud.classList.remove("is-streaking");
    return;
  }

  standardStudyHud.classList.remove("is-streaking");
  window.requestAnimationFrame(() => {
    standardStudyHud.classList.add("is-streaking");
  });
  standardStreakAnimationTimer = window.setTimeout(() => {
    standardStudyHud.classList.remove("is-streaking");
  }, 1180);
};

const setStudyStatusMessage = (message, includeSlotProgress = false) => {
  studyStatus.textContent = [
    getSessionProgressText(),
    message,
    includeSlotProgress ? getSlotProgressText() : ""
  ].filter(Boolean).join(" · ");
};

const focusNextOpenSlot = (currentSlot) => {
  const slots = getSlotInputs();
  const currentIndex = slots.indexOf(currentSlot);
  const openSlots = slots.filter((slot) =>
    normalizeWord(slot.value.trim()) !== slot.dataset.answer
  );
  const nextSlot = slots.slice(currentIndex + 1).find((slot) =>
    openSlots.includes(slot)
  ) ?? openSlots[0];

  if (nextSlot && nextSlot !== currentSlot) {
    nextSlot.focus({ preventScroll: true });
  }
};

const getStandardStudyState = (standard) => {
  if (!standard) {
    return {
      masteredIds: new Set(),
      reviewIds: new Set(),
      pendingIds: new Set(),
      completed: 0,
      review: 0,
      advanced: 0,
      pending: 0,
      remaining: 0,
      total: 0,
      percent: 0
    };
  }

  const progress = loadStandardProgress();
  const reviewProgress = loadStandardReviewProgress();
  const validIds = new Set(standard.concepts.map(({ id }) => id));
  const completedIds = new Set(progress[standard.id] ?? []);
  const masteredIds = new Set([...completedIds].filter((id) => validIds.has(id)));
  const reviewIds = new Set(
    (reviewProgress[standard.id] ?? []).filter((id) =>
      validIds.has(id) && !masteredIds.has(id)
    )
  );
  const pendingIds = new Set(standard.concepts
    .filter(({ id }) => !masteredIds.has(id) && !reviewIds.has(id))
    .map(({ id }) => id));
  const completed = masteredIds.size;
  const review = reviewIds.size;
  const advanced = completed + review;
  const pending = pendingIds.size;
  const total = standard.concepts.length;
  const remaining = Math.max(0, total - completed);

  return {
    masteredIds,
    reviewIds,
    pendingIds,
    completed,
    review,
    advanced,
    pending,
    remaining,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0
  };
};

const getStandardStats = (standard) => getStandardStudyState(standard);

const createStandardTrackSegment = (status) => {
  const segment = document.createElement("span");

  segment.className = [
    "standard-study-hud__segment",
    `standard-study-hud__segment--${status}`
  ].join(" ");
  segment.setAttribute("aria-hidden", "true");
  return segment;
};

const setHomeSourceExpanded = (isExpanded) => {
  isHomeSourceExpanded = Boolean(isExpanded && standards.length);
  homeStandardButton?.classList.toggle("is-expanded", isHomeSourceExpanded);
  homeStandardButton?.setAttribute("aria-expanded", String(isHomeSourceExpanded));

  if (homeSourceList) {
    homeSourceList.hidden = !isHomeSourceExpanded;
  }
};

const createHomeSourceOption = (standard, activeStandard) => {
  const item = document.createElement("li");
  const button = document.createElement("button");
  const label = document.createElement("strong");
  const meta = document.createElement("span");
  const stats = getStandardStats(standard);
  const isActive = standard.id === activeStandard?.id;

  button.type = "button";
  button.className = "home-source-option";
  button.dataset.homeSourceId = standard.id;
  button.classList.toggle("is-active", isActive);
  button.setAttribute(
    "aria-label",
    `${standard.shortName || standard.name}, ${stats.completed}/${stats.total}`
  );

  if (isActive) {
    button.setAttribute("aria-current", "true");
  }

  label.textContent = standard.shortName || standard.name;
  meta.textContent = isActive
    ? `${stats.completed}/${stats.total} · ${t("sourceSelected")}`
    : `${stats.completed}/${stats.total}`;
  button.append(label, meta);
  item.append(button);
  return item;
};

const renderHomeSourceOptions = (activeStandard) => {
  if (!homeSourceList) {
    return;
  }

  homeSourceList.setAttribute("aria-label", t("cardSource"));
  homeSourceList.replaceChildren(...standards.map((standard) =>
    createHomeSourceOption(standard, activeStandard)
  ));
  homeSourceList.hidden = !isHomeSourceExpanded || standards.length === 0;
};

const renderHome = () => {
  const standard = getPrimaryStandard();
  const stats = getStandardStats(standard);

  homeStandardTitle.textContent = standard
    ? standard.shortName || standard.name
    : standardsError
      ? t("manual")
      : t("loading");
  homeStandardRatio.textContent = `${stats.completed}/${stats.total}`;

  homeActionButtons.forEach((button) => {
    if (button.dataset.homeAction === "choose-standard") {
      const hasMasteredProgress = stats.total > 0 && stats.completed > 0;
      const isStandardMastered = stats.total > 0 && stats.completed >= stats.total;

      button.disabled = standards.length === 0;
      button.style.setProperty("--home-standard-mastered-progress", `${stats.percent}%`);
      button.classList.toggle("has-mastered-progress", hasMasteredProgress);
      button.classList.toggle("is-standard-mastered", isStandardMastered);
      button.setAttribute(
        "aria-label",
        `${isHomeSourceExpanded ? t("collapseSources") : t("expandSources")}: ${homeStandardTitle.textContent}, ${stats.completed}/${stats.total}`
      );
      button.title = isHomeSourceExpanded ? t("collapseSources") : t("expandSources");
    }
  });

  if (standards.length === 0) {
    setHomeSourceExpanded(false);
  }
  renderHomeSourceOptions(standard);
};

const renderStudyProgressHud = () => {
  const standard = getStandardById(currentStandardId);

  if (!standard || stage.hidden) {
    standardStudyHud.hidden = true;
    standardStudyHud.classList.remove(
      "is-streaking",
      "is-swipe-dragging",
      "is-swipe-target-review",
      "is-swipe-target-known"
    );
    standardStudyHud.removeAttribute("data-streak");
    return;
  }

  const stats = getStandardStats(standard);
  const label = t("standardStudyProgress", {
    advanced: stats.advanced,
    total: stats.total,
    review: stats.review,
    mastered: stats.completed
  });

  standardStudyHud.hidden = false;
  standardStudyHud.setAttribute("aria-label", label);
  standardReviewCount.textContent = String(stats.review);
  standardMasteredCount.textContent = String(stats.completed);
  standardSessionRatio.textContent = t("standardStudyRatio", {
    advanced: stats.advanced,
    total: stats.total
  });
  standardSessionTrack.style.setProperty("--standard-track-total", String(Math.max(1, stats.total)));
  standardSessionTrack.replaceChildren(...standard.concepts.map(({ id }) => {
    if (stats.masteredIds.has(id)) {
      return createStandardTrackSegment("mastered");
    }

    if (stats.reviewIds.has(id)) {
      return createStandardTrackSegment("review");
    }

    return createStandardTrackSegment("pending");
  }));
  standardSessionTrack.setAttribute("aria-valuemax", String(stats.total));
  standardSessionTrack.setAttribute("aria-valuenow", String(stats.advanced));
  standardSessionTrack.setAttribute("aria-label", t("standardProgress"));
  standardSessionTrack.setAttribute("aria-valuetext", label);
};

const getPendingConcepts = (standard) => {
  if (!standard) {
    return [];
  }

  const { pendingIds, reviewIds } = getStandardStudyState(standard);
  const pending = standard.concepts.filter(({ id }) => pendingIds.has(id));
  const review = standard.concepts.filter(({ id }) => reviewIds.has(id));
  return pending.length ? pending : review.length ? review : standard.concepts;
};

const getSessionNextConcept = () => {
  if (!activeSession) {
    return null;
  }

  return activeSession.queue[activeSession.index] ?? null;
};

const hasSessionNextConcept = () =>
  Boolean(activeSession && activeSession.index + 1 < activeSession.queue.length);

const getNextStandardConcept = (standard, currentConceptId = "") => {
  if (!standard?.concepts?.length) {
    return null;
  }

  const currentIndex = standard.concepts.findIndex(({ id }) => id === currentConceptId);
  const startIndex = currentIndex >= 0 ? currentIndex + 1 : 0;
  const orderedConcepts = [
    ...standard.concepts.slice(startIndex),
    ...standard.concepts.slice(0, startIndex)
  ];
  const { masteredIds, pendingIds, reviewIds } = getStandardStudyState(standard);
  const nextPending = orderedConcepts.find(({ id }) =>
    id !== currentConceptId && pendingIds.has(id)
  );
  const nextReview = orderedConcepts.find(({ id }) =>
    id !== currentConceptId && reviewIds.has(id)
  );
  const currentConcept = currentIndex >= 0
    ? standard.concepts[currentIndex]
    : null;

  return nextPending
    ?? nextReview
    ?? (
      currentConcept && !masteredIds.has(currentConcept.id)
        ? currentConcept
        : null
    )
    ?? null;
};

const getUpcomingStudyConcept = () => {
  if (!currentStandardId || !currentStandardConceptId) {
    return null;
  }

  if (
    activeSession
    && activeSession.standardId === currentStandardId
    && hasSessionNextConcept()
  ) {
    return activeSession.queue[activeSession.index + 1] ?? null;
  }

  return getNextStandardConcept(getStandardById(currentStandardId), currentStandardConceptId);
};

const renderNextCardPreview = () => {
  const nextConcept = getUpcomingStudyConcept();

  if (!nextCardPreview || !nextCardOutput || !currentConceptTerm.trim()) {
    card.classList.remove("has-next-card");
    nextCardOutput?.replaceChildren();
    nextCardOutput?.classList.remove("is-compact");
    return;
  }

  if (!nextConcept || nextConcept.id === currentStandardConceptId) {
    nextCardOutput.replaceChildren();
    nextCardOutput.classList.remove("is-compact");
    card.classList.remove("has-next-card");
    return;
  }

  const display = getConceptDisplay(nextConcept);
  const termText = document.createElement("span");
  const translationText = document.createElement("span");

  termText.className = "flip-card__term";
  termText.textContent = display.primaryTerm;
  nextCardOutput.replaceChildren(termText);

  if (display.secondaryTerm) {
    translationText.className = "flip-card__translation";
    translationText.textContent = formatSecondaryTerm(display.secondaryTerm);
    nextCardOutput.append(translationText);
  }

  nextCardOutput.classList.toggle(
    "is-compact",
    `${display.primaryTerm} ${display.secondaryTerm}`.trim().length > 28
  );
  card.classList.add("has-next-card");
};

const loadActiveSessionConcept = async () => {
  const concept = getSessionNextConcept();
  const standard = activeSession ? getStandardById(activeSession.standardId) : null;

  if (!concept || !standard) {
    activeSession = null;
    showHome();
    return;
  }

  selectedStandard = standard;
  const loaded = await loadStandardConcept(concept);

  if (!loaded) {
    const standardId = standard.id;
    activeSession = null;
    showCreator({ standardId });
  }
};

const loadNextStandardConcept = async () => {
  const standard = getStandardById(currentStandardId);
  const concept = getNextStandardConcept(standard, currentStandardConceptId);

  if (!standard || !concept) {
    return false;
  }

  selectedStandard = standard;
  setStudyStatusMessage(t("prepareNextConcept"));
  setStudyFeedback(t("prepareConcept"), "help");
  return loadStandardConcept(concept);
};

const startStandardSession = async () => {
  const standard = getPrimaryStandard();

  if (!standard || isGeneratingDefinition) {
    return;
  }

  const queue = getPendingConcepts(standard).slice(0, dailyGoal);

  if (!queue.length) {
    return;
  }

  activeSession = {
    standardId: standard.id,
    queue,
    index: 0,
    completed: 0
  };
  await loadActiveSessionConcept();
};

const getConceptCollator = () => new Intl.Collator(getLanguageMetadata().htmlLang, {
  numeric: true,
  sensitivity: "base"
});

const sortConcepts = (concepts) => {
  const collator = getConceptCollator();
  return [...concepts].sort((left, right) =>
    collator.compare(
      left.display?.primaryTerm ?? left.concept ?? "",
      right.display?.primaryTerm ?? right.concept ?? ""
    )
  );
};

const getCleanDefinitions = (definitions, fallbacks = {}) =>
  Object.fromEntries(supportedLanguages.map((language) => {
    const value = definitions?.[language] ?? fallbacks[language] ?? "";
    return [language, typeof value === "string" ? value.trim() : ""];
  }).filter(([, value]) => value));

const getCleanLocalizedTerms = (concept, standard = {}) => {
  const term = typeof concept === "string" ? concept : concept.term ?? "";
  const localizedTerms = isPlainObject(concept?.localizedTerms)
    ? concept.localizedTerms
    : {};
  const entries = Object.fromEntries(supportedLanguages.map((language) => [
    language,
    localizedTerms[language]
  ]));

  Object.assign(entries, {
    es: typeof concept === "string"
      ? standard.translations?.[term]
      : concept.spanishTerm
        || concept.termEs
        || concept.conceptEs
        || standard.translations?.[term],
    hi: typeof concept === "string"
      ? standard.translationsHi?.[term] || standard.hindiTranslations?.[term]
      : concept.hindiTerm
        || concept.termHi
        || concept.conceptHi
        || localizedTerms.hi
        || standard.translationsHi?.[term]
        || standard.hindiTranslations?.[term],
    zh: typeof concept === "string"
      ? standard.translationsZh?.[term] || standard.chineseTranslations?.[term]
      : concept.chineseTerm
        || concept.termZh
        || concept.conceptZh
        || localizedTerms.zh
        || standard.translationsZh?.[term]
        || standard.chineseTranslations?.[term]
  });

	  return Object.fromEntries(Object.entries(entries).map(([language, value]) => [
	    language,
	    typeof value === "string" ? value.trim() : ""
	  ]).filter(([, value]) => value));
	};

const mergeStandardTranslations = (standard, translationPack) => {
  if (!isPlainObject(translationPack) || !isPlainObject(translationPack.concepts)) {
    return standard;
  }

  if (translationPack.standardId && translationPack.standardId !== standard.id) {
    return standard;
  }

  return {
    ...standard,
    concepts: (standard.concepts ?? []).map((concept) => {
      if (!isPlainObject(concept)) {
        return concept;
      }

      const translation = translationPack.concepts[concept.id];
      if (!isPlainObject(translation)) {
        return concept;
      }

      return {
        ...concept,
        definitions: {
          ...(isPlainObject(concept.definitions) ? concept.definitions : {}),
          ...(isPlainObject(translation.definitions) ? translation.definitions : {})
        },
        localizedTerms: {
          ...(isPlainObject(concept.localizedTerms) ? concept.localizedTerms : {}),
          ...(isPlainObject(translation.localizedTerms) ? translation.localizedTerms : {})
        }
      };
    })
  };
};

const normalizeStandard = (standard) => ({
  ...standard,
  concepts: (standard.concepts ?? [])
    .map((concept) => {
      const term = typeof concept === "string" ? concept : concept.term;
      const definitions = typeof concept === "string"
        ? {}
        : getCleanDefinitions(concept.definitions, {
          es: concept.definitionEs || concept.definition,
          en: concept.definitionEn
        });
      const localizedTerms = getCleanLocalizedTerms(concept, standard);
      const spanishTerm = localizedTerms.es ?? "";

      if (
        !term
        || typeof spanishTerm !== "string"
        || !spanishTerm.trim()
        || typeof definitions.es !== "string"
        || !definitions.es.trim()
        || typeof definitions.en !== "string"
        || !definitions.en.trim()
      ) {
        return null;
      }

      return {
        id: typeof concept === "string" ? slugify(term) : concept.id || slugify(term),
        term,
        spanishTerm: spanishTerm.trim(),
        definitions,
        ...(Object.keys(localizedTerms).length ? { localizedTerms } : {})
      };
    })
    .filter(Boolean)
});

const loadBundledStandards = () => {
  if (
    !isPlainObject(bundledStandardsPayload)
    || !Array.isArray(bundledStandardsPayload.index)
    || !isPlainObject(bundledStandardsPayload.standards)
  ) {
    return [];
  }

  return bundledStandardsPayload.index
    .map((entry) => {
      if (!isPlainObject(entry) || typeof entry.path !== "string") {
        return null;
      }

	      const standard = bundledStandardsPayload.standards[entry.path];
	      const translationPack = entry.translationsPath
	        ? bundledStandardsPayload.translations?.[entry.translationsPath]
	        : null;
	      return isPlainObject(standard)
	        ? normalizeStandard(mergeStandardTranslations({ ...entry, ...standard }, translationPack))
	        : null;
	    })
	    .filter((standard) => standard?.concepts?.length > 0);
	};

const loadStandardTranslationPack = async (entry) => {
  if (!entry.translationsPath) {
    return null;
  }

  try {
    const response = await fetch(`${apiBaseUrl}/${entry.translationsPath}`, {
      cache: "no-store"
    });

    return response.ok ? response.json() : null;
  } catch {
    return null;
  }
};

const renderStandardOptions = () => {
  const currentValue = standardSelect.value;
  const manualOption = document.createElement("option");

  manualOption.value = "";
  manualOption.textContent = t("manual");
  standardSelect.replaceChildren(manualOption);

  standards.forEach((standard) => {
    const option = document.createElement("option");
    option.value = standard.id;
    option.textContent = standard.shortName || standard.name;
    standardSelect.append(option);
  });

  if (standards.some((standard) => standard.id === currentValue)) {
    standardSelect.value = currentValue;
  }

  renderCustomSetOptions();
};

const syncCustomSetNameField = (options = {}) => {
  if (!customSetSelect || !customSetNameField || !customSetNameInput) {
    return;
  }

  const isCreatingSet = customSetSelect.value === customSetCreateValue;
  customSetNameField.hidden = !isCreatingSet;
  customSetNameInput.required = isCreatingSet;
  if (!isCreatingSet) {
    customSetNameInput.value = "";
    setCustomSetHelp();
  }

  if (isCreatingSet && options.focus) {
    customSetNameInput.focus({ preventScroll: true });
  }
};

const renderCustomSetOptions = () => {
  if (!customSetSelect) {
    return;
  }

  const currentValue = customSetSelect.value;
  const customStandards = getCustomStandards();
  const noSetOption = document.createElement("option");
  const newSetOption = document.createElement("option");

  noSetOption.value = "";
  noSetOption.textContent = t("noCustomSet");
  newSetOption.value = customSetCreateValue;
  newSetOption.textContent = t("createCustomSet");
  customSetSelect.replaceChildren(noSetOption, newSetOption);

  customStandards.forEach((standard) => {
    const option = document.createElement("option");
    const stats = getStandardStats(standard);

    option.value = standard.id;
    option.textContent = `${standard.shortName || standard.name} (${stats.completed}/${stats.total})`;
    customSetSelect.append(option);
  });

  if (currentValue === customSetCreateValue || customStandards.some(({ id }) => id === currentValue)) {
    customSetSelect.value = currentValue;
  } else {
    const activeStandard = getStandardById(loadActiveStandardId());
    customSetSelect.value = activeStandard?.isCustom ? activeStandard.id : "";
  }

  syncCustomSetNameField();
};

const renderStandardPanel = () => {
  if (!selectedStandard) {
    standardPanel.hidden = true;
    return;
  }

  const { masteredIds: completedIds, reviewIds } = getStandardStudyState(selectedStandard);
  const query = normalizeWord(standardSearch.value.trim());
  const concepts = selectedStandard.concepts.filter((concept) => {
    const localizedTerms = isPlainObject(concept.localizedTerms)
      ? Object.values(concept.localizedTerms)
      : [];

    return normalizeWord([
      concept.term,
      concept.spanishTerm,
      concept.hindiTerm,
      concept.chineseTerm,
      ...localizedTerms
    ].filter(Boolean).join(" ")).includes(query);
  });
  const completedCount = completedIds.size;
  const total = selectedStandard.concepts.length;
  const percent = total ? Math.round((completedCount / total) * 100) : 0;

  standardTitle.textContent = selectedStandard.shortName || selectedStandard.name;
  standardCount.textContent = t("conceptCount", { total });
  standardProgressText.textContent = `${completedCount}/${total}`;
  standardProgressBar.style.width = `${percent}%`;
  standardProgress.setAttribute("aria-valuemax", String(total));
  standardProgress.setAttribute("aria-valuenow", String(completedCount));
	  standardProgress.setAttribute(
	    "aria-valuetext",
	    t("standardProgressAriaText", { completed: completedCount, total })
	  );
  const isFiltering = standardSearch.value.trim().length > 0;
  const pulseText = getStandardPulseText({ completed: completedCount, total });
  const statusFromContext = isFiltering
    ? t("conceptsStatus", { count: concepts.length, pulse: pulseText })
    : pulseText;
  standardStatus.textContent = standardMessage || statusFromContext;
  standardConcepts.replaceChildren();

  if (!concepts.length) {
    const item = document.createElement("li");
    const empty = document.createElement("p");

    empty.className = "standard-empty";
    empty.textContent = t("noResults");
    item.append(empty);
    standardConcepts.append(item);
    return;
  }

  concepts.forEach((concept) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    const label = document.createElement("span");
    const term = document.createElement("strong");
    const translation = document.createElement("small");
    const state = document.createElement("span");
    const isComplete = completedIds.has(concept.id);
    const isReview = reviewIds.has(concept.id);
    const isBusy = standardBusyConceptId === concept.id;
    const display = getConceptDisplay(concept);

    button.className = [
      "standard-concept",
      isComplete ? "is-complete" : "",
      isReview ? "is-review" : ""
    ].filter(Boolean).join(" ");
    button.type = "button";
    button.disabled = isGeneratingDefinition;
    button.setAttribute("aria-label", display.secondaryTerm
      ? `${display.primaryTerm}, ${display.secondaryTerm}`
      : display.primaryTerm);
    label.className = "standard-concept__label";
    term.textContent = display.primaryTerm;
    translation.textContent = formatSecondaryTerm(display.secondaryTerm);
    state.className = "standard-concept__state";
    state.textContent = isBusy
      ? t("loading")
      : isComplete
        ? t("completed")
        : isReview
          ? t("standardInProgress")
        : "";

    label.append(term);

    if (display.secondaryTerm) {
      label.append(translation);
    }

    button.append(label);

    if (isBusy || isReview) {
      button.append(state);
    } else if (isComplete) {
      const check = document.createElement("span");
      check.className = "standard-concept__check";
      check.setAttribute("aria-hidden", "true");
      check.textContent = "✓";
      const srLabel = document.createElement("span");
      srLabel.className = "sr-only";
      srLabel.textContent = t("completed");
      button.append(check, srLabel);
    } else {
      const chevron = document.createElement("span");
      chevron.className = "standard-concept__chevron";
      chevron.setAttribute("aria-hidden", "true");
      chevron.textContent = "›";
      button.append(chevron);
    }

    button.addEventListener("click", () =>
      navigateWithHistory(() => loadStandardConcept(concept))
    );
    item.append(button);
    standardConcepts.append(item);
  });
};

const selectStandard = (standardId, options = {}) => {
  selectedStandard = standards.find((standard) => standard.id === standardId) ?? null;

  if (selectedStandard) {
    saveActiveStandardId(selectedStandard.id);
  }

  manualCreator.hidden = Boolean(selectedStandard);
  standardPanel.hidden = !selectedStandard;
  standardSearch.value = "";
  setStandardStatus("");
  renderStandardPanel();
  renderHome();
  updateButtonState();

  if (!selectedStandard && options.focusManual) {
    frontInput.focus({ preventScroll: true });
  }
};

const loadStandards = async () => {
  standardSelect.disabled = true;
  const bundledStandards = loadBundledStandards();

  try {
    if (window.location.protocol === "file:" && bundledStandards.length) {
      standards = [
        ...bundledStandards,
        ...loadCustomStandards()
      ];
      standardsError = "";
      standardSelect.title = "";
      pruneUnavailableStandardStorage();
      return;
    }

    const indexResponse = await fetch(`${apiBaseUrl}/data/standards/index.json`, {
      cache: "no-store"
    });

	    if (!indexResponse.ok) {
	      throw new Error(t("loadIndexError"));
	    }

    const index = await indexResponse.json();
    const results = await Promise.allSettled(index.map(async (entry) => {
      const response = await fetch(`${apiBaseUrl}/${entry.path}`, {
        cache: "no-store"
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} cargando ${entry.name}`);
      }

	      const [standard, translationPack] = await Promise.all([
	        response.json(),
	        loadStandardTranslationPack(entry)
	      ]);
	      return normalizeStandard(mergeStandardTranslations({ ...entry, ...standard }, translationPack));
	    }));

    const loadedStandards = results
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);
    const failed = results.filter((result) => result.status === "rejected");
    const remoteStandards = loadedStandards.filter((standard) => standard.concepts.length > 0);
    const catalogStandards = remoteStandards.length
      ? remoteStandards
      : bundledStandards;

    standards = [
      ...catalogStandards,
      ...loadCustomStandards()
    ];
    standardsError = standards.length === 0
      ? t("standardUnavailable")
      : "";
    standardSelect.title = "";
    if (standards.length > 0) {
      pruneUnavailableStandardStorage();
    }

    if (failed.length && typeof console !== "undefined") {
      failed.forEach((result) => console.warn("Standard load failed:", result.reason));
    }

  } catch (error) {
    standards = [
      ...bundledStandards,
      ...loadCustomStandards()
    ];
    standardsError = standards.length === 0
      ? t("standardUnavailable")
      : "";
    standardSelect.title = standards.length ? "" : error.message;
  } finally {
    if (standards.length === 0) {
      const option = document.createElement("option");
      option.value = "";
      option.textContent = t("standardUnavailable");
      standardSelect.replaceChildren(option);
      renderCustomSetOptions();
    } else {
      renderStandardOptions();
    }
    standardSelect.disabled = false;
    renderHome();
  }
};

const requestDefinition = async (concept, standard = "", options = {}) => {
  const payload = {
    concept,
    language: normalizeLanguage(options.language ?? selectedLanguage)
  };

  // #BuildHybridAI: custom-card definitions come from Firebase AI Logic
  // (Gemini Nano on the device first, Gemini in the cloud as fallback).
  if (window.FlipAI?.isConfigured?.()) {
    const result = await window.FlipAI.define({
      concept,
      standard,
      alternateTerm: options.alternateTerm,
      language: payload.language
    });
    const definition = String(result?.data ?? "").trim();

    if (!definition) {
      throw new Error(t("aiEmptyDefinition"));
    }

    lastDefinitionSource = result.source;
    return definition;
  }
  const controller = new AbortController();
  const timeout = window.setTimeout(() => {
    controller.abort();
  }, definitionRequestTimeoutMs);

  if (standard) {
    payload.standard = standard;
  }

  if (options.alternateTerm) {
    payload.alternateTerm = options.alternateTerm;
  }

  if (options.signal) {
    if (options.signal.aborted) {
      controller.abort();
    } else {
      options.signal.addEventListener("abort", () => controller.abort(), {
        once: true
      });
    }
  }

  try {
    const response = await fetch(`${apiBaseUrl}/api/definition`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    let data = {};

    try {
      data = await response.json();
    } catch {
      data = {};
    }

    if (!response.ok) {
      throw new Error(data.error || response.statusText || "No se pudo generar");
    }

    if (typeof data.definition !== "string" || !data.definition.trim()) {
	      throw new Error(t("aiEmptyDefinition"));
    }

    return data.definition.trim();
  } catch (error) {
	    if (error.name === "AbortError") {
	      throw new Error(t("timeoutTryAgain"));
	    }

    throw error;
  } finally {
    window.clearTimeout(timeout);
  }
};

const cancelStandardLoad = () => {
  if (!standardDefinitionController) {
    return;
  }

  standardRequestId += 1;
  standardDefinitionController.abort();
  standardDefinitionController = null;
  standardBusyConceptId = "";
  isGeneratingDefinition = false;
  renderStandardPanel();
  updateButtonState();
};

const loadStandardConcept = async (concept) => {
  if (!selectedStandard || isGeneratingDefinition) {
    return;
  }

  const standard = selectedStandard;
  const language = selectedLanguage;
  const definition = getConceptDefinition(concept, language);
  const definitionLanguage = getConceptDefinitionLanguage(concept, language);
  const requestId = ++standardRequestId;

  if (!definition) {
    setStandardStatus(t("standardDefinitionMissing"));
    return false;
  }

  saveActiveStandardId(standard.id);
  isGeneratingDefinition = true;
  standardBusyConceptId = concept.id;
  standardDefinitionController = null;
  setStandardStatus(t("loadingCard"));
  renderStandardPanel();
  updateButtonState();

  try {
    if (
      requestId !== standardRequestId
      || selectedStandard?.id !== standard.id
      || selectedLanguage !== language
    ) {
      return false;
    }

    setStandardStatus("");
    loadCard(concept.term, definition, {
      standardId: standard.id,
      conceptId: concept.id,
      spanishTerm: concept.spanishTerm ?? "",
      language: definitionLanguage
    });
    return true;
  } catch (error) {
    if (requestId !== standardRequestId) {
      return false;
    }

    setStandardStatus(getFriendlyDefinitionError(error));
    return false;
  } finally {
    if (requestId === standardRequestId) {
      isGeneratingDefinition = false;
      standardBusyConceptId = "";
      standardDefinitionController = null;
      renderStandardPanel();
      updateButtonState();
    }
  }
};

const getUniqueConceptId = (concepts, term) => {
  const usedIds = new Set(concepts.map(({ id }) => id));
  const baseId = slugify(term);
  let conceptId = baseId;
  let suffix = 2;

  while (usedIds.has(conceptId)) {
    conceptId = `${baseId}-${suffix}`;
    suffix += 1;
  }

  return conceptId;
};

const syncCustomStandardsInRuntime = (customStandards) => {
  const builtInStandards = standards.filter((standard) => !standard.isCustom && standard.source !== "custom");

  standards = [
    ...builtInStandards,
    ...sanitizeCustomStandards(customStandards)
  ];
  pruneUnavailableStandardStorage();
  renderStandardOptions();
  renderHome();
};

const addManualCardToCustomSet = ({ concept, definition, setId = "", setName = "", language }) => {
  const customStandards = loadCustomStandards();
  const now = new Date().toISOString();
  let standard = setId
    ? customStandards.find(({ id }) => id === setId)
    : null;

  if (!standard && setName) {
    standard = getCustomStandardByName(customStandards, setName);
  }

  if (!standard) {
    const name = setName.trim();

    standard = {
      id: `custom-${slugify(name)}-${Date.now().toString(36)}`,
      name,
      shortName: name,
      source: "custom",
      isCustom: true,
      concepts: [],
      createdAt: now,
      updatedAt: now
    };
    customStandards.push(standard);
  }

  const conceptId = getUniqueConceptId(standard.concepts, concept);
  const definitionLanguage = normalizeLanguage(language);
  const definitions = {
    [definitionLanguage]: definition
  };

  standard.concepts.push({
    id: conceptId,
    term: concept,
    spanishTerm: concept,
    definitions,
    definitionLanguage,
    createdAt: now
  });
  standard.updatedAt = now;
  saveCustomStandards(customStandards);
  saveActiveStandardId(standard.id);
  syncCustomStandardsInRuntime(customStandards);
  customSetSelect.value = standard.id;
  customSetNameInput.value = "";
  syncCustomSetNameField();
  setCustomSetHelp(t("customSetSaved", { name: standard.shortName || standard.name }));

  return {
    standardId: standard.id,
    conceptId,
    standardName: standard.shortName || standard.name
  };
};

const getAlphabetKey = (text) => {
  const firstCharacter = text.trim().match(/[\p{L}\p{N}]/u)?.[0];

  if (!firstCharacter) {
    return "#";
  }

  const useLatinAlphabet = latinAlphabetLanguages.has(selectedLanguage);
  const upperCharacter = firstCharacter.toLocaleUpperCase(getLanguageMetadata().htmlLang);

  if (alphabet.includes(upperCharacter)) {
    return upperCharacter;
  }

  const plainCharacter = upperCharacter
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  if (alphabet.includes(plainCharacter)) {
    return plainCharacter;
  }

  return useLatinAlphabet ? "#" : upperCharacter;
};

const getLibraryAlphabet = (filledLetters) => {
  if (latinAlphabetLanguages.has(selectedLanguage)) {
    return alphabet.filter((letter) => letter !== "#" || filledLetters.has(letter));
  }

  const collator = getConceptCollator();
  return [...filledLetters].sort((left, right) => {
    if (left === "#") return 1;
    if (right === "#") return -1;
    return collator.compare(left, right);
  });
};

const getCompletedConceptDisplay = (concept) => {
  const conceptId = concept.conceptId
    || getStandardConceptId(concept.standardId ?? "", concept.concept);
  const standardConcept = getStandardConceptById(concept.standardId ?? "", conceptId);
  const spanishTerm = getDisplaySpanishTerm(
    concept.concept,
    concept.spanishTerm
      || getStandardConceptSpanishTerm(concept.standardId ?? "", conceptId, concept.concept)
  );
  const display = getConceptDisplay(standardConcept ?? {
    term: concept.concept,
    spanishTerm
  });

  return {
    conceptId,
    spanishTerm,
    display,
    alphabetKey: getAlphabetKey(display.primaryTerm)
  };
};

const getCompletedConceptLibraryData = (concept) => {
  const displayData = getCompletedConceptDisplay(concept);
  const standardConcept = getStandardConceptById(
    concept.standardId ?? "",
    displayData.conceptId
  );
  const localizedDefinition = standardConcept
    ? getConceptDefinition(standardConcept, selectedLanguage)
    : "";
  const definition = localizedDefinition || concept.definition || "";
  const standardName = getStandardDisplayName(
    concept.standardId ?? "",
    concept.standardName
  );

  return {
    ...concept,
    ...displayData,
    definition,
    standardName,
    searchText: [
      displayData.display.primaryTerm,
      displayData.display.secondaryTerm,
      definition,
      standardName,
      concept.concept,
      displayData.spanishTerm
    ].join(" ")
  };
};

const getSlotInputs = () => [...wordSlots.querySelectorAll(".word-slot")];

const gestureSoundSources = {
  flip: "audio/ui-flip.ogg",
  decision: "audio/ui-decision.ogg",
  progress: "audio/ui-progress.ogg",
  mastered: "audio/ui-mastered.ogg"
};
const gestureSoundVolume = 0.32;
const canPlayLocalGestureAudio = (() => {
  try {
    const probe = new Audio();

    return probe.canPlayType("audio/ogg; codecs=vorbis") !== "";
  } catch {
    return false;
  }
})();
const gestureAudio = canPlayLocalGestureAudio
  ? Object.fromEntries(Object.entries(gestureSoundSources).map(([name, source]) => {
      const audio = new Audio(source);

      audio.preload = "auto";
      audio.volume = gestureSoundVolume;

      return [name, audio];
    }))
  : {};
const activeGestureSounds = new Set();

const getFeedbackAudioContext = () => {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return null;
    }

    if (navigator.userActivation && !navigator.userActivation.isActive && !approvalAudioContext) {
      return null;
    }

    approvalAudioContext = approvalAudioContext || new AudioContextClass();

    if (approvalAudioContext.state === "suspended") {
      void approvalAudioContext.resume();
    }

    return approvalAudioContext;
  } catch {
    return null;
  }
};

const primeFeedbackAudioContext = () => {
  getFeedbackAudioContext();
};

window.addEventListener("pointerdown", primeFeedbackAudioContext, {
  capture: true,
  passive: true
});
window.addEventListener("keydown", primeFeedbackAudioContext, { capture: true });

const playFeedbackTone = (startFrequency, endFrequency, duration = 0.22, peakGain = 0.045, options = {}) => {
  try {
    const audioContext = getFeedbackAudioContext();

    if (!audioContext) {
      return;
    }

    const {
      attack = 0.018,
      delay = 0,
      detune = 0,
      glide = 0.58,
      type = "sine"
    } = options;
    const safeDuration = Math.max(0.03, duration);
    const now = audioContext.currentTime + Math.max(0, delay);
    const stopAt = now + safeDuration;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const safeStartFrequency = Math.max(1, startFrequency);
    const safeEndFrequency = Math.max(1, endFrequency);

    oscillator.type = type;
    oscillator.detune.setValueAtTime(detune, now);
    oscillator.frequency.setValueAtTime(safeStartFrequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(safeEndFrequency, now + safeDuration * glide);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peakGain, now + Math.min(attack, safeDuration * 0.42));
    gain.gain.exponentialRampToValueAtTime(0.0001, stopAt);

    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(stopAt + 0.02);
  } catch {
    // El feedback visual sigue funcionando aunque el navegador bloquee audio.
  }
};

const playProgressSound = () => {
  playFeedbackTone(392, 523.25, 0.15, 0.026, {
    attack: 0.01,
    glide: 0.72,
    type: "triangle"
  });
  playFeedbackTone(523.25, 587.33, 0.12, 0.018, {
    attack: 0.012,
    delay: 0.07,
    glide: 0.52,
    type: "sine"
  });
};

const playApprovalSound = () => {
  playFeedbackTone(523.25, 783.99, 0.18, 0.03, {
    attack: 0.012,
    glide: 0.66,
    type: "triangle"
  });
  playFeedbackTone(659.25, 1046.5, 0.24, 0.022, {
    attack: 0.016,
    delay: 0.08,
    glide: 0.62,
    type: "sine"
  });
};

const playRejectionSound = () => {
  playFeedbackTone(196, 123.47, 0.2, 0.042, {
    attack: 0.006,
    glide: 0.82,
    type: "sawtooth"
  });
  playFeedbackTone(98, 82.41, 0.16, 0.024, {
    attack: 0.004,
    delay: 0.035,
    glide: 0.76,
    type: "square"
  });
};

const playDecisionSound = () => {
  playFeedbackTone(220, 180, 0.1, 0.025, {
    attack: 0.006,
    type: "triangle"
  });
};

const playStreakSound = (streak = standardStreakThreshold) => {
  const streakLift = Math.min(4, Math.max(0, streak - standardStreakThreshold));
  const peakGain = 0.018 + streakLift * 0.002;

  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    playFeedbackTone(frequency, frequency * 1.06, 0.16, peakGain, {
      attack: 0.01,
      delay: index * 0.055,
      glide: 0.42,
      type: index % 2 ? "triangle" : "sine"
    });
  });
  playFeedbackTone(1567.98, 2093, 0.22, 0.012 + streakLift * 0.001, {
    attack: 0.016,
    delay: 0.2,
    glide: 0.5,
    type: "sine"
  });
};

const playLocalGestureSound = (name, fallback) => {
  const audio = gestureAudio[name];

  if (!audio) {
    fallback?.();
    return;
  }

  let sound = null;

  try {
    sound = audio.cloneNode(true);

    sound.volume = gestureSoundVolume;
    activeGestureSounds.add(sound);
    sound.addEventListener("ended", () => activeGestureSounds.delete(sound), { once: true });
    sound.addEventListener("error", () => activeGestureSounds.delete(sound), { once: true });
    const playPromise = sound.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        activeGestureSounds.delete(sound);
        fallback?.();
      });
    }
  } catch {
    if (sound) {
      activeGestureSounds.delete(sound);
    }

    fallback?.();
  }
};

const playFlipGestureSound = () => {
  playLocalGestureSound("flip", () => playFeedbackTone(320, 440, 0.08, 0.018));
};

const playDecisionGestureSound = () => {
  playLocalGestureSound("decision", playDecisionSound);
};

const playProgressGestureSound = () => {
  playLocalGestureSound("progress", null);
  playProgressSound();
};

const playMasteredGestureSound = () => {
  playLocalGestureSound("mastered", null);
  playApprovalSound();
};

const showWordPopup = (slot, type = "match") => {
  const rect = slot.getBoundingClientRect();
  const popup = document.createElement("span");

  popup.className = type === "miss" ? "word-pop word-pop--miss" : "word-pop";
  popup.setAttribute("aria-hidden", "true");
  popup.textContent = type === "miss" ? "×" : "✓";
  popup.style.left = `${rect.left + rect.width / 2}px`;
  popup.style.top = `${rect.top - 8}px`;
  document.body.append(popup);
  window.setTimeout(() => popup.remove(), 720);
};

const clearSlotMissTimer = (slot) => {
  const timer = missFeedbackTimers.get(slot);

  if (timer) {
    window.clearTimeout(timer);
  }

  missFeedbackTimers.delete(slot);
};

const rejectSlotAttempt = (slot) => {
  const attempt = normalizeWord(slot.value.trim());

  if (!attempt || attempt === slot.dataset.answer) {
    return;
  }

  if (slot.dataset.missValue === attempt) {
    return;
  }

  slot.dataset.missValue = attempt;
  slot.setAttribute("aria-invalid", "true");
  slot.classList.add("is-live-miss");
  setStudyStatusMessage(t("reviewAnswer"), true);
  const messages = feedbackMessages[selectedLanguage]?.nearMiss ?? feedbackMessages.es.nearMiss;
  setStudyFeedback(
    messages[Number(slot.dataset.wordIndex) % messages.length],
    "emphasis"
  );
  showWordPopup(slot, "miss");
  playRejectionSound();
  window.setTimeout(() => {
    slot.classList.remove("is-live-miss");
  }, 520);
};

const scheduleSlotMissFeedback = (slot) => {
  clearSlotMissTimer(slot);

  const attempt = normalizeWord(slot.value.trim());

  if (!attempt || attempt === slot.dataset.answer) {
    slot.dataset.missValue = "";
    return;
  }

  if (attempt.length < slot.dataset.answer.length) {
    return;
  }

  missFeedbackTimers.set(slot, window.setTimeout(() => {
    rejectSlotAttempt(slot);
    missFeedbackTimers.delete(slot);
  }, 520));
};

const celebrateSlotMatch = (slot) => {
  const isLiveMatch = normalizeWord(slot.value.trim()) === slot.dataset.answer;

  slot.classList.toggle("is-live-match", isLiveMatch);

  if (!isLiveMatch) {
    slot.dataset.liveMatched = "false";
    return;
  }

  if (slot.dataset.liveMatched === "true") {
    return;
  }

  slot.dataset.liveMatched = "true";
  slot.dataset.missValue = "";
  slot.setAttribute("aria-invalid", "false");
  clearSlotMissTimer(slot);
  setStudyStatusMessage(t("wordCorrect"), true);
  const messages = feedbackMessages[selectedLanguage]?.correct ?? feedbackMessages.es.correct;
  setStudyFeedback(
    messages[Number(slot.dataset.wordIndex) % messages.length],
    "emphasis"
  );
  showWordPopup(slot);
  playApprovalSound();
  focusNextOpenSlot(slot);
  maybeCompleteConcept();
};

const syncBackFocusableState = () => {
  const isFlipped = card.classList.contains("is-flipped");
  const isReady = answerCard.classList.contains("is-answer-ready");

  if (isSwipeDecisionActive) {
    readyAnswerButton.tabIndex = -1;
    getSlotInputs().forEach((slot) => {
      slot.tabIndex = -1;
    });
    return;
  }

  readyAnswerButton.tabIndex = isFlipped && !isReady && !readyAnswerButton.hidden
    ? 0
    : -1;
  getSlotInputs().forEach((slot) => {
    slot.tabIndex = isFlipped && isReady ? 0 : -1;
  });
};

const clearBackFaceReturnTimer = () => {
  window.clearTimeout(backFaceReturnTimer);
  backFaceReturnTimer = 0;
};

const completeShowFrontFace = () => {
  clearBackFaceReturnTimer();
  resetBackIntro();
  card.classList.remove("is-flipped");
  setCardFaceState(false);
  frontFaceButton.focus({ preventScroll: true });
};

const showFrontFace = (options = {}) => {
  clearBackFaceReturnTimer();

  if (options.feedback && !prefersReducedMotion.matches) {
    if (!backFace.classList.contains("is-press-filling")) {
      startFrontPressFill(options.event, backFace);
    }
    backFaceReturnTimer = window.setTimeout(completeShowFrontFace, getFrontPressFlipDelay());
    return;
  }

  completeShowFrontFace();
};

const setStudyFeedback = (message = "", tone = "") => {
  studyFeedback.textContent = message;
  studyFeedback.classList.toggle("is-help", tone === "help");
  studyFeedback.classList.toggle("is-emphasis", tone === "emphasis");
};

const setCardFaceState = (isFlipped) => {
  if (isFlipped && document.activeElement === frontFaceButton) {
    frontFaceButton.blur();
  }

  if (isSwipeDecisionActive) {
    frontFaceButton.setAttribute("aria-expanded", "false");
    frontFaceButton.setAttribute("aria-hidden", "true");
    backFace.setAttribute("aria-hidden", "true");
    frontFaceButton.inert = true;
    backFace.inert = true;
    frontFaceButton.tabIndex = -1;
    syncBackFocusableState();
    return;
  }

  frontFaceButton.setAttribute("aria-expanded", String(isFlipped));
  frontFaceButton.setAttribute("aria-hidden", String(isFlipped));
  backFace.setAttribute("aria-hidden", String(!isFlipped));
  frontFaceButton.inert = isFlipped;
  backFace.inert = !isFlipped;
  frontFaceButton.tabIndex = isFlipped ? -1 : 0;
  syncBackFocusableState();
};

const clearFlipSequence = () => {
  window.clearTimeout(flipSequenceTimer);
  flipSequenceTimer = 0;
  clearBackFaceReturnTimer();
};

const clearFrontPressFill = () => {
  window.clearTimeout(frontPressFillTimer);
  frontPressFillTimer = 0;
  frontPressFillStartedAt = 0;
  frontFaceButton.classList.remove("is-press-filling");
  backFace.classList.remove("is-press-filling");
};

const setFrontPressFillOrigin = (event, face = frontFaceButton) => {
  const rect = face.getBoundingClientRect();

  if (rect.width <= 0 || rect.height <= 0) {
    face.style.setProperty("--press-fill-x", "50%");
    face.style.setProperty("--press-fill-y", "50%");
    face.style.setProperty("--press-fill-size", "160%");
    return;
  }

  const hasPointerPosition = event
    && Number.isFinite(event.clientX)
    && Number.isFinite(event.clientY)
    && (event.type === "pointerdown" || event.detail > 0);
  const rawX = hasPointerPosition ? event.clientX - rect.left : rect.width / 2;
  const rawY = hasPointerPosition ? event.clientY - rect.top : rect.height / 2;
  const x = Math.max(0, Math.min(rect.width, rawX));
  const y = Math.max(0, Math.min(rect.height, rawY));
  const farthestX = Math.max(x, rect.width - x);
  const farthestY = Math.max(y, rect.height - y);
  const diameter = Math.ceil(Math.hypot(farthestX, farthestY) * 2);

  face.style.setProperty("--press-fill-x", `${x}px`);
  face.style.setProperty("--press-fill-y", `${y}px`);
  face.style.setProperty("--press-fill-size", `${diameter}px`);
};

const startFrontPressFill = (event, face = frontFaceButton) => {
  clearFrontPressFill();
  setFrontPressFillOrigin(event, face);
  void face.offsetWidth;
  frontPressFillStartedAt = Date.now();
  face.classList.add("is-press-filling");
  frontPressFillTimer = window.setTimeout(() => {
    frontPressFillTimer = 0;
    frontPressFillStartedAt = 0;
    face.classList.remove("is-press-filling");
  }, prefersReducedMotion.matches ? 90 : frontPressFillDuration + 240);
};

const getFrontPressFlipDelay = () => {
  if (prefersReducedMotion.matches) {
    return 0;
  }

  const elapsed = frontPressFillStartedAt
    ? Date.now() - frontPressFillStartedAt
    : 0;
  return Math.max(0, frontPressFillDuration - elapsed);
};

const clearWordMasteryAdvance = () => {
  window.clearTimeout(wordMasteryAdvanceTimer);
  wordMasteryAdvanceTimer = 0;
  isAdvancingWordMastery = false;
};

const clearMasteryCelebration = () => {
  window.clearTimeout(masteryCelebrationTimer);
  masteryCelebrationTimer = 0;
  card.classList.remove("is-mastery-celebrating");
};

const vibrateMasteryCelebration = () => {
  try {
    navigator.vibrate?.([18, 28, 32]);
  } catch {
    // La animacion visual permanece aunque el dispositivo bloquee vibracion.
  }
};

const triggerMasteryCelebration = () => {
  clearMasteryCelebration();
  void card.offsetWidth;
  card.classList.add("is-mastery-celebrating");
  vibrateMasteryCelebration();
  masteryCelebrationTimer = window.setTimeout(
    clearMasteryCelebration,
    prefersReducedMotion.matches ? 220 : 980
  );
};

const clearCardTransitionTimers = () => {
  clearFlipSequence();
  clearFrontPressFill();
  clearWordMasteryAdvance();
  clearMasteryCelebration();
  window.clearTimeout(backIntroTimer);
  backIntroTimer = 0;
  window.clearTimeout(swipeDenyTimer);
  swipeDenyTimer = 0;
  swipeAttemptDenied = false;
  card.classList.remove("is-swipe-denied");
  getSlotInputs().forEach(clearSlotMissTimer);
  wordSlots.querySelectorAll("[data-mastered-answer]").forEach(clearWordRepeatPressTimer);
};

const applySlotAnchors = () => {
  const shouldUseAnchors = wordSlots.classList.contains("is-dense");

  getSlotInputs().forEach((slot) => {
    if (slot.value.trim() || slot.classList.contains("is-previewing")) {
      return;
    }

    slot.placeholder = shouldUseAnchors ? slot.dataset.anchor : "";
    slot.classList.toggle("is-anchor", shouldUseAnchors && Boolean(slot.dataset.anchor));
  });
};

const getPracticeMasteredCount = () => {
  if (!currentPracticeTargetAnswers.length) {
    return 0;
  }

  const targetAnswerSet = new Set(currentPracticeTargetAnswers);
  const record = loadWordMasteryProgress()[getWordMasteryKey()] ?? {};
  const masteredWords = Array.isArray(record.masteredWords)
    ? record.masteredWords.filter((word) => targetAnswerSet.has(word))
    : [];

  return new Set(masteredWords).size;
};

const getDifficultyWordThresholds = (totalWords) => {
  const total = Math.min(maxPracticeHiddenWords, Math.max(0, Number(totalWords) || 0));

  if (!total) {
    return [];
  }

  return [
    1,
    Math.min(secondWordDifficultyTarget, total),
    total
  ]
    .filter((threshold, index, thresholds) =>
      threshold > 0 && threshold <= total && thresholds.indexOf(threshold) === index
    )
    .slice(0, maxWordDifficultyLevels);
};

const getCompletedDifficultyLevel = (masteredCount, totalWords) => {
  const completedWords = Math.max(0, Number(masteredCount) || 0);

  return getDifficultyWordThresholds(totalWords)
    .filter((threshold) => completedWords >= threshold).length;
};

const getNextDifficultyPlan = (masteredCount, totalWords) => {
  const completedWords = Math.max(0, Number(masteredCount) || 0);
  const thresholds = getDifficultyWordThresholds(totalWords);
  const nextThreshold = thresholds.find((threshold) => threshold > completedWords) ?? totalWords;
  const nextLevel = thresholds.findIndex((threshold) => threshold === nextThreshold) + 1;

  return {
    totalLevels: thresholds.length,
    nextLevel: nextLevel > 0 ? nextLevel : thresholds.length,
    nextThreshold,
    nextWordCount: Math.max(0, nextThreshold - completedWords)
  };
};

const isCurrentConceptMasteryReady = () => {
  const total = currentPracticeTargetAnswers.length;
  return total > 0 && getPracticeMasteredCount() >= total;
};

const hasCurrentStandardConceptDecisionHistory = () => {
  if (!currentStandardId || !currentStandardConceptId) {
    return false;
  }

  const progress = loadStandardProgress();
  const masteredIds = new Set(progress[currentStandardId] ?? []);

  if (masteredIds.has(currentStandardConceptId)) {
    return true;
  }

  const completedConceptId = `${currentStandardId}::${currentStandardConceptId}`;

  return loadCompletedConcepts().some((item) =>
    item.id === completedConceptId
    || (
      item.standardId === currentStandardId
      && item.conceptId === currentStandardConceptId
    )
  );
};

const canMasterSwipeDecision = () =>
  currentPracticeTargetAnswers.length === 0
  || getCompletedDifficultyLevel(
    getPracticeMasteredCount(),
    currentPracticeTargetAnswers.length
  ) >= 1
  || hasCurrentStandardConceptDecisionHistory();

const canSwipeCurrentCard = () =>
  !stage.hidden && Boolean(currentStandardId && currentStandardConceptId);

// The learner can drag/choose a standard card in any flip/practice state.
// Only the mastered/green decision is gated by difficulty progress.
const canChooseSwipeDecision = () => canSwipeCurrentCard();

const syncSwipeReadiness = () => {
  card.classList.toggle("is-swipe-ready", canSwipeCurrentCard());
};

// Progress is always allowed; mastered is honored only after one difficulty
// level is completed.
const getEffectiveSwipeDecision = (direction) =>
  direction === "known"
    ? canMasterSwipeDecision()
      ? "known"
      : "blocked"
    : "review";

const resetSwipePointerState = () => {
  swipePointerId = null;
  swipeStartX = 0;
  swipeStartY = 0;
  swipeCurrentX = 0;
  swipeCurrentY = 0;
  swipeStartCenterX = 0;
  swipeStartHalfWidth = 0;
  swipeStartedInDecisionMode = false;
  swipeStartedFlipped = false;
  swipeDragActivated = false;
};

const isHorizontalSwipeIntent = (deltaX, deltaY, minDistance = swipeActivationDistance) =>
  Math.abs(deltaX) > minDistance
  && Math.abs(deltaX) > Math.abs(deltaY) * swipeHorizontalBias;

const isFreeSwipeDragIntent = (deltaX, deltaY, minDistance = swipeActivationDistance) =>
  Math.hypot(deltaX, deltaY) > minDistance;

const isSwipePointerButton = (event) =>
  event.pointerType && event.pointerType !== "mouse"
    ? event.button <= 0
    : event.button === 0;

const queueFaceClickSuppression = () => {
  suppressNextFaceClick = true;
  window.clearTimeout(faceClickSuppressionTimer);
  faceClickSuppressionTimer = window.setTimeout(() => {
    suppressNextFaceClick = false;
  }, 120);
};

const consumeSuppressedFaceClick = (event) => {
  if (!suppressNextFaceClick) {
    return false;
  }

  suppressNextFaceClick = false;
  window.clearTimeout(faceClickSuppressionTimer);
  faceClickSuppressionTimer = 0;
  event?.preventDefault();
  event?.stopPropagation();
  return true;
};

const getSwipeDecisionHint = (direction = "") =>
  direction === "known" && !canMasterSwipeDecision()
    ? t("decisionNeedsDifficulty")
    : t("decisionHint");

const getSwipeDecisionLabel = (direction = "") => {
  if (!direction) {
    return canMasterSwipeDecision()
      ? t("decisionKnown")
      : t("decisionReview");
  }

  return direction === "known"
    ? t("decisionKnown")
    : t("decisionReview");
};

const createDifficultyFlame = (isLit) => {
  const item = document.createElement("span");
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  item.className = isLit
    ? "difficulty-flame is-lit"
    : "difficulty-flame";
  item.setAttribute("aria-hidden", "true");
  icon.setAttribute("viewBox", "0 0 24 24");
  icon.setAttribute("focusable", "false");
  path.setAttribute(
    "d",
    "M12.3 2.7c1.7 2.2 1.4 4.2.8 5.7 1.3-.8 2.3-2 2.8-3.4 2.2 2.1 3.6 4.7 3.6 7.6 0 5-3.6 8.7-8 8.7s-8-3.5-8-8.3c0-3.8 2.3-6.8 5.7-9.5-.2 2.6.4 4.4 1.8 5.6 1.2-1.7 1.9-3.8 1.3-6.4Z"
  );
  icon.append(path);
  item.append(icon);
  return item;
};

const renderDifficultyTracker = (options = {}) => {
  const totalWords = Number.isInteger(options.total)
    ? options.total
    : currentPracticeTargetAnswers.length;
  const total = getDifficultyWordThresholds(totalWords).length;
  const completed = Math.max(
    0,
    Math.min(
      total,
      getCompletedDifficultyLevel(
        Number.isInteger(options.masteredCount)
          ? options.masteredCount
          : getPracticeMasteredCount(),
        totalWords
      )
    )
  );

  difficultyTracker.replaceChildren();
  difficultyTracker.hidden = total <= 0;

  if (total <= 0) {
    difficultyTracker.removeAttribute("aria-label");
    syncSwipeReadiness();
    return;
  }

  difficultyTracker.setAttribute("aria-label", t("difficultyProgress", {
    completed,
    total
  }));

  Array.from({ length: total }).forEach((_, index) => {
    difficultyTracker.append(createDifficultyFlame(index < completed));
  });
  syncSwipeReadiness();
};

const setAnswerReady = (isReady) => {
  answerCard.classList.toggle("is-reading-definition", !isReady);
  answerCard.classList.toggle("is-answer-ready", isReady);
  setStudyStatusMessage(isReady
    ? t("completeKeywords")
    : t("readIdea"), isReady);
  if (isReady) {
    definitionTimer.style.transitionDuration = "0ms";
    definitionTimer.style.transform = "scaleX(0)";
    applySlotAnchors();
    setStudyFeedback();
  }
  definitionPreview.setAttribute("aria-hidden", String(isReady));
  wordSlots.setAttribute("aria-hidden", String(!isReady));
  readyAnswerButton.hidden = isReady;
  readyAnswerButton.disabled = isReady;
  syncBackFocusableState();
};

const resetBackIntro = () => {
  clearFlipSequence();
  clearWordMasteryAdvance();
  window.clearTimeout(backIntroTimer);
  backIntroTimer = 0;
  setStudyFeedback();
  clearSlotPreviews();
  setAnswerReady(false);
};

const revealWordSlots = (options = {}) => {
  backIntroTimer = 0;
  setAnswerReady(true);
  wordSlots.scrollTop = 0;

  if (options.focusFirstSlot) {
    const firstSlot = getSlotInputs()[0];
    firstSlot?.focus({ preventScroll: true });
  }
};

const startBackIntro = () => {
  resetBackIntro();
  const introDuration = getReadingDuration();

  definitionTimer.style.transitionDuration = "0ms";
  definitionTimer.style.transform = "scaleX(1)";
  window.requestAnimationFrame(() => {
    definitionTimer.style.transitionDuration = prefersReducedMotion.matches
      ? "0ms"
      : `${introDuration}ms`;
    definitionTimer.style.transform = "scaleX(0)";
  });
  backIntroTimer = window.setTimeout(revealWordSlots, introDuration);
};

const clearSlotPreviews = () => {
  window.clearTimeout(previewTimer);
  previewTimer = 0;

  getSlotInputs().forEach((slot) => {
    slot.placeholder = "";
    slot.classList.remove("is-previewing", "is-anchor");
    clearSlotMissTimer(slot);
  });

  applySlotAnchors();
};

const areAllSlotsCorrect = () => {
  const slots = getSlotInputs();
  return slots.length > 0 && slots.every((slot) =>
    normalizeWord(slot.value.trim()) === slot.dataset.answer
  );
};

const rememberWordMasteryRound = () => {
  if (!currentPracticeTargetAnswers.length || !currentPracticeRoundAnswers.length) {
    return { isComplete: true };
  }

  const key = getWordMasteryKey();
  const targetAnswerSet = new Set(currentPracticeTargetAnswers);
  const progress = loadWordMasteryProgress();
  const record = progress[key] ?? {};
  const masteredWords = new Set(
    Array.isArray(record.masteredWords)
      ? record.masteredWords.filter((word) => targetAnswerSet.has(word))
      : []
  );

  currentPracticeRoundAnswers.forEach((answer) => {
    if (targetAnswerSet.has(answer)) {
      masteredWords.add(answer);
      currentPracticeRepeatAnswers.delete(answer);
    }
  });

  const isComplete = currentPracticeTargetAnswers.every((answer) => masteredWords.has(answer));
  const difficultyPlan = getNextDifficultyPlan(masteredWords.size, currentPracticeTargetAnswers.length);
  const nextLevel = isComplete
    ? difficultyPlan.totalLevels
    : difficultyPlan.nextLevel;

  progress[key] = {
    level: nextLevel,
    masteredWords: [...masteredWords],
    lastPracticeWords: [...new Set(currentPracticeRoundAnswers)]
  };
  saveWordMasteryProgress(progress);

  return {
    isComplete,
    nextLevel,
    nextWordCount: difficultyPlan.nextWordCount,
    difficultyTotal: difficultyPlan.totalLevels,
    masteredCount: masteredWords.size,
    total: currentPracticeTargetAnswers.length
  };
};

const advanceWordMasteryRound = ({ nextLevel, nextWordCount, difficultyTotal }) => {
  clearWordMasteryAdvance();
  isAdvancingWordMastery = true;
  getSlotInputs().forEach(clearSlotMissTimer);
  setStudyStatusMessage(t("wordMasteryAdvance", {
    level: nextLevel,
    total: difficultyTotal,
    words: nextWordCount
  }));
  setStudyFeedback(t("wordMasteryAdvance", {
    level: nextLevel,
    total: difficultyTotal,
    words: nextWordCount
  }), "emphasis");
  wordMasteryAdvanceTimer = window.setTimeout(() => {
    isAdvancingWordMastery = false;
    renderWordSlots();
    revealWordSlots({ focusFirstSlot: true });
    setStudyStatusMessage(t("completeKeywords"), true);
    setStudyFeedback();
  }, prefersReducedMotion.matches ? 120 : 760);
};

const resetSwipeDecisionVisual = () => {
  card.style.setProperty("--swipe-x", "0px");
  card.style.setProperty("--swipe-y", "0px");
  card.style.setProperty("--swipe-rotate", "0deg");
  card.style.setProperty("--swipe-intensity", "0");
  card.classList.remove("is-swipe-review", "is-swipe-known", "is-swipe-needs-mastery", "is-swipe-dragging");
  setSwipeHudTarget();
  swipeReviewLabel.textContent = t("decisionReview");
  swipeKnownLabel.textContent = t("decisionKnown");
  swipeDecisionLabel.textContent = getSwipeDecisionLabel();
  swipeDecisionHint.textContent = getSwipeDecisionHint();
};

const setSwipeDecisionActive = (isActive, options = {}) => {
  const preserveDrag = options.preserveDrag === true;

  isSwipeDecisionActive = isActive;
  syncSwipeReadiness();

  if (!preserveDrag) {
    resetSwipePointerState();
    swipeCommitted = false;
    window.clearTimeout(swipeDenyTimer);
    swipeDenyTimer = 0;
    swipeAttemptDenied = false;
    card.classList.remove("is-swipe-denied");
    resetSwipeDecisionVisual();
  }

  card.classList.toggle("is-decision", isActive);
  if (!isActive) {
    card.classList.remove("is-card-lifted");
    clearMasteryCelebration();
  }
  swipeDecision.setAttribute("aria-hidden", String(!isActive));
  swipeDecision.inert = !isActive;
  swipeReviewAction.disabled = !isActive;
  swipeKnownAction.disabled = !isActive;
  card.tabIndex = isActive ? 0 : -1;

  if (isActive) {
    frontFaceButton.inert = true;
    frontFaceButton.setAttribute("aria-expanded", "false");
    frontFaceButton.setAttribute("aria-hidden", "true");
    backFace.inert = true;
    backFace.setAttribute("aria-hidden", "true");
    frontFaceButton.tabIndex = -1;
    swipeDecisionLabel.textContent = getSwipeDecisionLabel();
    swipeDecisionConcept.textContent = getCardConceptLabel();
    swipeDecisionHint.textContent = getSwipeDecisionHint();
    syncBackFocusableState();
    return;
  }

  card.removeAttribute("tabindex");
  frontFaceButton.inert = card.classList.contains("is-flipped");
  backFace.inert = !card.classList.contains("is-flipped");
  setCardFaceState(card.classList.contains("is-flipped"));
};

const getSwipeThreshold = () => {
  const width = Math.max(1, card.getBoundingClientRect().width);
  return Math.min(160, width * 0.34);
};

const getSwipeViewportWidth = () =>
  Math.max(1, window.innerWidth || document.documentElement.clientWidth || 0);

const getSwipeViewportHeight = () =>
  Math.max(1, window.innerHeight || document.documentElement.clientHeight || 0);

const getSwipeProjectedCenterX = (deltaX = 0) => {
  if (swipeStartCenterX > 0) {
    return swipeStartCenterX + deltaX;
  }

  const rect = card.getBoundingClientRect();
  return rect.left + (rect.width / 2) + deltaX;
};

const getSwipeProjectedBounds = (deltaX = 0) => {
  const centerX = getSwipeProjectedCenterX(deltaX);
  const halfWidth = swipeStartHalfWidth > 0
    ? swipeStartHalfWidth
    : card.getBoundingClientRect().width / 2;

  return {
    centerX,
    leftX: centerX - halfWidth,
    rightX: centerX + halfWidth
  };
};

const getSwipeDropZoneDirection = (deltaX = 0) => {
  const viewportWidth = getSwipeViewportWidth();
  const { centerX, leftX, rightX } = getSwipeProjectedBounds(deltaX);

  if (leftX <= swipeEdgeTouchInset || centerX <= viewportWidth * swipeDropZoneRatio) {
    return "review";
  }

  if (rightX >= viewportWidth - swipeEdgeTouchInset || centerX >= viewportWidth * (1 - swipeDropZoneRatio)) {
    return "known";
  }

  return "";
};

const getSwipePreviewDirection = (deltaX = 0) => {
  if (Math.abs(deltaX) <= swipeActivationDistance) {
    return "";
  }

  return getSwipeDropZoneDirection(deltaX) || (deltaX > 0 ? "known" : "review");
};

const getSwipeCommitDirection = (deltaX = 0, deltaY = 0) => {
  const zoneDirection = getSwipeDropZoneDirection(deltaX);

  if (zoneDirection) {
    return zoneDirection;
  }

  if (isHorizontalSwipeIntent(deltaX, deltaY, getSwipeThreshold())) {
    return deltaX > 0 ? "known" : "review";
  }

  return "";
};

const setSwipeHudTarget = (direction = "") => {
  standardStudyHud.classList.toggle("is-swipe-dragging", Boolean(direction));
  standardStudyHud.classList.toggle("is-swipe-target-review", direction === "review");
  standardStudyHud.classList.toggle("is-swipe-target-known", direction === "known");
};

const updateSwipeDecisionVisual = (deltaX = 0, deltaY = 0) => {
  const rect = card.getBoundingClientRect();
  const width = Math.max(1, rect.width);
  const height = Math.max(1, rect.height);
  const viewportWidth = getSwipeViewportWidth();
  const viewportHeight = getSwipeViewportHeight();
  const threshold = getSwipeThreshold();
  const maxOffset = viewportWidth + width;
  const maxYOffset = viewportHeight + height;
  const clampedDelta = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
  const clampedY = Math.max(-maxYOffset, Math.min(maxYOffset, deltaY));
  const intensity = Math.min(1, Math.abs(clampedDelta) / threshold);
  const direction = getSwipePreviewDirection(clampedDelta);
  const effectiveDirection = direction
    ? getEffectiveSwipeDecision(direction)
    : "";
  const isKnownPreview = direction === "known";
  const isReviewPreview = effectiveDirection === "review";

  card.style.setProperty("--swipe-x", `${clampedDelta}px`);
  card.style.setProperty("--swipe-y", `${clampedY}px`);
  card.style.setProperty("--swipe-rotate", `${(clampedDelta / width) * 10}deg`);
  card.style.setProperty("--swipe-intensity", String(intensity));
  card.classList.toggle("is-swipe-review", isReviewPreview);
  card.classList.remove("is-swipe-needs-mastery");
  card.classList.toggle("is-swipe-known", isKnownPreview);
  setSwipeHudTarget(isKnownPreview ? "known" : effectiveDirection || direction);

  if (direction) {
    swipeKnownLabel.textContent = t("decisionKnown");
    swipeReviewLabel.textContent = t("decisionReview");
    swipeDecisionLabel.textContent = getSwipeDecisionLabel(direction);
    swipeDecisionHint.textContent = t("decisionHint");
    return;
  }

  swipeKnownLabel.textContent = t("decisionKnown");
  swipeReviewLabel.textContent = t("decisionReview");
  swipeDecisionLabel.textContent = getSwipeDecisionLabel();
  swipeDecisionHint.textContent = getSwipeDecisionHint();
};

const showSwipeDecision = (options = {}) => {
  clearWordMasteryAdvance();
  clearFlipSequence();
  window.clearTimeout(backIntroTimer);
  backIntroTimer = 0;
  getSlotInputs().forEach(clearSlotMissTimer);
  card.classList.remove("is-flipped");
  setSwipeDecisionActive(true);
  setCardFaceState(false);
  setStudyStatusMessage(getSwipeDecisionLabel());
  setStudyFeedback(t("decisionHint"), "help");
  if (options.celebrateMastery) {
    triggerMasteryCelebration();
  }
  playDecisionGestureSound();
  window.requestAnimationFrame(() => {
    card.focus({ preventScroll: true });
  });
};

const maybeCompleteConcept = () => {
  if (isSwipeDecisionActive || swipeCommitted || isAdvancingWordMastery || !areAllSlotsCorrect()) {
    return;
  }

  const wordMasteryResult = rememberWordMasteryRound();
  renderDifficultyTracker(wordMasteryResult);

  if (!wordMasteryResult.isComplete) {
    advanceWordMasteryRound(wordMasteryResult);
    return;
  }

  clearWordMasteryAdvance();
  getSlotInputs().forEach(clearSlotMissTimer);
  showSwipeDecision({ celebrateMastery: true });
};

const continueAfterSwipeDecision = async () => {
  clearCardTransitionTimers();

  if (activeSession && hasSessionNextConcept()) {
    activeSession.index += 1;
    setStudyStatusMessage(t("prepareNextConcept"));
    setStudyFeedback(t("prepareConcept"), "help");
    await loadActiveSessionConcept();
    return;
  }

  if (activeSession) {
    activeSession = null;
    showHome();
    return;
  }

  if (currentStandardId) {
    if (await loadNextStandardConcept()) {
      return;
    }

    showHome();
    return;
  }

  showCreator({ focusManual: true });
};

const lowerWordMasteryLevel = () => {
  const total = currentPracticeTargetAnswers.length;

  currentPracticeRepeatAnswers = new Set();

  if (total > 0) {
    const key = getWordMasteryKey();
    const progress = loadWordMasteryProgress();
    const record = progress[key] ?? {};
    const targetAnswerSet = new Set(currentPracticeTargetAnswers);
    const masteredWords = Array.isArray(record.masteredWords)
      ? record.masteredWords.filter((word) => targetAnswerSet.has(word))
      : [];
    const thresholds = getDifficultyWordThresholds(total);
    const currentLevel = Math.max(
      getCompletedDifficultyLevel(masteredWords.length, total),
      Math.min(thresholds.length, Number(record.level) || 0)
    );
    const nextLevel = Math.max(0, currentLevel - 1);
    const nextWordCount = nextLevel > 0 ? thresholds[nextLevel - 1] : 0;

    progress[key] = {
      level: Math.max(1, nextLevel),
      masteredWords: currentPracticeTargetAnswers.slice(0, nextWordCount),
      lastPracticeWords: []
    };
    saveWordMasteryProgress(progress);
  }
};

const retryConceptWithLowerWordMasteryLevel = () => {
  setSwipeDecisionActive(false);
  lowerWordMasteryLevel();

  card.classList.add("is-flipped");
  setCardFaceState(true);
  renderWordSlots();
  revealWordSlots({ focusFirstSlot: true });
  setStudyStatusMessage(t("completeKeywords"), true);
  setStudyFeedback(t("decisionReviewFeedback"), "help");
  playProgressGestureSound();
};

const markConceptForReviewFromSwipe = async (options = {}) => {
  if (!currentStandardId || !currentStandardConceptId) {
    retryConceptWithLowerWordMasteryLevel();
    return;
  }

  setSwipeDecisionActive(false);
  lowerWordMasteryLevel();
  rememberStandardReviewProgress();
  setStudyStatusMessage(t("decisionReview"));
  setStudyFeedback(
    options.skippedBeforeMastery
      ? t("decisionNeedsDifficulty")
      : t("decisionReviewFeedback"),
    "help"
  );
  playProgressGestureSound();
  await continueAfterSwipeDecision();
};

const completeConceptFromSwipe = async () => {
  setSwipeDecisionActive(false);
  rememberCompletedConcept();
  rememberStandardProgress();
  if (activeSession) {
    activeSession.completed += 1;
  }
  setStudyStatusMessage(t("decisionSaved"));
  setStudyFeedback(t("decisionSaved"), "emphasis");
  playMasteredGestureSound();
  await continueAfterSwipeDecision();
};

// No flames lit yet: refuse the decision with a shake + rejection tone instead
// of silently committing, then snap the card back to center.
const denySwipeAttempt = () => {
  const shouldReturnToCardFace = !swipeStartedInDecisionMode;

  resetSwipeDecisionVisual();
  card.classList.remove("is-swipe-dragging");
  card.classList.remove("is-card-lifted");

  if (!swipeAttemptDenied) {
    swipeAttemptDenied = true;
    if (shouldReturnToCardFace) {
      card.classList.toggle("is-flipped", swipeStartedFlipped);
      setSwipeDecisionActive(false);
    } else {
      swipeDecisionLabel.textContent = t("decisionKnown");
    }
    card.classList.remove("is-swipe-denied");
    void card.offsetWidth;
    card.classList.add("is-swipe-denied");
    playRejectionSound();
    setStudyFeedback(t("decisionNeedsDifficulty"), "emphasis");
    swipeDecisionHint.textContent = t("decisionNeedsDifficulty");
    window.clearTimeout(swipeDenyTimer);
    swipeDenyTimer = window.setTimeout(() => {
      swipeAttemptDenied = false;
      card.classList.remove("is-swipe-denied");
    }, prefersReducedMotion.matches ? 120 : 480);
  }
};

const commitSwipeDecision = (direction) => {
  if (!isSwipeDecisionActive || swipeCommitted) {
    return;
  }

  if (direction === "known" && !canMasterSwipeDecision()) {
    denySwipeAttempt();
    return;
  }

  const effectiveDirection = getEffectiveSwipeDecision(direction);

  swipeCommitted = true;
  clearCardTransitionTimers();
  card.classList.remove("is-swipe-dragging");
  updateSwipeDecisionVisual(
    (direction === "known" ? 1 : -1) * getSwipeThreshold(),
    swipeCurrentY - swipeStartY
  );
  window.setTimeout(async () => {
    if (effectiveDirection === "known") {
      await completeConceptFromSwipe();
      return;
    }

    await markConceptForReviewFromSwipe({
      skippedBeforeMastery: direction === "known"
    });
  }, prefersReducedMotion.matches ? 0 : 160);
};

const beginSwipeDecisionDrag = (event, options = {}) => {
  swipeDragActivated = true;
  clearFrontPressFill();
  card.classList.add("is-swipe-dragging");
  card.setPointerCapture?.(event.pointerId);

  if (options.suppressFaceClick) {
    queueFaceClickSuppression();
  }
};

const prepareSwipeDecisionSelection = () => {
  clearWordMasteryAdvance();
  clearFlipSequence();
  window.clearTimeout(backIntroTimer);
  backIntroTimer = 0;
  getSlotInputs().forEach(clearSlotMissTimer);
  card.classList.remove("is-flipped");
  setSwipeDecisionActive(true, { preserveDrag: true });
  setCardFaceState(false);
  setStudyStatusMessage(getSwipeDecisionLabel());
  setStudyFeedback(t("decisionHint"), "help");
};

const openSwipeDecisionForDrag = (event, options = {}) => {
  prepareSwipeDecisionSelection();
  beginSwipeDecisionDrag(event, options);
};

const settleUncommittedSwipeDrag = () => {
  card.classList.remove("is-swipe-dragging");
  card.classList.remove("is-card-lifted");

  if (swipeStartedInDecisionMode) {
    resetSwipeDecisionVisual();
    resetSwipePointerState();
    return;
  }

  if (isSwipeDecisionActive) {
    setSwipeDecisionActive(false);
    return;
  }

  resetSwipePointerState();
  resetSwipeDecisionVisual();
};

const startSwipeDecisionDrag = (event) => {
  if (
    (!isSwipeDecisionActive && !canSwipeCurrentCard())
    || swipeCommitted
    || event.isPrimary === false
    || !isSwipePointerButton(event)
  ) {
    return;
  }

  const blockedTarget = event.target.closest?.("input, textarea, select, a, [contenteditable='true'], .ready-button");
  const buttonTarget = event.target.closest?.("button");
  const unlockedFreeDrag = canSwipeCurrentCard();

  if (
    (blockedTarget && (!unlockedFreeDrag || blockedTarget.closest?.(".ready-button")))
    || (
      buttonTarget
      && buttonTarget !== frontFaceButton
      && !buttonTarget.closest(".flip-card__decision")
    )
  ) {
    return;
  }

  swipePointerId = event.pointerId;
  swipeStartX = event.clientX;
  swipeStartY = event.clientY;
  swipeCurrentX = event.clientX;
  swipeCurrentY = event.clientY;
  const rect = card.getBoundingClientRect();
  swipeStartCenterX = rect.left + (rect.width / 2);
  swipeStartHalfWidth = rect.width / 2;
  swipeStartedInDecisionMode = isSwipeDecisionActive;
  swipeStartedFlipped = card.classList.contains("is-flipped");
  swipeDragActivated = false;
  renderNextCardPreview();
  card.classList.toggle("is-card-lifted", card.classList.contains("has-next-card"));
  resetSwipeDecisionVisual();
  card.setPointerCapture?.(event.pointerId);

  if (isSwipeDecisionActive) {
    beginSwipeDecisionDrag(event);
  }
};

const moveSwipeDecisionDrag = (event) => {
  if (swipeCommitted || event.pointerId !== swipePointerId) {
    return;
  }

  swipeCurrentX = event.clientX;
  swipeCurrentY = event.clientY;
  const deltaX = swipeCurrentX - swipeStartX;
  const deltaY = swipeCurrentY - swipeStartY;
  const shouldActivateSwipe = isFreeSwipeDragIntent(deltaX, deltaY);

  if (event.pointerType !== "mouse" && isFreeSwipeDragIntent(deltaX, deltaY, 2)) {
    event.preventDefault();
  }

  if (!isSwipeDecisionActive && shouldActivateSwipe) {
    openSwipeDecisionForDrag(event, { suppressFaceClick: true });
  }

  if (isSwipeDecisionActive) {
    event.preventDefault();
    updateSwipeDecisionVisual(deltaX, deltaY);
  }
};

const finishSwipeDecisionDrag = (event) => {
  if (event.pointerId !== swipePointerId) {
    return;
  }

  swipeCurrentX = event.clientX;
  swipeCurrentY = event.clientY;
  const deltaX = swipeCurrentX - swipeStartX;
  const deltaY = swipeCurrentY - swipeStartY;
  const swipeDirection = getSwipeCommitDirection(deltaX, deltaY);
  const isCommittedSwipe = Boolean(swipeDirection);

  if (card.hasPointerCapture?.(event.pointerId)) {
    card.releasePointerCapture(event.pointerId);
  }

  if (isCommittedSwipe) {
    if (!isSwipeDecisionActive) {
      prepareSwipeDecisionSelection();
      updateSwipeDecisionVisual(deltaX, deltaY);
    }

    if (!swipeStartedInDecisionMode || swipeDragActivated) {
      queueFaceClickSuppression();
    }

    commitSwipeDecision(swipeDirection);
    resetSwipePointerState();
    return;
  }

  settleUncommittedSwipeDrag();
};

const cancelSwipeDecisionDrag = (event) => {
  if (event.pointerId !== swipePointerId) {
    return;
  }

  if (card.hasPointerCapture?.(event.pointerId)) {
    card.releasePointerCapture(event.pointerId);
  }
  settleUncommittedSwipeDrag();
};

const handleSwipeDecisionKeydown = (event) => {
  if (!isSwipeDecisionActive || swipeCommitted) {
    return;
  }

  if (event.key === "ArrowLeft") {
    event.preventDefault();
    commitSwipeDecision("review");
    return;
  }

  if (event.key === "ArrowRight" || event.key === "Enter") {
    event.preventDefault();
    commitSwipeDecision("known");
  }
};

const getNeighborWord = (pieces, startIndex, direction) => {
  const indexes = direction < 0
    ? pieces.slice(0, startIndex).reverse()
    : pieces.slice(startIndex + 1);

  return indexes.find((piece) => /^[\p{L}\p{N}]+$/u.test(piece)) ?? "";
};

const getSlotContextDescription = (pieces, pieceIndex, wordIndex, totalPracticeWords) => {
  const previousWord = getNeighborWord(pieces, pieceIndex, -1);
  const nextWord = getNeighborWord(pieces, pieceIndex, 1);

  return [
    t("slotContext", {
      index: wordIndex,
      total: totalPracticeWords,
      previousWord,
      nextWord
    })
  ].filter(Boolean).join(" ");
};

const clearWordRepeatPressTimer = (control) => {
  const timer = wordRepeatPressTimers.get(control);

  if (timer) {
    window.clearTimeout(timer);
  }

  wordRepeatPressTimers.delete(control);
  control?.classList.remove("is-repeat-pressing");
};

const queueWordRepeat = (answer) => {
  if (!answer || currentPracticeRepeatAnswers.has(answer)) {
    return;
  }

  currentPracticeRepeatAnswers.add(answer);
  renderWordSlots({ preserveAnswerReady: true, focusFirstSlot: true });
  setStudyStatusMessage(t("completeKeywords"), true);
  setStudyFeedback(t("repeatWordQueued"), "help");
};

const bindMasteredWordRepeat = (control, answer) => {
  const startPress = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    event.preventDefault();
    clearWordRepeatPressTimer(control);
    control.classList.add("is-repeat-pressing");
    control.setPointerCapture?.(event.pointerId);
    wordRepeatPressTimers.set(control, window.setTimeout(() => {
      clearWordRepeatPressTimer(control);
      queueWordRepeat(answer);
    }, wordRepeatPressDelay));
  };
  const endPress = (event) => {
    if (control.hasPointerCapture?.(event.pointerId)) {
      control.releasePointerCapture(event.pointerId);
    }

    clearWordRepeatPressTimer(control);
  };

  control.addEventListener("pointerdown", startPress);
  control.addEventListener("pointerup", endPress);
  control.addEventListener("pointercancel", endPress);
  control.addEventListener("pointerleave", endPress);
  control.addEventListener("click", (event) => {
    event.preventDefault();
  });
  control.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    queueWordRepeat(answer);
  });
};

const getWordMasteryKey = () => {
  if (currentStandardId && currentStandardConceptId) {
    return `${currentStandardId}::${currentStandardConceptId}::${currentDefinitionLanguage}`;
  }

  return [
    "manual",
    currentDefinitionLanguage,
    slugify(currentConceptTerm),
    slugify(definitionText)
  ].join("::");
};

const getPracticeWordTargets = (pieces) => {
  const words = pieces
    .map((piece, pieceIndex) => ({ piece, pieceIndex }))
    .filter(({ piece }) => /^[\p{L}\p{N}]+$/u.test(piece));
  const candidates = words.filter(({ piece }) => {
    const normalized = normalizeWord(piece);
    const stopWords = practiceStopWords[currentDefinitionLanguage] ?? practiceStopWords.es;
    return piece.length >= 4
      && !/^\d+$/u.test(piece)
      && !stopWords.has(normalized);
  });
  const source = candidates.length ? candidates : words;

  return [...source]
    .sort((left, right) => right.piece.length - left.piece.length || left.pieceIndex - right.pieceIndex)
    .reduce((targets, { piece, pieceIndex }) => {
      const answer = normalizeWord(piece);

      if (!answer || targets.some((target) => target.answer === answer)) {
        return targets;
      }

      targets.push({ piece, pieceIndex, answer });
      return targets;
    }, [])
    .slice(0, maxPracticeHiddenWords);
};

const getPracticeWordPlan = (targets) => {
  if (!targets.length) {
    return {
      targetAnswers: [],
      roundAnswers: [],
      roundPieceIndexes: new Set(),
      masteredPieceIndexes: new Set()
    };
  }

  const targetAnswers = targets.map(({ answer }) => answer);
  const targetAnswerSet = new Set(targetAnswers);
  const progress = loadWordMasteryProgress();
  const record = progress[getWordMasteryKey()] ?? {};
  const masteredWords = new Set(
    Array.isArray(record.masteredWords)
      ? record.masteredWords.filter((word) => targetAnswerSet.has(word))
      : []
  );
  const repeatAnswers = new Set(
    [...currentPracticeRepeatAnswers].filter((answer) => targetAnswerSet.has(answer))
  );

  currentPracticeRepeatAnswers = repeatAnswers;

  const selectedTargets = targets.filter(({ answer }) => repeatAnswers.has(answer));
  const selectedAnswerSet = new Set(selectedTargets.map(({ answer }) => answer));
  const nextDifficultyPlan = getNextDifficultyPlan(masteredWords.size, targets.length);
  const nextUnmasteredTargets = targets
    .filter(({ answer }) => !masteredWords.has(answer) && !selectedAnswerSet.has(answer))
    .slice(0, Math.max(1, nextDifficultyPlan.nextWordCount));
  const nextUnmasteredTarget = nextUnmasteredTargets[0] ?? null;

  nextUnmasteredTargets.forEach((target) => {
    selectedTargets.push(target);
    selectedAnswerSet.add(target.answer);
  });

  const orderedTargets = selectedTargets
    .sort((left, right) => left.pieceIndex - right.pieceIndex);
  const masteredPieceIndexes = targets
    .filter(({ answer }) => masteredWords.has(answer) && !selectedAnswerSet.has(answer))
    .map(({ pieceIndex }) => pieceIndex);

  return {
    targetAnswers,
    roundAnswers: orderedTargets.map(({ answer }) => answer),
    roundPieceIndexes: new Set(orderedTargets.map(({ pieceIndex }) => pieceIndex)),
    masteredPieceIndexes: new Set(masteredPieceIndexes)
  };
};

const renderWordSlots = (options = {}) => {
  const pieces = definitionText.match(/[\p{L}\p{N}]+|[^\p{L}\p{N}]+/gu) ?? [];
  const practicePlan = getPracticeWordPlan(getPracticeWordTargets(pieces));
  const practicePieceIndexes = practicePlan.roundPieceIndexes;
  const masteredPieceIndexes = practicePlan.masteredPieceIndexes;
  const totalPracticeWords = practicePieceIndexes.size;
  const preserveAnswerReady = options.preserveAnswerReady === true
    && answerCard.classList.contains("is-answer-ready");
  let wordIndex = 0;

  currentPracticeTargetAnswers = practicePlan.targetAnswers;
  currentPracticeRoundAnswers = practicePlan.roundAnswers;
  renderDifficultyTracker();
  clearSlotPreviews();
  wordSlots.querySelectorAll("[data-mastered-answer]").forEach(clearWordRepeatPressTimer);
  wordSlots.replaceChildren();
  wordSlots.scrollTop = 0;

  pieces.forEach((piece, pieceIndex) => {
    if (/^[\p{L}\p{N}]+$/u.test(piece)) {
      if (masteredPieceIndexes.has(pieceIndex)) {
        const masteredWord = document.createElement("button");
        const answer = normalizeWord(piece);

        masteredWord.type = "button";
        masteredWord.className = "slot-context-word slot-context-word--mastered";
        masteredWord.textContent = piece;
        masteredWord.dataset.masteredAnswer = answer;
        masteredWord.setAttribute("aria-label", t("repeatWord", { word: piece }));
        masteredWord.title = t("repeatWord", { word: piece });
        bindMasteredWordRepeat(masteredWord, answer);
        wordSlots.append(masteredWord);
        return;
      }

      if (!practicePieceIndexes.has(pieceIndex)) {
        const contextWord = document.createElement("span");

        contextWord.className = "slot-context-word";
        contextWord.textContent = piece;
        wordSlots.append(contextWord);
        return;
      }

      const slot = document.createElement("input");
      const description = document.createElement("span");
      const width = Math.max(4, Math.min(piece.length + 1, 16));
      const slotId = `word-slot-${wordIndex + 1}`;

      wordIndex += 1;
      slot.className = "word-slot";
      slot.id = slotId;
      slot.type = "text";
      slot.autocomplete = "off";
      slot.inputMode = "text";
	      slot.setAttribute(
	        "aria-label",
	        t("wordSlotAria", { index: wordIndex, total: totalPracticeWords })
	      );
      slot.setAttribute("aria-describedby", `slotInstruction ${slotId}-context`);
      slot.setAttribute("aria-invalid", "false");
      slot.dataset.answer = normalizeWord(piece);
      slot.dataset.preview = piece;
      slot.dataset.anchor = piece.slice(0, 1);
      slot.dataset.wordIndex = String(wordIndex);
      slot.dataset.liveMatched = "false";
      slot.dataset.missValue = "";
      slot.style.setProperty("--slot-ch", width);
      description.id = `${slotId}-context`;
      description.className = "sr-only";
      description.textContent = getSlotContextDescription(
        pieces,
        pieceIndex,
        wordIndex,
        totalPracticeWords
      );
      slot.addEventListener("input", () => {
        slot.classList.remove("is-match", "is-miss", "is-live-miss");
        slot.setAttribute("aria-invalid", "false");
        if (slot.value.trim()) {
          slot.placeholder = "";
          slot.classList.remove("is-previewing", "is-anchor");
        } else {
          slot.classList.remove("is-previewing");
          applySlotAnchors();
        }
        celebrateSlotMatch(slot);
        scheduleSlotMissFeedback(slot);
      });
      slot.addEventListener("blur", () => {
        clearSlotMissTimer(slot);
        rejectSlotAttempt(slot);
      });
      slot.addEventListener("keydown", (event) => {
        if (event.key !== "Enter") {
          return;
        }

        event.preventDefault();
        clearSlotMissTimer(slot);
        rejectSlotAttempt(slot);
      });
      wordSlots.append(slot, description);
      return;
    }

    if (piece.trim()) {
      const punctuation = document.createElement("span");
      punctuation.className = "slot-punctuation";
      punctuation.textContent = piece.trim();
      wordSlots.append(punctuation);
      return;
    }

    wordSlots.append(document.createTextNode(" "));
  });

  wordSlots.classList.toggle("is-dense", wordIndex > 10);

  if (preserveAnswerReady) {
    setAnswerReady(true);

    if (options.focusFirstSlot) {
      getSlotInputs()[0]?.focus({ preventScroll: true });
    }
    return;
  }

  setAnswerReady(false);
};

const removeCompletedStandardConcept = () => {
  if (!currentStandardId || !currentStandardConceptId) {
    return false;
  }

  const concepts = loadCompletedConcepts();
  const filteredConcepts = concepts.filter((item) =>
    !(
      item.id === `${currentStandardId}::${currentStandardConceptId}`
      || (
        item.standardId === currentStandardId
        && item.conceptId === currentStandardConceptId
      )
    )
  );

  if (filteredConcepts.length === concepts.length) {
    return false;
  }

  saveCompletedConcepts(filteredConcepts);
  return true;
};

const forgetStandardReviewProgress = (options = {}) => {
  if (!currentStandardId || !currentStandardConceptId) {
    return false;
  }

  const progress = loadStandardReviewProgress();
  const reviewIds = new Set(progress[currentStandardId] ?? []);

  if (!reviewIds.has(currentStandardConceptId)) {
    return false;
  }

  reviewIds.delete(currentStandardConceptId);

  if (reviewIds.size) {
    progress[currentStandardId] = [...reviewIds];
  } else {
    delete progress[currentStandardId];
  }

  saveStandardReviewProgress(progress);

  if (options.render !== false) {
    renderStandardPanel();
    renderHome();
    renderStudyProgressHud();
  }

  return true;
};

const forgetStandardProgress = (options = {}) => {
  if (!currentStandardId || !currentStandardConceptId) {
    return false;
  }

  const progress = loadStandardProgress();
  const completedIds = new Set(progress[currentStandardId] ?? []);

  if (!completedIds.has(currentStandardConceptId)) {
    return false;
  }

  completedIds.delete(currentStandardConceptId);

  if (completedIds.size) {
    progress[currentStandardId] = [...completedIds];
  } else {
    delete progress[currentStandardId];
  }

  saveStandardProgress(progress);
  removeCompletedStandardConcept();

  if (options.render !== false) {
    renderStandardPanel();
    renderHome();
    renderStudyProgressHud();
  }

  return true;
};

const rememberStandardReviewProgress = () => {
  if (!currentStandardId || !currentStandardConceptId) {
    return;
  }

  forgetStandardProgress({ render: false });
  resetStandardStreak();

  const progress = loadStandardReviewProgress();
  const reviewIds = new Set(progress[currentStandardId] ?? []);

  reviewIds.add(currentStandardConceptId);
  progress[currentStandardId] = [...reviewIds];
  saveStandardReviewProgress(progress);
  renderStandardPanel();
  renderHome();
  renderStudyProgressHud();
};

const increaseStandardStreak = () => {
  if (!currentStandardId) {
    return 0;
  }

  const streaks = loadStandardStreaks();
  const streak = (Number(streaks[currentStandardId]) || 0) + 1;

  streaks[currentStandardId] = streak;
  saveStandardStreaks(streaks);
  return streak;
};

const resetStandardStreak = () => {
  if (!currentStandardId) {
    return;
  }

  const streaks = loadStandardStreaks();

  if (!streaks[currentStandardId]) {
    return;
  }

  delete streaks[currentStandardId];
  saveStandardStreaks(streaks);
};

const rememberStandardProgress = () => {
  if (!currentStandardId || !currentStandardConceptId) {
    return 0;
  }

  const progress = loadStandardProgress();
  const completedIds = new Set(progress[currentStandardId] ?? []);
  const streak = increaseStandardStreak();

  completedIds.add(currentStandardConceptId);
  progress[currentStandardId] = [...completedIds];
  saveStandardProgress(progress);
  forgetStandardReviewProgress({ render: false });
  renderStandardPanel();
  renderHome();
  renderStudyProgressHud();
  pulseProgressBar(standardProgressBar);
  triggerStandardStreakAnimation(streak);
  return streak;
};

const renderFrontConcept = (primaryTerm, secondaryTerm) => {
  const termText = document.createElement("span");

  termText.className = "flip-card__term";
  termText.textContent = primaryTerm;
  frontOutput.replaceChildren(termText);

  if (!secondaryTerm) {
    return;
  }

  const translationText = document.createElement("span");

  translationText.className = "flip-card__translation";
  translationText.textContent = formatSecondaryTerm(secondaryTerm);
  frontOutput.append(translationText);
};

const renderCurrentCardConcept = () => {
  const standardConcept = getStandardConceptById(currentStandardId, currentStandardConceptId);
  const display = getConceptDisplay(standardConcept ?? {
    term: currentConceptTerm,
    spanishTerm: currentConceptSpanishTerm
  });

  currentConceptPrimaryTerm = display.primaryTerm;
  currentConceptSecondaryTerm = display.secondaryTerm;
  renderFrontConcept(currentConceptPrimaryTerm, currentConceptSecondaryTerm);
  frontOutput.classList.toggle(
    "is-compact",
    `${currentConceptPrimaryTerm} ${currentConceptSecondaryTerm}`.trim().length > 28
  );
};

const loadCard = (concept, definition, meta = {}) => {
  clearCardTransitionTimers();
  setSwipeDecisionActive(false);
  definitionText = definition.trim();
  currentDefinitionLanguage = normalizeLanguage(meta.language ?? selectedLanguage);
  currentStandardId = meta.standardId ?? "";
  currentStandardConceptId = meta.conceptId ?? "";
  currentConceptTerm = concept.trim();
  currentConceptSpanishTerm = getDisplaySpanishTerm(
    currentConceptTerm,
    meta.spanishTerm
      || getStandardConceptSpanishTerm(currentStandardId, currentStandardConceptId, currentConceptTerm)
  );
  currentPracticeTargetAnswers = [];
  currentPracticeRoundAnswers = [];
  currentPracticeRepeatAnswers = new Set();
  renderCurrentCardConcept();
  renderNextCardPreview();
  definitionPreview.textContent = definitionText;
  setStudyFeedback();
  renderWordSlots();
  card.classList.remove("is-flipped");
  setCardFaceState(false);

  form.hidden = true;
  homeView.hidden = true;
  stage.hidden = false;
  libraryView.hidden = true;
  profileView.hidden = true;
  setStudyChromeActive(true);
  setBottomNavVisible(true);
  setActiveNav("home");
  renderStudyProgressHud();
  syncSwipeReadiness();
  resetPageScroll();
  frontFaceButton.focus({ preventScroll: true });
  updateAppBackControl();
  emitFlipCardsEvent("card", getBridgeCard());
};

const rememberCompletedConcept = () => {
  const concept = currentConceptTerm;
  const definition = definitionText.trim();
  const id = currentStandardId && currentStandardConceptId
    ? `${currentStandardId}::${currentStandardConceptId}`
    : `${normalizeWord(concept)}::${normalizeWord(definition)}`;
  const concepts = loadCompletedConcepts();
  const existingIndex = concepts.findIndex((item) =>
    item.id === id
    || (
      currentStandardId
      && currentStandardConceptId
      && item.standardId === currentStandardId
      && item.conceptId === currentStandardConceptId
    )
  );
  const standardName = getStandardDisplayName(currentStandardId);
  const item = {
    id,
    concept,
    definition,
    completedAt: new Date().toISOString(),
    ...(currentStandardId ? { standardId: currentStandardId } : {}),
    ...(currentStandardConceptId ? { conceptId: currentStandardConceptId } : {}),
    ...(standardName ? { standardName } : {}),
    ...(currentConceptSpanishTerm ? { spanishTerm: currentConceptSpanishTerm } : {}),
    language: currentDefinitionLanguage
  };

  if (existingIndex >= 0) {
    concepts.splice(existingIndex, 1);
  }

  concepts.unshift(item);
  saveCompletedConcepts(concepts.slice(0, 200));
  renderHome();
};

const renderLibrary = () => {
  const allConcepts = sortConcepts(loadCompletedConcepts().map(getCompletedConceptLibraryData));
  const query = normalizeWord(librarySearch.value.trim());
  const queryFilteredConcepts = query
    ? allConcepts.filter(({ searchText }) =>
      normalizeWord(searchText).includes(query)
    )
    : allConcepts;
  const displayedConcepts = sortConcepts(queryFilteredConcepts);
  const filledLetters = new Set(displayedConcepts.map(({ alphabetKey }) => alphabetKey));
  const libraryAlphabet = getLibraryAlphabet(filledLetters);

  if (activeLibraryLetter && !filledLetters.has(activeLibraryLetter)) {
    activeLibraryLetter = "";
  }

  const concepts = activeLibraryLetter
    ? displayedConcepts.filter(({ alphabetKey }) => alphabetKey === activeLibraryLetter)
    : displayedConcepts;
  const groupedConcepts = new Map();

  completedList.replaceChildren();
  alphabetIndex.replaceChildren();
  librarySearchField.hidden = allConcepts.length === 0;
  libraryEmpty.hidden = allConcepts.length > 0 && concepts.length > 0;
  libraryEmpty.textContent = allConcepts.length
    ? t("noResults")
    : t("emptyProfile");
  libraryEmptyAction.hidden = allConcepts.length > 0;
  alphabetIndex.hidden = concepts.length === 0;
  librarySummary.textContent = allConcepts.length
    ? t("profileSummary", {
      total: allConcepts.length,
      shown: concepts.length,
      query: query || activeLibraryLetter
    })
    : "";
  librarySummary.hidden = allConcepts.length === 0;

  libraryAlphabet.forEach((letter) => {
    const marker = document.createElement("button");
    const isFilled = filledLetters.has(letter);
    const isActive = activeLibraryLetter === letter;

    marker.type = "button";
    marker.className = isFilled
      ? "alphabet-index__letter is-filled"
      : "alphabet-index__letter";
    marker.classList.toggle("is-active", isActive);
    marker.textContent = letter;
    marker.disabled = !isFilled;
    marker.dataset.libraryLetter = letter;
    marker.setAttribute("aria-pressed", String(isActive));
	    marker.setAttribute("aria-label", t("showConceptsStartingWith", { letter }));
    alphabetIndex.append(marker);
  });

  concepts.forEach((concept) => {
    const group = groupedConcepts.get(concept.alphabetKey) ?? [];
    group.push({
      ...concept
    });
    groupedConcepts.set(concept.alphabetKey, group);
  });

  libraryAlphabet.forEach((letter) => {
    const group = groupedConcepts.get(letter);

    if (!group) {
      return;
    }

    const section = document.createElement("li");
    const title = document.createElement("span");
    const list = document.createElement("ul");

    section.className = "alphabet-section";
    title.className = "alphabet-section__letter";
    title.textContent = letter;
    list.className = "alphabet-section__concepts";

    group.forEach((completedConcept) => {
      const { concept, definition, display } = completedConcept;
      const item = document.createElement("li");
      const button = document.createElement("button");
      const conceptText = document.createElement("strong");
      const spanishText = document.createElement("span");
      const standardText = document.createElement("em");
      const definitionTextPreview = document.createElement("span");
      const standardId = completedConcept.standardId ?? "";
      const conceptId = completedConcept.conceptId
        || getStandardConceptId(standardId, concept);
      const standardName = getStandardDisplayName(
        standardId,
        completedConcept.standardName
      );
      const spanishTerm = completedConcept.spanishTerm ?? "";

      button.className = "completed-item";
      button.type = "button";
      conceptText.textContent = display.primaryTerm;
      spanishText.className = "completed-item__translation";
      spanishText.textContent = formatSecondaryTerm(display.secondaryTerm);
      standardText.className = "completed-item__standard";
      standardText.textContent = standardName;
      definitionTextPreview.textContent = definition;

      button.append(conceptText);

      if (display.secondaryTerm) {
        button.append(spanishText);
      }

      if (standardName) {
        button.append(standardText);
      }

      button.append(definitionTextPreview);
      button.addEventListener("click", () => {
        recordCurrentAppRoute();
        const localConcept = standardId && conceptId
          ? getStandardConceptById(standardId, conceptId)
          : null;
        const localDefinition = localConcept
          ? getConceptDefinition(localConcept, selectedLanguage)
          : "";
        const useLocal = Boolean(localDefinition);
        const localDefinitionLanguage = useLocal
          ? getConceptDefinitionLanguage(localConcept, selectedLanguage)
          : completedConcept.language;

        loadCard(concept, useLocal ? localDefinition : definition, {
          standardId,
          conceptId,
          spanishTerm,
          language: localDefinitionLanguage
        });
      });
      item.append(button);
      list.append(item);
    });

    section.append(title, list);
  completedList.append(section);
  });
};

const renderProfileCalendar = (completedConcepts) => {
  const completedDateKeys = getCompletedDateKeys(completedConcepts);
  const weekDates = getCurrentWeekDates();
  const weekdayLabels = getWeekdayLabels();
  const todayKey = getLocalDateKey(new Date());
  const activeDays = weekDates.filter((date) =>
    completedDateKeys.has(getLocalDateKey(date))
  ).length;

  profileCalendarTitle.textContent = t("profileCalendarTitle");
  profileCalendarMeta.textContent = t("profileCalendarMeta");
  profileCalendarCopy.textContent = t("profileCalendarCopy", {
    active: activeDays,
    total: weekDates.length
  });
  profileCalendarBadge.textContent = String(Math.max(1, activeDays));
  profileWeek.setAttribute("aria-label", t("profileCalendarAria"));
  profileWeek.replaceChildren();

  weekDates.forEach((date, index) => {
    const item = document.createElement("span");
    const day = document.createElement("small");
    const dateNumber = document.createElement("strong");
    const key = getLocalDateKey(date);
    const isActive = completedDateKeys.has(key);
    const isTodayDate = key === todayKey;

    item.className = [
      "profile-week__day",
      isActive ? "is-active" : "",
      isTodayDate ? "is-today" : ""
    ].filter(Boolean).join(" ");
    day.textContent = weekdayLabels[index];
    dateNumber.textContent = String(date.getDate());
    item.setAttribute(
      "aria-label",
      `${weekdayLabels[index]} ${date.getDate()}${isActive ? `, ${t("completed")}` : ""}${isTodayDate ? `, ${t("profileTodayWord")}` : ""}`
    );
    item.append(day, dateNumber);
    profileWeek.append(item);
  });
};

const resetStudyMemory = () => {
  studyMemoryStorageKeys.forEach(removeStoredJson);
  activeSession = null;
  clearCardTransitionTimers();
  setSwipeDecisionActive(false);
  renderStandardPanel();
  renderHome();
  renderLibrary();
  renderProfile();
  setStudyFeedback(t("resetMemoryDone"), "help");
};

const renderProfile = () => {
  const completedConcepts = loadCompletedConcepts();
  const completedToday = getCompletedTodayCount();
  const standard = getPrimaryStandard();
  const stats = getStandardStats(standard);

  profileSummary.textContent = t("profileSummaryLine", {
    total: completedConcepts.length
  });
  profileName.textContent = t("profileLearnerName");
  profileTodayValue.textContent = `${Math.min(completedToday, dailyGoal)}/${dailyGoal}`;
  profileLibraryValue.textContent = String(completedConcepts.length);
  profileStandardLabel.textContent = standard
    ? standard.shortName || standard.name
    : t("profileStandardMetric");
  profileStandardValue.textContent = `${stats.completed}/${stats.total}`;
  renderProfileCalendar(completedConcepts);
  profileStartAction.disabled = standards.length === 0;
  profileStartAction.textContent = t("shortSession");
  profileStartAction.setAttribute("aria-label", t("shortSession"));
};

const syncLanguageButtons = () => {
  languageSwitch?.setAttribute("aria-label", t("languageControl"));
  languageButtons.forEach((button) => {
    const language = normalizeLanguage(button.dataset.languageOption);
    const languageMeta = getLanguageMetadata(language);
    const isSelected = language === selectedLanguage;
    const quickLanguage = normalizeLanguage(studyQuickLanguage);
    const isQuickLanguage = language === quickLanguage || language === "en";

    syncCompactLanguageButton(button, language, t(languageMeta.shortKey));
    button.hidden = !isQuickLanguage;
    button.classList.toggle("is-study-quick-primary", language === quickLanguage);
    button.classList.toggle("is-study-quick-secondary", language === "en" && quickLanguage !== "en");
    button.style.order = language === quickLanguage ? "1" : language === "en" ? "2" : "";
    button.setAttribute("aria-pressed", String(isSelected));
    button.setAttribute("aria-label", t(languageMeta.labelKey));
  });

  languageDialogButtons.forEach((button) => {
    const language = normalizeLanguage(button.dataset.languageDialogOption);
    const languageMeta = getLanguageMetadata(language);
    const isSelected = language === selectedLanguage;
    const label = button.querySelector("[data-language-dialog-label]");
    const shortLabel = button.querySelector("[data-language-dialog-short]");
    const flag = ensureLanguageFlag(button, "language-flag language-dialog-flag");

    syncLanguageFlag(flag, language);
    if (button.firstElementChild !== flag) {
      button.prepend(flag);
    }

    if (label) {
      label.textContent = t(languageMeta.labelKey);
    }

    if (shortLabel) {
      shortLabel.textContent = t(languageMeta.shortKey);
    }

    button.setAttribute("aria-pressed", String(isSelected));
    button.setAttribute("aria-label", t(languageMeta.labelKey));
  });

  if (languageMenuCurrent) {
    languageMenuCurrent.textContent = t(getLanguageMetadata(selectedLanguage).shortKey);
  }

  if (languageMenuTrigger) {
    const selectedLanguageName = getLocalizedLanguageName(selectedLanguage);
    const label = t("languageMenuTrigger", { language: selectedLanguageName });

    languageMenuTrigger.setAttribute("aria-label", label);
    languageMenuTrigger.title = label;
  }
};

const isLanguageModalOpen = () => Boolean(languageModal && !languageModal.hidden);

const setLanguageModalBackgroundInert = (isInert) => {
  [topActions, appRoot].forEach((element) => {
    if (!element) {
      return;
    }

    element.inert = isInert;
    if (isInert) {
      element.setAttribute("inert", "");
      return;
    }

    element.removeAttribute("inert");
  });
};

const getSelectedLanguageDialogButton = () =>
  languageModal?.querySelector(`[data-language-dialog-option="${selectedLanguage}"]`)
  ?? languageModal?.querySelector("[data-language-dialog-option]");

const getLanguageModalFocusableElements = () =>
  Array.from(languageModal?.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])") ?? [])
    .filter((element) => !element.disabled && element.offsetParent !== null);

const openLanguageModal = () => {
  if (!languageModal || isLanguageModalOpen()) {
    return;
  }

  languageModalRestoreFocus = document.activeElement instanceof HTMLElement
    ? document.activeElement
    : null;
  languageModal.hidden = false;
  document.body.classList.add("is-language-modal-open");
  languageMenuTrigger?.setAttribute("aria-expanded", "true");
  setLanguageModalBackgroundInert(true);
  syncLanguageButtons();
  window.requestAnimationFrame(() => {
    getSelectedLanguageDialogButton()?.focus({ preventScroll: true });
  });
};

const closeLanguageModal = ({ restoreFocus = true } = {}) => {
  if (!languageModal || !isLanguageModalOpen()) {
    return;
  }

  languageModal.hidden = true;
  document.body.classList.remove("is-language-modal-open");
  languageMenuTrigger?.setAttribute("aria-expanded", "false");
  setLanguageModalBackgroundInert(false);

  if (restoreFocus && languageModalRestoreFocus?.isConnected) {
    languageModalRestoreFocus.focus({ preventScroll: true });
  }

  languageModalRestoreFocus = null;
};

const handleLanguageModalKeydown = (event) => {
  if (!isLanguageModalOpen()) {
    return;
  }

  if (event.key === "Escape") {
    closeLanguageModal();
    return;
  }

  if (event.key !== "Tab") {
    return;
  }

  const focusableElements = getLanguageModalFocusableElements();

  if (focusableElements.length === 0) {
    event.preventDefault();
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus({ preventScroll: true });
    return;
  }

  if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus({ preventScroll: true });
  }
};

const applyLanguageCopy = () => {
  document.documentElement.lang = getLanguageMetadata(selectedLanguage).htmlLang;
  document.documentElement.dir = selectedLanguage === "ar" ? "rtl" : "ltr";
  document.title = "FlipCards";
  syncLanguageButtons();

	  homeView.setAttribute("aria-label", t("homeAria"));
  studyToolbar?.setAttribute("aria-label", t("studyToolbarAria"));
  appBackButton?.setAttribute("aria-label", t("back"));
  if (appBackButton) {
    appBackButton.title = t("back");
  }
  if (languageModalTitle) {
    languageModalTitle.textContent = t("languagePickerTitle");
  }
  languageModal?.setAttribute("aria-label", t("languagePickerTitle"));
  languageModal?.querySelector(".language-modal__options")?.setAttribute("aria-label", t("languageControl"));
  languageModalCloseButtons.forEach((button) => {
    button.setAttribute("aria-label", t("languagePickerClose"));
  });
	  document.querySelector(".home-actions")?.setAttribute(
	    "aria-label",
	    t("primaryActions")
	  );
  document.querySelector(".home-standard")?.setAttribute("aria-label", t("cardSource"));
  homeSourceList?.setAttribute("aria-label", t("cardSource"));
  document.querySelector("[data-home-action='create'] span").textContent = t("createCard");
  document.querySelector("[data-home-action='create']")?.setAttribute("aria-label", t("createCard"));

  form.setAttribute("aria-label", t("createCard"));
  standardFieldLabel.textContent = t("standard");
	  standardPanel.setAttribute("aria-label", t("standardConceptsAria"));
  standardProgress.setAttribute("aria-label", t("standardProgress"));
  standardSessionTrack.setAttribute("aria-label", t("standardProgress"));
  standardSearchLabel.textContent = t("search");
  standardSearch.placeholder = t("searchConcept");
  standardConcepts.setAttribute("aria-label", t("conceptsAvailable"));
  customSetPanel.setAttribute("aria-label", t("customSetAria"));
  customSetLabel.textContent = t("customSet");
  customSetNameLabel.textContent = t("customSetName");
  customSetNameInput.placeholder = t("customSetNamePlaceholder");
  setCustomSetHelp();
  renderCustomSetOptions();
  conceptFieldLabel.textContent = t("concept");
  frontInput.placeholder = t("conceptPlaceholder");
  definitionModeGroup.setAttribute("aria-label", t("definitionMode"));
  if (definitionModeLabels[0]) {
    definitionModeLabels[0].textContent = t("manual");
  }
  if (definitionModeLabels[1]) {
    definitionModeLabels[1].textContent = t("ai");
  }
  definitionFieldLabel.textContent = t("definition");
  backInput.placeholder = selectedDefinitionMode === "ai"
    ? t("definitionGeneratedPlaceholder")
    : t("definitionPlaceholder");
  aiButton.textContent = t("generateAI");
  generateButton.textContent = t("createCard");

	  stage.setAttribute("aria-label", t("createdCardAria"));
  if (studyHeading) {
    studyHeading.textContent = t("studyCard");
  }
  card.setAttribute("aria-label", t("studyCard"));
  frontFaceButton.setAttribute("aria-label", t("showDefinition"));
  backFace.setAttribute("aria-label", t("completeDefinition"));
  document.querySelector("#slotInstruction").textContent = t("completeKeywords");
  readyAnswerLabel.textContent = t("answer");

  libraryView.setAttribute("aria-label", t("libraryNav"));
  libraryTitle.textContent = t("library");
  librarySearchLabel.textContent = t("search");
  librarySearch.placeholder = t("searchSavedConcept");
	  alphabetIndex.setAttribute("aria-label", t("alphabeticalIndex"));
	  libraryEmptyAction.textContent = t("shortSession");
	  completedList.setAttribute("aria-label", t("completedConcepts"));

  profileView.setAttribute("aria-label", t("profile"));
  profileTitle.textContent = t("profileTitle");
  profileIdentity?.setAttribute("aria-label", t("profileIdentityAria"));
  profileMetrics?.setAttribute("aria-label", t("profileMetricsAria"));
  profilePreferences?.setAttribute("aria-label", t("profilePreferencesAria"));
  profileAchievements?.setAttribute("aria-label", t("profileAchievements"));
  profileName.textContent = t("profileLearnerName");
  profileTodayLabel.textContent = t("profileTodayMetric");
  profileLibraryLabel.textContent = t("profileLibraryMetric");
  profileStandardLabel.textContent = t("profileStandardMetric");
  profileAchievementsTitle.textContent = t("profileAchievements");
  profileCalendarTitle.textContent = t("profileCalendarTitle");
  profileCalendarMeta.textContent = t("profileCalendarMeta");
  profileWeek.setAttribute("aria-label", t("profileCalendarAria"));
  syncThemeToggle();
  if (resetMemoryButton) {
    resetMemoryButton.setAttribute("aria-label", t("resetMemory"));
  }
  if (resetMemoryLabel) {
    resetMemoryLabel.textContent = t("resetMemory");
  }
  profileStartAction.textContent = t("shortSession");
  privacyLink.textContent = t("privacy");

  swipeReviewLabel.textContent = t("decisionReview");
  swipeKnownLabel.textContent = t("decisionKnown");
  swipeReviewAction.textContent = t("decisionReviewAction");
  swipeKnownAction.textContent = t("decisionKnownAction");
  swipeDecision.setAttribute("aria-label", t("decisionDominated"));
  swipeDecisionLabel.textContent = getSwipeDecisionLabel();
  swipeDecisionConcept.textContent = getCardConceptLabel();
  swipeDecisionHint.textContent = getSwipeDecisionHint();

  navButtons.forEach((button) => {
    const label = {
      home: t("home"),
      library: t("libraryNav"),
      profile: t("profile")
    }[button.dataset.view] ?? t("home");

    button.setAttribute("aria-label", label);
    button.title = label;
  });
  if (navHomeLabel) {
    navHomeLabel.textContent = t("home");
  }
  if (navLibraryLabel) {
    navLibraryLabel.textContent = t("libraryNav");
  }
  if (navProfileLabel) {
    navProfileLabel.textContent = t("profile");
  }
	  bottomNav.setAttribute("aria-label", t("mainNavigation"));
	};

const refreshCurrentView = () => {
  renderStandardOptions();
  renderStandardPanel();
  renderHome();

  if (!libraryView.hidden) {
    renderLibrary();
  }

  if (!profileView.hidden) {
    renderProfile();
  }

  if (!stage.hidden && currentConceptTerm) {
    const concept = getStandardConceptById(currentStandardId, currentStandardConceptId);
    const localDefinition = getConceptDefinition(concept, selectedLanguage);
    const preserveRevealedAnswer = answerCard.classList.contains("is-answer-ready");

    if (localDefinition && !preserveRevealedAnswer) {
      definitionText = localDefinition;
      currentDefinitionLanguage = getConceptDefinitionLanguage(concept, selectedLanguage);
    }

    renderCurrentCardConcept();
    renderNextCardPreview();
    definitionPreview.textContent = definitionText;
    if (!preserveRevealedAnswer) {
      renderWordSlots();
    }
    renderStudyProgressHud();
  }
};

const setLanguage = (language) => {
  const normalizedLanguage = normalizeLanguage(language);

  if (normalizedLanguage === selectedLanguage) {
    closeLanguageModal();
    return;
  }

  cancelStandardLoad();
  selectedLanguage = normalizedLanguage;
  updateStudyQuickLanguage(selectedLanguage);
  saveLanguage(selectedLanguage);
  setStandardStatus("");
  applyLanguageCopy();
  refreshCurrentView();
  updateButtonState();
  closeLanguageModal();
  emitFlipCardsEvent("language", { language: selectedLanguage });
};

const setActiveNav = (view) => {
  navButtons.forEach((button) => {
    const isActive = button.dataset.view === view;

    button.classList.toggle("is-active", isActive);

    if (isActive) {
      button.setAttribute("aria-current", "page");
      return;
    }

    button.removeAttribute("aria-current");
  });
};

const getCurrentAppRoute = () => {
  if (!stage.hidden) {
    return { view: "study" };
  }

  if (!libraryView.hidden) {
    return { view: "library" };
  }

  if (!profileView.hidden) {
    return { view: "profile" };
  }

  if (!form.hidden) {
    return {
      view: "creator",
      standardId: selectedStandard?.id ?? standardSelect.value ?? "",
      focusManual: !selectedStandard
    };
  }

  return { view: "home" };
};

const isSameAppRoute = (firstRoute, secondRoute) =>
  firstRoute?.view === secondRoute?.view
  && (firstRoute?.view !== "creator" || firstRoute.standardId === secondRoute.standardId);

const updateAppBackControl = () => {
  if (!appBackButton) {
    return;
  }

  appBackButton.hidden = appBackStack.length === 0;
  appBackButton.disabled = appBackStack.length === 0;
  appBackButton.setAttribute("aria-label", t("back"));
  appBackButton.title = t("back");
};

const recordCurrentAppRoute = () => {
  const route = getCurrentAppRoute();
  const previousRoute = appBackStack.at(-1);

  if (!isSameAppRoute(route, previousRoute)) {
    appBackStack.push(route);
    appBackStack = appBackStack.slice(-12);
  }

  updateAppBackControl();
};

const showStudyFromHistory = () => {
  cancelStandardLoad();
  homeView.hidden = true;
  form.hidden = true;
  stage.hidden = false;
  libraryView.hidden = true;
  profileView.hidden = true;
  setStudyChromeActive(true);
  setBottomNavVisible(true);
  setActiveNav("home");
  setCardFaceState(card.classList.contains("is-flipped"));
  renderStudyProgressHud();
  syncSwipeReadiness();
  resetPageScroll();
  updateAppBackControl();
};

const navigateBack = () => {
  const route = appBackStack.pop();

  if (!route) {
    updateAppBackControl();
    return;
  }

  if (route.view === "study" && currentConceptTerm) {
    showStudyFromHistory();
    return;
  }

  if (route.view === "library") {
    showLibrary({ preserveStudyState: true });
    return;
  }

  if (route.view === "profile") {
    showProfile({ preserveStudyState: true });
    return;
  }

  if (route.view === "creator") {
    showCreator({
      standardId: route.standardId ?? "",
      focusManual: route.focusManual
    });
    return;
  }

  showHome({ preserveStudyState: true });
};

const navigateWithHistory = async (callback) => {
  const previousRoute = getCurrentAppRoute();
  const previousStackLength = appBackStack.length;

  recordCurrentAppRoute();
  try {
    return await callback();
  } finally {
    const currentRoute = getCurrentAppRoute();
    const recordedRoute = appBackStack.at(-1);

    if (
      appBackStack.length === previousStackLength + 1
      && isSameAppRoute(currentRoute, previousRoute)
      && isSameAppRoute(recordedRoute, previousRoute)
    ) {
      appBackStack.pop();
      updateAppBackControl();
    }
  }
};

const setBottomNavVisible = (isVisible) => {
  bottomNav.hidden = !isVisible;
};

const setStudyChromeActive = (isActive) => {
  document.body.classList.toggle("is-study-mode", isActive);
  emitFlipCardsEvent("study", { active: isActive });

  if (!isActive) {
    standardStudyHud.hidden = true;
    standardStudyHud.classList.remove(
      "is-streaking",
      "is-swipe-dragging",
      "is-swipe-target-review",
      "is-swipe-target-known"
    );
    standardStudyHud.removeAttribute("data-streak");
    syncSwipeReadiness();
  }
};

const resetPageScroll = () => {
  window.requestAnimationFrame(() => {
    window.scrollTo(0, 0);
  });
};

const showCreator = (options = {}) => {
  const standardId = options.standardId ?? "";
  const preserveStudyState = options.preserveStudyState === true;

  cancelStandardLoad();
  if (!preserveStudyState) {
    activeSession = null;
  }
  homeView.hidden = true;
  form.hidden = false;
  stage.hidden = true;
  libraryView.hidden = true;
  profileView.hidden = true;
  if (!preserveStudyState) {
    resetBackIntro();
    setSwipeDecisionActive(false);
  }
  setDefinitionError("");
  setStudyChromeActive(false);
  setBottomNavVisible(true);
  setActiveNav("home");
  standardSelect.value = standardId;
  resetPageScroll();
  selectStandard(standardId, { focusManual: options.focusManual });
  updateAppBackControl();
};

const showHome = (options = {}) => {
  const preserveStudyState = options.preserveStudyState === true;

  cancelStandardLoad();
  if (!preserveStudyState) {
    activeSession = null;
  }
  homeView.hidden = false;
  form.hidden = true;
  stage.hidden = true;
  libraryView.hidden = true;
  profileView.hidden = true;
  if (!preserveStudyState) {
    resetBackIntro();
    setSwipeDecisionActive(false);
  }
  setStudyChromeActive(false);
  setBottomNavVisible(true);
  renderHome();
  setActiveNav("home");
  resetPageScroll();
  updateAppBackControl();
};

const showLibrary = (options = {}) => {
  const preserveStudyState = options.preserveStudyState === true;

  cancelStandardLoad();
  if (!preserveStudyState) {
    activeSession = null;
  }
  homeView.hidden = true;
  form.hidden = true;
  stage.hidden = true;
  libraryView.hidden = false;
  profileView.hidden = true;
  if (!preserveStudyState) {
    resetBackIntro();
    setSwipeDecisionActive(false);
  }
  setStudyChromeActive(false);
  setBottomNavVisible(true);
  renderLibrary();
  setActiveNav("library");
  resetPageScroll();
  updateAppBackControl();
};

const showProfile = (options = {}) => {
  const preserveStudyState = options.preserveStudyState === true;

  cancelStandardLoad();
  if (!preserveStudyState) {
    activeSession = null;
  }
  homeView.hidden = true;
  form.hidden = true;
  stage.hidden = true;
  libraryView.hidden = true;
  profileView.hidden = false;
  if (!preserveStudyState) {
    resetBackIntro();
    setSwipeDecisionActive(false);
  }
  setStudyChromeActive(false);
  setBottomNavVisible(true);
  renderProfile();
  setActiveNav("profile");
  resetPageScroll();
  updateAppBackControl();
};

form.addEventListener("input", (event) => {
  if (event.target === backInput) {
    setDefinitionError("");
  }

  if (event.target === customSetNameInput) {
    setCustomSetHelp();
  }

  updateButtonState();
});

standardSelect.addEventListener("change", () => {
  selectStandard(standardSelect.value);
});

customSetSelect.addEventListener("change", () => {
  syncCustomSetNameField({ focus: true });
  updateButtonState();
});

standardSearch.addEventListener("input", () => {
  setStandardStatus("");
  renderStandardPanel();
});

librarySearch.addEventListener("input", () => {
  renderLibrary();
});

alphabetIndex.addEventListener("click", (event) => {
  const marker = event.target.closest?.("[data-library-letter]");

  if (!marker || marker.disabled) {
    return;
  }

  activeLibraryLetter = activeLibraryLetter === marker.dataset.libraryLetter
    ? ""
    : marker.dataset.libraryLetter;
  renderLibrary();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageOption);
  });
});

languageMenuTrigger?.addEventListener("click", () => {
  if (isLanguageModalOpen()) {
    closeLanguageModal();
    return;
  }

  openLanguageModal();
});

languageModalCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closeLanguageModal();
  });
});

languageDialogButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.languageDialogOption);
  });
});

document.addEventListener("keydown", handleLanguageModalKeydown);

homeActionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.homeAction;

    if (action === "choose-standard") {
      setHomeSourceExpanded(!isHomeSourceExpanded);
      renderHome();
      return;
    }

    navigateWithHistory(() => showCreator({
      focusManual: true,
      preserveStudyState: getCurrentAppRoute().view === "study"
    }));
  });
});

homeSourceList?.addEventListener("click", (event) => {
  const button = event.target.closest?.("[data-home-source-id]");

  if (!button) {
    return;
  }

  const standard = getStandardById(button.dataset.homeSourceId);

  if (!standard) {
    return;
  }

  saveActiveStandardId(standard.id);
  setHomeSourceExpanded(false);
  navigateWithHistory(() => showCreator({
    standardId: standard.id,
    preserveStudyState: getCurrentAppRoute().view === "study"
  }));
});

appBackButton?.addEventListener("click", navigateBack);

const resetAppBackGesture = () => {
  appBackGesturePointerId = null;
  appBackGestureStartX = 0;
  appBackGestureStartY = 0;
  appBackGestureStarted = false;
};

const startAppBackGesture = (event) => {
  if (
    appBackStack.length === 0
    || document.body.classList.contains("is-study-mode")
    || event.button !== 0
    || event.clientX > appBackGestureEdge
    || event.target.closest?.("input, textarea, select, button, a, [contenteditable='true']")
  ) {
    return;
  }

  appBackGesturePointerId = event.pointerId;
  appBackGestureStartX = event.clientX;
  appBackGestureStartY = event.clientY;
  appBackGestureStarted = true;
};

const moveAppBackGesture = (event) => {
  if (!appBackGestureStarted || event.pointerId !== appBackGesturePointerId) {
    return;
  }

  const deltaX = event.clientX - appBackGestureStartX;
  const deltaY = event.clientY - appBackGestureStartY;

  if (deltaX > appBackGestureDistance / 2 && deltaX > Math.abs(deltaY) * swipeHorizontalBias) {
    event.preventDefault();
  }
};

const finishAppBackGesture = (event) => {
  if (!appBackGestureStarted || event.pointerId !== appBackGesturePointerId) {
    return;
  }

  const deltaX = event.clientX - appBackGestureStartX;
  const deltaY = event.clientY - appBackGestureStartY;

  resetAppBackGesture();

  if (deltaX > appBackGestureDistance && deltaX > Math.abs(deltaY) * swipeHorizontalBias) {
    navigateBack();
  }
};

document.addEventListener("pointerdown", startAppBackGesture);
document.addEventListener("pointermove", moveAppBackGesture, { passive: false });
document.addEventListener("pointerup", finishAppBackGesture);
document.addEventListener("pointercancel", resetAppBackGesture);

definitionModeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    selectedDefinitionMode = input.value;
    aiTools.hidden = selectedDefinitionMode !== "ai";
    setDefinitionError("");
    aiStatus.textContent = selectedDefinitionMode === "ai"
      ? t("aiModeHelp")
      : "";
    backInput.placeholder = selectedDefinitionMode === "ai"
      ? t("definitionGeneratedPlaceholder")
      : t("definitionPlaceholder");
    if (selectedDefinitionMode === "ai") {
      backInput.value = "";
    }
    updateButtonState();
  });
});

aiButton.addEventListener("click", async () => {
  const concept = frontInput.value.trim();
  const requestLanguage = selectedLanguage;

  if (!concept || isGeneratingDefinition) {
    return;
  }

  isGeneratingDefinition = true;
  aiStatus.textContent = t("generatingDefinition");
  updateButtonState();

  try {
    const generatedDefinition = await requestDefinition(concept, "", {
      language: requestLanguage
    });

    if (selectedLanguage !== requestLanguage) {
      aiStatus.textContent = t("aiDefinitionLanguageChanged");
      return;
    }

    backInput.value = generatedDefinition;
    setDefinitionError("");
    aiStatus.textContent = lastDefinitionSource
      ? `${t("aiDefinitionReady")} · ${lastDefinitionSource === "on_device" ? "Gemini Nano (on-device)" : "Gemini (cloud)"}`
      : t("aiDefinitionReady");
  } catch (error) {
    aiStatus.textContent = getFriendlyDefinitionError(error);
  } finally {
    isGeneratingDefinition = false;
    updateButtonState();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (selectedStandard) {
    return;
  }

	  if (countStudyWords(backInput.value) < 2) {
	    setDefinitionError(t("definitionMinimumWords"));
	    backInput.focus({ preventScroll: true });
	    return;
	  }

  const concept = frontInput.value.trim();
  const definition = backInput.value.trim();
  const customSetValue = customSetSelect?.value ?? "";
  let cardMeta = {
    language: selectedLanguage
  };

  if (customSetValue === customSetCreateValue) {
    const setName = customSetNameInput.value.trim();

    if (!setName) {
      setCustomSetHelp(t("customSetNameRequired"), true);
      customSetNameInput.focus({ preventScroll: true });
      return;
    }

    cardMeta = {
      ...cardMeta,
      ...addManualCardToCustomSet({
        concept,
        definition,
        setName,
        language: selectedLanguage
      })
    };
    setStudyFeedback(t("customSetSaved", { name: cardMeta.standardName }), "help");
  } else if (customSetValue) {
    const selectedCustomSet = getStandardById(customSetValue);

    if (selectedCustomSet?.isCustom) {
      cardMeta = {
        ...cardMeta,
        ...addManualCardToCustomSet({
          concept,
          definition,
          setId: selectedCustomSet.id,
          language: selectedLanguage
        })
      };
      setStudyFeedback(t("customSetSaved", { name: cardMeta.standardName }), "help");
    }
  }

  loadCard(concept, definition, cardMeta);
});

const flipFrontFaceToBack = () => {
  playFlipGestureSound();
  card.classList.add("is-flipped");
  setCardFaceState(true);
  clearFlipSequence();
  flipSequenceTimer = window.setTimeout(() => {
    clearFrontPressFill();
    startBackIntro();
    readyAnswerButton.focus({ preventScroll: true });
  }, prefersReducedMotion.matches ? 0 : flipDuration);
};

const handleFrontFacePointerDown = (event) => {
  if (
    event.button !== 0
    || isSwipeDecisionActive
    || card.classList.contains("is-flipped")
  ) {
    return;
  }

  startFrontPressFill(event);
};

const getBackFaceInteractiveTarget = (event) =>
  event.target.closest?.("button, input, textarea, select, a, [contenteditable='true']");

const handleBackFacePointerDown = (event) => {
  if (
    event.button !== 0
    || isSwipeDecisionActive
    || !card.classList.contains("is-flipped")
    || getBackFaceInteractiveTarget(event)
  ) {
    return;
  }

  startFrontPressFill(event, backFace);
};

frontFaceButton.addEventListener("pointerdown", handleFrontFacePointerDown);
frontFaceButton.addEventListener("pointercancel", clearFrontPressFill);
backFace.addEventListener("pointerdown", handleBackFacePointerDown);
backFace.addEventListener("pointercancel", clearFrontPressFill);

frontFaceButton.addEventListener("click", (event) => {
  if (consumeSuppressedFaceClick(event)) {
    return;
  }

  if (isSwipeDecisionActive || card.classList.contains("is-flipped")) {
    return;
  }

  clearFlipSequence();
  if (!frontFaceButton.classList.contains("is-press-filling")) {
    startFrontPressFill(event);
  }
  flipSequenceTimer = window.setTimeout(flipFrontFaceToBack, getFrontPressFlipDelay());
});

backFace.addEventListener("click", (event) => {
  if (consumeSuppressedFaceClick(event)) {
    return;
  }

  if (isSwipeDecisionActive) {
    return;
  }

  const interactiveTarget = getBackFaceInteractiveTarget(event);

  if (interactiveTarget) {
    return;
  }

  playFlipGestureSound();
  showFrontFace({ feedback: true, event });
});

readyAnswerButton.addEventListener("click", () => {
  window.clearTimeout(backIntroTimer);
  playFlipGestureSound();
  revealWordSlots({ focusFirstSlot: true });
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentRoute = getCurrentAppRoute();
    const preserveStudyState = currentRoute.view === "study";

    if (button.dataset.view === "library") {
      if (currentRoute.view !== "library") {
        navigateWithHistory(() => showLibrary({ preserveStudyState }));
      }
      return;
    }

    if (button.dataset.view === "profile") {
      if (currentRoute.view !== "profile") {
        navigateWithHistory(() => showProfile({ preserveStudyState }));
      }
      return;
    }

    if (currentRoute.view !== "home") {
      navigateWithHistory(() => showHome({ preserveStudyState }));
    }
  });
});

libraryEmptyAction.addEventListener("click", () => {
  navigateWithHistory(() => startStandardSession());
});

profileStartAction.addEventListener("click", () => {
  navigateWithHistory(() => startStandardSession());
});

themeToggle?.addEventListener("click", () => {
  setTheme(selectedTheme === "dark" ? "light" : "dark");
});

resetMemoryButton?.addEventListener("click", () => {
  if (!window.confirm(t("resetMemoryConfirm"))) {
    return;
  }

  resetStudyMemory();
});

card.addEventListener("pointerdown", startSwipeDecisionDrag);
card.addEventListener("pointermove", moveSwipeDecisionDrag);
card.addEventListener("pointerup", finishSwipeDecisionDrag);
card.addEventListener("pointercancel", cancelSwipeDecisionDrag);
card.addEventListener("lostpointercapture", cancelSwipeDecisionDrag);
card.addEventListener("keydown", handleSwipeDecisionKeydown);

swipeReviewAction.addEventListener("click", () => {
  commitSwipeDecision("review");
});

swipeKnownAction.addEventListener("click", () => {
  commitSwipeDecision("known");
});

// ---------------------------------------------------------------------------
// Bridge for the hybrid AI coach (src/coach.js, bundled into ai.bundle.js).
// The coach only reads the current card and asks the app to record a
// decision; the study loop above does not depend on it.
// ---------------------------------------------------------------------------
function getBridgeCard() {
  if (stage.hidden || !definitionText) {
    return null;
  }

  return {
    term: currentConceptPrimaryTerm || currentConceptTerm,
    englishTerm: currentConceptTerm,
    secondaryTerm: currentConceptSecondaryTerm,
    definition: definitionText,
    language: currentDefinitionLanguage,
    standardId: currentStandardId,
    conceptId: currentStandardConceptId,
    standardName: currentStandardId ? getStandardDisplayName(currentStandardId, "") : ""
  };
}

function emitFlipCardsEvent(name, detail = {}) {
  try {
    window.dispatchEvent(new CustomEvent(`flipcards:${name}`, { detail }));
  } catch {
    // Events are best effort; the app works without listeners.
  }
}

window.FlipCardsBridge = Object.freeze({
  getLanguage: () => selectedLanguage,
  getCard: () => getBridgeCard(),
  canDecide: () => canSwipeCurrentCard(),
  getConcepts: () => {
    const standard = getStandardById(currentStandardId);
    const concepts = Array.isArray(standard?.concepts) ? standard.concepts : [];

    return concepts
      .map((concept) => ({
        id: concept.id,
        englishTerm: concept.term,
        term: getConceptDisplay(concept, selectedLanguage).primaryTerm,
        definition: getConceptDefinition(concept, selectedLanguage)
      }))
      .filter((concept) => concept.term && concept.definition);
  },
  markKnown: async () => {
    if (!canSwipeCurrentCard()) {
      return false;
    }
    await completeConceptFromSwipe();
    return true;
  },
  markReview: async () => {
    if (!canSwipeCurrentCard()) {
      return false;
    }
    await markConceptForReviewFromSwipe();
    return true;
  }
});

window.addEventListener("flipai:ready", () => {
  detectAiBackend();
});

applyLanguageCopy();
renderHome();
showHome();
applyAiBackendAvailability();
loadStandards();
detectAiBackend();

// Register the offline service worker on secure origins only (skipped on file://).
// Local development skips it (add ?sw to test offline) so edits are never
// hidden behind a stale cache.
const isLocalDevelopmentHost = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  if (isLocalDevelopmentHost && !new URLSearchParams(location.search).has("sw")) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => registrations.forEach((registration) => registration.unregister()))
      .catch(() => {});
  } else {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    });
  }
}
