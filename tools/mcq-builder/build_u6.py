import sys
sys.path.insert(0, '.')
import u6_a, u6_b
from lib import *
try:
    import fix_u6; fix_u6.apply(); fix_u6.apply2()
except ImportError:
    pass
n, lv, longest, secs, svgq, stimq = stats(6)
print(n, lv, 'diagram/table q:', svgq, 'longest-ans:', longest, 'tells:', tell_list(6))
print(secs)
HEADER = """// Class 11 Computer Science — Unit 6: Impacts of Computing
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 6, pp.169-188) and the SLOs
// CS-11-F-01 (safe and responsible use of information sources, reliable vs unreliable information) and
// CS-11-F-02 (computing, connectivity and its environmental, cultural and human impact).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario, diagram and table questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG."""
if '--write' in sys.argv:
    assert n == 100
    write_js(6, '../../data/computer/11th/11th-computer-ch6-impacts-of-computing.js',
             "Unit 6: Impacts of Computing", "ch6", 6, HEADER)
    print('written')
