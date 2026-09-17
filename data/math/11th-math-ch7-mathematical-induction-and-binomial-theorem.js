// Converted from class11-math-mcq-ch7-8.js (chapter 7: Mathematical Induction and Binomial Theorem)
// Includes 100 base MCQs + 12 stimulus-based MCQs.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch7",
  label: "Chapter 7: Mathematical Induction and Binomial Theorem",
  order: 7,
  questions: function () {
    return [
  {
    "q": "Mathematical induction is used to check the validity of a proposition \\(P(n)\\) for all \\(n\\) belonging to which set?",
    "options": [
      "Rational numbers",
      "Real numbers",
      "Negative integers",
      "Positive integers"
    ],
    "ans": "Positive integers",
    "reason": null
  },
  {
    "q": "The first step in a proof by mathematical induction, in which \\(P(1)\\) is verified, is called the:",
    "options": [
      "Terminal step",
      "Recursive step",
      "Basis step",
      "Inductive step"
    ],
    "ans": "Basis step",
    "reason": null
  },
  {
    "q": "The second step in a proof by mathematical induction, in which \\(P(k+1)\\) is shown true whenever \\(P(k)\\) is true, is called the:",
    "options": [
      "Basis step",
      "Closure step",
      "Base case",
      "Inductive step"
    ],
    "ans": "Inductive step",
    "reason": null
  },
  {
    "q": "If a mathematical statement \\(P(n)\\) is true for all positive integers, it is also true for all:",
    "options": [
      "Negative integers",
      "Whole numbers only",
      "Positive integers",
      "Rational numbers"
    ],
    "ans": "Positive integers",
    "reason": null
  },
  {
    "q": "The method of mathematical induction was referred to as the \\(\\\\text{``method of infinite descent''}\\) by:",
    "options": [
      "Blaise Pascal",
      "Augustus De Morgan",
      "Francesco Maurolico",
      "Pierre de Fermat"
    ],
    "ans": "Pierre de Fermat",
    "reason": null
  },
  {
    "q": "Who is credited with naming the technique \\(\\\\text{``mathematical induction''}\\) in 1883?",
    "options": [
      "Francesco Maurolico",
      "Isaac Newton",
      "Blaise Pascal",
      "Augustus De Morgan"
    ],
    "ans": "Augustus De Morgan",
    "reason": null
  },
  {
    "q": "In the domino analogy for induction, \\(P(1)\\) being true corresponds to:",
    "options": [
      "All dominoes standing still",
      "The last domino falling backward",
      "The first domino falling forward",
      "The \\(k\\)-th domino falling forward"
    ],
    "ans": "The first domino falling forward",
    "reason": null
  },
  {
    "q": "\\(\\\\text{`Bi'}\\) in the word \\(\\\\text{`Binomial'}\\) means:",
    "options": [
      "Three",
      "Many",
      "Two",
      "One"
    ],
    "ans": "Two",
    "reason": null
  },
  {
    "q": "Which of the following is a binomial expression?",
    "options": [
      "\\(x^2+\\dfrac1x\\)",
      "5",
      "\\(x+y+z\\)",
      "\\(xyz\\)"
    ],
    "ans": "\\(x^2+\\dfrac1x\\)",
    "reason": null
  },
  {
    "q": "The general form of a binomial expression raised to a positive integral power is:",
    "options": [
      "\\((a-b)(a+b)\\)",
      "\\(a^n\\cdot b^n\\)",
      "\\((a+b)^n\\)",
      "\\(a^n+b^n\\)"
    ],
    "ans": "\\((a+b)^n\\)",
    "reason": null
  },
  {
    "q": "Expansion of \\((a+b)^n\\) using the numbers arranged in a triangular array of coefficients is known as expansion using:",
    "options": [
      "Euler's triangle",
      "Fermat's triangle",
      "De Morgan's triangle",
      "Pascal's triangle"
    ],
    "ans": "Pascal's triangle",
    "reason": null
  },
  {
    "q": "Expansion by Pascal's triangle is most convenient when \\(n\\) is:",
    "options": [
      "A fraction",
      "A negative integer",
      "A large positive integer",
      "A small positive integer"
    ],
    "ans": "A small positive integer",
    "reason": null
  },
  {
    "q": "In the expansion of \\((a+b)^n\\), the exponents of \\(a\\) and \\(b\\) in every term always add up to:",
    "options": [
      "\\(2n\\)",
      "\\(n+1\\)",
      "\\(n\\)",
      "\\(n-1\\)"
    ],
    "ans": "\\(n\\)",
    "reason": null
  },
  {
    "q": "The number of terms in the expansion of \\((a+b)^n\\) is:",
    "options": [
      "\\(n-1\\)",
      "\\(2n\\)",
      "\\(n\\)",
      "\\(n+1\\)"
    ],
    "ans": "\\(n+1\\)",
    "reason": null
  },
  {
    "q": "In the expansion of \\((a+b)^n\\), the coefficients of terms equidistant from the beginning and the end are:",
    "options": [
      "Equal",
      "In arithmetic progression",
      "Always 1 and \\(n\\)",
      "Reciprocals of each other"
    ],
    "ans": "Equal",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(1+2+3+\\\\cdots+n=\\\\dfrac{n(n+1)}{2}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(0=1\\)",
      "\\(1=1\\)",
      "\\(2=1\\)",
      "\\(1=2\\)"
    ],
    "ans": "\\(1=1\\)",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(1^2+2^2+\\\\cdots+n^2=\\\\dfrac{n(n+1)(2n+1)}{6}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(1=6\\)",
      "\\(2=1\\)",
      "\\(6=1\\)",
      "\\(1=1\\)"
    ],
    "ans": "\\(1=1\\)",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(1^3+2^3+\\\\cdots+n^3=\\\\dfrac{n^2(n+1)^2}{4}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(1=4\\)",
      "\\(2=1\\)",
      "\\(1=1\\)",
      "\\(4=1\\)"
    ],
    "ans": "\\(1=1\\)",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(\\\\dfrac1{1\\\\cdot2}+\\\\dfrac1{2\\\\cdot3}+\\\\cdots+\\\\dfrac1{n(n+1)}=\\\\dfrac{n}{n+1}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(1=1\\)",
      "\\(\\tfrac12=1\\)",
      "\\(1=\\tfrac12\\)",
      "\\(\\tfrac12=\\tfrac12\\)"
    ],
    "ans": "\\(\\tfrac12=\\tfrac12\\)",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(1\\\\cdot2+2\\\\cdot3+\\\\cdots+n(n+1)=\\\\dfrac{n(n+1)(n+2)}{3}\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(2=2\\)",
      "\\(1=1\\)",
      "\\(2=3\\)",
      "\\(3=2\\)"
    ],
    "ans": "\\(2=2\\)",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(n^2-3n+4\\) is an even number for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(P(1):1-3+4=2\\), which is even",
      "\\(P(1):0\\), which is even",
      "\\(P(1)\\) cannot be checked",
      "\\(P(1):1-3+4=3\\), which is odd"
    ],
    "ans": "\\(P(1):1-3+4=2\\), which is even",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(3^n>n^2\\) for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(P(1):3^1>1^2\\Rightarrow3>1\\)",
      "\\(P(1):3<1\\)",
      "\\(P(1):1>3\\)",
      "\\(P(1):3>3\\)"
    ],
    "ans": "\\(P(1):3^1>1^2\\Rightarrow3>1\\)",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(4+4\\\\cdot6+4\\\\cdot6^2+\\\\cdots+4\\\\cdot6^n=\\\\dfrac{4(6^{n+1}-1)}{5}\\), starting from \\(n=0\\), the basis step \\(P(0)\\) reduces to the statement:",
    "options": [
      "\\(P(0):4=5\\)",
      "\\(P(0):0=4\\)",
      "\\(P(0):4=\\tfrac45\\)",
      "\\(P(0):4=4\\)"
    ],
    "ans": "\\(P(0):4=4\\)",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(n^3+2n\\) is divisible by 3 for all positive integers \\(n\\), the basis step \\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(P(1):1\\), divisible by 3",
      "\\(P(1):2\\), divisible by 3",
      "\\(P(1):1+2=3\\), divisible by 3",
      "\\(P(1):3\\), not divisible by 3"
    ],
    "ans": "\\(P(1):1+2=3\\), divisible by 3",
    "reason": null
  },
  {
    "q": "To prove by mathematical induction that \\(7^n-2^n\\) is divisible by 5, starting from \\(n=0\\), the basis step \\(P(0)\\) reduces to the statement:",
    "options": [
      "\\(P(0):1\\), not divisible by 5",
      "\\(P(0):1-1=0\\), divisible by 5",
      "\\(P(0):7-2=5\\)",
      "\\(P(0):0\\), not divisible by 5"
    ],
    "ans": "\\(P(0):1-1=0\\), divisible by 5",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{16}{6}\\) is:",
    "options": [
      "4368",
      "5005",
      "11440",
      "8008"
    ],
    "ans": "8008",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{11}{7}\\) is:",
    "options": [
      "120",
      "165",
      "330",
      "337"
    ],
    "ans": "330",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{15}{12}\\) is:",
    "options": [
      "1365",
      "105",
      "455",
      "91"
    ],
    "ans": "455",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{12}{11}\\) is:",
    "options": [
      "66",
      "1",
      "12",
      "19"
    ],
    "ans": "12",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{8}{2}\\) is:",
    "options": [
      "28",
      "8",
      "35",
      "56"
    ],
    "ans": "28",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{15}{7}\\) is:",
    "options": [
      "3432",
      "5005",
      "6435",
      "6442"
    ],
    "ans": "6435",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{14}{8}\\) is:",
    "options": [
      "3432",
      "2002",
      "3010",
      "3003"
    ],
    "ans": "3003",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{8}{6}\\) is:",
    "options": [
      "28",
      "35",
      "8",
      "56"
    ],
    "ans": "28",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{15}{2}\\) is:",
    "options": [
      "105",
      "91",
      "112",
      "15"
    ],
    "ans": "105",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{14}{5}\\) is:",
    "options": [
      "1001",
      "2009",
      "3003",
      "2002"
    ],
    "ans": "2002",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{16}{15}\\) is:",
    "options": [
      "16",
      "120",
      "23",
      "1"
    ],
    "ans": "16",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{7}{3}\\) is:",
    "options": [
      "20",
      "42",
      "35",
      "21"
    ],
    "ans": "35",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{6}{3}\\) is:",
    "options": [
      "15",
      "20",
      "27",
      "10"
    ],
    "ans": "20",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{16}{5}\\) is:",
    "options": [
      "3003",
      "1820",
      "4368",
      "8008"
    ],
    "ans": "4368",
    "reason": null
  },
  {
    "q": "The value of the binomial coefficient \\(\\\\binom{8}{5}\\) is:",
    "options": [
      "70",
      "28",
      "21",
      "56"
    ],
    "ans": "56",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=8\\); its value is:",
    "options": [
      "990",
      "495",
      "220",
      "-495"
    ],
    "ans": "495",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac2x\\\\right)^{6}\\) occurs when \\(r=4\\); its value is:",
    "options": [
      "240",
      "192",
      "255",
      "-240"
    ],
    "ans": "240",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac3x\\\\right)^{10}\\) occurs when \\(r=5\\); its value is:",
    "options": [
      "-61236",
      "61236",
      "153090",
      "61488"
    ],
    "ans": "61236",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac2x\\\\right)^{9}\\) occurs when \\(r=6\\); its value is:",
    "options": [
      "4608",
      "5460",
      "5376",
      "-5376"
    ],
    "ans": "5376",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(2x+\\\\dfrac2x\\\\right)^{6}\\) occurs when \\(r=3\\); its value is:",
    "options": [
      "-1280",
      "1300",
      "960",
      "1280"
    ],
    "ans": "1280",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac3x\\\\right)^{6}\\) occurs when \\(r=3\\); its value is:",
    "options": [
      "1215",
      "540",
      "-540",
      "560"
    ],
    "ans": "540",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=8\\); its value is:",
    "options": [
      "990",
      "-495",
      "220",
      "495"
    ],
    "ans": "495",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(2x+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=6\\); its value is:",
    "options": [
      "60060",
      "25344",
      "-59136",
      "59136"
    ],
    "ans": "59136",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac2x\\\\right)^{12}\\) occurs when \\(r=6\\); its value is:",
    "options": [
      "59136",
      "60060",
      "101376",
      "-59136"
    ],
    "ans": "59136",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac1x\\\\right)^{12}\\) occurs when \\(r=6\\); its value is:",
    "options": [
      "1848",
      "792",
      "-924",
      "924"
    ],
    "ans": "924",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac2x\\\\right)^{9}\\) occurs when \\(r=6\\); its value is:",
    "options": [
      "-5376",
      "4608",
      "5376",
      "5460"
    ],
    "ans": "5376",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x^2+\\\\dfrac3x\\\\right)^{12}\\) occurs when \\(r=8\\); its value is:",
    "options": [
      "-3247695",
      "4330260",
      "3247695",
      "3248190"
    ],
    "ans": "3247695",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac1x\\\\right)^{8}\\) occurs when \\(r=4\\); its value is:",
    "options": [
      "56",
      "140",
      "70",
      "-70"
    ],
    "ans": "70",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(x+\\\\dfrac1x\\\\right)^{6}\\) occurs when \\(r=3\\); its value is:",
    "options": [
      "40",
      "15",
      "-20",
      "20"
    ],
    "ans": "20",
    "reason": null
  },
  {
    "q": "The term independent of \\(x\\) in the expansion of \\(\\\\left(2x+\\\\dfrac1x\\\\right)^{10}\\) occurs when \\(r=5\\); its value is:",
    "options": [
      "8064",
      "-8064",
      "3360",
      "8316"
    ],
    "ans": "8064",
    "reason": null
  },
  {
    "q": "Since \\(n=4\\) is even, the number of terms in the expansion of \\((a+b)^4\\) is odd, and the middle term is the:",
    "options": [
      "\\(\\left(\\tfrac42\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac42+1\\right)^{\\text{th}}\\) terms",
      "2\\(^{\\text{nd}}\\) term",
      "\\(\\left(\\tfrac42+1\\right)^{\\text{th}}=3^{\\text{rd}}\\) term",
      "4\\(^{\\text{th}}\\) term"
    ],
    "ans": "\\(\\left(\\tfrac42+1\\right)^{\\text{th}}=3^{\\text{rd}}\\) term",
    "reason": null
  },
  {
    "q": "Since \\(n=22\\) is even, the number of terms in the expansion of \\((a+b)^{22}\\) is odd, and the middle term is the:",
    "options": [
      "22\\(^{\\text{nd}}\\) term",
      "11\\(^{\\text{th}}\\) term",
      "\\(\\left(\\tfrac{22}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{22}2+1\\right)^{\\text{th}}\\) terms",
      "\\(\\left(\\tfrac{22}2+1\\right)^{\\text{th}}=12^{\\text{th}}\\) term"
    ],
    "ans": "\\(\\left(\\tfrac{22}2+1\\right)^{\\text{th}}=12^{\\text{th}}\\) term",
    "reason": null
  },
  {
    "q": "Since \\(n=18\\) is even, the number of terms in the expansion of \\((a+b)^{18}\\) is odd, and the middle term is the:",
    "options": [
      "\\(\\left(\\tfrac{18}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{18}2+1\\right)^{\\text{th}}\\) terms",
      "9\\(^{\\text{th}}\\) term",
      "\\(\\left(\\tfrac{18}2+1\\right)^{\\text{th}}=10^{\\text{th}}\\) term",
      "18\\(^{\\text{th}}\\) term"
    ],
    "ans": "\\(\\left(\\tfrac{18}2+1\\right)^{\\text{th}}=10^{\\text{th}}\\) term",
    "reason": null
  },
  {
    "q": "Since \\(n=16\\) is even, the number of terms in the expansion of \\((a+b)^{16}\\) is odd, and the middle term is the:",
    "options": [
      "8\\(^{\\text{th}}\\) term",
      "\\(\\left(\\tfrac{16}2+1\\right)^{\\text{th}}=9^{\\text{th}}\\) term",
      "\\(\\left(\\tfrac{16}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{16}2+1\\right)^{\\text{th}}\\) terms",
      "16\\(^{\\text{th}}\\) term"
    ],
    "ans": "\\(\\left(\\tfrac{16}2+1\\right)^{\\text{th}}=9^{\\text{th}}\\) term",
    "reason": null
  },
  {
    "q": "Since \\(n=20\\) is even, the number of terms in the expansion of \\((a+b)^{20}\\) is odd, and the middle term is the:",
    "options": [
      "10\\(^{\\text{th}}\\) term",
      "\\(\\left(\\tfrac{20}2+1\\right)^{\\text{th}}=11^{\\text{th}}\\) term",
      "\\(\\left(\\tfrac{20}2\\right)^{\\text{th}}\\) and \\(\\left(\\tfrac{20}2+1\\right)^{\\text{th}}\\) terms",
      "20\\(^{\\text{th}}\\) term"
    ],
    "ans": "\\(\\left(\\tfrac{20}2+1\\right)^{\\text{th}}=11^{\\text{th}}\\) term",
    "reason": null
  },
  {
    "q": "Since \\(n=23\\) is odd, the expansion of \\((a+b)^{23}\\) has an even number of terms, so there are two middle terms, namely the:",
    "options": [
      "23\\(^{\\text{rd}}\\) and \\((n{+}1)^{\\text{th}}\\) terms",
      "12\\(^{\\text{th}}\\) and 13\\(^{\\text{th}}\\) terms",
      "11\\(^{\\text{th}}\\) and 14\\(^{\\text{th}}\\) terms",
      "12\\(^{\\text{th}}\\) term only"
    ],
    "ans": "12\\(^{\\text{th}}\\) and 13\\(^{\\text{th}}\\) terms",
    "reason": null
  },
  {
    "q": "Since \\(n=9\\) is odd, the expansion of \\((a+b)^{9}\\) has an even number of terms, so there are two middle terms, namely the:",
    "options": [
      "5\\(^{\\text{th}}\\) term only",
      "4\\(^{\\text{th}}\\) and 7\\(^{\\text{th}}\\) terms",
      "9\\(^{\\text{th}}\\) and \\((n{+}1)^{\\text{th}}\\) terms",
      "5\\(^{\\text{th}}\\) and 6\\(^{\\text{th}}\\) terms"
    ],
    "ans": "5\\(^{\\text{th}}\\) and 6\\(^{\\text{th}}\\) terms",
    "reason": null
  },
  {
    "q": "Since \\(n=21\\) is odd, the expansion of \\((a+b)^{21}\\) has an even number of terms, so there are two middle terms, namely the:",
    "options": [
      "10\\(^{\\text{th}}\\) and 13\\(^{\\text{th}}\\) terms",
      "11\\(^{\\text{th}}\\) and 12\\(^{\\text{th}}\\) terms",
      "11\\(^{\\text{th}}\\) term only",
      "21\\(^{\\text{st}}\\) and \\((n{+}1)^{\\text{th}}\\) terms"
    ],
    "ans": "11\\(^{\\text{th}}\\) and 12\\(^{\\text{th}}\\) terms",
    "reason": null
  },
  {
    "q": "Since \\(n=17\\) is odd, the expansion of \\((a+b)^{17}\\) has an even number of terms, so there are two middle terms, namely the:",
    "options": [
      "8\\(^{\\text{th}}\\) and 11\\(^{\\text{th}}\\) terms",
      "9\\(^{\\text{th}}\\) term only",
      "9\\(^{\\text{th}}\\) and 10\\(^{\\text{th}}\\) terms",
      "17\\(^{\\text{th}}\\) and \\((n{+}1)^{\\text{th}}\\) terms"
    ],
    "ans": "9\\(^{\\text{th}}\\) and 10\\(^{\\text{th}}\\) terms",
    "reason": null
  },
  {
    "q": "Since \\(n=13\\) is odd, the expansion of \\((a+b)^{13}\\) has an even number of terms, so there are two middle terms, namely the:",
    "options": [
      "13\\(^{\\text{th}}\\) and \\((n{+}1)^{\\text{th}}\\) terms",
      "7\\(^{\\text{th}}\\) and 8\\(^{\\text{th}}\\) terms",
      "7\\(^{\\text{th}}\\) term only",
      "6\\(^{\\text{th}}\\) and 9\\(^{\\text{th}}\\) terms"
    ],
    "ans": "7\\(^{\\text{th}}\\) and 8\\(^{\\text{th}}\\) terms",
    "reason": null
  },
  {
    "q": "The sum of all the binomial coefficients in the expansion of \\((a+b)^n\\) is:",
    "options": [
      "\\(n!\\)",
      "\\(2^{n-1}\\)",
      "\\(n^2\\)",
      "\\(2^n\\)"
    ],
    "ans": "\\(2^n\\)",
    "reason": null
  },
  {
    "q": "The sum of the coefficients of the odd-positioned terms in the expansion of \\((a+b)^n\\) equals:",
    "options": [
      "\\(2^n\\)",
      "\\(n^2\\)",
      "\\(2^{n-1}\\)",
      "\\(2^{n+1}\\)"
    ],
    "ans": "\\(2^{n-1}\\)",
    "reason": null
  },
  {
    "q": "The \\(n^{\\\\text{th}}\\) row of Pascal's triangle (starting the count from \\(n=0\\)) gives the binomial coefficients for the expansion of:",
    "options": [
      "\\((a+b)^{2n}\\)",
      "\\((a+b)^{n-1}\\)",
      "\\((a+b)^n\\)",
      "\\((a+b)^{n+1}\\)"
    ],
    "ans": "\\((a+b)^n\\)",
    "reason": null
  },
  {
    "q": "Each interior entry of Pascal's triangle is obtained by:",
    "options": [
      "Adding the two entries immediately above it",
      "Dividing the row number by the column number",
      "Subtracting the entries above it",
      "Multiplying the two entries above it"
    ],
    "ans": "Adding the two entries immediately above it",
    "reason": null
  },
  {
    "q": "In Pascal's triangle, the first and last entry of every row is always:",
    "options": [
      "0",
      "1",
      "\\(n\\)",
      "\\(n-1\\)"
    ],
    "ans": "1",
    "reason": null
  },
  {
    "q": "\\(\\\\displaystyle\\\\binom{n}{0}+\\\\binom{n}{1}+\\\\binom{n}{2}+\\\\cdots+\\\\binom{n}{n}=\\)",
    "options": [
      "\\(n^2\\)",
      "\\(2n\\)",
      "\\(n!\\)",
      "\\(2^n\\)"
    ],
    "ans": "\\(2^n\\)",
    "reason": null
  },
  {
    "q": "\\(\\\\displaystyle\\\\binom{n}{r}+\\\\binom{n}{r-1}=\\)",
    "options": [
      "\\(\\binom{n}{r+1}\\)",
      "\\(\\binom{n-1}{r}\\)",
      "\\(\\binom{n+1}{r-1}\\)",
      "\\(\\binom{n+1}{r}\\)"
    ],
    "ans": "\\(\\binom{n+1}{r}\\)",
    "reason": null
  },
  {
    "q": "Using Pascal's triangle, the possible number of heads when three coins are tossed simultaneously corresponds to the row:",
    "options": [
      "1, 2, 1",
      "1, 4, 6, 4, 1",
      "1, 3, 3, 1",
      "1, 5, 10, 10, 5, 1"
    ],
    "ans": "1, 3, 3, 1",
    "reason": null
  },
  {
    "q": "The sixth row of Pascal's triangle (for \\(n=6\\)) is:",
    "options": [
      "1, 6, 15, 15, 6, 1",
      "1, 6, 15, 20, 15, 6, 1",
      "1, 5, 10, 10, 5, 1",
      "1, 6, 12, 12, 6, 1"
    ],
    "ans": "1, 6, 15, 20, 15, 6, 1",
    "reason": null
  },
  {
    "q": "\\(\\\\displaystyle\\\\binom{n}{r}=\\\\binom{n}{n-r}\\) is a consequence of the fact that:",
    "options": [
      "\\(n\\) must always be even",
      "Pascal's triangle has only odd entries",
      "The coefficients equidistant from the beginning and end of the expansion of \\((a+b)^n\\) are equal",
      "\\(r\\) must equal \\(n/2\\)"
    ],
    "ans": "The coefficients equidistant from the beginning and end of the expansion of \\((a+b)^n\\) are equal",
    "reason": null
  },
  {
    "q": "The binomial series \\((1+x)^n=1+nx+\\\\dfrac{n(n-1)}{2!}x^2+\\\\cdots\\) is valid (convergent) for non-integer \\(n\\) when:",
    "options": [
      "\\(x<-1\\)",
      "\\(x>1\\)",
      "\\(-1\\le x\\le1\\)",
      "\\(-1<x<1\\)"
    ],
    "ans": "\\(-1<x<1\\)",
    "reason": null
  },
  {
    "q": "The general term of the binomial series \\(1+nx+\\\\dfrac{n(n-1)}{2!}x^2+\\\\cdots\\) is:",
    "options": [
      "\\(T_{r+1}=n^rx^r\\)",
      "\\(T_{r+1}=\\dfrac{n!}{r!}x^r\\)",
      "\\(T_{r+1}=\\dfrac{n(n-1)(n-2)\\cdots(n-r+1)}{r!}x^r\\)",
      "\\(T_{r+1}=\\binom{n}{r}x^r\\)"
    ],
    "ans": "\\(T_{r+1}=\\dfrac{n(n-1)(n-2)\\cdots(n-r+1)}{r!}x^r\\)",
    "reason": null
  },
  {
    "q": "When \\(n\\) is a positive integer, the binomial expansion of \\((1+x)^n\\) is:",
    "options": [
      "Terminating, with \\(n\\) terms only if \\(x=1\\)",
      "Terminating, with \\((n+1)\\) terms",
      "Always divergent",
      "Non-terminating"
    ],
    "ans": "Terminating, with \\((n+1)\\) terms",
    "reason": null
  },
  {
    "q": "When \\(n\\) is a negative integer or a fraction, the expansion of \\((1+x)^n\\) is:",
    "options": [
      "Non-terminating (an infinite series)",
      "Not defined",
      "Terminating after \\(n\\) terms",
      "Terminating after \\(n+1\\) terms"
    ],
    "ans": "Non-terminating (an infinite series)",
    "reason": null
  },
  {
    "q": "The binomial series for \\((2+3x)^{-1/2}\\) is convergent when:",
    "options": [
      "\\(|x|<1\\)",
      "\\(\\left|\\dfrac{3x}2\\right|<1\\), i.e. \\(|x|<\\dfrac23\\)",
      "\\(|x|<\\dfrac32\\)",
      "\\(|x|\\le1\\)"
    ],
    "ans": "\\(\\left|\\dfrac{3x}2\\right|<1\\), i.e. \\(|x|<\\dfrac23\\)",
    "reason": null
  },
  {
    "q": "The series \\(1-3\\\\left(\\\\tfrac37\\\\right)+4\\\\left(\\\\tfrac37\\\\right)^2-8\\\\left(\\\\tfrac37\\\\right)^3+\\\\cdots\\) is an example of a:",
    "options": [
      "Geometric series only",
      "Harmonic series",
      "Binomial series expansion of the form \\((1+x)^n\\) for some fractional/negative \\(n\\)",
      "Arithmetic series"
    ],
    "ans": "Binomial series expansion of the form \\((1+x)^n\\) for some fractional/negative \\(n\\)",
    "reason": null
  },
  {
    "q": "For \\(\\\\left(3+\\\\dfrac2x\\\\right)^{-1/3}\\) to be expressed as a convergent binomial series, we require:",
    "options": [
      "\\(|x|<2\\)",
      "\\(|x|<1\\)",
      "\\(\\left|\\dfrac2{3x}\\right|<1\\)",
      "\\(|x|<3\\)"
    ],
    "ans": "\\(\\left|\\dfrac2{3x}\\right|<1\\)",
    "reason": null
  },
  {
    "q": "If \\(x\\) is so small that its square and higher powers may be neglected, then \\((1+x)^n\\\\approx\\)",
    "options": [
      "\\(1-nx\\)",
      "\\(nx\\)",
      "\\(1+nx\\)",
      "\\(1+nx+\\dfrac{n(n-1)}{2}x^2\\)"
    ],
    "ans": "\\(1+nx\\)",
    "reason": null
  },
  {
    "q": "If \\(x\\) is so small that its cube and higher powers may be neglected, then \\((1+x)^n\\\\approx\\)",
    "options": [
      "\\(1-nx+x^2\\)",
      "\\(1+nx+\\dfrac{n(n-1)}{2!}x^2\\)",
      "\\(1+nx\\)",
      "\\(1+nx+\\dfrac{n(n-1)(n-2)}{3!}x^3\\)"
    ],
    "ans": "\\(1+nx+\\dfrac{n(n-1)}{2!}x^2\\)",
    "reason": null
  },
  {
    "q": "The binomial series expansion is used to approximate the value of expressions like \\(\\\\sqrt[6]{65}\\) by writing 65 as:",
    "options": [
      "\\(65^1\\) directly with no approximation",
      "\\(65=5\\times13\\) and expanding each factor",
      "\\(64\\left(1+\\dfrac1{64}\\right)\\), a perfect power plus a small correction",
      "A sum of two primes"
    ],
    "ans": "\\(64\\left(1+\\dfrac1{64}\\right)\\), a perfect power plus a small correction",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(17^{203}\\) is:",
    "options": [
      "3",
      "4",
      "0",
      "5"
    ],
    "ans": "3",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(29^{26}\\) is:",
    "options": [
      "3",
      "2",
      "8",
      "1"
    ],
    "ans": "1",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(36^{307}\\) is:",
    "options": [
      "6",
      "8",
      "3",
      "7"
    ],
    "ans": "6",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(23^{150}\\) is:",
    "options": [
      "1",
      "0",
      "6",
      "9"
    ],
    "ans": "9",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(48^{99}\\) is:",
    "options": [
      "2",
      "4",
      "3",
      "9"
    ],
    "ans": "2",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(54^{203}\\) is:",
    "options": [
      "5",
      "1",
      "6",
      "4"
    ],
    "ans": "4",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(27^{304}\\) is:",
    "options": [
      "1",
      "8",
      "3",
      "2"
    ],
    "ans": "1",
    "reason": null
  },
  {
    "q": "The unit (last) digit of \\(108^{33}\\) is:",
    "options": [
      "0",
      "8",
      "9",
      "5"
    ],
    "ans": "8",
    "reason": null
  },
  {
    "q": "Using the binomial theorem, the remainder when \\(7^{101}\\) is divided by 25 is:",
    "options": [
      "8",
      "7",
      "9",
      "10"
    ],
    "ans": "7",
    "reason": null
  },
  {
    "q": "Using the binomial theorem, the remainder when \\(9^{205}\\) is divided by 31 is:",
    "options": [
      "8",
      "6",
      "5",
      "7"
    ],
    "ans": "5",
    "reason": null
  },
  {
    "q": "Using the binomial theorem, the remainder when \\(8^{205}\\) is divided by 48 is:",
    "options": [
      "33",
      "35",
      "34",
      "32"
    ],
    "ans": "32",
    "reason": null
  },
  {
    "q": "Using the binomial theorem, the remainder when \\(5^{103}\\) is divided by 13 is:",
    "options": [
      "11",
      "8",
      "9",
      "10"
    ],
    "ans": "8",
    "reason": null
  },
  {
    "q": "Using the binomial theorem, the remainder when \\(6^{145}\\) is divided by 17 is:",
    "options": [
      "6",
      "7",
      "9",
      "8"
    ],
    "ans": "6",
    "reason": null
  },
  {
    "q": "Using the binomial theorem, the remainder when \\(17^{1717}\\) is divided by 19 is:",
    "options": [
      "8",
      "6",
      "7",
      "5"
    ],
    "ans": "5",
    "reason": null
  },
  {
    "q": "Using the binomial theorem, the remainder when \\(11^{60}\\) is divided by 17 is:",
    "options": [
      "13",
      "14",
      "16",
      "15"
    ],
    "ans": "13",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expansion</th><th>Value</th></tr><tr><td>\\(n\\)</td><td>10</td></tr><tr><td>Term requested</td><td>independent of \\(x\\) in \\(\\left(x+\\dfrac2x\\right)^{10}\\)</td></tr></table></div>The general term \\(T_{r+1}\\) of \\(\\left(x+\\dfrac2x\\right)^{10}\\) is:",
    "options": [
      "\\(\\binom{10}{r}x^{10-2r}2^r\\)",
      "\\(\\binom{10}{r}x^{10-r}2^r\\)",
      "\\(\\binom{10}{r}x^{r}2^{10-r}\\)",
      "\\(\\binom{10}{r}x^{10}2^r\\)"
    ],
    "ans": "\\(\\binom{10}{r}x^{10-2r}2^r\\)",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expansion</th><th>Value</th></tr><tr><td>\\(n\\)</td><td>10</td></tr><tr><td>Term requested</td><td>independent of \\(x\\) in \\(\\left(x+\\dfrac2x\\right)^{10}\\)</td></tr></table></div>The term is independent of \\(x\\) when \\(r=\\)",
    "options": [
      "4",
      "5",
      "6",
      "10"
    ],
    "ans": "5",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expansion</th><th>Value</th></tr><tr><td>\\(n\\)</td><td>10</td></tr><tr><td>Term requested</td><td>independent of \\(x\\) in \\(\\left(x+\\dfrac2x\\right)^{10}\\)</td></tr></table></div>The independent term equals:",
    "options": [
      "\\(\\binom{10}{5}2^5=8064\\)",
      "\\(\\binom{10}{4}2^4=3360\\)",
      "\\(\\binom{10}{6}2^6=13440\\)",
      "\\(\\binom{10}{5}2^4=4032\\)"
    ],
    "ans": "\\(\\binom{10}{5}2^5=8064\\)",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expansion</th><th>Value</th></tr><tr><td>\\(n\\)</td><td>10</td></tr><tr><td>Term requested</td><td>independent of \\(x\\) in \\(\\left(x+\\dfrac2x\\right)^{10}\\)</td></tr></table></div>The total number of terms in this expansion is:",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "ans": "11",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Statement</th><th>Claim</th></tr><tr><td>\\(P(n)\\)</td><td>\\(2+4+6+\\cdots+2n=n(n+1)\\)</td></tr><tr><td>Method</td><td>Mathematical induction, basis at \\(n=1\\)</td></tr></table></div>\\(P(1)\\) reduces to the statement:",
    "options": [
      "\\(2=2\\)",
      "\\(1=2\\)",
      "\\(2=1\\)",
      "\\(0=2\\)"
    ],
    "ans": "\\(2=2\\)",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Statement</th><th>Claim</th></tr><tr><td>\\(P(n)\\)</td><td>\\(2+4+6+\\cdots+2n=n(n+1)\\)</td></tr><tr><td>Method</td><td>Mathematical induction, basis at \\(n=1\\)</td></tr></table></div>Assuming \\(P(k)\\) is true, the inductive hypothesis is:",
    "options": [
      "\\(2+4+\\cdots+2k=k(k+1)\\)",
      "\\(2+4+\\cdots+2k=k^2\\)",
      "\\(2k=k(k+1)\\)",
      "\\(k=k+1\\)"
    ],
    "ans": "\\(2+4+\\cdots+2k=k(k+1)\\)",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Statement</th><th>Claim</th></tr><tr><td>\\(P(n)\\)</td><td>\\(2+4+6+\\cdots+2n=n(n+1)\\)</td></tr><tr><td>Method</td><td>Mathematical induction, basis at \\(n=1\\)</td></tr></table></div>Adding \\(2(k+1)\\) to both sides of the hypothesis gives \\(k(k+1)+2(k+1)=\\)",
    "options": [
      "\\((k+1)(k+2)\\)",
      "\\((k+1)^2\\)",
      "\\(k(k+2)\\)",
      "\\((k+2)^2\\)"
    ],
    "ans": "\\((k+1)(k+2)\\)",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Statement</th><th>Claim</th></tr><tr><td>\\(P(n)\\)</td><td>\\(2+4+6+\\cdots+2n=n(n+1)\\)</td></tr><tr><td>Method</td><td>Mathematical induction, basis at \\(n=1\\)</td></tr></table></div>This final expression matches \\(P(k+1)\\), which is:",
    "options": [
      "\\((k+1)(k+2)\\)",
      "\\((k+1)k\\)",
      "\\(k(k+1)\\)",
      "\\((k+2)(k+1)^2\\)"
    ],
    "ans": "\\((k+1)(k+2)\\)",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Row \\(n\\)</th><th>Pascal's triangle entries</th></tr><tr><td>5</td><td>1, 5, 10, 10, 5, 1</td></tr></table></div>This row gives the coefficients in the expansion of:",
    "options": [
      "\\((a+b)^5\\)",
      "\\((a+b)^4\\)",
      "\\((a+b)^6\\)",
      "\\((a+b)^{10}\\)"
    ],
    "ans": "\\((a+b)^5\\)",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Row \\(n\\)</th><th>Pascal's triangle entries</th></tr><tr><td>5</td><td>1, 5, 10, 10, 5, 1</td></tr></table></div>The sum of all entries in this row equals:",
    "options": [
      "16",
      "32",
      "25",
      "64"
    ],
    "ans": "32",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Row \\(n\\)</th><th>Pascal's triangle entries</th></tr><tr><td>5</td><td>1, 5, 10, 10, 5, 1</td></tr></table></div>The coefficient of the middle term(s) corresponds to:",
    "options": [
      "\\(\\binom{5}{2}\\) and \\(\\binom{5}{3}\\), both 10",
      "\\(\\binom{5}{2}\\) only, 10",
      "\\(\\binom{5}{5}\\), 1",
      "\\(\\binom{5}{0}\\), 1"
    ],
    "ans": "\\(\\binom{5}{2}\\) and \\(\\binom{5}{3}\\), both 10",
    "reason": null
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Row \\(n\\)</th><th>Pascal's triangle entries</th></tr><tr><td>5</td><td>1, 5, 10, 10, 5, 1</td></tr></table></div>The next row (\\(n=6\\)) is obtained by adding adjacent pairs, giving:",
    "options": [
      "1, 6, 15, 20, 15, 6, 1",
      "1, 5, 15, 20, 15, 5, 1",
      "1, 6, 10, 10, 6, 1",
      "1, 6, 12, 12, 6, 1"
    ],
    "ans": "1, 6, 15, 20, 15, 6, 1",
    "reason": null
  }
];
  }
});
