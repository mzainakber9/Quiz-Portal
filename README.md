# Concepts College of Sciences — Quiz Portal

## Folder structure
```
index.html            redirect stub only — GitHub Pages needs this exact
                       name at the root; it forwards to quiz-portal.html
quiz-portal.html       the real page (was index.html)
css/style.css
js/quiz-bank.js      registry — data files self-register into this
js/students.js       roster used for student login
js/firebase-config.js  <- fill in your Firebase project keys (see SETUP.md)
js/storage.js         saves results to Firebase, teacher login/read
js/quiz-setting.js    all quiz logic (login, quiz flow, results, dashboard) — was app.js
data/
  math/               chapter-wise files
  physics/            past-paper files
  chemistry/          past-paper files
  biology/            (add files as content is ready)
  computer/           (add files as content is ready)
  islamiyat/          (add files as content is ready)
  pakstudy/           (add files as content is ready)
  english/            existing sets, unchanged for now
  TEMPLATE-copy-this-file.js   copy this to add a new chapter/paper
assets/logo.jpg
SETUP.md              one-time Firebase setup for result storage
```

## File naming convention
```
chapters:     {class}-{subject}-ch{no}-{slug}.js     e.g. 10th-math-ch1-real-numbers.js
past papers:  {class}-{subject}-pastpaper-{year}.js  e.g. 9th-physics-pastpaper-2024.js
```
Each file's function/registration id follows the same pattern, so a
filename tells you exactly what's inside it — no more guessing what
"Set1" or "Set2" meant.

## Adding new content
1. Copy `data/TEMPLATE-copy-this-file.js` into the right subject folder.
2. Fill in class / subject / type / id / label / questions.
3. Add one `<script>` tag for it in `quiz-portal.html`.

That's it — you never need to touch `js/quiz-setting.js` or
`js/quiz-bank.js` to add a chapter, a past paper, or even a brand-new
subject/class combination. The subject and chapter/paper dropdowns
are built automatically from whatever is registered for the logged-in
student's class.

## Math notation (KaTeX)
Class 11 Math is written with inline LaTeX, e.g. `\\(i^{5}\\)`, and
rendered in the browser by **KaTeX** (loaded from a CDN in
`quiz-portal.html`). If you add more math content, wrap any math in
`\(...\)` (inline) or `\[...\]` (its own line) and it'll render
automatically — no extra setup needed per file.

## Class 11 Math — chapter-wise (added)
All 9 chapters, each a separate registry entry so the dropdown shows
one chapter at a time (never combined):
```
data/math/11th-math-ch1-complex-numbers.js
data/math/11th-math-ch2-matrices-and-determinants.js
data/math/11th-math-ch3-vectors.js
data/math/11th-math-ch4-sequences-and-series.js
data/math/11th-math-ch5-polynomials.js
data/math/11th-math-ch6-permutation-and-combination.js
data/math/11th-math-ch7-mathematical-induction-and-binomial-theorem.js
data/math/11th-math-ch8-fundamentals-of-trigonometry.js
data/math/11th-math-ch9-trigonometric-functions.js
```
Each includes both the chapter's base MCQs and its "stimulus" (table/
scenario-based) MCQs — the stimulus is shown above the question it
belongs to. These files don't include a `reason` (explanation) per
question — the app shows just the correct answer for a wrong response
in that case, which is fine, `reason` is optional throughout.

## What changed from the old version
- **Dynamic subjects/categories** — a subject only shows up once a
  file for it exists for that class, so 11th/12th (or any
  under-filled class) never dead-ends on "Quiz not found" anymore.
- **Chapters for Math, past papers for Physics/Chemistry/Biology/
  Computer/Islamiyat/Pak Study** (folders are ready; add files as you
  produce the content — English keeps its existing Set1/2/3 style for
  now).
- **Submit-every-10 checkpoint** — a "Submit & See Result" button
  appears after question 10, 20, 30… and after the final question of
  a chapter/paper. A student can end the attempt there; if they keep
  going, the button hides again until the next checkpoint.
- **Scoped results** — when a student submits early, the result only
  covers questions up to that point (answered + skipped), not the
  whole chapter/paper.
- **Skip support** — a student can move to the next question without
  selecting an option; it's recorded as "skipped" and counted in the
  result breakdown.
- **Result storage + teacher dashboard** — every submitted attempt is
  saved (via Firebase — see `SETUP.md`) and viewable on the
  "Teacher / Operator Login" page with one shared password. Results
  are automatically deleted 10 days after submission.
