// Class 11 Math — Chapter 9: Trigonometric Functions
// 112 MCQs (base + stimulus-based), each with a computed/verified explanation.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch9",
  label: "Chapter 9: Trigonometric Functions",
  order: 9,
  questions: function () {
    return [
  {
    "q": "The domain of \\(y=\\sin x\\) is:",
    "options": [
      "\\(\\mathbb{R}\\) or \\((-\\infty,\\infty)\\)",
      "\\([-1,1]\\)",
      "\\(\\mathbb{R}-\\{0\\}\\)",
      "\\((0,\\infty)\\)"
    ],
    "ans": "\\(\\mathbb{R}\\) or \\((-\\infty,\\infty)\\)",
    "reason": "Sine is defined for every real number, so its domain is all of \\(\\mathbb{R}\\)."
  },
  {
    "q": "The range of \\(y=\\sin x\\) is:",
    "options": [
      "\\(\\mathbb{R}\\)",
      "\\([-1,1]\\)",
      "\\((-1,1)\\)",
      "\\([0,1]\\)"
    ],
    "ans": "\\([-1,1]\\)",
    "reason": "As the \\(y\\)-coordinate on the unit circle, sine never leaves \\([-1,1]\\)."
  },
  {
    "q": "The range of \\(y=\\cos x\\) is:",
    "options": [
      "\\([-1,1]\\)",
      "\\([0,1]\\)",
      "\\((-1,1)\\)",
      "\\(\\mathbb{R}\\)"
    ],
    "ans": "\\([-1,1]\\)",
    "reason": "As the \\(x\\)-coordinate on the unit circle, cosine never leaves \\([-1,1]\\)."
  },
  {
    "q": "The domain of \\(y=\\tan x\\) excludes points of the form:",
    "options": [
      "\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)",
      "\\(\\tfrac{n\\pi}2,\\ n\\in\\mathbb{Z}\\)",
      "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)",
      "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)"
    ],
    "ans": "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)",
    "reason": "\\(\\tan x=\\sin x/\\cos x\\) is undefined wherever \\(\\cos x=0\\), i.e. at odd multiples of \\(\\pi/2\\)."
  },
  {
    "q": "The domain of \\(y=\\cot x\\) excludes points of the form:",
    "options": [
      "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)",
      "\\(\\tfrac{n\\pi}2,\\ n\\in\\mathbb{Z}\\)",
      "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)",
      "\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)"
    ],
    "ans": "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)",
    "reason": "\\(\\cot x=\\cos x/\\sin x\\) is undefined wherever \\(\\sin x=0\\), i.e. at integer multiples of \\(\\pi\\)."
  },
  {
    "q": "The range of \\(y=\\tan x\\) is:",
    "options": [
      "\\(\\mathbb{R}-\\{0\\}\\)",
      "\\([-1,1]\\)",
      "\\((-1,1)\\)",
      "\\(\\mathbb{R}\\)"
    ],
    "ans": "\\(\\mathbb{R}\\)",
    "reason": "As \\(\\theta\\) approaches the excluded points, \\(\\tan\\theta\\) grows without bound in both directions, so its range is all of \\(\\mathbb{R}\\)."
  },
  {
    "q": "The range of \\(y=\\sec x\\) is:",
    "options": [
      "\\([-1,1]\\)",
      "\\(\\mathbb{R}-(-1,1)\\)",
      "\\(\\mathbb{R}\\)",
      "\\((-1,1)\\)"
    ],
    "ans": "\\(\\mathbb{R}-(-1,1)\\)",
    "reason": "Since \\(\\sec\\theta=1/\\cos\\theta\\) and \\(|\\cos\\theta|\\le1\\), \\(|\\sec\\theta|\\ge1\\) always — so the range excludes \\((-1,1)\\)."
  },
  {
    "q": "The range of \\(y=\\csc x\\) is:",
    "options": [
      "\\([-1,1]\\)",
      "\\((-1,1)\\)",
      "\\(\\mathbb{R}\\)",
      "\\(\\mathbb{R}-(-1,1)\\)"
    ],
    "ans": "\\(\\mathbb{R}-(-1,1)\\)",
    "reason": "Since \\(\\csc\\theta=1/\\sin\\theta\\) and \\(|\\sin\\theta|\\le1\\), \\(|\\csc\\theta|\\ge1\\) always — so the range excludes \\((-1,1)\\)."
  },
  {
    "q": "For any real \\(\\theta\\), which inequality is always true?",
    "options": [
      "\\(|\\sin\\theta|\\ge1\\)",
      "\\(|\\tan\\theta|\\le1\\)",
      "\\(|\\sec\\theta|\\le1\\)",
      "\\(|\\sin\\theta|\\le1\\)"
    ],
    "ans": "\\(|\\sin\\theta|\\le1\\)",
    "reason": "This is exactly the range restriction of sine: \\(-1\\le\\sin\\theta\\le1\\), i.e. \\(|\\sin\\theta|\\le1\\)."
  },
  {
    "q": "For any real \\(\\theta\\) where defined, which inequality is always true?",
    "options": [
      "\\(\\sec\\theta=0\\) is possible",
      "\\(|\\sec\\theta|\\ge1\\)",
      "\\(|\\sec\\theta|<1\\)",
      "\\(|\\sec\\theta|\\le1\\)"
    ],
    "ans": "\\(|\\sec\\theta|\\ge1\\)",
    "reason": "As the reciprocal of cosine (which is bounded by 1 in size), secant's size is always at least \\(1\\)."
  },
  {
    "q": "\\(\\tan\\theta\\) and \\(\\cot\\theta\\) can take:",
    "options": [
      "Any real number value",
      "Only positive values",
      "Only values in \\([-1,1]\\)",
      "Only integer values"
    ],
    "ans": "Any real number value",
    "reason": "Since dividing by an arbitrarily small cosine (or sine) can produce an arbitrarily large result, \\(\\tan\\theta\\) and \\(\\cot\\theta\\) range over every real number."
  },
  {
    "q": "\\(\\sec\\theta\\) and \\(\\csc\\theta\\) cannot take any value in the interval:",
    "options": [
      "\\((1,\\infty)\\)",
      "\\((-1,1)\\)",
      "\\((-\\infty,-1)\\)",
      "\\([-1,1]\\)"
    ],
    "ans": "\\((-1,1)\\)",
    "reason": "Being reciprocals of sine and cosine (each bounded in size by 1), secant and cosecant always have size \\(\\ge1\\), so they never land inside \\((-1,1)\\)."
  },
  {
    "q": "The domain of \\(y=\\sec x\\) excludes:",
    "options": [
      "\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)",
      "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)",
      "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)",
      "All real numbers"
    ],
    "ans": "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)",
    "reason": "\\(\\sec x=1/\\cos x\\) is undefined exactly where \\(\\cos x=0\\), at odd multiples of \\(\\pi/2\\)."
  },
  {
    "q": "The domain of \\(y=\\csc x\\) excludes:",
    "options": [
      "\\(2n\\pi,\\ n\\in\\mathbb{Z}\\)",
      "All real numbers",
      "\\((2n+1)\\tfrac{\\pi}2,\\ n\\in\\mathbb{Z}\\)",
      "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)"
    ],
    "ans": "\\(n\\pi,\\ n\\in\\mathbb{Z}\\)",
    "reason": "\\(\\csc x=1/\\sin x\\) is undefined exactly where \\(\\sin x=0\\), at integer multiples of \\(\\pi\\)."
  },
  {
    "q": "The domain of \\(y=4\\sin3x\\) is:",
    "options": [
      "\\([-4,4]\\)",
      "\\(\\mathbb{R}\\)",
      "\\(\\mathbb{R}-\\{0\\}\\)",
      "\\([-1,1]\\)"
    ],
    "ans": "\\(\\mathbb{R}\\)",
    "reason": "Sine is defined everywhere, and scaling the input/output doesn't change that — the domain is still all of \\(\\mathbb{R}\\)."
  },
  {
    "q": "The range of \\(y=4\\sin3x\\) is:",
    "options": [
      "\\(\\mathbb{R}\\)",
      "\\([-4,4]\\)",
      "\\([-1,1]\\)",
      "\\([-3,3]\\)"
    ],
    "ans": "\\([-4,4]\\)",
    "reason": "Multiplying \\(\\sin(3x)\\) (range \\([-1,1]\\)) by \\(4\\) stretches the range to \\([-4,4]\\)."
  },
  {
    "q": "The range of \\(y=7\\cos4x\\) is:",
    "options": [
      "\\([-4,4]\\)",
      "\\(\\mathbb{R}\\)",
      "\\([-7,7]\\)",
      "\\([-1,1]\\)"
    ],
    "ans": "\\([-7,7]\\)",
    "reason": "Multiplying \\(\\cos(4x)\\) (range \\([-1,1]\\)) by \\(7\\) stretches the range to \\([-7,7]\\)."
  },
  {
    "q": "The range of \\(y=\\sin\\dfrac{2x}3\\) is:",
    "options": [
      "\\(\\mathbb{R}\\)",
      "\\([0,1]\\)",
      "\\(\\left[-\\tfrac23,\\tfrac23\\right]\\)",
      "\\([-1,1]\\)"
    ],
    "ans": "\\([-1,1]\\)",
    "reason": "A horizontal stretch/compression of the input doesn't change sine's output range, so it stays \\([-1,1]\\)."
  },
  {
    "q": "For \\(y=\\dfrac1{2\\cos x-1}\\), the range is:",
    "options": [
      "\\(\\mathbb{R}\\)",
      "\\(\\left(-\\infty,-\\tfrac13\\right]\\cup[1,\\infty)\\)",
      "\\([-1,1]\\)",
      "\\(\\left[-\\tfrac13,1\\right]\\)"
    ],
    "ans": "\\(\\left(-\\infty,-\\tfrac13\\right]\\cup[1,\\infty)\\)",
    "reason": "As \\(\\cos x\\) ranges over \\([-1,1]\\), \\(2\\cos x-1\\) ranges over \\([-3,1]\\); taking the reciprocal of that (excluding \\(0\\)) gives \\(\\left(-\\infty,-\\tfrac13\\right]\\cup[1,\\infty)\\)."
  },
  {
    "q": "For \\(y=\\dfrac1{2-\\sin3x}\\), the range is:",
    "options": [
      "\\([-1,1]\\)",
      "\\([1,3]\\)",
      "\\(\\left(-\\infty,\\tfrac13\\right)\\)",
      "\\(\\left[\\tfrac13,1\\right]\\)"
    ],
    "ans": "\\(\\left[\\tfrac13,1\\right]\\)",
    "reason": "As \\(\\sin3x\\) ranges over \\([-1,1]\\), \\(2-\\sin3x\\) ranges over \\([1,3]\\); taking the reciprocal gives \\(\\left[\\tfrac13,1\\right]\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cos(3x)\\) is:",
    "options": [
      "\\(\\dfrac{2\\pi}3\\)",
      "\\(\\dfrac{4\\pi}3\\)",
      "\\(3\\pi\\)",
      "\\(\\dfrac{\\pi}3\\)"
    ],
    "ans": "\\(\\dfrac{2\\pi}3\\)",
    "reason": "For \\(\\cos(kx)\\), the period is \\(2\\pi/|k|\\); here \\(k=3\\), giving \\(2\\pi/3\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cot\\left(\\dfrac27x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{7\\pi}2\\)",
      "\\(\\dfrac{7\\pi}4\\)",
      "\\(7\\pi\\)",
      "\\(\\dfrac{2\\pi}7\\)"
    ],
    "ans": "\\(\\dfrac{7\\pi}2\\)",
    "reason": "For \\(\\cot(kx)\\), the period is \\(\\pi/|k|\\); here \\(k=2/7\\), giving \\(\\pi/(2/7)=7\\pi/2\\)."
  },
  {
    "q": "The period of \\(f(x)=\\tan\\left(\\dfrac23x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{3\\pi}4\\)",
      "\\(\\dfrac{2\\pi}3\\)",
      "\\(\\dfrac{3\\pi}2\\)",
      "\\(3\\pi\\)"
    ],
    "ans": "\\(\\dfrac{3\\pi}2\\)",
    "reason": "For \\(\\tan(kx)\\), the period is \\(\\pi/|k|\\); here \\(k=2/3\\), giving \\(\\pi/(2/3)=3\\pi/2\\)."
  },
  {
    "q": "The period of \\(f(x)=\\sin\\left(\\dfrac32x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{3\\pi}2\\)",
      "\\(\\dfrac{8\\pi}3\\)",
      "\\(\\dfrac{2\\pi}3\\)",
      "\\(\\dfrac{4\\pi}3\\)"
    ],
    "ans": "\\(\\dfrac{4\\pi}3\\)",
    "reason": "For \\(\\sin(kx)\\), the period is \\(2\\pi/|k|\\); here \\(k=3/2\\), giving \\(2\\pi/(3/2)=4\\pi/3\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cot\\left(\\dfrac52x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{4\\pi}5\\)",
      "\\(\\dfrac{2\\pi}5\\)",
      "\\(\\dfrac{\\pi}5\\)",
      "\\(\\dfrac{5\\pi}2\\)"
    ],
    "ans": "\\(\\dfrac{2\\pi}5\\)",
    "reason": "For \\(\\cot(kx)\\), the period is \\(\\pi/|k|\\); here \\(k=5/2\\), giving \\(\\pi/(5/2)=2\\pi/5\\)."
  },
  {
    "q": "The period of \\(f(x)=\\csc\\left(\\dfrac35x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{20\\pi}3\\)",
      "\\(\\dfrac{3\\pi}5\\)",
      "\\(\\dfrac{10\\pi}3\\)",
      "\\(\\dfrac{5\\pi}3\\)"
    ],
    "ans": "\\(\\dfrac{10\\pi}3\\)",
    "reason": "For \\(\\csc(kx)\\), the period is \\(2\\pi/|k|\\); here \\(k=3/5\\), giving \\(2\\pi/(3/5)=10\\pi/3\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cot(3x)\\) is:",
    "options": [
      "\\(\\dfrac{\\pi}3\\)",
      "\\(3\\pi\\)",
      "\\(\\dfrac{\\pi}6\\)",
      "\\(\\dfrac{2\\pi}3\\)"
    ],
    "ans": "\\(\\dfrac{\\pi}3\\)",
    "reason": "For \\(\\cot(kx)\\), the period is \\(\\pi/|k|\\); here \\(k=3\\), giving \\(\\pi/3\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cot(x)\\) is:",
    "options": [
      "\\(2\\pi\\)",
      "\\(\\dfrac{\\pi}2\\)",
      "\\(\\dfrac{7\\pi}3\\)",
      "\\(\\pi\\)"
    ],
    "ans": "\\(\\pi\\)",
    "reason": "The basic period of \\(\\cot x\\) is \\(\\pi\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cos\\left(\\dfrac53x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{3\\pi}5\\)",
      "\\(\\dfrac{5\\pi}3\\)",
      "\\(\\dfrac{12\\pi}5\\)",
      "\\(\\dfrac{6\\pi}5\\)"
    ],
    "ans": "\\(\\dfrac{6\\pi}5\\)",
    "reason": "For \\(\\cos(kx)\\), the period is \\(2\\pi/|k|\\); here \\(k=5/3\\), giving \\(2\\pi/(5/3)=6\\pi/5\\)."
  },
  {
    "q": "The period of \\(f(x)=\\tan(5x)\\) is:",
    "options": [
      "\\(5\\pi\\)",
      "\\(\\dfrac{2\\pi}5\\)",
      "\\(\\dfrac{\\pi}{10}\\)",
      "\\(\\dfrac{\\pi}5\\)"
    ],
    "ans": "\\(\\dfrac{\\pi}5\\)",
    "reason": "For \\(\\tan(kx)\\), the period is \\(\\pi/|k|\\); here \\(k=5\\), giving \\(\\pi/5\\)."
  },
  {
    "q": "The period of \\(f(x)=\\sec(3x)\\) is:",
    "options": [
      "\\(\\dfrac{2\\pi}3\\)",
      "\\(\\dfrac{\\pi}3\\)",
      "\\(3\\pi\\)",
      "\\(\\dfrac{4\\pi}3\\)"
    ],
    "ans": "\\(\\dfrac{2\\pi}3\\)",
    "reason": "For \\(\\sec(kx)\\), the period is \\(2\\pi/|k|\\); here \\(k=3\\), giving \\(2\\pi/3\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cos\\left(\\dfrac75x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{20\\pi}7\\)",
      "\\(\\dfrac{10\\pi}7\\)",
      "\\(\\dfrac{5\\pi}7\\)",
      "\\(\\dfrac{7\\pi}5\\)"
    ],
    "ans": "\\(\\dfrac{10\\pi}7\\)",
    "reason": "For \\(\\cos(kx)\\), the period is \\(2\\pi/|k|\\); here \\(k=7/5\\), giving \\(2\\pi/(7/5)=10\\pi/7\\)."
  },
  {
    "q": "The period of \\(f(x)=\\csc(x)\\) is:",
    "options": [
      "\\(3\\pi\\)",
      "\\(2\\pi\\)",
      "\\(4\\pi\\)",
      "\\(\\pi\\)"
    ],
    "ans": "\\(2\\pi\\)",
    "reason": "The basic period of \\(\\csc x\\) is \\(2\\pi\\)."
  },
  {
    "q": "The period of \\(f(x)=\\csc\\left(\\dfrac32x\\right)\\) is:",
    "options": [
      "\\(\\dfrac{4\\pi}3\\)",
      "\\(\\dfrac{2\\pi}3\\)",
      "\\(\\dfrac{8\\pi}3\\)",
      "\\(\\dfrac{3\\pi}2\\)"
    ],
    "ans": "\\(\\dfrac{4\\pi}3\\)",
    "reason": "For \\(\\csc(kx)\\), the period is \\(2\\pi/|k|\\); here \\(k=3/2\\), giving \\(2\\pi/(3/2)=4\\pi/3\\)."
  },
  {
    "q": "The period of \\(y=\\sin x\\) is:",
    "options": [
      "\\(\\pi\\)",
      "\\(2\\pi\\)",
      "\\(\\dfrac{\\pi}2\\)",
      "\\(4\\pi\\)"
    ],
    "ans": "\\(2\\pi\\)",
    "reason": "The basic period of \\(\\sin x\\) is \\(2\\pi\\)."
  },
  {
    "q": "The period of \\(y=\\cos x\\) is:",
    "options": [
      "\\(\\pi\\)",
      "\\(\\dfrac{\\pi}2\\)",
      "\\(2\\pi\\)",
      "\\(4\\pi\\)"
    ],
    "ans": "\\(2\\pi\\)",
    "reason": "The basic period of \\(\\cos x\\) is \\(2\\pi\\)."
  },
  {
    "q": "The period of \\(y=\\tan x\\) is:",
    "options": [
      "\\(\\dfrac{\\pi}2\\)",
      "\\(2\\pi\\)",
      "\\(\\dfrac{3\\pi}2\\)",
      "\\(\\pi\\)"
    ],
    "ans": "\\(\\pi\\)",
    "reason": "The basic period of \\(\\tan x\\) is \\(\\pi\\) (half that of sine/cosine, since tangent repeats every half-turn)."
  },
  {
    "q": "The period of \\(y=\\cot x\\) is:",
    "options": [
      "\\(\\pi\\)",
      "\\(\\dfrac{3\\pi}2\\)",
      "\\(\\dfrac{\\pi}2\\)",
      "\\(2\\pi\\)"
    ],
    "ans": "\\(\\pi\\)",
    "reason": "The basic period of \\(\\cot x\\) is \\(\\pi\\)."
  },
  {
    "q": "If \\(p\\) is the period of \\(f(x)\\), then \\(f(ax+b)\\), \\(a>0\\), has period:",
    "options": [
      "\\(\\dfrac{p}{|a|}\\)",
      "\\(\\dfrac{p}{a^2}\\)",
      "\\(p|a|\\)",
      "\\(p+a\\)"
    ],
    "ans": "\\(\\dfrac{p}{|a|}\\)",
    "reason": "Scaling the input by \\(a\\) compresses/stretches the period by the same factor: the new period is \\(p/|a|\\)."
  },
  {
    "q": "If \\(p\\) is the period of \\(f(x)\\), then \\(af(x)+b\\), \\(a>0\\), has period:",
    "options": [
      "\\(\\dfrac{p}a\\)",
      "\\(p\\)",
      "\\(p+b\\)",
      "\\(ap\\)"
    ],
    "ans": "\\(p\\)",
    "reason": "Scaling or shifting the output (not the input) leaves the period unchanged: it's still \\(p\\)."
  },
  {
    "q": "The period of \\(f(x)=\\cot3x+\\sin\\dfrac{2x}3\\) is:",
    "options": [
      "\\(\\pi\\)",
      "\\(\\dfrac{2\\pi}3\\)",
      "\\(6\\pi\\)",
      "\\(3\\pi\\)"
    ],
    "ans": "\\(3\\pi\\)",
    "reason": "\\(\\cot3x\\) has period \\(\\pi/3\\); \\(\\sin(2x/3)\\) has period \\(3\\pi\\). Since \\(3\\pi\\) is a whole multiple of \\(\\pi/3\\) (namely \\(9\\times\\)), the combined period is the larger one, \\(3\\pi\\)."
  },
  {
    "q": "The period of \\(f(x)=\\sin x+\\cos2x\\) is:",
    "options": [
      "\\(\\pi\\)",
      "\\(2\\pi\\)",
      "\\(4\\pi\\)",
      "\\(\\dfrac{\\pi}2\\)"
    ],
    "ans": "\\(2\\pi\\)",
    "reason": "\\(\\sin x\\) has period \\(2\\pi\\); \\(\\cos2x\\) has period \\(\\pi\\). Since \\(2\\pi\\) is a whole multiple of \\(\\pi\\), the combined period is \\(2\\pi\\)."
  },
  {
    "q": "The period of \\(f(x)=\\tan x+\\sin\\dfrac{x}2\\) is:",
    "options": [
      "\\(\\pi\\)",
      "\\(\\dfrac{\\pi}2\\)",
      "\\(4\\pi\\)",
      "\\(2\\pi\\)"
    ],
    "ans": "\\(4\\pi\\)",
    "reason": "\\(\\tan x\\) has period \\(\\pi\\); \\(\\sin(x/2)\\) has period \\(4\\pi\\). Since \\(4\\pi\\) is a whole multiple of \\(\\pi\\), the combined period is \\(4\\pi\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-9-7\\cos\\theta\\) are:",
    "options": [
      "Max = 7, Min = \\(-7\\)",
      "Max = \\(-2\\), Min = \\(-16\\)",
      "Max = \\(-1\\), Min = \\(-17\\)",
      "Max = \\(-2\\), Min = \\(-9\\)"
    ],
    "ans": "Max = \\(-2\\), Min = \\(-16\\)",
    "reason": "For \\(y=c+d\\cos\\theta\\) (or \\(\\sin\\theta\\)), max \\(=c+|d|\\), min \\(=c-|d|\\); here \\(c=-9,\\ |d|=7\\): max \\(=-2\\), min \\(=-16\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-8-8\\sin\\theta\\) are:",
    "options": [
      "Max = 0, Min = \\(-8\\)",
      "Max = 0, Min = \\(-16\\)",
      "Max = 1, Min = \\(-17\\)",
      "Max = 8, Min = \\(-8\\)"
    ],
    "ans": "Max = 0, Min = \\(-16\\)",
    "reason": "With \\(c=-8,\\ |d|=8\\): max \\(=0\\), min \\(=-16\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-7+3\\sin\\theta\\) are:",
    "options": [
      "Max = 3, Min = \\(-3\\)",
      "Max = \\(-4\\), Min = \\(-10\\)",
      "Max = \\(-3\\), Min = \\(-11\\)",
      "Max = \\(-4\\), Min = \\(-7\\)"
    ],
    "ans": "Max = \\(-4\\), Min = \\(-10\\)",
    "reason": "With \\(c=-7,\\ |d|=3\\): max \\(=-4\\), min \\(=-10\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=9-8\\sin\\theta\\) are:",
    "options": [
      "Max = 17, Min = 1",
      "Max = 8, Min = \\(-8\\)",
      "Max = 18, Min = 0",
      "Max = 17, Min = 9"
    ],
    "ans": "Max = 17, Min = 1",
    "reason": "With \\(c=9,\\ |d|=8\\): max \\(=17\\), min \\(=1\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-8-9\\sin\\theta\\) are:",
    "options": [
      "Max = 9, Min = \\(-9\\)",
      "Max = 2, Min = \\(-18\\)",
      "Max = 1, Min = \\(-17\\)",
      "Max = 1, Min = \\(-8\\)"
    ],
    "ans": "Max = 1, Min = \\(-17\\)",
    "reason": "With \\(c=-8,\\ |d|=9\\): max \\(=1\\), min \\(=-17\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=1-5\\sin\\theta\\) are:",
    "options": [
      "Max = 6, Min = 1",
      "Max = 5, Min = \\(-5\\)",
      "Max = 7, Min = \\(-5\\)",
      "Max = 6, Min = \\(-4\\)"
    ],
    "ans": "Max = 6, Min = \\(-4\\)",
    "reason": "With \\(c=1,\\ |d|=5\\): max \\(=6\\), min \\(=-4\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-8-5\\cos\\theta\\) are:",
    "options": [
      "Max = \\(-3\\), Min = \\(-8\\)",
      "Max = \\(-2\\), Min = \\(-14\\)",
      "Max = \\(-3\\), Min = \\(-13\\)",
      "Max = 5, Min = \\(-5\\)"
    ],
    "ans": "Max = \\(-3\\), Min = \\(-13\\)",
    "reason": "With \\(c=-8,\\ |d|=5\\): max \\(=-3\\), min \\(=-13\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-7+5\\sin\\theta\\) are:",
    "options": [
      "Max = \\(-1\\), Min = \\(-13\\)",
      "Max = \\(-2\\), Min = \\(-12\\)",
      "Max = 5, Min = \\(-5\\)",
      "Max = \\(-2\\), Min = \\(-7\\)"
    ],
    "ans": "Max = \\(-2\\), Min = \\(-12\\)",
    "reason": "With \\(c=-7,\\ |d|=5\\): max \\(=-2\\), min \\(=-12\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=3+4\\sin\\theta\\) are:",
    "options": [
      "Max = 8, Min = \\(-2\\)",
      "Max = 4, Min = \\(-4\\)",
      "Max = 7, Min = 3",
      "Max = 7, Min = \\(-1\\)"
    ],
    "ans": "Max = 7, Min = \\(-1\\)",
    "reason": "With \\(c=3,\\ |d|=4\\): max \\(=7\\), min \\(=-1\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-6-\\cos\\theta\\) are:",
    "options": [
      "Max = \\(-5\\), Min = \\(-7\\)",
      "Max = \\(-5\\), Min = \\(-6\\)",
      "Max = \\(-4\\), Min = \\(-8\\)",
      "Max = 1, Min = \\(-1\\)"
    ],
    "ans": "Max = \\(-5\\), Min = \\(-7\\)",
    "reason": "With \\(c=-6,\\ |d|=1\\): max \\(=-5\\), min \\(=-7\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=5+6\\sin\\theta\\) are:",
    "options": [
      "Max = 6, Min = \\(-6\\)",
      "Max = 11, Min = 5",
      "Max = 12, Min = \\(-2\\)",
      "Max = 11, Min = \\(-1\\)"
    ],
    "ans": "Max = 11, Min = \\(-1\\)",
    "reason": "With \\(c=5,\\ |d|=6\\): max \\(=11\\), min \\(=-1\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=6-9\\sin\\theta\\) are:",
    "options": [
      "Max = 15, Min = 6",
      "Max = 9, Min = \\(-9\\)",
      "Max = 16, Min = \\(-4\\)",
      "Max = 15, Min = \\(-3\\)"
    ],
    "ans": "Max = 15, Min = \\(-3\\)",
    "reason": "With \\(c=6,\\ |d|=9\\): max \\(=15\\), min \\(=-3\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-1-9\\cos\\theta\\) are:",
    "options": [
      "Max = 9, Min = \\(-11\\)",
      "Max = 8, Min = \\(-1\\)",
      "Max = 8, Min = \\(-10\\)",
      "Max = 9, Min = \\(-9\\)"
    ],
    "ans": "Max = 8, Min = \\(-10\\)",
    "reason": "With \\(c=-1,\\ |d|=9\\): max \\(=8\\), min \\(=-10\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=7-4\\cos\\theta\\) are:",
    "options": [
      "Max = 4, Min = \\(-4\\)",
      "Max = 11, Min = 3",
      "Max = 12, Min = 2",
      "Max = 11, Min = 7"
    ],
    "ans": "Max = 11, Min = 3",
    "reason": "With \\(c=7,\\ |d|=4\\): max \\(=11\\), min \\(=3\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=1+4\\cos\\theta\\) are:",
    "options": [
      "Max = 5, Min = \\(-3\\)",
      "Max = 5, Min = 1",
      "Max = 4, Min = \\(-4\\)",
      "Max = 6, Min = \\(-4\\)"
    ],
    "ans": "Max = 5, Min = \\(-3\\)",
    "reason": "With \\(c=1,\\ |d|=4\\): max \\(=5\\), min \\(=-3\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-3-3\\cos\\theta\\) are:",
    "options": [
      "Max = 0, Min = \\(-6\\)",
      "Max = 0, Min = \\(-3\\)",
      "Max = 3, Min = \\(-3\\)",
      "Max = 1, Min = \\(-7\\)"
    ],
    "ans": "Max = 0, Min = \\(-6\\)",
    "reason": "With \\(c=-3,\\ |d|=3\\): max \\(=0\\), min \\(=-6\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-3-5\\sin\\theta\\) are:",
    "options": [
      "Max = 5, Min = \\(-5\\)",
      "Max = 2, Min = \\(-8\\)",
      "Max = 3, Min = \\(-9\\)",
      "Max = 2, Min = \\(-3\\)"
    ],
    "ans": "Max = 2, Min = \\(-8\\)",
    "reason": "With \\(c=-3,\\ |d|=5\\): max \\(=2\\), min \\(=-8\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-7-\\sin\\theta\\) are:",
    "options": [
      "Max = \\(-6\\), Min = \\(-7\\)",
      "Max = 1, Min = \\(-1\\)",
      "Max = \\(-5\\), Min = \\(-9\\)",
      "Max = \\(-6\\), Min = \\(-8\\)"
    ],
    "ans": "Max = \\(-6\\), Min = \\(-8\\)",
    "reason": "With \\(c=-7,\\ |d|=1\\): max \\(=-6\\), min \\(=-8\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=-1-3\\cos\\theta\\) are:",
    "options": [
      "Max = 2, Min = \\(-4\\)",
      "Max = 3, Min = \\(-5\\)",
      "Max = 3, Min = \\(-3\\)",
      "Max = 2, Min = \\(-1\\)"
    ],
    "ans": "Max = 2, Min = \\(-4\\)",
    "reason": "With \\(c=-1,\\ |d|=3\\): max \\(=2\\), min \\(=-4\\)."
  },
  {
    "q": "The maximum and minimum values of \\(y=1+6\\cos\\theta\\) are:",
    "options": [
      "Max = 6, Min = \\(-6\\)",
      "Max = 8, Min = \\(-6\\)",
      "Max = 7, Min = 1",
      "Max = 7, Min = \\(-5\\)"
    ],
    "ans": "Max = 7, Min = \\(-5\\)",
    "reason": "With \\(c=1,\\ |d|=6\\): max \\(=7\\), min \\(=-5\\)."
  },
  {
    "q": "The function \\(f(x)=\\sin x\\) is a/an:",
    "options": [
      "Both even and odd",
      "Even function",
      "Neither even nor odd",
      "Odd function"
    ],
    "ans": "Odd function",
    "reason": "\\(\\sin(-x)=-\\sin x\\), so sine is an odd function."
  },
  {
    "q": "The function \\(f(x)=\\cos x\\) is a/an:",
    "options": [
      "Both even and odd",
      "Even function",
      "Odd function",
      "Neither even nor odd"
    ],
    "ans": "Even function",
    "reason": "\\(\\cos(-x)=\\cos x\\), so cosine is an even function."
  },
  {
    "q": "The function \\(f(x)=\\tan x\\) is a/an:",
    "options": [
      "Odd function",
      "Neither even nor odd",
      "Both even and odd",
      "Even function"
    ],
    "ans": "Odd function",
    "reason": "Tangent is sine (odd) divided by cosine (even); odd/even is odd, so \\(\\tan(-x)=-\\tan x\\)."
  },
  {
    "q": "The function \\(f(x)=\\sec x\\) is a/an:",
    "options": [
      "Neither even nor odd",
      "Both even and odd",
      "Even function",
      "Odd function"
    ],
    "ans": "Even function",
    "reason": "Secant is the reciprocal of cosine (even), and the reciprocal of an even function is even."
  },
  {
    "q": "The function \\(f(x)=\\csc x\\) is a/an:",
    "options": [
      "Both even and odd",
      "Neither even nor odd",
      "Odd function",
      "Even function"
    ],
    "ans": "Odd function",
    "reason": "Cosecant is the reciprocal of sine (odd), and the reciprocal of an odd function is odd."
  },
  {
    "q": "The function \\(f(x)=\\cot x\\) is a/an:",
    "options": [
      "Neither even nor odd",
      "Both even and odd",
      "Even function",
      "Odd function"
    ],
    "ans": "Odd function",
    "reason": "Cotangent is cosine (even) over sine (odd); even/odd is odd, so \\(\\cot(-x)=-\\cot x\\)."
  },
  {
    "q": "The function \\(f(x)=x^3\\sin x\\) is a/an:",
    "options": [
      "Odd function",
      "Both even and odd",
      "Even function",
      "Neither even nor odd"
    ],
    "ans": "Even function",
    "reason": "\\(f(-x)=(-x)^3\\sin(-x)=(-x^3)(-\\sin x)=x^3\\sin x=f(x)\\) — odd \\(\\times\\) odd \\(=\\) even."
  },
  {
    "q": "The function \\(f(x)=x^3\\sin x\\cos x\\) is a/an:",
    "options": [
      "Odd function",
      "Neither even nor odd",
      "Both even and odd",
      "Even function"
    ],
    "ans": "Even function",
    "reason": "\\(f(-x)=(-x)^3\\sin(-x)\\cos(-x)=(-x^3)(-\\sin x)(\\cos x)=x^3\\sin x\\cos x=f(x)\\), so \\(f\\) is even (odd \\(\\times\\) odd \\(\\times\\) even \\(=\\) even)."
  },
  {
    "q": "The function \\(f(x)=3\\sin x+4\\cos x\\) is a/an:",
    "options": [
      "Both even and odd",
      "Neither even nor odd",
      "Odd function",
      "Even function"
    ],
    "ans": "Neither even nor odd",
    "reason": "\\(f(-x)=-3\\sin x+4\\cos x\\), which is neither \\(f(x)\\) nor \\(-f(x)\\) in general — a sum of an odd and an even piece is typically neither even nor odd."
  },
  {
    "q": "The function \\(f(x)=\\dfrac{\\tan x-\\sin x}{x}\\) is a/an:",
    "options": [
      "Odd function",
      "Even function",
      "Neither even nor odd",
      "Both even and odd"
    ],
    "ans": "Even function",
    "reason": "\\(\\tan x-\\sin x\\) (odd \\(-\\) odd) is odd, and dividing by \\(x\\) (also odd) makes the whole thing even: odd/odd \\(=\\) even."
  },
  {
    "q": "A function \\(f\\) is odd if and only if:",
    "options": [
      "\\(f(x)=0\\)",
      "\\(f(-x)=1/f(x)\\)",
      "\\(f(-x)=-f(x)\\)",
      "\\(f(-x)=f(x)\\)"
    ],
    "ans": "\\(f(-x)=-f(x)\\)",
    "reason": "By definition, \\(f\\) is odd exactly when \\(f(-x)=-f(x)\\) for all \\(x\\) in its domain."
  },
  {
    "q": "A function \\(f\\) is even if and only if:",
    "options": [
      "\\(f(-x)=-f(x)\\)",
      "\\(f(-x)=f(x)\\)",
      "\\(f(-x)=1/f(x)\\)",
      "\\(f(x)=0\\)"
    ],
    "ans": "\\(f(-x)=f(x)\\)",
    "reason": "By definition, \\(f\\) is even exactly when \\(f(-x)=f(x)\\) for all \\(x\\) in its domain."
  },
  {
    "q": "The graph of an odd function is symmetric with respect to:",
    "options": [
      "The \\(y\\)-axis",
      "The origin",
      "The \\(x\\)-axis",
      "The line \\(y=x\\)"
    ],
    "ans": "The origin",
    "reason": "An odd function's graph is unchanged by a \\(180^\\circ\\) rotation about the origin — it's symmetric about the origin."
  },
  {
    "q": "The graph of an even function is symmetric with respect to:",
    "options": [
      "The line \\(y=x\\)",
      "The \\(x\\)-axis",
      "The origin",
      "The \\(y\\)-axis"
    ],
    "ans": "The \\(y\\)-axis",
    "reason": "An even function's graph is a mirror image of itself across the \\(y\\)-axis."
  },
  {
    "q": "The function \\(f(x)=-x^2\\sin x\\cot x\\) is a/an:",
    "options": [
      "Odd function",
      "Neither even nor odd",
      "Both even and odd",
      "Even function"
    ],
    "ans": "Even function",
    "reason": "\\(f(-x)=-(-x)^2\\sin(-x)\\cot(-x)=-x^2(-\\sin x)(-\\cot x)=-x^2\\sin x\\cot x=f(x)\\), so \\(f\\) is even."
  },
  {
    "q": "The amplitude of the graph of \\(y=\\sin x\\) is:",
    "options": [
      "0",
      "1",
      "\\(\\pi\\)",
      "2"
    ],
    "ans": "1",
    "reason": "The amplitude of \\(\\sin x\\) (with coefficient \\(1\\)) is \\(1\\)."
  },
  {
    "q": "The amplitude of the graph of \\(y=3\\sin2x\\) is:",
    "options": [
      "3",
      "2",
      "6",
      "1"
    ],
    "ans": "3",
    "reason": "Multiplying \\(\\sin2x\\) by \\(3\\) scales the amplitude to \\(3\\)."
  },
  {
    "q": "The nature (odd/even) of the graph of \\(y=\\tan x\\) is:",
    "options": [
      "Neither",
      "Odd function",
      "Even function",
      "Both"
    ],
    "ans": "Odd function",
    "reason": "Since \\(\\tan(-x)=-\\tan x\\), \\(y=\\tan x\\) is an odd function."
  },
  {
    "q": "The graph of \\(y=\\cos x\\) crosses the \\(x\\)-axis first (for \\(x>0\\)) at:",
    "options": [
      "\\(x=\\pi\\)",
      "\\(x=2\\pi\\)",
      "\\(x=\\dfrac{\\pi}4\\)",
      "\\(x=\\dfrac{\\pi}2\\)"
    ],
    "ans": "\\(x=\\dfrac{\\pi}2\\)",
    "reason": "\\(\\cos x=0\\) first (for \\(x>0\\)) at \\(x=\\pi/2\\)."
  },
  {
    "q": "The graph of \\(y=\\sin x\\) crosses the \\(x\\)-axis first (for \\(x>0\\)) at:",
    "options": [
      "\\(x=2\\pi\\)",
      "\\(x=\\dfrac{3\\pi}2\\)",
      "\\(x=\\pi\\)",
      "\\(x=\\dfrac{\\pi}2\\)"
    ],
    "ans": "\\(x=\\pi\\)",
    "reason": "\\(\\sin x=0\\) again (for \\(x>0\\), after the start) at \\(x=\\pi\\)."
  },
  {
    "q": "The graph of \\(y=\\tan x\\) has vertical asymptotes at:",
    "options": [
      "\\(x=0\\) only",
      "\\(x=2n\\pi\\)",
      "\\(x=n\\pi\\)",
      "\\(x=(2n+1)\\tfrac{\\pi}2\\)"
    ],
    "ans": "\\(x=(2n+1)\\tfrac{\\pi}2\\)",
    "reason": "\\(\\tan x\\) blows up wherever \\(\\cos x=0\\), i.e. at \\(x=(2n+1)\\pi/2\\)."
  },
  {
    "q": "The graph of \\(y=\\cot x\\) has vertical asymptotes at:",
    "options": [
      "\\(x=(2n+1)\\tfrac{\\pi}2\\)",
      "\\(x=n\\pi\\)",
      "No asymptotes",
      "\\(x=2n\\pi\\)"
    ],
    "ans": "\\(x=n\\pi\\)",
    "reason": "\\(\\cot x\\) blows up wherever \\(\\sin x=0\\), i.e. at \\(x=n\\pi\\)."
  },
  {
    "q": "On the interval \\([0,2\\pi]\\), the graph of \\(y=\\sin x\\) attains its maximum value at:",
    "options": [
      "\\(x=\\pi\\)",
      "\\(x=\\dfrac{\\pi}2\\)",
      "\\(x=0\\)",
      "\\(x=\\dfrac{3\\pi}2\\)"
    ],
    "ans": "\\(x=\\dfrac{\\pi}2\\)",
    "reason": "On \\([0,2\\pi]\\), \\(\\sin x\\) reaches its peak value \\(1\\) at \\(x=\\pi/2\\)."
  },
  {
    "q": "On the interval \\([0,2\\pi]\\), the graph of \\(y=\\cos x\\) attains its minimum value at:",
    "options": [
      "\\(x=2\\pi\\)",
      "\\(x=\\dfrac{3\\pi}2\\)",
      "\\(x=\\dfrac{\\pi}2\\)",
      "\\(x=\\pi\\)"
    ],
    "ans": "\\(x=\\pi\\)",
    "reason": "On \\([0,2\\pi]\\), \\(\\cos x\\) reaches its lowest value \\(-1\\) at \\(x=\\pi\\)."
  },
  {
    "q": "A single cycle of a periodic function's graph, drawn over an interval equal to its period, can be used to obtain the complete graph by:",
    "options": [
      "Repeating it over every subsequent interval of that length",
      "Reflecting it about the \\(y\\)-axis only",
      "Reflecting it once about the origin",
      "It cannot be extended further"
    ],
    "ans": "Repeating it over every subsequent interval of that length",
    "reason": "By definition of periodicity, the graph over one full period repeats identically on every subsequent interval of that same length."
  },
  {
    "q": "A function whose value repeats after a specific, fixed interval is called a:",
    "options": [
      "Even function",
      "Odd function",
      "Linear function",
      "Periodic function"
    ],
    "ans": "Periodic function",
    "reason": "By definition, such a function is called periodic."
  },
  {
    "q": "If \\(f(x+p)=f(x)\\) for the smallest positive \\(p\\), then \\(p\\) is called the function's:",
    "options": [
      "Amplitude",
      "Phase",
      "Period",
      "Domain"
    ],
    "ans": "Period",
    "reason": "By definition, the smallest such \\(p\\) is called the period of \\(f\\)."
  },
  {
    "q": "The values of trigonometric functions for \\(\\theta\\) and \\(2n\\pi\\pm\\theta\\ (n\\in\\mathbb{Z})\\) being the same is called:",
    "options": [
      "Symmetry",
      "Periodicity",
      "Boundedness",
      "Continuity"
    ],
    "ans": "Periodicity",
    "reason": "This shared-value property under adding full revolutions (\\(2n\\pi\\)) is exactly what periodicity means."
  },
  {
    "q": "If \\(p\\) is the period of a periodic function \\(f(x)\\), then \\(\\dfrac1{f(x)}\\) (where defined) has period:",
    "options": [
      "\\(2p\\)",
      "\\(\\dfrac{p}2\\)",
      "\\(p\\)",
      "\\(\\dfrac1p\\)"
    ],
    "ans": "\\(p\\)",
    "reason": "If \\(f(x+p)=f(x)\\), then \\(1/f(x+p)=1/f(x)\\) too (wherever defined), so the reciprocal function shares the same period \\(p\\)."
  },
  {
    "q": "Since \\(\\sin\\theta=\\dfrac1{\\csc\\theta}\\), the period of \\(y=\\csc\\theta\\) is:",
    "options": [
      "\\(\\pi\\)",
      "\\(2\\pi\\), same as \\(\\sin\\theta\\)",
      "\\(4\\pi\\)",
      "\\(\\dfrac{\\pi}2\\)"
    ],
    "ans": "\\(2\\pi\\), same as \\(\\sin\\theta\\)",
    "reason": "Since \\(\\csc\\theta\\) is the reciprocal of \\(\\sin\\theta\\), it inherits sine's period, \\(2\\pi\\)."
  },
  {
    "q": "A Ferris wheel of diameter 60 ft makes one revolution every 100 seconds. The angular quantity \\(B\\) in \\(h(t)=A\\cos(Bt)+C\\) equals:",
    "options": [
      "\\(\\dfrac{2\\pi}{100}=\\dfrac{\\pi}{50}\\)",
      "\\(2\\pi\\times100\\)",
      "\\(\\dfrac{\\pi}{100}\\)",
      "\\(\\dfrac{100}{2\\pi}\\)"
    ],
    "ans": "\\(\\dfrac{2\\pi}{100}=\\dfrac{\\pi}{50}\\)",
    "reason": "Angular frequency is \\(B=2\\pi/\\text{period}=2\\pi/100=\\pi/50\\)."
  },
  {
    "q": "A Ferris wheel has diameter 30 m with center 17 m above the ground. The amplitude \\(A\\) of its height function is:",
    "options": [
      "15 m",
      "2 m",
      "17 m",
      "30 m"
    ],
    "ans": "15 m",
    "reason": "The amplitude equals the radius of the wheel, half its diameter: \\(30/2=15\\) m."
  },
  {
    "q": "For the Ferris wheel of diameter 30 m, center 17 m above ground, the vertical shift \\(C\\) in \\(h(t)=A\\cos(Bt)+C\\) is:",
    "options": [
      "17",
      "15",
      "0",
      "30"
    ],
    "ans": "17",
    "reason": "The vertical shift equals the height of the center above the ground, \\(17\\) m — the level the height oscillates around."
  },
  {
    "q": "A wave completing 1 revolution every 60 seconds has angular frequency \\(B=\\)",
    "options": [
      "\\(60\\pi\\)",
      "\\(\\dfrac{\\pi}{30}\\)",
      "\\(\\dfrac{2\\pi}{30}\\)",
      "\\(\\dfrac{\\pi}{60}\\)"
    ],
    "ans": "\\(\\dfrac{\\pi}{30}\\)",
    "reason": "Angular frequency is \\(B=2\\pi/\\text{period}=2\\pi/60=\\pi/30\\)."
  },
  {
    "q": "Alternating current with frequency 56 Hz has period:",
    "options": [
      "\\(\\dfrac1{56}\\) s",
      "56 s",
      "\\(\\dfrac1{56\\pi}\\) s",
      "\\(56\\pi\\) s"
    ],
    "ans": "\\(\\dfrac1{56}\\) s",
    "reason": "Period is the reciprocal of frequency: \\(T=1/f=1/56\\) s."
  },
  {
    "q": "For the AC voltage model \\(V(t)=a\\sin(k(t-d))+c\\), the constant \\(k\\) is related to the period \\(T\\) by:",
    "options": [
      "\\(k=2\\pi T\\)",
      "\\(k=\\dfrac{2\\pi}T\\)",
      "\\(k=\\dfrac{\\pi}T\\)",
      "\\(k=\\dfrac{T}{2\\pi}\\)"
    ],
    "ans": "\\(k=\\dfrac{2\\pi}T\\)",
    "reason": "Angular frequency and period are always related by \\(k=2\\pi/T\\), same as for sine/cosine generally."
  },
  {
    "q": "A flagpole top sways 8 cm to either side of rest, completing 260 cycles per minute. The amplitude of the modeling sinusoid is:",
    "options": [
      "4 cm",
      "16 cm",
      "260 cm",
      "8 cm"
    ],
    "ans": "8 cm",
    "reason": "The amplitude is simply the maximum displacement from the rest position, which is stated directly as \\(8\\) cm."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Form</th></tr><tr><td>\\(y\\)</td><td>\\(5+3\\sin\\left(2x-\\tfrac{\\pi}4\\right)\\)</td></tr></table></div>The amplitude of this function is:",
    "options": [
      "3",
      "5",
      "2",
      "\\(\\tfrac{\\pi}4\\)"
    ],
    "ans": "3",
    "reason": "The amplitude is the coefficient in front of sine: \\(3\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Form</th></tr><tr><td>\\(y\\)</td><td>\\(5+3\\sin\\left(2x-\\tfrac{\\pi}4\\right)\\)</td></tr></table></div>The period of this function is:",
    "options": [
      "\\(\\pi\\)",
      "\\(2\\pi\\)",
      "\\(\\tfrac{\\pi}2\\)",
      "\\(4\\pi\\)"
    ],
    "ans": "\\(\\pi\\)",
    "reason": "Period \\(=2\\pi/|k|\\) with \\(k=2\\): \\(2\\pi/2=\\pi\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Form</th></tr><tr><td>\\(y\\)</td><td>\\(5+3\\sin\\left(2x-\\tfrac{\\pi}4\\right)\\)</td></tr></table></div>The maximum value of \\(y\\) is:",
    "options": [
      "8",
      "5",
      "3",
      "2"
    ],
    "ans": "8",
    "reason": "Max \\(=5+3=8\\) (center plus amplitude)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Form</th></tr><tr><td>\\(y\\)</td><td>\\(5+3\\sin\\left(2x-\\tfrac{\\pi}4\\right)\\)</td></tr></table></div>The minimum value of \\(y\\) is:",
    "options": [
      "2",
      "5",
      "\\(-3\\)",
      "8"
    ],
    "ans": "2",
    "reason": "Min \\(=5-3=2\\) (center minus amplitude)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Ferris wheel</th><th>Value</th></tr><tr><td>Diameter</td><td>40 m</td></tr><tr><td>Center height</td><td>22 m</td></tr><tr><td>Period</td><td>120 s</td></tr></table></div>Modeling height as \\(h(t)=A\\cos(Bt)+C\\), the amplitude \\(A\\) is:",
    "options": [
      "20 m",
      "40 m",
      "22 m",
      "2 m"
    ],
    "ans": "20 m",
    "reason": "Amplitude equals the radius, half the diameter: \\(40/2=20\\) m."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Ferris wheel</th><th>Value</th></tr><tr><td>Diameter</td><td>40 m</td></tr><tr><td>Center height</td><td>22 m</td></tr><tr><td>Period</td><td>120 s</td></tr></table></div>The vertical shift \\(C\\) is:",
    "options": [
      "22",
      "20",
      "40",
      "0"
    ],
    "ans": "22",
    "reason": "The vertical shift equals the center height: \\(22\\) m."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Ferris wheel</th><th>Value</th></tr><tr><td>Diameter</td><td>40 m</td></tr><tr><td>Center height</td><td>22 m</td></tr><tr><td>Period</td><td>120 s</td></tr></table></div>The value of \\(B\\) is:",
    "options": [
      "\\(\\dfrac{2\\pi}{120}=\\dfrac{\\pi}{60}\\)",
      "\\(\\dfrac{\\pi}{120}\\)",
      "\\(2\\pi\\times120\\)",
      "\\(\\dfrac{120}{2\\pi}\\)"
    ],
    "ans": "\\(\\dfrac{2\\pi}{120}=\\dfrac{\\pi}{60}\\)",
    "reason": "\\(B=2\\pi/\\text{period}=2\\pi/120=\\pi/60\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Ferris wheel</th><th>Value</th></tr><tr><td>Diameter</td><td>40 m</td></tr><tr><td>Center height</td><td>22 m</td></tr><tr><td>Period</td><td>120 s</td></tr></table></div>The maximum height reached by a rider is:",
    "options": [
      "42 m",
      "40 m",
      "44 m",
      "20 m"
    ],
    "ans": "42 m",
    "reason": "Max height \\(=C+A=22+20=42\\) m, reached at the top of the wheel."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Parity check</th></tr><tr><td>\\(f(x)\\)</td><td>\\(x^2\\cos x\\)</td></tr></table></div>\\(f(-x)\\) equals:",
    "options": [
      "\\(x^2\\cos x\\)",
      "\\(-x^2\\cos x\\)",
      "\\(x^2\\sin x\\)",
      "\\(-x^2\\sin x\\)"
    ],
    "ans": "\\(x^2\\cos x\\)",
    "reason": "\\(f(-x)=(-x)^2\\cos(-x)=x^2\\cos x\\) (since \\((-x)^2=x^2\\) and \\(\\cos(-x)=\\cos x\\))."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Parity check</th></tr><tr><td>\\(f(x)\\)</td><td>\\(x^2\\cos x\\)</td></tr></table></div>Since \\(f(-x)=f(x)\\), the function \\(f(x)=x^2\\cos x\\) is:",
    "options": [
      "Even",
      "Odd",
      "Neither even nor odd",
      "Both even and odd"
    ],
    "ans": "Even",
    "reason": "Since \\(f(-x)=f(x)\\), by definition \\(f\\) is even."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Parity check</th></tr><tr><td>\\(f(x)\\)</td><td>\\(x^2\\cos x\\)</td></tr></table></div>This follows because \\(x^2\\) is even and \\(\\cos x\\) is:",
    "options": [
      "Even",
      "Odd",
      "Neither",
      "Periodic only, no parity"
    ],
    "ans": "Even",
    "reason": "\\(\\cos(-x)=\\cos x\\), which is exactly the definition of an even function."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Function</th><th>Parity check</th></tr><tr><td>\\(f(x)\\)</td><td>\\(x^2\\cos x\\)</td></tr></table></div>By the same reasoning, \\(g(x)=x^2\\sin x\\) (even \\(\\times\\) odd) would be:",
    "options": [
      "Odd",
      "Even",
      "Neither even nor odd",
      "Both even and odd"
    ],
    "ans": "Odd",
    "reason": "Even (\\(x^2\\)) times odd (\\(\\sin x\\)) gives odd: \\(g(-x)=x^2(-\\sin x)=-g(x)\\)."
  }
];
  }
});
