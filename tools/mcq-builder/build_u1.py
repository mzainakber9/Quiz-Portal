import sys
sys.path.insert(0, '.')
import u1_a, u1_b, u1_c, u1_d
from lib import *
import prune1, fix_u1
prune1.apply()
fix_u1.apply(1)
fix_u1.apply2(1)
RETAG_U = ["self-replicating", "copies itself and spreads", "looks genuine", "locked and the attackers", "appears to come from the bank",
           "same day", "side by side", "small group of users", "online email and document-editing", "private cloud and uses a third-party",
           "watches clerks", "data-protection laws", "one-time code"]
for key in RETAG_U:
    hits = [x for x in QS[1] if key in x['q']]
    for x in hits:
        if x['_lvl'] == 'A': x['_lvl'] = 'U'
n, lv, longest, secs, svgq, stimq = stats(1)
assert n == 100, n
HEADER = """// Class 11 Computer Science — Unit 1: Computer Systems
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 1) and the SLOs
// CS-11-A-01 to CS-11-A-04 (logic gates & Boolean algebra, SDLC, network topologies, cybersecurity) plus cloud computing.
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario and diagram questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG. A' means NOT A in Boolean expressions."""
write_js(1, '../../data/computer/11th/11th-computer-ch1-computer-systems.js',
         "Unit 1: Computer Systems", "ch1", 1, HEADER)
print(n, lv, secs, 'diagram/table questions:', svgq)
