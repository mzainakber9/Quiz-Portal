# -*- coding: utf-8 -*-
from lib import *
C = 3
S9 = "3.9 Loops (for, range)"
S10 = "3.10 Lists"
S11 = "3.11 Functions in Python"
S12 = "3.12 Debugging"

# ---------------- Loops ----------------
add(C, S9, 'K', "Which function is used with a for loop to set how many times it repeats?", "range()",
    ["len()", "print()", "input()"],
    "range() defines the values the loop index takes, and so the number of repetitions.")
add(C, S9, 'U', "In a for loop that uses range(5), what is the value of the index i in the first repetition?", "0",
    ["1", "5", "-1"],
    "By default the index of a for loop starts at 0 with a step of 1.")
add(C, S9, 'U', "What is the last value that i takes in: for i in range(3, 8)?", "7",
    ["8", "3", "5"],
    "The end value of range() is not included, so the loop stops after 7.")
outq(C, S9, 'A', "out = []\nfor i in range(10, 20, 2):\n    out.append(i)\nprint(out)", ["[10, 12, 14, 16, 18, 20]", "[12, 14, 16, 18]", "[10, 11, 12, 13, 14]"],
     "The loop starts at 10, moves in steps of 2 and stops before 20, giving 10, 12, 14, 16, 18.")
outq(C, S9, 'A', "total = 0\nfor i in range(10):\n    total = total + (i + 1)\nprint(total)", ["45", "50", "66"],
     "i runs from 0 to 9, so i + 1 runs from 1 to 10. The sum of the first ten positive numbers is 55.")
outq(C, S9, 'U', "out = []\nfor i in range(5, 0, -1):\n    out.append(i)\nprint(out)", ["[5, 4, 3, 2, 1, 0]", "[4, 3, 2, 1, 0]", "[1, 2, 3, 4, 5]"],
     "A negative step counts downwards from 5 and stops before 0, so 0 is not included.")
add(C, S9, 'U', "A loop with range(5) prints (i + 1) * '*' to draw a 5-line triangle. Why is i + 1 used?", "The index starts at 0",
    ["Stars need one extra", "range skips zero", "i is a string"],
    "Without + 1 the first line would be blank, because 0 multiplied by anything gives nothing.")
add(C, S9, 'U', "What does the colon after a for statement show?", "Indented lines form the loop body",
    ["The loop has now finished running", "A comment starts after the colon", "The loop repeats without ending"],
    "The colon tells Python that the following indented lines are executed inside the loop.")
outq(C, S9, 'A', "for i in range(4):\n    line = (i + 1) * \"*\"\nprint(len(line))", ["3", "5", "0"],
     "The loop runs for i = 0 to 3. The last line is 4 stars, so its length is 4.")

# ---------------- Lists ----------------
add(C, S10, 'K', "Which symbols are used to write a list in Python?", "Square brackets [ ]",
    ["Round brackets ( )", "Curly brackets { }", "Angle brackets < >"],
    "A list is defined with square brackets. A tuple uses round brackets.")
add(C, S10, 'U', "Why is a list better than creating 25 separate variables for 25 marks?", "It holds many values under one name",
    ["It makes the values unchangeable", "It speeds up the input", "It avoids using indexes"],
    "A list can contain many values and is alterable, so one name is enough instead of tracking 25 variable names.")
add(C, S10, 'U', stim("A list named nums is shown below. Index numbers are printed under the boxes.", array_svg([1, 3, 5, 7, 9])) + "Which expression gives the value 7?", "nums[3]",
    ["nums[4]", "nums[7]", "nums[2]"],
    "List indexes start at 0, so the value 7 is at index 3.")
outq(C, S10, 'U', "L = [2, 4, 6, 8]\nprint(len(L))", ["8", "20", "3"],
     "len() returns the number of elements in the list, which is 4.")
outq(C, S10, 'A', "nums = [4, 9, 2]\nprint(sum(nums), max(nums), min(nums))", ["15 2 9", "9 15 2", "9 2 4"],
     "sum() adds all elements (15), max() gives the largest (9) and min() gives the smallest (2).")
outq(C, S10, 'A', "L = [1, 3, 5, 7, 9]\nL.insert(2, 5)\nprint(L.index(5))", ["3", "5", "1"],
     "insert(2, 5) places a second 5 at index 2. index(5) returns the position of the first match, which is 2.")
add(C, S10, 'K', "Which function of the random module gives a whole number between two limits?", "randint()",
    ["random()", "round()", "range()"],
    "randint(a, b) returns a random integer in the given range; random() gives a decimal number between 0 and 1.")
