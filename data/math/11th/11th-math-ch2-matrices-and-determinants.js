// Class 11 Math — Chapter 2: Matrices and Determinants
// 108 MCQs (base + stimulus-based), each with a computed/verified explanation.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch2",
  label: "Chapter 2: Matrices and Determinants",
  order: 2,
  questions: function () {
    return [
  {
    "q": "If \\(A=\\begin{bmatrix}2&3\\\\1&4\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(5\\)",
      "\\(6\\)",
      "\\(-5\\)",
      "\\(3\\)"
    ],
    "ans": "\\(5\\)",
    "reason": "\\(|A|=ad-bc=(2)(4)-(3)(1)=8-3=5\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}5&2\\\\3&1\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(0\\)",
      "\\(-1\\)",
      "\\(1\\)",
      "\\(-3\\)"
    ],
    "ans": "\\(-1\\)",
    "reason": "\\(|A|=ad-bc=(5)(1)-(2)(3)=5-6=-1\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}1&0\\\\0&1\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(1\\)",
      "\\(6\\)",
      "\\(-1\\)",
      "\\(2\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "\\(|A|=ad-bc=(1)(1)-(0)(0)=1-0=1\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}3&-2\\\\1&4\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(-14\\)",
      "\\(12\\)",
      "\\(14\\)",
      "\\(15\\)"
    ],
    "ans": "\\(14\\)",
    "reason": "\\(|A|=ad-bc=(3)(4)-(-2)(1)=12--2=14\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}-1&2\\\\3&-4\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(-1\\)",
      "\\(-4\\)",
      "\\(-2\\)",
      "\\(2\\)"
    ],
    "ans": "\\(-2\\)",
    "reason": "\\(|A|=ad-bc=(-1)(-4)-(2)(3)=4-6=-2\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}6&1\\\\2&3\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(14\\)",
      "\\(17\\)",
      "\\(-16\\)",
      "\\(16\\)"
    ],
    "ans": "\\(16\\)",
    "reason": "\\(|A|=ad-bc=(6)(3)-(1)(2)=18-2=16\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}4&5\\\\2&3\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(3\\)",
      "\\(2\\)",
      "\\(-2\\)",
      "\\(0\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "\\(|A|=ad-bc=(4)(3)-(5)(2)=12-10=2\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}7&2\\\\1&3\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(20\\)",
      "\\(17\\)",
      "\\(-19\\)",
      "\\(19\\)"
    ],
    "ans": "\\(19\\)",
    "reason": "\\(|A|=ad-bc=(7)(3)-(2)(1)=21-2=19\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}-2&-3\\\\1&-1\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(6\\)",
      "\\(-5\\)",
      "\\(3\\)",
      "\\(5\\)"
    ],
    "ans": "\\(5\\)",
    "reason": "\\(|A|=ad-bc=(-2)(-1)-(-3)(1)=2--3=5\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}2&2\\\\2&2\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(5\\)",
      "\\(0\\)",
      "\\(-2\\)",
      "\\(1\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "\\(|A|=ad-bc=(2)(2)-(2)(2)=4-4=0\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}1&0&0\\\\0&2&0\\\\0&0&3\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(6\\)",
      "\\(5\\)",
      "\\(7\\)",
      "\\(9\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(1\\times2\\times3=6\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}2&0&0\\\\0&3&0\\\\0&0&4\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(23\\)",
      "\\(24\\)",
      "\\(25\\)",
      "\\(9\\)"
    ],
    "ans": "\\(24\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(2\\times3\\times4=24\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}1&0&0\\\\0&5&0\\\\0&0&2\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(9\\)",
      "\\(10\\)",
      "\\(8\\)",
      "\\(11\\)"
    ],
    "ans": "\\(10\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(1\\times5\\times2=10\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}3&0&0\\\\0&3&0\\\\0&0&3\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(26\\)",
      "\\(28\\)",
      "\\(9\\)",
      "\\(27\\)"
    ],
    "ans": "\\(27\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(3\\times3\\times3=27\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}2&0&0\\\\0&1&0\\\\0&0&5\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(8\\)",
      "\\(10\\)",
      "\\(11\\)",
      "\\(9\\)"
    ],
    "ans": "\\(10\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(2\\times1\\times5=10\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}4&0&0\\\\0&2&0\\\\0&0&1\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(11\\)",
      "\\(8\\)",
      "\\(7\\)",
      "\\(9\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(4\\times2\\times1=8\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}5&0&0\\\\0&5&0\\\\0&0&2\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(12\\)",
      "\\(49\\)",
      "\\(50\\)",
      "\\(51\\)"
    ],
    "ans": "\\(50\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(5\\times5\\times2=50\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&7\\end{bmatrix}\\), then \\(|A|=\\):",
    "options": [
      "\\(8\\)",
      "\\(6\\)",
      "\\(9\\)",
      "\\(7\\)"
    ],
    "ans": "\\(7\\)",
    "reason": "For a diagonal matrix, \\(|A|\\) is the product of the diagonal entries: \\(1\\times1\\times7=7\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=2\\), then \\(|3A|=\\):",
    "options": [
      "\\(25\\)",
      "\\(18\\)",
      "\\(6\\)",
      "\\(5\\)"
    ],
    "ans": "\\(18\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|3A|=3^{2}\\times2=9\\times2=18\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=3\\), then \\(|4A|=\\):",
    "options": [
      "\\(12\\)",
      "\\(55\\)",
      "\\(7\\)",
      "\\(48\\)"
    ],
    "ans": "\\(48\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|4A|=4^{2}\\times3=16\\times3=48\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 3 with \\(|A|=2\\), then \\(|2A|=\\):",
    "options": [
      "\\(23\\)",
      "\\(8\\)",
      "\\(16\\)",
      "\\(4\\)"
    ],
    "ans": "\\(16\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=3\\), so \\(|2A|=2^{3}\\times2=8\\times2=16\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 3 with \\(|A|=3\\), then \\(|3A|=\\):",
    "options": [
      "\\(81\\)",
      "\\(6\\)",
      "\\(9\\)",
      "\\(27\\)"
    ],
    "ans": "\\(81\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=3\\), so \\(|3A|=3^{3}\\times3=27\\times3=81\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=2\\), then \\(|5A|=\\):",
    "options": [
      "\\(10\\)",
      "\\(7\\)",
      "\\(50\\)",
      "\\(57\\)"
    ],
    "ans": "\\(50\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|5A|=5^{2}\\times2=25\\times2=50\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=4\\), then \\(|2A|=\\):",
    "options": [
      "\\(23\\)",
      "\\(16\\)",
      "\\(8\\)",
      "\\(6\\)"
    ],
    "ans": "\\(16\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|2A|=2^{2}\\times4=4\\times4=16\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 3 with \\(|A|=2\\), then \\(|4A|=\\):",
    "options": [
      "\\(32\\)",
      "\\(128\\)",
      "\\(8\\)",
      "\\(6\\)"
    ],
    "ans": "\\(128\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=3\\), so \\(|4A|=4^{3}\\times2=64\\times2=128\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 3 with \\(|A|=3\\), then \\(|2A|=\\):",
    "options": [
      "\\(6\\)",
      "\\(5\\)",
      "\\(24\\)",
      "\\(12\\)"
    ],
    "ans": "\\(24\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=3\\), so \\(|2A|=2^{3}\\times3=8\\times3=24\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=5\\), then \\(|2A|=\\):",
    "options": [
      "\\(27\\)",
      "\\(20\\)",
      "\\(7\\)",
      "\\(10\\)"
    ],
    "ans": "\\(20\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|2A|=2^{2}\\times5=4\\times5=20\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=2\\), then \\(|6A|=\\):",
    "options": [
      "\\(8\\)",
      "\\(12\\)",
      "\\(79\\)",
      "\\(72\\)"
    ],
    "ans": "\\(72\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|6A|=6^{2}\\times2=36\\times2=72\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=3\\), then \\(|5A|=\\):",
    "options": [
      "\\(15\\)",
      "\\(8\\)",
      "\\(75\\)",
      "\\(82\\)"
    ],
    "ans": "\\(75\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|5A|=5^{2}\\times3=25\\times3=75\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix of order 2 with \\(|A|=4\\), then \\(|3A|=\\):",
    "options": [
      "\\(12\\)",
      "\\(36\\)",
      "\\(7\\)",
      "\\(43\\)"
    ],
    "ans": "\\(36\\)",
    "reason": "For an \\(n\\times n\\) matrix, \\(|kA|=k^n|A|\\). Here \\(n=2\\), so \\(|3A|=3^{2}\\times4=9\\times4=36\\)."
  },
  {
    "q": "If \\(A\\) and \\(B\\) are square matrices of the same order with \\(|A|=3\\) and \\(|B|=2\\), then \\(|AB|=\\):",
    "options": [
      "\\(6\\)",
      "\\(9\\)",
      "\\(1\\)",
      "\\(5\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "For square matrices of the same order, \\(|AB|=|A|\\,|B|=3\\times2=6\\)."
  },
  {
    "q": "If \\(A\\) is a non-singular matrix with \\(|A|=4\\), then \\(|A^{-1}|=\\):",
    "options": [
      "\\(\\dfrac{1}{16}\\)",
      "\\(-4\\)",
      "\\(4\\)",
      "\\(\\dfrac{1}{4}\\)"
    ],
    "ans": "\\(\\dfrac{1}{4}\\)",
    "reason": "For a non-singular matrix, \\(|A^{-1}|=\\dfrac{1}{|A|}=\\dfrac{1}{4}\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix with \\(|A|=5\\), then \\(|A^{t}|=\\):",
    "options": [
      "\\(\\dfrac1{5}\\)",
      "\\(25\\)",
      "\\(5\\)",
      "\\(-5\\)"
    ],
    "ans": "\\(5\\)",
    "reason": "A matrix and its transpose always have equal determinants: \\(|A^{t}|=|A|=5\\)."
  },
  {
    "q": "If \\(A\\) and \\(B\\) are square matrices of the same order with \\(|A|=2\\) and \\(|B|=4\\), then \\(|AB|=\\):",
    "options": [
      "\\(6\\)",
      "\\(-2\\)",
      "\\(8\\)",
      "\\(11\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "For square matrices of the same order, \\(|AB|=|A|\\,|B|=2\\times4=8\\)."
  },
  {
    "q": "If \\(A\\) is a non-singular matrix with \\(|A|=6\\), then \\(|A^{-1}|=\\):",
    "options": [
      "\\(-6\\)",
      "\\(\\dfrac{1}{6}\\)",
      "\\(\\dfrac{1}{36}\\)",
      "\\(6\\)"
    ],
    "ans": "\\(\\dfrac{1}{6}\\)",
    "reason": "For a non-singular matrix, \\(|A^{-1}|=\\dfrac{1}{|A|}=\\dfrac{1}{6}\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix with \\(|A|=7\\), then \\(|A^{t}|=\\):",
    "options": [
      "\\(-7\\)",
      "\\(\\dfrac1{7}\\)",
      "\\(49\\)",
      "\\(7\\)"
    ],
    "ans": "\\(7\\)",
    "reason": "A matrix and its transpose always have equal determinants: \\(|A^{t}|=|A|=7\\)."
  },
  {
    "q": "If \\(A\\) and \\(B\\) are square matrices of the same order with \\(|A|=8\\) and \\(|B|=1\\), then \\(|AB|=\\):",
    "options": [
      "\\(11\\)",
      "\\(8\\)",
      "\\(9\\)",
      "\\(7\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "For square matrices of the same order, \\(|AB|=|A|\\,|B|=8\\times1=8\\)."
  },
  {
    "q": "If \\(A\\) is a non-singular matrix with \\(|A|=2\\), then \\(|A^{-1}|=\\):",
    "options": [
      "\\(\\dfrac{1}{2}\\)",
      "\\(\\dfrac{1}{4}\\)",
      "\\(2\\)",
      "\\(-2\\)"
    ],
    "ans": "\\(\\dfrac{1}{2}\\)",
    "reason": "For a non-singular matrix, \\(|A^{-1}|=\\dfrac{1}{|A|}=\\dfrac{1}{2}\\)."
  },
  {
    "q": "If \\(A\\) is a square matrix with \\(|A|=3\\), then \\(|A^{t}|=\\):",
    "options": [
      "\\(-3\\)",
      "\\(\\dfrac1{3}\\)",
      "\\(9\\)",
      "\\(3\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "A matrix and its transpose always have equal determinants: \\(|A^{t}|=|A|=3\\)."
  },
  {
    "q": "If \\(A\\) and \\(B\\) are square matrices of the same order with \\(|A|=5\\) and \\(|B|=2\\), then \\(|AB|=\\):",
    "options": [
      "\\(3\\)",
      "\\(10\\)",
      "\\(13\\)",
      "\\(7\\)"
    ],
    "ans": "\\(10\\)",
    "reason": "For square matrices of the same order, \\(|AB|=|A|\\,|B|=5\\times2=10\\)."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}1&2\\\\2&3\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Scalar}\\)",
      "\\(\\text{Skew-symmetric}\\)",
      "\\(\\text{Identity}\\)",
      "\\(\\text{Symmetric}\\)"
    ],
    "ans": "\\(\\text{Symmetric}\\)",
    "reason": "Since the off-diagonal entries are equal (\\(b=c=2\\)), \\(A=A^{t}\\), so \\(A\\) is symmetric."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}0&2\\\\-2&0\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Skew-symmetric}\\)",
      "\\(\\text{Symmetric}\\)",
      "\\(\\text{Scalar}\\)",
      "\\(\\text{Identity}\\)"
    ],
    "ans": "\\(\\text{Skew-symmetric}\\)",
    "reason": "The diagonal entries are \\(0\\) and the off-diagonal entries are negatives of each other (\\(2\\) and \\(-2\\)), so \\(A^{t}=-A\\): \\(A\\) is skew-symmetric."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}5&-1\\\\-1&4\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Symmetric}\\)",
      "\\(\\text{Scalar}\\)",
      "\\(\\text{Identity}\\)",
      "\\(\\text{Skew-symmetric}\\)"
    ],
    "ans": "\\(\\text{Symmetric}\\)",
    "reason": "Since the off-diagonal entries are equal (\\(b=c=-1\\)), \\(A=A^{t}\\), so \\(A\\) is symmetric."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}0&-3\\\\3&0\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Identity}\\)",
      "\\(\\text{Skew-symmetric}\\)",
      "\\(\\text{Scalar}\\)",
      "\\(\\text{Symmetric}\\)"
    ],
    "ans": "\\(\\text{Skew-symmetric}\\)",
    "reason": "The diagonal entries are \\(0\\) and the off-diagonal entries are negatives of each other (\\(-3\\) and \\(3\\)), so \\(A^{t}=-A\\): \\(A\\) is skew-symmetric."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}2&7\\\\7&9\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Identity}\\)",
      "\\(\\text{Symmetric}\\)",
      "\\(\\text{Scalar}\\)",
      "\\(\\text{Skew-symmetric}\\)"
    ],
    "ans": "\\(\\text{Symmetric}\\)",
    "reason": "Since the off-diagonal entries are equal (\\(b=c=7\\)), \\(A=A^{t}\\), so \\(A\\) is symmetric."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}0&4\\\\-4&0\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Scalar}\\)",
      "\\(\\text{Skew-symmetric}\\)",
      "\\(\\text{Identity}\\)",
      "\\(\\text{Symmetric}\\)"
    ],
    "ans": "\\(\\text{Skew-symmetric}\\)",
    "reason": "The diagonal entries are \\(0\\) and the off-diagonal entries are negatives of each other (\\(4\\) and \\(-4\\)), so \\(A^{t}=-A\\): \\(A\\) is skew-symmetric."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}1&0\\\\0&6\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Scalar}\\)",
      "\\(\\text{Symmetric}\\)",
      "\\(\\text{Identity}\\)",
      "\\(\\text{Skew-symmetric}\\)"
    ],
    "ans": "\\(\\text{Symmetric}\\)",
    "reason": "Since the off-diagonal entries are equal (\\(b=c=0\\)), \\(A=A^{t}\\), so \\(A\\) is symmetric."
  },
  {
    "q": "The matrix \\(A=\\begin{bmatrix}0&1\\\\-1&0\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\text{Identity}\\)",
      "\\(\\text{Skew-symmetric}\\)",
      "\\(\\text{Symmetric}\\)",
      "\\(\\text{Scalar}\\)"
    ],
    "ans": "\\(\\text{Skew-symmetric}\\)",
    "reason": "The diagonal entries are \\(0\\) and the off-diagonal entries are negatives of each other (\\(1\\) and \\(-1\\)), so \\(A^{t}=-A\\): \\(A\\) is skew-symmetric."
  },
  {
    "q": "For any square matrix \\(A\\) of order \\(n\\), \\(A\\cdot\\operatorname{adj}(A)\\) equals:",
    "options": [
      "\\(I\\)",
      "\\(A\\)",
      "\\(|A|\\,I\\)",
      "\\(0\\)"
    ],
    "ans": "\\(|A|\\,I\\)",
    "reason": "This is a standard adjoint identity: for any square matrix \\(A\\), \\(A\\cdot\\operatorname{adj}(A)=|A|\\,I\\) (and likewise \\(\\operatorname{adj}(A)\\cdot A=|A|\\,I\\))."
  },
  {
    "q": "The inverse of a matrix \\(A\\) is given by \\(A^{-1}=\\):",
    "options": [
      "\\(\\operatorname{adj}(A)\\)",
      "\\(|A|\\operatorname{adj}(A)\\)",
      "\\(\\dfrac{1}{|A|}A\\)",
      "\\(\\dfrac{1}{|A|}\\operatorname{adj}(A)\\)"
    ],
    "ans": "\\(\\dfrac{1}{|A|}\\operatorname{adj}(A)\\)",
    "reason": "The inverse formula is \\(A^{-1}=\\dfrac{1}{|A|}\\operatorname{adj}(A)\\), which follows directly from \\(A\\cdot\\operatorname{adj}(A)=|A|I\\)."
  },
  {
    "q": "A square matrix \\(A\\) is invertible if and only if:",
    "options": [
      "\\(|A|\\ne 0\\)",
      "\\(A\\text{ is symmetric}\\)",
      "\\(A=A^{t}\\)",
      "\\(|A|=0\\)"
    ],
    "ans": "\\(|A|\\ne 0\\)",
    "reason": "A square matrix has an inverse exactly when it is non-singular, i.e. \\(|A|\\ne0\\); if \\(|A|=0\\), \\(A^{-1}\\) would require dividing by zero in the inverse formula."
  },
  {
    "q": "If \\(|A|=0\\), the matrix \\(A\\) is called:",
    "options": [
      "\\(\\text{Singular}\\)",
      "\\(\\text{Identity}\\)",
      "\\(\\text{Non-singular}\\)",
      "\\(\\text{Symmetric}\\)"
    ],
    "ans": "\\(\\text{Singular}\\)",
    "reason": "By definition, a square matrix with \\(|A|=0\\) is called singular (non-invertible)."
  },
  {
    "q": "For a non-singular matrix \\(A\\), \\((A^{-1})^{-1}\\) equals:",
    "options": [
      "\\(A^{-1}\\)",
      "\\(A\\)",
      "\\(A^{t}\\)",
      "\\(I\\)"
    ],
    "ans": "\\(A\\)",
    "reason": "Taking the inverse of \\(A^{-1}\\) undoes the operation and returns the original matrix: \\((A^{-1})^{-1}=A\\)."
  },
  {
    "q": "For a non-singular matrix \\(A\\), \\((A^{t})^{-1}\\) equals:",
    "options": [
      "\\(A^{-1}\\)",
      "\\(A^{t}\\)",
      "\\(A\\)",
      "\\((A^{-1})^{t}\\)"
    ],
    "ans": "\\((A^{-1})^{t}\\)",
    "reason": "Transpose and inverse commute: \\((A^{t})^{-1}=(A^{-1})^{t}\\), a standard property of invertible matrices."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}2&0\\\\0&3\\end{bmatrix}\\), then \\(A^{-1}=\\):",
    "options": [
      "\\(\\begin{bmatrix}3&0\\\\0&2\\end{bmatrix}\\)",
      "\\(\\begin{bmatrix}1/2&0\\\\0&1/3\\end{bmatrix}\\)",
      "\\(\\begin{bmatrix}-2&0\\\\0&-3\\end{bmatrix}\\)",
      "\\(\\begin{bmatrix}1/3&0\\\\0&1/2\\end{bmatrix}\\)"
    ],
    "ans": "\\(\\begin{bmatrix}1/2&0\\\\0&1/3\\end{bmatrix}\\)",
    "reason": "For a diagonal matrix, the inverse is found by simply inverting each diagonal entry: \\(A^{-1}=\\begin{bmatrix}1/2&0\\\\0&1/3\\end{bmatrix}\\)."
  },
  {
    "q": "The adjoint of \\(A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\) is:",
    "options": [
      "\\(\\begin{bmatrix}d&b\\\\c&a\\end{bmatrix}\\)",
      "\\(\\begin{bmatrix}-d&b\\\\c&-a\\end{bmatrix}\\)",
      "\\(\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}\\)",
      "\\(\\begin{bmatrix}a&-b\\\\-c&d\\end{bmatrix}\\)"
    ],
    "ans": "\\(\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}\\)",
    "reason": "For \\(A=\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\), the adjoint swaps the diagonal entries and negates the off-diagonal ones: \\(\\operatorname{adj}(A)=\\begin{bmatrix}d&-b\\\\-c&a\\end{bmatrix}\\)."
  },
  {
    "q": "In Cramer's Rule, for the system \\(AX=B\\) with \\(|A|\\ne0\\), \\(x\\) is given by:",
    "options": [
      "\\(|A_x|\\cdot|A|\\)",
      "\\(\\dfrac{|A|}{|A_x|}\\)",
      "\\(|A_x|+|A|\\)",
      "\\(\\dfrac{|A_x|}{|A|}\\)"
    ],
    "ans": "\\(\\dfrac{|A_x|}{|A|}\\)",
    "reason": "Cramer's Rule gives each variable as a ratio of determinants: \\(x=\\dfrac{|A_x|}{|A|}\\), where \\(A_x\\) replaces the \\(x\\)-column of \\(A\\) with \\(B\\)."
  },
  {
    "q": "Cramer's Rule fails to give a unique solution when:",
    "options": [
      "\\(|A_x|=0\\)",
      "\\(|A|=0\\)",
      "\\(|A|\\ne0\\)",
      "\\(A\\text{ is symmetric}\\)"
    ],
    "ans": "\\(|A|=0\\)",
    "reason": "Cramer's Rule divides by \\(|A|\\), so it breaks down (no unique solution) when \\(|A|=0\\)."
  },
  {
    "q": "A non-homogeneous system \\(AX=B\\) has a unique solution if:",
    "options": [
      "\\(|A|=0\\)",
      "\\(B=0\\)",
      "\\(A\\text{ is singular}\\)",
      "\\(|A|\\ne0\\)"
    ],
    "ans": "\\(|A|\\ne0\\)",
    "reason": "A non-homogeneous system \\(AX=B\\) has a unique solution precisely when \\(A\\) is invertible, i.e. \\(|A|\\ne0\\)."
  },
  {
    "q": "A homogeneous system \\(AX=0\\) always has at least the:",
    "options": [
      "\\(\\text{infinite non-trivial solutions}\\)",
      "\\(\\text{trivial solution}\\)",
      "\\(\\text{no solution}\\)",
      "\\(\\text{two solutions}\\)"
    ],
    "ans": "\\(\\text{trivial solution}\\)",
    "reason": "Substituting \\(X=0\\) always satisfies \\(AX=0\\), so every homogeneous system has at least this trivial solution."
  },
  {
    "q": "A homogeneous system \\(AX=0\\) has non-trivial solutions if and only if:",
    "options": [
      "\\(A\\text{ is non-singular}\\)",
      "\\(B\\ne0\\)",
      "\\(|A|\\ne0\\)",
      "\\(|A|=0\\)"
    ],
    "ans": "\\(|A|=0\\)",
    "reason": "A homogeneous system has solutions other than \\(X=0\\) exactly when \\(A\\) is singular, i.e. \\(|A|=0\\) (otherwise \\(X=A^{-1}0=0\\) is forced)."
  },
  {
    "q": "A system of linear equations is said to be consistent if it has:",
    "options": [
      "\\(\\text{exactly two solutions}\\)",
      "\\(\\text{at least one solution}\\)",
      "\\(\\text{no solution}\\)",
      "\\(\\text{only the trivial solution}\\)"
    ],
    "ans": "\\(\\text{at least one solution}\\)",
    "reason": "A system is called consistent if it has at least one solution (whether unique or infinitely many); no solution at all makes it inconsistent."
  },
  {
    "q": "If a system of linear equations has no solution, it is called:",
    "options": [
      "\\(\\text{homogeneous}\\)",
      "\\(\\text{consistent}\\)",
      "\\(\\text{trivial}\\)",
      "\\(\\text{inconsistent}\\)"
    ],
    "ans": "\\(\\text{inconsistent}\\)",
    "reason": "By definition, a system with no solution at all is called inconsistent."
  },
  {
    "q": "A system of 3 equations in 3 unknowns has a unique solution if:",
    "options": [
      "\\(\\operatorname{rank}(A)=3\\)",
      "\\(\\operatorname{rank}(A)<3\\)",
      "\\(\\operatorname{rank}(A)=0\\)",
      "\\(|A|=0\\)"
    ],
    "ans": "\\(\\operatorname{rank}(A)=3\\)",
    "reason": "For \\(n\\) equations in \\(n\\) unknowns, a unique solution requires the coefficient matrix to have full rank, i.e. \\(\\operatorname{rank}(A)=n=3\\)."
  },
  {
    "q": "If the rank of the coefficient matrix equals the rank of the augmented matrix, the system is:",
    "options": [
      "\\(\\text{inconsistent}\\)",
      "\\(\\text{homogeneous}\\)",
      "\\(\\text{trivial}\\)",
      "\\(\\text{consistent}\\)"
    ],
    "ans": "\\(\\text{consistent}\\)",
    "reason": "By the Rouché–Capelli criterion, the system is consistent precisely when \\(\\operatorname{rank}(A)=\\operatorname{rank}([A|B])\\)."
  },
  {
    "q": "The rank of a zero matrix is always:",
    "options": [
      "\\(\\text{undefined}\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(\\infty\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "Every entry of a zero matrix is \\(0\\), so it has no non-zero rows at all — its rank is \\(0\\)."
  },
  {
    "q": "The number of non-zero rows in the row-echelon form of a matrix is its:",
    "options": [
      "\\(\\text{order}\\)",
      "\\(\\text{trace}\\)",
      "\\(\\text{rank}\\)",
      "\\(\\text{determinant}\\)"
    ],
    "ans": "\\(\\text{rank}\\)",
    "reason": "Rank is defined as the number of non-zero rows once the matrix is reduced to row-echelon form."
  },
  {
    "q": "In a matrix in reduced row-echelon form, the leading entry of each non-zero row is:",
    "options": [
      "\\(\\text{negative}\\)",
      "\\(\\text{any number}\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "In reduced row-echelon form, every leading (pivot) entry is normalized to \\(1\\)."
  },
  {
    "q": "Gauss-Jordan elimination transforms an augmented matrix into:",
    "options": [
      "\\(\\text{a diagonal matrix}\\)",
      "\\(\\text{an orthogonal matrix}\\)",
      "\\(\\text{a symmetric matrix}\\)",
      "\\(\\text{reduced row-echelon form}\\)"
    ],
    "ans": "\\(\\text{reduced row-echelon form}\\)",
    "reason": "Gauss-Jordan elimination continues past echelon form to clear entries above each pivot too, producing the fully reduced row-echelon form."
  },
  {
    "q": "Gaussian elimination transforms the coefficient matrix into:",
    "options": [
      "\\(\\text{a symmetric form}\\)",
      "\\(\\text{upper triangular / echelon form}\\)",
      "\\(\\text{identity form}\\)",
      "\\(\\text{reduced echelon form}\\)"
    ],
    "ans": "\\(\\text{upper triangular / echelon form}\\)",
    "reason": "Gaussian elimination stops once the coefficient matrix is in (upper) triangular / echelon form, ready for back-substitution."
  },
  {
    "q": "A square matrix \\(A\\) is called idempotent if:",
    "options": [
      "\\(A^k=0\\)",
      "\\(A^2=I\\)",
      "\\(A^2=A\\)",
      "\\(A^t=A\\)"
    ],
    "ans": "\\(A^2=A\\)",
    "reason": "By definition, a matrix is idempotent if applying it twice gives the same result as once: \\(A^2=A\\)."
  },
  {
    "q": "A square matrix \\(A\\) is called involutory if:",
    "options": [
      "\\(A^k=0\\)",
      "\\(A^t=-A\\)",
      "\\(A^2=A\\)",
      "\\(A^2=I\\)"
    ],
    "ans": "\\(A^2=I\\)",
    "reason": "By definition, a matrix is involutory if it is its own inverse: \\(A^2=I\\)."
  },
  {
    "q": "A square matrix \\(A\\) is called nilpotent if, for some positive integer \\(k\\):",
    "options": [
      "\\(A^k=A\\)",
      "\\(A^k=O\\)",
      "\\(A^k=I\\)",
      "\\(A^k=-A\\)"
    ],
    "ans": "\\(A^k=O\\)",
    "reason": "By definition, a matrix is nilpotent if some power of it vanishes entirely: \\(A^k=O\\) for some positive integer \\(k\\)."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}3&0\\\\0&3\\end{bmatrix}\\), then \\((A^{t})^{t}\\) equals:",
    "options": [
      "\\(A^{t}\\)",
      "\\(-A\\)",
      "\\(A^{-1}\\)",
      "\\(A\\)"
    ],
    "ans": "\\(A\\)",
    "reason": "Transposing twice returns the original matrix: \\((A^{t})^{t}=A\\), true for any matrix (this example is symmetric too, but the identity holds regardless)."
  },
  {
    "q": "If \\(A^2=I\\) for a square matrix \\(A\\), then \\(A^{-1}\\) equals:",
    "options": [
      "\\(I\\)",
      "\\(-A\\)",
      "\\(A^{t}\\)",
      "\\(A\\)"
    ],
    "ans": "\\(A\\)",
    "reason": "If \\(A^2=I\\), multiplying both sides by \\(A^{-1}\\) gives \\(A=A^{-1}\\) — \\(A\\) is its own inverse."
  },
  {
    "q": "If \\(A=\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}\\), then \\(A^2\\) equals:",
    "options": [
      "\\(\\text{the null matrix}\\)",
      "\\(-A\\)",
      "\\(I\\)",
      "\\(A\\)"
    ],
    "ans": "\\(\\text{the null matrix}\\)",
    "reason": "Multiplying \\(\\begin{bmatrix}0&1\\\\0&0\\end{bmatrix}\\) by itself: the only nonzero product term lands in a position that cancels out, giving the null (zero) matrix — this matrix is nilpotent with \\(k=2\\)."
  },
  {
    "q": "A square matrix \\(A\\) is orthogonal if:",
    "options": [
      "\\(A^2=A\\)",
      "\\(A A^{t}=I\\)",
      "\\(A^{t}=-A\\)",
      "\\(A=\\bar A\\)"
    ],
    "ans": "\\(A A^{t}=I\\)",
    "reason": "By definition, a matrix is orthogonal if its transpose equals its inverse, equivalently \\(AA^{t}=I\\)."
  },
  {
    "q": "If \\(A\\) is an orthogonal matrix, then \\(|A|=\\):",
    "options": [
      "\\(\\pm2\\)",
      "\\(1\\text{ only}\\)",
      "\\(0\\)",
      "\\(\\pm1\\)"
    ],
    "ans": "\\(\\pm1\\)",
    "reason": "Taking determinants of \\(AA^{t}=I\\) gives \\(|A|\\cdot|A^t|=|A|^2=|I|=1\\), so \\(|A|=\\pm1\\)."
  },
  {
    "q": "A square matrix \\(A\\) is Hermitian if:",
    "options": [
      "\\((\\bar A)^{t}=-A\\)",
      "\\(A^{t}=A\\)",
      "\\((\\bar A)^{t}=A\\)",
      "\\(A^{-1}=A\\)"
    ],
    "ans": "\\((\\bar A)^{t}=A\\)",
    "reason": "By definition, a matrix is Hermitian if it equals its own conjugate transpose: \\((\\bar A)^{t}=A\\)."
  },
  {
    "q": "A square matrix \\(A\\) is Skew-Hermitian if:",
    "options": [
      "\\(A=\\bar A\\)",
      "\\(A^{t}=-A\\)",
      "\\((\\bar A)^{t}=A\\)",
      "\\((\\bar A)^{t}=-A\\)"
    ],
    "ans": "\\((\\bar A)^{t}=-A\\)",
    "reason": "By definition, a matrix is Skew-Hermitian if its conjugate transpose is its negative: \\((\\bar A)^{t}=-A\\)."
  },
  {
    "q": "The diagonal elements of a Hermitian matrix are always:",
    "options": [
      "\\(\\text{complex}\\)",
      "\\(\\text{purely imaginary}\\)",
      "\\(\\text{real numbers}\\)",
      "\\(\\text{zero}\\)"
    ],
    "ans": "\\(\\text{real numbers}\\)",
    "reason": "For a Hermitian matrix, each diagonal entry must equal its own complex conjugate (\\(a_{ii}=\\overline{a_{ii}}\\)), which forces it to be a real number."
  },
  {
    "q": "The diagonal elements of a Skew-Hermitian matrix are either zero or:",
    "options": [
      "\\(\\text{real}\\)",
      "\\(\\text{positive}\\)",
      "\\(\\text{purely imaginary}\\)",
      "\\(\\text{negative}\\)"
    ],
    "ans": "\\(\\text{purely imaginary}\\)",
    "reason": "For a Skew-Hermitian matrix, each diagonal entry satisfies \\(a_{ii}=-\\overline{a_{ii}}\\), which forces it to be \\(0\\) or purely imaginary."
  },
  {
    "q": "The trace of \\(A=\\begin{bmatrix}3&4\\\\1&2\\end{bmatrix}\\) is:",
    "options": [
      "\\(5\\)",
      "\\(1\\)",
      "\\(7\\)",
      "\\(10\\)"
    ],
    "ans": "\\(5\\)",
    "reason": "The trace is the sum of the diagonal entries: \\(3+2=5\\)."
  },
  {
    "q": "The trace of \\(A=\\begin{bmatrix}5&1\\\\2&7\\end{bmatrix}\\) is:",
    "options": [
      "\\(-2\\)",
      "\\(15\\)",
      "\\(12\\)",
      "\\(14\\)"
    ],
    "ans": "\\(12\\)",
    "reason": "The trace is the sum of the diagonal entries: \\(5+7=12\\)."
  },
  {
    "q": "The trace of \\(A=\\begin{bmatrix}2&3\\\\4&6\\end{bmatrix}\\) is:",
    "options": [
      "\\(8\\)",
      "\\(15\\)",
      "\\(-4\\)",
      "\\(10\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "The trace is the sum of the diagonal entries: \\(2+6=8\\)."
  },
  {
    "q": "The trace of \\(A=\\begin{bmatrix}1&8\\\\3&2\\end{bmatrix}\\) is:",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(-1\\)",
      "\\(14\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "The trace is the sum of the diagonal entries: \\(1+2=3\\)."
  },
  {
    "q": "The trace of \\(A=\\begin{bmatrix}9&2\\\\1&4\\end{bmatrix}\\) is:",
    "options": [
      "\\(5\\)",
      "\\(15\\)",
      "\\(13\\)",
      "\\(16\\)"
    ],
    "ans": "\\(13\\)",
    "reason": "The trace is the sum of the diagonal entries: \\(9+4=13\\)."
  },
  {
    "q": "The trace of \\(A=\\begin{bmatrix}6&3\\\\5&5\\end{bmatrix}\\) is:",
    "options": [
      "\\(11\\)",
      "\\(13\\)",
      "\\(1\\)",
      "\\(19\\)"
    ],
    "ans": "\\(11\\)",
    "reason": "The trace is the sum of the diagonal entries: \\(6+5=11\\)."
  },
  {
    "q": "Interchanging two rows of a determinant changes its:",
    "options": [
      "\\(\\text{nothing}\\)",
      "\\(\\text{magnitude}\\)",
      "\\(\\text{sign}\\)",
      "\\(\\text{value to }0\\)"
    ],
    "ans": "\\(\\text{sign}\\)",
    "reason": "Swapping any two rows of a determinant flips its sign (a standard row-operation property)."
  },
  {
    "q": "Multiplying a single row of a determinant by a non-zero scalar \\(k\\):",
    "options": [
      "\\(\\text{leaves the value unchanged}\\)",
      "\\(\\text{multiplies the value by }k\\)",
      "\\(\\text{multiplies the value by }k^2\\)",
      "\\(\\text{makes the determinant zero}\\)"
    ],
    "ans": "\\(\\text{multiplies the value by }k\\)",
    "reason": "Scaling one row by a non-zero constant \\(k\\) scales the whole determinant by that same \\(k\\)."
  },
  {
    "q": "If two rows of a determinant are identical, the value of the determinant is:",
    "options": [
      "\\(-1\\)",
      "\\(\\text{undefined}\\)",
      "\\(1\\)",
      "\\(0\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "A determinant with two identical rows is always \\(0\\) (swapping those rows changes nothing, yet must flip the sign — forcing the value to be \\(0\\))."
  },
  {
    "q": "Adding a multiple of one row to another row:",
    "options": [
      "\\(\\text{makes it zero}\\)",
      "\\(\\text{doubles the determinant}\\)",
      "\\(\\text{changes its sign}\\)",
      "\\(\\text{leaves the determinant unchanged}\\)"
    ],
    "ans": "\\(\\text{leaves the determinant unchanged}\\)",
    "reason": "Adding a multiple of one row to another is an elementary row operation that never changes the determinant's value."
  },
  {
    "q": "Transposing a matrix (rows to columns):",
    "options": [
      "\\(\\text{doubles the determinant}\\)",
      "\\(\\text{changes its sign}\\)",
      "\\(\\text{leaves the determinant unchanged}\\)",
      "\\(\\text{makes it zero}\\)"
    ],
    "ans": "\\(\\text{leaves the determinant unchanged}\\)",
    "reason": "Since \\(|A^{t}|=|A|\\) always, transposing a matrix (turning rows into columns) leaves its determinant unchanged."
  },
  {
    "q": "If all entries of one row of a matrix are zero, its determinant is:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(\\text{undefined}\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "A row of all zeros makes every term in the determinant's expansion along that row zero, so the determinant is \\(0\\)."
  },
  {
    "q": "A matrix in which all off-diagonal entries are zero is called a:",
    "options": [
      "\\(\\text{diagonal matrix}\\)",
      "\\(\\text{scalar matrix}\\)",
      "\\(\\text{null matrix}\\)",
      "\\(\\text{identity matrix}\\)"
    ],
    "ans": "\\(\\text{diagonal matrix}\\)",
    "reason": "By definition, a matrix with every off-diagonal entry equal to zero is a diagonal matrix."
  },
  {
    "q": "A diagonal matrix in which all diagonal entries are equal is called a:",
    "options": [
      "\\(\\text{identity matrix}\\)",
      "\\(\\text{row matrix}\\)",
      "\\(\\text{scalar matrix}\\)",
      "\\(\\text{null matrix}\\)"
    ],
    "ans": "\\(\\text{scalar matrix}\\)",
    "reason": "A diagonal matrix whose diagonal entries are all the same constant is called a scalar matrix."
  },
  {
    "q": "If all entries below the main diagonal of a square matrix are zero, it is called:",
    "options": [
      "\\(\\text{lower triangular}\\)",
      "\\(\\text{upper triangular}\\)",
      "\\(\\text{symmetric}\\)",
      "\\(\\text{diagonal}\\)"
    ],
    "ans": "\\(\\text{upper triangular}\\)",
    "reason": "If everything below the main diagonal is zero, all the nonzero entries sit on or above the diagonal — this is an upper triangular matrix."
  },
  {
    "q": "If all entries above the main diagonal of a square matrix are zero, it is called:",
    "options": [
      "\\(\\text{lower triangular}\\)",
      "\\(\\text{upper triangular}\\)",
      "\\(\\text{symmetric}\\)",
      "\\(\\text{scalar}\\)"
    ],
    "ans": "\\(\\text{lower triangular}\\)",
    "reason": "If everything above the main diagonal is zero, all the nonzero entries sit on or below the diagonal — this is a lower triangular matrix."
  },
  {
    "q": "The determinant of a triangular matrix equals the product of its:",
    "options": [
      "\\(\\text{first row entries}\\)",
      "\\(\\text{diagonal entries}\\)",
      "\\(\\text{last column entries}\\)",
      "\\(\\text{off-diagonal entries}\\)"
    ],
    "ans": "\\(\\text{diagonal entries}\\)",
    "reason": "Expanding a triangular determinant along the row/column that has only one nonzero entry, repeatedly, leaves just the product of the diagonal entries."
  },
  {
    "q": "The determinant of a skew-symmetric matrix of odd order is always:",
    "options": [
      "\\(0\\)",
      "\\(-1\\)",
      "\\(\\text{non-zero}\\)",
      "\\(1\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "A skew-symmetric matrix of odd order always has determinant \\(0\\), since \\(|A|=|A^t|=|-A|=(-1)^n|A|\\); for odd \\(n\\) this forces \\(|A|=-|A|\\), so \\(|A|=0\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Equation</th></tr><tr><td>x + 2y = 5</td></tr><tr><td>3x − y = 1</td></tr></table></div>For the coefficient matrix \\(A\\) of this system, \\(|A|\\) equals:",
    "options": [
      "\\(-7\\)",
      "\\(7\\)",
      "\\(-5\\)",
      "\\(1\\)"
    ],
    "ans": "\\(-7\\)",
    "reason": "The system is \\(x+2y=5,\\ 3x-y=1\\), so \\(A=\\begin{bmatrix}1&2\\\\3&-1\\end{bmatrix}\\) and \\(|A|=(1)(-1)-(2)(3)=-1-6=-7\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Equation</th></tr><tr><td>x + 2y = 5</td></tr><tr><td>3x − y = 1</td></tr></table></div>Replacing the first column of \\(A\\) with the constants gives \\(A_x\\). \\(|A_x|\\) equals:",
    "options": [
      "\\(-7\\)",
      "\\(-14\\)",
      "\\(7\\)",
      "\\(5\\)"
    ],
    "ans": "\\(-7\\)",
    "reason": "Replacing column 1 with the constants \\([5,1]\\): \\(A_x=\\begin{bmatrix}5&2\\\\1&-1\\end{bmatrix}\\), so \\(|A_x|=(5)(-1)-(2)(1)=-5-2=-7\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Equation</th></tr><tr><td>x + 2y = 5</td></tr><tr><td>3x − y = 1</td></tr></table></div>Using Cramer's Rule, the value of \\(x\\) is:",
    "options": [
      "1",
      "2",
      "\\(-1\\)",
      "0"
    ],
    "ans": "1",
    "reason": "\\(x=\\dfrac{|A_x|}{|A|}=\\dfrac{-7}{-7}=1\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Equation</th></tr><tr><td>x + 2y = 5</td></tr><tr><td>3x − y = 1</td></tr></table></div>Using Cramer's Rule, the value of \\(y\\) is:",
    "options": [
      "2",
      "1",
      "\\(-2\\)",
      "3"
    ],
    "ans": "2",
    "reason": "Replacing column 2 with the constants gives \\(A_y=\\begin{bmatrix}1&5\\\\3&1\\end{bmatrix}\\), \\(|A_y|=1-15=-14\\), so \\(y=\\dfrac{|A_y|}{|A|}=\\dfrac{-14}{-7}=2\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th></th><th>Math</th><th>Physics</th></tr><tr><td>Ali</td><td>80</td><td>70</td></tr><tr><td>Sara</td><td>90</td><td>85</td></tr></table></div>Writing this table as a matrix \\(M\\), the trace of \\(M\\) is:",
    "options": [
      "165",
      "155",
      "70",
      "80"
    ],
    "ans": "165",
    "reason": "As a matrix \\(M=\\begin{bmatrix}80&70\\\\90&85\\end{bmatrix}\\), the trace is the sum of the diagonal entries: \\(80+85=165\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th></th><th>Math</th><th>Physics</th></tr><tr><td>Ali</td><td>80</td><td>70</td></tr><tr><td>Sara</td><td>90</td><td>85</td></tr></table></div>The determinant \\(|M|\\) is:",
    "options": [
      "500",
      "450",
      "550",
      "600"
    ],
    "ans": "500",
    "reason": "\\(|M|=(80)(85)-(70)(90)=6800-6300=500\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th></th><th>Math</th><th>Physics</th></tr><tr><td>Ali</td><td>80</td><td>70</td></tr><tr><td>Sara</td><td>90</td><td>85</td></tr></table></div>Based on \\(|M|\\), the matrix \\(M\\) is:",
    "options": [
      "\\text{non-singular}",
      "\\text{singular}",
      "\\text{symmetric}",
      "\\text{identity}"
    ],
    "ans": "\\text{non-singular}",
    "reason": "Since \\(|M|=500\\ne0\\), \\(M\\) is non-singular."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th></th><th>Math</th><th>Physics</th></tr><tr><td>Ali</td><td>80</td><td>70</td></tr><tr><td>Sara</td><td>90</td><td>85</td></tr></table></div>The transpose \\(M^{t}\\) would represent students as:",
    "options": [
      "\\text{columns instead of rows}",
      "\\text{unchanged}",
      "\\text{diagonal entries}",
      "\\text{removed entirely}"
    ],
    "ans": "\\text{columns instead of rows}",
    "reason": "Transposing swaps rows and columns, so the students (originally rows) become the columns of \\(M^{t}\\)."
  }
];
  }
});
