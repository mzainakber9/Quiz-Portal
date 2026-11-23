# -*- coding: utf-8 -*-
from lib import *
C = 3
S5 = "3.6 Variables and data types"
S6 = "3.7 Input / output"
S7 = "3.8 Operators"
S8 = "3.8.6 Conditional statements"

# ---------------- 3.6 Variables ----------------
add(C, S5, 'K', "What is the purpose of a variable in a program?", "to store a value for later use",
    ["to repeat a block of code", "to display output on screen", "to translate code to binary"],
    "A variable stores some information that can be used later in the program without calculating or typing it again.")
add(C, S5, 'K', "Variable names in Python are case sensitive. This means that:", "Num and num are different variables",
    ["Num and num are the same variable", "names must be written in capitals", "names can contain only letters"],
    "Python treats uppercase and lowercase letters as different, so Num and num name two separate variables.")
add(C, S5, 'K', "Which data type handles a sequence of characters?", "String",
    ["Integer", "Float", "Boolean"],
    "Sequences of characters, such as words and sentences, are handled by the string data type.")
add(C, S5, 'U', "Which of the following is a valid Python variable name?", "temp_var",
    ["2nd_value", "total marks", "my-var"],
    "A name may mix letters, digits and underscores, but cannot start with a digit, contain spaces or use a hyphen.")
add(C, S5, 'U', "Values that cannot be changed after they are defined are kept in a:", "tuple",
    ["list", "variable", "loop"],
    "A tuple is like a list, written in round brackets, but it is immutable: once defined its values cannot be changed.")
add(C, S5, 'U', "A program runs without any syntax error but gives wrong results because the instructions are in the wrong order. This is called a:", "logical bug",
    ["syntax error", "compile error", "typing error"],
    "The syntax is fine, but the sequence of instructions is wrong. Such an error is a logical bug.")
add(C, S5, 'U', "What is a dry run?", "tracing the variables by hand on paper",
    ["running the code with no input", "running the code in a browser", "deleting variables before running"],
    "In a dry run you execute the program on paper and keep track of the values of the variables, line by line.")
code = "x = 5\ny = 3\ntemp = x\nx = y\ny = temp\nprint(x, y)"
outq(C, S5, 'A', code, ["5 3", "3 3", "5 5"], "temp saves 5, x takes 3, then y takes the saved 5. So x = 3 and y = 5; the values are swapped.")

# ---------------- 3.7 I/O ----------------
add(C, S6, 'K', "Which function displays output on the screen in Python?", "print()",
    ["input()", "eval()", "len()"],
    "print() shows whatever is inside its brackets on the screen. input() does the opposite job: it reads from the user.")
add(C, S6, 'K', "Which function accepts data typed by the user?", "input()",
    ["print()", "scan()", "get()"],
    "input() takes data from the user and the value can be stored in a variable. scan() and get() are look-alikes from other languages.")
add(C, S6, 'U', "In what form does input() treat the data typed by the user?", "As a string of characters",
    ["As an integer number", "As a decimal number", "As a Boolean value"],
    "Whatever is typed is treated as characters, even digits. That is why numbers must be converted before arithmetic.")
add(C, S6, 'U', "Which function converts numeric text read by input() into a number for arithmetic?", "eval()",
    ["print()", "len()", "abs()"],
    "eval() evaluates the entered text, so a typed 123 becomes the number 123 and can be added.")
add(C, S6, 'U', "Two string inputs \"12\" and \"5\" are joined to give \"125\". What is this joining called?", "concatenation",
    ["iteration", "indexing", "evaluation"],
    "Adding two strings joins them end to end instead of adding numbers. This is concatenation.")
outq(C, S6, 'A', "num = input()\nprint(num + num)", ["246", "123 123", "Error"], "input() returns the text \"123\". Adding two strings concatenates them, giving 123123.", inputs=["123"],
     intro="Study the code. The user types 123 when the program runs.")
outq(C, S6, 'A', "num = eval(input())\nprint(num + num)", ["123123", "123 123", "Error"], "eval() turns the text 123 into the number 123, so adding it to itself gives 246.", inputs=["123"],
     intro="Study the code. The user types 123 when the program runs.")

# ---------------- 3.8 Operators ----------------
add(C, S7, 'K', "Which operator returns the remainder of a division?", "%",
    ["/", "//", "**"],
    "The modulo operator % returns the remainder, for example 5 % 4 is 1.")
add(C, S7, 'K', "Which operator raises a number to a power?", "**",
    ["^", "//", "%"],
    "** is exponentiation. The symbol ^ is a look-alike: in Python it is the bitwise XOR operator.")
add(C, S7, 'U', "The integer division operator // discards the decimal part. What does 17 // 5 give?", "3",
    ["3.4", "2", "4"],
    "17 divided by 5 is 3.4; // keeps only the whole part, which is 3.")
outq(C, S7, 'A', "print(10 - 2 * 3 + 8 // 4)", ["10", "14", "8"],
     "Multiplication and integer division come first: 2 * 3 = 6 and 8 // 4 = 2. Then 10 - 6 + 2 = 6.")