add(C, S10, 'U', "Which line must appear first before randint() can be used?", "from random import randint",
    ["import randint", "from randint import random", "include random"],
    "randint belongs to the random module, so it must be imported from there before it is called.")
outq(C, S10, 'A', "L = []\nfor i in range(3):\n    L.append(i * 2)\nprint(L)", ["[2, 4, 6]", "[0, 1, 2]", "[0, 2, 4, 6]"],
     "The empty list is filled by append() with 0, 2 and 4 for i = 0, 1, 2.")

# ---------------- Functions ----------------
add(C, S11, 'K', "Which keyword sends a result back from a function to the part that called it?", "return",
    ["give", "send", "output"],
    "return sends the value computed in the function back to the caller.")
add(C, S11, 'K', "A variable that is created inside a function is called a:", "local variable",
    ["global variable", "constant variable", "static variable"],
    "A variable defined inside a function exists only there, so it is a local variable.")
add(C, S11, 'U', "Why is it easier to test a variable inside a function than one in the main program?", "Its scope is limited to the function",
    ["It is permanently stored on disk", "It can never change its value", "It has no name of its own"],
    "A local variable does not exist outside its function, so the function can be tested on its own.")
add(C, S11, 'U', "A line must be drawn at several places in a program. Why is a function used for this?", "Code is written once and reused",
    ["It makes the code run slower", "It removes the need for any loop", "It hides all errors from the user"],
    "A function holds the code once; it can be called again whenever the line is needed, so there is no duplication.")
add(C, S11, 'U', "When a function with two arguments is called, the values must be given in the same:", "order as in the definition",
    ["alphabetical order", "random order", "order of the keyboard"],
    "Arguments are matched by position, so the calling order must be the same as the order in the function definition.")
outq(C, S11, 'A', "def to_f(c):\n    return c * 9 / 5 + 32\nprint(to_f(100))", ["132.0", "212", "68.0"],
     "100 * 9 / 5 = 180.0 and adding 32 gives 212.0. Division with / always returns a decimal number.")
outq(C, S11, 'A', "def double(n):\n    return n * 2\nprint(double(double(3)))", ["6", "9", "36"],
     "double(3) returns 6, and then double(6) returns 12.")
outq(C, S11, 'A', "x = 10\ndef change():\n    x = 5\nchange()\nprint(x)", ["5", "15", "Error"],
     "The x inside change() is a local variable. The global x is not touched, so 10 is printed.")

# ---------------- Debugging ----------------
add(C, S12, 'K', "Which button of the Debug Control window runs the code one line at a time?", "Step",
    ["Go", "Over", "Out"],
    "Each press of Step executes the next line of code, so you can watch the variables change.")
add(C, S12, 'U', "While stepping, a programmer wants a whole function call to run at once without stepping through it. Which button is used?", "Over",
    ["Step", "Go", "Out"],
    "Over executes the function completely and returns its value, but the debugger skips going inside it.")
add(C, S12, 'U', "Inside a function under the debugger, a programmer wants to finish the function and return to the caller. Which button is used?", "Out",
    ["Step", "Over", "Go"],
    "Out skips the remaining part of the function you are examining and comes out of it.")
add(C, S12, 'U', stim("The Debug Control buttons are shown. The highlighted button is Go.", dbg_svg('Go')) + "What does the highlighted button do?", "Runs to the next breakpoint",
    ["Executes only a single line", "Skips a function call entirely", "Leaves the current function"],
    "Go jumps directly to the next breakpoint, so the program is not stepped line by line.")
add(C, S12, 'U', "A programmer wants the debugger to pause at line 7 every time the program runs. What should be set on that line?", "A breakpoint",
    ["A comment", "A variable", "A loop"],
    "A breakpoint is a line that needs close examination; the debugger makes a stopover on it.")
add(C, S12, 'U', "A programmer wants to stop a script at a chosen line from inside the code and inspect it with pdb. Which statement is added?", "pdb.set_trace()",
    ["pdb.stop()", "pdb.pause()", "pdb.break()"],
    "pdb.set_trace() acts as a breakpoint: the program stops on the line after it and can be executed line by line.")
code = "x = 5\ny = 3\ntemp = 0\ntemp = x\ny = temp\nx = y\nprint(x, y)"
outq(C, S12, 'A', code, ["3 5", "3 3", "5 3"],
     "After y = temp, y becomes 5, so the old value 3 is lost. Then x = y makes x 5. Both hold 5, which shows the logical bug.")
