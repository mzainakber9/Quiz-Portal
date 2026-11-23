# -*- coding: utf-8 -*-
from lib import *
C = 2
S1 = "2.0 Computational thinking & problem solving"
S2 = "2.1 Computational artifacts"
S3 = "2.1.2 Solution design: algorithms, flowcharts, pseudocode"
S4 = "2.1.3 Planning & developing an artifact"

# ---------------- computational thinking ----------------
add(C, S1, 'K', "Computational thinking is best described as:", "a thought process that helps us understand a problem and solve it the way a computer does",
    ["a method of repairing computer hardware when it stops working", "a way of typing programs faster using a keyboard", "a technique for connecting computers in a network"],
    "Computational thinking is a thought process for understanding a problem and solving it in a way that computers can, using the input-process-output model.")
add(C, S1, 'K', "Which property of computational thinking means focusing on the most relevant aspects of a problem and ignoring unnecessary details?", "Abstraction",
    ["Decomposition", "Pattern recognition", "Algorithm design"],
    "Abstraction simplifies a problem by looking at the big picture and ignoring details that do not matter for the solution.")
add(C, S1, 'K', "Breaking a complex problem into smaller, more manageable sub-problems is called:", "decomposition",
    ["abstraction", "pattern recognition", "algorithm evaluation"],
    "Decomposition splits a complex problem into sub-problems or tasks that are easier to solve one by one.")
add(C, S1, 'K', "Identifying patterns or trends in data, problems or solutions is called:", "pattern recognition",
    ["decomposition", "abstraction", "algorithm design"],
    "Pattern recognition looks for similarities, trends or repeated steps, which can then be reused to solve problems more easily.")
add(C, S1, 'K', "Developing a step-by-step solution to a problem is called:", "algorithm design",
    ["abstraction", "decomposition", "pattern recognition"],
    "Algorithm design is the actual designing of the solution: a step-by-step plan that solves the problem.")
add(C, S1, 'U', "While creating a website, a designer thinks only about the layout, colour scheme and user interaction and ignores the code behind each button. Which property is being used?",
    "Abstraction", ["Decomposition", "Pattern recognition", "Algorithm evaluation"],
    "Focusing on the main design and functionality while ignoring the coding details is abstraction.")
add(C, S1, 'U', "A team building a mobile app splits the work into designing the user interface, coding the login and navigation features, and handling data storage. Which property is being used?",
    "Decomposition", ["Abstraction", "Pattern recognition", "Algorithm design"],
    "The big task has been broken into smaller sub-tasks, each manageable on its own. That is decomposition.")
add(C, S1, 'U', "An analyst studying a website notices that most visitors go from the home page to the products page and then to the cart. Which property is being used?",
    "Pattern recognition", ["Abstraction", "Decomposition", "Algorithm design"],
    "Spotting trends and common paths in user behaviour is pattern recognition. It helps in improving the site based on observed patterns.")
add(C, S1, 'U', "Writing the exact ordered steps needed to calculate a student's percentage marks is an example of:", "algorithm design",
    ["pattern recognition", "abstraction", "decomposition"],
    "Designing a precise sequence of steps that solves the problem is algorithm design.")
add(C, S1, 'K', "Computers solve problems by following which model?", "Input-process-output model",
    ["Output-input-process model", "Compile-link-run model", "Read-write-delete model"],
    "A computer takes input, processes it and produces output. Computational thinking requires understanding this model.")
add(C, S1, 'U', "In binary search, repeatedly reducing the search space to half is an example of which property of computational thinking?", "Pattern recognition",
    ["Abstraction", "Algorithm evaluation", "Tracing"],
    "The core pattern of binary search is halving the search space again and again, so it is described as pattern recognition.")
add(C, S1, 'U', "Dividing a sorting task into adjacent comparison, swap logic and repetition is an example of:", "decomposition",
    ["abstraction", "algorithm evaluation", "sequential searching"],
    "Bubble sort is broken into sub-processes (compare adjacent items, swap if out of order, repeat). That is decomposition.")
