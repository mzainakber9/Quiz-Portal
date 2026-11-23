// =========================================================
// STATE
// =========================================================
let shuffledQuiz = [];
let responses = [];      // 'correct' | 'wrong' | 'skipped', parallel to shuffledQuiz
let index = 0;
let score = 0;
let totalTime = 0;
let timer;
let quizStartMs = 0; // when the current attempt started (to record how long it took)
let endAtMs = 0;     // wall-clock moment the timer runs out (keeps counting while the tab is closed)
let uniqueQuestions = []; // de-duplicated questions of the chosen chapter, in file order
let orderIdx = [];        // this attempt's shuffled order, as indices into uniqueQuestions
let advanceTimeout = null; // pending auto-advance after a correct answer
let attemptFinished = false; // guards against saving/advancing twice

let studentName = "";
let studentRoll = "";
let studentClass = "";
let currentSubject = "";
let currentEntry = null; // the QuizBank entry currently being attempted

let reasonBox;

window.onload = () => {
  reasonBox = document.getElementById("reasonBox");
  ResultStore.init();
};

// Escapes text before it is placed into innerHTML (student names,
// answer strings, etc.) so nothing typed by a user can inject markup.
function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Renders any \(...\) or \[...\] LaTeX inside an element via KaTeX.
// Safe no-op if a question bank doesn't use math or KaTeX hasn't
// loaded (e.g. offline) — quiz still works, just shows raw text.
function renderMathIn(element) {
  if (typeof renderMathInElement === "undefined") return;
  try {
    renderMathInElement(element, {
      delimiters: [
        { left: "\\(", right: "\\)", display: false },
        { left: "\\[", right: "\\]", display: true }
      ],
      throwOnError: false
    });
  } catch (err) {
    console.warn("KaTeX render skipped:", err);
  }
}


// =========================================================
// LOGIN
// =========================================================
function login() {
  const classSelected = document.getElementById("classSelect").value;
  const roll = document.getElementById("roll").value.trim();
  const fname = document.getElementById("fname").value.trim().toLowerCase();
  const loginMsg = document.getElementById("loginMsg");

  if (!classSelected || !roll || !fname) {
    loginMsg.innerText = "Please fill all fields!";
    Sound.play("error");
    return;
  }

  const student = students.find(
    s =>
      s.class === classSelected &&
      s.roll === roll &&
      s.name.toLowerCase() === fname
  );

  if (!student) {
    loginMsg.innerText = "Invalid Roll Number, Name, or Class!";
    Sound.play("error");
    return;
  }

  Sound.play("login");

  studentName = student.name;
  studentRoll = student.roll;
  studentClass = student.class;

  document.getElementById("welcome").innerText =
    `Welcome, ${studentName.toUpperCase()} (${studentClass})`;

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("subjectBox").classList.remove("hidden");

  loadSubjectsForClass(studentClass);
  showResumeOffer();
}


// =========================================================
// LOAD SUBJECTS  (now driven entirely by what's registered —
// a subject only appears once a data file for it exists, so
// there's no more "Quiz not found" dead end)
// =========================================================
function loadSubjectsForClass(className) {
  const subjectSelect = document.getElementById("subjectSelect");
  subjectSelect.innerHTML = '<option value="">-- Select Subject --</option>';

  document.getElementById("categoryContainer").classList.add("hidden");

  QuizBank.getSubjects(className).forEach(subject => {
    const option = document.createElement("option");
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });

  if (QuizBank.getSubjects(className).length === 0) {
    subjectSelect.innerHTML =
      '<option value="">No quizzes uploaded yet for this class</option>';
  }
}


// =========================================================
// LOAD CATEGORIES (chapters / past papers) FOR THE CHOSEN SUBJECT
// =========================================================
function loadCategories() {
  const subject = document.getElementById("subjectSelect").value;
  currentSubject = subject;

  const categoryContainer = document.getElementById("categoryContainer");
  const categorySelect = document.getElementById("categorySelect");

  categorySelect.innerHTML = '<option value="">-- Select --</option>';

  if (!subject) {
    categoryContainer.classList.add("hidden");
    return;
  }

  const entries = QuizBank.getEntries(studentClass, subject);

  entries.forEach(entry => {
    const option = document.createElement("option");
    option.value = entry.id;
    option.textContent = entry.label;
    categorySelect.appendChild(option);
  });

  categoryContainer.classList.remove("hidden");
}


