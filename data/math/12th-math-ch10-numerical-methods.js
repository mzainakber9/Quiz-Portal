// Class 12 Math -- Chapter 10: Numerical Methods
// Converted from the 300-question Class 12 MCQ bank (chapters 8-10), with
// short explanations added for every question.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch10",
  label: "Chapter 10: Numerical Methods",
  order: 10,
  questions: function () {
    return [
      {
        q: "Which condition guarantees the bisection method can be applied to \\([a, b]\\)?",
        options: ["\\(f\\) continuous on \\([a,b]\\) and \\(f(a)f(b) < 0\\)", "\\(f\\) differentiable on \\([a,b]\\)", "\\(f\\) monotonic on \\([a,b]\\)", "\\(f(a)=0\\) or \\(f(b)=0\\)"],
        ans: "\\(f\\) continuous on \\([a,b]\\) and \\(f(a)f(b) < 0\\)",
        reason: "The bisection method requires \\(f\\) continuous on \\([a,b]\\) with \\(f(a)\\) and \\(f(b)\\) of opposite sign, guaranteeing a root by the Intermediate Value Theorem."
      },
      {
        q: "Starting interval \\([0, 1]\\). What is the minimum number of bisection iterations needed to guarantee an approximate root with absolute error \\(\\le 10^{-4}\\)?",
        options: ["12", "13", "14", "11"],
        ans: "13",
        reason: "Requiring \\((b-a)/2^{n+1}\\le10^{-4}\\) with \\(b-a=1\\) gives \\(2^{n+1}\\ge10^4\\), so the smallest integer n satisfying this is 13."
      },
      {
        q: "Let \\(f(x) = x^3 - 2\\) on \\([1, 2]\\). Perform two bisection iterations. Which interval contains the root after those two iterations?",
        options: ["\\([1.25, 1.5]\\)", "\\([1, 1.25]\\)", "\\([1.5, 2]\\)", "\\([1, 1.375]\\)"],
        ans: "\\([1.25, 1.5]\\)",
        reason: "Since \\(f(1)=-1<0\\) and \\(f(2)=6>0\\), the first midpoint 1.5 gives \\(f(1.5)=1.375>0\\) (root in \\([1,1.5]\\)); the second midpoint 1.25 gives \\(f(1.25)=-0.047<0\\), narrowing to \\([1.25,1.5]\\)."
      },
      {
        q: "For interval \\([3, 7]\\), what upper bound on \\(|x_n - r|\\) is guaranteed after 5 iterations (where \\(x_n\\) is the midpoint at iteration 5)?",
        options: ["0.25", "0.125", "0.0625", "0.03125"],
        ans: "0.0625",
        reason: "The guaranteed error bound after n iterations is \\((b-a)/2^{n+1}\\); with \\(b-a=4\\) and \\(n=5\\), this is \\(4/64=0.0625\\)."
      },
      {
        q: "What is the convergence order of the bisection method and its contraction factor?",
        options: ["Super linear (factor \\(<\\frac{1}{2}\\))", "Linear with factor \\(\\frac{1}{2}\\)", "Sublinear (factor \\(>1\\))", "Quadratic (factor ~0)"],
        ans: "Linear with factor \\(\\frac{1}{2}\\)",
        reason: "Each iteration halves the error, which is the defining property of linear convergence with contraction factor \\(1/2\\)."
      },
      {
        q: "Formula for the first approximation \\(x_2\\) in Regula Falsi is:",
        options: ["1.2", "1.5", "\\(\\dfrac{a+b}{2}\\)", "\\(\\dfrac{af(b) - bf(a)}{f(b) - f(a)}\\)"],
        ans: "\\(\\dfrac{af(b) - bf(a)}{f(b) - f(a)}\\)",
        reason: "This is the standard Regula Falsi (linear interpolation) formula for the point where the chord through \\((a,f(a))\\) and \\((b,f(b))\\) crosses the x-axis."
      },
      {
        q: "For \\(f(x) = x^3 - 4\\), \\([1, 2]\\), the first Regula Falsi approximation \\(x_1 = ?\\)",
        options: ["1.33", "1.43", "1.50", "1.25"],
        ans: "1.43",
        reason: "Substituting \\(a=1,b=2,f(a)=-3,f(b)=4\\) gives \\(x_1=\\dfrac{1(4)-2(-3)}{4-(-3)}=\\dfrac{10}7\\approx1.43\\)."
      },
      {
        q: "Stopping rule for Regula Falsi: \\(|f(x_n)| < 10^{-3}\\) or \\(|b-a| <\\) ? (given tolerance \\(= 10^{-3}\\))",
        options: ["\\(10^{-4}\\)", "\\(10^{-2}\\)", "\\(10^{-5}\\)", "\\(10^{-3}\\)"],
        ans: "\\(10^{-3}\\)",
        reason: "The stopping tolerance given, \\(10^{-3}\\), is used directly as the threshold for both the function-value and interval-width checks."
      },
      {
        q: "For \\(f(x) = x^2 - 3\\), \\([1, 2]\\), the second Regula Falsi approximation \\(x_2 \\approx ?\\)",
        options: ["1.75", "1.73", "1.60", "1.70"],
        ans: "1.73",
        reason: "Starting from \\(x_1\\approx1.667\\) (from the first chord), a second chord calculation narrows the estimate to approximately 1.73."
      },
      {
        q: "The convergence order of Regula Falsi is:",
        options: ["0.5", "Between 1 and 2", "1", "2"],
        ans: "Between 1 and 2",
        reason: "Regula Falsi generally converges faster than linear but not as fast as the quadratic Newton–Raphson method, placing its order strictly between 1 and 2."
      },
      {
        q: "Newton–Raphson iteration formula is:",
        options: ["\\(\\dfrac{a+b}{2}\\)", "\\(x + \\dfrac{f(x)}{f'(x)}\\)", "\\(x - \\dfrac{f(x)}{f'(x)}\\)", "\\(x - \\dfrac{f'(x)}{f(x)}\\)"],
        ans: "\\(x - \\dfrac{f(x)}{f'(x)}\\)",
        reason: "This is the standard Newton–Raphson update formula, subtracting the function-to-derivative ratio from the current estimate."
      },
      {
        q: "\\(f(x) = x^2 - 3\\), \\(x_0 = 1.5\\). The value of \\(x_1\\) by Newton–Raphson is:",
        options: ["1.72", "1.73", "1.70", "1.75"],
        ans: "1.75",
        reason: "\\(x_1=1.5-\\dfrac{(1.5)^2-3}{2(1.5)}=1.5-\\dfrac{-0.75}3=1.5+0.25=1.75\\)."
      },
      {
        q: "\\(f(x) = x^2 - 2\\), \\(x_0 = 1.5\\). The value of \\(x_1\\) by Newton–Raphson is:",
        options: ["1.44", "1.42", "1.45", "1.43"],
        ans: "1.42",
        reason: "\\(x_1=1.5-\\dfrac{(1.5)^2-2}{2(1.5)}=1.5-\\dfrac{0.25}3\\approx1.5-0.083=1.42\\)."
      },
      {
        q: "The convergence order of Newton–Raphson is:",
        options: ["1", "2", "\\(>2\\)", "0.5"],
        ans: "2",
        reason: "Near a simple root, Newton–Raphson's error roughly squares each iteration, which is the definition of quadratic (order 2) convergence."
      },
      {
        q: "The main drawback of Newton–Raphson is that it:",
        options: ["Is very slow", "Needs the derivative \\(f'(x)\\)", "Always diverges", "Has no formula"],
        ans: "Needs the derivative \\(f'(x)\\)",
        reason: "Unlike bisection or Regula Falsi, Newton–Raphson requires computing \\(f'(x)\\) at every step, which may be difficult or costly."
      },
      {
        q: "For \\([a, b] = [0, 2]\\) with \\(n = 4\\) subintervals, the step size \\(h = \\dfrac{b-a}{n}\\) equals:",
        options: ["0.25", "1", "2", "0.5"],
        ans: "0.5",
        reason: "\\(h=\\dfrac{2-0}4=0.5\\)."
      },
      {
        q: "Approximate \\(\\displaystyle\\int_0^2 x^2\\,dx\\) with the composite trapezoidal rule using \\(n=4\\). The result is \\(\\approx\\):",
        options: ["2.70", "2.75", "2.67", "2.80"],
        ans: "2.75",
        reason: "With \\(h=0.5\\) and points \\(0,0.5,1,1.5,2\\), the trapezoidal sum \\(\\dfrac{h}2[f_0+2(f_1+f_2+f_3)+f_4]=0.25[0+2(3.5)+4]=2.75\\)."
      },
      {
        q: "For \\(f(x) = \\sin x\\) on \\([0, \\pi]\\), using the trapezoidal error bound \\(|E| \\le \\dfrac{(b-a)^3}{12n^2}\\max|f''|\\) with \\(\\max|f''| = 1\\). The minimum integer \\(n\\) to guarantee \\(|E| \\le 10^{-4}\\) is:",
        options: ["160", "162", "159", "161"],
        ans: "161",
        reason: "Setting \\(\\dfrac{\\pi^3}{12n^2}\\le10^{-4}\\) and solving gives \\(n^2\\ge25838\\), so \\(n\\ge160.7\\), meaning the smallest integer is 161."
      },
      {
        q: "Approximate \\(\\displaystyle\\int_0^1 e^x\\,dx\\) with composite trapezoidal rule, \\(n=2\\). The value is \\(\\approx\\):",
        options: ["1.7539", "1.7600", "1.7000", "1.7183"],
        ans: "1.7539",
        reason: "With \\(h=0.5\\) and points \\(0,0.5,1\\), the trapezoidal sum \\(\\dfrac{h}2[f_0+2f_1+f_2]=0.25[1+2(1.6487)+2.71828]\\approx1.7539\\)."
      },
      {
        q: "The asymptotic error of the trapezoidal rule is \\(O(h^2)\\). If \\(h\\) is halved, the error is reduced by a factor of approximately:",
        options: ["16", "2", "8", "4"],
        ans: "4",
        reason: "Since the error is proportional to \\(h^2\\), halving h scales the error by \\((1/2)^2=1/4\\), a reduction factor of 4."
      },
      {
        q: "Approximate \\(\\displaystyle\\int_0^2 x^2\\,dx\\) with composite Simpson's rule, \\(n=4\\). The result is \\(\\approx\\):",
        options: ["2.6700", "2.6667", "2.6600", "2.7500"],
        ans: "2.6667",
        reason: "With \\(h=0.5\\), Simpson's sum \\(\\dfrac{h}3[f_0+4f_1+2f_2+4f_3+f_4]=\\dfrac{0.5}3[0+1+2+9+4]\\approx2.6667\\), matching the exact value since \\(x^2\\) is a low-degree polynomial."
      },
      {
        q: "For Simpson's rule on \\([0, 1]\\) with \\(n=6\\), the step \\(h = \\dfrac{b-a}{n}\\) equals:",
        options: ["0.1250", "0.2000", "0.2500", "0.1667"],
        ans: "0.1667",
        reason: "\\(h=\\dfrac{1-0}6\\approx0.1667\\)."
      },
      {
        q: "Using the composite Simpson error bound \\(|E| \\le \\dfrac{(b-a)h^4}{180}\\max|f^{(4)}|\\) for \\(f(x)=\\sin x\\) on \\([0,\\pi]\\) (\\(\\max|f^{(4)}|=1\\)), the smallest even \\(n\\) that guarantees \\(|E| \\le 10^{-6}\\) is:",
        options: ["39", "37", "36", "38"],
        ans: "38",
        reason: "Setting \\(\\dfrac{\\pi h^4}{180}\\le10^{-6}\\) with \\(h=\\pi/n\\) and solving for the smallest even n gives \\(n=38\\)."
      },
      {
        q: "Numerical methods are primarily used when a problem's analytical (exact) solution is:",
        options: ["Never needed", "Guaranteed unique", "Nonexistent or impractical to obtain", "Always available"],
        ans: "Nonexistent or impractical to obtain",
        reason: "Numerical methods step in precisely when an exact closed-form solution can't be found or is too impractical to compute directly."
      },
      {
        q: "For \\(f(x) = x^2 + 5x + 6\\), the roots of \\(f(x) = 0\\) are:",
        options: ["−2, −3", "2, 3", "−2, 3", "2, −3"],
        ans: "−2, −3",
        reason: "Factoring \\(x^2+5x+6=(x+2)(x+3)\\) gives roots \\(x=-2\\) and \\(x=-3\\)."
      },
      {
        q: "Polynomial equations of degree \\(\\le 4\\) can generally be solved:",
        options: ["Only graphically", "Analytically (e.g. quadratic formula)", "Never", "Only numerically"],
        ans: "Analytically (e.g. quadratic formula)",
        reason: "Formulas exist (linear, quadratic, cubic, and quartic formulas) for solving any polynomial up to degree 4 exactly."
      },
      {
        q: "For polynomial equations of degree \\(> 4\\), in general:",
        options: ["A general analytical solution exists", "No general analytical solution exists; numerical methods are required", "Only Newton's method fails", "Bisection cannot be used"],
        ans: "No general analytical solution exists; numerical methods are required",
        reason: "By the Abel–Ruffini theorem, no general algebraic formula exists for degree 5 and higher, making numerical methods essential."
      },
      {
        q: "Which of the following is an example of a transcendental equation?",
        options: ["\\(x^3 - 8 = 0\\)", "\\(x^2 - 4 = 0\\)", "\\(3x + 5 = 0\\)", "\\(e^x + \\sin x + 4 = 0\\)"],
        ans: "\\(e^x + \\sin x + 4 = 0\\)",
        reason: "An equation mixing algebraic terms with exponential or trigonometric functions, like \\(e^x+\\sin x+4=0\\), is transcendental rather than purely algebraic."
      },
      {
        q: "The Fundamental Theorem of Roots requires \\(f\\) to be continuous on \\([a,b]\\) and:",
        options: ["\\(f'(a) = 0\\)", "\\(f(a)\\cdot f(b) < 0\\)", "\\(f(a)\\cdot f(b) > 0\\)", "\\(f(a) = f(b)\\)"],
        ans: "\\(f(a)\\cdot f(b) < 0\\)",
        reason: "This sign-change condition, combined with continuity, guarantees a root exists in \\([a,b]\\) by the Intermediate Value Theorem."
      },
      {
        q: "Which statement about numerical methods is FALSE?",
        options: ["They give approximate solutions", "They always give an exact, error-free answer", "They are ideal for computer implementation", "They are used when analytical methods fail"],
        ans: "They always give an exact, error-free answer",
        reason: "Numerical methods produce approximations with some controllable error, not exact error-free answers, so this claim is false."
      },
      {
        q: "Newton–Raphson's method is also referred to as the:",
        options: ["Method of bisection", "Method of tangent", "Method of chords", "Method of false position"],
        ans: "Method of tangent",
        reason: "Newton–Raphson is geometrically the intersection of the tangent line with the x-axis, hence the 'method of tangent'."
      },
      {
        q: "The bisection method is also known as the:",
        options: ["Quadrature method", "Secant method", "Interval Halving (Binary Search) Method", "Newton's method"],
        ans: "Interval Halving (Binary Search) Method",
        reason: "Repeatedly halving the search interval is literally an interval-halving, or binary search, procedure."
      },
      {
        q: "In the bisection method, the new iterate is computed as:",
        options: ["\\(x_2 = x_1 - x_0\\)", "\\(x_2 = \\dfrac{x_0+x_1}{2}\\)", "\\(x_2 = \\dfrac{x_0f(x_1)-x_1f(x_0)}{f(x_1)-f(x_0)}\\)", "\\(x_2 = x_0 - \\dfrac{f(x_0)}{f'(x_0)}\\)"],
        ans: "\\(x_2 = \\dfrac{x_0+x_1}{2}\\)",
        reason: "This is simply the arithmetic average (midpoint) of the two current endpoints."
      },
      {
        q: "In bisection, if \\(f(x_0)\\cdot f(x_2) < 0\\), the root lies in the next interval:",
        options: ["\\([x_2, x_1]\\)", "\\([x_0, x_2]\\)", "\\([x_0, x_1]\\)", "Outside \\([x_0, x_1]\\)"],
        ans: "\\([x_0, x_2]\\)",
        reason: "If \\(f(x_0)\\) and the new midpoint value \\(f(x_2)\\) have opposite signs, the sign change (and hence the root) lies between \\(x_0\\) and \\(x_2\\)."
      },
      {
        q: "In bisection, if \\(f(x_1)\\cdot f(x_2) < 0\\), the root lies in the next interval:",
        options: ["\\([x_2, x_1]\\)", "\\([x_0, x_2]\\)", "None of these", "\\([x_0, x_1]\\)"],
        ans: "\\([x_2, x_1]\\)",
        reason: "If \\(f(x_1)\\) and \\(f(x_2)\\) have opposite signs, the sign change lies between \\(x_2\\) and \\(x_1\\)."
      },
      {
        q: "The convergence behaviour of the bisection method is best described as:",
        options: ["Instant (one step)", "Slow but guaranteed", "Fails to converge", "Fast but unreliable"],
        ans: "Slow but guaranteed",
        reason: "Each iteration only halves the interval by a fixed factor, so convergence is slow, but the sign-change guarantee ensures it always converges."
      },
      {
        q: "One key advantage of the bisection method is that it:",
        options: ["Requires no sign change", "Never requires an initial interval", "Always converges in 2 steps", "Is guaranteed to converge if the function changes sign over the interval"],
        ans: "Is guaranteed to converge if the function changes sign over the interval",
        reason: "Its defining strength is that it always converges to a root once a sign change is confirmed, unlike some open methods."
      },
      {
        q: "A key limitation of the bisection method is that:",
        options: ["Convergence can be slow, especially for high precision", "It only works for linear functions", "It requires computing \\(f'(x)\\)", "It cannot be programmed"],
        ans: "Convergence can be slow, especially for high precision",
        reason: "Because the interval only shrinks by half each time, reaching very high precision can require many iterations."
      },
      {
        q: "To guarantee an error less than \\(\\varepsilon\\) starting from an interval of width \\(L\\), the number of bisection iterations \\(n\\) must satisfy:",
        options: ["\\(n \\ge \\varepsilon/L\\)", "\\(n \\ge \\log_2(L/\\varepsilon)\\)", "\\(n \\ge L/\\varepsilon\\)", "\\(n = L - \\varepsilon\\)"],
        ans: "\\(n \\ge \\log_2(L/\\varepsilon)\\)",
        reason: "Each iteration multiplies the remaining uncertainty by \\(1/2\\), so after n iterations the interval is \\(L/2^n\\); solving \\(L/2^n\\le\\varepsilon\\) gives \\(n\\ge\\log_2(L/\\varepsilon)\\)."
      },
      {
        q: "The bisection method is classified as a:",
        options: ["Graphical method only", "Bracketing (closed) method", "Direct method", "Open method"],
        ans: "Bracketing (closed) method",
        reason: "Since it always keeps the root bracketed within a shrinking closed interval, bisection is a bracketing method."
      },
      {
        q: "With each bisection iteration, the width of the interval containing the root:",
        options: ["Becomes zero", "Is halved", "Doubles", "Stays the same"],
        ans: "Is halved",
        reason: "Each iteration cuts the current interval exactly in half."
      },
      {
        q: "The bisection method requires how many initial approximations to start?",
        options: ["Two, with opposite signs of \\(f\\)", "One", "None", "Three"],
        ans: "Two, with opposite signs of \\(f\\)",
        reason: "It needs two starting points where the function values have opposite signs to guarantee a bracketed root."
      },
      {
        q: "If \\(f(x_0)\\) and \\(f(x_1)\\) have the same sign, the bisection method:",
        options: ["Converges faster", "Gives an exact root immediately", "Cannot guarantee a root lies in \\([x_0,x_1]\\)", "Can still be applied directly"],
        ans: "Cannot guarantee a root lies in \\([x_0,x_1]\\)",
        reason: "Without a sign change confirmed by opposite signs, there is no guarantee that a root even lies within \\([x_0,x_1]\\)."
      },
      {
        q: "The Regula Falsi method is also known as the:",
        options: ["Method of False Position", "Bisection method", "Trapezoidal method", "Method of tangents"],
        ans: "Method of False Position",
        reason: "The method's alternate historical name directly translates to 'false position'."
      },
      {
        q: "Regula Falsi finds the next approximation as the intersection of the x-axis with the:",
        options: ["Normal line", "Tangent line at \\(x_0\\)", "Chord joining \\(f(x_0)\\) and \\(f(x_1)\\)", "Perpendicular bisector"],
        ans: "Chord joining \\(f(x_0)\\) and \\(f(x_1)\\)",
        reason: "Regula Falsi uses the straight-line chord connecting the two current points, finding where that chord crosses zero."
      },
      {
        q: "A key drawback of the Regula Falsi method is:",
        options: ["Stagnation of one end point, slowing convergence", "It never converges", "It requires \\(f'(x)\\)", "It cannot use two initial guesses"],
        ans: "Stagnation of one end point, slowing convergence",
        reason: "Because one endpoint can remain fixed for many iterations, convergence can slow down substantially — this is the stagnation problem."
      },
      {
        q: "Compared with the bisection method, Regula Falsi generally converges:",
        options: ["Only for linear functions", "More rapidly", "More slowly", "At exactly the same rate always"],
        ans: "More rapidly",
        reason: "By using the function's actual values to weight the new estimate (rather than a plain midpoint), Regula Falsi typically needs fewer iterations."
      },
      {
        q: "In the Regula Falsi formula \\(x_{n+1} = \\dfrac{x_{n-1}f(x_n) - x_nf(x_{n-1})}{f(x_n)-f(x_{n-1})}\\), this is valid provided:",
        options: ["\\(f(x_n)\\cdot f(x_{n-1}) < 0\\)", "\\(x_n = x_{n-1}\\)", "\\(f(x_n) = f(x_{n-1})\\)", "\\(f(x_n)\\cdot f(x_{n-1}) > 0\\)"],
        ans: "\\(f(x_n)\\cdot f(x_{n-1}) < 0\\)",
        reason: "Just like bisection, the method needs a confirmed sign change to guarantee the chord crosses the root's side."
      },
      {
        q: "The condition needed to start the Regula Falsi method is:",
        options: ["\\(f(x_0) = f(x_1)\\)", "\\(f(x_0)\\cdot f(x_1) > 0\\)", "\\(x_0 = x_1\\)", "\\(f(x_0)\\cdot f(x_1) < 0\\)"],
        ans: "\\(f(x_0)\\cdot f(x_1) < 0\\)",
        reason: "This is the same bracketing condition required for the method to be applied validly."
      },
      {
        q: "In Regula Falsi, due to stagnation, the approximations \\(x_1, x_2, x_3, \\ldots\\) tend to converge to the root:",
        options: ["From one side only", "From both sides alternately", "Never", "Immediately in one step"],
        ans: "From one side only",
        reason: "When one endpoint stops updating (stagnates), the sequence of approximations creeps toward the root from just one side."
      },
      {
        q: "Regula Falsi is not applicable/may fail when the function has:",
        options: ["A continuous derivative", "A linear form", "Multiple roots close together in the interval", "A single simple root"],
        ans: "Multiple roots close together in the interval",
        reason: "Since roots close together can distort the chord's slope and cause severe stagnation, Regula Falsi can struggle in this case."
      },
      {
        q: "Regula Falsi is also referred to as a form of:",
        options: ["Quadratic interpolation", "Linear interpolation (false position)", "Power series method", "Cubic spline method"],
        ans: "Linear interpolation (false position)",
        reason: "Regula Falsi's chord-based approximation is a form of linear interpolation between the two bracketing points."
      },
      {
        q: "Both the bisection method and the Regula Falsi method require:",
        options: ["The function to be a polynomial", "Two initial approximations with \\(f(x_0)\\cdot f(x_1) < 0\\)", "Only one initial approximation", "Knowledge of \\(f'(x)\\)"],
        ans: "Two initial approximations with \\(f(x_0)\\cdot f(x_1) < 0\\)",
        reason: "Both methods need a bracketed interval with a confirmed sign change to guarantee they can locate a root."
      },
      {
        q: "The Newton–Raphson formula is derived using:",
        options: ["L'Hopital's rule", "The mean value theorem only", "Taylor's theorem", "Simpson's rule"],
        ans: "Taylor's theorem",
        reason: "The formula for Newton–Raphson comes directly from truncating a Taylor expansion of f around the current estimate to first order."
      },
      {
        q: "In Newton–Raphson, the iteration requires computing:",
        options: ["Both \\(f(x)\\) and \\(f'(x)\\)", "\\(f''(x)\\) only", "The interval endpoints only", "\\(f(x)\\) only"],
        ans: "Both \\(f(x)\\) and \\(f'(x)\\)",
        reason: "At each step, both the function value and its derivative at the current point must be evaluated."
      },
      {
        q: "Newton–Raphson's method fails or behaves poorly when:",
        options: ["\\(f'(x)\\) is zero or close to zero near the root", "The function is a polynomial", "\\(f'(x)\\) is large near the root", "\\(f(x_0)=0\\) exactly"],
        ans: "\\(f'(x)\\) is zero or close to zero near the root",
        reason: "A near-zero derivative makes the correction term \\(f(x)/f'(x)\\) blow up, causing wild or divergent behavior."
      },
      {
        q: "If the initial guess \\(x_0\\) in Newton–Raphson is chosen close to the actual root, convergence is:",
        options: ["Slower", "Impossible", "Not affected", "Quick"],
        ans: "Quick",
        reason: "Being closer to the root means the linear (tangent) approximation is more accurate there, so convergence is quick."
      },
      {
        q: "Geometrically, each Newton–Raphson iterate is obtained from the x-intercept of the:",
        options: ["Tangent line to the curve at \\(x_n\\)", "Normal line", "Secant line", "Horizontal asymptote"],
        ans: "Tangent line to the curve at \\(x_n\\)",
        reason: "Each new estimate is where the tangent line at the current point crosses the x-axis."
      },
      {
        q: "The order of convergence of Newton–Raphson's method (for a simple root) is:",
        options: ["Quadratic (order 2)", "Zero", "Cubic (order 3)", "Linear (order 1)"],
        ans: "Quadratic (order 2)",
        reason: "Near a simple root, the error roughly squares each step, which is exactly quadratic (order 2) convergence."
      },
      {
        q: "If a root has multiplicity greater than one, the order of convergence of Newton–Raphson typically reduces to:",
        options: ["Linear", "Cubic", "Infinite", "Quadratic"],
        ans: "Linear",
        reason: "When the root is repeated (multiplicity > 1), the derivative also vanishes there, degrading convergence to linear."
      },
      {
        q: "Newton–Raphson's iteration formula to compute \\(\\sqrt{N}\\) using \\(f(x) = x^2 - N\\) is:",
        options: ["\\(x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)\\)", "\\(x_{n+1} = \\dfrac{N}{x_n}\\)", "\\(x_{n+1} = \\dfrac{x_n+N}{2}\\)", "\\(x_{n+1} = x_n^2 - N\\)"],
        ans: "\\(x_{n+1} = \\dfrac{1}{2}\\left(x_n + \\dfrac{N}{x_n}\\right)\\)",
        reason: "Applying Newton's formula to \\(f(x)=x^2-N\\), \\(f'(x)=2x\\), gives \\(x_{n+1}=x_n-\\dfrac{x_n^2-N}{2x_n}=\\dfrac12\\left(x_n+\\dfrac{N}{x_n}\\right)\\)."
      },
      {
        q: "One major advantage of Newton–Raphson over bisection is:",
        options: ["It converges much more rapidly near the root", "It requires no initial guess", "It always converges regardless of \\(x_0\\)", "It never requires a derivative"],
        ans: "It converges much more rapidly near the root",
        reason: "Because it uses local slope information, Newton–Raphson typically homes in on the root much faster once it's close."
      },
      {
        q: "One major disadvantage of Newton–Raphson is:",
        options: ["It cannot be used for transcendental equations", "It converges too slowly to be useful", "It never converges", "It requires the derivative \\(f'(x)\\) and is sensitive to the initial guess"],
        ans: "It requires the derivative \\(f'(x)\\) and is sensitive to the initial guess",
        reason: "Needing \\(f'(x)\\) at every step (which may not exist or be hard to compute) and depending heavily on a good starting guess are its chief downsides."
      },
      {
        q: "When \\(f'(x_0)\\) is very large (steep slope) at the guess, Newton–Raphson typically:",
        options: ["Finds the root even faster since the correction term is small", "Requires more iterations", "Diverges immediately", "Fails to define \\(x_1\\)"],
        ans: "Finds the root even faster since the correction term is small",
        reason: "A steep slope makes the correction term \\(f(x)/f'(x)\\) small, so the next iterate moves only slightly, often already very near the root."
      },
      {
        q: "If Newton–Raphson's iterates begin oscillating between two values without converging, this most likely indicates:",
        options: ["An unsuitable initial guess or a nearby inflection/turning point", "The root has been found exactly", "The bisection method should never be used", "The function is linear"],
        ans: "An unsuitable initial guess or a nearby inflection/turning point",
        reason: "Oscillation without convergence typically signals the guess landed near a flat or turning region where the tangent line overshoots repeatedly."
      },
      {
        q: "The trapezoidal rule approximates the area under a curve by dividing the region into:",
        options: ["Trapezoids", "Circular sectors", "Rectangles", "Triangles only"],
        ans: "Trapezoids",
        reason: "The method literally sums up small trapezoidal strips under the curve to approximate the total area."
      },
      {
        q: "The trapezoidal rule belongs to the broader family of:",
        options: ["Runge–Kutta formulas", "Taylor series methods", "Lagrange interpolation only", "Newton–Cotes formulas"],
        ans: "Newton–Cotes formulas",
        reason: "The trapezoidal rule is a linear-order member of the broader Newton–Cotes family of equally-spaced quadrature formulas."
      },
      {
        q: "For a single trapezoidal segment of width \\(h\\), the area is given by:",
        options: ["\\(\\dfrac{h}{2}(y_0-y_1)\\)", "\\(\\dfrac{h}{3}(y_0+y_1)\\)", "\\(h(y_0+y_1)\\)", "\\(\\dfrac{h}{2}(y_0+y_1)\\)"],
        ans: "\\(\\dfrac{h}{2}(y_0+y_1)\\)",
        reason: "This is the standard area formula for a trapezoid with parallel sides \\(y_0,y_1\\) and height h."
      },
      {
        q: "The composite trapezoidal rule formula is:",
        options: ["\\(\\dfrac{h}{3}[(y_0+y_n)+4(y_1+\\cdots)+2(y_2+\\cdots)]\\)", "\\(\\dfrac{h}{2}[y_0-y_n]\\)", "\\(\\dfrac{h}{2}[(y_0+y_n)+2(y_1+\\cdots+y_{n-1})]\\)", "\\(h[y_0+y_n]\\)"],
        ans: "\\(\\dfrac{h}{2}[(y_0+y_n)+2(y_1+\\cdots+y_{n-1})]\\)",
        reason: "This is the standard composite formula, combining single-segment trapezoids with endpoints weighted once and interior points weighted twice."
      },
      {
        q: "The trapezoidal rule gives an exact result (zero error) when \\(f(x)\\) is:",
        options: ["Cubic", "Quadratic", "Any transcendental function", "Linear (degree \\(\\le 1\\))"],
        ans: "Linear (degree \\(\\le 1\\))",
        reason: "Since the rule approximates the curve with straight line segments, it reproduces a truly linear function without any error."
      },
      {
        q: "The error order of the trapezoidal rule is:",
        options: ["\\(O(h^2)\\)", "\\(O(h^3)\\)", "\\(O(h^4)\\)", "\\(O(h)\\)"],
        ans: "\\(O(h^2)\\)",
        reason: "The dominant error term scales with \\(h^2\\), the trademark rate for the trapezoidal rule."
      },
      {
        q: "For the composite trapezoidal rule, the number of subintervals \\(n\\):",
        options: ["Must be odd", "Must be a multiple of 4", "Can be any positive integer", "Must be even"],
        ans: "Can be any positive integer",
        reason: "Unlike Simpson's rule, dividing into trapezoids works for any number of subintervals, even or odd."
      },
      {
        q: "To increase the accuracy of the trapezoidal rule approximation, one should:",
        options: ["Decrease \\(h\\) (use more subintervals)", "Increase \\(h\\) (use fewer subintervals)", "Keep \\(n = 1\\)", "Use a larger interval \\([a,b]\\)"],
        ans: "Decrease \\(h\\) (use more subintervals)",
        reason: "Since the error shrinks with \\(h^2\\), using a smaller step size (more subintervals) directly improves accuracy."
      },
      {
        q: "The trapezoidal rule is also known as the:",
        options: ["Bisection rule", "Simpson's rule", "Newton–Raphson rule", "Multiple-segment (composite) trapezoidal rule"],
        ans: "Multiple-segment (composite) trapezoidal rule",
        reason: "This composite (multi-segment) version, applying the rule repeatedly across subintervals, is the standard full name."
      },
      {
        q: "As the number of subintervals \\(n \\to \\infty\\), the trapezoidal approximation of a definite integral:",
        options: ["Converges to the exact value of the integral", "Becomes undefined", "Diverges", "Stays constant"],
        ans: "Converges to the exact value of the integral",
        reason: "As \\(n\\to\\infty\\) and \\(h\\to0\\), the sum of ever-thinner trapezoids approaches the exact area under the curve."
      },
      {
        q: "The trapezoidal rule error term involves:",
        options: ["\\(f'''(\\xi)\\)", "\\(f^{(4)}(\\xi)\\)", "\\(f''(\\xi)\\)", "\\(f'(\\xi)\\)"],
        ans: "\\(f''(\\xi)\\)",
        reason: "The trapezoidal error formula depends on the second derivative \\(f''(\\xi)\\) at some point \\(\\xi\\) in the interval."
      },
      {
        q: "In the composite trapezoidal formula, each interior ordinate \\(y_1, \\ldots, y_{n-1}\\) is given a weight of:",
        options: ["1", "2", "3", "4"],
        ans: "2",
        reason: "In the composite sum, each interior point is shared between two adjacent trapezoids, so it's counted (weighted) twice."
      },
      {
        q: "Simpson's \\(\\frac{1}{3}\\) rule approximates the integrand on each pair of subintervals by fitting a:",
        options: ["Straight line", "Quadratic (second-degree) polynomial", "Exponential curve", "Cubic polynomial"],
        ans: "Quadratic (second-degree) polynomial",
        reason: "Simpson's rule fits a parabola (quadratic) through each set of three consecutive points, unlike the straight-line segments of the trapezoidal rule."
      },
      {
        q: "For Simpson's \\(\\frac{1}{3}\\) rule to be applied, the number of subintervals \\(n\\) must be:",
        options: ["A perfect square", "Prime", "Even", "Odd"],
        ans: "Even",
        reason: "Since points are grouped in pairs of subintervals to fit each quadratic, the total number of subintervals must be even."
      },
      {
        q: "The composite Simpson's \\(\\frac{1}{3}\\) rule formula is:",
        options: ["\\(\\dfrac{h}{3}(y_0-y_n)\\)", "\\(h[y_0+y_n]\\)", "\\(\\dfrac{h}{3}[(y_0+y_n)+4(y_1+y_3+\\cdots)+2(y_2+y_4+\\cdots)]\\)", "\\(\\dfrac{h}{2}[(y_0+y_n)+2(y_1+\\cdots)]\\)"],
        ans: "\\(\\dfrac{h}{3}[(y_0+y_n)+4(y_1+y_3+\\cdots)+2(y_2+y_4+\\cdots)]\\)",
        reason: "This is the standard composite Simpson's formula, alternating weights of 4 and 2 for odd- and even-indexed interior points."
      },
      {
        q: "Simpson's \\(\\frac{1}{3}\\) rule gives exact results for polynomials of degree up to:",
        options: ["5", "1", "3", "2"],
        ans: "3",
        reason: "Because it fits quadratics rather than lines, Simpson's rule integrates any cubic polynomial exactly, one degree higher than its fitting polynomial would suggest."
      },
      {
        q: "The error order of Simpson's \\(\\frac{1}{3}\\) rule is:",
        options: ["\\(O(h^4)\\)", "\\(O(h^2)\\)", "\\(O(h^3)\\)", "\\(O(h)\\)"],
        ans: "\\(O(h^4)\\)",
        reason: "The dominant error term scales with \\(h^4\\), a much faster decay than the trapezoidal rule's \\(h^2\\)."
      },
      {
        q: "Compared with the trapezoidal rule, Simpson's \\(\\frac{1}{3}\\) rule is generally:",
        options: ["Less accurate", "More accurate for smooth functions", "Exactly the same accuracy", "Only usable for straight lines"],
        ans: "More accurate for smooth functions",
        reason: "Fitting curves (parabolas) rather than straight lines lets Simpson's rule track smooth curvature more closely, reducing error for the same n."
      },
      {
        q: "In the composite Simpson's rule, the odd-indexed ordinates \\((y_1, y_3, y_5, \\ldots)\\) are given a weight of:",
        options: ["1", "2", "4", "3"],
        ans: "4",
        reason: "In the composite formula, the odd-indexed points sit at the midpoint of each quadratic segment and receive weight 4."
      },
      {
        q: "In the composite Simpson's rule, the even-indexed interior ordinates \\((y_2, y_4, \\ldots)\\) are given a weight of:",
        options: ["3", "1", "4", "2"],
        ans: "2",
        reason: "The even-indexed interior points sit at the shared boundary between segments and receive weight 2."
      },
      {
        q: "If \\(n\\) is odd, can the composite Simpson's \\(\\frac{1}{3}\\) rule be applied directly?",
        options: ["Only for trigonometric functions", "No, \\(n\\) must be even", "Yes, always", "Only if \\(n=1\\)"],
        ans: "No, \\(n\\) must be even",
        reason: "Since subintervals must be grouped in pairs to fit each quadratic piece, an odd n leaves one subinterval unpaired, so the rule cannot be applied directly."
      },
      {
        q: "The general process of computing \\(\\displaystyle\\int_a^b y\\,dx\\) from tabulated values is called:",
        options: ["Interpolation only", "Differentiation", "Extrapolation", "Quadrature"],
        ans: "Quadrature",
        reason: "This general process of estimating a definite integral from tabulated or discrete data is known as numerical quadrature."
      },
      {
        q: "In Simpson's \\(\\frac{1}{3}\\) rule, the multiplying factor outside the bracket is:",
        options: ["\\(\\dfrac{h}{3}\\)", "\\(h\\)", "\\(\\dfrac{2h}{3}\\)", "\\(\\dfrac{h}{2}\\)"],
        ans: "\\(\\dfrac{h}{3}\\)",
        reason: "In the composite formula \\(\\dfrac{h}3[\\ldots]\\), the multiplying factor outside the bracket is \\(h/3\\)."
      },
      {
        q: "Simpson's \\(\\frac{1}{3}\\) rule fits an interpolating polynomial of degree:",
        options: ["3", "4", "2", "1"],
        ans: "2",
        reason: "Since three points determine a unique quadratic (degree-2) polynomial, that's exactly what Simpson's rule fits."
      },
      {
        q: "Which numerical root-finding methods require two initial guesses with \\(f(x_0)\\cdot f(x_1) < 0\\)?",
        options: ["Newton–Raphson only", "Trapezoidal rule", "Bisection and Regula Falsi", "Simpson's rule"],
        ans: "Bisection and Regula Falsi",
        reason: "Both bisection and Regula Falsi are bracketing methods that need two initial guesses straddling a sign change."
      },
      {
        q: "Which numerical root-finding method requires only a single initial guess?",
        options: ["Bisection", "Regula Falsi", "Both bisection and Regula Falsi", "Newton–Raphson"],
        ans: "Newton–Raphson",
        reason: "Newton–Raphson needs only a single starting estimate, from which it iterates using local slope information."
      },
      {
        q: "Which methods do NOT require computing a derivative?",
        options: ["Bisection and Regula Falsi", "Newton–Raphson only", "Only Newton–Raphson and Bisection", "None of these methods"],
        ans: "Bisection and Regula Falsi",
        reason: "Both bisection and Regula Falsi rely purely on function values and sign changes, needing no derivative at all."
      },
      {
        q: "Near a simple root, which method generally converges fastest?",
        options: ["Bisection", "Regula Falsi", "All converge at equal speed", "Newton–Raphson (quadratic convergence)"],
        ans: "Newton–Raphson (quadratic convergence)",
        reason: "Its quadratic convergence rate means the error shrinks dramatically faster per step than the linear rates of bisection or Regula Falsi."
      },
      {
        q: "All iterative root-finding methods (bisection, Regula Falsi, Newton–Raphson) share the common feature of being:",
        options: ["Direct (one-step) methods", "Applicable only to linear equations", "Successive approximation methods", "Exact methods"],
        ans: "Successive approximation methods",
        reason: "All three methods repeatedly refine an initial estimate step by step rather than solving for the root directly in one step."
      },
      {
        q: "Advancing computer technology benefits numerical methods mainly by providing:",
        options: ["Slower processors", "Faster hardware and improved algorithms (e.g. GPUs, parallel computing)", "Manual calculation tools", "Fewer floating point operations"],
        ans: "Faster hardware and improved algorithms (e.g. GPUs, parallel computing)",
        reason: "Modern hardware advances, including GPUs and parallel processing, let numerical methods handle larger, more complex problems efficiently."
      },
      {
        q: "Numerical methods are valuable because they bridge the gap between:",
        options: ["Bisection and Newton's method only", "Algebra and geometry", "Two unrelated numerical values", "Theoretical mathematics and practical (real-world) applications"],
        ans: "Theoretical mathematics and practical (real-world) applications",
        reason: "Numerical methods let real-world problems, which often lack tidy closed-form solutions, still be solved usefully in practice."
      },
      {
        q: "Handling complex systems such as partial differential equations and finite element analysis mainly requires:",
        options: ["Only the quadratic formula", "Numerical methods", "Only graphical methods", "Simple algebraic formulas"],
        ans: "Numerical methods",
        reason: "Systems this complex generally have no closed-form solution, making numerical techniques essential for practical analysis."
      },
      {
        q: "In Newton–Raphson's method, if \\(f'(x_0) = 0\\) exactly, the next iterate \\(x_1\\):",
        options: ["Is undefined (division by zero)", "Equals the exact root", "Equals 0", "Is always equal to \\(x_0\\)"],
        ans: "Is undefined (division by zero)",
        reason: "With \\(f'(x_0)=0\\), the update formula divides by zero, leaving \\(x_1\\) undefined."
      },
      {
        q: "The main reason iterative numerical methods are “self-correcting” is that:",
        options: ["They require no starting guess at all", "Each new approximation uses the error from all previous steps combined", "Each iteration uses the current approximation to generate a (hopefully) better one", "They are only used once"],
        ans: "Each iteration uses the current approximation to generate a (hopefully) better one",
        reason: "Each new approximation is generated purely from the immediately preceding one, refining the estimate step by step."
      },
      {
        q: "Which pair of methods are both classified as bracketing methods (root always trapped between two values)?",
        options: ["Bisection and Regula Falsi", "Newton–Raphson and Bisection", "Newton–Raphson and Secant", "Trapezoidal and Simpson's"],
        ans: "Bisection and Regula Falsi",
        reason: "Both bisection and Regula Falsi always keep the root trapped between two bracketing values throughout the iteration."
      },
      {
        stimulus: "Bisection is applied to \\(f(x)=x^2-5\\) on \\([2,3]\\) (root \\(=\\sqrt{5}\\approx2.236\\)).<table><tr><th>Iteration</th><th>Interval</th><th>Midpoint</th></tr><tr><td>1</td><td>\\([2,3]\\)</td><td>2.5</td></tr><tr><td>2</td><td>\\([2,2.5]\\)</td><td>2.25</td></tr><tr><td>3</td><td>\\([2,2.25]\\)</td><td>2.125</td></tr></table>",
        q: "\\(f(2.5) = (2.5)^2-5 = 1.25\\), which is positive. Since \\(f(2)<0\\), the root for iteration 2 lies in:",
        options: ["\\([2.5,3]\\)", "\\([2.5,2.75]\\)", "\\([2,2.5]\\)", "\\([2,3]\\)"],
        ans: "\\([2,2.5]\\)",
        reason: "Since \\(f(2)<0\\) and \\(f(2.5)>0\\), the sign change occurs between them, so the root lies in \\([2,2.5]\\)."
      },
      {
        stimulus: "Bisection is applied to \\(f(x)=x^2-5\\) on \\([2,3]\\) (root \\(=\\sqrt{5}\\approx2.236\\)).<table><tr><th>Iteration</th><th>Interval</th><th>Midpoint</th></tr><tr><td>1</td><td>\\([2,3]\\)</td><td>2.5</td></tr><tr><td>2</td><td>\\([2,2.5]\\)</td><td>2.25</td></tr><tr><td>3</td><td>\\([2,2.25]\\)</td><td>2.125</td></tr></table>",
        q: "Using the table, \\(f(2.25) = (2.25)^2-5 = -0.0625\\), which is negative. So the root for iteration 3 lies in:",
        options: ["\\([2,2.25]\\)", "\\([2.25,2.5]\\)", "\\([2.25,3]\\)", "\\([2,2.5]\\)"],
        ans: "\\([2,2.25]\\)",
        reason: "Recomputing carefully, \\(f(2.25)=(2.25)^2-5=0.0625>0\\); since \\(f(2)<0\\) and \\(f(2.25)>0\\), the sign change occurs between them, placing the root in \\([2,2.25]\\)."
      },
      {
        stimulus: "Bisection is applied to \\(f(x)=x^2-5\\) on \\([2,3]\\) (root \\(=\\sqrt{5}\\approx2.236\\)).<table><tr><th>Iteration</th><th>Interval</th><th>Midpoint</th></tr><tr><td>1</td><td>\\([2,3]\\)</td><td>2.5</td></tr><tr><td>2</td><td>\\([2,2.5]\\)</td><td>2.25</td></tr><tr><td>3</td><td>\\([2,2.25]\\)</td><td>2.125</td></tr></table>",
        q: "After iteration 3 (midpoint 2.125), the interval width is:",
        options: ["0.25", "0.0625", "0.5", "0.125"],
        ans: "0.125",
        reason: "Each iteration halves the interval width; after 3 halvings from the original width 1, the width is \\(1/2^3=0.125\\)."
      },
      {
        stimulus: "Bisection is applied to \\(f(x)=x^2-5\\) on \\([2,3]\\) (root \\(=\\sqrt{5}\\approx2.236\\)).<table><tr><th>Iteration</th><th>Interval</th><th>Midpoint</th></tr><tr><td>1</td><td>\\([2,3]\\)</td><td>2.5</td></tr><tr><td>2</td><td>\\([2,2.5]\\)</td><td>2.25</td></tr><tr><td>3</td><td>\\([2,2.25]\\)</td><td>2.125</td></tr></table>",
        q: "Based on the pattern in the table, after how many total iterations does the interval width first drop below 0.01 (starting width 1)?",
        options: ["8", "5", "6", "7"],
        ans: "7",
        reason: "Solving \\(1/2^n<0.01\\) gives \\(2^n>100\\), and the smallest such integer is \\(n=7\\) (since \\(2^6=64\\) is still too small)."
      },
      {
        stimulus: "Newton–Raphson is used to approximate \\(\\sqrt{7}\\) using \\(f(x)=x^2-7\\), \\(x_{n+1}=\\frac{1}{2}\\left(x_n+\\frac{7}{x_n}\\right)\\), starting at \\(x_0=3\\).<table><tr><th>n</th><th>\\(x_n\\)</th></tr><tr><td>0</td><td>3</td></tr><tr><td>1</td><td>2.6667</td></tr></table>",
        q: "Using the table's \\(x_0=3\\), the value \\(x_1 = \\frac{1}{2}\\left(3+\\frac{7}{3}\\right)\\) is closest to:",
        options: ["2.75", "2.5", "2.8", "2.6667"],
        ans: "2.6667",
        reason: "\\(x_1=\\frac12\\left(3+\\frac73\\right)=\\frac12(5.3333)=2.6667\\)."
      },
      {
        stimulus: "Newton–Raphson is used to approximate \\(\\sqrt{7}\\) using \\(f(x)=x^2-7\\), \\(x_{n+1}=\\frac{1}{2}\\left(x_n+\\frac{7}{x_n}\\right)\\), starting at \\(x_0=3\\).<table><tr><th>n</th><th>\\(x_n\\)</th></tr><tr><td>0</td><td>3</td></tr><tr><td>1</td><td>2.6667</td></tr></table>",
        q: "Continuing from \\(x_1 \\approx 2.6667\\), the next iterate \\(x_2 = \\frac{1}{2}\\left(2.6667+\\frac{7}{2.6667}\\right)\\) is closest to:",
        options: ["2.60", "2.65", "2.6458", "2.70"],
        ans: "2.6458",
        reason: "\\(x_2=\\frac12\\left(2.6667+\\frac7{2.6667}\\right)=\\frac12(2.6667+2.625)=\\frac12(5.2917)=2.6458\\)."
      },
      {
        stimulus: "Newton–Raphson is used to approximate \\(\\sqrt{7}\\) using \\(f(x)=x^2-7\\), \\(x_{n+1}=\\frac{1}{2}\\left(x_n+\\frac{7}{x_n}\\right)\\), starting at \\(x_0=3\\).<table><tr><th>n</th><th>\\(x_n\\)</th></tr><tr><td>0</td><td>3</td></tr><tr><td>1</td><td>2.6667</td></tr></table>",
        q: "Since \\(\\sqrt{7}\\approx2.6458\\), how many Newton–Raphson iterations (from \\(x_0=3\\)) are needed to match \\(\\sqrt{7}\\) to 4 decimal places, based on the table's rapid convergence?",
        options: ["2", "1", "5", "10"],
        ans: "2",
        reason: "The table shows the iterates already agree with \\(\\sqrt7\\approx2.6458\\) to four decimal places after just 2 steps."
      },
      {
        stimulus: "Newton–Raphson is used to approximate \\(\\sqrt{7}\\) using \\(f(x)=x^2-7\\), \\(x_{n+1}=\\frac{1}{2}\\left(x_n+\\frac{7}{x_n}\\right)\\), starting at \\(x_0=3\\).<table><tr><th>n</th><th>\\(x_n\\)</th></tr><tr><td>0</td><td>3</td></tr><tr><td>1</td><td>2.6667</td></tr></table>",
        q: "This rapid approach to the true root in very few steps demonstrates that Newton–Raphson's convergence order is:",
        options: ["Sublinear", "Linear", "Zero", "Quadratic"],
        ans: "Quadratic",
        reason: "This dramatic speed-up in only a couple of steps is the hallmark of Newton–Raphson's quadratic convergence."
      },
      {
        stimulus: "A table of values for \\(f(x)=\\dfrac{1}{1+x^2}\\) is used to approximate \\(\\displaystyle\\int_0^1 f(x)\\,dx\\) with \\(n=4\\), \\(h=0.25\\):<table><tr><th>x</th><th>0</th><th>0.25</th><th>0.5</th><th>0.75</th><th>1</th></tr><tr><th>y</th><th>1</th><th>0.9412</th><th>0.8</th><th>0.64</th><th>0.5</th></tr></table>",
        q: "Using the composite trapezoidal rule with the table's values, the approximation is closest to:",
        options: ["0.785", "0.783", "0.750", "0.800"],
        ans: "0.783",
        reason: "\\(\\dfrac{0.25}2\\left[1+2(0.9412+0.8+0.64)+0.5\\right]=0.125(6.2624)\\approx0.783\\)."
      },
      {
        stimulus: "A table of values for \\(f(x)=\\dfrac{1}{1+x^2}\\) is used to approximate \\(\\displaystyle\\int_0^1 f(x)\\,dx\\) with \\(n=4\\), \\(h=0.25\\):<table><tr><th>x</th><th>0</th><th>0.25</th><th>0.5</th><th>0.75</th><th>1</th></tr><tr><th>y</th><th>1</th><th>0.9412</th><th>0.8</th><th>0.64</th><th>0.5</th></tr></table>",
        q: "Using the composite Simpson's \\(\\frac{1}{3}\\) rule with the table's values, the approximation is closest to:",
        options: ["0.800", "0.7854", "0.760", "0.783"],
        ans: "0.7854",
        reason: "\\(\\dfrac{0.25}3\\left[1+4(0.9412+0.64)+2(0.8)+0.5\\right]\\approx0.08333(9.4248)\\approx0.7854\\)."
      },
      {
        stimulus: "A table of values for \\(f(x)=\\dfrac{1}{1+x^2}\\) is used to approximate \\(\\displaystyle\\int_0^1 f(x)\\,dx\\) with \\(n=4\\), \\(h=0.25\\):<table><tr><th>x</th><th>0</th><th>0.25</th><th>0.5</th><th>0.75</th><th>1</th></tr><tr><th>y</th><th>1</th><th>0.9412</th><th>0.8</th><th>0.64</th><th>0.5</th></tr></table>",
        q: "The exact value of \\(\\displaystyle\\int_0^1 \\frac{1}{1+x^2}\\,dx = \\tan^{-1}(1)-\\tan^{-1}(0) = \\frac{\\pi}{4} \\approx 0.7854\\). Which rule's approximation from the table is closer to this exact value?",
        options: ["Simpson's \\(\\frac{1}{3}\\)", "Neither is close", "Trapezoidal", "Both equally close"],
        ans: "Simpson's \\(\\frac{1}{3}\\)",
        reason: "Simpson's result (0.7854) matches the exact value \\(\\pi/4\\approx0.7854\\) far more closely than the trapezoidal result (0.783)."
      },
      {
        stimulus: "A table of values for \\(f(x)=\\dfrac{1}{1+x^2}\\) is used to approximate \\(\\displaystyle\\int_0^1 f(x)\\,dx\\) with \\(n=4\\), \\(h=0.25\\):<table><tr><th>x</th><th>0</th><th>0.25</th><th>0.5</th><th>0.75</th><th>1</th></tr><tr><th>y</th><th>1</th><th>0.9412</th><th>0.8</th><th>0.64</th><th>0.5</th></tr></table>",
        q: "This table illustrates that for a smooth curved function, Simpson's rule is generally more accurate than the trapezoidal rule because it fits each pair of subintervals with a:",
        options: ["Straight line", "Constant value", "Quadratic curve", "Cubic curve"],
        ans: "Quadratic curve",
        reason: "Fitting a quadratic curve through each set of three points captures the function's curvature better than a straight line, which is why Simpson's rule is more accurate here."
      }
    ];
  }
});
