import sys
sys.path.insert(0, '.')
import u7_a, u7_b, u7_c
from lib import *
for _x in QS[7]: _x['reason'] = h(_x['reason'])
n, lv, longest, secs, svgq, stimq = stats(7)
assert n == 75, n
HEADER = """// Class 11 Computer Science — Unit 7: Digital Literacy
// 75 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 7) and the SLO
// CS-11-G-01 (data collection strategies: qualitative interviews, simulations, prototypes, surveys; presenting data).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario, table and flow-diagram questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG."""
write_js(7, '../../data/computer/11th/11th-computer-ch7-digital-literacy.js', "Unit 7: Digital Literacy", "ch7", 7, HEADER)
print(n, lv, secs, 'diagram/table:', svgq, 'stimulus:', stimq, 'tells:', tell_list(7))