// =========================================================
// START SELECTED CHAPTER / PAST PAPER
// The chapter's question file is downloaded only now, on demand.
// =========================================================

// Drops exact duplicates (same question, same options, same answer) so a
// student never sees the identical question twice in one attempt. The
// result is always in the same order, which is what lets a saved
// attempt be resumed by index.
function getUniqueQuestions(entry) {
  const seenKeys = new Set();
  return entry.questions().filter(q => {
    const key = q.q + "||" + [...q.options].sort().join("|") + "||" + q.ans;
    if (seenKeys.has(key)) return false;
    seenKeys.add(key);
    return true;
  });
}

async function startSelectedSubject() {
  const subject = document.getElementById("subjectSelect").value;
  const categoryId = document.getElementById("categorySelect").value;

  if (!subject) {
    alert("Please select a subject!");
    return;
  }
  if (!categoryId) {
    alert("Please select a chapter / paper!");
    return;
  }

  const entry = QuizBank.getEntry(studentClass, subject, categoryId);
  if (!entry) {
    alert("That quiz could not be found.");
    return;
  }

  // Only one saved attempt is kept per student, so warn before replacing it.
  const saved = readProgress();
  if (saved && !confirm(
    "You have an unfinished quiz saved. Starting a new quiz will discard it.\n\nStart the new quiz anyway?"
  )) {
    return;
  }

  const startBtn = document.getElementById("startBtn");
  startBtn.disabled = true;
  startBtn.innerText = "Loading...";
  try {
    await QuizBank.load(entry);
  } catch (err) {
    console.error(err);
    alert("Could not load this quiz. Please check your internet connection and try again.");
    return;
  } finally {
    startBtn.disabled = false;
    startBtn.innerText = "Start Quiz";
  }

  uniqueQuestions = getUniqueQuestions(entry);
  if (uniqueQuestions.length === 0) {
    alert("No questions found!");
    return;
  }

  currentEntry = entry;
  currentSubject = subject;
  orderIdx = shuffleArray(uniqueQuestions.map((_, i) => i));
  shuffledQuiz = orderIdx.map(i => uniqueQuestions[i]);

  if (saved) clearProgress();   // the new quiz replaces the old saved one

  index = 0;
  score = 0;
  attemptFinished = false;
  clearTimeout(advanceTimeout);
  responses = new Array(shuffledQuiz.length);

  document.getElementById("subjectBox").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");

  startQuiz(false);
}


// =========================================================
// START QUIZ  (resumed = true when continuing a saved attempt)
// The timer follows the clock (an end time), not a counter, so it stays
// correct if the browser throttles a background tab or the page is closed.
// =========================================================
function startQuiz(resumed) {
  clearInterval(timer);
  Sound.stopTimer();

  if (!resumed) {
    quizStartMs = Date.now();
    endAtMs = quizStartMs + shuffledQuiz.length * 40 * 1000;
  }

  function tick() {
    totalTime = Math.max(0, Math.ceil((endAtMs - Date.now()) / 1000));

    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("timer").innerText =
      `Time Remaining: ${minutes}:${seconds}`;

    if (totalTime <= 0) {
      finishCurrentQuestionAs("skipped");
      concludeAttempt(index, true);   // true = time ran out
    }
  }

  tick(); // show the time immediately instead of after one second
  if (attemptFinished) return;
  timer = setInterval(tick, 1000);

  Sound.play("start");
  Sound.startTimer(() => totalTime);   // continuous KBC-style pulse

  loadQuestion();
  if (!resumed) saveProgress();
}


// =========================================================
// LOAD QUESTION
// =========================================================
function loadQuestion() {
  const q = shuffledQuiz[index];
  if (!q) return;

  const total = shuffledQuiz.length;

  document.getElementById("progress").innerText =
    `Question ${index + 1} of ${total}`;

  document.getElementById("question").innerHTML = `Q${index + 1}. ${q.q}`;

  const optionsBox = document.getElementById("optionsContainer");
  optionsBox.innerHTML = "";

  shuffleArray([...q.options]).forEach(option => {
    const label = document.createElement("label");
    label.className = "option";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;
    radio.addEventListener("change", () => {
      optionsBox.querySelectorAll(".option").forEach(l => l.classList.remove("selected"));
      label.classList.add("selected");   // yellow highlight
      Sound.play("select");
    });

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + option));

    optionsBox.appendChild(label);
  });

  document.getElementById("nextBtn").disabled = false;
  document.getElementById("nextBtn").innerText = "Next";
  document.getElementById("nextBtn").onclick = nextQuestion;

  // Submit checkpoint: every 10th question, and the final question
  const isCheckpoint = (index + 1) % 10 === 0 || index + 1 === total;
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.classList.toggle("hidden", !isCheckpoint);

  reasonBox.style.display = "none";
  reasonBox.innerHTML = "";

  renderMathIn(document.getElementById("question"));
  renderMathIn(optionsBox);
}


