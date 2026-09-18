// Class 11 Math — Chapter 4: Sequences and Series
// 108 MCQs (base + stimulus-based), each with a computed/verified explanation.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch4",
  label: "Chapter 4: Sequences and Series",
  order: 4,
  questions: function () {
    return [
  {
    "q": "The \\(n\\)-th term of an A.P. with first term \\(a\\) and common difference \\(d\\) is:",
    "options": [
      "\\(a+nd\\)",
      "\\(a+(n-1)d\\)",
      "\\(a+(n+1)d\\)",
      "\\(a\\cdot d^{n-1}\\)"
    ],
    "ans": "\\(a+(n-1)d\\)",
    "reason": "By definition, each term of an A.P. is the previous term plus \\(d\\), so after \\(n-1\\) steps from \\(a\\): \\(a_n=a+(n-1)d\\)."
  },
  {
    "q": "If \\(a,b,c\\) are in A.P., the arithmetic mean \\(b\\) is given by:",
    "options": [
      "\\((a+c)/2\\)",
      "\\(\\sqrt{ac}\\)",
      "\\(2ac/(a+c)\\)",
      "\\(a+c\\)"
    ],
    "ans": "\\((a+c)/2\\)",
    "reason": "For \\(a,b,c\\) in A.P., \\(2b=a+c\\), so \\(b=(a+c)/2\\) — the ordinary average."
  },
  {
    "q": "The sum of the first \\(n\\) natural numbers is given by:",
    "options": [
      "\\(n(n+1)\\)",
      "\\(n(n+1)/2\\)",
      "\\([n(n+1)/2]^2\\)",
      "\\(n(2n+1)/6\\)"
    ],
    "ans": "\\(n(n+1)/2\\)",
    "reason": "This is the standard identity \\(1+2+\\cdots+n=\\dfrac{n(n+1)}{2}\\)."
  },
  {
    "q": "The common ratio \\(r\\) of the G.P. \\(2,6,18,54,\\dots\\) is:",
    "options": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(6\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "Each term is \\(3\\times\\) the previous one: \\(6/2=3,\\ 18/6=3,\\ 54/18=3\\)."
  },
  {
    "q": "The \\(n\\)-th term of a G.P. is given by:",
    "options": [
      "\\(a\\cdot r^{n}\\)",
      "\\(a\\cdot r^{n-1}\\)",
      "\\(a+(n-1)r\\)",
      "\\(a/r^{n-1}\\)"
    ],
    "ans": "\\(a\\cdot r^{n-1}\\)",
    "reason": "Each term of a G.P. is the previous term times \\(r\\), so after \\(n-1\\) steps from \\(a\\): \\(a_n=a\\cdot r^{n-1}\\)."
  },
  {
    "q": "If \\(a,b,c\\) are in G.P., then \\(b\\) equals:",
    "options": [
      "\\((a+c)/2\\)",
      "\\(\\pm\\sqrt{ac}\\)",
      "\\(2ac/(a+c)\\)",
      "\\(ac\\)"
    ],
    "ans": "\\(\\pm\\sqrt{ac}\\)",
    "reason": "For \\(a,b,c\\) in G.P., \\(b^2=ac\\), so \\(b=\\pm\\sqrt{ac}\\)."
  },
  {
    "q": "The geometric mean between 4 and 16 is:",
    "options": [
      "\\(8\\)",
      "\\(10\\)",
      "\\(\\pm8\\)",
      "\\(64\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "G.M. of \\(4\\) and \\(16\\) is \\(\\sqrt{4\\times16}=\\sqrt{64}=8\\)."
  },
  {
    "q": "A sequence is a Harmonic Progression (H.P.) if the reciprocals of its terms form:",
    "options": [
      "\\(\\text{An A.P.}\\)",
      "\\(\\text{A G.P.}\\)",
      "\\(\\text{An Arithmetico-Geometric Series}\\)",
      "\\(\\text{A Fibonacci Sequence}\\)"
    ],
    "ans": "\\(\\text{An A.P.}\\)",
    "reason": "By definition, a sequence is a Harmonic Progression exactly when the reciprocals of its terms form an A.P."
  },
  {
    "q": "The Harmonic Mean (H.M.) between two positive real numbers \\(a\\) and \\(b\\) is:",
    "options": [
      "\\((a+b)/2\\)",
      "\\(\\sqrt{ab}\\)",
      "\\(2ab/(a+b)\\)",
      "\\((a-b)/2\\)"
    ],
    "ans": "\\(2ab/(a+b)\\)",
    "reason": "The H.M. formula for two numbers is \\(\\dfrac{2ab}{a+b}\\)."
  },
  {
    "q": "For two distinct positive real numbers, the A.M. (\\(A\\)), G.M. (\\(G\\)) and H.M. (\\(H\\)) satisfy:",
    "options": [
      "\\(A<G<H\\)",
      "\\(A>G>H\\)",
      "\\(A=G=H\\)",
      "\\(H>A>G\\)"
    ],
    "ans": "\\(A>G>H\\)",
    "reason": "For two distinct positive reals, the classic inequality is \\(A>G>H\\) (with equality only when the numbers are equal)."
  },
  {
    "q": "The relation connecting A.M. (\\(A\\)), G.M. (\\(G\\)), and H.M. (\\(H\\)) is:",
    "options": [
      "\\(G^2=A\\cdot H\\)",
      "\\(A^2=G\\cdot H\\)",
      "\\(H^2=A\\cdot G\\)",
      "\\(G=A\\cdot H\\)"
    ],
    "ans": "\\(G^2=A\\cdot H\\)",
    "reason": "A standard identity linking the three means is \\(G^2=A\\cdot H\\)."
  },
  {
    "q": "The sum of an infinite geometric series \\(S=a/(1-r)\\) converges if and only if:",
    "options": [
      "\\(r>1\\)",
      "\\(|r|<1\\)",
      "\\(|r|\\ge1\\)",
      "\\(r=-1\\)"
    ],
    "ans": "\\(|r|<1\\)",
    "reason": "The infinite geometric series \\(a/(1-r)\\) only makes sense (converges) when the terms shrink toward \\(0\\), which requires \\(|r|<1\\)."
  },
  {
    "q": "The sum of the first \\(n\\) terms of an A.P. is given by \\(S_n=\\)",
    "options": [
      "\\(\\tfrac{n}{2}[2a+(n-1)d]\\)",
      "\\(n[a+(n-1)d]\\)",
      "\\(\\tfrac{n}{2}[a+(n+1)d]\\)",
      "\\(2n[a+d]\\)"
    ],
    "ans": "\\(\\tfrac{n}{2}[2a+(n-1)d]\\)",
    "reason": "The A.P. sum formula, from adding the first and last term terms in pairs, is \\(S_n=\\tfrac{n}{2}[2a+(n-1)d]\\)."
  },
  {
    "q": "If the 5th term of an A.P. is 13 and the 1st term is 1, the common difference \\(d\\) is:",
    "options": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(5\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "\\(a_5=a+4d\\Rightarrow13=1+4d\\Rightarrow4d=12\\Rightarrow d=3\\)."
  },
  {
    "q": "The sum of the series \\(1+2+3+\\cdots+100\\) is:",
    "options": [
      "\\(5000\\)",
      "\\(5050\\)",
      "\\(5100\\)",
      "\\(10000\\)"
    ],
    "ans": "\\(5050\\)",
    "reason": "\\(1+2+\\cdots+100=\\dfrac{100\\times101}{2}=5050\\)."
  },
  {
    "q": "The 10th term of the sequence \\(2,4,8,16,\\dots\\) is:",
    "options": [
      "\\(512\\)",
      "\\(1024\\)",
      "\\(2048\\)",
      "\\(256\\)"
    ],
    "ans": "\\(1024\\)",
    "reason": "This is a G.P. with \\(a=2,\\ r=2\\): \\(a_{10}=2\\cdot2^{9}=2\\times512=1024\\)."
  },
  {
    "q": "The sum of the infinite G.P. \\(1+\\tfrac12+\\tfrac14+\\tfrac18+\\cdots\\) is:",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3/2\\)",
      "\\(\\text{Infinite}\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "G.P. with \\(a=1,\\ r=1/2\\): \\(S=\\dfrac{1}{1-1/2}=2\\)."
  },
  {
    "q": "The harmonic mean between 2 and 8 is:",
    "options": [
      "\\(5\\)",
      "\\(4\\)",
      "\\(3.2\\)",
      "\\(16/3\\)"
    ],
    "ans": "\\(3.2\\)",
    "reason": "H.M. \\(=\\dfrac{2(2)(8)}{2+8}=\\dfrac{32}{10}=3.2\\)."
  },
  {
    "q": "The \\(n\\)-th term of the sequence \\(1,4,9,16,25,\\dots\\) is:",
    "options": [
      "\\(2n\\)",
      "\\(n^2\\)",
      "\\(2^n\\)",
      "\\(n^3\\)"
    ],
    "ans": "\\(n^2\\)",
    "reason": "The terms are \\(1^2,2^2,3^2,\\ldots\\), so \\(a_n=n^2\\)."
  },
  {
    "q": "The sum of squares of the first \\(n\\) natural numbers \\(\\sum n^2\\) is:",
    "options": [
      "\\(n(n+1)/2\\)",
      "\\(n(n+1)(2n+1)/6\\)",
      "\\([n(n+1)/2]^2\\)",
      "\\(n^2(n+1)/4\\)"
    ],
    "ans": "\\(n(n+1)(2n+1)/6\\)",
    "reason": "This is the standard identity \\(\\sum_{k=1}^n k^2=\\dfrac{n(n+1)(2n+1)}{6}\\)."
  },
  {
    "q": "The sum of cubes of the first \\(n\\) natural numbers \\(\\sum n^3\\) is equal to:",
    "options": [
      "\\((\\sum n)^2\\)",
      "\\(\\sum n^2\\)",
      "\\(2(\\sum n)\\)",
      "\\(n^3\\)"
    ],
    "ans": "\\((\\sum n)^2\\)",
    "reason": "This is the well-known identity \\(\\sum k^3=\\left(\\sum k\\right)^2\\) — the sum of cubes equals the square of the sum."
  },
  {
    "q": "If \\(S_n\\) denotes the sum of \\(n\\) terms of an A.P., then \\(S_n-S_{n-1}\\) equals:",
    "options": [
      "\\(a_n\\)",
      "\\(d\\)",
      "\\(a_1\\)",
      "\\(S_1\\)"
    ],
    "ans": "\\(a_n\\)",
    "reason": "\\(S_n\\) is the sum through term \\(n\\), and \\(S_{n-1}\\) through term \\(n-1\\); their difference leaves just the \\(n\\)-th term, \\(a_n\\)."
  },
  {
    "q": "If the common ratio of a G.P. is negative, the terms of the G.P. are:",
    "options": [
      "\\(\\text{All positive}\\)",
      "\\(\\text{All negative}\\)",
      "\\(\\text{Alternating in sign}\\)",
      "\\(\\text{Zero}\\)"
    ],
    "ans": "\\(\\text{Alternating in sign}\\)",
    "reason": "A negative ratio makes each term flip sign from the one before it, so the terms alternate positive/negative."
  },
  {
    "q": "The 7th term of an H.P. whose corresponding A.P. has \\(a_7=14\\) is:",
    "options": [
      "\\(14\\)",
      "\\(1/14\\)",
      "\\(-14\\)",
      "\\(7/2\\)"
    ],
    "ans": "\\(1/14\\)",
    "reason": "The corresponding A.P.'s 7th term is \\(14\\); the H.P.'s 7th term is its reciprocal, \\(1/14\\)."
  },
  {
    "q": "The general term of the sequence \\(\\tfrac12,\\tfrac23,\\tfrac34,\\tfrac45,\\dots\\) is:",
    "options": [
      "\\(n/(n+1)\\)",
      "\\((n+1)/n\\)",
      "\\(n/(2n)\\)",
      "\\(1/n\\)"
    ],
    "ans": "\\(n/(n+1)\\)",
    "reason": "The numerators are \\(1,2,3,\\ldots\\) and denominators are one more: \\(n/(n+1)\\)."
  },
  {
    "q": "If \\(A,G,H\\) are inserted between 3 and 12, then \\(G\\) equals:",
    "options": [
      "\\(6\\)",
      "\\(7.5\\)",
      "\\(4.8\\)",
      "\\(9\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "Inserting A, G, H between 3 and 12 means they are the means of 3 and 12: \\(G=\\sqrt{3\\times12}=\\sqrt{36}=6\\)."
  },
  {
    "q": "An arithmetico-geometric series is formed by multiplying corresponding terms of:",
    "options": [
      "\\(\\text{Two A.P.s}\\)",
      "\\(\\text{Two G.P.s}\\)",
      "\\(\\text{An A.P. and a G.P.}\\)",
      "\\(\\text{An A.P. and an H.P.}\\)"
    ],
    "ans": "\\(\\text{An A.P. and a G.P.}\\)",
    "reason": "By definition, an arithmetico-geometric series multiplies the corresponding terms of an A.P. and a G.P. together."
  },
  {
    "q": "The sum of the first \\(n\\) odd natural numbers \\(1+3+5+\\cdots+(2n-1)\\) is:",
    "options": [
      "\\(n(n+1)\\)",
      "\\(n^2\\)",
      "\\(2n^2\\)",
      "\\(n(n-1)\\)"
    ],
    "ans": "\\(n^2\\)",
    "reason": "This is the standard identity: the first \\(n\\) odd numbers sum to \\(n^2\\)."
  },
  {
    "q": "The sum of the first \\(n\\) even natural numbers \\(2+4+6+\\cdots+2n\\) is:",
    "options": [
      "\\(n^2\\)",
      "\\(n(n+1)\\)",
      "\\(n(n-1)\\)",
      "\\(2n^2\\)"
    ],
    "ans": "\\(n(n+1)\\)",
    "reason": "The first \\(n\\) even numbers sum to \\(2(1+2+\\cdots+n)=2\\cdot\\dfrac{n(n+1)}{2}=n(n+1)\\)."
  },
  {
    "q": "The repeating decimal \\(0.333\\ldots\\) expressed as a fraction using an infinite G.P. is:",
    "options": [
      "\\(1/3\\)",
      "\\(3/10\\)",
      "\\(33/100\\)",
      "\\(1/9\\)"
    ],
    "ans": "\\(1/3\\)",
    "reason": "\\(0.\\overline{3}\\) is the G.P. \\(3/10+3/100+\\cdots\\) with \\(a=3/10,\\ r=1/10\\): \\(S=\\dfrac{3/10}{1-1/10}=\\dfrac{3/10}{9/10}=1/3\\)."
  },
  {
    "q": "The 4th term of a G.P. is 24 and the 7th term is 192. The common ratio \\(r\\) is:",
    "options": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(8\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "\\(\\dfrac{a_7}{a_4}=r^3=\\dfrac{192}{24}=8\\Rightarrow r=2\\)."
  },
  {
    "q": "If \\(a,b,c\\) are in A.P., then \\(2b\\) equals:",
    "options": [
      "\\(a+c\\)",
      "\\(a-c\\)",
      "\\(ac\\)",
      "\\(a/c\\)"
    ],
    "ans": "\\(a+c\\)",
    "reason": "For \\(a,b,c\\) in A.P., \\(b\\) is the average of \\(a\\) and \\(c\\): \\(2b=a+c\\)."
  },
  {
    "q": "In an A.P., if \\(a=5,\\ d=3\\), and \\(a_n=50\\), then \\(n\\) is:",
    "options": [
      "\\(14\\)",
      "\\(15\\)",
      "\\(16\\)",
      "\\(17\\)"
    ],
    "ans": "\\(16\\)",
    "reason": "\\(a_n=a+(n-1)d\\Rightarrow50=5+(n-1)(3)\\Rightarrow(n-1)=15\\Rightarrow n=16\\)."
  },
  {
    "q": "The sequence \\(1,1,2,3,5,8,13,\\dots\\) is known as:",
    "options": [
      "\\(\\text{Arithmetic Sequence}\\)",
      "\\(\\text{Geometric Sequence}\\)",
      "\\(\\text{Harmonic Sequence}\\)",
      "\\(\\text{Fibonacci Sequence}\\)"
    ],
    "ans": "\\(\\text{Fibonacci Sequence}\\)",
    "reason": "Each term is the sum of the two before it (\\(1,1,2,3,5,8,13,\\ldots\\)) — this is the Fibonacci Sequence."
  },
  {
    "q": "If three arithmetic means are inserted between 2 and 14, the second A.M. is:",
    "options": [
      "\\(5\\)",
      "\\(8\\)",
      "\\(11\\)",
      "\\(6\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "Inserting 3 A.M.s between 2 and 14 makes a 5-term A.P.: \\(d=(14-2)/4=3\\); the terms are \\(2,5,8,11,14\\), so the 2nd A.M. is \\(8\\)."
  },
  {
    "q": "The sum to infinity of \\(0.6+0.06+0.006+\\cdots\\) is:",
    "options": [
      "\\(2/3\\)",
      "\\(1/3\\)",
      "\\(3/5\\)",
      "\\(6/10\\)"
    ],
    "ans": "\\(2/3\\)",
    "reason": "G.P. with \\(a=0.6,\\ r=0.1\\): \\(S=\\dfrac{0.6}{1-0.1}=\\dfrac{0.6}{0.9}=2/3\\)."
  },
  {
    "q": "If the \\(n\\)-th term of a sequence is \\(a_n=(-1)^{n-1}\\cdot2^n\\), then \\(a_4\\) is:",
    "options": [
      "\\(16\\)",
      "\\(-16\\)",
      "\\(8\\)",
      "\\(-8\\)"
    ],
    "ans": "\\(-16\\)",
    "reason": "\\(a_4=(-1)^{4-1}\\cdot2^4=(-1)^3\\cdot16=-16\\)."
  },
  {
    "q": "The harmonic mean of two numbers is 4, and their arithmetic mean is 9. Their geometric mean \\(G\\) is:",
    "options": [
      "\\(6\\)",
      "\\(36\\)",
      "\\(13\\)",
      "\\(\\sqrt5\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "\\(G^2=A\\cdot H=9\\times4=36\\Rightarrow G=6\\)."
  },
  {
    "q": "If \\(|r|\\ge1\\), the sum of an infinite geometric series is:",
    "options": [
      "\\(\\text{Finite}\\)",
      "\\(\\text{Divergent / Undefined}\\)",
      "\\(\\text{Zero}\\)",
      "\\(\\text{Negative}\\)"
    ],
    "ans": "\\(\\text{Divergent / Undefined}\\)",
    "reason": "When \\(|r|\\ge1\\), the terms don't shrink toward zero, so the partial sums never settle — the series is divergent (undefined as a finite sum)."
  },
  {
    "q": "The sum of the series \\(\\sum_{k=1}^{5}(2k+1)\\) is:",
    "options": [
      "\\(30\\)",
      "\\(35\\)",
      "\\(25\\)",
      "\\(40\\)"
    ],
    "ans": "\\(35\\)",
    "reason": "\\(\\sum_{k=1}^5(2k+1)=3+5+7+9+11=35\\)."
  },
  {
    "q": "If \\(1/a,1/b,1/c\\) are in A.P., then \\(a,b,c\\) are in:",
    "options": [
      "\\(\\text{A.P.}\\)",
      "\\(\\text{G.P.}\\)",
      "\\(\\text{H.P.}\\)",
      "\\(\\text{Arithmetico-Geometric}\\)"
    ],
    "ans": "\\(\\text{H.P.}\\)",
    "reason": "By definition, if the reciprocals \\(1/a,1/b,1/c\\) form an A.P., then \\(a,b,c\\) form an H.P."
  },
  {
    "q": "The 5th term of the H.P. \\(\\tfrac13,\\tfrac15,\\tfrac17,\\dots\\) is:",
    "options": [
      "\\(1/9\\)",
      "\\(1/11\\)",
      "\\(1/13\\)",
      "\\(9\\)"
    ],
    "ans": "\\(1/11\\)",
    "reason": "Reciprocals \\(3,5,7,9,11,\\ldots\\) form an A.P. with common difference \\(2\\); the 5th is \\(11\\), so the H.P.'s 5th term is \\(1/11\\)."
  },
  {
    "q": "If \\(a_n=3n-2\\), the sequence is an A.P. with common difference \\(d=\\)",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(-2\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "\\(a_n=3n-2\\) increases by \\(3\\) each time \\(n\\) increases by \\(1\\), so \\(d=3\\)."
  },
  {
    "q": "The value of \\(1^3+2^3+3^3+\\cdots+10^3\\) is:",
    "options": [
      "\\(3025\\)",
      "\\(2025\\)",
      "\\(5050\\)",
      "\\(385\\)"
    ],
    "ans": "\\(3025\\)",
    "reason": "\\(\\sum_{k=1}^{10}k^3=\\left(\\sum_{k=1}^{10}k\\right)^2=55^2=3025\\)."
  },
  {
    "q": "The value of \\(1^2+2^2+3^2+\\cdots+10^2\\) is:",
    "options": [
      "\\(385\\)",
      "\\(5050\\)",
      "\\(3025\\)",
      "\\(220\\)"
    ],
    "ans": "\\(385\\)",
    "reason": "\\(\\sum_{k=1}^{10}k^2=\\dfrac{10\\times11\\times21}{6}=\\dfrac{2310}{6}=385\\)."
  },
  {
    "q": "If the sum of \\(n\\) terms of an A.P. is \\(3n^2+5n\\), its first term \\(a_1\\) is:",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(8\\)",
      "\\(11\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "\\(a_1=S_1=3(1)^2+5(1)=3+5=8\\)."
  },
  {
    "q": "If the common ratio of a G.P. is 1, the sum of the first \\(n\\) terms \\(S_n\\) is:",
    "options": [
      "\\(a\\)",
      "\\(n\\cdot a\\)",
      "\\(0\\)",
      "\\(a^n\\)"
    ],
    "ans": "\\(n\\cdot a\\)",
    "reason": "With \\(r=1\\), every term equals \\(a\\), so the sum of \\(n\\) of them is simply \\(n\\cdot a\\)."
  },
  {
    "q": "The geometric mean of \\(-2\\) and \\(-8\\) is:",
    "options": [
      "\\(4\\)",
      "\\(-4\\)",
      "\\(\\pm4\\)",
      "\\(-16\\)"
    ],
    "ans": "\\(-4\\)",
    "reason": "\\(\\sqrt{(-2)(-8)}=\\sqrt{16}=4\\); since both terms are negative, the mean keeping the same sign pattern is \\(-4\\)."
  },
  {
    "q": "If \\(a=2\\) and \\(r=-1\\) in a G.P., the sum of the first 10 terms is:",
    "options": [
      "\\(2\\)",
      "\\(0\\)",
      "\\(-2\\)",
      "\\(20\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "With \\(r=-1\\), the terms are \\(2,-2,2,-2,\\ldots\\) — 10 terms cancel in pairs, giving a sum of \\(0\\)."
  },
  {
    "q": "If \\(A\\) and \\(G\\) are the A.M. and G.M. of two positive numbers, the numbers are given by:",
    "options": [
      "\\(A\\pm\\sqrt{A^2-G^2}\\)",
      "\\(A\\pm\\sqrt{G^2-A^2}\\)",
      "\\(G\\pm\\sqrt{A^2-G^2}\\)",
      "\\(A\\pm G\\)"
    ],
    "ans": "\\(A\\pm\\sqrt{A^2-G^2}\\)",
    "reason": "Solving \\(x+y=2A\\) and \\(xy=G^2\\) as a quadratic gives \\(x,y=A\\pm\\sqrt{A^2-G^2}\\)."
  },
  {
    "q": "The common difference of the A.P. \\(1/p,(1-p)/p,(1-2p)/p,\\dots\\) is:",
    "options": [
      "\\(p\\)",
      "\\(-p\\)",
      "\\(-1\\)",
      "\\(1\\)"
    ],
    "ans": "\\(-1\\)",
    "reason": "Common difference \\(=\\dfrac{1-p}{p}-\\dfrac1p=\\dfrac{1-p-1}{p}=\\dfrac{-p}{p}=-1\\)."
  },
  {
    "q": "If the \\(n\\)th term of an A.P. is \\(a_n=5n-3\\), its 10th term is:",
    "options": [
      "\\(47\\)",
      "\\(50\\)",
      "\\(45\\)",
      "\\(53\\)"
    ],
    "ans": "\\(47\\)",
    "reason": "\\(a_{10}=5(10)-3=50-3=47\\)."
  },
  {
    "q": "If \\(2x,\\ x+10,\\ 3x+2\\) are in A.P., the value of \\(x\\) is:",
    "options": [
      "\\(6\\)",
      "\\(18\\)",
      "\\(12\\)",
      "\\(-6\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "A.P. condition: \\(2(x+10)=2x+(3x+2)\\Rightarrow2x+20=5x+2\\Rightarrow18=3x\\Rightarrow x=6\\)."
  },
  {
    "q": "If \\(a=3\\) and \\(r=2\\) in a G.P., the sum of the first 5 terms \\(S_5\\) is:",
    "options": [
      "\\(93\\)",
      "\\(96\\)",
      "\\(88\\)",
      "\\(100\\)"
    ],
    "ans": "\\(93\\)",
    "reason": "\\(S_5=3\\cdot\\dfrac{2^5-1}{2-1}=3\\times31=93\\)."
  },
  {
    "q": "The 8th term of the sequence \\(1,\\tfrac12,\\tfrac14,\\tfrac18,\\dots\\) is:",
    "options": [
      "\\(1/64\\)",
      "\\(1/128\\)",
      "\\(1/256\\)",
      "\\(1/512\\)"
    ],
    "ans": "\\(1/128\\)",
    "reason": "G.P. with \\(a=1,\\ r=1/2\\): \\(a_8=1\\cdot(1/2)^7=1/128\\)."
  },
  {
    "q": "The sum of the infinite geometric series \\(9-3+1-\\tfrac13+\\cdots\\) is:",
    "options": [
      "\\(27/4\\)",
      "\\(9/2\\)",
      "\\(27/2\\)",
      "\\(6\\)"
    ],
    "ans": "\\(27/4\\)",
    "reason": "G.P. with \\(a=9,\\ r=-1/3\\): \\(S=\\dfrac{9}{1-(-1/3)}=\\dfrac{9}{4/3}=27/4\\)."
  },
  {
    "q": "If the A.M. between two positive numbers \\(a\\) and \\(b\\) is 5 and their G.M. is 4, their H.M. is:",
    "options": [
      "\\(3.2\\)",
      "\\(3.6\\)",
      "\\(4.5\\)",
      "\\(2.8\\)"
    ],
    "ans": "\\(3.2\\)",
    "reason": "\\(H=G^2/A=4^2/5=16/5=3.2\\)."
  },
  {
    "q": "The expression for the \\(n\\)-th term of an Arithmetico-Geometric Progression (A.G.P.) is:",
    "options": [
      "\\([a+(n-1)d]\\,r^{n-1}\\)",
      "\\([a+nd]\\,r^{n}\\)",
      "\\([a+(n-1)d]\\,r^{n}\\)",
      "\\(a\\cdot r^{n-1}+(n-1)d\\)"
    ],
    "ans": "\\([a+(n-1)d]\\,r^{n-1}\\)",
    "reason": "The A.G.P. term is the product of the corresponding A.P. term \\([a+(n-1)d]\\) and G.P. term \\(r^{n-1}\\)."
  },
  {
    "q": "If \\(3,x,27\\) are in G.P. with \\(x>0\\), then \\(x\\) is:",
    "options": [
      "\\(9\\)",
      "\\(12\\)",
      "\\(15\\)",
      "\\(81\\)"
    ],
    "ans": "\\(9\\)",
    "reason": "For \\(3,x,27\\) in G.P., \\(x^2=3\\times27=81\\Rightarrow x=9\\) (taking the positive root as given)."
  },
  {
    "q": "Which of the following series is convergent?",
    "options": [
      "\\(1+2+4+8+\\cdots\\)",
      "\\(1+\\tfrac12+\\tfrac14+\\tfrac18+\\cdots\\)",
      "\\(1-2+4-8+\\cdots\\)",
      "\\(1+3+9+27+\\cdots\\)"
    ],
    "ans": "\\(1+\\tfrac12+\\tfrac14+\\tfrac18+\\cdots\\)",
    "reason": "\\(1+\\tfrac12+\\tfrac14+\\cdots\\) has ratio \\(r=1/2\\), and \\(|r|<1\\), so it converges (unlike a series with \\(|r|\\ge1\\))."
  },
  {
    "q": "If the sum of \\(n\\) terms of an A.P. is \\(n^2\\), its common difference \\(d\\) is:",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "\\(a_n=S_n-S_{n-1}=n^2-(n-1)^2=2n-1\\); consecutive terms differ by \\(d=2\\)."
  },
  {
    "q": "If \\(a_n=2^n/n!\\), the third term \\(a_3\\) is:",
    "options": [
      "\\(4/3\\)",
      "\\(8/3\\)",
      "\\(2/3\\)",
      "\\(16/3\\)"
    ],
    "ans": "\\(4/3\\)",
    "reason": "\\(a_3=\\dfrac{2^3}{3!}=\\dfrac{8}{6}=4/3\\)."
  },
  {
    "q": "The sum of the first 20 odd natural numbers is:",
    "options": [
      "\\(200\\)",
      "\\(400\\)",
      "\\(420\\)",
      "\\(380\\)"
    ],
    "ans": "\\(400\\)",
    "reason": "The first \\(n\\) odd numbers sum to \\(n^2\\); for \\(n=20\\), that's \\(400\\)."
  },
  {
    "q": "If \\(a,b,c\\) are in H.P., then \\(1/a,1/b,1/c\\) are in:",
    "options": [
      "\\(\\text{A.P.}\\)",
      "\\(\\text{G.P.}\\)",
      "\\(\\text{A.G.P.}\\)",
      "\\(\\text{Fibonacci}\\)"
    ],
    "ans": "\\(\\text{A.P.}\\)",
    "reason": "By definition of H.P., if \\(a,b,c\\) are in H.P. then their reciprocals \\(1/a,1/b,1/c\\) are in A.P."
  },
  {
    "q": "The sum of the series \\(\\sum_{r=1}^{n}r(r+1)\\) is:",
    "options": [
      "\\(n(n+1)(n+2)/3\\)",
      "\\(n(n+1)(2n+1)/6\\)",
      "\\(n(n+1)/2\\)",
      "\\(n^2(n+1)^2/4\\)"
    ],
    "ans": "\\(n(n+1)(n+2)/3\\)",
    "reason": "\\(\\sum r(r+1)=\\sum r^2+\\sum r=\\dfrac{n(n+1)(2n+1)}{6}+\\dfrac{n(n+1)}{2}=\\dfrac{n(n+1)(2n+4)}{6}=\\dfrac{n(n+1)(n+2)}{3}\\)."
  },
  {
    "q": "If two A.M.s \\(A_1\\) and \\(A_2\\) are inserted between 5 and 20, then \\(A_1+A_2\\) equals:",
    "options": [
      "\\(25\\)",
      "\\(30\\)",
      "\\(20\\)",
      "\\(15\\)"
    ],
    "ans": "\\(25\\)",
    "reason": "Inserting \\(A_1,A_2\\) between 5 and 20 makes a 4-term A.P.: \\(d=(20-5)/3=5\\), so \\(A_1=10,\\ A_2=15\\), and \\(A_1+A_2=25\\)."
  },
  {
    "q": "The value of \\(0.232323\\ldots\\) as a rational fraction is:",
    "options": [
      "\\(23/99\\)",
      "\\(23/100\\)",
      "\\(23/90\\)",
      "\\(23/9\\)"
    ],
    "ans": "\\(23/99\\)",
    "reason": "A 2-digit repeating block \\(0.\\overline{23}\\) equals \\(23/99\\) (repeating decimal rule: digits over that many 9's)."
  },
  {
    "q": "The fifth term of a G.P. whose first term is 2 and common ratio is \\(-3\\) is:",
    "options": [
      "\\(162\\)",
      "\\(-162\\)",
      "\\(54\\)",
      "\\(-54\\)"
    ],
    "ans": "\\(162\\)",
    "reason": "G.P. with \\(a=2,\\ r=-3\\): \\(a_5=2\\cdot(-3)^4=2\\times81=162\\)."
  },
  {
    "q": "The \\(n\\)-th term of the harmonic progression \\(\\tfrac12,\\tfrac15,\\tfrac18,\\tfrac1{11},\\dots\\) is:",
    "options": [
      "\\(1/(3n-1)\\)",
      "\\(1/(3n+1)\\)",
      "\\(1/(2n+1)\\)",
      "\\(3n-1\\)"
    ],
    "ans": "\\(1/(3n-1)\\)",
    "reason": "Reciprocals \\(2,5,8,11,\\ldots\\) form an A.P. with \\(d=3\\), general term \\(3n-1\\); so the H.P.'s \\(n\\)-th term is \\(1/(3n-1)\\)."
  },
  {
    "q": "The geometric mean of two numbers \\(a\\) and \\(b\\) is \\(G\\). Then \\(\\log a+\\log b\\) equals:",
    "options": [
      "\\(2\\log G\\)",
      "\\(\\log G\\)",
      "\\(G^2\\)",
      "\\(\\log(G/2)\\)"
    ],
    "ans": "\\(2\\log G\\)",
    "reason": "Since \\(G^2=ab\\), taking logs gives \\(2\\log G=\\log a+\\log b\\), i.e. \\(\\log a+\\log b=2\\log G\\)."
  },
  {
    "q": "If the sum of an infinite G.P. is 4 and the first term is 2, the common ratio \\(r\\) is:",
    "options": [
      "\\(1/2\\)",
      "\\(-1/2\\)",
      "\\(1/4\\)",
      "\\(2\\)"
    ],
    "ans": "\\(1/2\\)",
    "reason": "\\(S=\\dfrac{a}{1-r}\\Rightarrow4=\\dfrac{2}{1-r}\\Rightarrow1-r=1/2\\Rightarrow r=1/2\\)."
  },
  {
    "q": "The 4th term from the end of an A.P. with \\(n\\) terms and common difference \\(d\\) is:",
    "options": [
      "\\(a+(n-4)d\\)",
      "\\(a+(n-3)d\\)",
      "\\(a+(n-5)d\\)",
      "\\(a+nd\\)"
    ],
    "ans": "\\(a+(n-4)d\\)",
    "reason": "Counting from the end, the \\(k\\)-th-from-last term is \\(l-(k-1)d\\) where \\(l=a+(n-1)d\\) is the last term; for \\(k=4\\): \\(a+(n-1)d-3d=a+(n-4)d\\)."
  },
  {
    "q": "If A.M.\\(=10\\) and H.M.\\(=6.4\\), then G.M. equals:",
    "options": [
      "\\(8\\)",
      "\\(64\\)",
      "\\(7.2\\)",
      "\\(9\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "\\(G^2=A\\cdot H=10\\times6.4=64\\Rightarrow G=8\\)."
  },
  {
    "q": "In an A.P. if \\(a_1=-3,\\ d=4\\), which term is 37?",
    "options": [
      "\\(10th\\)",
      "\\(11th\\)",
      "\\(12th\\)",
      "\\(13th\\)"
    ],
    "ans": "\\(11th\\)",
    "reason": "\\(a_n=-3+(n-1)(4)=37\\Rightarrow(n-1)(4)=40\\Rightarrow n-1=10\\Rightarrow n=11\\), the 11th term."
  },
  {
    "q": "The sum of \\(n\\) terms of \\(1+11+111+1111+\\cdots\\) is obtained using:",
    "options": [
      "\\(\\text{A.P.}\\)",
      "\\(\\text{G.P.}\\)",
      "\\(\\text{H.P.}\\)",
      "\\(\\text{Binomial Series}\\)"
    ],
    "ans": "\\(\\text{G.P.}\\)",
    "reason": "Each term \\(\\underbrace{11\\ldots1}_{k}=\\dfrac{10^k-1}{9}\\) comes from a geometric pattern, so the sum is evaluated using G.P. techniques."
  },
  {
    "q": "The value of \\(\\sum_{k=1}^{10}k^3\\) is:",
    "options": [
      "\\(3025\\)",
      "\\(385\\)",
      "\\(55\\)",
      "\\(1000\\)"
    ],
    "ans": "\\(3025\\)",
    "reason": "\\(\\sum_{k=1}^{10}k^3=\\left(\\sum_{k=1}^{10}k\\right)^2=55^2=3025\\)."
  },
  {
    "q": "In a G.P., if \\(a_3=12\\) and \\(a_6=96\\), the first term \\(a\\) is:",
    "options": [
      "\\(3\\)",
      "\\(4\\)",
      "\\(2\\)",
      "\\(6\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "\\(\\dfrac{a_6}{a_3}=r^3=\\dfrac{96}{12}=8\\Rightarrow r=2\\); then \\(a_3=a\\cdot r^2=4a=12\\Rightarrow a=3\\)."
  },
  {
    "q": "The relation \\(A\\ge G\\ge H\\) holds true for:",
    "options": [
      "\\(\\text{Any real numbers}\\)",
      "\\(\\text{Positive real numbers}\\)",
      "\\(\\text{Negative real numbers}\\)",
      "\\(\\text{Complex numbers}\\)"
    ],
    "ans": "\\(\\text{Positive real numbers}\\)",
    "reason": "The inequality \\(A\\ge G\\ge H\\) (with equality only when all numbers are equal) holds specifically for positive real numbers."
  },
  {
    "q": "If \\(1+3+5+\\cdots+x=144\\), then \\(x\\) is:",
    "options": [
      "\\(23\\)",
      "\\(25\\)",
      "\\(21\\)",
      "\\(24\\)"
    ],
    "ans": "\\(23\\)",
    "reason": "The sum of the first \\(n\\) odd numbers is \\(n^2=144\\Rightarrow n=12\\); the 12th odd number is \\(2(12)-1=23\\), so \\(x=23\\)."
  },
  {
    "q": "The reciprocal of the terms of a G.P. forms:",
    "options": [
      "\\(\\text{An A.P.}\\)",
      "\\(\\text{A G.P.}\\)",
      "\\(\\text{An H.P.}\\)",
      "\\(\\text{None of these}\\)"
    ],
    "ans": "\\(\\text{A G.P.}\\)",
    "reason": "If a G.P. has ratio \\(r\\), the reciprocals of its terms have ratio \\(1/r\\) — still constant, so they also form a G.P."
  },
  {
    "q": "The arithmetic mean of the first 10 natural numbers is:",
    "options": [
      "\\(5.5\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(10\\)"
    ],
    "ans": "\\(5.5\\)",
    "reason": "A.M. of \\(1,\\ldots,10\\) is \\(\\dfrac{1+10}{2}=5.5\\) (equivalently \\(55/10\\))."
  },
  {
    "q": "If \\(a_n=n^2-n\\), then \\(a_5\\) is:",
    "options": [
      "\\(20\\)",
      "\\(25\\)",
      "\\(30\\)",
      "\\(15\\)"
    ],
    "ans": "\\(20\\)",
    "reason": "\\(a_5=5^2-5=25-5=20\\)."
  },
  {
    "q": "The sum of an infinite G.P. with \\(a=1/3\\) and \\(r=1/3\\) is:",
    "options": [
      "\\(1/2\\)",
      "\\(1/3\\)",
      "\\(2/3\\)",
      "\\(1\\)"
    ],
    "ans": "\\(1/2\\)",
    "reason": "G.P. with \\(a=1/3,\\ r=1/3\\): \\(S=\\dfrac{1/3}{1-1/3}=\\dfrac{1/3}{2/3}=1/2\\)."
  },
  {
    "q": "How many terms of the A.P. \\(20,18,16,\\dots\\) make the sum zero?",
    "options": [
      "\\(21\\)",
      "\\(20\\)",
      "\\(19\\)",
      "\\(22\\)"
    ],
    "ans": "\\(21\\)",
    "reason": "\\(S_n=\\dfrac{n}{2}[2(20)+(n-1)(-2)]=0\\Rightarrow40-2(n-1)=0\\Rightarrow n-1=20\\Rightarrow n=21\\)."
  },
  {
    "q": "If \\(\\log x,\\log y,\\log z\\) are in A.P., then \\(x,y,z\\) are in:",
    "options": [
      "\\(\\text{A.P.}\\)",
      "\\(\\text{G.P.}\\)",
      "\\(\\text{H.P.}\\)",
      "\\(\\text{A.G.P.}\\)"
    ],
    "ans": "\\(\\text{G.P.}\\)",
    "reason": "\\(2\\log y=\\log x+\\log z\\Rightarrow\\log(y^2)=\\log(xz)\\Rightarrow y^2=xz\\), which is exactly the G.P. condition for \\(x,y,z\\)."
  },
  {
    "q": "The geometric mean of 3, 9, 27 is:",
    "options": [
      "\\(9\\)",
      "\\(3\\)",
      "\\(27\\)",
      "\\(81\\)"
    ],
    "ans": "\\(9\\)",
    "reason": "For three numbers in G.P., the G.M. is the cube root of their product: \\(\\sqrt[3]{3\\times9\\times27}=\\sqrt[3]{729}=9\\)."
  },
  {
    "q": "The total number of terms in the A.P. \\(5,9,13,\\dots,81\\) is:",
    "options": [
      "\\(20\\)",
      "\\(19\\)",
      "\\(21\\)",
      "\\(22\\)"
    ],
    "ans": "\\(20\\)",
    "reason": "\\(a+(n-1)d=81\\Rightarrow5+(n-1)(4)=81\\Rightarrow n-1=19\\Rightarrow n=20\\)."
  },
  {
    "q": "The \\(n\\)-th term of a sequence is \\(3^n/n\\). The 2nd term is:",
    "options": [
      "\\(4.5\\)",
      "\\(3\\)",
      "\\(9\\)",
      "\\(6\\)"
    ],
    "ans": "\\(4.5\\)",
    "reason": "\\(a_2=3^2/2=9/2=4.5\\)."
  },
  {
    "q": "The sum of the series \\(2+4+8+16+\\cdots\\) up to 8 terms is:",
    "options": [
      "\\(510\\)",
      "\\(512\\)",
      "\\(254\\)",
      "\\(1022\\)"
    ],
    "ans": "\\(510\\)",
    "reason": "G.P. with \\(a=2,\\ r=2\\): \\(S_8=2\\cdot\\dfrac{2^8-1}{2-1}=2\\times255=510\\)."
  },
  {
    "q": "If \\(a,b,c\\) are in A.P., then \\(a-b\\) equals:",
    "options": [
      "\\(b-c\\)",
      "\\(c-b\\)",
      "\\(a-c\\)",
      "\\(b+c\\)"
    ],
    "ans": "\\(b-c\\)",
    "reason": "With common difference \\(d\\): \\(b=a-d\\Rightarrow a-b=d\\); and \\(c=b-d\\Rightarrow b-c=d\\) too — so \\(a-b=b-c\\)."
  },
  {
    "q": "The sum of squares of the first 5 natural numbers is:",
    "options": [
      "\\(55\\)",
      "\\(30\\)",
      "\\(225\\)",
      "\\(15\\)"
    ],
    "ans": "\\(55\\)",
    "reason": "\\(1^2+2^2+3^2+4^2+5^2=1+4+9+16+25=55\\) (matches \\(\\tfrac{5\\times6\\times11}{6}=55\\))."
  },
  {
    "q": "The product of \\(n\\) geometric means inserted between two numbers \\(a\\) and \\(b\\) is equal to:",
    "options": [
      "\\((ab)^{n/2}\\)",
      "\\(ab\\)",
      "\\((ab)^n\\)",
      "\\(\\sqrt{ab}\\)"
    ],
    "ans": "\\((ab)^{n/2}\\)",
    "reason": "This is a standard result: inserting \\(n\\) geometric means between \\(a\\) and \\(b\\) makes an \\((n+2)\\)-term G.P., and the product of all \\(n\\) inserted means works out to \\((ab)^{n/2}\\)."
  },
  {
    "q": "If \\(a_n=a+(n-1)d\\), then \\(a_{n+1}-a_n\\) is:",
    "options": [
      "\\(d\\)",
      "\\(2d\\)",
      "\\(a\\)",
      "\\(n\\)"
    ],
    "ans": "\\(d\\)",
    "reason": "\\(a_{n+1}-a_n=[a+nd]-[a+(n-1)d]=d\\), the common difference itself."
  },
  {
    "q": "The sum to infinity of \\(1-\\tfrac12+\\tfrac14-\\tfrac18+\\cdots\\) is:",
    "options": [
      "\\(2/3\\)",
      "\\(1/2\\)",
      "\\(4/3\\)",
      "\\(1/3\\)"
    ],
    "ans": "\\(2/3\\)",
    "reason": "G.P. with \\(a=1,\\ r=-1/2\\): \\(S=\\dfrac{1}{1-(-1/2)}=\\dfrac{1}{3/2}=2/3\\)."
  },
  {
    "q": "If the first term of an A.P. is 2 and the common difference is 3, the sum of 10 terms is:",
    "options": [
      "\\(155\\)",
      "\\(145\\)",
      "\\(165\\)",
      "\\(135\\)"
    ],
    "ans": "\\(155\\)",
    "reason": "\\(S_{10}=\\dfrac{10}{2}[2(2)+9(3)]=5[4+27]=5\\times31=155\\)."
  },
  {
    "q": "If the H.M. between two numbers is 4 and A.M. is 9, then G.M. is:",
    "options": [
      "\\(6\\)",
      "\\(36\\)",
      "\\(13\\)",
      "\\(\\sqrt5\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "\\(G^2=A\\cdot H=9\\times4=36\\Rightarrow G=6\\)."
  },
  {
    "q": "The common difference of an A.P. in which \\(a_{18}-a_{14}=32\\) is:",
    "options": [
      "\\(8\\)",
      "\\(4\\)",
      "\\(6\\)",
      "\\(12\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "\\(a_{18}-a_{14}=(a+17d)-(a+13d)=4d=32\\Rightarrow d=8\\)."
  },
  {
    "q": "If the sum of the first \\(n\\) terms of a G.P. is \\(S_n=3(2^n-1)\\), the first term is:",
    "options": [
      "\\(3\\)",
      "\\(6\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "Comparing \\(S_n=3(2^n-1)\\) to the G.P. sum formula \\(a(r^n-1)/(r-1)\\) with \\(r=2\\) gives \\(a=3\\) (also confirmed by \\(a_1=S_1=3(2-1)=3\\))."
  },
  {
    "q": "For what value of \\(n\\) is \\(\\dfrac{a^{n+1}+b^{n+1}}{a^n+b^n}\\) the A.M. between \\(a\\) and \\(b\\)?",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(1/2\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "Setting \\(n=0\\): \\(\\dfrac{a^{1}+b^{1}}{a^0+b^0}=\\dfrac{a+b}{2}\\), which is exactly the A.M. of \\(a\\) and \\(b\\)."
  },
  {
    "q": "For what value of \\(n\\) is \\(\\dfrac{a^{n+1}+b^{n+1}}{a^n+b^n}\\) the G.M. between \\(a\\) and \\(b\\)?",
    "options": [
      "\\(-1/2\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(1/2\\)"
    ],
    "ans": "\\(-1/2\\)",
    "reason": "Substituting \\(n=-1/2\\) and letting \\(t=a/b\\), the expression simplifies to \\(\\sqrt{ab}\\) for any \\(a,b\\) — this is the standard known value of \\(n\\) that makes the expression equal the G.M."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Month</th><th>Savings (Rs.)</th></tr><tr><td>1</td><td>500</td></tr><tr><td>2</td><td>700</td></tr><tr><td>3</td><td>900</td></tr></table></div>This is an A.P. with common difference d =",
    "options": [
      "200",
      "100",
      "150",
      "250"
    ],
    "ans": "200",
    "reason": "Each month's savings rise by \\(700-500=200\\), so \\(d=200\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Month</th><th>Savings (Rs.)</th></tr><tr><td>1</td><td>500</td></tr><tr><td>2</td><td>700</td></tr><tr><td>3</td><td>900</td></tr></table></div>The savings in the 10th month will be:",
    "options": [
      "Rs. 2300",
      "Rs. 2100",
      "Rs. 2500",
      "Rs. 2000"
    ],
    "ans": "Rs. 2300",
    "reason": "\\(a_{10}=a+9d=500+9(200)=500+1800=2300\\), i.e. Rs. 2300."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Month</th><th>Savings (Rs.)</th></tr><tr><td>1</td><td>500</td></tr><tr><td>2</td><td>700</td></tr><tr><td>3</td><td>900</td></tr></table></div>The total savings after 10 months (S10) will be:",
    "options": [
      "Rs. 14000",
      "Rs. 12000",
      "Rs. 15000",
      "Rs. 13000"
    ],
    "ans": "Rs. 14000",
    "reason": "\\(S_{10}=\\dfrac{10}{2}[2(500)+9(200)]=5[1000+1800]=5\\times2800=14000\\), i.e. Rs. 14000."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Month</th><th>Savings (Rs.)</th></tr><tr><td>1</td><td>500</td></tr><tr><td>2</td><td>700</td></tr><tr><td>3</td><td>900</td></tr></table></div>Savings will first exceed Rs. 3000 in month:",
    "options": [
      "14",
      "13",
      "15",
      "12"
    ],
    "ans": "14",
    "reason": "Need \\(500+(n-1)(200)>3000\\Rightarrow(n-1)>12.5\\Rightarrow n\\ge14\\); checking, month 14 gives \\(500+13(200)=3100>3000\\) while month 13 gives only \\(2900\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Hour</th><th>Bacteria count</th></tr><tr><td>0</td><td>100</td></tr><tr><td>1</td><td>200</td></tr><tr><td>2</td><td>400</td></tr></table></div>This is a G.P. with common ratio r =",
    "options": [
      "2",
      "1.5",
      "3",
      "4"
    ],
    "ans": "2",
    "reason": "Each hour's count doubles (\\(200/100=2,\\ 400/200=2\\)), so \\(r=2\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Hour</th><th>Bacteria count</th></tr><tr><td>0</td><td>100</td></tr><tr><td>1</td><td>200</td></tr><tr><td>2</td><td>400</td></tr></table></div>The bacteria count after 5 hours will be:",
    "options": [
      "3200",
      "1600",
      "6400",
      "2400"
    ],
    "ans": "3200",
    "reason": "\\(a_{5}=100\\cdot2^{5}=100\\times32=3200\\) (counting hour 0 as the first term)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Hour</th><th>Bacteria count</th></tr><tr><td>0</td><td>100</td></tr><tr><td>1</td><td>200</td></tr><tr><td>2</td><td>400</td></tr></table></div>The total bacteria produced over the first 4 hours (hours 0-3, i.e. S4) is:",
    "options": [
      "1500",
      "1400",
      "1000",
      "1600"
    ],
    "ans": "1500",
    "reason": "\\(S_4=100\\cdot\\dfrac{2^4-1}{2-1}=100\\times15=1500\\) (summing hours 0 through 3, i.e. the first 4 terms)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Hour</th><th>Bacteria count</th></tr><tr><td>0</td><td>100</td></tr><tr><td>1</td><td>200</td></tr><tr><td>2</td><td>400</td></tr></table></div>The count will first exceed 10,000 at hour:",
    "options": [
      "7",
      "6",
      "8",
      "5"
    ],
    "ans": "7",
    "reason": "Need \\(100\\cdot2^{h}>10000\\Rightarrow2^{h}>100\\); since \\(2^6=64<100\\) and \\(2^7=128>100\\), hour 7 is first to exceed it."
  }
];
  }
});
