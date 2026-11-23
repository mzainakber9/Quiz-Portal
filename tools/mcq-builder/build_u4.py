import sys
sys.path.insert(0, '.')
import u4_a, u4_b, u4_c
from lib import *
for _x in QS[4]: _x['reason'] = h(_x['reason'])
n, lv, longest, secs, svgq, stimq = stats(4)
assert n == 100, n
HEADER = """// Class 11 Computer Science — Unit 4: Data and Analysis
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 4) and the SLOs
// CS-11-D-01 (statistical modeling), D-02 (experimental design) and D-03 (summary statistics and data visuals).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with chart, table and code questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG."""
write_js(4, '../../data/computer/11th/11th-computer-ch4-data-and-analysis.js', "Unit 4: Data and Analysis", "ch4", 4, HEADER)
print(n, lv, secs, 'diagram/table:', svgq, 'stimulus:', stimq, 'tells:', tell_list(4))
