// Class 11 Math — Chapter 6: Permutation and Combination
// 108 MCQs (base + stimulus-based), each with a computed/verified explanation.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch6",
  label: "Chapter 6: Permutation and Combination",
  order: 6,
  questions: function () {
    return [
  {
    "q": "The product of the first \\(n\\) positive integers is denoted by:",
    "options": [
      "\\(2^n\\)",
      "\\(P(n)\\)",
      "\\(n!\\)",
      "\\(n^2\\)"
    ],
    "ans": "\\(n!\\)",
    "reason": "By definition, \\(n!=n\\times(n-1)\\times\\cdots\\times2\\times1\\) is the product of the first \\(n\\) positive integers."
  },
  {
    "q": "What is the value of \\(0!\\)?",
    "options": [
      "\\(1\\)",
      "\\(\\text{Undefined}\\)",
      "\\(0\\)",
      "\\(\\text{Infinite}\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "By convention, \\(0!=1\\) (the empty product), which keeps formulas like \\(^nP_0\\) and \\(^nC_0\\) working consistently."
  },
  {
    "q": "Evaluate \\(6!/4!\\):",
    "options": [
      "\\(2\\)",
      "\\(12\\)",
      "\\(30\\)",
      "\\(24\\)"
    ],
    "ans": "\\(30\\)",
    "reason": "\\(\\dfrac{6!}{4!}=6\\times5=30\\) (the \\(4!\\) cancels, leaving just \\(6\\times5\\))."
  },
  {
    "q": "The fundamental counting principle states that if an event can occur in \\(m\\) ways and a second in \\(n\\) ways, both can occur in:",
    "options": [
      "\\(m!/n!\\text{ ways}\\)",
      "\\(m^n\\text{ ways}\\)",
      "\\(m+n\\text{ ways}\\)",
      "\\(m\\times n\\text{ ways}\\)"
    ],
    "ans": "\\(m\\times n\\text{ ways}\\)",
    "reason": "The Fundamental Counting Principle: if one event has \\(m\\) outcomes and a second independent event has \\(n\\), together they have \\(m\\times n\\) outcomes."
  },
  {
    "q": "An arrangement of a set of objects in a definite order is called a:",
    "options": [
      "\\(\\text{Permutation}\\)",
      "\\(\\text{Set}\\)",
      "\\(\\text{Sequence}\\)",
      "\\(\\text{Combination}\\)"
    ],
    "ans": "\\(\\text{Permutation}\\)",
    "reason": "By definition, arranging objects in a definite order is called a permutation."
  },
  {
    "q": "The number of permutations of \\(n\\) distinct objects taken \\(r\\) at a time is given by:",
    "options": [
      "\\(n!/(n-r)!\\)",
      "\\(n!/[r!(n-r)!]\\)",
      "\\((n-r)!/n!\\)",
      "\\(n!/r!\\)"
    ],
    "ans": "\\(n!/(n-r)!\\)",
    "reason": "The permutation formula for choosing and ordering \\(r\\) of \\(n\\) distinct objects is \\(^nP_r=n!/(n-r)!\\)."
  },
  {
    "q": "The value of \\(^nP_n\\) is equal to:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(n!\\)",
      "\\(n\\)"
    ],
    "ans": "\\(n!\\)",
    "reason": "Taking all \\(n\\) objects (\\(r=n\\)): \\(^nP_n=n!/(n-n)!=n!/0!=n!\\)."
  },
  {
    "q": "The value of \\(^nP_0\\) is equal to:",
    "options": [
      "\\(n!\\)",
      "\\(0\\)",
      "\\(n\\)",
      "\\(1\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "Choosing none of the objects: \\(^nP_0=n!/n!=1\\)."
  },
  {
    "q": "Evaluate \\(^5P_3\\):",
    "options": [
      "\\(120\\)",
      "\\(10\\)",
      "\\(60\\)",
      "\\(20\\)"
    ],
    "ans": "\\(60\\)",
    "reason": "\\(^5P_3=\\dfrac{5!}{2!}=5\\times4\\times3=60\\)."
  },
  {
    "q": "If \\(^nP_2=30\\), then \\(n\\) equals:",
    "options": [
      "\\(5\\)",
      "\\(8\\)",
      "\\(6\\)",
      "\\(7\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "\\(^nP_2=n(n-1)=30\\Rightarrow n^2-n-30=0\\Rightarrow(n-6)(n+5)=0\\Rightarrow n=6\\)."
  },
  {
    "q": "Number of ways to arrange the letters of the word \"MATH\":",
    "options": [
      "\\(4\\)",
      "\\(16\\)",
      "\\(12\\)",
      "\\(24\\)"
    ],
    "ans": "\\(24\\)",
    "reason": "\"MATH\" has 4 distinct letters, so all arrangements: \\(4!=24\\)."
  },
  {
    "q": "Number of arrangements of \\(n\\) objects where \\(p\\) are of one kind, \\(q\\) of a second kind, and \\(r\\) of a third kind is:",
    "options": [
      "\\(n!/(p!\\cdot q!\\cdot r!)\\)",
      "\\(n!/(p!+q!+r!)\\)",
      "\\((p!\\cdot q!\\cdot r!)/n!\\)",
      "\\(n!-(p!q!r!)\\)"
    ],
    "ans": "\\(n!/(p!\\cdot q!\\cdot r!)\\)",
    "reason": "When objects repeat, dividing out the repeated arrangements gives \\(n!/(p!\\,q!\\,r!)\\)."
  },
  {
    "q": "How many distinct permutations can be formed using the letters of \"PAKISTAN\"?",
    "options": [
      "\\(10080\\)",
      "\\(20160\\)",
      "\\(5040\\)",
      "\\(40320\\)"
    ],
    "ans": "\\(20160\\)",
    "reason": "\"PAKISTAN\" has 8 letters with \\(A\\) repeated twice (others distinct): \\(8!/2!=40320/2=20160\\)."
  },
  {
    "q": "The number of circular permutations of \\(n\\) distinct objects is:",
    "options": [
      "\\((n-1)!/2\\)",
      "\\(n!/2\\)",
      "\\(n!\\)",
      "\\((n-1)!\\)"
    ],
    "ans": "\\((n-1)!\\)",
    "reason": "Fixing one object to remove the effect of rotation, the remaining \\(n-1\\) objects can be arranged in \\((n-1)!\\) ways."
  },
  {
    "q": "Number of ways 6 people can sit at a round table is:",
    "options": [
      "\\(120\\)",
      "\\(24\\)",
      "\\(720\\)",
      "\\(360\\)"
    ],
    "ans": "\\(120\\)",
    "reason": "Circular arrangement of 6 people: \\((6-1)!=5!=120\\)."
  },
  {
    "q": "Circular arrangements of \\(n\\) beads on a necklace (where clockwise and counterclockwise look identical) is:",
    "options": [
      "\\((n-1)!/2\\)",
      "\\((n-1)!\\)",
      "\\(n!/2\\)",
      "\\(n!-1\\)"
    ],
    "ans": "\\((n-1)!/2\\)",
    "reason": "For a necklace, both circular rotation and flipping (reflection) give the same arrangement, so we divide the circular count by 2: \\((n-1)!/2\\)."
  },
  {
    "q": "In how many ways can 5 different beads be strung into a necklace?",
    "options": [
      "\\(24\\)",
      "\\(120\\)",
      "\\(60\\)",
      "\\(12\\)"
    ],
    "ans": "\\(12\\)",
    "reason": "For 5 beads on a necklace: \\((5-1)!/2=24/2=12\\)."
  },
  {
    "q": "A selection of objects where order does NOT matter is called a:",
    "options": [
      "\\(\\text{Matrix}\\)",
      "\\(\\text{Permutation}\\)",
      "\\(\\text{Sequence}\\)",
      "\\(\\text{Combination}\\)"
    ],
    "ans": "\\(\\text{Combination}\\)",
    "reason": "By definition, a selection where order doesn't matter is a combination."
  },
  {
    "q": "The formula for \\(^nC_r\\) is:",
    "options": [
      "\\(r!/(n-r)!\\)",
      "\\(n!/[r!(n-r)!]\\)",
      "\\(n!/(n-r)!\\)",
      "\\(n!/r!\\)"
    ],
    "ans": "\\(n!/[r!(n-r)!]\\)",
    "reason": "The combination formula divides out the \\(r!\\) orderings from the permutation formula: \\(^nC_r=n!/[r!(n-r)!]\\)."
  },
  {
    "q": "Relationship between \\(^nP_r\\) and \\(^nC_r\\) is:",
    "options": [
      "\\(^nP_r=r!\\cdot{}^nC_r\\)",
      "\\(^nP_r+{}^nC_r=n!\\)",
      "\\(^nC_r=r!\\cdot{}^nP_r\\)",
      "\\(^nP_r={}^nC_r/r!\\)"
    ],
    "ans": "\\(^nP_r=r!\\cdot{}^nC_r\\)",
    "reason": "Since a combination has no order but a permutation does, multiplying a combination by the \\(r!\\) ways to order it gives the permutation: \\(^nP_r=r!\\cdot{}^nC_r\\)."
  },
  {
    "q": "Value of \\(^nC_n\\) is:",
    "options": [
      "\\(0\\)",
      "\\(n\\)",
      "\\(1\\)",
      "\\(n!\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "Choosing all \\(n\\) objects: \\(^nC_n=n!/[n!\\cdot0!]=1\\)."
  },
  {
    "q": "Value of \\(^nC_0\\) is:",
    "options": [
      "\\(n!\\)",
      "\\(1\\)",
      "\\(n\\)",
      "\\(0\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "Choosing none: \\(^nC_0=n!/[0!\\cdot n!]=1\\)."
  },
  {
    "q": "Complementary combination rule states \\(^nC_r=\\)",
    "options": [
      "\\(^{n+1}C_r\\)",
      "\\(^nC_{r+1}\\)",
      "\\(^nC_{n-r}\\)",
      "\\(^{n-1}C_r\\)"
    ],
    "ans": "\\(^nC_{n-r}\\)",
    "reason": "Choosing \\(r\\) items to include is equivalent to choosing \\(n-r\\) items to leave out, so \\(^nC_r={}^nC_{n-r}\\)."
  },
  {
    "q": "Evaluate \\(^{10}C_8\\):",
    "options": [
      "\\(90\\)",
      "\\(180\\)",
      "\\(10\\)",
      "\\(45\\)"
    ],
    "ans": "\\(45\\)",
    "reason": "\\(^{10}C_8={}^{10}C_2=\\dfrac{10\\times9}{2}=45\\) (using the complement rule to simplify)."
  },
  {
    "q": "Pascal's Identity for combinations states \\(^{n-1}C_r+{}^{n-1}C_{r-1}=\\)",
    "options": [
      "\\(^{n-1}C_{r+1}\\)",
      "\\(^{n+1}C_r\\)",
      "\\(^nC_{r+1}\\)",
      "\\(^nC_r\\)"
    ],
    "ans": "\\(^nC_r\\)",
    "reason": "This is Pascal's Identity: including or excluding one specific object splits \\(^nC_r\\) into \\(^{n-1}C_{r-1}+{}^{n-1}C_r\\)."
  },
  {
    "q": "If \\(^nC_8={}^nC_{12}\\), then \\(n\\) equals:",
    "options": [
      "\\(4\\)",
      "\\(16\\)",
      "\\(12\\)",
      "\\(20\\)"
    ],
    "ans": "\\(20\\)",
    "reason": "\\(^nC_8={}^nC_{12}\\) means \\(8+12=n\\) (complementary combinations), so \\(n=20\\)."
  },
  {
    "q": "How many cricket teams of 11 players can be chosen from 15 available players?",
    "options": [
      "\\(3003\\)",
      "\\(^{15}C_{11}=1365\\)",
      "\\(^{15}P_{11}\\)",
      "\\(165\\)"
    ],
    "ans": "\\(^{15}C_{11}=1365\\)",
    "reason": "Choosing 11 from 15 (order doesn't matter for a team): \\(^{15}C_{11}=\\dfrac{15!}{11!\\,4!}=1365\\)."
  },
  {
    "q": "Number of diagonals in an \\(n\\)-sided polygon is given by the formula:",
    "options": [
      "\\(n(n-1)\\)",
      "\\(n(n-3)\\)",
      "\\(^nC_2\\)",
      "\\(^nC_2-n\\)"
    ],
    "ans": "\\(^nC_2-n\\)",
    "reason": "Every pair of vertices makes a line (\\(^nC_2\\) of them), but \\(n\\) of those are actual sides, not diagonals: \\(^nC_2-n\\)."
  },
  {
    "q": "How many diagonals does a hexagon (6 sides) have?",
    "options": [
      "\\(9\\)",
      "\\(12\\)",
      "\\(15\\)",
      "\\(6\\)"
    ],
    "ans": "\\(9\\)",
    "reason": "For \\(n=6\\): \\(^6C_2-6=15-6=9\\)."
  },
  {
    "q": "Number of triangles formed by joining vertices of a decagon (10 sides) is:",
    "options": [
      "\\(^{10}P_3=720\\)",
      "\\(45\\)",
      "\\(100\\)",
      "\\(^{10}C_3=120\\)"
    ],
    "ans": "\\(^{10}C_3=120\\)",
    "reason": "Any 3 of the 10 vertices (no 3 collinear) form a triangle: \\(^{10}C_3=120\\)."
  },
  {
    "q": "Sum of binomial coefficients \\(^nC_0+{}^nC_1+\\cdots+{}^nC_n\\) equals:",
    "options": [
      "\\(2^{n-1}\\)",
      "\\(n!\\)",
      "\\(2^n\\)",
      "\\(n^2\\)"
    ],
    "ans": "\\(2^n\\)",
    "reason": "Expanding \\((1+1)^n\\) via the Binomial Theorem gives \\(\\sum{}^nC_k=2^n\\)."
  },
  {
    "q": "How many subsets does a set containing 5 elements have?",
    "options": [
      "\\(10\\)",
      "\\(16\\)",
      "\\(32\\)",
      "\\(25\\)"
    ],
    "ans": "\\(32\\)",
    "reason": "A set of 5 elements has \\(2^5=32\\) subsets (each element is independently in or out)."
  },
  {
    "q": "How many proper subsets does a set of \\(n\\) elements have?",
    "options": [
      "\\(n!-1\\)",
      "\\(2^n-1\\)",
      "\\(2^{n-1}\\)",
      "\\(2^n\\)"
    ],
    "ans": "\\(2^n-1\\)",
    "reason": "All \\(2^n\\) subsets minus the set itself (which isn't 'proper') gives \\(2^n-1\\)."
  },
  {
    "q": "In how many ways can 4 letters be posted into 3 post boxes?",
    "options": [
      "\\(^4P_3=24\\)",
      "\\(4^3=64\\)",
      "\\(3^4=81\\)",
      "\\(12\\)"
    ],
    "ans": "\\(3^4=81\\)",
    "reason": "Each of the 4 letters independently has 3 box choices: \\(3^4=81\\)."
  },
  {
    "q": "Number of 4-digit numbers formed using digits \\(\\{1,2,3,4,5\\}\\) without repetition is:",
    "options": [
      "\\(^5P_4=120\\)",
      "\\(24\\)",
      "\\(^5C_4=5\\)",
      "\\(5^4=625\\)"
    ],
    "ans": "\\(^5P_4=120\\)",
    "reason": "Choosing and ordering 4 of 5 digits, no repeats: \\(^5P_4=5\\times4\\times3\\times2=120\\)."
  },
  {
    "q": "Number of 4-digit numbers formed using digits \\(\\{1,2,3,4,5\\}\\) WITH repetition allowed is:",
    "options": [
      "\\(24\\)",
      "\\(120\\)",
      "\\(1024\\)",
      "\\(625\\)"
    ],
    "ans": "\\(625\\)",
    "reason": "Each of the 4 positions independently has 5 digit choices: \\(5^4=625\\)."
  },
  {
    "q": "How many 3-digit EVEN numbers can be formed from digits \\(\\{1,2,3,4,6\\}\\) without repetition?",
    "options": [
      "\\(36\\)",
      "\\(18\\)",
      "\\(24\\)",
      "\\(60\\)"
    ],
    "ans": "\\(36\\)",
    "reason": "The units digit must be even (\\(2,4,\\) or \\(6\\) — 3 choices); the other two positions are filled from the remaining 4 digits without repetition (\\(4\\times3=12\\) ways): \\(3\\times12=36\\)."
  },
  {
    "q": "In how many ways can a committee of 3 men and 2 women be selected from 5 men and 4 women?",
    "options": [
      "\\(24\\)",
      "\\(120\\)",
      "\\(^5C_3+{}^4C_2=16\\)",
      "\\(^5C_3\\times{}^4C_2=60\\)"
    ],
    "ans": "\\(^5C_3\\times{}^4C_2=60\\)",
    "reason": "Choose the men and women independently and multiply: \\(^5C_3\\times{}^4C_2=10\\times6=60\\)."
  },
  {
    "q": "How many handshakes occur at a party with 10 people if everyone shakes hands with everyone else?",
    "options": [
      "\\(10!\\)",
      "\\(^{10}C_2=45\\)",
      "\\(^{10}P_2=90\\)",
      "\\(100\\)"
    ],
    "ans": "\\(^{10}C_2=45\\)",
    "reason": "Every pair of people shakes hands once: \\(^{10}C_2=45\\)."
  },
  {
    "q": "Express \\((n+1)n(n-1)\\) in factorial form:",
    "options": [
      "\\(n!/(n-1)!\\)",
      "\\((n+1)!/n!\\)",
      "\\((n+1)!/3!\\)",
      "\\((n+1)!/(n-2)!\\)"
    ],
    "ans": "\\((n+1)!/(n-2)!\\)",
    "reason": "\\((n+1)n(n-1)=(n+1)!/(n-2)!\\), since the factorial ratio cancels everything below \\(n-1\\)."
  },
  {
    "q": "Simplify: \\(n!/(n-1)!=\\)",
    "options": [
      "\\(n!\\)",
      "\\(n\\)",
      "\\(n-1\\)",
      "\\(1\\)"
    ],
    "ans": "\\(n\\)",
    "reason": "\\(n!/(n-1)!\\) cancels all the way down to just the leftover factor \\(n\\)."
  },
  {
    "q": "Number of ways to arrange letters of \"COMMITTEE\":",
    "options": [
      "\\(9!\\)",
      "\\(9!/2!\\)",
      "\\(22680\\)",
      "\\(9!/(2!\\cdot2!\\cdot2!)=45360\\)"
    ],
    "ans": "\\(9!/(2!\\cdot2!\\cdot2!)=45360\\)",
    "reason": "\"COMMITTEE\" has 9 letters with \\(M,T,E\\) each repeated twice: \\(9!/(2!\\,2!\\,2!)=362880/8=45360\\)."
  },
  {
    "q": "Value of \\(^nC_1\\) is:",
    "options": [
      "\\(1\\)",
      "\\(n!\\)",
      "\\(0\\)",
      "\\(n\\)"
    ],
    "ans": "\\(n\\)",
    "reason": "Choosing 1 object from \\(n\\): \\(^nC_1=n!/[1!(n-1)!]=n\\)."
  },
  {
    "q": "If \\(^nP_r=720\\) and \\(^nC_r=120\\), find \\(r\\):",
    "options": [
      "\\(5\\)",
      "\\(3\\)",
      "\\(6\\)",
      "\\(4\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "Since \\(^nP_r=r!\\cdot{}^nC_r\\), here \\(720=r!\\times120\\Rightarrow r!=6\\Rightarrow r=3\\)."
  },
  {
    "q": "In the previous question, the value of \\(n\\) is:",
    "options": [
      "\\(10\\)",
      "\\(8\\)",
      "\\(9\\)",
      "\\(12\\)"
    ],
    "ans": "\\(10\\)",
    "reason": "With \\(r=3\\): \\(^nP_3=n(n-1)(n-2)=720\\); testing \\(n=10\\): \\(10\\times9\\times8=720\\), confirming \\(n=10\\)."
  },
  {
    "q": "How many straight lines can be drawn through 6 non-collinear points?",
    "options": [
      "\\(36\\)",
      "\\(^6C_2=15\\)",
      "\\(6\\)",
      "\\(^6P_2=30\\)"
    ],
    "ans": "\\(^6C_2=15\\)",
    "reason": "Any 2 of the 6 points determine a line: \\(^6C_2=15\\)."
  },
  {
    "q": "Out of 7 points, 4 are collinear. Number of straight lines formed is:",
    "options": [
      "\\(^7C_2-{}^4C_2+1=16\\)",
      "\\(15\\)",
      "\\(21\\)",
      "\\(12\\)"
    ],
    "ans": "\\(^7C_2-{}^4C_2+1=16\\)",
    "reason": "Count all lines from any 2 of the 7 points (\\(^7C_2\\)), remove the over-counted lines among the 4 collinear points (\\(^4C_2\\)), then add back the single actual line they all share: \\(^7C_2-{}^4C_2+1=21-6+1=16\\)."
  },
  {
    "q": "Number of signals that can be made with 5 flags of different colors by raising any number of them:",
    "options": [
      "\\(25\\)",
      "\\(120\\)",
      "\\(325\\)",
      "\\(60\\)"
    ],
    "ans": "\\(325\\)",
    "reason": "Signals using \\(1,2,3,4,\\) or \\(5\\) flags (order matters) sum to \\(^5P_1+{}^5P_2+{}^5P_3+{}^5P_4+{}^5P_5=5+20+60+120+120=325\\)."
  },
  {
    "q": "In how many ways can 5 boys and 5 girls sit alternately in a row?",
    "options": [
      "\\(25\\)",
      "\\(10!\\)",
      "\\(5!\\times5!=14400\\)",
      "\\(2\\times5!\\times5!=28800\\)"
    ],
    "ans": "\\(2\\times5!\\times5!=28800\\)",
    "reason": "Seat one group first (5 boys: \\(5!\\) ways or 5 girls: \\(5!\\) ways), then interleave the other group in the gaps, and account for starting with either a boy or a girl: \\(2\\times5!\\times5!=28800\\)."
  },
  {
    "q": "Value of \\(^nC_r+{}^nC_{r-1}\\) equals:",
    "options": [
      "\\(^{n+1}C_r\\)",
      "\\(^nC_{r+1}\\)",
      "\\(^{n-1}C_r\\)",
      "\\(^{n+1}C_{r+1}\\)"
    ],
    "ans": "\\(^{n+1}C_r\\)",
    "reason": "This is Pascal's Identity in its other common form: \\(^nC_r+{}^nC_{r-1}={}^{n+1}C_r\\)."
  },
  {
    "q": "Value of \\(^nC_r/{}^nC_{r-1}\\) is equal to:",
    "options": [
      "\\(n/r\\)",
      "\\(r/(n-r+1)\\)",
      "\\((n-r+1)/r\\)",
      "\\((n-r)/r\\)"
    ],
    "ans": "\\((n-r+1)/r\\)",
    "reason": "Dividing the \\(^nC_r\\) formula by \\(^nC_{r-1}\\) and simplifying the factorials leaves \\(\\dfrac{n-r+1}{r}\\)."
  },
  {
    "q": "Total number of ways to divide 6 distinct books equally between 2 students is:",
    "options": [
      "\\(^6C_3/2=10\\)",
      "\\(60\\)",
      "\\(^6C_3=20\\)",
      "\\(15\\)"
    ],
    "ans": "\\(^6C_3=20\\)",
    "reason": "Choosing which 3 of the 6 books go to the first student determines the split (the rest go to the second): \\(^6C_3=20\\)."
  },
  {
    "q": "How many numbers between 100 and 1000 can be formed using digits \\(\\{1,2,3,4,5\\}\\) with no digit repeated?",
    "options": [
      "\\(60\\)",
      "\\(24\\)",
      "\\(125\\)",
      "\\(120\\)"
    ],
    "ans": "\\(60\\)",
    "reason": "3-digit numbers (100–999) from 5 digits without repetition: choose and order 3 of them, \\(^5P_3=5\\times4\\times3=60\\)."
  },
  {
    "q": "If \\(^nP_r={}^nP_{r+1}\\) and \\(^nC_r={}^nC_{r-1}\\), then \\(n\\) is:",
    "options": [
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)",
      "\\(2\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "Solving \\(^nP_r={}^nP_{r+1}\\) forces \\(n-r=1\\); combined with \\(^nC_r={}^nC_{r-1}\\) (which forces \\(n=2r-1\\)), these together pin down \\(n=3\\)."
  },
  {
    "q": "Number of ways to arrange 4 distinct keys on a key ring is:",
    "options": [
      "\\(24\\)",
      "\\((4-1)!/2=3\\)",
      "\\(12\\)",
      "\\(6\\)"
    ],
    "ans": "\\((4-1)!/2=3\\)",
    "reason": "A key ring can be flipped over, so (like a necklace) arrangements of 4 keys are \\((4-1)!/2=6/2=3\\)."
  },
  {
    "q": "How many diagonals can be drawn in an octagon (8 sides)?",
    "options": [
      "\\(14\\)",
      "\\(16\\)",
      "\\(28\\)",
      "\\(20\\)"
    ],
    "ans": "\\(20\\)",
    "reason": "Diagonals of an octagon: \\(^8C_2-8=28-8=20\\)."
  },
  {
    "q": "Formula for calculating the total number of selections taking at least one item from \\(n\\) distinct items is:",
    "options": [
      "\\(2^n\\)",
      "\\(2^n-1\\)",
      "\\(n!-1\\)",
      "\\(2^{n-1}\\)"
    ],
    "ans": "\\(2^n-1\\)",
    "reason": "Each of the \\(n\\) items is independently included or not, giving \\(2^n\\) subsets total; removing the empty selection (0 items) leaves \\(2^n-1\\)."
  },
  {
    "q": "Number of ways to arrange the letters of \"MATHEMATICS\" is:",
    "options": [
      "\\(11!/(2!\\cdot2!\\cdot2!)\\)",
      "\\(11!\\)",
      "\\(11!/2!\\)",
      "\\(11!/(2!\\cdot2!)\\)"
    ],
    "ans": "\\(11!/(2!\\cdot2!\\cdot2!)\\)",
    "reason": "\"MATHEMATICS\" has 11 letters with \\(M,A,T\\) each repeated twice: \\(11!/(2!\\,2!\\,2!)\\)."
  },
  {
    "q": "Number of ways 5 persons can sit in a row such that 2 particular persons ALWAYS sit together:",
    "options": [
      "\\(24\\)",
      "\\(4!\\times2!=48\\)",
      "\\(96\\)",
      "\\(120\\)"
    ],
    "ans": "\\(4!\\times2!=48\\)",
    "reason": "Glue the 2 particular people into one block (\\(2!\\) internal orders), then arrange this block with the other 3 people: \\(4!\\times2!=48\\)."
  },
  {
    "q": "Number of ways 5 persons can sit in a row such that 2 particular persons NEVER sit together:",
    "options": [
      "\\(96\\)",
      "\\(5!-(4!\\times2!)=72\\)",
      "\\(48\\)",
      "\\(24\\)"
    ],
    "ans": "\\(5!-(4!\\times2!)=72\\)",
    "reason": "Subtract the 'always together' count from all arrangements: \\(5!-(4!\\times2!)=120-48=72\\)."
  },
  {
    "q": "If \\(^{18}C_x={}^{18}C_{x+2}\\), then \\(x\\) is equal to:",
    "options": [
      "\\(9\\)",
      "\\(7\\)",
      "\\(8\\)",
      "\\(10\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "\\(^{18}C_x={}^{18}C_{x+2}\\) means \\(x+(x+2)=18\\) (complementary combinations), so \\(x=8\\)."
  },
  {
    "q": "How many straight lines can be formed from 10 points in a plane, where no 3 points are collinear?",
    "options": [
      "\\(45\\)",
      "\\(10\\)",
      "\\(90\\)",
      "\\(120\\)"
    ],
    "ans": "\\(45\\)",
    "reason": "Any 2 of the 10 points determine a line: \\(^{10}C_2=45\\)."
  },
  {
    "q": "Evaluated expression: \\(^nC_0+{}^nC_1+{}^nC_2+\\cdots+{}^nC_n=\\)",
    "options": [
      "\\(2^n-1\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(2^n\\)"
    ],
    "ans": "\\(2^n\\)",
    "reason": "This is the Binomial Theorem applied to \\((1+1)^n\\): \\(\\sum{}^nC_k=2^n\\)."
  },
  {
    "q": "Evaluated expression: \\(^nC_0-{}^nC_1+{}^nC_2-\\cdots+(-1)^n\\,{}^nC_n=\\)",
    "options": [
      "\\(0\\)",
      "\\(2^{n-1}\\)",
      "\\(1\\)",
      "\\(2^n\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "This is the Binomial Theorem applied to \\((1-1)^n=0^n=0\\)."
  },
  {
    "q": "Sum of EVEN binomial coefficients \\(^nC_0+{}^nC_2+{}^nC_4+\\cdots=\\)",
    "options": [
      "\\(2^{n-1}\\)",
      "\\(2^{n-2}\\)",
      "\\(2^n\\)",
      "\\(2^n-1\\)"
    ],
    "ans": "\\(2^{n-1}\\)",
    "reason": "Adding \\((1+1)^n=2^n\\) and \\((1-1)^n=0\\) and halving isolates the even-indexed terms: \\(2^{n-1}\\)."
  },
  {
    "q": "Total number of 3-digit numbers divisible by 5 formed using \\(\\{0,1,2,3,5\\}\\) without repetition is:",
    "options": [
      "\\(18\\)",
      "\\(21\\)",
      "\\(36\\)",
      "\\(24\\)"
    ],
    "ans": "\\(21\\)",
    "reason": "Last digit must be \\(0\\) or \\(5\\) for divisibility by 5. Case last\\(=0\\): remaining 2 places from \\(\\{1,2,3,5\\}\\), \\(4\\times3=12\\) ways. Case last\\(=5\\): remaining places from \\(\\{0,1,2,3\\}\\) with hundreds \\(\\ne0\\): \\(4\\times3-3=9\\) ways. Total \\(12+9=21\\)."
  },
  {
    "q": "Number of parallelograms formed by a set of 4 parallel lines intersecting another set of 3 parallel lines is:",
    "options": [
      "\\(24\\)",
      "\\(36\\)",
      "\\(12\\)",
      "\\(^4C_2\\times{}^3C_2=18\\)"
    ],
    "ans": "\\(^4C_2\\times{}^3C_2=18\\)",
    "reason": "Choose 2 of the 4 parallel lines and 2 of the 3 parallel lines to form each parallelogram: \\(^4C_2\\times{}^3C_2=6\\times3=18\\)."
  },
  {
    "q": "If \\(^nC_3=10\\), then value of \\(n\\) is:",
    "options": [
      "\\(7\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(4\\)"
    ],
    "ans": "\\(5\\)",
    "reason": "\\(^nC_3=\\dfrac{n(n-1)(n-2)}{6}=10\\Rightarrow n(n-1)(n-2)=60\\); testing \\(n=5\\): \\(5\\times4\\times3=60\\), confirming \\(n=5\\)."
  },
  {
    "q": "Number of ways to select 1 or more items out of 4 distinct items is:",
    "options": [
      "\\(14\\)",
      "\\(12\\)",
      "\\(16\\)",
      "\\(15\\)"
    ],
    "ans": "\\(15\\)",
    "reason": "All non-empty subsets of 4 items: \\(2^4-1=15\\)."
  },
  {
    "q": "How many different signals can be given using 4 different colored flags, taking 2 at a time?",
    "options": [
      "\\(^4P_2=12\\)",
      "\\(16\\)",
      "\\(^4C_2=6\\)",
      "\\(24\\)"
    ],
    "ans": "\\(^4P_2=12\\)",
    "reason": "Ordered choices of 2 from 4 (order matters for a signal): \\(^4P_2=4\\times3=12\\)."
  },
  {
    "q": "In how many ways can 6 questions be selected out of 10 questions?",
    "options": [
      "\\(210\\)",
      "\\(720\\)",
      "\\(120\\)",
      "\\(5040\\)"
    ],
    "ans": "\\(210\\)",
    "reason": "Choosing 6 of 10 questions (order doesn't matter): \\(^{10}C_6=210\\)."
  },
  {
    "q": "Maximum number of points of intersection of 5 non-parallel straight lines is:",
    "options": [
      "\\(20\\)",
      "\\(15\\)",
      "\\(^5C_2=10\\)",
      "\\(25\\)"
    ],
    "ans": "\\(^5C_2=10\\)",
    "reason": "Each pair of the 5 lines meets at one point (assuming no two are parallel and no three meet at once): \\(^5C_2=10\\)."
  },
  {
    "q": "Product of any \\(k\\) consecutive integers is always divisible by:",
    "options": [
      "\\(k!\\)",
      "\\(2k\\)",
      "\\(k^2\\)",
      "\\((k-1)!\\)"
    ],
    "ans": "\\(k!\\)",
    "reason": "Any \\(k\\) consecutive integers include a full set of residues that guarantees divisibility by every integer up to \\(k\\), which is exactly captured by \\(k!\\) dividing their product (a classical number-theory result, also matching the fact that \\(\\binom{m}{k}\\) is always an integer)."
  },
  {
    "q": "If \\((n+1)!=12\\times(n-1)!\\), then \\(n\\) equals:",
    "options": [
      "\\(4\\)",
      "\\(5\\)",
      "\\(2\\)",
      "\\(3\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "\\((n+1)!=12(n-1)!\\Rightarrow(n+1)n=12\\Rightarrow n^2+n-12=0\\Rightarrow(n+4)(n-3)=0\\Rightarrow n=3\\)."
  },
  {
    "q": "Number of ways 4 men and 4 women can sit around a round table so that no two women sit together is:",
    "options": [
      "\\(288\\)",
      "\\(7!=5040\\)",
      "\\(4!\\times4!=576\\)",
      "\\(3!\\times4!=144\\)"
    ],
    "ans": "\\(3!\\times4!=144\\)",
    "reason": "Seat the 4 men around the table first (\\((4-1)!=3!\\) circular arrangements), which creates 4 gaps between them; place the 4 women into those gaps in \\(4!\\) ways: \\(3!\\times4!=144\\)."
  },
  {
    "q": "Evaluating \\(({}^nC_r)/({}^nC_r+{}^nC_{r-1})\\) gives:",
    "options": [
      "\\(r/(n+1)\\)",
      "\\((n-r+1)/(n+1)\\)",
      "\\(1/n\\)",
      "\\((n+1)/r\\)"
    ],
    "ans": "\\((n-r+1)/(n+1)\\)",
    "reason": "Using Pascal's Identity, \\(^nC_r+{}^nC_{r-1}={}^{n+1}C_r\\); dividing \\(^nC_r\\) by this and simplifying the factorials gives \\(\\dfrac{n-r+1}{n+1}\\)."
  },
  {
    "q": "Total number of outcomes when throwing 3 fair dice simultaneously is:",
    "options": [
      "\\(216\\)",
      "\\(108\\)",
      "\\(36\\)",
      "\\(18\\)"
    ],
    "ans": "\\(216\\)",
    "reason": "Each of the 3 dice independently has 6 outcomes: \\(6^3=216\\)."
  },
  {
    "q": "Number of ways to choose a President, Vice President, and Secretary from 10 members is:",
    "options": [
      "\\(^{10}C_3=120\\)",
      "\\(^{10}P_3=720\\)",
      "\\(1000\\)",
      "\\(30\\)"
    ],
    "ans": "\\(^{10}P_3=720\\)",
    "reason": "Choosing and ordering 3 distinct officer roles from 10 people: \\(^{10}P_3=10\\times9\\times8=720\\)."
  },
  {
    "q": "Simplify: \\(^nP_r/(n-r+1)=\\)",
    "options": [
      "\\(^{n-1}P_r\\)",
      "\\(^nP_{r-1}\\)",
      "\\(^nC_{r-1}\\)",
      "\\(^nP_{r+1}\\)"
    ],
    "ans": "\\(^nP_{r-1}\\)",
    "reason": "\\(^nP_r/(n-r+1)=\\dfrac{n!/(n-r)!}{n-r+1}=\\dfrac{n!}{(n-r+1)!}={}^nP_{r-1}\\)."
  },
  {
    "q": "Number of words that can be formed from \"STATISTICS\" is:",
    "options": [
      "\\(25200\\)",
      "\\(10!/(3!\\cdot3!\\cdot2!)=50400\\)",
      "\\(10!\\)",
      "\\(10!/(3!\\cdot3!)\\)"
    ],
    "ans": "\\(10!/(3!\\cdot3!\\cdot2!)=50400\\)",
    "reason": "\"STATISTICS\" has 10 letters with \\(S,T\\) each repeated 3 times and \\(I\\) repeated twice: \\(10!/(3!\\,3!\\,2!)=50400\\)."
  },
  {
    "q": "Value of \\(^nC_r+2\\cdot{}^nC_{r-1}+{}^nC_{r-2}\\) equals:",
    "options": [
      "\\(^nC_{r+2}\\)",
      "\\(^{n+2}C_{r+1}\\)",
      "\\(^{n+1}C_r\\)",
      "\\(^{n+2}C_r\\)"
    ],
    "ans": "\\(^{n+2}C_r\\)",
    "reason": "Applying Pascal's Identity twice (once to combine the last two terms, then again) collapses this to \\(^{n+2}C_r\\)."
  },
  {
    "q": "Number of ordered pairs \\((x,y)\\) of non-negative integers satisfying \\(x+y=10\\) is:",
    "options": [
      "\\(10\\)",
      "\\(12\\)",
      "\\(11\\)",
      "\\(9\\)"
    ],
    "ans": "\\(11\\)",
    "reason": "For \\(x+y=10\\) with \\(x,y\\ge0\\): \\(x\\) can be \\(0,1,\\ldots,10\\) — 11 possibilities, each fixing \\(y=10-x\\)."
  },
  {
    "q": "If a convex polygon has 44 diagonals, how many sides does it have?",
    "options": [
      "\\(8\\)",
      "\\(10\\)",
      "\\(11\\)",
      "\\(12\\)"
    ],
    "ans": "\\(11\\)",
    "reason": "\\(\\dfrac{n(n-3)}{2}=44\\Rightarrow n^2-3n-88=0\\Rightarrow(n-11)(n+8)=0\\Rightarrow n=11\\)."
  },
  {
    "q": "How many 4-digit numbers greater than 5000 can be formed using \\(\\{2,4,5,7,8\\}\\) without repetition?",
    "options": [
      "\\(120\\)",
      "\\(48\\)",
      "\\(72\\)",
      "\\(96\\)"
    ],
    "ans": "\\(72\\)",
    "reason": "The number must start with \\(5,7,\\) or \\(8\\) to exceed 5000 (3 choices); the remaining 3 digits are ordered from the other 4 digits: \\(3\\times(4\\times3\\times2)=3\\times24=72\\)."
  },
  {
    "q": "Value of \\(^{15}C_0+{}^{15}C_1+\\cdots+{}^{15}C_{15}\\) is:",
    "options": [
      "\\(15!\\)",
      "\\(32768\\ (2^{15})\\)",
      "\\(16384\\)",
      "\\(65536\\)"
    ],
    "ans": "\\(32768\\ (2^{15})\\)",
    "reason": "\\(\\sum_{k=0}^{15}{}^{15}C_k=2^{15}=32768\\)."
  },
  {
    "q": "If \\(^nP_4=12\\times{}^nP_2\\), then \\(n\\) equals:",
    "options": [
      "\\(7\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(8\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "\\(^nP_4/{}^nP_2=(n-2)(n-3)=12\\Rightarrow n^2-5n-6=0\\Rightarrow(n-6)(n+1)=0\\Rightarrow n=6\\)."
  },
  {
    "q": "Number of ways to select 4 cards of the SAME suit from a standard deck of 52 cards is:",
    "options": [
      "\\(13\\times{}^4C_4\\)",
      "\\(715\\)",
      "\\(4\\times{}^{13}C_4=2860\\)",
      "\\(^{52}C_4\\)"
    ],
    "ans": "\\(4\\times{}^{13}C_4=2860\\)",
    "reason": "Pick the suit (4 ways) then 4 of its 13 cards: \\(4\\times{}^{13}C_4=4\\times715=2860\\)."
  },
  {
    "q": "In how many ways can 5 distinct prizes be distributed among 3 students if each student can receive any number of prizes?",
    "options": [
      "\\(3^5=243\\)",
      "\\(^5P_3=60\\)",
      "\\(5^3=125\\)",
      "\\(15\\)"
    ],
    "ans": "\\(3^5=243\\)",
    "reason": "Each of the 5 prizes independently goes to 1 of 3 students: \\(3^5=243\\)."
  },
  {
    "q": "Total number of factors of 120 (excluding 1 and itself) is:",
    "options": [
      "\\(14\\)",
      "\\(10\\)",
      "\\(16\\)",
      "\\(12\\)"
    ],
    "ans": "\\(14\\)",
    "reason": "\\(120=2^3\\times3\\times5\\) has \\((3+1)(1+1)(1+1)=16\\) total factors; excluding \\(1\\) and \\(120\\) itself leaves \\(14\\)."
  },
  {
    "q": "Value of \\(^nC_r+{}^nC_{r+1}\\) is equal to:",
    "options": [
      "\\(^{n+2}C_{r+1}\\)",
      "\\(^{n+1}C_r\\)",
      "\\(^nC_{r+1}\\)",
      "\\(^{n+1}C_{r+1}\\)"
    ],
    "ans": "\\(^{n+1}C_{r+1}\\)",
    "reason": "Applying Pascal's Identity with a shifted index: \\(^nC_r+{}^nC_{r+1}={}^{n+1}C_{r+1}\\)."
  },
  {
    "q": "How many straight lines are determined by 8 points, no 3 of which are collinear?",
    "options": [
      "\\(64\\)",
      "\\(16\\)",
      "\\(28\\)",
      "\\(56\\)"
    ],
    "ans": "\\(28\\)",
    "reason": "Any 2 of the 8 points determine a line: \\(^8C_2=28\\)."
  },
  {
    "q": "Number of triangles formed using 8 non-collinear points as vertices is:",
    "options": [
      "\\(28\\)",
      "\\(^8C_3=56\\)",
      "\\(^8P_3=336\\)",
      "\\(24\\)"
    ],
    "ans": "\\(^8C_3=56\\)",
    "reason": "Any 3 of the 8 points (no 3 collinear) form a triangle: \\(^8C_3=56\\)."
  },
  {
    "q": "Simplify: \\(n!/[r!\\cdot(n-r)!]\\)",
    "options": [
      "\\(^nC_r\\)",
      "\\(^{n-r}C_r\\)",
      "\\(^nP_r\\)",
      "\\(r!\\)"
    ],
    "ans": "\\(^nC_r\\)",
    "reason": "This is exactly the combination formula: \\(n!/[r!(n-r)!]={}^nC_r\\)."
  },
  {
    "q": "Number of ways to arrange letters of \"INDEPENDENCE\" is:",
    "options": [
      "\\(12!/(3!\\cdot4!)\\)",
      "\\(12!/(3!\\cdot4!\\cdot2!)=1663200\\)",
      "\\(12!\\)",
      "\\(12!/4!\\)"
    ],
    "ans": "\\(12!/(3!\\cdot4!\\cdot2!)=1663200\\)",
    "reason": "\"INDEPENDENCE\" has 12 letters with \\(N\\) repeated 3 times, \\(E\\) repeated 4 times, and \\(D\\) repeated twice: \\(12!/(3!\\,4!\\,2!)=1663200\\)."
  },
  {
    "q": "If \\(^nC_{r-1}=36,\\ {}^nC_r=84\\), and \\(^nC_{r+1}=126\\), then \\(r\\) is:",
    "options": [
      "\\(5\\)",
      "\\(2\\)",
      "\\(4\\)",
      "\\(3\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "Dividing consecutive combinations, \\(\\dfrac{^nC_r}{^nC_{r-1}}=\\dfrac{84}{36}=\\dfrac73=\\dfrac{n-r+1}{r}\\); testing \\(r=3\\) fits the given values consistently."
  },
  {
    "q": "In the previous question, the value of \\(n\\) is:",
    "options": [
      "\\(7\\)",
      "\\(8\\)",
      "\\(10\\)",
      "\\(9\\)"
    ],
    "ans": "\\(9\\)",
    "reason": "With \\(r=3\\) and \\(^nC_3=84\\): \\(\\dfrac{n(n-1)(n-2)}{6}=84\\Rightarrow n(n-1)(n-2)=504\\); testing \\(n=9\\): \\(9\\times8\\times7=504\\), confirming \\(n=9\\)."
  },
  {
    "q": "Total number of subsets of a set of 6 elements is:",
    "options": [
      "\\(32\\)",
      "\\(64\\)",
      "\\(36\\)",
      "\\(128\\)"
    ],
    "ans": "\\(64\\)",
    "reason": "A set of 6 elements has \\(2^6=64\\) subsets."
  },
  {
    "q": "Number of non-empty subsets of a set with 6 elements is:",
    "options": [
      "\\(65\\)",
      "\\(63\\)",
      "\\(64\\)",
      "\\(31\\)"
    ],
    "ans": "\\(63\\)",
    "reason": "All \\(2^6=64\\) subsets minus the empty set: \\(63\\)."
  },
  {
    "q": "Maximum number of points of intersection of 4 circles in a plane is:",
    "options": [
      "\\(8\\)",
      "\\(6\\)",
      "\\(2\\times{}^4C_2=12\\)",
      "\\(16\\)"
    ],
    "ans": "\\(2\\times{}^4C_2=12\\)",
    "reason": "Each pair of circles can intersect in at most 2 points: \\(2\\times{}^4C_2=2\\times6=12\\)."
  },
  {
    "q": "Value of \\(^nP_n/{}^nC_n\\) equals:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(n\\)",
      "\\(n!\\)"
    ],
    "ans": "\\(n!\\)",
    "reason": "\\(^nP_n/{}^nC_n=n!/(1)=n!\\) (since \\(^nC_n=1\\))."
  },
  {
    "q": "<div class=\"stimulus\">From a class of 10 students, a 4-member committee (order does not matter) will be formed. Separately, a President and a Secretary (two distinct roles, order matters) will be chosen from the same 10.</div>The number of ways to form the 4-member committee is:",
    "options": [
      "210",
      "90",
      "5040",
      "126"
    ],
    "ans": "210",
    "reason": "Order doesn't matter for a committee: \\(^{10}C_4=210\\)."
  },
  {
    "q": "<div class=\"stimulus\">From a class of 10 students, a 4-member committee (order does not matter) will be formed. Separately, a President and a Secretary (two distinct roles, order matters) will be chosen from the same 10.</div>The number of ways to choose the President and Secretary is:",
    "options": [
      "90",
      "210",
      "45",
      "100"
    ],
    "ans": "90",
    "reason": "Order matters for two distinct roles: \\(^{10}P_2=10\\times9=90\\)."
  },
  {
    "q": "<div class=\"stimulus\">From a class of 10 students, a 4-member committee (order does not matter) will be formed. Separately, a President and a Secretary (two distinct roles, order matters) will be chosen from the same 10.</div>The number of committees that must include a specific student (say Ali) is:",
    "options": [
      "84",
      "56",
      "120",
      "210"
    ],
    "ans": "84",
    "reason": "With Ali fixed in the committee, choose the remaining 3 members from the other 9 students: \\(^9C_3=84\\)."
  },
  {
    "q": "<div class=\"stimulus\">From a class of 10 students, a 4-member committee (order does not matter) will be formed. Separately, a President and a Secretary (two distinct roles, order matters) will be chosen from the same 10.</div>The number of committees that exclude Ali entirely is:",
    "options": [
      "126",
      "84",
      "210",
      "56"
    ],
    "ans": "126",
    "reason": "Excluding Ali entirely, choose all 4 members from the other 9 students: \\(^9C_4=126\\)."
  },
  {
    "q": "<div class=\"stimulus\">The word ALGEBRA has 7 letters, with the letter A repeated twice.</div>The total number of distinct arrangements of the letters is:",
    "options": [
      "2520",
      "5040",
      "1260",
      "720"
    ],
    "ans": "2520",
    "reason": "7 letters with \\(A\\) repeated twice: \\(7!/2!=5040/2=2520\\)."
  },
  {
    "q": "<div class=\"stimulus\">The word ALGEBRA has 7 letters, with the letter A repeated twice.</div>The number of arrangements where both A's are together is:",
    "options": [
      "720",
      "2520",
      "360",
      "1440"
    ],
    "ans": "720",
    "reason": "Treat the two \\(A\\)'s as one glued block, leaving 6 units to arrange: \\(6!=720\\)."
  },
  {
    "q": "<div class=\"stimulus\">The word ALGEBRA has 7 letters, with the letter A repeated twice.</div>The number of arrangements where the A's are NOT together is:",
    "options": [
      "1800",
      "1260",
      "2520",
      "720"
    ],
    "ans": "1800",
    "reason": "Arrangements with the \\(A\\)'s apart are all arrangements minus the ones with them together: \\(2520-720=1800\\)."
  },
  {
    "q": "<div class=\"stimulus\">The word ALGEBRA has 7 letters, with the letter A repeated twice.</div>The number of distinct letters used in ALGEBRA is:",
    "options": [
      "6",
      "7",
      "5",
      "4"
    ],
    "ans": "6",
    "reason": "The letters are A, L, G, E, B, R, A — six different letters (A, L, G, E, B, R)."
  }
];
  }
});
