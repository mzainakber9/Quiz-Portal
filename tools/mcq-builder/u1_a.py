# -*- coding: utf-8 -*-
from lib import *
C = 1
SA = "1.1-1.2 Data representation, analog & digital signals"
SB = "1.3 Logic gates, truth tables, Boolean algebra, K-map"

# ---------------- 1.1 - 1.2 ----------------
add(C, SA, 'K', "A single binary digit, 0 or 1, is called a:", "bit", ["byte", "nibble", "word"],
    "A binary digit (0 or 1) is a <b>bit</b>. Groups of bits form binary code that represents data inside a computer.")
add(C, SA, 'U', "Inside a computer, an electronic switch has no current flowing through it. Which binary digit does this state represent?",
    "0 (switch OFF)", ["1 (switch ON)", "0 (switch ON)", "1 (switch OFF)"],
    "A switch with no current is OFF and represents binary <b>0</b>. When current flows the switch is ON and represents binary 1.")
add(C, SA, 'K', "What does ASCII stand for?", "American Standard Code for Information Interchange",
    ["American Standard Code for Internet Interaction", "Advanced System Code for Information Interchange", "Automatic Standard Code for Internal Interchange"],
    "ASCII is the American Standard Code for Information Interchange, the most commonly used alphanumeric code.")
add(C, SA, 'K', "The total number of characters represented by the ASCII code is:", "128", ["64", "256", "512"],
    "ASCII represents 128 characters (letters, digits and special symbols). 256 is the number of codes in an 8-bit extended set, not the ASCII count given in the book.")
add(C, SA, 'U', "Which group of characters is covered by alphanumeric codes?", "Letters, digits and special characters",
    ["Only the digits 0 to 9", "Only upper-case letters A to Z", "Only punctuation marks"],
    "Alphanumeric codes represent lower-case and upper-case letters, the digits 0 to 9, and special characters such as %, $, &, # and +.")
add(C, SA, 'K', "In a typical digital circuit, logic 0 and logic 1 are represented by voltage levels of about:", "0 V and +5 V",
    ["+5 V and 0 V", "+5 V and +10 V", "-5 V and +5 V"],
    "Logic 0 is about 0 V and logic 1 is about +5 V (in practice logic 0 is 0 to 0.8 V and logic 1 is 2 to 5 V). The order matters: 0 V is logic 0.")
add(C, SA, 'U', stim("The figure shows two signals, X (blue) and Y (red).", wave_pair_svg()) + "Which statement about the signals is correct?",
    "X is an analog signal and Y is a digital signal", ["X is a digital signal and Y is an analog signal", "Both X and Y are analog signals", "Both X and Y are digital signals"],
    "Signal X is a smooth, continuous waveform that can take any value in a range, so it is analog. Signal Y jumps between two levels (0 and 1), so it is digital.")
add(C, SA, 'U', "Which of the following is an example of a digital signal?", "An MP3 audio file",
    ["Human speech", "A VHS video tape", "A mercury thermometer reading"],
    "MP3 audio is stored as discrete 0s and 1s. Human speech, VHS tapes and a thermometer's reading vary continuously, so they are analog.")
add(C, SA, 'A', "A company must store thousands of recordings, copy them many times and send them over long distances without losing quality. Which type of signal is best suited?",
    "Digital signals, because they resist noise and can be copied without loss",
    ["Analog signals, because they vary continuously", "Analog signals, because they copy more accurately", "Both lose quality equally over distance"],
    "Digital signals are more resistant to noise, travel long distances with little degradation and can be copied without quality loss. Analog signals degrade when copied or transmitted.")

# ---------------- 1.3 gates ----------------
for kind, name, wrong, lvl in [
    ('AND', "AND gate", ["OR gate", "NAND gate", "XOR gate"], 'K'),
    ('OR', "OR gate", ["NOR gate", "XOR gate", "AND gate"], 'K'),
    ('NAND', "NAND gate", ["AND gate", "NOR gate", "NOT gate"], 'U'),
    ('NOR', "NOR gate", ["NAND gate", "OR gate", "XOR gate"], 'U'),
    ('XOR', "XOR gate", ["OR gate", "NOR gate", "XNOR gate"], 'U'),
    ('NOT', "NOT gate", ["AND gate", "NOR gate", "XOR gate"], 'K')]:
    why = {
     'AND': "The D-shaped symbol with a flat input side is the AND gate (output 1 only when all inputs are 1).",
     'OR': "The curved-back, pointed symbol is the OR gate (output 1 when any input is 1).",
     'NAND': "An AND symbol with a small circle at the output is a NAND gate. The circle means the AND result is inverted.",
     'NOR': "An OR symbol with a small circle at the output is a NOR gate. The circle means the OR result is inverted.",
     'XOR': "An OR-like symbol with an extra curved line on the input side is the exclusive-OR (XOR) gate.",
     'NOT': "A triangle with a small circle and a single input is the NOT gate (inverter).",
    }[kind]
    add(C, SB, lvl, stim("Study the symbol of the logic gate.", gate_svg(kind)) + "Identify the gate shown in the figure.", name, wrong, why)

