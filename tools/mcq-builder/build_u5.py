import sys
sys.path.insert(0, '.')
import u5_a, u5_b
from lib import *
import fix_u5
fix_u5.apply(); fix_u5.apply2()
n, lv, longest, secs, svgq, stimq = stats(5)
assert n == 100, n
print(n, lv, 'diagram/table q:', svgq, 'longest-ans:', longest, 'tells:', tell_list(5))
print(secs)
HEADER = """// Class 11 Computer Science — Unit 5: Applications of Computer Science
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 5, pp.155-168) and the SLOs
// CS-11-E-01 (technologies behind IoT, cloud computing and blockchain) and CS-11-E-02 (stakeholders' interests in AI system design).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario, diagram and table questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG."""
if '--write' in sys.argv:
    write_js(5, '../../data/computer/11th/11th-computer-ch5-applications-of-computer-science.js',
             "Unit 5: Applications of Computer Science", "ch5", 5, HEADER)
    print('written')