// =========================================================
// GRADE THE CURRENT QUESTION (used by Next, Submit, and timeout)
// =========================================================
function finishCurrentQuestionAs(forcedStatus) {
  // forcedStatus is only passed as "skipped" (from the timer running out)
  // Already graded (e.g. Next was pressed, then Submit or the timer fired)
  if (responses[index]) return responses[index];

  const selected = document.querySelector("input[name='option']:checked");
  const correctAnswer = shuffledQuiz[index].ans;

  if (forcedStatus === "skipped" && !selected) {
    responses[index] = "skipped";
    return "skipped";
  }

  if (!selected) {
    responses[index] = "skipped";
    return "skipped";
  }

  if (selected.value === correctAnswer) {
    responses[index] = "correct";
    score++;
    return "correct";
  } else {
    responses[index] = "wrong";
    return "wrong";
  }
}


// =========================================================
// NEXT QUESTION  (answers OR skips, then advances)
// =========================================================
function nextQuestion() {
  if (attemptFinished || responses[index]) return; // already answered/finished
  const selected = document.querySelector("input[name='option']:checked");

  // No option chosen -> treat as skipped, move on quietly
  if (!selected) {
    responses[index] = "skipped";
    Sound.play("skip");
    moveNext();
    return;
  }

  const correctAnswer = shuffledQuiz[index].ans;

  document.querySelectorAll(".option").forEach(label => {
    const radio = label.querySelector("input");
    if (radio.value === correctAnswer) {
      label.style.backgroundColor = "#b6f5b6";
    }
    if (radio.checked && radio.value !== correctAnswer) {
      label.style.backgroundColor = "#f5b6b6";
    }
    radio.disabled = true;
  });

  if (selected.value === correctAnswer) {
    responses[index] = "correct";
    score++;
    saveProgress();
    Sound.play("correct");
    reasonBox.style.display = "none";
    document.getElementById("nextBtn").disabled = true;
    advanceTimeout = setTimeout(moveNext, 1200);
  } else {
    responses[index] = "wrong";
    saveProgress();
    Sound.play("wrong");
    reasonBox.style.display = "block";
    const reasonText = shuffledQuiz[index].reason;
    reasonBox.innerHTML =
      `<strong>Correct Answer:</strong> ${escapeHtml(correctAnswer)}` +
      (reasonText
        ? `<br><br><strong>Explanation:</strong><br>${reasonText}`
        : "");
    renderMathIn(reasonBox);

    document.getElementById("nextBtn").innerText = "Continue";
    document.getElementById("nextBtn").onclick = moveNext;
  }
}


// =========================================================
// MOVE NEXT
// =========================================================
function moveNext() {
  if (attemptFinished) return;
  clearTimeout(advanceTimeout);
  document.getElementById("nextBtn").disabled = true; // re-enabled by loadQuestion
  index++;
  if (index < shuffledQuiz.length) {
    saveProgress();
    loadQuestion();
  } else {
    concludeAttempt(shuffledQuiz.length - 1);
  }
}


// =========================================================
// SUBMIT & FINISH (the every-10-questions checkpoint button)
// =========================================================
function submitAttempt() {
  if (attemptFinished) return;
  clearTimeout(advanceTimeout);
  finishCurrentQuestionAs(); // grades current question if answered, else skips it
  concludeAttempt(index);
}


