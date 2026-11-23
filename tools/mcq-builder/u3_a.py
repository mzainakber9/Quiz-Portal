# -*- coding: utf-8 -*-
from lib import *
C = 3
S1 = "3.1 Computer program"
S2 = "3.2-3.3 Python overview and IDEs"
S3 = "3.4 Turtle graphics"
S4 = "3.5 Libraries"

# ---------------- 3.1 ----------------
add(C, S1, 'K', "A set of well-defined instructions that a computer can execute to solve a problem is called a:", "computer program",
    ["operating system", "web browser", "compiler"],
    "A computer program is a set of well-defined instructions that the computer executes, one at a time, to solve a problem.")
add(C, S1, 'K', "While a program is running, the program and the data it uses are kept in:", "main memory",
    ["hard disk", "monitor", "network card"],
    "A program is loaded from disk into main memory (RAM), where the processor fetches one instruction at a time. Keeping both program and data there makes execution faster.")
add(C, S1, 'K', "A program that accepts input from a user while it is running is called a(n):", "interactive program",
    ["batch program", "object program", "binary program"],
    "Interactive programs take input from a user or another program while running. Batch programs run a bunch of commands one after another.")
add(C, S1, 'U', "Print jobs line up in a queue, are processed one after the other, and the printer halts when the queue is empty. This is an example of a:", "batch program",
    ["interactive program", "compiled program", "machine program"],
    "In a batch program, multiple commands are bunched together, processed sequentially, and then the program halts.")
add(C, S1, 'U', "A language translator converts each line to machine language as soon as that line is about to execute. Which translator is this?", "Interpreter",
    ["Compiler", "Debugger", "Assembler"],
    "An interpreter converts and runs the code line by line. A compiler converts the whole code into an object file first.")
add(C, S1, 'U', "A compiler checks the code against the syntax rules and then produces an object file. What does this object file contain?", "machine language",
    ["pseudocode steps", "flowchart symbols", "English sentences"],
    "After the syntax check, the compiler converts the code into an object file of binary data, which is machine language that the processor understands.")
add(C, S1, 'U', "Which pair of languages uses a compiler?", "C++ and Fortran",
    ["Python and Ruby", "Ruby and JavaScript", "JavaScript and Python"],
    "C++, Java, Assembly Language and Fortran use a compiler. Python, JavaScript and Ruby use an interpreter.")
add(C, S1, 'U', "Which of the following is an example of an interactive program?", "A web browser",
    ["A print queue", "A nightly backup job", "A payroll batch run"],
    "A web browser waits for and responds to user input while it runs, so it is interactive. The others run through queued commands without user input.")

# ---------------- 3.2-3.3 ----------------
add(C, S2, 'K', "Which of the following is a Python web development framework?", "Django",
    ["Laravel", "Spring", "Rails"],
    "Django, Pyramid and Flask are Python frameworks for website development. Laravel, Spring and Rails belong to other languages.")
add(C, S2, 'K', "Which IDE comes with Python and gives an interactive console?", "IDLE",
    ["Replit", "Notepad", "Excel"],
    "IDLE is the IDE that comes with Python. It has a simple command-line interface with an interactive console. Replit is an online IDE.")
add(C, S2, 'K', "The letters REPL in an online IDE stand for:", "Read-Eval-Print-Loop",
    ["Run-Execute-Print-Load", "Read-Edit-Process-Loop", "Retrieve-Eval-Parse-Loop"],
    "REPL means Read-Eval-Print-Loop. It reads a command, evaluates it, prints the result and loops back for the next command.")
add(C, S2, 'U', "Why do beginners find Python easy to read?", "Its syntax is similar to English",
    ["Its code runs without a computer", "It has no rules of syntax", "It uses only binary digits"],
    "Python syntax is quite similar to English, so you can often tell what a line of code does just by reading it.")
add(C, S2, 'U', "Python is called an open-source language. This means that:", "anyone can use it freely",
    ["only schools can use it", "it must be bought first", "only experts can edit it"],
    "Open source means anybody can use the language, and help is available from developers around the world.")
add(C, S2, 'U', "What is the main benefit of an online IDE such as Replit?", "No installation is needed",
    ["It works without internet", "It removes all syntax errors", "It needs no user account"],
    "With an online IDE you write and run code in the browser, so nothing has to be installed on your computer.")
add(C, S2, 'U', "Which file name follows the good practice of meaningful naming for a swap program?", "swap_values.py",
    ["untitled.py", "test1.py", "code.py"],
    "A meaningful name tells you what the code does even without opening the file. Names like test1 or untitled do not.")

# ---------------- 3.4 Turtle ----------------
add(C, S3, 'K', "Which statement must be written first to use the turtle library?", "import turtle",
    ["include turtle", "using turtle", "load turtle"],
    "The command import turtle invokes the library; after it all turtle functions can be used.")
