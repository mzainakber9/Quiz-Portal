# Concepts College of Sciences — Quiz Portal

## Folder structure
```
index.html            redirect stub only — GitHub Pages needs this exact
                       name at the root; it forwards to quiz-portal.html
quiz-portal.html       the real page (was index.html)
css/style.css
js/quiz-bank.js      registry — loads question files on demand
js/manifest.js       list of every chapter/paper (no questions) — generated, see "Adding new content"
tools/build-manifest.js   regenerates js/manifest.js from /data (run with Node)
js/students.js       roster used for student login
js/firebase-config.js  <- fill in your Firebase project keys (see SETUP.md)
js/storage.js         saves results to Firebase, teacher login/read
js/sounds.js          sound effects (synthesized in the browser, no audio files)
js/quiz-setting.js    all quiz logic (login, quiz flow, results, dashboard) — was app.js
data/<subject>/<class>/<files>
  math/
    9th/ 10th/ 11th/ 12th/      chapter-wise files
  physics/
    9th/                        past-paper files
    11th/                       chapter-wise files
  chemistry/10th/               past-paper files
  english/10th/                 sets
  computer/
    11th/                       chapter-wise files (Units 1 to 8, all added)
  biology/ islamiyat/ pakstudy/   (add class folders and files as content is ready)
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

## Teacher dashboard
* Filter by class (All / 9th / 10th / 11th / 12th).
* **Export to Excel**: all classes gives one workbook with a sheet per class; a single class gives just that class. If the Excel library cannot load, a CSV is downloaded instead.
* Each result records how long the quiz took. Results finished in under 5 seconds per question are marked "Too fast". This only catches careless cheating, not a determined one.
* All times are shown in Pakistan time (PKT).

## Adding new content
1. Copy `data/TEMPLATE-copy-this-file.js` into the right subject and class folder, e.g. `data/biology/9th/`.
2. Fill in class / subject / type / id / label / questions.
3. Update the manifest, either way:
   * run `node tools/build-manifest.js` in the project folder (it reads every
     file in `data/` and rewrites `js/manifest.js`), **or**
   * by hand: add one line to `js/manifest.js`, copying a neighbouring line and
     changing class / subject / type / id / label / order / file.

You never need to touch `quiz-portal.html`, `js/quiz-setting.js` or
`js/quiz-bank.js` to add a chapter, a past paper, or even a brand-new
subject/class combination. The dropdowns are built from the manifest for the
logged-in student's class.

## How loading works (lazy loading)
The page loads only the small manifest (~11 KB). A chapter's question file is
downloaded when a student presses **Start Quiz** (or **Resume**) for it, so a
student downloads roughly 55 KB instead of all 3.3 MB of questions.
If the download fails (e.g. no internet) the student sees a message and can retry.

## Resume / leave a quiz
* After every question the attempt is saved in the student's browser
  (localStorage), one slot per student on that device.
* If the tab closes, the page reloads or the connection drops, the student logs
  in again and sees **"You have an unfinished quiz" → Resume**. The same
  questions come back in the same order, from the next unanswered question.
* The timer follows the clock, so it **keeps running while the student is away**.
  If time runs out while away, **Resume** submits the result for the questions
  answered so far. A saved attempt older than 24 hours is dropped.
* **Leave this quiz** (under the quiz buttons) offers: Keep going / Save & leave
  (resume later) / Abandon (nothing is saved or sent to the teacher).
* Starting a different quiz while one is saved asks first, then replaces it.
* If you edit a chapter's questions (add/remove) while a student has it saved,
  that saved attempt cannot be resumed and is discarded.
* Saved progress lives only in that one browser. It does not move between
  devices, and it does not appear on the teacher dashboard.

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
data/math/11th/11th-math-ch1-complex-numbers.js
data/math/11th/11th-math-ch2-matrices-and-determinants.js
data/math/11th/11th-math-ch3-vectors.js
data/math/11th/11th-math-ch4-sequences-and-series.js
data/math/11th/11th-math-ch5-polynomials.js
data/math/11th/11th-math-ch6-permutation-and-combination.js
data/math/11th/11th-math-ch7-mathematical-induction-and-binomial-theorem.js
data/math/11th/11th-math-ch8-fundamentals-of-trigonometry.js
data/math/11th/11th-math-ch9-trigonometric-functions.js
```
Each includes both the chapter's base MCQs and its "stimulus" (table/
scenario-based) MCQs — the stimulus is shown above the question it
belongs to. These files don't include a `reason` (explanation) per
question — the app shows just the correct answer for a wrong response
in that case, which is fine, `reason` is optional throughout.

