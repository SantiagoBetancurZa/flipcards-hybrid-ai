// Copy this file to firebase-config.js (git-ignored) and fill in your own Firebase web app.
// Firebase web config values identify your project; they are not secrets, but keep
// firebase-config.js out of git anyway so nobody reuses your App Check debug token.
window.FLIPCARDS_FIREBASE = {
  config: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },
  // reCAPTCHA Enterprise site key registered for App Check (used on your deployed domain).
  recaptchaEnterpriseSiteKey: "",
  // Optional, localhost only: an App Check debug token you registered in the Firebase console.
  // scripts/build-dist.mjs strips it from every build. Never commit a real token.
  appCheckDebugToken: ""
};
