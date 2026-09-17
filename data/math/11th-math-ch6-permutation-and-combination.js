// Converted from class11-math-mcq-ch5-6.js (chapter 6: Permutation and Combination)
// Includes 100 base MCQs + 8 stimulus-based MCQs.
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
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
    "reason": null
  }
];
  }
});
