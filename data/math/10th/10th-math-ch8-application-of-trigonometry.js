// Class 10 Math — Chapter 8: Application of Trigonometry
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch8",
  label: "Chapter 8: Application of Trigonometry",
  order: 8,
  questions: function () {
    return [
    {
      q: "In right \\(\\triangle ABC\\), \\(a=2\\) cm, \\(c=4\\) cm (hypotenuse), what is \\(\\alpha\\)?",
      options: ["\\(45^\\circ\\)","\\(120^\\circ\\)","\\(60^\\circ\\)","\\(30^\\circ\\)"],
      ans: "\\(30^\\circ\\)",
      reason: "\\(\\sin\\alpha=\\dfrac{a}{c}=\\dfrac24=\\dfrac12\\Rightarrow\\alpha=30^\\circ\\)."
    },
    {
      q: "If in a triangle, \\(a=10,\\,b=15,\\,\\alpha=32^\\circ\\), then \\(\\beta=\\)",
      options: ["\\(46.5^\\circ\\)","\\(52.7^\\circ\\)","\\(62.8^\\circ\\)","\\(42.5^\\circ\\)"],
      ans: "\\(52.7^\\circ\\)",
      reason: "\\(\\sin\\beta=\\dfrac{b\\sin\\alpha}{a}=\\dfrac{15\\sin32^\\circ}{10}\\approx0.795\\Rightarrow\\beta\\approx52.7^\\circ\\)."
    },
    {
      q: "Area of an equilateral triangle having side \\(a\\) is:",
      options: ["\\(\\dfrac{\\sqrt3}{8}a\\)","\\(\\dfrac{\\sqrt3}{4}a^2\\)","\\(\\dfrac{\\sqrt3}{16}a\\)","\\(\\dfrac{\\sqrt3}{16}a^2\\)"],
      ans: "\\(\\dfrac{\\sqrt3}{4}a^2\\)",
      reason: "Area of an equilateral triangle \\(=\\tfrac12a\\cdot a\\sin60^\\circ=\\dfrac{\\sqrt3}{4}a^2\\)."
    },
    {
      q: "If \\(a,\\,a,\\,b\\) are the sides of an isosceles triangle, then \\(S=\\)",
      options: ["\\(a-\\dfrac{a+b}{2}\\)","\\(\\dfrac{a}{2}+b\\)","\\(a+\\dfrac{b}{2}\\)","\\(a+\\dfrac{a+b}{2}\\)"],
      ans: "\\(a+\\dfrac{b}{2}\\)",
      reason: "\\(S=\\dfrac{a+a+b}{2}=a+\\dfrac b2\\)."
    },
    {
      q: "Area of a triangle \\(ABC\\) with \\(a=20,\\,b=30,\\,\\gamma=90^\\circ\\) is:",
      options: ["0","30","300","600"],
      ans: "300",
      reason: "\\(\\Delta=\\tfrac12ab\\sin90^\\circ=\\tfrac12(20)(30)=300\\)."
    },
    {
      q: "For an equilateral triangle, \\(r:r_1:R=\\)",
      options: ["3 : 2 : 1","1 : 1 : 2","1 : 2 : 3","1 : 3 : 2"],
      ans: "1 : 3 : 2",
      reason: "For side \\(a\\): \\(r=\\dfrac{a}{2\\sqrt3},\\ r_1=\\dfrac{\\sqrt3a}{2},\\ R=\\dfrac{a}{\\sqrt3}\\). Ratio \\(r:r_1:R=1:3:2\\)."
    },
    {
      q: "Radius of the circum-circle for a triangle with sides 6, 8, 10 is:",
      options: ["6","2","5","4"],
      ans: "5",
      reason: "\\(6^2+8^2=10^2\\), so it is right-angled and \\(R=\\tfrac{10}{2}=5\\)."
    },
    {
      q: "If \\(a=5,\\,b=10,\\,c=20\\) are the sides of a triangle \\(ABC\\), then such a triangle:",
      options: ["Has \\(\\alpha=0^\\circ\\)","Is not possible","Has an obtuse angle \\(\\alpha\\)","Has an acute angle \\(\\alpha\\)"],
      ans: "Is not possible",
      reason: "The triangle inequality fails: \\(5+10=15\\lt 20\\), so no such triangle exists."
    },
    {
      q: "If in triangle \\(ABC\\), \\(a=b=c\\), then \\(\\tan\\dfrac{\\alpha}{2}=\\)",
      options: ["All of \\(\\sqrt{\\frac{S-a}{a}},\\sqrt{\\frac{S-b}{b}},\\sqrt{\\frac{S-c}{c}}\\) (equal by symmetry)","Only \\(\\sqrt{\\frac{S-a}{a}}\\)","Only \\(\\sqrt{\\frac{S-b}{b}}\\)","Only \\(\\sqrt{\\frac{S-c}{c}}\\)"],
      ans: "All of \\(\\sqrt{\\frac{S-a}{a}},\\sqrt{\\frac{S-b}{b}},\\sqrt{\\frac{S-c}{c}}\\) (equal by symmetry)",
      reason: "With \\(a=b=c\\), \\(S-a=S-b=S-c\\), so all three expressions are equal."
    },
    {
      q: "The shadow of a 5.6 ft tall man makes a \\(45^\\circ\\) angle of elevation with the Sun. The length of the shadow is:",
      options: ["11.2 ft","8.4 ft","2.8 ft","5.6 ft"],
      ans: "5.6 ft",
      reason: "At \\(45^\\circ\\), \\(\\tan45^\\circ=1\\), so shadow length equals height, 5.6 ft."
    },
    {
      q: "\\(R(\\sin\\alpha+\\sin\\beta+\\sin\\gamma)=\\)",
      options: ["\\(\\dfrac{1}{S^2}\\)","S","\\(\\dfrac{1}{S}\\)","\\(\\dfrac{S}{2}\\)"],
      ans: "S",
      reason: "\\(\\sin\\alpha=\\dfrac{a}{2R}\\), so \\(R\\sum\\sin=\\dfrac{a+b+c}{2}=S\\)."
    },
    {
      q: "In triangle \\(ABC\\), if \\(a=8,\\,\\alpha=15^\\circ,\\,\\beta=20^\\circ\\), then \\(b\\approx\\)",
      options: ["6.05","10.57","8.36","12.3"],
      ans: "10.57",
      reason: "\\(b=\\dfrac{a\\sin\\beta}{\\sin\\alpha}=\\dfrac{8\\sin20^\\circ}{\\sin15^\\circ}\\approx10.57\\)."
    },
    {
      q: "In the same triangle, \\(\\gamma=\\)",
      options: ["\\(35^\\circ\\)","\\(165^\\circ\\)","\\(155^\\circ\\)","\\(145^\\circ\\)"],
      ans: "\\(145^\\circ\\)",
      reason: "\\(\\gamma=180^\\circ-15^\\circ-20^\\circ=145^\\circ\\)."
    },
    {
      q: "In triangle \\(ABC\\), if \\(a=34,\\,b=41,\\,\\alpha=115^\\circ\\), then:",
      options: ["\\(\\beta=115^\\circ\\)","Exactly two triangles exist","No such triangle exists (since \\(\\sin\\beta>1\\))","Exactly one triangle exists"],
      ans: "No such triangle exists (since \\(\\sin\\beta>1\\))",
      reason: "\\(\\sin\\beta=\\dfrac{41\\sin115^\\circ}{34}\\approx1.09>1\\), which is impossible, so no triangle exists."
    },
    {
      q: "The diagonals of a parallelogram measure 12 cm and 22 cm and intersect at \\(143^\\circ\\). The longer side of the parallelogram is approximately:",
      options: ["12.7 cm","20.1 cm","16.2 cm","9.4 cm"],
      ans: "16.2 cm",
      reason: "Half-diagonals are 6 and 11. The sides satisfy \\(s^2=6^2+11^2-2(6)(11)\\cos\\theta\\) with \\(\\theta=143^\\circ\\) or \\(37^\\circ\\). The longer side (\\(143^\\circ\\)) is \\(\\sqrt{262.4}\\approx16.2\\) cm."
    },
    {
      q: "Usman and Abubakar walk 1.5 km, then walk 0.95 km along a second path so that the angle between the two paths is \\(100^\\circ\\), and then return home directly. The length of the last portion of their walk is approximately:",
      options: ["1.45 km","2.10 km","1.91 km","1.75 km"],
      ans: "1.91 km",
      reason: "The angle between the two paths is \\(100^\\circ\\): \\(c^2=1.5^2+0.95^2-2(1.5)(0.95)\\cos100^\\circ\\approx3.65\\), so \\(c\\approx1.91\\) km."
    },
    {
      q: "The total distance they walk is approximately:",
      options: ["4.36 km","4.86 km","3.45 km","3.95 km"],
      ans: "4.36 km",
      reason: "Total distance \\(=1.5+0.95+1.91\\approx4.36\\) km."
    },
    {
      q: "A kite has two pairs of adjacent sides of lengths 20.0 in and 35.0 in; the shorter sides meet at \\(115^\\circ\\). The diagonal between the points where the unequal sides meet is approximately:",
      options: ["25.6 in","33.7 in","30.2 in","38.5 in"],
      ans: "33.7 in",
      reason: "The 20 in sides meet at \\(115^\\circ\\): \\(d^2=20^2+20^2-2(20)(20)\\cos115^\\circ\\approx1138\\), so \\(d\\approx33.7\\) in."
    },
    {
      q: "Using that diagonal, the angle at which the two longer (35 in) sides meet is approximately:",
      options: ["\\(45^\\circ\\)","\\(93.6^\\circ\\)","\\(57.7^\\circ\\)","\\(115^\\circ\\)"],
      ans: "\\(57.7^\\circ\\)",
      reason: "\\(\\cos\\theta=\\dfrac{35^2+35^2-33.7^2}{2(35)(35)}\\approx0.536\\Rightarrow\\theta\\approx57.7^\\circ\\)."
    },
    {
      q: "Three streets enclose a triangular park with sides 55 m, 63 m and 77 m. The area of the park (Heron's formula) is approximately:",
      options: ["1712 m\\(^2\\)","1800 m\\(^2\\)","1650 m\\(^2\\)","1600 m\\(^2\\)"],
      ans: "1712 m\\(^2\\)",
      reason: "\\(S=97.5\\); \\(\\Delta=\\sqrt{97.5(42.5)(34.5)(20.5)}\\approx1712\\) m\\(^2\\)."
    },
    {
      q: "An isosceles triangle has base 14.5 cm and vertex angle \\(110^\\circ\\). Each congruent side is approximately:",
      options: ["8.85 cm","12.4 cm","7.25 cm","10.2 cm"],
      ans: "8.85 cm",
      reason: "Half the base is 7.25 and the half-vertex angle is \\(55^\\circ\\): side \\(=\\dfrac{7.25}{\\sin55^\\circ}\\approx8.85\\) cm."
    },
    {
      q: "The perimeter of this triangle is approximately:",
      options: ["29.0 cm","35.5 cm","32.2 cm","27.7 cm"],
      ans: "32.2 cm",
      reason: "Perimeter \\(=14.5+2(8.85)\\approx32.2\\) cm."
    },
    {
      q: "A triangular park has two street-angles of \\(80^\\circ\\) and \\(60^\\circ\\), with the longest side (opposite \\(80^\\circ\\)) measuring 90 m. The other two sides are approximately:",
      options: ["79.1 m and 58.7 m","70 m and 50 m","90 m and 45 m","85 m and 60 m"],
      ans: "79.1 m and 58.7 m",
      reason: "Third angle \\(=40^\\circ\\). \\(\\dfrac{90}{\\sin80^\\circ}=\\dfrac{x}{\\sin60^\\circ}=\\dfrac{y}{\\sin40^\\circ}\\) gives \\(x\\approx79.1,\\ y\\approx58.7\\) m."
    },
    {
      q: "Aamir wants to draw a parallelogram with one side 12 cm, one diagonal 10 cm, and one angle \\(120^\\circ\\). Using the Law of Cosines, this is:",
      options: ["Not possible (the resulting equation has no real solution)","Possible, with the other side \\(\\approx8\\) cm","Possible, with the other side \\(\\approx6\\) cm","Possible, with the other side \\(\\approx10\\) cm"],
      ans: "Not possible (the resulting equation has no real solution)",
      reason: "The diagonal 10 must lie opposite the \\(60^\\circ\\) angle: \\(100=144+x^2-12x\\Rightarrow x^2-12x+44=0\\), whose discriminant is negative. (If it lay opposite \\(120^\\circ\\) it would exceed 12.) No such parallelogram exists."
    },
    {
      q: "The angle of depression from an observer to a pipe is \\(55^\\circ\\); five stories (each 9 ft) below, the angle of inclination to the same pipe is \\(20^\\circ\\). The horizontal distance between the buildings is approximately:",
      options: ["45 ft","43.8 ft","25.1 ft","26.7 ft"],
      ans: "25.1 ft",
      reason: "Let \\(d\\) be the horizontal distance. \\(d\\tan55^\\circ+d\\tan20^\\circ=45\\Rightarrow d\\approx25.1\\) ft."
    },
    {
      q: "The distance from the original (first) observer to the pipe (line of sight) is approximately:",
      options: ["25.1 ft","20.0 ft","43.8 ft","26.7 ft"],
      ans: "43.8 ft",
      reason: "Line of sight \\(=\\dfrac{d}{\\cos55^\\circ}=\\dfrac{25.1}{0.5736}\\approx43.8\\) ft."
    },
    {
      q: "A geologist is 4 miles from the northern-most point and 2 miles from the southern-most point of a crater, with a \\(117^\\circ\\) angle between the lines of sight. The diameter of the crater is approximately:",
      options: ["4.5 miles","3.8 miles","6 miles","5.22 miles"],
      ans: "5.22 miles",
      reason: "\\(d^2=4^2+2^2-2(4)(2)\\cos117^\\circ\\approx27.3\\), so \\(d\\approx5.22\\) miles."
    },
    {
      q: "For an equilateral triangle of side 6 cm, the circumference of the circumscribed circle is approximately:",
      options: ["37.7 cm","21.8 cm","12.6 cm","18.8 cm"],
      ans: "21.8 cm",
      reason: "\\(R=\\dfrac{6}{\\sqrt3}=3.464\\); circumference \\(=2\\pi R\\approx21.8\\) cm."
    },
    {
      q: "The circumference of an escribed circle (ex-circle) of the same triangle is approximately:",
      options: ["37.7 cm","28.3 cm","32.7 cm","21.8 cm"],
      ans: "32.7 cm",
      reason: "\\(\\Delta=9\\sqrt3\\), \\(S=9\\), \\(r_1=\\dfrac{\\Delta}{S-a}=\\dfrac{15.59}{3}\\approx5.196\\); circumference \\(=2\\pi r_1\\approx32.7\\) cm."
    },
    {
      q: "If two sides of a triangle are congruent (length \\(a\\)) and the included angle between them is \\(60^\\circ\\), then by the Law of Cosines the third side \\(c\\) equals:",
      options: ["\\(a\\sqrt2\\)","\\(2a\\)","\\(a\\sqrt3\\)","\\(a\\) (so the triangle is equilateral)"],
      ans: "\\(a\\) (so the triangle is equilateral)",
      reason: "\\(c^2=a^2+a^2-2a^2\\cos60^\\circ=a^2\\), so \\(c=a\\) and the triangle is equilateral."
    },
    {
      q: "Using \\(r=\\Delta/S\\), \\(r_1=\\Delta/(S-a)\\), etc., the identity \\(\\dfrac{1}{r^2}+\\dfrac{1}{r_1^2}+\\dfrac{1}{r_2^2}+\\dfrac{1}{r_3^2}=\\)",
      options: ["\\(\\dfrac{(a+b+c)^2}{\\Delta^2}\\)","\\(\\dfrac{abc}{\\Delta^2}\\)","\\(\\dfrac{a^2+b^2+c^2}{\\Delta^2}\\)","\\(\\dfrac{a^2+b^2+c^2}{\\Delta}\\)"],
      ans: "\\(\\dfrac{a^2+b^2+c^2}{\\Delta^2}\\)",
      reason: "\\(\\dfrac1{r^2}+\\dfrac1{r_1^2}+\\dfrac1{r_2^2}+\\dfrac1{r_3^2}=\\dfrac{S^2+(S-a)^2+(S-b)^2+(S-c)^2}{\\Delta^2}=\\dfrac{a^2+b^2+c^2}{\\Delta^2}\\)."
    },
    {
      q: "For the square-based pyramid \\(ABCDE\\) with \\(OA=6\\) cm (height) and base side 4 cm, the angle between side \\(AB\\) and the base plane \\(BCDE\\) is approximately:",
      options: ["\\(70^\\circ\\)","\\(45^\\circ\\)","\\(55^\\circ\\)","\\(64.8^\\circ\\)"],
      ans: "\\(64.8^\\circ\\)",
      reason: "\\(OB\\) is half the base diagonal \\(=2\\sqrt2\\). \\(\\tan\\theta=\\dfrac{6}{2\\sqrt2}\\Rightarrow\\theta\\approx64.8^\\circ\\)."
    },
    {
      q: "A room's floor is 9 m by 6 m. The length of the floor diagonal is approximately:",
      options: ["10.82 m","11.5 m","10 m","9.85 m"],
      ans: "10.82 m",
      reason: "\\(\\sqrt{9^2+6^2}=\\sqrt{117}\\approx10.82\\) m."
    },
    {
      q: "The measure of a quadrantal angle is always a multiple of:",
      options: ["\\(30^\\circ\\)","\\(90^\\circ\\)","\\(60^\\circ\\)","\\(45^\\circ\\)"],
      ans: "\\(90^\\circ\\)",
      reason: "Quadrantal angles lie on the axes, so they are multiples of \\(90^\\circ\\)."
    },
    {
      q: "Two angles having the same terminal ray in standard position are called:",
      options: ["Complementary angles","Coterminal angles","Supplementary angles","Reference angles"],
      ans: "Coterminal angles",
      reason: "Angles with the same terminal ray are coterminal."
    },
    {
      q: "On a unit circle, if \\(\\angle COP=\\theta\\), the coordinates of \\(P\\) are:",
      options: ["\\((\\sin\\theta,\\cos\\theta)\\)","\\((\\cos\\theta,\\sin\\theta)\\)","\\((\\tan\\theta,\\cot\\theta)\\)","\\((1,\\theta)\\)"],
      ans: "\\((\\cos\\theta,\\sin\\theta)\\)",
      reason: "On the unit circle \\(P=(\\cos\\theta,\\sin\\theta)\\)."
    },
    {
      q: "For an angle \\(\\theta\\) in the second quadrant (\\(90^\\circ\\lt \\theta\\lt 180^\\circ\\)):",
      options: ["\\(\\cos\\theta\\) is negative and \\(\\sin\\theta\\) is positive","\\(\\cos\\theta\\) is positive and \\(\\sin\\theta\\) is negative","Both \\(\\cos\\theta\\) and \\(\\sin\\theta\\) are negative","Both \\(\\cos\\theta\\) and \\(\\sin\\theta\\) are positive"],
      ans: "\\(\\cos\\theta\\) is negative and \\(\\sin\\theta\\) is positive",
      reason: "In the second quadrant \\(x\\lt 0,\\ y>0\\): cosine is negative and sine is positive."
    },
    {
      q: "\\(\\sin(180^\\circ-\\theta)=\\)",
      options: ["\\(\\cos\\theta\\)","\\(-\\sin\\theta\\)","\\(\\sin\\theta\\)","\\(-\\cos\\theta\\)"],
      ans: "\\(\\sin\\theta\\)",
      reason: "\\(\\sin(180^\\circ-\\theta)=\\sin\\theta\\)."
    },
    {
      q: "\\(\\cos(180^\\circ-\\theta)=\\)",
      options: ["\\(\\sin\\theta\\)","\\(-\\sin\\theta\\)","\\(-\\cos\\theta\\)","\\(\\cos\\theta\\)"],
      ans: "\\(-\\cos\\theta\\)",
      reason: "\\(\\cos(180^\\circ-\\theta)=-\\cos\\theta\\)."
    },
    {
      q: "\\(\\tan(180^\\circ-\\theta)=\\)",
      options: ["\\(\\tan\\theta\\)","\\(-\\cot\\theta\\)","\\(\\cot\\theta\\)","\\(-\\tan\\theta\\)"],
      ans: "\\(-\\tan\\theta\\)",
      reason: "\\(\\tan(180^\\circ-\\theta)=-\\tan\\theta\\)."
    },
    {
      q: "The exact value of \\(\\sin150^\\circ\\) is:",
      options: ["\\(\\dfrac12\\)","\\(-\\dfrac12\\)","\\(-\\dfrac{\\sqrt3}{2}\\)","\\(\\dfrac{\\sqrt3}{2}\\)"],
      ans: "\\(\\dfrac12\\)",
      reason: "\\(\\sin150^\\circ=\\sin30^\\circ=\\tfrac12\\)."
    },
    {
      q: "The Law of Sines for a triangle \\(ABC\\) states:",
      options: ["\\(\\dfrac{a}{\\cos\\alpha}=\\dfrac{b}{\\cos\\beta}=\\dfrac{c}{\\cos\\gamma}\\)","\\(\\dfrac{a}{\\sin\\alpha}=\\dfrac{b}{\\sin\\beta}=\\dfrac{c}{\\sin\\gamma}\\)","\\(a\\sin\\alpha=b\\sin\\beta=c\\sin\\gamma\\)","\\(\\dfrac{\\sin\\alpha}{a}=\\dfrac{\\cos\\beta}{b}\\)"],
      ans: "\\(\\dfrac{a}{\\sin\\alpha}=\\dfrac{b}{\\sin\\beta}=\\dfrac{c}{\\sin\\gamma}\\)",
      reason: "Law of Sines: \\(\\dfrac{a}{\\sin\\alpha}=\\dfrac{b}{\\sin\\beta}=\\dfrac{c}{\\sin\\gamma}\\)."
    },
    {
      q: "The Law of Sines is most useful when we are given:",
      options: ["Two sides and the included angle only","Three sides only","Two angles and a side, or two sides and an angle opposite one of them","Three angles only"],
      ans: "Two angles and a side, or two sides and an angle opposite one of them",
      reason: "The Law of Sines suits AAS/ASA and SSA cases."
    },
    {
      q: "In \\(\\triangle ABC\\), if \\(a=25\\) cm, \\(\\alpha=66^\\circ51'\\), \\(\\gamma=44^\\circ12'\\), then \\(\\beta=\\)",
      options: ["\\(75^\\circ40'\\)","\\(65^\\circ15'\\)","\\(70^\\circ30'\\)","\\(68^\\circ57'\\)"],
      ans: "\\(68^\\circ57'\\)",
      reason: "\\(\\beta=180^\\circ-66^\\circ51'-44^\\circ12'=68^\\circ57'\\)."
    },
    {
      q: "The case where two sides and a non-included angle are given (SSA) is called the:",
      options: ["Unique case","Right-angle case","Ambiguous case","Impossible case"],
      ans: "Ambiguous case",
      reason: "Two sides and a non-included angle (SSA) is the ambiguous case."
    },
    {
      q: "In the ambiguous case, if \\(\\alpha\\) is acute and \\(\\sin\\beta>1\\), then:",
      options: ["Infinitely many triangles exist","Exactly two triangles exist","Exactly one triangle exists","No triangle exists"],
      ans: "No triangle exists",
      reason: "If \\(\\sin\\beta>1\\) no triangle exists."
    },
    {
      q: "In the ambiguous case, if \\(\\alpha\\) is acute, \\(a=h\\) (the height), there is:",
      options: ["Two triangles","No triangle","Infinitely many triangles","Exactly one right triangle"],
      ans: "Exactly one right triangle",
      reason: "If \\(a=h=b\\sin\\alpha\\), the triangle is a right triangle and unique."
    },
    {
      q: "If \\(a\\lt h\\) and \\(\\alpha\\) is acute (where \\(h=b\\sin\\alpha\\)), then the number of possible triangles is:",
      options: ["Two","None","One","Three"],
      ans: "None",
      reason: "If \\(a\\lt h\\), the side is too short to reach the base: no triangle."
    },
    {
      q: "If \\(h\\lt a\\lt b\\) and \\(\\alpha\\) is acute, the number of possible triangles is:",
      options: ["None","One","Three","Two"],
      ans: "Two",
      reason: "If \\(h\\lt a\\lt b\\) with \\(\\alpha\\) acute, two triangles are possible."
    },
    {
      q: "If \\(\\alpha\\) is obtuse and \\(a>b\\), the number of possible triangles is:",
      options: ["Two","None","One","Three"],
      ans: "One",
      reason: "If \\(\\alpha\\) is obtuse and \\(a>b\\), exactly one triangle exists."
    },
    {
      q: "The Law of Sines relates each side of a triangle to the:",
      options: ["Cosine of its opposite angle","Sine of its adjacent angle","Square of its opposite angle","Sine of its opposite angle"],
      ans: "Sine of its opposite angle",
      reason: "Each side is proportional to the sine of its opposite angle."
    },
    {
      q: "The Law of Cosines for side \\(a\\) states:",
      options: ["\\(a^2=b^2+c^2-2bc\\cos\\alpha\\)","\\(a=b^2+c^2-2bc\\cos\\alpha\\)","\\(a^2=b^2+c^2+2bc\\cos\\alpha\\)","\\(a^2=b^2-c^2-2bc\\cos\\alpha\\)"],
      ans: "\\(a^2=b^2+c^2-2bc\\cos\\alpha\\)",
      reason: "Law of Cosines: \\(a^2=b^2+c^2-2bc\\cos\\alpha\\)."
    },
    {
      q: "The Law of Cosines is applicable when:",
      options: ["Only one side is given","Two sides and the included angle, or three sides, are given","Only two angles are given","The triangle is always right-angled"],
      ans: "Two sides and the included angle, or three sides, are given",
      reason: "Use it for SAS (two sides and the included angle) or SSS."
    },
    {
      q: "If \\(\\alpha=90^\\circ\\) in the Law of Cosines \\(a^2=b^2+c^2-2bc\\cos\\alpha\\), it reduces to:",
      options: ["The Pythagoras theorem, \\(a^2=b^2+c^2\\)","\\(a^2=b^2-c^2\\)","\\(a=b+c\\)","\\(a^2=2bc\\)"],
      ans: "The Pythagoras theorem, \\(a^2=b^2+c^2\\)",
      reason: "With \\(\\alpha=90^\\circ\\), \\(\\cos\\alpha=0\\) and \\(a^2=b^2+c^2\\)."
    },
    {
      q: "From the Law of Cosines, \\(\\cos\\alpha=\\)",
      options: ["\\(\\dfrac{b^2+c^2+a^2}{2bc}\\)","\\(\\dfrac{a^2+b^2-c^2}{2ab}\\)","\\(\\dfrac{b^2+c^2-a^2}{2bc}\\)","\\(\\dfrac{a^2+c^2-b^2}{2ac}\\)"],
      ans: "\\(\\dfrac{b^2+c^2-a^2}{2bc}\\)",
      reason: "\\(\\cos\\alpha=\\dfrac{b^2+c^2-a^2}{2bc}\\)."
    },
    {
      q: "Using the Law of Cosines, solve for \\(c\\) when \\(a=12\\) cm, \\(b=7\\) cm, \\(\\gamma=59^\\circ30'\\): \\(c\\approx\\)",
      options: ["15.0 cm","12.4 cm","10.4 cm","8.6 cm"],
      ans: "10.4 cm",
      reason: "\\(c^2=144+49-2(12)(7)\\cos59^\\circ30'\\approx107.7\\Rightarrow c\\approx10.4\\) cm."
    },
    {
      q: "The Law of Cosines can be used to find an angle when:",
      options: ["No sides are known","All three sides of the triangle are known","Only two angles are known","Only one side is known"],
      ans: "All three sides of the triangle are known",
      reason: "If all three sides are known, \\(\\cos\\alpha=\\dfrac{b^2+c^2-a^2}{2bc}\\) gives each angle."
    },
    {
      q: "Pythagoras' theorem is a special case of the Law of Cosines when the included angle is:",
      options: ["\\(90^\\circ\\)","\\(180^\\circ\\)","\\(60^\\circ\\)","\\(0^\\circ\\)"],
      ans: "\\(90^\\circ\\)",
      reason: "With \\(\\alpha=90^\\circ\\) the Law of Cosines reduces to Pythagoras' theorem."
    },
    {
      q: "For a triangle with \\(a=7,\\,b=10,\\,c=12\\), the angle \\(\\gamma\\) is found using:",
      options: ["\\(\\gamma=a^2+b^2-c^2\\)","\\(\\cos\\gamma=\\dfrac{b^2+c^2-a^2}{2bc}\\)","\\(\\sin\\gamma=\\dfrac{a^2+b^2-c^2}{2ab}\\)","\\(\\cos\\gamma=\\dfrac{a^2+b^2-c^2}{2ab}\\)"],
      ans: "\\(\\cos\\gamma=\\dfrac{a^2+b^2-c^2}{2ab}\\)",
      reason: "\\(\\cos\\gamma=\\dfrac{a^2+b^2-c^2}{2ab}\\)."
    },
    {
      q: "Two forces of magnitude 20N and 30N are inclined at \\(105^\\circ\\). The Law of Cosines is used to find:",
      options: ["The difference of the magnitudes","Only the direction of the forces","The sum of the magnitudes","The magnitude of the resultant force"],
      ans: "The magnitude of the resultant force",
      reason: "To find the resultant of two forces at an angle, use the Law of Cosines for its magnitude."
    },
    {
      q: "The Law of Cosines generalizes which theorem to oblique (non-right) triangles?",
      options: ["Pythagoras' theorem","Heron's formula","The half-angle formula","The Law of Sines"],
      ans: "Pythagoras' theorem",
      reason: "The Law of Cosines generalizes Pythagoras' theorem to oblique triangles."
    },
    {
      q: "The area of triangle \\(ABC\\) when two sides \\(b,c\\) and the included angle \\(\\alpha\\) are known is:",
      options: ["\\(\\dfrac12 bc\\cos\\alpha\\)","\\(\\dfrac12 bc\\sin\\alpha\\)","\\(bc\\sin\\alpha\\)","\\(\\dfrac12(b+c)\\sin\\alpha\\)"],
      ans: "\\(\\dfrac12 bc\\sin\\alpha\\)",
      reason: "\\(\\Delta=\\tfrac12bc\\sin\\alpha\\)."
    },
    {
      q: "Find the area of \\(\\triangle DEF\\) if \\(DE=10,\\,EF=8,\\,\\angle E=30^\\circ\\).",
      options: ["20 sq. units","40 sq. units","10 sq. units","80 sq. units"],
      ans: "20 sq. units",
      reason: "\\(\\Delta=\\tfrac12(10)(8)\\sin30^\\circ=20\\)."
    },
    {
      q: "If side \\(a\\) and two angles \\(\\beta,\\gamma\\) of a triangle are known, the area is:",
      options: ["\\(\\dfrac{a^2\\sin\\beta\\sin\\gamma}{2\\sin\\alpha}\\)","\\(a^2\\sin\\beta\\sin\\gamma\\)","\\(\\dfrac12a^2\\sin\\beta\\sin\\gamma\\)","\\(\\dfrac12a\\sin\\beta\\sin\\gamma\\)"],
      ans: "\\(\\dfrac{a^2\\sin\\beta\\sin\\gamma}{2\\sin\\alpha}\\)",
      reason: "\\(b=\\dfrac{a\\sin\\beta}{\\sin\\alpha}\\), so \\(\\Delta=\\tfrac12ab\\sin\\gamma=\\dfrac{a^2\\sin\\beta\\sin\\gamma}{2\\sin\\alpha}\\)."
    },
    {
      q: "Heron's formula for the area of a triangle with sides \\(a,b,c\\) and \\(S=\\dfrac{a+b+c}{2}\\) is:",
      options: ["\\(\\Delta=S(S-a)(S-b)(S-c)\\)","\\(\\Delta=\\sqrt{S\\cdot a\\cdot b\\cdot c}\\)","\\(\\Delta=\\dfrac12\\sqrt{S(S-a)(S-b)(S-c)}\\)","\\(\\Delta=\\sqrt{S(S-a)(S-b)(S-c)}\\)"],
      ans: "\\(\\Delta=\\sqrt{S(S-a)(S-b)(S-c)}\\)",
      reason: "Heron's formula: \\(\\Delta=\\sqrt{S(S-a)(S-b)(S-c)}\\)."
    },
    {
      q: "Using Heron's formula, the area of a triangle with sides 16, 18, 20 is approximately:",
      options: ["136.8 sq. units","144 sq. units","160 sq. units","120 sq. units"],
      ans: "136.8 sq. units",
      reason: "\\(S=27\\): \\(\\Delta=\\sqrt{27\\cdot11\\cdot9\\cdot7}=\\sqrt{18711}\\approx136.8\\)."
    },
    {
      q: "The area of triangle \\(ABC\\) can be written as \\(\\Delta=\\)",
      options: ["\\(\\dfrac12 abc\\)","\\(\\dfrac12(a+b+c)\\)","\\(abc\\sin\\alpha\\)","\\(\\dfrac12 bc\\sin\\alpha=\\dfrac12 ac\\sin\\beta=\\dfrac12 ab\\sin\\gamma\\)"],
      ans: "\\(\\dfrac12 bc\\sin\\alpha=\\dfrac12 ac\\sin\\beta=\\dfrac12 ab\\sin\\gamma\\)",
      reason: "\\(\\Delta=\\tfrac12bc\\sin\\alpha=\\tfrac12ac\\sin\\beta=\\tfrac12ab\\sin\\gamma\\)."
    },
    {
      q: "The area of a parallelogram \\(ABCD\\) can be found using:",
      options: ["\\((AB)^2\\)","\\((AB)+(BC)\\)","\\((AB)(BC)\\sin(\\angle B)\\)","\\((AB)(BC)\\)"],
      ans: "\\((AB)(BC)\\sin(\\angle B)\\)",
      reason: "Parallelogram area \\(=(AB)(BC)\\sin B\\)."
    },
    {
      q: "The adjacent sides of a parallelogram measure 12 and 15, and one angle is \\(135^\\circ\\). The area of the parallelogram is approximately:",
      options: ["90 sq. units","180 sq. units","127.3 sq. units","63.6 sq. units"],
      ans: "127.3 sq. units",
      reason: "\\(12\\times15\\times\\sin135^\\circ\\approx127.3\\)."
    },
    {
      q: "Three streets enclosing a triangular park have distances 30 m, 34 m and 27 m. The area of the park (Heron's formula) is approximately:",
      options: ["300 m\\(^2\\)","387.4 m\\(^2\\)","400 m\\(^2\\)","450 m\\(^2\\)"],
      ans: "387.4 m\\(^2\\)",
      reason: "\\(S=45.5\\): \\(\\Delta=\\sqrt{45.5(15.5)(11.5)(18.5)}\\approx387.4\\) m\\(^2\\)."
    },
    {
      q: "The roof of a shed has isosceles triangular sections with equal sides 22.0 ft and vertex angle \\(75^\\circ\\). The area of one section is approximately:",
      options: ["484 sq. ft","200 sq. ft","233.8 sq. ft","121 sq. ft"],
      ans: "233.8 sq. ft",
      reason: "\\(\\tfrac12(22)^2\\sin75^\\circ\\approx233.8\\) sq. ft."
    },
    {
      q: "The circumcentre of a triangle is the point of intersection of the:",
      options: ["Right bisectors of the sides","Altitudes","Angle bisectors","Medians"],
      ans: "Right bisectors of the sides",
      reason: "The circumcentre is where the perpendicular bisectors of the sides meet."
    },
    {
      q: "The incentre of a triangle is the point of intersection of the:",
      options: ["Medians","Altitudes","Right bisectors of the sides","Angle bisectors"],
      ans: "Angle bisectors",
      reason: "The incentre is where the angle bisectors meet."
    },
    {
      q: "The circumradius \\(R\\) of a triangle is given by:",
      options: ["\\(R=2a\\sin\\alpha\\)","\\(R=\\dfrac{2a}{\\sin\\alpha}\\)","\\(R=\\dfrac{a}{\\sin\\alpha}\\)","\\(R=\\dfrac{a}{2\\sin\\alpha}\\)"],
      ans: "\\(R=\\dfrac{a}{2\\sin\\alpha}\\)",
      reason: "\\(R=\\dfrac{a}{2\\sin\\alpha}\\)."
    },
    {
      q: "The inradius \\(r\\) of a triangle is given by:",
      options: ["\\(r=\\dfrac{\\Delta}{S}\\)","\\(r=\\Delta\\times S\\)","\\(r=\\dfrac{S}{\\Delta}\\)","\\(r=\\dfrac{\\Delta}{2S}\\)"],
      ans: "\\(r=\\dfrac{\\Delta}{S}\\)",
      reason: "\\(r=\\dfrac\\Delta S\\)."
    },
    {
      q: "The exradius \\(r_1\\) (opposite vertex \\(A\\)) of a triangle is given by:",
      options: ["\\(r_1=\\dfrac{S-a}{\\Delta}\\)","\\(r_1=\\dfrac{\\Delta}{S-a}\\)","\\(r_1=\\dfrac{\\Delta}{S+a}\\)","\\(r_1=\\dfrac{\\Delta}{a}\\)"],
      ans: "\\(r_1=\\dfrac{\\Delta}{S-a}\\)",
      reason: "\\(r_1=\\dfrac{\\Delta}{S-a}\\)."
    },
    {
      q: "The e-centre of a triangle is the point of intersection of:",
      options: ["All three internal angle bisectors","One internal angle bisector and the external bisectors of the other two angles","The three medians","All three external angle bisectors"],
      ans: "One internal angle bisector and the external bisectors of the other two angles",
      reason: "The e-centre is where one internal bisector and two external bisectors meet."
    },
    {
      q: "For a right triangle, the circumradius equals:",
      options: ["Half the shortest side","The full hypotenuse","The area divided by the perimeter","Half the hypotenuse"],
      ans: "Half the hypotenuse",
      reason: "In a right triangle the hypotenuse is a diameter of the circumcircle, so \\(R=\\tfrac12\\) hypotenuse."
    },
    {
      q: "For an equilateral triangle of side \\(a\\), the inradius is:",
      options: ["\\(\\dfrac{a}{2\\sqrt3}\\)","\\(\\dfrac{a\\sqrt3}{2}\\)","\\(\\dfrac{a}{3}\\)","\\(a\\sqrt3\\)"],
      ans: "\\(\\dfrac{a}{2\\sqrt3}\\)",
      reason: "For an equilateral triangle, \\(r=\\dfrac{a}{2\\sqrt3}\\)."
    },
    {
      q: "The angle of elevation is the angle measured:",
      options: ["Upward from the horizontal to the line of sight","Between two lines of sight","Downward from the horizontal to the line of sight","From the vertical to the horizontal"],
      ans: "Upward from the horizontal to the line of sight",
      reason: "The angle of elevation is measured upward from the horizontal."
    },
    {
      q: "The angle of depression is the angle measured:",
      options: ["Downward from the horizontal to the line of sight","Between two horizontal lines","From one observer to another observer directly","Upward from the horizontal to the line of sight"],
      ans: "Downward from the horizontal to the line of sight",
      reason: "The angle of depression is measured downward from the horizontal."
    },
    {
      q: "The angle of elevation from an observer to an object equals the angle of depression from the object to the observer, because:",
      options: ["They are always equal by definition with no geometric reason","They are alternate angles formed by a common transversal between two parallel horizontal lines","Angles of elevation and depression are unrelated","The object and observer are always at the same height"],
      ans: "They are alternate angles formed by a common transversal between two parallel horizontal lines",
      reason: "Elevation and depression are alternate angles between parallel horizontals, hence equal."
    },
    {
      q: "A common method to measure the height of a tall building is to determine the:",
      options: ["Number of floors only","Angle of elevation from a known distance from the base","Angle between the walls of the building","Weight of the building"],
      ans: "Angle of elevation from a known distance from the base",
      reason: "Measure the angle of elevation from a known distance and use \\(\\tan\\)."
    },
    {
      q: "From a plane at altitude 1500 m, the angles of depression to two boats on either side are \\(25^\\circ\\) and \\(50^\\circ\\). The distance between the boats is found using:",
      options: ["Two right triangles, adding their base lengths found from the height and each angle","Subtracting the two angles","The Law of Cosines directly on the two angles","A single right triangle only"],
      ans: "Two right triangles, adding their base lengths found from the height and each angle",
      reason: "Use two right triangles and add the base lengths."
    },
    {
      q: "A camera 5.6 ft above the ground is aimed so that the line of sight to a wall-mounted target makes a \\(45^\\circ\\) angle of elevation. The horizontal distance to the wall equals:",
      options: ["Half the height of the camera","The height difference between camera and target (since \\(\\tan45^\\circ=1\\))","It cannot be determined","Twice the height of the camera"],
      ans: "The height difference between camera and target (since \\(\\tan45^\\circ=1\\))",
      reason: "At \\(45^\\circ\\), \\(\\tan45^\\circ=1\\), so horizontal distance equals the height difference."
    },
    {
      q: "To solve a right triangle given one side and one acute angle, we mainly use:",
      options: ["The Law of Cosines only","Heron's formula","The half-angle formulae","Basic trigonometric ratios (sine, cosine, tangent)"],
      ans: "Basic trigonometric ratios (sine, cosine, tangent)",
      reason: "Right triangles are solved with sine, cosine and tangent."
    },
    {
      q: "To solve a right triangle given two sides, we use:",
      options: ["The Pythagoras theorem to find the third side, then trigonometric ratios for the angles","Only Heron's formula","Only the half-angle formulae","Only the Law of Sines"],
      ans: "The Pythagoras theorem to find the third side, then trigonometric ratios for the angles",
      reason: "Find the third side by Pythagoras, then use ratios for the angles."
    },
    {
      q: "Three-dimensional trigonometry problems typically require:",
      options: ["Ignoring the third dimension","Identifying and solving a sequence of right triangles within the 3D figure","Only the Law of Sines","Only the Pythagoras theorem"],
      ans: "Identifying and solving a sequence of right triangles within the 3D figure",
      reason: "Break the 3D figure into right triangles and solve them one at a time."
    },
    {
      q: "In a square-based pyramid with apex directly above the centre of the base, the height of the pyramid is measured:",
      options: ["Perpendicular to the base, from the apex to the centre of the base","Along one of the slant edges","Along one side of the base","Along the diagonal of the base"],
      ans: "Perpendicular to the base, from the apex to the centre of the base",
      reason: "The height is the perpendicular from the apex to the centre of the base."
    },
    {
      q: "The angle between an edge of a pyramid and its base plane is found using the right triangle formed by:",
      options: ["Only the two base edges","The height and the slant edge of a different face","The perimeter of the base","The height, the horizontal distance from the base centre to the relevant base vertex, and the edge itself"],
      ans: "The height, the horizontal distance from the base centre to the relevant base vertex, and the edge itself",
      reason: "The right triangle is formed by the height, the horizontal distance from the centre to the vertex, and the edge."
    },
    {
      q: "For a triangular prism problem, to find a length in one triangular face, we often first need to find a length from:",
      options: ["A completely unrelated solid","The volume of the prism","The surface area only","An adjacent triangle within the same solid"],
      ans: "An adjacent triangle within the same solid",
      reason: "Solve an adjacent triangle in the same solid to get the length needed."
    },
    {
      q: "In a rectangular room of floor dimensions \\(l\\times w\\), the length of the floor diagonal is:",
      options: ["\\(lw\\)","\\(\\sqrt{l^2+w^2}\\)","\\(l+w\\)","\\(\\sqrt{l^2-w^2}\\)"],
      ans: "\\(\\sqrt{l^2+w^2}\\)",
      reason: "The floor diagonal is \\(\\sqrt{l^2+w^2}\\)."
    },
    {
      q: "The angle of elevation from a bottom corner of a room to the diagonally opposite top corner is measured in the plane containing:",
      options: ["The ceiling diagonal only","The floor diagonal and the vertical height","Only the floor","Only one wall"],
      ans: "The floor diagonal and the vertical height",
      reason: "The floor diagonal and the vertical height form the right triangle."
    },
    {
      q: "To find the angle between a side of a pyramid and its base, once the height and base half-diagonal are known, we use:",
      options: ["\\(\\text{angle}=\\text{height}+\\text{base half-diagonal}\\)","\\(\\tan(\\text{angle})=\\dfrac{\\text{height}}{\\text{base half-diagonal}}\\)","\\(\\cos(\\text{angle})=\\text{height}-\\text{base half-diagonal}\\)","\\(\\sin(\\text{angle})=\\text{height}\\times\\text{base half-diagonal}\\)"],
      ans: "\\(\\tan(\\text{angle})=\\dfrac{\\text{height}}{\\text{base half-diagonal}}\\)",
      reason: "\\(\\tan(\\text{angle})=\\dfrac{\\text{height}}{\\text{half-diagonal}}\\)."
    },
    {
      q: "Trigonometry is applied in real life in fields such as:",
      options: ["Only art and music composition","Only pure mathematics","Video games, flight engineering, navigation and sound waves","Only ancient history"],
      ans: "Video games, flight engineering, navigation and sound waves",
      reason: "Trigonometry is used in games, flight engineering, navigation and sound waves."
    },
    {
      q: "A common way to measure the height of a very tall building (like the Burj Khalifa) without climbing it is to use:",
      options: ["A very long tape measure dropped from the top","Weighing the building","Estimating from the number of windows","The angle of elevation from a known distance"],
      ans: "The angle of elevation from a known distance",
      reason: "Measure the angle of elevation from a known distance."
    },
    {
      q: "When solving real-world problems with the Law of Sines or Cosines, the first step is usually to:",
      options: ["Guess the answer","Assume the triangle is right-angled","Sketch and label the triangle with the given information","Ignore the units"],
      ans: "Sketch and label the triangle with the given information",
      reason: "First sketch and label the triangle with the given data."
    },
    {
      q: "Sound wave amplitude problems using \\(A(t)=|k\\cos(t)|\\) require evaluating the:",
      options: ["Tangent of the frequency","Sine of the amplitude","Cosine of a given time value and taking its absolute value, scaled by \\(k\\)","Square root of the time"],
      ans: "Cosine of a given time value and taking its absolute value, scaled by \\(k\\)",
      reason: "Evaluate \\(\\cos t\\), take the absolute value and multiply by \\(k\\)."
    },
    {
      q: "In navigation problems, if a pilot starts off-course by a given angle and flies a known distance, the distance to the destination is typically found using:",
      options: ["The Pythagoras theorem only","The half-angle formulae only","Heron's formula only","The Law of Cosines"],
      ans: "The Law of Cosines",
      reason: "Two sides and an included angle: use the Law of Cosines."
    },
    {
      q: "For a medication decay problem \\(f(n)=A_0\\times r^n\\), finding when a specific amount remains requires:",
      options: ["Solving an exponential equation for \\(n\\)","Using the Law of Cosines","Using Heron's formula","Using the Law of Sines"],
      ans: "Solving an exponential equation for \\(n\\)",
      reason: "Solve \\(A_0r^n=\\text{target}\\) for \\(n\\) using logarithms."
    },
    {
      q: "<div class=\"stimulus\"><p>A ladder 8 m long leans against a wall. The foot of the ladder makes a \\(65^\\circ\\) angle with the ground.</p></div>The height the ladder reaches on the wall is approximately:",
      options: ["6.5 m","7.25 m","3.38 m","8 m"],
      ans: "7.25 m",
      reason: "\\(h=8\\sin65^\\circ\\approx7.25\\) m."
    },
    {
      q: "<div class=\"stimulus\"><p>A ladder 8 m long leans against a wall. The foot of the ladder makes a \\(65^\\circ\\) angle with the ground.</p></div>The horizontal distance from the foot of the ladder to the wall is approximately:",
      options: ["5 m","4 m","7.25 m","3.38 m"],
      ans: "3.38 m",
      reason: "\\(d=8\\cos65^\\circ\\approx3.38\\) m."
    },
    {
      q: "<div class=\"stimulus\"><p>A ladder 8 m long leans against a wall. The foot of the ladder makes a \\(65^\\circ\\) angle with the ground.</p></div>If the ladder's angle with the ground were increased to \\(75^\\circ\\) (same length), the new height reached would be approximately:",
      options: ["8 m","7.73 m","7.25 m","6.9 m"],
      ans: "7.73 m",
      reason: "\\(h=8\\sin75^\\circ\\approx7.73\\) m."
    },
    {
      q: "<div class=\"stimulus\"><p>A ladder 8 m long leans against a wall. The foot of the ladder makes a \\(65^\\circ\\) angle with the ground.</p></div>The area of the right triangle formed by the ladder, wall, and ground (at \\(65^\\circ\\)) is approximately:",
      options: ["24.5 sq. m","14.5 sq. m","12.26 sq. m","6.13 sq. m"],
      ans: "12.26 sq. m",
      reason: "\\(\\tfrac12(7.25)(3.38)\\approx12.26\\) m\\(^2\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Side</th><th>Length</th></tr><tr><td>\\(a\\)</td><td>40 m</td></tr><tr><td>\\(b\\)</td><td>50 m</td></tr><tr><td>\\(c\\)</td><td>60 m</td></tr></table><p>A triangular garden has the side lengths shown.</p></div>The semi-perimeter \\(S\\) of the garden is:",
      options: ["150 m","75 m","50 m","65 m"],
      ans: "75 m",
      reason: "\\(S=\\dfrac{40+50+60}{2}=75\\) m."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Side</th><th>Length</th></tr><tr><td>\\(a\\)</td><td>40 m</td></tr><tr><td>\\(b\\)</td><td>50 m</td></tr><tr><td>\\(c\\)</td><td>60 m</td></tr></table><p>A triangular garden has the side lengths shown.</p></div>Using Heron's formula, the area of the garden is approximately:",
      options: ["992.2 sq. m","900 sq. m","1000 sq. m","850 sq. m"],
      ans: "992.2 sq. m",
      reason: "\\(\\Delta=\\sqrt{75\\cdot35\\cdot25\\cdot15}\\approx992.2\\) m\\(^2\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Side</th><th>Length</th></tr><tr><td>\\(a\\)</td><td>40 m</td></tr><tr><td>\\(b\\)</td><td>50 m</td></tr><tr><td>\\(c\\)</td><td>60 m</td></tr></table><p>A triangular garden has the side lengths shown.</p></div>At Rs 50 per square meter, the cost of fertilizing the garden is approximately:",
      options: ["Rs 50,000","Rs 45,000","Rs 40,000","Rs 49,608"],
      ans: "Rs 49,608",
      reason: "\\(992.2\\times50\\approx49{,}608\\) rupees."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Side</th><th>Length</th></tr><tr><td>\\(a\\)</td><td>40 m</td></tr><tr><td>\\(b\\)</td><td>50 m</td></tr><tr><td>\\(c\\)</td><td>60 m</td></tr></table><p>A triangular garden has the side lengths shown.</p></div>The inradius of the garden (\\(r=\\Delta/S\\)) is approximately:",
      options: ["13.2 m","15 m","10.5 m","20 m"],
      ans: "13.2 m",
      reason: "\\(r=\\dfrac{992.2}{75}\\approx13.2\\) m."
    },
    {
      q: "<div class=\"stimulus\"><p>From point \\(A\\), 100 m from the base of a tower, the angle of elevation to the top of the tower is \\(30^\\circ\\).</p></div>The height of the tower is approximately:",
      options: ["50 m","100 m","57.7 m","86.6 m"],
      ans: "57.7 m",
      reason: "\\(h=100\\tan30^\\circ\\approx57.7\\) m."
    },
    {
      q: "<div class=\"stimulus\"><p>From point \\(A\\), 100 m from the base of a tower, the angle of elevation to the top of the tower is \\(30^\\circ\\).</p></div>From a point \\(B\\), 50 m from the base (i.e. 50 m closer than \\(A\\)), the angle of elevation to the top of the tower is approximately:",
      options: ["\\(49.1^\\circ\\)","\\(40^\\circ\\)","\\(60^\\circ\\)","\\(30^\\circ\\)"],
      ans: "\\(49.1^\\circ\\)",
      reason: "\\(\\tan\\theta=\\dfrac{57.7}{50}\\Rightarrow\\theta\\approx49.1^\\circ\\)."
    },
    {
      q: "<div class=\"stimulus\"><p>From point \\(A\\), 100 m from the base of a tower, the angle of elevation to the top of the tower is \\(30^\\circ\\).</p></div>This problem is solved primarily using the:",
      options: ["Law of Cosines","Heron's formula","Tangent ratio in a right triangle","Law of Sines"],
      ans: "Tangent ratio in a right triangle",
      reason: "The tower is a right triangle problem, solved with the tangent ratio."
    },
    {
      q: "<div class=\"stimulus\"><p>From point \\(A\\), 100 m from the base of a tower, the angle of elevation to the top of the tower is \\(30^\\circ\\).</p></div>If the observer's eye level is 1.5 m above the ground, the actual height of the tower (from point \\(A\\)) is approximately:",
      options: ["57.7 m","60.7 m","56.2 m","59.2 m"],
      ans: "59.2 m",
      reason: "Add the eye level: \\(57.7+1.5\\approx59.2\\) m."
    }
    ];
  }
});
