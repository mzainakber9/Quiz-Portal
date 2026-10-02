// Class 10 Math — Chapter 9: Chord and Arcs of a Circle
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch9",
  label: "Chapter 9: Chord and Arcs of a Circle",
  order: 9,
  questions: function () {
    return [
    {
      q: "One and only one circle can pass through ...... non-collinear points.",
      options: ["5","4","2","3"],
      ans: "3",
      reason: "Exactly one circle passes through three non-collinear points."
    },
    {
      q: "...... number of circles can pass through a single point.",
      options: ["2","3","Infinite","1"],
      ans: "Infinite",
      reason: "Infinitely many circles can pass through a single point."
    },
    {
      q: "The diameter of a circle which bisects a chord is ...... to the chord.",
      options: ["Parallel","Equal","Perpendicular","Collinear"],
      ans: "Perpendicular",
      reason: "A diameter that bisects a chord (not itself a diameter) is perpendicular to it."
    },
    {
      q: "In a circle, OC = 3 cm and chord AB = 8 cm, where \\(OC \\perp AB\\). The radius of the circle is:",
      options: ["5 cm","4 cm","10 cm","4.5 cm"],
      ans: "5 cm",
      reason: "The radius satisfies \\(r^2=3^2+4^2=25\\), so \\(r=5\\) cm (half the chord is 4 cm)."
    },
    {
      q: "A diameter of a circle perpendicular to a chord ...... the chord.",
      options: ["Touches","Trisects","Bisects","Intersects"],
      ans: "Bisects",
      reason: "A diameter perpendicular to a chord bisects that chord."
    },
    {
      q: "Two chords which are equidistant from the ...... are congruent.",
      options: ["Circle","Chord","Centre","Diameter"],
      ans: "Centre",
      reason: "Chords equidistant from the centre are congruent."
    },
    {
      q: "Two ...... which are equidistant from the centre are congruent.",
      options: ["Circles","Segments","Chords","Diameters"],
      ans: "Chords",
      reason: "Chords that are equidistant from the centre are congruent."
    },
    {
      q: "The length of a chord of a circle of radius 5 cm is 8 cm. The distance of the chord from the centre is:",
      options: ["5 cm","3 cm","6 cm","4 cm"],
      ans: "3 cm",
      reason: "Half chord \\(=4\\): \\(d=\\sqrt{5^2-4^2}=3\\) cm."
    },
    {
      q: "A chord of a circle is 24 cm long and its perpendicular distance from the centre is 5 cm. The radius of the circle is:",
      options: ["5 cm","10 cm","13 cm","26 cm"],
      ans: "13 cm",
      reason: "Half chord \\(=12\\): \\(r=\\sqrt{12^2+5^2}=13\\) cm."
    },
    {
      q: "In a circle, AB = 4 cm, OC = 3 cm ( \\(OC \\perp AB\\)). Chord DE passes through the midpoint of OC and is parallel to AB. The length of DE is:",
      options: ["4.5 cm","5.6 cm","6.6 cm","3.3 cm"],
      ans: "6.6 cm",
      reason: "\\(r^2=3^2+2^2=13\\). \\(DE\\) is \\(1.5\\) cm from \\(O\\), so half \\(DE=\\sqrt{13-2.25}\\approx3.28\\) and \\(DE\\approx6.6\\) cm."
    },
    {
      q: "An angle whose vertex is the centre of a circle and whose arms pass through the end points of an arc is called a(n) ...... angle.",
      options: ["Interior","Inscribed","Exterior","Central"],
      ans: "Central",
      reason: "An angle at the centre whose arms pass through the ends of an arc is a central angle."
    },
    {
      q: "Corresponding arcs of two congruent chords of a circle are:",
      options: ["Minor","Unequal","Major","Congruent"],
      ans: "Congruent",
      reason: "Congruent chords cut off congruent arcs."
    },
    {
      q: "The lengths of two chords of a circle are in the ratio \\(1:2\\), and the central angle of the arc corresponding to the smaller chord is \\(60^\\circ\\). The arc corresponding to the larger chord is a:",
      options: ["Minor arc","Full circle","Semicircle","Major arc"],
      ans: "Semicircle",
      reason: "A \\(60^\\circ\\) central angle makes the chord equal to the radius \\(r\\). The larger chord is \\(2r\\), which is a diameter, so its arc is a semicircle."
    },
    {
      q: "The central angle of a quadrant of a circle is:",
      options: ["60°","45°","90°","30°"],
      ans: "90°",
      reason: "A quadrant is a quarter of a circle: \\(90^\\circ\\)."
    },
    {
      q: "If a circle is divided into ten equal arcs, the central angle of each arc is:",
      options: ["60°","10°","36°","90°"],
      ans: "36°",
      reason: "\\(\\dfrac{360^\\circ}{10}=36^\\circ\\)."
    },
    {
      q: "How many central angles can be drawn corresponding to one given arc?",
      options: ["Finite","Two","One","Infinite"],
      ans: "One",
      reason: "An arc has exactly one central angle."
    },
    {
      q: "Two congruent chords of two congruent circles have ...... central angles.",
      options: ["Same","Acute","Different","Proportional"],
      ans: "Same",
      reason: "Congruent chords of congruent circles subtend equal central angles."
    },
    {
      q: "The central angle of an arc which includes a semicircle is:",
      options: ["< 90°","< 180°","> 180°","> 90°"],
      ans: "> 180°",
      reason: "An arc containing a semicircle is a major arc, so its central angle is more than \\(180^\\circ\\)."
    },
    {
      q: "A line segment joining any two points of a circle is called a:",
      options: ["Secant line only","Tangent","Radius","Chord"],
      ans: "Chord",
      reason: "A segment joining two points of a circle is a chord."
    },
    {
      q: "A chord that passes through the centre of a circle is called its:",
      options: ["Diameter","Sector","Radius","Arc"],
      ans: "Diameter",
      reason: "A chord through the centre is a diameter."
    },
    {
      q: "A part of a circle between two points on it is called a(n):",
      options: ["Segment","Arc","Sector","Chord"],
      ans: "Arc",
      reason: "A part of a circle between two points is an arc."
    },
    {
      q: "A diameter divides a circle into two:",
      options: ["Chords","Tangents","Semicircles","Sectors"],
      ans: "Semicircles",
      reason: "A diameter splits a circle into two semicircles."
    },
    {
      q: "An arc that is smaller than a semicircle is called a:",
      options: ["Major arc","Minor arc","Central arc","Full arc"],
      ans: "Minor arc",
      reason: "An arc smaller than a semicircle is a minor arc."
    },
    {
      q: "An arc that includes a semicircle within it is called a:",
      options: ["Half arc","Major arc","Minor arc","Central arc"],
      ans: "Major arc",
      reason: "An arc containing a semicircle is a major arc."
    },
    {
      q: "Two arcs of a circle (or of two congruent circles) are said to be congruent if their:",
      options: ["Tangents intersect","Central angles are congruent","Radii differ","Chords are unequal"],
      ans: "Central angles are congruent",
      reason: "Arcs are congruent if their central angles are congruent."
    },
    {
      q: "A circular region is the union of a circle and its:",
      options: ["Tangent","Circumference","Interior","Chord"],
      ans: "Interior",
      reason: "A circular region is the circle together with its interior."
    },
    {
      q: "Through how many non-collinear points can exactly one circle be drawn?",
      options: ["Two","Four","Five","Three"],
      ans: "Three",
      reason: "Three non-collinear points determine exactly one circle."
    },
    {
      q: "Two distinct circles can intersect each other in at most:",
      options: ["Three points","One point","Two points","Four points"],
      ans: "Two points",
      reason: "Two distinct circles meet in at most two points."
    },
    {
      q: "Through two points lying on the same straight line, how many circles can be drawn passing through both?",
      options: ["Exactly one","Infinitely many","None","Exactly two"],
      ans: "Infinitely many",
      reason: "Infinitely many circles pass through two given points."
    },
    {
      q: "If two chords of a circle do not pass through the centre, then they:",
      options: ["Are always equal","Are always parallel","Always bisect each other","Cannot bisect each other"],
      ans: "Cannot bisect each other",
      reason: "Two chords not through the centre cannot bisect each other (their common point would have to be the centre)."
    },
    {
      q: "The perpendicular (right) bisector of a chord of a circle always passes through the:",
      options: ["Tangent point","Centre of the circle","Nearest point on the circle","Midpoint of the arc only"],
      ans: "Centre of the circle",
      reason: "The perpendicular bisector of a chord passes through the centre."
    },
    {
      q: "If a diameter of a circle is perpendicular to a chord, then it:",
      options: ["Is parallel to the chord","Bisects the chord","Is equal to the chord","Doubles the chord"],
      ans: "Bisects the chord",
      reason: "A diameter perpendicular to a chord bisects it."
    },
    {
      q: "A diameter or radial segment of a circle passes through the midpoints of two:",
      options: ["Unequal arcs","Parallel chords","Perpendicular chords","Tangents"],
      ans: "Parallel chords",
      reason: "A diameter through the midpoints of parallel chords is perpendicular to them; the midpoints of parallel chords lie on a diameter."
    },
    {
      q: "If two chords of a circle are unequal in length, then the longer chord is:",
      options: ["Equal distance from the centre","Farther from the centre","A diameter","Nearer to the centre"],
      ans: "Nearer to the centre",
      reason: "A longer chord is nearer to the centre; the diameter is nearest (distance 0)."
    },
    {
      q: "If two chords of two congruent circles are congruent, then they are:",
      options: ["Equidistant from their respective centres","Always diameters","Perpendicular to each other","Parallel to each other"],
      ans: "Equidistant from their respective centres",
      reason: "Congruent chords in congruent circles are equidistant from their centres."
    },
    {
      q: "Theorem: “One and only one circle can pass through three non-collinear points.” This result is proved using the:",
      options: ["Angle bisectors of the triangle","Altitudes of the triangle","Medians of the triangle","Right bisectors of the sides of the triangle formed"],
      ans: "Right bisectors of the sides of the triangle formed",
      reason: "The centre is where the right bisectors of the sides of the triangle meet."
    },
    {
      q: "Which statement correctly describes Theorem 9.2?",
      options: ["A line from the centre bisecting a chord is perpendicular to it","A line from the centre bisecting a chord is equal to it","A line from the centre bisecting a chord is parallel to it","A line from the centre bisecting a chord touches the circle"],
      ans: "A line from the centre bisecting a chord is perpendicular to it",
      reason: "Theorem 9.2: a line from the centre to the midpoint of a chord is perpendicular to it."
    },
    {
      q: "Which statement correctly describes Theorem 9.3?",
      options: ["A perpendicular from the centre to a chord passes outside the circle","A perpendicular from the centre to a chord bisects the chord","A perpendicular from the centre to a chord doubles the chord","A perpendicular from the centre to a chord is parallel to the diameter"],
      ans: "A perpendicular from the centre to a chord bisects the chord",
      reason: "Theorem 9.3: a perpendicular from the centre to a chord bisects the chord."
    },
    {
      q: "Which statement correctly describes Theorem 9.4?",
      options: ["Two congruent chords of a circle are perpendicular to each other","Two congruent chords of a circle are equidistant from the centre","Two congruent chords of a circle intersect at the centre","Two congruent chords of a circle are always parallel"],
      ans: "Two congruent chords of a circle are equidistant from the centre",
      reason: "Theorem 9.4: congruent chords are equidistant from the centre."
    },
    {
      q: "Which statement correctly describes Theorem 9.5?",
      options: ["Two chords equidistant from the centre are perpendicular","Two chords equidistant from the centre subtend unequal arcs","Two chords equidistant from the centre are always diameters","Two chords equidistant from the centre are congruent"],
      ans: "Two chords equidistant from the centre are congruent",
      reason: "Theorem 9.5: chords equidistant from the centre are congruent."
    },
    {
      q: "Which statement correctly describes Theorem 9.6?",
      options: ["If two arcs of a circle are congruent, one must be a semicircle","If two arcs of a circle are congruent, their corresponding chords are equal","If two arcs of a circle are congruent, their central angles differ","If two arcs of a circle are congruent, their corresponding chords are unequal"],
      ans: "If two arcs of a circle are congruent, their corresponding chords are equal",
      reason: "Congruent arcs have equal corresponding chords."
    },
    {
      q: "Which statement correctly describes Theorem 9.7?",
      options: ["If two chords of a circle are equal, they must be diameters","If two chords of a circle are equal, they must intersect","If two chords of a circle are equal, their corresponding arcs are unequal","If two chords of a circle are equal, their corresponding arcs are congruent"],
      ans: "If two chords of a circle are equal, their corresponding arcs are congruent",
      reason: "Equal chords cut off congruent arcs."
    },
    {
      q: "Which statement correctly describes Theorem 9.8?",
      options: ["Equal chords of a circle never meet the diameter","Equal chords of a circle are always parallel","Equal chords of a circle subtend unequal angles at the centre","Equal chords of a circle subtend equal angles at the centre"],
      ans: "Equal chords of a circle subtend equal angles at the centre",
      reason: "Equal chords subtend equal angles at the centre."
    },
    {
      q: "Which statement correctly describes Theorem 9.9?",
      options: ["If two chords subtend equal angles at the centre, the chords are equal","If two chords subtend equal angles at the centre, they must be diameters","If two chords subtend equal angles at the centre, the chords are unequal","If two chords subtend equal angles at the centre, they are perpendicular"],
      ans: "If two chords subtend equal angles at the centre, the chords are equal",
      reason: "Chords subtending equal angles at the centre are equal."
    },
    {
      q: "A cyclic trapezium (a trapezium inscribed in a circle) is always:",
      options: ["Impossible to construct","Scalene with unequal diagonals","Isosceles, with equal non-parallel sides and equal diagonals","A rectangle"],
      ans: "Isosceles, with equal non-parallel sides and equal diagonals",
      reason: "A cyclic trapezium must be isosceles: its non-parallel sides and its diagonals are equal."
    },
    {
      q: "Corollary: two circles cannot intersect each other at more than:",
      options: ["Two points","Three points","Four points","One point"],
      ans: "Two points",
      reason: "Two circles meet in at most two points."
    },
    {
      q: "A chord of a circle is at a distance of 3 cm from the centre. If the radius of the circle is 5 cm, the length of the chord is: chord",
      options: ["10 cm","14 cm","6 cm","8 cm"],
      ans: "8 cm",
      reason: "Half chord \\(=\\sqrt{5^2-3^2}=4\\), so the chord is 8 cm."
    },
    {
      q: "A chord of length 8 cm is drawn in a circle of radius 5 cm. The distance of this chord from the centre of the circle is:",
      options: ["3 cm","4 cm","5 cm","1 cm"],
      ans: "3 cm",
      reason: "\\(d=\\sqrt{5^2-4^2}=3\\) cm."
    },
    {
      q: "A chord of length 8 cm is at a perpendicular distance of 3 cm from the centre of a circle. The radius of the circle is:",
      options: ["3 cm","5 cm","7 cm","4 cm"],
      ans: "5 cm",
      reason: "\\(r=\\sqrt{4^2+3^2}=5\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 5 cm from the centre. If the radius of the circle is 13 cm, the length of the chord is: chord",
      options: ["34 cm","26 cm","22 cm","24 cm"],
      ans: "24 cm",
      reason: "Half chord \\(=\\sqrt{13^2-5^2}=12\\), so the chord is 24 cm."
    },
    {
      q: "A chord of length 24 cm is drawn in a circle of radius 13 cm. The distance of this chord from the centre of the circle is:",
      options: ["3 cm","5 cm","12 cm","7 cm"],
      ans: "5 cm",
      reason: "\\(d=\\sqrt{13^2-12^2}=5\\) cm."
    },
    {
      q: "A chord of length 24 cm is at a perpendicular distance of 5 cm from the centre of a circle. The radius of the circle is:",
      options: ["11 cm","17 cm","15 cm","13 cm"],
      ans: "13 cm",
      reason: "\\(r=\\sqrt{12^2+5^2}=13\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 6 cm from the centre. If the radius of the circle is 10 cm, the length of the chord is: chord",
      options: ["28 cm","16 cm","18 cm","14 cm"],
      ans: "16 cm",
      reason: "Half chord \\(=\\sqrt{10^2-6^2}=8\\), so the chord is 16 cm."
    },
    {
      q: "A chord of length 16 cm is drawn in a circle of radius 10 cm. The distance of this chord from the centre of the circle is:",
      options: ["7 cm","6 cm","8 cm","4 cm"],
      ans: "6 cm",
      reason: "\\(d=\\sqrt{10^2-8^2}=6\\) cm."
    },
    {
      q: "A chord of length 16 cm is at a perpendicular distance of 6 cm from the centre of a circle. The radius of the circle is:",
      options: ["10 cm","12 cm","8 cm","14 cm"],
      ans: "10 cm",
      reason: "\\(r=\\sqrt{8^2+6^2}=10\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 8 cm from the centre. If the radius of the circle is 17 cm, the length of the chord is: chord",
      options: ["28 cm","32 cm","30 cm","46 cm"],
      ans: "30 cm",
      reason: "Half chord \\(=\\sqrt{17^2-8^2}=15\\), so the chord is 30 cm."
    },
    {
      q: "A chord of length 30 cm is drawn in a circle of radius 17 cm. The distance of this chord from the centre of the circle is:",
      options: ["8 cm","15 cm","10 cm","6 cm"],
      ans: "8 cm",
      reason: "\\(d=\\sqrt{17^2-15^2}=8\\) cm."
    },
    {
      q: "A chord of length 30 cm is at a perpendicular distance of 8 cm from the centre of a circle. The radius of the circle is:",
      options: ["23 cm","15 cm","19 cm","17 cm"],
      ans: "17 cm",
      reason: "\\(r=\\sqrt{15^2+8^2}=17\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 7 cm from the centre. If the radius of the circle is 25 cm, the length of the chord is: chord",
      options: ["46 cm","62 cm","50 cm","48 cm"],
      ans: "48 cm",
      reason: "Half chord \\(=\\sqrt{25^2-7^2}=24\\), so the chord is 48 cm."
    },
    {
      q: "A chord of length 48 cm is drawn in a circle of radius 25 cm. The distance of this chord from the centre of the circle is:",
      options: ["9 cm","5 cm","7 cm","24 cm"],
      ans: "7 cm",
      reason: "\\(d=\\sqrt{25^2-24^2}=7\\) cm."
    },
    {
      q: "A chord of length 48 cm is at a perpendicular distance of 7 cm from the centre of a circle. The radius of the circle is:",
      options: ["25 cm","23 cm","27 cm","31 cm"],
      ans: "25 cm",
      reason: "\\(r=\\sqrt{24^2+7^2}=25\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 9 cm from the centre. If the radius of the circle is 15 cm, the length of the chord is: chord",
      options: ["26 cm","24 cm","42 cm","22 cm"],
      ans: "24 cm",
      reason: "Half chord \\(=\\sqrt{15^2-9^2}=12\\), so the chord is 24 cm."
    },
    {
      q: "A chord of length 24 cm is drawn in a circle of radius 15 cm. The distance of this chord from the centre of the circle is:",
      options: ["9 cm","12 cm","7 cm","11 cm"],
      ans: "9 cm",
      reason: "\\(d=\\sqrt{15^2-12^2}=9\\) cm."
    },
    {
      q: "A chord of length 24 cm is at a perpendicular distance of 9 cm from the centre of a circle. The radius of the circle is:",
      options: ["17 cm","15 cm","21 cm","13 cm"],
      ans: "15 cm",
      reason: "\\(r=\\sqrt{12^2+9^2}=15\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 12 cm from the centre. If the radius of the circle is 20 cm, the length of the chord is: chord",
      options: ["32 cm","34 cm","30 cm","56 cm"],
      ans: "32 cm",
      reason: "Half chord \\(=\\sqrt{20^2-12^2}=16\\), so the chord is 32 cm."
    },
    {
      q: "A chord of length 32 cm is drawn in a circle of radius 20 cm. The distance of this chord from the centre of the circle is:",
      options: ["12 cm","14 cm","10 cm","16 cm"],
      ans: "12 cm",
      reason: "\\(d=\\sqrt{20^2-16^2}=12\\) cm."
    },
    {
      q: "A chord of length 32 cm is at a perpendicular distance of 12 cm from the centre of a circle. The radius of the circle is:",
      options: ["18 cm","28 cm","20 cm","22 cm"],
      ans: "20 cm",
      reason: "\\(r=\\sqrt{16^2+12^2}=20\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 10 cm from the centre. If the radius of the circle is 26 cm, the length of the chord is: chord",
      options: ["50 cm","46 cm","48 cm","68 cm"],
      ans: "48 cm",
      reason: "Half chord \\(=\\sqrt{26^2-10^2}=24\\), so the chord is 48 cm."
    },
    {
      q: "A chord of length 48 cm is drawn in a circle of radius 26 cm. The distance of this chord from the centre of the circle is:",
      options: ["10 cm","12 cm","8 cm","24 cm"],
      ans: "10 cm",
      reason: "\\(d=\\sqrt{26^2-24^2}=10\\) cm."
    },
    {
      q: "A chord of length 48 cm is at a perpendicular distance of 10 cm from the centre of a circle. The radius of the circle is:",
      options: ["28 cm","24 cm","34 cm","26 cm"],
      ans: "26 cm",
      reason: "\\(r=\\sqrt{24^2+10^2}=26\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 18 cm from the centre. If the radius of the circle is 30 cm, the length of the chord is: chord",
      options: ["84 cm","50 cm","48 cm","46 cm"],
      ans: "48 cm",
      reason: "Half chord \\(=\\sqrt{30^2-18^2}=24\\), so the chord is 48 cm."
    },
    {
      q: "A chord of length 48 cm is drawn in a circle of radius 30 cm. The distance of this chord from the centre of the circle is:",
      options: ["18 cm","20 cm","16 cm","24 cm"],
      ans: "18 cm",
      reason: "\\(d=\\sqrt{30^2-24^2}=18\\) cm."
    },
    {
      q: "A chord of length 48 cm is at a perpendicular distance of 18 cm from the centre of a circle. The radius of the circle is:",
      options: ["28 cm","42 cm","32 cm","30 cm"],
      ans: "30 cm",
      reason: "\\(r=\\sqrt{24^2+18^2}=30\\) cm."
    },
    {
      q: "A chord of a circle is at a distance of 12 cm from the centre. If the radius of the circle is 37 cm, the length of the chord is: chord",
      options: ["94 cm","70 cm","68 cm","72 cm"],
      ans: "70 cm",
      reason: "Half chord \\(=\\sqrt{37^2-12^2}=35\\), so the chord is 70 cm."
    },
    {
      q: "A chord of length 70 cm is drawn in a circle of radius 37 cm. The distance of this chord from the centre of the circle is:",
      options: ["14 cm","12 cm","10 cm","35 cm"],
      ans: "12 cm",
      reason: "\\(d=\\sqrt{37^2-35^2}=12\\) cm."
    },
    {
      q: "A chord of length 70 cm is at a perpendicular distance of 12 cm from the centre of a circle. The radius of the circle is:",
      options: ["35 cm","39 cm","47 cm","37 cm"],
      ans: "37 cm",
      reason: "\\(r=\\sqrt{35^2+12^2}=37\\) cm."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 2. If the smaller central angle is 40°, the larger central angle is:",
      options: ["90°","70°","80°","40°"],
      ans: "80°",
      reason: "The ratio 1:2 gives \\(2\\times40^\\circ=80^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 3. If the smaller central angle is 30°, the larger central angle is:",
      options: ["80°","30°","100°","90°"],
      ans: "90°",
      reason: "The ratio 1:3 gives \\(3\\times30^\\circ=90^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 2. If the smaller central angle is 50°, the larger central angle is:",
      options: ["50°","100°","110°","90°"],
      ans: "100°",
      reason: "\\(2\\times50^\\circ=100^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 3. If the smaller central angle is 20°, the larger central angle is:",
      options: ["60°","50°","20°","70°"],
      ans: "60°",
      reason: "\\(3\\times20^\\circ=60^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 2. If the smaller central angle is 70°, the larger central angle is:",
      options: ["150°","70°","140°","130°"],
      ans: "140°",
      reason: "\\(2\\times70^\\circ=140^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 3. If the smaller central angle is 25°, the larger central angle is:",
      options: ["75°","25°","85°","65°"],
      ans: "75°",
      reason: "\\(3\\times25^\\circ=75^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 3. If the smaller central angle is 45°, the larger central angle is:",
      options: ["145°","135°","45°","125°"],
      ans: "135°",
      reason: "\\(3\\times45^\\circ=135^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 4. If the smaller central angle is 15°, the larger central angle is:",
      options: ["50°","60°","15°","70°"],
      ans: "60°",
      reason: "\\(4\\times15^\\circ=60^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 2. If the smaller central angle is 35°, the larger central angle is:",
      options: ["70°","80°","35°","60°"],
      ans: "70°",
      reason: "\\(2\\times35^\\circ=70^\\circ\\)."
    },
    {
      q: "Two chords of a circle subtend central angles in the ratio 1 : 2. If the smaller central angle is 55°, the larger central angle is:",
      options: ["110°","100°","55°","120°"],
      ans: "110°",
      reason: "\\(2\\times55^\\circ=110^\\circ\\)."
    },
    {
      q: "In a circle with centre O, AB = CD. If \\(\\angle AOB\\) = 72°, then \\(\\angle COD\\) is:",
      options: ["144°","36°","72°","108°"],
      ans: "72°",
      reason: "Equal chords subtend equal central angles, so \\(\\angle COD=72^\\circ\\)."
    },
    {
      q: "In a circle, arc AB ≅ arc CD (congruent arcs). It follows that chord AB and chord CD are:",
      options: ["Perpendicular","Unequal","Parallel only","Equal"],
      ans: "Equal",
      reason: "Congruent arcs have equal chords."
    },
    {
      q: "In a circle with centre O, chords AB and CD are equidistant from O. If AB = 7.5 cm, then CD equals:",
      options: ["7.5 cm","5 cm","3.75 cm","15 cm"],
      ans: "7.5 cm",
      reason: "Chords equidistant from the centre are equal, so \\(CD=7.5\\) cm."
    },
    {
      q: "If arc AB = 3 arc BC and \\(\\angle AOB\\) = 90° (O is the centre), then \\(\\angle BOC\\) is:",
      options: ["45°","60°","15°","30°"],
      ans: "30°",
      reason: "Arc \\(BC\\) is one third of arc \\(AB\\), so \\(\\angle BOC=\\dfrac{90^\\circ}{3}=30^\\circ\\)."
    },
    {
      q: "ABCD is a cyclic quadrilateral inscribed in a circle with centre O, and arc AB = arc BC = arc CD. If \\(\\angle ABC\\) = 140°, then \\(\\angle AEC\\) (angle in the alternate segment on major arc) satisfies \\(\\angle ABC\\) + \\(\\angle AEC\\) = 180°, so \\(\\angle AEC\\) is:",
      options: ["100°","40°","140°","80°"],
      ans: "40°",
      reason: "Opposite angles of a cyclic quadrilateral sum to \\(180^\\circ\\): \\(\\angle AEC=180^\\circ-140^\\circ=40^\\circ\\)."
    },
    {
      q: "Two congruent circles have equal chords PQ and RS. It follows that PQ and RS are equidistant from their:",
      options: ["Respective centres","Point of intersection","Tangent lines","Nearest point on circumference"],
      ans: "Respective centres",
      reason: "Equal chords of congruent circles are equidistant from their centres."
    },
    {
      q: "The chords of a circle subtending equal arcs are:",
      options: ["Unequal","Tangential","Perpendicular","Equal"],
      ans: "Equal",
      reason: "Chords subtending equal arcs are equal."
    },
    {
      q: "A circle has radius 10 cm. Two parallel chords of lengths 16 cm and 12 cm lie on opposite sides of the centre. The distance between the chords is:",
      options: ["6 + 8 = 14 cm","2 cm","6 cm","8 cm"],
      ans: "6 + 8 = 14 cm",
      reason: "Distances from the centre: \\(\\sqrt{10^2-8^2}=6\\) and \\(\\sqrt{10^2-6^2}=8\\). On opposite sides they add: \\(6+8=14\\) cm."
    },
    {
      q: "A circle has radius 13 cm. Two parallel chords of lengths 24 cm and 10 cm lie on the same side of the centre. The distance between the chords is:",
      options: ["17 cm","5 − 12 = −7 cm","12 cm","7 cm"],
      ans: "7 cm",
      reason: "Distances: \\(\\sqrt{13^2-12^2}=5\\) and \\(\\sqrt{13^2-5^2}=12\\). On the same side: \\(12-5=7\\) cm."
    },
    {
      q: "If the perpendicular distance from the centre to a chord is zero, the chord must be a:",
      options: ["Diameter","Radius","Tangent","Minor arc"],
      ans: "Diameter",
      reason: "A chord at distance 0 passes through the centre, so it is a diameter."
    },
    {
      q: "In a circle, if \\(\\angle AOB\\) (central angle) = 180°, then arc AB is a:",
      options: ["Point","Minor arc","Semicircle","Major arc"],
      ans: "Semicircle",
      reason: "A \\(180^\\circ\\) central angle cuts off a semicircle."
    },
    {
      q: "The number of chords that can be drawn through a single point on a circle is:",
      options: ["Infinite","Two","One","Finite"],
      ans: "Infinite",
      reason: "Infinitely many chords pass through a point on a circle."
    },
    {
      q: "If radius of a circle is r and a chord is at distance d from the centre ( d &lt; r), then half the length of the chord equals:",
      options: ["\\(r-d\\)","\\(\\sqrt{r^2-d^2}\\)","\\(r^2-d^2\\)","\\(\\sqrt{r^2+d^2}\\)"],
      ans: "\\(\\sqrt{r^2-d^2}\\)",
      reason: "Half chord \\(=\\sqrt{r^2-d^2}\\)."
    },
    {
      q: "Which of the following is sufficient to prove two chords of the same circle are equal?",
      options: ["They are both minor arcs","They are parallel","They are equidistant from the centre","They intersect inside the circle"],
      ans: "They are equidistant from the centre",
      reason: "Chords equidistant from the centre are equal."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Span of the arch (chord \\(AB\\))</th><th>Height of the arch above the chord (sagitta)</th></tr><tr><td>24 m</td><td>8 m</td></tr></table><p>A circular arch bridge has the shape of an arc of a circle. Engineers measure the span (chord \\(AB\\)) and the height of the arc above the chord as shown, and want to find the radius of the circle used to design the arch.</p></div>If \\(r\\) is the radius of the arch's circle, the perpendicular distance from the centre \\(O\\) to the chord \\(AB\\) is:",
      options: ["\\(r+8\\)","\\(r-8\\)","\\(8-r\\)","\\(r\\)"],
      ans: "\\(r-8\\)",
      reason: "The centre lies \\(r\\) from the arc's top, so its distance from the chord is \\(r-8\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Span of the arch (chord \\(AB\\))</th><th>Height of the arch above the chord (sagitta)</th></tr><tr><td>24 m</td><td>8 m</td></tr></table><p>A circular arch bridge has the shape of an arc of a circle. Engineers measure the span (chord \\(AB\\)) and the height of the arc above the chord as shown, and want to find the radius of the circle used to design the arch.</p></div>Using the theorem that a perpendicular from the centre bisects the chord, \\(r\\) satisfies:",
      options: ["\\(r^2=(r-8)^2+12^2\\)","\\(r^2=(r-8)^2+24^2\\)","\\(r^2=(r+8)^2+12^2\\)","\\(r=(r-8)+12\\)"],
      ans: "\\(r^2=(r-8)^2+12^2\\)",
      reason: "Right triangle: \\(r^2=(r-8)^2+12^2\\) (half the span is 12)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Span of the arch (chord \\(AB\\))</th><th>Height of the arch above the chord (sagitta)</th></tr><tr><td>24 m</td><td>8 m</td></tr></table><p>A circular arch bridge has the shape of an arc of a circle. Engineers measure the span (chord \\(AB\\)) and the height of the arc above the chord as shown, and want to find the radius of the circle used to design the arch.</p></div>Solving the equation, the radius of the arch is:",
      options: ["10 m","13 m","15 m","16 m"],
      ans: "13 m",
      reason: "\\(r^2=r^2-16r+64+144\\Rightarrow16r=208\\Rightarrow r=13\\) m."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Span of the arch (chord \\(AB\\))</th><th>Height of the arch above the chord (sagitta)</th></tr><tr><td>24 m</td><td>8 m</td></tr></table><p>A circular arch bridge has the shape of an arc of a circle. Engineers measure the span (chord \\(AB\\)) and the height of the arc above the chord as shown, and want to find the radius of the circle used to design the arch.</p></div>The perpendicular distance from the centre \\(O\\) to the chord \\(AB\\) is therefore:",
      options: ["5 m","8 m","10 m","13 m"],
      ans: "5 m",
      reason: "Distance \\(=r-8=13-8=5\\) m."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Chord</th><th>Length</th></tr><tr><td>\\(AB\\)</td><td>24 cm</td></tr><tr><td>\\(CD\\)</td><td>10 cm</td></tr></table><p>A circular clock face of radius 13 cm has two straight metal support bars fixed as chords \\(AB\\) and \\(CD\\), with the lengths shown.</p></div>The perpendicular distance from the centre \\(O\\) to chord \\(AB\\) is:",
      options: ["12 cm","5 cm","6 cm","10 cm"],
      ans: "5 cm",
      reason: "Half of AB \\(=12\\): \\(d=\\sqrt{13^2-12^2}=5\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Chord</th><th>Length</th></tr><tr><td>\\(AB\\)</td><td>24 cm</td></tr><tr><td>\\(CD\\)</td><td>10 cm</td></tr></table><p>A circular clock face of radius 13 cm has two straight metal support bars fixed as chords \\(AB\\) and \\(CD\\), with the lengths shown.</p></div>The perpendicular distance from the centre \\(O\\) to chord \\(CD\\) is:",
      options: ["12 cm","5 cm","8 cm","10 cm"],
      ans: "12 cm",
      reason: "Half of CD \\(=5\\): \\(d=\\sqrt{13^2-5^2}=12\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Chord</th><th>Length</th></tr><tr><td>\\(AB\\)</td><td>24 cm</td></tr><tr><td>\\(CD\\)</td><td>10 cm</td></tr></table><p>A circular clock face of radius 13 cm has two straight metal support bars fixed as chords \\(AB\\) and \\(CD\\), with the lengths shown.</p></div>Since \\(AB\\) and \\(CD\\) are unequal in length, which statement correctly compares their distances from the centre?",
      options: ["\\(AB\\), being longer, is nearer to the centre than \\(CD\\)","\\(AB\\), being longer, is farther from the centre than \\(CD\\)","Both are equidistant from the centre","Cannot be determined"],
      ans: "\\(AB\\), being longer, is nearer to the centre than \\(CD\\)",
      reason: "The longer chord is nearer to the centre: AB is 5 cm away, CD is 12 cm away."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Chord</th><th>Length</th></tr><tr><td>\\(AB\\)</td><td>24 cm</td></tr><tr><td>\\(CD\\)</td><td>10 cm</td></tr></table><p>A circular clock face of radius 13 cm has two straight metal support bars fixed as chords \\(AB\\) and \\(CD\\), with the lengths shown.</p></div>If a third support bar \\(EF\\) is equidistant from the centre as \\(AB\\) (also 5 cm away), then \\(EF\\) must be:",
      options: ["Equal in length to \\(AB\\) (24 cm)","Equal in length to \\(CD\\) (10 cm)","Shorter than \\(CD\\)","Equal to the diameter"],
      ans: "Equal in length to \\(AB\\) (24 cm)",
      reason: "A chord 5 cm from the centre has the same length as AB (equidistant chords are equal): 24 cm."
    },
    {
      q: "<div class=\"stimulus\"><p>A circular running track has centre \\(O\\) and three markers \\(A\\), \\(B\\), \\(C\\) on it. The central angles are in the ratio \\(\\angle AOB:\\angle BOC:\\angle COA = 2:3:4\\), where these three angles make up the full circle.</p></div>The measure of \\(\\angle AOB\\) is:",
      options: ["60°","80°","100°","120°"],
      ans: "80°",
      reason: "\\(\\dfrac{2}{9}\\times360^\\circ=80^\\circ\\)."
    },
    {
      q: "<div class=\"stimulus\"><p>A circular running track has centre \\(O\\) and three markers \\(A\\), \\(B\\), \\(C\\) on it. The central angles are in the ratio \\(\\angle AOB:\\angle BOC:\\angle COA = 2:3:4\\), where these three angles make up the full circle.</p></div>The measure of \\(\\angle BOC\\) is:",
      options: ["90°","100°","120°","140°"],
      ans: "120°",
      reason: "\\(\\dfrac39\\times360^\\circ=120^\\circ\\)."
    },
    {
      q: "<div class=\"stimulus\"><p>A circular running track has centre \\(O\\) and three markers \\(A\\), \\(B\\), \\(C\\) on it. The central angles are in the ratio \\(\\angle AOB:\\angle BOC:\\angle COA = 2:3:4\\), where these three angles make up the full circle.</p></div>Since \\(\\angle BOC>\\angle AOB\\), by the relationship between central angles and chords, chord \\(BC\\) compares to chord \\(AB\\) as:",
      options: ["\\(BC\\) is longer than \\(AB\\)","\\(BC\\) is shorter than \\(AB\\)","\\(BC\\) equals \\(AB\\)","Cannot be determined"],
      ans: "\\(BC\\) is longer than \\(AB\\)",
      reason: "A larger central angle corresponds to a longer chord, so BC is longer than AB."
    },
    {
      q: "<div class=\"stimulus\"><p>A circular running track has centre \\(O\\) and three markers \\(A\\), \\(B\\), \\(C\\) on it. The central angles are in the ratio \\(\\angle AOB:\\angle BOC:\\angle COA = 2:3:4\\), where these three angles make up the full circle.</p></div>The reflex angle \\(\\angle AOC\\) measured going the long way round through \\(B\\) is:",
      options: ["160°","180°","200°","220°"],
      ans: "200°",
      reason: "Going through B the reflex angle is \\(80^\\circ+120^\\circ=200^\\circ\\)."
    }
    ];
  }
});
