// =========================================================
// FIREBASE CONFIG — fill this in with YOUR project's values.
// ---------------------------------------------------------
// GitHub Pages only serves static files, so results can't be
// stored on GitHub itself. Firebase's free tier gives you a
// database + login that works from any static site, so that's
// what storage.js is built against.
//
// Where to get these values: Firebase console -> Project
// settings (gear icon) -> "Your apps" -> the web app -> SDK
// setup and configuration -> "Config".
//
// This object is meant to be public — it is NOT a secret.
// Firebase security is enforced by the Firestore rules you set
// in the console, not by hiding this file. See SETUP.md for
// the full step-by-step (project creation, enabling Firestore,
// enabling Email/Password sign-in, creating the one teacher
// login, pasting the security rules, and turning on the
// 10-day auto-delete).
// =========================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDBTCdISbz8GVNi7DVi9NLUh8Mm5DxaSPw",
  authDomain: "concepts-college-quiz-portal.firebaseapp.com",
  projectId: "concepts-college-quiz-portal",
  storageBucket: "concepts-college-quiz-portal.firebasestorage.app",
  messagingSenderId: "420438033207",
  appId: "1:420438033207:web:c253693d196f7762dc50b2"
};