## Class 10 Math — chapter-wise (added)
All 12 chapters, one registry entry each (100 base MCQs + 12 stimulus-based = 112 per chapter):
```
data/math/10th/10th-math-ch1-complex-numbers.js
data/math/10th/10th-math-ch2-quadratic-equations.js
data/math/10th/10th-math-ch3-matrices-and-determinants.js
data/math/10th/10th-math-ch4-linear-and-quadratic-inequalities.js
data/math/10th/10th-math-ch5-algebraic-fractions.js
data/math/10th/10th-math-ch6-functions-and-graphs.js
data/math/10th/10th-math-ch7-vectors-in-plane.js
data/math/10th/10th-math-ch8-application-of-trigonometry.js
data/math/10th/10th-math-ch9-chord-and-arcs-of-a-circle.js
data/math/10th/10th-math-ch10-tangents-and-angles-of-a-circle.js
data/math/10th/10th-math-ch11-practical-geometry-of-circles.js
data/math/10th/10th-math-ch12-basic-statistics.js
```
These replace the old sample `10th-math-ch1-real-numbers.js`. Every question
has an explanation, and every answer was re-solved. Because question and explanation text is inserted as HTML, a `<`
inside math is written as `\lt` (KaTeX renders it as `<`). Use the same rule
in any new file, otherwise text like `a<b` can break the page.

## Class 11 Physics — chapter-wise (added)
Chapters 1 to 14, matching the 14 units of the FBISE HSSC-I Physics (Grade XI) framework.
One registry entry each, subject "Physics". Every chapter now holds at least 100 MCQs:
```
file (data/physics/11th/...)                     chapter MCQs + SLO-based + paper = total
11th-physics-ch1-measurements.js                  30 + 67 +  8 = 105
11th-physics-ch2-vectors.js                       28 + 74 +  2 = 104
11th-physics-ch3-translatory-motion.js            63 + 36 +  6 = 105
11th-physics-ch4-angular-measures-and-radians.js  36 + 62 +  7 = 105
11th-physics-ch5-work-and-energy.js               67 + 35 +  3 = 105
11th-physics-ch6-archimedes-principle-and-flotation.js 36 + 66 + 4 = 106
11th-physics-ch7-physics-of-solids.js             40 + 60 +  5 = 105
11th-physics-ch8-heat-and-thermodynamics.js       39 + 60 +  6 = 105
11th-physics-ch9-waves.js                         30 + 68 +  7 = 105
11th-physics-ch10-electric-field.js               25 + 71 +  5 = 101
11th-physics-ch11-current-electricity.js          25 + 76 +  7 = 108
11th-physics-ch12-magnetic-fields.js              35 + 66 +  4 = 105
11th-physics-ch13-inertial-and-non-inertial-frames.js 30 + 68 + 6 = 104
11th-physics-ch14-nuclear-processes-and-radiations.js 60 + 39 + 10 = 109
```
1472 MCQs in total. File names and ids are unchanged; only the chapter labels were updated to the
official unit names. Each file has three sections, marked by comments: your converted chapter MCQs,
the new SLO-based MCQs, and the FBISE model-paper MCQs.
- **SLO-based MCQs (new, 853 written, 846 kept):** written to the summative SLOs of the framework, with
  straight, scenario-based (a stimulus plus 3-4 linked questions; the stimulus is repeated inside each
  question because the portal shuffles questions) and diagram questions (inline SVG graphs, circuits,
  force diagrams, wave pictures). Each answer was solved by the author and then re-solved blind by an
  independent solver with shuffled options; every disagreement and flag was reviewed by hand. The few
  flagged diagrams and wordings were fixed, and 5 questions (ferrofluid and relativistic-mass items,
  outside the Grade XI syllabus) were dropped.