add(C, S1, 'U', "Which statement best describes a 'problem' in problem solving?", "A challenge or situation for which a solution is required",
    ["A fault found only in computer hardware", "A program that has been completely tested", "A list of instructions written in a programming language"],
    "A problem is a challenge or situation that needs a solution. Analysing and handling it is called problem solving.")
add(C, S1, 'A', "A librarian wants to design a system to search thousands of book records. She first lists the modules: search, storage and display. Which computational thinking technique has she applied?",
    "Decomposition", ["Abstraction", "Pattern recognition", "Tracing"],
    "Dividing the system into separate modules (search, storage, display) is decomposition.")

# ---------------- artifacts ----------------
add(C, S2, 'K', "Computational artifacts are:", "human-made objects or systems created using computational thinking, such as programs and websites",
    ["natural objects found in the environment, such as stones and trees", "only the physical parts of a computer, such as the keyboard", "errors that appear while a program is running"],
    "Computational artifacts are things created with computational thinking, for example programs, websites, videos, simulations, databases and software systems.")
add(C, S2, 'U', "Which of the following is a computational artifact?", "A database system",
    ["A printed newspaper", "A handwritten letter", "A wooden ruler"],
    "A database is created using computational thinking, so it is a computational artifact. The other items are not computational products.")
add(C, S2, 'U', "Why are artifacts such as algorithms and flowcharts produced before the coding phase?", "Developers can understand how the software works without dealing with coding details",
    ["They remove the need to test the software", "They make the final program run faster", "They replace the programming language completely"],
    "Artifacts describe the behaviour of software through control sequences, so developers can understand it without getting into the complexity of code.")
add(C, S2, 'K', "Which of the following are design methods used as computational artifacts?", "Algorithms, flowcharts and pseudocode",
    ["Bugs, patches and updates", "Hubs, switches and routers", "Plaintext, ciphertext and keys"],
    "Algorithms, flowcharts and pseudocode are structured, systematic representations of a computational process.")
add(C, S2, 'A', "A team creates a simulation and a digital animation as part of a project. Both of these are examples of:", "computational artifacts",
    ["network topologies", "encryption keys", "hardware components"],
    "Simulations and digital animations are human-made products built using computational thinking, so they are computational artifacts.")

# ---------------- design: algorithms / flowcharts / pseudocode ----------------
add(C, S3, 'K', "An algorithm is:", "a step-by-step set of instructions that defines how a specific problem should be solved",
    ["a program that has already been compiled for the computer", "a diagram that is made of shapes joined by arrows only", "a device used to store data permanently"],
    "An algorithm is a step-by-step set of instructions for solving a problem. It is a high-level description that ignores implementation details.")
add(C, S3, 'K', "Algorithms are normally written in:", "natural language", ["machine code", "binary digits", "assembly language only"],
    "Algorithms are normally written in natural language (plain English steps). Pseudocode and programming code come later.")
add(C, S3, 'U', "Pseudocode is best described as:", "an intermediate step between an algorithm and the actual program code",
    ["the compiled version of a finished program", "a special type of flowchart symbol", "the output produced when a program runs"],
    "Pseudocode is a semi-formal way of writing the logic using natural language and simplified programming constructs, before real coding begins.")
add(C, S3, 'U', "Which sequence shows the usual order in which the design tools are used?", "Algorithm, then pseudocode, then program code",
    ["Program code, then algorithm, then pseudocode", "Pseudocode, then program code, then algorithm", "Program code, then pseudocode, then algorithm"],
    "After devising an algorithm, the programmer writes pseudocode and then the program code. (A flowchart can be drawn alongside.)")
add(C, S3, 'K', "A flowchart is:", "a diagram that shows the steps of an algorithm using special symbols joined by arrows",
    ["a table that records the values of variables", "a program written in a high-level language", "a list of errors found during testing"],
    "A flowchart is a diagrammatic representation of an algorithm or process. It shows the sequence of steps using symbols connected by arrows.")