add(C, S3, 'K', "Which command loads the canvas of turtle graphics?", "turtle.Screen()",
    ["turtle.screen()", "turtle.canvas()", "turtle.window()"],
    "turtle.Screen() (with a capital S) loads the canvas. The lowercase form is a look-alike that does not exist.")
add(C, S3, 'K', "In turtle graphics, all measurements are in:", "pixels",
    ["centimetres", "inches", "millimetres"],
    "Turtle works on screen coordinates, so distances and sizes are measured in pixels.")
add(C, S3, 'U', "A programmer wants to move the turtle to a new spot without drawing a line. Which function should be called first?", "turtle.penup()",
    ["turtle.pendown()", "turtle.reset()", "turtle.stop()"],
    "penup() lifts the pen so the turtle can move without drawing; pendown() puts the pen down again.")
add(C, S3, 'K', "Which function takes a radius as input and draws a circle?", "turtle.circle()",
    ["turtle.dot()", "turtle.round()", "turtle.curve()"],
    "turtle.circle(radius) draws a circle. turtle.dot(size, colour) draws a filled dot of a given size instead.")
add(C, S3, 'K', "What is the default pen colour in turtle graphics?", "Black",
    ["Blue", "Red", "White"],
    "By default the turtle draws in black; pencolor() changes it.")
add(C, S3, 'U', "Which function clears the canvas so that a new drawing can be started?", "turtle.reset()",
    ["turtle.home()", "turtle.penup()", "turtle.dot()"],
    "turtle.reset() clears the canvas and resets the turtle. home() only moves the turtle back to the starting point.")
add(C, S3, 'U', "What does the statement turtle.dot(10, \"Blue\") draw?", "a blue dot of size 10 pixels",
    ["a blue circle of radius 10", "a blue line 10 pixels long", "ten small blue dots"],
    "dot() takes a size and a colour, so it prints one filled blue dot 10 pixels across at the turtle's position.")
cmds = [('f', 100), ('l', 120), ('f', 100), ('l', 120), ('f', 100), ('l', 120)]
add(C, S3, 'U', stim("The turtle drew the figure below, using forward(100) for each side.", turtle_svg(cmds)) + "Which turn does the turtle make after each side?",
    "left(120)", ["left(60)", "left(90)", "left(45)"],
    "An equilateral triangle needs an outside turn of 360 / 3 = 120 degrees at each corner.")
code = "import turtle\nfor i in range(4):\n    turtle.forward(100)\n    turtle.left(90)"
cm = [('f', 100), ('l', 90)] * 4
add(C, S3, 'A', stim("Study the turtle program.", pre(code)) + "What shape does it draw?", "Square",
    ["Triangle", "Rectangle", "Pentagon"],
    "Four equal sides of 100 pixels with a 90-degree turn each time make a square.")
cm = [('f', 50), ('pu',), ('f', 50), ('pd',), ('f', 50)]
code = "turtle.forward(50)\nturtle.penup()\nturtle.forward(50)\nturtle.pendown()\nturtle.forward(50)"
segs = len(turtle_sim(cm)[0])
assert segs == 2
add(C, S3, 'A', stim("Study the statements.", pre(code)) + "How many separate line pieces are drawn?", "Two",
    ["One", "Three", "Four"],
    "The first 50 pixels are drawn, the next 50 are moved with the pen up (no line), and the last 50 are drawn again. That gives two separate pieces.")

# ---------------- 3.5 Libraries ----------------
add(C, S4, 'K', "A collection of ready-made code meant for a particular task is called a:", "library",
    ["operator", "keyword", "comment"],
    "A library is a set of code written for a task, so we can get a result with one line instead of writing tens of lines ourselves.")
add(C, S4, 'K', "Which keyword brings a library into a Python program?", "import",
    ["include", "using", "load"],
    "Python uses import. The word include is a look-alike from other languages.")
add(C, S4, 'K', "Pip is a:", "package manager",
    ["code editor", "web browser", "language translator"],
    "Pip installs Python packages and makes sure all their dependencies are installed too.")
add(C, S4, 'U', "A program must show only the name of the current month, such as September. Which strftime() format code does it use?", "%B",
    ["%A", "%Y", "%S"],
    "%B gives the full month name, %A the weekday name, %Y the full year and %S the seconds.")
add(C, S4, 'U', "What is the main advantage of using a library?", "It reuses ready-made, tested code",
    ["It avoids writing any program", "It removes every bug", "It speeds up the processor"],
    "Libraries give already written and tested functions, so we only import them and call them with the right arguments.")
code = "import datetime\nx = datetime.datetime.now()\nprint(x.year)"
add(C, S4, 'U', stim("Study the code.", pre(code)) + "What does the code display?", "the current year",
    ["the current month", "the current day", "the current time"],
    "x holds the current date and time, and x.year extracts only the year part.")
outq(C, S4, 'A', "import datetime\nx = datetime.datetime(2023, 9, 13)\nprint(x.strftime(\"%A\"))", ["Tuesday", "September", "13"],
     "The date 13 September 2023 was a Wednesday, and %A returns the full name of the weekday.")