- **FBISE model-paper MCQs (80):** all 80 MCQs of Section A, placed by chapter, with clean redrawn
  diagrams for the projectile, Ferris wheel, duct, police-car chase, lamp circuits, quark/gluon scenario,
  F-x graph and P-V graph. Small wording changes: Q24 (larger slit) now compares with a narrow slit and
  option D was changed from "negligible" to "unchanged"; Q38 says "positively charged particle";
  Q67 says "pressure energy" instead of "P.E." (the duct is horizontal, so gravitational P.E. does not change).
- **Notes on the paper:** the Ferris-wheel scenario (Q61-64) gives r = 1 m and a 20 s period, but Q64
  (alpha = 1.0 rad/s², giving 10 rad/s after 10 s) does not match the operating speed 2π/20 rad/s; the answer
  is correct for the question as asked. The PDF has no SLO text for E-10 to E-43 (Electricity and
  Electromagnetism), so Ch11 and Ch12 use the standard content for those units.
Text is plain Unicode (no LaTeX). Because question and explanation text is inserted as HTML, `<` is
written `&lt;` in the question text (options are not affected).
Corrections made while converting:
- Ch2 Q11 (direction of 4i − 3j): option text changed from 323.17° to 323.13°
  (tan⁻¹(3/4) = 36.87°, so 360° − 36.87° = 323.13°); it is still the correct option.
- Ch3 Q2, Q6, Q45 use g ≈ 10 or 9.81 m/s² in the source answer; the explanation
  says so and the answer is the closest option.
- Ch4, Ch6, Ch7, Ch8 were converted from the supplied Word files. All 151 answers were
  re-checked and none needed changing. Ch4 conversion explanations now show the working.
- Ch6 Q31: option and answer unchanged; the explanation now says the buoyant force stops
  increasing once the object is fully submerged.
- Ch8 Q19: stem reworded from "Thermal equilibrium is impossible when:" to "Two objects are NOT
  in thermal equilibrium when:" (same answer); the old wording was inaccurate.
- Ch4 covers only the angular-measure/radian topic and Ch8 only thermal equilibrium, as in the
  source files. Ch6 covers Archimedes' principle and flotation.
- Ch9–Ch14 were converted from the supplied Word files (205 MCQs). Errors found and fixed (all in Ch14):
  - Q5 (¹⁴N + ⁴He → ¹⁷O + X): the source said neutron, which is wrong. Charge 7 + 2 = 9 and O has 8,
    so X has charge +1 and nucleon number 1: it is a proton. Answer changed to Proton.
  - Q4: the stem said conservation of charge keeps the number of protons unchanged, which is
    false (beta decay changes it). Stem now asks about total electric charge; the answer is unchanged.
  - Q19: options A, B and C all balanced. B and C were edited (¹³C₆ and ¹³N₇ products) so only A balances.
  - Second set Q26: option "Neutron radiation" was also neutral, so it was replaced by "Positron radiation".
  - Second set Q28: "changes into an electron after losing energy" is meaningless; stem now reads
    "Which radioactive emission consists of electrons?" (same answer).
  - Second set Q17 and Q22: answers unchanged, explanations made more precise (tritium; mass ratio ≈ 7300).
- Ch14 combines two SLO sets (30 + 30) in one file. Ch11 text had parentheses around single symbols,
  e.g. (n), (I = Anvq); these were removed. Ch9 covers wave intensity and amplitude, Ch8 only thermal
  equilibrium, and Ch13 only frames of reference, as in the source files.

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

## Sound effects
`js/sounds.js` creates every sound with the browser's Web Audio API, so there
are no audio files to host. A speaker button (top-right) mutes/unmutes and
the choice is remembered on that device.

