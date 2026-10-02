// Class 10 Math — Chapter 11: Practical Geometry of Circles
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch11",
  label: "Chapter 11: Practical Geometry of Circles",
  order: 11,
  questions: function () {
    return [
    {
      q: "The angle between a tangent and the radial segment of a circle at the point of contact is:",
      options: ["60°","45°","90°","30°"],
      ans: "90°",
      reason: "A tangent is perpendicular to the radial segment at the point of contact: \\(90^\\circ\\)."
    },
    {
      q: "Direct common tangents of two equal circles are:",
      options: ["Converging","Not parallel","Intersecting","Parallel"],
      ans: "Parallel",
      reason: "Direct common tangents of two equal circles are parallel (and parallel to the line of centres)."
    },
    {
      q: "How many common tangents can be drawn to two circles that intersect at two points?",
      options: ["1","2","3","Infinite"],
      ans: "2",
      reason: "Two circles that intersect at two points have exactly 2 common tangents (both direct)."
    },
    {
      q: "Two circles having radii 3 cm and 3.2 cm touch externally. The distance between the centres of the circles is:",
      options: ["6.2 cm","0.2 cm","6 cm","5.3 cm"],
      ans: "6.2 cm",
      reason: "Externally touching circles: \\(d=3+3.2=6.2\\) cm."
    },
    {
      q: "The centres and the point of contact of two touching circles are:",
      options: ["Converging","Coincident","Non-collinear","Collinear"],
      ans: "Collinear",
      reason: "The centres and the point of contact of two touching circles lie on one straight line: they are collinear."
    },
    {
      q: "In which type of triangle do the incentre and circumcentre coincide?",
      options: ["Right triangle","Scalene","Isosceles","Equilateral"],
      ans: "Equilateral",
      reason: "In an equilateral triangle the incentre and circumcentre coincide."
    },
    {
      q: "Two circles with radii 4 cm and 4.8 cm touch internally. The distance between the centres of the circles is:",
      options: ["4 cm","8.8 cm","0.8 cm","8 cm"],
      ans: "0.8 cm",
      reason: "Internal contact: \\(d=4.8-4=0.8\\) cm."
    },
    {
      q: "Two tangents are drawn at the ends of a diameter of a circle of radius 3.5 cm. The distance between the tangents is:",
      options: ["10.5 cm","7 cm","3.5 cm","5 cm"],
      ans: "7 cm",
      reason: "The tangents at the ends of a diameter are a diameter apart: \\(2\\times3.5=7\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 6 cm. The radius of the circle is:",
      options: ["24","12","6","3"],
      ans: "3",
      reason: "A circle inscribed in a square has diameter equal to the side: \\(r=\\tfrac62=3\\) cm."
    },
    {
      q: "A square is inscribed in a circle of radius 5 cm. The length of the diagonal of the square is:",
      options: ["5 cm","20 cm","10 cm","2.5 cm"],
      ans: "10 cm",
      reason: "The diagonal of an inscribed square is a diameter: \\(2\\times5=10\\) cm."
    },
    {
      q: "Perpendicular bisectors of ...... always pass through the centre of a circle.",
      options: ["Chords","Radial segments","Secants","Tangents"],
      ans: "Chords",
      reason: "The perpendicular bisector of any chord passes through the centre."
    },
    {
      q: "How many circles can be drawn through three non-collinear points?",
      options: ["Infinite","1","2","3"],
      ans: "1",
      reason: "Exactly one circle passes through three non-collinear points."
    },
    {
      q: "A circle has ...... pairs of parallel tangents (one pair at the ends of each diameter).",
      options: ["2","1","Infinite","3"],
      ans: "Infinite",
      reason: "Every diameter has one pair of parallel tangents at its ends, and a circle has infinitely many diameters, so infinitely many pairs."
    },
    {
      q: "Transverse common tangents of two circles intersect each other at:",
      options: ["4 points","3 points","1 point","2 points"],
      ans: "1 point",
      reason: "The two transverse common tangents meet each other at one point (on the line of centres, between the centres)."
    },
    {
      q: "To locate the centre of a given circle, we draw the right bisectors of:",
      options: ["Any one chord","A diameter only","A tangent","Two non-parallel chords"],
      ans: "Two non-parallel chords",
      reason: "The right bisectors of two non-parallel chords meet at the centre."
    },
    {
      q: "A circle passing through three given non-collinear points is constructed using the:",
      options: ["Angle bisectors of the triangle formed","Right bisectors of the sides of the triangle formed","Medians of the triangle formed","Altitudes of the triangle formed"],
      ans: "Right bisectors of the sides of the triangle formed",
      reason: "The centre lies on the right bisectors of the sides of the triangle formed by the three points."
    },
    {
      q: "To draw a tangent to a circle at a point P on the circumference, the tangent must be drawn:",
      options: ["Through the centre","Parallel to the radius at P","Perpendicular to the radius at P","At 45° to the radius at P"],
      ans: "Perpendicular to the radius at P",
      reason: "A tangent at \\(P\\) is perpendicular to the radius \\(OP\\)."
    },
    {
      q: "To draw a tangent to a circle from an external point P, we first find the midpoint of:",
      options: ["Any chord","The segment joining P and the centre O","The diameter","The radius"],
      ans: "The segment joining P and the centre O",
      reason: "Find the midpoint of \\(OP\\) and draw a semicircle on \\(OP\\) as diameter."
    },
    {
      q: "When constructing a tangent from an external point P to a circle with centre O, a semicircle is drawn on OP as diameter; this semicircle intersects the circle at the:",
      options: ["Centre","Point(s) of tangency","Midpoint of a chord","Farthest point"],
      ans: "Point(s) of tangency",
      reason: "The semicircle on \\(OP\\) meets the circle at the points of tangency (the angle in a semicircle is \\(90^\\circ\\), so \\(OT\\perp TP\\))."
    },
    {
      q: "Two tangents drawn to a circle from an external point, meeting at a given angle θ, make an angle of ...... with the line joining the point to the centre (each).",
      options: ["90° − θ","θ","θ/2","2θ"],
      ans: "θ/2",
      reason: "The line from the external point to the centre bisects the angle between the two tangents, so each makes \\(\\theta/2\\)."
    },
    {
      q: "A direct common tangent to two circles is also called a(n):",
      options: ["External tangent","Radial tangent","Internal tangent","Secant"],
      ans: "External tangent",
      reason: "A direct common tangent is also called an external tangent."
    },
    {
      q: "A transverse common tangent to two circles is also called a(n):",
      options: ["Chord","Diameter","External tangent","Internal tangent"],
      ans: "Internal tangent",
      reason: "A transverse common tangent is also called an internal tangent."
    },
    {
      q: "Direct common tangents to two unequal circles, when extended, meet on the line joining the centres at a point:",
      options: ["Outside both circles","At the larger circle’s centre","At the midpoint of the centres","Inside the smaller circle only"],
      ans: "Outside both circles",
      reason: "Direct common tangents of unequal circles meet on the line of centres outside both circles."
    },
    {
      q: "Transverse common tangents to two circles meet the line joining the centres at a point that lies:",
      options: ["Between the two centres","At the smaller circle’s centre","At the larger circle’s centre","Outside the segment joining the centres"],
      ans: "Between the two centres",
      reason: "Transverse common tangents meet the line of centres at a point between the two centres."
    },
    {
      q: "To draw a tangent to a given arc without using its centre, through a point P that is the midpoint of the arc, the required construction primarily uses the:",
      options: ["Perpendicular bisector of a chord through P","Any secant through P","Angle bisector of the arc’s central angle","A random line through P"],
      ans: "Perpendicular bisector of a chord through P",
      reason: "Use the perpendicular bisector of a chord to fix the tangent direction (the perpendicular bisector of the chord \\(PQ\\) through the midpoint gives the direction perpendicular to the tangent)."
    },
    {
      q: "For two circles to have exactly three common tangents, the circles must:",
      options: ["Intersect at two points","Not intersect at all","Touch each other (externally)","Be concentric"],
      ans: "Touch each other (externally)",
      reason: "Exactly three common tangents occur when the circles touch externally."
    },
    {
      q: "For two circles to have exactly four common tangents, the circles must be:",
      options: ["Separate, neither touching nor intersecting","Touching internally","Intersecting at two points","Touching externally"],
      ans: "Separate, neither touching nor intersecting",
      reason: "Four common tangents occur when the circles are separate (neither touching nor intersecting)."
    },
    {
      q: "For two circles to have no common tangent, one circle must lie:",
      options: ["Tangent externally","Overlapping at two points","Completely inside the other without touching","Completely outside the other, both touching"],
      ans: "Completely inside the other without touching",
      reason: "No common tangent occurs when one circle lies completely inside the other without touching."
    },
    {
      q: "The number of tangents that can be drawn to a circle through a point inside the circle is:",
      options: ["0","2","1","Infinite"],
      ans: "0",
      reason: "No tangent can be drawn through a point inside the circle."
    },
    {
      q: "When two equal circles touch externally, the direct common tangents are:",
      options: ["Non-existent","Parallel to the line joining centres","Intersecting at the point of contact","Perpendicular to the line joining centres"],
      ans: "Parallel to the line joining centres",
      reason: "The direct common tangents of two equal touching circles are parallel to the line joining the centres."
    },
    {
      q: "A point P lies at a distance of 5 cm from the centre of a circle of radius 3 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P5 cm",
      options: ["1 cm","7 cm","3 cm","4 cm"],
      ans: "4 cm",
      reason: "\\(\\sqrt{5^2-3^2}=4\\) cm."
    },
    {
      q: "A point P lies at a distance of 13 cm from the centre of a circle of radius 5 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P13 cm",
      options: ["12 cm","9 cm","15 cm","5 cm"],
      ans: "12 cm",
      reason: "\\(\\sqrt{13^2-5^2}=12\\) cm."
    },
    {
      q: "A point P lies at a distance of 10 cm from the centre of a circle of radius 6 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P10 cm",
      options: ["5 cm","6 cm","8 cm","11 cm"],
      ans: "8 cm",
      reason: "\\(\\sqrt{10^2-6^2}=8\\) cm."
    },
    {
      q: "A point P lies at a distance of 17 cm from the centre of a circle of radius 8 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P17 cm",
      options: ["8 cm","12 cm","18 cm","15 cm"],
      ans: "15 cm",
      reason: "\\(\\sqrt{17^2-8^2}=15\\) cm."
    },
    {
      q: "A point P lies at a distance of 25 cm from the centre of a circle of radius 7 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P25 cm",
      options: ["27 cm","7 cm","24 cm","21 cm"],
      ans: "24 cm",
      reason: "\\(\\sqrt{25^2-7^2}=24\\) cm."
    },
    {
      q: "A point P lies at a distance of 20 cm from the centre of a circle of radius 12 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P20 cm",
      options: ["16 cm","12 cm","19 cm","13 cm"],
      ans: "16 cm",
      reason: "\\(\\sqrt{20^2-12^2}=16\\) cm."
    },
    {
      q: "A point P lies at a distance of 26 cm from the centre of a circle of radius 10 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P26 cm",
      options: ["10 cm","27 cm","24 cm","21 cm"],
      ans: "24 cm",
      reason: "\\(\\sqrt{26^2-10^2}=24\\) cm."
    },
    {
      q: "A point P lies at a distance of 29 cm from the centre of a circle of radius 20 cm. Using the construction of the tangent from P, the length of the tangent segment is: O P29 cm",
      options: ["20 cm","21 cm","18 cm","24 cm"],
      ans: "21 cm",
      reason: "\\(\\sqrt{29^2-20^2}=21\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 4 cm. The radius of the inscribed circle is:",
      options: ["8 cm","4 cm","1 cm","2 cm"],
      ans: "2 cm",
      reason: "\\(r=\\tfrac42=2\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 6 cm. The radius of the inscribed circle is:",
      options: ["6 cm","3 cm","1.5 cm","12 cm"],
      ans: "3 cm",
      reason: "\\(r=\\tfrac62=3\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 8 cm. The radius of the inscribed circle is:",
      options: ["4 cm","16 cm","2 cm","8 cm"],
      ans: "4 cm",
      reason: "\\(r=\\tfrac82=4\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 10 cm. The radius of the inscribed circle is:",
      options: ["10 cm","20 cm","5 cm","2.5 cm"],
      ans: "5 cm",
      reason: "\\(r=\\tfrac{10}{2}=5\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 12 cm. The radius of the inscribed circle is:",
      options: ["12 cm","24 cm","3 cm","6 cm"],
      ans: "6 cm",
      reason: "\\(r=\\tfrac{12}{2}=6\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 14 cm. The radius of the inscribed circle is:",
      options: ["3.5 cm","7 cm","14 cm","28 cm"],
      ans: "7 cm",
      reason: "\\(r=\\tfrac{14}{2}=7\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 16 cm. The radius of the inscribed circle is:",
      options: ["32 cm","8 cm","4 cm","16 cm"],
      ans: "8 cm",
      reason: "\\(r=\\tfrac{16}{2}=8\\) cm."
    },
    {
      q: "A circle is inscribed in a square of side 18 cm. The radius of the inscribed circle is:",
      options: ["36 cm","9 cm","18 cm","4.5 cm"],
      ans: "9 cm",
      reason: "\\(r=\\tfrac{18}{2}=9\\) cm."
    },
    {
      q: "A square is inscribed in a circle of radius 8 cm. The length of the diagonal of the square is:",
      options: ["8 cm","32 cm","4 cm","16 cm"],
      ans: "16 cm",
      reason: "The diagonal of an inscribed square is a diameter: \\(2\\times8=16\\) cm."
    },
    {
      q: "A square is inscribed in a circle of radius 7 cm. The length of the diagonal of the square is:",
      options: ["28 cm","14 cm","7 cm","3.5 cm"],
      ans: "14 cm",
      reason: "\\(2\\times7=14\\) cm."
    },
    {
      q: "A square is inscribed in a circle of radius 9 cm. The length of the diagonal of the square is:",
      options: ["36 cm","9 cm","4.5 cm","18 cm"],
      ans: "18 cm",
      reason: "\\(2\\times9=18\\) cm."
    },
    {
      q: "A square is inscribed in a circle of radius 11 cm. The length of the diagonal of the square is:",
      options: ["11 cm","44 cm","22 cm","5.5 cm"],
      ans: "22 cm",
      reason: "\\(2\\times11=22\\) cm."
    },
    {
      q: "A square is inscribed in a circle of radius 13 cm. The length of the diagonal of the square is:",
      options: ["6.5 cm","52 cm","13 cm","26 cm"],
      ans: "26 cm",
      reason: "\\(2\\times13=26\\) cm."
    },
    {
      q: "A square is inscribed in a circle of radius 6 cm. The length of the diagonal of the square is:",
      options: ["12 cm","3 cm","24 cm","6 cm"],
      ans: "12 cm",
      reason: "\\(2\\times6=12\\) cm."
    },
    {
      q: "Two circles of radii 2 cm and 5 cm are drawn so that they touch externally. The distance between their centres is:",
      options: ["5 cm","7 cm","2 cm","3 cm"],
      ans: "7 cm",
      reason: "External contact: \\(2+5=7\\) cm."
    },
    {
      q: "Two circles of radii 3 cm and 7 cm are drawn so that they touch externally. The distance between their centres is:",
      options: ["3 cm","4 cm","7 cm","10 cm"],
      ans: "10 cm",
      reason: "\\(3+7=10\\) cm."
    },
    {
      q: "Two circles of radii 4 cm and 9 cm are drawn so that they touch externally. The distance between their centres is:",
      options: ["4 cm","9 cm","13 cm","5 cm"],
      ans: "13 cm",
      reason: "\\(4+9=13\\) cm."
    },
    {
      q: "Two circles of radii 1 cm and 6 cm are drawn so that they touch externally. The distance between their centres is:",
      options: ["1 cm","6 cm","5 cm","7 cm"],
      ans: "7 cm",
      reason: "\\(1+6=7\\) cm."
    },
    {
      q: "Two circles of radii 5 cm and 8 cm are drawn so that they touch externally. The distance between their centres is:",
      options: ["8 cm","13 cm","3 cm","5 cm"],
      ans: "13 cm",
      reason: "\\(5+8=13\\) cm."
    },
    {
      q: "Two circles of radii 2.5 cm and 6.5 cm are drawn so that they touch externally. The distance between their centres is:",
      options: ["9 cm","4 cm","2.5 cm","6.5 cm"],
      ans: "9 cm",
      reason: "\\(2.5+6.5=9\\) cm."
    },
    {
      q: "Two circles of radii 3 cm and 1 cm have centres 10 cm apart. Using \\(L=\\sqrt{d^2-(r_1-r_2)^2}\\), the length of the direct common tangent is approximately:",
      options: ["4 cm","10 cm","2 cm","9.8 cm"],
      ans: "9.8 cm",
      reason: "\\(L=\\sqrt{10^2-(3-1)^2}=\\sqrt{96}\\approx9.8\\) cm."
    },
    {
      q: "Two circles of radii 4 cm and 1 cm have centres 13 cm apart. Using \\(L=\\sqrt{d^2-(r_1-r_2)^2}\\), the length of the direct common tangent is approximately:",
      options: ["13 cm","12.65 cm","5 cm","3 cm"],
      ans: "12.65 cm",
      reason: "\\(L=\\sqrt{13^2-3^2}=\\sqrt{160}\\approx12.65\\) cm."
    },
    {
      q: "Two circles of radii 6 cm and 2 cm have centres 15 cm apart. Using \\(L=\\sqrt{d^2-(r_1-r_2)^2}\\), the length of the direct common tangent is approximately:",
      options: ["15 cm","8 cm","4 cm","14.46 cm"],
      ans: "14.46 cm",
      reason: "\\(L=\\sqrt{15^2-4^2}=\\sqrt{209}\\approx14.46\\) cm."
    },
    {
      q: "Two circles of radii 5 cm and 2 cm have centres 17 cm apart. Using \\(L=\\sqrt{d^2-(r_1-r_2)^2}\\), the length of the direct common tangent is approximately:",
      options: ["7 cm","17 cm","3 cm","16.73 cm"],
      ans: "16.73 cm",
      reason: "\\(L=\\sqrt{17^2-3^2}=\\sqrt{280}\\approx16.73\\) cm."
    },
    {
      q: "Two circles of radii 7 cm and 3 cm have centres 20 cm apart. Using \\(L=\\sqrt{d^2-(r_1-r_2)^2}\\), the length of the direct common tangent is approximately:",
      options: ["4 cm","10 cm","19.6 cm","20 cm"],
      ans: "19.6 cm",
      reason: "\\(L=\\sqrt{20^2-4^2}=\\sqrt{384}\\approx19.6\\) cm."
    },
    {
      q: "Two circles of radii 2 cm and 3 cm have centres 13 cm apart. Using \\(L=\\sqrt{d^2-(r_1+r_2)^2}\\), the length of the transverse common tangent is approximately:",
      options: ["5 cm","12.0 cm","13 cm","1 cm"],
      ans: "12.0 cm",
      reason: "\\(L=\\sqrt{13^2-5^2}=12\\) cm."
    },
    {
      q: "Two circles of radii 3 cm and 4 cm have centres 17 cm apart. Using \\(L=\\sqrt{d^2-(r_1+r_2)^2}\\), the length of the transverse common tangent is approximately:",
      options: ["15.49 cm","7 cm","1 cm","17 cm"],
      ans: "15.49 cm",
      reason: "\\(L=\\sqrt{17^2-7^2}=\\sqrt{240}\\approx15.49\\) cm."
    },
    {
      q: "Two circles of radii 4 cm and 3 cm have centres 25 cm apart. Using \\(L=\\sqrt{d^2-(r_1+r_2)^2}\\), the length of the transverse common tangent is approximately:",
      options: ["7 cm","1 cm","24.0 cm","25 cm"],
      ans: "24.0 cm",
      reason: "\\(L=\\sqrt{25^2-7^2}=24\\) cm."
    },
    {
      q: "Two circles of radii 3 cm and 5 cm have centres 20 cm apart. Using \\(L=\\sqrt{d^2-(r_1+r_2)^2}\\), the length of the transverse common tangent is approximately:",
      options: ["2 cm","8 cm","18.33 cm","20 cm"],
      ans: "18.33 cm",
      reason: "\\(L=\\sqrt{20^2-8^2}=\\sqrt{336}\\approx18.33\\) cm."
    },
    {
      q: "Two circles of radii 5 cm and 4 cm have centres 26 cm apart. Using \\(L=\\sqrt{d^2-(r_1+r_2)^2}\\), the length of the transverse common tangent is approximately:",
      options: ["1 cm","24.39 cm","26 cm","9 cm"],
      ans: "24.39 cm",
      reason: "\\(L=\\sqrt{26^2-9^2}=\\sqrt{595}\\approx24.39\\) cm."
    },
    {
      q: "An equilateral triangle of side 6 cm is inscribed in a circle. The radius of the circumscribed circle is approximately (use \\(R=\\dfrac{a}{\\sqrt{3}}\\)):",
      options: ["3.0 cm","1.73 cm","6 cm","3.46 cm"],
      ans: "3.46 cm",
      reason: "\\(R=\\dfrac{6}{\\sqrt3}\\approx3.46\\) cm."
    },
    {
      q: "An equilateral triangle of side 9 cm is inscribed in a circle. The radius of the circumscribed circle is approximately (use \\(R=\\dfrac{a}{\\sqrt{3}}\\)):",
      options: ["5.2 cm","9 cm","4.5 cm","2.6 cm"],
      ans: "5.2 cm",
      reason: "\\(R=\\dfrac9{\\sqrt3}\\approx5.20\\) cm."
    },
    {
      q: "An equilateral triangle of side 12 cm is inscribed in a circle. The radius of the circumscribed circle is approximately (use \\(R=\\dfrac{a}{\\sqrt{3}}\\)):",
      options: ["12 cm","6.0 cm","6.93 cm","3.46 cm"],
      ans: "6.93 cm",
      reason: "\\(R=\\dfrac{12}{\\sqrt3}\\approx6.93\\) cm."
    },
    {
      q: "An equilateral triangle of side 18 cm is inscribed in a circle. The radius of the circumscribed circle is approximately (use \\(R=\\dfrac{a}{\\sqrt{3}}\\)):",
      options: ["18 cm","5.2 cm","10.39 cm","9.0 cm"],
      ans: "10.39 cm",
      reason: "\\(R=\\dfrac{18}{\\sqrt3}\\approx10.39\\) cm."
    },
    {
      q: "An equilateral triangle of side 10 cm is inscribed in a circle. The radius of the circumscribed circle is approximately (use \\(R=\\dfrac{a}{\\sqrt{3}}\\)):",
      options: ["5.77 cm","2.89 cm","10 cm","5.0 cm"],
      ans: "5.77 cm",
      reason: "\\(R=\\dfrac{10}{\\sqrt3}\\approx5.77\\) cm."
    },
    {
      q: "An equilateral triangle of side 14 cm is inscribed in a circle. The radius of the circumscribed circle is approximately (use \\(R=\\dfrac{a}{\\sqrt{3}}\\)):",
      options: ["8.08 cm","4.04 cm","7.0 cm","14 cm"],
      ans: "8.08 cm",
      reason: "\\(R=\\dfrac{14}{\\sqrt3}\\approx8.08\\) cm."
    },
    {
      q: "To draw a circle passing through three non-collinear points A, B, C, the first step is to join the points to form a:",
      options: ["Circle directly","Square","Straight line","Triangle ABC"],
      ans: "Triangle ABC",
      reason: "Join the three points to form triangle \\(ABC\\)."
    },
    {
      q: "After drawing the right bisectors of two sides of the triangle formed by three given points, the point where they meet is the:",
      options: ["Centroid","Incentre","Centre of the required circle","Orthocentre"],
      ans: "Centre of the required circle",
      reason: "The right bisectors of two sides meet at the circumcentre, the centre of the required circle."
    },
    {
      q: "When completing a circle whose centre is not given but a part of its circumference (arc) is given, we begin by marking three points on the arc and:",
      options: ["Measuring the arc length only","Drawing a diameter directly","Drawing chords and their right bisectors","Drawing tangents at each point"],
      ans: "Drawing chords and their right bisectors",
      reason: "Mark three points on the arc, draw two chords and their right bisectors; they meet at the centre."
    },
    {
      q: "To draw a tangent to a given circle from a point P outside it, the semicircle drawn on OP (O = centre) has diameter equal to:",
      options: ["OP","Twice the radius","The radius of the circle","Half of OP"],
      ans: "OP",
      reason: "The semicircle is drawn on \\(OP\\) as its diameter."
    },
    {
      q: "The two points where the auxiliary semicircle (drawn on OP ) cuts the given circle are the:",
      options: ["Points of tangency for the two possible tangents from P","Centres of new circles","Points equidistant from P only","Midpoints of chords"],
      ans: "Points of tangency for the two possible tangents from P",
      reason: "The semicircle cuts the given circle at the two points of tangency."
    },
    {
      q: "To draw two tangents to a circle meeting at a given angle θ outside the circle, the angle between the two radii drawn to the points of tangency is:",
      options: ["90° − θ","2θ","θ","180° − θ"],
      ans: "180° − θ",
      reason: "Between the two radii the angle is \\(180^\\circ-\\theta\\) (the quadrilateral formed has two right angles)."
    },
    {
      q: "Which of the following is required to construct direct common tangents to two unequal circles?",
      options: ["Joining the two centres only","Drawing a circle with radius equal to the difference of the two radii, centred at the larger circle’s centre","Drawing only one radius","Bisecting one of the circles"],
      ans: "Drawing a circle with radius equal to the difference of the two radii, centred at the larger circle’s centre",
      reason: "Draw a circle centred at the larger circle's centre with radius \\(r_1-r_2\\)."
    },
    {
      q: "Which of the following is required to construct transverse common tangents to two circles?",
      options: ["Joining the two centres only","Drawing a circle with radius equal to the sum of the two radii, centred at one circle’s centre","Bisecting only one radius","Drawing a chord in one circle"],
      ans: "Drawing a circle with radius equal to the sum of the two radii, centred at one circle’s centre",
      reason: "Draw a circle centred at one centre with radius equal to the sum \\(r_1+r_2\\)."
    },
    {
      q: "Two circles intersect at two points. Which statement about their common tangents is correct?",
      options: ["They have exactly 2 common tangents, both direct","They have 4 common tangents","They have no common tangent","They have exactly 1 common tangent"],
      ans: "They have exactly 2 common tangents, both direct",
      reason: "Two circles that intersect at two points have exactly 2 common tangents, and both are direct tangents."
    },
    {
      q: "If a point lies exactly on a given circle, the number of distinct tangents that can be drawn to the circle from that point is:",
      options: ["0","Exactly 2","Exactly 1","Infinite"],
      ans: "Exactly 1",
      reason: "Only one tangent can be drawn at a point on the circle."
    },
    {
      q: "In constructing a circle through three non-collinear points, if the three right bisectors did not meet at a single point, this would contradict the fact that:",
      options: ["One and only one circle passes through three non-collinear points","The points are collinear","Circles have infinite radii","Tangents are perpendicular to radii"],
      ans: "One and only one circle passes through three non-collinear points",
      reason: "The right bisectors of the sides are concurrent because exactly one circle passes through three non-collinear points."
    },
    {
      q: "The centre of a circle circumscribing a right-angled triangle lies at the:",
      options: ["Vertex of the right angle","Midpoint of the hypotenuse","Centroid of the triangle","Midpoint of the shortest side"],
      ans: "Midpoint of the hypotenuse",
      reason: "The circumcentre of a right triangle is the midpoint of the hypotenuse."
    },
    {
      q: "For a right triangle with hypotenuse 10 cm, the radius of its circumscribed circle is:",
      options: ["2.5 cm","10 cm","20 cm","5 cm"],
      ans: "5 cm",
      reason: "\\(R=\\tfrac12\\times10=5\\) cm."
    },
    {
      q: "For a right triangle with hypotenuse 26 cm, the radius of its circumscribed circle is:",
      options: ["13 cm","26 cm","6.5 cm","52 cm"],
      ans: "13 cm",
      reason: "\\(R=\\tfrac12\\times26=13\\) cm."
    },
    {
      q: "A circle is circumscribed about a rectangle with sides 6 cm and 8 cm. The radius of the circle is:",
      options: ["7 cm","14 cm","10 cm","5 cm"],
      ans: "5 cm",
      reason: "Diagonal \\(=\\sqrt{36+64}=10\\), so \\(R=5\\) cm."
    },
    {
      q: "A circle is circumscribed about a rectangle with sides 9 cm and 12 cm. The radius of the circle is:",
      options: ["10.5 cm","21 cm","7.5 cm","15 cm"],
      ans: "7.5 cm",
      reason: "Diagonal \\(=\\sqrt{81+144}=15\\), so \\(R=7.5\\) cm."
    },
    {
      q: "When two circles are congruent and touch internally, this situation:",
      options: ["Requires the smaller radius to be zero","Gives exactly two common tangents","Always requires the distance between centres to be positive","Is possible only if the circles coincide, since the distance between centres would be \\(r-r=0\\)"],
      ans: "Is possible only if the circles coincide, since the distance between centres would be \\(r-r=0\\)",
      reason: "Congruent circles touching internally would need \\(d=r-r=0\\), so their centres coincide and the circles coincide."
    },
    {
      q: "If two circles are concentric (same centre) with different radii, the number of common tangents is:",
      options: ["0","1","4","2"],
      ans: "0",
      reason: "Concentric circles of different radii have no common tangent."
    },
    {
      q: "A circle can be inscribed so that it touches all four sides of:",
      options: ["Only a square","No rhombus","Every rhombus","Only a rectangle"],
      ans: "Every rhombus",
      reason: "Every rhombus has an incircle, because its diagonals are angle bisectors that meet at a point equidistant from all four sides."
    },
    {
      q: "To draw a tangent to a circle through a given point P on the circle, without using the centre, the key construction tool used is:",
      options: ["The diameter only","An arbitrary chord","A random secant","An inscribed angle equal to the angle in the alternate segment"],
      ans: "An inscribed angle equal to the angle in the alternate segment",
      reason: "Construct an angle in the alternate segment equal to the angle between the tangent and the chord."
    },
    {
      q: "The locus of points equidistant from two fixed points is the:",
      options: ["Diameter","Right (perpendicular) bisector of the segment joining them","Angle bisector of the two points","Tangent line"],
      ans: "Right (perpendicular) bisector of the segment joining them",
      reason: "The locus of points equidistant from two fixed points is the right (perpendicular) bisector of the segment joining them."
    },
    {
      q: "The locus of the centre of all circles passing through two fixed points A and B is the:",
      options: ["Line AB itself","Right bisector of AB","A circle through A and B","The midpoint of AB only"],
      ans: "Right bisector of AB",
      reason: "Any circle through \\(A\\) and \\(B\\) has its centre equidistant from \\(A\\) and \\(B\\), so it lies on the right bisector of \\(AB\\)."
    },
    {
      q: "If three given points are collinear, the number of circles that can pass through all three is:",
      options: ["Zero","Exactly one","Infinite","Exactly two"],
      ans: "Zero",
      reason: "Three collinear points cannot lie on a circle, so no circle exists."
    },
    {
      q: "A tangent to a circle from an external point P, together with the radius to the point of contact, forms a triangle with the segment OP that is always:",
      options: ["Right-angled at the point of contact","Isosceles only","Obtuse-angled","Equilateral"],
      ans: "Right-angled at the point of contact",
      reason: "The radius is perpendicular to the tangent, so the triangle is right-angled at the point of contact."
    },
    {
      q: "Two circles that are congruent and touch externally have their common direct tangents:",
      options: ["Parallel to the line joining the centres","Coincident with the transverse tangents","Perpendicular to each other","Meeting at a point between the centres"],
      ans: "Parallel to the line joining the centres",
      reason: "The direct common tangents of two congruent touching circles are parallel to the line joining the centres."
    },
    {
      q: "Which of these is NOT a valid common-tangent count for two distinct circles in a plane?",
      options: ["4","5","0","2"],
      ans: "5",
      reason: "Two distinct circles have 0, 1, 2, 3 or 4 common tangents, never 5."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Piece</th><th>Dimensions</th></tr><tr><td>Square metal sheet</td><td>side 20 cm</td></tr><tr><td>Rectangular plate</td><td>6 cm \\(\\times\\) 8 cm</td></tr></table><p>A workshop cuts the largest possible circular disc from a square metal sheet (inscribed circle), and separately needs a circular ring that just circumscribes a rectangular plate.</p></div>The radius of the largest circle that can be inscribed in the square sheet is:",
      options: ["5 cm","10 cm","20 cm","40 cm"],
      ans: "10 cm",
      reason: "The inscribed circle has radius half the side: \\(\\tfrac{20}{2}=10\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Piece</th><th>Dimensions</th></tr><tr><td>Square metal sheet</td><td>side 20 cm</td></tr><tr><td>Rectangular plate</td><td>6 cm \\(\\times\\) 8 cm</td></tr></table><p>A workshop cuts the largest possible circular disc from a square metal sheet (inscribed circle), and separately needs a circular ring that just circumscribes a rectangular plate.</p></div>The diameter of that inscribed circle is:",
      options: ["10 cm","15 cm","20 cm","40 cm"],
      ans: "20 cm",
      reason: "\\(2\\times10=20\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Piece</th><th>Dimensions</th></tr><tr><td>Square metal sheet</td><td>side 20 cm</td></tr><tr><td>Rectangular plate</td><td>6 cm \\(\\times\\) 8 cm</td></tr></table><p>A workshop cuts the largest possible circular disc from a square metal sheet (inscribed circle), and separately needs a circular ring that just circumscribes a rectangular plate.</p></div>The diagonal of the 6 cm \\(\\times\\) 8 cm rectangular plate is:",
      options: ["10 cm","12 cm","14 cm","48 cm"],
      ans: "10 cm",
      reason: "\\(\\sqrt{6^2+8^2}=10\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Piece</th><th>Dimensions</th></tr><tr><td>Square metal sheet</td><td>side 20 cm</td></tr><tr><td>Rectangular plate</td><td>6 cm \\(\\times\\) 8 cm</td></tr></table><p>A workshop cuts the largest possible circular disc from a square metal sheet (inscribed circle), and separately needs a circular ring that just circumscribes a rectangular plate.</p></div>The radius of the circle circumscribing the rectangular plate is:",
      options: ["4 cm","5 cm","6 cm","10 cm"],
      ans: "5 cm",
      reason: "The diagonal is a diameter, so \\(R=5\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Drive</th><th>Pulley radii \\(r_1,r_2\\)</th><th>Distance between centres \\(d\\)</th></tr><tr><td>Open (direct) belt</td><td>9 cm, 1 cm</td><td>17 cm</td></tr><tr><td>Crossed (transverse) belt</td><td>9 cm, 6 cm</td><td>17 cm</td></tr></table><p>A workshop uses two pulley-and-belt drives. An open belt drive uses a direct common tangent as the belt length between the pulleys; a crossed belt drive uses a transverse common tangent.</p></div>For the open belt drive, using \\(L=\\sqrt{d^2-(r_1-r_2)^2}\\), the length of belt between the tangent points is:",
      options: ["5 cm","9 cm","12 cm","15 cm"],
      ans: "15 cm",
      reason: "\\(L=\\sqrt{17^2-(9-1)^2}=\\sqrt{225}=15\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Drive</th><th>Pulley radii \\(r_1,r_2\\)</th><th>Distance between centres \\(d\\)</th></tr><tr><td>Open (direct) belt</td><td>9 cm, 1 cm</td><td>17 cm</td></tr><tr><td>Crossed (transverse) belt</td><td>9 cm, 6 cm</td><td>17 cm</td></tr></table><p>A workshop uses two pulley-and-belt drives. An open belt drive uses a direct common tangent as the belt length between the pulleys; a crossed belt drive uses a transverse common tangent.</p></div>For the crossed belt drive, using \\(L=\\sqrt{d^2-(r_1+r_2)^2}\\), the length of belt between the tangent points is:",
      options: ["7 cm","18 cm","24 cm","8 cm"],
      ans: "8 cm",
      reason: "\\(L=\\sqrt{17^2-(9+6)^2}=\\sqrt{64}=8\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Drive</th><th>Pulley radii \\(r_1,r_2\\)</th><th>Distance between centres \\(d\\)</th></tr><tr><td>Open (direct) belt</td><td>9 cm, 1 cm</td><td>17 cm</td></tr><tr><td>Crossed (transverse) belt</td><td>9 cm, 6 cm</td><td>17 cm</td></tr></table><p>A workshop uses two pulley-and-belt drives. An open belt drive uses a direct common tangent as the belt length between the pulleys; a crossed belt drive uses a transverse common tangent.</p></div>For the crossed belt drive to be geometrically possible, the distance between centres must satisfy:",
      options: ["\\(d>r_1+r_2\\)","\\(d<r_1+r_2\\)","\\(d=r_1-r_2\\)","\\(d<r_1-r_2\\)"],
      ans: "\\(d>r_1+r_2\\)",
      reason: "Transverse tangents exist only when the circles are apart: \\(d>r_1+r_2\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Drive</th><th>Pulley radii \\(r_1,r_2\\)</th><th>Distance between centres \\(d\\)</th></tr><tr><td>Open (direct) belt</td><td>9 cm, 1 cm</td><td>17 cm</td></tr><tr><td>Crossed (transverse) belt</td><td>9 cm, 6 cm</td><td>17 cm</td></tr></table><p>A workshop uses two pulley-and-belt drives. An open belt drive uses a direct common tangent as the belt length between the pulleys; a crossed belt drive uses a transverse common tangent.</p></div>For the crossed-belt pulleys (radii 9 cm and 6 cm), if the centre distance were reduced to 15 cm (equal to \\(r_1+r_2\\)), the pulleys would:",
      options: ["Touch each other externally","Move apart","Become concentric","Have four common tangents"],
      ans: "Touch each other externally",
      reason: "If \\(d=r_1+r_2=15\\) cm, the circles touch externally."
    },
    {
      q: "<div class=\"stimulus\"><p>Part of a circular manhole cover has broken off, leaving only an arc. An engineer marks three points \\(A\\), \\(B\\), \\(C\\) on the remaining arc, and measures \\(AB=6\\) cm, \\(BC=8\\) cm, with \\(\\angle ABC=90°\\) measured using a set square.</p></div>Since \\(\\angle ABC=90°\\), by the converse of the angle-in-a-semicircle theorem, side \\(AC\\) of the triangle must be a:",
      options: ["Chord only","Tangent","Diameter","Radius"],
      ans: "Diameter",
      reason: "By the converse of the angle-in-a-semicircle theorem, the side opposite a right angle is a diameter, so \\(AC\\) is a diameter."
    },
    {
      q: "<div class=\"stimulus\"><p>Part of a circular manhole cover has broken off, leaving only an arc. An engineer marks three points \\(A\\), \\(B\\), \\(C\\) on the remaining arc, and measures \\(AB=6\\) cm, \\(BC=8\\) cm, with \\(\\angle ABC=90°\\) measured using a set square.</p></div>The length of \\(AC\\) (the hypotenuse) is:",
      options: ["10 cm","12 cm","14 cm","48 cm"],
      ans: "10 cm",
      reason: "\\(AC=\\sqrt{6^2+8^2}=10\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><p>Part of a circular manhole cover has broken off, leaving only an arc. An engineer marks three points \\(A\\), \\(B\\), \\(C\\) on the remaining arc, and measures \\(AB=6\\) cm, \\(BC=8\\) cm, with \\(\\angle ABC=90°\\) measured using a set square.</p></div>The radius of the circular manhole cover is:",
      options: ["4 cm","5 cm","6 cm","10 cm"],
      ans: "5 cm",
      reason: "The diameter is 10 cm, so the radius is 5 cm."
    },
    {
      q: "<div class=\"stimulus\"><p>Part of a circular manhole cover has broken off, leaving only an arc. An engineer marks three points \\(A\\), \\(B\\), \\(C\\) on the remaining arc, and measures \\(AB=6\\) cm, \\(BC=8\\) cm, with \\(\\angle ABC=90°\\) measured using a set square.</p></div>If instead none of the three marked points formed a right angle, the standard construction to locate the centre would be to draw the right bisectors of:",
      options: ["Any two sides of the triangle formed by the points","All three medians","The angle bisectors","A single chord only"],
      ans: "Any two sides of the triangle formed by the points",
      reason: "The centre is the intersection of the right bisectors of any two sides of triangle \\(ABC\\)."
    }
    ];
  }
});
