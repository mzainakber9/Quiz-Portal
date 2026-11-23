import u1_a, u1_b, u1_c, u1_d
from lib import *
DROP = {5,7, 9,14,20,23,35,37,29, 47,50,62,65,60, 71*0-1, 78,83,84,87, 97,95,
        106,109,111,113,114,116,117,118,121,122,123,125,130,133,134,135}
DROP.discard(-1)
def apply():
    QS[1][:] = [x for i, x in enumerate(QS[1]) if i not in DROP]
