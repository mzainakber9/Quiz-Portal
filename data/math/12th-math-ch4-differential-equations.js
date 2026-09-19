// Class 12 Math -- Chapter 4: Differential Equations
// Converted from the 200-question Class 12 MCQ bank (chapters 4-5), with
// short explanations added for every question.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch4",
  label: "Chapter 4: Differential Equations",
  order: 4,
  questions: function () {
    return [
      {
        q: "The order of a differential equation is defined as:",
        options: ["The power of the highest order derivative", "The order of the highest order derivative present in the equation", "The number of arbitrary constants in the solution", "The degree of the dependent variable"],
        ans: "The order of the highest order derivative present in the equation",
        reason: "The order of a differential equation is, by definition, the order of its highest derivative."
      },
      {
        q: "The degree of a differential equation (when it is a polynomial equation in derivatives) is defined as:",
        options: ["The order of the lowest derivative present", "The power of the highest order derivative present, after clearing radicals and fractions", "The total number of terms in the equation", "The value of the independent variable"],
        ans: "The power of the highest order derivative present, after clearing radicals and fractions",
        reason: "The degree is the power of the highest-order derivative once the equation is free of radicals and fractions in the derivatives."
      },
      {
        q: "Order and degree of a differential equation (when defined) are always:",
        options: ["Negative integers", "Positive integers", "Rational numbers only", "Any real numbers"],
        ans: "Positive integers",
        reason: "By definition, both order and degree (when they exist) must be positive integers."
      },
      {
        q: "Find the order of the differential equation \\(\\dfrac{dy}{dx}-2x=1\\).",
        options: ["0", "1", "2", "3"],
        ans: "1",
        reason: "The highest derivative present is the first derivative, so the order is 1."
      },
      {
        q: "Find the order of the differential equation \\(x\\dfrac{d^2y}{dx^2}+\\dfrac{dy}{dx}-5=0\\).",
        options: ["1", "2", "3", "4"],
        ans: "2",
        reason: "The highest derivative present is the second derivative, so the order is 2."
      },
      {
        q: "Find the degree of the differential equation \\(\\dfrac{dy}{dx}-3=0\\).",
        options: ["0", "1", "2", "3"],
        ans: "1",
        reason: "The derivative \\(dy/dx\\) appears to the first power, so the degree is 1."
      },
      {
        q: "Find the degree of the differential equation \\((y'')^2+6y'=9\\).",
        options: ["1", "2", "3", "4"],
        ans: "2",
        reason: "The highest derivative \\(y''\\) appears squared, so the degree is 2."
      },
      {
        q: "Find the order and degree of \\((y'')^3-xy'+y=0\\).",
        options: ["order 2, degree 3", "order 3, degree 2", "order 2, degree 2", "order 3, degree 3"],
        ans: "order 2, degree 3",
        reason: "The highest derivative is \\(y''\\) (order 2), raised to the third power (degree 3)."
      },
      {
        q: "Determine the order and degree of \\(x\\left(\\dfrac{d^3y}{dx^3}\\right)^2+x\\dfrac{d^2y}{dx^2}-\\dfrac{dy}{dx}+y=1\\).",
        options: ["order 3, degree 1", "order 2, degree 3", "order 3, degree 2", "order 2, degree 2"],
        ans: "order 3, degree 2",
        reason: "The highest derivative is the third derivative (order 3), and it appears squared, giving degree 2."
      },
      {
        q: "Determine the order and degree of \\(\\left(\\dfrac{d^2y}{dx^2}\\right)^2+x\\left(\\dfrac{dy}{dx}\\right)+y=x+1\\).",
        options: ["order 1, degree 2", "order 2, degree 2", "order 2, degree 1", "order 1, degree 1"],
        ans: "order 2, degree 2",
        reason: "The highest derivative is the second derivative (order 2), appearing squared (degree 2)."
      },
      {
        q: "Find the order and degree of \\(\\dfrac{d^2y}{dx^2}-3\\dfrac{dy}{dx}+x=0\\).",
        options: ["order 2, degree 1", "order 1, degree 2", "order 2, degree 2", "order 1, degree 1"],
        ans: "order 2, degree 1",
        reason: "The highest derivative is the second derivative (order 2), appearing to the first power (degree 1)."
      },
      {
        q: "For the equation \\(y'-\\log(y')+3=0\\), the degree is:",
        options: ["1", "2", "3", "not defined"],
        ans: "not defined",
        reason: "Since \\(y'\\) appears inside a logarithm, the equation isn't a polynomial in derivatives, so degree is not defined."
      },
      {
        q: "Eliminating the two arbitrary constants \\(A\\) and \\(B\\) from \\(y=A\\sin(2x-B)\\) produces a differential equation of order:",
        options: ["0", "1", "2", "3"],
        ans: "2",
        reason: "Two arbitrary constants require differentiating twice to eliminate them, producing an order-2 equation."
      },
      {
        q: "An equation containing partial derivatives of the dependent variable with respect to more than one independent variable is called:",
        options: ["an ODE", "a PDE", "a linear DE", "a homogeneous DE"],
        ans: "a PDE",
        reason: "An equation involving partial derivatives with respect to more than one independent variable is, by definition, a PDE."
      },
      {
        q: "An \\(n^{\\text{th}}\\) order linear differential equation has the general form:",
        options: ["\\(a_n(x)\\dfrac{d^ny}{dx^n}+\\cdots+a_1(x)\\dfrac{dy}{dx}+a_0(x)y=f(x)\\)", "\\(y^{(n)}=f(x,y)\\), with no restriction on coefficients", "\\(\\dfrac{dy}{dx^n}=f(x)\\)", "\\(y=f(x)+c\\)"],
        ans: "\\(a_n(x)\\dfrac{d^ny}{dx^n}+\\cdots+a_1(x)\\dfrac{dy}{dx}+a_0(x)y=f(x)\\)",
        reason: "This is the standard general form of a linear differential equation of order n, with variable coefficients \\(a_i(x)\\)."
      },
      {
        q: "A differential equation is called linear if the dependent variable and all its derivatives:",
        options: ["occur to the second power", "occur to the power one and are not multiplied together", "occur only inside trigonometric functions", "appear only in denominators"],
        ans: "occur to the power one and are not multiplied together",
        reason: "Linearity requires the dependent variable and every derivative to appear only to the first power and never multiplied together."
      },
      {
        q: "Which of the following is a nonlinear differential equation?",
        options: ["\\(\\dfrac{dy}{dx}=x+y\\)", "\\(\\dfrac{d^2y}{dx^2}+3\\dfrac{dy}{dx}+y=1\\)", "\\(\\left(\\dfrac{d^3y}{dx^3}\\right)^2+x\\dfrac{d^2y}{dx^2}-\\dfrac{dy}{dx}+2x=5\\)", "\\(\\dfrac{dy}{dx}=x\\)"],
        ans: "\\(\\left(\\dfrac{d^3y}{dx^3}\\right)^2+x\\dfrac{d^2y}{dx^2}-\\dfrac{dy}{dx}+2x=5\\)",
        reason: "This equation has the third derivative raised to the second power, violating the 'power one' requirement for linearity."
      },
      {
        q: "The differential equation \\(y^2(x-3)\\dfrac{dy}{dx}=2xy^2\\) can be reduced to a linear equation by dividing both sides by:",
        options: ["\\(x\\)", "\\(y\\)", "\\(y^2\\)", "\\(x^2\\)"],
        ans: "\\(y^2\\)",
        reason: "Dividing both sides by \\(y^2\\) cancels the nonlinear \\(y^2\\) factor, leaving a linear equation in y."
      },
      {
        q: "Which pair correctly classifies \\(\\dfrac{d^2y}{dx^2}+12xy=0\\)?",
        options: ["Linear, order 2", "Nonlinear, order 2", "Linear, order 1", "Nonlinear, order 1"],
        ans: "Linear, order 2",
        reason: "y and its second derivative both appear to the first power with no products between them, and the highest derivative is second order."
      },
      {
        q: "Which of the following differential equations is linear?",
        options: ["\\(\\dfrac{d^2y}{dx^2}-5\\dfrac{dy}{dx}+11=y\\)", "\\(xy''+y(y')^2=0\\)", "\\(\\dfrac{dy}{dx^2}+y=x\\)", "\\(y''\\cdot y'=x\\)"],
        ans: "\\(\\dfrac{d^2y}{dx^2}-5\\dfrac{dy}{dx}+11=y\\)",
        reason: "This is the only option where y and its derivatives all appear to the first power without being multiplied together."
      },
      {
        q: "A function that satisfies a differential equation identically over an interval is called its:",
        options: ["root", "solution", "domain", "degree"],
        ans: "solution",
        reason: "A function that identically satisfies the differential equation on an interval is, by definition, called a solution."
      },
      {
        q: "The general solution of a differential equation of order \\(n\\) contains:",
        options: ["exactly one arbitrary constant", "\\(n\\) arbitrary constants", "\\(n+1\\) arbitrary constants", "no arbitrary constant"],
        ans: "\\(n\\) arbitrary constants",
        reason: "Each order of differentiation eliminated introduces one arbitrary constant, so an order-n equation's general solution has n constants."
      },
      {
        q: "A solution obtained by assigning particular values to the arbitrary constants of the general solution is called:",
        options: ["a singular solution", "a particular solution", "a trivial solution", "an implicit solution"],
        ans: "a particular solution",
        reason: "Assigning specific values to the arbitrary constants of the general solution yields a particular solution."
      },
      {
        q: "A solution of the form \\(y=f(x)\\) is called:",
        options: ["an implicit solution", "an explicit solution", "only a general solution", "a singular solution"],
        ans: "an explicit solution",
        reason: "A solution solved explicitly for y in terms of x is called an explicit solution."
      },
      {
        q: "A solution expressed in the form \\(f(x,y)=0\\) is called:",
        options: ["an explicit solution", "an implicit solution", "only a particular solution", "a trivial solution"],
        ans: "an implicit solution",
        reason: "A solution left in the form \\(f(x,y)=0\\), without solving for y, is called an implicit solution."
      },
      {
        q: "The solution \\(x^2+y^2=c\\) of \\(y\\dfrac{dy}{dx}+x=0\\) represents a family of:",
        options: ["parabolas", "straight lines", "circles centred at the origin", "ellipses"],
        ans: "circles centred at the origin",
        reason: "The equation \\(x^2+y^2=c\\) is the standard form of a circle centred at the origin, for varying c."
      },
      {
        q: "Which function is a solution of \\(2\\dfrac{dy}{dx}+y=0\\)?",
        options: ["\\(e^{x/2}\\)", "\\(e^{-x/2}\\)", "\\(e^{2x}\\)", "\\(e^{-2x}\\)"],
        ans: "\\(e^{-x/2}\\)",
        reason: "Separating and integrating \\(2\\frac{dy}{dx}=-y\\) gives \\(y=Ce^{-x/2}\\), matching this option."
      },
      {
        q: "Which value of \\(c\\) makes \\(y=10\\) a constant solution of \\(\\dfrac{dy}{dx}+cy=50\\)?",
        options: ["10", "6", "5", "4"],
        ans: "5",
        reason: "For the constant \\(y=10\\), \\(dy/dx=0\\), so \\(10c=50\\) gives \\(c=5\\)."
      },
      {
        q: "A first-order initial value problem (IVP) requires:",
        options: ["two conditions", "one condition to determine the arbitrary constant", "no condition", "three conditions"],
        ans: "one condition to determine the arbitrary constant",
        reason: "A first-order equation's general solution has one constant, so exactly one initial condition is needed to pin it down."
      },
      {
        q: "In solving an IVP \\(\\dfrac{dy}{dx}=f(x,y)\\), \\(y(x_0)=y_0\\), the constant of integration is found by:",
        options: ["differentiating the general solution twice", "substituting the initial condition into the general solution", "always setting \\(c=0\\)", "integrating the given condition"],
        ans: "substituting the initial condition into the general solution",
        reason: "The arbitrary constant is determined by plugging the given initial condition into the general solution and solving for it."
      },
      {
        q: "If \\(f(x,y)=\\dfrac{x^3-y^3}{x-y}\\), then \\(f(x,y)\\) is a homogeneous function of degree:",
        options: ["1", "2", "3", "4"],
        ans: "2",
        reason: "Replacing x, y with tx, ty and simplifying pulls out a factor of \\(t^2\\), so the function is homogeneous of degree 2."
      },
      {
        q: "A function \\(f(x,y)\\) is homogeneous of degree \\(n\\) if:",
        options: ["\\(f(x,y)=nf(x,y)\\)", "\\(f(tx,ty)=t^nf(x,y)\\)", "\\(f(tx,ty)=t+n\\)", "\\(f(x,y)=x^n+y^n\\) always"],
        ans: "\\(f(tx,ty)=t^nf(x,y)\\)",
        reason: "By definition, f is homogeneous of degree n if scaling both variables by t scales the output by \\(t^n\\)."
      },
      {
        q: "The relation \\(x^2+y^2-4=0\\) is an implicit solution of which differential equation?",
        options: ["\\(\\dfrac{dy}{dx}=\\dfrac{x}{y}\\)", "\\(\\dfrac{dy}{dx}=-\\dfrac{x}{y}\\)", "\\(\\dfrac{dy}{dx}=\\dfrac{y}{x}\\)", "\\(\\dfrac{dy}{dx}=-\\dfrac{y}{x}\\)"],
        ans: "\\(\\dfrac{dy}{dx}=-\\dfrac{x}{y}\\)",
        reason: "Differentiating \\(x^2+y^2-4=0\\) implicitly gives \\(2x+2yy'=0\\), so \\(y'=-x/y\\)."
      },
      {
        q: "For the implicit solution \\(x^2+y^2-4=0\\), the explicit branch \\(y=\\sqrt{4-x^2}\\) is valid on the interval:",
        options: ["\\((-\\infty,\\infty)\\)", "\\((-2,2)\\)", "\\([0,4]\\)", "\\((0,2)\\)"],
        ans: "\\((-2,2)\\)",
        reason: "The expression under the square root requires \\(4-x^2>0\\), giving the open interval \\((-2,2)\\)."
      },
      {
        q: "Eliminating the constants \\(A,B\\) from \\(y=A\\sin(2x-B)\\) gives the differential equation:",
        options: ["\\(\\dfrac{d^2y}{dx^2}+4y=0\\)", "\\(\\dfrac{d^2y}{dx^2}-4y=0\\)", "\\(\\dfrac{d^2y}{dx^2}+2y=0\\)", "\\(\\dfrac{d^2y}{dx^2}+y=0\\)"],
        ans: "\\(\\dfrac{d^2y}{dx^2}+4y=0\\)",
        reason: "Differentiating twice reintroduces \\(-4\\) times the original expression, giving \\(y''+4y=0\\)."
      },
      {
        q: "The differential equation obtained above physically represents:",
        options: ["motion with constant velocity", "acceleration varying as the distance from a fixed point (simple harmonic motion)", "zero acceleration", "constant displacement"],
        ans: "acceleration varying as the distance from a fixed point (simple harmonic motion)",
        reason: "An equation of the form \\(y''=-k^2y\\) describes acceleration proportional to (and opposing) displacement — simple harmonic motion."
      },
      {
        q: "Which of the following is an ordinary differential equation (ODE)?",
        options: ["\\(\\dfrac{\\partial z}{\\partial x}+\\dfrac{\\partial z}{\\partial y}=0\\)", "\\(\\dfrac{d^2y}{dx^2}-5\\dfrac{dy}{dx}+11=y\\)", "\\(\\dfrac{\\partial^2u}{\\partial x^2}=\\dfrac{\\partial^2u}{\\partial t^2}\\)", "none of these"],
        ans: "\\(\\dfrac{d^2y}{dx^2}-5\\dfrac{dy}{dx}+11=y\\)",
        reason: "This equation involves only ordinary derivatives with respect to a single variable, making it an ODE, unlike the other options with partial derivatives."
      },
      {
        q: "A differential equation that is not an ODE is classified as:",
        options: ["linear", "a PDE", "homogeneous", "separable"],
        ans: "a PDE",
        reason: "A differential equation that isn't ordinary (i.e. involves partial derivatives) is classified as a PDE."
      },
      {
        q: "If \\(y=8\\) is a constant solution of \\(\\dfrac{dy}{dx}+cy=32\\), then \\(c\\) equals:",
        options: ["8", "6", "5", "4"],
        ans: "4",
        reason: "For the constant \\(y=8\\), \\(dy/dx=0\\), so \\(8c=32\\) gives \\(c=4\\)."
      },
      {
        q: "A first order differential equation is called separable if it can be written in the form:",
        options: ["\\(\\dfrac{dy}{dx}=g(x)h(y)\\)", "\\(\\dfrac{dy}{dx}=x+y\\) only", "\\(y''+y=0\\)", "\\(f(tx,ty)=t^nf(x,y)\\)"],
        ans: "\\(\\dfrac{dy}{dx}=g(x)h(y)\\)",
        reason: "A first-order equation is separable exactly when it can be written as a product of a function of x and a function of y."
      },
      {
        q: "To solve a separable equation \\(\\dfrac{dy}{dx}=\\dfrac{f(x)}{g(y)}\\), the first step is to:",
        options: ["integrate directly without separating", "separate the variables so all \\(y\\)-terms are on one side and \\(x\\)-terms on the other", "differentiate again", "substitute \\(y=vx\\)"],
        ans: "separate the variables so all \\(y\\)-terms are on one side and \\(x\\)-terms on the other",
        reason: "Solving a separable equation begins by moving all y-terms to one side and all x-terms to the other."
      },
      {
        q: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^2}{y}\\).",
        options: ["\\(3y^2-2x^3=c\\)", "\\(2y^2-3x^3=c\\)", "\\(y^2+x^3=c\\)", "\\(3y^2+2x^3=c\\)"],
        ans: "\\(3y^2-2x^3=c\\)",
        reason: "Separating gives \\(y\\,dy=x^2dx\\); integrating both sides and clearing fractions gives \\(3y^2-2x^3=c\\)."
      },
      {
        q: "Solve \\((1+x)\\,dy-y\\,dx=0\\).",
        options: ["\\(y=c(x+1)\\)", "\\(y=c(x-1)\\)", "\\(y=\\dfrac{c}{x+1}\\)", "\\(y=cx\\)"],
        ans: "\\(y=c(x+1)\\)",
        reason: "Separating gives \\(\\frac{dy}{y}=\\frac{dx}{1+x}\\); integrating both sides gives \\(\\ln|y|=\\ln|x+1|+C\\), i.e. \\(y=c(x+1)\\)."
      },
      {
        q: "Solve \\(\\dfrac{dy}{dx}=\\dfrac1{x\\tan y}\\).",
        options: ["\\(x\\cos y=C\\)", "\\(x\\sin y=C\\)", "\\(y\\cos x=C\\)", "\\(x\\tan y=C\\)"],
        ans: "\\(x\\cos y=C\\)",
        reason: "Separating gives \\(\\tan y\\,dy=\\frac{dx}x\\); integrating gives \\(-\\ln|\\cos y|=\\ln|x|+c\\), which rearranges to \\(x\\cos y=C\\)."
      },
      {
        q: "Solve \\(\\dfrac{dy}{dx}=1+e^{2x}\\).",
        options: ["\\(y=x+\\dfrac12e^{2x}+c\\)", "\\(y=x+2e^{2x}+c\\)", "\\(y=\\dfrac12x^2+e^{2x}+c\\)", "\\(y=x-\\dfrac12e^{2x}+c\\)"],
        ans: "\\(y=x+\\dfrac12e^{2x}+c\\)",
        reason: "Integrating term by term: \\(\\int1\\,dx=x\\) and \\(\\int e^{2x}dx=\\frac12e^{2x}\\)."
      },
      {
        q: "Solve \\(y\\,dx+x\\,dy=0\\).",
        options: ["\\(xy=c\\)", "\\(y=cx\\)", "\\(y=\\dfrac{x}{c}\\)", "\\(x+y=c\\)"],
        ans: "\\(xy=c\\)",
        reason: "The left side is exactly the differential of the product xy, so \\(d(xy)=0\\) integrates to \\(xy=c\\)."
      },
      {
        q: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{y}{x}\\).",
        options: ["\\(y=cx\\)", "\\(xy=c\\)", "\\(y=x+c\\)", "\\(y=cx^2\\)"],
        ans: "\\(y=cx\\)",
        reason: "Separating and integrating \\(\\frac{dy}y=\\frac{dx}x\\) gives \\(\\ln|y|=\\ln|x|+c\\), i.e. \\(y=cx\\)."
      },
      {
        q: "Solve \\(\\sec^2x\\tan y\\,dx+\\sec^2y\\tan x\\,dy=0\\).",
        options: ["\\(\\tan x\\tan y=c\\)", "\\(\\tan x=c\\tan y\\)", "\\(\\tan x+\\tan y=c\\)", "\\(\\sec x\\sec y=c\\)"],
        ans: "\\(\\tan x\\tan y=c\\)",
        reason: "Dividing through by \\(\\tan x\\tan y\\) separates the variables into \\(\\frac{\\sec^2x}{\\tan x}dx=-\\frac{\\sec^2y}{\\tan y}dy\\), which integrates to \\(\\tan x\\tan y=c\\)."
      },
      {
        q: "The general solution of \\(y^2\\,dy=x^2\\,dx\\) is:",
        options: ["\\(y^3-x^3=c\\)", "\\(y^3+x^3=c\\)", "\\(y^2-x^2=c\\)", "\\(3y^3=2x^3+c\\)"],
        ans: "\\(y^3-x^3=c\\)",
        reason: "Integrating both sides gives \\(\\frac{y^3}3=\\frac{x^3}3+C\\), i.e. \\(y^3-x^3=c\\)."
      },
      {
        q: "Solve \\(\\cos x\\sin y\\,dx+\\sin x\\cos y\\,dy=0\\).",
        options: ["\\(\\sin x\\sin y=c\\)", "\\(\\cos x\\cos y=c\\)", "\\(\\tan x\\tan y=c\\)", "\\(\\sin x\\cos y=c\\)"],
        ans: "\\(\\sin x\\sin y=c\\)",
        reason: "Dividing by \\(\\sin x\\sin y\\) separates to \\(\\cot x\\,dx+\\cot y\\,dy=0\\), which integrates to \\(\\sin x\\sin y=c\\)."
      },
      {
        q: "Solve the IVP \\(y^2\\,dy-x^2\\,dx=0\\), \\(y(0)=1\\).",
        options: ["\\(y^3=x^3+1\\)", "\\(y^3=x^3-1\\)", "\\(y^3=1-x^3\\)", "\\(y=x+1\\)"],
        ans: "\\(y^3=x^3+1\\)",
        reason: "Integrating gives \\(y^3-x^3=C\\); applying \\(y(0)=1\\) gives \\(C=1\\), so \\(y^3=x^3+1\\)."
      },
      {
        q: "Solve \\(\\dfrac{dy}{dx}=e^{x-y}\\).",
        options: ["\\(e^y-e^x=c\\)", "\\(e^y+e^x=c\\)", "\\(e^{-y}-e^{-x}=c\\)", "\\(e^xe^y=c\\)"],
        ans: "\\(e^y-e^x=c\\)",
        reason: "Separating gives \\(e^y\\,dy=e^x\\,dx\\); integrating both sides gives \\(e^y=e^x+c\\), i.e. \\(e^y-e^x=c\\)."
      },
      {
        q: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{y-1}{x+1}\\).",
        options: ["\\(y-1=c(x+1)\\)", "\\(y+1=c(x+1)\\)", "\\(y-1=c(x-1)\\)", "\\((y-1)(x+1)=c\\)"],
        ans: "\\(y-1=c(x+1)\\)",
        reason: "Separating and integrating \\(\\frac{dy}{y-1}=\\frac{dx}{x+1}\\) gives \\(\\ln|y-1|=\\ln|x+1|+c\\), i.e. \\(y-1=c(x+1)\\)."
      },
      {
        q: "Solve the IVP \\(\\dfrac{dy}{dx}=\\dfrac{y}{x}\\), \\(y(1)=2\\).",
        options: ["\\(y=2x\\)", "\\(y=x+1\\)", "\\(y=x^2\\)", "\\(y=2x^2\\)"],
        ans: "\\(y=2x\\)",
        reason: "The general solution is \\(y=cx\\); applying \\(y(1)=2\\) gives \\(c=2\\), so \\(y=2x\\)."
      },
      {
        q: "Which of the following differential equations is NOT separable?",
        options: ["\\(\\dfrac{dy}{dx}=x^2y^2\\)", "\\(\\dfrac{dy}{dx}=\\dfrac{x}{y}\\)", "\\(\\dfrac{dy}{dx}=x+y\\)", "\\(\\dfrac{dy}{dx}=e^x\\cos y\\)"],
        ans: "\\(\\dfrac{dy}{dx}=x+y\\)",
        reason: "The right side \\(x+y\\) can't be factored into a product of a function of x alone and a function of y alone, so it isn't separable."
      },
      {
        q: "In solving a separable differential equation, after integrating both sides the constant of integration is usually written:",
        options: ["as two separate constants, one on each side", "as a single constant on one side", "it is omitted", "always as \\(c=0\\)"],
        ans: "as a single constant on one side",
        reason: "By convention, the two constants from each side's integration are combined into a single arbitrary constant on one side."
      },
      {
        q: "Solve the IVP \\(x\\,dy=y\\,dx\\), \\(y(1)=5\\).",
        options: ["\\(y=5x\\)", "\\(y=x+4\\)", "\\(y=5x^2\\)", "\\(xy=5\\)"],
        ans: "\\(y=5x\\)",
        reason: "The general solution \\(y=cx\\), together with \\(y(1)=5\\), gives \\(c=5\\), so \\(y=5x\\)."
      },
      {
        q: "The general solution of \\(\\dfrac{dy}{dx}=\\dfrac{-x}{y}\\) is:",
        options: ["\\(x^2+y^2=c\\)", "\\(x^2-y^2=c\\)", "\\(y^2-x^2=c\\)", "\\(xy=c\\)"],
        ans: "\\(x^2+y^2=c\\)",
        reason: "Separating gives \\(y\\,dy=-x\\,dx\\); integrating both sides gives \\(\\frac{y^2}2=-\\frac{x^2}2+C\\), i.e. \\(x^2+y^2=c\\)."
      },
      {
        q: "The family of curves \\(x^2+y^2=c\\) represents:",
        options: ["a family of parabolas with vertex at the origin", "a family of concentric circles centred at the origin", "a family of straight lines through the origin", "a family of hyperbolas"],
        ans: "a family of concentric circles centred at the origin",
        reason: "For each positive value of c, this equation traces a circle of radius \\(\\sqrt c\\) centred at the origin, so varying c gives concentric circles."
      },
      {
        q: "A first order differential equation \\(\\dfrac{dy}{dx}=f(x,y)\\) is called homogeneous if \\(f(x,y)\\) can be expressed purely as a function of:",
        options: ["\\(x\\) only", "\\(y\\) only", "\\(\\dfrac{y}{x}\\)", "\\(x+y\\) only"],
        ans: "\\(\\dfrac{y}{x}\\)",
        reason: "A first-order equation is homogeneous when the right side depends only on the ratio \\(y/x\\), not on x and y separately."
      },
      {
        q: "To solve a homogeneous differential equation, the standard substitution used is:",
        options: ["\\(y=vx\\) (i.e. \\(v=y/x\\))", "\\(y=v+x\\)", "\\(x=vy^2\\)", "\\(v=x+y\\)"],
        ans: "\\(y=vx\\) (i.e. \\(v=y/x\\))",
        reason: "The substitution \\(y=vx\\) (equivalently \\(v=y/x\\)) is the standard technique for reducing a homogeneous equation to a separable one."
      },
      {
        q: "After substituting \\(y=vx\\) in a homogeneous differential equation, \\(\\dfrac{dy}{dx}\\) becomes:",
        options: ["\\(v\\)", "\\(v+x\\dfrac{dv}{dx}\\)", "\\(x\\dfrac{dv}{dx}\\)", "\\(\\dfrac{v}{x}\\)"],
        ans: "\\(v+x\\dfrac{dv}{dx}\\)",
        reason: "Differentiating \\(y=vx\\) with respect to x using the product rule gives \\(\\frac{dy}{dx}=v+x\\frac{dv}{dx}\\)."
      },
      {
        q: "Check whether \\(f(x,y)=6xy^3-x^2y^2\\) is homogeneous, and if so find its degree.",
        options: ["degree 3", "degree 4", "degree 2", "not homogeneous"],
        ans: "degree 4",
        reason: "Both terms \\(xy^3\\) and \\(x^2y^2\\) have total degree 4, so the whole expression scales as \\(t^4\\) — homogeneous of degree 4."
      },
      {
        q: "Check whether \\(f(x,y)=x^2-y\\) is homogeneous.",
        options: ["homogeneous, degree 2", "homogeneous, degree 1", "not homogeneous", "homogeneous, degree 0"],
        ans: "not homogeneous",
        reason: "The two terms \\(x^2\\) and \\(y\\) have different total degrees (2 and 1), so the function is not homogeneous."
      },
      {
        q: "Check whether \\(f(x,y)=\\dfrac{2y^3}{x^2y}-7\\) is homogeneous, and find its degree.",
        options: ["degree 0", "degree 1", "degree 2", "not homogeneous"],
        ans: "degree 0",
        reason: "Simplifying gives \\(\\frac{2y^2}{x^2}-7\\); both the fractional term and the constant scale as \\(t^0\\), so the function is homogeneous of degree 0."
      },
      {
        q: "Solve the homogeneous equation \\((x-y)\\,dx+x\\,dy=0\\).",
        options: ["\\(y=x(c-\\ln|x|)\\)", "\\(y=x(c+\\ln|x|)\\)", "\\(y=c\\ln|x|\\)", "\\(y=cx^2\\)"],
        ans: "\\(y=x(c-\\ln|x|)\\)",
        reason: "Substituting \\(y=vx\\) reduces the equation to \\(x\\frac{dv}{dx}=-1\\), which integrates to \\(v=c-\\ln|x|\\), giving \\(y=x(c-\\ln|x|)\\)."
      },
      {
        q: "Solve \\(\\dfrac{dy}{dx}=\\dfrac{x^2+y^2}{2xy}\\).",
        options: ["\\(x^2-y^2=Cx\\)", "\\(x^2+y^2=Cx\\)", "\\(x^2-y^2=C\\)", "\\(y^2-x^2=Cx\\)"],
        ans: "\\(x^2-y^2=Cx\\)",
        reason: "Substituting \\(y=vx\\) and separating leads, after integrating, to \\(x^2-y^2=Cx\\)."
      },
      {
        q: "Solving the IVP \\(x\\dfrac{dy}{dx}=y+xe^{y/x}\\), \\(y(1)=1\\), leads to the implicit solution:",
        options: ["\\(e^{-1}-e^{-y/x}=\\ln x\\)", "\\(e^{-1}+e^{-y/x}=\\ln x\\)", "\\(e^{y/x}=\\ln x+e\\)", "\\(e^{-y/x}=\\ln x\\)"],
        ans: "\\(e^{-1}-e^{-y/x}=\\ln x\\)",
        reason: "The substitution \\(y=vx\\) reduces the equation to \\(e^{-v}dv=\\frac{dx}x\\); integrating and applying \\(y(1)=1\\) gives \\(e^{-1}-e^{-y/x}=\\ln x\\)."
      },
      {
        q: "Which of the following is a homogeneous function of degree 2?",
        options: ["\\(x^2+xy\\)", "\\(x^3+y\\)", "\\(x+y\\)", "\\(\\dfrac{x}{y}\\)"],
        ans: "\\(x^2+xy\\)",
        reason: "Both terms \\(x^2\\) and \\(xy\\) have total degree 2, so the expression is homogeneous of degree 2."
      },
      {
        q: "If \\(f(tx,ty)=t^0f(x,y)\\) for all \\(t\\), then \\(f(x,y)\\) is homogeneous of degree:",
        options: ["0", "1", "undefined", "2"],
        ans: "0",
        reason: "By definition, the exponent on t in the scaling relation is exactly the degree of homogeneity, here 0."
      },
      {
        q: "The differential equation \\(\\dfrac{dy}{dx}=\\dfrac{y-x}{x+y}\\) is:",
        options: ["separable", "homogeneous", "linear in \\(y\\) only", "not solvable"],
        ans: "homogeneous",
        reason: "Dividing numerator and denominator by x shows the right side depends only on the ratio \\(y/x\\), so the equation is homogeneous."
      },
      {
        q: "In the substitution \\(y=vx\\), the new variable \\(v\\) is a function of:",
        options: ["\\(y\\) only", "\\(x\\) only", "both \\(x\\) and \\(y\\) independently", "a constant"],
        ans: "\\(x\\) only",
        reason: "Since \\(v=y/x\\) is redefined in terms of the single independent variable x, v is treated as a function of x alone."
      },
      {
        q: "To solve \\(\\dfrac{dy}{dx}=\\dfrac{y^2+xy}{x^2}\\), the appropriate substitution is:",
        options: ["\\(y=vx\\)", "\\(x=vy\\)", "\\(y=v+x\\)", "\\(v=xy\\)"],
        ans: "\\(y=vx\\)",
        reason: "Dividing numerator and denominator by \\(x^2\\) shows the right side depends only on \\(v=y/x\\), so \\(y=vx\\) is the natural substitution."
      },
      {
        q: "A homogeneous differential equation of the form \\(M(x,y)\\,dx+N(x,y)\\,dy=0\\) requires that \\(M\\) and \\(N\\) be homogeneous functions of:",
        options: ["different degrees", "the same degree", "degree zero only", "degree one only"],
        ans: "the same degree",
        reason: "For the equation to reduce properly under \\(y=vx\\), both M and N must be homogeneous functions of the same degree."
      },
      {
        q: "Newton's law of cooling states that the rate of change of temperature of a body is proportional to:",
        options: ["the time elapsed", "the temperature difference between the body and its surroundings", "the mass of the body", "the specific heat of the body"],
        ans: "the temperature difference between the body and its surroundings",
        reason: "Newton's Law of Cooling states the rate of temperature change is proportional to the difference between the object's temperature and its surroundings."
      },
      {
        q: "The differential equation form of Newton's law of cooling is:",
        options: ["\\(\\dfrac{dT}{dt}=k(T-T_0)\\)", "\\(\\dfrac{dT}{dt}=kT_0\\)", "\\(\\dfrac{dT}{dt}=kt\\)", "\\(\\dfrac{dT}{dt}=k(T+T_0)\\)"],
        ans: "\\(\\dfrac{dT}{dt}=k(T-T_0)\\)",
        reason: "This is the standard differential-equation form of Newton's Law of Cooling."
      },
      {
        q: "If population growth is modelled by \\(\\dfrac{dP}{dt}\\propto P\\), then the general solution has the form:",
        options: ["\\(P=P_0e^{kt}\\)", "\\(P=P_0+kt\\)", "\\(P=kt^2\\)", "\\(P=P_0-kt\\)"],
        ans: "\\(P=P_0e^{kt}\\)",
        reason: "This proportionality is a separable equation whose solution is the standard exponential growth form \\(P=P_0e^{kt}\\)."
      },
      {
        q: "Radioactive substances disintegrate at a rate proportional to:",
        options: ["time", "the amount of substance present", "the surrounding temperature", "the square of the amount present"],
        ans: "the amount of substance present",
        reason: "Radioactive decay follows a rate proportional to the current amount of the substance, by definition."
      },
      {
        q: "The differential equation for radioactive decay is:",
        options: ["\\(\\dfrac{dN}{dt}=-kN\\)", "\\(\\dfrac{dN}{dt}=kN\\)", "\\(\\dfrac{dN}{dt}=k\\)", "\\(\\dfrac{dN}{dt}=-kt\\)"],
        ans: "\\(\\dfrac{dN}{dt}=-kN\\)",
        reason: "Since the substance is decreasing, the proportionality constant carries a negative sign: \\(dN/dt=-kN\\)."
      },
      {
        q: "For an object falling freely near Earth's surface (ignoring air resistance), Newton's second law gives:",
        options: ["\\(m\\dfrac{dv}{dt}=mg\\)", "\\(m\\dfrac{dv}{dt}=-mg\\)", "\\(\\dfrac{dv}{dt}=0\\)", "\\(m\\dfrac{dv}{dt}=g^2\\)"],
        ans: "\\(m\\dfrac{dv}{dt}=mg\\)",
        reason: "The only force acting is gravity (weight mg), so Newton's second law gives \\(m\\frac{dv}{dt}=mg\\)."
      },
      {
        q: "If the half-life of a radioactive substance is \\(T_{1/2}\\), the decay constant \\(k\\) satisfies:",
        options: ["\\(k=\\dfrac{\\ln2}{T_{1/2}}\\)", "\\(k=\\ln2\\times T_{1/2}\\)", "\\(k=\\dfrac2{T_{1/2}}\\)", "\\(k=T_{1/2}\\)"],
        ans: "\\(k=\\dfrac{\\ln2}{T_{1/2}}\\)",
        reason: "Setting the decayed amount to half the initial value in the exponential solution and solving for k gives \\(k=\\dfrac{\\ln2}{T_{1/2}}\\)."
      },
      {
        q: "Thomas Malthus's population model assumes the growth rate is proportional to:",
        options: ["the area of the region", "the total population present at that time", "time only", "a fixed birth-rate constant only"],
        ans: "the total population present at that time",
        reason: "The Malthusian model assumes population growth rate is proportional to the population size at that time."
      },
      {
        q: "In the pizza-cooling problem \\(T=T_0+ce^{kt}\\), how many given conditions are needed to determine both \\(c\\) and \\(k\\)?",
        options: ["one", "two", "three", "none"],
        ans: "two",
        reason: "Since the model has two unknown constants, c and k, two data points (conditions) are needed to determine them both."
      },
      {
        q: "For the falling object \\(m\\dfrac{dv}{dt}=mg\\), cancelling \\(m\\) from both sides gives:",
        options: ["\\(\\dfrac{dv}{dt}=g\\)", "\\(\\dfrac{dv}{dt}=mg\\)", "\\(\\dfrac{dv}{dt}=\\dfrac{g}{m}\\)", "\\(v=g\\)"],
        ans: "\\(\\dfrac{dv}{dt}=g\\)",
        reason: "Dividing both sides by m cancels the mass, leaving \\(dv/dt=g\\)."
      },
      {
        q: "Integrating \\(\\dfrac{dv}{dt}=g\\) with \\(v(0)=0\\) gives:",
        options: ["\\(v=gt\\)", "\\(v=gt+1\\)", "\\(v=\\dfrac{g}{t}\\)", "\\(v=g\\)"],
        ans: "\\(v=gt\\)",
        reason: "Integrating \\(dv/dt=g\\) gives \\(v=gt+C\\); applying \\(v(0)=0\\) gives \\(C=0\\), so \\(v=gt\\)."
      },
      {
        q: "Integrating \\(v=gt\\) again with \\(S(0)=0\\) gives the displacement:",
        options: ["\\(S=gt\\)", "\\(S=\\dfrac12gt^2\\)", "\\(S=gt^2\\)", "\\(S=\\dfrac13gt^3\\)"],
        ans: "\\(S=\\dfrac12gt^2\\)",
        reason: "Integrating \\(v=gt\\) gives \\(S=\\frac12gt^2+C\\); applying \\(S(0)=0\\) gives \\(C=0\\)."
      },
      {
        q: "In the equation \\(T-T_{\\text{out}}=ce^{kt}\\) describing a thermometer taken outdoors, \\(T_{\\text{out}}\\) represents:",
        options: ["the initial reading of the thermometer", "the surrounding (outdoor) temperature", "the rate constant", "the time of observation"],
        ans: "the surrounding (outdoor) temperature",
        reason: "In this cooling model, \\(T_{out}\\) represents the constant ambient (surrounding) temperature the object approaches."
      },
      {
        q: "In a bacteria culture, if the population becomes 4 times in 2 days, the growth constant \\(k\\) satisfies:",
        options: ["\\(e^{2k}=4\\)", "\\(e^{2k}=2\\)", "\\(e^{4k}=2\\)", "\\(2k=4\\)"],
        ans: "\\(e^{2k}=4\\)",
        reason: "Setting the population ratio after 2 days equal to 4 in the exponential model gives \\(e^{2k}=4\\)."
      },
      {
        q: "Which of the following real-life situations is best modelled by \\(\\dfrac{dP}{dt}=kP\\)?",
        options: ["Uniform motion at constant speed", "Population growth or radioactive decay", "A body permanently at rest", "A displacement-time graph with zero slope"],
        ans: "Population growth or radioactive decay",
        reason: "This proportional-rate equation is the standard model for phenomena like population growth and radioactive decay."
      },
      {
        q: "A good mathematical model (such as a differential equation) should have which two properties?",
        options: ["It should be complicated and represent the situation loosely", "It should be simple enough to solve, and represent the real situation well enough that its solution is meaningful", "It must always have a unique numerical solution", "It must avoid using derivatives"],
        ans: "It should be simple enough to solve, and represent the real situation well enough that its solution is meaningful",
        reason: "A useful mathematical model must balance being solvable with faithfully capturing the real situation's essential behavior."
      },
      {
        q: "The order of the differential equation \\(x\\dfrac{d^3y}{dx^3}-2\\left(\\dfrac{dy}{dx}\\right)^4+y=0\\) is:",
        options: ["1", "2", "3", "4"],
        ans: "3",
        reason: "The highest-order derivative present is the third derivative, giving order 3."
      },
      {
        q: "The degree of the differential equation \\(\\dfrac{d^2y}{dx^2}+9y^3=\\sin x\\) is:",
        options: ["0", "1", "2", "3"],
        ans: "1",
        reason: "The highest derivative, \\(d^2y/dx^2\\), appears only to the first power, so the degree is 1 (the \\(y^3\\) term doesn't affect degree, which concerns only the derivative)."
      },
      {
        q: "\\(y=8\\) is a solution of the differential equation:",
        options: ["\\(\\dfrac{dy}{dx}+8y=32\\)", "\\(\\dfrac{dy}{dx}+6y=32\\)", "\\(\\dfrac{dy}{dx}+5y=32\\)", "\\(\\dfrac{dy}{dx}+4y=32\\)"],
        ans: "\\(\\dfrac{dy}{dx}+4y=32\\)",
        reason: "Substituting the constant \\(y=8\\) gives \\(0+4(8)=32\\), which checks out only for this equation among the options."
      },
      {
        q: "\\(f(x,y)=\\dfrac{x^3-y^3}{x-y}\\) is a homogeneous function of degree:",
        options: ["1", "2", "3", "4"],
        ans: "2",
        reason: "Scaling x, y by t leaves a factor of \\(t^2\\) after cancelling \\((x-y)\\), so the function is homogeneous of degree 2."
      },
      {
        q: "The solution of the differential equation \\(dy=dx\\) is:",
        options: ["\\(y=x+c\\)", "\\(y=x^2+c\\)", "\\(y^2=x^2+c\\)", "\\(y^2=x+c\\)"],
        ans: "\\(y=x+c\\)",
        reason: "Integrating both sides directly gives \\(y=x+c\\)."
      },
      {
        q: "The number of arbitrary constants present in the general solution of a differential equation of first order is:",
        options: ["1", "2", "3", "0"],
        ans: "1",
        reason: "A first-order differential equation's general solution contains exactly one arbitrary constant."
      },
      {
        q: "The differential equation \\(\\dfrac{dy}{dx}=e^{x+y}\\) has solution:",
        options: ["\\(e^{-x-y}=c\\)", "\\(e^{-x}+e^y=c\\)", "\\(e^x+e^y=c\\)", "\\(e^x+e^{-y}=c\\)"],
        ans: "\\(e^x+e^{-y}=c\\)",
        reason: "Separating gives \\(e^{-y}dy=e^xdx\\); integrating both sides gives \\(-e^{-y}=e^x+C\\), which rearranges to \\(e^x+e^{-y}=c\\)."
      },
      {
        q: "The general solution of \\(y^2\\,dy-x^2\\,dx=0\\) is:",
        options: ["\\(x^2-y^2=c\\)", "\\(x^3+y^3=c\\)", "\\(x^3-y^3=c\\)", "\\(x^2+y^2=c\\)"],
        ans: "\\(x^3-y^3=c\\)",
        reason: "Integrating \\(y^2dy=x^2dx\\) gives \\(\\frac{y^3}3=\\frac{x^3}3+C\\), which rearranges (absorbing the constant) to \\(x^3-y^3=c\\)."
      },
      {
        q: "The solution of \\(\\cos x\\sin y\\,dx+\\sin x\\cos y\\,dy=0\\) is:",
        options: ["\\(\\sin x\\cos y=c\\)", "\\(\\cos x\\cos y=c\\)", "\\(\\cos x\\sin y=c\\)", "\\(\\sin x\\sin y=c\\)"],
        ans: "\\(\\sin x\\sin y=c\\)",
        reason: "Dividing by \\(\\sin x\\sin y\\) separates the variables to \\(\\cot x\\,dx+\\cot y\\,dy=0\\), integrating to \\(\\sin x\\sin y=c\\)."
      },
      {
        q: "Which of the following cannot be the order of a differential equation?",
        options: ["\\(-1\\)", "1", "10", "100"],
        ans: "\\(-1\\)",
        reason: "The order of a differential equation must be a non-negative integer, so \\(-1\\) is impossible."
      },
      {
        stimulus: "<table><tr><th>Differential Equation</th><th>Note</th></tr><tr><td>\\(x^2\\dfrac{d^2y}{dx^2}+\\left(\\dfrac{dy}{dx}\\right)^3-y=0\\)</td><td>Polynomial in derivatives</td></tr></table>",
        q: "The order of this equation is:",
        options: ["1", "2", "3", "4"],
        ans: "2",
        reason: "The highest derivative present is \\(y''\\), the second derivative, so the order is 2."
      },
      {
        stimulus: "<table><tr><th>Differential Equation</th><th>Note</th></tr><tr><td>\\(x^2\\dfrac{d^2y}{dx^2}+\\left(\\dfrac{dy}{dx}\\right)^3-y=0\\)</td><td>Polynomial in derivatives</td></tr></table>",
        q: "The degree of this equation is:",
        options: ["1", "2", "3", "not defined"],
        ans: "1",
        reason: "Degree is measured by the power of only the highest-order derivative, \\(y''\\), which appears to the first power here — the cubed \\(y'\\) doesn't affect it."
      },
      {
        stimulus: "<table><tr><th>Differential Equation</th><th>Note</th></tr><tr><td>\\(x^2\\dfrac{d^2y}{dx^2}+\\left(\\dfrac{dy}{dx}\\right)^3-y=0\\)</td><td>Polynomial in derivatives</td></tr></table>",
        q: "Is this differential equation linear or nonlinear?",
        options: ["Linear, because all derivatives appear to power 1", "Nonlinear, because of the cubed first-derivative term", "Linear, because it equals zero", "Nonlinear, because \\(y\\) is squared"],
        ans: "Nonlinear, because of the cubed first-derivative term",
        reason: "The presence of \\((dy/dx)^3\\) violates the linearity requirement that every derivative appear only to the first power."
      },
      {
        stimulus: "<table><tr><th>Differential Equation</th><th>Note</th></tr><tr><td>\\(x^2\\dfrac{d^2y}{dx^2}+\\left(\\dfrac{dy}{dx}\\right)^3-y=0\\)</td><td>Polynomial in derivatives</td></tr></table>",
        q: "If this equation were rewritten as \\(x^2\\dfrac{d^2y}{dx^2}=y-\\left(\\dfrac{dy}{dx}\\right)^3\\), would the order or degree change?",
        options: ["Neither changes; rearranging does not affect order or degree", "The order becomes 3", "The degree becomes 3", "The degree becomes not defined"],
        ans: "Neither changes; rearranging does not affect order or degree",
        reason: "Order and degree are structural properties of the equation and are unaffected by simply moving terms across the equals sign."
      },
      {
        stimulus: "<table><tr><th>Proposed solution</th><th>Differential equation</th></tr><tr><td>\\(y=Ce^{-3x}\\)</td><td>\\(\\dfrac{dy}{dx}+3y=0\\)</td></tr></table>",
        q: "Differentiating \\(y=Ce^{-3x}\\) gives \\(\\dfrac{dy}{dx}=\\):",
        options: ["\\(-3Ce^{-3x}\\)", "\\(3Ce^{-3x}\\)", "\\(Ce^{-3x}\\)", "\\(-3C\\)"],
        ans: "\\(-3Ce^{-3x}\\)",
        reason: "Differentiating \\(Ce^{-3x}\\) by the chain rule brings down a factor of \\(-3\\)."
      },
      {
        stimulus: "<table><tr><th>Proposed solution</th><th>Differential equation</th></tr><tr><td>\\(y=Ce^{-3x}\\)</td><td>\\(\\dfrac{dy}{dx}+3y=0\\)</td></tr></table>",
        q: "Substituting into \\(\\dfrac{dy}{dx}+3y\\) gives:",
        options: ["\\(0\\)", "\\(6Ce^{-3x}\\)", "\\(-6Ce^{-3x}\\)", "\\(3C\\)"],
        ans: "\\(0\\)",
        reason: "Substituting gives \\(-3Ce^{-3x}+3Ce^{-3x}=0\\), confirming the equation is satisfied identically."
      },
      {
        stimulus: "<table><tr><th>Proposed solution</th><th>Differential equation</th></tr><tr><td>\\(y=Ce^{-3x}\\)</td><td>\\(\\dfrac{dy}{dx}+3y=0\\)</td></tr></table>",
        q: "So \\(y=Ce^{-3x}\\) is:",
        options: ["A general solution of the equation, for any constant \\(C\\)", "Only a particular solution", "Not a solution at all", "A singular solution only"],
        ans: "A general solution of the equation, for any constant \\(C\\)",
        reason: "Since it satisfies the equation for every value of the constant C, this is the general solution."
      },
      {
        stimulus: "<table><tr><th>Proposed solution</th><th>Differential equation</th></tr><tr><td>\\(y=Ce^{-3x}\\)</td><td>\\(\\dfrac{dy}{dx}+3y=0\\)</td></tr></table>",
        q: "If an initial condition \\(y(0)=5\\) is imposed, the particular solution is:",
        options: ["\\(y=5e^{-3x}\\)", "\\(y=e^{-3x}+5\\)", "\\(y=5e^{3x}\\)", "\\(y=3e^{-5x}\\)"],
        ans: "\\(y=5e^{-3x}\\)",
        reason: "Substituting \\(x=0, y=5\\) into \\(y=Ce^{-3x}\\) gives \\(C=5\\)."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Room temperature \\(T_0\\)</td><td>\\(20^\\circ\\text{C}\\)</td></tr><tr><td>Model</td><td>\\(T=T_0+ce^{kt}\\)</td></tr><tr><td>At \\(t=0\\)</td><td>\\(T=100^\\circ\\text{C}\\)</td></tr></table>",
        q: "Using \\(T(0)=100\\), the constant \\(c\\) equals:",
        options: ["80", "100", "20", "120"],
        ans: "80",
        reason: "Substituting \\(t=0, T=100\\) gives \\(100=20+c\\), so \\(c=80\\)."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Room temperature \\(T_0\\)</td><td>\\(20^\\circ\\text{C}\\)</td></tr><tr><td>Model</td><td>\\(T=T_0+ce^{kt}\\)</td></tr><tr><td>At \\(t=0\\)</td><td>\\(T=100^\\circ\\text{C}\\)</td></tr></table>",
        q: "As \\(t\\to\\infty\\) (assuming \\(k<0\\)), \\(T\\) approaches:",
        options: ["\\(20^\\circ\\text{C}\\)", "\\(100^\\circ\\text{C}\\)", "\\(0^\\circ\\text{C}\\)", "\\(80^\\circ\\text{C}\\)"],
        ans: "\\(20^\\circ\\text{C}\\)",
        reason: "With \\(k<0\\), the exponential term decays to 0, leaving \\(T\\to T_0=20°C\\)."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Room temperature \\(T_0\\)</td><td>\\(20^\\circ\\text{C}\\)</td></tr><tr><td>Model</td><td>\\(T=T_0+ce^{kt}\\)</td></tr><tr><td>At \\(t=0\\)</td><td>\\(T=100^\\circ\\text{C}\\)</td></tr></table>",
        q: "This behaviour illustrates:",
        options: ["Newton's law of cooling, where the body's temperature approaches the surrounding temperature", "Radioactive decay to zero", "Population growth without bound", "Simple harmonic motion"],
        ans: "Newton's law of cooling, where the body's temperature approaches the surrounding temperature",
        reason: "A quantity approaching a fixed ambient value exponentially is exactly the behavior described by Newton's Law of Cooling."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Room temperature \\(T_0\\)</td><td>\\(20^\\circ\\text{C}\\)</td></tr><tr><td>Model</td><td>\\(T=T_0+ce^{kt}\\)</td></tr><tr><td>At \\(t=0\\)</td><td>\\(T=100^\\circ\\text{C}\\)</td></tr></table>",
        q: "If \\(k\\) were positive instead of negative, the model would predict:",
        options: ["Temperature increasing without bound, which is physically unrealistic for cooling", "The same cooling behaviour", "Temperature staying constant at \\(100^\\circ C\\)", "Temperature reaching \\(20^\\circ C\\) instantly"],
        ans: "Temperature increasing without bound, which is physically unrealistic for cooling",
        reason: "A positive k would make the exponential term grow without bound, predicting ever-increasing temperature — physically wrong for a cooling body."
      }
    ];
  }
});
