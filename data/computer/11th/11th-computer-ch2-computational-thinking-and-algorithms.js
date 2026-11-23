// Class 11 Computer Science — Unit 2: Computational Thinking & Algorithms
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 2) and the SLOs
// CS-11-B-01 (plan, develop, test and refine computational artifacts: algorithms, flowcharts, pseudocode, trace tables)
// and CS-11-B-02 (search and sort algorithms: bubble sort, insertion sort, linear search, binary search).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario, flowchart and array-diagram questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG. Pseudocode uses the textbook conventions (<- for assignment, // for comments).
QuizBank.register({
  class: "11th",
  subject: "Computer",
  type: "chapter",
  id: "ch2",
  label: "Unit 2: Computational Thinking & Algorithms",
  order: 2,
  questions: function () {
    return [
    {
      q: "Computational thinking is best described as:",
      options: ["a thought process that helps us understand a problem and solve it the way a computer does", "a method of repairing computer hardware when it stops working properly in the lab", "a way of typing programs faster by using shortcut keys on a keyboard", "a technique for connecting several computers together into one network"],
      ans: "a thought process that helps us understand a problem and solve it the way a computer does",
      reason: "Computational thinking is a thought process for understanding a problem and solving it in a way that computers can, using the input-process-output model."
    },
    {
      q: "Which property of computational thinking means focusing on the most relevant aspects of a problem and ignoring unnecessary details?",
      options: ["Abstraction", "Decomposition", "Pattern recognition", "Algorithm design"],
      ans: "Abstraction",
      reason: "Abstraction simplifies a problem by looking at the big picture and ignoring details that do not matter for the solution."
    },
    {
      q: "Breaking a complex problem into smaller, more manageable sub-problems is called:",
      options: ["decomposition", "abstraction", "pattern recognition", "algorithm evaluation"],
      ans: "decomposition",
      reason: "Decomposition splits a complex problem into sub-problems or tasks that are easier to solve one by one."
    },
    {
      q: "Identifying patterns or trends in data, problems or solutions is called:",
      options: ["pattern recognition", "decomposition", "abstraction", "algorithm design"],
      ans: "pattern recognition",
      reason: "Pattern recognition looks for similarities, trends or repeated steps, which can then be reused to solve problems more easily."
    },
    {
      q: "Developing a step-by-step solution to a problem is called:",
      options: ["algorithm design", "abstraction", "decomposition", "pattern recognition"],
      ans: "algorithm design",
      reason: "Algorithm design is the actual designing of the solution: a step-by-step plan that solves the problem."
    },
    {
      q: "While creating a website, a designer thinks only about the layout, colour scheme and user interaction and ignores the code behind each button. Which property is being used?",
      options: ["Abstraction", "Decomposition", "Pattern recognition", "Algorithm evaluation"],
      ans: "Abstraction",
      reason: "Focusing on the main design and functionality while ignoring the coding details is abstraction."
    },
    {
      q: "A team building a mobile app splits the work into designing the user interface, coding the login and navigation features, and handling data storage. Which property is being used?",
      options: ["Decomposition", "Abstraction", "Pattern recognition", "Algorithm design"],
      ans: "Decomposition",
      reason: "The big task has been broken into smaller sub-tasks, each manageable on its own. That is decomposition."
    },
    {
      q: "An analyst studying a website notices that most visitors go from the home page to the products page and then to the cart. Which property is being used?",
      options: ["Pattern recognition", "Abstraction", "Decomposition", "Algorithm design"],
      ans: "Pattern recognition",
      reason: "Spotting trends and common paths in user behaviour is pattern recognition. It helps in improving the site based on observed patterns."
    },
    {
      q: "Writing the exact ordered steps needed to calculate a student's percentage marks is an example of:",
      options: ["algorithm design", "pattern recognition", "abstraction", "decomposition"],
      ans: "algorithm design",
      reason: "Designing a precise sequence of steps that solves the problem is algorithm design."
    },
    {
      q: "Computers solve problems by following which model?",
      options: ["Input-process-output model", "Output-input-process model", "Compile-link-run model", "Read-write-delete model"],
      ans: "Input-process-output model",
      reason: "A computer takes input, processes it and produces output. Computational thinking requires understanding this model."
    },
    {
      q: "In binary search, repeatedly reducing the search space to half is an example of which property of computational thinking?",
      options: ["Pattern recognition", "Abstraction", "Algorithm evaluation", "Tracing"],
      ans: "Pattern recognition",
      reason: "The core pattern of binary search is halving the search space again and again, so it is described as pattern recognition."
    },
    {
      q: "Dividing a sorting task into adjacent comparison, swap logic and repetition is an example of:",
      options: ["decomposition", "abstraction", "algorithm evaluation", "sequential searching"],
      ans: "decomposition",
      reason: "Bubble sort is broken into sub-processes (compare adjacent items, swap if out of order, repeat). That is decomposition."
    },
    {
      q: "A librarian wants to design a system to search thousands of book records. She first lists the modules: search, storage and display. Which computational thinking technique has she applied?",
      options: ["Decomposition", "Abstraction", "Pattern recognition", "Tracing"],
      ans: "Decomposition",
      reason: "Dividing the system into separate modules (search, storage, display) is decomposition."
    },
    {
      q: "Computational artifacts are:",
      options: ["human-made objects or systems created using computational thinking, such as programs and websites", "natural objects found in the environment that are studied using computer programs", "only the physical parts of a computer, such as the keyboard, mouse and monitor", "errors and warnings that appear on the screen while a program is running"],
      ans: "human-made objects or systems created using computational thinking, such as programs and websites",
      reason: "Computational artifacts are things created with computational thinking, for example programs, websites, videos, simulations, databases and software systems."
    },
    {
      q: "Which of the following is a computational artifact?",
      options: ["A database system", "A printed newspaper", "A handwritten letter", "A wooden ruler"],
      ans: "A database system",
      reason: "A database is created using computational thinking, so it is a computational artifact. The other items are not computational products."
    },
    {
      q: "Why are artifacts such as algorithms and flowcharts produced before the coding phase?",
      options: ["Developers can understand how the software works without dealing with coding details", "They remove the need to test the software before it is delivered to the users", "They make the final program run faster on every type of computer", "They replace the programming language that is used in the coding phase"],
      ans: "Developers can understand how the software works without dealing with coding details",
      reason: "Artifacts describe the behaviour of software through control sequences, so developers can understand it without getting into the complexity of code."
    },
    {
      q: "Which of the following are design methods used as computational artifacts?",
      options: ["Algorithms, flowcharts and pseudocode", "Bugs, patches and software updates", "Hubs, switches and network routers", "Plaintext, ciphertext and secret keys"],
      ans: "Algorithms, flowcharts and pseudocode",
      reason: "Algorithms, flowcharts and pseudocode are structured, systematic representations of a computational process."
    },
    {
      q: "A team creates a simulation and a digital animation as part of a project. Both of these are examples of:",
      options: ["computational artifacts", "network topologies", "encryption keys", "hardware components"],
      ans: "computational artifacts",
      reason: "Simulations and digital animations are human-made products built using computational thinking, so they are computational artifacts."
    },
    {
      q: "An algorithm is:",
      options: ["a step-by-step set of instructions that defines how a specific problem should be solved", "a program that has already been compiled and is ready to run on a computer", "a diagram made only of shapes that are joined to each other by arrows", "a hardware device that is used to store data permanently on a disk"],
      ans: "a step-by-step set of instructions that defines how a specific problem should be solved",
      reason: "An algorithm is a step-by-step set of instructions for solving a problem. It is a high-level description that ignores implementation details."
    },
    {
      q: "Algorithms are normally written in:",
      options: ["natural language", "machine code", "binary digits", "assembly language only"],
      ans: "natural language",
      reason: "Algorithms are normally written in natural language (plain English steps). Pseudocode and programming code come later."
    },
    {
      q: "Pseudocode is best described as:",
      options: ["an intermediate step between an algorithm and the actual program code", "the compiled version of a finished program that runs on the computer", "a special type of symbol that is drawn inside a flowchart diagram", "the output that is displayed when a finished program is executed"],
      ans: "an intermediate step between an algorithm and the actual program code",
      reason: "Pseudocode is a semi-formal way of writing the logic using natural language and simplified programming constructs, before real coding begins."
    },
    {
      q: "Which sequence shows the usual order in which the design tools are used?",
      options: ["Algorithm, then pseudocode, then program code", "Program code, then algorithm, then pseudocode", "Pseudocode, then program code, then algorithm", "Program code, then pseudocode, then algorithm"],
      ans: "Algorithm, then pseudocode, then program code",
      reason: "After devising an algorithm, the programmer writes pseudocode and then the program code. (A flowchart can be drawn alongside.)"
    },
    {
      q: "A flowchart is:",
      options: ["a diagram that shows the steps of an algorithm using special symbols joined by arrows", "a table that records the values of variables while an algorithm is run", "a program written in a high-level language and ready for compilation", "a list of the errors that were found during the testing of a program"],
      ans: "a diagram that shows the steps of an algorithm using special symbols joined by arrows",
      reason: "A flowchart is a diagrammatic representation of an algorithm or process. It shows the sequence of steps using symbols connected by arrows."
    },
    {
      q: "<div class=\"stimulus\">The figure shows a flowchart symbol.<svg viewBox=\"0 0 160 80\" style=\"width:100%;max-width:180px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"25.0\" y=\"18.0\" width=\"110\" height=\"44\" rx=\"22.0\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/></svg></div>What is this symbol used for?",
      options: ["Start or end of the program", "Input or output of data values", "A decision with a Yes or No answer", "An arithmetic operation on data"],
      ans: "Start or end of the program",
      reason: "The oval (terminator) shows where the flowchart starts or ends."
    },
    {
      q: "<div class=\"stimulus\">The figure shows a flowchart symbol.<svg viewBox=\"0 0 160 80\" style=\"width:100%;max-width:180px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><polygon points=\"37.0,18.0 135.0,18.0 123.0,62.0 25.0,62.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/></svg></div>What is this symbol used for?",
      options: ["Input or output of data values", "Start or end of the program", "A decision with a Yes or No answer", "An arithmetic operation on data"],
      ans: "Input or output of data values",
      reason: "The parallelogram is used for any input or output operation, such as reading a number or printing a result."
    },
    {
      q: "<div class=\"stimulus\">The figure shows a flowchart symbol.<svg viewBox=\"0 0 160 80\" style=\"width:100%;max-width:180px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><polygon points=\"80,9.0 130.0,40 80,71.0 30.0,40\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/></svg></div>What is this symbol used for?",
      options: ["A decision with a Yes or No answer", "Input or output of data values", "Start or end of the program", "An arithmetic operation on data"],
      ans: "A decision with a Yes or No answer",
      reason: "The diamond asks a question that can be answered in a binary form (Yes/No or True/False)."
    },
    {
      q: "<div class=\"stimulus\">The figure shows a flowchart symbol.<svg viewBox=\"0 0 160 80\" style=\"width:100%;max-width:180px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"25.0\" y=\"18.0\" width=\"110\" height=\"44\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/></svg></div>What is this symbol used for?",
      options: ["An arithmetic operation on data", "Input or output of data values", "Start or end of the program", "A decision with a Yes or No answer"],
      ans: "An arithmetic operation on data",
      reason: "The rectangle (process) is used for arithmetic operations and data manipulation, such as sum = num1 + num2."
    },
    {
      q: "In a flowchart, what are the arrows (flow lines) used for?",
      options: ["To show the direction of flow and connect one part of the flowchart to another", "To perform the arithmetic calculations that are needed by the program", "To store the values of all the variables used in the algorithm", "To mark the place where the program starts running only"],
      ans: "To show the direction of flow and connect one part of the flowchart to another",
      reason: "Flow lines (arrows) connect the symbols and show the order in which the steps are carried out."
    },
    {
      q: "A diamond-shaped decision symbol in a flowchart normally has:",
      options: ["two exit paths, such as Yes and No", "only one exit path leading downwards", "no exit path, as it ends the flowchart", "three exit paths, one for each variable"],
      ans: "two exit paths, such as Yes and No",
      reason: "A decision asks a Yes/No question, so it has two different exits, one for each answer."
    },
    {
      q: "<div class=\"stimulus\">Study the flowchart.<svg viewBox=\"0 0 320 320\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"120.0\" y=\"8.0\" width=\"80\" height=\"28\" rx=\"14.0\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Start</text><path d=\"M160,36 L160,62\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><polygon points=\"107.0,63.0 225.0,63.0 213.0,93.0 95.0,93.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Input num</text><path d=\"M160,93 L160,118\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><polygon points=\"160,118.0 235.0,148 160,178.0 85.0,148\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">num % 2 = 0 ?</text><path d=\"M85,148 L62,148 L62,210\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><text x=\"72\" y=\"141\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Yes</text><path d=\"M235,148 L258,148 L258,210\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><text x=\"248\" y=\"141\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">No</text><polygon points=\"24.0,211.0 112.0,211.0 100.0,241.0 12.0,241.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"62\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Output \"Even\"</text><polygon points=\"220.0,211.0 308.0,211.0 296.0,241.0 208.0,241.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"258\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Output \"Odd\"</text><path d=\"M62,241 L62,268 L160,268\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M258,241 L258,268 L160,268\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M160,268 L160,284\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><rect x=\"120.0\" y=\"284.0\" width=\"80\" height=\"28\" rx=\"14.0\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"302\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">End</text></svg></div>What will be the output if the input value of num is 7?",
      options: ["Odd", "Even", "7", "No output"],
      ans: "Odd",
      reason: "7 % 2 = 1, which is not 0, so the answer to the decision is No and the flowchart outputs Odd."
    },
    {
      q: "<div class=\"stimulus\">Study the flowchart.<svg viewBox=\"0 0 320 340\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"120.0\" y=\"6.0\" width=\"80\" height=\"28\" rx=\"14.0\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Start</text><path d=\"M160,34 L160,52\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><rect x=\"105.0\" y=\"52.0\" width=\"110\" height=\"28\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"70\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">sum = 0</text><path d=\"M160,80 L160,98\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><rect x=\"105.0\" y=\"98.0\" width=\"110\" height=\"28\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"116\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">i = 1</text><path d=\"M160,126 L160,144\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><polygon points=\"160,147.0 220.0,176 160,205.0 100.0,176\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"180\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">i &lt;= 3 ?</text><path d=\"M160,205 L160,236\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><text x=\"172\" y=\"222\" text-anchor=\"start\" font-size=\"10\" fill=\"#222\">Yes</text><rect x=\"100.0\" y=\"236.0\" width=\"120\" height=\"28\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"254\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">sum = sum + i</text><path d=\"M160,264 L160,280\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><rect x=\"100.0\" y=\"280.0\" width=\"120\" height=\"28\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"298\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">i = i + 1</text><path d=\"M220,294 L290,294 L290,176 L220,176\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><path d=\"M100,176 L50,176 L50,236\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><text x=\"75\" y=\"169\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">No</text><polygon points=\"17.0,236.0 95.0,236.0 83.0,264.0 5.0,264.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"50\" y=\"254\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Output sum</text><path d=\"M50,264 L50,300\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><rect x=\"12.0\" y=\"301.0\" width=\"76\" height=\"26\" rx=\"13.0\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"50\" y=\"318\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">End</text></svg></div>What value will be output by the flowchart?",
      options: ["6", "3", "9", "0"],
      ans: "6",
      reason: "i takes the values 1, 2 and 3, so sum = 1 + 2 + 3 = 6. When i becomes 4 the condition i <= 3 is No and the loop ends with Output 6."
    },
    {
      q: "<div class=\"stimulus\">Study the flowchart.<svg viewBox=\"0 0 320 320\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"120.0\" y=\"8.0\" width=\"80\" height=\"28\" rx=\"14.0\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Start</text><path d=\"M160,36 L160,62\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><polygon points=\"107.0,63.0 225.0,63.0 213.0,93.0 95.0,93.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"82\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Input A, B</text><path d=\"M160,93 L160,118\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><polygon points=\"160,118.0 235.0,148 160,178.0 85.0,148\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">A &gt; B ?</text><path d=\"M85,148 L62,148 L62,210\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><text x=\"72\" y=\"141\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Yes</text><path d=\"M235,148 L258,148 L258,210\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><text x=\"248\" y=\"141\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">No</text><polygon points=\"24.0,211.0 112.0,211.0 100.0,241.0 12.0,241.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"62\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Output A</text><polygon points=\"220.0,211.0 308.0,211.0 296.0,241.0 208.0,241.0\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"258\" y=\"230\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Output B</text><path d=\"M62,241 L62,268 L160,268\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M258,241 L258,268 L160,268\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M160,268 L160,284\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\" marker-end=\"url(#fa)\"/><rect x=\"120.0\" y=\"284.0\" width=\"80\" height=\"28\" rx=\"14.0\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"302\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">End</text></svg></div>If A = 5 and B = 9 are entered, what is output? What does the flowchart find?",
      options: ["9; the larger of the two numbers", "5; the larger of the two numbers", "9; the smaller of the two numbers", "5; the smaller of the two numbers"],
      ans: "9; the larger of the two numbers",
      reason: "5 > 9 is false (No), so Output B = 9 is executed. The flowchart outputs the larger of the two numbers."
    },
    {
      q: "Which flowchart symbol is used for the statement sum = num1 + num2?",
      options: ["Rectangle (process)", "Oval (terminator)", "Parallelogram (input/output)", "Diamond (decision)"],
      ans: "Rectangle (process)",
      reason: "Arithmetic operations and data manipulation use the rectangle process symbol."
    },
    {
      q: "Which statement about pseudocode is correct?",
      options: ["It has no universal standard, but common conventions are followed", "It must be written in one fixed syntax for all programmers", "It can be run directly by the computer without translation", "It must always use capital letters for every single word"],
      ans: "It has no universal standard, but common conventions are followed",
      reason: "Pseudocode writing is not standardized. Common conventions (indentation, case, comments, key commands) are followed, but they are not strict rules."
    },
    {
      q: "Which symbol is commonly used for a single-line comment in pseudocode?",
      options: ["//", "<-", "==", "&&"],
      ans: "//",
      reason: "Comments explain the logic and are often written with // for a single line or /* */ for several lines."
    },
    {
      q: "Which symbols are commonly used for assignment in pseudocode?",
      options: ["<- (arrow) or :=", "== or !=", "// or /* */", "% or **"],
      ans: "<- (arrow) or :=",
      reason: "Assignments are often written with an arrow (←, typed as <-) or :=. The == sign is for comparison."
    },
    {
      q: "Which pseudocode statement stores the value 25 in a variable named age?",
      options: ["age <- 25", "age == 25", "25 <- age", "DECLARE age"],
      ans: "age <- 25",
      reason: "age <- 25 assigns 25 to age. == compares values, 25 <- age is reversed, and DECLARE only creates the variable without giving it a value."
    },
    {
      q: "Which of the following is a key command commonly used in pseudocode?",
      options: ["OUTPUT", "COMPILE", "BROWSE", "UPLOAD"],
      ans: "OUTPUT",
      reason: "Key commands such as INPUT, OUTPUT, FOR, IF and WHILE represent specific actions or control structures."
    },
    {
      q: "Why is consistent indentation used in pseudocode?",
      options: ["To show the structure of the logic clearly", "To make the program run faster on the computer", "To use less memory while the program is running", "To avoid having to write comments in the code"],
      ans: "To show the structure of the logic clearly",
      reason: "Indentation (usually 2 to 4 spaces) visually shows blocks inside decisions and loops, which makes the logic easier to read."
    },
    {
      q: "<div class=\"stimulus\">Study the pseudocode.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">num &lt;- 4\nIF num % 2 = 0 THEN\n    OUTPUT \"Even\"\nELSE\n    OUTPUT \"Odd\"\nENDIF</pre></div>What is the output of the pseudocode?",
      options: ["Even", "Odd", "4", "Even Odd"],
      ans: "Even",
      reason: "4 % 2 = 0, so the condition is true and OUTPUT \"Even\" is executed. The ELSE part is skipped."
    },
    {
      q: "<div class=\"stimulus\">Study the pseudocode.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">total &lt;- 0\nFOR i FROM 1 TO 4\n    total &lt;- total + i\nENDFOR\nOUTPUT total</pre></div>What is the output of the pseudocode?",
      options: ["10", "4", "15", "24"],
      ans: "10",
      reason: "total becomes 1, then 3, then 6, then 10 as i goes from 1 to 4. The final output is 10."
    },
    {
      q: "<div class=\"stimulus\">Study the pseudocode.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">n &lt;- 3\nWHILE n &gt; 0\n    OUTPUT n\n    n &lt;- n - 1\nENDWHILE</pre></div>What is the output of the pseudocode?",
      options: ["3 2 1", "1 2 3", "3 2 1 0", "2 1 0"],
      ans: "3 2 1",
      reason: "n starts at 3 and is printed, then reduced by 1 each time. The loop stops when n becomes 0, so 0 is never printed."
    },
    {
      q: "What is the first step in planning and developing a computational artifact?",
      options: ["Define the problem", "Test the algorithm", "Choose control structures", "Write the final output"],
      ans: "Define the problem",
      reason: "The steps are: define the problem, list inputs and outputs, plan, develop, and test the algorithm."
    },
    {
      q: "Listing the inputs and expected outputs of a problem means identifying:",
      options: ["the information needed to solve the problem and the results the algorithm should produce", "the programming language and the computer that will be used for the problem", "the number of people who will use the program after it has been written", "the errors that the compiler is likely to report when the code is run"],
      ans: "the information needed to solve the problem and the results the algorithm should produce",
      reason: "Inputs are the information needed to solve the problem. Outputs are what the algorithm will produce as a result."
    },
    {
      q: "A data structure is:",
      options: ["a storage format used to save and organize data, such as an array, stack or queue", "a statement that repeats a group of instructions until a condition is false", "a diagram that shows the flow of a program with symbols and arrows", "a test that checks an algorithm by hand using sample input values"],
      ans: "a storage format used to save and organize data, such as an array, stack or queue",
      reason: "A data structure stores and organizes data. Common types are the array, stack and queue."
    },
    {
      q: "Deciding whether to use an array, a stack or a queue belongs to which planning step?",
      options: ["Choosing data structures", "Choosing control structures", "Testing the algorithm", "Defining the problem"],
      ans: "Choosing data structures",
      reason: "Planning includes choosing data structures by considering the merits and drawbacks of each one."
    },
    {
      q: "Which statements are used to skip some program statements or to repeat them?",
      options: ["Conditional statements to skip and loops to repeat", "Loops to skip and conditional statements to repeat", "Comments to skip and variables to repeat", "Flowcharts to skip and pseudocode to repeat"],
      ans: "Conditional statements to skip and loops to repeat",
      reason: "Control structures change the normal sequential order: conditions skip some statements and loops repeat statements."
    },
    {
      q: "An algorithm that finds the area of a circle of radius 3 m is rewritten to use the formula A = πr² for any radius. What has been done to the algorithm?",
      options: ["It has been generalised", "It has been made specific to one case", "It has been converted into a flowchart", "It has been tested with invalid input"],
      ans: "It has been generalised",
      reason: "Using a formula that works for any radius instead of the single value 3 m makes the algorithm general, so it solves a whole class of problems."
    },
    {
      q: "The perimeter of a square is calculated as side + side + side + side. Replacing it with 4 × side is an example of:",
      options: ["simplifying the algorithm", "generalising the algorithm", "tracing the algorithm", "searching for an item"],
      ans: "simplifying the algorithm",
      reason: "4 × side gives the same result in fewer steps, so the algorithm has been simplified."
    },
    {
      q: "The number of steps in an algorithm must be:",
      options: ["finite", "infinite", "always exactly ten", "decided by the user while it runs"],
      ans: "finite",
      reason: "While developing an algorithm, remember that the number of steps should be finite so that the algorithm ends."
    },
    {
      q: "Tracing an algorithm is also known as:",
      options: ["a dry run or desk check", "compiling the algorithm", "deploying the algorithm", "debugging the hardware"],
      ans: "a dry run or desk check",
      reason: "Tracing is a manual check of an algorithm, also called a dry run or desk check, done before the code is written."
    },
    {
      q: "Why do programmers trace an algorithm by hand before writing its code?",
      options: ["To check that the algorithm works correctly by following variable values and the flow of control", "To make the program use less memory when it is finally executed on a computer", "To translate the algorithm into machine language that the computer can run", "To decide which programming language will be used to write the final program"],
      ans: "To check that the algorithm works correctly by following variable values and the flow of control",
      reason: "Hand simulation of the algorithm, keeping track of variable values and the logic flow, helps find logical errors early."
    },
    {
      q: "A trace table is used to:",
      options: ["show how the values of variables change at each step of an algorithm", "measure the time that is taken by each statement of the algorithm", "store the finished program permanently on the disk of a computer", "list the errors that were reported by a compiler during translation"],
      ans: "show how the values of variables change at each step of an algorithm",
      reason: "Trace tables record the values of variables at each stage, which tests whether the algorithm gives the expected output and exposes logical errors."
    },
    {
      q: "What should be done first when tracing an algorithm?",
      options: ["Understand the logic flow of the algorithm", "Verify the final output of the algorithm", "Compile the algorithm into machine code", "Delete the variables that are not used"],
      ans: "Understand the logic flow of the algorithm",
      reason: "Before tracing starts, the algorithm's logic flow must be understood. Then test input is chosen and variables are initialised."
    },
    {
      q: "At the end of tracing, the final output is compared with:",
      options: ["the expected output for the chosen test input", "the number of lines that the algorithm contains", "the output produced by a completely different algorithm", "the amount of memory used by all the variables"],
      ans: "the expected output for the chosen test input",
      reason: "The last tracing step is to verify that the output matches what is expected for the given input."
    },
    {
      q: "Why should a tester also try invalid input, such as a negative age, when testing an algorithm?",
      options: ["To find logical errors that the algorithm may not handle", "To make the algorithm run faster on the computer", "To avoid having to draw a flowchart of the algorithm", "To reduce the number of steps in the algorithm"],
      ans: "To find logical errors that the algorithm may not handle",
      reason: "Testing should consider potential logical errors, for example what happens if a user enters invalid data."
    },
    {
      q: "<div class=\"stimulus\">Study the pseudocode and its trace table.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">x &lt;- 2\nFOR i FROM 1 TO 3\n    x &lt;- x * 2\nENDFOR\nOUTPUT x</pre><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">i</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">x</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">start</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">4</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">8</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">3</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>What value of x replaces the question mark?",
      options: ["16", "6", "12", "32"],
      ans: "16",
      reason: "x doubles in every pass: 2, 4, 8, 16. When i = 3, x becomes 8 × 2 = 16, which is also the output."
    },
    {
      q: "<div class=\"stimulus\">Study the pseudocode and the incomplete trace table.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">A &lt;- [4, 7, 4, 9, 4]\ncount &lt;- 0\nFOR i FROM 0 TO 4\n    IF A[i] = 4 THEN\n        count &lt;- count + 1\n    ENDIF\nENDFOR</pre><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">i</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">A[i]</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">count</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">4</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">7</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">4</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">3</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">9</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">4</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">4</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>What is the final value of count?",
      options: ["3", "2", "4", "5"],
      ans: "3",
      reason: "count increases by 1 each time A[i] equals 4. This happens at i = 0, 2 and 4, so the final value is 3."
    },
    {
      q: "<div class=\"stimulus\">Study the pseudocode and the incomplete trace table.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">n &lt;- 20\nc &lt;- 0\nWHILE n &gt; 5\n    n &lt;- n - 6\n    c &lt;- c + 1\nENDWHILE\nOUTPUT c</pre><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Pass</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">n</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">c</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">start</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">20</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">14</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">8</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">3</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">3</td></tr></table></div>What is the value of n after the third pass, and why does the loop then stop?",
      options: ["2; because 2 > 5 is false", "2; because c has reached 3", "8; because 8 > 5 is false", "-4; because n becomes negative"],
      ans: "2; because 2 > 5 is false",
      reason: "After the third pass n = 8 - 6 = 2. The condition n > 5 is now false, so the loop ends and the output is 3."
    },
    {
      q: "<div class=\"stimulus\">Study the pseudocode and the incomplete trace table.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">sum &lt;- 0\nFOR i FROM 1 TO 4\n    sum &lt;- sum + i * i\nENDFOR\nOUTPUT sum</pre><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">i</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">i * i</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">sum</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">4</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">5</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">3</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">9</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">4</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">16</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">30</td></tr></table></div>What value replaces the question mark?",
      options: ["14", "9", "12", "18"],
      ans: "14",
      reason: "sum is 5 after i = 2, so after i = 3 it is 5 + 9 = 14. After i = 4 it becomes 14 + 16 = 30."
    },
    {
      q: "Which list gives the four common parameters used to evaluate an algorithm?",
      options: ["Correctness, efficiency, clarity and reliability", "Speed, colour, size and price of the computer", "Input, process, output and storage of the data", "Design, coding, testing and deployment of software"],
      ans: "Correctness, efficiency, clarity and reliability",
      reason: "Algorithms are evaluated on correctness, efficiency (time and space), clarity and reliability."
    },
    {
      q: "Which evaluation parameter requires an algorithm to produce the desired output for all possible valid inputs?",
      options: ["Correctness", "Clarity", "Efficiency", "Reliability"],
      ans: "Correctness",
      reason: "Correctness is considered the most fundamental evaluation parameter. Various inputs are tried to check it."
    },
    {
      q: "The time complexity of an algorithm refers to:",
      options: ["the amount of time the algorithm takes to run", "the amount of memory the algorithm needs", "how easily humans can read the algorithm", "the number of errors found in the algorithm"],
      ans: "the amount of time the algorithm takes to run",
      reason: "Time complexity is the time taken to run, while space complexity is the amount of memory required."
    },
    {
      q: "The space complexity of an algorithm refers to:",
      options: ["the amount of memory required to run the algorithm", "the time taken by the algorithm to finish", "the number of steps written in the flowchart", "the length of the pseudocode on the page"],
      ans: "the amount of memory required to run the algorithm",
      reason: "Space complexity measures the memory needed by the algorithm. Efficiency deals with both time and space."
    },
    {
      q: "How easily the logic and steps of an algorithm can be understood by people is called its:",
      options: ["clarity", "efficiency", "correctness", "complexity"],
      ans: "clarity",
      reason: "Clarity refers to how easily humans involved in software development can understand the algorithm's logic and steps."
    },
    {
      q: "The ability of an algorithm to always give accurate results with consistency for a set of inputs is called its:",
      options: ["reliability", "clarity", "space complexity", "abstraction"],
      ans: "reliability",
      reason: "A reliable algorithm always performs its task with a high degree of accuracy and consistency."
    },
    {
      q: "Two algorithms give the same correct result, but one finishes sooner and uses less memory. Which evaluation parameter separates them?",
      options: ["Efficiency", "Clarity", "Correctness", "Reliability"],
      ans: "Efficiency",
      reason: "Efficiency deals with time and space (memory) complexity, so the faster and lighter algorithm is more efficient."
    },
    {
      q: "A new team member cannot follow the steps of an algorithm written by a colleague, even though it gives correct results. Which parameter is weak?",
      options: ["Clarity", "Correctness", "Efficiency", "Reliability"],
      ans: "Clarity",
      reason: "The algorithm is correct but hard for humans to understand. That is a clarity problem."
    },
    {
      q: "Sorting algorithms are used to:",
      options: ["arrange data in a useful order, such as ascending or descending", "find the position of an item in a list of data values", "remove all the errors from a program before it runs", "protect the data in a network from unauthorized users"],
      ans: "arrange data in a useful order, such as ascending or descending",
      reason: "Sorting arranges data in a useful order. Bubble sort and insertion sort are two basic sorting methods."
    },
    {
      q: "Bubble sort works by:",
      options: ["repeatedly comparing adjacent elements and swapping them if they are in the wrong order", "picking the middle element of a list and then halving the list again and again", "scanning a list from the start until the required item is found in it", "inserting each element into a separate empty list that is already sorted"],
      ans: "repeatedly comparing adjacent elements and swapping them if they are in the wrong order",
      reason: "Bubble sort compares neighbouring elements and swaps those that are out of order. It repeats this until the whole list is sorted."
    },
    {
      q: "After the first pass of bubble sort in ascending order, which element is guaranteed to be in its correct position?",
      options: ["The largest element, at the end of the array", "The smallest element, at the start of the array", "The middle element of the array", "Every element of the array"],
      ans: "The largest element, at the end of the array",
      reason: "In the first pass the largest element is carried step by step to the last place, so it need not be checked in later passes."
    },
    {
      q: "<div class=\"stimulus\">The array is to be sorted in ascending order using bubble sort.<svg viewBox=\"0 0 220 60\" style=\"width:100%;max-width:220px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">13</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">32</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">26</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">35</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">10</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text></svg></div>What does the array look like after the first pass?",
      options: ["13, 26, 32, 10, 35", "13, 32, 26, 10, 35", "10, 13, 26, 32, 35", "13, 26, 10, 32, 35"],
      ans: "13, 26, 32, 10, 35",
      reason: "Pass 1: (13,32) stay; (32,26) swap; (32,35) stay; (35,10) swap. The array becomes 13, 26, 32, 10, 35 and 35 reaches the end."
    },
    {
      q: "<div class=\"stimulus\">The array is to be sorted in ascending order using bubble sort.<svg viewBox=\"0 0 220 60\" style=\"width:100%;max-width:220px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">5</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">1</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">4</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">2</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">8</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text></svg></div>How many swaps take place during the first pass?",
      options: ["3", "2", "4", "5"],
      ans: "3",
      reason: "Pass 1: (5,1) swap, (5,4) swap, (5,2) swap, (5,8) no swap. There are 3 swaps and the array becomes 1, 4, 2, 5, 8."
    },
    {
      q: "<div class=\"stimulus\">The list is to be arranged in ascending order using bubble sort.<svg viewBox=\"0 0 220 60\" style=\"width:100%;max-width:220px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">29</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">10</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">14</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">37</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">13</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text></svg></div>What is the list after the first pass?",
      options: ["10, 14, 29, 13, 37", "10, 14, 13, 29, 37", "10, 13, 14, 29, 37", "29, 10, 14, 13, 37"],
      ans: "10, 14, 29, 13, 37",
      reason: "Pass 1: (29,10) swap; (29,14) swap; (29,37) stay; (37,13) swap. The result is 10, 14, 29, 13, 37."
    },
    {
      q: "How many comparisons are made in the first pass of bubble sort on a list of 6 elements?",
      options: ["5", "6", "4", "12"],
      ans: "5",
      reason: "Each pass compares adjacent pairs from the start, so a list of n elements needs n - 1 comparisons in the first pass: 6 - 1 = 5."
    },
    {
      q: "According to the textbook, the number of iterations needed by bubble sort is one less than:",
      options: ["the total number of elements in the array", "the number of swaps in the first pass", "the largest value in the array", "the number of sorted elements"],
      ans: "the total number of elements in the array",
      reason: "For an array of n elements bubble sort needs at most n - 1 iterations, so a 5-element array needs 4."
    },
    {
      q: "Bubble sort is mainly suited to:",
      options: ["small data sets and educational purposes", "sorting very large databases quickly", "searching a sorted list in half steps", "encrypting data before transmission"],
      ans: "small data sets and educational purposes",
      reason: "The textbook recommends bubble sort for a small number of items and for educational purposes."
    },
    {
      q: "Insertion sort works by:",
      options: ["picking each element and inserting it into its correct place in the already sorted part", "swapping only the first and the last element of the list over and over", "dividing the list into two halves each time and sorting the halves apart", "comparing every element with the middle element of the whole list first"],
      ans: "picking each element and inserting it into its correct place in the already sorted part",
      reason: "Insertion sort builds a sorted portion step by step: each new element is inserted into its correct position relative to the elements already sorted."
    },
    {
      q: "In insertion sort, the algorithm starts from the second element because:",
      options: ["the first element is assumed to be already sorted", "the first element is always the smallest in the list", "the second element is always the largest in the list", "the first element has to be deleted from the list"],
      ans: "the first element is assumed to be already sorted",
      reason: "A single element is trivially sorted, so insertion sort starts with the second element and compares it with the sorted part."
    },
    {
      q: "<div class=\"stimulus\">An array is being sorted in ascending order using insertion sort. The first element is assumed sorted.<svg viewBox=\"0 0 260 60\" style=\"width:100%;max-width:260px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"#d4f3d0\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">12</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">31</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">25</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">8</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">32</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><rect x=\"210\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">17</text><text x=\"230.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text></svg></div>What does the array look like after the third element (25) has been inserted into the sorted part?",
      options: ["12, 25, 31, 8, 32, 17", "12, 31, 25, 8, 32, 17", "25, 12, 31, 8, 32, 17", "8, 12, 25, 31, 32, 17"],
      ans: "12, 25, 31, 8, 32, 17",
      reason: "12 and 31 are in order. 25 is smaller than 31, so 31 shifts right and 25 is inserted after 12: 12, 25, 31, 8, 32, 17."
    },
    {
      q: "<div class=\"stimulus\">An array is being sorted in ascending order using insertion sort. The first three elements are already sorted.<svg viewBox=\"0 0 260 60\" style=\"width:100%;max-width:260px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"#d4f3d0\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">12</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"#d4f3d0\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">25</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"#d4f3d0\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">31</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">8</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">32</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><rect x=\"210\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">17</text><text x=\"230.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text></svg></div>What does the array look like after the fourth element (8) has been inserted?",
      options: ["8, 12, 25, 31, 32, 17", "12, 25, 31, 8, 32, 17", "8, 25, 31, 12, 32, 17", "12, 8, 25, 31, 32, 17"],
      ans: "8, 12, 25, 31, 32, 17",
      reason: "8 is smaller than 31, 25 and 12, so those three elements shift one place to the right and 8 is inserted at the front: 8, 12, 25, 31, 32, 17."
    },
    {
      q: "A teacher keeps adding one new student's marks to a list that is already sorted and wants it kept in order with the least work. Which sorting method is most suitable?",
      options: ["Insertion sort", "Linear search", "Binary search", "Direct deployment"],
      ans: "Insertion sort",
      reason: "Insertion sort places each new element into its position in an already (nearly) sorted list, so it works well for nearly sorted data."
    },
    {
      q: "Picking up each book and placing it in its correct position among the books you are already holding is similar to which sorting algorithm?",
      options: ["Insertion sort", "Bubble sort", "Binary search", "Linear search"],
      ans: "Insertion sort",
      reason: "The textbook compares insertion sort to inserting each book into its correct position relative to the books already sorted."
    },
    {
      q: "Comparing each pair of neighbouring books from left to right and swapping a pair that is out of order is similar to which algorithm?",
      options: ["Bubble sort", "Insertion sort", "Binary search", "Linear search"],
      ans: "Bubble sort",
      reason: "Bubble sort repeatedly compares adjacent items and swaps them if they are out of order."
    },
    {
      q: "Searching algorithms are used to:",
      options: ["find a desired element in a group of elements", "arrange the elements of a group in ascending order", "convert pseudocode into a flowchart with symbols", "check the speed of the network between computers"],
      ans: "find a desired element in a group of elements",
      reason: "Searching algorithms look for a required item in a collection of elements. Linear search and binary search are two examples."
    },
    {
      q: "Binary search can be used only when the list is:",
      options: ["sorted", "unsorted", "very small", "made of text only"],
      ans: "sorted",
      reason: "Binary search compares the target with the middle element and discards half the list, which only works if the list is sorted."
    },
    {
      q: "Binary search follows which approach?",
      options: ["Divide and conquer", "Checking every element in order", "Swapping adjacent elements", "Inserting elements one by one"],
      ans: "Divide and conquer",
      reason: "The sorted list is divided into two parts. The item is compared with the middle element, and only the half that can contain the item is searched."
    },
    {
      q: "<div class=\"stimulus\">The sorted array below is searched for the value 56 using binary search.<svg viewBox=\"0 0 380 78\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">10</text><text x=\"30.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><text x=\"30.0\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#b45309\" font-weight=\"bold\">low</text><rect x=\"50\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">12</text><text x=\"70.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">24</text><text x=\"110.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">29</text><text x=\"150.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"24\" width=\"40\" height=\"30\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">39</text><text x=\"190.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><text x=\"190.0\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#b45309\" font-weight=\"bold\">mid</text><rect x=\"210\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">40</text><text x=\"230.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text><rect x=\"250\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"270.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">51</text><text x=\"270.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">6</text><rect x=\"290\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"310.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">56</text><text x=\"310.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">7</text><rect x=\"330\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">69</text><text x=\"350.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">8</text><text x=\"350.0\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#b45309\" font-weight=\"bold\">high</text></svg></div>Which element is compared first?",
      options: ["39", "10", "56", "69"],
      ans: "39",
      reason: "The first step checks the middle element of the whole array. With 9 elements the middle is the 5th, which is 39."
    },
    {
      q: "<div class=\"stimulus\">The value 56 is being searched in the sorted array. The first middle element was 39.<svg viewBox=\"0 0 380 78\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">10</text><text x=\"30.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">12</text><text x=\"70.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">24</text><text x=\"110.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">29</text><text x=\"150.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"24\" width=\"40\" height=\"30\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">39</text><text x=\"190.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><text x=\"190.0\" y=\"16\" text-anchor=\"middle\" font-size=\"10\" fill=\"#b45309\" font-weight=\"bold\">mid</text><rect x=\"210\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">40</text><text x=\"230.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text><rect x=\"250\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"270.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">51</text><text x=\"270.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">6</text><rect x=\"290\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"310.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">56</text><text x=\"310.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">7</text><rect x=\"330\" y=\"24\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"44\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">69</text><text x=\"350.0\" y=\"70\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">8</text></svg></div>56 is greater than 39. Which part of the array is searched next?",
      options: ["The right part (40, 51, 56, 69)", "The left part (10, 12, 24, 29)", "The whole array again", "Only the element 39"],
      ans: "The right part (40, 51, 56, 69)",
      reason: "The array is sorted, so a value larger than 39 can only lie to its right. The left half is ignored."
    },
    {
      q: "<div class=\"stimulus\">The sorted array below is searched for 56 using binary search.<svg viewBox=\"0 0 380 60\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">10</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">12</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">24</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">29</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">39</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><rect x=\"210\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">40</text><text x=\"230.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text><rect x=\"250\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"270.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">51</text><text x=\"270.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">6</text><rect x=\"290\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"310.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">56</text><text x=\"310.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">7</text><rect x=\"330\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">69</text><text x=\"350.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">8</text></svg></div>How many elements are compared with 56 before it is found (counting the comparison that finds it)?",
      options: ["3", "2", "4", "8"],
      ans: "3",
      reason: "Comparisons: 39 (too small), then 51 (too small), then 56 (found). That is 3 comparisons, whereas linear search would need 8."
    },
    {
      q: "In binary search, if the middle element is greater than the target value, the algorithm:",
      options: ["ignores the right half and continues in the left half", "ignores the left half and continues in the right half", "starts again from the first element", "stops and reports that the value is missing"],
      ans: "ignores the right half and continues in the left half",
      reason: "If the middle element is greater than the target, the target (if present) must be in the left part of the sorted list."
    },
    {
      q: "Linear search is also called:",
      options: ["sequential search", "binary search", "bubble search", "divide search"],
      ans: "sequential search",
      reason: "Linear (sequential) search goes through the elements one by one until the required item is found."
    },
    {
      q: "<div class=\"stimulus\">The unsorted array below is searched for 41 using linear search.<svg viewBox=\"0 0 380 60\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">70</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">40</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">30</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">11</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">57</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><rect x=\"210\" y=\"6\" width=\"40\" height=\"30\" fill=\"#d4f3d0\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">41</text><text x=\"230.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text><rect x=\"250\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"270.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">25</text><text x=\"270.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">6</text><rect x=\"290\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"310.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">14</text><text x=\"310.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">7</text><rect x=\"330\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">56</text><text x=\"350.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">8</text></svg></div>At which index (position) is 41 found?",
      options: ["5", "4", "6", "41"],
      ans: "5",
      reason: "Linear search starts at index 0 and checks 70, 40, 30, 11, 57 and then 41. The element 41 is at index 5."
    },
    {
      q: "<div class=\"stimulus\">The unsorted array below is searched for 41 using linear search, starting from index 0.<svg viewBox=\"0 0 380 60\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">70</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">40</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">30</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">11</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">57</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><rect x=\"210\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">41</text><text x=\"230.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text><rect x=\"250\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"270.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">25</text><text x=\"270.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">6</text><rect x=\"290\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"310.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">14</text><text x=\"310.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">7</text><rect x=\"330\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"350.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">56</text><text x=\"350.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">8</text></svg></div>How many elements are compared with 41 before the search stops (including the match)?",
      options: ["6", "5", "9", "1"],
      ans: "6",
      reason: "The elements 70, 40, 30, 11, 57 and 41 are compared in turn, so 6 comparisons are made."
    },
    {
      q: "What does linear search return if the required item is not found in the array?",
      options: ["NULL (item not found)", "The first element of the array", "The middle element of the array", "The last element of the array"],
      ans: "NULL (item not found)",
      reason: "If the end of the array is reached without a match, the algorithm returns NULL."
    },
    {
      q: "A teacher has an unsorted list of 20 student names and wants to find one name. Which search should be used?",
      options: ["Linear search", "Binary search", "Bubble sort", "Insertion sort"],
      ans: "Linear search",
      reason: "Binary search needs a sorted list. Linear search works on unsorted data and is suitable for a smaller number of elements."
    },
    {
      q: "A phone directory of millions of names is already sorted alphabetically. Which search will find a name faster in general?",
      options: ["Binary search", "Linear search", "Bubble sort", "Insertion sort"],
      ans: "Binary search",
      reason: "Binary search halves the search space at every step, so it is ideal for a large, sorted list."
    },
    {
      q: "Why can linear search be used on a list of newly added records that has not been sorted?",
      options: ["It does not require the data to be sorted first", "It always finds the item faster than binary search", "It sorts the list while searching", "It only works on very large lists"],
      ans: "It does not require the data to be sorted first",
      reason: "Linear search checks elements one after another, so no sorting or preparation is needed."
    },
    {
      q: "Scrolling down a list from the top until you find a movie is similar to which searching algorithm?",
      options: ["Linear search", "Binary search", "Insertion sort", "Bubble sort"],
      ans: "Linear search",
      reason: "Starting at the top and checking items one by one is a linear (sequential) search."
    },
    {
      q: "Repeatedly dividing a sorted list in half to quickly narrow down the options is similar to which searching algorithm?",
      options: ["Binary search", "Linear search", "Insertion sort", "Bubble sort"],
      ans: "Binary search",
      reason: "Halving the list at each step is the idea of binary search, which is ideal for a larger number of elements."
    }
    ];
  }
});
