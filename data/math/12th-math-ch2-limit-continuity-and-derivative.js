// Class 12 Math -- Chapter 2: Limit, Continuity and Derivative
// Converted from the 300-question Class 12 MCQ bank (chapters 1-3), with
// short explanations added for every question.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch2",
  label: "Chapter 2: Limit, Continuity and Derivative",
  order: 2,
  questions: function () {
    return [
      {
        q: "If \\(\\lim\\limits_{x\\to a}f(x)=3\\) and \\(\\lim\\limits_{x\\to a}g(x)=0\\), then \\(\\lim\\limits_{x\\to a}\\dfrac{f(x)}{g(x)}\\):",
        options: ["3", "0", "Exists", "Doesn't exist"],
        ans: "Doesn't exist",
        reason: "Since the numerator tends to a nonzero value while the denominator tends to 0, the quotient grows without bound, so the limit doesn't exist."
      },
      {
        q: "If \\(f(x)=\\begin{cases}2x-1, & x<0\\\\ 2x+1, & x>0\\end{cases}\\), then \\(\\lim\\limits_{x\\to0^-}f(x)\\) is:",
        options: ["1", "\\(-1\\)", "0", "2"],
        ans: "\\(-1\\)",
        reason: "Approaching from the left uses the branch \\(2x-1\\), so the limit is \\(2(0)-1=-1\\)."
      },
      {
        q: "If \\(f\\) and \\(g\\) are continuous at 2, then \\(\\dfrac{f}g\\) is continuous at:",
        options: ["0", "1", "2", "3"],
        ans: "2",
        reason: "A quotient of functions continuous at a point is itself continuous there (provided the denominator isn't zero), so f/g is continuous at 2."
      },
      {
        q: "The function \\(f(x)=\\begin{cases}\\dfrac{\\sin x}x, & x\\ne0\\\\ 1, & x=0\\end{cases}\\), is continuous at:",
        options: ["0", "1", "\\(-1\\)", "0.1"],
        ans: "0",
        reason: "Since \\(\\lim_{x\\to0}\\frac{\\sin x}{x}=1\\) equals the defined value \\(f(0)=1\\), the function is continuous at 0."
      },
      {
        q: "If \\(f\\) is differentiable for every value of \\(x\\), then \\(f\\) is:",
        options: ["discontinuous", "continuous", "finite", "infinite"],
        ans: "continuous",
        reason: "Differentiability at every point implies continuity at every point."
      },
      {
        q: "If \\(k\\) is a constant and \\(n\\) is a positive integer, then \\(\\dfrac{d}{dx}k^n\\) is:",
        options: ["\\(nk^{n-1}\\)", "\\(k^{n-1}\\)", "\\(\\ln n\\cdot k^n\\)", "0"],
        ans: "0",
        reason: "Since k is a constant, \\(k^n\\) is also a fixed constant, and the derivative of a constant is 0."
      },
      {
        q: "If \\(f(2)=2\\), \\(g(x)=x^2\\), then \\(\\dfrac{d}{dx}\\left[\\dfrac{3g(x)}{f(2)}\\right]\\) is:",
        options: ["\\(2x\\)", "\\(3x\\)", "\\(\\dfrac32x\\)", "\\(\\dfrac32x^2\\)"],
        ans: "\\(3x\\)",
        reason: "Since \\(f(2)=2\\) is a fixed number, \\(\\dfrac{3g(x)}{f(2)}=\\dfrac{3x^2}2\\), whose derivative is \\(3x\\)."
      },
      {
        q: "If \\(y=f(x)\\) is a polynomial function of degree 2, then \\(\\dfrac{d^3}{dx^3}f(x)\\) is:",
        options: ["0", "1", "\\(-1\\)", "2"],
        ans: "0",
        reason: "A degree-2 polynomial's second derivative is already constant, so all higher derivatives, including the third, are 0."
      },
      {
        q: "If \\(f\\) is differentiable for every value of \\(x\\), then \\(f\\) is continuous for:",
        options: ["some value of \\(x\\)", "\\([0,\\infty]\\)", "every value of \\(x\\)", "\\([0,-\\infty]\\)"],
        ans: "every value of \\(x\\)",
        reason: "Differentiability at every value of x guarantees continuity at every value of x."
      },
      {
        q: "The critical value of \\(f(t)=2t^3\\) (where \\(f'(t)=0\\)) occurs at \\(t=\\):",
        options: ["3", "0", "\\(-1\\)", "1"],
        ans: "0",
        reason: "Setting \\(f'(t)=6t^2=0\\) gives \\(t=0\\) as the only critical value."
      },
      {
        q: "\\(\\lim\\limits_{x\\to a}c\\) (where \\(c\\) is a constant) equals:",
        options: ["0", "\\(c\\)", "\\(a\\)", "does not exist"],
        ans: "\\(c\\)",
        reason: "The limit of a constant function is that same constant, regardless of what x approaches."
      },
      {
        q: "\\(\\lim\\limits_{x\\to0}\\dfrac{\\sin x}x\\) equals:",
        options: ["0", "1", "undefined", "\\(\\infty\\)"],
        ans: "1",
        reason: "This is the standard trigonometric limit \\(\\lim_{x\\to0}\\frac{\\sin x}{x}=1\\)."
      },
      {
        q: "\\(\\lim\\limits_{x\\to0}\\dfrac{1-\\cos x}x\\) equals:",
        options: ["0", "1", "\\(-1\\)", "undefined"],
        ans: "0",
        reason: "This standard limit evaluates to 0, since \\(1-\\cos x\\) vanishes faster than x near 0."
      },
      {
        q: "If \\(\\lim\\limits_{x\\to a}f(x)=L_1\\) and \\(\\lim\\limits_{x\\to a}g(x)=L_2\\), then \\(\\lim\\limits_{x\\to a}[f(x)+g(x)]\\) equals:",
        options: ["\\(L_1-L_2\\)", "\\(L_1+L_2\\)", "\\(L_1L_2\\)", "\\(L_1/L_2\\)"],
        ans: "\\(L_1+L_2\\)",
        reason: "By the sum law for limits, the limit of a sum equals the sum of the limits."
      },
      {
        q: "\\(\\lim\\limits_{x\\to a}[f(x)]^n\\) equals:",
        options: ["\\(\\left[\\lim_{x\\to a}f(x)\\right]^n\\)", "\\(n\\left[\\lim_{x\\to a}f(x)\\right]\\)", "\\([f(a)]^{n-1}\\)", "undefined"],
        ans: "\\(\\left[\\lim_{x\\to a}f(x)\\right]^n\\)",
        reason: "By the power law for limits, the limit of a power equals the power of the limit."
      },
      {
        q: "\\(\\lim\\limits_{x\\to5}10x\\) equals:",
        options: ["10", "5", "50", "0"],
        ans: "50",
        reason: "Direct substitution gives \\(10(5)=50\\)."
      },
      {
        q: "\\(\\lim\\limits_{x\\to2}(x^2-5x+6)\\) equals:",
        options: ["0", "1", "6", "\\(-6\\)"],
        ans: "0",
        reason: "Direct substitution gives \\(2^2-5(2)+6=4-10+6=0\\)."
      },
      {
        q: "For \\(\\lim\\limits_{x\\to a}f(x)=L\\) to exist, it is necessary that:",
        options: ["\\(\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L\\)", "\\(f(a)\\) must be defined", "\\(f\\) must be a polynomial", "\\(a\\) must equal 0"],
        ans: "\\(\\lim_{x\\to a^-}f(x)=\\lim_{x\\to a^+}f(x)=L\\)",
        reason: "A two-sided limit exists only when both one-sided limits exist and agree."
      },
      {
        q: "\\(x\\to a^-\\) denotes that \\(x\\) approaches \\(a\\) from the:",
        options: ["right", "left", "top", "bottom"],
        ans: "left",
        reason: "The minus superscript denotes approach from values less than a, i.e. from the left."
      },
      {
        q: "\\(\\lim\\limits_{x\\to1}\\dfrac{x^2-1}{x-1}\\) equals:",
        options: ["0", "1", "2", "does not exist"],
        ans: "2",
        reason: "Factoring gives \\(\\dfrac{(x-1)(x+1)}{x-1}=x+1\\), which tends to 2 as \\(x\\to1\\)."
      },
      {
        q: "The existence of \\(\\lim\\limits_{x\\to a}f(x)\\) depends on:",
        options: ["whether \\(f(a)\\) is defined", "the values of \\(f\\) near \\(a\\), not necessarily at \\(a\\)", "whether \\(f\\) is a polynomial", "whether \\(a\\) is positive"],
        ans: "the values of \\(f\\) near \\(a\\), not necessarily at \\(a\\)",
        reason: "A limit only depends on the function's behavior near a, not on the actual value (or existence) of f(a)."
      },
      {
        q: "A function \\(f\\) is continuous at a number \\(a\\) if all of the following hold, except:",
        options: ["\\(f(a)\\) is defined", "\\(\\lim_{x\\to a}f(x)\\) exists", "\\(\\lim_{x\\to a}f(x)=f(a)\\)", "\\(f\\) is a polynomial"],
        ans: "\\(f\\) is a polynomial",
        reason: "Continuity requires the three listed conditions on limits and f(a); being a polynomial is not part of the definition."
      },
      {
        q: "A removable discontinuity occurs at \\(a\\) when:",
        options: ["\\(\\lim_{x\\to a}f(x)\\) does not exist", "\\(\\lim_{x\\to a}f(x)\\) exists but \\(f(a)\\) is undefined or \\(f(a)\\ne\\lim_{x\\to a}f(x)\\)", "\\(f(a)=0\\)", "\\(f\\) is a constant"],
        ans: "\\(\\lim_{x\\to a}f(x)\\) exists but \\(f(a)\\) is undefined or \\(f(a)\\ne\\lim_{x\\to a}f(x)\\)",
        reason: "A removable discontinuity is exactly when the limit exists but disagrees with (or is missing) the function's actual value there."
      },
      {
        q: "The function \\(f(x)=\\dfrac{x^2-1}{x-1}\\) has a removable discontinuity at:",
        options: ["\\(x=0\\)", "\\(x=1\\)", "\\(x=-1\\)", "\\(x=2\\)"],
        ans: "\\(x=1\\)",
        reason: "The function is undefined at \\(x=1\\) (0/0 form), yet the limit there exists (equal to 2), making it a removable discontinuity."
      },
      {
        q: "A function is continuous on an open interval \\((a,b)\\) if it is continuous at:",
        options: ["only \\(x=a\\) and \\(x=b\\)", "every number in the interval", "only the midpoint", "no number in the interval"],
        ans: "every number in the interval",
        reason: "Continuity on an open interval requires continuity at every single point within it."
      },
      {
        q: "If \\(f\\) and \\(g\\) are continuous at \\(a\\), then \\(f+g\\), \\(fg\\), and \\(\\dfrac{f}g\\) (with \\(g(a)\\ne0\\)) are:",
        options: ["discontinuous at \\(a\\)", "continuous at \\(a\\)", "undefined at \\(a\\)", "none of these"],
        ans: "continuous at \\(a\\)",
        reason: "Sums, products, and quotients (with nonzero denominator) of functions continuous at a point are themselves continuous there."
      },
      {
        q: "For \\(f(x)=\\begin{cases}x^2, & x<2\\\\ 5, & x=2\\\\ -x+6, & x>2\\end{cases}\\), \\(\\lim\\limits_{x\\to2}f(x)\\) equals:",
        options: ["5", "4", "6", "does not exist"],
        ans: "4",
        reason: "The left-hand limit is \\(2^2=4\\) and the right-hand limit is \\(-2+6=4\\), so both sides agree and the limit is 4."
      },
      {
        q: "For the function in the previous question, \\(f\\) is discontinuous at \\(x=2\\) because:",
        options: ["\\(\\lim_{x\\to2}f(x)\\) does not exist", "\\(f(2)\\) is undefined", "\\(\\lim_{x\\to2}f(x)\\ne f(2)\\)", "\\(f\\) is not defined near 2"],
        ans: "\\(\\lim_{x\\to2}f(x)\\ne f(2)\\)",
        reason: "Although the limit exists (equal to 4), it doesn't match the defined value \\(f(2)=5\\), violating the continuity condition."
      },
      {
        q: "A polynomial function is continuous:",
        options: ["nowhere", "only at \\(x=0\\)", "everywhere on \\(\\mathbb{R}\\)", "only on \\([0,1]\\)"],
        ans: "everywhere on \\(\\mathbb{R}\\)",
        reason: "Polynomials are built from sums and products of continuous power functions, so they are continuous on all of \\(\\mathbb{R}\\)."
      },
      {
        q: "The function \\(f(x)=\\dfrac1x\\) is discontinuous at:",
        options: ["\\(x=0\\)", "\\(x=1\\)", "\\(x=-1\\)", "nowhere"],
        ans: "\\(x=0\\)",
        reason: "The function is undefined at \\(x=0\\), where it also blows up, making it discontinuous there."
      },
      {
        q: "A function \\(f\\) continuous on a closed interval \\([a,b]\\) always has:",
        options: ["no extrema", "an absolute maximum and absolute minimum on \\([a,b]\\)", "only a minimum", "only a maximum"],
        ans: "an absolute maximum and absolute minimum on \\([a,b]\\)",
        reason: "The Extreme Value Theorem guarantees a continuous function on a closed interval attains both an absolute maximum and minimum."
      },
      {
        q: "Which type of function can have a jump discontinuity?",
        options: ["a polynomial function", "a piecewise-defined function", "a constant function", "an identity function"],
        ans: "a piecewise-defined function",
        reason: "Piecewise-defined functions can have their branches meet at different values at a point, producing a jump discontinuity."
      },
      {
        q: "The slope of the tangent line to \\(y=f(x)\\) at \\((a,f(a))\\) is given by \\(m_{tan}=\\):",
        options: ["\\(\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(a+\\Delta x)-f(a)}{\\Delta x}\\)", "\\(f(a)\\)", "\\(\\dfrac{f(a)}a\\)", "\\(a\\cdot f(a)\\)"],
        ans: "\\(\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(a+\\Delta x)-f(a)}{\\Delta x}\\)",
        reason: "The tangent slope is defined as the limiting value of the secant slope as \\(\\Delta x\\to0\\)."
      },
      {
        q: "The slope of a secant line through \\((a,f(a))\\) and \\((a+\\Delta x,f(a+\\Delta x))\\) is:",
        options: ["\\(\\dfrac{\\Delta x}{\\Delta y}\\)", "\\(\\dfrac{\\Delta y}{\\Delta x}\\)", "\\(\\Delta x\\cdot\\Delta y\\)", "\\(\\Delta x+\\Delta y\\)"],
        ans: "\\(\\dfrac{\\Delta y}{\\Delta x}\\)",
        reason: "Slope is rise over run: the change in y divided by the change in x."
      },
      {
        q: "A tangent line may fail to exist at \\(x=a\\) if the graph has:",
        options: ["a smooth curve at \\(a\\)", "a corner or a discontinuity at \\(a\\)", "a positive slope at \\(a\\)", "a negative slope at \\(a\\)"],
        ans: "a corner or a discontinuity at \\(a\\)",
        reason: "A sharp corner or a discontinuity prevents a well-defined single tangent line from existing at that point."
      },
      {
        q: "The average rate of change of \\(f\\) over \\([a,b]\\) is given by:",
        options: ["\\(\\dfrac{f(b)-f(a)}{b-a}\\)", "\\(f(b)-f(a)\\)", "\\(\\dfrac{f(a)+f(b)}2\\)", "\\(f(b)\\cdot f(a)\\)"],
        ans: "\\(\\dfrac{f(b)-f(a)}{b-a}\\)",
        reason: "Average rate of change is the total change in output divided by the total change in input over the interval."
      },
      {
        q: "The instantaneous rate of change of \\(f\\) at \\(a\\) is defined using:",
        options: ["a limit as \\(\\Delta x\\to\\infty\\)", "a limit as \\(\\Delta x\\to0\\)", "the average of two points only", "integration"],
        ans: "a limit as \\(\\Delta x\\to0\\)",
        reason: "Instantaneous rate of change is defined by taking the average rate of change and letting the interval shrink to zero."
      },
      {
        q: "For \\(s=f(t)\\) giving position, the instantaneous velocity at \\(t_1\\) is:",
        options: ["\\(\\lim\\limits_{\\Delta t\\to0}\\dfrac{f(t_1+\\Delta t)-f(t_1)}{\\Delta t}\\)", "\\(f(t_1)\\)", "\\(\\dfrac{f(t_1)}{t_1}\\)", "\\(t_1\\cdot f(t_1)\\)"],
        ans: "\\(\\lim\\limits_{\\Delta t\\to0}\\dfrac{f(t_1+\\Delta t)-f(t_1)}{\\Delta t}\\)",
        reason: "Velocity is the instantaneous rate of change of position, defined via the same difference-quotient limit."
      },
      {
        q: "If the height of a falling object is \\(s(t)=-4.9t^2+192\\), the instantaneous velocity at any time \\(t\\) is given by:",
        options: ["\\(s'(t)\\)", "\\(s(t)\\)", "\\(s(t)/t\\)", "\\(t\\cdot s(t)\\)"],
        ans: "\\(s'(t)\\)",
        reason: "Velocity is by definition the derivative of the position function with respect to time."
      },
      {
        q: "A negative velocity in rectilinear motion indicates that the object is moving:",
        options: ["in the positive direction", "in the negative direction", "at rest", "with zero acceleration"],
        ans: "in the negative direction",
        reason: "The sign of velocity indicates direction of motion; negative velocity means motion in the negative direction."
      },
      {
        q: "The derivative \\(f'(x)\\) is defined as:",
        options: ["\\(\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}\\)", "\\(f(x)+\\Delta x\\)", "\\(\\dfrac{f(x)}{\\Delta x}\\)", "\\(f(x)\\cdot\\Delta x\\)"],
        ans: "\\(\\lim\\limits_{\\Delta x\\to0}\\dfrac{f(x+\\Delta x)-f(x)}{\\Delta x}\\)",
        reason: "This is the formal limit definition of the derivative."
      },
      {
        q: "By the power rule, \\(\\dfrac{d}{dx}(x^n)\\) equals:",
        options: ["\\(x^{n-1}\\)", "\\(nx^{n-1}\\)", "\\(nx^n\\)", "\\((n-1)x^n\\)"],
        ans: "\\(nx^{n-1}\\)",
        reason: "The power rule states \\(\\dfrac{d}{dx}(x^n)=nx^{n-1}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(c)\\), where \\(c\\) is a constant, equals:",
        options: ["\\(c\\)", "1", "0", "\\(cx\\)"],
        ans: "0",
        reason: "A constant function never changes, so its derivative is 0."
      },
      {
        q: "\\(\\dfrac{d}{dx}[f(x)+g(x)]\\) equals:",
        options: ["\\(f'(x)+g'(x)\\)", "\\(f'(x)-g'(x)\\)", "\\(f'(x)g'(x)\\)", "\\(f(x)+g'(x)\\)"],
        ans: "\\(f'(x)+g'(x)\\)",
        reason: "By the sum rule, the derivative of a sum is the sum of the derivatives."
      },
      {
        q: "By the product rule, \\(\\dfrac{d}{dx}[f(x)g(x)]\\) equals:",
        options: ["\\(f'(x)g'(x)\\)", "\\(f(x)g'(x)+g(x)f'(x)\\)", "\\(f(x)g(x)\\)", "\\(f'(x)-g'(x)\\)"],
        ans: "\\(f(x)g'(x)+g(x)f'(x)\\)",
        reason: "The product rule states \\(\\dfrac{d}{dx}[fg]=fg'+gf'\\)."
      },
      {
        q: "By the quotient rule, \\(\\dfrac{d}{dx}\\left[\\dfrac{f(x)}{g(x)}\\right]\\) equals:",
        options: ["\\(\\dfrac{f'(x)}{g'(x)}\\)", "\\(\\dfrac{g(x)f'(x)-f(x)g'(x)}{[g(x)]^2}\\)", "\\(\\dfrac{f(x)g'(x)-g(x)f'(x)}{[g(x)]^2}\\)", "\\(\\dfrac{f(x)+g(x)}{[g(x)]^2}\\)"],
        ans: "\\(\\dfrac{g(x)f'(x)-f(x)g'(x)}{[g(x)]^2}\\)",
        reason: "The quotient rule gives \\(\\dfrac{d}{dx}\\left[\\dfrac{f}{g}\\right]=\\dfrac{gf'-fg'}{g^2}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(5x^3)\\) equals:",
        options: ["\\(5x^2\\)", "\\(15x^2\\)", "\\(3x^2\\)", "\\(15x^3\\)"],
        ans: "\\(15x^2\\)",
        reason: "By the power and constant-multiple rules, \\(\\dfrac{d}{dx}(5x^3)=5\\cdot3x^2=15x^2\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}\\left(\\dfrac1x\\right)\\) equals:",
        options: ["\\(\\dfrac1{x^2}\\)", "\\(-\\dfrac1{x^2}\\)", "\\(\\ln x\\)", "\\(-\\ln x\\)"],
        ans: "\\(-\\dfrac1{x^2}\\)",
        reason: "Writing \\(1/x=x^{-1}\\) and applying the power rule gives \\(-x^{-2}=-\\dfrac1{x^2}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}\\sqrt{x}\\) equals:",
        options: ["\\(\\dfrac1{2\\sqrt{x}}\\)", "\\(2\\sqrt{x}\\)", "\\(\\dfrac1{\\sqrt{x}}\\)", "\\(\\sqrt{x}\\)"],
        ans: "\\(\\dfrac1{2\\sqrt{x}}\\)",
        reason: "Writing \\(\\sqrt{x}=x^{1/2}\\) and applying the power rule gives \\(\\dfrac12x^{-1/2}=\\dfrac1{2\\sqrt{x}}\\)."
      },
      {
        q: "If \\(c\\) is constant and \\(f\\) is differentiable, \\(\\dfrac{d}{dx}[cf(x)]\\) equals:",
        options: ["\\(f'(x)\\)", "\\(cf'(x)\\)", "\\(cf(x)\\)", "\\(c+f'(x)\\)"],
        ans: "\\(cf'(x)\\)",
        reason: "The constant multiple rule states \\(\\dfrac{d}{dx}[cf(x)]=cf'(x)\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(x^{4/3})\\) equals:",
        options: ["\\(\\dfrac43x^{1/3}\\)", "\\(\\dfrac34x^{1/3}\\)", "\\(\\dfrac34x^{4/3}\\)", "\\(4x^{1/3}\\)"],
        ans: "\\(\\dfrac43x^{1/3}\\)",
        reason: "Applying the power rule with \\(n=4/3\\) gives \\(\\dfrac43x^{4/3-1}=\\dfrac43x^{1/3}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(3x^2-7x+10)\\) equals:",
        options: ["\\(6x-7\\)", "\\(3x-7\\)", "\\(6x+10\\)", "\\(6x-7x\\)"],
        ans: "\\(6x-7\\)",
        reason: "Differentiating term by term: \\(\\dfrac{d}{dx}(3x^2)=6x\\), \\(\\dfrac{d}{dx}(-7x)=-7\\), and the constant vanishes."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\sin x)\\) equals:",
        options: ["\\(\\cos x\\)", "\\(-\\cos x\\)", "\\(-\\sin x\\)", "\\(\\sec^2x\\)"],
        ans: "\\(\\cos x\\)",
        reason: "This is the standard derivative \\(\\dfrac{d}{dx}(\\sin x)=\\cos x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\cos x)\\) equals:",
        options: ["\\(\\sin x\\)", "\\(-\\sin x\\)", "\\(-\\cos x\\)", "\\(\\csc^2x\\)"],
        ans: "\\(-\\sin x\\)",
        reason: "This is the standard derivative \\(\\dfrac{d}{dx}(\\cos x)=-\\sin x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\tan x)\\) equals:",
        options: ["\\(\\sec x\\tan x\\)", "\\(\\sec^2x\\)", "\\(-\\csc^2x\\)", "\\(\\csc x\\cot x\\)"],
        ans: "\\(\\sec^2x\\)",
        reason: "This is the standard derivative \\(\\dfrac{d}{dx}(\\tan x)=\\sec^2x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\cot x)\\) equals:",
        options: ["\\(\\sec^2x\\)", "\\(-\\csc^2x\\)", "\\(\\csc x\\cot x\\)", "\\(-\\sec x\\tan x\\)"],
        ans: "\\(-\\csc^2x\\)",
        reason: "This is the standard derivative \\(\\dfrac{d}{dx}(\\cot x)=-\\csc^2x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\sec x)\\) equals:",
        options: ["\\(\\sec x\\tan x\\)", "\\(-\\sec x\\tan x\\)", "\\(\\csc x\\cot x\\)", "\\(-\\csc x\\cot x\\)"],
        ans: "\\(\\sec x\\tan x\\)",
        reason: "This is the standard derivative \\(\\dfrac{d}{dx}(\\sec x)=\\sec x\\tan x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\csc x)\\) equals:",
        options: ["\\(\\csc x\\cot x\\)", "\\(-\\csc x\\cot x\\)", "\\(\\sec x\\tan x\\)", "\\(-\\sec^2x\\)"],
        ans: "\\(-\\csc x\\cot x\\)",
        reason: "This is the standard derivative \\(\\dfrac{d}{dx}(\\csc x)=-\\csc x\\cot x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\sin^{-1}x)\\) equals:",
        options: ["\\(\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(-\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)"],
        ans: "\\(\\dfrac1{\\sqrt{1-x^2}}\\)",
        reason: "This is the standard derivative of inverse sine, \\(\\dfrac1{\\sqrt{1-x^2}}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\cos^{-1}x)\\) equals:",
        options: ["\\(\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(-\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)"],
        ans: "\\(-\\dfrac1{\\sqrt{1-x^2}}\\)",
        reason: "Since \\(\\cos^{-1}x=\\pi/2-\\sin^{-1}x\\), its derivative is the negative of inverse sine's: \\(-\\dfrac1{\\sqrt{1-x^2}}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\tan^{-1}x)\\) equals:",
        options: ["\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)", "\\(\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{x\\sqrt{x^2-1}}\\)"],
        ans: "\\(\\dfrac1{1+x^2}\\)",
        reason: "This is the standard derivative of inverse tangent, \\(\\dfrac1{1+x^2}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\cot^{-1}x)\\) equals:",
        options: ["\\(\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{1+x^2}\\)", "\\(-\\dfrac1{\\sqrt{1-x^2}}\\)", "\\(\\dfrac1{\\sqrt{1-x^2}}\\)"],
        ans: "\\(-\\dfrac1{1+x^2}\\)",
        reason: "Since \\(\\cot^{-1}x=\\pi/2-\\tan^{-1}x\\), its derivative is the negative of inverse tangent's: \\(-\\dfrac1{1+x^2}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\sec^{-1}x)\\) equals (for \\(|x|>1\\)):",
        options: ["\\(\\dfrac1{x\\sqrt{x^2-1}}\\)", "\\(-\\dfrac1{x\\sqrt{x^2-1}}\\)", "\\(\\dfrac1{1+x^2}\\)", "\\(\\dfrac1{\\sqrt{1-x^2}}\\)"],
        ans: "\\(\\dfrac1{x\\sqrt{x^2-1}}\\)",
        reason: "This is the standard derivative of inverse secant, \\(\\dfrac1{x\\sqrt{x^2-1}}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}[\\tan^{-1}(5x)]\\) equals:",
        options: ["\\(\\dfrac5{1+25x^2}\\)", "\\(\\dfrac1{1+25x^2}\\)", "\\(\\dfrac5{1+x^2}\\)", "\\(\\dfrac1{1+5x^2}\\)"],
        ans: "\\(\\dfrac5{1+25x^2}\\)",
        reason: "By the chain rule, \\(\\dfrac{d}{dx}\\tan^{-1}(5x)=\\dfrac1{1+(5x)^2}\\cdot5=\\dfrac5{1+25x^2}\\)."
      },
      {
        q: "By the chain rule, if \\(y=f(u)\\) and \\(u=g(x)\\), then \\(\\dfrac{dy}{dx}\\) equals:",
        options: ["\\(\\dfrac{dy}{du}+\\dfrac{du}{dx}\\)", "\\(\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}\\)", "\\(\\dfrac{dy}{du}\\div\\dfrac{du}{dx}\\)", "\\(\\dfrac{du}{dy}\\cdot\\dfrac{dy}{dx}\\)"],
        ans: "\\(\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}\\)",
        reason: "The chain rule states \\(\\dfrac{dy}{dx}=\\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}[(3x^2+1)^5]\\) equals:",
        options: ["\\(5(3x^2+1)^4\\)", "\\(5(3x^2+1)^4(6x)\\)", "\\(5(6x)^4\\)", "\\((3x^2+1)^4(6x)\\)"],
        ans: "\\(5(3x^2+1)^4(6x)\\)",
        reason: "By the chain rule, differentiate the outer power then multiply by the derivative of the inner function \\(3x^2+1\\), which is \\(6x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(e^x)\\) equals:",
        options: ["\\(e^x\\)", "\\(xe^{x-1}\\)", "\\(e^{x-1}\\)", "\\(\\dfrac{e^x}x\\)"],
        ans: "\\(e^x\\)",
        reason: "The exponential function \\(e^x\\) is its own derivative."
      },
      {
        q: "\\(\\dfrac{d}{dx}(\\ln x)\\) equals:",
        options: ["\\(x\\)", "\\(\\dfrac1x\\)", "\\(\\ln x\\)", "\\(e^x\\)"],
        ans: "\\(\\dfrac1x\\)",
        reason: "This is the standard derivative \\(\\dfrac{d}{dx}(\\ln x)=\\dfrac1x\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}(a^x)\\), for \\(a>0,\\ a\\ne1\\), equals:",
        options: ["\\(a^x\\)", "\\(a^x\\ln a\\)", "\\(xa^{x-1}\\)", "\\(\\dfrac{a^x}{\\ln a}\\)"],
        ans: "\\(a^x\\ln a\\)",
        reason: "For a general base, \\(\\dfrac{d}{dx}(a^x)=a^x\\ln a\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}[e^{3x}]\\) equals:",
        options: ["\\(e^{3x}\\)", "\\(3e^{3x}\\)", "\\(3e^x\\)", "\\(e^x\\)"],
        ans: "\\(3e^{3x}\\)",
        reason: "By the chain rule, the derivative of the inner function \\(3x\\) is 3, giving \\(3e^{3x}\\)."
      },
      {
        q: "\\(\\dfrac{d}{dx}[\\ln(x^2+1)]\\) equals:",
        options: ["\\(\\dfrac1{x^2+1}\\)", "\\(\\dfrac{2x}{x^2+1}\\)", "\\(\\dfrac{2x}x\\)", "\\(2x\\ln(x^2+1)\\)"],
        ans: "\\(\\dfrac{2x}{x^2+1}\\)",
        reason: "By the chain rule, \\(\\dfrac{d}{dx}\\ln(x^2+1)=\\dfrac1{x^2+1}\\cdot2x=\\dfrac{2x}{x^2+1}\\)."
      },
      {
        q: "Differentiating an equation like \\(x^2+y^2=25\\) with respect to \\(x\\) directly (without solving for \\(y\\) first) is called:",
        options: ["explicit differentiation", "implicit differentiation", "partial differentiation", "logarithmic differentiation"],
        ans: "implicit differentiation",
        reason: "Differentiating both sides of an equation in x and y directly, treating y as a function of x, is called implicit differentiation."
      },
      {
        q: "For \\(xy=1\\), using implicit differentiation, \\(\\dfrac{dy}{dx}\\) equals:",
        options: ["\\(-\\dfrac{y}x\\)", "\\(\\dfrac{y}x\\)", "\\(-\\dfrac{x}y\\)", "\\(xy\\)"],
        ans: "\\(-\\dfrac{y}x\\)",
        reason: "Differentiating \\(xy=1\\) implicitly gives \\(y+xy'=0\\), so \\(y'=-\\dfrac{y}x\\)."
      },
      {
        q: "If \\(x=t^2\\) and \\(y=2t\\), then \\(\\dfrac{dy}{dx}\\) (using parametric differentiation) equals:",
        options: ["\\(\\dfrac{dy/dt}{dx/dt}\\)", "\\(\\dfrac{dx/dt}{dy/dt}\\)", "\\(\\dfrac{dy}{dt}\\cdot\\dfrac{dx}{dt}\\)", "\\(t\\)"],
        ans: "\\(\\dfrac{dy/dt}{dx/dt}\\)",
        reason: "For parametric curves, the chain rule gives \\(\\dfrac{dy}{dx}=\\dfrac{dy/dt}{dx/dt}\\)."
      },
      {
        q: "If \\(x=\\tan t\\) and \\(y=t^2\\), then \\(\\dfrac{dx}{dt}\\) equals:",
        options: ["\\(\\sec^2t\\)", "\\(\\tan^2t\\)", "\\(2t\\)", "\\(\\csc^2t\\)"],
        ans: "\\(\\sec^2t\\)",
        reason: "Differentiating \\(x=\\tan t\\) with respect to t gives \\(\\dfrac{dx}{dt}=\\sec^2t\\)."
      },
      {
        q: "For a function whose power rule for functions is applied, \\(\\dfrac{d}{dx}[g(x)]^n\\) equals:",
        options: ["\\(n[g(x)]^{n-1}\\)", "\\(n[g(x)]^{n-1}g'(x)\\)", "\\([g(x)]^{n-1}g'(x)\\)", "\\(ng'(x)\\)"],
        ans: "\\(n[g(x)]^{n-1}g'(x)\\)",
        reason: "The general power rule (a special case of the chain rule) includes the extra factor \\(g'(x)\\)."
      },
      {
        q: "The differential \\(dy\\) is defined as:",
        options: ["\\(dy=f(x)\\Delta x\\)", "\\(dy=f'(x)\\,dx\\)", "\\(dy=f'(x)+dx\\)", "\\(dy=\\dfrac{f(x)}{dx}\\)"],
        ans: "\\(dy=f'(x)\\,dx\\)",
        reason: "By definition, the differential of y is \\(dy=f'(x)\\,dx\\)."
      },
      {
        q: "For small \\(\\Delta x\\), the relationship between \\(\\Delta y\\) and \\(dy\\) is:",
        options: ["\\(\\Delta y\\gg dy\\)", "\\(\\Delta y\\approx dy\\)", "\\(\\Delta y=-dy\\)", "\\(\\Delta y\\) and \\(dy\\) are unrelated"],
        ans: "\\(\\Delta y\\approx dy\\)",
        reason: "For small changes in x, the differential dy closely approximates the actual change \\(\\Delta y\\)."
      },
      {
        q: "To approximate \\(f(x+\\Delta x)\\) using differentials, we use the formula:",
        options: ["\\(f(x+\\Delta x)\\approx f(x)+f'(x)\\Delta x\\)", "\\(f(x+\\Delta x)\\approx f(x)-f'(x)\\Delta x\\)", "\\(f(x+\\Delta x)\\approx f'(x)\\)", "\\(f(x+\\Delta x)\\approx f(x)\\cdot\\Delta x\\)"],
        ans: "\\(f(x+\\Delta x)\\approx f(x)+f'(x)\\Delta x\\)",
        reason: "This is the standard linear (tangent-line) approximation formula."
      },
      {
        q: "If the side of a cube has a possible error \\(\\Delta x\\), the approximate error in the volume \\(V=x^3\\) is given by:",
        options: ["\\(dV=x^2\\Delta x\\)", "\\(dV=3x^2\\Delta x\\)", "\\(dV=3x\\Delta x\\)", "\\(dV=x^3\\Delta x\\)"],
        ans: "\\(dV=3x^2\\Delta x\\)",
        reason: "Differentiating \\(V=x^3\\) gives \\(dV=3x^2\\,dx\\), so the approximate error is \\(3x^2\\Delta x\\)."
      },
      {
        q: "Using differentials, the increment \\(\\Delta x\\) is also denoted by:",
        options: ["\\(dx\\)", "\\(dy\\)", "\\(\\Delta y\\)", "\\(f'(x)\\)"],
        ans: "\\(dx\\)",
        reason: "By convention, the increment in the independent variable, \\(\\Delta x\\), is also written as \\(dx\\)."
      },
      {
        q: "For \\(y=x^2\\), if \\(x=4\\) and \\(dx=0.1\\), then \\(dy\\) equals:",
        options: ["0.4", "0.8", "8", "16.1"],
        ans: "0.8",
        reason: "\\(dy=2x\\,dx=2(4)(0.1)=0.8\\)."
      },
      {
        q: "Using differentials, the approximate value of \\(\\sqrt{25.4}\\) is closest to:",
        options: ["5.00", "5.04", "5.4", "25.4"],
        ans: "5.04",
        reason: "Using \\(f(x)=\\sqrt x\\) at \\(x=25\\), \\(dy=\\dfrac1{2\\sqrt{25}}(0.4)=0.04\\), giving \\(\\sqrt{25.4}\\approx5+0.04=5.04\\)."
      },
      {
        q: "Related rates problems make use of the:",
        options: ["chain rule", "quotient rule alone", "power rule alone", "sum rule alone"],
        ans: "chain rule",
        reason: "Related rates problems connect the rates of several changing variables using the chain rule."
      },
      {
        q: "The second derivative of \\(y=f(x)\\) is denoted by all of the following, except:",
        options: ["\\(f''(x)\\)", "\\(y''\\)", "\\(\\dfrac{d^2y}{dx^2}\\)", "\\([f'(x)]^2\\)"],
        ans: "\\([f'(x)]^2\\)",
        reason: "\\([f'(x)]^2\\) is the square of the first derivative, not the second derivative — a different quantity entirely."
      },
      {
        q: "If \\(y=x^3-2x^2\\), then \\(y''\\) equals:",
        options: ["\\(3x^2-4x\\)", "\\(6x-4\\)", "\\(6x\\)", "6"],
        ans: "\\(6x-4\\)",
        reason: "Differentiating twice: \\(y'=3x^2-4x\\), then \\(y''=6x-4\\)."
      },
      {
        q: "A number \\(c\\) is called a critical value of \\(f\\) if:",
        options: ["\\(f(c)=0\\)", "\\(f'(c)=0\\) or \\(f'(c)\\) does not exist", "\\(f''(c)=0\\)", "\\(c=0\\)"],
        ans: "\\(f'(c)=0\\) or \\(f'(c)\\) does not exist",
        reason: "By definition, a critical value is where the derivative is zero or fails to exist."
      },
      {
        q: "By the second derivative test, if \\(f''(c)>0\\) at a critical point \\(c\\), then \\(f(c)\\) is a:",
        options: ["relative maximum", "relative minimum", "point of inflection", "discontinuity"],
        ans: "relative minimum",
        reason: "A positive second derivative at a critical point means the curve is concave up there, so it's a relative minimum."
      },
      {
        q: "By the second derivative test, if \\(f''(c)<0\\) at a critical point \\(c\\), then \\(f(c)\\) is a:",
        options: ["relative maximum", "relative minimum", "point of inflection", "undefined"],
        ans: "relative maximum",
        reason: "A negative second derivative at a critical point means the curve is concave down there, so it's a relative maximum."
      },
      {
        q: "A function \\(f\\) is concave upward on \\((a,b)\\) if, for all \\(x\\) in \\((a,b)\\):",
        options: ["\\(f'(x)>0\\)", "\\(f''(x)>0\\)", "\\(f''(x)<0\\)", "\\(f(x)>0\\)"],
        ans: "\\(f''(x)>0\\)",
        reason: "Concavity is determined by the sign of the second derivative; positive means concave upward."
      },
      {
        q: "A function \\(f\\) is concave downward on \\((a,b)\\) if, for all \\(x\\) in \\((a,b)\\):",
        options: ["\\(f''(x)>0\\)", "\\(f''(x)<0\\)", "\\(f'(x)<0\\)", "\\(f(x)<0\\)"],
        ans: "\\(f''(x)<0\\)",
        reason: "A negative second derivative throughout the interval means the curve is concave downward there."
      },
      {
        q: "A number \\(f(c)\\) is an absolute maximum of \\(f\\) if:",
        options: ["\\(f(x)\\le f(c)\\) for every \\(x\\) in the domain of \\(f\\)", "\\(f(x)\\ge f(c)\\) for every \\(x\\) in the domain of \\(f\\)", "\\(f'(c)=0\\) only", "\\(f(c)=0\\)"],
        ans: "\\(f(x)\\le f(c)\\) for every \\(x\\) in the domain of \\(f\\)",
        reason: "By definition, f(c) is the absolute maximum if no other value in the domain exceeds it."
      },
      {
        q: "A continuous function on a closed interval \\([a,b]\\) is guaranteed to have:",
        options: ["no absolute extrema", "an absolute maximum and minimum on \\([a,b]\\)", "only a relative maximum", "only critical points"],
        ans: "an absolute maximum and minimum on \\([a,b]\\)",
        reason: "This is the Extreme Value Theorem: continuity on a closed interval guarantees both an absolute maximum and minimum."
      },
      {
        q: "If \\(f(x)=x^4\\), the critical value(s) of \\(f\\) is/are:",
        options: ["\\(x=0\\) only", "\\(x=1\\) only", "\\(x=-1\\) and \\(x=1\\)", "no critical values"],
        ans: "\\(x=0\\) only",
        reason: "Setting \\(f'(x)=4x^3=0\\) gives the single critical value \\(x=0\\)."
      },
      {
        q: "For \\(f(x)=-(2x-5)^2\\), the point \\(x=5/2\\) gives:",
        options: ["a relative minimum", "a relative maximum", "a point of inflection", "neither max nor min"],
        ans: "a relative maximum",
        reason: "The negative leading coefficient makes this a downward-opening parabola in x, so its vertex at \\(x=5/2\\) is a relative maximum."
      },
      {
        q: "In an optimization problem, the maximum or minimum value of a quantity on an interval is found by examining:",
        options: ["only the endpoints of the interval", "only the critical points", "critical points and endpoints of the interval", "neither critical points nor endpoints"],
        ans: "critical points and endpoints of the interval",
        reason: "Finding global extrema on an interval requires checking both critical points and the interval's endpoints."
      },
      {
        q: "In the price growth (inflation) model \\(P(t)=P_0e^{rt}\\), the derivative \\(\\dfrac{dP}{dt}\\) represents the:",
        options: ["initial price", "instantaneous rate of change of price with time", "final price", "average price"],
        ans: "instantaneous rate of change of price with time",
        reason: "The derivative of a quantity with respect to time always represents its instantaneous rate of change."
      },
      {
        q: "In straight-line depreciation, the value of an asset decreases:",
        options: ["exponentially", "at a constant rate over time", "logarithmically", "randomly"],
        ans: "at a constant rate over time",
        reason: "Straight-line depreciation subtracts the same fixed amount each period, i.e. a constant rate of change."
      },
      {
        q: "For a position function \\(s(t)\\), the acceleration \\(a(t)\\) is defined as:",
        options: ["\\(\\dfrac{ds}{dt}\\)", "\\(\\dfrac{dv}{dt}\\), where \\(v(t)=\\dfrac{ds}{dt}\\)", "\\(s(t)\\cdot t\\)", "\\(\\dfrac{s(t)}t\\)"],
        ans: "\\(\\dfrac{dv}{dt}\\), where \\(v(t)=\\dfrac{ds}{dt}\\)",
        reason: "Acceleration is defined as the derivative of velocity, which is itself the derivative of position."
      },
      {
        q: "If marginal cost is \\(C'(x)\\) and marginal revenue is \\(R'(x)\\), profit is maximized approximately when:",
        options: ["\\(C'(x)=0\\)", "\\(R'(x)=0\\)", "\\(C'(x)=R'(x)\\)", "\\(C(x)=0\\)"],
        ans: "\\(C'(x)=R'(x)\\)",
        reason: "Profit \\(P(x)=R(x)-C(x)\\) is maximized where \\(P'(x)=0\\), i.e. where marginal revenue equals marginal cost."
      },
      {
        stimulus: "<table><tr><th>Piecewise function</th></tr><tr><td>\\(f(x)=\\begin{cases}x^2+1, & x<1\\\\ 3, & x=1\\\\ 2x, & x>1\\end{cases}\\)</td></tr></table>",
        q: "\\(\\lim\\limits_{x\\to1^-}f(x)\\) equals:",
        options: ["2", "3", "1", "0"],
        ans: "2",
        reason: "Approaching from the left uses the branch \\(x^2+1\\), giving \\(1^2+1=2\\)."
      },
      {
        stimulus: "<table><tr><th>Piecewise function</th></tr><tr><td>\\(f(x)=\\begin{cases}x^2+1, & x<1\\\\ 3, & x=1\\\\ 2x, & x>1\\end{cases}\\)</td></tr></table>",
        q: "\\(\\lim\\limits_{x\\to1^+}f(x)\\) equals:",
        options: ["2", "3", "1", "4"],
        ans: "2",
        reason: "Approaching from the right uses the branch \\(2x\\), giving \\(2(1)=2\\)."
      },
      {
        stimulus: "<table><tr><th>Piecewise function</th></tr><tr><td>\\(f(x)=\\begin{cases}x^2+1, & x<1\\\\ 3, & x=1\\\\ 2x, & x>1\\end{cases}\\)</td></tr></table>",
        q: "Is \\(f\\) continuous at \\(x=1\\)?",
        options: ["Yes", "No, because \\(f(1)\\ne\\lim_{x\\to1}f(x)\\)", "No, because the limit does not exist", "No, because \\(f(1)\\) is undefined"],
        ans: "No, because \\(f(1)\\ne\\lim_{x\\to1}f(x)\\)",
        reason: "Although both one-sided limits agree at 2, the defined value \\(f(1)=3\\) doesn't match, so continuity fails."
      },
      {
        stimulus: "<table><tr><th>Piecewise function</th></tr><tr><td>\\(f(x)=\\begin{cases}x^2+1, & x<1\\\\ 3, & x=1\\\\ 2x, & x>1\\end{cases}\\)</td></tr></table>",
        q: "The type of discontinuity at \\(x=1\\) is:",
        options: ["jump discontinuity", "removable discontinuity", "infinite discontinuity", "no discontinuity"],
        ans: "removable discontinuity",
        reason: "Since the two-sided limit exists but simply disagrees with \\(f(1)\\), this is a removable discontinuity."
      },
      {
        stimulus: "<table><tr><th>Motion</th><th>Function</th></tr><tr><td>Position \\(s(t)\\)</td><td>\\(t^3-6t^2+9t\\) (metres, \\(t\\) in seconds)</td></tr></table>",
        q: "The velocity function \\(v(t)\\) is:",
        options: ["\\(3t^2-12t+9\\)", "\\(t^2-6t+9\\)", "\\(3t^2-6t\\)", "\\(6t-12\\)"],
        ans: "\\(3t^2-12t+9\\)",
        reason: "Differentiating \\(s(t)=t^3-6t^2+9t\\) gives \\(v(t)=3t^2-12t+9\\)."
      },
      {
        stimulus: "<table><tr><th>Motion</th><th>Function</th></tr><tr><td>Position \\(s(t)\\)</td><td>\\(t^3-6t^2+9t\\) (metres, \\(t\\) in seconds)</td></tr></table>",
        q: "The acceleration function \\(a(t)\\) is:",
        options: ["\\(3t^2-12t+9\\)", "\\(6t-12\\)", "\\(6t\\)", "12"],
        ans: "\\(6t-12\\)",
        reason: "Differentiating \\(v(t)\\) gives \\(a(t)=6t-12\\)."
      },
      {
        stimulus: "<table><tr><th>Motion</th><th>Function</th></tr><tr><td>Position \\(s(t)\\)</td><td>\\(t^3-6t^2+9t\\) (metres, \\(t\\) in seconds)</td></tr></table>",
        q: "The object is momentarily at rest when \\(v(t)=0\\), i.e. at:",
        options: ["\\(t=1\\) and \\(t=3\\)", "\\(t=0\\) and \\(t=4\\)", "\\(t=2\\) only", "\\(t=1\\) only"],
        ans: "\\(t=1\\) and \\(t=3\\)",
        reason: "Solving \\(3t^2-12t+9=0\\) simplifies to \\((t-1)(t-3)=0\\), giving \\(t=1\\) and \\(t=3\\)."
      },
      {
        stimulus: "<table><tr><th>Motion</th><th>Function</th></tr><tr><td>Position \\(s(t)\\)</td><td>\\(t^3-6t^2+9t\\) (metres, \\(t\\) in seconds)</td></tr></table>",
        q: "The acceleration at \\(t=2\\) is:",
        options: ["0", "12", "\\(-12\\)", "6"],
        ans: "0",
        reason: "Substituting \\(t=2\\) into \\(a(t)=6t-12\\) gives \\(6(2)-12=0\\)."
      },
      {
        stimulus: "<table><tr><th>Optimization</th><th>Setup</th></tr><tr><td>Fencing</td><td>200 m, rectangular field against a straight river (no fence needed along the river)</td></tr><tr><td>Width</td><td>\\(x\\) metres (perpendicular to river)</td></tr></table>",
        q: "If \\(x\\) is the width, the length along the river is \\(200-2x\\), so the area function \\(A(x)\\) is:",
        options: ["\\(200x-2x^2\\)", "\\(200x+2x^2\\)", "\\(x^2-200x\\)", "\\(100x-x^2\\)"],
        ans: "\\(200x-2x^2\\)",
        reason: "Area = width × length = \\(x(200-2x)=200x-2x^2\\)."
      },
      {
        stimulus: "<table><tr><th>Optimization</th><th>Setup</th></tr><tr><td>Fencing</td><td>200 m, rectangular field against a straight river (no fence needed along the river)</td></tr><tr><td>Width</td><td>\\(x\\) metres (perpendicular to river)</td></tr></table>",
        q: "The critical point of \\(A(x)\\) occurs at \\(x=\\):",
        options: ["50", "100", "25", "200"],
        ans: "50",
        reason: "Setting \\(A'(x)=200-4x=0\\) gives \\(x=50\\)."
      },
      {
        stimulus: "<table><tr><th>Optimization</th><th>Setup</th></tr><tr><td>Fencing</td><td>200 m, rectangular field against a straight river (no fence needed along the river)</td></tr><tr><td>Width</td><td>\\(x\\) metres (perpendicular to river)</td></tr></table>",
        q: "By the second derivative test, this critical point gives a:",
        options: ["relative minimum", "relative maximum", "point of inflection", "no extremum"],
        ans: "relative maximum",
        reason: "Since \\(A''(x)=-4<0\\), the critical point corresponds to a relative maximum."
      },
      {
        stimulus: "<table><tr><th>Optimization</th><th>Setup</th></tr><tr><td>Fencing</td><td>200 m, rectangular field against a straight river (no fence needed along the river)</td></tr><tr><td>Width</td><td>\\(x\\) metres (perpendicular to river)</td></tr></table>",
        q: "The maximum enclosed area is:",
        options: ["5000 m\\(^2\\)", "10000 m\\(^2\\)", "2500 m\\(^2\\)", "4000 m\\(^2\\)"],
        ans: "5000 m\\(^2\\)",
        reason: "Substituting \\(x=50\\) gives \\(A(50)=200(50)-2(50)^2=10000-5000=5000\\) square metres."
      }
    ];
  }
});
