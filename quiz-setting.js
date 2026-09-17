// =========================================================
// STATE
// =========================================================
let shuffledQuiz = [];
let responses = [];      // 'correct' | 'wrong' | 'skipped', parallel to shuffledQuiz
let index = 0;
let score = 0;
let totalTime = 0;
let timer;

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
    return;
  }

  studentName = student.name;
  studentRoll = student.roll;
  studentClass = student.class;

  document.getElementById("welcome").innerText =
    `Welcome, ${studentName.toUpperCase()} (${studentClass})`;

  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("subjectBox").classList.remove("hidden");

  loadSubjectsForClass(studentClass);
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
// =========================================================
function startSelectedSubject() {
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
  currentEntry = entry;

  shuffledQuiz = shuffleArray(entry.questions());

  if (!shuffledQuiz || shuffledQuiz.length === 0) {
    alert("No questions found!");
    return;
  }

  index = 0;
  score = 0;
  responses = new Array(shuffledQuiz.length);

  document.getElementById("subjectBox").classList.add("hidden");
  document.getElementById("quizBox").classList.remove("hidden");

  startQuiz();
}


// =========================================================
// START QUIZ
// =========================================================
function startQuiz() {
  clearInterval(timer);

  totalTime = shuffledQuiz.length * 40;

  timer = setInterval(() => {
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) seconds = "0" + seconds;

    document.getElementById("timer").innerText =
      `Time Remaining: ${minutes}:${seconds}`;

    totalTime--;

    if (totalTime <= 0) {
      finishCurrentQuestionAs("skipped");
      concludeAttempt(index);
    }
  }, 1000);

  loadQuestion();
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
  const selected = document.querySelector("input[name='option']:checked");

  // No option chosen -> treat as skipped, move on quietly
  if (!selected) {
    responses[index] = "skipped";
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
    reasonBox.style.display = "none";
    setTimeout(moveNext, 1200);
  } else {
    responses[index] = "wrong";
    reasonBox.style.display = "block";
    const reasonText = shuffledQuiz[index].reason;
    reasonBox.innerHTML =
      `<strong>Correct Answer:</strong> ${correctAnswer}` +
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
  index++;
  if (index < shuffledQuiz.length) {
    loadQuestion();
  } else {
    concludeAttempt(shuffledQuiz.length - 1);
  }
}


// =========================================================
// SUBMIT & FINISH (the every-10-questions checkpoint button)
// =========================================================
function submitAttempt() {
  finishCurrentQuestionAs(); // grades current question if answered, else skips it
  concludeAttempt(index);
}


// =========================================================
// CONCLUDE ATTEMPT — scoped to questions 1..lastIndex only
// =========================================================
function concludeAttempt(lastIndex) {
  clearInterval(timer);

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
    percentage: Number(percentage)
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

async function loadTeacherResults() {
  const tbody = document.querySelector("#resultsTable tbody");
  tbody.innerHTML = `<tr><td colspan="9">Loading...</td></tr>`;

  const results = await ResultStore.fetchAllResults();

  if (results.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9">No results yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = "";
  results.forEach(r => {
    const tr = document.createElement("tr");
    const submittedAt = r.submittedAt ? r.submittedAt.toDate().toLocaleString() : "-";
    tr.innerHTML = `
      <td>${r.studentName}</td>
      <td>${r.roll}</td>
      <td>${r.class}</td>
      <td>${r.subject}</td>
      <td>${r.categoryLabel}</td>
      <td>${r.correct}/${r.consideredTotal} (of ${r.totalQuestions})</td>
      <td>${r.wrong}</td>
      <td>${r.skipped}</td>
      <td>${r.percentage}%</td>
      <td>${submittedAt}</td>
    `;
    tbody.appendChild(tr);
  });
}
