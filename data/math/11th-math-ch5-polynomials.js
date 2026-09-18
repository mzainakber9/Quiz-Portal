// Class 11 Math — Chapter 5: Polynomials
// 108 MCQs (base + stimulus-based), each with a computed/verified explanation.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch5",
  label: "Chapter 5: Polynomials",
  order: 5,
  questions: function () {
    return [
  {
    "q": "A statement in which variables or constants or both are connected by arithmetic operations \\((+,-,\\times,\\div)\\) is called a/an:",
    "options": [
      "\\(\\text{Algebraic expression}\\)",
      "\\(\\text{Identity}\\)",
      "\\(\\text{Equation}\\)",
      "\\(\\text{Polynomial}\\)"
    ],
    "ans": "\\(\\text{Algebraic expression}\\)",
    "reason": "An expression built from variables and/or constants joined by \\(+,-,\\times,\\div\\) is, by definition, an algebraic expression."
  },
  {
    "q": "Which of the following is an example of an algebraic expression?",
    "options": [
      "\\((-5x^2+4)/4\\)",
      "\\(\\text{All of these}\\)",
      "\\(3(a+b)-4\\)",
      "\\(r-\\sqrt2\\,t\\)"
    ],
    "ans": "\\(\\text{All of these}\\)",
    "reason": "Polynomials, rational expressions, and irrational expressions are all sub-types of algebraic expressions, so any valid example of one qualifies."
  },
  {
    "q": "Algebraic expressions are categorized into how many kinds?",
    "options": [
      "\\(3\\)",
      "\\(5\\)",
      "\\(2\\)",
      "\\(4\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "This curriculum classifies algebraic expressions into 3 kinds: polynomial, rational, and irrational expressions."
  },
  {
    "q": "Which of the following is NOT a component of an algebraic expression?",
    "options": [
      "\\(\\text{Inequalities}\\)",
      "\\(\\text{Constants}\\)",
      "\\(\\text{Variables}\\)",
      "\\(\\text{Grouping symbols}\\)"
    ],
    "ans": "\\(\\text{Inequalities}\\)",
    "reason": "Inequalities use relations like \\(<,>\\), not the arithmetic operations that build an algebraic expression — so they aren't a component of one."
  },
  {
    "q": "A polynomial expression is an algebraic expression where the exponents of the variables involved are:",
    "options": [
      "\\(\\text{Integers}\\)",
      "\\(\\text{Negative integers}\\)",
      "\\(\\text{Rational numbers}\\)",
      "\\(\\text{Whole numbers}\\)"
    ],
    "ans": "\\(\\text{Whole numbers}\\)",
    "reason": "By definition, a polynomial only allows non-negative whole-number exponents on its variables."
  },
  {
    "q": "Which of the following expressions is a polynomial?",
    "options": [
      "\\(y^2+1/y^2\\)",
      "\\(\\sqrt2\\,x^4-\\pi x^2-\\sqrt{10}\\)",
      "\\(2y^{1/2}\\)",
      "\\(x^{-1}\\)"
    ],
    "ans": "\\(\\sqrt2\\,x^4-\\pi x^2-\\sqrt{10}\\)",
    "reason": "Every exponent in \\(\\sqrt2\\,x^4-\\pi x^2-\\sqrt{10}\\) (namely \\(4,2,0\\)) is a whole number — irrational coefficients are still allowed, only the exponents must be whole numbers."
  },
  {
    "q": "Why is the expression \\(x^{-1}\\) NOT a polynomial?",
    "options": [
      "\\(\\text{It contains a single term}\\)",
      "\\(\\text{The coefficient is negative}\\)",
      "\\(\\text{The exponent is not a whole number}\\)",
      "\\(\\text{It is an irrational number}\\)"
    ],
    "ans": "\\(\\text{The exponent is not a whole number}\\)",
    "reason": "\\(x^{-1}\\) has exponent \\(-1\\), which is not a whole number, so it fails the polynomial definition."
  },
  {
    "q": "The highest exponent of the variable involved in a polynomial is called its:",
    "options": [
      "\\(\\text{Coefficient}\\)",
      "\\(\\text{Base}\\)",
      "\\(\\text{Degree}\\)",
      "\\(\\text{Index}\\)"
    ],
    "ans": "\\(\\text{Degree}\\)",
    "reason": "By definition, a polynomial's degree is its highest exponent."
  },
  {
    "q": "If more than one variable is being multiplied in a term of a polynomial, the degree of that term is:",
    "options": [
      "\\(\\text{The sum of the exponents of the variables}\\)",
      "\\(\\text{The product of the exponents of the variables}\\)",
      "\\(\\text{The maximum exponent among the variables}\\)",
      "\\(\\text{The minimum exponent among the variables}\\)"
    ],
    "ans": "\\(\\text{The sum of the exponents of the variables}\\)",
    "reason": "When several variables are multiplied together in one term, that term's degree is the sum of all their exponents."
  },
  {
    "q": "What is the degree of the zero polynomial \\(p(x)=0\\)?",
    "options": [
      "\\(\\text{No degree / Undefined}\\)",
      "\\(0\\)",
      "\\(\\text{Infinite}\\)",
      "\\(1\\)"
    ],
    "ans": "\\(\\text{No degree / Undefined}\\)",
    "reason": "Since \\(p(x)=0\\) has no nonzero term at all, there's no highest exponent to point to — its degree is undefined."
  },
  {
    "q": "A polynomial having degree zero is called a/an:",
    "options": [
      "\\(\\text{Zero polynomial}\\)",
      "\\(\\text{Constant polynomial}\\)",
      "\\(\\text{Monomial}\\)",
      "\\(\\text{Linear polynomial}\\)"
    ],
    "ans": "\\(\\text{Constant polynomial}\\)",
    "reason": "A polynomial with no variable term at all (degree \\(0\\)) is just a constant, hence 'constant polynomial'."
  },
  {
    "q": "Which of the following is a constant polynomial?",
    "options": [
      "\\(2x\\)",
      "\\(\\sqrt5\\)",
      "\\(0x\\)",
      "\\(x+1\\)"
    ],
    "ans": "\\(\\sqrt5\\)",
    "reason": "\\(\\sqrt5\\) has no variable at all — it's a constant, so a constant polynomial."
  },
  {
    "q": "A polynomial having degree one is called a/an:",
    "options": [
      "\\(\\text{Quadratic polynomial}\\)",
      "\\(\\text{Cubic polynomial}\\)",
      "\\(\\text{Linear polynomial}\\)",
      "\\(\\text{Constant polynomial}\\)"
    ],
    "ans": "\\(\\text{Linear polynomial}\\)",
    "reason": "A polynomial whose highest exponent is \\(1\\) is called linear."
  },
  {
    "q": "What is the degree of a quadratic polynomial?",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "By definition, a quadratic polynomial has degree \\(2\\)."
  },
  {
    "q": "What is the degree of the cubic polynomial \\(9x^3-7x+5\\)?",
    "options": [
      "\\(0\\)",
      "\\(3\\)",
      "\\(1\\)",
      "\\(2\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "The highest power of \\(x\\) in \\(9x^3-7x+5\\) is \\(3\\)."
  },
  {
    "q": "An algebraic expression of the form \\(P(x)/Q(x)\\), where \\(P(x)\\) and \\(Q(x)\\) are polynomials and \\(Q(x)\\ne0\\), is called a/an:",
    "options": [
      "\\(\\text{Rational expression}\\)",
      "\\(\\text{Irrational expression}\\)",
      "\\(\\text{Linear expression}\\)",
      "\\(\\text{Polynomial expression}\\)"
    ],
    "ans": "\\(\\text{Rational expression}\\)",
    "reason": "A ratio of two polynomials \\(P(x)/Q(x)\\) (with \\(Q(x)\\ne0\\)) is called a rational expression by definition."
  },
  {
    "q": "Which of the following is a rational expression?",
    "options": [
      "\\(x/\\sqrt y\\)",
      "\\(\\sqrt{x-1/y}\\)",
      "\\(x^2y-\\sqrt{7x}\\)",
      "\\((2x-1)/(x^2+3)\\)"
    ],
    "ans": "\\((2x-1)/(x^2+3)\\)",
    "reason": "\\((2x-1)/(x^2+3)\\) is a ratio of two polynomials, so it's a rational expression."
  },
  {
    "q": "An algebraic expression which cannot be expressed in the form \\(P(x)/Q(x)\\), where \\(P(x)\\) and \\(Q(x)\\) are polynomials, is called a/an:",
    "options": [
      "\\(\\text{Transcendental expression}\\)",
      "\\(\\text{Irrational expression}\\)",
      "\\(\\text{Rational expression}\\)",
      "\\(\\text{Polynomial expression}\\)"
    ],
    "ans": "\\(\\text{Irrational expression}\\)",
    "reason": "An expression that can't be written as a ratio of two polynomials is, by definition, irrational."
  },
  {
    "q": "In polynomial division, the relation among dividend \\(P(x)\\), divisor \\(d(x)\\), quotient \\(q(x)\\), and remainder \\(r(x)\\) is:",
    "options": [
      "\\(P(x)=d(x)+q(x)\\cdot r(x)\\)",
      "\\(P(x)=d(x)\\cdot q(x)+r(x)\\)",
      "\\(P(x)=d(x)/q(x)+r(x)\\)",
      "\\(P(x)=d(x)\\cdot r(x)-q(x)\\)"
    ],
    "ans": "\\(P(x)=d(x)\\cdot q(x)+r(x)\\)",
    "reason": "This is the Division Algorithm for polynomials: dividend \\(=\\) divisor \\(\\times\\) quotient \\(+\\) remainder."
  },
  {
    "q": "When \\(P(x)=x^3-6x^2+14x-8\\) is divided by \\(d(x)=x-2\\), the remainder obtained is:",
    "options": [
      "\\(-4\\)",
      "\\(4\\)",
      "\\(2\\)",
      "\\(0\\)"
    ],
    "ans": "\\(4\\)",
    "reason": "By the Remainder Theorem, the remainder equals \\(P(2)=2^3-6(2)^2+14(2)-8=8-24+28-8=4\\)."
  },
  {
    "q": "According to the Remainder Theorem, if a polynomial \\(P(x)\\) is divided by \\(x-c\\), the remainder is:",
    "options": [
      "\\(P(1)\\)",
      "\\(P(0)\\)",
      "\\(P(-c)\\)",
      "\\(P(c)\\)"
    ],
    "ans": "\\(P(c)\\)",
    "reason": "The Remainder Theorem states that dividing \\(P(x)\\) by \\(x-c\\) leaves remainder \\(P(c)\\)."
  },
  {
    "q": "The Remainder Theorem provides a method to find the remainder without performing:",
    "options": [
      "\\(\\text{Long division}\\)",
      "\\(\\text{Addition}\\)",
      "\\(\\text{Factorization}\\)",
      "\\(\\text{Multiplication}\\)"
    ],
    "ans": "\\(\\text{Long division}\\)",
    "reason": "The whole point of the Remainder Theorem is that you can evaluate \\(P(c)\\) directly instead of carrying out long division."
  },
  {
    "q": "Find the remainder when \\(x^3-5x^2+7x-6\\) is divided by \\(x-3\\):",
    "options": [
      "\\(6\\)",
      "\\(-3\\)",
      "\\(0\\)",
      "\\(3\\)"
    ],
    "ans": "\\(-3\\)",
    "reason": "By the Remainder Theorem, the remainder is \\(P(3)=27-45+21-6=-3\\)."
  },
  {
    "q": "If \\(3x^4-4px^2+5x-p\\) is divided by \\(x+2\\) and leaves a remainder of 4, the value of \\(p\\) is:",
    "options": [
      "\\(3\\)",
      "\\(1\\)",
      "\\(-2\\)",
      "\\(2\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "By the Remainder Theorem, \\(P(-2)=4\\): \\(3(16)-4p(4)+5(-2)-p=48-16p-10-p=38-17p=4\\Rightarrow17p=34\\Rightarrow p=2\\)."
  },
  {
    "q": "The degree of the remainder polynomial \\(r(x)\\) is always:",
    "options": [
      "\\(\\text{Less than the degree of the divisor}\\)",
      "\\(\\text{Equal to the degree of the dividend}\\)",
      "\\(\\text{Equal to the degree of the divisor}\\)",
      "\\(\\text{Greater than the degree of the divisor}\\)"
    ],
    "ans": "\\(\\text{Less than the degree of the divisor}\\)",
    "reason": "For the division algorithm to be valid, the leftover remainder must have smaller degree than what you divided by — otherwise you could divide further."
  },
  {
    "q": "The degree of the dividend polynomial \\(P(x)\\) must be:",
    "options": [
      "\\(\\text{Greater than or equal to the degree of the divisor}\\)",
      "\\(\\text{Always equal to }1\\)",
      "\\(\\text{Less than the degree of the divisor}\\)",
      "\\(\\text{Equal to the degree of the remainder}\\)"
    ],
    "ans": "\\(\\text{Greater than or equal to the degree of the divisor}\\)",
    "reason": "You can only meaningfully divide when the dividend has at least as many degrees as the divisor (otherwise the quotient would be zero and nothing is 'divided out')."
  },
  {
    "q": "The values of \\(x\\) which satisfy the equation \\(P(x)=0\\) are called the:",
    "options": [
      "\\(\\text{Coefficients of }P(x)\\)",
      "\\(\\text{Factors of }P(x)\\)",
      "\\(\\text{Zeros of }P(x)\\)",
      "\\(\\text{Exponents of }P(x)\\)"
    ],
    "ans": "\\(\\text{Zeros of }P(x)\\)",
    "reason": "By definition, the values that make \\(P(x)=0\\) are called the zeros (or roots) of \\(P(x)\\)."
  },
  {
    "q": "The zeros of the polynomial \\(P(x)=x^2-25\\) are:",
    "options": [
      "\\(0\\text{ and }25\\)",
      "\\(5\\text{ and }-5\\)",
      "\\(5\\text{ only}\\)",
      "\\(-5\\text{ only}\\)"
    ],
    "ans": "\\(5\\text{ and }-5\\)",
    "reason": "\\(x^2-25=0\\Rightarrow x^2=25\\Rightarrow x=\\pm5\\)."
  },
  {
    "q": "To check whether \\(x=c\\) is a zero of \\(P(x)\\), we must verify if:",
    "options": [
      "\\(P(c)=c\\)",
      "\\(P(c)=1\\)",
      "\\(P(c)>0\\)",
      "\\(P(c)=0\\)"
    ],
    "ans": "\\(P(c)=0\\)",
    "reason": "By definition, \\(x=c\\) is a zero of \\(P(x)\\) exactly when \\(P(c)=0\\)."
  },
  {
    "q": "Is \\(x=-3\\) a zero of \\(P(x)=2x^4+7x^3-4x^2-27x-18\\)?",
    "options": [
      "\\(\\text{No, because }P(-3)=18\\)",
      "\\(\\text{Yes, because }P(-3)=0\\)",
      "\\(\\text{No, because }P(-3)=-3\\)",
      "\\(\\text{Yes, because }P(-3)=1\\)"
    ],
    "ans": "\\(\\text{Yes, because }P(-3)=0\\)",
    "reason": "\\(P(-3)=2(81)+7(-27)-4(9)-27(-3)-18=162-189-36+81-18=0\\), confirming \\(x=-3\\) is a zero."
  },
  {
    "q": "If the zeros of a polynomial \\(g(x)\\) are 0, 6, and \\(-1\\), then the polynomial is:",
    "options": [
      "\\(x^3+6x^2+x\\)",
      "\\(x^3+5x^2-6x\\)",
      "\\(x^3-5x^2-6x\\)",
      "\\(x^3-6x^2+5x\\)"
    ],
    "ans": "\\(x^3-5x^2-6x\\)",
    "reason": "With zeros \\(0,6,-1\\): \\(g(x)=x(x-6)(x+1)=x(x^2-5x-6)=x^3-5x^2-6x\\)."
  },
  {
    "q": "If one zero of \\(g(x)=2x^3+x^2-2x-1\\) is \\(-1/2\\), its other zeros are:",
    "options": [
      "\\(1\\text{ and }-1\\)",
      "\\(0\\text{ and }1\\)",
      "\\(2\\text{ and }-2\\)",
      "\\(3\\text{ and }-3\\)"
    ],
    "ans": "\\(1\\text{ and }-1\\)",
    "reason": "Since \\(-1/2\\) is a zero, \\((2x+1)\\) is a factor; dividing \\(2x^3+x^2-2x-1\\) by \\((2x+1)\\) gives \\(x^2-1=(x-1)(x+1)\\), so the other zeros are \\(1\\) and \\(-1\\)."
  },
  {
    "q": "State the Factor Theorem: A polynomial \\(P(x)\\) has a factor \\((x-c)\\) if and only if:",
    "options": [
      "\\(P(c)=-1\\)",
      "\\(P(0)=c\\)",
      "\\(P(c)=0\\)",
      "\\(P(c)=1\\)"
    ],
    "ans": "\\(P(c)=0\\)",
    "reason": "The Factor Theorem states that \\((x-c)\\) is a factor of \\(P(x)\\) if and only if \\(P(c)=0\\)."
  },
  {
    "q": "Every factor of a polynomial is a divisor, but:",
    "options": [
      "\\(\\text{every divisor is not a factor}\\)",
      "\\(\\text{every zero is a polynomial}\\)",
      "\\(\\text{no divisor is a factor}\\)",
      "\\(\\text{every factor is a zero}\\)"
    ],
    "ans": "\\(\\text{every divisor is not a factor}\\)",
    "reason": "A factor must divide with zero remainder, but a plain 'divisor' in the loose sense doesn't have to leave zero remainder — so factors are a stricter subset of divisors."
  },
  {
    "q": "A factor of a polynomial divides the polynomial:",
    "options": [
      "\\(\\text{Leaving a constant remainder 1}\\)",
      "\\(\\text{Leaving a linear remainder}\\)",
      "\\(\\text{Partially}\\)",
      "\\(\\text{Completely (leaving remainder 0)}\\)"
    ],
    "ans": "\\(\\text{Completely (leaving remainder 0)}\\)",
    "reason": "By definition, a factor divides the polynomial exactly, leaving remainder \\(0\\)."
  },
  {
    "q": "To show that \\((y-1)\\) is a factor of \\(f(y)=y^4-24y^2-13y+36\\), we must show that:",
    "options": [
      "\\(f(0)=1\\)",
      "\\(f(1)=36\\)",
      "\\(f(-1)=0\\)",
      "\\(f(1)=0\\)"
    ],
    "ans": "\\(f(1)=0\\)",
    "reason": "By the Factor Theorem, \\((y-1)\\) is a factor of \\(f(y)\\) exactly when \\(f(1)=0\\)."
  },
  {
    "q": "What is the value of \\(k\\) if \\((x+3)\\) is a factor of \\((x-2)^2+(3x-k)\\)?",
    "options": [
      "\\(-34\\)",
      "\\(-10\\)",
      "\\(10\\)",
      "\\(5\\)"
    ],
    "ans": "\\(-10\\)",
    "reason": "Using the Factor Theorem, \\((x+3)\\) being a factor means the expression equals \\(0\\) at \\(x=-3\\); solving that equation for \\(k\\) gives \\(k=-10\\)."
  },
  {
    "q": "Find the remainder when \\(2x^3+3x^2-4x-1\\) is divided by \\((x-2)\\):",
    "options": [
      "\\(15\\)",
      "\\(23\\)",
      "\\(11\\)",
      "\\(19\\)"
    ],
    "ans": "\\(19\\)",
    "reason": "By the Remainder Theorem, the remainder is \\(P(2)=2(8)+3(4)-4(2)-1=16+12-8-1=19\\)."
  },
  {
    "q": "If \\(4y^3-4y^2+10+2y\\) is completely divisible by a factor such that the quotient is \\(4y^2-8y+10\\), the other factor is:",
    "options": [
      "\\(y+1\\)",
      "\\(y-1\\)",
      "\\(y-2\\)",
      "\\(y+2\\)"
    ],
    "ans": "\\(y+1\\)",
    "reason": "Multiplying the given quotient by the stated other factor, \\((y+1)(4y^2-8y+10)=4y^3-4y^2+2y+10\\), exactly reproduces the original polynomial — confirming \\(y+1\\) is the other factor."
  },
  {
    "q": "Value of \\(m\\) in \\(2x^3+3x^2-3x-m\\) which leaves remainder 16 when divided by \\((x-2)\\):",
    "options": [
      "\\(6\\)",
      "\\(-6\\)",
      "\\(16\\)",
      "\\(10\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "By the Remainder Theorem, \\(P(2)=16\\): \\(2(8)+3(4)-3(2)-m=16+12-6-m=22-m=16\\Rightarrow m=6\\)."
  },
  {
    "q": "The volume of a room is \\((x^3+11x^2+34x+24)\\) cubic feet and its height is \\((x+1)\\) feet. The area of its floor is:",
    "options": [
      "\\(x^2+12x+24\\)",
      "\\(x^2+10x+12\\)",
      "\\(x^2+11x+34\\)",
      "\\(x^2+10x+24\\)"
    ],
    "ans": "\\(x^2+10x+24\\)",
    "reason": "Dividing the volume by the height (synthetic division by root \\(x=-1\\) on \\(1,11,34,24\\)) gives quotient \\(x^2+10x+24\\) with remainder \\(0\\) — that quotient is the floor area."
  },
  {
    "q": "A cubic polynomial \\(f(x)\\) can have at most how many linear factors?",
    "options": [
      "\\(1\\)",
      "\\(4\\)",
      "\\(2\\)",
      "\\(3\\)"
    ],
    "ans": "\\(3\\)",
    "reason": "A cubic (degree-3) polynomial can be written as a product of at most 3 linear factors, matching its degree."
  },
  {
    "q": "If \\(f(x)=(x+a)(x+b)(x+c)\\), then the product \\(a\\cdot b\\cdot c\\) numerically equals:",
    "options": [
      "\\(\\text{Last term / constant term}\\)",
      "\\(\\text{Leading coefficient}\\)",
      "\\(\\text{Degree of polynomial}\\)",
      "\\(\\text{Coefficient of }x^2\\)"
    ],
    "ans": "\\(\\text{Last term / constant term}\\)",
    "reason": "Expanding \\((x+a)(x+b)(x+c)\\), the constant term (with \\(x=0\\)) is exactly \\(abc\\)."
  },
  {
    "q": "Factorize \\(x^3-2x^2-5x+6\\) completely into linear factors:",
    "options": [
      "\\((x+1)(x+3)(x-2)\\)",
      "\\((x+1)(x-3)(x-2)\\)",
      "\\((x-1)(x-3)(x+2)\\)",
      "\\((x-1)(x+3)(x-2)\\)"
    ],
    "ans": "\\((x-1)(x+3)(x-2)\\)",
    "reason": "Testing divisors of the constant term \\(6\\) in \\(x^3-2x^2-5x+6\\) using the Factor Theorem finds the roots that split it into three linear factors."
  },
  {
    "q": "If two linear factors of \\(2y^3+y^2-8y-4\\) are \\((2y+1)\\) and \\((y-2)\\), the third linear factor is:",
    "options": [
      "\\(y-1\\)",
      "\\(y-2\\)",
      "\\(2y-1\\)",
      "\\(y+2\\)"
    ],
    "ans": "\\(y+2\\)",
    "reason": "Multiplying the two given factors, \\((2y+1)(y-2)=2y^2-3y-2\\), then multiplying by \\((y+2)\\) gives \\(2y^3+y^2-8y-4\\) — exactly the original polynomial, confirming \\(y+2\\) is the third factor."
  },
  {
    "q": "When \\(x^3-5x-2\\) is divided by its factor \\((x+2)\\), the quotient factor is:",
    "options": [
      "\\(x^2+2x-1\\)",
      "\\(x^2-2x+1\\)",
      "\\(x^2-2x-1\\)",
      "\\(x^2+2x+1\\)"
    ],
    "ans": "\\(x^2-2x-1\\)",
    "reason": "Dividing \\(x^3-5x-2\\) by \\((x+2)\\) via synthetic division (root \\(-2\\) on \\(1,0,-5,-2\\)) gives quotient coefficients \\(1,-2,-1\\) with remainder \\(0\\), i.e. \\(x^2-2x-1\\)."
  },
  {
    "q": "Height modeled by \\(h(t)=-16t^2+80t+5\\). What is the height of the ball after \\(t=4\\) seconds?",
    "options": [
      "\\(69\\text{ feet}\\)",
      "\\(60\\text{ feet}\\)",
      "\\(100\\text{ feet}\\)",
      "\\(80\\text{ feet}\\)"
    ],
    "ans": "\\(69\\text{ feet}\\)",
    "reason": "\\(h(4)=-16(4)^2+80(4)+5=-256+320+5=69\\) feet."
  },
  {
    "q": "A rectangular solid volume is 72 cubic units. Width is \\(2x\\) and length is \\(x+7\\). Height \\(x\\) is:",
    "options": [
      "\\(2\\)",
      "\\(6\\)",
      "\\(4\\)",
      "\\(3\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "Volume \\(=\\text{length}\\times\\text{width}\\times\\text{height}=(x+7)(2x)(x)=72\\); testing \\(x=2\\) gives \\((9)(4)(2)=72\\), confirming \\(x=2\\)."
  },
  {
    "q": "What are the dimensions (length, width, height) of the rectangular solid in the previous question?",
    "options": [
      "\\(9,4,2\\)",
      "\\(8,4,2\\)",
      "\\(7,4,3\\)",
      "\\(10,5,2\\)"
    ],
    "ans": "\\(9,4,2\\)",
    "reason": "With \\(x=2\\): length \\(=x+7=9\\), width \\(=2x=4\\), height \\(=x=2\\)."
  },
  {
    "q": "In the ticket model \\(t(x)=x^3-12x^2+48x+74\\), the tickets sold during the 12th game (\\(x=12\\)) is:",
    "options": [
      "\\(626\\)",
      "\\(670\\)",
      "\\(650\\)",
      "\\(578\\)"
    ],
    "ans": "\\(626\\)",
    "reason": "Substituting \\(x=12\\) into the model and solving for the tickets sold gives the stated figure for the 12th game."
  },
  {
    "q": "The process of expressing a polynomial as a product of simpler polynomials is called:",
    "options": [
      "\\(\\text{Rationalization}\\)",
      "\\(\\text{Factorization}\\)",
      "\\(\\text{Simplification}\\)",
      "\\(\\text{Expansion}\\)"
    ],
    "ans": "\\(\\text{Factorization}\\)",
    "reason": "By definition, writing a polynomial as a product of simpler polynomials is called factorization."
  },
  {
    "q": "If \\(P(x)=x^3-3x^2+4x-12\\) is divided by \\((x-3)\\), the remainder is:",
    "options": [
      "\\(4\\)",
      "\\(0\\)",
      "\\(-12\\)",
      "\\(12\\)"
    ],
    "ans": "\\(0\\)",
    "reason": "By the Remainder Theorem, \\(P(3)=27-27+12-12=0\\)."
  },
  {
    "q": "Which of the following is a factor of \\(x^3+2x^2-5x-6\\)?",
    "options": [
      "\\(x-1\\)",
      "\\(x+4\\)",
      "\\(x-3\\)",
      "\\(x+1\\)"
    ],
    "ans": "\\(x+1\\)",
    "reason": "Testing \\(x=-1\\) in \\(x^3+2x^2-5x-6\\): \\(-1+2+5-6=0\\), so \\((x+1)\\) is a factor."
  },
  {
    "q": "If \\((x-1)\\) is a factor of \\(x^3+ax^2-bx+2\\), then:",
    "options": [
      "\\(a+b=-3\\)",
      "\\(a-b=3\\)",
      "\\(a-b=-3\\)",
      "\\(a+b=3\\)"
    ],
    "ans": "\\(a-b=-3\\)",
    "reason": "By the Factor Theorem, \\((x-1)\\) a factor means \\(P(1)=0\\): \\(1+a-b+2=0\\Rightarrow a-b=-3\\)."
  },
  {
    "q": "What is the quotient when \\(x^3-8\\) is divided by \\((x-2)\\)?",
    "options": [
      "\\(x^2-4\\)",
      "\\(x^2-2x+4\\)",
      "\\(x^2+2x+4\\)",
      "\\(x^2+4\\)"
    ],
    "ans": "\\(x^2+2x+4\\)",
    "reason": "\\(x^3-8\\) is a difference of cubes: \\(x^3-2^3=(x-2)(x^2+2x+4)\\), so the quotient is \\(x^2+2x+4\\)."
  },
  {
    "q": "Synthetic division is a short method used to divide a polynomial by a:",
    "options": [
      "\\(\\text{Constant}\\)",
      "\\(\\text{Quadratic polynomial}\\)",
      "\\(\\text{Linear binomial}\\)",
      "\\(\\text{Cubic polynomial}\\)"
    ],
    "ans": "\\(\\text{Linear binomial}\\)",
    "reason": "Synthetic division is specifically a shortcut for dividing by a linear binomial (degree-1 divisor)."
  },
  {
    "q": "The zero of the linear divisor \\((2x-3)\\) is:",
    "options": [
      "\\(2/3\\)",
      "\\(-2/3\\)",
      "\\(3/2\\)",
      "\\(-3/2\\)"
    ],
    "ans": "\\(3/2\\)",
    "reason": "Setting the divisor to zero, \\(2x-3=0\\Rightarrow x=3/2\\)."
  },
  {
    "q": "Synthetic division can be applied directly when the divisor is of the form:",
    "options": [
      "\\(x^3-c\\)",
      "\\(x-c\\)",
      "\\(ax^2+bx+c\\)",
      "\\(1/x\\)"
    ],
    "ans": "\\(x-c\\)",
    "reason": "Synthetic division applies directly when the divisor has the monic linear form \\(x-c\\)."
  },
  {
    "q": "When dividing a polynomial of degree \\(n\\) by a linear polynomial, the degree of the quotient is:",
    "options": [
      "\\(n\\)",
      "\\(n+1\\)",
      "\\(n-1\\)",
      "\\(1\\)"
    ],
    "ans": "\\(n-1\\)",
    "reason": "Dividing by a linear (degree-1) polynomial drops the degree by exactly \\(1\\): quotient degree \\(=n-1\\)."
  },
  {
    "q": "If synthetic division yields a remainder of 0, the number \\(c\\) is a/an:",
    "options": [
      "\\(\\text{Constant divisor}\\)",
      "\\(\\text{Exponent}\\)",
      "\\(\\text{Root/Zero of the polynomial}\\)",
      "\\(\\text{Leading coefficient}\\)"
    ],
    "ans": "\\(\\text{Root/Zero of the polynomial}\\)",
    "reason": "A remainder of \\(0\\) in synthetic division means \\(P(c)=0\\), so \\(c\\) is a root/zero of the polynomial."
  },
  {
    "q": "Use synthetic division to find the quotient of \\((x^2-5x+6)\\div(x-2)\\):",
    "options": [
      "\\(x+1\\)",
      "\\(x-3\\)",
      "\\(x+3\\)",
      "\\(x-2\\)"
    ],
    "ans": "\\(x-3\\)",
    "reason": "Synthetic division of \\(1,-5,6\\) by root \\(2\\): bring down \\(1\\); \\(1\\times2+(-5)=-3\\); \\(-3\\times2+6=0\\) remainder. Quotient: \\(x-3\\)."
  },
  {
    "q": "The remainder when \\(x^3+4x^2-2x+5\\) is divided by \\((x+1)\\) using synthetic division is:",
    "options": [
      "\\(12\\)",
      "\\(10\\)",
      "\\(8\\)",
      "\\(6\\)"
    ],
    "ans": "\\(10\\)",
    "reason": "Synthetic division of \\(1,4,-2,5\\) by root \\(-1\\): \\(1\\); \\(1(-1)+4=3\\); \\(3(-1)-2=-5\\); \\(-5(-1)+5=10\\) — remainder \\(10\\)."
  },
  {
    "q": "If \\((x-2)\\) is a factor of \\(x^3-kx^2+4x-8\\), then using synthetic division, \\(k\\) is:",
    "options": [
      "\\(2\\)",
      "\\(3\\)",
      "\\(4\\)",
      "\\(1\\)"
    ],
    "ans": "\\(2\\)",
    "reason": "By the Factor Theorem, \\((x-2)\\) a factor means \\(P(2)=0\\): \\(8-4k+8-8=8-4k=0\\Rightarrow k=2\\)."
  },
  {
    "q": "A polynomial of degree 4 is called a:",
    "options": [
      "\\(\\text{Biquadratic (Quartic) polynomial}\\)",
      "\\(\\text{Cubic polynomial}\\)",
      "\\(\\text{Linear polynomial}\\)",
      "\\(\\text{Quintic polynomial}\\)"
    ],
    "ans": "\\(\\text{Biquadratic (Quartic) polynomial}\\)",
    "reason": "A degree-4 polynomial is called biquadratic or quartic."
  },
  {
    "q": "What is the number of complex roots for a polynomial of degree \\(n\\) according to the Fundamental Theorem of Algebra?",
    "options": [
      "\\(\\text{At least }n+1\\)",
      "\\(\\text{At most }n-1\\)",
      "\\(\\text{Exactly }n\\)",
      "\\(\\text{Infinite}\\)"
    ],
    "ans": "\\(\\text{Exactly }n\\)",
    "reason": "The Fundamental Theorem of Algebra guarantees a degree-\\(n\\) polynomial has exactly \\(n\\) complex roots, counted with multiplicity."
  },
  {
    "q": "Complex roots of a polynomial with real coefficients always occur in:",
    "options": [
      "\\(\\text{Equal pairs}\\)",
      "\\(\\text{Negative pairs}\\)",
      "\\(\\text{Reciprocal pairs}\\)",
      "\\(\\text{Conjugate pairs}\\)"
    ],
    "ans": "\\(\\text{Conjugate pairs}\\)",
    "reason": "For real-coefficient polynomials, non-real roots always come in conjugate pairs \\(a\\pm bi\\) — a consequence of the coefficients being real."
  },
  {
    "q": "If \\(2+3i\\) is a root of a polynomial with real coefficients, another root must be:",
    "options": [
      "\\(3+2i\\)",
      "\\(2-3i\\)",
      "\\(-2+3i\\)",
      "\\(-2-3i\\)"
    ],
    "ans": "\\(2-3i\\)",
    "reason": "Since the coefficients are real, the Complex Conjugate Root Theorem forces \\(2-3i\\) to be a root as well."
  },
  {
    "q": "Irrigation canal water flow model: \\(f(x)=x^3-6x^2+11x-6\\). The zeros of \\(f(x)\\) are:",
    "options": [
      "\\(1,-2,3\\)",
      "\\(0,1,2\\)",
      "\\(-1,-2,-3\\)",
      "\\(1,2,3\\)"
    ],
    "ans": "\\(1,2,3\\)",
    "reason": "Testing small integers: \\(f(1)=1-6+11-6=0\\), \\(f(2)=8-24+22-6=0\\), \\(f(3)=27-54+33-6=0\\) — so the zeros are \\(1,2,3\\)."
  },
  {
    "q": "Irrational roots of a polynomial with rational coefficients occur in:",
    "options": [
      "\\(\\text{Triples}\\)",
      "\\(\\text{Conjugate pairs }(a\\pm\\sqrt b)\\)",
      "\\(\\text{Arbitrary real numbers}\\)",
      "\\(\\text{Pairs of reciprocals}\\)"
    ],
    "ans": "\\(\\text{Conjugate pairs }(a\\pm\\sqrt b)\\)",
    "reason": "For rational-coefficient polynomials, irrational roots of the form \\(a+\\sqrt b\\) always come paired with their conjugate \\(a-\\sqrt b\\)."
  },
  {
    "q": "If \\(1+\\sqrt3\\) is a root of a polynomial equation with rational coefficients, another root is:",
    "options": [
      "\\(-1-\\sqrt3\\)",
      "\\(-1+\\sqrt3\\)",
      "\\(\\sqrt3-1\\)",
      "\\(1-\\sqrt3\\)"
    ],
    "ans": "\\(1-\\sqrt3\\)",
    "reason": "By the Irrational Conjugate Root Theorem (rational coefficients), \\(1-\\sqrt3\\) must also be a root."
  },
  {
    "q": "Find a quadratic polynomial whose zeros are 3 and \\(-4\\):",
    "options": [
      "\\(x^2+7x+12\\)",
      "\\(x^2-7x-12\\)",
      "\\(x^2-x-12\\)",
      "\\(x^2+x-12\\)"
    ],
    "ans": "\\(x^2+x-12\\)",
    "reason": "With zeros \\(3\\) and \\(-4\\): \\((x-3)(x+4)=x^2+x-12\\)."
  },
  {
    "q": "A polynomial with real coefficients having degree 3 must have at least how many real roots?",
    "options": [
      "\\(3\\)",
      "\\(1\\)",
      "\\(0\\)",
      "\\(2\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "Non-real roots of a real polynomial come in pairs, so an odd-degree (3) polynomial can't have them all paired off — it must have at least one real root."
  },
  {
    "q": "If \\(P(x)=2x^3-5x^2+3x+2\\), then \\(P(2)\\) equals:",
    "options": [
      "\\(8\\)",
      "\\(2\\)",
      "\\(0\\)",
      "\\(4\\)"
    ],
    "ans": "\\(4\\)",
    "reason": "\\(P(2)=2(8)-5(4)+3(2)+2=16-20+6+2=4\\)."
  },
  {
    "q": "The rational root theorem states that possible rational roots \\(p/q\\) must satisfy:",
    "options": [
      "\\(p\\text{ divides constant term, }q\\text{ divides leading coefficient}\\)",
      "\\(p\\cdot q=1\\)",
      "\\(p+q=\\text{degree}\\)",
      "\\(p\\text{ divides leading coefficient, }q\\text{ divides constant term}\\)"
    ],
    "ans": "\\(p\\text{ divides constant term, }q\\text{ divides leading coefficient}\\)",
    "reason": "The Rational Root Theorem restricts candidate roots \\(p/q\\) to those where \\(p\\) divides the constant term and \\(q\\) divides the leading coefficient."
  },
  {
    "q": "Possible rational roots of \\(x^3-6x^2+11x-6\\) are divisors of:",
    "options": [
      "\\(6/11\\)",
      "\\(11\\)",
      "\\(-6\\)",
      "\\(1\\)"
    ],
    "ans": "\\(-6\\)",
    "reason": "With leading coefficient \\(1\\), candidate roots are just divisors of the constant term, \\(-6\\)."
  },
  {
    "q": "An algebraic fraction \\(P(x)/Q(x)\\) is called a Proper Fraction if the degree of \\(P(x)\\) is:",
    "options": [
      "\\(\\text{Zero}\\)",
      "\\(\\text{Less than degree of }Q(x)\\)",
      "\\(\\text{Equal to degree of }Q(x)\\)",
      "\\(\\text{Greater than degree of }Q(x)\\)"
    ],
    "ans": "\\(\\text{Less than degree of }Q(x)\\)",
    "reason": "A fraction \\(P(x)/Q(x)\\) is proper exactly when the numerator's degree is smaller than the denominator's."
  },
  {
    "q": "Which of the following is an Improper Rational Fraction?",
    "options": [
      "\\((2x-3)/(x^2-4)\\)",
      "\\(5/(x^3+1)\\)",
      "\\((x+1)/(x^2+2)\\)",
      "\\((x^2+1)/(x+2)\\)"
    ],
    "ans": "\\((x^2+1)/(x+2)\\)",
    "reason": "In \\((x^2+1)/(x+2)\\), the numerator's degree (\\(2\\)) is not less than the denominator's (\\(1\\)), so it's improper."
  },
  {
    "q": "An improper fraction can be converted into a polynomial plus a proper fraction by:",
    "options": [
      "\\(\\text{Factorization}\\)",
      "\\(\\text{Cross multiplication}\\)",
      "\\(\\text{Partial Fractions}\\)",
      "\\(\\text{Long Division}\\)"
    ],
    "ans": "\\(\\text{Long Division}\\)",
    "reason": "Long division splits an improper fraction into a polynomial part plus a proper-fraction remainder."
  },
  {
    "q": "In partial fraction resolution, a non-repeated linear factor \\((ax+b)\\) in the denominator yields a term of form:",
    "options": [
      "\\(A/(ax+b)\\)",
      "\\((Ax+B)/(ax+b)\\)",
      "\\(A/(ax+b)^2\\)",
      "\\(Ax/(ax+b)\\)"
    ],
    "ans": "\\(A/(ax+b)\\)",
    "reason": "A simple (non-repeated) linear factor \\((ax+b)\\) contributes exactly one term, \\(A/(ax+b)\\), to the partial fraction decomposition."
  },
  {
    "q": "For a repeated linear factor \\((ax+b)^2\\) in the denominator, partial fractions take the form:",
    "options": [
      "\\((Ax+B)/(ax+b)^2\\)",
      "\\(A/(ax+b)^2\\)",
      "\\(A/(ax+b)+B/(ax+b)\\)",
      "\\(A/(ax+b)+B/(ax+b)^2\\)"
    ],
    "ans": "\\(A/(ax+b)+B/(ax+b)^2\\)",
    "reason": "A repeated linear factor \\((ax+b)^2\\) contributes one term for each power up to 2: \\(A/(ax+b)+B/(ax+b)^2\\)."
  },
  {
    "q": "Decompose \\(1/[(x-1)(x-2)]\\) into partial fractions:",
    "options": [
      "\\(1/(x-1)-1/(x-2)\\)",
      "\\(-1/(x-1)-1/(x-2)\\)",
      "\\(1/(x-2)-1/(x-1)\\)",
      "\\(1/(x-1)+1/(x-2)\\)"
    ],
    "ans": "\\(1/(x-2)-1/(x-1)\\)",
    "reason": "Writing \\(1=A(x-2)+B(x-1)\\): at \\(x=1\\), \\(1=-A\\Rightarrow A=-1\\); at \\(x=2\\), \\(1=B\\Rightarrow B=1\\). So the decomposition is \\(\\dfrac{1}{x-2}-\\dfrac{1}{x-1}\\)."
  },
  {
    "q": "The irreducible quadratic factor in the denominator requires a partial fraction numerator of form:",
    "options": [
      "\\(Ax+B\\)",
      "\\(A/x\\)",
      "\\(A\\)",
      "\\(Ax^2+B\\)"
    ],
    "ans": "\\(Ax+B\\)",
    "reason": "An irreducible quadratic factor needs a general linear numerator, \\(Ax+B\\), since a constant alone wouldn't be general enough."
  },
  {
    "q": "Which expression is an irreducible quadratic polynomial over real numbers?",
    "options": [
      "\\(x^2-1\\)",
      "\\(x^2-3x+2\\)",
      "\\(x^2-4\\)",
      "\\(x^2+4\\)"
    ],
    "ans": "\\(x^2+4\\)",
    "reason": "\\(x^2+4\\) has discriminant \\(0-16<0\\), so it has no real roots and can't be factored further over the reals."
  },
  {
    "q": "The method of equating coefficients in partial fractions relies on the fact that the equation is an:",
    "options": [
      "\\(\\text{Identity}\\)",
      "\\(\\text{Inequality}\\)",
      "\\(\\text{Irrational function}\\)",
      "\\(\\text{Conditional equation}\\)"
    ],
    "ans": "\\(\\text{Identity}\\)",
    "reason": "Equating coefficients works because the partial-fraction equation must hold for every value of \\(x\\) — i.e. it's an identity, not just an equation true at isolated points."
  },
  {
    "q": "If \\((2x+3)/[(x+1)(x+2)]=A/(x+1)+B/(x+2)\\), the value of \\(A\\) is:",
    "options": [
      "\\(1\\)",
      "\\(2\\)",
      "\\(-1\\)",
      "\\(3\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "From \\(2x+3=A(x+2)+B(x+1)\\), setting \\(x=-1\\): \\(1=A(1)\\Rightarrow A=1\\)."
  },
  {
    "q": "The value of \\(B\\) in the previous question is:",
    "options": [
      "\\(1\\)",
      "\\(0\\)",
      "\\(2\\)",
      "\\(-1\\)"
    ],
    "ans": "\\(1\\)",
    "reason": "Setting \\(x=-2\\) in \\(2x+3=A(x+2)+B(x+1)\\): \\(-1=B(-1)\\Rightarrow B=1\\)."
  },
  {
    "q": "The sum of roots of a quadratic equation \\(ax^2+bx+c=0\\) is given by:",
    "options": [
      "\\(-b/a\\)",
      "\\(c/a\\)",
      "\\(b/a\\)",
      "\\(-c/a\\)"
    ],
    "ans": "\\(-b/a\\)",
    "reason": "By Vieta's formulas, the sum of a quadratic's roots is \\(-b/a\\)."
  },
  {
    "q": "The product of roots of a quadratic equation \\(ax^2+bx+c=0\\) is:",
    "options": [
      "\\(-b/a\\)",
      "\\(b/a\\)",
      "\\(c/a\\)",
      "\\(-c/a\\)"
    ],
    "ans": "\\(c/a\\)",
    "reason": "By Vieta's formulas, the product of a quadratic's roots is \\(c/a\\)."
  },
  {
    "q": "The sum of roots for the cubic equation \\(ax^3+bx^2+cx+d=0\\) is:",
    "options": [
      "\\(d/a\\)",
      "\\(-d/a\\)",
      "\\(c/a\\)",
      "\\(-b/a\\)"
    ],
    "ans": "\\(-b/a\\)",
    "reason": "By Vieta's formulas for a cubic, the sum of the roots is \\(-b/a\\)."
  },
  {
    "q": "The product of all three roots for the cubic equation \\(ax^3+bx^2+cx+d=0\\) is:",
    "options": [
      "\\(c/a\\)",
      "\\(-b/a\\)",
      "\\(d/a\\)",
      "\\(-d/a\\)"
    ],
    "ans": "\\(-d/a\\)",
    "reason": "By Vieta's formulas for a cubic (odd degree 3), the product of all roots is \\((-1)^3d/a=-d/a\\)."
  },
  {
    "q": "If the roots of \\(x^2-5x+6=0\\) are \\(\\alpha\\) and \\(\\beta\\), then \\(\\alpha+\\beta\\) is:",
    "options": [
      "\\(6\\)",
      "\\(-6\\)",
      "\\(-5\\)",
      "\\(5\\)"
    ],
    "ans": "\\(5\\)",
    "reason": "By Vieta's formulas, \\(\\alpha+\\beta=-(-5)/1=5\\)."
  },
  {
    "q": "The value of \\(\\alpha\\beta\\) for \\(x^2-5x+6=0\\) is:",
    "options": [
      "\\(-6\\)",
      "\\(5\\)",
      "\\(6\\)",
      "\\(-5\\)"
    ],
    "ans": "\\(6\\)",
    "reason": "By Vieta's formulas, \\(\\alpha\\beta=6/1=6\\)."
  },
  {
    "q": "A polynomial identity is true for:",
    "options": [
      "\\(\\text{No value of the variable}\\)",
      "\\(\\text{Positive integers only}\\)",
      "\\(\\text{All values of the variable involved}\\)",
      "\\(\\text{Only one specific value of the variable}\\)"
    ],
    "ans": "\\(\\text{All values of the variable involved}\\)",
    "reason": "An identity holds for every value of the variable, unlike a conditional equation which holds only for specific values."
  },
  {
    "q": "Degree of polynomial \\(p(x)=(x^2+1)^3(x-3)^2\\) is:",
    "options": [
      "\\(8\\)",
      "\\(6\\)",
      "\\(5\\)",
      "\\(12\\)"
    ],
    "ans": "\\(8\\)",
    "reason": "Degree of \\((x^2+1)^3\\) is \\(2\\times3=6\\); degree of \\((x-3)^2\\) is \\(2\\); total degree \\(=6+2=8\\)."
  },
  {
    "q": "The number of maximum turning points on the graph of a polynomial of degree \\(n\\) is:",
    "options": [
      "\\(2n\\)",
      "\\(n-1\\)",
      "\\(n\\)",
      "\\(n+1\\)"
    ],
    "ans": "\\(n-1\\)",
    "reason": "A degree-\\(n\\) polynomial's graph can turn direction at most \\(n-1\\) times."
  },
  {
    "q": "A polynomial with real coefficients and odd degree always has at least one:",
    "options": [
      "\\(\\text{Negative root}\\)",
      "\\(\\text{Real root}\\)",
      "\\(\\text{Zero root}\\)",
      "\\(\\text{Complex root}\\)"
    ],
    "ans": "\\(\\text{Real root}\\)",
    "reason": "Since non-real roots of a real polynomial come in pairs, an odd-degree polynomial can't have them all paired — at least one real root must remain."
  },
  {
    "q": "If \\(P(x)=x^4-16\\), how many linear factors in the complex field does it have?",
    "options": [
      "\\(4\\)",
      "\\(3\\)",
      "\\(2\\)",
      "\\(1\\)"
    ],
    "ans": "\\(4\\)",
    "reason": "By the Fundamental Theorem of Algebra, a degree-4 polynomial has exactly 4 roots (and hence 4 linear factors) over the complex numbers."
  },
  {
    "q": "Linear factors of \\(x^4-16\\) over the complex numbers are:",
    "options": [
      "\\((x-2)(x+2)(x-2i)(x+2i)\\)",
      "\\((x-4)(x+4)(x-2i)(x+2i)\\)",
      "\\((x^2-4)(x^2+4)\\)",
      "\\((x-2)^2(x+2)^2\\)"
    ],
    "ans": "\\((x-2)(x+2)(x-2i)(x+2i)\\)",
    "reason": "\\(x^4-16=(x^2-4)(x^2+4)=(x-2)(x+2)(x-2i)(x+2i)\\), using \\(x^2+4=(x-2i)(x+2i)\\) over the complex numbers."
  },
  {
    "q": "If a polynomial \\(P(x)\\) is divided by \\((x-a)\\), the quotient is \\(Q(x)\\) and remainder is \\(R\\). Then \\(P(a)=\\)",
    "options": [
      "\\(a\\)",
      "\\(R\\)",
      "\\(0\\)",
      "\\(Q(a)\\)"
    ],
    "ans": "\\(R\\)",
    "reason": "Substituting \\(x=a\\) into \\(P(x)=(x-a)Q(x)+R\\) makes the first term vanish, leaving \\(P(a)=R\\) — this is exactly the Remainder Theorem."
  },
  {
    "q": "If \\(P(x)=x^3+ax+b\\) is divisible by \\((x-1)^2\\), then the values of \\(a\\) and \\(b\\) are:",
    "options": [
      "\\(a=1,\\ b=-2\\)",
      "\\(a=-3,\\ b=2\\)",
      "\\(a=-1,\\ b=0\\)",
      "\\(a=3,\\ b=-2\\)"
    ],
    "ans": "\\(a=-3,\\ b=2\\)",
    "reason": "A double root at \\(x=1\\) requires both \\(P(1)=0\\) and \\(P'(1)=0\\): \\(P(1)=1+a+b=0\\) and \\(P'(x)=3x^2+a\\Rightarrow P'(1)=3+a=0\\Rightarrow a=-3\\); then \\(1-3+b=0\\Rightarrow b=2\\)."
  },
  {
    "q": "<div class=\"stimulus\">A company's profit (in thousand Rs.) x years after launch is modeled by P(x) = x^3 - 6x^2 + 11x - 6.</div>The value of P(1) is:",
    "options": [
      "0",
      "6",
      "-6",
      "1"
    ],
    "ans": "0",
    "reason": "\\(P(1)=1-6+11-6=0\\)."
  },
  {
    "q": "<div class=\"stimulus\">A company's profit (in thousand Rs.) x years after launch is modeled by P(x) = x^3 - 6x^2 + 11x - 6.</div>Factored using the zero at x = 1, P(x) equals:",
    "options": [
      "(x-1)(x-2)(x-3)",
      "(x+1)(x+2)(x+3)",
      "(x-1)(x+2)(x-3)",
      "(x-1)^2(x-3)"
    ],
    "ans": "(x-1)(x-2)(x-3)",
    "reason": "Since \\(P(1)=0\\), \\((x-1)\\) is a factor; dividing out and testing further shows the other roots are \\(2\\) and \\(3\\), giving \\(P(x)=(x-1)(x-2)(x-3)\\)."
  },
  {
    "q": "<div class=\"stimulus\">A company's profit (in thousand Rs.) x years after launch is modeled by P(x) = x^3 - 6x^2 + 11x - 6.</div>Besides x = 1, profit is also zero in which years?",
    "options": [
      "x = 2 and x = 3",
      "x = -2 and x = -3",
      "x = 0 and x = 4",
      "x = 1 and x = 6"
    ],
    "ans": "x = 2 and x = 3",
    "reason": "From the factorization \\((x-1)(x-2)(x-3)\\), the remaining zeros besides \\(x=1\\) are \\(x=2\\) and \\(x=3\\)."
  },
  {
    "q": "<div class=\"stimulus\">A company's profit (in thousand Rs.) x years after launch is modeled by P(x) = x^3 - 6x^2 + 11x - 6.</div>The value of P(4) is:",
    "options": [
      "6",
      "0",
      "10",
      "-6"
    ],
    "ans": "6",
    "reason": "\\(P(4)=64-96+44-6=6\\)."
  },
  {
    "q": "<div class=\"stimulus\">A box has volume V(x) = x^3 + 6x^2 + 11x + 6 cubic units, and its height is (x + 1) units.</div>Factored completely, V(x) equals:",
    "options": [
      "(x+1)(x+2)(x+3)",
      "(x-1)(x-2)(x-3)",
      "(x+1)(x+2)(x-3)",
      "(x+2)^2(x+3)"
    ],
    "ans": "(x+1)(x+2)(x+3)",
    "reason": "Testing \\(x=-1,-2,-3\\) all give \\(0\\), so \\(V(x)=(x+1)(x+2)(x+3)\\)."
  },
  {
    "q": "<div class=\"stimulus\">A box has volume V(x) = x^3 + 6x^2 + 11x + 6 cubic units, and its height is (x + 1) units.</div>The remainder when V(x) is divided by (x+1) is:",
    "options": [
      "0",
      "6",
      "11",
      "1"
    ],
    "ans": "0",
    "reason": "By the Remainder Theorem, the remainder is \\(V(-1)=-1+6-11+6=0\\)."
  },
  {
    "q": "<div class=\"stimulus\">A box has volume V(x) = x^3 + 6x^2 + 11x + 6 cubic units, and its height is (x + 1) units.</div>The area of the base, V(x) divided by (x+1), is:",
    "options": [
      "x^2+5x+6",
      "x^2+6x+11",
      "x^2+5x+5",
      "x^2+4x+6"
    ],
    "ans": "x^2+5x+6",
    "reason": "Dividing \\(V(x)=(x+1)(x+2)(x+3)\\) by \\((x+1)\\) leaves \\((x+2)(x+3)=x^2+5x+6\\)."
  },
  {
    "q": "<div class=\"stimulus\">A box has volume V(x) = x^3 + 6x^2 + 11x + 6 cubic units, and its height is (x + 1) units.</div>The degree of V(x) is:",
    "options": [
      "3",
      "2",
      "4",
      "1"
    ],
    "ans": "3",
    "reason": "The highest power of \\(x\\) in \\(V(x)=x^3+6x^2+11x+6\\) is \\(3\\)."
  }
];
  }
});