add(C, S7, 'U', "Which bitwise operator sets a result bit to 1 only when both compared bits are 1?", "AND (&)",
    ["OR (|)", "XOR (^)", "NOT (~)"],
    "Bitwise AND fixes a bit to 1 only if both bits are 1. OR needs at least one, and XOR needs exactly one.")
outq(C, S7, 'A', "print(6 ^ 3)", ["7", "2", "3"],
     "6 is 110 and 3 is 011 in binary. XOR gives 1 where the bits differ: 101, which is 5.")
add(C, S7, 'K', "Which operators check whether a value is present in an object such as a list?", "in and not in",
    ["is and is not", "and and or", "== and !="],
    "The membership operators in and not in return True if a value is present or not present in the object.")
outq(C, S7, 'U', "L = [1, 3, 5, 7]\nprint(5 in L, 4 in L)", ["False False", "False True", "True True"],
     "5 is a member of the list but 4 is not, so the results are True and False.")
add(C, S7, 'K', "Which operator means 'not equal to' in Python?", "!=",
    ["<>", "=!", "=="],
    "!= is the not-equal comparison operator. The form <> is not used in Python 3 and == tests equality.")
add(C, S7, 'U', "A form is accepted only when the age is at least 18 and an ID number is given. Which operator joins the two conditions?", "and",
    ["or", "not", "in"],
    "The logical operator and gives True only when all the conditions are met.")
outq(C, S7, 'A', "x = 7\nprint(x > 1 and x < 10)", ["False", "7", "Error"],
     "Both x > 1 and x < 10 are True, so the and operator gives True. This is how the range 1 < x < 10 is checked.")

# ---------------- 3.8.6 Conditionals ----------------
def ifelse_svg(cond, yes, no):
    s = FC_DEFS
    s += fc_shape('dec', 130, 60, 160, 64, cond)
    s += rect(10, 140, 100, 34, '#d4f3d0', 6) + text(60, 161, yes, 'middle', 11, True)
    s += rect(150, 140, 100, 34, '#ffd6d6', 6) + text(200, 161, no, 'middle', 11, True)
    s += '<line x1="95" y1="75" x2="60" y2="139" stroke="#222" stroke-width="1.6" marker-end="url(#fa)"/>'
    s += '<line x1="165" y1="75" x2="200" y2="139" stroke="#222" stroke-width="1.6" marker-end="url(#fa)"/>'
    s += text(66, 100, 'True', 'middle', 10) + text(194, 100, 'False', 'middle', 10)
    return svg(260, 185, s, 260)
add(C, S8, 'U', "A program must act on all leftover cases when every earlier condition is false. Which keyword handles them?", "else",
    ["elif", "then", "otherwise"],
    "else has no condition. It runs only when all the if and elif conditions fail.")
add(C, S8, 'K', "In an if-elif-else structure, the word elif stands for:", "else if",
    ["end if", "else for", "each if"],
    "elif is short for else-if. It adds another condition that is tested only if the earlier ones failed.")
add(C, S8, 'U', "In an if-elif-else chain, how many of the branches are executed?", "Only one",
    ["All of them", "At least two", "None of them"],
    "Python checks the conditions from the top and runs only the first branch whose condition is true; the rest are skipped.")
add(C, S8, 'U', "Why is indentation important inside an if block?", "It marks the block of code",
    ["It makes the program run faster", "It adds comments to the code", "It declares the variable types"],
    "Python uses indentation to know which lines are inside the if statement. Wrong indentation causes logical bugs.")
add(C, S8, 'U', "A login program compares the typed password with the saved one and asks the user to re-enter it if they differ. Which type of operator makes this check?", "Comparison operator",
    ["Arithmetic operator", "Bitwise operator", "Membership operator"],
    "Checking whether two values are equal or not equal is done with comparison operators such as == and !=.")
outq(C, S8, 'A', "num = 0\nif num % 2 == 0:\n    print(\"Even\")\nelif num == 0:\n    print(\"Zero\")\nelse:\n    print(\"Odd\")", ["Zero", "Odd", "Even / Zero"],
     "0 % 2 is 0, so the first condition is true and Even is printed. In if-elif-else the later branches are skipped, so the zero case must be tested first.")
outq(C, S8, 'A', "marks = 72\nif marks >= 80:\n    print(\"A\")\nelif marks >= 60:\n    print(\"B\")\nelse:\n    print(\"C\")", ["A", "C", "A / B"],
     "72 fails marks >= 80 but passes marks >= 60, so B is printed and the else part is skipped.")
add(C, S8, 'A', stim("The flowchart checks whether an entered number is even.", ifelse_svg("num % 2 == 0 ?", "Print Even", "Print Odd")) + "What is printed when the user enters 7?", "Odd",
    ["Even", "7", "Nothing"],
    "7 % 2 is 1, so the condition is False and the flowchart takes the Print Odd path.")