add(C, SB, 'K', "The output of a two-input AND gate is 1 only when:", "both inputs are 1", ["either input is 1", "both inputs are 0", "the two inputs are different"],
    "An AND gate gives HIGH (1) output only when all its inputs are HIGH. Its expression is F = xy.")
add(C, SB, 'K', "An OR gate produces output 0 only when:", "all of its inputs are 0", ["any one input is 1", "all of its inputs are 1", "its inputs are different"],
    "The OR gate output is 1 when any input is 1, so it is 0 only when every input is 0.")
add(C, SB, 'K', "Which gate is commonly known as an inverter?", "NOT gate", ["NAND gate", "NOR gate", "XOR gate"],
    "The NOT gate has one input and converts LOW to HIGH and HIGH to LOW, so it is called an inverter.")
add(C, SB, 'U', "In a logic gate symbol, the small circle at the output indicates:", "inversion of the output", ["an additional input", "the power connection", "a delay in the signal"],
    "A small circle (bubble) on the output means the output is inverted. This is what turns AND into NAND and OR into NOR.")
add(C, SB, 'U', "A NAND gate is equivalent to:", "an AND gate followed by a NOT gate",
    ["an OR gate followed by a NOT gate", "an AND gate followed by an OR gate", "an XOR gate followed by a NOT gate"],
    "NAND = NOT(AND): the inputs are ANDed and the result is inverted, F = (xy)'. An OR followed by NOT is a NOR gate.")
add(C, SB, 'K', "An XOR gate gives output 1 only when:", "its two inputs are at different logic levels",
    ["both inputs are 1", "both inputs are 0", "both inputs are at the same level"],
    "Exclusive-OR outputs 1 only when the inputs differ (F = xy' + x'y). If the inputs are the same, the output is 0.")
add(C, SB, 'U', stim("The truth table of a two-input logic gate is shown.", truth_html(['x', 'y', 'F'], [(0,0,1),(0,1,1),(1,0,1),(1,1,0)])) + "Which gate has this truth table?",
    "NAND gate", ["AND gate", "NOR gate", "XOR gate"],
    "The output is 0 only when both inputs are 1, which is the inverse of AND, so it is a NAND gate.")
add(C, SB, 'U', stim("The truth table of a two-input logic gate is shown.", truth_html(['x', 'y', 'F'], [(0,0,0),(0,1,1),(1,0,1),(1,1,0)])) + "Which gate has this truth table?",
    "XOR gate", ["OR gate", "NAND gate", "NOR gate"],
    "The output is 1 only when x and y are different, so this is the XOR gate. An OR gate would give 1 for input 1,1 as well.")
add(C, SB, 'K', "What does the + sign mean in the Boolean expression F = x + y?", "Logical OR operation",
    ["Arithmetic addition", "Logical AND operation", "Exclusive-NOR operation"],
    "In Boolean algebra the + sign stands for the OR operation, not normal addition.")
add(C, SB, 'U', "A truth table is to be drawn for a Boolean function with three variables x, y and z. How many input combinations (rows) will it have?",
    "8", ["3", "6", "9"], "A function with n inputs has 2ⁿ input combinations. For n = 3, 2³ = 8 rows.")

# circuits
add(C, SB, 'A', stim("Study the logic circuit.", circuit2('AND', 'OR')) + "Which Boolean expression does this circuit realise?",
    "F = AB + C", ["F = (A + B)C", "F = A + BC", "F = A'B + C"],
    "A and B go into an AND gate, giving AB. This result and C go into an OR gate, so F = AB + C.")
add(C, SB, 'A', stim("Study the logic circuit.", circuit2('OR', 'AND')) + "Which Boolean expression does this circuit realise?",
    "F = (A + B)C", ["F = AB + C", "F = A + BC", "F = (A + B)'C"],
    "A and B go into an OR gate giving A + B. This result and C go into an AND gate, so F = (A + B)·C.")
add(C, SB, 'A', stim("Study the logic circuit. The inputs are A = 1, B = 1 and C = 0.", circuit2('AND', 'OR')) + "What are the output of the AND gate and the final output F?",
    "1 and 1", ["0 and 0", "1 and 0", "0 and 1"],
    "AND(1, 1) = 1. Then OR(1, 0) = 1, so the AND output is 1 and F = 1.")
add(C, SB, 'A', stim("Study the logic circuit. The inputs are A = 1, B = 1 and C = 1.", circuit2('NAND', 'XOR')) + "What are the output of the NAND gate and the final output F?",
    "0 and 1", ["1 and 0", "1 and 1", "0 and 0"],
    "NAND(1, 1) = 0. Then XOR(0, 1) = 1 because the inputs differ, so the NAND output is 0 and F = 1.")
add(C, SB, 'U', "How many gates are needed to implement F = x + y'z?", "Three: one AND, one OR and one NOT gate",
    ["Two: one AND and one OR gate", "Three: two AND and one OR gate", "Four: two AND, one OR and one NOT gate"],
    "y' needs a NOT gate, y'z needs an AND gate and the final x + (y'z) needs an OR gate: three gates.")

