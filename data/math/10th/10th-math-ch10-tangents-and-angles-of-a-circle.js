// Class 10 Math — Chapter 10: Tangents and Angles of a Circle
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch10",
  label: "Chapter 10: Tangents and Angles of a Circle",
  order: 10,
  questions: function () {
    return [
    {
      q: "A tangent line touches a circle at ...... point(s).",
      options: ["1","2","3","4"],
      ans: "1",
      reason: "A tangent touches a circle at exactly one point."
    },
    {
      q: "A tangent line is ...... to the radial segment (radius) at the point of contact.",
      options: ["Perpendicular","Parallel","Similar","Equal"],
      ans: "Perpendicular",
      reason: "A tangent is perpendicular to the radius at the point of contact."
    },
    {
      q: "How many tangents can be drawn to a circle from a point outside the circle?",
      options: ["3","Infinite","2","1"],
      ans: "2",
      reason: "Two tangents can be drawn from an external point."
    },
    {
      q: "If two tangents are drawn at the two ends of a diameter of a circle, they are:",
      options: ["Intersecting","Perpendicular","None of these","Parallel"],
      ans: "Parallel",
      reason: "Tangents at the ends of a diameter are both perpendicular to that diameter, so they are parallel."
    },
    {
      q: "The radius of a circle is 4 cm. The distance between the two tangents drawn at the outer ends of a diameter is:",
      options: ["4 cm","6 cm","2 cm","8 cm"],
      ans: "8 cm",
      reason: "The two tangents are parallel and are a diameter apart: \\(2\\times4=8\\) cm."
    },
    {
      q: "How many tangents can be drawn to a circle from a point lying on the circle itself?",
      options: ["Infinite","None","1","2"],
      ans: "1",
      reason: "Only one tangent can be drawn at a point on the circle."
    },
    {
      q: "The two tangents drawn from a point outside a circle are:",
      options: ["Not congruent","Perpendicular","Congruent","Parallel"],
      ans: "Congruent",
      reason: "Tangents from an external point are congruent."
    },
    {
      q: "If two circles touch externally, the distance between their centres is equal to the sum of their:",
      options: ["Areas","Diameters","Radii","Circumferences"],
      ans: "Radii",
      reason: "For external contact, the distance between centres \\(=r_1+r_2\\)."
    },
    {
      q: "If two congruent circles touch externally, the distance between their centres equals the ...... of a circle.",
      options: ["Sector","Diameter","Radius","Chord"],
      ans: "Diameter",
      reason: "Congruent circles touching externally: distance \\(=r+r=2r\\), i.e. the diameter."
    },
    {
      q: "Two circles of radii 1.4 cm and 2.5 cm touch internally. The distance between their centres is:",
      options: ["3.9 cm","1.1 cm","2.5 cm","1.4 cm"],
      ans: "1.1 cm",
      reason: "Internal contact: distance \\(=2.5-1.4=1.1\\) cm."
    },
    {
      q: "The angle subtended by an arc at the centre of a circle is called a(n) ...... angle.",
      options: ["Central","Inscribed","Straight","Reflex"],
      ans: "Central",
      reason: "An angle subtended by an arc at the centre is a central angle."
    },
    {
      q: "An angle inscribed in a semicircle is:",
      options: ["0°","45°","180°","90°"],
      ans: "90°",
      reason: "An angle in a semicircle is a right angle: \\(90^\\circ\\)."
    },
    {
      q: "If the central angle of a minor arc of a circle is 100°, the angle inscribed in the corresponding major arc is:",
      options: ["50°","200°","100°","75°"],
      ans: "50°",
      reason: "The inscribed angle is half the central angle: \\(\\tfrac12(100^\\circ)=50^\\circ\\)."
    },
    {
      q: "The central angle of a minor arc of a circle is always:",
      options: ["< 180°","< 360°","> 180°","> 360°"],
      ans: "< 180°",
      reason: "A minor arc has a central angle less than \\(180^\\circ\\)."
    },
    {
      q: "The central angle of a major arc of a circle is always:",
      options: ["< 90°","> 180°","> 90°","< 180°"],
      ans: "> 180°",
      reason: "A major arc has a central angle greater than \\(180^\\circ\\)."
    },
    {
      q: "All angles inscribed in the same segment of a circle are:",
      options: ["Equal","Obtuse","Supplementary","Acute"],
      ans: "Equal",
      reason: "Angles in the same segment are equal."
    },
    {
      q: "ABCD is a cyclic quadrilateral and ∠A = 60°. Then ∠C equals:",
      options: ["180°","120°","150°","60°"],
      ans: "120°",
      reason: "Opposite angles of a cyclic quadrilateral are supplementary: \\(\\angle C=180^\\circ-60^\\circ=120^\\circ\\)."
    },
    {
      q: "An exterior angle of a cyclic quadrilateral is ...... the interior opposite angle.",
      options: ["Greater than","Supplement of","Equal to","Less than"],
      ans: "Equal to",
      reason: "An exterior angle of a cyclic quadrilateral equals the interior opposite angle."
    },
    {
      q: "The inscribed angle standing on a quadrant (quarter) of a circle is:",
      options: ["90°","130°","145°","45°"],
      ans: "45°",
      reason: "A quadrant is a \\(90^\\circ\\) arc, so the inscribed angle is \\(\\tfrac12(90^\\circ)=45^\\circ\\)."
    },
    {
      q: "In a circle with centre O, an inscribed angle is 47° standing on the same arc as a central angle θ. The value of θ is:",
      options: ["94°","47°","45°","23.5°"],
      ans: "94°",
      reason: "The central angle is twice the inscribed angle: \\(2\\times47^\\circ=94^\\circ\\)."
    },
    {
      q: "A line that touches a circle at exactly one point is called a:",
      options: ["Chord","Diameter","Secant","Tangent"],
      ans: "Tangent",
      reason: "A line touching a circle at exactly one point is a tangent."
    },
    {
      q: "The point at which a tangent touches a circle is called the:",
      options: ["Vertex","Centre","Point of contact","Focus"],
      ans: "Point of contact",
      reason: "The point where a tangent touches the circle is the point of contact."
    },
    {
      q: "A line segment joining the centre of a circle to the point of contact of a tangent is called a:",
      options: ["Chord","Secant","Radial segment","Diagonal"],
      ans: "Radial segment",
      reason: "The segment from the centre to the point of contact is a radial segment."
    },
    {
      q: "Two circles that touch each other such that one lies outside the other are said to touch:",
      options: ["Concentrically","Externally","Internally","Collinearly"],
      ans: "Externally",
      reason: "Circles touching with one outside the other touch externally."
    },
    {
      q: "Two circles that touch each other such that one lies inside the other are said to touch:",
      options: ["Tangentially only","Externally","Concentrically","Internally"],
      ans: "Internally",
      reason: "Circles touching with one inside the other touch internally."
    },
    {
      q: "A common tangent that does not cross the line segment joining the centres of two circles is called a:",
      options: ["Radial tangent","Transverse common tangent","Direct common tangent","Secant line"],
      ans: "Direct common tangent",
      reason: "A common tangent not crossing the line of centres is a direct common tangent."
    },
    {
      q: "A common tangent that crosses the line segment joining the centres of two circles is called a:",
      options: ["External tangent","Direct common tangent","Radial tangent","Transverse common tangent"],
      ans: "Transverse common tangent",
      reason: "A common tangent crossing the line of centres is a transverse common tangent."
    },
    {
      q: "The angle in a segment of a circle greater than a semicircle is always:",
      options: ["Equal to a right angle","Greater than a right angle","Equal to a straight angle","Less than a right angle"],
      ans: "Less than a right angle",
      reason: "The angle in a major segment is half a minor central angle, so it is less than a right angle."
    },
    {
      q: "The angle in a segment of a circle less than a semicircle is always:",
      options: ["Less than a right angle","Greater than a right angle","Equal to a right angle","Undefined"],
      ans: "Greater than a right angle",
      reason: "The angle in a minor segment is greater than a right angle."
    },
    {
      q: "A quadrilateral whose all four vertices lie on a circle is called a:",
      options: ["Regular quadrilateral","Cyclic quadrilateral","Tangential quadrilateral","Inscribed triangle"],
      ans: "Cyclic quadrilateral",
      reason: "A quadrilateral with all four vertices on a circle is a cyclic quadrilateral."
    },
    {
      q: "In any cyclic quadrilateral, the sum of each pair of opposite angles is:",
      options: ["90°","270°","360°","180°"],
      ans: "180°",
      reason: "Opposite angles of a cyclic quadrilateral sum to \\(180^\\circ\\)."
    },
    {
      q: "Theorem 10.1 states that if a line is drawn perpendicular to a radial segment of a circle at its outer end point, then the line is:",
      options: ["A chord of the circle","Tangent to the circle","A diameter","Parallel to another radius"],
      ans: "Tangent to the circle",
      reason: "A line perpendicular to a radial segment at its outer end is a tangent (Theorem 10.1)."
    },
    {
      q: "Theorem 10.2 states that the tangent to a circle and the radial segment joining the point of contact and the centre are:",
      options: ["Equal in length","Collinear","Parallel","Perpendicular to each other"],
      ans: "Perpendicular to each other",
      reason: "The tangent is perpendicular to the radial segment at the point of contact (Theorem 10.2)."
    },
    {
      q: "Theorem 10.3 states that the two tangents drawn to a circle from a point outside the circle are:",
      options: ["Unequal in length","Perpendicular","Parallel","Equal in length"],
      ans: "Equal in length",
      reason: "Tangents from an external point are equal in length (Theorem 10.3)."
    },
    {
      q: "By the corollary of Theorem 10.3, the two tangents from an external point make equal angles with the line joining that point to the:",
      options: ["Nearest point of tangency","Farthest chord","Centre","Diameter’s midpoint"],
      ans: "Centre",
      reason: "The two tangents make equal angles with the line joining the external point to the centre."
    },
    {
      q: "Theorem 10.4 gives the distance between centres of two circles touching externally as:",
      options: ["Product of radii","Sum of radii","Average of radii","Difference of radii"],
      ans: "Sum of radii",
      reason: "External contact: distance between centres \\(=r_1+r_2\\)."
    },
    {
      q: "Theorem 10.5 gives the distance between centres of two circles touching internally as:",
      options: ["Product of radii","Difference of radii","Sum of radii","Twice the smaller radius"],
      ans: "Difference of radii",
      reason: "Internal contact: distance between centres \\(=r_1-r_2\\)."
    },
    {
      q: "Theorem 10.7 states that the central angle of a minor arc of a circle is ...... the angle subtended by the corre- sponding major arc.",
      options: ["Double of","Equal to","Triple of","Half of"],
      ans: "Double of",
      reason: "The central angle of a minor arc is double the angle at the major arc."
    },
    {
      q: "Theorem 10.8 states that any two angles in the same segment of a circle are:",
      options: ["Complementary","Equal","Unequal","Supplementary"],
      ans: "Equal",
      reason: "Angles in the same segment are equal."
    },
    {
      q: "Theorem 10.9 states that the angle in a semicircle is:",
      options: ["180°","45°","90°","60°"],
      ans: "90°",
      reason: "The angle in a semicircle is \\(90^\\circ\\)."
    },
    {
      q: "A key fact used in cyclic quadrilateral problems: a cyclic trapezium is:",
      options: ["Isosceles, with equal non-parallel sides and equal diagonals","Scalene","Always a square","Impossible"],
      ans: "Isosceles, with equal non-parallel sides and equal diagonals",
      reason: "A cyclic trapezium is isosceles: the non-parallel sides and the diagonals are equal."
    },
    {
      q: "A point P is at a distance of 5 cm from the centre O of a circle of radius 3 cm. The length of the tangent drawn from P to the circle is: O P5 cm",
      options: ["5 cm","2 cm","6 cm","4 cm"],
      ans: "4 cm",
      reason: "\\(PT=\\sqrt{OP^2-r^2}=\\sqrt{25-9}=4\\) cm."
    },
    {
      q: "A point P is at a distance of 13 cm from the centre O of a circle of radius 5 cm. The length of the tangent drawn from P to the circle is: O P13 cm",
      options: ["13 cm","12 cm","14 cm","10 cm"],
      ans: "12 cm",
      reason: "\\(\\sqrt{13^2-5^2}=12\\) cm."
    },
    {
      q: "A point P is at a distance of 10 cm from the centre O of a circle of radius 6 cm. The length of the tangent drawn from P to the circle is: O P10 cm",
      options: ["10 cm","9 cm","8 cm","6 cm"],
      ans: "8 cm",
      reason: "\\(\\sqrt{10^2-6^2}=8\\) cm."
    },
    {
      q: "A point P is at a distance of 17 cm from the centre O of a circle of radius 8 cm. The length of the tangent drawn from P to the circle is: O P17 cm",
      options: ["13 cm","17 cm","15 cm","16 cm"],
      ans: "15 cm",
      reason: "\\(\\sqrt{17^2-8^2}=15\\) cm."
    },
    {
      q: "A point P is at a distance of 25 cm from the centre O of a circle of radius 7 cm. The length of the tangent drawn from P to the circle is: O P25 cm",
      options: ["26 cm","24 cm","25 cm","22 cm"],
      ans: "24 cm",
      reason: "\\(\\sqrt{25^2-7^2}=24\\) cm."
    },
    {
      q: "A point P is at a distance of 15 cm from the centre O of a circle of radius 9 cm. The length of the tangent drawn from P to the circle is: O P15 cm",
      options: ["15 cm","12 cm","14 cm","10 cm"],
      ans: "12 cm",
      reason: "\\(\\sqrt{15^2-9^2}=12\\) cm."
    },
    {
      q: "A point P is at a distance of 20 cm from the centre O of a circle of radius 12 cm. The length of the tangent drawn from P to the circle is: O P20 cm",
      options: ["14 cm","20 cm","18 cm","16 cm"],
      ans: "16 cm",
      reason: "\\(\\sqrt{20^2-12^2}=16\\) cm."
    },
    {
      q: "A point P is at a distance of 26 cm from the centre O of a circle of radius 10 cm. The length of the tangent drawn from P to the circle is: O P26 cm",
      options: ["22 cm","26 cm","24 cm","25 cm"],
      ans: "24 cm",
      reason: "\\(\\sqrt{26^2-10^2}=24\\) cm."
    },
    {
      q: "A point P is at a distance of 37 cm from the centre O of a circle of radius 12 cm. The length of the tangent drawn from P to the circle is: O P37 cm",
      options: ["35 cm","37 cm","36 cm","33 cm"],
      ans: "35 cm",
      reason: "\\(\\sqrt{37^2-12^2}=35\\) cm."
    },
    {
      q: "A point P is at a distance of 29 cm from the centre O of a circle of radius 20 cm. The length of the tangent drawn from P to the circle is: O P29 cm",
      options: ["29 cm","19 cm","23 cm","21 cm"],
      ans: "21 cm",
      reason: "\\(\\sqrt{29^2-20^2}=21\\) cm."
    },
    {
      q: "Two circles of radii 3 cm and 5 cm touch each other externally. The distance between their centres is:",
      options: ["8 cm","2 cm","6 cm","10 cm"],
      ans: "8 cm",
      reason: "External: \\(3+5=8\\) cm."
    },
    {
      q: "Two circles of radii 3 cm and 5 cm touch each other internally. The distance between their centres is:",
      options: ["2 cm","10 cm","8 cm","6 cm"],
      ans: "2 cm",
      reason: "Internal: \\(5-3=2\\) cm."
    },
    {
      q: "Two circles of radii 4 cm and 6 cm touch each other externally. The distance between their centres is:",
      options: ["2 cm","12 cm","8 cm","10 cm"],
      ans: "10 cm",
      reason: "External: \\(4+6=10\\) cm."
    },
    {
      q: "Two circles of radii 4 cm and 6 cm touch each other internally. The distance between their centres is:",
      options: ["10 cm","8 cm","12 cm","2 cm"],
      ans: "2 cm",
      reason: "Internal: \\(6-4=2\\) cm."
    },
    {
      q: "Two circles of radii 2.5 cm and 3.5 cm touch each other externally. The distance between their centres is:",
      options: ["1 cm","7 cm","6 cm","5 cm"],
      ans: "6 cm",
      reason: "External: \\(2.5+3.5=6\\) cm."
    },
    {
      q: "Two circles of radii 2.5 cm and 3.5 cm touch each other internally. The distance between their centres is:",
      options: ["6 cm","1 cm","5 cm","7 cm"],
      ans: "1 cm",
      reason: "Internal: \\(3.5-2.5=1\\) cm."
    },
    {
      q: "Two circles of radii 6 cm and 9 cm touch each other externally. The distance between their centres is:",
      options: ["18 cm","15 cm","3 cm","12 cm"],
      ans: "15 cm",
      reason: "External: \\(6+9=15\\) cm."
    },
    {
      q: "Two circles of radii 6 cm and 9 cm touch each other internally. The distance between their centres is:",
      options: ["12 cm","18 cm","3 cm","15 cm"],
      ans: "3 cm",
      reason: "Internal: \\(9-6=3\\) cm."
    },
    {
      q: "Two circles of radii 7 cm and 10 cm touch each other externally. The distance between their centres is:",
      options: ["20 cm","3 cm","17 cm","14 cm"],
      ans: "17 cm",
      reason: "External: \\(7+10=17\\) cm."
    },
    {
      q: "Two circles of radii 7 cm and 10 cm touch each other internally. The distance between their centres is:",
      options: ["3 cm","17 cm","14 cm","20 cm"],
      ans: "3 cm",
      reason: "Internal: \\(10-7=3\\) cm."
    },
    {
      q: "Two circles of radii 1.5 cm and 2.5 cm touch each other externally. The distance between their centres is:",
      options: ["1 cm","3 cm","4 cm","5 cm"],
      ans: "4 cm",
      reason: "External: \\(1.5+2.5=4\\) cm."
    },
    {
      q: "Two circles of radii 1.5 cm and 2.5 cm touch each other internally. The distance between their centres is:",
      options: ["1 cm","3 cm","5 cm","4 cm"],
      ans: "1 cm",
      reason: "Internal: \\(2.5-1.5=1\\) cm."
    },
    {
      q: "Two circles of radii 8 cm and 11 cm touch each other externally. The distance between their centres is:",
      options: ["16 cm","22 cm","19 cm","3 cm"],
      ans: "19 cm",
      reason: "External: \\(8+11=19\\) cm."
    },
    {
      q: "Two circles of radii 8 cm and 11 cm touch each other internally. The distance between their centres is:",
      options: ["22 cm","16 cm","3 cm","19 cm"],
      ans: "3 cm",
      reason: "Internal: \\(11-8=3\\) cm."
    },
    {
      q: "Two circles of radii 4.5 cm and 5.5 cm touch each other externally. The distance between their centres is:",
      options: ["10 cm","1 cm","9 cm","11 cm"],
      ans: "10 cm",
      reason: "External: \\(4.5+5.5=10\\) cm."
    },
    {
      q: "Two circles of radii 4.5 cm and 5.5 cm touch each other internally. The distance between their centres is:",
      options: ["10 cm","9 cm","1 cm","11 cm"],
      ans: "1 cm",
      reason: "Internal: \\(5.5-4.5=1\\) cm."
    },
    {
      q: "Two circles of radii 3.2 cm and 4.8 cm touch each other externally. The distance between their centres is:",
      options: ["1.6 cm","9.6 cm","8 cm","6.4 cm"],
      ans: "8 cm",
      reason: "External: \\(3.2+4.8=8\\) cm."
    },
    {
      q: "Two circles of radii 3.2 cm and 4.8 cm touch each other internally. The distance between their centres is:",
      options: ["6.4 cm","9.6 cm","8 cm","1.6 cm"],
      ans: "1.6 cm",
      reason: "Internal: \\(4.8-3.2=1.6\\) cm."
    },
    {
      q: "Two circles of radii 9 cm and 13 cm touch each other externally. The distance between their centres is:",
      options: ["4 cm","18 cm","26 cm","22 cm"],
      ans: "22 cm",
      reason: "External: \\(9+13=22\\) cm."
    },
    {
      q: "Two circles of radii 9 cm and 13 cm touch each other internally. The distance between their centres is:",
      options: ["22 cm","26 cm","18 cm","4 cm"],
      ans: "4 cm",
      reason: "Internal: \\(13-9=4\\) cm."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 70°. The measure of ∠R is:",
      options: ["100°","70°","120°","110°"],
      ans: "110°",
      reason: "\\(\\angle R=180^\\circ-70^\\circ=110^\\circ\\)."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 65°. The measure of ∠R is:",
      options: ["65°","115°","125°","105°"],
      ans: "115°",
      reason: "\\(180^\\circ-65^\\circ=115^\\circ\\)."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 85°. The measure of ∠R is:",
      options: ["105°","95°","85°","110°"],
      ans: "95°",
      reason: "\\(180^\\circ-85^\\circ=95^\\circ\\)."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 55°. The measure of ∠R is:",
      options: ["55°","125°","115°","135°"],
      ans: "125°",
      reason: "\\(180^\\circ-55^\\circ=125^\\circ\\)."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 100°. The measure of ∠R is:",
      options: ["100°","80°","90°","70°"],
      ans: "80°",
      reason: "\\(180^\\circ-100^\\circ=80^\\circ\\)."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 120°. The measure of ∠R is:",
      options: ["70°","60°","50°","120°"],
      ans: "60°",
      reason: "\\(180^\\circ-120^\\circ=60^\\circ\\)."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 75°. The measure of ∠R is:",
      options: ["115°","95°","75°","105°"],
      ans: "105°",
      reason: "\\(180^\\circ-75^\\circ=105^\\circ\\)."
    },
    {
      q: "PQRS is a cyclic quadrilateral with ∠P = 40°. The measure of ∠R is:",
      options: ["140°","130°","150°","40°"],
      ans: "140°",
      reason: "\\(180^\\circ-40^\\circ=140^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 80°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["40°","80°","35°","20°"],
      ans: "40°",
      reason: "Inscribed angle \\(=\\tfrac12(80^\\circ)=40^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 120°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["60°","120°","30°","55°"],
      ans: "60°",
      reason: "\\(\\tfrac12(120^\\circ)=60^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 140°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["140°","70°","35°","65°"],
      ans: "70°",
      reason: "\\(\\tfrac12(140^\\circ)=70^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 100°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["25°","45°","100°","50°"],
      ans: "50°",
      reason: "\\(\\tfrac12(100^\\circ)=50^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 160°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["160°","75°","80°","40°"],
      ans: "80°",
      reason: "\\(\\tfrac12(160^\\circ)=80^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 60°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["30°","25°","60°","15°"],
      ans: "30°",
      reason: "\\(\\tfrac12(60^\\circ)=30^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 90°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["45°","90°","40°","50°"],
      ans: "45°",
      reason: "\\(\\tfrac12(90^\\circ)=45^\\circ\\)."
    },
    {
      q: "An arc of a circle subtends a central angle of 150°. The angle subtended by the same arc at any point on the remaining (major) part of the circle is:",
      options: ["75°","80°","150°","70°"],
      ans: "75°",
      reason: "\\(\\tfrac12(150^\\circ)=75^\\circ\\)."
    },
    {
      q: "If the distance between the centres of two circles equals the sum of their radii, the circles:",
      options: ["Touch internally","Do not intersect","Are concentric","Touch externally"],
      ans: "Touch externally",
      reason: "Distance \\(=r_1+r_2\\): the circles touch externally."
    },
    {
      q: "If the distance between the centres of two circles equals the difference of their radii, the circles:",
      options: ["Touch externally","Do not touch","Touch internally","Intersect at two points"],
      ans: "Touch internally",
      reason: "Distance \\(=|r_1-r_2|\\): the circles touch internally."
    },
    {
      q: "If the distance between the centres of two circles is greater than the sum of their radii, the circles:",
      options: ["Touch internally","Intersect at two points","Do not intersect","Touch externally"],
      ans: "Do not intersect",
      reason: "Distance \\(>r_1+r_2\\): the circles are apart and do not intersect."
    },
    {
      q: "A tangent to a circle at a point P makes an angle of 90° with the:",
      options: ["Radius through P","Chord through P","Nearest tangent","Diameter not through P"],
      ans: "Radius through P",
      reason: "A tangent is perpendicular to the radius through the point of contact."
    },
    {
      q: "From an external point, the two tangent segments drawn to a circle are equal; this is a direct consequence of the congruence of two:",
      options: ["Equilateral triangles","Right-angled triangles sharing the hypotenuse to the centre","Scalene triangles","Isosceles triangles"],
      ans: "Right-angled triangles sharing the hypotenuse to the centre",
      reason: "\\(\\triangle OTP\\) and \\(\\triangle OT'P\\) are right-angled, share hypotenuse \\(OP\\) and have equal radii, so they are congruent, giving equal tangents."
    },
    {
      q: "If PA and PB are tangents from external point P to a circle with centre O, then \\(\\angle APO\\) and \\(\\angle BPO\\) are:",
      options: ["Unequal","Equal","Supplementary","Right angles"],
      ans: "Equal",
      reason: "By congruence of \\(\\triangle OAP\\) and \\(\\triangle OBP\\), \\(\\angle APO=\\angle BPO\\)."
    },
    {
      q: "The angle between a tangent and the diameter through the point of contact is:",
      options: ["180°","60°","45°","90°"],
      ans: "90°",
      reason: "The tangent is perpendicular to the radius, and the diameter through the point of contact lies along that radius: \\(90^\\circ\\)."
    },
    {
      q: "How many common tangents can generally be drawn to two circles that intersect at two distinct points?",
      options: ["2","3","4","0"],
      ans: "2",
      reason: "Two circles that intersect at two points have 2 common tangents."
    },
    {
      q: "How many common tangents can be drawn to two circles that touch each other externally?",
      options: ["2","1","3","4"],
      ans: "3",
      reason: "Externally touching circles have 3 common tangents (2 direct and 1 at the point of contact)."
    },
    {
      q: "How many common tangents can be drawn to two circles, one lying entirely inside the other without touching?",
      options: ["0","2","4","1"],
      ans: "0",
      reason: "One circle entirely inside the other (not touching) has no common tangent."
    },
    {
      q: "If \\(\\angle ABC\\) and \\(\\angle ADC\\) are angles in the same segment standing on the same arc AC of a circle, and \\(\\angle ABC\\) = 55°, then \\(\\angle ADC\\) is:",
      options: ["110°","35°","125°","55°"],
      ans: "55°",
      reason: "Angles in the same segment on the same arc are equal: \\(\\angle ADC=55^\\circ\\)."
    },
    {
      q: "In a cyclic quadrilateral ABCD , if ∠B = 3∠D, then ∠D equals:",
      options: ["60°","45°","30°","90°"],
      ans: "45°",
      reason: "\\(\\angle B+\\angle D=180^\\circ\\), so \\(3\\angle D+\\angle D=180^\\circ\\Rightarrow\\angle D=45^\\circ\\)."
    },
    {
      q: "An angle inscribed in a major segment of a circle is always:",
      options: ["Acute","A right angle","Reflex","Obtuse"],
      ans: "Acute",
      reason: "An angle in a major segment is half a minor central angle, so it is acute."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Distance from \\(P\\) to centre \\(O\\) of the pond</th><th>Radius of the pond</th></tr><tr><td>17 m</td><td>8 m</td></tr></table><p>A circular pond has centre \\(O\\). A person stands at point \\(P\\) outside the pond and wants to lay a straight rope from \\(P\\) that just touches the edge of the pond (i.e. is tangent to the circle) at point \\(T\\).</p></div>In right triangle \\(OTP\\), which side is the hypotenuse?",
      options: ["\\(OT\\)","\\(TP\\)","\\(OP\\)","None, it is not a right triangle"],
      ans: "\\(OP\\)",
      reason: "The right angle is at \\(T\\) (radius \\(\\perp\\) tangent), so \\(OP\\) is the hypotenuse."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Distance from \\(P\\) to centre \\(O\\) of the pond</th><th>Radius of the pond</th></tr><tr><td>17 m</td><td>8 m</td></tr></table><p>A circular pond has centre \\(O\\). A person stands at point \\(P\\) outside the pond and wants to lay a straight rope from \\(P\\) that just touches the edge of the pond (i.e. is tangent to the circle) at point \\(T\\).</p></div>The length of the rope \\(PT\\) is:",
      options: ["9 m","12 m","15 m","19 m"],
      ans: "15 m",
      reason: "\\(PT=\\sqrt{17^2-8^2}=\\sqrt{225}=15\\) m."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Distance from \\(P\\) to centre \\(O\\) of the pond</th><th>Radius of the pond</th></tr><tr><td>17 m</td><td>8 m</td></tr></table><p>A circular pond has centre \\(O\\). A person stands at point \\(P\\) outside the pond and wants to lay a straight rope from \\(P\\) that just touches the edge of the pond (i.e. is tangent to the circle) at point \\(T\\).</p></div>If the person moves to a new point \\(P'\\) with \\(OP'=10\\) m, is it possible to draw a tangent from \\(P'\\) to the pond?",
      options: ["Yes, since \\(OP'\\) is greater than the radius","No, since \\(OP'\\) is less than the radius","Only if \\(OP'\\) equals the radius","Cannot be determined"],
      ans: "Yes, since \\(OP'\\) is greater than the radius",
      reason: "A tangent can be drawn from any point outside the circle, and \\(10>8\\), so \\(P'\\) is outside."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Distance from \\(P\\) to centre \\(O\\) of the pond</th><th>Radius of the pond</th></tr><tr><td>17 m</td><td>8 m</td></tr></table><p>A circular pond has centre \\(O\\). A person stands at point \\(P\\) outside the pond and wants to lay a straight rope from \\(P\\) that just touches the edge of the pond (i.e. is tangent to the circle) at point \\(T\\).</p></div>For that new point \\(P'\\) (\\(OP'=10\\) m), the tangent length is:",
      options: ["5 m","6 m","7 m","8 m"],
      ans: "6 m",
      reason: "\\(\\sqrt{10^2-8^2}=6\\) m."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Measure</th></tr><tr><td>\\(\\angle A\\)</td><td>100°</td></tr><tr><td>\\(\\angle B\\)</td><td>75°</td></tr></table><p>A garden is laid out in the shape of a cyclic quadrilateral \\(ABCD\\), with all four corners lying on a circular boundary fence. Two of the interior angles are measured as shown.</p></div>The measure of \\(\\angle C\\) (opposite \\(\\angle A\\)) is:",
      options: ["70°","80°","90°","100°"],
      ans: "80°",
      reason: "\\(\\angle C=180^\\circ-100^\\circ=80^\\circ\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Measure</th></tr><tr><td>\\(\\angle A\\)</td><td>100°</td></tr><tr><td>\\(\\angle B\\)</td><td>75°</td></tr></table><p>A garden is laid out in the shape of a cyclic quadrilateral \\(ABCD\\), with all four corners lying on a circular boundary fence. Two of the interior angles are measured as shown.</p></div>The measure of \\(\\angle D\\) (opposite \\(\\angle B\\)) is:",
      options: ["95°","100°","105°","110°"],
      ans: "105°",
      reason: "\\(\\angle D=180^\\circ-75^\\circ=105^\\circ\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Measure</th></tr><tr><td>\\(\\angle A\\)</td><td>100°</td></tr><tr><td>\\(\\angle B\\)</td><td>75°</td></tr></table><p>A garden is laid out in the shape of a cyclic quadrilateral \\(ABCD\\), with all four corners lying on a circular boundary fence. Two of the interior angles are measured as shown.</p></div>The sum of all four interior angles \\(\\angle A+\\angle B+\\angle C+\\angle D\\) equals:",
      options: ["270°","360°","180°","450°"],
      ans: "360°",
      reason: "The interior angles of any quadrilateral sum to \\(360^\\circ\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Angle</th><th>Measure</th></tr><tr><td>\\(\\angle A\\)</td><td>100°</td></tr><tr><td>\\(\\angle B\\)</td><td>75°</td></tr></table><p>A garden is laid out in the shape of a cyclic quadrilateral \\(ABCD\\), with all four corners lying on a circular boundary fence. Two of the interior angles are measured as shown.</p></div>If side \\(AB\\) is extended beyond \\(B\\) to a point \\(E\\), the exterior angle \\(\\angle CBE\\) equals:",
      options: ["75°","80°","100°","105°"],
      ans: "105°",
      reason: "The exterior angle at \\(B\\) equals the interior opposite angle \\(D=105^\\circ\\) (also \\(180^\\circ-75^\\circ\\))."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Gear</th><th>Radius</th></tr><tr><td>Gear 1</td><td>9 cm</td></tr><tr><td>Gear 2</td><td>4 cm</td></tr></table><p>Two circular gears with the radii shown are mounted so that their edges just touch.</p></div>If the gears touch externally, the distance between their centres is:",
      options: ["5 cm","9 cm","13 cm","36 cm"],
      ans: "13 cm",
      reason: "External contact: \\(9+4=13\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Gear</th><th>Radius</th></tr><tr><td>Gear 1</td><td>9 cm</td></tr><tr><td>Gear 2</td><td>4 cm</td></tr></table><p>Two circular gears with the radii shown are mounted so that their edges just touch.</p></div>If instead the smaller gear touches the larger gear internally (sitting inside it), the distance between their centres is:",
      options: ["4 cm","5 cm","9 cm","13 cm"],
      ans: "5 cm",
      reason: "Internal contact: \\(9-4=5\\) cm."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Gear</th><th>Radius</th></tr><tr><td>Gear 1</td><td>9 cm</td></tr><tr><td>Gear 2</td><td>4 cm</td></tr></table><p>Two circular gears with the radii shown are mounted so that their edges just touch.</p></div>When the gears touch externally, the number of common tangents that can be drawn to both circles is:",
      options: ["2","3","4","1"],
      ans: "3",
      reason: "Externally touching circles have 3 common tangents."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Gear</th><th>Radius</th></tr><tr><td>Gear 1</td><td>9 cm</td></tr><tr><td>Gear 2</td><td>4 cm</td></tr></table><p>Two circular gears with the radii shown are mounted so that their edges just touch.</p></div>When one gear touches the other internally, the number of common tangents is:",
      options: ["0","1","2","4"],
      ans: "1",
      reason: "Internally touching circles have exactly 1 common tangent."
    }
    ];
  }
});