for kind, name, wrong, why in [
    ('term', "Start or end of the program", ["Input or output of data", "A decision with Yes or No", "An arithmetic operation"],
     "The oval (terminator) shows where the flowchart starts or ends."),
    ('io', "Input or output of data", ["Start or end of the program", "A decision with Yes or No", "An arithmetic operation"],
     "The parallelogram is used for any input or output operation, such as reading a number or printing a result."),
    ('dec', "A decision that has a Yes or No answer", ["Input or output of data", "Start or end of the program", "An arithmetic operation"],
     "The diamond asks a question that can be answered in a binary form (Yes/No or True/False)."),
    ('proc', "An arithmetic operation or data processing step", ["Input or output of data", "Start or end of the program", "A decision with Yes or No"],
     "The rectangle (process) is used for arithmetic operations and data manipulation, such as sum = num1 + num2."),
]:
    add(C, S3, 'K' if kind in ('term', 'io') else 'U', stim("The figure shows a flowchart symbol.", symbol_svg(kind)) + "What is this symbol used for?", name, wrong, why)
add(C, S3, 'U', "In a flowchart, what are the arrows (flow lines) used for?", "To show the direction of flow and connect one part of the flowchart to another",
    ["To perform arithmetic calculations in the program", "To store the values of variables", "To mark the start of the program only"],
    "Flow lines (arrows) connect the symbols and show the order in which the steps are carried out.")
add(C, S3, 'U', "A diamond-shaped decision symbol in a flowchart normally has:", "two exit paths, such as Yes and No",
    ["only one exit path", "no exit path at all", "exactly three exit paths"],
    "A decision asks a Yes/No question, so it has two different exits, one for each answer.")
add(C, S3, 'A', stim("Study the flowchart.", fc_branch('Input num', 'num % 2 = 0 ?', 'Output "Even"', 'Output "Odd"')) + "What will be the output if the input value of num is 7?",
    "Odd", ["Even", "7", "No output"],
    "7 % 2 = 1, which is not 0, so the answer to the decision is No and the flowchart outputs Odd.")
add(C, S3, 'A', stim("Study the flowchart.", fc_loop()) + "What value will be output by the flowchart?",
    "6", ["3", "9", "0"],
    "i takes the values 1, 2 and 3, so sum = 1 + 2 + 3 = 6. When i becomes 4 the condition i <= 3 is No and the loop ends with Output 6.")
add(C, S3, 'A', stim("Study the flowchart.", fc_branch('Input A, B', 'A > B ?', 'Output A', 'Output B')) + "If A = 5 and B = 9 are entered, what is output? What does the flowchart find?",
    "9; the larger of the two numbers", ["5; the larger of the two numbers", "9; the smaller of the two numbers", "5; the smaller of the two numbers"],
    "5 > 9 is false (No), so Output B = 9 is executed. The flowchart outputs the larger of the two numbers.")
add(C, S3, 'U', "Which flowchart symbol is used for the statement sum = num1 + num2?", "Rectangle (process)",
    ["Oval (terminator)", "Parallelogram (input/output)", "Diamond (decision)"],
    "Arithmetic operations and data manipulation use the rectangle process symbol.")
add(C, S3, 'K', "Which statement about pseudocode is correct?", "It has no universal standard, but common conventions are followed",
    ["It must be written in one fixed syntax", "It can be run directly by the computer", "It must always use capital letters for every word"],
    "Pseudocode writing is not standardized. Common conventions (indentation, case, comments, key commands) are followed, but they are not strict rules.")
add(C, S3, 'K', "Which symbol is commonly used for a single-line comment in pseudocode?", "//", ["<-", "==", "&&"],
    "Comments explain the logic and are often written with // for a single line or /* */ for several lines.")
add(C, S3, 'K', "Which symbols are commonly used for assignment in pseudocode?", "<- (arrow) or :=",
    ["== or !=", "// or /* */", "% or **"],
    "Assignments are often written with an arrow (←, typed as <-) or :=. The == sign is for comparison.")
add(C, S3, 'U', "Which pseudocode statement stores the value 25 in a variable named age?", "age <- 25",
    ["age == 25", "25 <- age", "DECLARE age"],
    "age <- 25 assigns 25 to age. == compares values, 25 <- age is reversed, and DECLARE only creates the variable without giving it a value.")
add(C, S3, 'K', "Which of the following is a key command commonly used in pseudocode?", "OUTPUT", ["COMPILE", "BROWSE", "UPLOAD"],
    "Key commands such as INPUT, OUTPUT, FOR, IF and WHILE represent specific actions or control structures.")
