// Class 12 Math -- Chapter 8: Inverse Trigonometric Functions and Their Graphs
// Converted from the 300-question Class 12 MCQ bank (chapters 8-10), with
// short explanations added for every question.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch8",
  label: "Chapter 8: Inverse Trigonometric Functions and Their Graphs",
  order: 8,
  questions: function () {
    return [
      {
        q: "If \\(\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2} - x\\), then the value of \\(x\\) is:",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "Since \\(\\sin^{-1}(1/2)=\\pi/6\\), solving \\(\\pi/6=\\pi/2-x\\) gives \\(x=\\pi/3\\)."
      },
      {
        q: "What is the principal value of \\(\\sec\\left[\\cos^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)\\right]\\)?",
        options: ["\\(\\frac{2}{\\sqrt{3}}\\)", "2", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)"],
        ans: "\\(\\frac{2}{\\sqrt{3}}\\)",
        reason: "Since \\(\\cos^{-1}(\\sqrt3/2)=\\pi/6\\), \\(\\sec(\\pi/6)=1/\\cos(\\pi/6)=2/\\sqrt3\\)."
      },
      {
        q: "The value of \\(\\csc\\left[\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right)\\right]\\) is:",
        options: ["-1", "\\(\\frac{1}{2}\\)", "2", "\\(-\\frac{1}{2}\\)"],
        ans: "2",
        reason: "Since \\(\\cos^{-1}(-\\sqrt3/2)=5\\pi/6\\), \\(\\csc(5\\pi/6)=1/\\sin(5\\pi/6)=2\\)."
      },
      {
        q: "The value of \\(\\cos\\left(\\frac{\\pi}{6} + \\cos^{-1}\\left(-\\frac{1}{2}\\right)\\right)\\) is:",
        options: ["\\(-\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(-\\frac{\\sqrt{3}}{2}\\)"],
        ans: "\\(-\\frac{\\sqrt{3}}{2}\\)",
        reason: "Since \\(\\cos^{-1}(-1/2)=2\\pi/3\\), the sum is \\(\\pi/6+2\\pi/3=5\\pi/6\\), and \\(\\cos(5\\pi/6)=-\\sqrt3/2\\)."
      },
      {
        q: "For what value of \\(x \\in (0, 2\\pi)\\), \\(\\sin x = -\\frac{1}{2}\\)?",
        options: ["\\(\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}, \\frac{11\\pi}{6}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\)", "\\(\\frac{7\\pi}{6}, \\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\)",
        reason: "Sine is negative in the third and fourth quadrants, giving reference angle \\(\\pi/6\\) at \\(x=\\pi+\\pi/6=7\\pi/6\\) and \\(x=2\\pi-\\pi/6=11\\pi/6\\)."
      },
      {
        q: "The value of \\(\\sin^{-1}\\left(\\frac{5}{13}\\right)\\) is:",
        options: ["\\(\\cos^{-1}\\left(\\frac{5}{12}\\right)\\)", "\\(\\csc^{-1}\\left(\\frac{13}{15}\\right)\\)", "\\(\\tan^{-1}\\left(\\frac{5}{12}\\right)\\)", "\\(\\cos\\left(\\frac{5}{13}\\right)\\)"],
        ans: "\\(\\tan^{-1}\\left(\\frac{5}{12}\\right)\\)",
        reason: "In a 5-12-13 right triangle, the angle with opposite 5 and adjacent 12 gives both \\(\\sin^{-1}(5/13)\\) and \\(\\tan^{-1}(5/12)\\) the same value."
      },
      {
        q: "If \\(\\sin^{-1}\\left(\\frac{1}{2}\\right) = \\frac{\\pi}{2} - x\\), then what is the value of \\(x\\)?",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "Since \\(\\sin^{-1}(1/2)=\\pi/6\\), solving \\(\\pi/6=\\pi/2-x\\) gives \\(x=\\pi/3\\)."
      },
      {
        q: "What results \\(\\sec^{-1}(\\infty) - \\sec^{-1}(2)\\)?",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\infty\\)", "\\(\\frac{\\pi}{6}\\)", "2"],
        ans: "\\(\\frac{\\pi}{6}\\)",
        reason: "As the argument tends to infinity, \\(\\sec^{-1}\\) approaches \\(\\pi/2\\); subtracting \\(\\sec^{-1}(2)=\\pi/3\\) gives \\(\\pi/6\\)."
      },
      {
        q: "What results \\(\\sec^{-1}(1) + \\sec^{-1}(\\sqrt{2})\\)?",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "\\(\\sec^{-1}(1)=0\\) and \\(\\sec^{-1}(\\sqrt2)=\\pi/4\\), summing to \\(\\pi/4\\)."
      },
      {
        q: "What results \\(\\sec^{-1}(1) + \\sec^{-1}(1)\\)?",
        options: ["2", "1", "0", "\\(\\sqrt{2}\\)"],
        ans: "0",
        reason: "Since \\(\\sec^{-1}(1)=0\\), the sum of two such terms is 0."
      },
      {
        q: "Arcsin (or \\(\\sin^{-1}\\)) is the inverse of which function?",
        options: ["Secant", "Sine", "Cosine", "Tangent"],
        ans: "Sine",
        reason: "By definition, arcsine is the inverse function of sine."
      },
      {
        q: "Arccos (or \\(\\cos^{-1}\\)) is the inverse of which function?",
        options: ["Cosecant", "Cotangent", "Cosine", "Sine"],
        ans: "Cosine",
        reason: "By definition, arccosine is the inverse function of cosine."
      },
      {
        q: "\\(\\tan^{-1} x\\) is also written as:",
        options: ["Arctan x", "Arcsec x", "Arccsc x", "Arccot x"],
        ans: "Arctan x",
        reason: "Arctan is simply an alternative notation for the inverse tangent function."
      },
      {
        q: "Arcsec (or \\(\\sec^{-1}\\)) is the inverse of which function?",
        options: ["Cosecant", "Cotangent", "Secant", "Sine"],
        ans: "Secant",
        reason: "By definition, arcsecant is the inverse function of secant."
      },
      {
        q: "Arccsc (or \\(\\csc^{-1}\\)) is the inverse of which function?",
        options: ["Cosine", "Cosecant", "Tangent", "Secant"],
        ans: "Cosecant",
        reason: "By definition, arccosecant is the inverse function of cosecant."
      },
      {
        q: "Arccot (or \\(\\cot^{-1}\\)) is the inverse of which function?",
        options: ["Sine", "Tangent", "Secant", "Cotangent"],
        ans: "Cotangent",
        reason: "By definition, arccotangent is the inverse function of cotangent."
      },
      {
        q: "The domain of \\(y = \\sin^{-1} x\\) is:",
        options: ["\\([0, 1]\\)", "\\(|x| \\ge 1\\)", "\\((-\\infty, \\infty)\\)", "\\([-1, 1]\\)"],
        ans: "\\([-1, 1]\\)",
        reason: "Inverse sine only accepts inputs in \\([-1,1]\\), the range of sine."
      },
      {
        q: "The range (principal values) of \\(y = \\sin^{-1} x\\) is:",
        options: ["\\([0, \\pi]\\)", "\\((0, \\pi)\\)", "\\((-\\infty, \\infty)\\)", "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)"],
        ans: "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)",
        reason: "By convention, the principal branch of inverse sine is restricted to \\([-\\pi/2,\\pi/2]\\)."
      },
      {
        q: "The domain of \\(y = \\cos^{-1} x\\) is:",
        options: ["\\([-1, 1]\\)", "\\((-\\infty, \\infty)\\)", "\\([0, \\pi]\\)", "\\(|x| \\ge 1\\)"],
        ans: "\\([-1, 1]\\)",
        reason: "Inverse cosine only accepts inputs in \\([-1,1]\\), the range of cosine."
      },
      {
        q: "The range (principal values) of \\(y = \\cos^{-1} x\\) is:",
        options: ["\\((0, 2\\pi)\\)", "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)", "\\([0, \\pi]\\)", "\\((-\\pi, \\pi)\\)"],
        ans: "\\([0, \\pi]\\)",
        reason: "By convention, the principal branch of inverse cosine is restricted to \\([0,\\pi]\\)."
      },
      {
        q: "The domain of \\(y = \\tan^{-1} x\\) is:",
        options: ["\\(|x| \\ge 1\\)", "\\([-1, 1]\\)", "\\((-\\infty, \\infty)\\)", "\\([0, \\pi]\\)"],
        ans: "\\((-\\infty, \\infty)\\)",
        reason: "Since tangent's range is all real numbers, inverse tangent accepts every real input."
      },
      {
        q: "The range (principal values) of \\(y = \\tan^{-1} x\\) is:",
        options: ["\\([0, \\pi]\\)", "\\([-1, 1]\\)", "\\((0, \\pi)\\)", "\\(\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)\\)"],
        ans: "\\(\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)\\)",
        reason: "By convention, the principal branch of inverse tangent is the open interval \\((-\\pi/2,\\pi/2)\\)."
      },
      {
        q: "The range (principal values) of \\(y = \\cot^{-1} x\\) is:",
        options: ["\\((-\\pi, 0)\\)", "\\([0, \\pi]\\)", "\\(\\left(-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right)\\)", "\\((0, \\pi)\\)"],
        ans: "\\((0, \\pi)\\)",
        reason: "By convention, the principal branch of inverse cotangent is the open interval \\((0,\\pi)\\)."
      },
      {
        q: "The domain of \\(y = \\sec^{-1} x\\) is:",
        options: ["\\((-\\infty, \\infty)\\)", "\\(x > 0\\)", "\\([-1, 1]\\)", "\\(|x| \\ge 1\\)"],
        ans: "\\(|x| \\ge 1\\)",
        reason: "Since \\(|\\sec\\theta|\\ge1\\) always, inverse secant is only defined for \\(|x|\\ge1\\)."
      },
      {
        q: "The range of \\(y = \\sec^{-1} x\\) excludes which value?",
        options: ["\\(\\pi\\)", "0", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "Secant is undefined at \\(\\pi/2\\), so this value is excluded from the range of its inverse."
      },
      {
        q: "The domain of \\(y = \\csc^{-1} x\\) is:",
        options: ["\\(|x| \\ge 1\\)", "\\([-1, 1]\\)", "\\(x \\ge 0\\)", "\\((-\\infty, \\infty)\\)"],
        ans: "\\(|x| \\ge 1\\)",
        reason: "Since \\(|\\csc\\theta|\\ge1\\) always, inverse cosecant is only defined for \\(|x|\\ge1\\)."
      },
      {
        q: "\\(\\sin^{-1}(1) = ?\\)",
        options: ["\\(\\pi\\)", "0", "\\(\\frac{\\pi}{2}\\)", "\\(-\\frac{\\pi}{2}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "Since \\(\\sin(\\pi/2)=1\\), \\(\\sin^{-1}(1)=\\pi/2\\)."
      },
      {
        q: "\\(\\sin^{-1}(-1) = ?\\)",
        options: ["0", "\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "\\(-\\frac{\\pi}{2}\\)"],
        ans: "\\(-\\frac{\\pi}{2}\\)",
        reason: "Since \\(\\sin(-\\pi/2)=-1\\), \\(\\sin^{-1}(-1)=-\\pi/2\\)."
      },
      {
        q: "\\(\\sin^{-1}(0) = ?\\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "-1", "0", "\\(\\pi\\)"],
        ans: "0",
        reason: "Since \\(\\sin(0)=0\\), \\(\\sin^{-1}(0)=0\\)."
      },
      {
        q: "\\(\\cos^{-1}(1) = ?\\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "-1", "0"],
        ans: "0",
        reason: "Since \\(\\cos(0)=1\\), \\(\\cos^{-1}(1)=0\\)."
      },
      {
        q: "\\(\\cos^{-1}(0) = ?\\)",
        options: ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "0"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "Since \\(\\cos(\\pi/2)=0\\), \\(\\cos^{-1}(0)=\\pi/2\\)."
      },
      {
        q: "\\(\\cos^{-1}(-1) = ?\\)",
        options: ["0", "\\(\\pi\\)", "\\(-\\pi\\)", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(\\pi\\)",
        reason: "Since \\(\\cos(\\pi)=-1\\), \\(\\cos^{-1}(-1)=\\pi\\)."
      },
      {
        q: "\\(\\tan^{-1}(0) = ?\\)",
        options: ["0", "\\(\\frac{\\pi}{2}\\)", "1", "\\(\\pi\\)"],
        ans: "0",
        reason: "Since \\(\\tan(0)=0\\), \\(\\tan^{-1}(0)=0\\)."
      },
      {
        q: "\\(\\tan^{-1}(1) = ?\\)",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "Since \\(\\tan(\\pi/4)=1\\), \\(\\tan^{-1}(1)=\\pi/4\\)."
      },
      {
        q: "\\(\\tan^{-1}(-1) = ?\\)",
        options: ["\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(-\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(-\\frac{\\pi}{4}\\)",
        reason: "Since \\(\\tan(-\\pi/4)=-1\\), \\(\\tan^{-1}(-1)=-\\pi/4\\)."
      },
      {
        q: "\\(\\sin^{-1}\\left(\\frac{\\sqrt{2}}{2}\\right) = ?\\)",
        options: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "Since \\(\\sin(\\pi/4)=\\sqrt2/2\\), \\(\\sin^{-1}(\\sqrt2/2)=\\pi/4\\)."
      },
      {
        q: "\\(\\cos^{-1}\\left(\\frac{1}{2}\\right) = ?\\)",
        options: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "Since \\(\\cos(\\pi/3)=1/2\\), \\(\\cos^{-1}(1/2)=\\pi/3\\)."
      },
      {
        q: "\\(\\cos^{-1}\\left(-\\frac{1}{2}\\right) = ?\\)",
        options: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(-\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)"],
        ans: "\\(\\frac{2\\pi}{3}\\)",
        reason: "Since \\(\\cos(2\\pi/3)=-1/2\\), \\(\\cos^{-1}(-1/2)=2\\pi/3\\)."
      },
      {
        q: "\\(\\tan^{-1}(\\sqrt{3}) = ?\\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "Since \\(\\tan(\\pi/3)=\\sqrt3\\), \\(\\tan^{-1}(\\sqrt3)=\\pi/3\\)."
      },
      {
        q: "\\(\\cot^{-1}(1) = ?\\)",
        options: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{3}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "Since \\(\\cot(\\pi/4)=1\\), \\(\\cot^{-1}(1)=\\pi/4\\)."
      },
      {
        q: "\\(\\cot^{-1}(0) = ?\\)",
        options: ["\\(\\pi\\)", "\\(\\frac{\\pi}{4}\\)", "0", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "Since \\(\\cot(\\pi/2)=0\\), \\(\\cot^{-1}(0)=\\pi/2\\)."
      },
      {
        q: "\\(\\sec^{-1}(2) = ?\\)",
        options: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "Since \\(\\sec(\\pi/3)=2\\), \\(\\sec^{-1}(2)=\\pi/3\\)."
      },
      {
        q: "\\(\\sec^{-1}(-2) = ?\\)",
        options: ["\\(-\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\pi\\)"],
        ans: "\\(\\frac{2\\pi}{3}\\)",
        reason: "Since \\(\\sec(2\\pi/3)=-2\\), \\(\\sec^{-1}(-2)=2\\pi/3\\)."
      },
      {
        q: "\\(\\csc^{-1}(2) = ?\\)",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{\\pi}{6}\\)",
        reason: "Since \\(\\csc(\\pi/6)=2\\), \\(\\csc^{-1}(2)=\\pi/6\\)."
      },
      {
        q: "\\(\\csc^{-1}(-1) = ?\\)",
        options: ["\\(-\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "0", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(-\\frac{\\pi}{2}\\)",
        reason: "Since \\(\\csc(-\\pi/2)=-1\\), \\(\\csc^{-1}(-1)=-\\pi/2\\)."
      },
      {
        q: "\\(\\sin^{-1}\\left(-\\frac{1}{2}\\right) = ?\\)",
        options: ["\\(-\\frac{\\pi}{6}\\)", "\\(-\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}\\)"],
        ans: "\\(-\\frac{\\pi}{6}\\)",
        reason: "Since \\(\\sin(-\\pi/6)=-1/2\\), \\(\\sin^{-1}(-1/2)=-\\pi/6\\)."
      },
      {
        q: "The graph of \\(y = \\sin^{-1} x\\) passes through:",
        options: ["\\((0, \\pi)\\)", "\\((1, \\pi)\\)", "\\((-1, \\pi/2)\\)", "\\((0, 0)\\)"],
        ans: "\\((0, 0)\\)",
        reason: "Since \\(\\sin^{-1}(0)=0\\), the graph passes through the origin."
      },
      {
        q: "Which of the following is a decreasing function on its domain?",
        options: ["\\(y = \\cos^{-1} x\\)", "\\(y = \\sin^{-1} x\\)", "\\(y = \\tan^{-1} x\\)", "None of these"],
        ans: "\\(y = \\cos^{-1} x\\)",
        reason: "Unlike \\(\\sin^{-1}x\\) and \\(\\tan^{-1}x\\), which increase on their domains, \\(\\cos^{-1}x\\) steadily decreases."
      },
      {
        q: "The horizontal asymptotes of \\(y = \\tan^{-1} x\\) are:",
        options: ["None", "\\(x = \\pm\\frac{\\pi}{2}\\)", "\\(y = 0, y = \\pi\\)", "\\(y = \\pm\\frac{\\pi}{2}\\)"],
        ans: "\\(y = \\pm\\frac{\\pi}{2}\\)",
        reason: "As x approaches \\(\\pm\\infty\\), \\(\\tan^{-1}x\\) approaches \\(\\pm\\pi/2\\), giving these horizontal asymptotes."
      },
      {
        q: "The graph of \\(y = \\cot^{-1} x\\) has horizontal asymptotes:",
        options: ["\\(y = \\pm\\frac{\\pi}{2}\\)", "\\(x = 0, x = \\pi\\)", "\\(y = 0, y = \\pi\\)", "None"],
        ans: "\\(y = 0, y = \\pi\\)",
        reason: "As x approaches \\(\\pm\\infty\\), \\(\\cot^{-1}x\\) approaches 0 or \\(\\pi\\) respectively, giving these horizontal asymptotes."
      },
      {
        q: "Trigonometric functions must have a restricted domain before inverting because, on their natural domain, they are:",
        options: ["Always positive", "Continuous", "Undefined", "Periodic and not one-to-one"],
        ans: "Periodic and not one-to-one",
        reason: "Trig functions repeat their values periodically, failing the one-to-one requirement needed for an inverse to exist without restriction."
      },
      {
        q: "\\(y = \\sin^{-1} x\\) is symmetric about the origin because it is a(n):",
        options: ["Even function", "Constant function", "Periodic function", "Odd function"],
        ans: "Odd function",
        reason: "Since \\(\\sin^{-1}(-x)=-\\sin^{-1}x\\), the function is odd, giving symmetry about the origin."
      },
      {
        q: "Which inverse trig function is not an odd function?",
        options: ["\\(\\cos^{-1} x\\)", "\\(\\tan^{-1} x\\)", "\\(\\sin^{-1} x\\)", "\\(\\csc^{-1} x\\)"],
        ans: "\\(\\cos^{-1} x\\)",
        reason: "Unlike the other options, \\(\\cos^{-1}(-x)=\\pi-\\cos^{-1}x\\ne-\\cos^{-1}x\\), so it is not odd."
      },
      {
        q: "As \\(x \\to \\infty\\), \\(\\tan^{-1} x \\to\\)",
        options: ["0", "\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\infty\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "Tangent approaches \\(\\pi/2\\) as its value grows without bound, so \\(\\tan^{-1}x\\to\\pi/2\\) as \\(x\\to\\infty\\)."
      },
      {
        q: "\\(\\sin^{-1} x + \\cos^{-1} x = ?\\)",
        options: ["0", "\\(2\\pi\\)", "\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "This is the standard complementary-angle identity relating inverse sine and inverse cosine."
      },
      {
        q: "\\(\\tan^{-1} x + \\cot^{-1} x = ?\\)",
        options: ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "0", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "This is the standard complementary-angle identity relating inverse tangent and inverse cotangent."
      },
      {
        q: "\\(\\sec^{-1} x + \\csc^{-1} x = ?\\)",
        options: ["0", "\\(2\\pi\\)", "\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "This is the standard complementary-angle identity relating inverse secant and inverse cosecant."
      },
      {
        q: "\\(\\sin^{-1}(-x) = ?\\)",
        options: ["\\(\\pi - \\sin^{-1} x\\)", "\\(\\sin^{-1} x\\)", "\\(-\\sin^{-1} x\\)", "\\(\\pi + \\sin^{-1} x\\)"],
        ans: "\\(-\\sin^{-1} x\\)",
        reason: "This reflects the odd-function property of inverse sine."
      },
      {
        q: "\\(\\cos^{-1}(-x) = ?\\)",
        options: ["\\(\\pi + \\cos^{-1} x\\)", "\\(\\cos^{-1} x\\)", "\\(\\pi - \\cos^{-1} x\\)", "\\(-\\cos^{-1} x\\)"],
        ans: "\\(\\pi - \\cos^{-1} x\\)",
        reason: "This is the standard identity showing inverse cosine is neither even nor odd."
      },
      {
        q: "\\(\\tan^{-1}(-x) = ?\\)",
        options: ["\\(-\\tan^{-1} x\\)", "\\(\\tan^{-1} x\\)", "\\(\\frac{\\pi}{2} - \\tan^{-1} x\\)", "\\(\\pi - \\tan^{-1} x\\)"],
        ans: "\\(-\\tan^{-1} x\\)",
        reason: "This reflects the odd-function property of inverse tangent."
      },
      {
        q: "\\(\\tan^{-1}(1) + \\tan^{-1}(2) + \\tan^{-1}(3) = ?\\)",
        options: ["\\(\\frac{3\\pi}{2}\\)", "\\(2\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)"],
        ans: "\\(\\pi\\)",
        reason: "This is a well-known identity: these three specific angles sum exactly to \\(\\pi\\)."
      },
      {
        q: "\\(\\tan^{-1}\\left(\\frac{1}{2}\\right) + \\tan^{-1}\\left(\\frac{1}{3}\\right) = ?\\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "Using the addition formula, \\(\\dfrac{1/2+1/3}{1-(1/2)(1/3)}=\\dfrac{5/6}{5/6}=1\\), and \\(\\tan^{-1}(1)=\\pi/4\\)."
      },
      {
        q: "\\(\\sin^{-1}\\left(\\frac{3}{5}\\right) + \\sin^{-1}\\left(\\frac{4}{5}\\right) = ?\\)",
        options: ["\\(\\pi\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "In a 3-4-5 right triangle, these two angles are complementary, summing to \\(\\pi/2\\)."
      },
      {
        q: "\\(2\\tan^{-1}\\left(\\frac{1}{2}\\right) = ?\\)",
        options: ["\\(\\tan^{-1}\\left(\\frac{4}{3}\\right)\\)", "\\(\\tan^{-1}(1)\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\tan^{-1}\\left(\\frac{3}{4}\\right)\\)"],
        ans: "\\(\\tan^{-1}\\left(\\frac{4}{3}\\right)\\)",
        reason: "Using the double-angle formula \\(\\tan(2\\theta)=\\dfrac{2m}{1-m^2}\\) with \\(m=1/2\\) gives \\(\\dfrac1{3/4}=\\dfrac43\\), so the result is \\(\\tan^{-1}(4/3)\\)."
      },
      {
        q: "\\(\\tan^{-1}(1) - \\tan^{-1}\\left(\\frac{1}{3}\\right) = ?\\)",
        options: ["\\(\\tan^{-1}(2)\\)", "0", "\\(\\frac{\\pi}{4}\\)", "\\(\\tan^{-1}\\left(\\frac{1}{2}\\right)\\)"],
        ans: "\\(\\tan^{-1}\\left(\\frac{1}{2}\\right)\\)",
        reason: "Using the subtraction formula, \\(\\dfrac{1-1/3}{1+1/3}=\\dfrac{2/3}{4/3}=\\dfrac12\\), giving \\(\\tan^{-1}(1/2)\\)."
      },
      {
        q: "Using \\(\\tan^{-1} A + \\tan^{-1} B = \\tan^{-1}\\left(\\frac{A+B}{1-AB}\\right)\\), this formula requires:",
        options: ["\\(AB < 1\\)", "\\(AB > 1\\)", "\\(A = B\\)", "\\(AB = 1\\)"],
        ans: "\\(AB < 1\\)",
        reason: "The simple addition formula for \\(\\tan^{-1}A+\\tan^{-1}B\\) applies directly only when \\(AB<1\\); otherwise a correction term is needed."
      },
      {
        q: "\\(\\sin\\left(\\cos^{-1}\\left(\\frac{3}{5}\\right)\\right) = ?\\)",
        options: ["\\(\\frac{3}{4}\\)", "\\(\\frac{4}{5}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{3}{5}\\)"],
        ans: "\\(\\frac{4}{5}\\)",
        reason: "In a 3-4-5 right triangle with adjacent 3 and hypotenuse 5, the opposite side is 4, giving sine \\(4/5\\)."
      },
      {
        q: "\\(\\cos\\left(\\sin^{-1}\\left(\\frac{5}{13}\\right)\\right) = ?\\)",
        options: ["\\(\\frac{12}{13}\\)", "\\(\\frac{5}{12}\\)", "\\(\\frac{5}{13}\\)", "\\(\\frac{13}{12}\\)"],
        ans: "\\(\\frac{12}{13}\\)",
        reason: "In a 5-12-13 right triangle with opposite 5 and hypotenuse 13, the adjacent side is 12, giving cosine \\(12/13\\)."
      },
      {
        q: "\\(\\tan\\left(\\sin^{-1}\\left(\\frac{1}{2}\\right)\\right) = ?\\)",
        options: ["\\(\\frac{1}{\\sqrt{3}}\\)", "\\(\\sqrt{3}\\)", "1", "\\(\\frac{1}{2}\\)"],
        ans: "\\(\\frac{1}{\\sqrt{3}}\\)",
        reason: "Since \\(\\sin^{-1}(1/2)=\\pi/6\\), \\(\\tan(\\pi/6)=1/\\sqrt3\\)."
      },
      {
        q: "\\(\\sin\\left(\\tan^{-1}\\left(\\frac{3}{4}\\right)\\right) = ?\\)",
        options: ["\\(\\frac{4}{5}\\)", "\\(\\frac{3}{5}\\)", "\\(\\frac{4}{3}\\)", "\\(\\frac{3}{4}\\)"],
        ans: "\\(\\frac{3}{5}\\)",
        reason: "In a 3-4-5 right triangle with opposite 3 and adjacent 4, the hypotenuse is 5, giving sine \\(3/5\\)."
      },
      {
        q: "\\(\\cos\\left(\\tan^{-1}(1)\\right) = ?\\)",
        options: ["1", "0", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{\\sqrt{2}}\\)"],
        ans: "\\(\\frac{1}{\\sqrt{2}}\\)",
        reason: "Since \\(\\tan^{-1}(1)=\\pi/4\\), \\(\\cos(\\pi/4)=1/\\sqrt2\\)."
      },
      {
        q: "\\(\\sec\\left(\\sin^{-1}\\left(\\frac{3}{5}\\right)\\right) = ?\\)",
        options: ["\\(\\frac{5}{3}\\)", "\\(\\frac{5}{4}\\)", "\\(\\frac{3}{5}\\)", "\\(\\frac{4}{5}\\)"],
        ans: "\\(\\frac{5}{4}\\)",
        reason: "In a 3-4-5 right triangle with opposite 3 and hypotenuse 5, the adjacent side is 4, giving \\(\\sec\\theta=5/4\\)."
      },
      {
        q: "\\(\\tan\\left(\\cos^{-1}\\left(\\frac{\\sqrt{3}}{2}\\right)\\right) = ?\\)",
        options: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\sqrt{3}\\)", "1", "\\(\\frac{1}{\\sqrt{3}}\\)"],
        ans: "\\(\\frac{1}{\\sqrt{3}}\\)",
        reason: "Since \\(\\cos^{-1}(\\sqrt3/2)=\\pi/6\\), \\(\\tan(\\pi/6)=1/\\sqrt3\\)."
      },
      {
        q: "\\(\\cot\\left(\\sin^{-1}(1)\\right) = ?\\)",
        options: ["1", "-1", "0", "\\(\\infty\\)"],
        ans: "0",
        reason: "Since \\(\\sin^{-1}(1)=\\pi/2\\), \\(\\cot(\\pi/2)=0\\)."
      },
      {
        q: "\\(\\csc\\left(\\cos^{-1}(0)\\right) = ?\\)",
        options: ["-1", "\\(\\infty\\)", "1", "0"],
        ans: "1",
        reason: "Since \\(\\cos^{-1}(0)=\\pi/2\\), \\(\\csc(\\pi/2)=1\\)."
      },
      {
        q: "\\(\\sin\\left(2\\sin^{-1}\\left(\\frac{1}{2}\\right)\\right) = ?\\)",
        options: ["1", "\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{2}\\)", "0"],
        ans: "\\(\\frac{\\sqrt{3}}{2}\\)",
        reason: "Since \\(\\sin^{-1}(1/2)=\\pi/6\\), \\(\\sin(2\\cdot\\pi/6)=\\sin(\\pi/3)=\\sqrt3/2\\)."
      },
      {
        q: "If \\(\\sin^{-1} x = \\frac{\\pi}{6}\\), then \\(x = ?\\)",
        options: ["\\(\\frac{\\sqrt{3}}{2}\\)", "1", "\\(\\frac{1}{\\sqrt{2}}\\)", "\\(\\frac{1}{2}\\)"],
        ans: "\\(\\frac{1}{2}\\)",
        reason: "Taking sine of both sides: \\(x=\\sin(\\pi/6)=1/2\\)."
      },
      {
        q: "If \\(\\cos^{-1} x = \\frac{\\pi}{3}\\), then \\(x = ?\\)",
        options: ["1", "\\(\\frac{1}{2}\\)", "\\(\\sqrt{3}\\)", "0"],
        ans: "\\(\\frac{1}{2}\\)",
        reason: "Taking cosine of both sides: \\(x=\\cos(\\pi/3)=1/2\\)."
      },
      {
        q: "If \\(\\tan^{-1} x = \\frac{\\pi}{4}\\), then \\(x = ?\\)",
        options: ["\\(\\sqrt{3}\\)", "\\(\\frac{1}{\\sqrt{3}}\\)", "0", "1"],
        ans: "1",
        reason: "Taking tangent of both sides: \\(x=\\tan(\\pi/4)=1\\)."
      },
      {
        q: "If \\(\\sin^{-1}(2x) = \\frac{\\pi}{2}\\), then \\(x = ?\\)",
        options: ["0", "2", "\\(\\frac{1}{2}\\)", "1"],
        ans: "\\(\\frac{1}{2}\\)",
        reason: "Taking sine of both sides: \\(2x=\\sin(\\pi/2)=1\\), so \\(x=1/2\\)."
      },
      {
        q: "If \\(\\cos^{-1}\\left(\\frac{x}{2}\\right) = \\frac{\\pi}{3}\\), then \\(x = ?\\)",
        options: ["2", "1", "\\(\\frac{1}{2}\\)", "\\(\\sqrt{3}\\)"],
        ans: "1",
        reason: "Taking cosine of both sides: \\(x/2=\\cos(\\pi/3)=1/2\\), so \\(x=1\\)."
      },
      {
        q: "If \\(2\\sin^{-1} x = \\frac{\\pi}{3}\\), then \\(x = ?\\)",
        options: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(\\frac{1}{\\sqrt{2}}\\)", "\\(\\frac{1}{2}\\)", "1"],
        ans: "\\(\\frac{1}{2}\\)",
        reason: "Dividing by 2 gives \\(\\sin^{-1}x=\\pi/6\\), so \\(x=\\sin(\\pi/6)=1/2\\)."
      },
      {
        q: "The identity \\(\\sin^{-1} x + \\cos^{-1} x = \\frac{\\pi}{2}\\) holds for all \\(x\\) in:",
        options: ["\\([0, 1]\\)", "\\(x \\ge 1\\)", "\\([-1, 1]\\)", "\\((-\\infty, \\infty)\\)"],
        ans: "\\([-1, 1]\\)",
        reason: "Both \\(\\sin^{-1}x\\) and \\(\\cos^{-1}x\\) are only defined on \\([-1,1]\\), so the identity only makes sense there."
      },
      {
        q: "If \\(\\tan^{-1} x + \\tan^{-1}(1) = \\frac{\\pi}{2}\\), then \\(x = ?\\)",
        options: ["-1", "0", "2", "1"],
        ans: "1",
        reason: "Since \\(\\tan^{-1}(1)=\\pi/4\\), solving gives \\(\\tan^{-1}x=\\pi/4\\), so \\(x=1\\)."
      },
      {
        q: "If \\(\\sin^{-1} x = -\\sin^{-1}\\left(\\frac{1}{2}\\right)\\), then \\(x = ?\\)",
        options: ["-1", "\\(\\frac{1}{2}\\)", "\\(-\\frac{1}{2}\\)", "0"],
        ans: "\\(-\\frac{1}{2}\\)",
        reason: "Since \\(\\sin^{-1}(1/2)=\\pi/6\\), \\(x=\\sin(-\\pi/6)=-1/2\\)."
      },
      {
        q: "If \\(\\cos^{-1}(-x) = \\frac{2\\pi}{3}\\), then \\(x = ?\\)",
        options: ["\\(\\frac{\\sqrt{3}}{2}\\)", "\\(-\\frac{1}{2}\\)", "\\(\\frac{1}{2}\\)", "1"],
        ans: "\\(\\frac{1}{2}\\)",
        reason: "Taking cosine of both sides: \\(-x=\\cos(2\\pi/3)=-1/2\\), so \\(x=1/2\\)."
      },
      {
        q: "Which statement is correct (Misconception Alert)?",
        options: ["\\(\\sin^{-1} x = \\frac{1}{\\sin x}\\)", "\\(\\sin^{-1} x = \\csc x\\) always", "\\(\\sin^{-1} x\\) denotes the inverse function, not \\(\\frac{1}{\\sin x}\\)", "\\(\\sin^{-1} x = (\\sin x)^{-1}\\)"],
        ans: "\\(\\sin^{-1} x\\) denotes the inverse function, not \\(\\frac{1}{\\sin x}\\)",
        reason: "The \\(-1\\) superscript on an inverse trig function denotes function inversion, not a reciprocal — a common notational misconception."
      },
      {
        q: "The graph of \\(y = \\sin^{-1} x\\) is obtained by reflecting the restricted sine graph about the line:",
        options: ["\\(x = 0\\)", "\\(y = 0\\)", "\\(y = -x\\)", "\\(y = x\\)"],
        ans: "\\(y = x\\)",
        reason: "Any function's graph and its inverse's graph are always mirror images of each other across the line \\(y=x\\)."
      },
      {
        q: "For \\(x \\in [-1, 1]\\), \\(\\sin(\\sin^{-1} x) = ?\\)",
        options: ["\\(x\\)", "\\(-x\\)", "1", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(x\\)",
        reason: "By the defining property of inverse functions, applying sine to its own inverse returns the original input x."
      },
      {
        q: "\\(\\sin^{-1}(\\sin x) = x\\) holds only when \\(x\\) lies in:",
        options: ["\\((-\\infty, \\infty)\\)", "\\([0, \\pi]\\)", "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)", "\\([0, 2\\pi]\\)"],
        ans: "\\(\\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)",
        reason: "This identity holds only within sine's restricted principal domain, \\([-\\pi/2,\\pi/2]\\), where sine is one-to-one."
      },
      {
        q: "For each \\(x \\in [-1, 1]\\), how many values does the principal branch of \\(\\sin^{-1} x\\) give?",
        options: ["Infinitely many", "Exactly one", "Exactly two", "Zero"],
        ans: "Exactly one",
        reason: "By construction, the principal branch of an inverse function is single-valued, giving exactly one output per input."
      },
      {
        q: "\\(\\tan^{-1} x\\) is classified as which type of function?",
        options: ["Periodic only", "Neither even nor odd", "Even", "Odd"],
        ans: "Odd",
        reason: "Since \\(\\tan^{-1}(-x)=-\\tan^{-1}x\\), inverse tangent is an odd function."
      },
      {
        q: "\\(\\cos^{-1} x\\) is classified as which type of function?",
        options: ["Even", "Neither even nor odd", "Odd", "Both even and odd"],
        ans: "Neither even nor odd",
        reason: "Since \\(\\cos^{-1}(-x)=\\pi-\\cos^{-1}x\\), which is neither \\(\\cos^{-1}x\\) nor \\(-\\cos^{-1}x\\), the function is neither even nor odd."
      },
      {
        q: "Which inverse function has principal range \\((0, \\pi)\\)?",
        options: ["\\(\\csc^{-1} x\\)", "\\(\\tan^{-1} x\\)", "\\(\\sin^{-1} x\\)", "\\(\\cot^{-1} x\\)"],
        ans: "\\(\\cot^{-1} x\\)",
        reason: "By convention, \\(\\cot^{-1}x\\) is the inverse trig function whose principal range is exactly \\((0,\\pi)\\)."
      },
      {
        q: "\\(\\sec^{-1}(1) = ?\\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "\\(\\pi\\)", "0", "-1"],
        ans: "0",
        reason: "Since \\(\\sec(0)=1\\), \\(\\sec^{-1}(1)=0\\)."
      },
      {
        q: "\\(\\csc^{-1}(1) = ?\\)",
        options: ["\\(\\pi\\)", "0", "\\(-\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "Since \\(\\csc(\\pi/2)=1\\), \\(\\csc^{-1}(1)=\\pi/2\\)."
      },
      {
        q: "\\(\\cot^{-1}(-1) = ?\\)",
        options: ["\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{3\\pi}{4}\\)",
        reason: "Since \\(\\cot(3\\pi/4)=-1\\) and this lies in the principal range \\((0,\\pi)\\), \\(\\cot^{-1}(-1)=3\\pi/4\\)."
      },
      {
        q: "\\(\\sin^{-1}\\left(\\frac{1}{\\sqrt{2}}\\right) = ?\\)",
        options: ["\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{3}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "Since \\(\\sin(\\pi/4)=1/\\sqrt2\\), \\(\\sin^{-1}(1/\\sqrt2)=\\pi/4\\)."
      },
      {
        q: "\\(\\cos^{-1}\\left(-\\frac{\\sqrt{3}}{2}\\right) = ?\\)",
        options: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(-\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{5\\pi}{6}\\)",
        reason: "Since \\(\\cos(5\\pi/6)=-\\sqrt3/2\\), \\(\\cos^{-1}(-\\sqrt3/2)=5\\pi/6\\)."
      },
      {
        q: "\\(\\tan^{-1}(-\\sqrt{3}) = ?\\)",
        options: ["\\(-\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(-\\frac{\\pi}{3}\\)"],
        ans: "\\(-\\frac{\\pi}{3}\\)",
        reason: "Since \\(\\tan(-\\pi/3)=-\\sqrt3\\), \\(\\tan^{-1}(-\\sqrt3)=-\\pi/3\\)."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Domain</th><th>Range</th></tr><tr><td>\\(y=\\sin^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)</td></tr><tr><td>\\(y=\\cos^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\([0,\\pi]\\)</td></tr><tr><td>\\(y=\\tan^{-1}x\\)</td><td>\\((-\\infty,\\infty)\\)</td><td>\\(\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\)</td></tr></table>",
        q: "Using the table, which function has range \\([0,\\pi]\\)?",
        options: ["\\(\\tan^{-1}x\\)", "\\(\\cos^{-1}x\\)", "\\(\\cot^{-1}x\\)", "\\(\\sin^{-1}x\\)"],
        ans: "\\(\\cos^{-1}x\\)",
        reason: "The table lists \\([0,\\pi]\\) as the range specifically for \\(\\cos^{-1}x\\)."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Domain</th><th>Range</th></tr><tr><td>\\(y=\\sin^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)</td></tr><tr><td>\\(y=\\cos^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\([0,\\pi]\\)</td></tr><tr><td>\\(y=\\tan^{-1}x\\)</td><td>\\((-\\infty,\\infty)\\)</td><td>\\(\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\)</td></tr></table>",
        q: "A surveyor measures \\(\\theta = \\cos^{-1}(0.5)\\) using the table's \\(\\cos^{-1}\\) row. What is \\(\\theta\\)?",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(\\frac{2\\pi}{3}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "Since \\(\\cos(\\pi/3)=0.5\\), \\(\\cos^{-1}(0.5)=\\pi/3\\)."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Domain</th><th>Range</th></tr><tr><td>\\(y=\\sin^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)</td></tr><tr><td>\\(y=\\cos^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\([0,\\pi]\\)</td></tr><tr><td>\\(y=\\tan^{-1}x\\)</td><td>\\((-\\infty,\\infty)\\)</td><td>\\(\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\)</td></tr></table>",
        q: "According to the table, which function's domain is all real numbers?",
        options: ["None of these", "\\(\\sin^{-1}x\\)", "\\(\\tan^{-1}x\\)", "\\(\\cos^{-1}x\\)"],
        ans: "\\(\\tan^{-1}x\\)",
        reason: "The table shows \\((-\\infty,\\infty)\\) as the domain specifically for \\(\\tan^{-1}x\\)."
      },
      {
        stimulus: "<table><tr><th>Function</th><th>Domain</th><th>Range</th></tr><tr><td>\\(y=\\sin^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)</td></tr><tr><td>\\(y=\\cos^{-1}x\\)</td><td>\\([-1,1]\\)</td><td>\\([0,\\pi]\\)</td></tr><tr><td>\\(y=\\tan^{-1}x\\)</td><td>\\((-\\infty,\\infty)\\)</td><td>\\(\\left(-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right)\\)</td></tr></table>",
        q: "For \\(y=\\sin^{-1}x\\), an input of \\(x=1\\) (the edge of the domain in the table) gives \\(y=\\):",
        options: ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "0", "undefined"],
        ans: "\\(\\frac{\\pi}{2}\\)",
        reason: "At the domain's right edge, \\(x=1\\), \\(\\sin^{-1}(1)\\) equals the top of its range, \\(\\pi/2\\)."
      },
      {
        stimulus: "A ramp designer needs the angle of elevation \\(\\theta\\) for different ramp rise/run ratios, using \\(\\theta=\\tan^{-1}\\left(\\dfrac{\\text{rise}}{\\text{run}}\\right)\\).<table><tr><th>Ramp</th><th>Rise</th><th>Run</th><th>Ratio</th></tr><tr><td>A</td><td>1</td><td>1</td><td>1</td></tr><tr><td>B</td><td>1</td><td>\\(\\sqrt{3}\\)</td><td>\\(\\frac{1}{\\sqrt{3}}\\)</td></tr><tr><td>C</td><td>\\(\\sqrt{3}\\)</td><td>1</td><td>\\(\\sqrt{3}\\)</td></tr></table>",
        q: "What is the angle \\(\\theta\\) for Ramp A?",
        options: ["\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{3}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "\\(\\theta=\\tan^{-1}(1)=\\pi/4\\)."
      },
      {
        stimulus: "A ramp designer needs the angle of elevation \\(\\theta\\) for different ramp rise/run ratios, using \\(\\theta=\\tan^{-1}\\left(\\dfrac{\\text{rise}}{\\text{run}}\\right)\\).<table><tr><th>Ramp</th><th>Rise</th><th>Run</th><th>Ratio</th></tr><tr><td>A</td><td>1</td><td>1</td><td>1</td></tr><tr><td>B</td><td>1</td><td>\\(\\sqrt{3}\\)</td><td>\\(\\frac{1}{\\sqrt{3}}\\)</td></tr><tr><td>C</td><td>\\(\\sqrt{3}\\)</td><td>1</td><td>\\(\\sqrt{3}\\)</td></tr></table>",
        q: "What is the angle \\(\\theta\\) for Ramp B?",
        options: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{\\pi}{6}\\)",
        reason: "\\(\\theta=\\tan^{-1}(1/\\sqrt3)=\\pi/6\\)."
      },
      {
        stimulus: "A ramp designer needs the angle of elevation \\(\\theta\\) for different ramp rise/run ratios, using \\(\\theta=\\tan^{-1}\\left(\\dfrac{\\text{rise}}{\\text{run}}\\right)\\).<table><tr><th>Ramp</th><th>Rise</th><th>Run</th><th>Ratio</th></tr><tr><td>A</td><td>1</td><td>1</td><td>1</td></tr><tr><td>B</td><td>1</td><td>\\(\\sqrt{3}\\)</td><td>\\(\\frac{1}{\\sqrt{3}}\\)</td></tr><tr><td>C</td><td>\\(\\sqrt{3}\\)</td><td>1</td><td>\\(\\sqrt{3}\\)</td></tr></table>",
        q: "What is the angle \\(\\theta\\) for Ramp C?",
        options: ["\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{3}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "\\(\\theta=\\tan^{-1}(\\sqrt3)=\\pi/3\\)."
      },
      {
        stimulus: "A ramp designer needs the angle of elevation \\(\\theta\\) for different ramp rise/run ratios, using \\(\\theta=\\tan^{-1}\\left(\\dfrac{\\text{rise}}{\\text{run}}\\right)\\).<table><tr><th>Ramp</th><th>Rise</th><th>Run</th><th>Ratio</th></tr><tr><td>A</td><td>1</td><td>1</td><td>1</td></tr><tr><td>B</td><td>1</td><td>\\(\\sqrt{3}\\)</td><td>\\(\\frac{1}{\\sqrt{3}}\\)</td></tr><tr><td>C</td><td>\\(\\sqrt{3}\\)</td><td>1</td><td>\\(\\sqrt{3}\\)</td></tr></table>",
        q: "Ranking the three ramps from smallest to largest angle of elevation gives the order:",
        options: ["C, B, A", "B, A, C", "A, B, C", "B, C, A"],
        ans: "B, A, C",
        reason: "Comparing the three angles, \\(\\pi/6<\\pi/4<\\pi/3\\), so the order from smallest to largest is B, A, C."
      },
      {
        stimulus: "An engineer models the angular position of a rotating arm using \\(f(t) = \\sin^{-1}(\\sin t)\\) for \\(t \\in [0, 2\\pi]\\), and a second signal \\(g(t) = \\tan^{-1}(\\tan t)\\) valid away from the asymptotes.",
        q: "\\(f(t) = \\sin^{-1}(\\sin t) = t\\) holds only for \\(t\\) restricted to which interval?",
        options: ["\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)", "\\([0,\\pi]\\)", "\\([0,2\\pi]\\)", "\\((-\\infty,\\infty)\\)"],
        ans: "\\(\\left[-\\frac{\\pi}{2},\\frac{\\pi}{2}\\right]\\)",
        reason: "This identity only holds on the principal domain of sine, \\([-\\pi/2,\\pi/2]\\)."
      },
      {
        stimulus: "An engineer models the angular position of a rotating arm using \\(f(t) = \\sin^{-1}(\\sin t)\\) for \\(t \\in [0, 2\\pi]\\), and a second signal \\(g(t) = \\tan^{-1}(\\tan t)\\) valid away from the asymptotes.",
        q: "The function \\(g(t) = \\tan^{-1}(\\tan t)\\) is undefined (has asymptotes) at:",
        options: ["\\(t=\\frac{\\pi}{2},\\frac{3\\pi}{2}\\)", "Nowhere; it is defined everywhere", "\\(t=0,\\pi,2\\pi\\)", "\\(t=\\frac{\\pi}{4},\\frac{3\\pi}{4}\\)"],
        ans: "\\(t=\\frac{\\pi}{2},\\frac{3\\pi}{2}\\)",
        reason: "Tangent itself is undefined at \\(\\pi/2\\) and \\(3\\pi/2\\) within \\([0,2\\pi]\\), so the composite function has asymptotes there."
      },
      {
        stimulus: "An engineer models the angular position of a rotating arm using \\(f(t) = \\sin^{-1}(\\sin t)\\) for \\(t \\in [0, 2\\pi]\\), and a second signal \\(g(t) = \\tan^{-1}(\\tan t)\\) valid away from the asymptotes.",
        q: "For \\(t = \\frac{3\\pi}{4}\\) (outside the principal range of \\(f\\)), \\(f(t) = \\sin^{-1}\\left(\\sin\\frac{3\\pi}{4}\\right)\\) equals:",
        options: ["\\(\\frac{3\\pi}{4}\\)", "\\(-\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "Since \\(\\sin(3\\pi/4)=\\sqrt2/2\\), and inverse sine returns the principal-range angle, \\(\\sin^{-1}(\\sqrt2/2)=\\pi/4\\), not \\(3\\pi/4\\) itself."
      },
      {
        stimulus: "An engineer models the angular position of a rotating arm using \\(f(t) = \\sin^{-1}(\\sin t)\\) for \\(t \\in [0, 2\\pi]\\), and a second signal \\(g(t) = \\tan^{-1}(\\tan t)\\) valid away from the asymptotes.",
        q: "This illustrates the general principle that \\(\\sin^{-1}(\\sin t) = t\\) fails outside the principal range because \\(\\sin^{-1}\\) always returns a value in its:",
        options: ["Period", "Domain", "Asymptote set", "Range"],
        ans: "Range",
        reason: "By definition, \\(\\sin^{-1}\\) always outputs a value from its own principal range, regardless of the original angle's actual value."
      }
    ];
  }
});
