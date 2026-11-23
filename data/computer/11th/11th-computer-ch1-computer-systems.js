// Class 11 Computer Science — Unit 1: Computer Systems
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 1) and the SLOs
// CS-11-A-01 to CS-11-A-04 (logic gates & Boolean algebra, SDLC, network topologies, cybersecurity) plus cloud computing.
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario and diagram questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG. A' means NOT A in Boolean expressions.
QuizBank.register({
  class: "11th",
  subject: "Computer",
  type: "chapter",
  id: "ch1",
  label: "Unit 1: Computer Systems",
  order: 1,
  questions: function () {
    return [
    {
      q: "A single binary digit, 0 or 1, is called a:",
      options: ["bit", "byte", "nibble", "word"],
      ans: "bit",
      reason: "A binary digit (0 or 1) is a <b>bit</b>. Groups of bits form binary code that represents data inside a computer."
    },
    {
      q: "Inside a computer, an electronic switch has no current flowing through it. Which binary digit does this state represent?",
      options: ["0 (switch OFF)", "1 (switch ON)", "0 (switch ON)", "1 (switch OFF)"],
      ans: "0 (switch OFF)",
      reason: "A switch with no current is OFF and represents binary <b>0</b>. When current flows the switch is ON and represents binary 1."
    },
    {
      q: "What does ASCII stand for?",
      options: ["American Standard Code for Information Interchange", "American Standard Code for Internet Interaction", "Advanced System Code for Information Interchange", "Automatic Standard Code for Internal Interchange"],
      ans: "American Standard Code for Information Interchange",
      reason: "ASCII is the American Standard Code for Information Interchange, the most commonly used alphanumeric code."
    },
    {
      q: "The total number of characters represented by the ASCII code is:",
      options: ["128", "64", "256", "512"],
      ans: "128",
      reason: "ASCII represents 128 characters (letters, digits and special symbols). 256 is the number of codes in an 8-bit extended set, not the ASCII count given in the book."
    },
    {
      q: "Which group of characters is covered by alphanumeric codes?",
      options: ["Letters, digits and special characters", "Only digits and punctuation marks", "Only upper-case and lower-case letters", "Only special characters and symbols"],
      ans: "Letters, digits and special characters",
      reason: "Alphanumeric codes represent lower-case and upper-case letters, the digits 0 to 9, and special characters such as %, $, &, # and +."
    },
    {
      q: "<div class=\"stimulus\">The figure shows two signals, X (blue) and Y (red).<svg viewBox=\"0 0 300 110\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polyline points=\"20.0,35.0 22.2,32.6 24.4,30.2 26.6,27.8 28.8,25.5 31.0,23.4 33.2,21.4 35.4,19.6 37.6,17.9 39.8,16.5 42.0,15.3 44.2,14.3 46.4,13.6 48.6,13.2 50.8,13.0 53.0,13.1 55.2,13.5 57.4,14.1 59.6,15.0 61.8,16.1 64.0,17.5 66.2,19.1 68.4,20.9 70.6,22.8 72.8,24.9 75.0,27.2 77.2,29.5 79.4,31.9 81.6,34.3 83.8,36.8 86.0,39.2 88.2,41.6 90.4,43.8 92.6,46.0 94.8,48.1 97.0,50.0 99.2,51.6 101.4,53.1 103.6,54.4 105.8,55.4 108.0,56.2 110.2,56.7 112.4,57.0 114.6,57.0 116.8,56.7 119.0,56.1 121.2,55.3 123.4,54.2 125.6,52.9 127.8,51.4 130.0,49.6 132.2,47.7 134.4,45.7 136.6,43.5 138.8,41.1 141.0,38.8 143.2,36.3 145.4,33.9 147.6,31.5 149.8,29.1 152.0,26.8 154.2,24.6 156.4,22.5 158.6,20.5 160.8,18.8 163.0,17.2 165.2,15.9 167.4,14.8 169.6,14.0 171.8,13.4 174.0,13.1 176.2,13.0 178.4,13.2 180.6,13.7 182.8,14.5 185.0,15.5 187.2,16.7 189.4,18.2 191.6,19.9 193.8,21.7 196.0,23.8 198.2,25.9 200.4,28.2 202.6,30.6 204.8,33.0 207.0,35.4 209.2,37.9 211.4,40.3 213.6,42.6 215.8,44.8 218.0,47.0 220.2,48.9 222.4,50.7 224.6,52.3 226.8,53.7 229.0,54.9 231.2,55.8 233.4,56.5 235.6,56.9 237.8,57.0 240.0,56.9 242.2,56.4 244.4,55.8 246.6,54.8 248.8,53.6 251.0,52.2 253.2,50.6 255.4,48.8 257.6,46.8 259.8,44.7 262.0,42.4 264.2,40.1 266.4,37.7 268.6,35.2 270.8,32.8 273.0,30.4 275.2,28.0 277.4,25.8 279.6,23.6 281.8,21.6\" fill=\"none\" stroke=\"#1565c0\" stroke-width=\"2\"/><text x=\"15\" y=\"38\" text-anchor=\"end\" font-size=\"14\" fill=\"#222\" font-weight=\"bold\">X</text><path d=\"M20,95 V70 H70 V95 H110 V70 H150 V95 H190 V70 H240 V95 H280\" fill=\"none\" stroke=\"#c62828\" stroke-width=\"2\"/><text x=\"15\" y=\"87\" text-anchor=\"end\" font-size=\"14\" fill=\"#222\" font-weight=\"bold\">Y</text></svg></div>Which statement about the signals is correct?",
      options: ["X is an analog signal and Y is a digital signal", "X is a digital signal and Y is an analog signal", "Both X and Y are analog signals", "Both X and Y are digital signals"],
      ans: "X is an analog signal and Y is a digital signal",
      reason: "Signal X is a smooth, continuous waveform that can take any value in a range, so it is analog. Signal Y jumps between two levels (0 and 1), so it is digital."
    },
    {
      q: "A company must store thousands of recordings, copy them many times and send them over long distances without losing quality. Which type of signal is best suited?",
      options: ["Digital signals, because they resist noise and can be copied without loss", "Analog signals, because they vary continuously and are easy to copy", "Analog signals, because they resist noise over long distances", "Digital signals, because they degrade slowly with every copy made"],
      ans: "Digital signals, because they resist noise and can be copied without loss",
      reason: "Digital signals are more resistant to noise, travel long distances with little degradation and can be copied without quality loss. Analog signals degrade when copied or transmitted."
    },
    {
      q: "<div class=\"stimulus\">Study the symbol of the logic gate.<svg viewBox=\"0 0 190 90\" style=\"width:100%;max-width:200px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M70,25 C88,25 106,31 120,45 C106,59 88,65 70,65 C80,53 80,37 70,25 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><line x1=\"25\" y1=\"35\" x2=\"70\" y2=\"35\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"25\" y1=\"55\" x2=\"70\" y2=\"55\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"18\" y=\"39\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"18\" y=\"59\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"120\" y1=\"45\" x2=\"150\" y2=\"45\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"160\" y=\"49\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>Identify the gate shown in the figure.",
      options: ["OR gate", "NOR gate", "XOR gate", "AND gate"],
      ans: "OR gate",
      reason: "The curved-back, pointed symbol is the OR gate (output 1 when any input is 1)."
    },
    {
      q: "<div class=\"stimulus\">Study the symbol of the logic gate.<svg viewBox=\"0 0 190 90\" style=\"width:100%;max-width:200px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M70,25 H96 A20,20 0 0 1 96,65 H70 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><circle cx=\"120\" cy=\"45\" r=\"4\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.6\"/><line x1=\"25\" y1=\"35\" x2=\"70\" y2=\"35\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"25\" y1=\"55\" x2=\"70\" y2=\"55\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"18\" y=\"39\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"18\" y=\"59\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"124\" y1=\"45\" x2=\"154\" y2=\"45\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"164\" y=\"49\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>Identify the gate shown in the figure.",
      options: ["NAND gate", "AND gate", "NOR gate", "NOT gate"],
      ans: "NAND gate",
      reason: "An AND symbol with a small circle at the output is a NAND gate. The circle means the AND result is inverted."
    },
    {
      q: "<div class=\"stimulus\">Study the symbol of the logic gate.<svg viewBox=\"0 0 190 90\" style=\"width:100%;max-width:200px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M70,25 C88,25 106,31 120,45 C106,59 88,65 70,65 C80,53 80,37 70,25 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><circle cx=\"124\" cy=\"45\" r=\"4\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.6\"/><line x1=\"25\" y1=\"35\" x2=\"70\" y2=\"35\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"25\" y1=\"55\" x2=\"70\" y2=\"55\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"18\" y=\"39\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"18\" y=\"59\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"128\" y1=\"45\" x2=\"158\" y2=\"45\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"168\" y=\"49\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>Identify the gate shown in the figure.",
      options: ["NOR gate", "NAND gate", "OR gate", "XOR gate"],
      ans: "NOR gate",
      reason: "An OR symbol with a small circle at the output is a NOR gate. The circle means the OR result is inverted."
    },
    {
      q: "<div class=\"stimulus\">Study the symbol of the logic gate.<svg viewBox=\"0 0 190 90\" style=\"width:100%;max-width:200px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M70,25 C88,25 106,31 120,45 C106,59 88,65 70,65 C80,53 80,37 70,25 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><path d=\"M63,25 C73,37 73,53 63,65\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.6\"/><line x1=\"25\" y1=\"35\" x2=\"67\" y2=\"35\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"25\" y1=\"55\" x2=\"67\" y2=\"55\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"18\" y=\"39\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"18\" y=\"59\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"120\" y1=\"45\" x2=\"150\" y2=\"45\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"160\" y=\"49\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>Identify the gate shown in the figure.",
      options: ["XOR gate", "OR gate", "NOR gate", "XNOR gate"],
      ans: "XOR gate",
      reason: "An OR-like symbol with an extra curved line on the input side is the exclusive-OR (XOR) gate."
    },
    {
      q: "The output of a two-input AND gate is 1 only when:",
      options: ["both inputs are 1", "either input is 1", "both inputs are 0", "the two inputs are different"],
      ans: "both inputs are 1",
      reason: "An AND gate gives HIGH (1) output only when all its inputs are HIGH. Its expression is F = xy."
    },
    {
      q: "An OR gate produces output 0 only when:",
      options: ["all of its inputs are 0", "any one input is 1", "all of its inputs are 1", "its inputs are different"],
      ans: "all of its inputs are 0",
      reason: "The OR gate output is 1 when any input is 1, so it is 0 only when every input is 0."
    },
    {
      q: "Which gate is commonly known as an inverter?",
      options: ["NOT gate", "NAND gate", "NOR gate", "XOR gate"],
      ans: "NOT gate",
      reason: "The NOT gate has one input and converts LOW to HIGH and HIGH to LOW, so it is called an inverter."
    },
    {
      q: "In a logic gate symbol, the small circle at the output indicates:",
      options: ["inversion of the output", "an additional input", "the power connection", "a delay in the signal"],
      ans: "inversion of the output",
      reason: "A small circle (bubble) on the output means the output is inverted. This is what turns AND into NAND and OR into NOR."
    },
    {
      q: "A NAND gate is equivalent to:",
      options: ["an AND gate followed by a NOT gate", "an OR gate followed by a NOT gate", "an AND gate followed by an OR gate", "an XOR gate followed by a NOT gate"],
      ans: "an AND gate followed by a NOT gate",
      reason: "NAND = NOT(AND): the inputs are ANDed and the result is inverted, F = (xy)'. An OR followed by NOT is a NOR gate."
    },
    {
      q: "<div class=\"stimulus\">The truth table of a two-input logic gate is shown.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">x</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">y</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">F</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td></tr></table></div>Which gate has this truth table?",
      options: ["NAND gate", "AND gate", "NOR gate", "XOR gate"],
      ans: "NAND gate",
      reason: "The output is 0 only when both inputs are 1, which is the inverse of AND, so it is a NAND gate."
    },
    {
      q: "<div class=\"stimulus\">The truth table of a two-input logic gate is shown.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">x</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">y</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">F</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">0</td></tr></table></div>Which gate has this truth table?",
      options: ["XOR gate", "OR gate", "NAND gate", "NOR gate"],
      ans: "XOR gate",
      reason: "The output is 1 only when x and y are different, so this is the XOR gate. An OR gate would give 1 for input 1,1 as well."
    },
    {
      q: "A truth table is to be drawn for a Boolean function with three variables x, y and z. How many input combinations (rows) will it have?",
      options: ["8", "3", "6", "9"],
      ans: "8",
      reason: "A function with n inputs has 2ⁿ input combinations. For n = 3, 2³ = 8 rows."
    },
    {
      q: "<div class=\"stimulus\">Study the logic circuit.<svg viewBox=\"0 0 330 140\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M80,20 H106 A20,20 0 0 1 106,60 H80 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><path d=\"M200,60 C218,60 236,66 250,80 C236,94 218,100 200,100 C210,88 210,72 200,60 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><line x1=\"35\" y1=\"30\" x2=\"80\" y2=\"30\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"50\" x2=\"80\" y2=\"50\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"34\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"28\" y=\"54\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"126\" y1=\"40\" x2=\"140\" y2=\"40\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"140\" y1=\"40\" x2=\"140\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"140\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"90\" x2=\"200\" y2=\"90\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"94\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">C</text><line x1=\"250\" y1=\"80\" x2=\"280\" y2=\"80\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"290\" y=\"84\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>Which Boolean expression does this circuit realise?",
      options: ["F = AB + C", "F = (A + B)C", "F = A + BC", "F = A'B + C"],
      ans: "F = AB + C",
      reason: "A and B go into an AND gate, giving AB. This result and C go into an OR gate, so F = AB + C."
    },
    {
      q: "<div class=\"stimulus\">Study the logic circuit.<svg viewBox=\"0 0 330 140\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M80,20 C98,20 116,26 130,40 C116,54 98,60 80,60 C90,48 90,32 80,20 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><path d=\"M200,60 H226 A20,20 0 0 1 226,100 H200 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><line x1=\"35\" y1=\"30\" x2=\"80\" y2=\"30\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"50\" x2=\"80\" y2=\"50\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"34\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"28\" y=\"54\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"130\" y1=\"40\" x2=\"144\" y2=\"40\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"144\" y1=\"40\" x2=\"144\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"144\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"90\" x2=\"200\" y2=\"90\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"94\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">C</text><line x1=\"246\" y1=\"80\" x2=\"276\" y2=\"80\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"286\" y=\"84\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>Which Boolean expression does this circuit realise?",
      options: ["F = (A + B)C", "F = AB + C", "F = A + BC", "F = (A + B)'C"],
      ans: "F = (A + B)C",
      reason: "A and B go into an OR gate giving A + B. This result and C go into an AND gate, so F = (A + B)·C."
    },
    {
      q: "<div class=\"stimulus\">Study the logic circuit. The inputs are A = 1, B = 1 and C = 0.<svg viewBox=\"0 0 330 140\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M80,20 H106 A20,20 0 0 1 106,60 H80 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><path d=\"M200,60 C218,60 236,66 250,80 C236,94 218,100 200,100 C210,88 210,72 200,60 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><line x1=\"35\" y1=\"30\" x2=\"80\" y2=\"30\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"50\" x2=\"80\" y2=\"50\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"34\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"28\" y=\"54\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"126\" y1=\"40\" x2=\"140\" y2=\"40\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"140\" y1=\"40\" x2=\"140\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"140\" y1=\"70\" x2=\"200\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"90\" x2=\"200\" y2=\"90\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"94\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">C</text><line x1=\"250\" y1=\"80\" x2=\"280\" y2=\"80\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"290\" y=\"84\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>What are the output of the AND gate and the final output F?",
      options: ["1 and 1", "0 and 0", "1 and 0", "0 and 1"],
      ans: "1 and 1",
      reason: "AND(1, 1) = 1. Then OR(1, 0) = 1, so the AND output is 1 and F = 1."
    },
    {
      q: "<div class=\"stimulus\">Study the logic circuit. The inputs are A = 1, B = 1 and C = 1.<svg viewBox=\"0 0 330 140\" style=\"width:100%;max-width:360px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M80,20 H106 A20,20 0 0 1 106,60 H80 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><circle cx=\"130\" cy=\"40\" r=\"4\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.6\"/><path d=\"M200,60 C218,60 236,66 250,80 C236,94 218,100 200,100 C210,88 210,72 200,60 Z\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"white\"/><path d=\"M193,60 C203,72 203,88 193,100\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.6\"/><line x1=\"35\" y1=\"30\" x2=\"80\" y2=\"30\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"50\" x2=\"80\" y2=\"50\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"34\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">A</text><text x=\"28\" y=\"54\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">B</text><line x1=\"134\" y1=\"40\" x2=\"148\" y2=\"40\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"148\" y1=\"40\" x2=\"148\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"148\" y1=\"70\" x2=\"197\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"35\" y1=\"90\" x2=\"197\" y2=\"90\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"28\" y=\"94\" text-anchor=\"end\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">C</text><line x1=\"250\" y1=\"80\" x2=\"280\" y2=\"80\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"290\" y=\"84\" text-anchor=\"start\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">F</text></svg></div>What are the output of the NAND gate and the final output F?",
      options: ["0 and 1", "1 and 0", "1 and 1", "0 and 0"],
      ans: "0 and 1",
      reason: "NAND(1, 1) = 0. Then XOR(0, 1) = 1 because the inputs differ, so the NAND output is 0 and F = 1."
    },
    {
      q: "According to the complement law, A + A' is equal to:",
      options: ["1", "0", "A", "A'"],
      ans: "1",
      reason: "A variable ORed with its complement is always 1 (A + A' = 1). Its AND with the complement is 0 (A·A' = 0)."
    },
    {
      q: "Which law states that A + 1 = 1?",
      options: ["Domination law", "Identity law", "Idempotent law", "Complement law"],
      ans: "Domination law",
      reason: "The domination law says that ORing anything with 1 gives 1 (and ANDing anything with 0 gives 0)."
    },
    {
      q: "The expression A·(A + B) simplifies to:",
      options: ["A", "B", "A + B", "A·B"],
      ans: "A",
      reason: "By the absorption law, A·(A + B) = A. Whatever B is, the result depends only on A."
    },
    {
      q: "According to De Morgan's theorem, (A·B)' is equal to:",
      options: ["A' + B'", "A'·B'", "A + B", "A·B"],
      ans: "A' + B'",
      reason: "De Morgan's theorem: the complement of an AND is the OR of the complements, (A·B)' = A' + B'."
    },
    {
      q: "How many cells does a three-variable K-map contain?",
      options: ["8", "4", "6", "16"],
      ans: "8",
      reason: "A K-map has 2ⁿ cells for n variables. Two variables give 4 cells and three variables give 2³ = 8 cells."
    },
    {
      q: "In a K-map, groups of adjacent 1s can be formed:",
      options: ["horizontally or vertically, but not diagonally", "diagonally or vertically, but not horizontally", "only in groups of three cells at a time", "in any shape, including diagonal groups"],
      ans: "horizontally or vertically, but not diagonally",
      reason: "Groups are rectangles of 1s, horizontal or vertical. They may overlap and wrap around the edges, but diagonal groups are not allowed."
    },
    {
      q: "<div class=\"stimulus\">The K-map of a function F(A, B, C) is shown (rows: A, columns: BC).<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px;text-align:center\"><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">A \\ BC</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">00</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">01</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">11</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">10</th></tr><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">0</th><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td></tr><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">1</th><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td></tr></table></div>What is the simplified expression of F?",
      options: ["F = B'", "F = B", "F = A'", "F = C'"],
      ans: "F = B'",
      reason: "The four 1s form one group of four in which A and C change but B stays 0, so only B' remains. F = B'."
    },
    {
      q: "<div class=\"stimulus\">The K-map of a function F(A, B, C) is shown (rows: A, columns: BC).<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px;text-align:center\"><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">A \\ BC</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">00</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">01</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">11</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">10</th></tr><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">0</th><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td></tr><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">1</th><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td></tr></table></div>What is the simplified expression of F?",
      options: ["F = C + AB", "F = C + A'B", "F = C + AB'", "F = A + BC"],
      ans: "F = C + AB",
      reason: "The four 1s in the columns where C = 1 give the single term C. The remaining 1 (A = 1, B = 1, C = 0) joins its neighbour to give AB. So F = C + AB."
    },
    {
      q: "<div class=\"stimulus\">The K-map of a function F(A, B, C) is shown (rows: A, columns: BC). The first and last columns are adjacent.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px;text-align:center\"><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">A \\ BC</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">00</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">01</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">11</th><th style=\"border:1px solid #9bb;padding:4px 10px;background:#eaf1fb\">10</th></tr><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">0</th><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td></tr><tr><th style=\"border:1px solid #9bb;padding:4px 8px;background:#eaf1fb\">1</th><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;\">0</td><td style=\"border:1px solid #9bb;padding:4px 10px;background:#fff3c4;font-weight:bold\">1</td></tr></table></div>What is the simplified expression of F?",
      options: ["F = C'", "F = C", "F = B'", "F = A'"],
      ans: "F = C'",
      reason: "The 1s are in the BC = 00 and BC = 10 columns, which are adjacent because the map wraps around. In this group of four only C stays 0, so F = C'."
    },
    {
      q: "Simplifying a Boolean function with a K-map mainly helps to:",
      options: ["reduce the number of gates and the cost of the circuit", "increase the number of gates to make a circuit faster", "convert a binary number into its ASCII character", "store the truth table permanently in memory"],
      ans: "reduce the number of gates and the cost of the circuit",
      reason: "A simplified function needs fewer gates, so the logic circuit is cheaper and simpler."
    },
    {
      q: "The principle of duality is applied by interchanging:",
      options: ["AND with OR, and 0 with 1", "AND with NAND, and 0 with 1", "only 0s with 1s", "XOR with XNOR"],
      ans: "AND with OR, and 0 with 1",
      reason: "To obtain the dual of a Boolean expression, the AND and OR operators are interchanged and 0s and 1s are interchanged."
    },
    {
      q: "What is the dual of the Boolean identity A + 0 = A?",
      options: ["A · 1 = A", "A · 0 = A", "A + 1 = A", "A · 1 = 1"],
      ans: "A · 1 = A",
      reason: "Interchange OR with AND and 0 with 1: A + 0 = A becomes A · 1 = A."
    },
    {
      q: "Flip-flops and latches built from logic gates are used to:",
      options: ["store binary data in memory circuits", "convert analog signals to digital", "print documents", "connect computers in a network"],
      ans: "store binary data in memory circuits",
      reason: "Flip-flops and latches store binary information, so they are used in memory elements and sequential logic circuits."
    },
    {
      q: "A traffic-light control system switches the lamps depending on combinations of sensor inputs. Which basic components make these decisions?",
      options: ["Logic gates", "Network cables", "Analog amplifiers", "ASCII codes"],
      ans: "Logic gates",
      reason: "Traffic-light controllers are one of the common uses of logic gates, which combine input signals to decide the output."
    },
    {
      q: "What does SDLC stand for?",
      options: ["Software Development Life Cycle", "System Design Language Code", "Software Deployment Logic Chain", "Structured Data Life Cycle"],
      ans: "Software Development Life Cycle",
      reason: "SDLC is the Software Development Life Cycle: the process of planning, writing, modifying and maintaining software."
    },
    {
      q: "Before investing money, a company studies whether a proposed system is technically, economically, legally and operationally possible within the estimated cost and time. Which SDLC phase is this?",
      options: ["Feasibility study phase", "Analysis phase", "Planning phase", "Requirement engineering phase"],
      ans: "Feasibility study phase",
      reason: "A feasibility study analyses and evaluates a proposed system to decide whether it is feasible in terms of technology, finance, law, operations and time."
    },
    {
      q: "A software company checks that its new patient-records system follows all data-protection laws and regulations before starting development. Which type of feasibility is this?",
      options: ["Legal feasibility", "Economic feasibility", "Technical feasibility", "Operational feasibility"],
      ans: "Legal feasibility",
      reason: "Legal feasibility evaluates whether a proposed system complies with applicable laws, regulations and standards."
    },
    {
      q: "Which of the following is a step of requirement engineering?",
      options: ["Requirements validation", "Code compilation", "Hardware installation", "System conversion"],
      ans: "Requirements validation",
      reason: "Requirement engineering has three steps: requirements gathering, requirements validation and requirements management."
    },
    {
      q: "An analyst watches clerks at their desks to see how they currently process examination results and notes the weak points. Which requirement-gathering technique is being used?",
      options: ["Observation", "Interview", "Survey", "Document analysis"],
      ans: "Observation",
      reason: "Observation means watching users in their natural work environment to understand how they perform tasks and where improvement is needed."
    },
    {
      q: "Which language gives developers a standard visual notation for modelling a system in the design phase?",
      options: ["UML (Unified Modeling Language)", "HTML (HyperText Markup Language)", "SQL (Structured Query Language)", "C++ (a programming language)"],
      ans: "UML (Unified Modeling Language)",
      reason: "UML is a standardised visual modelling language used in the design phase so that developers, analysts and stakeholders can visualise a system."
    },
    {
      q: "In which SDLC phase do developers turn the design into database structures, user-interface screens and program code?",
      options: ["Development/coding phase", "Design phase", "Testing/verification phase", "Deployment phase"],
      ans: "Development/coding phase",
      reason: "In the development/coding phase the plans from the design phase are translated into actual code using a programming language."
    },
    {
      q: "In black box testing, the tester:",
      options: ["checks outputs for given inputs without seeing the internal code", "examines every statement of the source code line by line", "knows the internal logic and structure of the program", "only fixes errors found in the design documents"],
      ans: "checks outputs for given inputs without seeing the internal code",
      reason: "Black box testing focuses on the outputs produced for specified inputs. The tester has no knowledge of the internal code or logic."
    },
    {
      q: "A tester checks a website's login page with a correct password, a wrong password and empty fields, without access to the source code. Which technique is used?",
      options: ["Black box testing", "White box testing", "Direct testing", "Parallel testing"],
      ans: "Black box testing",
      reason: "The tester only compares expected and actual outputs for different inputs, without knowing the code, so this is black box testing."
    },
    {
      q: "A tester has the source code and checks each statement and code path of a function that calculates percentage marks. Which technique is being used?",
      options: ["White box testing", "Black box testing", "Pilot testing", "Phased testing"],
      ans: "White box testing",
      reason: "White box testing is used when the tester knows the internal code and logic and checks statements, code paths and variables."
    },
    {
      q: "A bank switches off its old payment system and starts using the new one for all branches on the same day. Which deployment method is this?",
      options: ["Direct", "Parallel", "Phased", "Pilot"],
      ans: "Direct",
      reason: "In direct deployment the old system is replaced entirely by the new one at once, so the old system becomes obsolete immediately."
    },
    {
      q: "A company runs its old and new payroll systems side by side for a month so major problems can be fixed without losing data. Which deployment method is this?",
      options: ["Parallel", "Direct", "Phased", "Pilot"],
      ans: "Parallel",
      reason: "In parallel deployment both systems run at the same time for a period, which allows problems in the new system to be found safely."
    },
    {
      q: "A company first gives its new system to a small group of users to collect their feedback and then releases it to everyone. Which deployment method is this?",
      options: ["Pilot", "Direct", "Parallel", "Phased"],
      ans: "Pilot",
      reason: "In pilot deployment the new system is first used by a small group who test it and give feedback. After it is judged satisfactory it is rolled out to all users."
    },
    {
      q: "Which SDLC phase includes repairing, modifying or enhancing the system after it has been delivered?",
      options: ["Maintenance/support phase", "Deployment/implementation phase", "Testing/verification phase", "Documentation phase"],
      ans: "Maintenance/support phase",
      reason: "System maintenance is an ongoing process: the system is monitored, and repairs, modifications or enhancements are made after delivery."
    },
    {
      q: "Fixing errors that were left undiscovered during development and testing is called:",
      options: ["corrective maintenance", "perfective maintenance", "requirements validation", "system conversion"],
      ans: "corrective maintenance",
      reason: "Corrective maintenance corrects errors found after release. Perfective maintenance, in contrast, enhances the functionality of the software."
    },
    {
      q: "<div class=\"stimulus\">The figure shows the phases of the Waterfall model. One phase is marked with a question mark.<svg viewBox=\"0 0 350 185\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ar\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"8\" y=\"8\" width=\"100\" height=\"24\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"58\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Requirements</text><path d=\"M82,32 V36\" stroke=\"#222\" stroke-width=\"1.4\" fill=\"none\" marker-end=\"url(#ar)\"/><rect x=\"56\" y=\"36\" width=\"100\" height=\"24\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"106\" y=\"52\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Design</text><path d=\"M130,60 V64\" stroke=\"#222\" stroke-width=\"1.4\" fill=\"none\" marker-end=\"url(#ar)\"/><rect x=\"104\" y=\"64\" width=\"100\" height=\"24\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"154\" y=\"80\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Development</text><path d=\"M178,88 V92\" stroke=\"#222\" stroke-width=\"1.4\" fill=\"none\" marker-end=\"url(#ar)\"/><rect x=\"152\" y=\"92\" width=\"100\" height=\"24\" rx=\"3\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"202\" y=\"108\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">?</text><path d=\"M226,116 V120\" stroke=\"#222\" stroke-width=\"1.4\" fill=\"none\" marker-end=\"url(#ar)\"/><rect x=\"200\" y=\"120\" width=\"100\" height=\"24\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"250\" y=\"136\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Deployment</text><path d=\"M274,144 V148\" stroke=\"#222\" stroke-width=\"1.4\" fill=\"none\" marker-end=\"url(#ar)\"/><rect x=\"248\" y=\"148\" width=\"100\" height=\"24\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"298\" y=\"164\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Maintenance</text></svg></div>Which phase is missing at the position marked '?'",
      options: ["Testing", "Deployment", "Planning", "Maintenance"],
      ans: "Testing",
      reason: "The Waterfall phases are requirements, design, development, testing, deployment and maintenance. Testing comes after development."
    },
    {
      q: "A project has all of its requirements clearly defined and they are not expected to change. Which software development model is most suitable?",
      options: ["Waterfall model", "Agile model", "Pilot deployment", "Phased deployment"],
      ans: "Waterfall model",
      reason: "Waterfall suits projects whose requirements are predefined and stable, because its phases follow a fixed order and the cost and release date can be estimated in advance."
    },
    {
      q: "A start-up is building a mobile app. The client keeps changing requirements, and the team wants to deliver a working version every few weeks. Which model should it follow?",
      options: ["Agile model", "Waterfall model", "Direct deployment", "Parallel deployment"],
      ans: "Agile model",
      reason: "Agile develops software iteratively in short cycles called sprints, welcoming change and continuous customer feedback."
    },
    {
      q: "A major disadvantage of the Waterfall model is that:",
      options: ["it is difficult to change requirements once a phase is complete", "it needs the customer to be available throughout the project", "it does not define the activities of each phase", "it delivers a working product at the end of every sprint"],
      ans: "it is difficult to change requirements once a phase is complete",
      reason: "Waterfall is inflexible: mid-project changes are hard, delivery is late and defects are found late. The other options describe Agile."
    },
    {
      q: "Which of the following is a limitation of the Agile model?",
      options: ["it depends heavily on the availability of the customer", "its release date and final cost are fixed in advance", "testing is done only at the end of the project", "requirements can never be changed"],
      ans: "it depends heavily on the availability of the customer",
      reason: "Agile depends on continuous customer involvement, can suffer scope creep and gives less emphasis to documentation. Fixed cost and date are Waterfall features."
    },
    {
      q: "<div class=\"stimulus\">Study the network layout shown in the figure.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"30\" y1=\"95\" x2=\"270\" y2=\"95\" stroke=\"#222\" stroke-width=\"1.6\" stroke-width=\"3\"/><line x1=\"60\" y1=\"95\" x2=\"60\" y2=\"56\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"45\" y=\"34\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"60\" y=\"49\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><line x1=\"120\" y1=\"95\" x2=\"120\" y2=\"134\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"105\" y=\"134\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"120\" y=\"149\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><line x1=\"180\" y1=\"95\" x2=\"180\" y2=\"56\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"165\" y=\"34\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"180\" y=\"49\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><line x1=\"240\" y1=\"95\" x2=\"240\" y2=\"134\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"225\" y=\"134\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"240\" y=\"149\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text></svg></div>Which network topology is shown?",
      options: ["Bus topology", "Ring topology", "Star topology", "Tree topology"],
      ans: "Bus topology",
      reason: "In a bus topology all devices connect to one main cable running through the network."
    },
    {
      q: "<div class=\"stimulus\">Study the network layout shown in the figure.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"150\" y1=\"95\" x2=\"150\" y2=\"25\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"95\" x2=\"250\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"95\" x2=\"220\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"95\" x2=\"80\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"95\" x2=\"50\" y2=\"70\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"132\" y=\"83\" width=\"36\" height=\"24\" rx=\"3\" fill=\"#ffe9b3\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"150\" y=\"99\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Hub</text><rect x=\"135\" y=\"14\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"150\" y=\"29\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"235\" y=\"59\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"250\" y=\"74\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"205\" y=\"149\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"220\" y=\"164\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"65\" y=\"149\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"80\" y=\"164\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"35\" y=\"59\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"50\" y=\"74\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text></svg></div>Which network topology is shown?",
      options: ["Star topology", "Bus topology", "Ring topology", "Mesh topology"],
      ans: "Star topology",
      reason: "In a star topology every device is linked to a central hub or switch."
    },
    {
      q: "<div class=\"stimulus\">Study the network layout shown in the figure.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"150.0\" y1=\"25.0\" x2=\"210.6\" y2=\"60.0\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"210.6\" y1=\"60.0\" x2=\"210.6\" y2=\"130.0\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"210.6\" y1=\"130.0\" x2=\"150.0\" y2=\"165.0\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150.0\" y1=\"165.0\" x2=\"89.4\" y2=\"130.0\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"89.4\" y1=\"130.0\" x2=\"89.4\" y2=\"60.0\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"89.4\" y1=\"60.0\" x2=\"150.0\" y2=\"25.0\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"135.0\" y=\"14.0\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"150.0\" y=\"29.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"195.6\" y=\"49.0\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"210.6\" y=\"64.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"195.6\" y=\"119.0\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"210.6\" y=\"134.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"135.0\" y=\"154.0\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"150.0\" y=\"169.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"74.4\" y=\"119.0\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"89.4\" y=\"134.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"74.4\" y=\"49.0\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"89.4\" y=\"64.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text></svg></div>Which network topology is shown?",
      options: ["Ring topology", "Bus topology", "Star topology", "Tree topology"],
      ans: "Ring topology",
      reason: "In a ring topology devices are connected in a circular loop and data travels around the ring."
    },
    {
      q: "<div class=\"stimulus\">Study the network layout shown in the figure.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"150\" y1=\"25\" x2=\"250\" y2=\"85\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"25\" x2=\"210\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"25\" x2=\"90\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"25\" x2=\"50\" y2=\"85\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"250\" y1=\"85\" x2=\"210\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"250\" y1=\"85\" x2=\"90\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"250\" y1=\"85\" x2=\"50\" y2=\"85\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"210\" y1=\"160\" x2=\"90\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"210\" y1=\"160\" x2=\"50\" y2=\"85\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"90\" y1=\"160\" x2=\"50\" y2=\"85\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"135\" y=\"14\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"150\" y=\"29\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"235\" y=\"74\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"250\" y=\"89\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"195\" y=\"149\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"210\" y=\"164\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"75\" y=\"149\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"90\" y=\"164\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"35\" y=\"74\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"50\" y=\"89\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text></svg></div>Which network topology is shown?",
      options: ["Mesh topology", "Star topology", "Tree topology", "Hybrid topology"],
      ans: "Mesh topology",
      reason: "In a mesh topology every node is connected to all the other nodes, giving many alternative paths."
    },
    {
      q: "<div class=\"stimulus\">Study the network layout shown in the figure.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"150\" y1=\"35\" x2=\"80\" y2=\"90\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"150\" y1=\"35\" x2=\"220\" y2=\"90\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"80\" y1=\"90\" x2=\"40\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"80\" y1=\"90\" x2=\"120\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"220\" y1=\"90\" x2=\"180\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"220\" y1=\"90\" x2=\"260\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"132\" y=\"18\" width=\"36\" height=\"24\" rx=\"3\" fill=\"#ffe9b3\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"150\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Root</text><rect x=\"62\" y=\"78\" width=\"36\" height=\"24\" rx=\"3\" fill=\"#ffe9b3\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"80\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Sw</text><rect x=\"202\" y=\"78\" width=\"36\" height=\"24\" rx=\"3\" fill=\"#ffe9b3\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"220\" y=\"94\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Sw</text><rect x=\"25\" y=\"144\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"40\" y=\"159\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"105\" y=\"144\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"120\" y=\"159\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"165\" y=\"144\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"180\" y=\"159\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"245\" y=\"144\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"260\" y=\"159\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text></svg></div>Which network topology is shown?",
      options: ["Tree topology", "Star topology", "Bus topology", "Mesh topology"],
      ans: "Tree topology",
      reason: "A tree (hierarchical) topology has a root node at the top and several hubs or switches below it, like a star with several hubs."
    },
    {
      q: "<div class=\"stimulus\">Study the network layout shown in the figure.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:320px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"70\" y1=\"95\" x2=\"30\" y2=\"35\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"70\" y1=\"95\" x2=\"110\" y2=\"35\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"70\" y1=\"95\" x2=\"30\" y2=\"155\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"70\" y1=\"95\" x2=\"110\" y2=\"155\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"52\" y=\"83\" width=\"36\" height=\"24\" rx=\"3\" fill=\"#ffe9b3\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"70\" y=\"99\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Hub</text><rect x=\"15\" y=\"24\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"30\" y=\"39\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"95\" y=\"24\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"110\" y=\"39\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"15\" y=\"144\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"30\" y=\"159\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"95\" y=\"144\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"110\" y=\"159\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><line x1=\"200\" y1=\"55\" x2=\"270\" y2=\"55\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"270\" y1=\"55\" x2=\"270\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"270\" y1=\"135\" x2=\"200\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"200\" y1=\"135\" x2=\"200\" y2=\"55\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"88\" y1=\"95\" x2=\"200\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"185\" y=\"44\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"200\" y=\"59\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"255\" y=\"44\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"270\" y=\"59\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"255\" y=\"124\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"270\" y=\"139\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"185\" y=\"124\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"200\" y=\"139\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text></svg></div>Which network topology is shown?",
      options: ["Hybrid topology", "Tree topology", "Mesh topology", "Bus topology"],
      ans: "Hybrid topology",
      reason: "A hybrid topology combines two or more basic topologies. Here a star and a ring are joined into one network."
    },
    {
      q: "Network topology is:",
      options: ["the systematic arrangement of computers and other devices in a network", "a program that protects computers and devices from viruses", "a type of cable used to connect devices in a network", "a method of encrypting data sent over a network"],
      ans: "the systematic arrangement of computers and other devices in a network",
      reason: "Network topology is the arrangement of nodes (computers, switches, routers and other devices) in a network and how they are connected."
    },
    {
      q: "Why can one damaged main cable stop an entire bus network?",
      options: ["All the nodes are connected to a single cable", "Every node has its own cable to the hub", "Data travels only in a circular loop", "Every node is connected to all the other nodes"],
      ans: "All the nodes are connected to a single cable",
      reason: "In a bus topology there is only one cable, so a break in it disrupts communication for all devices. This is its main weakness."
    },
    {
      q: "What happens in a star topology if the central hub or switch fails?",
      options: ["The entire network is affected", "Only one device loses its connection", "Data automatically moves to a ring", "Nothing, because every node is connected to all others"],
      ans: "The entire network is affected",
      reason: "All nodes depend on the central hub or switch. If one node fails only that node is lost, but if the hub fails every connected device loses connectivity."
    },
    {
      q: "A data centre needs a network that keeps working even when several links or nodes fail. Which topology is most suitable?",
      options: ["Mesh topology", "Bus topology", "Star topology", "Ring topology"],
      ans: "Mesh topology",
      reason: "Mesh topology has redundant connections because every node links to all others. Data can take another route when one path fails, so it is very reliable."
    },
    {
      q: "Which protocol uses a special packet called a token to control access in a ring network?",
      options: ["Token Ring", "CSMA/CD", "Bluetooth", "FTP"],
      ans: "Token Ring",
      reason: "In Token Ring, only the device holding the token may transmit data. The token circulates continuously around the ring."
    },
    {
      q: "A large company uses a star topology in its branch offices and a mesh topology in its data centre, all linked into one network. This combination is called:",
      options: ["hybrid topology", "tree topology", "dual ring topology", "bus topology"],
      ans: "hybrid topology",
      reason: "A hybrid topology merges two or more different topologies, here star and mesh, to combine their strengths."
    },
    {
      q: "Which test simulates a large number of users or devices using a network at the same time to check performance under heavy traffic?",
      options: ["Load testing", "Fault tolerance testing", "Disaster recovery testing", "Benchmarking"],
      ans: "Load testing",
      reason: "Load testing evaluates network performance under heavy traffic. Stress testing goes further by pushing the network beyond its capacity."
    },
    {
      q: "A network engineer deliberately injects faults into a network to check whether it keeps working when individual components fail. Which test is this?",
      options: ["Fault tolerance testing", "Load testing", "Scalability testing", "Benchmarking"],
      ans: "Fault tolerance testing",
      reason: "Fault tolerance testing verifies that the network continues functioning even when individual components fail."
    },
    {
      q: "What is cloud computing?",
      options: ["Accessing computing resources and services over the internet instead of owning the hardware", "Storing all of a user's data only on the local hard disk of one computer", "Connecting computers together with network cables inside one building", "Installing software on every computer in an organization separately"],
      ans: "Accessing computing resources and services over the internet instead of owning the hardware",
      reason: "Cloud computing gives access to servers, storage, databases, software and analytics over the internet, without owning and maintaining physical infrastructure."
    },
    {
      q: "A school uses an online email and document-editing service paid for by monthly subscription, with nothing installed on its computers. Which cloud service model is this?",
      options: ["Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Community cloud"],
      ans: "Software as a Service (SaaS)",
      reason: "SaaS delivers software applications over the internet on a subscription basis, so users need not install, maintain or update the software."
    },
    {
      q: "Which cloud service model gives developers tools, services and frameworks to build applications without managing the underlying infrastructure?",
      options: ["Platform as a Service (PaaS)", "Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)", "Hybrid cloud"],
      ans: "Platform as a Service (PaaS)",
      reason: "PaaS provides a development platform (tools, services and frameworks) so developers need not manage the infrastructure beneath it."
    },
    {
      q: "Which cloud service model delivers virtualised resources such as virtual machines, storage and networks?",
      options: ["Infrastructure as a Service (IaaS)", "Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Hybrid cloud deployment model"],
      ans: "Infrastructure as a Service (IaaS)",
      reason: "IaaS delivers virtualised computing resources (virtual machines, storage and networks) over the internet."
    },
    {
      q: "Which cloud deployment model gives one organization exclusive use of the resources, with more control and customisation?",
      options: ["Private cloud", "Public cloud", "Community cloud", "Hybrid cloud"],
      ans: "Private cloud",
      reason: "In a private cloud the resources are used exclusively by a single organization, which gives greater control over the infrastructure."
    },
    {
      q: "A company keeps its sensitive data in its own private cloud and uses a third-party public cloud for other tasks, with data and applications shared between them. This is a:",
      options: ["hybrid cloud", "community cloud", "public cloud", "private cloud"],
      ans: "hybrid cloud",
      reason: "A hybrid cloud combines elements of public and private clouds and allows data and applications to be shared between them."
    },
    {
      q: "Which characteristic of cloud computing lets resources be scaled up or down quickly as demand changes?",
      options: ["Rapid elasticity", "Resource pooling", "Measured service", "Broad network access"],
      ans: "Rapid elasticity",
      reason: "Rapid elasticity means resources can be quickly increased or decreased to meet changes in demand, which saves cost."
    },
    {
      q: "A video website adds 20 more servers during a live event and shares the traffic among them. What type of scaling is this?",
      options: ["Horizontal scaling (scaling out)", "Vertical scaling (scaling up)", "Stress testing", "Disaster recovery"],
      ans: "Horizontal scaling (scaling out)",
      reason: "Horizontal scaling means increasing the number of servers and distributing the workload among them. It gives high availability."
    },
    {
      q: "Adding more CPU and RAM to a single server to improve its performance is called:",
      options: ["vertical scaling (scaling up)", "horizontal scaling (scaling out)", "load balancing", "resource pooling"],
      ans: "vertical scaling (scaling up)",
      reason: "Vertical scaling increases the capacity of one server by adding resources such as CPU, RAM, disk space or bandwidth."
    },
    {
      q: "Which is a limitation of vertical scaling?",
      options: ["There is a physical limit to how far one server can be upgraded", "It needs many servers that must share the workload", "It cannot improve the performance of the application", "It always needs load balancing between several machines"],
      ans: "There is a physical limit to how far one server can be upgraded",
      reason: "A single server can be upgraded only so far, and vertical scaling can be costly and may cause downtime."
    },
    {
      q: "Which of the following are key components of reliability in cloud computing?",
      options: ["Redundancy, fault tolerance, disaster recovery and failover", "Caching, hashing, compiling, debugging and formatting", "Resolution, frame rate, colour depth and sampling rate", "Benchmarking, tuning, scripting, formatting and testing"],
      ans: "Redundancy, fault tolerance, disaster recovery and failover",
      reason: "Cloud reliability (high availability) depends on redundancy, fault tolerance, disaster recovery and failover mechanisms."
    },
    {
      q: "A cloud provider stores a bank's data in several data centres in different regions so that service continues if one centre has an outage. This is an example of:",
      options: ["reliability through redundancy", "vertical scalability of a single server", "measured service billing by usage", "broad network access from any device"],
      ans: "reliability through redundancy",
      reason: "Keeping copies of data in multiple data centres is redundancy. It keeps the service available if one data centre fails, which is cloud reliability."
    },
    {
      q: "Cybersecurity is the practice of:",
      options: ["protecting internet-connected systems, networks and data from malicious attacks", "increasing the speed and capacity of internet connections for users", "repairing damaged computer hardware, cables and network devices", "designing attractive, user-friendly websites for organizations"],
      ans: "protecting internet-connected systems, networks and data from malicious attacks",
      reason: "Cybersecurity protects computers, servers, mobile devices, networks and data from malicious attacks and unauthorized access."
    },
    {
      q: "Which of the following is a reason why cybersecurity is important?",
      options: ["It protects sensitive data such as personal and financial information", "It increases the storage capacity of servers in an organization", "It reduces the amount of electricity used by computers", "It makes new software install much faster on any device"],
      ans: "It protects sensitive data such as personal and financial information",
      reason: "Cybersecurity protects sensitive data, prevents attacks, keeps critical infrastructure running, ensures business continuity and helps meet regulations."
    },
    {
      q: "A malicious program copies itself and spreads across a hospital network without any user opening or running anything. Which type of malware is this?",
      options: ["Worm", "Virus", "Trojan", "Spyware"],
      ans: "Worm",
      reason: "A worm is self-replicating malware that spreads across networks without user intervention. A virus needs an infected program to be executed."
    },
    {
      q: "A free game looks genuine, but secretly lets an attacker control the user's computer. Which type of malware is it?",
      options: ["Trojan", "Worm", "Virus", "Ransomware"],
      ans: "Trojan",
      reason: "A Trojan appears to be legitimate software but hides malicious functions such as remote control or data theft."
    },
    {
      q: "All the files of a company are locked and the attackers demand payment in exchange for the decryption key. This is an example of:",
      options: ["ransomware", "spyware", "a worm", "phishing"],
      ans: "ransomware",
      reason: "Ransomware encrypts files or entire systems and demands a ransom for the decryption key. Paying does not guarantee the data will be recovered."
    },
    {
      q: "A student receives an email that appears to come from the bank and asks them to click a link and type their password. Which attack is this?",
      options: ["Phishing", "DDoS attack", "Ransomware attack", "Insider threat"],
      ans: "Phishing",
      reason: "Phishing is a social engineering attack in which criminals deceive users into revealing sensitive information such as passwords."
    },
    {
      q: "What is the aim of a DDoS attack?",
      options: ["To overwhelm a system with traffic so legitimate users cannot access it", "To steal user passwords by sending fake e-mails to victims", "To lock the files of a victim and demand payment in return", "To spread silently by attaching itself to infected programs"],
      ans: "To overwhelm a system with traffic so legitimate users cannot access it",
      reason: "Denial of Service attacks flood a target with excessive traffic so that it becomes inaccessible to legitimate users."
    },
    {
      q: "Which of the following is the strongest password?",
      options: ["Tg7#kLm!92pQ", "ali2008", "password123", "12345678"],
      ans: "Tg7#kLm!92pQ",
      reason: "A strong password is long, mixes upper and lower case letters, numbers and special characters, and is unpredictable. The others are short or easily guessed."
    },
    {
      q: "A bank asks a customer for a password and then sends a one-time code (OTP) to the customer's phone before logging in. What is this security method called?",
      options: ["Two-factor authentication (2FA)", "Symmetric encryption (one shared key)", "A firewall (network traffic filter)", "Antivirus scanning (malware removal)"],
      ans: "Two-factor authentication (2FA)",
      reason: "2FA needs two different forms of verification, such as something you know (password) and something you have (an OTP on your phone)."
    },
    {
      q: "What does a firewall do?",
      options: ["It monitors and controls network traffic and blocks malicious traffic", "It converts plaintext into unreadable ciphertext using a key", "It stores backup copies of important data in another location", "It scans stored files only, looking for known viruses and Trojans"],
      ans: "It monitors and controls network traffic and blocks malicious traffic",
      reason: "A firewall is a barrier between a trusted internal network and untrusted external networks. It filters and blocks malicious traffic."
    },
    {
      q: "Encryption is the process of converting:",
      options: ["plaintext into unreadable ciphertext using an algorithm and a key", "ciphertext into readable plaintext without using any key", "passwords into usernames using a mathematical formula", "analog signals into digital signals using a converter"],
      ans: "plaintext into unreadable ciphertext using an algorithm and a key",
      reason: "Encryption transforms readable plaintext into scrambled ciphertext with an encryption algorithm and key, so only someone with the decryption key can read it."
    },
    {
      q: "<div class=\"stimulus\">The figure shows the encryption process. One label is replaced by a question mark.<svg viewBox=\"0 0 430 104\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ar2\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"6\" y=\"20\" width=\"62\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"37.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Plaintext</text><path d=\"M68,36 H84\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"84\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"121.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Encryption</text><path d=\"M158,36 H176\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"176\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"213.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">?</text><path d=\"M250,36 H268\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"268\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"305.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Decryption</text><path d=\"M342,36 H358\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"358\" y=\"20\" width=\"62\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"389.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Plaintext</text><line x1=\"121\" y1=\"52\" x2=\"121\" y2=\"78\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"121\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Key</text><line x1=\"305\" y1=\"52\" x2=\"305\" y2=\"78\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"305\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Key</text></svg></div>Which term replaces the question mark?",
      options: ["Ciphertext", "Decryption key", "Firewall", "Plaintext"],
      ans: "Ciphertext",
      reason: "Encryption turns plaintext into ciphertext. Decryption then reverses the process to produce plaintext again."
    },
    {
      q: "Symmetric encryption uses:",
      options: ["a single key for both encryption and decryption", "a public key and a private key as a pair", "no key, relying only on a secret algorithm", "a different key for every character in the message"],
      ans: "a single key for both encryption and decryption",
      reason: "Symmetric encryption relies on one shared secret key to encrypt plaintext and decrypt ciphertext."
    },
    {
      q: "<div class=\"stimulus\">The figure shows how a message is encrypted and decrypted.<svg viewBox=\"0 0 430 104\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ar2\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"6\" y=\"20\" width=\"62\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"37.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Plaintext</text><path d=\"M68,36 H84\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"84\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"121.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Encryption</text><path d=\"M158,36 H176\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"176\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"213.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Ciphertext</text><path d=\"M250,36 H268\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"268\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"305.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Decryption</text><path d=\"M342,36 H358\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"358\" y=\"20\" width=\"62\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"389.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Plaintext</text><line x1=\"121\" y1=\"52\" x2=\"121\" y2=\"78\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"121\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Same secret key</text><line x1=\"305\" y1=\"52\" x2=\"305\" y2=\"78\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"305\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Same secret key</text></svg></div>Which type of encryption is shown?",
      options: ["Symmetric encryption", "Asymmetric encryption", "Two-factor authentication", "Firewall filtering"],
      ans: "Symmetric encryption",
      reason: "The same key is used to encrypt and to decrypt, which is symmetric encryption."
    },
    {
      q: "<div class=\"stimulus\">A message is encrypted with the receiver's public key, as shown.<svg viewBox=\"0 0 430 104\" style=\"width:100%;max-width:460px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ar2\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"6\" y=\"20\" width=\"62\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"37.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Plaintext</text><path d=\"M68,36 H84\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"84\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"121.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Encryption</text><path d=\"M158,36 H176\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"176\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"213.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Ciphertext</text><path d=\"M250,36 H268\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"268\" y=\"20\" width=\"74\" height=\"32\" rx=\"3\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"305.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Decryption</text><path d=\"M342,36 H358\" stroke=\"#222\" stroke-width=\"1.6\" fill=\"none\" marker-end=\"url(#ar2)\"/><rect x=\"358\" y=\"20\" width=\"62\" height=\"32\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"389.0\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Plaintext</text><line x1=\"121\" y1=\"52\" x2=\"121\" y2=\"78\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"121\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Public key</text><line x1=\"305\" y1=\"52\" x2=\"305\" y2=\"78\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"305\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Private key</text></svg></div>Which type of encryption is this, and which key is used to decrypt the message?",
      options: ["Asymmetric; the private key", "Asymmetric; the public key", "Symmetric; the private key", "Symmetric; the shared key"],
      ans: "Asymmetric; the private key",
      reason: "Two different keys are used, so it is asymmetric encryption. The public key encrypts and only the matching private key can decrypt."
    },
    {
      q: "Two people who have never met want to exchange secret messages over the internet without first sharing a secret key. Which method should they use?",
      options: ["Asymmetric encryption", "Symmetric encryption", "A single shared password", "Plaintext messaging"],
      ans: "Asymmetric encryption",
      reason: "Asymmetric encryption allows secure communication between parties who have never met, because public keys can be shared openly and only the private key decrypts."
    },
    {
      q: "Which is an advantage of asymmetric encryption over symmetric encryption?",
      options: ["It removes the need to share a secret key in advance", "It is much faster when encrypting very large files", "It needs far less computing power than symmetric methods", "It uses only one key for encryption and decryption"],
      ans: "It removes the need to share a secret key in advance",
      reason: "Asymmetric encryption simplifies key distribution because public keys can be shared openly. It is, however, slower and more computationally complex."
    }
    ];
  }
});
