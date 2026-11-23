// =========================================================
// HOW TO ADD A NEW CHAPTER OR PAST PAPER
// ---------------------------------------------------------
// 1. Copy this file into the right subject folder, e.g.
//      data/biology/9th/9th-biology-ch1-introduction.js
//      data/physics/9th/9th-physics-pastpaper-2023.js
//
// 2. Naming pattern:
//      chapters:    {class}-{subject}-ch{no}-{slug}.js
//      past papers: {class}-{subject}-pastpaper-{year}.js
//
// 3. Fill in class / subject / type / id / label / order
//    below, and replace the sample questions with real ones.
//
// 4. Update the manifest so the portal knows the file exists:
//      run   node tools/build-manifest.js   in the project folder
//    (or add one line by hand to js/manifest.js, copying a neighbour).
//    Nothing else needs editing — the quiz appears automatically in the
//    subject/category dropdowns for the right class, and this file is only
//    downloaded when a student starts it.
// =========================================================

QuizBank.register({
  class: "9th",                 // "9th" | "10th" | "11th" | "12th"
  subject: "Biology",           // must match how you want it grouped
  type: "chapter",              // "chapter" or "pastpaper"
  id: "ch1",                    // unique within this class+subject
  label: "Chapter 1: Introduction to Biology",
  order: 1,                     // controls dropdown order
  questions: function () {
    return [
      {
        q: "Sample question — replace me",
        options: ["Option A", "Option B", "Option C", "Option D"],
        ans: "Option A",
        reason: "Explanation shown if the student answers wrong."
      }
    ];
  }
});
