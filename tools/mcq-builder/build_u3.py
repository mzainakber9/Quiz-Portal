import sys
sys.path.insert(0, '.')
import u3_a, u3_b, u3_c
from lib import *
for _x in QS[3]: _x['reason'] = h(_x['reason'])
n, lv, longest, secs, svgq, stimq = stats(3)
assert n == 100, n
HEADER = """// Class 11 Computer Science — Unit 3: Programming Fundamentals
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 3) and the SLOs
// CS-11-C-01 to C-07 (programs, Python, Turtle graphics, libraries, variables, sequence/selection/repetition, lists, functions, debugging).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with code-trace and diagram questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG; Python code uses real syntax."""
write_js(3, '../../data/computer/11th/11th-computer-ch3-programming-fundamentals.js', "Unit 3: Programming Fundamentals", "ch3", 3, HEADER)
print(n, lv, secs, 'diagram/table:', svgq, 'stimulus:', stimq, 'tells:', tell_list(3))
