// Class 10 Math — Chapter 1: Complex Numbers
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch1",
  label: "Chapter 1: Complex Numbers",
  order: 1,
  questions: function () {
    return [
    {
      q: "\\(\\sqrt{-1}\\) is equal to:",
      options: ["1","-i","-1","i"],
      ans: "i",
      reason: "By definition \\(i=\\sqrt{-1}\\)."
    },
    {
      q: "If \\(x\\lt 0\\), then \\(\\sqrt{x}\\) is:",
      options: ["Rational","Irrational","Complex","Real"],
      ans: "Complex",
      reason: "The square root of a negative real number is not real; it is an imaginary (complex) number."
    },
    {
      q: "Conjugate of \\(\\sqrt{x}-i\\sqrt{y}\\) is:",
      options: ["\\(x-y\\)","\\(x+iy\\)","\\(\\sqrt{x}+i\\sqrt{y}\\)","\\(x-iy\\)"],
      ans: "\\(\\sqrt{x}+i\\sqrt{y}\\)",
      reason: "The conjugate changes the sign of the imaginary part: \\(\\sqrt{x}-i\\sqrt{y}\\to\\sqrt{x}+i\\sqrt{y}\\)."
    },
    {
      q: "If \\(z=x+iy\\), then \\(z\\bar z\\) is:",
      options: ["A negative number","Complex","A non-negative number","Imaginary"],
      ans: "A non-negative number",
      reason: "\\(z\\bar z=(x+iy)(x-iy)=x^2+y^2\\ge0\\)."
    },
    {
      q: "\\(\\sqrt{4}+\\sqrt{-25}\\) is equal to:",
      options: ["\\(2-5i\\)","\\(-2+5i\\)","\\(5+2i\\)","\\(2+5i\\)"],
      ans: "\\(2+5i\\)",
      reason: "\\(\\sqrt4=2\\) and \\(\\sqrt{-25}=5i\\), so the sum is \\(2+5i\\)."
    },
    {
      q: "\\(1+(-i)^{9}\\) is equal to:",
      options: ["\\(1-i\\)","\\(1+i\\)","\\(-i\\)","\\(-1-i\\)"],
      ans: "\\(1-i\\)",
      reason: "\\((-i)^9=-i^9=-i\\) since \\(i^9=i\\). So \\(1+(-i)^9=1-i\\)."
    },
    {
      q: "\\(\\dfrac{2}{1-i}\\) is equal to:",
      options: ["\\(\\dfrac{1-i}{2}\\)","\\(1+i\\)","\\(1-i\\)","\\(\\dfrac{1+i}{2}\\)"],
      ans: "\\(1+i\\)",
      reason: "\\(\\dfrac{2}{1-i}\\cdot\\dfrac{1+i}{1+i}=\\dfrac{2(1+i)}{2}=1+i\\)."
    },
    {
      q: "\\((-xi)^{19}\\) is equal to:",
      options: ["\\(-x^{19}\\)","\\(-x^{19}i\\)","\\(-i^{19}\\)","\\(x^{19}i\\)"],
      ans: "\\(x^{19}i\\)",
      reason: "\\((-xi)^{19}=-x^{19}i^{19}\\) and \\(i^{19}=i^{3}=-i\\), so the result is \\(x^{19}i\\)."
    },
    {
      q: "If \\(z=3+4i\\), then \\(|z|^2\\) is:",
      options: ["\\(\\sqrt5\\)","16","25","5"],
      ans: "25",
      reason: "\\(|z|^2=3^2+4^2=25\\)."
    },
    {
      q: "The solution of \\(x^2+4=0\\) is:",
      options: ["\\(\\pm2i\\)","\\(2i\\)","\\(-2i\\)","\\(\\pm2\\)"],
      ans: "\\(\\pm2i\\)",
      reason: "\\(x^2=-4\\Rightarrow x=\\pm2i\\)."
    },
    {
      q: "\\((-2+4i)-(8-5i)\\) is equal to:",
      options: ["\\(6-i\\)","\\(10+9i\\)","\\(-10+9i\\)","\\(-10-9i\\)"],
      ans: "\\(-10+9i\\)",
      reason: "\\((-2+4i)-(8-5i)=-10+9i\\)."
    },
    {
      q: "\\((-3+4i)+(-7i+4)\\) is equal to:",
      options: ["\\(-1-3i\\)","\\(1-3i\\)","\\(1+3i\\)","\\(-1+3i\\)"],
      ans: "\\(1-3i\\)",
      reason: "Real parts: \\(-3+4=1\\); imaginary parts: \\(4i-7i=-3i\\). Result \\(1-3i\\)."
    },
    {
      q: "The product \\((x+iy)(2+3i)\\) is equal to:",
      options: ["\\((2x+3y)+(3x-2y)i\\)","\\((2x+3y)+(3x+2y)i\\)","\\((2x-3y)-(3x+2y)i\\)","\\((2x-3y)+(3x+2y)i\\)"],
      ans: "\\((2x-3y)+(3x+2y)i\\)",
      reason: "\\((x+iy)(2+3i)=2x+3xi+2yi+3yi^2=(2x-3y)+(3x+2y)i\\)."
    },
    {
      q: "The product \\((-3+6i)(-6+3i)\\) is equal to:",
      options: ["\\(45i\\)","\\(45\\)","\\(-45i\\)","\\(-45\\)"],
      ans: "\\(-45i\\)",
      reason: "\\((-3+6i)(-6+3i)=18-9i-36i+18i^2=-45i\\)."
    },
    {
      q: "Conjugate of \\(3\\sqrt2-\\sqrt{-7}\\) is:",
      options: ["\\(3\\sqrt2-i\\sqrt7\\)","\\(-3\\sqrt2-i\\sqrt7\\)","\\(3\\sqrt2+i\\sqrt7\\)","\\(-3\\sqrt2+i\\sqrt7\\)"],
      ans: "\\(3\\sqrt2+i\\sqrt7\\)",
      reason: "\\(\\sqrt{-7}=i\\sqrt7\\), so the number is \\(3\\sqrt2-i\\sqrt7\\); its conjugate is \\(3\\sqrt2+i\\sqrt7\\)."
    },
    {
      q: "Conjugate of \\(\\sqrt{-2}\\) is:",
      options: ["\\(\\sqrt2\\)","\\(-\\sqrt2\\,i\\)","\\(-\\sqrt2\\)","\\(\\sqrt2\\,i\\)"],
      ans: "\\(-\\sqrt2\\,i\\)",
      reason: "\\(\\sqrt{-2}=i\\sqrt2\\); its conjugate is \\(-i\\sqrt2\\)."
    },
    {
      q: "If \\(z=-\\dfrac12+i\\), then \\(z\\bar z\\) is:",
      options: ["\\(\\dfrac54\\)","1","\\(\\dfrac34\\)","\\(-\\dfrac54\\)"],
      ans: "\\(\\dfrac54\\)",
      reason: "\\(z\\bar z=|z|^2=\\left(-\\tfrac12\\right)^2+1^2=\\tfrac54\\)."
    },
    {
      q: "If \\(z=14-7i\\), then \\(z\\bar z\\) is:",
      options: ["196","245","49","-245"],
      ans: "245",
      reason: "\\(z\\bar z=14^2+(-7)^2=196+49=245\\)."
    },
    {
      q: "\\(\\dfrac{-3-i}{-3+i}\\) simplifies to:",
      options: ["\\(\\dfrac35+\\dfrac45i\\)","\\(\\dfrac45-\\dfrac35i\\)","\\(\\dfrac45+\\dfrac35i\\)","\\(-\\dfrac45-\\dfrac35i\\)"],
      ans: "\\(\\dfrac45+\\dfrac35i\\)",
      reason: "Multiply top and bottom by \\(-3-i\\): \\(\\dfrac{(-3-i)^2}{10}=\\dfrac{8+6i}{10}=\\dfrac45+\\dfrac35i\\)."
    },
    {
      q: "\\(\\dfrac{1+3i}{i}\\) simplifies to:",
      options: ["\\(3-i\\)","\\(-3+i\\)","\\(3+i\\)","\\(-3-i\\)"],
      ans: "\\(3-i\\)",
      reason: "\\(\\dfrac{1+3i}{i}=\\dfrac{(1+3i)(-i)}{1}=-i-3i^2=3-i\\)."
    },
    {
      q: "Factorized form of \\(2x^2+18\\) is:",
      options: ["\\(2(x+3i)(x-3i)\\)","\\(2(x+9i)(x-9i)\\)","\\((x+3i)(x-3i)\\)","\\(2(x+3)(x-3)\\)"],
      ans: "\\(2(x+3i)(x-3i)\\)",
      reason: "\\(2x^2+18=2(x^2+9)=2(x+3i)(x-3i)\\)."
    },
    {
      q: "Factorized form of \\(-x^2-25y^4\\) is:",
      options: ["\\(-(x+5y^2)(x-5y^2)\\)","\\(-(x+5iy^2)(x-5iy^2)\\)","\\((x+5iy^2)(x-5iy^2)\\)","\\(-(x+25iy^2)(x-25iy^2)\\)"],
      ans: "\\(-(x+5iy^2)(x-5iy^2)\\)",
      reason: "\\(-x^2-25y^4=-(x^2+25y^4)=-(x+5iy^2)(x-5iy^2)\\)."
    },
    {
      q: "The solution of \\(3x^2+15=0\\) is:",
      options: ["\\(\\pm5i\\)","\\(\\pm\\sqrt5\\)","\\(\\pm i\\sqrt5\\)","\\(\\pm i\\sqrt{15}\\)"],
      ans: "\\(\\pm i\\sqrt5\\)",
      reason: "\\(3x^2=-15\\Rightarrow x^2=-5\\Rightarrow x=\\pm i\\sqrt5\\)."
    },
    {
      q: "The solution of \\(6y^2+36=0\\) is:",
      options: ["\\(\\pm6i\\)","\\(\\pm i\\sqrt{36}\\)","\\(\\pm\\sqrt6\\)","\\(\\pm i\\sqrt6\\)"],
      ans: "\\(\\pm i\\sqrt6\\)",
      reason: "\\(6y^2=-36\\Rightarrow y^2=-6\\Rightarrow y=\\pm i\\sqrt6\\)."
    },
    {
      q: "The imaginary unit \\(i\\) is defined as:",
      options: ["\\(\\sqrt1\\)","1","-1","\\(\\sqrt{-1}\\)"],
      ans: "\\(\\sqrt{-1}\\)",
      reason: "The imaginary unit is defined as \\(i=\\sqrt{-1}\\)."
    },
    {
      q: "Which of the following is a pure imaginary number?",
      options: ["7","\\(3+5i\\)","0","\\(5i\\)"],
      ans: "\\(5i\\)",
      reason: "A pure imaginary number has real part 0 and non-zero imaginary part, like \\(5i\\)."
    },
    {
      q: "A complex number \\(a+bi\\) is a real number when:",
      options: ["\\(a=0\\)","\\(b=0\\)","\\(a\\neq0,\\ b\\neq0\\)","\\(a=b\\)"],
      ans: "\\(b=0\\)",
      reason: "\\(a+bi\\) is real exactly when its imaginary part \\(b=0\\)."
    },
    {
      q: "Which relation between the number systems is correct?",
      options: ["\\(\\mathbb{R}\\cap\\mathbb{C}=\\emptyset\\)","\\(\\mathbb{R}=\\mathbb{C}\\)","\\(\\mathbb{C}\\subseteq\\mathbb{R}\\)","\\(\\mathbb{R}\\subseteq\\mathbb{C}\\)"],
      ans: "\\(\\mathbb{R}\\subseteq\\mathbb{C}\\)",
      reason: "Every real number is a complex number with imaginary part 0, so \\(\\mathbb{R}\\subseteq\\mathbb{C}\\)."
    },
    {
      q: "The complex number \\(0+0i\\) is:",
      options: ["The additive identity","Undefined","A pure imaginary number","The multiplicative identity"],
      ans: "The additive identity",
      reason: "\\(z+(0+0i)=z\\) for every \\(z\\), so \\(0+0i\\) is the additive identity."
    },
    {
      q: "In \\(a+bi\\), the term \\(a\\) is called the:",
      options: ["Imaginary part","Argument","Modulus","Real part"],
      ans: "Real part",
      reason: "In \\(a+bi\\), \\(a\\) is the real part."
    },
    {
      q: "In \\(a+bi\\), the term \\(b\\) is called the:",
      options: ["Conjugate","Real part","Imaginary part","Modulus"],
      ans: "Imaginary part",
      reason: "In \\(a+bi\\), \\(b\\) is the imaginary part."
    },
    {
      q: "Which of the following is NOT a complex number?",
      options: ["\\(-4\\)","\\(2+3i\\)","\\(\\infty\\)","\\(6i\\)"],
      ans: "\\(\\infty\\)",
      reason: "\\(\\infty\\) is not a number, so it is not a complex number."
    },
    {
      q: "The set of complex numbers is denoted by:",
      options: ["\\(\\mathbb{Z}\\)","\\(\\mathbb{C}\\)","\\(\\mathbb{Q}\\)","\\(\\mathbb{R}\\)"],
      ans: "\\(\\mathbb{C}\\)",
      reason: "The set of complex numbers is denoted by \\(\\mathbb{C}\\)."
    },
    {
      q: "If \\(z=0+bi\\) with \\(b\\neq0\\), then \\(z\\) is called a:",
      options: ["Modulus","Real number","Pure imaginary number","Complex conjugate"],
      ans: "Pure imaginary number",
      reason: "\\(0+bi\\) with \\(b\\ne0\\) is a pure imaginary number."
    },
    {
      q: "\\(i^2\\) is equal to:",
      options: ["\\(-1\\)","\\(-i\\)","1","\\(i\\)"],
      ans: "\\(-1\\)",
      reason: "By definition \\(i^2=-1\\)."
    },
    {
      q: "\\(i^3\\) is equal to:",
      options: ["1","\\(i\\)","\\(-1\\)","\\(-i\\)"],
      ans: "\\(-i\\)",
      reason: "\\(i^3=i^2\\cdot i=-i\\)."
    },
    {
      q: "\\(i^4\\) is equal to:",
      options: ["1","\\(-i\\)","\\(i\\)","\\(-1\\)"],
      ans: "1",
      reason: "\\(i^4=(i^2)^2=(-1)^2=1\\)."
    },
    {
      q: "\\(i^5\\) is equal to:",
      options: ["\\(-1\\)","\\(-i\\)","1","\\(i\\)"],
      ans: "\\(i\\)",
      reason: "\\(i^5=i^4\\cdot i=i\\)."
    },
    {
      q: "\\(i^{100}\\) is equal to:",
      options: ["\\(-i\\)","1","\\(-1\\)","\\(i\\)"],
      ans: "1",
      reason: "\\(100=4\\times25\\), so \\(i^{100}=(i^4)^{25}=1\\)."
    },
    {
      q: "\\(i^{102}\\) is equal to:",
      options: ["1","\\(-i\\)","\\(i\\)","\\(-1\\)"],
      ans: "\\(-1\\)",
      reason: "\\(102=4\\times25+2\\), so \\(i^{102}=i^2=-1\\)."
    },
    {
      q: "\\(\\sqrt{-16}\\) is equal to:",
      options: ["\\(16i\\)","\\(4i\\)","4","\\(-4i\\)"],
      ans: "\\(4i\\)",
      reason: "\\(\\sqrt{-16}=\\sqrt{16}\\,i=4i\\)."
    },
    {
      q: "\\(\\sqrt{-36}\\) is equal to:",
      options: ["\\(36i\\)","\\(-6i\\)","6","\\(6i\\)"],
      ans: "\\(6i\\)",
      reason: "\\(\\sqrt{-36}=6i\\)."
    },
    {
      q: "\\(\\sqrt{-5}\\times\\sqrt{-20}\\) is equal to:",
      options: ["\\(-10i\\)","\\(10i\\)","10","\\(-10\\)"],
      ans: "\\(-10\\)",
      reason: "\\(\\sqrt{-5}\\sqrt{-20}=i\\sqrt5\\cdot i\\sqrt{20}=i^2\\sqrt{100}=-10\\)."
    },
    {
      q: "\\(3i\\times4i\\) is equal to:",
      options: ["\\(12i\\)","\\(-12\\)","12","\\(-12i\\)"],
      ans: "\\(-12\\)",
      reason: "\\(3i\\times4i=12i^2=-12\\)."
    },
    {
      q: "\\((2+3i)+(4-5i)\\) is equal to:",
      options: ["\\(6-2i\\)","\\(6+2i\\)","\\(2-2i\\)","\\(-2+8i\\)"],
      ans: "\\(6-2i\\)",
      reason: "\\((2+4)+(3-5)i=6-2i\\)."
    },
    {
      q: "\\((5-2i)-(3+4i)\\) is equal to:",
      options: ["\\(2+6i\\)","\\(2-6i\\)","\\(8-6i\\)","\\(-2-6i\\)"],
      ans: "\\(2-6i\\)",
      reason: "\\((5-3)+(-2-4)i=2-6i\\)."
    },
    {
      q: "\\((1+i)(1-i)\\) is equal to:",
      options: ["2","0","\\(-2\\)","\\(2i\\)"],
      ans: "2",
      reason: "\\((1+i)(1-i)=1-i^2=2\\)."
    },
    {
      q: "\\((3+2i)(1+i)\\) is equal to:",
      options: ["\\(5-i\\)","\\(5+5i\\)","\\(1+5i\\)","\\(1-5i\\)"],
      ans: "\\(1+5i\\)",
      reason: "\\((3+2i)(1+i)=3+3i+2i+2i^2=1+5i\\)."
    },
    {
      q: "\\((2-i)^2\\) is equal to:",
      options: ["\\(4-4i\\)","\\(4+4i\\)","\\(3+4i\\)","\\(3-4i\\)"],
      ans: "\\(3-4i\\)",
      reason: "\\((2-i)^2=4-4i+i^2=3-4i\\)."
    },
    {
      q: "\\((1+i)^2\\) is equal to:",
      options: ["\\(2i\\)","2","\\(-2\\)","\\(-2i\\)"],
      ans: "\\(2i\\)",
      reason: "\\((1+i)^2=1+2i+i^2=2i\\)."
    },
    {
      q: "\\(\\dfrac1i\\) is equal to:",
      options: ["1","\\(i\\)","\\(-i\\)","\\(-1\\)"],
      ans: "\\(-i\\)",
      reason: "\\(\\dfrac1i=\\dfrac{-i}{-i\\cdot i}=-i\\) (since \\(i\\cdot(-i)=1\\))."
    },
    {
      q: "\\(\\dfrac{3+4i}{1-i}\\) is equal to:",
      options: ["\\(\\dfrac{1+7i}{2}\\)","\\(\\dfrac{7-i}{2}\\)","\\(\\dfrac{-1+7i}{2}\\)","\\(\\dfrac{1+i}{2}\\)"],
      ans: "\\(\\dfrac{-1+7i}{2}\\)",
      reason: "\\(\\dfrac{(3+4i)(1+i)}{2}=\\dfrac{3+7i+4i^2}{2}=\\dfrac{-1+7i}{2}\\)."
    },
    {
      q: "\\(\\dfrac{4+i}{2-i}\\) is equal to:",
      options: ["\\(\\dfrac{7+6i}{5}\\)","\\(\\dfrac{6+7i}{5}\\)","\\(\\dfrac{7-6i}{5}\\)","\\(\\dfrac{7+6i}{25}\\)"],
      ans: "\\(\\dfrac{7+6i}{5}\\)",
      reason: "\\(\\dfrac{(4+i)(2+i)}{5}=\\dfrac{8+6i+i^2}{5}=\\dfrac{7+6i}{5}\\)."
    },
    {
      q: "\\((2+3i)+(2-3i)\\) is equal to:",
      options: ["4","0","\\(6i\\)","\\(4+6i\\)"],
      ans: "4",
      reason: "The imaginary parts cancel: \\(4+0i=4\\)."
    },
    {
      q: "\\((2+3i)-(2-3i)\\) is equal to:",
      options: ["\\(-6i\\)","\\(6i\\)","4","0"],
      ans: "\\(6i\\)",
      reason: "\\((2+3i)-(2-3i)=6i\\)."
    },
    {
      q: "\\((5i)(-3i)\\) is equal to:",
      options: ["\\(15i\\)","\\(-15\\)","\\(-15i\\)","15"],
      ans: "15",
      reason: "\\((5i)(-3i)=-15i^2=15\\)."
    },
    {
      q: "\\((2+i)(2-i)\\) is equal to:",
      options: ["3","5","\\(-5\\)","\\(5i\\)"],
      ans: "5",
      reason: "\\((2+i)(2-i)=4-i^2=5\\)."
    },
    {
      q: "\\((-2+3i)+(4+0i)\\) is equal to:",
      options: ["\\(2+3i\\)","\\(-2+3i\\)","\\(6+3i\\)","\\(2-3i\\)"],
      ans: "\\(2+3i\\)",
      reason: "\\((-2+4)+3i=2+3i\\)."
    },
    {
      q: "\\(z_1+z_2=z_2+z_1\\) illustrates the:",
      options: ["Closure law","Commutative law of addition","Associative law","Distributive law"],
      ans: "Commutative law of addition",
      reason: "\\(z_1+z_2=z_2+z_1\\) is the commutative law of addition."
    },
    {
      q: "\\((z_1+z_2)+z_3=z_1+(z_2+z_3)\\) illustrates the:",
      options: ["Distributive law","Associative law of addition","Identity law","Commutative law"],
      ans: "Associative law of addition",
      reason: "Grouping of the terms can be changed: the associative law of addition."
    },
    {
      q: "\\(z_1(z_2+z_3)=z_1z_2+z_1z_3\\) illustrates the:",
      options: ["Associative law","Inverse law","Distributive law","Commutative law"],
      ans: "Distributive law",
      reason: "Multiplication distributes over addition: the distributive law."
    },
    {
      q: "\\(z_1z_2=z_2z_1\\) illustrates the:",
      options: ["Commutative law of multiplication","Associative law","Identity law","Distributive law"],
      ans: "Commutative law of multiplication",
      reason: "Order does not matter in multiplication: the commutative law of multiplication."
    },
    {
      q: "The additive identity in complex numbers is:",
      options: ["\\(1+0i\\)","\\(1+1i\\)","\\(0+1i\\)","\\(0+0i\\)"],
      ans: "\\(0+0i\\)",
      reason: "\\(z+(0+0i)=z\\), so the additive identity is \\(0+0i\\)."
    },
    {
      q: "The multiplicative identity in complex numbers is:",
      options: ["\\(1+0i\\)","\\(0+1i\\)","\\(-1+0i\\)","\\(0+0i\\)"],
      ans: "\\(1+0i\\)",
      reason: "\\(z\\cdot(1+0i)=z\\), so the multiplicative identity is \\(1+0i\\)."
    },
    {
      q: "The additive inverse of \\(z=a+bi\\) is:",
      options: ["\\(-a-bi\\)","\\(-a+bi\\)","\\(a+bi\\)","\\(a-bi\\)"],
      ans: "\\(-a-bi\\)",
      reason: "\\((a+bi)+(-a-bi)=0\\), so the additive inverse is \\(-a-bi\\)."
    },
    {
      q: "The multiplicative inverse of \\(z=a+bi\\ (z\\neq0)\\) is:",
      options: ["\\(\\dfrac{a+bi}{a^2+b^2}\\)","\\(\\dfrac{a-bi}{a^2+b^2}\\)","\\(\\dfrac1{a+bi}\\)","\\(a-bi\\)"],
      ans: "\\(\\dfrac{a-bi}{a^2+b^2}\\)",
      reason: "\\(\\dfrac{1}{a+bi}=\\dfrac{a-bi}{(a+bi)(a-bi)}=\\dfrac{a-bi}{a^2+b^2}\\)."
    },
    {
      q: "The additive inverse of \\(3-2i\\) is:",
      options: ["\\(-3-2i\\)","\\(2-3i\\)","\\(3+2i\\)","\\(-3+2i\\)"],
      ans: "\\(-3+2i\\)",
      reason: "The additive inverse changes both signs: \\(-(3-2i)=-3+2i\\)."
    },
    {
      q: "The multiplicative inverse of \\(i\\) is:",
      options: ["1","\\(-i\\)","\\(-1\\)","\\(i\\)"],
      ans: "\\(-i\\)",
      reason: "\\(\\dfrac1i=-i\\), since \\(i\\cdot(-i)=1\\)."
    },
    {
      q: "Conjugate of \\(3+4i\\) is:",
      options: ["\\(-3-4i\\)","\\(-3+4i\\)","\\(4+3i\\)","\\(3-4i\\)"],
      ans: "\\(3-4i\\)",
      reason: "The conjugate of \\(3+4i\\) is \\(3-4i\\)."
    },
    {
      q: "Conjugate of \\(-2-5i\\) is:",
      options: ["\\(-2+5i\\)","\\(-2-5i\\)","\\(2-5i\\)","\\(2+5i\\)"],
      ans: "\\(-2+5i\\)",
      reason: "The conjugate of \\(-2-5i\\) is \\(-2+5i\\)."
    },
    {
      q: "If \\(\\bar z=3-2i\\), then \\(z\\) is:",
      options: ["\\(3+2i\\)","\\(3-2i\\)","\\(-3+2i\\)","\\(-3-2i\\)"],
      ans: "\\(3+2i\\)",
      reason: "Taking the conjugate of \\(\\bar z=3-2i\\) gives \\(z=3+2i\\)."
    },
    {
      q: "\\(|3+4i|\\) is equal to:",
      options: ["7","1","5","25"],
      ans: "5",
      reason: "\\(|3+4i|=\\sqrt{9+16}=5\\)."
    },
    {
      q: "\\(|-5+12i|\\) is equal to:",
      options: ["13","17","169","7"],
      ans: "13",
      reason: "\\(|-5+12i|=\\sqrt{25+144}=13\\)."
    },
    {
      q: "\\(|i|\\) is equal to:",
      options: ["\\(-1\\)","0","\\(i\\)","1"],
      ans: "1",
      reason: "\\(|i|=|0+1i|=\\sqrt{0+1}=1\\)."
    },
    {
      q: "The modulus \\(|z|\\) of a complex number is always a:",
      options: ["Negative number","Complex number","Imaginary number","Non-negative real number"],
      ans: "Non-negative real number",
      reason: "\\(|z|=\\sqrt{x^2+y^2}\\), a non-negative real number."
    },
    {
      q: "\\(z\\cdot\\bar z\\) is equal to:",
      options: ["\\(|z|^2\\)","\\(2\\,\\text{Re}(z)\\)","\\(|z|\\)","0"],
      ans: "\\(|z|^2\\)",
      reason: "\\(z\\bar z=x^2+y^2=|z|^2\\)."
    },
    {
      q: "If \\(z=x+iy\\), then \\(z+\\bar z\\) is equal to:",
      options: ["\\(2x\\)","0","\\(2iy\\)","\\(2y\\)"],
      ans: "\\(2x\\)",
      reason: "\\((x+iy)+(x-iy)=2x\\)."
    },
    {
      q: "If \\(z=x+iy\\), then \\(z-\\bar z\\) is equal to:",
      options: ["\\(2x\\)","\\(2iy\\)","0","\\(-2iy\\)"],
      ans: "\\(2iy\\)",
      reason: "\\((x+iy)-(x-iy)=2iy\\)."
    },
    {
      q: "\\(|z_1z_2|\\) is equal to:",
      options: ["\\(|z_1|+|z_2|\\)","\\(|z_1||z_2|\\)","\\(|z_1|/|z_2|\\)","\\(|z_1|-|z_2|\\)"],
      ans: "\\(|z_1||z_2|\\)",
      reason: "The modulus of a product equals the product of the moduli."
    },
    {
      q: "\\(\\left|\\dfrac{z_1}{z_2}\\right|\\ (z_2\\neq0)\\) is equal to:",
      options: ["\\(|z_1||z_2|\\)","\\(\\dfrac{|z_1|}{|z_2|}\\)","\\(\\dfrac{|z_2|}{|z_1|}\\)","\\(|z_1|+|z_2|\\)"],
      ans: "\\(\\dfrac{|z_1|}{|z_2|}\\)",
      reason: "The modulus of a quotient equals the quotient of the moduli."
    },
    {
      q: "The conjugate of \\(\\bar z\\) is:",
      options: ["\\(-z\\)","\\(|z|\\)","\\(\\bar z\\)","\\(z\\)"],
      ans: "\\(z\\)",
      reason: "Conjugating twice returns the original number: \\(\\bar{\\bar z}=z\\)."
    },
    {
      q: "\\(|-z|\\) is equal to:",
      options: ["0","\\(z\\)","\\(|z|\\)","\\(-|z|\\)"],
      ans: "\\(|z|\\)",
      reason: "\\(|-z|=|z|\\) since the modulus depends only on the squares of the parts."
    },
    {
      q: "\\(\\dfrac{1+i}{1-i}\\) is equal to:",
      options: ["1","\\(-1\\)","\\(i\\)","\\(-i\\)"],
      ans: "\\(i\\)",
      reason: "\\(\\dfrac{(1+i)^2}{(1-i)(1+i)}=\\dfrac{2i}{2}=i\\)."
    },
    {
      q: "\\(\\left(\\dfrac{1+i}{1-i}\\right)^2\\) is equal to:",
      options: ["\\(i\\)","\\(-i\\)","\\(-1\\)","1"],
      ans: "\\(-1\\)",
      reason: "\\(\\left(\\dfrac{1+i}{1-i}\\right)^2=i^2=-1\\)."
    },
    {
      q: "\\(\\dfrac{1-i}{1+i}\\) is equal to:",
      options: ["\\(i\\)","\\(-i\\)","\\(-1\\)","1"],
      ans: "\\(-i\\)",
      reason: "\\(\\dfrac{1-i}{1+i}=\\dfrac{(1-i)^2}{2}=\\dfrac{-2i}{2}=-i\\)."
    },
    {
      q: "\\(\\left(\\dfrac{1-i}{1+i}\\right)^2\\) is equal to:",
      options: ["\\(-i\\)","1","\\(-1\\)","\\(i\\)"],
      ans: "\\(-1\\)",
      reason: "\\(\\left(\\dfrac{1-i}{1+i}\\right)^2=(-i)^2=-1\\)."
    },
    {
      q: "\\(\\dfrac{2+i}{2-i}\\) is equal to:",
      options: ["\\(\\dfrac{5+4i}{5}\\)","\\(\\dfrac{4+3i}{5}\\)","\\(\\dfrac{3+4i}{5}\\)","\\(\\dfrac{3-4i}{5}\\)"],
      ans: "\\(\\dfrac{3+4i}{5}\\)",
      reason: "\\(\\dfrac{(2+i)^2}{4+1}=\\dfrac{3+4i}{5}\\)."
    },
    {
      q: "\\(\\dfrac{2-i}{2+i}\\) is equal to:",
      options: ["\\(\\dfrac{3-4i}{5}\\)","\\(\\dfrac{4-3i}{5}\\)","\\(\\dfrac{3+4i}{5}\\)","\\(\\dfrac{-3+4i}{5}\\)"],
      ans: "\\(\\dfrac{3-4i}{5}\\)",
      reason: "\\(\\dfrac{(2-i)^2}{5}=\\dfrac{3-4i}{5}\\)."
    },
    {
      q: "\\(\\left(\\dfrac{1+i}{1-i}\\right)^{-1}\\) is equal to:",
      options: ["\\(-i\\)","\\(i\\)","\\(-1\\)","1"],
      ans: "\\(-i\\)",
      reason: "\\(\\dfrac{1+i}{1-i}=i\\), so its inverse is \\(\\dfrac1i=-i\\)."
    },
    {
      q: "\\(\\left(\\dfrac{1+i}{1-i}\\right)^4\\) is equal to:",
      options: ["\\(-1\\)","\\(i\\)","\\(-i\\)","1"],
      ans: "1",
      reason: "\\(\\left(\\dfrac{1+i}{1-i}\\right)^4=i^4=1\\)."
    },
    {
      q: "The solution of \\(x^2+9=0\\) is:",
      options: ["\\(\\pm3\\)","\\(9i\\)","\\(\\pm3i\\)","\\(-3i\\) only"],
      ans: "\\(\\pm3i\\)",
      reason: "\\(x^2=-9\\Rightarrow x=\\pm3i\\)."
    },
    {
      q: "The solution of \\(x^2+1=0\\) is:",
      options: ["0","\\(\\pm i\\)","\\(\\pm2i\\)","\\(\\pm1\\)"],
      ans: "\\(\\pm i\\)",
      reason: "\\(x^2=-1\\Rightarrow x=\\pm i\\)."
    },
    {
      q: "The solution of \\(2x^2+8=0\\) is:",
      options: ["\\(\\pm2i\\)","\\(\\pm4i\\)","\\(\\pm8i\\)","\\(\\pm2\\)"],
      ans: "\\(\\pm2i\\)",
      reason: "\\(2x^2=-8\\Rightarrow x^2=-4\\Rightarrow x=\\pm2i\\)."
    },
    {
      q: "The roots of \\(x^2-2x+5=0\\) are:",
      options: ["\\(-1\\pm2i\\)","\\(1\\pm2i\\)","\\(2\\pm i\\)","\\(1\\pm4i\\)"],
      ans: "\\(1\\pm2i\\)",
      reason: "\\(x=\\dfrac{2\\pm\\sqrt{4-20}}{2}=\\dfrac{2\\pm4i}{2}=1\\pm2i\\)."
    },
    {
      q: "The roots of \\(x^2+2x+5=0\\) are:",
      options: ["\\(1\\pm2i\\)","\\(2\\pm2i\\)","\\(-1\\pm4i\\)","\\(-1\\pm2i\\)"],
      ans: "\\(-1\\pm2i\\)",
      reason: "\\(x=\\dfrac{-2\\pm\\sqrt{4-20}}{2}=-1\\pm2i\\)."
    },
    {
      q: "The equation \\(x^2+4=0\\) has:",
      options: ["No roots","One real and one complex root","Two real roots","Two non-real (complex) roots"],
      ans: "Two non-real (complex) roots",
      reason: "\\(x^2=-4\\) has no real solutions; its roots \\(\\pm2i\\) are two non-real complex numbers."
    },
    {
      q: "In the Argand plane, the complex number \\(3+4i\\) is represented by the point:",
      options: ["\\((3,-4)\\)","\\((3,4)\\)","\\((-3,4)\\)","\\((4,3)\\)"],
      ans: "\\((3,4)\\)",
      reason: "\\(3+4i\\) has real part 3 and imaginary part 4, so it is the point \\((3,4)\\)."
    },
    {
      q: "The horizontal axis in an Argand diagram is called the:",
      options: ["Modulus axis","Real axis","Imaginary axis","Argument axis"],
      ans: "Real axis",
      reason: "The horizontal axis carries the real parts: the real axis."
    },
    {
      q: "The vertical axis in an Argand diagram is called the:",
      options: ["Modulus axis","Unit axis","Imaginary axis","Real axis"],
      ans: "Imaginary axis",
      reason: "The vertical axis carries the imaginary parts: the imaginary axis."
    },
    {
      q: "The point representing \\(-2-3i\\) lies in which quadrant of the Argand plane?",
      options: ["First quadrant","Second quadrant","Fourth quadrant","Third quadrant"],
      ans: "Third quadrant",
      reason: "Both real part \\(-2\\) and imaginary part \\(-3\\) are negative: third quadrant."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Component</th><th>Impedance (Ohms)</th></tr><tr><td>Resistor</td><td>\\(Z_1 = 6+0i\\)</td></tr><tr><td>Inductor</td><td>\\(Z_2 = 0+8i\\)</td></tr><tr><td>Series combination</td><td>\\(Z = Z_1+Z_2\\)</td></tr></table><p>In AC circuit analysis, impedance is represented as a complex number \\(Z=R+iX\\), where \\(R\\) is resistance and \\(X\\) is reactance.</p></div>The combined impedance \\(Z=Z_1+Z_2\\) is:",
      options: ["\\(8+6i\\)","\\(14i\\)","\\(6-8i\\)","\\(6+8i\\)"],
      ans: "\\(6+8i\\)",
      reason: "\\(Z=(6+0i)+(0+8i)=6+8i\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Component</th><th>Impedance (Ohms)</th></tr><tr><td>Resistor</td><td>\\(Z_1 = 6+0i\\)</td></tr><tr><td>Inductor</td><td>\\(Z_2 = 0+8i\\)</td></tr><tr><td>Series combination</td><td>\\(Z = Z_1+Z_2\\)</td></tr></table><p>In AC circuit analysis, impedance is represented as a complex number \\(Z=R+iX\\), where \\(R\\) is resistance and \\(X\\) is reactance.</p></div>The magnitude \\(|Z|\\) of the combined impedance is:",
      options: ["10","2","48","14"],
      ans: "10",
      reason: "\\(|Z|=\\sqrt{6^2+8^2}=\\sqrt{100}=10\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Component</th><th>Impedance (Ohms)</th></tr><tr><td>Resistor</td><td>\\(Z_1 = 6+0i\\)</td></tr><tr><td>Inductor</td><td>\\(Z_2 = 0+8i\\)</td></tr><tr><td>Series combination</td><td>\\(Z = Z_1+Z_2\\)</td></tr></table><p>In AC circuit analysis, impedance is represented as a complex number \\(Z=R+iX\\), where \\(R\\) is resistance and \\(X\\) is reactance.</p></div>The conjugate of \\(Z\\) is:",
      options: ["\\(6+8i\\)","\\(-6-8i\\)","\\(-6+8i\\)","\\(6-8i\\)"],
      ans: "\\(6-8i\\)",
      reason: "The conjugate of \\(6+8i\\) is \\(6-8i\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Component</th><th>Impedance (Ohms)</th></tr><tr><td>Resistor</td><td>\\(Z_1 = 6+0i\\)</td></tr><tr><td>Inductor</td><td>\\(Z_2 = 0+8i\\)</td></tr><tr><td>Series combination</td><td>\\(Z = Z_1+Z_2\\)</td></tr></table><p>In AC circuit analysis, impedance is represented as a complex number \\(Z=R+iX\\), where \\(R\\) is resistance and \\(X\\) is reactance.</p></div>\\(Z\\cdot\\bar Z\\) is equal to:",
      options: ["14","48","100","10"],
      ans: "100",
      reason: "\\(Z\\bar Z=|Z|^2=100\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Complex number</th><th>Value</th></tr><tr><td>\\(z_1\\)</td><td>\\(2+3i\\)</td></tr><tr><td>\\(z_2\\)</td><td>\\(1-2i\\)</td></tr></table></div>\\(z_1+z_2\\) is equal to:",
      options: ["\\(3-i\\)","\\(1+i\\)","\\(3+i\\)","\\(1+5i\\)"],
      ans: "\\(3+i\\)",
      reason: "\\((2+3i)+(1-2i)=3+i\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Complex number</th><th>Value</th></tr><tr><td>\\(z_1\\)</td><td>\\(2+3i\\)</td></tr><tr><td>\\(z_2\\)</td><td>\\(1-2i\\)</td></tr></table></div>\\(z_1\\cdot z_2\\) is equal to:",
      options: ["\\(8-i\\)","\\(2-6i\\)","\\(8+i\\)","\\(-4-i\\)"],
      ans: "\\(8-i\\)",
      reason: "\\((2+3i)(1-2i)=2-4i+3i-6i^2=8-i\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Complex number</th><th>Value</th></tr><tr><td>\\(z_1\\)</td><td>\\(2+3i\\)</td></tr><tr><td>\\(z_2\\)</td><td>\\(1-2i\\)</td></tr></table></div>\\(|z_1|\\) is equal to:",
      options: ["13","\\(\\sqrt5\\)","\\(\\sqrt{13}\\)","5"],
      ans: "\\(\\sqrt{13}\\)",
      reason: "\\(|2+3i|=\\sqrt{4+9}=\\sqrt{13}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Complex number</th><th>Value</th></tr><tr><td>\\(z_1\\)</td><td>\\(2+3i\\)</td></tr><tr><td>\\(z_2\\)</td><td>\\(1-2i\\)</td></tr></table></div>The conjugate of \\(z_2\\) is:",
      options: ["\\(-1-2i\\)","\\(-1+2i\\)","\\(1+2i\\)","\\(1-2i\\)"],
      ans: "\\(1+2i\\)",
      reason: "The conjugate of \\(1-2i\\) is \\(1+2i\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Complex number</th></tr><tr><td>P</td><td>\\(4+3i\\)</td></tr><tr><td>Q</td><td>\\(-2+5i\\)</td></tr><tr><td>R</td><td>\\(-3-4i\\)</td></tr><tr><td>S</td><td>\\(5-2i\\)</td></tr></table><p>These four complex numbers are plotted as points on the Argand plane.</p></div>Which point lies in the third quadrant?",
      options: ["Q","S","R","P"],
      ans: "R",
      reason: "\\(R=-3-4i\\) has both parts negative, so it lies in the third quadrant."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Complex number</th></tr><tr><td>P</td><td>\\(4+3i\\)</td></tr><tr><td>Q</td><td>\\(-2+5i\\)</td></tr><tr><td>R</td><td>\\(-3-4i\\)</td></tr><tr><td>S</td><td>\\(5-2i\\)</td></tr></table><p>These four complex numbers are plotted as points on the Argand plane.</p></div>The modulus of the complex number at point P is:",
      options: ["5","\\(\\sqrt{29}\\)","25","7"],
      ans: "5",
      reason: "\\(|4+3i|=\\sqrt{16+9}=5\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Complex number</th></tr><tr><td>P</td><td>\\(4+3i\\)</td></tr><tr><td>Q</td><td>\\(-2+5i\\)</td></tr><tr><td>R</td><td>\\(-3-4i\\)</td></tr><tr><td>S</td><td>\\(5-2i\\)</td></tr></table><p>These four complex numbers are plotted as points on the Argand plane.</p></div>Which point lies on the Argand plane with a negative real part and positive imaginary part?",
      options: ["Q","R","P","S"],
      ans: "Q",
      reason: "\\(Q=-2+5i\\) has real part \\(-2\\lt 0\\) and imaginary part \\(5>0\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Complex number</th></tr><tr><td>P</td><td>\\(4+3i\\)</td></tr><tr><td>Q</td><td>\\(-2+5i\\)</td></tr><tr><td>R</td><td>\\(-3-4i\\)</td></tr><tr><td>S</td><td>\\(5-2i\\)</td></tr></table><p>These four complex numbers are plotted as points on the Argand plane.</p></div>The point representing the conjugate of the number at S is:",
      options: ["\\((-5,-2)\\)","\\((5,2)\\)","\\((5,-2)\\)","\\((-5,2)\\)"],
      ans: "\\((5,2)\\)",
      reason: "The conjugate of \\(5-2i\\) is \\(5+2i\\), which is the point \\((5,2)\\)."
    }
    ];
  }
});
