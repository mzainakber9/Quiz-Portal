// Class 11 Math — Chapter 8: Fundamentals of Trigonometry
// 112 MCQs (base + stimulus-based), each with a computed/verified explanation.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
QuizBank.register({
  class: "11th",
  subject: "Math",
  type: "chapter",
  id: "ch8",
  label: "Chapter 8: Fundamentals of Trigonometry",
  order: 8,
  questions: function () {
    return [
  {
    "q": "The distance between two points \\(P(x_1,y_1)\\) and \\(Q(x_2,y_2)\\) in the plane is given by:",
    "options": [
      "\\((x_1-x_2)^2-(y_1-y_2)^2\\)",
      "\\((x_1-x_2)+(y_1-y_2)\\)",
      "\\(\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}\\)",
      "\\(\\sqrt{(x_1+x_2)^2+(y_1+y_2)^2}\\)"
    ],
    "ans": "\\(\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}\\)",
    "reason": "By the Pythagorean distance formula in the plane: \\(PQ=\\sqrt{(x_1-x_2)^2+(y_1-y_2)^2}\\)."
  },
  {
    "q": "The Fundamental Law of Trigonometry states that \\(\\cos(\\alpha-\\beta)=\\)",
    "options": [
      "\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\sin\\beta-\\cos\\alpha\\cos\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)"
    ],
    "ans": "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)",
    "reason": "This is the Fundamental (Difference) Law of Trigonometry: \\(\\cos(\\alpha-\\beta)=\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)."
  },
  {
    "q": "The Fundamental Law of Trigonometry is proved using:",
    "options": [
      "The Pythagorean theorem alone",
      "The distance formula on a unit circle",
      "Mathematical induction",
      "Pascal's triangle"
    ],
    "ans": "The distance formula on a unit circle",
    "reason": "It's derived by placing \\(\\alpha\\) and \\(\\beta\\) as angles on a unit circle and applying the distance formula between the two points they determine."
  },
  {
    "q": "\\(\\cos(\\alpha+\\beta)=\\)",
    "options": [
      "\\(\\cos\\alpha\\sin\\beta-\\sin\\alpha\\cos\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)"
    ],
    "ans": "\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)",
    "reason": "Replacing \\(\\beta\\) with \\(-\\beta\\) in the difference formula (and using \\(\\cos(-\\beta)=\\cos\\beta,\\ \\sin(-\\beta)=-\\sin\\beta\\)) gives \\(\\cos(\\alpha+\\beta)=\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)."
  },
  {
    "q": "\\(\\sin(\\alpha+\\beta)=\\)",
    "options": [
      "\\(\\cos\\alpha\\cos\\beta-\\sin\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\)",
      "\\(\\sin\\alpha\\cos\\beta-\\cos\\alpha\\sin\\beta\\)",
      "\\(\\cos\\alpha\\cos\\beta+\\sin\\alpha\\sin\\beta\\)"
    ],
    "ans": "\\(\\sin\\alpha\\cos\\beta+\\cos\\alpha\\sin\\beta\\)",
    "reason": "This is the standard angle-addition identity for sine, derivable from the cosine identities via co-function relations."
  },
  {
    "q": "\\(\\tan(\\alpha+\\beta)=\\)",
    "options": [
      "\\(\\tan\\alpha+\\tan\\beta\\)",
      "\\(\\dfrac{\\tan\\alpha\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\)",
      "\\(\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\)",
      "\\(\\dfrac{\\tan\\alpha-\\tan\\beta}{1+\\tan\\alpha\\tan\\beta}\\)"
    ],
    "ans": "\\(\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\)",
    "reason": "Dividing \\(\\sin(\\alpha+\\beta)\\) by \\(\\cos(\\alpha+\\beta)\\) and dividing every term by \\(\\cos\\alpha\\cos\\beta\\) gives \\(\\tan(\\alpha+\\beta)=\\dfrac{\\tan\\alpha+\\tan\\beta}{1-\\tan\\alpha\\tan\\beta}\\)."
  },
  {
    "q": "Angles connected to a basic angle \\(\\theta\\) by a right angle or its multiple are called:",
    "options": [
      "Complementary angles",
      "Coterminal angles",
      "Supplementary angles",
      "Allied angles"
    ],
    "ans": "Allied angles",
    "reason": "By definition, angles related to a basic angle by adding a right angle or a multiple of it are called allied (or related) angles."
  },
  {
    "q": "A trigonometric ratio changes to its co-ratio (e.g. sine to cosine) when the allied angle contains:",
    "options": [
      "Zero",
      "An odd multiple of a right angle",
      "Any multiple of \\(2\\pi\\)",
      "An even multiple of a right angle"
    ],
    "ans": "An odd multiple of a right angle",
    "reason": "Odd multiples of a right angle (\\(90^\\circ,270^\\circ,\\ldots\\)) swap a ratio with its co-ratio (sine \\(\\leftrightarrow\\) cosine, etc.)."
  },
  {
    "q": "A trigonometric ratio does NOT change when the allied angle contains:",
    "options": [
      "An odd multiple of a right angle",
      "Any angle at all",
      "An even multiple of a right angle",
      "A multiple of \\(\\pi/4\\)"
    ],
    "ans": "An even multiple of a right angle",
    "reason": "Even multiples of a right angle (\\(180^\\circ,360^\\circ,\\ldots\\)) leave the ratio type unchanged (only the sign may change)."
  },
  {
    "q": "\\(\\sin(\\pi-\\theta)=\\)",
    "options": [
      "\\(-\\sin\\theta\\)",
      "\\(-\\cos\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(\\sin\\theta\\)"
    ],
    "ans": "\\(\\sin\\theta\\)",
    "reason": "\\(\\pi\\) is an even multiple of a right angle, so the ratio type (sine) is unchanged, and since \\(\\pi-\\theta\\) lies in QII where sine is positive, \\(\\sin(\\pi-\\theta)=\\sin\\theta\\)."
  },
  {
    "q": "\\(\\cos(\\pi-\\theta)=\\)",
    "options": [
      "\\(-\\sin\\theta\\)",
      "\\(-\\cos\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(\\sin\\theta\\)"
    ],
    "ans": "\\(-\\cos\\theta\\)",
    "reason": "\\(\\pi-\\theta\\) lies in QII where cosine is negative, and the ratio type is unchanged, giving \\(\\cos(\\pi-\\theta)=-\\cos\\theta\\)."
  },
  {
    "q": "\\(\\cos\\left(\\dfrac{\\pi}{2}-\\theta\\right)=\\)",
    "options": [
      "\\(-\\cos\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\sin\\theta\\)",
      "\\(\\sin\\theta\\)"
    ],
    "ans": "\\(\\sin\\theta\\)",
    "reason": "\\(\\pi/2\\) is an odd multiple of a right angle, so cosine swaps to its co-ratio sine: \\(\\cos(\\pi/2-\\theta)=\\sin\\theta\\)."
  },
  {
    "q": "\\(\\sin\\left(\\dfrac{\\pi}{2}+\\theta\\right)=\\)",
    "options": [
      "\\(-\\sin\\theta\\)",
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\cos\\theta\\)"
    ],
    "ans": "\\(\\cos\\theta\\)",
    "reason": "\\(\\pi/2\\) is an odd multiple of a right angle, so sine swaps to cosine; since \\(\\pi/2+\\theta\\) (for small \\(\\theta\\)) sits in QI/QII where this ratio is positive, \\(\\sin(\\pi/2+\\theta)=\\cos\\theta\\)."
  },
  {
    "q": "Writing \\(a\\sin\\theta+b\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(a+b\\)",
      "\\(\\sqrt{a-b}\\)",
      "\\(\\sqrt{a^2+b^2}\\)",
      "\\(a^2+b^2\\)"
    ],
    "ans": "\\(\\sqrt{a^2+b^2}\\)",
    "reason": "Expanding \\(r\\sin(\\theta+\\phi)=r\\sin\\theta\\cos\\phi+r\\cos\\theta\\sin\\phi\\) and matching coefficients with \\(a\\sin\\theta+b\\cos\\theta\\) gives \\(r\\cos\\phi=a,\\ r\\sin\\phi=b\\), so \\(r^2=a^2+b^2\\Rightarrow r=\\sqrt{a^2+b^2}\\)."
  },
  {
    "q": "In \\(a\\sin\\theta+b\\cos\\theta=r\\sin(\\theta+\\phi)\\), the angle \\(\\phi\\) satisfies:",
    "options": [
      "\\(\\phi=\\tan^{-1}\\left(\\tfrac{a}{b}\\right)\\)",
      "\\(\\phi=a\\times b\\)",
      "\\(\\phi=\\sin^{-1}\\left(\\tfrac{a}{b}\\right)\\)",
      "\\(\\phi=\\tan^{-1}\\left(\\tfrac{b}{a}\\right)\\)"
    ],
    "ans": "\\(\\phi=\\tan^{-1}\\left(\\tfrac{b}{a}\\right)\\)",
    "reason": "From \\(r\\cos\\phi=a\\) and \\(r\\sin\\phi=b\\), dividing gives \\(\\tan\\phi=b/a\\), so \\(\\phi=\\tan^{-1}(b/a)\\)."
  },
  {
    "q": "The exact value of \\(\\cos15^\\circ\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{2}\\)",
      "\\(\\dfrac{\\sqrt3+\\sqrt2}{4}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
    "reason": "\\(\\cos15^\\circ=\\cos(45^\\circ-30^\\circ)=\\cos45^\\circ\\cos30^\\circ+\\sin45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt2}2\\cdot\\dfrac{\\sqrt3}2+\\dfrac{\\sqrt2}2\\cdot\\dfrac12=\\dfrac{\\sqrt6+\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\sin15^\\circ\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt3-\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{2}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
    "reason": "\\(\\sin15^\\circ=\\sin(45^\\circ-30^\\circ)=\\sin45^\\circ\\cos30^\\circ-\\cos45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6-\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\cos75^\\circ\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt3-\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt2-\\sqrt6}{4}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
    "reason": "\\(\\cos75^\\circ=\\cos(45^\\circ+30^\\circ)=\\cos45^\\circ\\cos30^\\circ-\\sin45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6-\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\sin75^\\circ\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt3+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{2}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
    "reason": "\\(\\sin75^\\circ=\\sin(45^\\circ+30^\\circ)=\\sin45^\\circ\\cos30^\\circ+\\cos45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6+\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\cos105^\\circ\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"
    ],
    "ans": "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
    "reason": "\\(\\cos105^\\circ=\\cos(180^\\circ-75^\\circ)=-\\cos75^\\circ=-\\dfrac{\\sqrt6-\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\sin105^\\circ\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
    "reason": "\\(\\sin105^\\circ=\\sin(180^\\circ-75^\\circ)=\\sin75^\\circ=\\dfrac{\\sqrt6+\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\tan15^\\circ\\) is:",
    "options": [
      "\\(2+\\sqrt3\\)",
      "\\(2-\\sqrt3\\)",
      "\\(\\sqrt3-1\\)",
      "\\(\\sqrt3-2\\)"
    ],
    "ans": "\\(2-\\sqrt3\\)",
    "reason": "\\(\\tan15^\\circ=\\dfrac{\\sin15^\\circ}{\\cos15^\\circ}=\\dfrac{\\sqrt6-\\sqrt2}{\\sqrt6+\\sqrt2}\\), which rationalizes to \\(2-\\sqrt3\\)."
  },
  {
    "q": "The exact value of \\(\\tan75^\\circ\\) is:",
    "options": [
      "\\(\\sqrt3-2\\)",
      "\\(2-\\sqrt3\\)",
      "\\(\\sqrt3+1\\)",
      "\\(2+\\sqrt3\\)"
    ],
    "ans": "\\(2+\\sqrt3\\)",
    "reason": "\\(\\tan75^\\circ=1/\\tan15^\\circ=1/(2-\\sqrt3)=2+\\sqrt3\\) (rationalizing)."
  },
  {
    "q": "The exact value of \\(\\cos165^\\circ\\) (using \\(180^\\circ-15^\\circ\\)) is:",
    "options": [
      "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)"
    ],
    "ans": "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
    "reason": "\\(\\cos165^\\circ=\\cos(180^\\circ-15^\\circ)=-\\cos15^\\circ=-\\dfrac{\\sqrt6+\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\cos345^\\circ\\) (using \\(360^\\circ-15^\\circ\\)) is:",
    "options": [
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(-\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(-\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
    "reason": "\\(\\cos345^\\circ=\\cos(360^\\circ-15^\\circ)=\\cos15^\\circ=\\dfrac{\\sqrt6+\\sqrt2}4\\)."
  },
  {
    "q": "The exact value of \\(\\cos120^\\circ\\) (using \\(180^\\circ-60^\\circ\\)) is:",
    "options": [
      "\\(\\dfrac{\\sqrt3}{2}\\)",
      "\\(\\dfrac12\\)",
      "\\(-\\dfrac{\\sqrt3}{2}\\)",
      "\\(-\\dfrac12\\)"
    ],
    "ans": "\\(-\\dfrac12\\)",
    "reason": "\\(\\cos120^\\circ=\\cos(180^\\circ-60^\\circ)=-\\cos60^\\circ=-\\dfrac12\\)."
  },
  {
    "q": "The exact value of \\(\\sin120^\\circ\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt3}{2}\\)",
      "\\(-\\dfrac{\\sqrt3}{2}\\)",
      "\\(-\\dfrac12\\)",
      "\\(\\dfrac12\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt3}{2}\\)",
    "reason": "\\(\\sin120^\\circ=\\sin(180^\\circ-60^\\circ)=\\sin60^\\circ=\\dfrac{\\sqrt3}2\\)."
  },
  {
    "q": "The exact value of \\(\\tan\\left(\\dfrac{\\pi}{6}+\\dfrac{\\pi}{4}\\right)\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt3+1}{\\sqrt3-1}\\)",
      "\\(\\dfrac{\\sqrt3-1}{\\sqrt3+1}\\)",
      "\\(\\sqrt3+1\\)",
      "\\(\\sqrt3-1\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt3+1}{\\sqrt3-1}\\)",
    "reason": "\\(\\tan(\\pi/6+\\pi/4)=\\dfrac{\\tan30^\\circ+\\tan45^\\circ}{1-\\tan30^\\circ\\tan45^\\circ}=\\dfrac{1/\\sqrt3+1}{1-1/\\sqrt3}\\), which simplifies to \\(\\dfrac{\\sqrt3+1}{\\sqrt3-1}\\)."
  },
  {
    "q": "The exact value of \\(\\cos\\left(\\dfrac{\\pi}{3}-\\dfrac{\\pi}{4}\\right)\\) is:",
    "options": [
      "\\(\\dfrac{\\sqrt2-\\sqrt6}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
      "\\(\\dfrac12\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
    "reason": "\\(\\cos(\\pi/3-\\pi/4)=\\cos60^\\circ\\cos45^\\circ+\\sin60^\\circ\\sin45^\\circ=\\dfrac{\\sqrt6+\\sqrt2}4\\)."
  },
  {
    "q": "The value of \\(\\sin22.5^\\circ\\cos22.5^\\circ+\\cos22.5^\\circ\\sin22.5^\\circ\\) (i.e. \\(\\sin45^\\circ\\)) is:",
    "options": [
      "\\(\\dfrac{\\sqrt3}{2}\\)",
      "\\(\\dfrac{\\sqrt2}{2}\\)",
      "\\(\\dfrac12\\)",
      "1"
    ],
    "ans": "\\(\\dfrac{\\sqrt2}{2}\\)",
    "reason": "By the sine addition formula, this is exactly \\(\\sin(22.5^\\circ+22.5^\\circ)=\\sin45^\\circ=\\dfrac{\\sqrt2}2\\)."
  },
  {
    "q": "\\(\\sin(\\pi+\\theta)=\\)",
    "options": [
      "\\(-\\cos\\theta\\)",
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\sin\\theta\\)"
    ],
    "ans": "\\(-\\sin\\theta\\)",
    "reason": "\\(\\pi\\) is an even multiple of a right angle (ratio type unchanged), and \\(\\pi+\\theta\\) lies in QIII where sine is negative: \\(\\sin(\\pi+\\theta)=-\\sin\\theta\\)."
  },
  {
    "q": "\\(\\cos(\\pi+\\theta)=\\)",
    "options": [
      "\\(-\\cos\\theta\\)",
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\sin\\theta\\)"
    ],
    "ans": "\\(-\\cos\\theta\\)",
    "reason": "\\(\\pi+\\theta\\) lies in QIII where cosine is negative, and the ratio type is unchanged: \\(\\cos(\\pi+\\theta)=-\\cos\\theta\\)."
  },
  {
    "q": "\\(\\tan(\\pi+\\theta)=\\)",
    "options": [
      "\\(-\\cot\\theta\\)",
      "\\(-\\tan\\theta\\)",
      "\\(\\tan\\theta\\)",
      "\\(\\cot\\theta\\)"
    ],
    "ans": "\\(\\tan\\theta\\)",
    "reason": "Since both sine and cosine flip sign in QIII, their ratio (tangent) keeps its original sign: \\(\\tan(\\pi+\\theta)=\\tan\\theta\\)."
  },
  {
    "q": "\\(\\sin(2\\pi-\\theta)=\\)",
    "options": [
      "\\(\\sin\\theta\\)",
      "\\(-\\cos\\theta\\)",
      "\\(-\\sin\\theta\\)",
      "\\(\\cos\\theta\\)"
    ],
    "ans": "\\(-\\sin\\theta\\)",
    "reason": "\\(2\\pi-\\theta\\) is the same position as \\(-\\theta\\) (QIV for small \\(\\theta\\)), where sine is negative: \\(\\sin(2\\pi-\\theta)=-\\sin\\theta\\)."
  },
  {
    "q": "\\(\\cos(2\\pi-\\theta)=\\)",
    "options": [
      "\\(-\\cos\\theta\\)",
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\sin\\theta\\)"
    ],
    "ans": "\\(\\cos\\theta\\)",
    "reason": "\\(2\\pi-\\theta\\) is the same as \\(-\\theta\\), where cosine is positive (cosine is even): \\(\\cos(2\\pi-\\theta)=\\cos\\theta\\)."
  },
  {
    "q": "\\(\\sin\\left(\\dfrac{3\\pi}{2}+\\theta\\right)=\\)",
    "options": [
      "\\(\\cos\\theta\\)",
      "\\(-\\sin\\theta\\)",
      "\\(-\\cos\\theta\\)",
      "\\(\\sin\\theta\\)"
    ],
    "ans": "\\(-\\cos\\theta\\)",
    "reason": "\\(3\\pi/2\\) is an odd multiple of a right angle, so sine swaps to cosine; landing in QIV (for small \\(\\theta\\)) where cosine's sign here works out negative: \\(\\sin(3\\pi/2+\\theta)=-\\cos\\theta\\)."
  },
  {
    "q": "\\(\\cos\\left(\\dfrac{3\\pi}{2}+\\theta\\right)=\\)",
    "options": [
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\sin\\theta\\)",
      "\\(-\\cos\\theta\\)"
    ],
    "ans": "\\(\\sin\\theta\\)",
    "reason": "\\(3\\pi/2\\) is an odd multiple of a right angle, so cosine swaps to sine, landing with a positive sign: \\(\\cos(3\\pi/2+\\theta)=\\sin\\theta\\)."
  },
  {
    "q": "\\(\\tan\\left(\\dfrac{\\pi}{2}-\\theta\\right)=\\)",
    "options": [
      "\\(-\\cot\\theta\\)",
      "\\(\\tan\\theta\\)",
      "\\(-\\tan\\theta\\)",
      "\\(\\cot\\theta\\)"
    ],
    "ans": "\\(\\cot\\theta\\)",
    "reason": "\\(\\pi/2\\) is odd, so tangent swaps to its co-ratio cotangent: \\(\\tan(\\pi/2-\\theta)=\\cot\\theta\\)."
  },
  {
    "q": "\\(\\tan\\left(\\dfrac{\\pi}{2}+\\theta\\right)=\\)",
    "options": [
      "\\(-\\cot\\theta\\)",
      "\\(\\cot\\theta\\)",
      "\\(\\tan\\theta\\)",
      "\\(-\\tan\\theta\\)"
    ],
    "ans": "\\(-\\cot\\theta\\)",
    "reason": "\\(\\pi/2\\) is odd, so tangent swaps to cotangent, with a sign flip from landing in QII: \\(\\tan(\\pi/2+\\theta)=-\\cot\\theta\\)."
  },
  {
    "q": "\\(\\cot\\left(\\dfrac{\\pi}{2}-\\theta\\right)=\\)",
    "options": [
      "\\(\\tan\\theta\\)",
      "\\(-\\tan\\theta\\)",
      "\\(-\\cot\\theta\\)",
      "\\(\\cot\\theta\\)"
    ],
    "ans": "\\(\\tan\\theta\\)",
    "reason": "\\(\\pi/2\\) is odd, so cotangent swaps to tangent: \\(\\cot(\\pi/2-\\theta)=\\tan\\theta\\)."
  },
  {
    "q": "\\(\\sin(-\\theta)=\\)",
    "options": [
      "\\(-\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(\\sin\\theta\\)",
      "\\(-\\cos\\theta\\)"
    ],
    "ans": "\\(-\\sin\\theta\\)",
    "reason": "Sine is an odd function: \\(\\sin(-\\theta)=-\\sin\\theta\\)."
  },
  {
    "q": "\\(\\cos(-\\theta)=\\)",
    "options": [
      "\\(-\\sin\\theta\\)",
      "\\(\\sin\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(-\\cos\\theta\\)"
    ],
    "ans": "\\(\\cos\\theta\\)",
    "reason": "Cosine is an even function: \\(\\cos(-\\theta)=\\cos\\theta\\)."
  },
  {
    "q": "\\(\\tan(-\\theta)=\\)",
    "options": [
      "\\(-\\cot\\theta\\)",
      "\\(\\cot\\theta\\)",
      "\\(-\\tan\\theta\\)",
      "\\(\\tan\\theta\\)"
    ],
    "ans": "\\(-\\tan\\theta\\)",
    "reason": "Tangent, as sine over cosine (odd over even), is odd: \\(\\tan(-\\theta)=-\\tan\\theta\\)."
  },
  {
    "q": "\\(\\cos(x+y)+\\cos(x-y)=\\)",
    "options": [
      "\\(2\\sin x\\cos y\\)",
      "\\(2\\cos x\\sin y\\)",
      "\\(2\\cos x\\cos y\\)",
      "\\(2\\sin x\\sin y\\)"
    ],
    "ans": "\\(2\\cos x\\cos y\\)",
    "reason": "Adding \\(\\cos(x+y)=\\cos x\\cos y-\\sin x\\sin y\\) and \\(\\cos(x-y)=\\cos x\\cos y+\\sin x\\sin y\\) cancels the sine terms, leaving \\(2\\cos x\\cos y\\)."
  },
  {
    "q": "\\(\\sin(x+y)-\\sin(x-y)=\\)",
    "options": [
      "\\(2\\cos x\\sin y\\)",
      "\\(2\\sin x\\sin y\\)",
      "\\(2\\cos x\\cos y\\)",
      "\\(2\\sin x\\cos y\\)"
    ],
    "ans": "\\(2\\cos x\\sin y\\)",
    "reason": "Subtracting \\(\\sin(x-y)=\\sin x\\cos y-\\cos x\\sin y\\) from \\(\\sin(x+y)=\\sin x\\cos y+\\cos x\\sin y\\) cancels the \\(\\sin x\\cos y\\) terms, leaving \\(2\\cos x\\sin y\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac7{25}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\cos(A-B)\\) is:",
    "options": [
      "\\(\\dfrac{364}{725}\\)",
      "\\(\\dfrac{627}{725}\\)",
      "\\(-\\dfrac{644}{725}\\)",
      "\\(-\\dfrac{364}{725}\\)"
    ],
    "ans": "\\(-\\dfrac{364}{725}\\)",
    "reason": "In QII, \\(\\cos A=-21/29\\) (negative); in QI, \\(\\cos B=24/25\\) (positive). Then \\(\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B=\\left(-\\tfrac{21}{29}\\right)\\left(\\tfrac{24}{25}\\right)+\\left(\\tfrac{20}{29}\\right)\\left(\\tfrac7{25}\\right)=-\\tfrac{364}{725}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac9{41}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\cos(A-B)\\) is:",
    "options": [
      "\\(-\\dfrac{1020}{1189}\\)",
      "\\(\\dfrac{1020}{1189}\\)",
      "\\(-\\dfrac{660}{1189}\\)",
      "\\(-\\dfrac{611}{1189}\\)"
    ],
    "ans": "\\(-\\dfrac{1020}{1189}\\)",
    "reason": "In QIV, \\(\\sin A=-9/41\\) (negative), \\(\\cos A=40/41\\); in QII, \\(\\sin B=20/29\\), \\(\\cos B=-21/29\\). \\(\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B=\\left(\\tfrac{40}{41}\\right)\\left(-\\tfrac{21}{29}\\right)+\\left(-\\tfrac9{41}\\right)\\left(\\tfrac{20}{29}\\right)=-\\tfrac{1020}{1189}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac8{17}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(\\dfrac{21}{221}\\)",
      "\\(-\\dfrac{171}{221}\\)",
      "\\(-\\dfrac{21}{221}\\)",
      "\\(\\dfrac{220}{221}\\)"
    ],
    "ans": "\\(\\dfrac{21}{221}\\)",
    "reason": "In QIV, \\(\\sin A=-5/13\\), \\(\\cos A=12/13\\); in QI, \\(\\sin B=8/17\\), \\(\\cos B=15/17\\). \\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B=\\left(-\\tfrac5{13}\\right)\\left(\\tfrac{15}{17}\\right)+\\left(\\tfrac{12}{13}\\right)\\left(\\tfrac8{17}\\right)=\\tfrac{21}{221}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac35\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(\\dfrac{143}{145}\\)",
      "\\(-\\dfrac{144}{145}\\)",
      "\\(-\\dfrac{17}{145}\\)",
      "\\(\\dfrac{17}{145}\\)"
    ],
    "ans": "\\(-\\dfrac{17}{145}\\)",
    "reason": "In QIV, \\(\\sin A=-3/5\\), \\(\\cos A=4/5\\); in QIII, \\(\\sin B=-20/29\\), \\(\\cos B=-21/29\\). \\(\\sin(A+B)=\\left(-\\tfrac35\\right)\\left(-\\tfrac{21}{29}\\right)+\\left(\\tfrac45\\right)\\left(-\\tfrac{20}{29}\\right)=-\\tfrac{17}{145}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac35\\) with the terminal arm of \\(A\\) in quadrant III, and \\(\\sin B=\\dfrac8{17}\\) with the terminal arm of \\(B\\) in quadrant IV, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(-\\dfrac{77}{85}\\)",
      "\\(\\dfrac{13}{85}\\)",
      "\\(-\\dfrac{84}{85}\\)",
      "\\(-\\dfrac{13}{85}\\)"
    ],
    "ans": "\\(-\\dfrac{13}{85}\\)",
    "reason": "In QIII, \\(\\sin A=-3/5\\), \\(\\cos A=-4/5\\); in QIV, \\(\\sin B=-8/17\\), \\(\\cos B=15/17\\). \\(\\sin(A+B)=\\left(-\\tfrac35\\right)\\left(\\tfrac{15}{17}\\right)+\\left(-\\tfrac45\\right)\\left(-\\tfrac8{17}\\right)=-\\tfrac{13}{85}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\cos(A-B)\\) is:",
    "options": [
      "\\(-\\dfrac{352}{377}\\)",
      "\\(\\dfrac{152}{377}\\)",
      "\\(\\dfrac{345}{377}\\)",
      "\\(-\\dfrac{152}{377}\\)"
    ],
    "ans": "\\(-\\dfrac{152}{377}\\)",
    "reason": "In QII, \\(\\sin A=5/13\\), \\(\\cos A=-12/13\\); in QI, \\(\\sin B=20/29\\), \\(\\cos B=21/29\\). \\(\\cos(A-B)=\\left(-\\tfrac{12}{13}\\right)\\left(\\tfrac{21}{29}\\right)+\\left(\\tfrac5{13}\\right)\\left(\\tfrac{20}{29}\\right)=-\\tfrac{152}{377}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant III, and \\(\\sin B=\\dfrac9{41}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\cos(A-B)\\) is:",
    "options": [
      "\\(\\dfrac{660}{1189}\\)",
      "\\(\\dfrac{1020}{1189}\\)",
      "\\(\\dfrac{989}{1189}\\)",
      "\\(-\\dfrac{660}{1189}\\)"
    ],
    "ans": "\\(\\dfrac{660}{1189}\\)",
    "reason": "In QIII, \\(\\sin A=-20/29\\), \\(\\cos A=-21/29\\); in QII, \\(\\sin B=9/41\\), \\(\\cos B=-40/41\\). \\(\\cos(A-B)=\\left(-\\tfrac{21}{29}\\right)\\left(-\\tfrac{40}{41}\\right)+\\left(-\\tfrac{20}{29}\\right)\\left(\\tfrac9{41}\\right)=\\tfrac{660}{1189}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac8{17}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(\\dfrac{468}{493}\\)",
      "\\(-\\dfrac{468}{493}\\)",
      "\\(-\\dfrac{132}{493}\\)",
      "\\(\\dfrac{155}{493}\\)"
    ],
    "ans": "\\(-\\dfrac{468}{493}\\)",
    "reason": "In QII, \\(\\sin A=20/29\\), \\(\\cos A=-21/29\\); in QII, \\(\\sin B=8/17\\), \\(\\cos B=-15/17\\). \\(\\sin(A+B)=\\left(\\tfrac{20}{29}\\right)\\left(-\\tfrac{15}{17}\\right)+\\left(-\\tfrac{21}{29}\\right)\\left(\\tfrac8{17}\\right)=-\\tfrac{468}{493}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac8{17}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac5{13}\\) with the terminal arm of \\(B\\) in quadrant IV, the value of \\(\\cos(A-B)\\) is:",
    "options": [
      "\\(\\dfrac{21}{221}\\)",
      "\\(\\dfrac{220}{221}\\)",
      "\\(-\\dfrac{140}{221}\\)",
      "\\(-\\dfrac{220}{221}\\)"
    ],
    "ans": "\\(-\\dfrac{220}{221}\\)",
    "reason": "In QII, \\(\\sin A=8/17\\), \\(\\cos A=-15/17\\); in QIV, \\(\\sin B=-5/13\\), \\(\\cos B=12/13\\). \\(\\cos(A-B)=\\left(-\\tfrac{15}{17}\\right)\\left(\\tfrac{12}{13}\\right)+\\left(\\tfrac8{17}\\right)\\left(-\\tfrac5{13}\\right)=-\\tfrac{220}{221}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac9{41}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac9{41}\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "0",
      "\\(-1\\)",
      "\\(\\dfrac12\\)",
      "\\(\\dfrac{720}{1681}\\)"
    ],
    "ans": "0",
    "reason": "In QIV, \\(\\sin A=-9/41\\), \\(\\cos A=40/41\\); in QIII, \\(\\sin B=-9/41\\), \\(\\cos B=-40/41\\). \\(\\sin(A+B)=\\left(-\\tfrac9{41}\\right)\\left(-\\tfrac{40}{41}\\right)+\\left(\\tfrac{40}{41}\\right)\\left(-\\tfrac9{41}\\right)=0\\) (the two terms cancel exactly)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac8{17}\\) with the terminal arm of \\(A\\) in quadrant III, and \\(\\sin B=\\dfrac7{25}\\) with the terminal arm of \\(B\\) in quadrant I, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(-\\dfrac{87}{425}\\)",
      "\\(\\dfrac{297}{425}\\)",
      "\\(-\\dfrac{304}{425}\\)",
      "\\(-\\dfrac{297}{425}\\)"
    ],
    "ans": "\\(-\\dfrac{297}{425}\\)",
    "reason": "In QIII, \\(\\sin A=-8/17\\), \\(\\cos A=-15/17\\); in QI, \\(\\sin B=7/25\\), \\(\\cos B=24/25\\). \\(\\sin(A+B)=\\left(-\\tfrac8{17}\\right)\\left(\\tfrac{24}{25}\\right)+\\left(-\\tfrac{15}{17}\\right)\\left(\\tfrac7{25}\\right)=-\\tfrac{297}{425}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac{20}{29}\\) with the terminal arm of \\(A\\) in quadrant II, and \\(\\sin B=\\dfrac{20}{29}\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(\\dfrac12\\)",
      "0",
      "\\(-\\dfrac{840}{841}\\)",
      "1"
    ],
    "ans": "0",
    "reason": "In QII, \\(\\sin A=20/29\\), \\(\\cos A=-21/29\\); in QIII, \\(\\sin B=-20/29\\), \\(\\cos B=-21/29\\). \\(\\sin(A+B)=\\left(\\tfrac{20}{29}\\right)\\left(-\\tfrac{21}{29}\\right)+\\left(-\\tfrac{21}{29}\\right)\\left(-\\tfrac{20}{29}\\right)=0\\) (the two terms cancel exactly)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac35\\) with the terminal arm of \\(B\\) in quadrant III, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(\\dfrac{56}{65}\\)",
      "\\(-\\dfrac{63}{65}\\)",
      "\\(\\dfrac{16}{65}\\)",
      "\\(-\\dfrac{16}{65}\\)"
    ],
    "ans": "\\(-\\dfrac{16}{65}\\)",
    "reason": "In QIV, \\(\\sin A=-5/13\\), \\(\\cos A=12/13\\); in QIII, \\(\\sin B=-3/5\\), \\(\\cos B=-4/5\\). \\(\\sin(A+B)=\\left(-\\tfrac5{13}\\right)\\left(-\\tfrac45\\right)+\\left(\\tfrac{12}{13}\\right)\\left(-\\tfrac35\\right)=-\\tfrac{16}{65}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac9{41}\\) with the terminal arm of \\(B\\) in quadrant II, the value of \\(\\cos(A-B)\\) is:",
    "options": [
      "\\(-\\dfrac{435}{533}\\)",
      "\\(\\dfrac{525}{533}\\)",
      "\\(-\\dfrac{525}{533}\\)",
      "\\(\\dfrac{92}{533}\\)"
    ],
    "ans": "\\(-\\dfrac{525}{533}\\)",
    "reason": "In QIV, \\(\\sin A=-5/13\\), \\(\\cos A=12/13\\); in QII, \\(\\sin B=9/41\\), \\(\\cos B=-40/41\\). \\(\\cos(A-B)=\\left(\\tfrac{12}{13}\\right)\\left(-\\tfrac{40}{41}\\right)+\\left(-\\tfrac5{13}\\right)\\left(\\tfrac9{41}\\right)=-\\tfrac{525}{533}\\)."
  },
  {
    "q": "Given \\(\\sin A=\\dfrac5{13}\\) with the terminal arm of \\(A\\) in quadrant IV, and \\(\\sin B=\\dfrac5{13}\\) with the terminal arm of \\(B\\) in quadrant IV, the value of \\(\\sin(A+B)\\) is:",
    "options": [
      "\\(\\dfrac{119}{169}\\)",
      "0",
      "\\(-\\dfrac{120}{169}\\)",
      "\\(\\dfrac{120}{169}\\)"
    ],
    "ans": "\\(-\\dfrac{120}{169}\\)",
    "reason": "In QIV, \\(\\sin A=\\sin B=-5/13\\), \\(\\cos A=\\cos B=12/13\\). \\(\\sin(A+B)=2\\sin A\\cos A=2\\left(-\\tfrac5{13}\\right)\\left(\\tfrac{12}{13}\\right)=-\\tfrac{120}{169}\\)."
  },
  {
    "q": "\\(\\sin2\\theta=\\)",
    "options": [
      "\\(2\\cos^2\\theta-1\\)",
      "\\(\\sin^2\\theta-\\cos^2\\theta\\)",
      "\\(\\cos^2\\theta-\\sin^2\\theta\\)",
      "\\(2\\sin\\theta\\cos\\theta\\)"
    ],
    "ans": "\\(2\\sin\\theta\\cos\\theta\\)",
    "reason": "This is the double-angle formula for sine, derived from \\(\\sin(\\theta+\\theta)\\): \\(\\sin2\\theta=2\\sin\\theta\\cos\\theta\\)."
  },
  {
    "q": "\\(\\cos2\\theta=\\)",
    "options": [
      "\\(1-2\\sin^2\\theta\\)",
      "\\(2\\sin^2\\theta-1\\)",
      "\\(\\sin^2\\theta+\\cos^2\\theta\\)",
      "\\(2\\sin\\theta\\cos\\theta\\)"
    ],
    "ans": "\\(1-2\\sin^2\\theta\\)",
    "reason": "From \\(\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta\\) and \\(\\cos^2\\theta=1-\\sin^2\\theta\\), substituting gives \\(\\cos2\\theta=1-2\\sin^2\\theta\\)."
  },
  {
    "q": "\\(\\cos2\\theta=\\) (in terms of \\(\\cos\\theta\\) alone)",
    "options": [
      "\\(1-\\cos^2\\theta\\)",
      "\\(\\cos^2\\theta-1\\)",
      "\\(2\\cos^2\\theta-1\\)",
      "\\(2\\sin^2\\theta-1\\)"
    ],
    "ans": "\\(2\\cos^2\\theta-1\\)",
    "reason": "From \\(\\cos2\\theta=\\cos^2\\theta-\\sin^2\\theta\\) and \\(\\sin^2\\theta=1-\\cos^2\\theta\\), substituting gives \\(\\cos2\\theta=2\\cos^2\\theta-1\\)."
  },
  {
    "q": "\\(\\tan2\\theta=\\)",
    "options": [
      "\\(\\dfrac{2\\tan\\theta}{1+\\tan^2\\theta}\\)",
      "\\(\\dfrac{1-\\tan^2\\theta}{2\\tan\\theta}\\)",
      "\\(\\dfrac{\\tan^2\\theta}{1-\\tan\\theta}\\)",
      "\\(\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}\\)"
    ],
    "ans": "\\(\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}\\)",
    "reason": "Dividing \\(\\sin2\\theta\\) by \\(\\cos2\\theta\\) and expressing in terms of \\(\\tan\\theta\\) gives \\(\\tan2\\theta=\\dfrac{2\\tan\\theta}{1-\\tan^2\\theta}\\)."
  },
  {
    "q": "\\(\\sin3\\alpha=\\)",
    "options": [
      "\\(3\\sin\\alpha+4\\sin^3\\alpha\\)",
      "\\(3\\sin\\alpha-4\\sin^3\\alpha\\)",
      "\\(\\sin\\alpha-4\\sin^3\\alpha\\)",
      "\\(4\\sin^3\\alpha-3\\sin\\alpha\\)"
    ],
    "ans": "\\(3\\sin\\alpha-4\\sin^3\\alpha\\)",
    "reason": "Expanding \\(\\sin3\\alpha=\\sin(2\\alpha+\\alpha)\\) using the double- and single-angle formulas and simplifying gives \\(3\\sin\\alpha-4\\sin^3\\alpha\\)."
  },
  {
    "q": "\\(\\cos3\\alpha=\\)",
    "options": [
      "\\(4\\cos^3\\alpha+3\\cos\\alpha\\)",
      "\\(3\\cos^3\\alpha-4\\cos\\alpha\\)",
      "\\(4\\cos^3\\alpha-3\\cos\\alpha\\)",
      "\\(3\\cos\\alpha-4\\cos^3\\alpha\\)"
    ],
    "ans": "\\(4\\cos^3\\alpha-3\\cos\\alpha\\)",
    "reason": "Expanding \\(\\cos3\\alpha=\\cos(2\\alpha+\\alpha)\\) similarly gives \\(4\\cos^3\\alpha-3\\cos\\alpha\\)."
  },
  {
    "q": "\\(\\tan3\\alpha=\\)",
    "options": [
      "\\(\\dfrac{3\\tan\\alpha+\\tan^3\\alpha}{1+3\\tan^2\\alpha}\\)",
      "\\(\\dfrac{3\\tan\\alpha-\\tan^3\\alpha}{1-3\\tan^2\\alpha}\\)",
      "\\(\\dfrac{3\\tan\\alpha-\\tan^3\\alpha}{1+3\\tan^2\\alpha}\\)",
      "\\(\\dfrac{\\tan^3\\alpha-3\\tan\\alpha}{1-3\\tan^2\\alpha}\\)"
    ],
    "ans": "\\(\\dfrac{3\\tan\\alpha-\\tan^3\\alpha}{1-3\\tan^2\\alpha}\\)",
    "reason": "Expanding \\(\\tan3\\alpha=\\tan(2\\alpha+\\alpha)\\) using the tangent addition formula gives \\(\\dfrac{3\\tan\\alpha-\\tan^3\\alpha}{1-3\\tan^2\\alpha}\\)."
  },
  {
    "q": "\\(\\cos^2\\left(\\dfrac{\\theta}{2}\\right)=\\)",
    "options": [
      "\\(\\dfrac{1+\\cos\\theta}{2}\\)",
      "\\(1+\\cos\\theta\\)",
      "\\(\\dfrac{1-\\cos\\theta}{2}\\)",
      "\\(\\dfrac{1+\\sin\\theta}{2}\\)"
    ],
    "ans": "\\(\\dfrac{1+\\cos\\theta}{2}\\)",
    "reason": "From \\(\\cos\\theta=2\\cos^2(\\theta/2)-1\\), solving for \\(\\cos^2(\\theta/2)\\) gives \\(\\dfrac{1+\\cos\\theta}2\\)."
  },
  {
    "q": "\\(\\sin^2\\left(\\dfrac{\\theta}{2}\\right)=\\)",
    "options": [
      "\\(\\dfrac{1-\\sin\\theta}{2}\\)",
      "\\(1-\\cos\\theta\\)",
      "\\(\\dfrac{1-\\cos\\theta}{2}\\)",
      "\\(\\dfrac{1+\\cos\\theta}{2}\\)"
    ],
    "ans": "\\(\\dfrac{1-\\cos\\theta}{2}\\)",
    "reason": "From \\(\\cos\\theta=1-2\\sin^2(\\theta/2)\\), solving for \\(\\sin^2(\\theta/2)\\) gives \\(\\dfrac{1-\\cos\\theta}2\\)."
  },
  {
    "q": "\\(\\tan\\left(\\dfrac{\\theta}{2}\\right)=\\)",
    "options": [
      "\\(\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{1+\\cos\\theta}}\\)",
      "\\(\\pm\\sqrt{\\dfrac{1+\\cos\\theta}{1-\\cos\\theta}}\\)",
      "\\(\\dfrac{1-\\cos\\theta}{\\sin\\theta}\\)",
      "\\(\\dfrac{\\sin\\theta}{1-\\cos\\theta}\\)"
    ],
    "ans": "\\(\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{1+\\cos\\theta}}\\)",
    "reason": "Dividing the half-angle formulas for sine and cosine (and taking the square root) gives \\(\\tan(\\theta/2)=\\pm\\sqrt{\\dfrac{1-\\cos\\theta}{1+\\cos\\theta}}\\)."
  },
  {
    "q": "If \\(\\sin\\theta=\\dfrac35\\) and \\(\\theta\\) is acute, then \\(\\cos2\\theta=\\)",
    "options": [
      "\\(\\dfrac{25}{7}\\)",
      "\\(\\dfrac7{25}\\)",
      "\\(-\\dfrac7{25}\\)",
      "\\(\\dfrac{24}{25}\\)"
    ],
    "ans": "\\(\\dfrac7{25}\\)",
    "reason": "With \\(\\sin\\theta=3/5\\), \\(\\cos2\\theta=1-2\\sin^2\\theta=1-2\\left(\\tfrac9{25}\\right)=1-\\tfrac{18}{25}=\\tfrac7{25}\\)."
  },
  {
    "q": "If \\(\\sin\\theta=\\dfrac35\\) and \\(\\theta\\) is acute, then \\(\\sin2\\theta=\\)",
    "options": [
      "\\(-\\dfrac{24}{25}\\)",
      "\\(\\dfrac{12}{25}\\)",
      "\\(\\dfrac7{25}\\)",
      "\\(\\dfrac{24}{25}\\)"
    ],
    "ans": "\\(\\dfrac{24}{25}\\)",
    "reason": "With \\(\\sin\\theta=3/5\\) (acute, so \\(\\cos\\theta=4/5\\)), \\(\\sin2\\theta=2\\sin\\theta\\cos\\theta=2\\left(\\tfrac35\\right)\\left(\\tfrac45\\right)=\\tfrac{24}{25}\\)."
  },
  {
    "q": "If \\(\\cos\\theta=-\\dfrac7{25}\\) with \\(\\theta\\) in QIII, then \\(\\sin\\left(\\dfrac{\\theta}{2}\\right)=\\)",
    "options": [
      "\\(-\\dfrac45\\)",
      "\\(\\dfrac35\\)",
      "\\(-\\dfrac35\\)",
      "\\(\\dfrac45\\)"
    ],
    "ans": "\\(\\dfrac45\\)",
    "reason": "With \\(\\cos\\theta=-7/25\\) in QIII, \\(\\theta/2\\) lands in QII where sine is positive: \\(\\sin(\\theta/2)=\\sqrt{\\dfrac{1-(-7/25)}2}=\\sqrt{\\dfrac{32/25}2}=\\sqrt{16/25}=4/5\\)."
  },
  {
    "q": "If \\(\\cos\\theta=-\\dfrac7{25}\\) with \\(\\theta\\) in QIII, then \\(\\cos\\left(\\dfrac{\\theta}{2}\\right)=\\)",
    "options": [
      "\\(\\dfrac45\\)",
      "\\(-\\dfrac35\\)",
      "\\(-\\dfrac45\\)",
      "\\(\\dfrac35\\)"
    ],
    "ans": "\\(-\\dfrac35\\)",
    "reason": "With \\(\\cos\\theta=-7/25\\) in QIII, \\(\\theta/2\\) lands in QII where cosine is negative: \\(\\cos(\\theta/2)=-\\sqrt{\\dfrac{1+(-7/25)}2}=-\\sqrt{\\dfrac{18/25}2}=-\\sqrt{9/25}=-3/5\\)."
  },
  {
    "q": "\\(4\\sin^4x\\) expressed in cosines of power 1 is:",
    "options": [
      "\\(3-4\\cos2x+\\cos4x\\)",
      "\\(\\dfrac{1-4\\cos2x+\\cos4x}{2}\\)",
      "\\(\\dfrac{3+4\\cos2x+\\cos4x}{2}\\)",
      "\\(\\dfrac{3-4\\cos2x+\\cos4x}{2}\\)"
    ],
    "ans": "\\(\\dfrac{3-4\\cos2x+\\cos4x}{2}\\)",
    "reason": "Writing \\(\\sin^2x=\\tfrac{1-\\cos2x}2\\) and squaring, then using \\(\\cos^22x=\\tfrac{1+\\cos4x}2\\), simplifies \\(4\\sin^4x\\) down to \\(\\dfrac{3-4\\cos2x+\\cos4x}2\\)."
  },
  {
    "q": "Expressing \\(12\\sin\\theta+5\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=17\\)",
      "\\(r=\\sqrt7\\)",
      "\\(r=169\\)",
      "\\(r=13\\)"
    ],
    "ans": "\\(r=13\\)",
    "reason": "\\(r=\\sqrt{12^2+5^2}=\\sqrt{144+25}=\\sqrt{169}=13\\)."
  },
  {
    "q": "Expressing \\(3\\sin\\theta+4\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=25\\)",
      "\\(r=\\sqrt1\\)",
      "\\(r=5\\)",
      "\\(r=7\\)"
    ],
    "ans": "\\(r=5\\)",
    "reason": "\\(r=\\sqrt{3^2+4^2}=\\sqrt{25}=5\\)."
  },
  {
    "q": "Expressing \\(1\\sin\\theta+1\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=\\sqrt0\\)",
      "\\(r=2\\)",
      "\\(r=1\\)",
      "\\(r=\\sqrt2\\)"
    ],
    "ans": "\\(r=\\sqrt2\\)",
    "reason": "\\(r=\\sqrt{1^2+1^2}=\\sqrt2\\)."
  },
  {
    "q": "Expressing \\(5\\sin\\theta+12\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=169\\)",
      "\\(r=17\\)",
      "\\(r=\\sqrt7\\)",
      "\\(r=13\\)"
    ],
    "ans": "\\(r=13\\)",
    "reason": "\\(r=\\sqrt{5^2+12^2}=\\sqrt{169}=13\\)."
  },
  {
    "q": "Expressing \\(8\\sin\\theta+15\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=23\\)",
      "\\(r=17\\)",
      "\\(r=\\sqrt7\\)",
      "\\(r=289\\)"
    ],
    "ans": "\\(r=17\\)",
    "reason": "\\(r=\\sqrt{8^2+15^2}=\\sqrt{289}=17\\)."
  },
  {
    "q": "Expressing \\(7\\sin\\theta+24\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=25\\)",
      "\\(r=\\sqrt{17}\\)",
      "\\(r=31\\)",
      "\\(r=625\\)"
    ],
    "ans": "\\(r=25\\)",
    "reason": "\\(r=\\sqrt{7^2+24^2}=\\sqrt{625}=25\\)."
  },
  {
    "q": "Expressing \\(9\\sin\\theta+40\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=41\\)",
      "\\(r=\\sqrt{31}\\)",
      "\\(r=1681\\)",
      "\\(r=49\\)"
    ],
    "ans": "\\(r=41\\)",
    "reason": "\\(r=\\sqrt{9^2+40^2}=\\sqrt{1681}=41\\)."
  },
  {
    "q": "Expressing \\(20\\sin\\theta+21\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=841\\)",
      "\\(r=29\\)",
      "\\(r=\\sqrt1\\)",
      "\\(r=41\\)"
    ],
    "ans": "\\(r=29\\)",
    "reason": "\\(r=\\sqrt{20^2+21^2}=\\sqrt{841}=29\\)."
  },
  {
    "q": "Expressing \\(6\\sin\\theta+8\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=100\\)",
      "\\(r=14\\)",
      "\\(r=10\\)",
      "\\(r=\\sqrt2\\)"
    ],
    "ans": "\\(r=10\\)",
    "reason": "\\(r=\\sqrt{6^2+8^2}=\\sqrt{100}=10\\)."
  },
  {
    "q": "Expressing \\(15\\sin\\theta+8\\cos\\theta\\) in the form \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "\\(r=289\\)",
      "\\(r=17\\)",
      "\\(r=23\\)",
      "\\(r=\\sqrt7\\)"
    ],
    "ans": "\\(r=17\\)",
    "reason": "\\(r=\\sqrt{15^2+8^2}=\\sqrt{289}=17\\)."
  },
  {
    "q": "\\(2\\sin\\alpha\\cos\\beta=\\)",
    "options": [
      "\\(\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\)",
      "\\(\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\)",
      "\\(2\\sin\\alpha\\sin\\beta\\)",
      "\\(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\)"
    ],
    "ans": "\\(\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\)",
    "reason": "Adding \\(\\sin(\\alpha+\\beta)\\) and \\(\\sin(\\alpha-\\beta)\\) cancels the \\(\\cos\\alpha\\sin\\beta\\) terms, leaving \\(2\\sin\\alpha\\cos\\beta\\)."
  },
  {
    "q": "\\(2\\cos\\alpha\\sin\\beta=\\)",
    "options": [
      "\\(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\)",
      "\\(2\\cos\\alpha\\cos\\beta\\)",
      "\\(\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)\\)",
      "\\(\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\)"
    ],
    "ans": "\\(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\)",
    "reason": "Subtracting \\(\\sin(\\alpha-\\beta)\\) from \\(\\sin(\\alpha+\\beta)\\) cancels the \\(\\sin\\alpha\\cos\\beta\\) terms, leaving \\(2\\cos\\alpha\\sin\\beta\\)."
  },
  {
    "q": "\\(2\\cos\\alpha\\cos\\beta=\\)",
    "options": [
      "\\(\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\)",
      "\\(\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)\\)",
      "\\(2\\sin\\alpha\\sin\\beta\\)",
      "\\(\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\)"
    ],
    "ans": "\\(\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\)",
    "reason": "Adding \\(\\cos(\\alpha+\\beta)\\) and \\(\\cos(\\alpha-\\beta)\\) cancels the sine terms, leaving \\(2\\cos\\alpha\\cos\\beta\\)."
  },
  {
    "q": "\\(-2\\sin\\alpha\\sin\\beta=\\)",
    "options": [
      "\\(\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\)",
      "\\(\\cos(\\alpha+\\beta)-\\cos(\\alpha-\\beta)\\)",
      "\\(2\\cos\\alpha\\cos\\beta\\)",
      "\\(\\cos(\\alpha-\\beta)-\\cos(\\alpha+\\beta)\\)"
    ],
    "ans": "\\(\\cos(\\alpha+\\beta)-\\cos(\\alpha-\\beta)\\)",
    "reason": "Subtracting \\(\\cos(\\alpha+\\beta)\\) from \\(\\cos(\\alpha-\\beta)\\) leaves \\(2\\sin\\alpha\\sin\\beta\\), so \\(-2\\sin\\alpha\\sin\\beta=\\cos(\\alpha+\\beta)-\\cos(\\alpha-\\beta)\\)."
  },
  {
    "q": "\\(\\sin p+\\sin q=\\)",
    "options": [
      "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)"
    ],
    "ans": "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)",
    "reason": "Setting \\(p=\\alpha+\\beta,\\ q=\\alpha-\\beta\\) in \\(2\\sin\\alpha\\cos\\beta=\\sin(\\alpha+\\beta)+\\sin(\\alpha-\\beta)\\) and solving for \\(\\alpha,\\beta\\) in terms of \\(p,q\\) gives the sum-to-product identity."
  },
  {
    "q": "\\(\\sin p-\\sin q=\\)",
    "options": [
      "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)"
    ],
    "ans": "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
    "reason": "Similarly substituting into \\(2\\cos\\alpha\\sin\\beta=\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\) gives \\(\\sin p-\\sin q=2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)."
  },
  {
    "q": "\\(\\cos p+\\cos q=\\)",
    "options": [
      "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)"
    ],
    "ans": "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)",
    "reason": "Substituting into \\(2\\cos\\alpha\\cos\\beta=\\cos(\\alpha+\\beta)+\\cos(\\alpha-\\beta)\\) gives \\(\\cos p+\\cos q=2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)."
  },
  {
    "q": "\\(\\cos p-\\cos q=\\)",
    "options": [
      "\\(-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\cos\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
      "\\(2\\cos\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)"
    ],
    "ans": "\\(-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)",
    "reason": "Substituting into \\(-2\\sin\\alpha\\sin\\beta=\\cos(\\alpha+\\beta)-\\cos(\\alpha-\\beta)\\) gives \\(\\cos p-\\cos q=-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\)."
  },
  {
    "q": "Expressing \\(2\\cos6\\theta\\sin3\\theta\\) as a sum/difference of sines gives:",
    "options": [
      "\\(\\sin9\\theta-\\sin3\\theta\\)",
      "\\(\\cos9\\theta-\\cos3\\theta\\)",
      "\\(2\\sin9\\theta\\)",
      "\\(\\sin9\\theta+\\sin3\\theta\\)"
    ],
    "ans": "\\(\\sin9\\theta-\\sin3\\theta\\)",
    "reason": "Using \\(2\\cos\\alpha\\sin\\beta=\\sin(\\alpha+\\beta)-\\sin(\\alpha-\\beta)\\) with \\(\\alpha=6\\theta,\\beta=3\\theta\\): \\(2\\cos6\\theta\\sin3\\theta=\\sin9\\theta-\\sin3\\theta\\)."
  },
  {
    "q": "Expressing \\(\\cos45^\\circ-\\cos15^\\circ\\) as a product gives:",
    "options": [
      "\\(-2\\cos30^\\circ\\sin15^\\circ\\)",
      "\\(2\\sin30^\\circ\\sin15^\\circ\\)",
      "\\(2\\cos30^\\circ\\cos15^\\circ\\)",
      "\\(-2\\sin30^\\circ\\sin15^\\circ\\)"
    ],
    "ans": "\\(-2\\sin30^\\circ\\sin15^\\circ\\)",
    "reason": "Using \\(\\cos p-\\cos q=-2\\sin\\left(\\tfrac{p+q}2\\right)\\sin\\left(\\tfrac{p-q}2\\right)\\) with \\(p=45^\\circ,q=15^\\circ\\): \\(\\cos45^\\circ-\\cos15^\\circ=-2\\sin30^\\circ\\sin15^\\circ\\)."
  },
  {
    "q": "\\(\\sin(45^\\circ-30^\\circ)=\\)",
    "options": [
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{2}\\)",
      "\\(\\dfrac{\\sqrt3-\\sqrt2}{2}\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}{4}\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6-\\sqrt2}{4}\\)",
    "reason": "\\(\\sin(45^\\circ-30^\\circ)=\\sin45^\\circ\\cos30^\\circ-\\cos45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6-\\sqrt2}4\\)."
  },
  {
    "q": "\\(\\sin22.5^\\circ\\cos22.5^\\circ+\\cos22.5^\\circ\\sin22.5^\\circ=\\)",
    "options": [
      "\\(-\\dfrac1{\\sqrt2}\\)",
      "\\(\\dfrac1{\\sqrt2}\\)",
      "\\(\\dfrac1{\\sqrt3}\\)",
      "\\(-\\dfrac1{\\sqrt3}\\)"
    ],
    "ans": "\\(\\dfrac1{\\sqrt2}\\)",
    "reason": "By the sine addition formula, this is \\(\\sin(22.5^\\circ+22.5^\\circ)=\\sin45^\\circ=1/\\sqrt2\\) (same value as \\(\\sqrt2/2\\))."
  },
  {
    "q": "\\(\\cos(\\pi-\\theta)=\\)",
    "options": [
      "\\(-\\cos\\theta\\)",
      "\\(\\pm\\cos\\theta\\)",
      "\\(\\cos\\theta\\)",
      "\\(\\sec\\theta\\)"
    ],
    "ans": "\\(-\\cos\\theta\\)",
    "reason": "\\(\\pi-\\theta\\) lies in QII where cosine is negative, and the ratio type is unchanged (\\(\\pi\\) is an even multiple of a right angle): \\(\\cos(\\pi-\\theta)=-\\cos\\theta\\)."
  },
  {
    "q": "\\(2\\sin\\alpha\\cos\\alpha=\\)",
    "options": [
      "\\(\\sin(\\pi-2\\alpha)\\)",
      "\\(\\cos(-2\\alpha)\\)",
      "\\(\\sin(\\pi+2\\alpha)\\)",
      "\\(\\sin(2\\alpha)\\)"
    ],
    "ans": "\\(\\sin(2\\alpha)\\)",
    "reason": "This is exactly the double-angle identity for sine: \\(2\\sin\\alpha\\cos\\alpha=\\sin2\\alpha\\)."
  },
  {
    "q": "If \\(\\sin\\beta=\\dfrac35\\), then \\(\\cos2\\beta=\\)",
    "options": [
      "\\(-\\dfrac7{25}\\)",
      "\\(-\\dfrac75\\)",
      "\\(\\dfrac75\\)",
      "\\(\\dfrac7{25}\\)"
    ],
    "ans": "\\(\\dfrac7{25}\\)",
    "reason": "With \\(\\sin\\beta=3/5\\), \\(\\cos2\\beta=1-2\\sin^2\\beta=1-2\\left(\\tfrac9{25}\\right)=\\tfrac7{25}\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Value</th></tr><tr><td>\\(\\sin A\\)</td><td>\\(\\tfrac{4}{5}\\), \\(A\\) in QII</td></tr><tr><td>\\(\\sin B\\)</td><td>\\(\\tfrac{5}{13}\\), \\(B\\) in QI</td></tr></table></div>\\(\\cos A\\) equals:",
    "options": [
      "\\(-\\tfrac35\\)",
      "\\(\\tfrac35\\)",
      "\\(-\\tfrac45\\)",
      "\\(\\tfrac45\\)"
    ],
    "ans": "\\(-\\tfrac35\\)",
    "reason": "In QII, cosine is negative: \\(\\cos A=-\\sqrt{1-(4/5)^2}=-3/5\\) (from the 3-4-5 triple)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Value</th></tr><tr><td>\\(\\sin A\\)</td><td>\\(\\tfrac{4}{5}\\), \\(A\\) in QII</td></tr><tr><td>\\(\\sin B\\)</td><td>\\(\\tfrac{5}{13}\\), \\(B\\) in QI</td></tr></table></div>\\(\\cos B\\) equals:",
    "options": [
      "\\(\\tfrac{12}{13}\\)",
      "\\(-\\tfrac{12}{13}\\)",
      "\\(\\tfrac5{13}\\)",
      "\\(-\\tfrac5{13}\\)"
    ],
    "ans": "\\(\\tfrac{12}{13}\\)",
    "reason": "In QI, cosine is positive: \\(\\cos B=\\sqrt{1-(5/13)^2}=12/13\\) (from the 5-12-13 triple)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Value</th></tr><tr><td>\\(\\sin A\\)</td><td>\\(\\tfrac{4}{5}\\), \\(A\\) in QII</td></tr><tr><td>\\(\\sin B\\)</td><td>\\(\\tfrac{5}{13}\\), \\(B\\) in QI</td></tr></table></div>\\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B\\) equals:",
    "options": [
      "\\(\\tfrac{33}{65}\\)",
      "\\(\\tfrac{63}{65}\\)",
      "\\(-\\tfrac{33}{65}\\)",
      "\\(\\tfrac{16}{65}\\)"
    ],
    "ans": "\\(\\tfrac{33}{65}\\)",
    "reason": "\\(\\sin(A+B)=\\left(\\tfrac45\\right)\\left(\\tfrac{12}{13}\\right)+\\left(-\\tfrac35\\right)\\left(\\tfrac5{13}\\right)=\\tfrac{48}{65}-\\tfrac{15}{65}=\\tfrac{33}{65}\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Quantity</th><th>Value</th></tr><tr><td>\\(\\sin A\\)</td><td>\\(\\tfrac{4}{5}\\), \\(A\\) in QII</td></tr><tr><td>\\(\\sin B\\)</td><td>\\(\\tfrac{5}{13}\\), \\(B\\) in QI</td></tr></table></div>\\(\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B\\) equals:",
    "options": [
      "\\(\\tfrac{16}{65}\\)",
      "\\(-\\tfrac{16}{65}\\)",
      "\\(\\tfrac{63}{65}\\)",
      "\\(-\\tfrac{63}{65}\\)"
    ],
    "ans": "\\(\\tfrac{16}{65}\\)",
    "reason": "Using \\(\\cos(A-B)=\\cos A\\cos B+\\sin A\\sin B\\) with \\(\\cos A=-3/5,\\ \\cos B=12/13,\\ \\sin A=4/5,\\ \\sin B=5/13\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expression</th><th>Coefficients</th></tr><tr><td>\\(a\\sin\\theta+b\\cos\\theta\\)</td><td>\\(a=9,\\ b=12\\)</td></tr></table></div>Writing \\(9\\sin\\theta+12\\cos\\theta\\) as \\(r\\sin(\\theta+\\phi)\\), the value of \\(r\\) is:",
    "options": [
      "15",
      "21",
      "3",
      "225"
    ],
    "ans": "15",
    "reason": "\\(r=\\sqrt{a^2+b^2}=\\sqrt{9^2+12^2}=\\sqrt{225}=15\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expression</th><th>Coefficients</th></tr><tr><td>\\(a\\sin\\theta+b\\cos\\theta\\)</td><td>\\(a=9,\\ b=12\\)</td></tr></table></div>The maximum value the expression \\(9\\sin\\theta+12\\cos\\theta\\) can take is:",
    "options": [
      "15",
      "21",
      "9",
      "12"
    ],
    "ans": "15",
    "reason": "The maximum of \\(r\\sin(\\theta+\\phi)\\) is simply \\(r=15\\), reached when \\(\\sin(\\theta+\\phi)=1\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expression</th><th>Coefficients</th></tr><tr><td>\\(a\\sin\\theta+b\\cos\\theta\\)</td><td>\\(a=9,\\ b=12\\)</td></tr></table></div>The minimum value the expression can take is:",
    "options": [
      "\\(-15\\)",
      "0",
      "\\(-21\\)",
      "\\(-3\\)"
    ],
    "ans": "\\(-15\\)",
    "reason": "The minimum of \\(r\\sin(\\theta+\\phi)\\) is \\(-r=-15\\), reached when \\(\\sin(\\theta+\\phi)=-1\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Expression</th><th>Coefficients</th></tr><tr><td>\\(a\\sin\\theta+b\\cos\\theta\\)</td><td>\\(a=9,\\ b=12\\)</td></tr></table></div>\\(\\tan\\phi=b/a\\) here equals:",
    "options": [
      "\\(\\tfrac{12}9=\\tfrac43\\)",
      "\\(\\tfrac9{12}=\\tfrac34\\)",
      "\\(\\tfrac{15}9\\)",
      "\\(\\tfrac{21}{12}\\)"
    ],
    "ans": "\\(\\tfrac{12}9=\\tfrac43\\)",
    "reason": "By definition of \\(\\phi\\) in this form, \\(\\tan\\phi=b/a=12/9=4/3\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Split as</th></tr><tr><td>\\(75^\\circ\\)</td><td>\\(45^\\circ+30^\\circ\\)</td></tr></table></div>Using \\(\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B\\), \\(\\sin75^\\circ\\) equals:",
    "options": [
      "\\(\\dfrac{\\sqrt6+\\sqrt2}4\\)",
      "\\(\\dfrac{\\sqrt6-\\sqrt2}4\\)",
      "\\(\\dfrac{\\sqrt3+1}2\\)",
      "\\(\\dfrac{\\sqrt2}2\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6+\\sqrt2}4\\)",
    "reason": "\\(\\sin75^\\circ=\\sin45^\\circ\\cos30^\\circ+\\cos45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt2}2\\cdot\\dfrac{\\sqrt3}2+\\dfrac{\\sqrt2}2\\cdot\\dfrac12=\\dfrac{\\sqrt6+\\sqrt2}4\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Split as</th></tr><tr><td>\\(75^\\circ\\)</td><td>\\(45^\\circ+30^\\circ\\)</td></tr></table></div>Using \\(\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B\\), \\(\\cos75^\\circ\\) equals:",
    "options": [
      "\\(\\dfrac{\\sqrt6-\\sqrt2}4\\)",
      "\\(\\dfrac{\\sqrt6+\\sqrt2}4\\)",
      "\\(\\dfrac{\\sqrt3-1}2\\)",
      "\\(\\dfrac12\\)"
    ],
    "ans": "\\(\\dfrac{\\sqrt6-\\sqrt2}4\\)",
    "reason": "\\(\\cos75^\\circ=\\cos45^\\circ\\cos30^\\circ-\\sin45^\\circ\\sin30^\\circ=\\dfrac{\\sqrt6-\\sqrt2}4\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Split as</th></tr><tr><td>\\(75^\\circ\\)</td><td>\\(45^\\circ+30^\\circ\\)</td></tr></table></div>\\(\\tan75^\\circ=\\dfrac{\\sin75^\\circ}{\\cos75^\\circ}\\) equals:",
    "options": [
      "\\(2+\\sqrt3\\)",
      "\\(2-\\sqrt3\\)",
      "\\(\\sqrt3+1\\)",
      "\\(\\sqrt3-1\\)"
    ],
    "ans": "\\(2+\\sqrt3\\)",
    "reason": "\\(\\tan75^\\circ=\\dfrac{(\\sqrt6+\\sqrt2)/4}{(\\sqrt6-\\sqrt2)/4}=\\dfrac{\\sqrt6+\\sqrt2}{\\sqrt6-\\sqrt2}\\), which rationalizes to \\(2+\\sqrt3\\)."
  },
  {
    "q": "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Split as</th></tr><tr><td>\\(75^\\circ\\)</td><td>\\(45^\\circ+30^\\circ\\)</td></tr></table></div>Since \\(75^\\circ=45^\\circ+30^\\circ\\), the value of \\(\\cos75^\\circ\\) can also be checked against \\(\\sin15^\\circ\\) because:",
    "options": [
      "\\(\\cos75^\\circ=\\sin(90^\\circ-75^\\circ)=\\sin15^\\circ\\)",
      "\\(\\cos75^\\circ=-\\sin15^\\circ\\)",
      "They are unrelated",
      "\\(\\cos75^\\circ=\\cos15^\\circ\\)"
    ],
    "ans": "\\(\\cos75^\\circ=\\sin(90^\\circ-75^\\circ)=\\sin15^\\circ\\)",
    "reason": "Sine and cosine of complementary angles are equal: \\(\\cos\\theta=\\sin(90^\\circ-\\theta)\\), so \\(\\cos75^\\circ=\\sin15^\\circ\\)."
  }
];
  }
});