// =========================================================
// CONCLUDE ATTEMPT — scoped to questions 1..lastIndex only
// =========================================================
function concludeAttempt(lastIndex, timedOut) {
  if (attemptFinished) return; // never save the same attempt twice
  attemptFinished = true;
  clearProgress();   // finished: nothing left to resume
  clearInterval(timer);
  Sound.stopTimer();
  clearTimeout(advanceTimeout);

  const considered = responses.slice(0, lastIndex + 1).map(r => r || "skipped");
  const correctCount = considered.filter(r => r === "correct").length;
  const wrongCount = considered.filter(r => r === "wrong").length;
  const skippedCount = considered.filter(r => r === "skipped").length;
  const consideredTotal = considered.length;
  const percentage = ((correctCount / consideredTotal) * 100).toFixed(1);

  document.getElementById("quizBox").classList.add("hidden");
  document.getElementById("resultBox").classList.remove("hidden");

  document.getElementById("scoreText").innerText =
    `Score: ${correctCount} / ${consideredTotal}`;
  document.getElementById("percentText").innerText =
    `Percentage: ${percentage}%`;
  document.getElementById("resultBreakdown").innerHTML =
    `Correct: ${correctCount} &nbsp;|&nbsp; Wrong: ${wrongCount} &nbsp;|&nbsp; Skipped: ${skippedCount}<br>
     Attempted through question ${consideredTotal} of ${shuffledQuiz.length} in this ${currentEntry.type === "pastpaper" ? "paper" : "chapter"}.`;

  if (timedOut) Sound.play("timeup");
  Sound.play(Number(percentage) >= 50 ? "pass" : "fail", timedOut ? 1.0 : 0);

  ResultStore.saveResult({
    studentName,
    roll: studentRoll,
    class: studentClass,
    subject: currentSubject,
    categoryType: currentEntry.type,
    categoryLabel: currentEntry.label,
    correct: correctCount,
    wrong: wrongCount,
    skipped: skippedCount,
    consideredTotal,
    totalQuestions: shuffledQuiz.length,
    percentage: Number(percentage),
    timeTakenSec: Math.max(0, Math.round((Date.now() - quizStartMs) / 1000))
  });
}


// =========================================================
// BACK TO SUBJECT LIST (stay logged in, pick another chapter/paper)
// =========================================================
function chooseAnotherQuiz() {
  document.getElementById("resultBox").classList.add("hidden");
  document.getElementById("subjectBox").classList.remove("hidden");
  document.getElementById("categoryContainer").classList.add("hidden");
  document.getElementById("categorySelect").innerHTML = "";
  showResumeOffer();
}


// =========================================================
// SAVED PROGRESS  (resume an unfinished quiz)
// ---------------------------------------------------------
// After every question the attempt is saved in this browser
// (localStorage), one slot per student. The shuffled order is saved
// as indices so the same questions come back. The clock keeps running
// while the student is away, and a saved attempt expires after 24 h.
// If storage is blocked (private mode), the quiz simply works as
// before, just without resume.
// =========================================================
const PROGRESS_PREFIX = "quizProgress:v1:";
const PROGRESS_MAX_AGE_MS = 24 * 60 * 60 * 1000;

function progressKey() {
  return PROGRESS_PREFIX + studentClass + ":" + studentRoll;
}

function saveProgress() {
  if (!currentEntry || attemptFinished) return;
  try {
    localStorage.setItem(progressKey(), JSON.stringify({
      v: 1,
      subject: currentSubject,
      entryId: currentEntry.id,
      n: shuffledQuiz.length,
      order: orderIdx,
      responses: Array.from(responses, r => r || null),
      index: index,
      startMs: quizStartMs,
      endMs: endAtMs,
      savedAt: Date.now()
    }));
  } catch (err) { /* storage unavailable: resume just won't be offered */ }
}

function clearProgress() {
  try { localStorage.removeItem(progressKey()); } catch (err) {}
}

// Returns the saved attempt for the logged-in student, or null if there
// isn't a usable one (missing, corrupt, expired, or for a removed quiz).
function readProgress() {
  if (!studentClass || !studentRoll) return null;
  let p;
  try {
    const raw = localStorage.getItem(progressKey());
    if (!raw) return null;
    p = JSON.parse(raw);
  } catch (err) {
    return null;
  }

  const n = p && p.n;
  const valid =
    p && p.v === 1 && Number.isInteger(n) && n > 0 &&
    Array.isArray(p.order) && p.order.length === n &&
    new Set(p.order).size === n &&
    p.order.every(i => Number.isInteger(i) && i >= 0 && i < n) &&
    Array.isArray(p.responses) && p.responses.length === n &&
    p.responses.every(r => r === null || r === "correct" || r === "wrong" || r === "skipped") &&
    Number.isInteger(p.index) && p.index >= 0 && p.index <= n &&
    Number.isFinite(p.startMs) && Number.isFinite(p.endMs) &&
    Number.isFinite(p.savedAt) &&
    typeof p.subject === "string" && typeof p.entryId === "string";

  if (!valid || Date.now() - p.savedAt > PROGRESS_MAX_AGE_MS ||
      !QuizBank.getEntry(studentClass, p.subject, p.entryId)) {
    clearProgress();
    return null;
  }
  return p;
}

