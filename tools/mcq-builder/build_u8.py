import sys
sys.path.insert(0, '.')
import u8_a, u8_b
from lib import *
try:
    import fix_u8; fix_u8.apply(); fix_u8.apply2()
except ImportError:
    pass
n, lv, longest, secs, svgq, stimq = stats(8)
sh = sum(1 for x in QS[8] if len(set(len(o) for o in x['options'])) > 1 and len(x['ans']) == min(len(o) for o in x['options']))
print(n, lv, 'diagram/table q:', svgq, 'longest-ans:', longest, 'shortest-ans:', sh, 'tells:', tell_list(8))
print(secs)
HEADER = """// Class 11 Computer Science — Unit 8: Entrepreneurship in Digital Age
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 8, pp.204-217) and the SLO
// EN-11-H-01 (create, test and iterate a prototype for a business idea).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario, diagram and table questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG."""
if '--write' in sys.argv:
    assert n == 100
    write_js(8, '../../data/computer/11th/11th-computer-ch8-entrepreneurship-in-digital-age.js',
             "Unit 8: Entrepreneurship in Digital Age", "ch8", 8, HEADER)
    print('written')