| Moment | Sound |
|---|---|
| Quiz starts | impact + rising shimmer |
| Choosing an option | snappy pop |
| Correct answer | game-show ding-ding-ding chime |
| Wrong answer | cartoon bonk + slide-whistle fall + "womp womp" |
| Skipping a question | whoosh |
| While the quiz runs | continuous KBC-style tension pulse (heartbeat + bass + pings), loud; dips briefly under answer sounds |
| Timer under 60s / 20s / 10s | pulse gets faster and more intense |
| Time runs out | alarm beeps, then the result sound |
| Result 50% or more | brass fanfare + applause |
| Result under 50% | sad trombone |
| Login success / failure | power-up ding / buzz |

Loudness: `MASTER_VOLUME` (everything) and `TIMER_VOLUME` (the pulse) at the
top of `js/sounds.js`. To change a sound edit its entry in the `library`
object. The 50% pass line is in `concludeAttempt()` in `js/quiz-setting.js`.

## Look
Selected answer = yellow (`.option.selected` in `css/style.css`).
"Submit & See Result" = orange (`.submitBtn`).

## Deleting results (teacher)
Each row on the teacher dashboard has a red **Delete** button. It asks for
confirmation, then removes that one result from Firestore. This works with the
security rules in SETUP.md (`allow delete` for the logged-in teacher), so no
rules change is needed. Results still auto-expire after 10 days.

## Class 11 Computer Science — Units 1 to 4 and 7 (added)
Based on the NBF Grade 11 textbook and the FBISE Assessment Framework / model paper
(SLOs CS-11-A-01 to A-04, B-01 to B-02, C-01 to C-07, D-01 to D-03 and G-01). 100 MCQs per unit (Unit 7 is a short unit: 75), every question with an explanation:
```
data/computer/11th/11th-computer-ch1-computer-systems.js                          Unit 1: Computer Systems
data/computer/11th/11th-computer-ch2-computational-thinking-and-algorithms.js     Unit 2: Computational Thinking & Algorithms
data/computer/11th/11th-computer-ch3-programming-fundamentals.js                  Unit 3: Programming Fundamentals
data/computer/11th/11th-computer-ch4-data-and-analysis.js                         Unit 4: Data and Analysis
data/computer/11th/11th-computer-ch7-digital-literacy.js                          Unit 7: Digital Literacy (75 MCQs)
```
* **Unit 1:** data representation and signals (7), logic gates / Boolean algebra / K-maps (30),
  SDLC, testing and deployment (20), network topologies (14), cloud computing (12), cybersecurity and encryption (17).
* **Unit 2:** computational thinking (13), artifacts (5), algorithms / flowcharts / pseudocode (24), planning (8),
  tracing and trace tables (10), evaluation (8), sorting (16), searching (16).
* **Unit 3:** programs, compiler/interpreter (8), Python and IDEs (7), Turtle graphics (11), libraries (7), variables (8),
  input/output (7), operators (11), conditionals (8), loops (9), lists (9), functions (8), debugging (7).
  Code-output questions have their answers computed by running the code.
* **Unit 4:** statistical modeling and use cases (9), case-study roadmap (8), modeling techniques (14), building a model in
  Python (6), experimental design flow (11), design principles (10), correlation and causation (8),
  population/sample/parameter/statistic (10), data collection (10), A/B testing (4), summary statistics and visualization (10).
* **Unit 7:** digital literacy and research questions (6), method vs strategy (5), qualitative interviews: nature (8),
  the ten interview steps (14), interview case study (3), simulations (7), prototypes (8), surveys and Google Forms (9),
  data presentation: infographics, presentations, reports (10), advanced web search (5: quotes, minus, site:, filetype:).
* Style follows the board's MCQs: one idea per question, short options, scenario questions, same-family distractors,
  and the model-paper mix of about 30% Knowledge, 50% Understanding and 20% Application.
* About 40 questions per unit include a diagram (inline SVG: gates, circuits, K-maps, topologies, flowcharts,
  arrays for sorting/searching, encryption flow) or a table / pseudocode block with a trace table.
* The generator that produced them is in `tools/mcq-builder/` (lib.py plus u1_* … u8_* question files and
  build_uN.py; run e.g. `cd tools/mcq-builder && python3 build_u3.py --write`, then `node tools/build-manifest.js`) — not loaded by the website.

