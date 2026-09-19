// Class 12 Math -- Chapter 9: Solution of Trigonometric Equations
// Converted from the 300-question Class 12 MCQ bank (chapters 8-10), with
// short explanations added for every question.
// NOTE: Q15 and Q23 answer keys were corrected (verified against direct
// computation); Q6 and Q16 have answer sets that do not exactly match full
// direct verification -- see delivery notes.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch9",
  label: "Chapter 9: Solution of Trigonometric Equations",
  order: 9,
  questions: function () {
    return [
      {
        q: "If \\(\\tan(-\\theta) = -\\tan(\\theta)\\), then which property is used?",
        options: ["Shift property", "Periodic property", "Even property", "Odd property"],
        ans: "Odd property",
        reason: "Tangent is an odd function, satisfying \\(\\tan(-\\theta)=-\\tan\\theta\\)."
      },
      {
        q: "What is the general solution of \\(\\tan(\\theta) = 1\\)?",
        options: ["\\(\\theta = \\frac{\\pi}{4} + n\\pi\\)", "\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)", "\\(\\theta = \\frac{3\\pi}{4} + n\\pi\\)", "\\(\\theta = \\frac{\\pi}{4} + 2n\\pi\\)"],
        ans: "\\(\\theta = \\frac{\\pi}{4} + n\\pi\\)",
        reason: "Since tangent has period \\(\\pi\\), all solutions of \\(\\tan\\theta=1\\) are \\(\\pi/4\\) plus integer multiples of \\(\\pi\\)."
      },
      {
        q: "If \\(\\sin(\\theta + \\pi) = -\\sin(\\theta)\\), then what identity is used?",
        options: ["Phase shift identity", "Periodic identity", "Co-function identity", "Even identity"],
        ans: "Periodic identity",
        reason: "This reflects the periodic (shift-by-\\(\\pi\\)) identity of sine, which flips its sign."
      },
      {
        q: "Which identity is correctly based on the translation property?",
        options: ["\\(\\sin(\\theta+\\pi)=\\sin\\theta\\)", "\\(\\cos(\\theta+\\pi)=-\\cos\\theta\\)", "\\(\\tan(\\theta+\\pi)=-\\tan\\theta\\)", "\\(\\cos(\\theta+\\pi)=\\cos\\theta\\)"],
        ans: "\\(\\cos(\\theta+\\pi)=-\\cos\\theta\\)",
        reason: "Shifting cosine by \\(\\pi\\) reverses its sign, giving \\(\\cos(\\theta+\\pi)=-\\cos\\theta\\)."
      },
      {
        q: "Which represents a solution of \\(2\\cos x + \\sqrt{2} = 0\\), \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)",
        reason: "Solving gives \\(\\cos x=-\\dfrac{\\sqrt2}2\\), whose solutions in \\([0,2\\pi]\\) are \\(3\\pi/4\\) and \\(5\\pi/4\\)."
      },
      {
        q: "What results on solving \\(\\cos 2\\theta = 0\\), \\(\\theta \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\{0, \\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)",
        reason: "Solving \\(2\\theta=\\pi/2+n\\pi\\) gives \\(\\theta=\\pi/4+n\\pi/2\\), yielding four values of \\(\\theta\\) in \\([0,2\\pi]\\)."
      },
      {
        q: "The particular solution of \\(\\tan 2\\theta = \\sqrt{3}\\), \\(\\theta \\in [0, 2\\pi]\\) is:",
        options: ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)",
        reason: "Since tangent has period \\(\\pi\\), doubling the angle means \\(2\\theta=\\pi/3+n\\pi\\); dividing by 2 produces four values of \\(\\theta\\) within \\([0,2\\pi]\\)."
      },
      {
        q: "On solving trigonometric equation \\(\\sin 2x = \\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\) we get:",
        options: ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)",
        reason: "Factoring \\(\\cos x(2\\sin x-\\sqrt3)=0\\) gives \\(\\cos x=0\\) (at \\(\\pi/2,3\\pi/2\\)) or \\(\\sin x=\\sqrt3/2\\) (at \\(\\pi/3,2\\pi/3\\))."
      },
      {
        q: "What is the expected solution of \\(2\\sec x - 4 = 0\\), \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{0, \\frac{\\pi}{3}, \\frac{5\\pi}{3}, 2\\pi\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\{0, \\pi\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)",
        reason: "Solving gives \\(\\sec x=2\\), i.e. \\(\\cos x=1/2\\), whose solutions are \\(\\pi/3\\) and \\(5\\pi/3\\)."
      },
      {
        q: "What results on solving the trigonometric equation \\((\\tan x)(\\cot x) = 2\\), \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\{\\}\\) (no solution)"],
        ans: "\\(\\{\\}\\) (no solution)",
        reason: "Since \\(\\tan x\\cdot\\cot x=1\\) identically wherever both are defined, it can never equal 2, so there is no solution."
      },
      {
        q: "If \\(\\sin(2x) = \\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\), then the value of \\(x\\) is:",
        options: ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\{0, \\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}, \\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)",
        reason: "Factoring \\(\\cos x(2\\sin x-\\sqrt3)=0\\) gives \\(\\cos x=0\\) (at \\(\\pi/2,3\\pi/2\\)) or \\(\\sin x=\\sqrt3/2\\) (at \\(\\pi/3,2\\pi/3\\))."
      },
      {
        q: "If \\(\\tan\\theta = 2\\), \\(\\theta \\in [0, 2\\pi]\\) is:",
        options: ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\{\\tan^{-1}2, \\pi+\\tan^{-1}2\\}\\)"],
        ans: "\\(\\{\\tan^{-1}2, \\pi+\\tan^{-1}2\\}\\)",
        reason: "Since 2 is not a standard tangent value, the solutions are expressed using the inverse tangent itself: \\(\\tan^{-1}2\\) and \\(\\pi+\\tan^{-1}2\\) (tangent's period is \\(\\pi\\))."
      },
      {
        q: "What is the number of solutions for \\(\\sec x = 2\\) in \\([0, 2\\pi]\\)?",
        options: ["0", "3", "2", "1"],
        ans: "2",
        reason: "Since \\(\\cos x=1/2\\) has exactly two solutions in \\([0,2\\pi]\\), there are 2 solutions overall."
      },
      {
        q: "On solving a trigonometric equation \\(\\sin x = -\\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\) we get:",
        options: ["\\(\\left\\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{5\\pi}{6}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)",
        reason: "Dividing by \\(\\cos x\\) gives \\(\\tan x=-\\sqrt3\\), whose solutions in \\([0,2\\pi]\\) are \\(2\\pi/3\\) and \\(5\\pi/3\\)."
      },
      {
        q: "What is the expected solution of \\(2\\csc x - 4 = 0\\), \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{5\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\csc x=2\\), i.e. \\(\\sin x=1/2\\), whose solutions are \\(\\pi/6\\) and \\(5\\pi/6\\)."
      },
      {
        q: "What results on solving a trigonometric equation \\(\\cos 2x + 1 = 0\\), \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)",
        reason: "Solving gives \\(\\cos 2x=-1\\), so \\(2x=\\pi+2n\\pi\\), i.e. \\(x=\\pi/2+n\\pi\\), giving \\(\\pi/2\\) and \\(3\\pi/2\\) in \\([0,2\\pi]\\)."
      },
      {
        q: "On solving \\(\\cot 2\\theta = 1\\), \\(\\theta \\in [0, 2\\pi]\\), we get:",
        options: ["\\(\\{0, \\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}, \\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)",
        reason: "Solving \\(\\cot2\\theta=1\\) is equivalent to \\(\\tan2\\theta=1\\), so \\(2\\theta=\\pi/4+n\\pi\\), giving four values of \\(\\theta\\) in \\([0,2\\pi]\\)."
      },
      {
        q: "What results on solving \\(\\sin x = \\sqrt{3}\\cos x\\), \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)",
        reason: "Dividing by \\(\\cos x\\) gives \\(\\tan x=\\sqrt3\\), whose solutions in \\([0,2\\pi]\\) are \\(\\pi/3\\) and \\(4\\pi/3\\)."
      },
      {
        q: "For \\(\\sec 2\\theta - 2 = 0\\), \\(\\theta \\in [0, 2\\pi]\\), the number of solutions is:",
        options: ["0", "1", "4", "2"],
        ans: "4",
        reason: "Solving gives \\(\\cos2\\theta=1/2\\), which has four solutions across the doubled range \\([0,4\\pi]\\) for \\(2\\theta\\), hence 4 values of \\(\\theta\\)."
      },
      {
        q: "On solving trigonometric equation \\(\\sqrt{3}\\tan x - 1 = 0\\), \\(x \\in [0, 2\\pi]\\), we get:",
        options: ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\tan x=1/\\sqrt3\\), whose solutions in \\([0,2\\pi]\\) are \\(\\pi/6\\) and \\(7\\pi/6\\) (tangent's period is \\(\\pi\\))."
      },
      {
        q: "What is the expected solution of \\(2\\cos x - \\sqrt{3} = 0\\), \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{5\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\cos x=\\sqrt3/2\\), whose solutions are \\(\\pi/6\\) and \\(11\\pi/6\\)."
      },
      {
        q: "Choose the correct answer: if \\(\\sin(2x) = \\frac{\\sqrt{3}}{2}\\) with \\(x \\in [0, 2\\pi]\\), then the value of \\(x\\) is:",
        options: ["\\(\\frac{\\pi}{6}, \\frac{\\pi}{3}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{12}\\)", "\\(\\frac{\\pi}{6}, \\frac{2\\pi}{3}\\)"],
        ans: "\\(\\frac{\\pi}{6}, \\frac{\\pi}{3}\\)",
        reason: "Since \\(\\sin(\\pi/3)=\\sqrt3/2\\), setting \\(2x=\\pi/3\\) or \\(2x=2\\pi/3\\) gives \\(x=\\pi/6\\) or \\(x=\\pi/3\\)."
      },
      {
        q: "For what value of \\(x\\), does the trigonometric equation \\(\\sin x = \\cos x\\) remain true?",
        options: ["\\(\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\)",
        reason: "Dividing by \\(\\cos x\\) gives \\(\\tan x=1\\), whose solutions in \\([0,2\\pi]\\) are \\(\\pi/4\\) and \\(5\\pi/4\\)."
      },
      {
        q: "The solution of the trigonometric equation \\(2\\sin x + \\sqrt{3} = 0\\) in the 4th quadrant is:",
        options: ["\\(-\\frac{\\pi}{6}\\)", "\\(-\\frac{5\\pi}{6}\\)", "\\(-\\frac{\\pi}{3}\\)", "\\(\\frac{11\\pi}{6}\\)"],
        ans: "\\(-\\frac{\\pi}{3}\\)",
        reason: "Solving gives \\(\\sin x=-\\sqrt3/2\\); the fourth-quadrant solution, expressed as a negative angle, is \\(-\\pi/3\\), co-terminal with \\(5\\pi/3\\)."
      },
      {
        q: "If \\(\\cos^2 x = \\frac{1}{2}\\) with \\(x \\in [0, \\pi]\\), then the value of \\(x\\) is:",
        options: ["\\(\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\)", "\\(\\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\)", "\\(\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\)", "\\(\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\)",
        reason: "Taking the square root gives \\(\\cos x=\\pm1/\\sqrt2\\), whose solutions in \\([0,\\pi]\\) are \\(\\pi/4\\) and \\(3\\pi/4\\)."
      },
      {
        q: "What is the solution of \\(\\sec x = 2\\), if \\(x \\in [0, \\pi]\\)?",
        options: ["\\(\\frac{\\pi}{3}\\)", "\\(-\\frac{\\pi}{3}\\)", "\\(-\\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{6}\\)"],
        ans: "\\(\\frac{\\pi}{3}\\)",
        reason: "Solving gives \\(\\cos x=1/2\\); within \\([0,\\pi]\\) only \\(\\pi/3\\) lies in range."
      },
      {
        q: "What is the solution of \\(\\sin x + \\cos x = 0\\), if \\(x \\in [0, \\pi]\\)?",
        options: ["\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{3}\\)"],
        ans: "\\(\\frac{3\\pi}{4}\\)",
        reason: "Dividing by \\(\\cos x\\) gives \\(\\tan x=-1\\); within \\([0,\\pi]\\) only \\(3\\pi/4\\) lies in range."
      },
      {
        q: "What is one solution of a trigonometric equation \\(\\cos x + \\sin x = \\sqrt{2}\\), if \\(x \\in [0, 2\\pi]\\)?",
        options: ["\\(\\frac{3\\pi}{4}\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{2\\pi}{4}\\)", "\\(-\\frac{\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "Rewriting as \\(\\sqrt2\\sin(x+\\pi/4)=\\sqrt2\\) gives \\(\\sin(x+\\pi/4)=1\\), so \\(x+\\pi/4=\\pi/2\\), i.e. \\(x=\\pi/4\\)."
      },
      {
        q: "What is the general solution of a trigonometric equation \\(1 + \\cos x = 0\\)?",
        options: ["\\(\\pi + 2n\\pi\\)", "\\(\\pi + n\\pi\\)", "\\(\\frac{\\pi}{2} + n\\pi\\)", "\\(2n\\pi\\)"],
        ans: "\\(\\pi + 2n\\pi\\)",
        reason: "Solving gives \\(\\cos x=-1\\), whose general solution is \\(x=\\pi+2n\\pi\\)."
      },
      {
        q: "For what value \\(x \\in (0, 2\\pi)\\), \\(\\sin x = -\\frac{1}{2}\\)?",
        options: ["\\(\\frac{7\\pi}{6}, \\frac{\\pi}{6}\\)", "\\(\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\)", "\\(\\frac{5\\pi}{6}, \\frac{11\\pi}{6}\\)", "\\(\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\)"],
        ans: "\\(\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\)",
        reason: "Sine is negative in the third and fourth quadrants, giving reference angle \\(\\pi/6\\) at \\(7\\pi/6\\) and \\(11\\pi/6\\)."
      },
      {
        q: "If \\(4\\cos x - 3\\sin x = 1\\) then the number of \\(x\\) values between 0 and \\(2\\pi\\) are:",
        options: ["8", "4", "2", "6"],
        ans: "2",
        reason: "Rewriting as \\(5\\cos(x+\\phi)=1\\) gives \\(\\cos(x+\\phi)=1/5\\), which has exactly two solutions in \\([0,2\\pi]\\) since \\(-1<1/5<1\\)."
      },
      {
        q: "What is the value \\(c\\), if \\(\\sin^2\\left(\\frac{\\pi}{6}\\right) + \\sin^2\\left(\\frac{\\pi}{3}\\right) + \\tan^2\\left(\\frac{\\pi}{4}\\right) = c\\)?",
        options: ["\\(\\frac{2}{3}\\)", "2", "3", "\\(\\frac{3}{2}\\)"],
        ans: "2",
        reason: "Computing directly: \\((1/2)^2+(\\sqrt3/2)^2+1^2=1/4+3/4+1=2\\)."
      },
      {
        q: "The general solution of \\(\\sin\\theta = 0\\) is:",
        options: ["\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)", "\\(\\theta = (2n+1)\\frac{\\pi}{2}\\)", "\\(\\theta = n\\pi\\)", "\\(\\theta = 2n\\pi\\)"],
        ans: "\\(\\theta = n\\pi\\)",
        reason: "Sine equals zero at every integer multiple of \\(\\pi\\)."
      },
      {
        q: "The general solution of \\(\\cos\\theta = 0\\) is:",
        options: ["\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)", "\\(\\theta = 2n\\pi\\)", "\\(\\theta = n\\pi\\)", "\\(\\theta = n\\pi + (-1)^n\\frac{\\pi}{2}\\)"],
        ans: "\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)",
        reason: "Cosine equals zero exactly halfway between consecutive zeros of sine, at \\(\\pi/2+n\\pi\\)."
      },
      {
        q: "The general solution of \\(\\tan\\theta = 0\\) is:",
        options: ["\\(\\theta = n\\pi\\)", "\\(\\theta = 2n\\pi\\)", "\\(\\theta = \\frac{n\\pi}{2}\\)", "\\(\\theta = \\frac{\\pi}{2} + n\\pi\\)"],
        ans: "\\(\\theta = n\\pi\\)",
        reason: "Tangent equals zero wherever sine does, at every integer multiple of \\(\\pi\\)."
      },
      {
        q: "The period of \\(\\sin x\\) and \\(\\cos x\\) is:",
        options: ["\\(2\\pi\\)", "\\(\\pi\\)", "\\(4\\pi\\)", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(2\\pi\\)",
        reason: "Sine and cosine complete one full cycle every \\(2\\pi\\), their fundamental period."
      },
      {
        q: "The period of \\(\\tan x\\) and \\(\\cot x\\) is:",
        options: ["\\(3\\pi\\)", "\\(\\pi\\)", "\\(2\\pi\\)", "\\(\\frac{\\pi}{2}\\)"],
        ans: "\\(\\pi\\)",
        reason: "Tangent and cotangent repeat twice as often as sine and cosine, with period \\(\\pi\\)."
      },
      {
        q: "The period of \\(\\sec x\\) and \\(\\csc x\\) is:",
        options: ["\\(\\pi\\)", "\\(\\frac{\\pi}{2}\\)", "\\(4\\pi\\)", "\\(2\\pi\\)"],
        ans: "\\(2\\pi\\)",
        reason: "Since \\(\\sec x=1/\\cos x\\) and \\(\\csc x=1/\\sin x\\), they inherit the period \\(2\\pi\\) from cosine and sine."
      },
      {
        q: "The general solution of \\(\\sin\\theta = \\sin\\alpha\\) is:",
        options: ["\\(\\theta = n\\pi - \\alpha\\)", "\\(\\theta = 2n\\pi \\pm \\alpha\\)", "\\(\\theta = n\\pi + (-1)^n\\alpha\\)", "\\(\\theta = n\\pi + \\alpha\\)"],
        ans: "\\(\\theta = n\\pi + (-1)^n\\alpha\\)",
        reason: "This is the standard general-solution formula for \\(\\sin\\theta=\\sin\\alpha\\), reflecting sine's symmetry about \\(\\pi/2\\)."
      },
      {
        q: "The general solution of \\(\\cos\\theta = \\cos\\alpha\\) is:",
        options: ["\\(\\theta = n\\pi + (-1)^n\\alpha\\)", "\\(\\theta = 2n\\pi + \\frac{\\alpha}{2}\\)", "\\(\\theta = n\\pi + \\alpha\\)", "\\(\\theta = 2n\\pi \\pm \\alpha\\)"],
        ans: "\\(\\theta = 2n\\pi \\pm \\alpha\\)",
        reason: "This is the standard general-solution formula for \\(\\cos\\theta=\\cos\\alpha\\), reflecting cosine's even symmetry."
      },
      {
        q: "The general solution of \\(\\tan\\theta = \\tan\\alpha\\) is:",
        options: ["\\(\\theta = n\\pi + (-1)^n\\alpha\\)", "\\(\\theta = 2n\\pi \\pm \\alpha\\)", "\\(\\theta = n\\pi + \\alpha\\)", "\\(\\theta = 2n\\pi + \\alpha\\)"],
        ans: "\\(\\theta = n\\pi + \\alpha\\)",
        reason: "This is the standard general-solution formula for \\(\\tan\\theta=\\tan\\alpha\\), reflecting tangent's period \\(\\pi\\)."
      },
      {
        q: "To solve \\(\\sin x = k\\) or \\(\\cos x = k\\) for real \\(x\\), the constant \\(k\\) must satisfy:",
        options: ["\\(k > 1\\)", "\\(k \\ne 0\\)", "\\(k < -1\\)", "\\(|k| \\le 1\\)"],
        ans: "\\(|k| \\le 1\\)",
        reason: "Since sine and cosine only ever take values between \\(-1\\) and \\(1\\), a real solution exists only when \\(|k|\\le1\\)."
      },
      {
        q: "The general solution of \\(\\cos x = 1\\) is:",
        options: ["\\(x = n\\pi\\)", "\\(x = \\frac{\\pi}{2} + 2n\\pi\\)", "\\(x = 2n\\pi\\)", "\\(x = (2n+1)\\pi\\)"],
        ans: "\\(x = 2n\\pi\\)",
        reason: "Cosine equals 1 only at even multiples of \\(\\pi\\)."
      },
      {
        q: "The general solution of \\(\\sin x = 1\\) is:",
        options: ["\\(x = \\frac{\\pi}{2} + 2n\\pi\\)", "\\(x = 2n\\pi\\)", "\\(x = n\\pi\\)", "\\(x = (2n+1)\\pi\\)"],
        ans: "\\(x = \\frac{\\pi}{2} + 2n\\pi\\)",
        reason: "Sine equals 1 only at \\(\\pi/2\\) plus even multiples of \\(\\pi\\)."
      },
      {
        q: "The general solution of \\(\\cos x = -1\\) is:",
        options: ["\\(x = n\\pi\\)", "\\(x = (2n+1)\\pi\\)", "\\(x = 2n\\pi\\)", "\\(x = \\frac{\\pi}{2} + n\\pi\\)"],
        ans: "\\(x = (2n+1)\\pi\\)",
        reason: "Cosine equals \\(-1\\) only at odd multiples of \\(\\pi\\)."
      },
      {
        q: "The general solution of \\(\\sin x = -1\\) is:",
        options: ["\\(x = (2n+1)\\pi\\)", "\\(x = n\\pi\\)", "\\(x = 2n\\pi - \\frac{\\pi}{2}\\)", "\\(x = 2n\\pi + \\frac{\\pi}{2}\\)"],
        ans: "\\(x = 2n\\pi - \\frac{\\pi}{2}\\)",
        reason: "Sine equals \\(-1\\) only at \\(-\\pi/2\\) plus even multiples of \\(\\pi\\) (equivalently \\(3\\pi/2+2n\\pi\\))."
      },
      {
        q: "Solve \\(\\sin x = \\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)",
        reason: "Sine equals \\(1/2\\) in the first and second quadrants, at \\(\\pi/6\\) and \\(5\\pi/6\\)."
      },
      {
        q: "Solve \\(\\cos x = \\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)",
        reason: "Cosine equals \\(1/2\\) in the first and fourth quadrants, at \\(\\pi/3\\) and \\(5\\pi/3\\)."
      },
      {
        q: "Solve \\(\\tan x = 1\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)",
        reason: "Tangent equals 1 in the first and third quadrants, at \\(\\pi/4\\) and \\(5\\pi/4\\)."
      },
      {
        q: "Solve \\(\\sin x = -\\frac{1}{\\sqrt{2}}\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{5\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)",
        reason: "Sine equals \\(-1/\\sqrt2\\) in the third and fourth quadrants, at \\(5\\pi/4\\) and \\(7\\pi/4\\)."
      },
      {
        q: "Solve \\(\\cos x = -\\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)",
        reason: "Cosine equals \\(-1/2\\) in the second and third quadrants, at \\(2\\pi/3\\) and \\(4\\pi/3\\)."
      },
      {
        q: "Solve \\(\\tan x = -1\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)",
        reason: "Tangent equals \\(-1\\) in the second and fourth quadrants, at \\(3\\pi/4\\) and \\(7\\pi/4\\)."
      },
      {
        q: "Solve \\(2\\cos x - 1 = 0\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)",
        reason: "Solving gives \\(\\cos x=1/2\\), matching the solutions \\(\\pi/3\\) and \\(5\\pi/3\\)."
      },
      {
        q: "Solve \\(2\\sin x + 1 = 0\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{5\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\sin x=-1/2\\), matching the solutions \\(7\\pi/6\\) and \\(11\\pi/6\\)."
      },
      {
        q: "Solve \\(\\sec x = \\sqrt{2}\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)",
        reason: "Solving gives \\(\\cos x=1/\\sqrt2\\), matching the solutions \\(\\pi/4\\) and \\(7\\pi/4\\)."
      },
      {
        q: "Solve \\(\\csc x = 2\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{7\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\sin x=1/2\\), matching the solutions \\(\\pi/6\\) and \\(5\\pi/6\\)."
      },
      {
        q: "Solve \\(\\cot x = 1\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{3\\pi}{4}, \\frac{7\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{4}, \\frac{5\\pi}{4}\\right\\}\\)",
        reason: "Since \\(\\cot x=1\\) is equivalent to \\(\\tan x=1\\), the solutions match \\(\\pi/4\\) and \\(5\\pi/4\\)."
      },
      {
        q: "Solving \\(2\\sin^2 x - \\sin x - 1 = 0\\) by factoring \\((2\\sin x+1)(\\sin x-1)=0\\) gives:",
        options: ["\\(\\sin x=\\frac{1}{2}\\) or \\(\\sin x=1\\)", "\\(\\sin x=-\\frac{1}{2}\\) or \\(\\sin x=-1\\)", "\\(\\sin x=\\frac{1}{2}\\) or \\(\\sin x=-1\\)", "\\(\\sin x=-\\frac{1}{2}\\) or \\(\\sin x=1\\)"],
        ans: "\\(\\sin x=-\\frac{1}{2}\\) or \\(\\sin x=1\\)",
        reason: "Expanding the factored form directly gives \\(2\\sin x+1=0\\) or \\(\\sin x-1=0\\), i.e. \\(\\sin x=-1/2\\) or \\(\\sin x=1\\)."
      },
      {
        q: "Solving \\(2\\cos^2 x + 3\\cos x + 1 = 0\\) by factoring \\((2\\cos x+1)(\\cos x+1)=0\\) gives:",
        options: ["\\(\\cos x=-\\frac{1}{2}\\) or \\(\\cos x=1\\)", "\\(\\cos x=\\frac{1}{2}\\) or \\(\\cos x=1\\)", "\\(\\cos x=\\frac{1}{2}\\) or \\(\\cos x=-1\\)", "\\(\\cos x=-\\frac{1}{2}\\) or \\(\\cos x=-1\\)"],
        ans: "\\(\\cos x=-\\frac{1}{2}\\) or \\(\\cos x=-1\\)",
        reason: "Expanding the factored form directly gives \\(2\\cos x+1=0\\) or \\(\\cos x+1=0\\), i.e. \\(\\cos x=-1/2\\) or \\(\\cos x=-1\\)."
      },
      {
        q: "Solving \\(\\tan^2 x - 3\\tan x + 2 = 0\\) by factoring \\((\\tan x-1)(\\tan x-2)=0\\) gives:",
        options: ["\\(\\tan x=-1\\) or \\(\\tan x=-2\\)", "\\(\\tan x=1\\) or \\(\\tan x=2\\)", "\\(\\tan x=1\\) or \\(\\tan x=-2\\)", "\\(\\tan x=0\\) or \\(\\tan x=2\\)"],
        ans: "\\(\\tan x=1\\) or \\(\\tan x=2\\)",
        reason: "Expanding the factored form directly gives \\(\\tan x-1=0\\) or \\(\\tan x-2=0\\), i.e. \\(\\tan x=1\\) or \\(\\tan x=2\\)."
      },
      {
        q: "Solving \\(\\sin^2 x = \\cos^2 x\\) gives \\(\\tan^2 x = 1\\), so \\(\\tan x = ?\\)",
        options: ["\\(\\pm\\frac{1}{\\sqrt{2}}\\)", "0", "\\(\\pm 1\\)", "\\(\\pm\\sqrt{2}\\)"],
        ans: "\\(\\pm 1\\)",
        reason: "Taking the square root of \\(\\tan^2x=1\\) gives \\(\\tan x=\\pm1\\)."
      },
      {
        q: "The equation \\(2\\cos^2 x - 1 = 0\\) is equivalent to which double-angle equation?",
        options: ["\\(\\tan 2x = 0\\)", "\\(\\sin 2x = 0\\)", "\\(\\cos 2x = 0\\)", "\\(\\cos 2x = 1\\)"],
        ans: "\\(\\cos 2x = 0\\)",
        reason: "This is exactly the double-angle identity \\(\\cos2x=2\\cos^2x-1\\), rearranged and set to zero."
      },
      {
        q: "Solving \\(\\sin^2 x + \\sin x = 0\\) by factoring \\(\\sin x(\\sin x+1)=0\\) gives:",
        options: ["\\(\\sin x=1\\) or \\(\\sin x=-1\\)", "\\(\\sin x=0\\) or \\(\\sin x=1\\)", "\\(\\sin x=0\\) or \\(\\sin x=-1\\)", "\\(\\sin x=-1\\) only"],
        ans: "\\(\\sin x=0\\) or \\(\\sin x=-1\\)",
        reason: "Factoring gives \\(\\sin x=0\\) or \\(\\sin x=-1\\)."
      },
      {
        q: "Solving \\(\\cos^2 x - \\cos x = 0\\) gives:",
        options: ["\\(\\cos x=0\\) only", "\\(\\cos x=0\\) or \\(\\cos x=-1\\)", "\\(\\cos x=1\\) or \\(\\cos x=-1\\)", "\\(\\cos x=0\\) or \\(\\cos x=1\\)"],
        ans: "\\(\\cos x=0\\) or \\(\\cos x=1\\)",
        reason: "Factoring \\(\\cos x(\\cos x-1)=0\\) gives \\(\\cos x=0\\) or \\(\\cos x=1\\)."
      },
      {
        q: "Solving \\(3\\tan^2 x - 1 = 0\\) gives \\(\\tan x = ?\\)",
        options: ["\\(\\pm 1\\)", "\\(\\pm\\frac{1}{\\sqrt{3}}\\)", "\\(\\pm 3\\)", "\\(\\pm\\sqrt{3}\\)"],
        ans: "\\(\\pm\\frac{1}{\\sqrt{3}}\\)",
        reason: "Dividing by 3 gives \\(\\tan^2x=1/3\\), so \\(\\tan x=\\pm1/\\sqrt3\\)."
      },
      {
        q: "Solving \\(\\sec^2 x - 2 = 0\\) gives \\(\\sec x = ?\\)",
        options: ["\\(\\pm 2\\)", "\\(\\pm\\sqrt{2}\\)", "\\(\\pm 1\\)", "\\(\\pm\\frac{1}{\\sqrt{2}}\\)"],
        ans: "\\(\\pm\\sqrt{2}\\)",
        reason: "Adding 2 and taking the square root gives \\(\\sec^2x=2\\), so \\(\\sec x=\\pm\\sqrt2\\)."
      },
      {
        q: "Solving \\(\\csc^2 x - 4 = 0\\) gives \\(\\csc x = ?\\)",
        options: ["\\(\\pm 2\\)", "\\(\\pm 1\\)", "\\(\\pm\\frac{1}{2}\\)", "\\(\\pm 4\\)"],
        ans: "\\(\\pm 2\\)",
        reason: "Adding 4 and taking the square root gives \\(\\csc^2x=4\\), so \\(\\csc x=\\pm2\\)."
      },
      {
        q: "The double-angle formula \\(\\sin 2x = ?\\)",
        options: ["\\(\\cos^2 x - \\sin^2 x\\)", "\\(2\\cos^2 x - 1\\)", "\\(1 - 2\\sin^2 x\\)", "\\(2\\sin x\\cos x\\)"],
        ans: "\\(2\\sin x\\cos x\\)",
        reason: "This is the standard double-angle identity for sine."
      },
      {
        q: "Which is a correct form of \\(\\cos 2x\\)?",
        options: ["\\(2\\tan x\\)", "\\(2\\sin x\\cos x\\)", "\\(\\sin^2 x - \\cos^2 x\\)", "\\(1 - 2\\sin^2 x\\)"],
        ans: "\\(1 - 2\\sin^2 x\\)",
        reason: "This is one of the standard double-angle identities for cosine, using \\(\\sin^2x=1-\\cos^2x\\)."
      },
      {
        q: "Another correct form of \\(\\cos 2x\\) is:",
        options: ["\\(1 + 2\\cos^2 x\\)", "\\(2\\cos^2 x - 1\\)", "\\(\\cos^2 x + \\sin^2 x\\)", "\\(2\\sin^2 x - 1\\)"],
        ans: "\\(2\\cos^2 x - 1\\)",
        reason: "This is another standard double-angle identity for cosine, using \\(\\cos^2x=1-\\sin^2x\\)."
      },
      {
        q: "\\(\\cos 2x\\) can also be written as:",
        options: ["\\(\\cos^2 x - \\sin^2 x\\)", "\\(\\sin^2 x - \\cos^2 x\\)", "\\(\\tan^2 x - 1\\)", "\\(2\\sin x\\cos x\\)"],
        ans: "\\(\\cos^2 x - \\sin^2 x\\)",
        reason: "This is the original Pythagorean-based form of the cosine double-angle identity."
      },
      {
        q: "Solving \\(\\sin 2x = \\sin x\\) for \\(x \\in [0, 2\\pi]\\) (factor as \\(\\sin x(2\\cos x-1)=0\\)) gives the solution set:",
        options: ["\\(\\left\\{0, \\frac{2\\pi}{3}, \\pi\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}, 2\\pi\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)"],
        ans: "\\(\\left\\{0, \\frac{\\pi}{3}, \\pi, \\frac{5\\pi}{3}, 2\\pi\\right\\}\\)",
        reason: "Factoring \\(\\sin x(2\\cos x-1)=0\\) gives \\(\\sin x=0\\) (at \\(0,\\pi,2\\pi\\)) or \\(\\cos x=1/2\\) (at \\(\\pi/3,5\\pi/3\\)), combining to five solutions."
      },
      {
        q: "Solving \\(\\cos 2x = \\cos x\\) for \\(x \\in [0, 2\\pi]\\) (factor as \\((2\\cos x+1)(\\cos x-1)=0\\)) gives the solution set:",
        options: ["\\(\\left\\{0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, 2\\pi\\right\\}\\)", "\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3}, \\frac{4\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{0, \\frac{2\\pi}{3}, \\frac{4\\pi}{3}, 2\\pi\\right\\}\\)",
        reason: "Using \\(\\cos2x=2\\cos^2x-1\\), the equation becomes \\((2\\cos x+1)(\\cos x-1)=0\\), giving \\(\\cos x=-1/2\\) (at \\(2\\pi/3,4\\pi/3\\)) or \\(\\cos x=1\\) (at \\(0,2\\pi\\))."
      },
      {
        q: "Solving \\(\\sin 2x + \\cos x = 0\\) for \\(x \\in [0, 2\\pi]\\) (factor as \\(\\cos x(2\\sin x+1)=0\\)) gives the solution set:",
        options: ["\\(\\{0, \\pi, 2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{3\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{2}, \\frac{7\\pi}{6}, \\frac{3\\pi}{2}, \\frac{11\\pi}{6}\\right\\}\\)",
        reason: "Using \\(\\sin2x=2\\sin x\\cos x\\), the equation factors as \\(\\cos x(2\\sin x+1)=0\\), giving \\(\\cos x=0\\) (at \\(\\pi/2,3\\pi/2\\)) or \\(\\sin x=-1/2\\) (at \\(7\\pi/6,11\\pi/6\\))."
      },
      {
        q: "The double-angle formula for tangent, \\(\\tan 2x = ?\\)",
        options: ["\\(\\frac{2\\tan x}{1-\\tan^2 x}\\)", "\\(\\frac{2\\tan x}{1+\\tan^2 x}\\)", "\\(\\frac{1-\\tan^2 x}{2\\tan x}\\)", "\\(\\tan^2 x - 1\\)"],
        ans: "\\(\\frac{2\\tan x}{1-\\tan^2 x}\\)",
        reason: "This is the standard double-angle identity for tangent, derived from dividing the sine and cosine double-angle formulas."
      },
      {
        q: "Factoring \\(2\\sin\\theta\\cos\\theta + \\sin\\theta = 0\\) gives \\(\\sin\\theta(2\\cos\\theta+1)=0\\); this comes from simplifying:",
        options: ["\\(\\cos 2\\theta + \\sin\\theta = 0\\)", "\\(\\sin 2\\theta + \\sin\\theta = 0\\)", "\\(\\sin 2\\theta - \\sin\\theta = 0\\)", "\\(\\cos 2\\theta - \\sin\\theta = 0\\)"],
        ans: "\\(\\sin 2\\theta + \\sin\\theta = 0\\)",
        reason: "Recognizing \\(2\\sin\\theta\\cos\\theta=\\sin2\\theta\\) shows this factored form comes from simplifying \\(\\sin2\\theta+\\sin\\theta=0\\)."
      },
      {
        q: "If \\(a\\sin\\theta + b\\cos\\theta\\) is written as \\(R\\sin(\\theta+\\phi)\\), then \\(R = ?\\)",
        options: ["\\(\\sqrt{a^2+b^2}\\)", "\\(a+b\\)", "\\(\\sqrt{a^2-b^2}\\)", "\\(a^2+b^2\\)"],
        ans: "\\(\\sqrt{a^2+b^2}\\)",
        reason: "This is the standard amplitude formula for combining a sine and cosine term into a single sinusoid."
      },
      {
        q: "For \\(3\\sin\\theta + 4\\cos\\theta = R\\sin(\\theta+\\phi)\\), the value of \\(R\\) is:",
        options: ["5", "4", "3", "7"],
        ans: "5",
        reason: "With \\(a=3,b=4\\), \\(R=\\sqrt{9+16}=\\sqrt{25}=5\\)."
      },
      {
        q: "In the form \\(R\\sin(\\theta+\\phi) = a\\sin\\theta + b\\cos\\theta\\), \\(\\tan\\phi = ?\\)",
        options: ["\\(a-b\\)", "\\(\\frac{b}{a}\\)", "\\(\\frac{a}{b}\\)", "\\(ab\\)"],
        ans: "\\(\\frac{b}{a}\\)",
        reason: "Expanding \\(R\\sin(\\theta+\\phi)\\) and matching coefficients gives \\(R\\cos\\phi=a\\) and \\(R\\sin\\phi=b\\), so \\(\\tan\\phi=b/a\\)."
      },
      {
        q: "\\(\\sin\\theta + \\cos\\theta\\) can be written as:",
        options: ["\\(\\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\)", "\\(\\sqrt{2}\\sin\\theta\\)", "\\(\\sqrt{2}\\cos\\left(\\theta+\\frac{\\pi}{4}\\right)\\)", "\\(2\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\)"],
        ans: "\\(\\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\)",
        reason: "With \\(a=b=1\\), \\(R=\\sqrt2\\) and \\(\\phi=\\pi/4\\), giving \\(\\sqrt2\\sin(\\theta+\\pi/4)\\)."
      },
      {
        q: "\\(\\cos\\theta - \\sin\\theta\\) can be written as:",
        options: ["\\(\\sqrt{2}\\cos\\theta\\)", "\\(2\\cos\\theta\\)", "\\(\\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\)", "\\(\\sqrt{2}\\cos\\left(\\theta+\\frac{\\pi}{4}\\right)\\)"],
        ans: "\\(\\sqrt{2}\\cos\\left(\\theta+\\frac{\\pi}{4}\\right)\\)",
        reason: "Expanding \\(\\sqrt2\\cos(\\theta+\\pi/4)=\\sqrt2[\\cos\\theta\\cos(\\pi/4)-\\sin\\theta\\sin(\\pi/4)]=\\cos\\theta-\\sin\\theta\\)."
      },
      {
        q: "The maximum possible value of \\(a\\sin\\theta + b\\cos\\theta\\) is:",
        options: ["\\(\\sqrt{a^2+b^2}\\)", "\\(ab\\)", "\\(a+b\\)", "\\(a^2+b^2\\)"],
        ans: "\\(\\sqrt{a^2+b^2}\\)",
        reason: "The sinusoid \\(R\\sin(\\theta+\\phi)\\) attains its maximum value of R exactly."
      },
      {
        q: "The minimum possible value of \\(a\\sin\\theta + b\\cos\\theta\\) is:",
        options: ["\\(-(a+b)\\)", "\\(-ab\\)", "\\(-\\sqrt{a^2+b^2}\\)", "0"],
        ans: "\\(-\\sqrt{a^2+b^2}\\)",
        reason: "The sinusoid \\(R\\sin(\\theta+\\phi)\\) attains its minimum value of \\(-R\\) exactly."
      },
      {
        q: "To solve \\(\\sin\\theta + \\cos\\theta = 1\\) by the auxiliary-angle method, the value of \\(R\\) used is:",
        options: ["\\(\\sqrt{2}\\)", "1", "2", "\\(\\frac{1}{2}\\)"],
        ans: "\\(\\sqrt{2}\\)",
        reason: "With \\(a=b=1\\), the amplitude is \\(R=\\sqrt{1^2+1^2}=\\sqrt2\\)."
      },
      {
        q: "The sum-to-product formula for \\(\\sin C + \\sin D\\) is:",
        options: ["\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)"],
        ans: "\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)",
        reason: "This is the standard sum-to-product identity converting a sum of sines into a product."
      },
      {
        q: "The sum-to-product formula for \\(\\sin C - \\sin D\\) is:",
        options: ["\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)"],
        ans: "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)",
        reason: "This is the standard sum-to-product identity converting a difference of sines into a product."
      },
      {
        q: "The sum-to-product formula for \\(\\cos C + \\cos D\\) is:",
        options: ["\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)"],
        ans: "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)",
        reason: "This is the standard sum-to-product identity converting a sum of cosines into a product."
      },
      {
        q: "The sum-to-product formula for \\(\\cos C - \\cos D\\) is:",
        options: ["\\(2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\cos\\left(\\frac{C-D}{2}\\right)\\)", "\\(2\\cos\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)"],
        ans: "\\(-2\\sin\\left(\\frac{C+D}{2}\\right)\\sin\\left(\\frac{C-D}{2}\\right)\\)",
        reason: "This is the standard sum-to-product identity converting a difference of cosines into a product (note the leading negative sign)."
      },
      {
        q: "\\(\\sin 3\\theta + \\sin\\theta\\) simplifies (via sum-to-product) to:",
        options: ["\\(2\\sin 2\\theta\\sin\\theta\\)", "\\(2\\sin 2\\theta\\cos\\theta\\)", "\\(2\\cos 2\\theta\\cos\\theta\\)", "\\(2\\cos 2\\theta\\sin\\theta\\)"],
        ans: "\\(2\\sin 2\\theta\\cos\\theta\\)",
        reason: "Using \\(C=3\\theta,D=\\theta\\): \\(\\frac{C+D}2=2\\theta\\), \\(\\frac{C-D}2=\\theta\\), giving \\(2\\sin2\\theta\\cos\\theta\\)."
      },
      {
        q: "\\(\\cos 3\\theta - \\cos\\theta\\) simplifies (via sum-to-product) to:",
        options: ["\\(-2\\sin 2\\theta\\sin\\theta\\)", "\\(2\\cos 2\\theta\\cos\\theta\\)", "\\(-2\\cos 2\\theta\\cos\\theta\\)", "\\(2\\sin 2\\theta\\sin\\theta\\)"],
        ans: "\\(-2\\sin 2\\theta\\sin\\theta\\)",
        reason: "Using \\(C=3\\theta,D=\\theta\\) in the cosine-difference formula gives \\(-2\\sin2\\theta\\sin\\theta\\)."
      },
      {
        q: "\\(\\sin 5\\theta + \\sin 3\\theta\\) simplifies to:",
        options: ["\\(2\\sin 4\\theta\\cos\\theta\\)", "\\(2\\cos 4\\theta\\sin\\theta\\)", "\\(2\\sin 4\\theta\\sin\\theta\\)", "\\(2\\cos 4\\theta\\cos\\theta\\)"],
        ans: "\\(2\\sin 4\\theta\\cos\\theta\\)",
        reason: "Using \\(C=5\\theta,D=3\\theta\\): \\(\\frac{C+D}2=4\\theta\\), \\(\\frac{C-D}2=\\theta\\), giving \\(2\\sin4\\theta\\cos\\theta\\)."
      },
      {
        q: "In the graphical method, solutions of \\(f(x) = g(x)\\) correspond to:",
        options: ["Points where \\(f\\) is undefined", "Zeros of \\(f\\) only", "Maximum points of \\(f\\)", "Points where the two graphs intersect"],
        ans: "Points where the two graphs intersect",
        reason: "Graphically, any solution of \\(f(x)=g(x)\\) is exactly a point where the two curves cross."
      },
      {
        q: "Graphically, \\(\\sin\\theta = \\frac{\\theta}{2}\\) has how many solutions in \\(\\theta \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]\\)?",
        options: ["Exactly 1 (at \\(\\theta = 0\\))", "0", "2", "Infinitely many"],
        ans: "Exactly 1 (at \\(\\theta = 0\\))",
        reason: "Near \\(\\theta=0\\) the line \\(\\theta/2\\) and the curve \\(\\sin\\theta\\) meet only at the origin within this narrow interval, since \\(\\sin\\theta\\) stays above \\(\\theta/2\\) elsewhere in range."
      },
      {
        q: "The graph of \\(y = \\tan\\theta\\) has vertical lines it never crosses, called:",
        options: ["Nodes", "Asymptotes", "Intercepts", "Tangent lines"],
        ans: "Asymptotes",
        reason: "These vertical lines that the tangent curve approaches but never touches are called asymptotes."
      },
      {
        q: "An advantage of the graphical method for solving trigonometric equations is that it:",
        options: ["Always gives exact decimal-free answers", "Helps visualize multiple and infinite solutions", "Works only for linear equations", "Avoids the need for a table of values"],
        ans: "Helps visualize multiple and infinite solutions",
        reason: "Seeing the graph directly makes it easy to spot how many times — including infinitely many for periodic functions — the curves intersect."
      },
      {
        q: "A limitation of the graphical method is that it is:",
        options: ["Only applicable to \\(\\sin x\\)", "Less precise than algebraic methods without computational tools", "Never useful for periodic functions", "More accurate than algebraic methods"],
        ans: "Less precise than algebraic methods without computational tools",
        reason: "Without a calculator or computer, reading exact values off a hand-drawn graph is inherently less precise than solving algebraically."
      },
      {
        q: "The general solution of \\(\\tan 3x = 1\\) is:",
        options: ["\\(x = \\frac{\\pi}{4} + n\\pi\\)", "\\(x = \\frac{\\pi}{12} + \\frac{n\\pi}{3}\\)", "\\(x = \\frac{\\pi}{12} + n\\pi\\)", "\\(x = \\frac{\\pi}{3} + n\\pi\\)"],
        ans: "\\(x = \\frac{\\pi}{12} + \\frac{n\\pi}{3}\\)",
        reason: "Solving gives \\(3x=\\pi/4+n\\pi\\), so dividing by 3 gives \\(x=\\pi/12+n\\pi/3\\)."
      },
      {
        q: "The general solution of \\(\\sin 4x = 0\\) is:",
        options: ["\\(x = 4n\\pi\\)", "\\(x = \\frac{n\\pi}{2}\\)", "\\(x = n\\pi\\)", "\\(x = \\frac{n\\pi}{4}\\)"],
        ans: "\\(x = \\frac{n\\pi}{4}\\)",
        reason: "Solving gives \\(4x=n\\pi\\), so dividing by 4 gives \\(x=n\\pi/4\\)."
      },
      {
        q: "Solve \\(\\cos 2x = \\frac{1}{2}\\) for \\(x \\in [0, 2\\pi]\\):",
        options: ["\\(\\left\\{\\frac{\\pi}{3}, \\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3}, \\frac{2\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6}, \\frac{5\\pi}{6}, \\frac{7\\pi}{6}, \\frac{11\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\cos2x=1/2\\), which across the doubled range \\([0,4\\pi]\\) for \\(2x\\) yields four values of x: \\(\\pi/6,5\\pi/6,7\\pi/6,11\\pi/6\\)."
      },
      {
        q: "The period of \\(\\sin(nx)\\), where \\(n\\) is a positive integer, is:",
        options: ["\\(\\frac{\\pi}{n}\\)", "\\(\\frac{2\\pi}{n}\\)", "\\(2n\\pi\\)", "\\(n\\pi\\)"],
        ans: "\\(\\frac{2\\pi}{n}\\)",
        reason: "Since \\(\\sin(nx)\\) completes n cycles over the same span that \\(\\sin x\\) completes one, its period is \\(2\\pi/n\\)."
      },
      {
        stimulus: "<table><tr><th>Equation</th><th>Interval</th></tr><tr><td>\\(2\\sin x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(2\\cos x - \\sqrt{3} = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(\\tan x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr></table>",
        q: "Solving the first equation in the table, \\(2\\sin x - 1 = 0\\), gives the solution set:",
        options: ["\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{7\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6},\\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{2\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\sin x=1/2\\), whose solutions in \\([0,2\\pi]\\) are \\(\\pi/6\\) and \\(5\\pi/6\\)."
      },
      {
        stimulus: "<table><tr><th>Equation</th><th>Interval</th></tr><tr><td>\\(2\\sin x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(2\\cos x - \\sqrt{3} = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(\\tan x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr></table>",
        q: "Solving the second equation, \\(2\\cos x - \\sqrt{3}=0\\), gives the solution set:",
        options: ["\\(\\left\\{\\frac{\\pi}{6},\\frac{11\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6}\\right\\}\\)", "\\(\\left\\{\\frac{2\\pi}{3},\\frac{4\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{6},\\frac{11\\pi}{6}\\right\\}\\)",
        reason: "Solving gives \\(\\cos x=\\sqrt3/2\\), whose solutions in \\([0,2\\pi]\\) are \\(\\pi/6\\) and \\(11\\pi/6\\)."
      },
      {
        stimulus: "<table><tr><th>Equation</th><th>Interval</th></tr><tr><td>\\(2\\sin x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(2\\cos x - \\sqrt{3} = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(\\tan x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr></table>",
        q: "Solving the third equation, \\(\\tan x - 1 = 0\\), gives the solution set:",
        options: ["\\(\\left\\{\\frac{3\\pi}{4},\\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4},\\frac{7\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4},\\frac{5\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{4},\\frac{3\\pi}{4}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{4},\\frac{5\\pi}{4}\\right\\}\\)",
        reason: "Solving gives \\(\\tan x=1\\), whose solutions in \\([0,2\\pi]\\) are \\(\\pi/4\\) and \\(5\\pi/4\\)."
      },
      {
        stimulus: "<table><tr><th>Equation</th><th>Interval</th></tr><tr><td>\\(2\\sin x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(2\\cos x - \\sqrt{3} = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr><tr><td>\\(\\tan x - 1 = 0\\)</td><td>\\([0,2\\pi]\\)</td></tr></table>",
        q: "Which of the three equations in the table has exactly two solutions that are exactly \\(\\pi\\) radians apart?",
        options: ["All three equations", "\\(2\\sin x - 1 = 0\\) only", "\\(\\tan x - 1 = 0\\) only", "\\(2\\cos x - \\sqrt{3}=0\\) only"],
        ans: "\\(\\tan x - 1 = 0\\) only",
        reason: "Only \\(\\pi/4\\) and \\(5\\pi/4\\) (tangent's solutions) differ by exactly \\(\\pi\\); the sine and cosine solution pairs are spaced differently."
      },
      {
        stimulus: "A pendulum's horizontal displacement is modeled by \\(d(\\theta) = \\sin\\theta + \\cos\\theta\\) for \\(\\theta \\in [0, 2\\pi]\\), which can be rewritten as \\(d(\\theta) = \\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\).",
        q: "What is the maximum possible displacement \\(d(\\theta)\\) reaches?",
        options: ["\\(\\sqrt{2}\\)", "2", "1", "\\(2\\sqrt{2}\\)"],
        ans: "\\(\\sqrt{2}\\)",
        reason: "The amplitude of \\(\\sqrt2\\sin(\\theta+\\pi/4)\\) is \\(\\sqrt2\\), its maximum possible value."
      },
      {
        stimulus: "A pendulum's horizontal displacement is modeled by \\(d(\\theta) = \\sin\\theta + \\cos\\theta\\) for \\(\\theta \\in [0, 2\\pi]\\), which can be rewritten as \\(d(\\theta) = \\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\).",
        q: "At what value of \\(\\theta \\in [0,2\\pi]\\) does the pendulum reach its maximum displacement?",
        options: ["\\(\\pi\\)", "\\(\\frac{\\pi}{4}\\)", "\\(\\frac{\\pi}{2}\\)", "\\(\\frac{3\\pi}{4}\\)"],
        ans: "\\(\\frac{\\pi}{4}\\)",
        reason: "The maximum occurs where the sine term equals 1, i.e. \\(\\theta+\\pi/4=\\pi/2\\), giving \\(\\theta=\\pi/4\\)."
      },
      {
        stimulus: "A pendulum's horizontal displacement is modeled by \\(d(\\theta) = \\sin\\theta + \\cos\\theta\\) for \\(\\theta \\in [0, 2\\pi]\\), which can be rewritten as \\(d(\\theta) = \\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\).",
        q: "Solving \\(d(\\theta) = 1\\), i.e. \\(\\sin\\theta+\\cos\\theta = 1\\), for \\(\\theta \\in [0,2\\pi]\\) gives the solution set:",
        options: ["\\(\\left\\{\\frac{\\pi}{4},\\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{0,\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2},\\pi\\right\\}\\)", "\\(\\{0,\\pi\\}\\)"],
        ans: "\\(\\left\\{0,\\frac{\\pi}{2}\\right\\}\\)",
        reason: "Rewriting as \\(\\sqrt2\\sin(\\theta+\\pi/4)=1\\) gives \\(\\sin(\\theta+\\pi/4)=1/\\sqrt2\\), so \\(\\theta+\\pi/4=\\pi/4\\) or \\(3\\pi/4\\), giving \\(\\theta=0\\) or \\(\\theta=\\pi/2\\)."
      },
      {
        stimulus: "A pendulum's horizontal displacement is modeled by \\(d(\\theta) = \\sin\\theta + \\cos\\theta\\) for \\(\\theta \\in [0, 2\\pi]\\), which can be rewritten as \\(d(\\theta) = \\sqrt{2}\\sin\\left(\\theta+\\frac{\\pi}{4}\\right)\\).",
        q: "What is the minimum possible displacement \\(d(\\theta)\\) reaches over \\([0,2\\pi]\\)?",
        options: ["\\(-1\\)", "\\(-2\\)", "\\(-\\sqrt{2}\\)", "0"],
        ans: "\\(-\\sqrt{2}\\)",
        reason: "The minimum of \\(\\sqrt2\\sin(\\theta+\\pi/4)\\) is \\(-\\sqrt2\\), the negative of its amplitude."
      },
      {
        stimulus: "A student factors three trigonometric equations for \\(x \\in [0, 2\\pi]\\):<table><tr><th>Equation</th><th>Factored form</th></tr><tr><td>\\(\\sin 2x = \\sin x\\)</td><td>\\(\\sin x(2\\cos x - 1) = 0\\)</td></tr><tr><td>\\(2\\sin^2 x - \\sin x - 1 = 0\\)</td><td>\\((2\\sin x+1)(\\sin x - 1)=0\\)</td></tr><tr><td>\\(\\cos 2x + 1 = 0\\)</td><td>\\(2\\cos^2 x = 0\\)</td></tr></table>",
        q: "Using the factored form given for \\(\\sin 2x = \\sin x\\), the solution set is:",
        options: ["\\(\\left\\{0,\\frac{\\pi}{3},\\pi,\\frac{5\\pi}{3},2\\pi\\right\\}\\)", "\\(\\{0,\\pi,2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{5\\pi}{3}\\right\\}\\)", "\\(\\left\\{0,\\frac{2\\pi}{3},\\pi\\right\\}\\)"],
        ans: "\\(\\left\\{0,\\frac{\\pi}{3},\\pi,\\frac{5\\pi}{3},2\\pi\\right\\}\\)",
        reason: "Setting each factor to zero gives \\(\\sin x=0\\) (at \\(0,\\pi,2\\pi\\)) or \\(\\cos x=1/2\\) (at \\(\\pi/3,5\\pi/3\\)), combining to five solutions."
      },
      {
        stimulus: "A student factors three trigonometric equations for \\(x \\in [0, 2\\pi]\\):<table><tr><th>Equation</th><th>Factored form</th></tr><tr><td>\\(\\sin 2x = \\sin x\\)</td><td>\\(\\sin x(2\\cos x - 1) = 0\\)</td></tr><tr><td>\\(2\\sin^2 x - \\sin x - 1 = 0\\)</td><td>\\((2\\sin x+1)(\\sin x - 1)=0\\)</td></tr><tr><td>\\(\\cos 2x + 1 = 0\\)</td><td>\\(2\\cos^2 x = 0\\)</td></tr></table>",
        q: "Using the factored form for \\(2\\sin^2x-\\sin x-1=0\\), the solution set is:",
        options: ["\\(\\left\\{\\frac{\\pi}{3},\\frac{2\\pi}{3},\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6},\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{7\\pi}{6},\\frac{11\\pi}{6},\\frac{\\pi}{2}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{6},\\frac{5\\pi}{6},\\pi\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{7\\pi}{6},\\frac{11\\pi}{6},\\frac{\\pi}{2}\\right\\}\\)",
        reason: "Setting each factor to zero gives \\(\\sin x=-1/2\\) (at \\(7\\pi/6,11\\pi/6\\)) or \\(\\sin x=1\\) (at \\(\\pi/2\\)), combining to three solutions."
      },
      {
        stimulus: "A student factors three trigonometric equations for \\(x \\in [0, 2\\pi]\\):<table><tr><th>Equation</th><th>Factored form</th></tr><tr><td>\\(\\sin 2x = \\sin x\\)</td><td>\\(\\sin x(2\\cos x - 1) = 0\\)</td></tr><tr><td>\\(2\\sin^2 x - \\sin x - 1 = 0\\)</td><td>\\((2\\sin x+1)(\\sin x - 1)=0\\)</td></tr><tr><td>\\(\\cos 2x + 1 = 0\\)</td><td>\\(2\\cos^2 x = 0\\)</td></tr></table>",
        q: "Using the factored form \\(2\\cos^2x=0\\) for \\(\\cos2x+1=0\\), the solution set is:",
        options: ["\\(\\left\\{\\frac{\\pi}{4},\\frac{3\\pi}{4}\\right\\}\\)", "\\(\\left\\{\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right\\}\\)", "\\(\\{0,\\pi,2\\pi\\}\\)", "\\(\\left\\{\\frac{\\pi}{3},\\frac{2\\pi}{3}\\right\\}\\)"],
        ans: "\\(\\left\\{\\frac{\\pi}{2},\\frac{3\\pi}{2}\\right\\}\\)",
        reason: "Setting \\(2\\cos^2x=0\\) gives \\(\\cos x=0\\), whose solutions in \\([0,2\\pi]\\) are \\(\\pi/2\\) and \\(3\\pi/2\\)."
      },
      {
        stimulus: "A student factors three trigonometric equations for \\(x \\in [0, 2\\pi]\\):<table><tr><th>Equation</th><th>Factored form</th></tr><tr><td>\\(\\sin 2x = \\sin x\\)</td><td>\\(\\sin x(2\\cos x - 1) = 0\\)</td></tr><tr><td>\\(2\\sin^2 x - \\sin x - 1 = 0\\)</td><td>\\((2\\sin x+1)(\\sin x - 1)=0\\)</td></tr><tr><td>\\(\\cos 2x + 1 = 0\\)</td><td>\\(2\\cos^2 x = 0\\)</td></tr></table>",
        q: "Which of the three equations in the table has the fewest distinct solutions in \\([0,2\\pi]\\)?",
        options: ["\\(\\cos2x+1=0\\)", "All three have the same number", "\\(2\\sin^2x-\\sin x-1=0\\)", "\\(\\sin 2x=\\sin x\\)"],
        ans: "\\(\\cos2x+1=0\\)",
        reason: "Comparing solution counts: \\(\\cos2x+1=0\\) has 2, \\(2\\sin^2x-\\sin x-1=0\\) has 3, and \\(\\sin2x=\\sin x\\) has 5, so the first has the fewest."
      }
    ];
  }
});
