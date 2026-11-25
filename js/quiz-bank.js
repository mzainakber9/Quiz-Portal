// =========================================================
// QUIZ BANK REGISTRY  (lazy-loading version)
// ---------------------------------------------------------
// js/manifest.js lists every chapter / paper (class, subject,
// label, order, file path) WITHOUT its questions. The dropdowns
// are built from that list, and a data file is downloaded only
// when a student actually starts that chapter / paper.
//
// Each data file (in /data/<subject>/<class>/...) still calls
// QuizBank.register({...}) when it loads, exactly as before.
// register() attaches the questions to the matching manifest
// entry. (A data file that is NOT in the manifest but is loaded
// with a normal <script> tag still works — it is added as-is.)
//
// Entry shape:
// {
//   class:   "9th" | "10th" | "11th" | "12th",
//   subject: "Math" | "Physics" | "Chemistry" | "Biology" |
//            "Computer" | "Islamiyat" | "PakStudy" | "English" | "Urdu",
//   type:    "chapter" | "pastpaper" | "set",
//   id:      unique string within (class, subject), e.g. "ch1" or "2024",
//   label:   text shown in the dropdown, e.g. "Chapter 1: Real Numbers"
//   order:   number used to sort the dropdown (lower first)
//   file:    path of the data file (manifest only)
//   questions: function returning the array of question objects
// }
// =========================================================

const QuizBank = (function () {
  const bank = [];
  const pending = {};   // file -> Promise while a download is in flight

  // Order subjects appear in the dropdown (unknown ones go last, A-Z).
  const SUBJECT_ORDER = ["Math", "Physics", "Chemistry", "Biology",
                         "Computer", "Islamiyat", "PakStudy", "English", "Urdu"];

  function findEntry(className, subject, id) {
    return bank.find(
      e => e.class === className && e.subject === subject && e.id === id
    );
  }

  // Called by js/manifest.js: lists the quizzes without their questions.
  function declare(list) {
    list.forEach(meta => {
      if (!meta.class || !meta.subject || !meta.id || !meta.file) {
        console.error("QuizBank.declare: incomplete manifest entry", meta);
        return;
      }
      if (findEntry(meta.class, meta.subject, meta.id)) {
        console.error("QuizBank.declare: duplicate manifest entry", meta);
        return;
      }
      bank.push(Object.assign({}, meta, { questions: null, loaded: false }));
    });
  }

  // Called by each data file when it loads.
  function register(entry) {
    if (!entry.class || !entry.subject || !entry.id || !entry.questions) {
      console.error("QuizBank.register: incomplete entry", entry);
      return;
    }
    const existing = findEntry(entry.class, entry.subject, entry.id);
    if (existing) {
      existing.questions = entry.questions;
      existing.loaded = true;
      return;
    }
    entry.loaded = true;
    bank.push(entry);
  }

  // Downloads the entry's data file if it has not been loaded yet.
  // Resolves with the entry; rejects if the file cannot be loaded
  // (e.g. no internet), and a later call will simply try again.
  function load(entry) {
    if (!entry) return Promise.reject(new Error("No such quiz"));
    if (entry.loaded) return Promise.resolve(entry);
    if (!entry.file) return Promise.reject(new Error("Quiz has no file"));
    if (pending[entry.file]) return pending[entry.file];

    pending[entry.file] = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = entry.file;
      script.onload = () => {
        delete pending[entry.file];
        if (entry.loaded) resolve(entry);
        else reject(new Error("Data file loaded but did not register: " + entry.file));
        script.remove();
      };
      script.onerror = () => {
        delete pending[entry.file];
        script.remove();
        reject(new Error("Could not download " + entry.file));
      };
      document.head.appendChild(script);
    });
    return pending[entry.file];
  }

  function getSubjects(className) {
    const subjects = [...new Set(
      bank.filter(e => e.class === className).map(e => e.subject)
    )];
    const rank = s => {
      const i = SUBJECT_ORDER.indexOf(s);
      return i === -1 ? SUBJECT_ORDER.length : i;
    };
    return subjects.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b));
  }

  function getEntries(className, subject) {
    return bank
      .filter(e => e.class === className && e.subject === subject)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  function getEntry(className, subject, id) {
    return findEntry(className, subject, id);
  }

  return { declare, register, load, getSubjects, getEntries, getEntry };
})();
