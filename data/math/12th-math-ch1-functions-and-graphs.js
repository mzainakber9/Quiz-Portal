// Class 12 Math -- Chapter 1: Functions and Graphs
// Converted from the 300-question Class 12 MCQ bank (chapters 1-3), with
// short explanations added for every question. Math notation preserved as
// KaTeX-renderable inline LaTeX (\(...\)), matching the rest of this project.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch1",
  label: "Chapter 1: Functions and Graphs",
  order: 1,
  questions: function () {
    return [
      {
        q: "Which of the following is an example of an exponential growth function?",
        options: ["\\(f(x)=3x+4\\)", "\\(f(x)=3^x\\times5\\)", "\\(f(x)=x^3\\)", "\\(f(x)=x^2\\)"],
        ans: "\\(f(x)=3^x\\times5\\)",
        reason: "An exponential growth function has the variable in the exponent with base greater than 1; \\(3^x\\times5\\) fits this form."
      },
      {
        q: "The exponential decay function is expressed by:",
        options: ["\\(f(x)=a\\cdot b^x;\\ 0<b<1\\)", "\\(f(x)=a\\cdot b^x;\\ b>1\\)", "\\(f(x)=a\\cdot b^x;\\ 0<a<1\\)", "\\(f(x)=a\\cdot b^x;\\ a>1\\)"],
        ans: "\\(f(x)=a\\cdot b^x;\\ 0<b<1\\)",
        reason: "Exponential decay occurs when the base \\(b\\) satisfies \\(0<b<1\\), so the function decreases as \\(x\\) increases."
      },
      {
        q: "The logarithmic function \\(f(x)=\\log_b x\\) is defined for:",
        options: ["all real numbers", "\\(x<0\\)", "\\(x>0\\)", "\\(x\\ge0\\)"],
        ans: "\\(x>0\\)",
        reason: "Logarithms are only defined for positive arguments, so \\(\\log_b x\\) requires \\(x>0\\)."
      },
      {
        q: "What is the value of \\(\\log_5 125\\)?",
        options: ["25", "5", "4", "3"],
        ans: "3",
        reason: "Since \\(5^3=125\\), \\(\\log_5 125=3\\)."
      },
      {
        q: "A function \\(f:A\\to B\\) is said to be onto if:",
        options: ["Every element of set \\(A\\) has a unique image in set \\(B\\).", "Every element in set \\(B\\) has a preimage in set \\(A\\).", "Some elements of set \\(B\\) have no preimage in set \\(A\\).", "\\(f\\) is both one-to-one and onto."],
        ans: "Every element in set \\(B\\) has a preimage in set \\(A\\).",
        reason: "A function is onto (surjective) when every element of the codomain B has at least one pre-image in A."
      },
      {
        q: "The function \\(f(x)=x+1\\), where \\(f:\\{1,2,3\\}\\to\\{2,3,4\\}\\), is:",
        options: ["one-to-one but not onto", "onto but not one-to-one", "both one-to-one and onto", "neither one-to-one nor onto"],
        ans: "both one-to-one and onto",
        reason: "f maps 1, 2, 3 to 2, 3, 4 respectively — all images are distinct (one-to-one) and every element of B is hit (onto)."
      },
      {
        q: "The function \\(f:\\mathbb{R}\\to[0,\\infty)\\) defined by \\(f(x)=x^2+1\\), is:",
        options: ["onto but not one-to-one", "one-to-one but not onto", "neither one-to-one nor onto", "both one-to-one and onto"],
        ans: "neither one-to-one nor onto",
        reason: "\\(f(x)=x^2+1\\) has range \\([1,\\infty)\\), missing values like 0 in the codomain, and \\(f(1)=f(-1)=2\\), so it is neither onto nor one-to-one."
      },
      {
        q: "A function \\(f:A\\to B\\) has an inverse if and only if:",
        options: ["\\(f\\) is one-to-one", "\\(f\\) is onto", "\\(f\\) is both one-to-one and onto", "\\(f\\) is neither one-to-one nor onto"],
        ans: "\\(f\\) is both one-to-one and onto",
        reason: "A function has an inverse only when it is both one-to-one and onto, i.e. bijective."
      },
      {
        q: "The inverse function of \\(f(x)=x^3\\), is:",
        options: ["\\(f^{-1}(x)=x^{-3}\\)", "\\(f^{-1}(x)=\\sqrt{x-3}\\)", "\\(f^{-1}(x)=x^3\\)", "\\(f^{-1}(x)=\\sqrt[3]{x}\\)"],
        ans: "\\(f^{-1}(x)=\\sqrt[3]{x}\\)",
        reason: "Solving \\(y=x^3\\) for x gives \\(x=\\sqrt[3]{y}\\), so \\(f^{-1}(x)=\\sqrt[3]{x}\\)."
      },
      {
        q: "The function \\(f(x)=\\sin x\\), where \\(f:\\left[-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right]\\to[-1,1]\\), is:",
        options: ["one-to-one but not onto", "onto but not one-to-one", "both one-to-one and onto", "neither one-to-one nor onto"],
        ans: "both one-to-one and onto",
        reason: "Restricted to \\([-\\pi/2,\\pi/2]\\), sine is strictly increasing (one-to-one) and covers all of \\([-1,1]\\) (onto)."
      },
      {
        q: "The inverse function of \\(f(x)=\\dfrac1x;\\ x\\ne0\\), is:",
        options: ["\\(f^{-1}(x)=1\\)", "\\(f^{-1}(x)=-x\\)", "\\(f^{-1}(x)=x\\)", "\\(f^{-1}(x)=\\dfrac1x\\)"],
        ans: "\\(f^{-1}(x)=\\dfrac1x\\)",
        reason: "Solving \\(y=1/x\\) for x gives \\(x=1/y\\), so f is its own inverse."
      },
      {
        q: "Scaling refers to:",
        options: ["increasing the size of an object.", "decreasing the size of an object.", "maintaining the properties while resizing an object.", "changing the shape of an object."],
        ans: "maintaining the properties while resizing an object.",
        reason: "Scaling resizes a graph or object while preserving its overall shape and proportions."
      },
      {
        q: "Which of the following statements is true for uniform scaling?",
        options: ["Both width and height change proportionally.", "Only the width changes.", "Only the height changes.", "Width and height remain unchanged."],
        ans: "Both width and height change proportionally.",
        reason: "In uniform scaling the same scale factor is applied to both width and height, keeping proportions unchanged."
      },
      {
        q: "What is the effect on the graph of \\(f(x)\\) when it is replaced by \\(f(x+2)\\)?",
        options: ["It shifts 2 units to the right.", "It shifts 2 units to the left.", "It shifts 2 units up.", "It shifts 2 units down."],
        ans: "It shifts 2 units to the left.",
        reason: "Replacing x with \\(x+2\\) shifts the graph 2 units to the left — the input now needs to be 2 less to reach the same output."
      },
      {
        q: "The domain of \\(y=\\sin^{-1}(x)\\), is:",
        options: ["\\([0,\\infty)\\)", "\\((-\\infty,\\infty)\\)", "\\([-1,1]\\)", "\\([0,1]\\)"],
        ans: "\\([-1,1]\\)",
        reason: "Inverse sine is only defined for inputs in \\([-1,1]\\), the range of sine."
      },
      {
        q: "The domain of \\(f(x)=\\dfrac1{x-5}\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{5\\}\\)", "\\(\\mathbb{R}-\\{0\\}\\)", "\\([5,\\infty)\\)"],
        ans: "\\(\\mathbb{R}-\\{5\\}\\)",
        reason: "The function is undefined only where the denominator is zero, i.e. \\(x=5\\), so the domain excludes 5."
      },
      {
        q: "The domain of \\(f(x)=\\sqrt{x-7}\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\((-\\infty,7]\\)", "\\([7,\\infty)\\)", "\\(\\mathbb{R}-\\{7\\}\\)"],
        ans: "\\([7,\\infty)\\)",
        reason: "The expression under the square root must be non-negative: \\(x-7\\ge0 \\Rightarrow x\\ge7\\)."
      },
      {
        q: "The range of \\(f(x)=x^2+3\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\([3,\\infty)\\)", "\\((3,\\infty)\\)", "\\((-\\infty,3]\\)"],
        ans: "\\([3,\\infty)\\)",
        reason: "Since \\(x^2\\ge0\\) for all x, \\(x^2+3\\ge3\\), giving range \\([3,\\infty)\\)."
      },
      {
        q: "If \\(f(x)=3x-2\\) and \\(\\mathrm{Dom}\\,f=\\{1,2,3\\}\\), then \\(\\mathrm{Rang}\\,f\\) is:",
        options: ["\\(\\{1,4,7\\}\\)", "\\(\\{1,2,3\\}\\)", "\\(\\{3,6,9\\}\\)", "\\(\\{-1,0,1\\}\\)"],
        ans: "\\(\\{1,4,7\\}\\)",
        reason: "Evaluating f at 1, 2, 3 gives \\(3(1)-2=1\\), \\(3(2)-2=4\\), \\(3(3)-2=7\\)."
      },
      {
        q: "For a function \\(f:A\\to B\\), the set \\(B\\) is called the:",
        options: ["domain", "range", "codomain", "pre-image"],
        ans: "codomain",
        reason: "In \\(f:A\\to B\\), the set B is by definition the codomain."
      },
      {
        q: "The domain of \\(f(x)=\\dfrac{x}{x^2-9}\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{3\\}\\)", "\\(\\mathbb{R}-\\{-3\\}\\)", "\\(\\mathbb{R}-\\{3,-3\\}\\)"],
        ans: "\\(\\mathbb{R}-\\{3,-3\\}\\)",
        reason: "The denominator \\(x^2-9=0\\) at \\(x=\\pm3\\), so both values must be excluded from the domain."
      },
      {
        q: "If \\(f(x)=\\sqrt{9-x^2}\\), the domain of \\(f\\) is:",
        options: ["\\([-3,3]\\)", "\\((-3,3)\\)", "\\([0,3]\\)", "\\(\\mathbb{R}\\)"],
        ans: "\\([-3,3]\\)",
        reason: "We need \\(9-x^2\\ge0\\), i.e. \\(x^2\\le9\\), giving \\(-3\\le x\\le3\\)."
      },
      {
        q: "The range of a function is always a subset of the:",
        options: ["domain", "codomain", "pre-image set", "set of natural numbers"],
        ans: "codomain",
        reason: "By definition, the range (actual outputs) is always a subset of the codomain (declared target set)."
      },
      {
        q: "The domain of \\(f(x)=\\dfrac{x+4}{x^2-16}\\) is:",
        options: ["\\(\\mathbb{R}-\\{4\\}\\)", "\\(\\mathbb{R}-\\{-4\\}\\)", "\\(\\mathbb{R}-\\{4,-4\\}\\)", "\\(\\mathbb{R}\\)"],
        ans: "\\(\\mathbb{R}-\\{4,-4\\}\\)",
        reason: "The denominator \\(x^2-16=0\\) at \\(x=\\pm4\\), so both must be excluded."
      },
      {
        q: "The range of \\(f(x)=|x|+2\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\([2,\\infty)\\)", "\\((2,\\infty)\\)"],
        ans: "\\([2,\\infty)\\)",
        reason: "Since \\(|x|\\ge0\\), \\(|x|+2\\ge2\\), so the range is \\([2,\\infty)\\)."
      },
      {
        q: "A function \\(f:A\\to B\\) is called an into function if:",
        options: ["\\(\\mathrm{Rang}(f)=B\\)", "\\(\\mathrm{Rang}(f)\\ne B\\)", "\\(f\\) is one-to-one", "domain = codomain"],
        ans: "\\(\\mathrm{Rang}(f)\\ne B\\)",
        reason: "A function is 'into' when its range does not cover the entire codomain, i.e. \\(\\mathrm{Rang}(f)\\ne B\\)."
      },
      {
        q: "Which of the following functions is an onto function from \\(\\mathbb{R}\\) to \\(\\mathbb{R}\\)?",
        options: ["\\(f(x)=x^2\\)", "\\(f(x)=e^x\\)", "\\(f(x)=x^3\\)", "\\(f(x)=\\sin x\\)"],
        ans: "\\(f(x)=x^3\\)",
        reason: "\\(f(x)=x^3\\) takes every real value as x ranges over \\(\\mathbb{R}\\) (an odd-degree polynomial is onto \\(\\mathbb{R}\\to\\mathbb{R}\\)), unlike \\(x^2\\), \\(e^x\\), or \\(\\sin x\\), whose ranges are proper subsets of \\(\\mathbb{R}\\)."
      },
      {
        q: "The function \\(f(x)=x^2\\) defined on \\(f:\\mathbb{R}\\to\\mathbb{R}\\) is:",
        options: ["one-to-one", "onto", "into", "bijective"],
        ans: "into",
        reason: "Its range \\([0,\\infty)\\) does not cover all of \\(\\mathbb{R}\\), so it is into (not onto)."
      },
      {
        q: "A function which is both into and one-one is called:",
        options: ["surjective", "injective", "bijective", "a constant function"],
        ans: "injective",
        reason: "A function that is one-one, whether or not it is also onto, is called injective."
      },
      {
        q: "A function which is both onto and one-one is called:",
        options: ["injective", "bijective", "into", "identity function"],
        ans: "bijective",
        reason: "A function that is both onto and one-one is called bijective."
      },
      {
        q: "If \\(f=\\{(1,2),(2,3),(3,4)\\}\\) is defined from \\(A=\\{1,2,3\\}\\) to \\(B=\\{2,3,4\\}\\), then \\(f\\) is:",
        options: ["one-one and onto", "one-one but not onto", "onto but not one-one", "neither one-one nor onto"],
        ans: "one-one and onto",
        reason: "All three images (2, 3, 4) are distinct and together cover B exactly, so f is both one-one and onto."
      },
      {
        q: "The constant function \\(f(x)=c\\) is always an example of:",
        options: ["a one-one function", "an onto function (for codomain \\(\\mathbb{R}\\))", "an into function (for codomain \\(\\mathbb{R}\\))", "a bijective function"],
        ans: "an into function (for codomain \\(\\mathbb{R}\\))",
        reason: "A constant function's range is the single value \\(\\{c\\}\\), which for codomain \\(\\mathbb{R}\\) is a proper subset, so it is an into function."
      },
      {
        q: "Which of the following is an onto function \\(h:\\mathbb{R}\\to[0,\\infty)\\)?",
        options: ["\\(h(x)=e^x\\)", "\\(h(x)=x^2\\)", "\\(h(x)=x^3\\)", "\\(h(x)=\\sin x\\)"],
        ans: "\\(h(x)=x^2\\)",
        reason: "\\(h(x)=x^2\\) attains every value in \\([0,\\infty)\\) as x ranges over \\(\\mathbb{R}\\), while \\(e^x\\) never reaches 0 and \\(x^3\\), \\(\\sin x\\) don't stay within \\([0,\\infty)\\) only."
      },
      {
        q: "A function \\(f:A\\to B\\) is one-to-one if:",
        options: ["\\(f(x_1)=f(x_2)\\Rightarrow x_1=x_2\\)", "\\(f(x_1)=f(x_2)\\) always", "every element of \\(B\\) has a pre-image", "range = codomain"],
        ans: "\\(f(x_1)=f(x_2)\\Rightarrow x_1=x_2\\)",
        reason: "By definition, f is one-to-one if equal outputs force equal inputs: \\(f(x_1)=f(x_2)\\Rightarrow x_1=x_2\\)."
      },
      {
        q: "The function \\(f(x)=\\sin x\\) defined on \\(f:\\mathbb{R}\\to\\mathbb{R}\\) is:",
        options: ["one-one", "onto", "into", "bijective"],
        ans: "into",
        reason: "\\(\\sin x\\) is periodic (not one-one) and its range \\([-1,1]\\) is a proper subset of \\(\\mathbb{R}\\) (not onto), so overall it is an into function."
      },
      {
        q: "If \\(f:A\\to B\\) is a bijective function, then:",
        options: ["\\(f^{-1}\\) does not exist", "\\(f^{-1}\\) exists and is a function from \\(B\\) to \\(A\\)", "\\(f\\) is not one-one", "\\(f\\) is not onto"],
        ans: "\\(f^{-1}\\) exists and is a function from \\(B\\) to \\(A\\)",
        reason: "Bijectivity (one-one and onto) is exactly the condition needed for the inverse relation to itself be a function from B to A."
      },
      {
        q: "Given \\(f=\\{(a,2),(b,1),(c,3)\\}\\) from \\(A=\\{a,b,c\\}\\) to \\(B=\\{1,2,3\\}\\), \\(f\\) is:",
        options: ["into", "onto but not one-one", "bijective", "neither one-one nor onto"],
        ans: "bijective",
        reason: "The images 2, 1, 3 are all distinct and together cover B, so f is bijective."
      },
      {
        q: "If \\(f(x)=5x+2\\), then \\(f^{-1}(x)\\) is:",
        options: ["\\(\\dfrac{x-2}5\\)", "\\(\\dfrac{x+2}5\\)", "\\(5x-2\\)", "\\(\\dfrac{x-5}2\\)"],
        ans: "\\(\\dfrac{x-2}5\\)",
        reason: "Solving \\(y=5x+2\\) for x gives \\(x=\\dfrac{y-2}5\\)."
      },
      {
        q: "The inverse of \\(f(x)=\\dfrac{x}{x-1};\\ x\\ne1\\), is:",
        options: ["\\(\\dfrac{x}{x+1}\\)", "\\(\\dfrac{x}{x-1}\\)", "\\(\\dfrac{x-1}x\\)", "\\(\\dfrac{x+1}x\\)"],
        ans: "\\(\\dfrac{x}{x-1}\\)",
        reason: "Solving \\(y=\\dfrac{x}{x-1}\\) for x gives \\(x=\\dfrac{y}{y-1}\\), the same form, so \\(f^{-1}(x)=\\dfrac{x}{x-1}\\)."
      },
      {
        q: "If \\(f\\) and \\(g\\) are inverse functions of each other, then \\(f(g(x))\\) equals:",
        options: ["0", "1", "\\(x\\)", "\\(g(x)\\)"],
        ans: "\\(x\\)",
        reason: "By the defining property of inverse functions, composing f with its inverse returns the original input x."
      },
      {
        q: "The inverse of \\(f(x)=\\dfrac{x-3}2\\) is:",
        options: ["\\(2x+3\\)", "\\(2x-3\\)", "\\(\\dfrac{x+3}2\\)", "\\(\\dfrac{x-3}2\\)"],
        ans: "\\(2x+3\\)",
        reason: "Solving \\(y=\\dfrac{x-3}2\\) for x gives \\(x=2y+3\\)."
      },
      {
        q: "If the point \\((3,5)\\) lies on the graph of \\(f(x)\\), then which point lies on the graph of \\(f^{-1}(x)\\)?",
        options: ["\\((3,5)\\)", "\\((5,3)\\)", "\\((-3,-5)\\)", "\\((-3,5)\\)"],
        ans: "\\((5,3)\\)",
        reason: "The inverse swaps coordinates of every point, so (3,5) on f corresponds to (5,3) on \\(f^{-1}\\)."
      },
      {
        q: "The graphs of \\(f(x)\\) and \\(f^{-1}(x)\\) are always symmetric about the line:",
        options: ["\\(x=0\\)", "\\(y=0\\)", "\\(y=x\\)", "\\(y=-x\\)"],
        ans: "\\(y=x\\)",
        reason: "A function and its inverse are always mirror images of each other across the line \\(y=x\\)."
      },
      {
        q: "A function has an inverse if and only if it is:",
        options: ["onto only", "one-to-one only", "both one-to-one and onto", "neither one-to-one nor onto"],
        ans: "both one-to-one and onto",
        reason: "Only a bijective function (both one-to-one and onto) has a genuine inverse function."
      },
      {
        q: "The domain of \\(f^{-1}\\) is equal to the:",
        options: ["domain of \\(f\\)", "range of \\(f\\)", "codomain of \\(f\\)", "none of these"],
        ans: "range of \\(f\\)",
        reason: "Since \\(f^{-1}\\) reverses f, its domain is exactly the set of values f actually outputs, i.e. the range of f."
      },
      {
        q: "If \\(f(x)=2^x\\), then \\(f^{-1}(x)\\) is:",
        options: ["\\(\\log_2 x\\)", "\\(\\dfrac{x}2\\)", "\\(\\dfrac{2}x\\)", "\\(x^2\\)"],
        ans: "\\(\\log_2 x\\)",
        reason: "Solving \\(y=2^x\\) for x gives \\(x=\\log_2 y\\)."
      },
      {
        q: "The expression \\(f(f^{-1}(x))\\) always equals:",
        options: ["0", "1", "\\(x\\)", "\\(f(x)\\)"],
        ans: "\\(x\\)",
        reason: "Applying f to its own inverse's output returns the original input, by definition of an inverse."
      },
      {
        q: "The graph of a linear function \\(y=ax+b\\ (a\\ne0)\\) is:",
        options: ["a parabola", "a straight line", "a hyperbola", "a circle"],
        ans: "a straight line",
        reason: "A first-degree equation \\(y=ax+b\\) always graphs as a straight line."
      },
      {
        q: "The domain and range of any linear function \\(f(x)=ax+b\\ (a\\ne0)\\) is:",
        options: ["\\([0,\\infty)\\)", "\\(\\mathbb{R}\\)", "\\((-\\infty,0]\\)", "\\([a,b]\\)"],
        ans: "\\(\\mathbb{R}\\)",
        reason: "A non-constant linear function \\(y=ax+b\\) accepts and produces all real numbers."
      },
      {
        q: "The graph of \\(y=x^2\\) is:",
        options: ["a straight line", "a V-shape", "a parabola opening upward", "a parabola opening downward"],
        ans: "a parabola opening upward",
        reason: "\\(y=x^2\\) has a positive leading coefficient, so its parabola opens upward."
      },
      {
        q: "The domain of the square root function \\(f(x)=\\sqrt{x}\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\((-\\infty,0]\\)", "\\(\\mathbb{R}-\\{0\\}\\)"],
        ans: "\\([0,\\infty)\\)",
        reason: "The square root requires a non-negative radicand, so \\(x\\ge0\\)."
      },
      {
        q: "The graph of \\(y=x^n\\) for an even positive integer \\(n\\) always passes through:",
        options: ["\\((0,0)\\) only", "\\((1,1)\\) only", "both \\((0,0)\\) and \\((1,1)\\)", "\\((-1,-1)\\)"],
        ans: "both \\((0,0)\\) and \\((1,1)\\)",
        reason: "For any positive even power n, \\(0^n=0\\) and \\(1^n=1\\), so the graph passes through both points."
      },
      {
        q: "Which of the following is a quadratic function?",
        options: ["\\(f(x)=2x+3\\)", "\\(f(x)=3x^2-5x+1\\)", "\\(f(x)=\\sqrt{x}\\)", "\\(f(x)=\\dfrac1x\\)"],
        ans: "\\(f(x)=3x^2-5x+1\\)",
        reason: "A quadratic function has degree 2 in x, matching \\(3x^2-5x+1\\)."
      },
      {
        q: "The graph of \\(y=x^{-1}\\) (for \\(x\\ne0\\)) is a hyperbola that lies in the:",
        options: ["1st and 2nd quadrants", "1st and 3rd quadrants", "2nd and 4th quadrants", "3rd and 4th quadrants"],
        ans: "1st and 3rd quadrants",
        reason: "For \\(y=1/x\\), x and y always share the same sign, placing the curve in the 1st and 3rd quadrants."
      },
      {
        q: "For the function \\(y=x^n\\ (n\\ne0)\\), all graphs pass through the point:",
        options: ["\\((0,1)\\)", "\\((1,0)\\)", "\\((1,1)\\)", "\\((-1,0)\\)"],
        ans: "\\((1,1)\\)",
        reason: "For any nonzero power n, \\(1^n=1\\), so every curve \\(y=x^n\\) passes through (1,1)."
      },
      {
        q: "The graph of \\(y=x^3\\) is symmetric about the:",
        options: ["y-axis", "origin", "x-axis", "line \\(y=x\\)"],
        ans: "origin",
        reason: "Since \\((-x)^3=-x^3\\), \\(y=x^3\\) is an odd function, symmetric about the origin."
      },
      {
        q: "Which of the following functions has a domain that depends on how the function is formed (i.e. is restricted)?",
        options: ["a linear function", "a quadratic function", "a square root function", "a constant function"],
        ans: "a square root function",
        reason: "A square root function's domain is restricted by the non-negativity condition on its radicand, unlike a linear, quadratic, or constant function."
      },
      {
        q: "For the quadratic function \\(y=ax^2+bx+c\\), the equation of the axis of symmetry is:",
        options: ["\\(x=\\dfrac{b}{2a}\\)", "\\(x=-\\dfrac{b}{2a}\\)", "\\(x=-\\dfrac{c}a\\)", "\\(x=\\dfrac{c}{2a}\\)"],
        ans: "\\(x=-\\dfrac{b}{2a}\\)",
        reason: "The vertex of \\(y=ax^2+bx+c\\) occurs where \\(x=-\\dfrac{b}{2a}\\), which is the axis of symmetry."
      },
      {
        q: "For \\(y=ax^2+bx+c\\), the parabola opens downward if:",
        options: ["\\(a>0\\)", "\\(a<0\\)", "\\(b>0\\)", "\\(c<0\\)"],
        ans: "\\(a<0\\)",
        reason: "A negative leading coefficient \\(a<0\\) makes the parabola open downward."
      },
      {
        q: "The y-intercept of the graph \\(y=ax^2+bx+c\\) is:",
        options: ["\\((0,a)\\)", "\\((0,b)\\)", "\\((0,c)\\)", "\\((a,0)\\)"],
        ans: "\\((0,c)\\)",
        reason: "Substituting \\(x=0\\) gives \\(y=c\\), so the y-intercept is (0,c)."
      },
      {
        q: "The vertex of the parabola \\(y=x^2-6x+8\\) is:",
        options: ["\\((3,-1)\\)", "\\((-3,-1)\\)", "\\((3,1)\\)", "\\((6,8)\\)"],
        ans: "\\((3,-1)\\)",
        reason: "The axis is at \\(x=-\\dfrac{-6}{2(1)}=3\\); substituting gives \\(y=9-18+8=-1\\), so the vertex is (3,-1)."
      },
      {
        q: "If a parabola crosses the x-axis at \\(x=x_1\\) and \\(x=x_2\\), the x-coordinate of the vertex is:",
        options: ["\\(x_1+x_2\\)", "\\(\\dfrac{x_1+x_2}2\\)", "\\(x_1x_2\\)", "\\(\\dfrac{x_1-x_2}2\\)"],
        ans: "\\(\\dfrac{x_1+x_2}2\\)",
        reason: "By symmetry of the parabola, the vertex lies midway between the two x-intercepts: \\(x=\\dfrac{x_1+x_2}2\\)."
      },
      {
        q: "The x-intercepts of \\(y=x^2-5x+6\\) are:",
        options: ["2 and 3", "\\(-2\\) and \\(-3\\)", "1 and 6", "\\(-1\\) and \\(-6\\)"],
        ans: "2 and 3",
        reason: "Factoring \\(x^2-5x+6=(x-2)(x-3)\\) gives roots \\(x=2\\) and \\(x=3\\)."
      },
      {
        q: "A parabola with equation \\(y=a(x-p)(x-q),\\ a>0\\), crosses the x-axis at:",
        options: ["\\((a,0)\\) and \\((0,0)\\)", "\\((p,0)\\) and \\((q,0)\\)", "\\((0,p)\\) and \\((0,q)\\)", "only \\((0,0)\\)"],
        ans: "\\((p,0)\\) and \\((q,0)\\)",
        reason: "Setting \\(y=0\\) gives \\(x=p\\) or \\(x=q\\), the x-intercepts."
      },
      {
        q: "If the graph of a quadratic function has vertex \\((2,-4)\\) and opens upward, then \\(f(2)\\) is:",
        options: ["4 (maximum value)", "\\(-4\\) (minimum value)", "0", "2"],
        ans: "\\(-4\\) (minimum value)",
        reason: "An upward-opening parabola's vertex is its minimum point, so \\(f(2)=-4\\) is the minimum value."
      },
      {
        q: "Which of the following parabolas opens upward and is narrower than \\(y=x^2\\)?",
        options: ["\\(y=0.5x^2\\)", "\\(y=3x^2\\)", "\\(y=-2x^2\\)", "\\(y=x^2+1\\)"],
        ans: "\\(y=3x^2\\)",
        reason: "A larger \\(|a|\\) makes the parabola narrower; among the upward-opening options, \\(y=3x^2\\) has the largest \\(|a|\\)."
      },
      {
        q: "The quadratic function \\(y=x^2-4x+4\\) has how many distinct x-intercepts?",
        options: ["0", "1 (a repeated root)", "2", "infinitely many"],
        ans: "1 (a repeated root)",
        reason: "\\(x^2-4x+4=(x-2)^2\\) has a single repeated root at \\(x=2\\), giving exactly one x-intercept."
      },
      {
        q: "The domain of the modulus function \\(f(x)=|x|\\) is:",
        options: ["\\([0,\\infty)\\)", "\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{0\\}\\)", "\\((-\\infty,0]\\)"],
        ans: "\\(\\mathbb{R}\\)",
        reason: "The absolute value is defined for every real number."
      },
      {
        q: "The range of \\(f(x)=|x|\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\([0,\\infty)\\)", "\\((-\\infty,0)\\)", "\\(\\mathbb{R}-\\{0\\}\\)"],
        ans: "\\([0,\\infty)\\)",
        reason: "Since \\(|x|\\ge0\\) always, and every non-negative value is attained, the range is \\([0,\\infty)\\)."
      },
      {
        q: "The graph of \\(y=|x|\\) has the shape of:",
        options: ["a parabola", "a V-shape with vertex at the origin", "a straight line", "a hyperbola"],
        ans: "a V-shape with vertex at the origin",
        reason: "The absolute value function bends sharply at the origin, forming a V-shape."
      },
      {
        q: "If \\(f(x)=3x+4\\) and \\(g(x)=-x+1\\), the x-coordinate of their point of intersection is:",
        options: ["\\(-\\dfrac34\\)", "\\(\\dfrac34\\)", "3", "\\(-3\\)"],
        ans: "\\(-\\dfrac34\\)",
        reason: "Setting \\(3x+4=-x+1\\) gives \\(4x=-3\\), so \\(x=-\\dfrac34\\)."
      },
      {
        q: "The y-intercept of the linear function \\(f(x)=\\dfrac{12-2x}3\\) is:",
        options: ["6", "4", "12", "2"],
        ans: "4",
        reason: "Substituting \\(x=0\\) gives \\(y=\\dfrac{12}3=4\\)."
      },
      {
        q: "If \\(f(x)\\) and \\(f^{-1}(x)\\) intersect, the point of intersection (when it exists uniquely) generally lies on the line:",
        options: ["\\(x=0\\)", "\\(y=x\\)", "\\(y=0\\)", "\\(y=-x\\)"],
        ans: "\\(y=x\\)",
        reason: "Where a function meets its own inverse, that point is symmetric to itself about \\(y=x\\), so it lies on \\(y=x\\)."
      },
      {
        q: "Which of the following is a transcendental function?",
        options: ["\\(f(x)=x^2+3x\\)", "\\(f(x)=\\sqrt{x}\\)", "\\(f(x)=\\log_a x\\)", "\\(f(x)=\\dfrac1x\\)"],
        ans: "\\(f(x)=\\log_a x\\)",
        reason: "Logarithmic functions are transcendental (not expressible as a finite polynomial or root), unlike the algebraic options."
      },
      {
        q: "A rational function is defined as a function of the form:",
        options: ["\\(f(x)=a_nx^n+\\cdots+a_0\\)", "\\(f(x)=\\dfrac{p(x)}{q(x)},\\ q(x)\\ne0\\)", "\\(f(x)=\\sqrt{x}\\)", "\\(f(x)=a^x\\)"],
        ans: "\\(f(x)=\\dfrac{p(x)}{q(x)},\\ q(x)\\ne0\\)",
        reason: "A rational function is, by definition, a ratio of two polynomials \\(p(x)/q(x)\\) with \\(q(x)\\ne0\\)."
      },
      {
        q: "According to the product rule of logarithms, \\(\\log_a(xy)\\) equals:",
        options: ["\\(\\log_a x\\cdot\\log_a y\\)", "\\(\\log_a x+\\log_a y\\)", "\\(\\log_a x-\\log_a y\\)", "\\((\\log_a x)(\\log_a y)\\)"],
        ans: "\\(\\log_a x+\\log_a y\\)",
        reason: "The logarithm of a product equals the sum of the logarithms: \\(\\log_a(xy)=\\log_a x+\\log_a y\\)."
      },
      {
        q: "According to the quotient rule of logarithms, \\(\\log_a\\left(\\dfrac{x}y\\right)\\) equals:",
        options: ["\\(\\log_a x+\\log_a y\\)", "\\(\\log_a x\\cdot\\log_a y\\)", "\\(\\log_a x-\\log_a y\\)", "\\(\\log_a y-\\log_a x\\)"],
        ans: "\\(\\log_a x-\\log_a y\\)",
        reason: "The logarithm of a quotient equals the difference of the logarithms: \\(\\log_a(x/y)=\\log_a x-\\log_a y\\)."
      },
      {
        q: "The power rule of logarithms states that \\(\\log_a(x^n)\\) equals:",
        options: ["\\(n\\cdot\\log_a x\\)", "\\((\\log_a x)^n\\)", "\\(\\log_a x+n\\)", "\\(\\log_a(nx)\\)"],
        ans: "\\(n\\cdot\\log_a x\\)",
        reason: "The power rule brings the exponent down as a multiplier: \\(\\log_a(x^n)=n\\log_a x\\)."
      },
      {
        q: "The value of \\(\\log_2 8\\) is:",
        options: ["2", "3", "4", "8"],
        ans: "3",
        reason: "Since \\(2^3=8\\), \\(\\log_2 8=3\\)."
      },
      {
        q: "The natural logarithm \\(\\ln x\\) has base:",
        options: ["10", "2", "\\(e\\)", "1"],
        ans: "\\(e\\)",
        reason: "By definition, \\(\\ln x=\\log_e x\\), base e."
      },
      {
        q: "\\(\\log_a 1\\) is always equal to:",
        options: ["1", "\\(a\\)", "0", "undefined"],
        ans: "0",
        reason: "Since \\(a^0=1\\) for any valid base a, \\(\\log_a 1=0\\)."
      },
      {
        q: "The change of base formula states that \\(\\log_a x\\) equals:",
        options: ["\\(\\dfrac{\\log_b x}{\\log_b a}\\)", "\\(\\dfrac{\\log_b a}{\\log_b x}\\)", "\\(\\log_b x\\cdot\\log_b a\\)", "\\(\\log_b\\left(\\dfrac{x}a\\right)\\)"],
        ans: "\\(\\dfrac{\\log_b x}{\\log_b a}\\)",
        reason: "The change of base formula states \\(\\log_a x=\\dfrac{\\log_b x}{\\log_b a}\\)."
      },
      {
        q: "Power functions are of the general form \\(f(x)=kx^{\\alpha}\\) where:",
        options: ["\\(k\\) and \\(\\alpha\\) must both be integers", "\\(k\\) and \\(\\alpha\\) are any real numbers", "\\(\\alpha\\) must be negative", "\\(k\\) must be zero"],
        ans: "\\(k\\) and \\(\\alpha\\) are any real numbers",
        reason: "A power function \\(f(x)=kx^{\\alpha}\\) allows k and \\(\\alpha\\) to be any real numbers, not just integers."
      },
      {
        q: "In the exponential growth model \\(A(t)=A_0(1+r)^t\\), the symbol \\(r\\) represents the:",
        options: ["initial amount", "growth rate", "time", "final amount"],
        ans: "growth rate",
        reason: "In this compound-growth formula, r represents the fixed periodic growth rate."
      },
      {
        q: "If Rs. 10{,}000 is invested at 5% interest compounded annually, the amount after \\(t\\) years is given by:",
        options: ["\\(A(t)=10000(1.05)^t\\)", "\\(A(t)=10000(0.05)^t\\)", "\\(A(t)=10000+0.05t\\)", "\\(A(t)=10000\\cdot t^{1.05}\\)"],
        ans: "\\(A(t)=10000(1.05)^t\\)",
        reason: "5% annual compounding means multiplying by \\(1+0.05=1.05\\) each year, giving \\(A(t)=10000(1.05)^t\\)."
      },
      {
        q: "In the exponential decay model \\(P(t)=P_0e^{-rt}\\ (r>0)\\), as \\(t\\) increases, \\(P(t)\\):",
        options: ["increases", "decreases", "remains constant", "becomes negative"],
        ans: "decreases",
        reason: "With \\(r>0\\), the exponent \\(-rt\\) becomes more negative as t grows, so \\(e^{-rt}\\) shrinks toward 0."
      },
      {
        q: "The pH of a solution in terms of hydrogen ion concentration \\([H^+]\\) is given by:",
        options: ["\\(\\mathrm{pH}=\\log_{10}[H^+]\\)", "\\(\\mathrm{pH}=-\\log_{10}[H^+]\\)", "\\(\\mathrm{pH}=10^{[H^+]}\\)", "\\(\\mathrm{pH}=\\ln[H^+]\\)"],
        ans: "\\(\\mathrm{pH}=-\\log_{10}[H^+]\\)",
        reason: "pH is defined as the negative base-10 logarithm of the hydrogen ion concentration."
      },
      {
        q: "The doubling time \\(t\\) for the exponential growth model \\(A(t)=A_0(1+r)^t\\) is found by solving:",
        options: ["\\((1+r)^t=0\\)", "\\((1+r)^t=2\\)", "\\((1+r)^t=1\\)", "\\((1+r)^t=\\dfrac12\\)"],
        ans: "\\((1+r)^t=2\\)",
        reason: "Doubling means the amount becomes twice the initial value, so we solve \\((1+r)^t=2\\)."
      },
      {
        q: "The domain of \\(y=\\tan\\theta\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\(\\theta\\ne(2n+1)\\dfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\(\\theta\\ne n\\pi,\\ n\\in\\mathbb{Z}\\)", "\\([-1,1]\\)"],
        ans: "\\(\\theta\\ne(2n+1)\\dfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)",
        reason: "Tangent is undefined wherever cosine is zero, i.e. at \\(\\theta=(2n+1)\\pi/2\\)."
      },
      {
        q: "The range of \\(y=\\cos\\theta\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\([0,1]\\)", "\\([-1,1]\\)", "\\((-\\infty,\\infty)\\)"],
        ans: "\\([-1,1]\\)",
        reason: "Cosine oscillates between -1 and 1 inclusive for all real \\(\\theta\\)."
      },
      {
        q: "The domain of \\(y=\\cot\\theta\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\(\\theta\\ne n\\pi,\\ n\\in\\mathbb{Z}\\)", "\\(\\theta\\ne(2n+1)\\dfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)", "\\([-1,1]\\)"],
        ans: "\\(\\theta\\ne n\\pi,\\ n\\in\\mathbb{Z}\\)",
        reason: "Cotangent is undefined wherever sine is zero, i.e. at \\(\\theta=n\\pi\\)."
      },
      {
        q: "The range of \\(y=\\sec\\theta\\) is:",
        options: ["\\([-1,1]\\)", "\\(\\mathbb{R}\\)", "\\(y\\le-1\\) or \\(y\\ge1\\)", "\\([0,\\infty)\\)"],
        ans: "\\(y\\le-1\\) or \\(y\\ge1\\)",
        reason: "Since \\(\\sec\\theta=1/\\cos\\theta\\) and \\(|\\cos\\theta|\\le1\\), \\(|\\sec\\theta|\\ge1\\)."
      },
      {
        q: "The domain of \\(y=\\sin^{-1}x\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\([-1,1]\\)", "\\([0,\\pi]\\)", "\\(\\left(-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right)\\)"],
        ans: "\\([-1,1]\\)",
        reason: "Inverse sine only accepts inputs in \\([-1,1]\\), matching the range of sine."
      },
      {
        q: "The range of the usual principal value of \\(y=\\cos^{-1}x\\) (in radians) is:",
        options: ["\\(\\left[-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right]\\)", "\\([0,\\pi]\\)", "\\((0,\\pi)\\)", "\\([-1,1]\\)"],
        ans: "\\([0,\\pi]\\)",
        reason: "By convention, the principal value branch of \\(\\cos^{-1}x\\) is restricted to \\([0,\\pi]\\)."
      },
      {
        q: "The range of the usual principal value of \\(y=\\tan^{-1}x\\) is:",
        options: ["\\([0,\\pi]\\)", "\\(\\left(-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right)\\)", "\\([-1,1]\\)", "\\(\\mathbb{R}\\)"],
        ans: "\\(\\left(-\\tfrac{\\pi}2,\\tfrac{\\pi}2\\right)\\)",
        reason: "The principal branch of \\(\\tan^{-1}x\\) is the open interval \\((-\\pi/2,\\pi/2)\\)."
      },
      {
        q: "The domain of \\(y=\\sec^{-1}x\\) is:",
        options: ["\\([-1,1]\\)", "\\(|x|\\ge1\\)", "\\(\\mathbb{R}\\)", "\\(x>0\\)"],
        ans: "\\(|x|\\ge1\\)",
        reason: "Since \\(|\\sec\\theta|\\ge1\\) always, \\(\\sec^{-1}x\\) is only defined for \\(|x|\\ge1\\)."
      },
      {
        q: "The horizontal line test is used to check whether a function is:",
        options: ["continuous", "one-to-one", "onto", "bijective only"],
        ans: "one-to-one",
        reason: "The horizontal line test detects repeated outputs, which is exactly what one-to-one rules out."
      },
      {
        q: "If a horizontal line intersects the graph of a function at more than one point, the function is:",
        options: ["one-to-one", "not one-to-one", "onto", "into"],
        ans: "not one-to-one",
        reason: "Two intersection points mean two different inputs share the same output, violating one-to-one."
      },
      {
        q: "The graph of \\(y=f(x)-3\\), compared to \\(y=f(x)\\), is shifted:",
        options: ["3 units up", "3 units down", "3 units left", "3 units right"],
        ans: "3 units down",
        reason: "Subtracting 3 from every output moves the entire graph down 3 units."
      },
      {
        q: "The graph of \\(y=f(x-2)\\), compared to \\(y=f(x)\\), is shifted:",
        options: ["2 units left", "2 units right", "2 units up", "2 units down"],
        ans: "2 units right",
        reason: "Replacing x with \\(x-2\\) requires x to be 2 more to reach the same output, shifting the graph right by 2."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Definition</th></tr><tr><td>\\(f(x)\\)</td><td>\\(\\dfrac{3x-1}{x-2}\\)</td></tr></table>",
        q: "The domain of \\(f(x)\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{2\\}\\)", "\\(\\mathbb{R}-\\{3\\}\\)", "\\(\\mathbb{R}-\\{2,3\\}\\)"],
        ans: "\\(\\mathbb{R}-\\{2\\}\\)",
        reason: "The denominator \\(x-2=0\\) at \\(x=2\\), which must be excluded from the domain."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Definition</th></tr><tr><td>\\(f(x)\\)</td><td>\\(\\dfrac{3x-1}{x-2}\\)</td></tr></table>",
        q: "\\(f^{-1}(x)\\) equals:",
        options: ["\\(\\dfrac{2x-1}{x-3}\\)", "\\(\\dfrac{2x+1}{x-3}\\)", "\\(\\dfrac{x-1}{3x-2}\\)", "\\(\\dfrac{2x-1}{x+3}\\)"],
        ans: "\\(\\dfrac{2x-1}{x-3}\\)",
        reason: "Solving \\(y=\\dfrac{3x-1}{x-2}\\) for x: \\(y(x-2)=3x-1 \\Rightarrow x(y-3)=2y-1 \\Rightarrow x=\\dfrac{2y-1}{y-3}\\)."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Definition</th></tr><tr><td>\\(f(x)\\)</td><td>\\(\\dfrac{3x-1}{x-2}\\)</td></tr></table>",
        q: "The range of \\(f(x)\\) is:",
        options: ["\\(\\mathbb{R}\\)", "\\(\\mathbb{R}-\\{3\\}\\)", "\\(\\mathbb{R}-\\{2\\}\\)", "\\([0,\\infty)\\)"],
        ans: "\\(\\mathbb{R}-\\{3\\}\\)",
        reason: "The range of f equals the domain of \\(f^{-1}\\), which excludes \\(y=3\\) (where the inverse's denominator would vanish)."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Definition</th></tr><tr><td>\\(f(x)\\)</td><td>\\(\\dfrac{3x-1}{x-2}\\)</td></tr></table>",
        q: "The vertical asymptote of the graph of \\(f\\) corresponds to the excluded domain value \\(x=\\):",
        options: ["2", "3", "\\(-2\\)", "\\(-3\\)"],
        ans: "2",
        reason: "The vertical asymptote occurs where the denominator of f is zero, i.e. at \\(x=2\\)."
      },
      {
        stimulus: "<table><tr><th>Transformation</th><th>Rule</th></tr><tr><td>Base function</td><td>\\(f(x)=x^2\\)</td></tr><tr><td>New function</td><td>\\(g(x)=f(x-3)+5\\)</td></tr></table>",
        q: "Compared to \\(f(x)\\), the graph of \\(g(x)\\) is shifted:",
        options: ["3 units right and 5 units up", "3 units left and 5 units down", "3 units right and 5 units down", "3 units left and 5 units up"],
        ans: "3 units right and 5 units up",
        reason: "Replacing x with \\(x-3\\) shifts the graph right 3 units, and adding 5 shifts it up 5 units."
      },
      {
        stimulus: "<table><tr><th>Transformation</th><th>Rule</th></tr><tr><td>Base function</td><td>\\(f(x)=x^2\\)</td></tr><tr><td>New function</td><td>\\(g(x)=f(x-3)+5\\)</td></tr></table>",
        q: "The vertex of \\(g(x)\\) is at:",
        options: ["\\((3,5)\\)", "\\((-3,5)\\)", "\\((3,-5)\\)", "\\((-3,-5)\\)"],
        ans: "\\((3,5)\\)",
        reason: "The base parabola's vertex (0,0) moves to (3,5) under this shift."
      },
      {
        stimulus: "<table><tr><th>Transformation</th><th>Rule</th></tr><tr><td>Base function</td><td>\\(f(x)=x^2\\)</td></tr><tr><td>New function</td><td>\\(g(x)=f(x-3)+5\\)</td></tr></table>",
        q: "The axis of symmetry of \\(g(x)\\) is:",
        options: ["\\(x=3\\)", "\\(x=-3\\)", "\\(x=5\\)", "\\(x=-5\\)"],
        ans: "\\(x=3\\)",
        reason: "The axis of symmetry passes through the vertex's x-coordinate, \\(x=3\\)."
      },
      {
        stimulus: "<table><tr><th>Transformation</th><th>Rule</th></tr><tr><td>Base function</td><td>\\(f(x)=x^2\\)</td></tr><tr><td>New function</td><td>\\(g(x)=f(x-3)+5\\)</td></tr></table>",
        q: "The minimum value of \\(g(x)\\) is:",
        options: ["5", "3", "\\(-5\\)", "0"],
        ans: "5",
        reason: "Since the parabola opens upward, its minimum output equals the vertex's y-coordinate, 5."
      },
      {
        stimulus: "<table><tr><th>Population model</th><th>Value</th></tr><tr><td>\\(A(t)=500(1.2)^t\\)</td><td>\\(t\\) in hours</td></tr></table>",
        q: "The initial population (at \\(t=0\\)) is:",
        options: ["500", "600", "1.2", "100"],
        ans: "500",
        reason: "Substituting \\(t=0\\) gives \\(A(0)=500(1.2)^0=500\\)."
      },
      {
        stimulus: "<table><tr><th>Population model</th><th>Value</th></tr><tr><td>\\(A(t)=500(1.2)^t\\)</td><td>\\(t\\) in hours</td></tr></table>",
        q: "The growth rate per hour is:",
        options: ["12%", "20%", "1.2%", "2%"],
        ans: "20%",
        reason: "The base \\(1.2=1+0.20\\), so the growth rate is 20% per hour."
      },
      {
        stimulus: "<table><tr><th>Population model</th><th>Value</th></tr><tr><td>\\(A(t)=500(1.2)^t\\)</td><td>\\(t\\) in hours</td></tr></table>",
        q: "After 1 hour, the population is:",
        options: ["500", "520", "600", "610"],
        ans: "600",
        reason: "\\(A(1)=500(1.2)^1=600\\)."
      },
      {
        stimulus: "<table><tr><th>Population model</th><th>Value</th></tr><tr><td>\\(A(t)=500(1.2)^t\\)</td><td>\\(t\\) in hours</td></tr></table>",
        q: "This model represents:",
        options: ["exponential decay", "linear growth", "exponential growth", "quadratic growth"],
        ans: "exponential growth",
        reason: "Since the base 1.2 exceeds 1, the population grows exponentially over time."
      }
    ];
  }
});