## Class 11 Computer Science — Units 5 & 6 (added)
Based on the NBF Grade 11 textbook (Unit 5 pp.155-168, Unit 6 pp.169-188) and the FBISE Assessment Framework
(SLOs CS-11-E-01, E-02 and CS-11-F-01, F-02). 100 MCQs per unit, every question with an explanation:
```
data/computer/11th/11th-computer-ch5-applications-of-computer-science.js           Unit 5: Applications of Computer Science
data/computer/11th/11th-computer-ch6-impacts-of-computing.js                       Unit 6: Impacts of Computing
```
* **Unit 5:** IoT intro (8), wireless sensor networks and sensor types (13), cloud deployment models (15), big data
  analytics (6), IoT protocols (4), embedded systems (7), blockchain intro and enabling technologies (9), blockchain
  networks (11), transactions (5), IoT + blockchain integration (4), AI stakeholders, impacts and conflicts (18).
* **Unit 6:** information (4), primary/secondary/tertiary and print/digital/human sources (14), safe use (8), bias in data (10),
  reliable (9) and unreliable (7) information, data searches (3), human vs computer verification tasks (9), computing and
  connectivity (6), environment (8), culture (3), people (4), assistive technologies (6), digital divide (4), Wi-Fi/Bluetooth/4G/5G (5).
* Mix: Unit 5 = 32 K / 52 U / 16 A; Unit 6 = 31 K / 51 U / 18 A. Diagrams or tables: 27 (Unit 5), 25 (Unit 6).
  New inline-SVG helpers in `tools/mcq-builder/lib.py`: IoT flow, cloud models, block chain (with a tampered block),
  blockchain networks, centralized vs decentralized, embedded system, source types, sampling bias, digital divide.
* Scope: book first, only summative SLOs. Cloud service models (SaaS/PaaS/IaaS) and scaling are in Unit 1, not repeated here.
  Consortium cloud and hybrid blockchain (used in the model paper) appear only as distractors. The book names the
  fourth blockchain network "permissioned"; the questions follow the book.
* Regenerate: `cd tools/mcq-builder && python3 build_u5.py --write && python3 build_u6.py --write`, then `node tools/build-manifest.js`.
  Sources: `u5_a.py`, `u5_b.py`, `fix_u5.py` and `u6_a.py`, `u6_b.py`, `fix_u6.py`.

## Class 11 Computer Science — Unit 8 (added)
Based on the NBF Grade 11 textbook (Unit 8 "Entrepreneurship in Digital Age", pp.204-217) and the SLO EN-11-H-01
(create, test and iterate a prototype for a business idea). 100 MCQs, every question with an explanation:
```
data/computer/11th/11th-computer-ch8-entrepreneurship-in-digital-age.js            Unit 8: Entrepreneurship in Digital Age
```
* Sections: product vs service and importance (10), prototype types (14), importance of prototyping (11), tools and
  materials (8), low-fidelity prototypes (7), iterative design (8), user testing (7), analysing test results (7), MVP (10),
  digital-entrepreneurship basics from the SLO/model paper (3), company examples and lessons (7), Pakistani start-ups (4),
  Neuro-Mat case study (4).
* Mix: 33 K / 51 U / 16 A. Diagrams or tables: 26 (8 SVG, 18 tables). New SVG helpers in `tools/mcq-builder/lib.py`:
  fidelity spectrum, build-test-analyse-iterate loop, alpha/beta/release, MVP core-vs-postponed, bar chart, Neuro-Mat iterations.
* Book inconsistency avoided: paper prototypes are "medium-fidelity" in 8.2.1 but listed under low-fidelity in 8.3.2, so no
  question depends on that. Neuro-Mat numbers used: smoke test 8 / 14 / 30 (Fig 8.10) and the four iterations (Fig 8.13).
* The ERQ topics "forces driving entrepreneurship" and "role of small business" are not in the chapter pages, so they are not tested.
* Regenerate: `cd tools/mcq-builder && python3 build_u8.py --write`, then `node tools/build-manifest.js`.
  Sources: `u8_a.py`, `u8_b.py`, `fix_u8.py`.
