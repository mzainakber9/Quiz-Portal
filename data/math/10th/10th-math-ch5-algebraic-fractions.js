// Class 10 Math — Chapter 5: Algebraic Fractions
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch5",
  label: "Chapter 5: Algebraic Fractions",
  order: 5,
  questions: function () {
    return [
    {
      q: "An expression which is the ratio of two polynomials but the polynomial in the denominator is non-zero is called:",
      options: ["Polynomial","Compound expression","Irrational expression","Rational expression"],
      ans: "Rational expression",
      reason: "A ratio of two polynomials whose denominator is a non-zero polynomial is a rational expression."
    },
    {
      q: "The degree of \\(x^2y^3-\\dfrac{xy^2z}{3y}-\\sqrt{25}\\,z^5\\) is:",
      options: ["6","None of these","5","7"],
      ans: "5",
      reason: "The terms have degrees \\(5\\) (\\(x^2y^3\\)), \\(3\\) (\\(\\tfrac13xyz\\)) and \\(5\\) (\\(5z^5\\)), so the degree is 5."
    },
    {
      q: "A constant polynomial is also called a:",
      options: ["No degree polynomial","Linear polynomial","Expression","Zero degree polynomial"],
      ans: "Zero degree polynomial",
      reason: "A non-zero constant such as \\(-2\\) has degree 0, so it is a zero-degree polynomial."
    },
    {
      q: "Ali is 2 years younger than his sister Ayesha. If Ayesha's present age is \\(x\\) years, the age of Ali after 5 years will be:",
      options: ["\\((x+3)\\) years","\\((x-2)\\) years","\\((x-7)\\) years","\\((x+7)\\) years"],
      ans: "\\((x+3)\\) years",
      reason: "Ali is \\(x-2\\) now. After 5 years his age is \\(x-2+5=x+3\\)."
    },
    {
      q: "The value of \\(2\\{x^3-(x^2-(3-2x^2))\\}\\) at \\(x=2\\) is:",
      options: ["2","14","6","\\(-2\\)"],
      ans: "\\(-2\\)",
      reason: "\\(2\\{x^3-(x^2-3+2x^2)\\}=2(x^3-3x^2+3)\\). At \\(x=2\\): \\(2(8-12+3)=-2\\)."
    },
    {
      q: "Reduced form of the expression \\(\\dfrac{x^2y^3-y^2x^3+x^2y^2z}{x-y-z}\\) is:",
      options: ["\\(x^2y^2\\)","\\(-x^2y^2\\)","Not possible","\\(\\dfrac{x^2y^2(x-y-z)}{y-x+z}\\)"],
      ans: "\\(-x^2y^2\\)",
      reason: "The numerator is \\(x^2y^2(y-x+z)=-x^2y^2(x-y-z)\\). Dividing by \\((x-y-z)\\) leaves \\(-x^2y^2\\)."
    },
    {
      q: "If \\(y=2-\\dfrac{1}{y}\\), the value of \\(y^2+\\dfrac{1}{y^2}\\) is:",
      options: ["2","Not possible","Zero","4"],
      ans: "2",
      reason: "\\(y=2-\\tfrac1y\\Rightarrow y+\\tfrac1y=2\\). Squaring: \\(y^2+\\tfrac1{y^2}=4-2=2\\)."
    },
    {
      q: "Simplified form of \\(\\dfrac{(a+b)^2-(a-b)^2}{8ab}\\) is:",
      options: ["\\(\\dfrac{1}{2}\\)","\\(\\dfrac{2(a^2+b^2)}{8ab}\\)","2","\\(\\dfrac{a^2+b^2}{ab}\\)"],
      ans: "\\(\\dfrac{1}{2}\\)",
      reason: "\\((a+b)^2-(a-b)^2=4ab\\), so the expression is \\(\\dfrac{4ab}{8ab}=\\dfrac12\\)."
    },
    {
      q: "Difference of the sum of \\(a\\) and \\(b\\) from the product of \\(a\\) and \\(b\\) is:",
      options: ["\\(ab-a-b\\)","\\(a+b-ab\\)","None","\\(2ab-b\\)"],
      ans: "\\(ab-a-b\\)",
      reason: "The sum is \\(a+b\\). Its difference from the product is \\(ab-(a+b)=ab-a-b\\)."
    },
    {
      q: "\\(\\dfrac{x^3y^3+y^3z^3+z^3x^3}{x^3y^3z^3}=\\)",
      options: ["\\(\\dfrac{1}{x^3}+\\dfrac{1}{y^3}+\\dfrac{1}{z^3}\\)","\\(x^3+y^3+z^3\\)","\\(\\dfrac{1}{x^6}+\\dfrac{1}{y^6}+\\dfrac{1}{z^6}\\)","\\(x^6+y^6+z^6\\)"],
      ans: "\\(\\dfrac{1}{x^3}+\\dfrac{1}{y^3}+\\dfrac{1}{z^3}\\)",
      reason: "Divide each term by \\(x^3y^3z^3\\): \\(\\dfrac1{z^3}+\\dfrac1{x^3}+\\dfrac1{y^3}\\)."
    },
    {
      q: "Leading coefficient in \\(\\dfrac{x^2}{2}-\\dfrac{1}{8}-\\dfrac{x^4}{4}+\\dfrac{x^3}{7}\\) is:",
      options: ["\\(\\dfrac{1}{2}\\)","\\(\\dfrac{1}{4}\\)","\\(\\dfrac{1}{7}\\)","\\(-\\dfrac{1}{4}\\)"],
      ans: "\\(-\\dfrac{1}{4}\\)",
      reason: "The highest power is \\(x^4\\) with coefficient \\(-\\tfrac14\\), the leading coefficient."
    },
    {
      q: "Coefficients in the polynomial \\(\\sqrt{16}x^2y-\\dfrac{1}{2}y^3+\\dfrac{22}{7}z\\) are the elements of the set of:",
      options: ["Rational numbers","Odd numbers","Irrational numbers","Integers"],
      ans: "Rational numbers",
      reason: "The coefficients \\(4,\\ -\\tfrac12,\\ \\tfrac{22}{7}\\) are all rational numbers."
    },
    {
      q: "The degree of the quotient in \\((x-y)^3\\div(x-y)^2\\) will be:",
      options: ["No quotient","2","1","3"],
      ans: "1",
      reason: "\\((x-y)^3\\div(x-y)^2=x-y\\), which has degree 1."
    },
    {
      q: "The circumference of a circle of radius \\(12.5\\) cm (using \\(\\pi=\\dfrac{22}{7}\\)) is:",
      options: ["\\(\\dfrac{550}{7}\\) cm (\\(\\approx78.57\\) cm)","78 cm exactly","\\(\\dfrac{1100}{7}\\) cm","\\(\\dfrac{275}{7}\\) cm"],
      ans: "\\(\\dfrac{550}{7}\\) cm (\\(\\approx78.57\\) cm)",
      reason: "\\(C=2\\pi r=2\\times\\tfrac{22}{7}\\times12.5=\\tfrac{550}{7}\\approx78.57\\) cm."
    },
    {
      q: "The surface area of a sphere of radius \\(1.4\\) inches, using \\(S=4\\times\\dfrac{22}{7}r^2\\), is:",
      options: ["12.32 sq. inches","6.16 sq. inches","24.64 sq. inches","49.28 sq. inches"],
      ans: "24.64 sq. inches",
      reason: "\\(S=4\\times\\tfrac{22}{7}\\times(1.4)^2=4\\times\\tfrac{22}{7}\\times1.96=24.64\\) sq. in."
    },
    {
      q: "The radius of a sphere whose surface area is \\(38\\tfrac{1}{2}\\) square feet, using \\(S=4\\times\\dfrac{22}{7}r^2\\), is:",
      options: ["3.5 ft","7 ft","1.75 ft","3.0625 ft"],
      ans: "1.75 ft",
      reason: "\\(38.5=\\tfrac{88}{7}r^2\\Rightarrow r^2=3.0625\\Rightarrow r=1.75\\) ft."
    },
    {
      q: "Which of the following sets do NOT represent the sides of a right-angled triangle (using \\(c^2=a^2+b^2\\))?",
      options: ["12, 35, 36","7, 24, 25","3, 4, 5","1.6, 6.3, 6.5"],
      ans: "12, 35, 36",
      reason: "\\(12^2+35^2=1369=37^2\\), so the hypotenuse would be 37, not 36. The other sets satisfy \\(c^2=a^2+b^2\\)."
    },
    {
      q: "If \\(a=3,\\,b=4,\\,c=1\\), the value of \\(\\sqrt{2ab+4ac}+\\sqrt{9b}+\\dfrac{2abc}{3}\\) is:",
      options: ["14","10","16","20"],
      ans: "20",
      reason: "\\(\\sqrt{24+12}=6\\), \\(\\sqrt{36}=6\\), \\(\\tfrac{2(3)(4)(1)}{3}=8\\). Sum \\(=20\\)."
    },
    {
      q: "Subtracting the sum of \\((2x^3-3x+4)\\) and \\((-3x^2+2x-7)\\) from \\(4x^3-3x^2+x-6-\\{2x^3-(x-6)\\}\\) gives:",
      options: ["\\(3x-9\\)","\\(3x-3\\)","\\(3x+9\\)","\\(-3x-9\\)"],
      ans: "\\(3x-9\\)",
      reason: "The sum is \\(2x^3-3x^2-x-3\\). The first expression is \\(2x^3-3x^2+2x-12\\). Their difference is \\(3x-9\\)."
    },
    {
      q: "Dividing the product of \\((x-2)(x+3)(2x-7)\\) by the sum of \\(3(x^2-2x-2)\\) and \\((5x-x^2-15)\\) gives:",
      options: ["\\(x+2\\)","\\(x-7\\)","\\(2x-2\\)","\\(x-2\\)"],
      ans: "\\(x-2\\)",
      reason: "The divisor is \\(3x^2-6x-6+5x-x^2-15=2x^2-x-21=(2x-7)(x+3)\\). Cancelling leaves \\(x-2\\)."
    },
    {
      q: "Simplify \\(\\dfrac{x}{x+2}-\\dfrac{5x+3}{x-2}+\\dfrac{1}{2}\\):",
      options: ["\\(\\dfrac{-7x^2+30x-16}{2(x^2-4)}\\)","\\(\\dfrac{-7x^2-30x-16}{2(x^2-4)}\\)","\\(\\dfrac{7x^2+30x+16}{2(x^2-4)}\\)","\\(\\dfrac{-7x^2-30x-16}{x^2-4}\\)"],
      ans: "\\(\\dfrac{-7x^2-30x-16}{2(x^2-4)}\\)",
      reason: "LCD \\(=2(x^2-4)\\). Numerator: \\(2x(x-2)-2(5x+3)(x+2)+(x^2-4)=-7x^2-30x-16\\)."
    },
    {
      q: "Simplify \\(\\dfrac{x}{x^2-y^2}\\times\\dfrac{x^2+2xy+y^2}{x+y}\\div\\dfrac{3x}{x-y}\\):",
      options: ["3","\\(\\dfrac{x}{3}\\)","\\(\\dfrac{1}{3x}\\)","\\(\\dfrac{1}{3}\\)"],
      ans: "\\(\\dfrac{1}{3}\\)",
      reason: "\\(\\dfrac{x}{(x-y)(x+y)}\\cdot(x+y)\\cdot\\dfrac{x-y}{3x}=\\dfrac13\\)."
    },
    {
      q: "Solve \\(\\dfrac{12}{x^2-16}-\\dfrac{24}{x-4}=3\\):",
      options: ["\\(x=-2,6\\)","\\(x=2,-6\\)","\\(x=2,6\\)","\\(x=-2,-6\\)"],
      ans: "\\(x=-2,-6\\)",
      reason: "Multiply by \\(x^2-16\\): \\(12-24(x+4)=3(x^2-16)\\Rightarrow x^2+8x+12=0\\Rightarrow x=-2,-6\\). Neither makes a denominator zero."
    },
    {
      q: "Solve \\(\\dfrac{y}{2y-6}-\\dfrac{3}{y^2-6y+9}=\\dfrac{y-2}{3y-9}\\):",
      options: ["\\(y=-5,-6\\)","\\(y=-5,6\\)","\\(y=5,6\\)","\\(y=5,-6\\)"],
      ans: "\\(y=5,-6\\)",
      reason: "The LCD is \\(6(y-3)^2\\): \\(3y(y-3)-18=2(y-2)(y-3)\\Rightarrow y^2+y-30=0\\Rightarrow y=5,-6\\)."
    },
    {
      q: "When checking a possible solution of a rational equation, it is necessary to verify that the solution does not make any denominator zero, because:",
      options: ["It is irrelevant to the solution","It would always be the correct answer","It changes the degree of the polynomial","Such a value would make the original expression undefined (extraneous)"],
      ans: "Such a value would make the original expression undefined (extraneous)",
      reason: "A value that makes a denominator zero is not allowed (undefined), so it is an extraneous solution."
    },
    {
      q: "A polynomial is an algebraic expression in which the exponents of the variables are:",
      options: ["Negative integers only","Any real numbers","Non-negative integers","Fractions only"],
      ans: "Non-negative integers",
      reason: "In a polynomial the exponents of the variables are non-negative integers."
    },
    {
      q: "Which of the following is NOT a polynomial?",
      options: ["0","\\(3x^2+2x-1\\)","\\(\\sqrt2\\,x^4-\\pi x^2\\)","\\(x^{-3}\\)"],
      ans: "\\(x^{-3}\\)",
      reason: "\\(x^{-3}\\) has a negative exponent, so it is not a polynomial."
    },
    {
      q: "A constant polynomial (e.g. \\(-2\\)) is also called a:",
      options: ["Linear polynomial","No-degree polynomial","Quadratic polynomial","Zero degree polynomial"],
      ans: "Zero degree polynomial",
      reason: "A constant polynomial has degree 0, so it is called a zero-degree polynomial."
    },
    {
      q: "An algebraic expression which is the ratio of two polynomials, with a non-zero polynomial in the denominator, is called:",
      options: ["An irrational expression","A compound expression","A rational expression","A polynomial"],
      ans: "A rational expression",
      reason: "A ratio of two polynomials with a non-zero denominator is a rational expression."
    },
    {
      q: "An algebraic expression may contain:",
      options: ["Only numbers","Only variables","Only grouping symbols","Numbers, signs of operation, variables and grouping symbols"],
      ans: "Numbers, signs of operation, variables and grouping symbols",
      reason: "An algebraic expression can include numbers, operation signs, variables and grouping symbols."
    },
    {
      q: "A rational expression is undefined when:",
      options: ["Its numerator equals zero","Never","Its denominator equals zero","Both numerator and denominator equal zero"],
      ans: "Its denominator equals zero",
      reason: "A fraction is undefined when its denominator is zero."
    },
    {
      q: "Algebraic expressions are classified into:",
      options: ["Linear and quadratic expressions only","Only polynomial expressions","Polynomial, rational and irrational expressions","Only rational expressions"],
      ans: "Polynomial, rational and irrational expressions",
      reason: "Algebraic expressions are polynomial, rational or irrational."
    },
    {
      q: "Which expression represents “the difference of the sum of \\(a\\) and \\(b\\) from the product of \\(a\\) and \\(b\\)”?",
      options: ["\\(2ab-b\\)","None of these","\\(a+b-ab\\)","\\(ab-a-b\\)"],
      ans: "\\(ab-a-b\\)",
      reason: "The sum is \\(a+b\\), so the difference from the product is \\(ab-a-b\\)."
    },
    {
      q: "The degree of \\(4x^3y^4-2xy^2+7y^5\\) is:",
      options: ["3","7","5","None of these"],
      ans: "7",
      reason: "The term degrees are \\(3+4=7\\), \\(1+2=3\\) and \\(5\\); the largest is 7."
    },
    {
      q: "Coefficients in \\(\\sqrt{16}x^2y-\\dfrac{1}{2}y^3+\\dfrac{22}{7}z\\) belong to the set of:",
      options: ["Rational numbers","Irrational numbers","Odd numbers","Integers"],
      ans: "Rational numbers",
      reason: "The coefficients \\(4,-\\tfrac12,\\tfrac{22}{7}\\) are rational."
    },
    {
      q: "The leading coefficient in \\(\\dfrac{x^2}{2}-\\dfrac{1}{8}-\\dfrac{x^4}{4}+\\dfrac{x^3}{7}\\) is:",
      options: ["\\(\\dfrac{1}{2}\\)","\\(\\dfrac{1}{4}\\)","\\(\\dfrac{1}{7}\\)","\\(-\\dfrac{1}{4}\\)"],
      ans: "\\(-\\dfrac{1}{4}\\)",
      reason: "The highest power \\(x^4\\) has coefficient \\(-\\tfrac14\\)."
    },
    {
      q: "The degree of the quotient in \\((x-y)^3\\div(x-y)^2\\) is:",
      options: ["0","2","1","3"],
      ans: "1",
      reason: "\\((x-y)^3\\div(x-y)^2=x-y\\), degree 1."
    },
    {
      q: "Reduce \\(\\dfrac{15ax^3y^2}{25a^2xy^6}\\) to lowest terms:",
      options: ["\\(\\dfrac{5x^2}{3ay^4}\\)","\\(\\dfrac{3x^2}{5a}\\)","\\(\\dfrac{3x^2}{5ay^4}\\)","\\(\\dfrac{3x^2y^4}{5a}\\)"],
      ans: "\\(\\dfrac{3x^2}{5ay^4}\\)",
      reason: "\\(\\dfrac{15}{25}=\\dfrac35\\); \\(\\dfrac{x^3}{x}=x^2\\); \\(\\dfrac{a}{a^2}=\\dfrac1a\\); \\(\\dfrac{y^2}{y^6}=\\dfrac1{y^4}\\). Result \\(\\dfrac{3x^2}{5ay^4}\\)."
    },
    {
      q: "Reduce \\(\\dfrac{x-3}{3-x}\\) to lowest terms:",
      options: ["1","\\(-1\\)","\\(x-3\\)","0"],
      ans: "\\(-1\\)",
      reason: "\\(3-x=-(x-3)\\), so \\(\\dfrac{x-3}{3-x}=-1\\)."
    },
    {
      q: "Reduce \\(\\dfrac{x^2-81}{x+9}\\) to lowest terms:",
      options: ["\\(x+9\\)","\\(x-9\\)","\\(x-81\\)","\\(x^2-9\\)"],
      ans: "\\(x-9\\)",
      reason: "\\(\\dfrac{(x-9)(x+9)}{x+9}=x-9\\)."
    },
    {
      q: "Reduce \\(\\dfrac{(r+3)(r+4)}{r^2-16}\\) to lowest terms:",
      options: ["\\(\\dfrac{r-3}{r-4}\\)","\\(\\dfrac{r+3}{r-4}\\)","\\(\\dfrac{r+4}{r-4}\\)","\\(\\dfrac{r+3}{r+4}\\)"],
      ans: "\\(\\dfrac{r+3}{r-4}\\)",
      reason: "\\(r^2-16=(r-4)(r+4)\\). Cancel \\((r+4)\\): \\(\\dfrac{r+3}{r-4}\\)."
    },
    {
      q: "Reduce \\(\\dfrac{3abc}{15a^2b^2c}\\) to lowest terms:",
      options: ["\\(\\dfrac{1}{5b}\\)","\\(\\dfrac{1}{5ab}\\)","\\(\\dfrac{3}{15ab}\\)","\\(\\dfrac{1}{5a}\\)"],
      ans: "\\(\\dfrac{1}{5ab}\\)",
      reason: "\\(\\dfrac{3abc}{15a^2b^2c}=\\dfrac{1}{5ab}\\)."
    },
    {
      q: "The reduced form of \\(\\dfrac{x^2y^3-y^2x^3+x^2y^2z}{x-y-z}\\) is:",
      options: ["\\(-x^2y^2\\)","\\(x^2y^2\\)","\\(\\dfrac{x^2y^2(x-y-z)}{y-x+z}\\)","Not possible"],
      ans: "\\(-x^2y^2\\)",
      reason: "The numerator is \\(x^2y^2(y-x+z)=-x^2y^2(x-y-z)\\), so the result is \\(-x^2y^2\\)."
    },
    {
      q: "To reduce a rational expression to lowest terms, we:",
      options: ["Factor the numerator and denominator, then cancel common factors","Always cross-multiply","Add the numerator and denominator","Multiply numerator and denominator by 2"],
      ans: "Factor the numerator and denominator, then cancel common factors",
      reason: "Factor numerator and denominator, then cancel common factors."
    },
    {
      q: "\\(\\dfrac{x^3y^3+y^3z^3+z^3x^3}{x^3y^3z^3}\\) simplifies to:",
      options: ["\\(x^3+y^3+z^3\\)","\\(\\dfrac{1}{x^6}+\\dfrac{1}{y^6}+\\dfrac{1}{z^6}\\)","\\(\\dfrac{1}{x^3}+\\dfrac{1}{y^3}+\\dfrac{1}{z^3}\\)","\\(x^6+y^6+z^6\\)"],
      ans: "\\(\\dfrac{1}{x^3}+\\dfrac{1}{y^3}+\\dfrac{1}{z^3}\\)",
      reason: "Split into three fractions: \\(\\dfrac1{z^3}+\\dfrac1{x^3}+\\dfrac1{y^3}\\)."
    },
    {
      q: "Simplify \\(\\dfrac{(a+b)^2-(a-b)^2}{8ab}\\):",
      options: ["\\(\\dfrac{2(a^2+b^2)}{8ab}\\)","\\(\\dfrac{1}{2}\\)","2","\\(\\dfrac{a^2+b^2}{ab}\\)"],
      ans: "\\(\\dfrac{1}{2}\\)",
      reason: "\\(\\dfrac{4ab}{8ab}=\\dfrac12\\)."
    },
    {
      q: "A rational expression is in its lowest terms when:",
      options: ["It cannot be simplified further into a polynomial","The denominator is 1","The numerator and denominator have no common factor other than 1","The numerator is 1"],
      ans: "The numerator and denominator have no common factor other than 1",
      reason: "An expression is in lowest terms when numerator and denominator share no common factor other than 1."
    },
    {
      q: "Reduce \\(\\dfrac{38k^2p^3m^4}{57k^3pm^2}\\) to lowest terms:",
      options: ["\\(\\dfrac{2pm^2}{3k}\\)","\\(\\dfrac{2p^2m^2}{3k}\\)","\\(\\dfrac{3p^2m^2}{2k}\\)","\\(\\dfrac{2p^2m^2}{3k^2}\\)"],
      ans: "\\(\\dfrac{2p^2m^2}{3k}\\)",
      reason: "\\(\\dfrac{38}{57}=\\dfrac23\\); \\(\\dfrac{k^2}{k^3}=\\dfrac1k\\); \\(\\dfrac{p^3}{p}=p^2\\); \\(\\dfrac{m^4}{m^2}=m^2\\). Result \\(\\dfrac{2p^2m^2}{3k}\\)."
    },
    {
      q: "Reduce \\(\\dfrac{mn^4pq}{m^2n^3p^4}\\) to lowest terms:",
      options: ["\\(\\dfrac{mq}{np^3}\\)","\\(\\dfrac{nq}{mp^3}\\)","\\(\\dfrac{nq}{mp^4}\\)","\\(\\dfrac{n^4q}{mp^3}\\)"],
      ans: "\\(\\dfrac{nq}{mp^3}\\)",
      reason: "\\(\\dfrac{n^4}{n^3}=n\\), \\(\\dfrac{p}{p^4}=\\dfrac1{p^3}\\), \\(\\dfrac{m}{m^2}=\\dfrac1m\\). Result \\(\\dfrac{nq}{mp^3}\\)."
    },
    {
      q: "Evaluate \\(3(r^2-s^2)\\) if \\(r=2,\\,s=-1\\):",
      options: ["9","15","3","\\(-9\\)"],
      ans: "9",
      reason: "\\(3(4-1)=9\\)."
    },
    {
      q: "If \\(p=-5\\) and \\(q=2\\), the value of \\(p^2q+pq^2+2p\\cdot pq\\) is:",
      options: ["\\(-130\\)","130","150","110"],
      ans: "130",
      reason: "\\(p^2q=50\\), \\(pq^2=-20\\), \\(2p\\cdot pq=2(-5)(-10)=100\\). Sum \\(=130\\)."
    },
    {
      q: "If \\(x=4\\) and \\(y=9\\), the value of \\(\\sqrt{x}+\\sqrt{y}-\\dfrac{xy}{6}\\) is:",
      options: ["5","11","1","\\(-1\\)"],
      ans: "\\(-1\\)",
      reason: "\\(2+3-\\tfrac{36}{6}=5-6=-1\\)."
    },
    {
      q: "If \\(x+\\dfrac{1}{x}=3\\), the value of \\(x^2+\\dfrac{1}{x^2}\\) is:",
      options: ["Zero","7","Not possible","9"],
      ans: "7",
      reason: "Square \\(x+\\tfrac1x=3\\): \\(x^2+2+\\tfrac1{x^2}=9\\Rightarrow x^2+\\tfrac1{x^2}=7\\)."
    },
    {
      q: "The value of \\(3\\{x^2-(2x-(5-x))\\}\\) at \\(x=1\\) is:",
      options: ["\\(-2\\)","2","9","6"],
      ans: "9",
      reason: "\\(3\\{x^2-(2x-5+x)\\}=3(x^2-3x+5)\\). At \\(x=1\\): \\(3(3)=9\\)."
    },
    {
      q: "Evaluate \\(\\dfrac{1}{2}mv^2\\) at \\(m=18.75\\) and \\(v=5.6\\):",
      options: ["294","147","588","105"],
      ans: "294",
      reason: "\\(\\tfrac12(18.75)(5.6)^2=9.375\\times31.36=294\\)."
    },
    {
      q: "The circumference of a circle of diameter \\(21\\) cm (using \\(\\pi=\\dfrac{22}{7}\\)) is:",
      options: ["55 cm","44 cm","66 cm","77 cm"],
      ans: "66 cm",
      reason: "\\(C=\\pi d=\\tfrac{22}{7}\\times21=66\\) cm."
    },
    {
      q: "The surface area of a sphere of radius \\(2.1\\) cm, using \\(S=4\\times\\dfrac{22}{7}r^2\\), is:",
      options: ["44.44 sq. cm","13.86 sq. cm","55.44 sq. cm","27.72 sq. cm"],
      ans: "55.44 sq. cm",
      reason: "\\(S=4\\times\\tfrac{22}{7}\\times(2.1)^2=\\tfrac{88}{7}\\times4.41=55.44\\) sq. cm."
    },
    {
      q: "\\(\\dfrac{x}{y}\\times\\dfrac{y}{x}=\\)",
      options: ["1","0","\\(y^2/x^2\\)","\\(x^2/y^2\\)"],
      ans: "1",
      reason: "\\(\\dfrac xy\\cdot\\dfrac yx=1\\)."
    },
    {
      q: "\\(\\dfrac{a}{b}\\div\\dfrac{c}{d}=\\)",
      options: ["\\(\\dfrac{b}{a}\\times\\dfrac{c}{d}\\)","\\(\\dfrac{ac}{bd}\\)","\\(\\dfrac{a}{b}\\times\\dfrac{c}{d}\\)","\\(\\dfrac{a}{b}\\times\\dfrac{d}{c}\\)"],
      ans: "\\(\\dfrac{a}{b}\\times\\dfrac{d}{c}\\)",
      reason: "Dividing by a fraction means multiplying by its reciprocal: \\(\\dfrac ab\\times\\dfrac dc\\)."
    },
    {
      q: "\\(\\dfrac{x^2-4}{x+2}\\times\\dfrac{1}{x-2}=\\)",
      options: ["1","\\(\\dfrac{1}{x^2-4}\\)","\\(x-2\\)","\\(x+2\\)"],
      ans: "1",
      reason: "\\(\\dfrac{(x-2)(x+2)}{x+2}\\cdot\\dfrac1{x-2}=1\\)."
    },
    {
      q: "\\(\\dfrac{x}{x^2-y^2}\\times\\dfrac{x^2+2xy+y^2}{x+y}\\div\\dfrac{3x}{x-y}=\\)",
      options: ["\\(\\dfrac{1}{3x}\\)","3","\\(\\dfrac{1}{3}\\)","\\(\\dfrac{x}{3}\\)"],
      ans: "\\(\\dfrac{1}{3}\\)",
      reason: "\\(\\dfrac{x}{(x-y)(x+y)}\\cdot(x+y)\\cdot\\dfrac{x-y}{3x}=\\dfrac13\\)."
    },
    {
      q: "Simplify \\(\\dfrac{(x-1)(x+5)}{x^2+4x-5}\\):",
      options: ["\\(x-1\\)","1","\\(x^2\\)","\\(x+5\\)"],
      ans: "1",
      reason: "\\(x^2+4x-5=(x+5)(x-1)\\), so the fraction equals 1."
    },
    {
      q: "\\(\\dfrac{2}{x}\\times\\dfrac{x^2}{4}=\\)",
      options: ["\\(x^2\\)","\\(\\dfrac{2}{x}\\)","2x","\\(\\dfrac{x}{2}\\)"],
      ans: "\\(\\dfrac{x}{2}\\)",
      reason: "\\(\\dfrac2x\\cdot\\dfrac{x^2}{4}=\\dfrac{x}{2}\\)."
    },
    {
      q: "\\(\\dfrac{a^2-b^2}{a+b}\\div(a-b)=\\)",
      options: ["\\(a-b\\)","1","\\(a^2-b^2\\)","\\(a+b\\)"],
      ans: "1",
      reason: "\\(\\dfrac{a^2-b^2}{a+b}=a-b\\), and \\((a-b)\\div(a-b)=1\\)."
    },
    {
      q: "To divide one rational expression by another, we:",
      options: ["Multiply both directly","Multiply the first by the reciprocal of the second","Subtract their denominators","Add their numerators"],
      ans: "Multiply the first by the reciprocal of the second",
      reason: "To divide, multiply by the reciprocal of the divisor."
    },
    {
      q: "\\(\\dfrac{x+2}{x-3}\\times\\dfrac{x-3}{x+2}=\\)",
      options: ["0","1 (for \\(x\\neq3,-2\\))","Undefined always","\\(x^2\\)"],
      ans: "1 (for \\(x\\neq3,-2\\))",
      reason: "The factors cancel, giving 1 when \\(x\\ne3,-2\\)."
    },
    {
      q: "\\(\\dfrac{6}{x^2}\\div\\dfrac{3}{x}=\\)",
      options: ["2x","\\(\\dfrac{2}{x}\\)","\\(x^2\\)","\\(\\dfrac{18}{x^3}\\)"],
      ans: "\\(\\dfrac{2}{x}\\)",
      reason: "\\(\\dfrac6{x^2}\\cdot\\dfrac x3=\\dfrac2x\\)."
    },
    {
      q: "The product of two rational expressions is found by:",
      options: ["Multiplying numerators together and denominators together","Cross-multiplying and adding","Finding the LCD first","Adding numerators and denominators separately"],
      ans: "Multiplying numerators together and denominators together",
      reason: "Multiply numerators together and denominators together."
    },
    {
      q: "\\(\\dfrac{x^2-9}{x^2-6x+9}\\div\\dfrac{x+3}{x-3}=\\)",
      options: ["\\(x-3\\)","\\(\\dfrac{(x-3)^2}{(x+3)^2}\\)","1","\\(\\dfrac{x+3}{x-3}\\)"],
      ans: "1",
      reason: "\\(\\dfrac{(x-3)(x+3)}{(x-3)^2}\\cdot\\dfrac{x-3}{x+3}=1\\)."
    },
    {
      q: "To add two rational expressions with different denominators, we first find their:",
      options: ["Product","Sum of numerators","GCD","LCD (least common denominator)"],
      ans: "LCD (least common denominator)",
      reason: "To add fractions with different denominators, first find the LCD."
    },
    {
      q: "\\(\\dfrac{1}{x}+\\dfrac{1}{x}=\\)",
      options: ["\\(\\dfrac{2}{x^2}\\)","\\(\\dfrac{1}{x^2}\\)","\\(\\dfrac{1}{2x}\\)","\\(\\dfrac{2}{x}\\)"],
      ans: "\\(\\dfrac{2}{x}\\)",
      reason: "\\(\\dfrac1x+\\dfrac1x=\\dfrac2x\\)."
    },
    {
      q: "\\(\\dfrac{3}{x}-\\dfrac{1}{x}=\\)",
      options: ["\\(\\dfrac{4}{x}\\)","2","\\(\\dfrac{2}{x}\\)","\\(\\dfrac{3}{x^2}\\)"],
      ans: "\\(\\dfrac{2}{x}\\)",
      reason: "\\(\\dfrac3x-\\dfrac1x=\\dfrac2x\\)."
    },
    {
      q: "\\(\\dfrac{1}{x+1}+\\dfrac{1}{x-1}=\\)",
      options: ["\\(\\dfrac{2x}{x^2-1}\\)","\\(\\dfrac{1}{x^2-1}\\)","\\(\\dfrac{2x}{x^2+1}\\)","\\(\\dfrac{2}{x^2-1}\\)"],
      ans: "\\(\\dfrac{2x}{x^2-1}\\)",
      reason: "\\(\\dfrac{(x-1)+(x+1)}{x^2-1}=\\dfrac{2x}{x^2-1}\\)."
    },
    {
      q: "\\(\\dfrac{1}{x-1}-\\dfrac{1}{x+1}=\\)",
      options: ["\\(\\dfrac{1}{x^2-1}\\)","\\(\\dfrac{2}{x^2-1}\\)","\\(\\dfrac{-2}{x^2-1}\\)","\\(\\dfrac{2x}{x^2-1}\\)"],
      ans: "\\(\\dfrac{2}{x^2-1}\\)",
      reason: "\\(\\dfrac{(x+1)-(x-1)}{x^2-1}=\\dfrac{2}{x^2-1}\\)."
    },
    {
      q: "Subtract \\((x^2-2x+3)\\) from the sum of \\((2x^2+x-1)\\) and \\((x^2-3x+4)\\):",
      options: ["\\(2x^2\\)","\\(2x^2-4x\\)","\\(4x^2-4x+6\\)","\\(2x^2-4x+6\\)"],
      ans: "\\(2x^2\\)",
      reason: "Sum \\(=3x^2-2x+3\\). Subtracting \\(x^2-2x+3\\) leaves \\(2x^2\\)."
    },
    {
      q: "Simplify \\(\\dfrac{2}{x-1}+\\dfrac{3}{x+1}-\\dfrac{1}{x}\\):",
      options: ["\\(\\dfrac{4x^2-x-1}{x^3-x}\\)","\\(\\dfrac{4x^2+x+1}{x^3-x}\\)","\\(\\dfrac{4x^2-x+1}{x^3-x}\\)","\\(\\dfrac{5}{x^3-x}\\)"],
      ans: "\\(\\dfrac{4x^2-x+1}{x^3-x}\\)",
      reason: "LCD \\(=x(x-1)(x+1)\\). Numerator: \\(2x(x+1)+3x(x-1)-(x^2-1)=4x^2-x+1\\)."
    },
    {
      q: "The LCD of \\(\\dfrac{1}{x-2}\\) and \\(\\dfrac{1}{x+2}\\) is:",
      options: ["\\((x-2)(x+2)\\)","\\(x-2\\)","\\(x^2\\)","\\(x+2\\)"],
      ans: "\\((x-2)(x+2)\\)",
      reason: "The LCD of \\(x-2\\) and \\(x+2\\) is their product \\((x-2)(x+2)\\)."
    },
    {
      q: "The LCD of \\(\\dfrac{1}{x}\\) and \\(\\dfrac{1}{x^2}\\) is:",
      options: ["\\(x^2\\)","\\(x^3\\)","x","2x"],
      ans: "\\(x^2\\)",
      reason: "The LCD of \\(x\\) and \\(x^2\\) is \\(x^2\\)."
    },
    {
      q: "\\(\\dfrac{2}{x}+3=\\)",
      options: ["\\(\\dfrac{5}{x}\\)","\\(2+\\dfrac{3}{x}\\)","\\(\\dfrac{2}{x+3}\\)","\\(\\dfrac{2+3x}{x}\\)"],
      ans: "\\(\\dfrac{2+3x}{x}\\)",
      reason: "\\(\\dfrac2x+3=\\dfrac{2+3x}{x}\\)."
    },
    {
      q: "\\(\\dfrac{a}{a-b}+\\dfrac{b}{b-a}=\\)",
      options: ["1","\\(-1\\)","\\(\\dfrac{a+b}{a-b}\\)","0"],
      ans: "1",
      reason: "\\(\\dfrac{b}{b-a}=-\\dfrac{b}{a-b}\\), so the sum is \\(\\dfrac{a-b}{a-b}=1\\)."
    },
    {
      q: "When subtracting rational expressions with the same denominator, we:",
      options: ["Cross-multiply","Find a new LCD first","Subtract the numerators and keep the common denominator","Subtract the denominators"],
      ans: "Subtract the numerators and keep the common denominator",
      reason: "With a common denominator, subtract the numerators and keep the denominator."
    },
    {
      q: "A complex fraction is a fraction that contains:",
      options: ["Only one term","Only whole numbers","A fraction in its numerator, denominator, or both","No variables"],
      ans: "A fraction in its numerator, denominator, or both",
      reason: "A complex fraction has a fraction in its numerator, denominator, or both."
    },
    {
      q: "Simplify \\(\\dfrac{\\frac{1}{x}}{\\frac{1}{x^2}}\\):",
      options: ["\\(\\dfrac{1}{x^2}\\)","x","\\(x^2\\)","\\(\\dfrac{1}{x}\\)"],
      ans: "x",
      reason: "\\(\\dfrac1x\\cdot x^2=x\\)."
    },
    {
      q: "Simplify \\(\\dfrac{\\frac{a}{b}}{\\frac{c}{d}}\\):",
      options: ["\\(\\dfrac{ac}{bd}\\)","\\(\\dfrac{ab}{cd}\\)","\\(\\dfrac{bd}{ac}\\)","\\(\\dfrac{ad}{bc}\\)"],
      ans: "\\(\\dfrac{ad}{bc}\\)",
      reason: "\\(\\dfrac ab\\cdot\\dfrac dc=\\dfrac{ad}{bc}\\)."
    },
    {
      q: "Simplify \\(\\dfrac{1+\\frac{1}{x}}{1-\\frac{1}{x}}\\):",
      options: ["\\(\\dfrac{x-1}{x+1}\\)","\\(\\dfrac{x+1}{x-1}\\)","x","\\(\\dfrac{1}{x}\\)"],
      ans: "\\(\\dfrac{x+1}{x-1}\\)",
      reason: "Multiply top and bottom by \\(x\\): \\(\\dfrac{x+1}{x-1}\\)."
    },
    {
      q: "The first step in simplifying a complex fraction is usually to:",
      options: ["Cross-multiply immediately","Add 1 to both sides","Simplify the numerator and denominator into single fractions","Take the reciprocal first"],
      ans: "Simplify the numerator and denominator into single fractions",
      reason: "First write the numerator and the denominator each as a single fraction."
    },
    {
      q: "Simplify \\(\\dfrac{\\frac{2}{x}+1}{\\frac{3}{x}}\\):",
      options: ["\\(\\dfrac{2+x}{3x}\\)","\\(\\dfrac{3}{2+x}\\)","\\(\\dfrac{2+x}{3}\\)","\\(\\dfrac{x+2}{x}\\)"],
      ans: "\\(\\dfrac{2+x}{3}\\)",
      reason: "Numerator \\(=\\dfrac{2+x}{x}\\). Dividing by \\(\\dfrac3x\\) gives \\(\\dfrac{2+x}{3}\\)."
    },
    {
      q: "An equation containing one or more rational expressions is called a:",
      options: ["Polynomial equation only","Rational equation","An identity","Linear equation only"],
      ans: "Rational equation",
      reason: "An equation with rational expressions is called a rational equation."
    },
    {
      q: "A solution of a rational equation that makes a denominator zero is called:",
      options: ["An identity","The only valid solution","An extraneous solution","A constant solution"],
      ans: "An extraneous solution",
      reason: "A root that makes a denominator zero is an extraneous solution."
    },
    {
      q: "In a rational equation, multiplying both sides by the LCD can introduce:",
      options: ["Additional variables","Extraneous solutions","Irrational solutions","No change in the solution set"],
      ans: "Extraneous solutions",
      reason: "Multiplying by the LCD can introduce extraneous solutions, so answers must be checked."
    },
    {
      q: "Solve \\(\\dfrac{5}{x+3}=\\dfrac{2}{x-3}\\):",
      options: ["\\(x=7\\)","\\(x=-7\\)","\\(x=3\\)","\\(x=-3\\)"],
      ans: "\\(x=7\\)",
      reason: "\\(5(x-3)=2(x+3)\\Rightarrow3x=21\\Rightarrow x=7\\)."
    },
    {
      q: "Solve \\(\\dfrac{x}{x-1}-\\dfrac{2}{x+1}=1\\):",
      options: ["\\(x=3\\)","\\(x=-1\\)","\\(x=-3\\)","\\(x=1\\)"],
      ans: "\\(x=3\\)",
      reason: "\\(x(x+1)-2(x-1)=x^2-1\\Rightarrow-x+2=-1\\Rightarrow x=3\\)."
    },
    {
      q: "A certain number added to 5 times the reciprocal of 2 more than the number gives 4. The number(s) is/are:",
      options: ["3 or 1","3 or \\(-1\\)","\\(-3\\) or \\(-1\\)","\\(-3\\) or 1"],
      ans: "3 or \\(-1\\)",
      reason: "\\(x+\\dfrac{5}{x+2}=4\\Rightarrow x^2+2x+5=4x+8\\Rightarrow x^2-2x-3=0\\Rightarrow x=3\\) or \\(-1\\)."
    },
    {
      q: "The first step in solving a rational equation is usually to:",
      options: ["Cross out all denominators without multiplying","Add 1 to both sides","Multiply both sides by the LCD of all the denominators","Take the square root of both sides"],
      ans: "Multiply both sides by the LCD of all the denominators",
      reason: "Multiply both sides by the LCD to clear the denominators."
    },
    {
      q: "Solve \\(\\dfrac{1}{x}=\\dfrac{1}{4}\\):",
      options: ["\\(x=\\dfrac{1}{4}\\)","\\(x=4\\)","\\(x=-4\\)","\\(x=0\\)"],
      ans: "\\(x=4\\)",
      reason: "Taking reciprocals gives \\(x=4\\)."
    },
    {
      q: "Solve \\(\\dfrac{x}{x-2}+\\dfrac{1}{5}=\\dfrac{2}{x-2}\\):",
      options: ["\\(x=-2\\)","No solution (\\(x=2\\) is extraneous)","\\(x=2\\)","\\(x=0\\)"],
      ans: "No solution (\\(x=2\\) is extraneous)",
      reason: "Multiply by \\(5(x-2)\\): \\(5x+x-2=10\\Rightarrow x=2\\), which makes a denominator zero, so it is extraneous and there is no solution."
    },
    {
      q: "Solve \\(\\dfrac{2}{x+1}=\\dfrac{3}{x+2}\\):",
      options: ["\\(x=4\\)","\\(x=-4\\)","\\(x=-1\\)","\\(x=1\\)"],
      ans: "\\(x=1\\)",
      reason: "\\(2(x+2)=3(x+1)\\Rightarrow2x+4=3x+3\\Rightarrow x=1\\)."
    },
    {
      q: "A car travels 300 km in the same time a train travels 200 km, with the car 20 km/h faster than the train. If the train's speed is \\(v\\), the equation relating the times is:",
      options: ["\\(\\dfrac{300}{v-20}=\\dfrac{200}{v}\\)","\\(300v=200(v+20)\\)","\\(\\dfrac{300}{v}=\\dfrac{200}{v+20}\\)","\\(\\dfrac{300}{v+20}=\\dfrac{200}{v}\\)"],
      ans: "\\(\\dfrac{300}{v+20}=\\dfrac{200}{v}\\)",
      reason: "The train's speed is \\(v\\) and the car's is \\(v+20\\). Equal times: \\(\\dfrac{300}{v+20}=\\dfrac{200}{v}\\)."
    },
    {
      q: "Which of the following sets represents the sides of a right-angled triangle (using \\(c^2=a^2+b^2\\))?",
      options: ["5, 12, 13","8, 10, 12","4, 5, 6","9, 10, 11"],
      ans: "5, 12, 13",
      reason: "\\(5^2+12^2=25+144=169=13^2\\). The other sets do not satisfy \\(c^2=a^2+b^2\\)."
    },
    {
      q: "A factory worker earns Rs. 60 per hour of overtime. If \\(t\\) represents overtime hours in a month, his overtime salary is represented by:",
      options: ["\\(\\dfrac{60}{t}\\)","\\(60-t\\)","\\(60+t\\)","\\(60t\\)"],
      ans: "\\(60t\\)",
      reason: "Salary is rate times hours: \\(60t\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Pipe</th><th>Time to fill tank alone (hours)</th></tr><tr><td>A</td><td>\\(x\\)</td></tr><tr><td>B</td><td>\\(x+3\\)</td></tr><tr><td>Working together</td><td>2 hours</td></tr></table><p>Two pipes A and B can fill a tank alone in the times shown. Working together they fill the tank in 2 hours.</p></div>The equation representing the combined work is:",
      options: ["\\(\\dfrac{1}{x}-\\dfrac{1}{x+3}=\\dfrac{1}{2}\\)","\\(x+(x+3)=2\\)","\\(\\dfrac{1}{x}+\\dfrac{1}{x+3}=\\dfrac{1}{2}\\)","\\(\\dfrac{1}{x}+\\dfrac{1}{x+3}=2\\)"],
      ans: "\\(\\dfrac{1}{x}+\\dfrac{1}{x+3}=\\dfrac{1}{2}\\)",
      reason: "Rates add: \\(\\dfrac1x+\\dfrac1{x+3}=\\dfrac12\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Pipe</th><th>Time to fill tank alone (hours)</th></tr><tr><td>A</td><td>\\(x\\)</td></tr><tr><td>B</td><td>\\(x+3\\)</td></tr><tr><td>Working together</td><td>2 hours</td></tr></table><p>Two pipes A and B can fill a tank alone in the times shown. Working together they fill the tank in 2 hours.</p></div>Solving the equation, the value of \\(x\\) (rejecting the negative root) is:",
      options: ["\\(x=6\\)","\\(x=3\\)","\\(x=2\\)","\\(x=-2\\)"],
      ans: "\\(x=3\\)",
      reason: "\\(2(x+3)+2x=x(x+3)\\Rightarrow x^2-x-6=0\\Rightarrow x=3\\) or \\(-2\\). Reject \\(-2\\), so \\(x=3\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Pipe</th><th>Time to fill tank alone (hours)</th></tr><tr><td>A</td><td>\\(x\\)</td></tr><tr><td>B</td><td>\\(x+3\\)</td></tr><tr><td>Working together</td><td>2 hours</td></tr></table><p>Two pipes A and B can fill a tank alone in the times shown. Working together they fill the tank in 2 hours.</p></div>Time taken by Pipe B alone to fill the tank is:",
      options: ["3 hours","2 hours","6 hours","9 hours"],
      ans: "6 hours",
      reason: "Pipe B takes \\(x+3=6\\) hours."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Pipe</th><th>Time to fill tank alone (hours)</th></tr><tr><td>A</td><td>\\(x\\)</td></tr><tr><td>B</td><td>\\(x+3\\)</td></tr><tr><td>Working together</td><td>2 hours</td></tr></table><p>Two pipes A and B can fill a tank alone in the times shown. Working together they fill the tank in 2 hours.</p></div>Working together, the time needed to fill \\(\\dfrac34\\) of the tank is:",
      options: ["1.5 hours","3 hours","2 hours","1 hour"],
      ans: "1.5 hours",
      reason: "Together they fill the whole tank in 2 hours, so \\(\\tfrac34\\) of it takes \\(\\tfrac34\\times2=1.5\\) hours."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Direction</th><th>Distance (km)</th><th>Speed (km/h)</th></tr><tr><td>Downstream</td><td>48</td><td>\\(x+4\\)</td></tr><tr><td>Upstream</td><td>24</td><td>\\(x-4\\)</td></tr></table><p>A boat's speed in still water is \\(x\\) km/h and the stream flows at 4 km/h. The boat takes equal time to travel 48 km downstream and 24 km upstream.</p></div>The equation representing equal travel times is:",
      options: ["\\(\\dfrac{48}{x+4}=\\dfrac{24}{x-4}\\)","\\(\\dfrac{48}{x-4}=\\dfrac{24}{x+4}\\)","\\(48(x+4)=24(x-4)\\)","\\(\\dfrac{x+4}{48}=\\dfrac{x-4}{24}\\)"],
      ans: "\\(\\dfrac{48}{x+4}=\\dfrac{24}{x-4}\\)",
      reason: "Equal times: \\(\\dfrac{48}{x+4}=\\dfrac{24}{x-4}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Direction</th><th>Distance (km)</th><th>Speed (km/h)</th></tr><tr><td>Downstream</td><td>48</td><td>\\(x+4\\)</td></tr><tr><td>Upstream</td><td>24</td><td>\\(x-4\\)</td></tr></table><p>A boat's speed in still water is \\(x\\) km/h and the stream flows at 4 km/h. The boat takes equal time to travel 48 km downstream and 24 km upstream.</p></div>The boat's speed in still water is:",
      options: ["16 km/h","8 km/h","12 km/h","10 km/h"],
      ans: "12 km/h",
      reason: "\\(48(x-4)=24(x+4)\\Rightarrow2x-8=x+4\\Rightarrow x=12\\) km/h."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Direction</th><th>Distance (km)</th><th>Speed (km/h)</th></tr><tr><td>Downstream</td><td>48</td><td>\\(x+4\\)</td></tr><tr><td>Upstream</td><td>24</td><td>\\(x-4\\)</td></tr></table><p>A boat's speed in still water is \\(x\\) km/h and the stream flows at 4 km/h. The boat takes equal time to travel 48 km downstream and 24 km upstream.</p></div>The time taken for the downstream journey is:",
      options: ["2.5 hours","4 hours","2 hours","3 hours"],
      ans: "3 hours",
      reason: "Downstream speed is \\(12+4=16\\), so time \\(=\\tfrac{48}{16}=3\\) hours."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Direction</th><th>Distance (km)</th><th>Speed (km/h)</th></tr><tr><td>Downstream</td><td>48</td><td>\\(x+4\\)</td></tr><tr><td>Upstream</td><td>24</td><td>\\(x-4\\)</td></tr></table><p>A boat's speed in still water is \\(x\\) km/h and the stream flows at 4 km/h. The boat takes equal time to travel 48 km downstream and 24 km upstream.</p></div>If the stream's speed increased to 6 km/h (distance still 48 km downstream), the new downstream time would be:",
      options: ["3 hours","\\(\\dfrac{8}{3}\\) hours","2 hours","4 hours"],
      ans: "\\(\\dfrac{8}{3}\\) hours",
      reason: "Downstream speed is \\(12+6=18\\), so time \\(=\\tfrac{48}{18}=\\tfrac83\\) hours."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units produced)</th><th>\\(C(x)\\) (Rs per item)</th></tr><tr><td>25</td><td>?</td></tr><tr><td>50</td><td>?</td></tr></table><p>A company's average cost per item for producing \\(x\\) items is \\(C(x)=\\dfrac{500+20x}{x}\\) rupees.</p></div>Written as separate terms, \\(C(x)\\) simplifies to:",
      options: ["\\(C(x)=\\dfrac{500}{x}-20\\)","\\(C(x)=500+\\dfrac{20}{x}\\)","\\(C(x)=\\dfrac{520}{x}\\)","\\(C(x)=\\dfrac{500}{x}+20\\)"],
      ans: "\\(C(x)=\\dfrac{500}{x}+20\\)",
      reason: "\\(\\dfrac{500+20x}{x}=\\dfrac{500}{x}+20\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units produced)</th><th>\\(C(x)\\) (Rs per item)</th></tr><tr><td>25</td><td>?</td></tr><tr><td>50</td><td>?</td></tr></table><p>A company's average cost per item for producing \\(x\\) items is \\(C(x)=\\dfrac{500+20x}{x}\\) rupees.</p></div>The average cost per item when \\(x=25\\) is:",
      options: ["Rs 40","Rs 50","Rs 30","Rs 20"],
      ans: "Rs 40",
      reason: "\\(C(25)=\\dfrac{500}{25}+20=40\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units produced)</th><th>\\(C(x)\\) (Rs per item)</th></tr><tr><td>25</td><td>?</td></tr><tr><td>50</td><td>?</td></tr></table><p>A company's average cost per item for producing \\(x\\) items is \\(C(x)=\\dfrac{500+20x}{x}\\) rupees.</p></div>As \\(x\\) becomes very large, \\(C(x)\\) approaches:",
      options: ["500","20","0","Infinity"],
      ans: "20",
      reason: "As \\(x\\to\\infty\\), \\(\\tfrac{500}{x}\\to0\\), so \\(C(x)\\to20\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units produced)</th><th>\\(C(x)\\) (Rs per item)</th></tr><tr><td>25</td><td>?</td></tr><tr><td>50</td><td>?</td></tr></table><p>A company's average cost per item for producing \\(x\\) items is \\(C(x)=\\dfrac{500+20x}{x}\\) rupees.</p></div>The average cost per item equals Rs 30 when \\(x=\\)",
      options: ["40","100","25","50"],
      ans: "50",
      reason: "\\(\\dfrac{500}{x}+20=30\\Rightarrow\\dfrac{500}{x}=10\\Rightarrow x=50\\)."
    }
    ];
  }
});