// Shows or hides the "You have an unfinished quiz" banner.
function showResumeOffer() {
  const box = document.getElementById("resumeBox");
  const p = readProgress();
  if (!p) {
    box.classList.add("hidden");
    return;
  }
  const entry = QuizBank.getEntry(studentClass, p.subject, p.entryId);
  const answered = p.responses.filter(Boolean).length;
  const secLeft = Math.max(0, Math.ceil((p.endMs - Date.now()) / 1000));
  const timeText = secLeft > 0
    ? `${formatDuration(secLeft)} left`
    : "time is up - resuming will submit your result";

  document.getElementById("resumeInfo").textContent =
    `${p.subject} - ${entry.label}: ${answered} of ${p.n} questions done, ${timeText}.`;
  box.classList.remove("hidden");
}

async function resumeSavedQuiz() {
  const p = readProgress();
  if (!p) {
    showResumeOffer();
    return;
  }
  const entry = QuizBank.getEntry(studentClass, p.subject, p.entryId);

  const btn = document.getElementById("resumeBtn");
  btn.disabled = true;
  btn.innerText = "Loading...";
  try {
    await QuizBank.load(entry);
  } catch (err) {
    console.error(err);
    alert("Could not load this quiz. Please check your internet connection and try again.");
    return;
  } finally {
    btn.disabled = false;
    btn.innerText = "Resume";
  }

  const unique = getUniqueQuestions(entry);
  if (unique.length !== p.n) {
    // The question file changed since this attempt was saved.
    clearProgress();
    showResumeOffer();
    alert("This quiz was updated after you started it, so it can't be resumed. Please start it again.");
    return;
  }

  currentEntry = entry;
  currentSubject = p.subject;
  uniqueQuestions = unique;
  orderIdx = p.order;
  shuffledQuiz = orderIdx.map(i => unique[i]);
  responses = new Array(p.n);
  p.responses.forEach((r, i) => { if (r) responses[i] = r; });
  score = responses.filter(r => r === "correct").length;
  quizStartMs = p.startMs;
  endAtMs = p.endMs;
  attemptFinished = false;
  clearTimeout(advanceTimeout);

  document.getElementById("subjectBox").classList.add("hidden");
  document.getElementById("resumeBox").classList.add("hidden");

  // Move past questions that were already answered (the student may have
  // left on the explanation screen or just after a correct answer).
  index = p.index;
  while (index < p.n && responses[index]) index++;

  if (index >= p.n) {              // everything was answered
    concludeAttempt(p.n - 1);
    return;
  }

  if (Date.now() >= endAtMs) {     // time ran out while the student was away
    responses[index] = "skipped";
    concludeAttempt(index, true);
    return;
  }

  document.getElementById("quizBox").classList.remove("hidden");
  startQuiz(true);
}

function discardSavedQuiz() {
  if (!confirm("Discard your unfinished quiz? Your answers so far will be lost and no result will be saved.")) return;
  clearProgress();
  showResumeOffer();
}


// =========================================================
// LEAVE A QUIZ IN PROGRESS
// =========================================================
function openQuitModal() {
  if (attemptFinished) return;
  document.getElementById("quitModal").classList.remove("hidden");
}

function closeQuitModal() {
  document.getElementById("quitModal").classList.add("hidden");
}

// Stops everything and returns to the subject list (does not touch saved data).
function leaveQuizScreen() {
  clearInterval(timer);
  clearTimeout(advanceTimeout);
  Sound.stopTimer();
  attemptFinished = true;   // neutralises any stray timer / click for this attempt
  closeQuitModal();
  document.getElementById("quizBox").classList.add("hidden");
  document.getElementById("subjectBox").classList.remove("hidden");
}

