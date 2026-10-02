// Class 12 Math -- Chapter 3: Integration
// Converted from the 300-question Class 12 MCQ bank (chapters 1-3), with
// short explanations added for every question.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch3",
  label: "Chapter 3: Integration",
  order: 3,
  questions: function () {
    return [
      {
        q: "If \\(f\\) is integrable, then it is:",
        options: ["discontinuous", "unbounded", "continuous", "linear"],
        ans: "continuous",
        reason: "For a function to be Riemann integrable on an interval, it is generally required to be continuous (or at least piecewise continuous) there."
      },
      {
        q: "If \\(f'(x)=3x^2+2x\\), then \\(f(x)\\) is:",
        options: ["\\(6x+2+c\\)", "\\(x^3+x^2+c\\)", "\\(3x^3+2x^2+c\\)", "\\(1.5x^3+x^2+c\\)"],
        ans: "\\(x^3+x^2+c\\)",
        reason: "Integrating term by term: \\(\\int3x^2dx=x^3\\) and \\(\\int2x\\,dx=x^2\\), plus a constant."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{d}{dx}(x^2)\\,dx\\) is equal to:",
        options: ["\\(x^2+c\\)", "\\(2x+c\\)", "\\(\\dfrac{x^3}3+c\\)", "\\(x+c\\)"],
        ans: "\\(x^2+c\\)",
        reason: "Integration undoes differentiation, so \\(\\int\\frac{d}{dx}(x^2)\\,dx=x^2+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\sin2x\\,dx\\) is:",
        options: ["\\(\\dfrac{\\cos2x}2+c\\)", "\\(2\\cos2x+c\\)", "\\(-\\dfrac{\\sin2x}2+c\\)", "\\(-\\dfrac{\\cos2x}2+c\\)"],
        ans: "\\(-\\dfrac{\\cos2x}2+c\\)",
        reason: "Using \\(\\int\\sin(kx)dx=-\\frac{\\cos kx}{k}+c\\) with \\(k=2\\) gives \\(-\\frac{\\cos2x}2+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int_3^7dx\\) is:",
        options: ["3", "4", "5", "6"],
        ans: "4",
        reason: "\\(\\int_3^7dx=7-3=4\\)."
      },
      {
        q: "\\(\\displaystyle\\int_{\\pi/6}^{\\pi}\\cos x\\,dx\\) is:",
        options: ["\\(-\\dfrac12\\)", "\\(\\dfrac12\\)", "\\(\\dfrac32\\)", "\\(-\\dfrac32\\)"],
        ans: "\\(-\\dfrac12\\)",
        reason: "\\(\\int\\cos x\\,dx=\\sin x\\), so evaluating gives \\(\\sin\\pi-\\sin(\\pi/6)=0-\\frac12=-\\frac12\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}\\displaystyle\\int_{-2}^{x}t^3\\,dt\\) is equal to:",
        options: ["\\(t^4\\)", "\\(t^3\\)", "\\(x^3\\)", "\\(x^3-16\\)"],
        ans: "\\(x^3\\)",
        reason: "By the Fundamental Theorem of Calculus, differentiating the integral with variable upper limit just returns the integrand evaluated at x: \\(x^3\\)."
      },
      {
        q: "What is the relation between \\(\\displaystyle\\int_1^2x\\,dx\\) and \\(\\displaystyle\\int_1^2t\\,dt\\)?",
        options: ["\\(\\int_1^2x\\,dx<\\int_1^2t\\,dt\\)", "\\(\\int_1^2x\\,dx>\\int_1^2t\\,dt\\)", "\\(\\int_1^2x\\,dx\\ne\\int_1^2t\\,dt\\)", "\\(\\int_1^2x\\,dx=\\int_1^2t\\,dt\\)"],
        ans: "\\(\\int_1^2x\\,dx=\\int_1^2t\\,dt\\)",
        reason: "The variable of integration is a dummy variable; both integrals compute the same value."
      },
      {
        q: "Area under the graph of \\(f(x)=4\\) on \\([2,5]\\) is:",
        options: ["2", "4", "5", "12"],
        ans: "12",
        reason: "The region is a rectangle of height 4 and width \\(5-2=3\\), giving area 12."
      },
      {
        q: "\\(\\displaystyle\\int\\sqrt{x}\\,dx\\) is:",
        options: ["\\(x^{3/2}+c\\)", "\\(\\dfrac23x^{3/2}+c\\)", "\\(\\dfrac32x^{3/2}+c\\)", "\\(x^{1/2}+c\\)"],
        ans: "\\(\\dfrac23x^{3/2}+c\\)",
        reason: "Writing \\(\\sqrt x=x^{1/2}\\) and applying the power rule of integration gives \\(\\dfrac{x^{3/2}}{3/2}=\\dfrac23x^{3/2}+c\\)."
      },
      {
        q: "A function \\(F(x)\\) is called an anti-derivative of \\(f(x)\\) if:",
        options: ["\\(F(x)=f(x)\\)", "\\(F'(x)=f(x)\\)", "\\(f'(x)=F(x)\\)", "\\(F(x)\\cdot f(x)=1\\)"],
        ans: "\\(F'(x)=f(x)\\)",
        reason: "By definition, F is an antiderivative of f if \\(F'(x)=f(x)\\)."
      },
      {
        q: "If \\(F(x)\\) is an anti-derivative of \\(f(x)\\), then the general anti-derivative is:",
        options: ["\\(F(x)\\)", "\\(F(x)+c\\), for arbitrary constant \\(c\\)", "\\(F(x)\\cdot c\\)", "\\(\\dfrac{F(x)}c\\)"],
        ans: "\\(F(x)+c\\), for arbitrary constant \\(c\\)",
        reason: "Any two antiderivatives of the same function differ only by a constant, giving the general form \\(F(x)+c\\)."
      },
      {
        q: "The symbol \\(\\int\\) is called the:",
        options: ["derivative sign", "integral sign", "limit sign", "summation sign"],
        ans: "integral sign",
        reason: "The elongated S symbol \\(\\int\\) is called the integral sign."
      },
      {
        q: "In \\(\\displaystyle\\int f(x)\\,dx\\), the term \\(f(x)\\) is called the:",
        options: ["integrand", "integral", "differential", "constant of integration"],
        ans: "integrand",
        reason: "The function being integrated is called the integrand."
      },
      {
        q: "By the power rule of integration, \\(\\displaystyle\\int x^n\\,dx\\ (n\\ne-1)\\) equals:",
        options: ["\\(nx^{n-1}+c\\)", "\\(\\dfrac{x^{n+1}}{n+1}+c\\)", "\\(\\dfrac{x^{n-1}}{n-1}+c\\)", "\\(x^{n+1}+c\\)"],
        ans: "\\(\\dfrac{x^{n+1}}{n+1}+c\\)",
        reason: "The power rule of integration states \\(\\int x^n\\,dx=\\dfrac{x^{n+1}}{n+1}+c\\) for \\(n\\ne-1\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac1x\\,dx\\) equals:",
        options: ["\\(\\ln|x|+c\\)", "\\(\\dfrac1{x^2}+c\\)", "\\(x\\ln x+c\\)", "\\(-\\dfrac1{x^2}+c\\)"],
        ans: "\\(\\ln|x|+c\\)",
        reason: "Since the power rule fails at \\(n=-1\\), the special result \\(\\int\\frac1x\\,dx=\\ln|x|+c\\) applies instead."
      },
      {
        q: "\\(\\displaystyle\\int e^x\\,dx\\) equals:",
        options: ["\\(e^x+c\\)", "\\(xe^{x-1}+c\\)", "\\(\\dfrac{e^x}x+c\\)", "\\(e^{x+1}+c\\)"],
        ans: "\\(e^x+c\\)",
        reason: "The exponential function is its own antiderivative."
      },
      {
        q: "\\(\\displaystyle\\int a^x\\,dx\\ (a>0,\\ a\\ne1)\\) equals:",
        options: ["\\(a^x+c\\)", "\\(\\dfrac{a^x}{\\ln a}+c\\)", "\\(a^x\\ln a+c\\)", "\\(\\dfrac{a^{x+1}}{x+1}+c\\)"],
        ans: "\\(\\dfrac{a^x}{\\ln a}+c\\)",
        reason: "Since \\(\\frac{d}{dx}(a^x)=a^x\\ln a\\), dividing by \\(\\ln a\\) gives \\(\\int a^x\\,dx=\\dfrac{a^x}{\\ln a}+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int cf(x)\\,dx\\) equals (where \\(c\\) is a constant):",
        options: ["\\(c\\displaystyle\\int f(x)\\,dx\\)", "\\(\\displaystyle\\int f(x)\\,dx\\)", "\\(c+\\displaystyle\\int f(x)\\,dx\\)", "\\(\\dfrac1c\\displaystyle\\int f(x)\\,dx\\)"],
        ans: "\\(c\\displaystyle\\int f(x)\\,dx\\)",
        reason: "Constants factor out of an integral: \\(\\int cf(x)\\,dx=c\\int f(x)\\,dx\\)."
      },
      {
        q: "\\(\\displaystyle\\int[f(x)+g(x)]\\,dx\\) equals:",
        options: ["\\(\\int f(x)\\,dx-\\int g(x)\\,dx\\)", "\\(\\int f(x)\\,dx\\cdot\\int g(x)\\,dx\\)", "\\(\\int f(x)\\,dx+\\int g(x)\\,dx\\)", "\\(\\int[f(x)g(x)]\\,dx\\)"],
        ans: "\\(\\int f(x)\\,dx+\\int g(x)\\,dx\\)",
        reason: "The integral of a sum is the sum of the integrals."
      },
      {
        q: "\\(\\displaystyle\\int7\\,dx\\) equals:",
        options: ["0", "7", "\\(7x+c\\)", "\\(\\dfrac{7x^2}2+c\\)"],
        ans: "\\(7x+c\\)",
        reason: "Integrating a constant with respect to x gives that constant times x, plus c."
      },
      {
        q: "\\(\\displaystyle\\int x^5\\,dx\\) equals:",
        options: ["\\(5x^4+c\\)", "\\(\\dfrac{x^6}6+c\\)", "\\(x^6+c\\)", "\\(\\dfrac{x^4}4+c\\)"],
        ans: "\\(\\dfrac{x^6}6+c\\)",
        reason: "By the power rule, \\(\\int x^5dx=\\dfrac{x^6}6+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{f'(x)}{f(x)}\\,dx\\) equals:",
        options: ["\\([f(x)]^2+c\\)", "\\(\\ln|f(x)|+c\\)", "\\(f(x)+c\\)", "\\(\\dfrac1{f(x)}+c\\)"],
        ans: "\\(\\ln|f(x)|+c\\)",
        reason: "This is the logarithmic differentiation pattern in reverse: \\(\\int\\frac{f'(x)}{f(x)}dx=\\ln|f(x)|+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int e^{f(x)}f'(x)\\,dx\\) equals:",
        options: ["\\(e^{f(x)}+c\\)", "\\(f(x)e^{f(x)}+c\\)", "\\(e^{f(x)}f(x)+c\\)", "\\(\\ln[f(x)]+c\\)"],
        ans: "\\(e^{f(x)}+c\\)",
        reason: "By the chain rule in reverse (substitution with \\(u=f(x)\\)), this integrates to \\(e^{f(x)}+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\cos x\\,dx\\) equals:",
        options: ["\\(\\sin x+c\\)", "\\(-\\sin x+c\\)", "\\(-\\cos x+c\\)", "\\(\\tan x+c\\)"],
        ans: "\\(\\sin x+c\\)",
        reason: "This is the standard antiderivative \\(\\int\\cos x\\,dx=\\sin x+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\sin x\\,dx\\) equals:",
        options: ["\\(\\cos x+c\\)", "\\(-\\cos x+c\\)", "\\(-\\sin x+c\\)", "\\(\\sec x+c\\)"],
        ans: "\\(-\\cos x+c\\)",
        reason: "This is the standard antiderivative \\(\\int\\sin x\\,dx=-\\cos x+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\sec^2x\\,dx\\) equals:",
        options: ["\\(\\sec x\\tan x+c\\)", "\\(\\tan x+c\\)", "\\(-\\cot x+c\\)", "\\(\\sec x+c\\)"],
        ans: "\\(\\tan x+c\\)",
        reason: "Since \\(\\frac{d}{dx}\\tan x=\\sec^2x\\), the reverse gives \\(\\int\\sec^2x\\,dx=\\tan x+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\csc^2x\\,dx\\) equals:",
        options: ["\\(-\\cot x+c\\)", "\\(\\cot x+c\\)", "\\(-\\csc x+c\\)", "\\(\\csc x\\cot x+c\\)"],
        ans: "\\(-\\cot x+c\\)",
        reason: "Since \\(\\frac{d}{dx}\\cot x=-\\csc^2x\\), the reverse gives \\(\\int\\csc^2x\\,dx=-\\cot x+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\sec x\\tan x\\,dx\\) equals:",
        options: ["\\(\\sec x+c\\)", "\\(\\tan x+c\\)", "\\(-\\sec x+c\\)", "\\(\\sec^2x+c\\)"],
        ans: "\\(\\sec x+c\\)",
        reason: "Since \\(\\frac{d}{dx}\\sec x=\\sec x\\tan x\\), the reverse gives \\(\\int\\sec x\\tan x\\,dx=\\sec x+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\csc x\\cot x\\,dx\\) equals:",
        options: ["\\(\\csc x+c\\)", "\\(-\\csc x+c\\)", "\\(\\cot x+c\\)", "\\(-\\cot x+c\\)"],
        ans: "\\(-\\csc x+c\\)",
        reason: "Since \\(\\frac{d}{dx}\\csc x=-\\csc x\\cot x\\), the reverse gives \\(\\int\\csc x\\cot x\\,dx=-\\csc x+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\tan x\\,dx\\) equals:",
        options: ["\\(\\ln|\\sec x|+c\\)", "\\(\\ln|\\sin x|+c\\)", "\\(-\\ln|\\sin x|+c\\)", "\\(\\sec x+c\\)"],
        ans: "\\(\\ln|\\sec x|+c\\)",
        reason: "Writing \\(\\tan x=\\frac{\\sin x}{\\cos x}\\) and substituting \\(u=\\cos x\\) gives \\(-\\ln|\\cos x|+c=\\ln|\\sec x|+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\cot x\\,dx\\) equals:",
        options: ["\\(\\ln|\\sec x|+c\\)", "\\(\\ln|\\sin x|+c\\)", "\\(-\\ln|\\cos x|+c\\)", "\\(\\csc x+c\\)"],
        ans: "\\(\\ln|\\sin x|+c\\)",
        reason: "Writing \\(\\cot x=\\frac{\\cos x}{\\sin x}\\) and substituting \\(u=\\sin x\\) gives \\(\\ln|\\sin x|+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\sec x\\,dx\\) equals:",
        options: ["\\(\\ln|\\sec x+\\tan x|+c\\)", "\\(\\ln|\\sec x-\\tan x|+c\\)", "\\(\\sec x\\tan x+c\\)", "\\(\\tan x+c\\)"],
        ans: "\\(\\ln|\\sec x+\\tan x|+c\\)",
        reason: "This is the standard (memorized) result for the integral of secant."
      },
      {
        q: "\\(\\displaystyle\\int\\csc x\\,dx\\) equals:",
        options: ["\\(\\ln|\\csc x+\\cot x|+c\\)", "\\(\\ln|\\csc x-\\cot x|+c\\)", "\\(-\\csc x\\cot x+c\\)", "\\(\\cot x+c\\)"],
        ans: "\\(\\ln|\\csc x-\\cot x|+c\\)",
        reason: "This is the standard (memorized) result for the integral of cosecant."
      },
      {
        q: "To integrate \\(\\sin^2x\\), we use the identity:",
        options: ["\\(\\sin^2x=\\dfrac{1-\\cos2x}2\\)", "\\(\\sin^2x=\\dfrac{1+\\cos2x}2\\)", "\\(\\sin^2x=1-\\cos^2x\\) directly integrated", "\\(\\sin^2x=2\\sin x\\cos x\\)"],
        ans: "\\(\\sin^2x=\\dfrac{1-\\cos2x}2\\)",
        reason: "The half-angle identity converts \\(\\sin^2x\\) into a form that can be integrated directly term by term."
      },
      {
        q: "\\(\\displaystyle\\int\\cos kx\\,dx\\ (k\\ne0)\\) equals:",
        options: ["\\(\\dfrac{\\sin kx}k+c\\)", "\\(k\\sin kx+c\\)", "\\(-\\dfrac{\\sin kx}k+c\\)", "\\(\\sin kx+c\\)"],
        ans: "\\(\\dfrac{\\sin kx}k+c\\)",
        reason: "By substitution \\(u=kx\\), \\(\\int\\cos(kx)dx=\\dfrac{\\sin kx}{k}+c\\)."
      },
      {
        q: "The method of integration by substitution is most useful when the integrand contains:",
        options: ["a function and its derivative together", "only constants", "only trigonometric functions", "only polynomials"],
        ans: "a function and its derivative together",
        reason: "Substitution works best when one part of the integrand is the derivative of another part, allowing a clean change of variable."
      },
      {
        q: "If \\(x=a\\sin\\theta\\) is substituted, then \\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{a^2-x^2}}\\) equals:",
        options: ["\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\cos^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)"],
        ans: "\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)",
        reason: "This trig substitution is specifically designed to produce the standard result \\(\\sin^{-1}(x/a)+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{dx}{a^2+x^2}\\) equals:",
        options: ["\\(\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)"],
        ans: "\\(\\dfrac1a\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)",
        reason: "This is the standard result \\(\\int\\frac{dx}{a^2+x^2}=\\frac1a\\tan^{-1}\\left(\\frac{x}a\\right)+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{x^2-a^2}}\\) equals:",
        options: ["\\(\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+c\\)"],
        ans: "\\(\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+c\\)",
        reason: "This is the standard result for this integral form, arising from a hyperbolic-type substitution."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{x^2+a^2}}\\) equals:",
        options: ["\\(\\ln\\left|x+\\sqrt{x^2-a^2}\\right|+c\\)", "\\(\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}a\\right)+c\\)", "\\(\\dfrac1a\\tan^{-1}\\left(\\dfrac{x}a\\right)+c\\)"],
        ans: "\\(\\ln\\left|x+\\sqrt{x^2+a^2}\\right|+c\\)",
        reason: "This is the standard result for this integral form, analogous to but distinct from the \\(x^2-a^2\\) case."
      },
      {
        q: "To evaluate \\(\\displaystyle\\int2x\\cos(x^2)\\,dx\\), the most suitable substitution is:",
        options: ["\\(u=2x\\)", "\\(u=x^2\\)", "\\(u=\\cos x\\)", "\\(u=\\sin x\\)"],
        ans: "\\(u=x^2\\)",
        reason: "Since \\(du=2x\\,dx\\) exactly matches the remaining factor, \\(u=x^2\\) is the natural substitution."
      },
      {
        q: "If \\(u=g(x)\\) and \\(du=g'(x)\\,dx\\), then \\(\\displaystyle\\int f(g(x))g'(x)\\,dx\\) equals:",
        options: ["\\(\\displaystyle\\int f(u)\\,du\\)", "\\(f(u)\\)", "\\(\\displaystyle\\int f(x)\\,dx\\)", "\\(f'(u)\\)"],
        ans: "\\(\\displaystyle\\int f(u)\\,du\\)",
        reason: "This is precisely the statement of the substitution (change of variable) rule."
      },
      {
        q: "\\(\\displaystyle\\int3x^2\\cos(x^3)\\,dx\\) equals:",
        options: ["\\(\\sin(x^3)+c\\)", "\\(3\\sin(x^3)+c\\)", "\\(-\\sin(x^3)+c\\)", "\\(\\cos(x^3)+c\\)"],
        ans: "\\(\\sin(x^3)+c\\)",
        reason: "With \\(u=x^3\\), \\(du=3x^2dx\\), so the integral becomes \\(\\int\\cos u\\,du=\\sin u+c=\\sin(x^3)+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{2x+3}{x^2+3x+2}\\,dx\\) equals:",
        options: ["\\(\\ln|x^2+3x+2|+c\\)", "\\((x^2+3x+2)+c\\)", "\\(2\\ln|x^2+3x+2|+c\\)", "\\(\\dfrac12\\ln|x^2+3x+2|+c\\)"],
        ans: "\\(\\ln|x^2+3x+2|+c\\)",
        reason: "The numerator \\(2x+3\\) is exactly the derivative of the denominator, so the integral is \\(\\ln|x^2+3x+2|+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{e^{\\tan^{-1}x}}{1+x^2}\\,dx\\) equals:",
        options: ["\\(e^{\\tan^{-1}x}+c\\)", "\\(\\tan^{-1}x\\cdot e^x+c\\)", "\\(e^x+c\\)", "\\(\\ln(1+x^2)+c\\)"],
        ans: "\\(e^{\\tan^{-1}x}+c\\)",
        reason: "With \\(u=\\tan^{-1}x\\), \\(du=\\frac{dx}{1+x^2}\\), giving \\(\\int e^u\\,du=e^u+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{dx}{9+x^2}\\) equals:",
        options: ["\\(\\tan^{-1}\\left(\\dfrac{x}3\\right)+c\\)", "\\(\\dfrac13\\tan^{-1}\\left(\\dfrac{x}3\\right)+c\\)", "\\(\\sin^{-1}\\left(\\dfrac{x}3\\right)+c\\)", "\\(3\\tan^{-1}\\left(\\dfrac{x}3\\right)+c\\)"],
        ans: "\\(\\dfrac13\\tan^{-1}\\left(\\dfrac{x}3\\right)+c\\)",
        reason: "Using \\(\\int\\frac{dx}{a^2+x^2}=\\frac1a\\tan^{-1}(x/a)+c\\) with \\(a=3\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac{dx}{\\sqrt{4-x^2}}\\) equals:",
        options: ["\\(\\sin^{-1}\\left(\\dfrac{x}2\\right)+c\\)", "\\(\\dfrac12\\sin^{-1}\\left(\\dfrac{x}2\\right)+c\\)", "\\(\\tan^{-1}\\left(\\dfrac{x}2\\right)+c\\)", "\\(\\cos^{-1}\\left(\\dfrac{x}2\\right)+c\\)"],
        ans: "\\(\\sin^{-1}\\left(\\dfrac{x}2\\right)+c\\)",
        reason: "Using \\(\\int\\frac{dx}{\\sqrt{a^2-x^2}}=\\sin^{-1}(x/a)+c\\) with \\(a=2\\)."
      },
      {
        q: "The choice of substitution in an integral depends on:",
        options: ["the constant of integration", "the form of the given integral", "the sign of \\(x\\) only", "nothing; substitution is always \\(u=x\\)"],
        ans: "the form of the given integral",
        reason: "The right substitution is dictated entirely by the structure of the given integrand."
      },
      {
        q: "\\(\\displaystyle\\int x\\sqrt{x^2+4}\\,dx\\) can be solved by the substitution:",
        options: ["\\(u=x\\)", "\\(u=x^2+4\\)", "\\(u=\\sqrt{x}\\)", "\\(u=4\\)"],
        ans: "\\(u=x^2+4\\)",
        reason: "Since \\(du=2x\\,dx\\) matches the x factor present, \\(u=x^2+4\\) is the natural choice."
      },
      {
        q: "The formula for integration by parts is:",
        options: ["\\(\\int fg\\,dx=f\\int g\\,dx-\\int\\left[f'\\int g\\,dx\\right]dx\\)", "\\(\\int fg\\,dx=f'g'\\)", "\\(\\int fg\\,dx=\\int f\\,dx\\cdot\\int g\\,dx\\)", "\\(\\int fg\\,dx=fg-\\int fg\\,dx\\)"],
        ans: "\\(\\int fg\\,dx=f\\int g\\,dx-\\int\\left[f'\\int g\\,dx\\right]dx\\)",
        reason: "This is the standard integration by parts formula, derived from the product rule in reverse."
      },
      {
        q: "In integration by parts, the function chosen as the “first function” should generally be the one whose:",
        options: ["integral is hardest to find", "derivative simplifies the expression", "value is always 1", "degree is highest and cannot be reduced"],
        ans: "derivative simplifies the expression",
        reason: "Choosing the function whose derivative simplifies keeps the resulting integral more manageable, per the LIATE guideline."
      },
      {
        q: "For \\(\\displaystyle\\int xe^x\\,dx\\), the most suitable choice of first function is:",
        options: ["\\(e^x\\)", "\\(x\\)", "either works equally well by convention", "\\(xe^x\\)"],
        ans: "\\(x\\)",
        reason: "Choosing \\(x\\) as the first function makes its derivative (1) simplify the remaining integral, per the LIATE rule."
      },
      {
        q: "For \\(\\displaystyle\\int\\ln x\\,dx\\) (writing it as \\(\\int(\\ln x)(1)\\,dx\\)), the first function should be taken as:",
        options: ["1", "\\(\\ln x\\)", "neither", "\\(x\\)"],
        ans: "\\(\\ln x\\)",
        reason: "Since 1 can't be reduced further, \\(\\ln x\\) is taken as the first function (differentiated), following LIATE."
      },
      {
        q: "\\(\\displaystyle\\int xe^x\\,dx\\) equals:",
        options: ["\\(xe^x-e^x+c\\)", "\\(xe^x+e^x+c\\)", "\\(e^x+c\\)", "\\(x^2e^x+c\\)"],
        ans: "\\(xe^x-e^x+c\\)",
        reason: "Integration by parts with \\(u=x, dv=e^xdx\\) gives \\(xe^x-\\int e^xdx=xe^x-e^x+c\\)."
      },
      {
        q: "If the integrand is a product of an inverse trigonometric function and a polynomial, the inverse trig function is usually chosen as the:",
        options: ["first function", "second function", "neither function", "only function to integrate"],
        ans: "first function",
        reason: "By the LIATE priority, inverse trigonometric functions are differentiated first, i.e. taken as the first function."
      },
      {
        q: "\\(\\displaystyle\\int x\\cos x\\,dx\\) equals:",
        options: ["\\(x\\sin x+\\cos x+c\\)", "\\(x\\sin x-\\cos x+c\\)", "\\(-x\\sin x+\\cos x+c\\)", "\\(x\\cos x+\\sin x+c\\)"],
        ans: "\\(x\\sin x+\\cos x+c\\)",
        reason: "With \\(u=x, dv=\\cos x\\,dx\\): \\(x\\sin x-\\int\\sin x\\,dx=x\\sin x+\\cos x+c\\)."
      },
      {
        q: "Integration by parts is generally not suitable for evaluating:",
        options: ["\\(\\displaystyle\\int xe^x\\,dx\\)", "\\(\\displaystyle\\int x\\ln x\\,dx\\)", "\\(\\displaystyle\\int\\sqrt{x}\\sin x\\,dx\\)", "\\(\\displaystyle\\int x\\sin x\\,dx\\)"],
        ans: "\\(\\displaystyle\\int\\sqrt{x}\\sin x\\,dx\\)",
        reason: "Neither factor simplifies under repeated differentiation or integration, so integration by parts does not resolve this integral in elementary form."
      },
      {
        q: "When applying integration by parts, we do not add an arbitrary constant while finding the integral of the:",
        options: ["first function", "second function", "both functions", "final answer"],
        ans: "second function",
        reason: "Since only one overall constant is needed in the final answer, the intermediate integral of the second function is taken without its own \\(+c\\)."
      },
      {
        q: "\\(\\displaystyle\\int\\ln x\\,dx\\) equals:",
        options: ["\\(x\\ln x-x+c\\)", "\\(x\\ln x+x+c\\)", "\\(\\ln x+c\\)", "\\(\\dfrac{(\\ln x)^2}2+c\\)"],
        ans: "\\(x\\ln x-x+c\\)",
        reason: "With \\(u=\\ln x, dv=dx\\): \\(x\\ln x-\\int x\\cdot\\frac1x\\,dx=x\\ln x-x+c\\)."
      },
      {
        q: "To evaluate \\(\\displaystyle\\int e^{ax}\\sin(bx)\\,dx\\), integration by parts must be applied:",
        options: ["once only", "twice, leading to an equation solvable for the integral", "three times", "it cannot be evaluated"],
        ans: "twice, leading to an equation solvable for the integral",
        reason: "Applying integration by parts twice returns a multiple of the original integral, giving an equation that can be solved for it."
      },
      {
        q: "\\(\\displaystyle\\int x\\tan^{-1}x\\,dx\\) requires taking the first function as:",
        options: ["\\(x\\)", "\\(\\tan^{-1}x\\)", "neither, since the integral does not exist", "1"],
        ans: "\\(\\tan^{-1}x\\)",
        reason: "Following LIATE, the inverse trig function \\(\\tan^{-1}x\\) is differentiated first, i.e. taken as the first function."
      },
      {
        q: "The method of partial fractions is used to integrate:",
        options: ["trigonometric functions only", "a rational function \\(\\dfrac{P(x)}{Q(x)}\\)", "exponential functions only", "polynomials only"],
        ans: "a rational function \\(\\dfrac{P(x)}{Q(x)}\\)",
        reason: "Partial fraction decomposition is a technique specifically for integrating rational functions."
      },
      {
        q: "Partial fractions apply directly when the degree of the numerator is:",
        options: ["greater than the degree of the denominator", "less than the degree of the denominator", "equal to zero always", "undefined"],
        ans: "less than the degree of the denominator",
        reason: "The decomposition into simple fractions is valid directly only for a proper rational function (numerator degree less than denominator's)."
      },
      {
        q: "If the degree of the numerator is greater than or equal to that of the denominator, we must first:",
        options: ["multiply both by \\(x\\)", "perform polynomial long division", "differentiate the expression", "ignore the numerator"],
        ans: "perform polynomial long division",
        reason: "An improper rational function must first be reduced via polynomial long division before partial fractions can be applied to the remainder."
      },
      {
        q: "For \\(\\dfrac{5x+6}{(x+1)(x+2)}\\), the partial fraction decomposition has the form:",
        options: ["\\(\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\)", "\\(\\dfrac{Ax+B}{(x+1)(x+2)}\\)", "\\(A(x+1)+B(x+2)\\)", "\\(\\dfrac{A}{(x+1)(x+2)}\\)"],
        ans: "\\(\\dfrac{A}{x+1}+\\dfrac{B}{x+2}\\)",
        reason: "For distinct linear factors, the decomposition is a sum of simple fractions, one per factor: \\(\\frac{A}{x+1}+\\frac{B}{x+2}\\)."
      },
      {
        q: "For a repeated linear factor \\((x+1)^3\\) in the denominator, the partial fraction decomposition includes terms:",
        options: ["\\(\\dfrac{A}{x+1}\\) only", "\\(\\dfrac{A}{x+1}+\\dfrac{B}{(x+1)^2}+\\dfrac{C}{(x+1)^3}\\)", "\\(\\dfrac{A}{(x+1)^3}\\) only", "\\(A(x+1)^3\\)"],
        ans: "\\(\\dfrac{A}{x+1}+\\dfrac{B}{(x+1)^2}+\\dfrac{C}{(x+1)^3}\\)",
        reason: "A repeated linear factor of multiplicity 3 requires one term for each power up to 3."
      },
      {
        q: "For an irreducible quadratic factor \\((x^2+1)\\) in the denominator, the numerator of its partial fraction is of the form:",
        options: ["\\(A\\)", "\\(Ax+B\\)", "\\(Ax^2\\)", "\\(A/x\\)"],
        ans: "\\(Ax+B\\)",
        reason: "An irreducible quadratic factor needs a linear numerator \\(Ax+B\\), since a constant alone isn't general enough."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac1{(x+2)(x+3)}\\,dx\\) equals:",
        options: ["\\(\\ln|x+2|-\\ln|x+3|+c\\)", "\\(\\ln|x+2|+\\ln|x+3|+c\\)", "\\(\\ln|(x+2)(x+3)|+c\\)", "\\(\\dfrac1{(x+2)(x+3)}+c\\)"],
        ans: "\\(\\ln|x+2|-\\ln|x+3|+c\\)",
        reason: "Decomposing into \\(\\frac1{x+2}-\\frac1{x+3}\\) and integrating each term gives \\(\\ln|x+2|-\\ln|x+3|+c\\)."
      },
      {
        q: "The constants in a partial fraction decomposition are typically found by:",
        options: ["differentiating both sides", "equating coefficients or substituting suitable values of \\(x\\)", "integrating both sides", "guessing randomly"],
        ans: "equating coefficients or substituting suitable values of \\(x\\)",
        reason: "The unknown constants are solved for either by equating coefficients of like powers or by plugging in convenient x-values."
      },
      {
        q: "\\(\\displaystyle\\int\\dfrac1{x^2-9}\\,dx\\) can be evaluated using partial fractions since \\(x^2-9\\) factors as:",
        options: ["\\((x-3)(x+3)\\)", "\\((x-9)(x+1)\\)", "it does not factor", "\\((x-3)^2\\)"],
        ans: "\\((x-3)(x+3)\\)",
        reason: "This is a difference of squares: \\(x^2-9=(x-3)(x+3)\\)."
      },
      {
        q: "For \\(\\dfrac{x^2+2x+4}{(x+1)^3}\\), the number of unknown constants required in the partial fraction decomposition is:",
        options: ["1", "2", "3", "4"],
        ans: "3",
        reason: "A repeated linear factor raised to the third power requires three separate constants, one for each power."
      },
      {
        q: "A definite integral \\(\\displaystyle\\int_a^bf(x)\\,dx\\) represents:",
        options: ["a family of functions", "a specific number (the net signed area)", "a derivative", "an undefined quantity"],
        ans: "a specific number (the net signed area)",
        reason: "Unlike an indefinite integral (a family of functions), a definite integral evaluates to a single number representing net signed area."
      },
      {
        q: "In \\(\\displaystyle\\int_a^bf(x)\\,dx\\), the number \\(a\\) is called the:",
        options: ["integrand", "lower limit of integration", "upper limit of integration", "constant of integration"],
        ans: "lower limit of integration",
        reason: "In \\(\\int_a^b\\), a is by definition the lower limit of integration."
      },
      {
        q: "\\(\\displaystyle\\int_a^af(x)\\,dx\\) equals:",
        options: ["1", "\\(f(a)\\)", "0", "undefined"],
        ans: "0",
        reason: "An integral over an interval of zero width has no area, so it equals 0."
      },
      {
        q: "\\(\\displaystyle\\int_b^af(x)\\,dx\\) equals:",
        options: ["\\(\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(-\\displaystyle\\int_a^bf(x)\\,dx\\)", "0", "\\(f(a)-f(b)\\)"],
        ans: "\\(-\\displaystyle\\int_a^bf(x)\\,dx\\)",
        reason: "Reversing the limits of integration negates the value of the definite integral."
      },
      {
        q: "If \\(c\\) lies between \\(a\\) and \\(b\\), then \\(\\displaystyle\\int_a^bf(x)\\,dx\\) equals:",
        options: ["\\(\\int_a^cf(x)\\,dx-\\int_c^bf(x)\\,dx\\)", "\\(\\int_a^cf(x)\\,dx+\\int_c^bf(x)\\,dx\\)", "\\(\\int_a^cf(x)\\,dx\\cdot\\int_c^bf(x)\\,dx\\)", "\\(f(c)\\)"],
        ans: "\\(\\int_a^cf(x)\\,dx+\\int_c^bf(x)\\,dx\\)",
        reason: "The additivity property of definite integrals lets the interval be split into adjacent pieces whose integrals add up."
      },
      {
        q: "By the Fundamental Theorem of Calculus, if \\(F'(x)=f(x)\\), then \\(\\displaystyle\\int_a^bf(x)\\,dx\\) equals:",
        options: ["\\(F(a)-F(b)\\)", "\\(F(b)-F(a)\\)", "\\(F(a)+F(b)\\)", "\\(F(b)\\cdot F(a)\\)"],
        ans: "\\(F(b)-F(a)\\)",
        reason: "This is the Fundamental Theorem of Calculus: evaluate the antiderivative at the limits and subtract."
      },
      {
        q: "\\(\\displaystyle\\int_1^3x\\,dx\\) equals:",
        options: ["2", "4", "8", "9"],
        ans: "4",
        reason: "\\(\\left[\\frac{x^2}2\\right]_1^3=\\frac92-\\frac12=4\\)."
      },
      {
        q: "\\(\\displaystyle\\int_0^2(3x^2)\\,dx\\) equals:",
        options: ["4", "6", "8", "12"],
        ans: "8",
        reason: "\\(\\left[x^3\\right]_0^2=8-0=8\\)."
      },
      {
        q: "If \\(\\displaystyle\\int_1^4f(x)\\,dx=6\\) and \\(\\displaystyle\\int_1^2f(x)\\,dx=2\\), then \\(\\displaystyle\\int_2^4f(x)\\,dx\\) equals:",
        options: ["2", "4", "6", "8"],
        ans: "4",
        reason: "By additivity, \\(\\int_2^4f=\\int_1^4f-\\int_1^2f=6-2=4\\)."
      },
      {
        q: "\\(\\displaystyle\\int_a^bcf(x)\\,dx\\), where \\(c\\) is constant, equals:",
        options: ["\\(c\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(c+\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(\\dfrac1c\\displaystyle\\int_a^bf(x)\\,dx\\)"],
        ans: "\\(c\\displaystyle\\int_a^bf(x)\\,dx\\)",
        reason: "Just as for indefinite integrals, a constant factors out of a definite integral."
      },
      {
        q: "\\(\\dfrac{d}{dx}\\displaystyle\\int_a^xf(t)\\,dt\\) equals:",
        options: ["\\(f(a)\\)", "\\(f(x)\\)", "0", "\\(F(x)\\)"],
        ans: "\\(f(x)\\)",
        reason: "By the Fundamental Theorem of Calculus (Part 1), differentiating an integral with variable upper limit returns the integrand at that point."
      },
      {
        q: "\\(\\displaystyle\\int_{-1}^1x^3\\,dx\\) equals:",
        options: ["0", "1", "2", "\\(-1\\)"],
        ans: "0",
        reason: "\\(x^3\\) is an odd function, so its integral over a symmetric interval about 0 cancels to 0."
      },
      {
        q: "If \\(f\\) is an even function, \\(\\displaystyle\\int_{-a}^af(x)\\,dx\\) equals:",
        options: ["0", "\\(2\\displaystyle\\int_0^af(x)\\,dx\\)", "\\(\\displaystyle\\int_0^af(x)\\,dx\\)", "\\(af(a)\\)"],
        ans: "\\(2\\displaystyle\\int_0^af(x)\\,dx\\)",
        reason: "For an even function, the two symmetric halves of the interval contribute equally, doubling the one-sided integral."
      },
      {
        q: "If \\(f\\) is an odd function, \\(\\displaystyle\\int_{-a}^af(x)\\,dx\\) equals:",
        options: ["0", "\\(2\\displaystyle\\int_0^af(x)\\,dx\\)", "\\(f(a)\\)", "\\(2f(a)\\)"],
        ans: "0",
        reason: "For an odd function, the contributions from the negative and positive halves of the interval exactly cancel."
      },
      {
        q: "The area bounded by \\(y=f(x)\\ge0\\), the x-axis, and the lines \\(x=a\\), \\(x=b\\) is:",
        options: ["\\(\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(f(b)-f(a)\\)", "\\(\\displaystyle\\int_a^bf'(x)\\,dx\\)", "\\(f(a)\\cdot f(b)\\)"],
        ans: "\\(\\displaystyle\\int_a^bf(x)\\,dx\\)",
        reason: "This is the direct geometric interpretation of the definite integral as area under a non-negative curve."
      },
      {
        q: "The area between two curves \\(y=f(x)\\) and \\(y=g(x)\\), where \\(f(x)>g(x)\\) on \\([a,b]\\), is:",
        options: ["\\(\\displaystyle\\int_a^b[f(x)+g(x)]\\,dx\\)", "\\(\\displaystyle\\int_a^b[f(x)-g(x)]\\,dx\\)", "\\(\\displaystyle\\int_a^bf(x)\\,dx\\cdot\\int_a^bg(x)\\,dx\\)", "\\(f(b)-g(a)\\)"],
        ans: "\\(\\displaystyle\\int_a^b[f(x)-g(x)]\\,dx\\)",
        reason: "The area between two curves is found by integrating the difference of the upper and lower functions."
      },
      {
        q: "The area of the region bounded by \\(y=x^2\\), the x-axis, and the lines \\(x=0\\), \\(x=2\\) is:",
        options: ["\\(\\dfrac43\\)", "\\(\\dfrac83\\)", "4", "8"],
        ans: "\\(\\dfrac83\\)",
        reason: "\\(\\int_0^2x^2dx=\\left[\\frac{x^3}3\\right]_0^2=\\frac83\\)."
      },
      {
        q: "By the disc method, the volume of the solid formed by revolving \\(y=f(x)\\) about the x-axis on \\([a,b]\\) is:",
        options: ["\\(\\pi\\displaystyle\\int_a^bf(x)\\,dx\\)", "\\(\\pi\\displaystyle\\int_a^b[f(x)]^2\\,dx\\)", "\\(\\displaystyle\\int_a^b[f(x)]^2\\,dx\\)", "\\(2\\pi\\displaystyle\\int_a^bf(x)\\,dx\\)"],
        ans: "\\(\\pi\\displaystyle\\int_a^b[f(x)]^2\\,dx\\)",
        reason: "Each cross-section perpendicular to the axis is a disc of radius \\(f(x)\\), with area \\(\\pi[f(x)]^2\\), integrated along the axis."
      },
      {
        q: "When a region is revolved about the y-axis and \\(x=g(y)\\), the volume by the disc method is given by:",
        options: ["\\(\\pi\\displaystyle\\int_a^b[g(y)]^2\\,dy\\)", "\\(\\pi\\displaystyle\\int_a^bg(y)\\,dy\\)", "\\(\\displaystyle\\int_a^b[g(y)]^2\\,dy\\)", "\\(2\\pi\\displaystyle\\int_a^bg(y)\\,dy\\)"],
        ans: "\\(\\pi\\displaystyle\\int_a^b[g(y)]^2\\,dy\\)",
        reason: "By symmetry with the x-axis case, discs are now stacked along y with radius \\(g(y)\\)."
      },
      {
        q: "The volume of the solid formed by revolving \\(y=x\\) about the x-axis for \\(x\\in[0,2]\\) is:",
        options: ["\\(\\dfrac{8\\pi}3\\)", "\\(\\dfrac{4\\pi}3\\)", "\\(8\\pi\\)", "\\(4\\pi\\)"],
        ans: "\\(\\dfrac{8\\pi}3\\)",
        reason: "\\(V=\\pi\\int_0^2x^2dx=\\pi\\left[\\frac{x^3}3\\right]_0^2=\\frac{8\\pi}3\\)."
      },
      {
        q: "In economics, if \\(p_0\\) is the equilibrium price and \\(Q_0\\) the equilibrium quantity for demand function \\(D(x)\\), the consumer surplus is defined as the integral:",
        options: ["\\(\\displaystyle\\int_0^{Q_0}[D(x)-p_0]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}[p_0-D(x)]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}D(x)S(x)\\,dx\\)", "\\(D(Q_0)-p_0\\)"],
        ans: "\\(\\displaystyle\\int_0^{Q_0}[D(x)-p_0]\\,dx\\)",
        reason: "Consumer surplus measures how much more buyers would have paid than the equilibrium price, integrated over quantity up to \\(Q_0\\)."
      },
      {
        q: "In economics, if \\(p_0\\) is the equilibrium price and \\(Q_0\\) the equilibrium quantity for supply function \\(S(x)\\), the producer surplus is defined as the integral:",
        options: ["\\(\\displaystyle\\int_0^{Q_0}[D(x)-S(x)]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}[p_0-S(x)]\\,dx\\)", "\\(\\displaystyle\\int_0^{Q_0}S(x)\\,dx-p_0\\)", "\\(S(p_0)-p_0\\)"],
        ans: "\\(\\displaystyle\\int_0^{Q_0}[p_0-S(x)]\\,dx\\)",
        reason: "Producer surplus measures how much more than their minimum acceptable price sellers actually receive, integrated up to \\(Q_0\\)."
      },
      {
        q: "If \\(v(t)\\) is the velocity function, the distance travelled between \\(t=a\\) and \\(t=b\\) (for \\(v(t)\\ge0\\)) is:",
        options: ["\\(\\displaystyle\\int_a^bv(t)\\,dt\\)", "\\(v(b)-v(a)\\)", "\\(\\displaystyle\\int_a^ba(t)\\,dt\\)", "\\(v(a)\\cdot v(b)\\)"],
        ans: "\\(\\displaystyle\\int_a^bv(t)\\,dt\\)",
        reason: "Distance travelled is the integral of speed (non-negative velocity) over the time interval."
      },
      {
        q: "The work done by a variable force \\(F(x)\\) in moving an object from \\(x=a\\) to \\(x=b\\) is:",
        options: ["\\(F(b)-F(a)\\)", "\\(\\displaystyle\\int_a^bF(x)\\,dx\\)", "\\(F(a)\\cdot F(b)\\)", "\\(\\dfrac{F(b)}{F(a)}\\)"],
        ans: "\\(\\displaystyle\\int_a^bF(x)\\,dx\\)",
        reason: "Work done by a variable force is the integral of force with respect to displacement."
      },
      {
        q: "By Hooke's Law, the force needed to stretch a spring \\(x\\) units beyond its natural length is:",
        options: ["\\(F(x)=kx\\)", "\\(F(x)=k/x\\)", "\\(F(x)=kx^2\\)", "\\(F(x)=k\\)"],
        ans: "\\(F(x)=kx\\)",
        reason: "Hooke's Law states the restoring force is directly proportional to displacement: \\(F(x)=kx\\)."
      },
      {
        q: "If \\(s(t)\\) is the position function, then the velocity \\(v(t)\\) can be recovered from acceleration \\(a(t)\\) using:",
        options: ["\\(v(t)=\\displaystyle\\int a(t)\\,dt\\)", "\\(v(t)=a'(t)\\)", "\\(v(t)=\\dfrac{a(t)}t\\)", "\\(v(t)=a(t)\\)"],
        ans: "\\(v(t)=\\displaystyle\\int a(t)\\,dt\\)",
        reason: "Since acceleration is the derivative of velocity, velocity is recovered by integrating acceleration."
      },
      {
        q: "The area of the region enclosed between \\(y^2=4x\\) and a vertical line is most naturally computed by integrating with respect to:",
        options: ["\\(x\\) only", "\\(y\\)", "neither variable", "\\(t\\)"],
        ans: "\\(y\\)",
        reason: "Since the parabola \\(y^2=4x\\) opens sideways, x is more naturally expressed as a function of y, making integration with respect to y simplest."
      },
      {
        q: "For finding the total revenue over time given a rate function \\(f(t)\\) (dollars/year), the total revenue over \\([0,T]\\) is:",
        options: ["\\(f(T)-f(0)\\)", "\\(\\displaystyle\\int_0^Tf(t)\\,dt\\)", "\\(f(T)\\cdot T\\)", "\\(f'(T)\\)"],
        ans: "\\(\\displaystyle\\int_0^Tf(t)\\,dt\\)",
        reason: "Total accumulated revenue is the integral of the revenue rate function over the given time period."
      },
      {
        stimulus: "<table><tr><th>Curves</th></tr><tr><td>\\(y=x^2\\) and \\(y=x+2\\)</td></tr></table>",
        q: "The points of intersection of the two curves occur at \\(x=\\):",
        options: ["\\(-1\\) and 2", "1 and \\(-2\\)", "0 and 2", "\\(-1\\) and 1"],
        ans: "\\(-1\\) and 2",
        reason: "Setting \\(x^2=x+2\\) gives \\(x^2-x-2=(x-2)(x+1)=0\\), so \\(x=-1\\) and \\(x=2\\)."
      },
      {
        stimulus: "<table><tr><th>Curves</th></tr><tr><td>\\(y=x^2\\) and \\(y=x+2\\)</td></tr></table>",
        q: "On the interval between these intersection points, the curve on top (greater \\(y\\)) is:",
        options: ["\\(y=x+2\\)", "\\(y=x^2\\)", "they are equal throughout", "neither"],
        ans: "\\(y=x+2\\)",
        reason: "Testing a point like \\(x=0\\) gives \\(x+2=2\\) versus \\(x^2=0\\), so the line \\(y=x+2\\) lies above the parabola on this interval."
      },
      {
        stimulus: "<table><tr><th>Curves</th></tr><tr><td>\\(y=x^2\\) and \\(y=x+2\\)</td></tr></table>",
        q: "The area between the curves is given by the integral:",
        options: ["\\(\\int_{-1}^{2}[(x+2)-x^2]\\,dx\\)", "\\(\\int_{-1}^{2}[x^2-(x+2)]\\,dx\\)", "\\(\\int_{-1}^{2}[x^2+(x+2)]\\,dx\\)", "\\(\\int_{0}^{2}[(x+2)-x^2]\\,dx\\)"],
        ans: "\\(\\int_{-1}^{2}[(x+2)-x^2]\\,dx\\)",
        reason: "Area between curves is the integral of (upper function − lower function): \\((x+2)-x^2\\)."
      },
      {
        stimulus: "<table><tr><th>Curves</th></tr><tr><td>\\(y=x^2\\) and \\(y=x+2\\)</td></tr></table>",
        q: "The value of this area is:",
        options: ["\\(\\dfrac92\\)", "\\(\\dfrac{10}3\\)", "\\(\\dfrac76\\)", "9"],
        ans: "\\(\\dfrac92\\)",
        reason: "Evaluating \\(\\int_{-1}^2[(x+2)-x^2]dx=\\left[\\frac{x^2}2+2x-\\frac{x^3}3\\right]_{-1}^2=\\frac92\\)."
      },
      {
        stimulus: "<table><tr><th>Region</th><th>Details</th></tr><tr><td>\\(y=\\sqrt{x}\\)</td><td>bounded by the x-axis, \\(x=0\\) to \\(x=4\\), revolved about the x-axis</td></tr></table>",
        q: "\\([f(x)]^2\\) equals:",
        options: ["\\(x\\)", "\\(x^2\\)", "\\(\\sqrt{x}\\)", "\\(\\dfrac1x\\)"],
        ans: "\\(x\\)",
        reason: "Squaring \\(f(x)=\\sqrt{x}\\) simply gives \\(x\\)."
      },
      {
        stimulus: "<table><tr><th>Region</th><th>Details</th></tr><tr><td>\\(y=\\sqrt{x}\\)</td><td>bounded by the x-axis, \\(x=0\\) to \\(x=4\\), revolved about the x-axis</td></tr></table>",
        q: "The volume integral is set up as:",
        options: ["\\(\\pi\\displaystyle\\int_0^4x\\,dx\\)", "\\(\\pi\\displaystyle\\int_0^4\\sqrt{x}\\,dx\\)", "\\(\\pi\\displaystyle\\int_0^4x^2\\,dx\\)", "\\(2\\pi\\displaystyle\\int_0^4x\\,dx\\)"],
        ans: "\\(\\pi\\displaystyle\\int_0^4x\\,dx\\)",
        reason: "By the disc method, \\(V=\\pi\\int_0^4[f(x)]^2dx=\\pi\\int_0^4x\\,dx\\)."
      },
      {
        stimulus: "<table><tr><th>Region</th><th>Details</th></tr><tr><td>\\(y=\\sqrt{x}\\)</td><td>bounded by the x-axis, \\(x=0\\) to \\(x=4\\), revolved about the x-axis</td></tr></table>",
        q: "Evaluating, \\(\\displaystyle\\int_0^4x\\,dx\\) equals:",
        options: ["8", "16", "4", "2"],
        ans: "8",
        reason: "\\(\\left[\\frac{x^2}2\\right]_0^4=8\\)."
      },
      {
        stimulus: "<table><tr><th>Region</th><th>Details</th></tr><tr><td>\\(y=\\sqrt{x}\\)</td><td>bounded by the x-axis, \\(x=0\\) to \\(x=4\\), revolved about the x-axis</td></tr></table>",
        q: "The volume of the solid is:",
        options: ["\\(8\\pi\\)", "\\(16\\pi\\)", "\\(4\\pi\\)", "\\(2\\pi\\)"],
        ans: "\\(8\\pi\\)",
        reason: "Multiplying the evaluated integral by \\(\\pi\\) gives \\(V=8\\pi\\)."
      },
      {
        stimulus: "<table><tr><th>Market</th><th>Function</th></tr><tr><td>Demand</td><td>\\(D(x)=100-2x\\)</td></tr><tr><td>Supply</td><td>\\(S(x)=20+3x\\)</td></tr></table>",
        q: "The equilibrium quantity \\(Q_0\\) (where \\(D(x)=S(x)\\)) is:",
        options: ["16", "20", "10", "68"],
        ans: "16",
        reason: "Setting \\(100-2x=20+3x\\) gives \\(80=5x\\), so \\(x=16\\)."
      },
      {
        stimulus: "<table><tr><th>Market</th><th>Function</th></tr><tr><td>Demand</td><td>\\(D(x)=100-2x\\)</td></tr><tr><td>Supply</td><td>\\(S(x)=20+3x\\)</td></tr></table>",
        q: "The equilibrium price \\(p_0\\) is:",
        options: ["68", "100", "20", "48"],
        ans: "68",
        reason: "Substituting \\(x=16\\) into either function gives the equilibrium price: \\(D(16)=100-32=68\\)."
      },
      {
        stimulus: "<table><tr><th>Market</th><th>Function</th></tr><tr><td>Demand</td><td>\\(D(x)=100-2x\\)</td></tr><tr><td>Supply</td><td>\\(S(x)=20+3x\\)</td></tr></table>",
        q: "The consumer surplus \\(\\displaystyle\\int_0^{16}[D(x)-p_0]\\,dx\\) is:",
        options: ["256", "384", "512", "128"],
        ans: "256",
        reason: "\\(\\int_0^{16}[32-2x]dx=\\left[32x-x^2\\right]_0^{16}=512-256=256\\)."
      },
      {
        stimulus: "<table><tr><th>Market</th><th>Function</th></tr><tr><td>Demand</td><td>\\(D(x)=100-2x\\)</td></tr><tr><td>Supply</td><td>\\(S(x)=20+3x\\)</td></tr></table>",
        q: "The producer surplus \\(\\displaystyle\\int_0^{16}[p_0-S(x)]\\,dx\\) is:",
        options: ["384", "256", "768", "192"],
        ans: "384",
        reason: "\\(\\int_0^{16}[48-3x]dx=\\left[48x-1.5x^2\\right]_0^{16}=768-384=384\\)."
      }
    ];
  }
});
