// Class 11 Math — Chapter 3: Vectors
// 108 MCQs (base + stimulus-based), each with a computed/verified explanation.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch3",
  label: "Chapter 3: Vectors",
  order: 3,
  questions: function () {
    return [
  {
    "q": "A unit vector in the direction of \\(v=3i-4j\\) is:",
    "options": [
      "\\(\\tfrac{3}{5}i-\\tfrac{4}{5}j\\)",
      "\\(3i-4j\\)",
      "\\(\\tfrac{1}{5}(3i+4j)\\)",
      "\\(-\\tfrac{3}{5}i+\\tfrac{4}{5}j\\)"
    ],
    "ans": "\\(\\tfrac{3}{5}i-\\tfrac{4}{5}j\\)",
    "reason": "\\(|v|=\\sqrt{3^2+(-4)^2}=\\sqrt{25}=5\\). Unit vector \\(=\\dfrac{v}{|v|}=\\tfrac{3}{5}i-\\tfrac{4}{5}j\\)."
  },
  {
    "q": "The magnitude of the position vector \\(r=i+2j-2k\\) is:",
    "options": [
      "\\(1\\)",
      "\\(3\\)",
      "\\(5\\)",
      "\\(9\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "\\(|r|=\\sqrt{1^2+2^2+(-2)^2}=\\sqrt{1+4+4}=\\sqrt9=3\\)."
  },
  {
    "q": "If \\(a=2i+\\lambda j+k\\) and \\(b=i-2j+3k\\) are perpendicular, \\(\\lambda\\) equals:",
    "options": [
      "\\(5/2\\)",
      "\\(-5/2\\)",
      "\\(1\\)",
      "\\(-1\\)"
    ],
    "ans": "\\(5/2\\)",
    "reason": "Perpendicular means \\(a\\cdot b=0\\): \\(2(1)+\\lambda(-2)+1(3)=5-2\\lambda=0\\Rightarrow\\lambda=5/2\\)."
  },
  {
    "q": "The dot product of two mutually perpendicular non-zero vectors is always:",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(-1\\)",
      "\\(\\text{equal to the product of their magnitudes}\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "By definition, two vectors are perpendicular exactly when their dot product is \\(0\\)."
  },
  {
    "q": "The cross product \\(i\\times j\\) is equal to:",
    "options": [
      "\\(k\\)",
      "\\(-k\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "ans": "\\(k\\)",
    "reason": "By the right-hand rule for the standard basis, \\(i\\times j=k\\)."
  },
  {
    "q": "The magnitude of the vector product \\(a\\times b\\) represents:",
    "options": [
      "\\(\\text{Area of a triangle}\\)",
      "\\(\\text{Area of a parallelogram formed by }a\\text{ and }b\\)",
      "\\(\\text{Volume of a parallelepiped}\\)",
      "\\(\\text{Perimeter of a rectangle}\\)"
    ],
    "ans": "\\(\\text{Area of a parallelogram formed by }a\\text{ and }b\\)",
    "reason": "\\(|a\\times b|\\) is defined as the area of the parallelogram with sides \\(a\\) and \\(b\\)."
  },
  {
    "q": "If \\(a\\) and \\(b\\) are parallel vectors, then \\(a\\times b\\) is equal to:",
    "options": [
      "\\(0\\text{ (null vector)}\\)",
      "\\(1\\)",
      "\\(|a||b|\\)",
      "\\(a\\cdot b\\)"
    ],
    "ans": "\\(0\\text{ (null vector)}\\)",
    "reason": "Parallel vectors have no perpendicular component, so their cross product is the null vector."
  },
  {
    "q": "The projection of vector \\(a\\) on vector \\(b\\) is given by:",
    "options": [
      "\\((a\\cdot b)/|a|\\)",
      "\\((a\\cdot b)/|b|\\)",
      "\\((a\\times b)/|b|\\)",
      "\\(a\\cdot b\\)"
    ],
    "ans": "\\((a\\cdot b)/|b|\\)",
    "reason": "The (vector) projection of \\(a\\) on \\(b\\) is \\(\\dfrac{a\\cdot b}{|b|}\\,\\hat b\\), whose magnitude is \\(\\dfrac{a\\cdot b}{|b|}\\)."
  },
  {
    "q": "If direction cosines of a vector are \\(l,m,n\\), then \\(l^2+m^2+n^2\\) is:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(2\\)",
      "\\(-1\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "Direction cosines are the cosines of the angles a vector makes with the axes, and \\(\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1\\) always — this is exactly \\(l^2+m^2+n^2\\)."
  },
  {
    "q": "The angle between vectors \\(i+j\\) and \\(j+k\\) is:",
    "options": [
      "\\(30^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(90^\\circ\\)"
    ],
    "ans": "\\(60^\\circ\\)",
    "reason": "\\((i+j)\\cdot(j+k)=1\\), \\(|i+j|=|j+k|=\\sqrt2\\), so \\(\\cos\\theta=\\dfrac{1}{\\sqrt2\\cdot\\sqrt2}=\\dfrac12\\Rightarrow\\theta=60^\\circ\\)."
  },
  {
    "q": "For any vector \\(a\\), \\(a\\times a\\) is:",
    "options": [
      "\\(|a|^2\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(a\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "A vector crossed with itself has zero area between them, so \\(a\\times a=0\\)."
  },
  {
    "q": "For any vector \\(a\\), \\(a\\cdot a\\) is equal to:",
    "options": [
      "\\(0\\)",
      "\\(|a|^2\\)",
      "\\(1\\)",
      "\\(2|a|\\)"
    ],
    "ans": "\\(|a|^2\\)",
    "reason": "\\(a\\cdot a=|a||a|\\cos0^\\circ=|a|^2\\)."
  },
  {
    "q": "The scalar triple product \\([a\\,b\\,c]\\) is zero if:",
    "options": [
      "\\(\\text{any two vectors are equal}\\)",
      "\\(\\text{all three vectors are mutually perpendicular}\\)",
      "\\(\\text{all vectors are unit vectors}\\)",
      "\\(\\text{none of the vectors are coplanar}\\)"
    ],
    "ans": "\\(\\text{any two vectors are equal}\\)",
    "reason": "If any two of \\(a,b,c\\) are equal, the parallelepiped they span is flat (zero volume), so the scalar triple product is \\(0\\)."
  },
  {
    "q": "The volume of a parallelepiped with adjacent edges \\(a,b,c\\) is given by:",
    "options": [
      "\\(a\\cdot(b\\times c)\\)",
      "\\(a\\times(b\\times c)\\)",
      "\\((a\\cdot b)\\times c\\)",
      "\\(a+b+c\\)"
    ],
    "ans": "\\(a\\cdot(b\\times c)\\)",
    "reason": "The scalar triple product \\(a\\cdot(b\\times c)\\) gives the (signed) volume of the parallelepiped with edges \\(a,b,c\\)."
  },
  {
    "q": "If \\(a\\cdot b=0\\) and \\(a\\times b=0\\) for a non-zero vector \\(a\\), then vector \\(b\\) must be:",
    "options": [
      "\\(\\text{a unit vector}\\)",
      "\\(\\text{the zero vector}\\)",
      "\\(\\text{perpendicular to }a\\)",
      "\\(\\text{parallel to }a\\)"
    ],
    "ans": "\\(\\text{the zero vector}\\)",
    "reason": "\\(a\\cdot b=0\\) forces \\(b\\perp a\\) (or \\(b=0\\)); \\(a\\times b=0\\) forces \\(b\\parallel a\\) (or \\(b=0\\)). A non-zero vector can't be both perpendicular and parallel to \\(a\\) at once, so \\(b\\) must be the zero vector."
  },
  {
    "q": "Work done by a constant force \\(F\\) in displacement \\(d\\) is given by:",
    "options": [
      "\\(F\\times d\\)",
      "\\(F\\cdot d\\)",
      "\\(|F|/|d|\\)",
      "\\(|F+d|\\)"
    ],
    "ans": "\\(F\\cdot d\\)",
    "reason": "Work done is the dot product of force and displacement: \\(W=F\\cdot d\\)."
  },
  {
    "q": "Torque \\(\\tau\\) about a point due to force \\(F\\) acting at position vector \\(r\\) is:",
    "options": [
      "\\(r\\cdot F\\)",
      "\\(r\\times F\\)",
      "\\(F\\times r\\)",
      "\\(r/F\\)"
    ],
    "ans": "\\(r\\times F\\)",
    "reason": "Torque is defined as the cross product of the position vector and the force: \\(\\tau=r\\times F\\)."
  },
  {
    "q": "The value of \\(i\\cdot(j\\times k)\\) is:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(i\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "\\(j\\times k=i\\), so \\(i\\cdot(j\\times k)=i\\cdot i=1\\)."
  },
  {
    "q": "If \\(a=i-j\\) and \\(b=j+k\\), the area of the parallelogram formed by \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(\\sqrt3\\)",
      "\\(\\sqrt2\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    "ans": "\\(\\sqrt3\\)",
    "reason": "\\(a\\times b=(i-j)\\times(j+k)=\\begin{vmatrix}i&j&k\\\\1&-1&0\\\\0&1&1\\end{vmatrix}=-i-j+k\\), so the area \\(|a\\times b|=\\sqrt{1+1+1}=\\sqrt3\\)."
  },
  {
    "q": "The angle between \\(a\\times b\\) and \\(b\\times a\\) is:",
    "options": [
      "\\(0^\\circ\\)",
      "\\(90^\\circ\\)",
      "\\(180^\\circ\\)",
      "\\(45^\\circ\\)"
    ],
    "ans": "\\(180^\\circ\\)",
    "reason": "Since \\(b\\times a=-(a\\times b)\\), the two vectors point in exactly opposite directions — the angle between them is \\(180^\\circ\\)."
  },
  {
    "q": "If \\(|a+b|=|a-b|\\), then vectors \\(a\\) and \\(b\\) are:",
    "options": [
      "\\(\\text{parallel}\\)",
      "\\(\\text{perpendicular}\\)",
      "\\(\\text{equal in magnitude}\\)",
      "\\(\\text{opposite in direction}\\)"
    ],
    "ans": "\\(\\text{perpendicular}\\)",
    "reason": "Squaring both sides: \\(|a+b|^2=|a-b|^2\\Rightarrow|a|^2+2a\\cdot b+|b|^2=|a|^2-2a\\cdot b+|b|^2\\Rightarrow4a\\cdot b=0\\Rightarrow a\\perp b\\)."
  },
  {
    "q": "The position vector of point \\(P(2,-3,5)\\) is:",
    "options": [
      "\\(2i-3j+5k\\)",
      "\\(-2i+3j-5k\\)",
      "\\(2i+3j+5k\\)",
      "\\(5i-3j+2k\\)"
    ],
    "ans": "\\(2i-3j+5k\\)",
    "reason": "The position vector of a point is just its coordinates as components: \\(P(2,-3,5)\\to2i-3j+5k\\)."
  },
  {
    "q": "If \\(a=2i-j+k,\\ b=i+2j-3k,\\ c=3i+j+5k\\), then \\(a\\cdot(b\\times c)\\) equals:",
    "options": [
      "\\(0\\)",
      "\\(35\\)",
      "\\(-35\\)",
      "\\(20\\)"
    ],
    "ans": "\\(35\\)",
    "reason": "\\(b\\times c=\\begin{vmatrix}i&j&k\\\\1&2&-3\\\\3&1&5\\end{vmatrix}=13i-14j-5k\\). Then \\(a\\cdot(b\\times c)=2(13)+(-1)(-14)+1(-5)=26+14-5=35\\)."
  },
  {
    "q": "The vector \\(\\overrightarrow{AB}\\) from \\(A(1,2,3)\\) to \\(B(4,6,8)\\) is:",
    "options": [
      "\\(3i+4j+5k\\)",
      "\\(5i+8j+11k\\)",
      "\\(-3i-4j-5k\\)",
      "\\(4i+12j+24k\\)"
    ],
    "ans": "\\(3i+4j+5k\\)",
    "reason": "\\(\\overrightarrow{AB}=B-A=(4-1)i+(6-2)j+(8-3)k=3i+4j+5k\\)."
  },
  {
    "q": "If direction angles of a vector are \\(\\alpha,\\beta,\\gamma\\), then \\(\\sin^2\\alpha+\\sin^2\\beta+\\sin^2\\gamma\\) equals:",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(0\\)",
      "\\(3\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "Since \\(\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1\\), we get \\(\\sin^2\\alpha+\\sin^2\\beta+\\sin^2\\gamma=3-1=2\\)."
  },
  {
    "q": "If \\(a=3i+2j+9k\\) and \\(b=i+pj+3k\\) are parallel, then \\(p\\) is:",
    "options": [
      "\\(2/3\\)",
      "\\(3/2\\)",
      "\\(1/3\\)",
      "\\(3\\)"
    ],
    "ans": "\\(2/3\\)",
    "reason": "Parallel vectors have proportional components: \\(\\dfrac{3}{1}=\\dfrac{2}{p}=\\dfrac{9}{3}=3\\Rightarrow p=\\dfrac{2}{3}\\)."
  },
  {
    "q": "The area of a triangle with adjacent side vectors \\(a\\) and \\(b\\) is given by:",
    "options": [
      "\\(|a\\times b|\\)",
      "\\(\\tfrac12|a\\times b|\\)",
      "\\(a\\cdot b\\)",
      "\\(\\tfrac12(a\\cdot b)\\)"
    ],
    "ans": "\\(\\tfrac12|a\\times b|\\)",
    "reason": "The area of a triangle with adjacent sides \\(a,b\\) is half the parallelogram's area: \\(\\tfrac12|a\\times b|\\)."
  },
  {
    "q": "The vector \\(i\\times(j\\times k)\\) is equal to:",
    "options": [
      "\\(0\\)",
      "\\(i\\)",
      "\\(j\\)",
      "\\(k\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "\\(j\\times k=i\\), so \\(i\\times(j\\times k)=i\\times i=0\\)."
  },
  {
    "q": "If \\(a\\) and \\(b\\) are adjacent sides of a parallelogram, its diagonal vectors are:",
    "options": [
      "\\(a+b\\text{ and }a-b\\)",
      "\\(a\\times b\\text{ and }b\\times a\\)",
      "\\(a\\cdot b\\text{ and }a+b\\)",
      "\\(2a\\text{ and }2b\\)"
    ],
    "ans": "\\(a+b\\text{ and }a-b\\)",
    "reason": "For a parallelogram with adjacent sides \\(a,b\\), the two diagonals are \\(a+b\\) and \\(a-b\\)."
  },
  {
    "q": "A vector of magnitude 9 in the direction opposite to \\(i-2j+2k\\) is:",
    "options": [
      "\\(-3i+6j-6k\\)",
      "\\(3i-6j+6k\\)",
      "\\(-i+2j-2k\\)",
      "\\(-9i+18j-18k\\)"
    ],
    "ans": "\\(-3i+6j-6k\\)",
    "reason": "\\(|i-2j+2k|=\\sqrt{1+4+4}=3\\), so its unit vector is \\(\\tfrac13(i-2j+2k)\\); reversing and scaling to length 9 gives \\(-9\\cdot\\tfrac13(i-2j+2k)=-3i+6j-6k\\)."
  },
  {
    "q": "Three vectors \\(a,b,c\\) are coplanar if and only if:",
    "options": [
      "\\(a\\cdot(b\\times c)=0\\)",
      "\\(a\\times(b\\times c)=0\\)",
      "\\(a\\cdot b=0\\)",
      "\\(a+b+c=0\\)"
    ],
    "ans": "\\(a\\cdot(b\\times c)=0\\)",
    "reason": "Three vectors are coplanar exactly when the parallelepiped they'd form is flat, i.e. \\(a\\cdot(b\\times c)=0\\)."
  },
  {
    "q": "The cosine of the angle between \\(i+2j+3k\\) and \\(-i+2j+3k\\) is:",
    "options": [
      "\\(6/7\\)",
      "\\(5/7\\)",
      "\\(3/7\\)",
      "\\(4/7\\)"
    ],
    "ans": "\\(6/7\\)",
    "reason": "Dot product \\(=(1)(-1)+(2)(2)+(3)(3)=-1+4+9=12\\); both vectors have magnitude \\(\\sqrt{1+4+9}=\\sqrt{14}\\), so \\(\\cos\\theta=\\dfrac{12}{14}=\\dfrac67\\)."
  },
  {
    "q": "If \\(a=i-k\\) and \\(b=j+k\\), then \\(a\\cdot b\\) equals:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(2\\)"
    ],
    "ans": "\\(-1\\)",
    "reason": "\\(a\\cdot b=(1)(0)+(0)(1)+(-1)(1)=-1\\)."
  },
  {
    "q": "The vector component of \\(a\\) along \\(b\\) is:",
    "options": [
      "\\(\\left(\\dfrac{a\\cdot b}{|b|^2}\\right)b\\)",
      "\\(\\left(\\dfrac{a\\cdot b}{|b|}\\right)b\\)",
      "\\((a\\cdot b)\\,b\\)",
      "\\((a\\times b)/|b|\\)"
    ],
    "ans": "\\(\\left(\\dfrac{a\\cdot b}{|b|^2}\\right)b\\)",
    "reason": "The vector component (projection) of \\(a\\) along \\(b\\) is \\(\\left(\\dfrac{a\\cdot b}{|b|^2}\\right)b\\)."
  },
  {
    "q": "The value of \\(k\\cdot(i\\times j)\\) is:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(k\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "\\(i\\times j=k\\), so \\(k\\cdot(i\\times j)=k\\cdot k=1\\)."
  },
  {
    "q": "If \\(|a|=3,|b|=4\\), and \\(a\\cdot b=6\\), the angle between \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(30^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(90^\\circ\\)"
    ],
    "ans": "\\(60^\\circ\\)",
    "reason": "\\(\\cos\\theta=\\dfrac{a\\cdot b}{|a||b|}=\\dfrac{6}{3\\times4}=\\dfrac12\\Rightarrow\\theta=60^\\circ\\)."
  },
  {
    "q": "If \\(a\\times b=0\\) and \\(a\\cdot b=0\\), what can be concluded about vectors \\(a\\) or \\(b\\)?",
    "options": [
      "\\(\\text{They are mutually perpendicular}\\)",
      "\\(\\text{At least one is a zero vector}\\)",
      "\\(\\text{They are parallel non-zero vectors}\\)",
      "\\(\\text{They are unit vectors}\\)"
    ],
    "ans": "\\(\\text{At least one is a zero vector}\\)",
    "reason": "\\(a\\times b=0\\) means \\(a\\parallel b\\); \\(a\\cdot b=0\\) means \\(a\\perp b\\). Both at once (for genuinely non-zero vectors) is contradictory, so at least one must be the zero vector."
  },
  {
    "q": "The distance between points \\(P(1,1,1)\\) and \\(Q(2,3,3)\\) is:",
    "options": [
      "\\(3\\)",
      "\\(\\sqrt6\\)",
      "\\(2\\sqrt2\\)",
      "\\(5\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "Distance \\(=\\sqrt{(2-1)^2+(3-1)^2+(3-1)^2}=\\sqrt{1+4+4}=3\\)."
  },
  {
    "q": "If \\(a,b,c\\) form a right-handed system, then \\(a\\cdot(b\\times c)\\) is:",
    "options": [
      "\\(\\text{Positive}\\)",
      "\\(\\text{Negative}\\)",
      "\\(\\text{Zero}\\)",
      "\\(\\text{Imaginary}\\)"
    ],
    "ans": "\\(\\text{Positive}\\)",
    "reason": "A right-handed system \\(a,b,c\\) is defined by \\(a\\cdot(b\\times c)>0\\)."
  },
  {
    "q": "The volume of a tetrahedron with coterminous edges \\(a,b,c\\) is:",
    "options": [
      "\\(\\tfrac16|a\\cdot(b\\times c)|\\)",
      "\\(\\tfrac13|a\\cdot(b\\times c)|\\)",
      "\\(\\tfrac12|a\\cdot(b\\times c)|\\)",
      "\\(|a\\cdot(b\\times c)|\\)"
    ],
    "ans": "\\(\\tfrac16|a\\cdot(b\\times c)|\\)",
    "reason": "The volume of a tetrahedron is \\(\\tfrac16\\) the volume of the parallelepiped on the same edges: \\(\\tfrac16|a\\cdot(b\\times c)|\\)."
  },
  {
    "q": "The expression \\(a\\times(b+c)+b\\times(c+a)+c\\times(a+b)\\) equals:",
    "options": [
      "\\(0\\)",
      "\\(a+b+c\\)",
      "\\(2(a\\times b)\\)",
      "\\(a\\times b+b\\times c\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "Expanding: \\(a\\times b+a\\times c+b\\times c+b\\times a+c\\times a+c\\times b\\). Since \\(b\\times a=-(a\\times b)\\), \\(c\\times a=-(a\\times c)\\), \\(c\\times b=-(b\\times c)\\), every term cancels with its negative, leaving \\(0\\)."
  },
  {
    "q": "If \\(a=2i+j-k\\) and \\(b=i-j+2k\\), then \\(a\\times b\\) is:",
    "options": [
      "\\(i-5j-3k\\)",
      "\\(i+5j+3k\\)",
      "\\(-i-5j-3k\\)",
      "\\(i-3j-5k\\)"
    ],
    "ans": "\\(i-5j-3k\\)",
    "reason": "\\(a\\times b=\\begin{vmatrix}i&j&k\\\\2&1&-1\\\\1&-1&2\\end{vmatrix}=i(1\\cdot2-(-1)(-1))-j(2\\cdot2-(-1)(1))+k(2(-1)-1(1))=i-5j-3k\\)."
  },
  {
    "q": "If \\(u=i+j\\) and \\(v=i-j\\), then these vectors are:",
    "options": [
      "\\(\\text{Parallel}\\)",
      "\\(\\text{Perpendicular}\\)",
      "\\(\\text{Equal}\\)",
      "\\(\\text{Collinear}\\)"
    ],
    "ans": "\\(\\text{Perpendicular}\\)",
    "reason": "\\(u\\cdot v=(1)(1)+(1)(-1)=1-1=0\\), so \\(u\\) and \\(v\\) are perpendicular."
  },
  {
    "q": "A unit vector perpendicular to both \\(i+j\\) and \\(j+k\\) is:",
    "options": [
      "\\(\\tfrac1{\\sqrt3}(i-j+k)\\)",
      "\\(\\tfrac1{\\sqrt3}(i+j+k)\\)",
      "\\(\\tfrac1{\\sqrt2}(i-k)\\)",
      "\\(i+j-k\\)"
    ],
    "ans": "\\(\\tfrac1{\\sqrt3}(i-j+k)\\)",
    "reason": "\\((i+j)\\times(j+k)=\\begin{vmatrix}i&j&k\\\\1&1&0\\\\0&1&1\\end{vmatrix}=i-j+k\\), with magnitude \\(\\sqrt3\\); the unit vector is \\(\\tfrac1{\\sqrt3}(i-j+k)\\)."
  },
  {
    "q": "The position vector of the midpoint of the segment joining \\(P(2,3,4)\\) and \\(Q(4,1,2)\\) is:",
    "options": [
      "\\(3i+2j+3k\\)",
      "\\(6i+4j+6k\\)",
      "\\(2i-2j-2k\\)",
      "\\(i+j+k\\)"
    ],
    "ans": "\\(3i+2j+3k\\)",
    "reason": "Midpoint \\(=\\left(\\dfrac{2+4}{2},\\dfrac{3+1}{2},\\dfrac{4+2}{2}\\right)=(3,2,3)\\to3i+2j+3k\\)."
  },
  {
    "q": "If \\(|a|=5,|b|=12\\), and \\(|a+b|=13\\), the angle between \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(0^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(90^\\circ\\)",
      "\\(180^\\circ\\)"
    ],
    "ans": "\\(90^\\circ\\)",
    "reason": "\\(|a+b|^2=|a|^2+2a\\cdot b+|b|^2\\Rightarrow169=25+2a\\cdot b+144\\Rightarrow a\\cdot b=0\\), so the angle is \\(90^\\circ\\)."
  },
  {
    "q": "The scalar projection of \\(i-j\\) on \\(i+j\\) is:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(\\sqrt2\\)",
      "\\(-1\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "Scalar projection \\(=\\dfrac{(i-j)\\cdot(i+j)}{|i+j|}=\\dfrac{1-1}{\\sqrt2}=0\\)."
  },
  {
    "q": "If \\(a\\cdot b=|a\\times b|\\), the angle between \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(0^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(90^\\circ\\)",
      "\\(60^\\circ\\)"
    ],
    "ans": "\\(45^\\circ\\)",
    "reason": "\\(\\tan\\theta=\\dfrac{|a\\times b|}{a\\cdot b}=1\\Rightarrow\\theta=45^\\circ\\) (since \\(a\\cdot b=|a\\times b|\\))."
  },
  {
    "q": "Which of the following is a scalar quantity?",
    "options": [
      "\\(a\\times b\\)",
      "\\(a\\cdot(b\\times c)\\)",
      "\\(a\\times(b\\times c)\\)",
      "\\(a+b\\)"
    ],
    "ans": "\\(a\\cdot(b\\times c)\\)",
    "reason": "A scalar triple product \\(a\\cdot(b\\times c)\\) is a single number (a scalar), unlike a cross product which returns a vector."
  },
  {
    "q": "If \\(a=i+2j-3k\\) and \\(b=3i-j+2k\\), then \\(a+b\\) is:",
    "options": [
      "\\(4i+j-k\\)",
      "\\(2i-3j+5k\\)",
      "\\(4i+3j-5k\\)",
      "\\(-2i+3j-5k\\)"
    ],
    "ans": "\\(4i+j-k\\)",
    "reason": "\\(a+b=(1+3)i+(2-1)j+(-3+2)k=4i+j-k\\)."
  },
  {
    "q": "A unit vector in the direction of \\(a=3i-4j\\) is:",
    "options": [
      "\\((3i-4j)/25\\)",
      "\\((3i-4j)/5\\)",
      "\\((3i-4j)/7\\)",
      "\\((4i-3j)/5\\)"
    ],
    "ans": "\\((3i-4j)/5\\)",
    "reason": "\\(|a|=\\sqrt{3^2+(-4)^2}=5\\); unit vector \\(=\\dfrac{a}{|a|}=\\dfrac{3i-4j}{5}\\)."
  },
  {
    "q": "If \\(a\\cdot b=0\\) and \\(a\\times b=0\\) for non-zero vectors \\(a\\) and \\(b\\), then:",
    "options": [
      "\\(a\\text{ is parallel to }b\\)",
      "\\(a\\text{ is perpendicular to }b\\)",
      "\\(\\text{this is impossible for two truly non-zero vectors}\\)",
      "\\(a\\text{ and }b\\text{ are unit vectors}\\)"
    ],
    "ans": "\\(\\text{this is impossible for two truly non-zero vectors}\\)",
    "reason": "For two genuinely non-zero vectors, \\(a\\times b=0\\) would force them parallel while \\(a\\cdot b=0\\) forces them perpendicular — a contradiction, so this situation cannot occur."
  },
  {
    "q": "The position vector of point \\(P(2,-3,5)\\) relative to the origin is:",
    "options": [
      "\\(2i+3j+5k\\)",
      "\\(2i-3j+5k\\)",
      "\\(-2i-3j+5k\\)",
      "\\(2i-3j-5k\\)"
    ],
    "ans": "\\(2i-3j+5k\\)",
    "reason": "A point's position vector is just its coordinates as components: \\(P(2,-3,5)\\to2i-3j+5k\\)."
  },
  {
    "q": "The magnitude of vector \\(v=i-2j+2k\\) is:",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(9\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "\\(|v|=\\sqrt{1^2+(-2)^2+2^2}=\\sqrt{1+4+4}=3\\)."
  },
  {
    "q": "Two non-zero vectors \\(a\\) and \\(b\\) are parallel if and only if:",
    "options": [
      "\\(a\\cdot b=0\\)",
      "\\(a\\times b=0\\)",
      "\\(a+b=0\\)",
      "\\(a\\cdot b=1\\)"
    ],
    "ans": "\\(a\\times b=0\\)",
    "reason": "Two non-zero vectors are parallel exactly when the angle between them is \\(0^\\circ\\) or \\(180^\\circ\\), which makes their cross product \\(a\\times b=0\\)."
  },
  {
    "q": "The projection of vector \\(a\\) on vector \\(b\\) is given by:",
    "options": [
      "\\((a\\cdot b)/|a|\\)",
      "\\((a\\cdot b)/|b|\\)",
      "\\((a\\times b)/|b|\\)",
      "\\(a\\cdot b\\)"
    ],
    "ans": "\\((a\\cdot b)/|b|\\)",
    "reason": "The projection of \\(a\\) on \\(b\\) has magnitude \\(\\dfrac{a\\cdot b}{|b|}\\)."
  },
  {
    "q": "If vector \\(a=2i+\\lambda j+k\\) is perpendicular to \\(b=i-2j+3k\\), then \\(\\lambda=\\)",
    "options": [
      "\\(1.5\\)",
      "\\(2.5\\)",
      "\\(3.5\\)",
      "\\(4.5\\)"
    ],
    "ans": "\\(2.5\\)",
    "reason": "Perpendicular means \\(a\\cdot b=0\\): \\(2(1)+\\lambda(-2)+1(3)=5-2\\lambda=0\\Rightarrow\\lambda=2.5\\)."
  },
  {
    "q": "The angle between vectors \\(i+j\\) and \\(j+k\\) is:",
    "options": [
      "\\(30^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(90^\\circ\\)"
    ],
    "ans": "\\(60^\\circ\\)",
    "reason": "\\((i+j)\\cdot(j+k)=1\\), both have magnitude \\(\\sqrt2\\), so \\(\\cos\\theta=\\tfrac12\\Rightarrow\\theta=60^\\circ\\)."
  },
  {
    "q": "The vector product \\(i\\times(j\\times k)\\) is equal to:",
    "options": [
      "\\(0\\)",
      "\\(i\\)",
      "\\(j\\)",
      "\\(k\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "\\(j\\times k=i\\), so \\(i\\times(j\\times k)=i\\times i=0\\)."
  },
  {
    "q": "The area of a parallelogram with adjacent sides \\(a\\) and \\(b\\) is equal to:",
    "options": [
      "\\(a\\cdot b\\)",
      "\\(|a\\times b|\\)",
      "\\(\\tfrac12|a\\times b|\\)",
      "\\(|a||b|\\)"
    ],
    "ans": "\\(|a\\times b|\\)",
    "reason": "The area of a parallelogram with adjacent sides \\(a,b\\) equals \\(|a\\times b|\\)."
  },
  {
    "q": "If \\(|a|=3,|b|=4\\), and \\(a\\cdot b=6\\), the angle between \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(30^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(90^\\circ\\)"
    ],
    "ans": "\\(60^\\circ\\)",
    "reason": "\\(\\cos\\theta=\\dfrac{a\\cdot b}{|a||b|}=\\dfrac{6}{12}=\\dfrac12\\Rightarrow\\theta=60^\\circ\\)."
  },
  {
    "q": "The scalar triple product \\([i\\,j\\,k]\\) is equal to:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(-1\\)",
      "\\(3\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "\\([i\\,j\\,k]=i\\cdot(j\\times k)=i\\cdot i=1\\)."
  },
  {
    "q": "The vectors \\(a,b,c\\) are coplanar if:",
    "options": [
      "\\(a\\cdot(b\\times c)=0\\)",
      "\\(a\\times(b\\times c)=0\\)",
      "\\(a+b+c=0\\)",
      "\\(a\\cdot b=c\\)"
    ],
    "ans": "\\(a\\cdot(b\\times c)=0\\)",
    "reason": "Coplanarity of \\(a,b,c\\) is equivalent to \\(a\\cdot(b\\times c)=0\\) (zero-volume parallelepiped)."
  },
  {
    "q": "The magnitude of the cross product \\(|a\\times b|\\) represents:",
    "options": [
      "\\(\\text{Area of a triangle}\\)",
      "\\(\\text{Area of a parallelogram}\\)",
      "\\(\\text{Volume of a parallelepiped}\\)",
      "\\(\\text{Perimeter of a square}\\)"
    ],
    "ans": "\\(\\text{Area of a parallelogram}\\)",
    "reason": "\\(|a\\times b|\\) is, by definition, the area of the parallelogram spanned by \\(a\\) and \\(b\\)."
  },
  {
    "q": "The work done by a force \\(F\\) in displacing an object through displacement \\(d\\) is:",
    "options": [
      "\\(F\\times d\\)",
      "\\(F\\cdot d\\)",
      "\\(|F|/|d|\\)",
      "\\(|F\\times d|\\)"
    ],
    "ans": "\\(F\\cdot d\\)",
    "reason": "Work done is the dot product of the force and the displacement vectors: \\(W=F\\cdot d\\)."
  },
  {
    "q": "If \\(a=i+2j\\) and \\(b=2i+j\\), then \\(|a+b|=\\)",
    "options": [
      "\\(3\\)",
      "\\(3\\sqrt2\\)",
      "\\(\\sqrt{10}\\)",
      "\\(5\\)"
    ],
    "ans": "\\(3\\sqrt2\\)",
    "reason": "\\(a+b=(1+2)i+(2+1)j=3i+3j\\), so \\(|a+b|=\\sqrt{9+9}=3\\sqrt2\\)."
  },
  {
    "q": "Direction cosines \\(l,m,n\\) of any vector satisfy the relation:",
    "options": [
      "\\(l+m+n=1\\)",
      "\\(l^2+m^2+n^2=1\\)",
      "\\(l^2+m^2+n^2=0\\)",
      "\\(l^2-m^2+n^2=1\\)"
    ],
    "ans": "\\(l^2+m^2+n^2=1\\)",
    "reason": "Since direction cosines satisfy \\(\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1\\), this is exactly \\(l^2+m^2+n^2=1\\)."
  },
  {
    "q": "The vector perpendicular to both \\(i+j\\) and \\(i-j\\) is parallel to:",
    "options": [
      "\\(i\\)",
      "\\(j\\)",
      "\\(k\\)",
      "\\(i+k\\)"
    ],
    "ans": "\\(k\\)",
    "reason": "\\((i+j)\\times(i-j)=\\begin{vmatrix}i&j&k\\\\1&1&0\\\\1&-1&0\\end{vmatrix}=-2k\\), which is parallel to \\(k\\)."
  },
  {
    "q": "The moment of a force \\(F\\) about a point with position vector \\(r\\) is defined as:",
    "options": [
      "\\(r\\cdot F\\)",
      "\\(r\\times F\\)",
      "\\(F\\times r\\)",
      "\\(|r||F|\\)"
    ],
    "ans": "\\(r\\times F\\)",
    "reason": "The moment of a force about a point is \\(r\\times F\\), where \\(r\\) is the position vector from that point to where the force acts."
  },
  {
    "q": "The component of \\(a\\) along \\(b\\) is:",
    "options": [
      "\\(a\\cdot \\hat b\\)",
      "\\(a\\times \\hat b\\)",
      "\\(\\hat a\\cdot b\\)",
      "\\(a\\cdot b\\)"
    ],
    "ans": "\\(a\\cdot \\hat b\\)",
    "reason": "The component of \\(a\\) along \\(b\\) is \\(a\\cdot\\hat b\\), the dot product of \\(a\\) with the unit vector in \\(b\\)'s direction."
  },
  {
    "q": "If \\(a\\times b=-(b\\times a)\\), this property is called:",
    "options": [
      "\\(\\text{Commutative property}\\)",
      "\\(\\text{Anti-commutative property}\\)",
      "\\(\\text{Associative property}\\)",
      "\\(\\text{Distributive property}\\)"
    ],
    "ans": "\\(\\text{Anti-commutative property}\\)",
    "reason": "Swapping the order of a cross product reverses its sign — this is called the anti-commutative property."
  },
  {
    "q": "The position vector of the midpoint of segment joining \\(P(1,2,3)\\) and \\(Q(3,4,5)\\) is:",
    "options": [
      "\\(2i+3j+4k\\)",
      "\\(4i+6j+8k\\)",
      "\\(i+j+k\\)",
      "\\(2i+2j+2k\\)"
    ],
    "ans": "\\(2i+3j+4k\\)",
    "reason": "Midpoint \\(=\\left(\\dfrac{1+3}{2},\\dfrac{2+4}{2},\\dfrac{3+5}{2}\\right)=(2,3,4)\\to2i+3j+4k\\)."
  },
  {
    "q": "If \\(a\\cdot a=0\\), then \\(a\\) is:",
    "options": [
      "\\(\\text{a unit vector}\\)",
      "\\(\\text{the null vector}\\)",
      "\\(\\text{a position vector}\\)",
      "\\(\\text{an irrational vector}\\)"
    ],
    "ans": "\\(\\text{the null vector}\\)",
    "reason": "\\(a\\cdot a=|a|^2=0\\) forces \\(|a|=0\\), i.e. \\(a\\) is the null vector."
  },
  {
    "q": "The angle between vector \\(i+j+k\\) and the \\(x\\)-axis is:",
    "options": [
      "\\(\\cos^{-1}(1)\\)",
      "\\(\\cos^{-1}(1/\\sqrt2)\\)",
      "\\(\\cos^{-1}(1/\\sqrt3)\\)",
      "\\(60^\\circ\\)"
    ],
    "ans": "\\(\\cos^{-1}(1/\\sqrt3)\\)",
    "reason": "\\(\\cos\\theta=\\dfrac{(i+j+k)\\cdot i}{|i+j+k|\\cdot|i|}=\\dfrac{1}{\\sqrt3}\\Rightarrow\\theta=\\cos^{-1}(1/\\sqrt3)\\)."
  },
  {
    "q": "The volume of a parallelepiped determined by vectors \\(u,v,w\\) is:",
    "options": [
      "\\(|u\\cdot(v\\times w)|\\)",
      "\\(|u\\times(v\\cdot w)|\\)",
      "\\(|u+v+w|\\)",
      "\\(\\tfrac13|u\\cdot(v\\times w)|\\)"
    ],
    "ans": "\\(|u\\cdot(v\\times w)|\\)",
    "reason": "The volume of the parallelepiped formed by \\(u,v,w\\) is the absolute value of their scalar triple product: \\(|u\\cdot(v\\times w)|\\)."
  },
  {
    "q": "The area of a triangle with adjacent sides \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(|a\\times b|\\)",
      "\\(\\tfrac12|a\\times b|\\)",
      "\\(\\tfrac12(a\\cdot b)\\)",
      "\\(\\tfrac14|a\\times b|\\)"
    ],
    "ans": "\\(\\tfrac12|a\\times b|\\)",
    "reason": "The area of a triangle with adjacent sides \\(a,b\\) is \\(\\tfrac12|a\\times b|\\)."
  },
  {
    "q": "For any vector \\(a\\), \\((a\\cdot i)i+(a\\cdot j)j+(a\\cdot k)k\\) equals:",
    "options": [
      "\\(0\\)",
      "\\(a\\)",
      "\\(2a\\)",
      "\\(|a|\\)"
    ],
    "ans": "\\(a\\)",
    "reason": "\\((a\\cdot i)i+(a\\cdot j)j+(a\\cdot k)k\\) rebuilds each component of \\(a\\) along the axes, reconstructing \\(a\\) itself."
  },
  {
    "q": "If \\(a\\) and \\(b\\) are perpendicular unit vectors, then \\(|a+b|=\\)",
    "options": [
      "\\(1\\)",
      "\\(\\sqrt2\\)",
      "\\(2\\)",
      "\\(0\\)"
    ],
    "ans": "\\(\\sqrt2\\)",
    "reason": "With \\(a\\cdot b=0\\) (perpendicular) and \\(|a|=|b|=1\\): \\(|a+b|^2=1+0+1=2\\Rightarrow|a+b|=\\sqrt2\\)."
  },
  {
    "q": "The cross product \\(j\\times i\\) is equal to:",
    "options": [
      "\\(k\\)",
      "\\(-k\\)",
      "\\(0\\)",
      "\\(1\\)"
    ],
    "ans": "\\(-k\\)",
    "reason": "\\(j\\times i=-(i\\times j)=-k\\)."
  },
  {
    "q": "The distance between points \\(A(1,0,2)\\) and \\(B(3,4,0)\\) is:",
    "options": [
      "\\(\\sqrt{12}\\)",
      "\\(\\sqrt{20}\\)",
      "\\(2\\sqrt6\\)",
      "\\(6\\)"
    ],
    "ans": "\\(2\\sqrt6\\)",
    "reason": "Distance \\(=\\sqrt{(3-1)^2+(4-0)^2+(0-2)^2}=\\sqrt{4+16+4}=\\sqrt{24}=2\\sqrt6\\)."
  },
  {
    "q": "The sine of the angle \\(\\theta\\) between \\(a\\) and \\(b\\) is given by:",
    "options": [
      "\\(|a\\times b|/(|a||b|)\\)",
      "\\((a\\cdot b)/(|a||b|)\\)",
      "\\(|a\\times b|/(a\\cdot b)\\)",
      "\\(|a||b|/|a\\times b|\\)"
    ],
    "ans": "\\(|a\\times b|/(|a||b|)\\)",
    "reason": "By definition, \\(|a\\times b|=|a||b|\\sin\\theta\\), so \\(\\sin\\theta=\\dfrac{|a\\times b|}{|a||b|}\\)."
  },
  {
    "q": "A vector of length 5 in the direction opposite to \\(i-2j+2k\\) is:",
    "options": [
      "\\(\\tfrac53(i-2j+2k)\\)",
      "\\(-\\tfrac53(i-2j+2k)\\)",
      "\\(5(i-2j+2k)\\)",
      "\\(-5(i-2j+2k)\\)"
    ],
    "ans": "\\(-\\tfrac53(i-2j+2k)\\)",
    "reason": "\\(|i-2j+2k|=3\\); a length-5 vector in the opposite direction is \\(-5\\cdot\\tfrac13(i-2j+2k)=-\\tfrac53(i-2j+2k)\\)."
  },
  {
    "q": "If \\(a\\cdot b=|a||b|\\), the angle between \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(0^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(90^\\circ\\)",
      "\\(180^\\circ\\)"
    ],
    "ans": "\\(0^\\circ\\)",
    "reason": "\\(a\\cdot b=|a||b|\\Rightarrow\\cos\\theta=1\\Rightarrow\\theta=0^\\circ\\) (vectors point the same way)."
  },
  {
    "q": "The scalar product of \\(i\\) and \\(j\\) is:",
    "options": [
      "\\(0\\)",
      "\\(1\\)",
      "\\(k\\)",
      "\\(-k\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "The standard basis vectors are mutually perpendicular, so \\(i\\cdot j=0\\)."
  },
  {
    "q": "If vectors \\(3i-j+k\\) and \\(i+3j-2k\\) are adjacent sides of a parallelogram, its area is:",
    "options": [
      "\\(5\\sqrt6\\)",
      "\\(\\sqrt{59}\\)",
      "\\(\\sqrt{35}\\)",
      "\\(\\sqrt{14}\\)"
    ],
    "ans": "\\(5\\sqrt6\\)",
    "reason": "Cross product \\(=\\begin{vmatrix}i&j&k\\\\3&-1&1\\\\1&3&-2\\end{vmatrix}=-i+7j+10k\\); its magnitude (the area) is \\(\\sqrt{1+49+100}=\\sqrt{150}=5\\sqrt6\\)."
  },
  {
    "q": "If \\(a,b,c\\) form a right-handed system, then \\(a\\cdot(b\\times c)\\) is:",
    "options": [
      "\\(\\text{Negative}\\)",
      "\\(\\text{Positive}\\)",
      "\\(\\text{Zero}\\)",
      "\\(\\text{Undefined}\\)"
    ],
    "ans": "\\(\\text{Positive}\\)",
    "reason": "A right-handed system \\(a,b,c\\) is defined by \\(a\\cdot(b\\times c)>0\\)."
  },
  {
    "q": "The position vector dividing \\(AB\\) in ratio \\(1:2\\) internally (\\(A=a,B=b\\)) is:",
    "options": [
      "\\((2a+b)/3\\)",
      "\\((a+2b)/3\\)",
      "\\((a+b)/3\\)",
      "\\((2a-b)/3\\)"
    ],
    "ans": "\\((2a+b)/3\\)",
    "reason": "The section formula for dividing \\(AB\\) in ratio \\(1:2\\) from \\(A\\) gives \\(\\dfrac{2A+1\\cdot B}{1+2}=\\dfrac{2a+b}{3}\\)."
  },
  {
    "q": "The projection of \\(i\\) on \\(i+j+k\\) is:",
    "options": [
      "\\(1\\)",
      "\\(1/\\sqrt3\\)",
      "\\(\\sqrt3\\)",
      "\\(0\\)"
    ],
    "ans": "\\(1/\\sqrt3\\)",
    "reason": "Projection \\(=\\dfrac{i\\cdot(i+j+k)}{|i+j+k|}=\\dfrac{1}{\\sqrt3}\\)."
  },
  {
    "q": "The magnitude of \\(a\\times a\\) for any vector \\(a\\) is:",
    "options": [
      "\\(|a|^2\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(2|a|\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "\\(a\\times a=0\\) for any vector, since a vector makes a zero angle with itself."
  },
  {
    "q": "If \\(a+b+c=0\\) and \\(|a|=3,|b|=5,|c|=7\\), the angle between \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(30^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(60^\\circ\\)",
      "\\(90^\\circ\\)"
    ],
    "ans": "\\(60^\\circ\\)",
    "reason": "Since \\(c=-(a+b)\\), \\(|c|^2=|a|^2+2a\\cdot b+|b|^2\\Rightarrow49=9+2a\\cdot b+25\\Rightarrow a\\cdot b=7.5\\); \\(\\cos\\theta=\\dfrac{7.5}{3\\times5}=\\dfrac12\\Rightarrow\\theta=60^\\circ\\)."
  },
  {
    "q": "The direction ratios of vector \\(2i-3j+6k\\) are:",
    "options": [
      "\\(2,-3,6\\)",
      "\\(2/7,-3/7,6/7\\)",
      "\\(4,9,36\\)",
      "\\(1/2,-1/3,1/6\\)"
    ],
    "ans": "\\(2,-3,6\\)",
    "reason": "Direction ratios are simply the vector's own components: \\(2,-3,6\\)."
  },
  {
    "q": "The work done by constant force \\(F=2i+j+k\\) moving an object from \\((1,1,1)\\) to \\((2,3,4)\\) is:",
    "options": [
      "\\(5\\text{ units}\\)",
      "\\(6\\text{ units}\\)",
      "\\(7\\text{ units}\\)",
      "\\(8\\text{ units}\\)"
    ],
    "ans": "\\(7\\text{ units}\\)",
    "reason": "Displacement \\(d=(2-1)i+(3-1)j+(4-1)k=i+2j+3k\\); work \\(=F\\cdot d=2(1)+1(2)+1(3)=7\\) units."
  },
  {
    "q": "\\([a+b,\\,b+c,\\,c+a]\\) equals:",
    "options": [
      "\\(0\\)",
      "\\([a\\,b\\,c]\\)",
      "\\(2[a\\,b\\,c]\\)",
      "\\([a\\,b\\,c]^2\\)"
    ],
    "ans": "\\(2[a\\,b\\,c]\\)",
    "reason": "Expanding \\([a+b,\\,b+c,\\,c+a]\\) and cancelling repeated-vector terms (which vanish in a triple product) leaves exactly \\(2[a\\,b\\,c]\\), a standard identity."
  },
  {
    "q": "Two vectors are orthogonal if their scalar product is:",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(-1\\)",
      "\\(\\text{infinite}\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "Orthogonal (perpendicular) vectors have scalar product \\(0\\) by definition."
  },
  {
    "q": "If \\(|a\\times b|=a\\cdot b\\), the angle \\(\\theta\\) between \\(a\\) and \\(b\\) is:",
    "options": [
      "\\(0^\\circ\\)",
      "\\(30^\\circ\\)",
      "\\(45^\\circ\\)",
      "\\(90^\\circ\\)"
    ],
    "ans": "\\(45^\\circ\\)",
    "reason": "\\(\\tan\\theta=\\dfrac{|a\\times b|}{a\\cdot b}=1\\) (since they're equal), so \\(\\theta=45^\\circ\\)."
  },
  {
    "q": "If \\(r=xi+yj+zk\\), then \\(|r|=\\)",
    "options": [
      "\\(x+y+z\\)",
      "\\(x^2+y^2+z^2\\)",
      "\\(\\sqrt{x^2+y^2+z^2}\\)",
      "\\(\\sqrt{x+y+z}\\)"
    ],
    "ans": "\\(\\sqrt{x^2+y^2+z^2}\\)",
    "reason": "By definition, the magnitude of \\(r=xi+yj+zk\\) is \\(|r|=\\sqrt{x^2+y^2+z^2}\\)."
  },
  {
    "q": "The vector \\(i+j+k\\) is:",
    "options": [
      "\\(\\text{a unit vector}\\)",
      "\\(\\text{the zero vector}\\)",
      "\\(\\text{a vector equally inclined to the axes}\\)",
      "\\(\\text{parallel to the }x\\text{-axis}\\)"
    ],
    "ans": "\\(\\text{a vector equally inclined to the axes}\\)",
    "reason": "\\(i+j+k\\) has equal components, so it makes the same angle with all three axes — it's equally inclined to them."
  },
  {
    "q": "If \\(a\\times b=c\\), then \\(c\\) is perpendicular to:",
    "options": [
      "\\(\\text{only }a\\)",
      "\\(\\text{only }b\\)",
      "\\(\\text{both }a\\text{ and }b\\)",
      "\\(\\text{neither }a\\text{ nor }b\\)"
    ],
    "ans": "\\(\\text{both }a\\text{ and }b\\)",
    "reason": "By the definition of the cross product, \\(c=a\\times b\\) is always perpendicular to both \\(a\\) and \\(b\\)."
  },
  {
    "q": "The unit vector parallel to the \\(xy\\)-plane and perpendicular to \\(4i-3j+k\\) is:",
    "options": [
      "\\((3i+4j)/5\\)",
      "\\((4i+3j)/5\\)",
      "\\(k\\)",
      "\\((i+j)/\\sqrt2\\)"
    ],
    "ans": "\\((3i+4j)/5\\)",
    "reason": "A vector in the \\(xy\\)-plane has the form \\(ai+bj\\); perpendicular to \\(4i-3j+k\\) means \\(4a-3b=0\\), satisfied by \\((a,b)=(3,4)\\); normalizing gives \\(\\dfrac{3i+4j}{5}\\)."
  },
  {
    "q": "Torque \\(T\\) produced by force \\(F\\) at position \\(r\\) is zero if \\(r\\) and \\(F\\) are:",
    "options": [
      "\\(\\text{perpendicular}\\)",
      "\\(\\text{parallel}\\)",
      "\\(\\text{at }45^\\circ\\)",
      "\\(\\text{unit vectors}\\)"
    ],
    "ans": "\\(\\text{parallel}\\)",
    "reason": "Torque \\(=r\\times F\\), which is zero exactly when \\(r\\) and \\(F\\) are parallel (no perpendicular component to produce turning)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Vector</th></tr><tr><td>Force \\(F\\)</td><td>3i + 4j</td></tr><tr><td>Position \\(r\\)</td><td>2i</td></tr><tr><td>Displacement \\(d\\)</td><td>i + j</td></tr></table></div>The magnitude of the force \\(|F|\\) is:",
    "options": [
      "5",
      "7",
      "3",
      "4"
    ],
    "ans": "5",
    "reason": "\\(|F|=\\sqrt{3^2+4^2}=\\sqrt{25}=5\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Vector</th></tr><tr><td>Force \\(F\\)</td><td>3i + 4j</td></tr><tr><td>Position \\(r\\)</td><td>2i</td></tr><tr><td>Displacement \\(d\\)</td><td>i + j</td></tr></table></div>The torque \\(r\\times F\\) about the origin is:",
    "options": [
      "\\(8k\\)",
      "\\(-8k\\)",
      "\\(6k\\)",
      "\\(0\\)"
    ],
    "ans": "\\(8k\\)",
    "reason": "\\(r\\times F=2i\\times(3i+4j)=6(i\\times i)+8(i\\times j)=0+8k=8k\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Vector</th></tr><tr><td>Force \\(F\\)</td><td>3i + 4j</td></tr><tr><td>Position \\(r\\)</td><td>2i</td></tr><tr><td>Displacement \\(d\\)</td><td>i + j</td></tr></table></div>The work done \\(F\\cdot d\\) is:",
    "options": [
      "7",
      "5",
      "8",
      "6"
    ],
    "ans": "7",
    "reason": "\\(F\\cdot d=(3)(1)+(4)(1)=7\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Vector</th></tr><tr><td>Force \\(F\\)</td><td>3i + 4j</td></tr><tr><td>Position \\(r\\)</td><td>2i</td></tr><tr><td>Displacement \\(d\\)</td><td>i + j</td></tr></table></div>Since the torque is non-zero, the force \\(F\\) and position \\(r\\) are:",
    "options": [
      "not parallel",
      "parallel",
      "perpendicular",
      "equal"
    ],
    "ans": "not parallel",
    "reason": "A non-zero cross product means the vectors are not parallel (if they were, \\(r\\times F\\) would be \\(0\\))."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>A</td><td>(0, 0, 0)</td></tr><tr><td>B</td><td>(4, 0, 0)</td></tr><tr><td>C</td><td>(0, 3, 0)</td></tr></table></div>The vector AB is:",
    "options": [
      "\\(4i\\)",
      "\\(3i\\)",
      "\\(4j\\)",
      "\\(-4i\\)"
    ],
    "ans": "\\(4i\\)",
    "reason": "\\(\\overrightarrow{AB}=B-A=(4-0)i+(0-0)j=4i\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>A</td><td>(0, 0, 0)</td></tr><tr><td>B</td><td>(4, 0, 0)</td></tr><tr><td>C</td><td>(0, 3, 0)</td></tr></table></div>The vector AC is:",
    "options": [
      "\\(3j\\)",
      "\\(4j\\)",
      "\\(3i\\)",
      "\\(-3j\\)"
    ],
    "ans": "\\(3j\\)",
    "reason": "\\(\\overrightarrow{AC}=C-A=(0-0)i+(3-0)j=3j\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>A</td><td>(0, 0, 0)</td></tr><tr><td>B</td><td>(4, 0, 0)</td></tr><tr><td>C</td><td>(0, 3, 0)</td></tr></table></div>The area of triangle ABC, using half the magnitude of AB times AC, is:",
    "options": [
      "6",
      "12",
      "7",
      "5"
    ],
    "ans": "6",
    "reason": "\\(\\overrightarrow{AB}\\) and \\(\\overrightarrow{AC}\\) are perpendicular (\\(4i\\perp3j\\)), so the area is \\(\\tfrac12|AB||AC|=\\tfrac12(4)(3)=6\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>A</td><td>(0, 0, 0)</td></tr><tr><td>B</td><td>(4, 0, 0)</td></tr><tr><td>C</td><td>(0, 3, 0)</td></tr></table></div>The length of side BC is:",
    "options": [
      "5",
      "4",
      "3",
      "7"
    ],
    "ans": "5",
    "reason": "\\(BC=\\sqrt{(4-0)^2+(0-3)^2}=\\sqrt{16+9}=\\sqrt{25}=5\\)."
  }
];
  }
});
