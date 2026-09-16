// =========================================================
// RESULT STORE
// ---------------------------------------------------------
// Wraps Firebase so the rest of the app never touches
// firebase.* directly. If FIREBASE_CONFIG hasn't been filled
// in yet, storage quietly disables itself instead of crashing
// the quiz for students.
// =========================================================

const ResultStore = (function () {
  let db = null;
  let auth = null;
  let ready = false;

  function init() {
    try {
      if (typeof firebase === "undefined") {
        console.warn("Firebase SDK not loaded — results will not be saved.");
        return;
      }
      if (!FIREBASE_CONFIG || FIREBASE_CONFIG.apiKey.startsWith("PASTE_")) {
        console.warn("FIREBASE_CONFIG not filled in yet — results will not be saved.");
        return;
      }
      firebase.initializeApp(FIREBASE_CONFIG);
      db = firebase.firestore();
      auth = firebase.auth();
      ready = true;
    } catch (err) {
      console.error("ResultStore.init failed:", err);
    }
  }

  // Saves one finished attempt. Called whenever a student
  // submits — whether that's at question 10, 20, ... or at
  // the very end.
  async function saveResult(result) {
    if (!ready) return false;
    const submittedAt = new Date();
    const expireAt = new Date(submittedAt.getTime() + 10 * 24 * 60 * 60 * 1000); // +10 days
    try {
      await db.collection("results").add({
        ...result,
        submittedAt: firebase.firestore.Timestamp.fromDate(submittedAt),
        expireAt: firebase.firestore.Timestamp.fromDate(expireAt)
      });
      return true;
    } catch (err) {
      console.error("Could not save result:", err);
      return false;
    }
  }

  // One shared teacher/operator login (email+password account
  // you create once in the Firebase console — see SETUP.md).
  function teacherLogin(email, password) {
    if (!ready) return Promise.reject(new Error("Storage is not set up yet."));
    return auth.signInWithEmailAndPassword(email, password);
  }

  function teacherLogout() {
    if (ready) auth.signOut();
  }

  function onAuthChange(callback) {
    if (ready) auth.onAuthStateChanged(callback);
  }

  // Firestore's TTL policy (set up once in the console) does
  // the real deleting in the background. This filter just
  // hides anything already past its expiry from the table in
  // case the background sweep hasn't run yet.
  async function fetchAllResults() {
    if (!ready) return [];
    const snap = await db.collection("results").orderBy("submittedAt", "desc").get();
    const now = Date.now();

    const fresh = [];
    const expiredDocs = [];

    snap.docs.forEach(d => {
      const data = { id: d.id, ...d.data() };
      if (data.expireAt && data.expireAt.toMillis() <= now) {
        expiredDocs.push(d.ref);
      } else {
        fresh.push(data);
      }
    });

    // Clean up anything past its 10-day mark while we're here.
    if (expiredDocs.length > 0) {
      await Promise.all(expiredDocs.map(ref => ref.delete().catch(() => {})));
    }

    return fresh;
  }

  return {
    init,
    isReady: () => ready,
    saveResult,
    teacherLogin,
    teacherLogout,
    onAuthChange,
    fetchAllResults
  };
})();
