# AGENTS.md - FlipCards Hybrid AI

Notes for coding agents working in this repository.

## What this is

FlipCards is a vanilla-JS flashcard PWA (no framework) for the PMBOK® Guide 8 glossary in
nine languages. The hybrid AI coach lives in `src/` and is bundled with esbuild into
`ai.bundle.js`, which loads as an ES module after the classic `script.js`.

- `index.html`, `styles.css`, `script.js`: the app (state, study flow, cards, profile).
- `data/standards/`: the PMBOK 8 dataset. Regenerate `bundle.js` with `npm run build:standards`
  whenever a JSON file changes, so the app still loads from `file://`.
- `src/flip-ai.js`: `window.FlipAI`, the hybrid engine (Firebase AI Logic, App Check,
  Remote Config, routing, fallback, ledger).
- `src/coach.js`: the coach sheet and the Hybrid AI profile panel.
- `src/coach-strings.js`: interface copy (English and Spanish; other languages fall back to English).
- `scripts/build-dist.mjs`: copies the app into `dist/` and writes `dist/firebase-config.js`.

`script.js` talks to the coach only through `window.FlipCardsBridge` and the
`flipcards:card`, `flipcards:study` and `flipcards:language` events. Keep it that way.

## Commands

```sh
npm install
npm run build:ai   # bundle src/ into ai.bundle.js
npm test           # node --test tests/*.test.mjs
npm run build      # standards bundle + AI bundle + dist/
npm run dev        # http://127.0.0.1:4173
```

Do not deploy if `npm test` or `npm run build` fails.

## Secrets

- `firebase-config.js` is git-ignored. It may hold a local App Check debug token. Never commit
  it, print it or paste it into docs, issues or the submission.
- `scripts/build-dist.mjs` always removes `appCheckDebugToken` from the generated config.
- Production builds read the Firebase web config from environment variables
  (`FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_STORAGE_BUCKET`,
  `FIREBASE_MESSAGING_SENDER_ID`, `FIREBASE_APP_ID`, `RECAPTCHA_ENTERPRISE_SITE_KEY`).
- A test scans every tracked file for Google API keys, OpenAI-style keys and debug tokens.

## Editing rules

- AI output is untrusted text: insert it with `textContent`, never `innerHTML`.
- The same JSON schema must drive `responseConstraint` (on-device) and `responseSchema` (cloud).
- On-device prompts ignore `systemInstruction`; put the system prompt in `initialPrompts`.
- The service worker is disabled on localhost so edits show up; add `?sw` to test it.
- Check mobile and desktop widths after UI changes.