add(C, S3, 'U', "Why is consistent indentation used in pseudocode?", "To show the structure of the logic clearly",
    ["To make the program run faster", "To use less computer memory", "To avoid writing any comments"],
    "Indentation (usually 2 to 4 spaces) visually shows blocks inside decisions and loops, which makes the logic easier to read.")
add(C, S3, 'A', stim("Study the pseudocode.", pre('''num <- 4
IF num % 2 = 0 THEN
    OUTPUT "Even"
ELSE
    OUTPUT "Odd"
ENDIF''')) + "What is the output of the pseudocode?",
    "Even", ["Odd", "4", "Even Odd"],
    "4 % 2 = 0, so the condition is true and OUTPUT \"Even\" is executed. The ELSE part is skipped.")
add(C, S3, 'A', stim("Study the pseudocode.", pre('''total <- 0
FOR i FROM 1 TO 4
    total <- total + i
ENDFOR
OUTPUT total''')) + "What is the output of the pseudocode?",
    "10", ["4", "15", "24"],
    "total becomes 1, then 3, then 6, then 10 as i goes from 1 to 4. The final output is 10.")
add(C, S3, 'A', stim("Study the pseudocode.", pre('''n <- 3
WHILE n > 0
    OUTPUT n
    n <- n - 1
ENDWHILE''')) + "What is the output of the pseudocode?",
    "3 2 1", ["1 2 3", "3 2 1 0", "2 1 0"],
    "n starts at 3 and is printed, then reduced by 1 each time. The loop stops when n becomes 0, so 0 is never printed.")

# ---------------- planning ----------------
add(C, S4, 'K', "What is the first step in planning and developing a computational artifact?", "Define the problem",
    ["Test the algorithm", "Choose control structures", "Write the final output"],
    "The steps are: define the problem, list inputs and outputs, plan, develop, and test the algorithm.")
add(C, S4, 'U', "Listing the inputs and expected outputs of a problem means identifying:", "the information needed to solve the problem and the results the algorithm should produce",
    ["the programming language and the computer to be used", "the number of people who will use the program", "the errors the compiler is likely to report"],
    "Inputs are the information needed to solve the problem. Outputs are what the algorithm will produce as a result.")
add(C, S4, 'K', "A data structure is:", "a storage format used to save and organize data, such as an array, stack or queue",
    ["a statement that repeats a group of instructions", "a diagram that shows the flow of a program", "a test that checks an algorithm by hand"],
    "A data structure stores and organizes data. Common types are the array, stack and queue.")
add(C, S4, 'U', "Deciding whether to use an array, a stack or a queue belongs to which planning step?", "Choosing data structures",
    ["Choosing control structures", "Testing the algorithm", "Defining the problem"],
    "Planning includes choosing data structures by considering the merits and drawbacks of each one.")
add(C, S4, 'U', "Which statements are used to skip some program statements or to repeat them?", "Conditional statements to skip and loops to repeat",
    ["Loops to skip and conditional statements to repeat", "Comments to skip and variables to repeat", "Flowcharts to skip and pseudocode to repeat"],
    "Control structures change the normal sequential order: conditions skip some statements and loops repeat statements.")
add(C, S4, 'A', "An algorithm that finds the area of a circle of radius 3 m is rewritten to use the formula A = πr² for any radius. What has been done to the algorithm?",
    "It has been generalised", ["It has been made specific to one case", "It has been converted into a flowchart", "It has been tested with invalid input"],
    "Using a formula that works for any radius instead of the single value 3 m makes the algorithm general, so it solves a whole class of problems.")
add(C, S4, 'A', "The perimeter of a square is calculated as side + side + side + side. Replacing it with 4 × side is an example of:", "simplifying the algorithm",
    ["generalising the algorithm", "tracing the algorithm", "searching for an item"],
    "4 × side gives the same result in fewer steps, so the algorithm has been simplified.")
add(C, S4, 'K', "The number of steps in an algorithm must be:", "finite", ["infinite", "always exactly ten", "decided by the user while it runs"],
    "While developing an algorithm, remember that the number of steps should be finite so that the algorithm ends.")

if __name__ == '__main__':
    print(stats(2))
