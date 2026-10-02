// Class 10 Math — Chapter 3: Matrices and Determinants
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch3",
  label: "Chapter 3: Matrices and Determinants",
  order: 3,
  questions: function () {
    return [
    {
      q: "If \\(\\begin{pmatrix}5&amp;3\\\\2&amp;9\\end{pmatrix}^{t}=\\begin{pmatrix}5&amp;x/2\\\\3&amp;9\\end{pmatrix}\\), then \\(x=\\)",
      options: ["-4","6","-6","4"],
      ans: "4",
      reason: "The transpose swaps rows and columns: \\(\\begin{pmatrix}5&amp;2\\\\3&amp;9\\end{pmatrix}\\). Comparing entries, \\(\\tfrac x2=2\\Rightarrow x=4\\)."
    },
    {
      q: "If \\(I_3=\\begin{pmatrix}y&amp;0&amp;x\\\\0&amp;z&amp;0\\\\x&amp;0&amp;1\\end{pmatrix}\\) is the identity matrix, then:",
      options: ["\\(x=z=0\\)","\\(y=x=1\\)","\\(y=z=1,\\ x=0\\)","\\(x=z=1\\)"],
      ans: "\\(y=z=1,\\ x=0\\)",
      reason: "An identity matrix has 1 on the diagonal and 0 elsewhere, so \\(y=z=1\\) and \\(x=0\\)."
    },
    {
      q: "Additive inverse of the unit matrix of order 2 is:",
      options: ["\\(\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}\\)","\\(\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\)","\\(\\begin{pmatrix}-1&0\\\\0&-1\\end{pmatrix}\\)","\\(\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}-1&0\\\\0&-1\\end{pmatrix}\\)",
      reason: "The additive inverse of \\(I\\) is \\(-I=\\begin{pmatrix}-1&amp;0\\\\0&amp;-1\\end{pmatrix}\\)."
    },
    {
      q: "Multiplicative inverse of a null matrix of order 2 is:",
      options: ["\\(\\begin{pmatrix}0\\\\0\\end{pmatrix}\\)","\\([0\\ \\ 0]\\)","Impossible (does not exist)","\\(\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\)"],
      ans: "Impossible (does not exist)",
      reason: "A null matrix has determinant 0, so it has no multiplicative inverse."
    },
    {
      q: "A matrix \\(A\\) is symmetric if:",
      options: ["\\(A^{t}\\neq A\\)","\\(A^{t}=-A\\)","\\(A^{t}\\neq -A\\)","\\(A=A^{t}\\)"],
      ans: "\\(A=A^{t}\\)",
      reason: "A matrix is symmetric when it equals its transpose: \\(A=A^t\\)."
    },
    {
      q: "If \\(A=\\begin{pmatrix}1\\\\2\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}0\\\\0\\end{pmatrix}\\), then \\(A+B=\\)",
      options: ["\\(\\begin{pmatrix}1\\\\2\\end{pmatrix}\\)","\\([1\\ \\ 2]\\)","\\(\\begin{pmatrix}1&0\\\\2&0\\end{pmatrix}\\)","Impossible"],
      ans: "\\(\\begin{pmatrix}1\\\\2\\end{pmatrix}\\)",
      reason: "Both matrices are \\(2\\times1\\), so they add entry by entry: \\(\\begin{pmatrix}1\\\\2\\end{pmatrix}\\)."
    },
    {
      q: "Order of matrix \\(A\\) is \\(1\\times2\\) and order of matrix \\(B\\) is \\(2\\times3\\), then order of \\(AB\\) is:",
      options: ["\\(3\\times2\\)","\\(1\\times3\\)","\\(3\\times1\\)","\\(2\\times2\\)"],
      ans: "\\(1\\times3\\)",
      reason: "\\((1\\times2)(2\\times3)\\) gives a matrix of order \\(1\\times3\\)."
    },
    {
      q: "If \\(AB=B\\) (where \\(B\\neq O\\)), then \\(A=\\)",
      options: ["\\(B\\)","\\(B^{-1}\\)","\\(A^{-1}\\)","\\(I\\)"],
      ans: "\\(I\\)",
      reason: "Since \\(AB=B\\) with \\(B\\ne O\\), \\(A\\) must act like the identity: \\(A=I\\)."
    },
    {
      q: "\\(\\begin{pmatrix}15\\\\25\\end{pmatrix}\\times[3\\ \\ 2]=\\)",
      options: ["\\(\\begin{pmatrix}45\\\\50\\end{pmatrix}\\)","\\(\\begin{pmatrix}45&50\\end{pmatrix}\\)","\\(\\begin{pmatrix}45&30\\\\75&50\\end{pmatrix}\\)","\\([95]\\)"],
      ans: "\\(\\begin{pmatrix}45&30\\\\75&50\\end{pmatrix}\\)",
      reason: "\\(\\begin{pmatrix}15\\\\25\\end{pmatrix}[3\\ \\ 2]=\\begin{pmatrix}45&amp;30\\\\75&amp;50\\end{pmatrix}\\)."
    },
    {
      q: "If \\(|T|=-1\\), then \\(T^{-1}=\\)",
      options: ["\\(-\\,\\text{adj}\\,T\\)","\\(-T\\)","\\(\\text{adj}\\,T\\)","\\(T\\)"],
      ans: "\\(-\\,\\text{adj}\\,T\\)",
      reason: "\\(T^{-1}=\\dfrac{1}{|T|}\\text{adj}\\,T=\\dfrac1{-1}\\text{adj}\\,T=-\\text{adj}\\,T\\)."
    },
    {
      q: "The matrix equation for the system \\(x+y=144\\) and \\(2y=13\\) is:",
      options: ["\\(\\begin{pmatrix}0&1\\\\2&0\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}144\\\\13\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}144\\\\13\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}144\\\\13\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}144\\\\13\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}1&1\\\\0&2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}144\\\\13\\end{pmatrix}\\)",
      reason: "Row 1 is \\(1x+1y=144\\) and row 2 is \\(0x+2y=13\\), so the coefficient matrix is \\(\\begin{pmatrix}1&amp;1\\\\0&amp;2\\end{pmatrix}\\)."
    },
    {
      q: "The matrix of coefficients for \\(x-y=3\\) is:",
      options: ["\\(\\begin{pmatrix}x\\\\y\\end{pmatrix}\\)","\\([1\\ \\ {-1}]\\)","\\([3]\\)","\\(\\begin{pmatrix}1\\\\-1\\end{pmatrix}\\)"],
      ans: "\\([1\\ \\ {-1}]\\)",
      reason: "The coefficients of \\(x-y=3\\) are \\(1\\) and \\(-1\\), written as the row matrix \\([1\\ \\ -1]\\)."
    },
    {
      q: "\\([1\\ \\ 2]\\begin{pmatrix}3\\\\4\\end{pmatrix}=\\)",
      options: ["Impossible","\\([3\\ \\ 6]\\)","\\(\\begin{pmatrix}3\\\\6\\end{pmatrix}\\)","\\([11]\\)"],
      ans: "\\([11]\\)",
      reason: "\\([1\\ \\ 2]\\begin{pmatrix}3\\\\4\\end{pmatrix}=[1\\cdot3+2\\cdot4]=[11]\\)."
    },
    {
      q: "If \\(A\\) and \\(B\\) are conformable for the product \\(AB\\), then \\((AB)^{t}=\\)",
      options: ["\\((BA)^{t}\\)","\\(AB\\)","\\(B^{t}A^{t}\\)","\\(A^{t}B^{t}\\)"],
      ans: "\\(B^{t}A^{t}\\)",
      reason: "The transpose of a product reverses the order: \\((AB)^t=B^tA^t\\)."
    },
    {
      q: "If \\(\\begin{pmatrix}-3&amp;5\\\\-3&amp;x-1\\end{pmatrix}\\) is a singular matrix, then \\(x=\\)",
      options: ["-6","4","6","-4"],
      ans: "6",
      reason: "Singular means \\(|A|=0\\): \\(-3(x-1)-5(-3)=-3x+18=0\\Rightarrow x=6\\)."
    },
    {
      q: "If \\(\\text{adj}\\,A=\\begin{pmatrix}5&amp;6\\\\2&amp;3\\end{pmatrix}\\), then \\(|A|=\\)",
      options: ["30","3","-3","27"],
      ans: "3",
      reason: "For a \\(2\\times2\\) matrix \\(|\\text{adj}\\,A|=|A|\\). \\(|\\text{adj}\\,A|=15-12=3\\), so \\(|A|=3\\)."
    },
    {
      q: "If \\(P=\\begin{pmatrix}5&amp;-1\\\\2&amp;-4\\end{pmatrix}\\), then \\(P^{-1}=\\)",
      options: ["\\(\\begin{pmatrix}2/9&-1/18\\\\1/9&-5/18\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&-1\\\\2&-4\\end{pmatrix}\\)","\\(\\begin{pmatrix}-2/9&1/18\\\\-1/9&5/18\\end{pmatrix}\\)","\\(\\begin{pmatrix}-4&1\\\\-2&5\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}2/9&-1/18\\\\1/9&-5/18\\end{pmatrix}\\)",
      reason: "\\(|P|=-20+2=-18\\). \\(P^{-1}=\\dfrac{1}{-18}\\begin{pmatrix}-4&amp;1\\\\-2&amp;5\\end{pmatrix}=\\begin{pmatrix}2/9&amp;-1/18\\\\1/9&amp;-5/18\\end{pmatrix}\\)."
    },
    {
      q: "For the system \\(5x-4=y\\), \\(2y+8=10x\\), the matrix inversion method:",
      options: ["Gives the unique solution \\(x=4,\\ y=0\\)","Fails, since the coefficient matrix is singular (equations are dependent)","Gives \\(x=0,\\ y=-4\\)","Gives \\(x=1,\\ y=1\\)"],
      ans: "Fails, since the coefficient matrix is singular (equations are dependent)",
      reason: "The equations are \\(5x-y=4\\) and \\(10x-2y=8\\); the second is twice the first, so \\(|A|=0\\) and the inverse does not exist."
    },
    {
      q: "Applying Cramer's rule to \\(5x+2y=19\\) and \\(10x+4y=38\\):",
      options: ["Gives \\(x=2,\\ y=3\\)","Gives \\(x=3,\\ y=2\\)","Is not possible, since \\(\\Delta=0\\) (infinitely many solutions)","Gives \\(x=19,\\ y=38\\)"],
      ans: "Is not possible, since \\(\\Delta=0\\) (infinitely many solutions)",
      reason: "\\(\\Delta=5(4)-2(10)=0\\), so Cramer's rule cannot be applied (the equations are dependent)."
    },
    {
      q: "Two home industries report: 6 workers/80 items/Rs.\\,20{,}000 and 12 workers/160 items/Rs.\\,40{,}000 (the second row exactly double the first). The labour and material costs:",
      options: ["Cannot be uniquely determined, since the equations are dependent (proportional)","Are Rs.\\,1000 and Rs.\\,175 respectively","Are Rs.\\,2000 and Rs.\\,100 respectively","Are Rs.\\,3000 and Rs.\\,62.50 respectively"],
      ans: "Cannot be uniquely determined, since the equations are dependent (proportional)",
      reason: "The second equation is exactly twice the first, so the coefficient determinant is 0 and there is no unique solution."
    },
    {
      q: "The order of a matrix with 3 rows and 2 columns is:",
      options: ["\\(3\\times2\\)","\\(2\\times3\\)","\\(2\\times2\\)","\\(3\\times3\\)"],
      ans: "\\(3\\times2\\)",
      reason: "3 rows and 2 columns give order \\(3\\times2\\)."
    },
    {
      q: "A matrix having only one row is called a:",
      options: ["Null matrix","Row matrix","Column matrix","Square matrix"],
      ans: "Row matrix",
      reason: "A matrix with a single row is a row matrix."
    },
    {
      q: "A matrix having only one column is called a:",
      options: ["Rectangular matrix","Row matrix","Column matrix","Square matrix"],
      ans: "Column matrix",
      reason: "A matrix with a single column is a column matrix."
    },
    {
      q: "A matrix in which the number of rows equals the number of columns is called a:",
      options: ["Row matrix","Rectangular matrix","Column matrix","Square matrix"],
      ans: "Square matrix",
      reason: "Equal numbers of rows and columns make a square matrix."
    },
    {
      q: "A matrix in which all elements are zero is called a:",
      options: ["Identity matrix","Diagonal matrix","Unit matrix","Null (zero) matrix"],
      ans: "Null (zero) matrix",
      reason: "A matrix with all elements zero is a null (zero) matrix."
    },
    {
      q: "The order of matrix \\(\\begin{pmatrix}1&amp;2&amp;3\\\\4&amp;5&amp;6\\end{pmatrix}\\) is:",
      options: ["\\(2\\times2\\)","\\(3\\times3\\)","\\(3\\times2\\)","\\(2\\times3\\)"],
      ans: "\\(2\\times3\\)",
      reason: "It has 2 rows and 3 columns, so order \\(2\\times3\\)."
    },
    {
      q: "If a matrix has order \\(m\\times n\\) with \\(m=n\\), it is called:",
      options: ["A null matrix","A square matrix of order \\(n\\)","A row matrix","A rectangular matrix"],
      ans: "A square matrix of order \\(n\\)",
      reason: "When \\(m=n\\) the matrix is a square matrix of order \\(n\\)."
    },
    {
      q: "Two matrices are equal if they have the same order and:",
      options: ["Same determinant","Same number of rows only","Same trace","Corresponding elements are equal"],
      ans: "Corresponding elements are equal",
      reason: "Equal matrices have the same order and equal corresponding elements."
    },
    {
      q: "A diagonal matrix is a square matrix in which:",
      options: ["All off-diagonal elements are zero","All diagonal elements are zero","All elements are zero","All elements are equal"],
      ans: "All off-diagonal elements are zero",
      reason: "A diagonal matrix is square with all off-diagonal elements equal to zero."
    },
    {
      q: "The matrix \\([5]\\) of order \\(1\\times1\\) is an example of a:",
      options: ["Null matrix","Column matrix only","Row matrix only","Square matrix"],
      ans: "Square matrix",
      reason: "A \\(1\\times1\\) matrix has equal numbers of rows and columns, so it is square."
    },
    {
      q: "If \\(A=\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}\\), then \\(3A=\\)",
      options: ["\\(\\begin{pmatrix}5&6\\\\4&7\\end{pmatrix}\\)","\\(\\begin{pmatrix}2&3\\\\1&4\\end{pmatrix}\\)","\\(\\begin{pmatrix}6&9\\\\3&12\\end{pmatrix}\\)","\\(\\begin{pmatrix}6&3\\\\1&12\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}6&9\\\\3&12\\end{pmatrix}\\)",
      reason: "Multiply every element by 3: \\(\\begin{pmatrix}6&amp;9\\\\3&amp;12\\end{pmatrix}\\)."
    },
    {
      q: "\\(\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}+\\begin{pmatrix}5&amp;6\\\\7&amp;8\\end{pmatrix}=\\)",
      options: ["\\(\\begin{pmatrix}5&12\\\\21&32\\end{pmatrix}\\)","\\(\\begin{pmatrix}4&4\\\\4&4\\end{pmatrix}\\)","\\(\\begin{pmatrix}6&8\\\\10&12\\end{pmatrix}\\)","\\(\\begin{pmatrix}6&8\\\\10&11\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}6&8\\\\10&12\\end{pmatrix}\\)",
      reason: "Add corresponding entries: \\(\\begin{pmatrix}6&amp;8\\\\10&amp;12\\end{pmatrix}\\)."
    },
    {
      q: "\\(\\begin{pmatrix}5&amp;2\\\\6&amp;3\\end{pmatrix}-\\begin{pmatrix}1&amp;2\\\\3&amp;4\\end{pmatrix}=\\)",
      options: ["\\(\\begin{pmatrix}-4&0\\\\3&-1\\end{pmatrix}\\)","\\(\\begin{pmatrix}4&0\\\\3&-1\\end{pmatrix}\\)","\\(\\begin{pmatrix}4&0\\\\-3&1\\end{pmatrix}\\)","\\(\\begin{pmatrix}6&4\\\\9&7\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}4&0\\\\3&-1\\end{pmatrix}\\)",
      reason: "Subtract corresponding entries: \\(\\begin{pmatrix}4&amp;0\\\\3&amp;-1\\end{pmatrix}\\)."
    },
    {
      q: "Two matrices can be added only if they have:",
      options: ["The same number of rows only","The same determinant","The same order","Equal elements"],
      ans: "The same order",
      reason: "Matrices can be added only when they have the same order."
    },
    {
      q: "The additive inverse of \\(A=\\begin{pmatrix}5&amp;0&amp;3\\\\7&amp;-9&amp;-1\\\\-8&amp;5&amp;6\\end{pmatrix}\\) is:",
      options: ["\\(\\begin{pmatrix}-5&0&-3\\\\-7&9&1\\\\8&-5&-6\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&0&3\\\\7&-9&-1\\\\-8&5&6\\end{pmatrix}\\)","\\(A\\) itself","The null matrix"],
      ans: "\\(\\begin{pmatrix}-5&0&-3\\\\-7&9&1\\\\8&-5&-6\\end{pmatrix}\\)",
      reason: "The additive inverse changes the sign of every element."
    },
    {
      q: "\\(A+(-A)=\\)",
      options: ["\\(A\\)","The identity matrix","\\(2A\\)","The null (zero) matrix"],
      ans: "The null (zero) matrix",
      reason: "\\(A+(-A)\\) gives zero in every place: the null matrix."
    },
    {
      q: "If \\(A=\\begin{pmatrix}3\\\\-1\\end{pmatrix}\\) and \\(B=\\begin{pmatrix}2\\\\5\\end{pmatrix}\\), then \\(A+B=\\)",
      options: ["\\(\\begin{pmatrix}5\\\\4\\end{pmatrix}\\)","Impossible","\\(\\begin{pmatrix}1\\\\-6\\end{pmatrix}\\)","\\([5\\ \\ 4]\\)"],
      ans: "\\(\\begin{pmatrix}5\\\\4\\end{pmatrix}\\)",
      reason: "Both are \\(2\\times1\\), so \\(A+B=\\begin{pmatrix}5\\\\4\\end{pmatrix}\\)."
    },
    {
      q: "\\(-2\\begin{pmatrix}3&amp;-1\\\\0&amp;4\\end{pmatrix}=\\)",
      options: ["\\(\\begin{pmatrix}6&-2\\\\0&8\\end{pmatrix}\\)","\\(\\begin{pmatrix}-6&-2\\\\0&-8\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&-3\\\\-2&2\\end{pmatrix}\\)","\\(\\begin{pmatrix}-6&2\\\\0&-8\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}-6&2\\\\0&-8\\end{pmatrix}\\)",
      reason: "Multiply each entry by \\(-2\\): \\(\\begin{pmatrix}-6&amp;2\\\\0&amp;-8\\end{pmatrix}\\)."
    },
    {
      q: "Matrix addition is:",
      options: ["Neither commutative nor associative","Commutative and associative","Associative but not commutative","Commutative but not associative"],
      ans: "Commutative and associative",
      reason: "Matrix addition is commutative and associative."
    },
    {
      q: "If \\(2A-B=C\\), then \\(A\\) equals:",
      options: ["\\(2C+B\\)","\\(C-\\dfrac{B}{2}\\)","\\(B-\\dfrac{C}{2}\\)","\\(\\dfrac{B+C}{2}\\)"],
      ans: "\\(\\dfrac{B+C}{2}\\)",
      reason: "\\(2A=B+C\\Rightarrow A=\\dfrac{B+C}{2}\\)."
    },
    {
      q: "If order of \\(A\\) is \\(2\\times3\\) and order of \\(B\\) is \\(3\\times4\\), then order of \\(AB\\) is:",
      options: ["\\(2\\times3\\)","\\(2\\times4\\)","\\(4\\times2\\)","\\(3\\times3\\)"],
      ans: "\\(2\\times4\\)",
      reason: "\\((2\\times3)(3\\times4)\\) gives order \\(2\\times4\\)."
    },
    {
      q: "Two matrices \\(A\\) and \\(B\\) are conformable for the product \\(AB\\) if:",
      options: ["Both have the same order","Both are square matrices","Number of rows of \\(A\\) = number of rows of \\(B\\)","Number of columns of \\(A\\) = number of rows of \\(B\\)"],
      ans: "Number of columns of \\(A\\) = number of rows of \\(B\\)",
      reason: "\\(AB\\) is defined when the columns of \\(A\\) equal the rows of \\(B\\)."
    },
    {
      q: "\\([2\\ \\ 1]\\begin{pmatrix}5\\\\3\\end{pmatrix}=\\)",
      options: ["\\([7\\ \\ 4]\\)","\\([5]\\)","Impossible","\\([13]\\)"],
      ans: "\\([13]\\)",
      reason: "\\([2\\ \\ 1]\\begin{pmatrix}5\\\\3\\end{pmatrix}=[10+3]=[13]\\)."
    },
    {
      q: "\\(\\begin{pmatrix}10\\\\20\\end{pmatrix}\\times[4\\ \\ 1]=\\)",
      options: ["\\([100]\\)","\\(\\begin{pmatrix}40&10\\\\80&20\\end{pmatrix}\\)","\\(\\begin{pmatrix}40&20\\end{pmatrix}\\)","\\(\\begin{pmatrix}40\\\\20\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}40&10\\\\80&20\\end{pmatrix}\\)",
      reason: "\\(\\begin{pmatrix}10\\\\20\\end{pmatrix}[4\\ \\ 1]=\\begin{pmatrix}40&amp;10\\\\80&amp;20\\end{pmatrix}\\)."
    },
    {
      q: "If order of \\(A\\) is \\(1\\times2\\) and order of \\(B\\) is \\(2\\times3\\), order of \\(AB\\) is:",
      options: ["\\(1\\times3\\)","\\(3\\times1\\)","\\(3\\times2\\)","\\(2\\times2\\)"],
      ans: "\\(1\\times3\\)",
      reason: "\\((1\\times2)(2\\times3)\\) gives order \\(1\\times3\\)."
    },
    {
      q: "In general, for matrices \\(A\\) and \\(B\\):",
      options: ["\\(AB\\) is always a null matrix","\\(AB\\neq BA\\) (multiplication is not commutative)","\\(AB=BA\\) always","\\(AB=A+B\\)"],
      ans: "\\(AB\\neq BA\\) (multiplication is not commutative)",
      reason: "Matrix multiplication is not commutative in general: \\(AB\\ne BA\\)."
    },
    {
      q: "\\(\\begin{pmatrix}1&amp;0\\\\0&amp;1\\end{pmatrix}\\begin{pmatrix}5&amp;3\\\\2&amp;9\\end{pmatrix}=\\)",
      options: ["\\(\\begin{pmatrix}5&3\\\\2&9\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&2\\\\3&9\\end{pmatrix}\\)","\\(\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}5&3\\\\2&9\\end{pmatrix}\\)",
      reason: "Multiplying by the identity leaves a matrix unchanged."
    },
    {
      q: "If \\(AB=B\\), where \\(B\\neq O\\), then \\(A=\\)",
      options: ["\\(A^{-1}\\)","\\(B\\)","\\(I\\) (the identity matrix)","\\(B^{-1}\\)"],
      ans: "\\(I\\) (the identity matrix)",
      reason: "\\(AB=B\\) with \\(B\\ne O\\) means \\(A\\) is the identity matrix \\(I\\)."
    },
    {
      q: "For a matrix \\(A\\) and identity matrix \\(I\\) (conformable), \\(AI=IA=\\)",
      options: ["\\(I\\)","The null matrix","\\(A^2\\)","\\(A\\)"],
      ans: "\\(A\\)",
      reason: "\\(AI=IA=A\\)."
    },
    {
      q: "\\(\\begin{pmatrix}2&amp;0\\\\0&amp;2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\)",
      options: ["\\(\\begin{pmatrix}2x\\\\2y\\end{pmatrix}\\)","\\(\\begin{pmatrix}x\\\\y\\end{pmatrix}\\)","\\([2x+2y]\\)","\\([2x\\ \\ 2y]\\)"],
      ans: "\\(\\begin{pmatrix}2x\\\\2y\\end{pmatrix}\\)",
      reason: "\\(\\begin{pmatrix}2&amp;0\\\\0&amp;2\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}2x\\\\2y\\end{pmatrix}\\)."
    },
    {
      q: "The transpose of \\(\\begin{pmatrix}5&amp;3\\\\2&amp;9\\end{pmatrix}\\) is:",
      options: ["\\(\\begin{pmatrix}2&5\\\\9&3\\end{pmatrix}\\)","\\(\\begin{pmatrix}9&2\\\\3&5\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&2\\\\3&9\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&3\\\\2&9\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}5&2\\\\3&9\\end{pmatrix}\\)",
      reason: "Swap rows and columns: \\(\\begin{pmatrix}5&amp;2\\\\3&amp;9\\end{pmatrix}\\)."
    },
    {
      q: "\\((A^{t})^{t}=\\)",
      options: ["\\(A^{-1}\\)","\\(A^{t}\\)","\\(A\\)","\\(-A\\)"],
      ans: "\\(A\\)",
      reason: "Transposing twice returns the original matrix: \\((A^t)^t=A\\)."
    },
    {
      q: "\\((A+B)^{t}=\\)",
      options: ["\\(A^{t}+B^{t}\\)","\\(B^{t}+A\\)","\\(A^{t}-B^{t}\\)","\\(A+B^{t}\\)"],
      ans: "\\(A^{t}+B^{t}\\)",
      reason: "The transpose of a sum is the sum of the transposes: \\((A+B)^t=A^t+B^t\\)."
    },
    {
      q: "If \\(A,B\\) are conformable for the product \\(AB\\), then \\((AB)^{t}=\\)",
      options: ["\\(B^{t}A^{t}\\)","\\(AB\\)","\\(A^{t}B^{t}\\)","\\(BA\\)"],
      ans: "\\(B^{t}A^{t}\\)",
      reason: "The transpose of a product reverses the order: \\((AB)^t=B^tA^t\\)."
    },
    {
      q: "A matrix \\(B\\) satisfying \\(B^{t}=B\\) is called:",
      options: ["Singular","Symmetric","Diagonal only","Skew-symmetric"],
      ans: "Symmetric",
      reason: "A matrix with \\(B^t=B\\) is called symmetric."
    },
    {
      q: "A matrix \\(A\\) is skew-symmetric if:",
      options: ["\\(A^{t}=O\\)","\\(A^{t}=I\\)","\\(A^{t}=A\\)","\\(A^{t}=-A\\)"],
      ans: "\\(A^{t}=-A\\)",
      reason: "A matrix with \\(A^t=-A\\) is skew-symmetric."
    },
    {
      q: "The additive inverse of the unit (identity) matrix of order 2 is:",
      options: ["\\(\\begin{pmatrix}0&0\\\\0&0\\end{pmatrix}\\)","\\(\\begin{pmatrix}-1&0\\\\0&-1\\end{pmatrix}\\)","\\(\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&0\\\\0&1\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}-1&0\\\\0&-1\\end{pmatrix}\\)",
      reason: "The additive inverse of \\(I_2\\) is \\(-I_2=\\begin{pmatrix}-1&amp;0\\\\0&amp;-1\\end{pmatrix}\\)."
    },
    {
      q: "The multiplicative inverse of a null matrix of order 2:",
      options: ["Does not exist (impossible)","Is the identity matrix","Is \\(-I\\)","Is the null matrix itself"],
      ans: "Does not exist (impossible)",
      reason: "A null matrix has determinant 0, so its multiplicative inverse does not exist."
    },
    {
      q: "If \\(p,q,r,s\\) make \\(I_2=\\begin{pmatrix}p&amp;q\\\\r&amp;s\\end{pmatrix}\\) the identity matrix, then:",
      options: ["\\(p=r=0,\\ q=s=1\\)","\\(p=s=1,\\ q=r=0\\)","\\(p=q=r=s=1\\)","\\(p=q=1,\\ r=s=0\\)"],
      ans: "\\(p=s=1,\\ q=r=0\\)",
      reason: "The identity matrix has 1s on the main diagonal and 0s elsewhere: \\(p=s=1,\\ q=r=0\\)."
    },
    {
      q: "Multiplicative identity matrices are possible only for:",
      options: ["Column matrices","Square matrices","Row matrices","All matrices"],
      ans: "Square matrices",
      reason: "Multiplicative identity matrices exist only for square matrices."
    },
    {
      q: "If \\(I\\) is the multiplicative identity of square matrix \\(S\\), then:",
      options: ["\\(IS\\neq SI\\)","\\(IS=I\\)","\\(IS=SI=S\\)","\\(IS=O\\)"],
      ans: "\\(IS=SI=S\\)",
      reason: "The identity satisfies \\(IS=SI=S\\)."
    },
    {
      q: "A diagonal element of a matrix \\(A=[a_{ij}]\\) is an element for which:",
      options: ["\\(i=j\\)","\\(i=1\\)","\\(i\\neq j\\)","\\(j=1\\)"],
      ans: "\\(i=j\\)",
      reason: "A diagonal element \\(a_{ij}\\) has row number equal to column number: \\(i=j\\)."
    },
    {
      q: "The determinant of \\(\\begin{pmatrix}5&amp;6\\\\2&amp;3\\end{pmatrix}\\) is:",
      options: ["-3","27","30","3"],
      ans: "3",
      reason: "\\(\\begin{vmatrix}5&amp;6\\\\2&amp;3\\end{vmatrix}=15-12=3\\)."
    },
    {
      q: "The determinant of a matrix is:",
      options: ["A number, not a matrix","Always zero","Always positive","Always a matrix"],
      ans: "A number, not a matrix",
      reason: "A determinant is a single number, not a matrix."
    },
    {
      q: "\\(\\begin{vmatrix}-4&amp;8\\\\1&amp;-2\\end{vmatrix}=\\)",
      options: ["0","-16","16","8"],
      ans: "0",
      reason: "\\((-4)(-2)-8(1)=8-8=0\\)."
    },
    {
      q: "Every square matrix has a determinant that is:",
      options: ["Always an integer","Zero or non-zero","Always negative","Always positive"],
      ans: "Zero or non-zero",
      reason: "A determinant can be zero or non-zero (positive, negative or zero)."
    },
    {
      q: "If \\(A\\) and \\(B\\) are square matrices, then \\(|AB|=\\)",
      options: ["\\(\\dfrac{|A|}{|B|}\\)","\\(|A|-|B|\\)","\\(|A|+|B|\\)","\\(|A|\\times|B|\\)"],
      ans: "\\(|A|\\times|B|\\)",
      reason: "For square matrices \\(|AB|=|A|\\times|B|\\)."
    },
    {
      q: "\\(\\begin{vmatrix}\\sqrt5&amp;\\sqrt4\\\\\\sqrt1&amp;-\\sqrt5\\end{vmatrix}=\\)",
      options: ["7","-7","3","-3"],
      ans: "-7",
      reason: "\\(\\sqrt5(-\\sqrt5)-\\sqrt4\\cdot\\sqrt1=-5-2=-7\\)."
    },
    {
      q: "A matrix which does not have a determinant is:",
      options: ["The null matrix","The identity matrix","A symmetric matrix","A non-square (rectangular) matrix"],
      ans: "A non-square (rectangular) matrix",
      reason: "Determinants exist only for square matrices, so a rectangular matrix has none."
    },
    {
      q: "The determinant of the identity matrix of order 2 is:",
      options: ["1","-1","2","0"],
      ans: "1",
      reason: "\\(\\begin{vmatrix}1&amp;0\\\\0&amp;1\\end{vmatrix}=1\\)."
    },
    {
      q: "The determinant of a matrix is written using:",
      options: ["Vertical bars instead of brackets","Curly braces","Square brackets","Parentheses"],
      ans: "Vertical bars instead of brackets",
      reason: "A determinant is written with vertical bars instead of brackets."
    },
    {
      q: "If \\(|A|=0\\), the matrix \\(A\\) is called:",
      options: ["Non-singular","Symmetric","Singular","Diagonal"],
      ans: "Singular",
      reason: "A matrix with \\(|A|=0\\) is singular."
    },
    {
      q: "A square matrix \\(A\\) is called non-singular if:",
      options: ["\\(|A|\\neq0\\)","\\(A=I\\)","\\(A=O\\)","\\(|A|=0\\)"],
      ans: "\\(|A|\\neq0\\)",
      reason: "A square matrix with \\(|A|\\ne0\\) is non-singular."
    },
    {
      q: "If \\(A=\\begin{pmatrix}5&amp;10\\\\3&amp;6\\end{pmatrix}\\), then \\(A\\) is:",
      options: ["An identity matrix","Symmetric","Non-singular","Singular"],
      ans: "Singular",
      reason: "\\(|A|=5\\cdot6-10\\cdot3=0\\), so \\(A\\) is singular."
    },
    {
      q: "If \\(\\begin{pmatrix}4&amp;-2\\\\x&amp;3\\end{pmatrix}\\) is a singular matrix, then \\(x=\\)",
      options: ["-4","4","6","-6"],
      ans: "-6",
      reason: "Singular means \\(|A|=0\\): \\(12-(-2)x=12+2x=0\\Rightarrow x=-6\\)."
    },
    {
      q: "The adjoint of \\(\\begin{pmatrix}a&amp;b\\\\c&amp;d\\end{pmatrix}\\) is:",
      options: ["\\(\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\)","\\(\\begin{pmatrix}d&b\\\\c&a\\end{pmatrix}\\)","\\(\\begin{pmatrix}-d&b\\\\c&-a\\end{pmatrix}\\)","\\(\\begin{pmatrix}a&-b\\\\-c&d\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}\\)",
      reason: "Interchange the main-diagonal elements and change the signs of the other two: \\(\\begin{pmatrix}d&amp;-b\\\\-c&amp;a\\end{pmatrix}\\)."
    },
    {
      q: "For a \\(2\\times2\\) matrix \\(A\\) with \\(\\text{adj}\\,A=\\begin{pmatrix}7&amp;2\\\\4&amp;3\\end{pmatrix}\\), \\(|A|=\\)",
      options: ["13","17","10","-13"],
      ans: "13",
      reason: "For a \\(2\\times2\\) matrix \\(|\\text{adj}\\,A|=|A|\\), and \\(7\\cdot3-2\\cdot4=13\\)."
    },
    {
      q: "For a \\(2\\times2\\) matrix \\(A\\), \\(|\\text{adj}\\,A|=\\)",
      options: ["\\(2|A|\\)","\\(|A|\\)","\\(\\dfrac1{|A|}\\)","\\(|A|^2\\)"],
      ans: "\\(|A|\\)",
      reason: "For a \\(2\\times2\\) matrix the adjoint has the same determinant: \\(|\\text{adj}\\,A|=|A|\\)."
    },
    {
      q: "The adjoint of \\(\\begin{pmatrix}5&amp;6\\\\2&amp;3\\end{pmatrix}\\) is:",
      options: ["\\(\\begin{pmatrix}5&-6\\\\-2&3\\end{pmatrix}\\)","\\(\\begin{pmatrix}3&-6\\\\-2&5\\end{pmatrix}\\)","\\(\\begin{pmatrix}-3&6\\\\2&-5\\end{pmatrix}\\)","\\(\\begin{pmatrix}3&6\\\\2&5\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}3&-6\\\\-2&5\\end{pmatrix}\\)",
      reason: "Interchange \\(5\\) and \\(3\\), and change the signs of \\(6\\) and \\(2\\): \\(\\begin{pmatrix}3&amp;-6\\\\-2&amp;5\\end{pmatrix}\\)."
    },
    {
      q: "The adjoint of a matrix of order 2 is obtained by:",
      options: ["Multiplying by \\(-1\\)","Interchanging primary diagonal elements and changing signs of secondary diagonal elements","Changing all signs","Interchanging rows and columns"],
      ans: "Interchanging primary diagonal elements and changing signs of secondary diagonal elements",
      reason: "Swap the main-diagonal elements and change the signs of the secondary-diagonal elements."
    },
    {
      q: "The formula for the inverse of a \\(2\\times2\\) matrix \\(A\\) is:",
      options: ["\\(A^{-1}=|A|\\,\\text{adj}\\,A\\)","\\(A^{-1}=\\text{adj}\\,A\\)","\\(A^{-1}=\\dfrac1{\\text{adj}\\,A}\\)","\\(A^{-1}=\\dfrac1{|A|}\\,\\text{adj}\\,A\\)"],
      ans: "\\(A^{-1}=\\dfrac1{|A|}\\,\\text{adj}\\,A\\)",
      reason: "\\(A^{-1}=\\dfrac1{|A|}\\text{adj}\\,A\\)."
    },
    {
      q: "The inverse of a matrix exists only if:",
      options: ["\\(A\\) is a row matrix","\\(|A|=0\\)","\\(|A|\\neq0\\)","\\(A\\) is a null matrix"],
      ans: "\\(|A|\\neq0\\)",
      reason: "The inverse exists only when \\(|A|\\ne0\\)."
    },
    {
      q: "If \\(|M|=2\\), then \\(M^{-1}=\\)",
      options: ["\\(-\\dfrac12\\,\\text{adj}\\,M\\)","\\(2\\,\\text{adj}\\,M\\)","\\(\\dfrac12\\,\\text{adj}\\,M\\)","\\(\\text{adj}\\,M\\)"],
      ans: "\\(\\dfrac12\\,\\text{adj}\\,M\\)",
      reason: "\\(M^{-1}=\\dfrac1{|M|}\\text{adj}\\,M=\\dfrac12\\text{adj}\\,M\\)."
    },
    {
      q: "If \\(A\\) is non-singular, then \\(AA^{-1}=\\)",
      options: ["\\(O\\)","\\(A^2\\)","\\(I\\)","\\(A\\)"],
      ans: "\\(I\\)",
      reason: "By definition \\(AA^{-1}=I\\)."
    },
    {
      q: "If \\(A,B\\) are non-singular matrices, then \\((AB)^{-1}=\\)",
      options: ["\\(A^{-1}+B^{-1}\\)","\\(B^{-1}A^{-1}\\)","\\(A^{-1}B^{-1}\\)","\\(AB\\)"],
      ans: "\\(B^{-1}A^{-1}\\)",
      reason: "The inverse of a product reverses the order: \\((AB)^{-1}=B^{-1}A^{-1}\\)."
    },
    {
      q: "The inverse of \\(\\begin{pmatrix}5&amp;2\\\\2&amp;1\\end{pmatrix}\\) is:",
      options: ["\\(\\begin{pmatrix}5&-2\\\\-2&1\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&2\\\\2&5\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&-2\\\\-2&5\\end{pmatrix}\\)","\\(\\begin{pmatrix}-1&2\\\\2&-5\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}1&-2\\\\-2&5\\end{pmatrix}\\)",
      reason: "\\(|A|=5-4=1\\), so \\(A^{-1}=\\text{adj}\\,A=\\begin{pmatrix}1&amp;-2\\\\-2&amp;5\\end{pmatrix}\\)."
    },
    {
      q: "A matrix that has no multiplicative inverse is called:",
      options: ["A symmetric matrix","A non-singular matrix","A singular matrix","An identity matrix"],
      ans: "A singular matrix",
      reason: "A matrix with no inverse is called singular."
    },
    {
      q: "If \\(A^{-1}\\) exists, then \\(A^{-1}A=\\)",
      options: ["\\(I\\)","\\(O\\)","\\(-I\\)","\\(A\\)"],
      ans: "\\(I\\)",
      reason: "By definition \\(A^{-1}A=I\\)."
    },
    {
      q: "The null matrix of order 2:",
      options: ["Has no multiplicative inverse","Always has an inverse","Has itself as inverse","Has the identity matrix as inverse"],
      ans: "Has no multiplicative inverse",
      reason: "The null matrix has \\(|A|=0\\), so it has no multiplicative inverse."
    },
    {
      q: "\\((A^{-1})^{-1}=\\)",
      options: ["\\(O\\)","\\(I\\)","\\(A^{-1}\\)","\\(A\\)"],
      ans: "\\(A\\)",
      reason: "The inverse of an inverse gives back the original: \\((A^{-1})^{-1}=A\\)."
    },
    {
      q: "The matrix equation for the system \\(5x+2y=9\\), \\(3x+10y=23\\) is:",
      options: ["\\([9\\ \\ 23]\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}5\\\\3\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&2\\\\3&10\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}23\\\\9\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&2\\\\3&10\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}9\\\\23\\end{pmatrix}\\)","\\(\\begin{pmatrix}5&3\\\\2&10\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}9\\\\23\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}5&2\\\\3&10\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}9\\\\23\\end{pmatrix}\\)",
      reason: "Coefficients form the matrix, constants form the right column: \\(\\begin{pmatrix}5&amp;2\\\\3&amp;10\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}9\\\\23\\end{pmatrix}\\)."
    },
    {
      q: "The matrix of coefficients for \\(2x+3y=7\\) is:",
      options: ["\\([7]\\)","\\([2\\ \\ 3]\\)","\\(\\begin{pmatrix}x\\\\y\\end{pmatrix}\\)","\\(\\begin{pmatrix}2\\\\3\\end{pmatrix}\\)"],
      ans: "\\([2\\ \\ 3]\\)",
      reason: "The coefficients of \\(2x+3y=7\\) form the row matrix \\([2\\ \\ 3]\\)."
    },
    {
      q: "In the matrix inversion method, if \\(AX=B\\), then \\(X=\\)",
      options: ["\\(A^{-1}B\\)","\\(AB^{-1}\\)","\\(BA^{-1}\\)","\\(A^{-1}+B\\)"],
      ans: "\\(A^{-1}B\\)",
      reason: "Multiply both sides of \\(AX=B\\) by \\(A^{-1}\\) on the left: \\(X=A^{-1}B\\)."
    },
    {
      q: "In Cramer's rule for \\(a_1x+b_1y=c_1,\\ a_2x+b_2y=c_2\\), \\(x=\\)",
      options: ["\\(\\dfrac{\\Delta}{\\Delta_x}\\)","\\(\\dfrac{\\Delta_x}{\\Delta}\\)","\\(\\Delta_x-\\Delta\\)","\\(\\Delta\\times\\Delta_x\\)"],
      ans: "\\(\\dfrac{\\Delta_x}{\\Delta}\\)",
      reason: "Cramer's rule gives \\(x=\\dfrac{\\Delta_x}{\\Delta}\\)."
    },
    {
      q: "In Cramer's rule, \\(\\Delta\\) represents:",
      options: ["The determinant with the \\(x\\)-column replaced by constants","The determinant with the \\(y\\)-column replaced by constants","The sum of all coefficients","The determinant of the coefficient matrix"],
      ans: "The determinant of the coefficient matrix",
      reason: "\\(\\Delta\\) is the determinant of the coefficient matrix."
    },
    {
      q: "For a system where one equation is exactly a scalar multiple of the other, the matrix inversion method:",
      options: ["Gives \\(x=0,\\ y=-4\\)","Gives \\(x=1,\\ y=1\\)","Gives the unique solution \\(x=4,\\ y=0\\)","Fails, since the coefficient matrix is singular (equations are dependent)"],
      ans: "Fails, since the coefficient matrix is singular (equations are dependent)",
      reason: "If one equation is a multiple of the other, \\(|A|=0\\), so \\(A^{-1}\\) does not exist and the method fails."
    },
    {
      q: "When applying Cramer's rule to a system where the second equation is exactly twice the first:",
      options: ["It gives \\(x=2,\\ y=3\\)","The result is not possible, since \\(\\Delta=0\\) (infinitely many solutions)","It gives \\(x=3,\\ y=2\\)","It gives \\(x=19,\\ y=38\\)"],
      ans: "The result is not possible, since \\(\\Delta=0\\) (infinitely many solutions)",
      reason: "If the second equation is twice the first, \\(\\Delta=0\\), so Cramer's rule cannot give a unique solution."
    },
    {
      q: "For a similar two-industry problem where every quantity in the second row is exactly double the first row's, the labour and material costs:",
      options: ["Are Rs.\\,2000 and Rs.\\,100 respectively","Cannot be uniquely determined, since the equations are dependent (proportional)","Are Rs.\\,1000 and Rs.\\,175 respectively","Are Rs.\\,3000 and Rs.\\,62.50 respectively"],
      ans: "Cannot be uniquely determined, since the equations are dependent (proportional)",
      reason: "If the second row is twice the first, the determinant of the coefficient matrix is 0, so the costs cannot be uniquely determined."
    },
    {
      q: "If \\(Q=\\begin{pmatrix}3&amp;1\\\\5&amp;2\\end{pmatrix}\\), then \\(Q^{-1}=\\)",
      options: ["\\(\\begin{pmatrix}2&1\\\\5&3\\end{pmatrix}\\)","\\(\\begin{pmatrix}3&1\\\\5&2\\end{pmatrix}\\)","\\(\\begin{pmatrix}2&-1\\\\-5&3\\end{pmatrix}\\)","\\(\\begin{pmatrix}-2&1\\\\5&-3\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}2&-1\\\\-5&3\\end{pmatrix}\\)",
      reason: "\\(|Q|=6-5=1\\), so \\(Q^{-1}=\\begin{pmatrix}2&amp;-1\\\\-5&amp;3\\end{pmatrix}\\)."
    },
    {
      q: "Two methods used to solve a system of linear equations in two variables using matrices are:",
      options: ["Substitution and elimination","Graphing and factorization","Completing the square and quadratic formula","Matrix inversion method and Cramer's rule"],
      ans: "Matrix inversion method and Cramer's rule",
      reason: "The two matrix methods for solving a linear system are the matrix inversion method and Cramer's rule."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(A\\)</td><td>\\(\\begin{pmatrix}2&1\\\\3&4\\end{pmatrix}\\)</td></tr><tr><td>\\(B\\)</td><td>\\(\\begin{pmatrix}1&0\\\\2&-1\\end{pmatrix}\\)</td></tr></table></div>\\(A+B\\) is equal to:",
      options: ["\\(\\begin{pmatrix}1&1\\\\1&5\\end{pmatrix}\\)","\\(\\begin{pmatrix}2&1\\\\6&3\\end{pmatrix}\\)","\\(\\begin{pmatrix}3&1\\\\5&4\\end{pmatrix}\\)","\\(\\begin{pmatrix}3&1\\\\5&3\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}3&1\\\\5&3\\end{pmatrix}\\)",
      reason: "\\(A+B=\\begin{pmatrix}2+1&amp;1+0\\\\3+2&amp;4-1\\end{pmatrix}=\\begin{pmatrix}3&amp;1\\\\5&amp;3\\end{pmatrix}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(A\\)</td><td>\\(\\begin{pmatrix}2&1\\\\3&4\\end{pmatrix}\\)</td></tr><tr><td>\\(B\\)</td><td>\\(\\begin{pmatrix}1&0\\\\2&-1\\end{pmatrix}\\)</td></tr></table></div>\\(|A|\\) is equal to:",
      options: ["5","-5","2","8"],
      ans: "5",
      reason: "\\(|A|=2\\cdot4-1\\cdot3=5\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(A\\)</td><td>\\(\\begin{pmatrix}2&1\\\\3&4\\end{pmatrix}\\)</td></tr><tr><td>\\(B\\)</td><td>\\(\\begin{pmatrix}1&0\\\\2&-1\\end{pmatrix}\\)</td></tr></table></div>\\(AB\\) is equal to:",
      options: ["\\(\\begin{pmatrix}4&1\\\\11&4\\end{pmatrix}\\)","\\(\\begin{pmatrix}3&1\\\\5&3\\end{pmatrix}\\)","\\(\\begin{pmatrix}2&0\\\\6&-4\\end{pmatrix}\\)","\\(\\begin{pmatrix}4&-1\\\\11&-4\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}4&-1\\\\11&-4\\end{pmatrix}\\)",
      reason: "\\(AB=\\begin{pmatrix}2\\cdot1+1\\cdot2&amp;2\\cdot0+1\\cdot(-1)\\\\3\\cdot1+4\\cdot2&amp;3\\cdot0+4\\cdot(-1)\\end{pmatrix}=\\begin{pmatrix}4&amp;-1\\\\11&amp;-4\\end{pmatrix}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(A\\)</td><td>\\(\\begin{pmatrix}2&1\\\\3&4\\end{pmatrix}\\)</td></tr><tr><td>\\(B\\)</td><td>\\(\\begin{pmatrix}1&0\\\\2&-1\\end{pmatrix}\\)</td></tr></table></div>The transpose of \\(A\\) is:",
      options: ["\\(\\begin{pmatrix}1&2\\\\4&3\\end{pmatrix}\\)","\\(\\begin{pmatrix}4&3\\\\1&2\\end{pmatrix}\\)","\\(\\begin{pmatrix}2&3\\\\1&4\\end{pmatrix}\\)","\\(\\begin{pmatrix}2&1\\\\3&4\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}2&3\\\\1&4\\end{pmatrix}\\)",
      reason: "The transpose swaps rows and columns: \\(\\begin{pmatrix}2&amp;3\\\\1&amp;4\\end{pmatrix}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Item</th><th>Price/unit (Rs.)</th><th>Units sold</th></tr><tr><td>Notebooks</td><td>50</td><td>\\(x\\)</td></tr><tr><td>Pens</td><td>20</td><td>\\(y\\)</td></tr></table><p>A shop's total sales on two consecutive days are given by the system: \\(x+y=30\\) and \\(50x+20y=1200\\).</p></div>The matrix equation representing this system is:",
      options: ["\\(\\begin{pmatrix}50&20\\\\1&1\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}1200\\\\30\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&1\\\\20&50\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}30\\\\1200\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&1\\\\50&20\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}30\\\\1200\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&50\\\\1&20\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}30\\\\1200\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}1&1\\\\50&20\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}30\\\\1200\\end{pmatrix}\\)",
      reason: "Coefficients form the matrix and the totals form the right column: \\(\\begin{pmatrix}1&amp;1\\\\50&amp;20\\end{pmatrix}\\begin{pmatrix}x\\\\y\\end{pmatrix}=\\begin{pmatrix}30\\\\1200\\end{pmatrix}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Item</th><th>Price/unit (Rs.)</th><th>Units sold</th></tr><tr><td>Notebooks</td><td>50</td><td>\\(x\\)</td></tr><tr><td>Pens</td><td>20</td><td>\\(y\\)</td></tr></table><p>A shop's total sales on two consecutive days are given by the system: \\(x+y=30\\) and \\(50x+20y=1200\\).</p></div>The determinant of the coefficient matrix \\(\\begin{pmatrix}1&amp;1\\\\50&amp;20\\end{pmatrix}\\) is:",
      options: ["-30","-20","30","20"],
      ans: "-30",
      reason: "\\(1\\cdot20-1\\cdot50=-30\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Item</th><th>Price/unit (Rs.)</th><th>Units sold</th></tr><tr><td>Notebooks</td><td>50</td><td>\\(x\\)</td></tr><tr><td>Pens</td><td>20</td><td>\\(y\\)</td></tr></table><p>A shop's total sales on two consecutive days are given by the system: \\(x+y=30\\) and \\(50x+20y=1200\\).</p></div>Since the determinant is non-zero, the system:",
      options: ["Has no solution","Has infinitely many solutions","Has a unique solution","Cannot be solved by matrices"],
      ans: "Has a unique solution",
      reason: "A non-zero determinant means the coefficient matrix is invertible, so there is a unique solution."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Item</th><th>Price/unit (Rs.)</th><th>Units sold</th></tr><tr><td>Notebooks</td><td>50</td><td>\\(x\\)</td></tr><tr><td>Pens</td><td>20</td><td>\\(y\\)</td></tr></table><p>A shop's total sales on two consecutive days are given by the system: \\(x+y=30\\) and \\(50x+20y=1200\\).</p></div>Solving the system, the number of notebooks sold (\\(x\\)) is:",
      options: ["10","15","20","25"],
      ans: "20",
      reason: "\\(y=30-x\\Rightarrow50x+20(30-x)=1200\\Rightarrow30x=600\\Rightarrow x=20\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(M\\)</td><td>\\(\\begin{pmatrix}4&2\\\\3&1\\end{pmatrix}\\)</td></tr></table></div>\\(|M|\\) is equal to:",
      options: ["10","-10","-2","2"],
      ans: "-2",
      reason: "\\(|M|=4\\cdot1-2\\cdot3=-2\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(M\\)</td><td>\\(\\begin{pmatrix}4&2\\\\3&1\\end{pmatrix}\\)</td></tr></table></div>Since \\(|M|\\neq0\\), the matrix \\(M\\) is:",
      options: ["Non-singular","Singular","Skew-symmetric","Symmetric"],
      ans: "Non-singular",
      reason: "\\(|M|=-2\\ne0\\), so \\(M\\) is non-singular."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(M\\)</td><td>\\(\\begin{pmatrix}4&2\\\\3&1\\end{pmatrix}\\)</td></tr></table></div>\\(\\text{adj}\\,M\\) is equal to:",
      options: ["\\(\\begin{pmatrix}1&-2\\\\-3&4\\end{pmatrix}\\)","\\(\\begin{pmatrix}4&-2\\\\-3&1\\end{pmatrix}\\)","\\(\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}\\)","\\(\\begin{pmatrix}-1&2\\\\3&-4\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}1&-2\\\\-3&4\\end{pmatrix}\\)",
      reason: "Swap \\(4\\) and \\(1\\), change the signs of \\(2\\) and \\(3\\): \\(\\begin{pmatrix}1&amp;-2\\\\-3&amp;4\\end{pmatrix}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Matrix</th><th>Value</th></tr><tr><td>\\(M\\)</td><td>\\(\\begin{pmatrix}4&2\\\\3&1\\end{pmatrix}\\)</td></tr></table></div>\\(M^{-1}\\) is equal to:",
      options: ["\\(\\begin{pmatrix}-0.5&-1\\\\-1.5&-2\\end{pmatrix}\\)","\\(\\begin{pmatrix}-0.5&1\\\\1.5&-2\\end{pmatrix}\\)","\\(\\begin{pmatrix}4&2\\\\3&1\\end{pmatrix}\\)","\\(\\begin{pmatrix}0.5&-1\\\\-1.5&2\\end{pmatrix}\\)"],
      ans: "\\(\\begin{pmatrix}-0.5&1\\\\1.5&-2\\end{pmatrix}\\)",
      reason: "\\(M^{-1}=\\dfrac1{-2}\\begin{pmatrix}1&amp;-2\\\\-3&amp;4\\end{pmatrix}=\\begin{pmatrix}-0.5&amp;1\\\\1.5&amp;-2\\end{pmatrix}\\)."
    }
    ];
  }
});
