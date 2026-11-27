import { cp, mkdir, rm, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import vm from "node:vm";

const fromRoot = (path) => new URL(`../${path}`, import.meta.url);
const toDist = (path) => new URL(`../dist/${path}`, import.meta.url);

// Never publish editor/OS cruft or the runaway *.backup* snapshots that can
// pile up inside data/, audio/, and assets/.
const EXCLUDE_FROM_DIST = /(^|\/)\.DS_Store$|\.backup($|[-.])|\.tmp$|\.log$/i;
const copyFilter = (source) => !EXCLUDE_FROM_DIST.test(source);

const files = [
  "index.html",
  "privacy.html",
  "styles.css",
  "script.js",
  "ai.bundle.js",
  "sw.js",
  "manifest.json",
  "icon-192.png",
  "icon-512.png",
];

if (!existsSync(fromRoot("ai.bundle.js"))) {
  throw new Error("ai.bundle.js is missing: run `npm run build:ai` first.");
}

await rm(fromRoot("dist"), { recursive: true, force: true });
await mkdir(fromRoot("dist"), { recursive: true });

for (const file of files) {
  await cp(fromRoot(file), toDist(file));
}

await cp(fromRoot("data"), toDist("data"), { recursive: true, filter: copyFilter });
await cp(fromRoot("audio"), toDist("audio"), { recursive: true, filter: copyFilter });
await cp(fromRoot("assets"), toDist("assets"), { recursive: true, filter: copyFilter });

if (existsSync(fromRoot(".well-known"))) {
  await cp(fromRoot(".well-known"), toDist(".well-known"), { recursive: true, filter: copyFilter });
}

// Firebase web config for the deployed site. It is generated at build time
// (from environment variables on Vercel, or from the git-ignored local
// firebase-config.js) so no project config lives in the repository. The App
// Check debug token is local-only and is never published.
const fromEnvironment = () => {
  const env = process.env;
  if (!env.FIREBASE_API_KEY || !env.FIREBASE_APP_ID) {
    return null;
  }
  return {
    config: {
      apiKey: env.FIREBASE_API_KEY,
      authDomain: env.FIREBASE_AUTH_DOMAIN,
      projectId: env.FIREBASE_PROJECT_ID,
      storageBucket: env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
      appId: env.FIREBASE_APP_ID
    },
    recaptchaEnterpriseSiteKey: env.RECAPTCHA_ENTERPRISE_SITE_KEY || ""
  };
};

const fromLocalFile = async () => {
  if (!existsSync(fromRoot("firebase-config.js"))) {
    return null;
  }
  const sandbox = { window: {} };
  vm.runInNewContext(await readFile(fromRoot("firebase-config.js"), "utf8"), sandbox, { timeout: 1000 });
  return sandbox.window.FLIPCARDS_FIREBASE ?? null;
};

const firebaseSettings = fromEnvironment() ?? (await fromLocalFile());
if (firebaseSettings) {
  delete firebaseSettings.appCheckDebugToken;
}

await writeFile(
  toDist("firebase-config.js"),
  [
    "// Generated at build time. A Firebase web config identifies the project and is",
    "// public by design; AI calls are protected by Firebase App Check (reCAPTCHA Enterprise).",
    `window.FLIPCARDS_FIREBASE = ${JSON.stringify(firebaseSettings, null, 2)};`,
    ""
  ].join("\n")
);

console.log(`dist ready (${firebaseSettings ? "Firebase configured" : "no Firebase config: AI coach disabled"})`);
