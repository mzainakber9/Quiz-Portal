// Class 10 Math — Chapter 2: Quadratic Equations
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch2",
  label: "Chapter 2: Quadratic Equations",
  order: 2,
  questions: function () {
    return [
    {
      q: "Which of the following is a quadratic equation?",
      options: ["\\(ax+b=c\\)","\\(ax^2+bx+c\\)","\\(ax^2+bx+c=0,\\ a=0\\)","\\(ax^2+bx+c=0,\\ a\\neq0\\)"],
      ans: "\\(ax^2+bx+c=0,\\ a\\neq0\\)",
      reason: "A quadratic equation has the form \\(ax^2+bx+c=0\\) with \\(a\\ne0\\)."
    },
    {
      q: "How many roots of \\((x-3)(x-2)=6\\) exist?",
      options: ["No roots","1","2","0"],
      ans: "2",
      reason: "\\((x-3)(x-2)=6\\Rightarrow x^2-5x=0\\Rightarrow x(x-5)=0\\): two roots, \\(0\\) and \\(5\\)."
    },
    {
      q: "What should be added to \\(x^2+x\\) to make it a complete square?",
      options: ["\\(\\dfrac12\\)","4","\\(\\dfrac14\\)","1"],
      ans: "\\(\\dfrac14\\)",
      reason: "Add \\(\\left(\\tfrac12\\right)^2=\\tfrac14\\): \\(x^2+x+\\tfrac14=\\left(x+\\tfrac12\\right)^2\\)."
    },
    {
      q: "Solution set of \\(x^2-4=0\\) is:",
      options: ["\\(\\{0,4\\}\\)","\\(\\{\\}\\)","\\(\\{2,-2\\}\\)","\\(\\{4,-4\\}\\)"],
      ans: "\\(\\{2,-2\\}\\)",
      reason: "\\(x^2=4\\Rightarrow x=\\pm2\\), so the solution set is \\(\\{2,-2\\}\\)."
    },
    {
      q: "Roots of the equation \\((x-1)^2=9\\) are:",
      options: ["2, 4","\\(-2,-4\\)","\\(-4,2\\)","\\(-2,4\\)"],
      ans: "\\(-2,4\\)",
      reason: "\\(x-1=\\pm3\\Rightarrow x=4\\) or \\(x=-2\\)."
    },
    {
      q: "Solution set of \\(2^{2x}-2^{x+1}+1=0\\) is:",
      options: ["\\(\\{0\\}\\)","\\(\\{0,-1\\}\\)","\\(\\{1\\}\\)","\\(\\{0,1\\}\\)"],
      ans: "\\(\\{0\\}\\)",
      reason: "Put \\(t=2^x\\): \\(t^2-2t+1=0\\Rightarrow t=1\\Rightarrow 2^x=1\\Rightarrow x=0\\)."
    },
    {
      q: "Solution set of \\(x+\\dfrac1x=2\\) is:",
      options: ["\\(\\{-1\\}\\)","\\(\\{1\\}\\)","\\(\\{0\\}\\)","\\(\\{-1,1\\}\\)"],
      ans: "\\(\\{1\\}\\)",
      reason: "\\(x^2+1=2x\\Rightarrow(x-1)^2=0\\Rightarrow x=1\\)."
    },
    {
      q: "Which of the following is a reciprocal equation?",
      options: ["\\(x^2+2x+2=0\\)","\\(\\sqrt{2x+3}=0\\)","\\(x^4+2x^3+x^2+4x=0\\)","\\(x^4+x^3+x^2+x+1=0\\)"],
      ans: "\\(x^4+x^3+x^2+x+1=0\\)",
      reason: "A reciprocal equation has palindromic coefficients. \\(1,1,1,1,1\\) reads the same both ways."
    },
    {
      q: "2 and \\(-3\\) are roots of:",
      options: ["\\((x+2)(x-3)=0\\)","\\((x+2)(x+3)=0\\)","\\((x-2)(x+3)=0\\)","\\((x-2)(x-3)=0\\)"],
      ans: "\\((x-2)(x+3)=0\\)",
      reason: "Roots \\(2\\) and \\(-3\\) give factors \\((x-2)\\) and \\((x+3)\\)."
    },
    {
      q: "The discriminant of \\(ax^2+bx+c=0\\) is:",
      options: ["\\(b^2-4ac\\)","\\(4ac-b^2\\)","\\(b^2+4ac\\)","\\(-b^2-4ac\\)"],
      ans: "\\(b^2-4ac\\)",
      reason: "The discriminant is \\(b^2-4ac\\)."
    },
    {
      q: "If \\(S_1,S_2\\) are the roots of \\(ax^2+bx+c=0\\), then sum of roots is:",
      options: ["\\(\\dfrac ac\\)","\\(\\dfrac ca\\)","\\(-\\dfrac ba\\)","\\(\\dfrac ab\\)"],
      ans: "\\(-\\dfrac ba\\)",
      reason: "The sum of the roots is \\(-\\dfrac ba\\)."
    },
    {
      q: "Roots of the equation \\(x^2-5x+5=0\\) are:",
      options: ["Equal","Irrational","Rational","Imaginary"],
      ans: "Irrational",
      reason: "\\(D=25-20=5\\), which is positive but not a perfect square, so the roots are irrational."
    },
    {
      q: "Sum and product of roots of a quadratic equation are respectively 2 and 5. The equation is:",
      options: ["\\(x^2-2x-5=0\\)","\\(x^2+2x+5=0\\)","\\(x^2+2x-5=0\\)","\\(x^2-2x+5=0\\)"],
      ans: "\\(x^2-2x+5=0\\)",
      reason: "\\(x^2-(\\text{sum})x+\\text{product}=x^2-2x+5=0\\)."
    },
    {
      q: "The real roots of \\(8x^6-7x^3-1=0\\) include:",
      options: ["\\(-1\\) and \\(-\\dfrac12\\)","1 and \\(\\dfrac12\\)","1 and \\(-\\dfrac12\\)","\\(-1\\) and \\(\\dfrac12\\)"],
      ans: "1 and \\(-\\dfrac12\\)",
      reason: "Put \\(y=x^3\\): \\(8y^2-7y-1=(8y+1)(y-1)=0\\), so \\(x^3=1\\) or \\(x^3=-\\tfrac18\\), giving \\(x=1\\) and \\(x=-\\tfrac12\\)."
    },
    {
      q: "The value of \\(m\\) for which the roots of \\((m-1)x^2+2mx+m+3=0\\) are equal is:",
      options: ["\\(m=\\dfrac23\\)","\\(m=1\\)","\\(m=\\dfrac32\\)","\\(m=-\\dfrac32\\)"],
      ans: "\\(m=\\dfrac32\\)",
      reason: "Equal roots need \\(D=0\\): \\(4m^2-4(m-1)(m+3)=-8m+12=0\\Rightarrow m=\\tfrac32\\)."
    },
    {
      q: "With \\(m=\\dfrac32\\), the equal roots of \\((m-1)x^2+2mx+m+3=0\\) are:",
      options: ["\\(x=3\\) (double root)","\\(x=-3\\) (double root)","\\(x=-\\dfrac32\\) (double root)","\\(x=\\dfrac32\\) (double root)"],
      ans: "\\(x=-3\\) (double root)",
      reason: "With \\(m=\\tfrac32\\): \\(\\tfrac12x^2+3x+\\tfrac92=0\\Rightarrow x^2+6x+9=0\\Rightarrow x=-3\\)."
    },
    {
      q: "If \\(S_1,S_2\\) are the roots of \\(ax^2+bx+c=0\\), then \\((S_1-3)(S_2-3)\\) equals:",
      options: ["\\(\\dfrac{c+3b+9a}{a}\\)","\\(\\dfrac{c-3b+9a}{a}\\)","\\(\\dfrac{c+3b-9a}{a}\\)","\\(\\dfrac{c+3b+9a}{a^2}\\)"],
      ans: "\\(\\dfrac{c+3b+9a}{a}\\)",
      reason: "\\((S_1-3)(S_2-3)=S_1S_2-3(S_1+S_2)+9=\\dfrac ca+\\dfrac{3b}{a}+9=\\dfrac{c+3b+9a}{a}\\)."
    },
    {
      q: "If roots of \\(25x^2-5ax-b=0\\) are equal and \\(a^2+b=6\\), then the values of \\(a\\) and \\(b\\) are:",
      options: ["\\(a=\\pm4,\\ b=-2\\)","\\(a=\\pm2\\sqrt2,\\ b=-2\\)","\\(a=\\pm2,\\ b=-2\\)","\\(a=\\pm2\\sqrt2,\\ b=2\\)"],
      ans: "\\(a=\\pm2\\sqrt2,\\ b=-2\\)",
      reason: "Equal roots: \\(25a^2+100b=0\\Rightarrow b=-\\tfrac{a^2}{4}\\). With \\(a^2+b=6\\): \\(\\tfrac34a^2=6\\Rightarrow a^2=8\\), so \\(a=\\pm2\\sqrt2,\\ b=-2\\)."
    },
    {
      q: "If the volume of a rectangular box is \\(x^3+2x^2-5x-6\\) and its height is \\(x-2\\), its length and width are:",
      options: ["\\((x+2)\\) and \\((x+3)\\)","\\((x+1)\\) and \\((x-3)\\)","\\((x+1)\\) and \\((x+3)\\)","\\((x-1)\\) and \\((x-3)\\)"],
      ans: "\\((x+1)\\) and \\((x+3)\\)",
      reason: "\\(x^3+2x^2-5x-6\\) divided by \\((x-2)\\) gives \\(x^2+4x+3=(x+1)(x+3)\\)."
    },
    {
      q: "The standard form of a quadratic equation is:",
      options: ["\\(ax^2+bx+c=0,\\ a\\neq0\\)","\\(ax+b=0\\)","\\(ax^3+bx^2+c=0\\)","\\(ax^2+bx+c=0,\\ a=0\\)"],
      ans: "\\(ax^2+bx+c=0,\\ a\\neq0\\)",
      reason: "The standard form is \\(ax^2+bx+c=0\\) with \\(a\\ne0\\)."
    },
    {
      q: "In \\(ax^2+bx+c=0\\), the coefficient \\(a\\) must be:",
      options: ["Non-zero","Any real number including zero","Negative","Zero"],
      ans: "Non-zero",
      reason: "If \\(a=0\\) the \\(x^2\\) term vanishes and the equation is no longer quadratic, so \\(a\\ne0\\)."
    },
    {
      q: "A quadratic equation has at most how many roots?",
      options: ["1","2","3","Infinite"],
      ans: "2",
      reason: "A quadratic (degree 2) has at most 2 roots."
    },
    {
      q: "The equation \\(5x-3=0\\) is:",
      options: ["Reciprocal","Quadratic","Linear","Cubic"],
      ans: "Linear",
      reason: "\\(5x-3=0\\) has highest power 1, so it is linear."
    },
    {
      q: "The general quadratic equation \\(ax^2+bx+c=0\\) has degree:",
      options: ["1","0","3","2"],
      ans: "2",
      reason: "The highest power of \\(x\\) is 2, so the degree is 2."
    },
    {
      q: "If \\(a=0\\) in \\(ax^2+bx+c=0\\), the equation becomes:",
      options: ["Constant","Cubic","Quadratic","Linear"],
      ans: "Linear",
      reason: "With \\(a=0\\) the equation becomes \\(bx+c=0\\), which is linear."
    },
    {
      q: "The roots of \\(x^2=0\\) are:",
      options: ["1, -1","No roots","0, 1","0, 0 (equal)"],
      ans: "0, 0 (equal)",
      reason: "\\(x^2=0\\Rightarrow x=0\\) twice (equal roots)."
    },
    {
      q: "A quadratic equation in one variable contains the variable with highest power:",
      options: ["3","2","0","1"],
      ans: "2",
      reason: "A quadratic equation has \\(x\\) as its highest power at 2."
    },
    {
      q: "Solve by factorization: \\(x^2-5x+6=0\\).",
      options: ["\\(2, -3\\)","\\(-2, -3\\)","\\(-2, 3\\)","2, 3"],
      ans: "2, 3",
      reason: "\\(x^2-5x+6=(x-2)(x-3)=0\\Rightarrow x=2,3\\)."
    },
    {
      q: "Solve by factorization: \\(x^2-9=0\\).",
      options: ["\\(\\pm3\\)","9, -3","3, -9","\\(\\pm9\\)"],
      ans: "\\(\\pm3\\)",
      reason: "\\(x^2-9=(x-3)(x+3)=0\\Rightarrow x=\\pm3\\)."
    },
    {
      q: "Solve by factorization: \\(x^2+7x+12=0\\).",
      options: ["3, -4","3, 4","-3, 4","\\(-3, -4\\)"],
      ans: "\\(-3, -4\\)",
      reason: "\\(x^2+7x+12=(x+3)(x+4)=0\\Rightarrow x=-3,-4\\)."
    },
    {
      q: "Solve by factorization: \\(x^2-x-6=0\\).",
      options: ["-3, 2","-3, -2","3, -2","3, 2"],
      ans: "3, -2",
      reason: "\\(x^2-x-6=(x-3)(x+2)=0\\Rightarrow x=3,-2\\)."
    },
    {
      q: "Solve by factorization: \\(2x^2-3x-2=0\\).",
      options: ["\\(\\dfrac12, -2\\)","\\(\\dfrac12, 2\\)","\\(-\\dfrac12, 2\\)","\\(-\\dfrac12, -2\\)"],
      ans: "\\(-\\dfrac12, 2\\)",
      reason: "\\(2x^2-3x-2=(2x+1)(x-2)=0\\Rightarrow x=-\\tfrac12,2\\)."
    },
    {
      q: "Solve by factorization: \\(x^2-6x+9=0\\).",
      options: ["-3 (double root)","3 (double root)","3, -3","9 (double root)"],
      ans: "3 (double root)",
      reason: "\\(x^2-6x+9=(x-3)^2=0\\Rightarrow x=3\\) (double root)."
    },
    {
      q: "Solve by factorization: \\(x^2+2x=0\\).",
      options: ["0, 2","-2, 2","0, -2","0 only"],
      ans: "0, -2",
      reason: "\\(x(x+2)=0\\Rightarrow x=0,-2\\)."
    },
    {
      q: "Solve by factorization: \\(x^2-16=0\\).",
      options: ["\\(\\pm4\\)","4, -16","\\(\\pm16\\)","-4, 16"],
      ans: "\\(\\pm4\\)",
      reason: "\\(x^2-16=(x-4)(x+4)=0\\Rightarrow x=\\pm4\\)."
    },
    {
      q: "To complete the square for \\(x^2+6x\\), we add:",
      options: ["3","6","36","9"],
      ans: "9",
      reason: "Add \\(\\left(\\tfrac62\\right)^2=9\\)."
    },
    {
      q: "To complete the square for \\(x^2-10x\\), we add:",
      options: ["25","100","5","10"],
      ans: "25",
      reason: "Add \\(\\left(\\tfrac{10}{2}\\right)^2=25\\)."
    },
    {
      q: "Solve \\(x^2+4x-32=0\\) by completing the square.",
      options: ["4, 8","-4, 8","-4, -8","4, -8"],
      ans: "4, -8",
      reason: "\\(x^2+4x+4=36\\Rightarrow(x+2)^2=36\\Rightarrow x+2=\\pm6\\Rightarrow x=4,-8\\)."
    },
    {
      q: "Solve \\(x^2+8x=0\\) by completing the square.",
      options: ["4, -4","0, -8","0, 8","-8, 8"],
      ans: "0, -8",
      reason: "\\(x^2+8x+16=16\\Rightarrow(x+4)^2=16\\Rightarrow x=0,-8\\)."
    },
    {
      q: "Solve \\(x^2+6x-9=0\\) by completing the square.",
      options: ["\\(3\\pm3\\sqrt2\\)","\\(-6\\pm3\\sqrt2\\)","\\(-3\\pm\\sqrt2\\)","\\(-3\\pm3\\sqrt2\\)"],
      ans: "\\(-3\\pm3\\sqrt2\\)",
      reason: "\\(x^2+6x+9=18\\Rightarrow(x+3)^2=18\\Rightarrow x=-3\\pm3\\sqrt2\\)."
    },
    {
      q: "Solve \\(x^2+x+1=0\\) by completing the square.",
      options: ["\\(-\\dfrac12\\pm\\sqrt3\\,i\\)","\\(-\\dfrac12\\pm\\dfrac{\\sqrt3}{2}i\\)","\\(\\dfrac12\\pm\\dfrac{\\sqrt3}{2}i\\)","\\(-1\\pm\\dfrac{\\sqrt3}{2}i\\)"],
      ans: "\\(-\\dfrac12\\pm\\dfrac{\\sqrt3}{2}i\\)",
      reason: "\\(\\left(x+\\tfrac12\\right)^2=-\\tfrac34\\Rightarrow x=-\\tfrac12\\pm\\tfrac{\\sqrt3}{2}i\\)."
    },
    {
      q: "Solve \\(4x^2-8x-5=0\\) by completing the square.",
      options: ["\\(-\\dfrac52,-\\dfrac12\\)","\\(-\\dfrac52,\\dfrac12\\)","\\(\\dfrac52,\\dfrac12\\)","\\(\\dfrac52,-\\dfrac12\\)"],
      ans: "\\(\\dfrac52,-\\dfrac12\\)",
      reason: "\\(x^2-2x=\\tfrac54\\Rightarrow(x-1)^2=\\tfrac94\\Rightarrow x=1\\pm\\tfrac32\\Rightarrow x=\\tfrac52,-\\tfrac12\\)."
    },
    {
      q: "What value completes the square for \\(x^2-3x\\)?",
      options: ["\\(\\dfrac32\\)","3","9","\\(\\dfrac94\\)"],
      ans: "\\(\\dfrac94\\)",
      reason: "Add \\(\\left(\\tfrac32\\right)^2=\\tfrac94\\)."
    },
    {
      q: "The quadratic formula for \\(ax^2+bx+c=0\\) is:",
      options: ["\\(x=\\dfrac{-b\\pm\\sqrt{b^2+4ac}}{2a}\\)","\\(x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)","\\(x=\\dfrac{b\\pm\\sqrt{b^2-4ac}}{2a}\\)","\\(x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{a}\\)"],
      ans: "\\(x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)",
      reason: "The quadratic formula is \\(x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)."
    },
    {
      q: "Solve \\(x^2-9=0\\) using the quadratic formula.",
      options: ["\\(\\pm3\\)","3, -9","9, -3","\\(\\pm9\\)"],
      ans: "\\(\\pm3\\)",
      reason: "\\(a=1,b=0,c=-9\\): \\(x=\\dfrac{\\pm\\sqrt{36}}{2}=\\pm3\\)."
    },
    {
      q: "Solve \\(2x^2+5x+1=0\\) using the quadratic formula.",
      options: ["\\(\\dfrac{-5\\pm17}{4}\\)","\\(\\dfrac{-5\\pm\\sqrt{17}}{4}\\)","\\(\\dfrac{-5\\pm\\sqrt{17}}{2}\\)","\\(\\dfrac{5\\pm\\sqrt{17}}{4}\\)"],
      ans: "\\(\\dfrac{-5\\pm\\sqrt{17}}{4}\\)",
      reason: "\\(x=\\dfrac{-5\\pm\\sqrt{25-8}}{4}=\\dfrac{-5\\pm\\sqrt{17}}{4}\\)."
    },
    {
      q: "Solve \\(x^2-23x-24=0\\) using the quadratic formula.",
      options: ["24, -1","-24, 1","-24, -1","24, 1"],
      ans: "24, -1",
      reason: "\\(x=\\dfrac{23\\pm\\sqrt{529+96}}{2}=\\dfrac{23\\pm25}{2}\\Rightarrow x=24,-1\\)."
    },
    {
      q: "The discriminant of \\(x^2-4x+4=0\\) is:",
      options: ["-16","32","0","16"],
      ans: "0",
      reason: "\\(D=(-4)^2-4(1)(4)=0\\)."
    },
    {
      q: "The discriminant of \\(2x^2+5x+1=0\\) is:",
      options: ["9","25","33","17"],
      ans: "17",
      reason: "\\(D=5^2-4(2)(1)=17\\)."
    },
    {
      q: "The discriminant of \\(ax^2+bx+c=0\\) is given by:",
      options: ["\\(b^2-4ac\\)","\\(b^2+4ac\\)","\\(a^2-4bc\\)","\\(4ac-b^2\\)"],
      ans: "\\(b^2-4ac\\)",
      reason: "The discriminant is \\(b^2-4ac\\)."
    },
    {
      q: "If the discriminant of a quadratic equation is negative, the roots are:",
      options: ["Real and equal","Real and unequal","Imaginary (complex)","Rational"],
      ans: "Imaginary (complex)",
      reason: "If \\(D\\lt 0\\) the square root is imaginary, so the roots are complex (imaginary)."
    },
    {
      q: "If the discriminant of a quadratic equation is zero, the roots are:",
      options: ["Real, unequal and rational","Real, unequal and irrational","Real and equal","Imaginary"],
      ans: "Real and equal",
      reason: "If \\(D=0\\) the two roots coincide, so they are real and equal."
    },
    {
      q: "If the discriminant is positive but not a perfect square, the roots are:",
      options: ["Irrational and unequal","Imaginary","Equal","Rational and unequal"],
      ans: "Irrational and unequal",
      reason: "\\(D>0\\) but not a perfect square gives two unequal irrational roots."
    },
    {
      q: "The roots of \\(x^2-3x-28=0\\) are:",
      options: ["Rational and unequal","Rational and equal","Irrational","Imaginary"],
      ans: "Rational and unequal",
      reason: "\\(D=9+112=121=11^2\\), a perfect square, so the roots are rational and unequal."
    },
    {
      q: "The roots of \\(x^2-8x+16=0\\) are:",
      options: ["Imaginary","Rational and equal","Rational and unequal","Irrational"],
      ans: "Rational and equal",
      reason: "\\(D=64-64=0\\), so the roots are rational and equal."
    },
    {
      q: "The roots of \\(3y^2-5y+9=0\\) are:",
      options: ["Irrational","Rational and unequal","Rational and equal","Imaginary (complex)"],
      ans: "Imaginary (complex)",
      reason: "\\(D=25-108=-83\\lt 0\\), so the roots are imaginary."
    },
    {
      q: "The roots of \\(3t^2-6t+2=0\\) are:",
      options: ["Rational and equal","Irrational and unequal","Rational and unequal","Imaginary"],
      ans: "Irrational and unequal",
      reason: "\\(D=36-24=12\\), not a perfect square, so the roots are irrational and unequal."
    },
    {
      q: "For the roots of a quadratic equation to be real and equal, the discriminant must be:",
      options: ["Equal to zero","Less than zero","Greater than zero","Undefined"],
      ans: "Equal to zero",
      reason: "Real and equal roots need \\(D=b^2-4ac=0\\)."
    },
    {
      q: "For the roots of \\(x^2-6x+m=0\\) to be equal, the value of \\(m\\) is:",
      options: ["-9","9","3","6"],
      ans: "9",
      reason: "\\(D=36-4m=0\\Rightarrow m=9\\)."
    },
    {
      q: "The roots of \\((a^2+b^2)x^2+2(ac+bd)x+c^2+d^2=0\\) are:",
      options: ["Always rational","Imaginary, unless \\(ad=bc\\)","Always equal","Always real"],
      ans: "Imaginary, unless \\(ad=bc\\)",
      reason: "\\(D=4(ac+bd)^2-4(a^2+b^2)(c^2+d^2)=-4(ad-bc)^2\\le0\\), so the roots are imaginary unless \\(ad=bc\\)."
    },
    {
      q: "For the roots of \\((ax+c)^2=4bx\\) to be equal, the condition is:",
      options: ["\\(c=ab\\)","\\(b=a+c\\)","\\(b=ac\\)","\\(a=bc\\)"],
      ans: "\\(b=ac\\)",
      reason: "Expanding gives \\(a^2x^2+(2ac-4b)x+c^2=0\\). \\(D=16b(b-ac)=0\\Rightarrow b=ac\\)."
    },
    {
      q: "The roots of \\(x^2-2mx+m^2-1=0\\) (\\(m\\) real) are:",
      options: ["Always real","Always imaginary","Never real","Always equal"],
      ans: "Always real",
      reason: "\\(D=4m^2-4(m^2-1)=4>0\\) for every \\(m\\), so the roots are always real."
    },
    {
      q: "The roots of \\((a+b)x^2-ax-b=0\\) are:",
      options: ["Always imaginary","Never real","Always equal","Always real"],
      ans: "Always real",
      reason: "\\(D=a^2+4b(a+b)=(a+2b)^2\\ge0\\), so the roots are always real."
    },
    {
      q: "The equation \\(x+\\dfrac1x=2\\) reduces to the quadratic equation:",
      options: ["\\(x^2-2x+1=0\\)","\\(x^2-2x-1=0\\)","\\(x^2+2x+1=0\\)","\\(x^2+2x-1=0\\)"],
      ans: "\\(x^2-2x+1=0\\)",
      reason: "Multiply by \\(x\\): \\(x^2+1=2x\\Rightarrow x^2-2x+1=0\\)."
    },
    {
      q: "Solution set of \\(4^{x}-5\\cdot2^{x}+4=0\\) is:",
      options: ["\\(\\{0,2\\}\\)","\\(\\{1,4\\}\\)","\\(\\{0\\}\\)","\\(\\{2\\}\\)"],
      ans: "\\(\\{0,2\\}\\)",
      reason: "Put \\(t=2^x\\): \\(t^2-5t+4=0\\Rightarrow t=1,4\\Rightarrow x=0,2\\)."
    },
    {
      q: "A reciprocal equation is one in which the coefficients are:",
      options: ["Such that the constant term is zero","Symmetric (palindromic)","Such that the equation has only even powers","All equal to 1"],
      ans: "Symmetric (palindromic)",
      reason: "A reciprocal equation has coefficients that read the same forwards and backwards (palindromic)."
    },
    {
      q: "An example of a reciprocal (palindromic) equation is:",
      options: ["\\(x^2+2x+2=0\\)","\\(x^4+2x^3+x^2+4x=0\\)","\\(\\sqrt{2x+3}=0\\)","\\(x^4+2x^3+3x^2+2x+1=0\\)"],
      ans: "\\(x^4+2x^3+3x^2+2x+1=0\\)",
      reason: "\\(x^4+2x^3+3x^2+2x+1\\) has coefficients \\(1,2,3,2,1\\), which are palindromic."
    },
    {
      q: "The equation \\(8x^6-7x^3-1=0\\) can be reduced to a quadratic equation by substituting:",
      options: ["\\(y=x\\)","\\(y=x^3\\)","\\(y=x^6\\)","\\(y=x^2\\)"],
      ans: "\\(y=x^3\\)",
      reason: "Since \\(8x^6=8(x^3)^2\\), put \\(y=x^3\\) to get a quadratic."
    },
    {
      q: "Substituting \\(y=x^3\\) in \\(8x^6-7x^3-1=0\\) gives:",
      options: ["\\(8y^2-7y+1=0\\)","\\(8y^2-y-7=0\\)","\\(8y^2+7y-1=0\\)","\\(8y^2-7y-1=0\\)"],
      ans: "\\(8y^2-7y-1=0\\)",
      reason: "\\(8x^6-7x^3-1\\) becomes \\(8y^2-7y-1=0\\)."
    },
    {
      q: "The equation \\(8x^6-7x^3-1=0\\) has how many real roots (out of its 6 total roots)?",
      options: ["2","1","4","6"],
      ans: "2",
      reason: "\\(y=1\\Rightarrow x^3=1\\) and \\(y=-\\tfrac18\\Rightarrow x^3=-\\tfrac18\\). Each has one real cube root, so there are 2 real roots."
    },
    {
      q: "The equation \\(\\sqrt{2x+3}=x\\) is solved by first:",
      options: ["Squaring both sides","Factorizing directly","Taking the square root again","Dividing by \\(x\\)"],
      ans: "Squaring both sides",
      reason: "To remove the radical, square both sides."
    },
    {
      q: "An equation containing a radical expression is solved by squaring, and then:",
      options: ["Taking logarithms","Completing the square directly","Checking for extraneous roots","Ignoring negative roots"],
      ans: "Checking for extraneous roots",
      reason: "Squaring can introduce extra roots, so each solution must be checked in the original equation."
    },
    {
      q: "An exponential equation like \\(2^{2x}-2^{x+1}+1=0\\) is reduced to quadratic form by substituting:",
      options: ["\\(y=2^x\\)","\\(y=x\\)","\\(y=\\log x\\)","\\(y=2^{2x}\\)"],
      ans: "\\(y=2^x\\)",
      reason: "\\(2^{2x}=(2^x)^2\\), so put \\(y=2^x\\) to get a quadratic."
    },
    {
      q: "If \\(S_1,S_2\\) are roots of \\(ax^2+bx+c=0\\), then \\(S_1+S_2=\\)",
      options: ["\\(-\\dfrac ca\\)","\\(\\dfrac ba\\)","\\(\\dfrac ca\\)","\\(-\\dfrac ba\\)"],
      ans: "\\(-\\dfrac ba\\)",
      reason: "The sum of the roots is \\(-\\dfrac ba\\)."
    },
    {
      q: "If \\(S_1,S_2\\) are roots of \\(ax^2+bx+c=0\\), then \\(S_1S_2=\\)",
      options: ["\\(-\\dfrac ba\\)","\\(\\dfrac ba\\)","\\(-\\dfrac ca\\)","\\(\\dfrac ca\\)"],
      ans: "\\(\\dfrac ca\\)",
      reason: "The product of the roots is \\(\\dfrac ca\\)."
    },
    {
      q: "Sum and product of roots of \\(x^2-7x+5=0\\) are respectively:",
      options: ["7, 5","7, -5","-7, 5","-7, -5"],
      ans: "7, 5",
      reason: "For \\(x^2-7x+5=0\\): sum \\(=7\\), product \\(=5\\)."
    },
    {
      q: "Sum and product of roots of \\(3x^2-11x-4=0\\) are respectively:",
      options: ["\\(\\dfrac{11}3,-\\dfrac43\\)","\\(-\\dfrac{11}3,-\\dfrac43\\)","\\(\\dfrac{11}3,\\dfrac43\\)","\\(-\\dfrac{11}3,\\dfrac43\\)"],
      ans: "\\(\\dfrac{11}3,-\\dfrac43\\)",
      reason: "Sum \\(=\\dfrac{11}{3}\\), product \\(=-\\dfrac43\\)."
    },
    {
      q: "If roots of a quadratic equation are 5 and 6, the equation is:",
      options: ["\\(x^2+11x+30=0\\)","\\(x^2-11x+30=0\\)","\\(x^2-11x-30=0\\)","\\(x^2+11x-30=0\\)"],
      ans: "\\(x^2-11x+30=0\\)",
      reason: "\\(x^2-(5+6)x+5\\cdot6=x^2-11x+30=0\\)."
    },
    {
      q: "If roots of a quadratic equation are \\(3+2i\\) and \\(3-2i\\), the equation is:",
      options: ["\\(x^2+6x+13=0\\)","\\(x^2-6x+13=0\\)","\\(x^2+6x-13=0\\)","\\(x^2-6x-13=0\\)"],
      ans: "\\(x^2-6x+13=0\\)",
      reason: "Sum \\(=6\\), product \\(=9+4=13\\), so \\(x^2-6x+13=0\\)."
    },
    {
      q: "If \\(S,P\\) are the sum and product of roots, the required equation is:",
      options: ["\\(x^2-Px+S=0\\)","\\(x^2-Sx+P=0\\)","\\(x^2+Sx+P=0\\)","\\(x^2-Sx-P=0\\)"],
      ans: "\\(x^2-Sx+P=0\\)",
      reason: "The equation with sum \\(S\\) and product \\(P\\) is \\(x^2-Sx+P=0\\)."
    },
    {
      q: "If \\(S_1,S_2\\) are roots of \\(ax^2+bx+c=0\\), the equation with roots \\(2S_1,2S_2\\) is:",
      options: ["\\(ax^2-2bx+4c=0\\)","\\(ax^2+bx+2c=0\\)","\\(ax^2+4bx+2c=0\\)","\\(ax^2+2bx+4c=0\\)"],
      ans: "\\(ax^2+2bx+4c=0\\)",
      reason: "New sum \\(=-\\tfrac{2b}{a}\\), new product \\(=\\tfrac{4c}{a}\\), so \\(x^2+\\tfrac{2b}{a}x+\\tfrac{4c}{a}=0\\), i.e. \\(ax^2+2bx+4c=0\\)."
    },
    {
      q: "\\(S_1^2+S_2^2\\) in terms of \\(S_1+S_2\\) and \\(S_1S_2\\) is:",
      options: ["\\((S_1+S_2)^2+2S_1S_2\\)","\\((S_1+S_2)^2\\)","\\((S_1+S_2)^2-2S_1S_2\\)","\\((S_1-S_2)^2+2S_1S_2\\)"],
      ans: "\\((S_1+S_2)^2-2S_1S_2\\)",
      reason: "\\(S_1^2+S_2^2=(S_1+S_2)^2-2S_1S_2\\)."
    },
    {
      q: "\\(\\dfrac1{S_1}+\\dfrac1{S_2}\\) equals:",
      options: ["\\(S_1S_2\\)","\\(S_1+S_2\\)","\\(\\dfrac{S_1+S_2}{S_1S_2}\\)","\\(\\dfrac{S_1S_2}{S_1+S_2}\\)"],
      ans: "\\(\\dfrac{S_1+S_2}{S_1S_2}\\)",
      reason: "\\(\\dfrac1{S_1}+\\dfrac1{S_2}=\\dfrac{S_2+S_1}{S_1S_2}\\)."
    },
    {
      q: "If \\(S_1,S_2\\) are roots of \\(ax^2+bx+c=0\\), then \\((S_1-3)(S_2-3)\\) equals:",
      options: ["\\(\\dfrac{c+3b-9a}{a}\\)","\\(\\dfrac{c-3b+9a}{a}\\)","\\(\\dfrac{c+3b+9a}{a}\\)","\\(\\dfrac{c+3b+9a}{a^2}\\)"],
      ans: "\\(\\dfrac{c+3b+9a}{a}\\)",
      reason: "\\((S_1-3)(S_2-3)=\\dfrac ca+\\dfrac{3b}{a}+9=\\dfrac{c+3b+9a}{a}\\)."
    },
    {
      q: "If roots of \\(25x^2-5ax-b=0\\) are equal and \\(a^2+b=6\\), then:",
      options: ["\\(a=\\pm4,\\ b=-2\\)","\\(a=\\pm2\\sqrt2,\\ b=-2\\)","\\(a=\\pm2,\\ b=-2\\)","\\(a=\\pm2\\sqrt2,\\ b=2\\)"],
      ans: "\\(a=\\pm2\\sqrt2,\\ b=-2\\)",
      reason: "Equal roots give \\(25a^2+100b=0\\Rightarrow b=-\\tfrac{a^2}{4}\\). With \\(a^2+b=6\\): \\(a^2=8\\), so \\(a=\\pm2\\sqrt2,\\ b=-2\\)."
    },
    {
      q: "\\((S_1-S_2)^2\\) equals:",
      options: ["\\(S_1^2-S_2^2\\)","\\((S_1+S_2)^2-2S_1S_2\\)","\\((S_1+S_2)^2-4S_1S_2\\)","\\((S_1+S_2)^2+4S_1S_2\\)"],
      ans: "\\((S_1+S_2)^2-4S_1S_2\\)",
      reason: "\\((S_1-S_2)^2=(S_1+S_2)^2-4S_1S_2\\)."
    },
    {
      q: "If sum of roots is 2 and product is 5, the required equation is:",
      options: ["\\(x^2+2x+5=0\\)","\\(x^2+2x-5=0\\)","\\(x^2-2x+5=0\\)","\\(x^2-2x-5=0\\)"],
      ans: "\\(x^2-2x+5=0\\)",
      reason: "\\(x^2-2x+5=0\\) has sum 2 and product 5."
    },
    {
      q: "\\(S_1^3+S_2^3\\) can be written as:",
      options: ["\\((S_1+S_2)^3-3S_1S_2(S_1+S_2)\\)","\\((S_1+S_2)^3+3S_1S_2\\)","\\((S_1+S_2)(S_1^2+S_2^2)\\)","\\((S_1-S_2)^3\\)"],
      ans: "\\((S_1+S_2)^3-3S_1S_2(S_1+S_2)\\)",
      reason: "\\(S_1^3+S_2^3=(S_1+S_2)^3-3S_1S_2(S_1+S_2)\\)."
    },
    {
      q: "Solve the system \\(x+y=7\\) and \\(x^2-xy+y^2=13\\). The solution set is:",
      options: ["\\(\\{(4,3),(3,4)\\}\\)","\\(\\{(4,3)\\}\\)","\\(\\{(7,0)\\}\\)","\\(\\{(3,3)\\}\\)"],
      ans: "\\(\\{(4,3),(3,4)\\}\\)",
      reason: "\\(x^2-xy+y^2=(x+y)^2-3xy=49-3xy=13\\Rightarrow xy=12\\). So \\(x,y\\) are the roots of \\(t^2-7t+12=0\\): \\(3\\) and \\(4\\)."
    },
    {
      q: "Solving \\(x^2+y^2=25\\) and \\(2x^2+3y^2=66\\) gives \\(y^2=\\)",
      options: ["9","66","25","16"],
      ans: "16",
      reason: "\\(x^2=25-y^2\\). Then \\(2(25-y^2)+3y^2=66\\Rightarrow y^2=16\\)."
    },
    {
      q: "With \\(y^2=16\\) in \\(x^2+y^2=25\\), \\(x^2=\\)",
      options: ["41","16","9","-9"],
      ans: "9",
      reason: "\\(x^2=25-16=9\\)."
    },
    {
      q: "A system of equations having a common solution is called a system of:",
      options: ["Independent equations","Simultaneous equations","Symmetric equations","Reducible equations"],
      ans: "Simultaneous equations",
      reason: "Equations that share a common solution form a system of simultaneous equations."
    },
    {
      q: "The solution of a system of equations in \\(x,y\\) is the set of:",
      options: ["Ordered pairs \\((x,y)\\) satisfying both equations","Only \\(x\\) values","Coefficients of the equations","Only \\(y\\) values"],
      ans: "Ordered pairs \\((x,y)\\) satisfying both equations",
      reason: "A solution of a system is an ordered pair \\((x,y)\\) that satisfies both equations."
    },
    {
      q: "When one equation is linear and the other quadratic, the usual method of solving is:",
      options: ["Graphing only","Substitution","Cross multiplication","Completing the square only"],
      ans: "Substitution",
      reason: "With one linear and one quadratic equation, solve the linear one for a variable and substitute."
    },
    {
      q: "An equation of the form \\(ax^2+bxy+cy^2=0\\) (all terms of degree 2) is called:",
      options: ["Linear","Reciprocal","Non-homogeneous","Homogeneous"],
      ans: "Homogeneous",
      reason: "An equation where every term has degree 2 is called homogeneous."
    },
    {
      q: "A group of 1025 students forms two square patterns, one having 5 more students per side than the other. If \\(x\\) is the smaller side, the equation formed is:",
      options: ["\\(x(x+5)=1025\\)","\\(x^2+(x-5)^2=1025\\)","\\(2x+5=1025\\)","\\(x^2+(x+5)^2=1025\\)"],
      ans: "\\(x^2+(x+5)^2=1025\\)",
      reason: "The smaller square has side \\(x\\), the larger \\(x+5\\): \\(x^2+(x+5)^2=1025\\)."
    },
    {
      q: "Sum of squares of two positive consecutive numbers is 145. If the numbers are \\(n\\) and \\(n+1\\), an equation used is:",
      options: ["\\(n^2+(n+1)^2=17\\)","\\(n^2+(n+1)^2=145\\)","\\(n^2-(n+1)^2=145\\)","\\(2n+1=145\\)"],
      ans: "\\(n^2+(n+1)^2=145\\)",
      reason: "The two numbers are \\(n\\) and \\(n+1\\), so \\(n^2+(n+1)^2=145\\)."
    },
    {
      q: "A ball's height is modeled by \\(h(t)=-5t^2+20t+2\\). The ball hits the ground when:",
      options: ["\\(h(t)=2\\)","\\(h(t)=0\\)","\\(t=0\\)","\\(h'(t)=0\\)"],
      ans: "\\(h(t)=0\\)",
      reason: "The ball is on the ground when the height is zero: \\(h(t)=0\\)."
    },
    {
      q: "The stopping distance is modeled by \\(d(x)=0.05x^2+0.4x\\). To find the speed when \\(d(x)=30\\), we solve:",
      options: ["\\(0.05x^2+0.4x+30=0\\)","\\(0.05x^2-0.4x-30=0\\)","\\(0.05x^2+0.4x-30=0\\)","\\(0.05x^2+0.4x=0\\)"],
      ans: "\\(0.05x^2+0.4x-30=0\\)",
      reason: "Set \\(0.05x^2+0.4x=30\\), i.e. \\(0.05x^2+0.4x-30=0\\)."
    },
    {
      q: "If the volume of a rectangular box is \\(x^3+6x^2+11x+6\\) and its height is \\(x+1\\), its length and width are:",
      options: ["\\((x+1)\\) and \\((x+3)\\)","\\((x-2)\\) and \\((x-3)\\)","\\((x+2)\\) and \\((x-3)\\)","\\((x+2)\\) and \\((x+3)\\)"],
      ans: "\\((x+2)\\) and \\((x+3)\\)",
      reason: "\\(x^3+6x^2+11x+6=(x+1)(x+2)(x+3)\\). Removing the height \\((x+1)\\) leaves \\((x+2)\\) and \\((x+3)\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Time \\(t\\) (s)</th><th>Height \\(h(t)\\) (m)</th></tr><tr><td>Model</td><td>\\(h(t)=-5t^2+20t+2\\)</td></tr></table><p>A ball is thrown upward and its height above the ground is modeled by the equation above.</p></div>The equation used to find when the ball hits the ground is:",
      options: ["\\(-5t^2+2=0\\)","\\(20t+2=0\\)","\\(-5t^2+20t=0\\)","\\(-5t^2+20t+2=0\\)"],
      ans: "\\(-5t^2+20t+2=0\\)",
      reason: "The ball hits the ground when \\(h(t)=0\\): \\(-5t^2+20t+2=0\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Time \\(t\\) (s)</th><th>Height \\(h(t)\\) (m)</th></tr><tr><td>Model</td><td>\\(h(t)=-5t^2+20t+2\\)</td></tr></table><p>A ball is thrown upward and its height above the ground is modeled by the equation above.</p></div>The discriminant of \\(-5t^2+20t+2=0\\) is:",
      options: ["440","40","360","400"],
      ans: "440",
      reason: "\\(D=20^2-4(-5)(2)=400+40=440\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Time \\(t\\) (s)</th><th>Height \\(h(t)\\) (m)</th></tr><tr><td>Model</td><td>\\(h(t)=-5t^2+20t+2\\)</td></tr></table><p>A ball is thrown upward and its height above the ground is modeled by the equation above.</p></div>Since the discriminant is positive and not a perfect square, the roots of the equation are:",
      options: ["Imaginary","Rational and unequal","Rational and equal","Irrational and unequal"],
      ans: "Irrational and unequal",
      reason: "\\(D=440>0\\) and is not a perfect square, so the roots are irrational and unequal."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Time \\(t\\) (s)</th><th>Height \\(h(t)\\) (m)</th></tr><tr><td>Model</td><td>\\(h(t)=-5t^2+20t+2\\)</td></tr></table><p>A ball is thrown upward and its height above the ground is modeled by the equation above.</p></div>The sum of the two roots (times) of the equation \\(-5t^2+20t+2=0\\) is:",
      options: ["20","0.4","4","-4"],
      ans: "4",
      reason: "Sum of roots \\(=-\\dfrac{20}{-5}=4\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Expression</th></tr><tr><td>Length</td><td>\\(x+4\\)</td></tr><tr><td>Width</td><td>\\(x\\)</td></tr><tr><td>Area</td><td>96 square units</td></tr></table><p>A rectangular garden's length is 4 units more than its width, and its area is 96 square units.</p></div>The equation formed for the width \\(x\\) is:",
      options: ["\\(x^2+4x+96=0\\)","\\(4x-96=0\\)","\\(x^2+4x-96=0\\)","\\(x^2-4x-96=0\\)"],
      ans: "\\(x^2+4x-96=0\\)",
      reason: "Area \\(=x(x+4)=96\\Rightarrow x^2+4x-96=0\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Expression</th></tr><tr><td>Length</td><td>\\(x+4\\)</td></tr><tr><td>Width</td><td>\\(x\\)</td></tr><tr><td>Area</td><td>96 square units</td></tr></table><p>A rectangular garden's length is 4 units more than its width, and its area is 96 square units.</p></div>Solving \\(x^2+4x-96=0\\) by factorization gives \\(x=\\)",
      options: ["8","-12","-8","12"],
      ans: "8",
      reason: "\\(x^2+4x-96=(x+12)(x-8)=0\\Rightarrow x=8\\) (positive value; width cannot be negative)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Expression</th></tr><tr><td>Length</td><td>\\(x+4\\)</td></tr><tr><td>Width</td><td>\\(x\\)</td></tr><tr><td>Area</td><td>96 square units</td></tr></table><p>A rectangular garden's length is 4 units more than its width, and its area is 96 square units.</p></div>The width and length of the garden are respectively:",
      options: ["12 and 16","8 and 4","8 and 12","6 and 10"],
      ans: "8 and 12",
      reason: "Width \\(=8\\), length \\(=8+4=12\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Expression</th></tr><tr><td>Length</td><td>\\(x+4\\)</td></tr><tr><td>Width</td><td>\\(x\\)</td></tr><tr><td>Area</td><td>96 square units</td></tr></table><p>A rectangular garden's length is 4 units more than its width, and its area is 96 square units.</p></div>The sum of the roots of \\(x^2+4x-96=0\\) is:",
      options: ["4","96","-4","-96"],
      ans: "-4",
      reason: "Sum of roots \\(=-\\dfrac{4}{1}=-4\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Discriminant \\(b^2-4ac\\)</th></tr><tr><td>\\(x^2-6x+9=0\\)</td><td>?</td></tr><tr><td>\\(x^2+2x+5=0\\)</td><td>?</td></tr><tr><td>\\(x^2-5x+2=0\\)</td><td>?</td></tr></table></div>The discriminant of \\(x^2-6x+9=0\\) is:",
      options: ["-36","36","0","9"],
      ans: "0",
      reason: "\\(D=(-6)^2-4(1)(9)=0\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Discriminant \\(b^2-4ac\\)</th></tr><tr><td>\\(x^2-6x+9=0\\)</td><td>?</td></tr><tr><td>\\(x^2+2x+5=0\\)</td><td>?</td></tr><tr><td>\\(x^2-5x+2=0\\)</td><td>?</td></tr></table></div>The nature of the roots of \\(x^2+2x+5=0\\) is:",
      options: ["Imaginary","Rational and equal","Irrational","Rational and unequal"],
      ans: "Imaginary",
      reason: "\\(D=4-20=-16\\lt 0\\), so the roots are imaginary."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Discriminant \\(b^2-4ac\\)</th></tr><tr><td>\\(x^2-6x+9=0\\)</td><td>?</td></tr><tr><td>\\(x^2+2x+5=0\\)</td><td>?</td></tr><tr><td>\\(x^2-5x+2=0\\)</td><td>?</td></tr></table></div>The discriminant of \\(x^2-5x+2=0\\) is:",
      options: ["17","-25","25","33"],
      ans: "17",
      reason: "\\(D=25-4(1)(2)=17\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Discriminant \\(b^2-4ac\\)</th></tr><tr><td>\\(x^2-6x+9=0\\)</td><td>?</td></tr><tr><td>\\(x^2+2x+5=0\\)</td><td>?</td></tr><tr><td>\\(x^2-5x+2=0\\)</td><td>?</td></tr></table></div>Which of the three equations has rational and equal roots?",
      options: ["None of them","\\(x^2-6x+9=0\\)","\\(x^2-5x+2=0\\)","\\(x^2+2x+5=0\\)"],
      ans: "\\(x^2-6x+9=0\\)",
      reason: "\\(x^2-6x+9\\) has \\(D=0\\) with root 3 (rational, equal). \\(D=17\\) is irrational and \\(D=-16\\) is imaginary."
    }
    ];
  }
});