function saveAndLeave() {
  saveProgress();            // must run before attemptFinished is set
  leaveQuizScreen();
  showResumeOffer();
}

function abandonQuiz() {
  if (!confirm("Abandon this quiz? Your answers will be discarded and no result will be saved.")) return;
  clearProgress();
  leaveQuizScreen();
  showResumeOffer();
}


// =========================================================
// SHUFFLE
// =========================================================
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


// =========================================================
// TEACHER / OPERATOR DASHBOARD
// =========================================================
function showTeacherLogin() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("teacherLoginBox").classList.remove("hidden");
}

function backToStudentLogin() {
  document.getElementById("teacherLoginBox").classList.add("hidden");
  document.getElementById("teacherDashboard").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

async function teacherLoginSubmit() {
  const email = document.getElementById("teacherEmail").value.trim();
  const password = document.getElementById("teacherPassword").value;
  const msg = document.getElementById("teacherLoginMsg");

  if (!ResultStore.isReady()) {
    msg.innerText = "Storage isn't set up yet — see SETUP.md.";
    return;
  }

  try {
    await ResultStore.teacherLogin(email, password);
    document.getElementById("teacherLoginBox").classList.add("hidden");
    document.getElementById("teacherDashboard").classList.remove("hidden");
    await loadTeacherResults();
  } catch (err) {
    msg.innerText = "Incorrect email or password.";
  }
}

function teacherLogoutClick() {
  ResultStore.teacherLogout();
  document.getElementById("teacherDashboard").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

// Results answered faster than this (seconds per attempted question)
// are flagged "Too fast". Real reading + thinking rarely takes less.
const FAST_SECONDS_PER_QUESTION = 5;
const CLASS_LIST = ["9th", "10th", "11th", "12th"];
let teacherResults = []; // everything loaded from Firestore

function isTooFast(r) {
  if (typeof r.timeTakenSec !== "number" || !r.consideredTotal) return false;
  return r.timeTakenSec / r.consideredTotal < FAST_SECONDS_PER_QUESTION;
}

function formatDuration(sec) {
  if (typeof sec !== "number") return "-";
  return Math.floor(sec / 60) + ":" + String(sec % 60).padStart(2, "0");
}

// All times are shown in Pakistan Standard Time.
function formatPKT(ts) {
  if (!ts || !ts.toDate) return "-";
  return ts.toDate().toLocaleString("en-GB", {
    timeZone: "Asia/Karachi", dateStyle: "medium", timeStyle: "short"
  }) + " PKT";
}

async function loadTeacherResults() {
  const tbody = document.querySelector("#resultsTable tbody");
  tbody.innerHTML = `<tr><td colspan="12">Loading...</td></tr>`;
  teacherResults = await ResultStore.fetchAllResults();
  renderTeacherTable();
}

// Teacher deletes one result (asks first - this cannot be undone).
async function deleteResultClick(r, btn) {
  const what = `${r.studentName} (Roll ${r.roll}, ${r.class}) - ${r.subject}, ${r.categoryLabel}`;
  if (!confirm(`Delete this result?\n\n${what}\n\nThis cannot be undone.`)) return;

  btn.disabled = true;
  btn.textContent = "Deleting...";
  const ok = await ResultStore.deleteResult(r.id);
  if (!ok) {
    btn.disabled = false;
    btn.textContent = "Delete";
    alert("Could not delete this result. Check your internet connection and that you are still logged in as teacher.");
    return;
  }
  teacherResults = teacherResults.filter(x => x.id !== r.id);
  renderTeacherTable();
}

function renderTeacherTable() {
  const tbody = document.querySelector("#resultsTable tbody");
  const filter = document.getElementById("classFilter").value;
  const rows = teacherResults.filter(r => filter === "all" || r.class === filter);

  document.getElementById("resultCount").innerText =
    `Showing ${rows.length} result${rows.length === 1 ? "" : "s"}` +
    (filter === "all" ? " (all classes)" : ` (class ${filter})`);

  if (rows.length === 0) {
    tbody.innerHTML = `<tr><td colspan="12">No results yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = "";
  rows.forEach(r => {
    const tr = document.createElement("tr");
    const fast = isTooFast(r);
    if (fast) tr.className = "fastRow";
    tr.innerHTML = `
      <td>${escapeHtml(r.studentName)}</td>
      <td>${escapeHtml(r.roll)}</td>
      <td>${escapeHtml(r.class)}</td>
      <td>${escapeHtml(r.subject)}</td>
      <td>${escapeHtml(r.categoryLabel)}</td>
      <td>${escapeHtml(r.correct)}/${escapeHtml(r.consideredTotal)} (of ${escapeHtml(r.totalQuestions)})</td>
      <td>${escapeHtml(r.wrong)}</td>
      <td>${escapeHtml(r.skipped)}</td>
      <td>${escapeHtml(r.percentage)}%</td>
      <td>${escapeHtml(formatDuration(r.timeTakenSec))}${fast ? ' <span class="fastTag">Too fast</span>' : ""}</td>
      <td>${escapeHtml(formatPKT(r.submittedAt))}</td>
      <td></td>
    `;
    const del = document.createElement("button");
    del.className = "delBtn";
    del.type = "button";
    del.textContent = "Delete";
    del.onclick = () => deleteResultClick(r, del);
    tr.lastElementChild.appendChild(del);
    tbody.appendChild(tr);
  });
}

// =========================================================
// EXPORT TO EXCEL (class-wise)
// ---------------------------------------------------------
// "All classes" -> one workbook with a separate sheet per class.
// One class selected -> a workbook with just that class.
// Rows are sorted by subject, chapter/paper, then % (high to low).
// =========================================================
function exportRow(r) {
  return {
    "Roll": r.roll,
    "Student": r.studentName,
    "Subject": r.subject,
    "Chapter / Paper": r.categoryLabel,
    "Correct": r.correct,
    "Attempted": r.consideredTotal,
    "Total Questions": r.totalQuestions,
    "Wrong": r.wrong,
    "Skipped": r.skipped,
    "Percentage (%)": r.percentage,
    "Time (m:ss)": formatDuration(r.timeTakenSec),
    "Submitted (PKT)": formatPKT(r.submittedAt),
    "Note": isTooFast(r) ? "Too fast" : ""
  };
}

function exportSort(a, b) {
  return String(a.subject).localeCompare(String(b.subject)) ||
         String(a.categoryLabel).localeCompare(String(b.categoryLabel), undefined, { numeric: true }) ||
         (b.percentage - a.percentage) ||
         String(a.roll).localeCompare(String(b.roll), undefined, { numeric: true });
}

// Stops a name like "=cmd" from being run as a formula if opened as CSV.
function csvCell(v) {
  let t = String(v == null ? "" : v);
  if (/^[=+\-@]/.test(t)) t = "'" + t;
  return '"' + t.replace(/"/g, '""') + '"';
}

function downloadBlob(filename, text, type) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function exportResultsToExcel() {
  const sel = document.getElementById("classFilter").value;
  const classes = sel === "all" ? CLASS_LIST : [sel];

  const groups = classes
    .map(c => ({
      cls: c,
      rows: teacherResults.filter(r => r.class === c).sort(exportSort).map(exportRow)
    }))
    .filter(g => g.rows.length > 0);

  if (groups.length === 0) {
    alert("There are no results to export for this selection.");
    return;
  }

  const stamp = new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Karachi" });
  const base = sel === "all" ? `Results_All_Classes_${stamp}` : `Results_${sel}_${stamp}`;

  // Fallback if the Excel library could not load (e.g. no internet): one CSV.
  if (typeof XLSX === "undefined") {
    const all = groups.flatMap(g => g.rows.map(r => ({ "Class": g.cls, ...r })));
    const headers = Object.keys(all[0]);
    const csv = [headers.map(csvCell).join(",")]
      .concat(all.map(r => headers.map(h => csvCell(r[h])).join(",")))
      .join("\r\n");
    downloadBlob(base + ".csv", "\ufeff" + csv, "text/csv;charset=utf-8");
    return;
  }

  const wb = XLSX.utils.book_new();
  groups.forEach(g => {
    const ws = XLSX.utils.json_to_sheet(g.rows);
    const keys = Object.keys(g.rows[0]);
    ws["!cols"] = keys.map(k => ({
      wch: Math.min(40, Math.max(k.length + 2, ...g.rows.map(r => String(r[k]).length + 2)))
    }));
    XLSX.utils.book_append_sheet(wb, ws, "Class " + g.cls);
  });
  XLSX.writeFile(wb, base + ".xlsx");
}
