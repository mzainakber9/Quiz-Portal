// Class 11 Computer Science — Unit 3: Programming Fundamentals
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 3) and the SLOs
// CS-11-C-01 to C-07 (programs, Python, Turtle graphics, libraries, variables, sequence/selection/repetition, lists, functions, debugging).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with code-trace and diagram questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG; Python code uses real syntax.
QuizBank.register({
  class: "11th",
  subject: "Computer",
  type: "chapter",
  id: "ch3",
  label: "Unit 3: Programming Fundamentals",
  order: 3,
  questions: function () {
    return [
    {
      q: "A set of well-defined instructions that a computer can execute to solve a problem is called a:",
      options: ["computer program", "operating system", "web browser", "compiler"],
      ans: "computer program",
      reason: "A computer program is a set of well-defined instructions that the computer executes, one at a time, to solve a problem."
    },
    {
      q: "While a program is running, the program and the data it uses are kept in:",
      options: ["main memory", "hard disk", "monitor", "network card"],
      ans: "main memory",
      reason: "A program is loaded from disk into main memory (RAM), where the processor fetches one instruction at a time. Keeping both program and data there makes execution faster."
    },
    {
      q: "A program that accepts input from a user while it is running is called a(n):",
      options: ["interactive program", "batch program", "object program", "binary program"],
      ans: "interactive program",
      reason: "Interactive programs take input from a user or another program while running. Batch programs run a bunch of commands one after another."
    },
    {
      q: "Print jobs line up in a queue, are processed one after the other, and the printer halts when the queue is empty. This is an example of a:",
      options: ["batch program", "interactive program", "compiled program", "machine program"],
      ans: "batch program",
      reason: "In a batch program, multiple commands are bunched together, processed sequentially, and then the program halts."
    },
    {
      q: "A language translator converts each line to machine language as soon as that line is about to execute. Which translator is this?",
      options: ["Interpreter", "Compiler", "Debugger", "Assembler"],
      ans: "Interpreter",
      reason: "An interpreter converts and runs the code line by line. A compiler converts the whole code into an object file first."
    },
    {
      q: "A compiler checks the code against the syntax rules and then produces an object file. What does this object file contain?",
      options: ["machine language", "pseudocode steps", "flowchart symbols", "English sentences"],
      ans: "machine language",
      reason: "After the syntax check, the compiler converts the code into an object file of binary data, which is machine language that the processor understands."
    },
    {
      q: "Which pair of languages uses a compiler?",
      options: ["C++ and Fortran", "Python and Ruby", "Ruby and JavaScript", "JavaScript and Python"],
      ans: "C++ and Fortran",
      reason: "C++, Java, Assembly Language and Fortran use a compiler. Python, JavaScript and Ruby use an interpreter."
    },
    {
      q: "Which of the following is an example of an interactive program?",
      options: ["A web browser", "A print queue", "A nightly backup job", "A payroll batch run"],
      ans: "A web browser",
      reason: "A web browser waits for and responds to user input while it runs, so it is interactive. The others run through queued commands without user input."
    },
    {
      q: "Which of the following is a Python web development framework?",
      options: ["Django", "Laravel", "Spring", "Rails"],
      ans: "Django",
      reason: "Django, Pyramid and Flask are Python frameworks for website development. Laravel, Spring and Rails belong to other languages."
    },
    {
      q: "Which IDE comes with Python and gives an interactive console?",
      options: ["IDLE", "Replit", "Notepad", "Excel"],
      ans: "IDLE",
      reason: "IDLE is the IDE that comes with Python. It has a simple command-line interface with an interactive console. Replit is an online IDE."
    },
    {
      q: "The letters REPL in an online IDE stand for:",
      options: ["Read-Eval-Print-Loop", "Run-Execute-Print-Load", "Read-Edit-Process-Loop", "Retrieve-Eval-Parse-Loop"],
      ans: "Read-Eval-Print-Loop",
      reason: "REPL means Read-Eval-Print-Loop. It reads a command, evaluates it, prints the result and loops back for the next command."
    },
    {
      q: "Why do beginners find Python easy to read?",
      options: ["Its syntax is similar to English", "Its code runs without a computer", "It has no rules of syntax", "It uses only binary digits"],
      ans: "Its syntax is similar to English",
      reason: "Python syntax is quite similar to English, so you can often tell what a line of code does just by reading it."
    },
    {
      q: "Python is called an open-source language. This means that:",
      options: ["anyone can use it freely", "only schools can use it", "it must be bought first", "only experts can edit it"],
      ans: "anyone can use it freely",
      reason: "Open source means anybody can use the language, and help is available from developers around the world."
    },
    {
      q: "What is the main benefit of an online IDE such as Replit?",
      options: ["No installation is needed", "It works without internet", "It removes all syntax errors", "It needs no user account"],
      ans: "No installation is needed",
      reason: "With an online IDE you write and run code in the browser, so nothing has to be installed on your computer."
    },
    {
      q: "Which file name follows the good practice of meaningful naming for a swap program?",
      options: ["swap_values.py", "untitled.py", "test1.py", "code.py"],
      ans: "swap_values.py",
      reason: "A meaningful name tells you what the code does even without opening the file. Names like test1 or untitled do not."
    },
    {
      q: "Which statement must be written first to use the turtle library?",
      options: ["import turtle", "include turtle", "using turtle", "load turtle"],
      ans: "import turtle",
      reason: "The command import turtle invokes the library; after it all turtle functions can be used."
    },
    {
      q: "Which command loads the canvas of turtle graphics?",
      options: ["turtle.Screen()", "turtle.screen()", "turtle.canvas()", "turtle.window()"],
      ans: "turtle.Screen()",
      reason: "turtle.Screen() (with a capital S) loads the canvas. The lowercase form is a look-alike that does not exist."
    },
    {
      q: "In turtle graphics, all measurements are in:",
      options: ["pixels", "centimetres", "inches", "millimetres"],
      ans: "pixels",
      reason: "Turtle works on screen coordinates, so distances and sizes are measured in pixels."
    },
    {
      q: "A programmer wants to move the turtle to a new spot without drawing a line. Which function should be called first?",
      options: ["turtle.penup()", "turtle.pendown()", "turtle.reset()", "turtle.stop()"],
      ans: "turtle.penup()",
      reason: "penup() lifts the pen so the turtle can move without drawing; pendown() puts the pen down again."
    },
    {
      q: "Which function takes a radius as input and draws a circle?",
      options: ["turtle.circle()", "turtle.dot()", "turtle.round()", "turtle.curve()"],
      ans: "turtle.circle()",
      reason: "turtle.circle(radius) draws a circle. turtle.dot(size, colour) draws a filled dot of a given size instead."
    },
    {
      q: "What is the default pen colour in turtle graphics?",
      options: ["Black", "Blue", "Red", "White"],
      ans: "Black",
      reason: "By default the turtle draws in black; pencolor() changes it."
    },
    {
      q: "Which function clears the canvas so that a new drawing can be started?",
      options: ["turtle.reset()", "turtle.home()", "turtle.penup()", "turtle.dot()"],
      ans: "turtle.reset()",
      reason: "turtle.reset() clears the canvas and resets the turtle. home() only moves the turtle back to the starting point."
    },
    {
      q: "What does the statement turtle.dot(10, \"Blue\") draw?",
      options: ["a blue dot of size 10 pixels", "a blue circle of radius 10", "a blue line 10 pixels long", "ten small blue dots"],
      ans: "a blue dot of size 10 pixels",
      reason: "dot() takes a size and a colour, so it prints one filled blue dot 10 pixels across at the turtle's position."
    },
    {
      q: "<div class=\"stimulus\">The turtle drew the figure below, using forward(100) for each side.<svg viewBox=\"0 0 230 170\" style=\"width:100%;max-width:230px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"37.6\" y1=\"152.0\" x2=\"192.4\" y2=\"152.0\" stroke=\"#1d4ed8\" stroke-width=\"2.4\"/><line x1=\"192.4\" y1=\"152.0\" x2=\"115.0\" y2=\"18.0\" stroke=\"#1d4ed8\" stroke-width=\"2.4\"/><line x1=\"115.0\" y1=\"18.0\" x2=\"37.6\" y2=\"152.0\" stroke=\"#1d4ed8\" stroke-width=\"2.4\"/><circle cx=\"37.6\" cy=\"152.0\" r=\"4.5\" fill=\"#16a34a\"/><text x=\"37.63506392859017\" y=\"168.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#16a34a\">start</text></svg></div>Which turn does the turtle make after each side?",
      options: ["left(120)", "left(60)", "left(90)", "left(45)"],
      ans: "left(120)",
      reason: "An equilateral triangle needs an outside turn of 360 / 3 = 120 degrees at each corner."
    },
    {
      q: "<div class=\"stimulus\">Study the turtle program.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">import turtle\nfor i in range(4):\n    turtle.forward(100)\n    turtle.left(90)</pre></div>What shape does it draw?",
      options: ["Square", "Triangle", "Rectangle", "Pentagon"],
      ans: "Square",
      reason: "Four equal sides of 100 pixels with a 90-degree turn each time make a square."
    },
    {
      q: "<div class=\"stimulus\">Study the statements.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">turtle.forward(50)\nturtle.penup()\nturtle.forward(50)\nturtle.pendown()\nturtle.forward(50)</pre></div>How many separate line pieces are drawn?",
      options: ["Two", "One", "Three", "Four"],
      ans: "Two",
      reason: "The first 50 pixels are drawn, the next 50 are moved with the pen up (no line), and the last 50 are drawn again. That gives two separate pieces."
    },
    {
      q: "A collection of ready-made code meant for a particular task is called a:",
      options: ["library", "operator", "keyword", "comment"],
      ans: "library",
      reason: "A library is a set of code written for a task, so we can get a result with one line instead of writing tens of lines ourselves."
    },
    {
      q: "Which keyword brings a library into a Python program?",
      options: ["import", "include", "using", "load"],
      ans: "import",
      reason: "Python uses import. The word include is a look-alike from other languages."
    },
    {
      q: "Pip is a:",
      options: ["package manager", "code editor", "web browser", "language translator"],
      ans: "package manager",
      reason: "Pip installs Python packages and makes sure all their dependencies are installed too."
    },
    {
      q: "A program must show only the name of the current month, such as September. Which strftime() format code does it use?",
      options: ["%B", "%A", "%Y", "%S"],
      ans: "%B",
      reason: "%B gives the full month name, %A the weekday name, %Y the full year and %S the seconds."
    },
    {
      q: "What is the main advantage of using a library?",
      options: ["It reuses ready-made, tested code", "It avoids writing any program", "It removes every bug", "It speeds up the processor"],
      ans: "It reuses ready-made, tested code",
      reason: "Libraries give already written and tested functions, so we only import them and call them with the right arguments."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">import datetime\nx = datetime.datetime.now()\nprint(x.year)</pre></div>What does the code display?",
      options: ["the current year", "the current month", "the current day", "the current time"],
      ans: "the current year",
      reason: "x holds the current date and time, and x.year extracts only the year part."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">import datetime\nx = datetime.datetime(2023, 9, 13)\nprint(x.strftime(\"%A\"))</pre></div>What is the output of the following code?",
      options: ["Wednesday", "Tuesday", "September", "13"],
      ans: "Wednesday",
      reason: "The date 13 September 2023 was a Wednesday, and %A returns the full name of the weekday."
    },
    {
      q: "What is the purpose of a variable in a program?",
      options: ["to store a value for later use", "to repeat a block of code", "to display output on screen", "to translate code to binary"],
      ans: "to store a value for later use",
      reason: "A variable stores some information that can be used later in the program without calculating or typing it again."
    },
    {
      q: "Variable names in Python are case sensitive. This means that:",
      options: ["Num and num are different variables", "Num and num are the same variable", "names must be written in capitals", "names can contain only letters"],
      ans: "Num and num are different variables",
      reason: "Python treats uppercase and lowercase letters as different, so Num and num name two separate variables."
    },
    {
      q: "Which data type handles a sequence of characters?",
      options: ["String", "Integer", "Float", "Boolean"],
      ans: "String",
      reason: "Sequences of characters, such as words and sentences, are handled by the string data type."
    },
    {
      q: "Which of the following is a valid Python variable name?",
      options: ["temp_var", "2nd_value", "total marks", "my-var"],
      ans: "temp_var",
      reason: "A name may mix letters, digits and underscores, but cannot start with a digit, contain spaces or use a hyphen."
    },
    {
      q: "Values that cannot be changed after they are defined are kept in a:",
      options: ["tuple", "list", "variable", "loop"],
      ans: "tuple",
      reason: "A tuple is like a list, written in round brackets, but it is immutable: once defined its values cannot be changed."
    },
    {
      q: "A program runs without any syntax error but gives wrong results because the instructions are in the wrong order. This is called a:",
      options: ["logical bug", "syntax error", "compile error", "typing error"],
      ans: "logical bug",
      reason: "The syntax is fine, but the sequence of instructions is wrong. Such an error is a logical bug."
    },
    {
      q: "What is a dry run?",
      options: ["tracing the variables by hand on paper", "running the code with no input", "running the code in a browser", "deleting variables before running"],
      ans: "tracing the variables by hand on paper",
      reason: "In a dry run you execute the program on paper and keep track of the values of the variables, line by line."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">x = 5\ny = 3\ntemp = x\nx = y\ny = temp\nprint(x, y)</pre></div>What is the output of the following code?",
      options: ["3 5", "5 3", "3 3", "5 5"],
      ans: "3 5",
      reason: "temp saves 5, x takes 3, then y takes the saved 5. So x = 3 and y = 5; the values are swapped."
    },
    {
      q: "Which function displays output on the screen in Python?",
      options: ["print()", "input()", "eval()", "len()"],
      ans: "print()",
      reason: "print() shows whatever is inside its brackets on the screen. input() does the opposite job: it reads from the user."
    },
    {
      q: "Which function accepts data typed by the user?",
      options: ["input()", "print()", "scan()", "get()"],
      ans: "input()",
      reason: "input() takes data from the user and the value can be stored in a variable. scan() and get() are look-alikes from other languages."
    },
    {
      q: "In what form does input() treat the data typed by the user?",
      options: ["As a string of characters", "As an integer number", "As a decimal number", "As a Boolean value"],
      ans: "As a string of characters",
      reason: "Whatever is typed is treated as characters, even digits. That is why numbers must be converted before arithmetic."
    },
    {
      q: "Which function converts numeric text read by input() into a number for arithmetic?",
      options: ["eval()", "print()", "len()", "abs()"],
      ans: "eval()",
      reason: "eval() evaluates the entered text, so a typed 123 becomes the number 123 and can be added."
    },
    {
      q: "Two string inputs \"12\" and \"5\" are joined to give \"125\". What is this joining called?",
      options: ["concatenation", "iteration", "indexing", "evaluation"],
      ans: "concatenation",
      reason: "Adding two strings joins them end to end instead of adding numbers. This is concatenation."
    },
    {
      q: "<div class=\"stimulus\">Study the code. The user types 123 when the program runs.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">num = input()\nprint(num + num)</pre></div>What is the output of the following code?",
      options: ["123123", "246", "123 123", "Error"],
      ans: "123123",
      reason: "input() returns the text \"123\". Adding two strings concatenates them, giving 123123."
    },
    {
      q: "<div class=\"stimulus\">Study the code. The user types 123 when the program runs.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">num = eval(input())\nprint(num + num)</pre></div>What is the output of the following code?",
      options: ["246", "123123", "123 123", "Error"],
      ans: "246",
      reason: "eval() turns the text 123 into the number 123, so adding it to itself gives 246."
    },
    {
      q: "Which operator returns the remainder of a division?",
      options: ["%", "/", "//", "**"],
      ans: "%",
      reason: "The modulo operator % returns the remainder, for example 5 % 4 is 1."
    },
    {
      q: "Which operator raises a number to a power?",
      options: ["**", "^", "//", "%"],
      ans: "**",
      reason: "** is exponentiation. The symbol ^ is a look-alike: in Python it is the bitwise XOR operator."
    },
    {
      q: "The integer division operator // discards the decimal part. What does 17 // 5 give?",
      options: ["3", "3.4", "2", "4"],
      ans: "3",
      reason: "17 divided by 5 is 3.4; // keeps only the whole part, which is 3."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">print(10 - 2 * 3 + 8 // 4)</pre></div>What is the output of the following code?",
      options: ["6", "10", "14", "8"],
      ans: "6",
      reason: "Multiplication and integer division come first: 2 * 3 = 6 and 8 // 4 = 2. Then 10 - 6 + 2 = 6."
    },
    {
      q: "Which bitwise operator sets a result bit to 1 only when both compared bits are 1?",
      options: ["AND (&)", "OR (|)", "XOR (^)", "NOT (~)"],
      ans: "AND (&)",
      reason: "Bitwise AND fixes a bit to 1 only if both bits are 1. OR needs at least one, and XOR needs exactly one."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">print(6 ^ 3)</pre></div>What is the output of the following code?",
      options: ["5", "7", "2", "3"],
      ans: "5",
      reason: "6 is 110 and 3 is 011 in binary. XOR gives 1 where the bits differ: 101, which is 5."
    },
    {
      q: "Which operators check whether a value is present in an object such as a list?",
      options: ["in and not in", "is and is not", "and and or", "== and !="],
      ans: "in and not in",
      reason: "The membership operators in and not in return True if a value is present or not present in the object."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">L = [1, 3, 5, 7]\nprint(5 in L, 4 in L)</pre></div>What is the output of the following code?",
      options: ["True False", "False False", "False True", "True True"],
      ans: "True False",
      reason: "5 is a member of the list but 4 is not, so the results are True and False."
    },
    {
      q: "Which operator means 'not equal to' in Python?",
      options: ["!=", "<>", "=!", "=="],
      ans: "!=",
      reason: "!= is the not-equal comparison operator. The form &lt;&gt; is not used in Python 3 and == tests equality."
    },
    {
      q: "A form is accepted only when the age is at least 18 and an ID number is given. Which operator joins the two conditions?",
      options: ["and", "or", "not", "in"],
      ans: "and",
      reason: "The logical operator and gives True only when all the conditions are met."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">x = 7\nprint(x &gt; 1 and x &lt; 10)</pre></div>What is the output of the following code?",
      options: ["True", "False", "7", "Error"],
      ans: "True",
      reason: "Both x &gt; 1 and x &lt; 10 are True, so the and operator gives True. This is how the range 1 &lt; x &lt; 10 is checked."
    },
    {
      q: "A program must act on all leftover cases when every earlier condition is false. Which keyword handles them?",
      options: ["else", "elif", "then", "otherwise"],
      ans: "else",
      reason: "else has no condition. It runs only when all the if and elif conditions fail."
    },
    {
      q: "In an if-elif-else structure, the word elif stands for:",
      options: ["else if", "end if", "else for", "each if"],
      ans: "else if",
      reason: "elif is short for else-if. It adds another condition that is tested only if the earlier ones failed."
    },
    {
      q: "In an if-elif-else chain, how many of the branches are executed?",
      options: ["Only one", "All of them", "At least two", "None of them"],
      ans: "Only one",
      reason: "Python checks the conditions from the top and runs only the first branch whose condition is true; the rest are skipped."
    },
    {
      q: "Why is indentation important inside an if block?",
      options: ["It marks the block of code", "It makes the program run faster", "It adds comments to the code", "It declares the variable types"],
      ans: "It marks the block of code",
      reason: "Python uses indentation to know which lines are inside the if statement. Wrong indentation causes logical bugs."
    },
    {
      q: "A login program compares the typed password with the saved one and asks the user to re-enter it if they differ. Which type of operator makes this check?",
      options: ["Comparison operator", "Arithmetic operator", "Bitwise operator", "Membership operator"],
      ans: "Comparison operator",
      reason: "Checking whether two values are equal or not equal is done with comparison operators such as == and !=."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">num = 0\nif num % 2 == 0:\n    print(\"Even\")\nelif num == 0:\n    print(\"Zero\")\nelse:\n    print(\"Odd\")</pre></div>What is the output of the following code?",
      options: ["Even", "Zero", "Odd", "Even / Zero"],
      ans: "Even",
      reason: "0 % 2 is 0, so the first condition is true and Even is printed. In if-elif-else the later branches are skipped, so the zero case must be tested first."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">marks = 72\nif marks &gt;= 80:\n    print(\"A\")\nelif marks &gt;= 60:\n    print(\"B\")\nelse:\n    print(\"C\")</pre></div>What is the output of the following code?",
      options: ["B", "A", "C", "A / B"],
      ans: "B",
      reason: "72 fails marks &gt;= 80 but passes marks &gt;= 60, so B is printed and the else part is skipped."
    },
    {
      q: "<div class=\"stimulus\">The flowchart checks whether an entered number is even.<svg viewBox=\"0 0 260 185\" style=\"width:100%;max-width:260px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"fa\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><polygon points=\"130,28.0 210.0,60 130,92.0 50.0,60\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"130\" y=\"64\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">num % 2 == 0 ?</text><rect x=\"10\" y=\"140\" width=\"100\" height=\"34\" rx=\"6\" fill=\"#d4f3d0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"60\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Print Even</text><rect x=\"150\" y=\"140\" width=\"100\" height=\"34\" rx=\"6\" fill=\"#ffd6d6\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"200\" y=\"161\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Print Odd</text><line x1=\"95\" y1=\"75\" x2=\"60\" y2=\"139\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#fa)\"/><line x1=\"165\" y1=\"75\" x2=\"200\" y2=\"139\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#fa)\"/><text x=\"66\" y=\"100\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">True</text><text x=\"194\" y=\"100\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">False</text></svg></div>What is printed when the user enters 7?",
      options: ["Odd", "Even", "7", "Nothing"],
      ans: "Odd",
      reason: "7 % 2 is 1, so the condition is False and the flowchart takes the Print Odd path."
    },
    {
      q: "Which function is used with a for loop to set how many times it repeats?",
      options: ["range()", "len()", "print()", "input()"],
      ans: "range()",
      reason: "range() defines the values the loop index takes, and so the number of repetitions."
    },
    {
      q: "In a for loop that uses range(5), what is the value of the index i in the first repetition?",
      options: ["0", "1", "5", "-1"],
      ans: "0",
      reason: "By default the index of a for loop starts at 0 with a step of 1."
    },
    {
      q: "What is the last value that i takes in: for i in range(3, 8)?",
      options: ["7", "8", "3", "5"],
      ans: "7",
      reason: "The end value of range() is not included, so the loop stops after 7."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">out = []\nfor i in range(10, 20, 2):\n    out.append(i)\nprint(out)</pre></div>What is the output of the following code?",
      options: ["[10, 12, 14, 16, 18]", "[10, 12, 14, 16, 18, 20]", "[12, 14, 16, 18]", "[10, 11, 12, 13, 14]"],
      ans: "[10, 12, 14, 16, 18]",
      reason: "The loop starts at 10, moves in steps of 2 and stops before 20, giving 10, 12, 14, 16, 18."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">total = 0\nfor i in range(10):\n    total = total + (i + 1)\nprint(total)</pre></div>What is the output of the following code?",
      options: ["55", "45", "50", "66"],
      ans: "55",
      reason: "i runs from 0 to 9, so i + 1 runs from 1 to 10. The sum of the first ten positive numbers is 55."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">out = []\nfor i in range(5, 0, -1):\n    out.append(i)\nprint(out)</pre></div>What is the output of the following code?",
      options: ["[5, 4, 3, 2, 1]", "[5, 4, 3, 2, 1, 0]", "[4, 3, 2, 1, 0]", "[1, 2, 3, 4, 5]"],
      ans: "[5, 4, 3, 2, 1]",
      reason: "A negative step counts downwards from 5 and stops before 0, so 0 is not included."
    },
    {
      q: "A loop with range(5) prints (i + 1) * '*' to draw a 5-line triangle. Why is i + 1 used?",
      options: ["The index starts at 0", "Stars need one extra", "range skips zero", "i is a string"],
      ans: "The index starts at 0",
      reason: "Without + 1 the first line would be blank, because 0 multiplied by anything gives nothing."
    },
    {
      q: "What does the colon after a for statement show?",
      options: ["Indented lines form the loop body", "The loop has now finished running", "A comment starts after the colon", "The loop repeats without ending"],
      ans: "Indented lines form the loop body",
      reason: "The colon tells Python that the following indented lines are executed inside the loop."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">for i in range(4):\n    line = (i + 1) * \"*\"\nprint(len(line))</pre></div>What is the output of the following code?",
      options: ["4", "3", "5", "0"],
      ans: "4",
      reason: "The loop runs for i = 0 to 3. The last line is 4 stars, so its length is 4."
    },
    {
      q: "Which symbols are used to write a list in Python?",
      options: ["Square brackets [ ]", "Round brackets ( )", "Curly brackets { }", "Angle brackets < >"],
      ans: "Square brackets [ ]",
      reason: "A list is defined with square brackets. A tuple uses round brackets."
    },
    {
      q: "Why is a list better than creating 25 separate variables for 25 marks?",
      options: ["It holds many values under one name", "It makes the values unchangeable", "It speeds up the input", "It avoids using indexes"],
      ans: "It holds many values under one name",
      reason: "A list can contain many values and is alterable, so one name is enough instead of tracking 25 variable names."
    },
    {
      q: "<div class=\"stimulus\">A list named nums is shown below. Index numbers are printed under the boxes.<svg viewBox=\"0 0 220 60\" style=\"width:100%;max-width:220px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">1</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">3</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">5</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">7</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">9</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text></svg></div>Which expression gives the value 7?",
      options: ["nums[3]", "nums[4]", "nums[7]", "nums[2]"],
      ans: "nums[3]",
      reason: "List indexes start at 0, so the value 7 is at index 3."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">L = [2, 4, 6, 8]\nprint(len(L))</pre></div>What is the output of the following code?",
      options: ["4", "8", "20", "3"],
      ans: "4",
      reason: "len() returns the number of elements in the list, which is 4."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">nums = [4, 9, 2]\nprint(sum(nums), max(nums), min(nums))</pre></div>What is the output of the following code?",
      options: ["15 9 2", "15 2 9", "9 15 2", "9 2 4"],
      ans: "15 9 2",
      reason: "sum() adds all elements (15), max() gives the largest (9) and min() gives the smallest (2)."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">L = [1, 3, 5, 7, 9]\nL.insert(2, 5)\nprint(L.index(5))</pre></div>What is the output of the following code?",
      options: ["2", "3", "5", "1"],
      ans: "2",
      reason: "insert(2, 5) places a second 5 at index 2. index(5) returns the position of the first match, which is 2."
    },
    {
      q: "Which function of the random module gives a whole number between two limits?",
      options: ["randint()", "random()", "round()", "range()"],
      ans: "randint()",
      reason: "randint(a, b) returns a random integer in the given range; random() gives a decimal number between 0 and 1."
    },
    {
      q: "Which line must appear first before randint() can be used?",
      options: ["from random import randint", "import randint", "from randint import random", "include random"],
      ans: "from random import randint",
      reason: "randint belongs to the random module, so it must be imported from there before it is called."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">L = []\nfor i in range(3):\n    L.append(i * 2)\nprint(L)</pre></div>What is the output of the following code?",
      options: ["[0, 2, 4]", "[2, 4, 6]", "[0, 1, 2]", "[0, 2, 4, 6]"],
      ans: "[0, 2, 4]",
      reason: "The empty list is filled by append() with 0, 2 and 4 for i = 0, 1, 2."
    },
    {
      q: "Which keyword sends a result back from a function to the part that called it?",
      options: ["return", "give", "send", "output"],
      ans: "return",
      reason: "return sends the value computed in the function back to the caller."
    },
    {
      q: "A variable that is created inside a function is called a:",
      options: ["local variable", "global variable", "constant variable", "static variable"],
      ans: "local variable",
      reason: "A variable defined inside a function exists only there, so it is a local variable."
    },
    {
      q: "Why is it easier to test a variable inside a function than one in the main program?",
      options: ["Its scope is limited to the function", "It is permanently stored on disk", "It can never change its value", "It has no name of its own"],
      ans: "Its scope is limited to the function",
      reason: "A local variable does not exist outside its function, so the function can be tested on its own."
    },
    {
      q: "A line must be drawn at several places in a program. Why is a function used for this?",
      options: ["Code is written once and reused", "It makes the code run slower", "It removes the need for any loop", "It hides all errors from the user"],
      ans: "Code is written once and reused",
      reason: "A function holds the code once; it can be called again whenever the line is needed, so there is no duplication."
    },
    {
      q: "When a function with two arguments is called, the values must be given in the same:",
      options: ["order as in the definition", "alphabetical order", "random order", "order of the keyboard"],
      ans: "order as in the definition",
      reason: "Arguments are matched by position, so the calling order must be the same as the order in the function definition."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">def to_f(c):\n    return c * 9 / 5 + 32\nprint(to_f(100))</pre></div>What is the output of the following code?",
      options: ["212.0", "132.0", "212", "68.0"],
      ans: "212.0",
      reason: "100 * 9 / 5 = 180.0 and adding 32 gives 212.0. Division with / always returns a decimal number."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">def double(n):\n    return n * 2\nprint(double(double(3)))</pre></div>What is the output of the following code?",
      options: ["12", "6", "9", "36"],
      ans: "12",
      reason: "double(3) returns 6, and then double(6) returns 12."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">x = 10\ndef change():\n    x = 5\nchange()\nprint(x)</pre></div>What is the output of the following code?",
      options: ["10", "5", "15", "Error"],
      ans: "10",
      reason: "The x inside change() is a local variable. The global x is not touched, so 10 is printed."
    },
    {
      q: "Which button of the Debug Control window runs the code one line at a time?",
      options: ["Step", "Go", "Over", "Out"],
      ans: "Step",
      reason: "Each press of Step executes the next line of code, so you can watch the variables change."
    },
    {
      q: "While stepping, a programmer wants a whole function call to run at once without stepping through it. Which button is used?",
      options: ["Over", "Step", "Go", "Out"],
      ans: "Over",
      reason: "Over executes the function completely and returns its value, but the debugger skips going inside it."
    },
    {
      q: "Inside a function under the debugger, a programmer wants to finish the function and return to the caller. Which button is used?",
      options: ["Out", "Step", "Over", "Go"],
      ans: "Out",
      reason: "Out skips the remaining part of the function you are examining and comes out of it."
    },
    {
      q: "<div class=\"stimulus\">The Debug Control buttons are shown. The highlighted button is Go.<svg viewBox=\"0 0 304 46\" style=\"width:100%;max-width:304px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"10\" width=\"52\" height=\"26\" rx=\"4\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"36\" y=\"27\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Go</text><rect x=\"68\" y=\"10\" width=\"52\" height=\"26\" rx=\"4\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"94\" y=\"27\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Step</text><rect x=\"126\" y=\"10\" width=\"52\" height=\"26\" rx=\"4\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"152\" y=\"27\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Over</text><rect x=\"184\" y=\"10\" width=\"52\" height=\"26\" rx=\"4\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"210\" y=\"27\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Out</text><rect x=\"242\" y=\"10\" width=\"52\" height=\"26\" rx=\"4\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"268\" y=\"27\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Quit</text></svg></div>What does the highlighted button do?",
      options: ["Runs to the next breakpoint", "Executes only a single line", "Skips a function call entirely", "Leaves the current function"],
      ans: "Runs to the next breakpoint",
      reason: "Go jumps directly to the next breakpoint, so the program is not stepped line by line."
    },
    {
      q: "A programmer wants the debugger to pause at line 7 every time the program runs. What should be set on that line?",
      options: ["A breakpoint", "A comment", "A variable", "A loop"],
      ans: "A breakpoint",
      reason: "A breakpoint is a line that needs close examination; the debugger makes a stopover on it."
    },
    {
      q: "A programmer wants to stop a script at a chosen line from inside the code and inspect it with pdb. Which statement is added?",
      options: ["pdb.set_trace()", "pdb.stop()", "pdb.pause()", "pdb.break()"],
      ans: "pdb.set_trace()",
      reason: "pdb.set_trace() acts as a breakpoint: the program stops on the line after it and can be executed line by line."
    },
    {
      q: "<div class=\"stimulus\">Study the code.<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">x = 5\ny = 3\ntemp = 0\ntemp = x\ny = temp\nx = y\nprint(x, y)</pre></div>What is the output of the following code?",
      options: ["5 5", "3 5", "3 3", "5 3"],
      ans: "5 5",
      reason: "After y = temp, y becomes 5, so the old value 3 is lost. Then x = y makes x 5. Both hold 5, which shows the logical bug."
    }
    ];
  }
});
