import sys
sys.path.insert(0, '.')
import u2_a, u2_b
from lib import *
import fix_u2
def drop(key):
    h = [i for i, x in enumerate(QS[2]) if key in x['q']]; assert len(h) == 1, (key, h); del QS[2][h[0]]
drop("best describes a 'problem'")
drop("shifts larger elements to the right")
for key in ["has she applied", "simulation and a digital animation", "separates them", "even though it gives correct results"]:
    for x in QS[2]:
        if key in x['q'] and x['_lvl'] == 'A': x['_lvl'] = 'U'
fix_u2.apply()
n, lv, longest, secs, svgq, stimq = stats(2)
assert n == 100, n
HEADER = """// Class 11 Computer Science — Unit 2: Computational Thinking & Algorithms
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 2) and the SLOs
// CS-11-B-01 (plan, develop, test and refine computational artifacts: algorithms, flowcharts, pseudocode, trace tables)
// and CS-11-B-02 (search and sort algorithms: bubble sort, insertion sort, linear search, binary search).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario, flowchart and array-diagram questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG. Pseudocode uses the textbook conventions (<- for assignment, // for comments)."""
write_js(2, '../../data/computer/11th/11th-computer-ch2-computational-thinking-and-algorithms.js',
         "Unit 2: Computational Thinking & Algorithms", "ch2", 2, HEADER)
print(n, lv, secs, 'diagram/table questions:', svgq, 'tells left:', len(tell_list(2)))