# identities
add(C, SB, 'K', "According to the complement law, A + A' is equal to:", "1", ["0", "A", "A'"],
    "A variable ORed with its complement is always 1 (A + A' = 1). Its AND with the complement is 0 (A·A' = 0).")
add(C, SB, 'K', "Which law states that A + 1 = 1?", "Domination law", ["Identity law", "Idempotent law", "Complement law"],
    "The domination law says that ORing anything with 1 gives 1 (and ANDing anything with 0 gives 0).")
add(C, SB, 'U', "The expression A·(A + B) simplifies to:", "A", ["B", "A + B", "A·B"],
    "By the absorption law, A·(A + B) = A. Whatever B is, the result depends only on A.")
add(C, SB, 'U', "According to De Morgan's theorem, (A·B)' is equal to:", "A' + B'", ["A'·B'", "A + B", "A·B"],
    "De Morgan's theorem: the complement of an AND is the OR of the complements, (A·B)' = A' + B'.")

# K-map
add(C, SB, 'K', "How many cells does a three-variable K-map contain?", "8", ["4", "6", "16"],
    "A K-map has 2ⁿ cells for n variables. Two variables give 4 cells and three variables give 2³ = 8 cells.")
add(C, SB, 'K', "Who introduced the Karnaugh map (K-map) in 1953?", "Maurice Karnaugh", ["George Boole", "Claude Shannon", "Augustus De Morgan"],
    "The K-map was introduced by Maurice Karnaugh in 1953 as a simple pictorial method for simplifying Boolean functions.")
add(C, SB, 'U', "In a K-map, groups of adjacent 1s can be formed:", "horizontally or vertically, but not diagonally",
    ["diagonally only", "in any shape, including diagonals", "only in groups of three"],
    "Groups are rectangles of 1s, horizontal or vertical. They may overlap and wrap around the edges, but diagonal groups are not allowed.")
add(C, SB, 'U', "Two 1s appear in diagonal cells of a two-variable K-map. What does this mean?",
    "They cannot be grouped, so the function cannot be simplified", ["They can be grouped into one term", "The function is always 1", "The function is always 0"],
    "Diagonal cells are not adjacent, so no group can be formed and the function cannot be simplified by the K-map.")
add(C, SB, 'A', stim("The K-map of a function F(A, B, C) is shown (rows: A, columns: BC).", kmap3_html({0, 1, 4, 5})) + "What is the simplified expression of F?",
    "F = B'", ["F = B", "F = A'", "F = C'"],
    "The four 1s form one group of four in which A and C change but B stays 0, so only B' remains. F = B'.")
add(C, SB, 'A', stim("The K-map of a function F(A, B, C) is shown (rows: A, columns: BC).", kmap3_html({1, 3, 5, 7, 6})) + "What is the simplified expression of F?",
    "F = C + AB", ["F = C + A'B", "F = C + AB'", "F = A + BC"],
    "The four 1s in the columns where C = 1 give the single term C. The remaining 1 (A = 1, B = 1, C = 0) joins its neighbour to give AB. So F = C + AB.")
add(C, SB, 'A', stim("The K-map of a function F(A, B, C) is shown (rows: A, columns: BC). The first and last columns are adjacent.", kmap3_html({0, 2, 4, 6})) + "What is the simplified expression of F?",
    "F = C'", ["F = C", "F = B'", "F = A'"],
    "The 1s are in the BC = 00 and BC = 10 columns, which are adjacent because the map wraps around. In this group of four only C stays 0, so F = C'.")
add(C, SB, 'U', "Simplifying a Boolean function with a K-map mainly helps to:", "reduce the number of gates and the cost of the circuit",
    ["increase the number of gates in the circuit", "convert binary numbers into ASCII", "store the truth table in memory"],
    "A simplified function needs fewer gates, so the logic circuit is cheaper and simpler.")

# duality
add(C, SB, 'U', "The principle of duality is applied by interchanging:", "AND with OR, and 0 with 1",
    ["AND with NAND, and 0 with 1", "only 0s with 1s", "XOR with XNOR"],
    "To obtain the dual of a Boolean expression, the AND and OR operators are interchanged and 0s and 1s are interchanged.")
add(C, SB, 'A', "What is the dual of the Boolean identity A + 0 = A?", "A · 1 = A", ["A · 0 = A", "A + 1 = A", "A · 1 = 1"],
    "Interchange OR with AND and 0 with 1: A + 0 = A becomes A · 1 = A.")

# uses
add(C, SB, 'K', "Flip-flops and latches built from logic gates are used to:", "store binary data in memory circuits",
    ["convert analog signals to digital", "print documents", "connect computers in a network"],
    "Flip-flops and latches store binary information, so they are used in memory elements and sequential logic circuits.")
add(C, SB, 'A', "A traffic-light control system switches the lamps depending on combinations of sensor inputs. Which basic components make these decisions?",
    "Logic gates", ["Network cables", "Analog amplifiers", "ASCII codes"],
    "Traffic-light controllers are one of the common uses of logic gates, which combine input signals to decide the output.")

if __name__ == '__main__':
    print(stats(1))
