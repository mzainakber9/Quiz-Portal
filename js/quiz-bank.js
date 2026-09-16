// =========================================================
// QUIZ BANK REGISTRY
// ---------------------------------------------------------
// Every data file (in /data/<subject>/...) calls
// QuizBank.register({...}) once, on load. Nothing else in
// the app needs to be edited when a new chapter or past
// paper is added — just create the file and add a <script>
// tag for it in index.html.
//
// Entry shape:
// {
//   class:   "9th" | "10th" | "11th" | "12th",
//   subject: "Math" | "Physics" | "Chemistry" | "Biology" |
//            "Computer" | "Islamiyat" | "PakStudy" | "English",
//   type:    "chapter" | "pastpaper",
//   id:      unique string within (class, subject), e.g. "ch1" or "2023",
//   label:   text shown in the dropdown, e.g. "Chapter 1: Real Numbers"
//   order:   number used to sort the dropdown (lower first)
//   questions: function returning the array of question objects
// }
// =========================================================

const QuizBank = (function () {
  const bank = [];

  function register(entry) {
    if (!entry.class || !entry.subject || !entry.id || !entry.questions) {
      console.error("QuizBank.register: incomplete entry", entry);
      return;
    }
    bank.push(entry);
  }

  function getSubjects(className) {
    const subjects = bank
      .filter(e => e.class === className)
      .map(e => e.subject);
    return [...new Set(subjects)];
  }

  function getEntries(className, subject) {
    return bank
      .filter(e => e.class === className && e.subject === subject)
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }

  function getEntry(className, subject, id) {
    return bank.find(
      e => e.class === className && e.subject === subject && e.id === id
    );
  }

  return { register, getSubjects, getEntries, getEntry };
})();
