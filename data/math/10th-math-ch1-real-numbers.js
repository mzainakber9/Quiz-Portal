// Converted from the original math10th-set1.js
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch1",
  label: "Chapter 1: Real & Rational Numbers (sample)",
  order: 1,
  questions: function () {
    return [
    {
      q: "Two linear factors of x² − 15x + 56 are:",
      options: ["(x−7) and (x+8)", "(x−6) and (x−9)", "(x−7) and (x−8)", "(x+7) and (x+8)"],
      ans: "(x−7) and (x−8)",
      reason: "Since 7 + 8 = 15 and 7 × 8 = 56, the factorization is (x−7)(x−8)."
    },

    {
      q: "The product of cube roots of unity is:",
      options: ["0", "1", "-1", "3"],
      ans: "1",
      reason: "The cube roots of unity are 1, ω, and ω², and their product is 1."
    },

    {
      q: "If α, β are the roots of px² + qx + r = 0, then sum of the roots 2α and 2β is:",
      options: ["-q/p", "r/p", "-2q/p", "-q/2p"],
      ans: "-2q/p",
      reason: "Since α + β = -q/p, then 2α + 2β = 2(α + β) = -2q/p."
    },

    {
      q: "The value of x in proportion 4:x :: 5:15 is:",
      options: ["75/4", "4/3", "3/4", "12"],
      ans: "12",
      reason: "Using 4/x = 5/15, cross multiplication gives 60 = 5x, so x = 12."
    },

    {
      q: "Partial fractions of (x²+1)/((x+1)(x−1)) are of the form:",
      options: ["A/(x+1) + B/(x−1)", "1 + A/(x+1) + B/(x−1)", "1 + A/(x+1) + (Bx+C)/(x−1)", "(Ax+B)/(x+1) + C/(x−1)"],
      ans: "1 + A/(x+1) + B/(x−1)",
      reason: "Since numerator and denominator have same degree, division is done first, giving quotient 1 plus proper fractions."
    },

    {
      q: "If A ⊆ B, then A ∩ B is equal to:",
      options: ["A", "B", "Φ", "U"],
      ans: "A",
      reason: "All elements of A are in B, so their intersection is A."
    },

    {
      q: "The range of the relation R={(1,3),(2,2),(3,1),(4,4)} is:",
      options: ["{1,2,3}", "{3,2,4}", "{1,2,3,4}", "{1,3,4}"],
      ans: "{1,2,3,4}",
      reason: "Range consists of second elements of ordered pairs: 3,2,1,4."
    },

    {
      q: "The most frequent occurring observation in a data set is called:",
      options: ["Arithmetic Mean", "Median", "Mode", "Harmonic Mean"],
      ans: "Mode",
      reason: "Mode is the value that appears most frequently."
    },

    {
      q: "sec θ × cos θ =",
      options: ["sin θ", "1/cos θ", "1/sin θ", "sin θ/cos θ"],
      ans: "1",
      reason: "Since sec θ = 1/cos θ, therefore sec θ × cos θ = 1."
    },

    {
      q: "Right bisector of the chord of a circle always passes through the ______ of circle.",
      options: ["Radius", "Circumference", "Centre", "Diameter"],
      ans: "Centre",
      reason: "Perpendicular bisector of any chord passes through the center."
    },

    {
      q: "Line segment joining any point of the circle to the center is called:",
      options: ["Circumference", "Diameter", "Radial Segment", "Perimeter"],
      ans: "Radial Segment",
      reason: "A line from center to circle is radius/radial segment."
    },

    {
      q: "A circle has only one:",
      options: ["Secant", "Chord", "Tangent", "Centre"],
      ans: "Centre",
      reason: "A circle has exactly one center."
    },

    {
      q: "Two chords in a circle subtending two congruent central angles are:",
      options: ["Incongruent", "Congruent", "Parallel", "Overlapping"],
      ans: "Congruent",
      reason: "Equal central angles subtend equal chords."
    },

    {
      q: "How many common tangents can be drawn for two disjoint circles:",
      options: ["1", "2", "3", "4"],
      ans: "4",
      reason: "Two disjoint circles have four common tangents."
    },

    {
      q: "The measure of external angle of a regular hexagon is:",
      options: ["π/6", "π/4", "π/3", "π/2"],
      ans: "π/3",
      reason: "Exterior angle = 2π/6 = π/3."
    },

    {
      q: "The solution set of equation 4x² − 16 = 0 is:",
      options: ["{±1}", "{±2}", "{±4}", "{±8}"],
      ans: "{±2}",
      reason: "4x² = 16 ⇒ x² = 4 ⇒ x = ±2."
    },

    {
      q: "If b² − 4ac < 0, then the roots of ax² + bx + c = 0 are:",
      options: ["Irrational", "Rational", "Equal", "Imaginary"],
      ans: "Imaginary",
      reason: "Negative discriminant means imaginary roots."
    },

    {
      q: "If α, β are the roots of x² − x − 1 = 0, then product of the roots 2α and 2β is:",
      options: ["-2", "2", "4", "-4"],
      ans: "-4",
      reason: "αβ = -1, so (2α)(2β)=4αβ=4(-1)=-4."
    },

    {
      q: "The fourth proportional w of x:y :: v:w is:",
      options: ["xy/v", "vy/x", "xvy", "x/vy"],
      ans: "vy/x",
      reason: "From x:y = v:w, cross multiply to get w = vy/x."
    },

    {
      q: "A fraction in which degree of numerator is less than denominator is called:",
      options: ["An equation", "An improper fraction", "An Identity", "A proper fraction"],
      ans: "A proper fraction",
      reason: "Proper rational fraction has numerator degree less than denominator degree."
    },

    {
      q: "If A ⊆ B, then A ∪ B is equal to:",
      options: ["A", "B", "Φ", "U"],
      ans: "B",
      reason: "Union of subset with superset is the superset."
    },

    {
      q: "Point (-2,-3) lies in the quadrant:",
      options: ["I", "II", "III", "IV"],
      ans: "III",
      reason: "Both coordinates negative means third quadrant."
    },

    {
      q: "The measure which determines the middle most observation in a data set is called:",
      options: ["Deciles", "Median", "Mode", "Range"],
      ans: "Median",
      reason: "Median gives the middle value."
    },

    {
      q: "1/2 cosec 45° =",
      options: ["1/(2√2)", "1/√2", "√2", "√3/2"],
      ans: "1/√2",
      reason: "cosec 45° = √2, so (1/2)(√2)=1/√2."
    },

    {
      q: "Through how many non-collinear points can a circle pass?",
      options: ["One", "Two", "Three", "None"],
      ans: "Three",
      reason: "Exactly one circle passes through three non-collinear points."
    },

    {
      q: "The circular region bounded by two radii and the corresponding arc is called:",
      options: ["Circumference", "Sector", "Diameter", "Segment"],
      ans: "Sector",
      reason: "A sector is bounded by two radii and an arc."
    },

    {
      q: "Tangents drawn at the ends of diameter of a circle are ______ to each other:",
      options: ["Parallel", "Non-parallel", "Collinear", "Perpendicular"],
      ans: "Parallel",
      reason: "Tangents at ends of diameter are parallel."
    },

    {
      q: "A 4 cm long chord subtends a central angle of 60°. The radial segment is:",
      options: ["1 cm", "2 cm", "3 cm", "4 cm"],
      ans: "4 cm",
      reason: "Chord = radius in a 60° subtended equilateral triangle."
    },

    {
      q: "The arcs opposite to incongruent central angles of a circle are always:",
      options: ["Congruent", "Incongruent", "Parallel", "Perpendicular"],
      ans: "Incongruent",
      reason: "Unequal central angles subtend unequal arcs."
    },

    {
      q: "How many tangents can be drawn from a point outside the circle?",
      options: ["1", "2", "3", "4"],
      ans: "2",
      reason: "Exactly two tangents can be drawn from an external point."
    },
    {
      q: "If (x−3)(x−1)=0 then the values of x are:",
      options: ["3, 1", "2, 0", "-3, -1", "-2, -1"],
      ans: "3, 1",
      reason: "If a product is zero, then each factor is zero: x−3=0 ⇒ x=3, and x−1=0 ⇒ x=1."
    },

    {
      q: "If roots of px² + qx + 3 = 0 are reciprocal of each other, then value of p is:",
      options: ["0", "-3", "2", "3"],
      ans: "3",
      reason: "For reciprocal roots, product = 1. So (c/a)=1 ⇒ 3/p=1 ⇒ p=3."
    },
    {
      q: "If discriminant of a quadratic equation is positive and perfect square then the roots are:",
      options: ["Complex", "Rational", "Irrational", "Equal"],
      ans: "Rational",
      reason: "Positive perfect square discriminant gives real and rational roots."
    },

    {
      q: "If a ∝ 1/b and b ∝ 1/c then:",
      options: ["a ∝ c", "b ∝ c", "abc ∝ c", "ac ∝ b"],
      ans: "a ∝ c",
      reason: "a ∝ 1/b and b ∝ 1/c ⇒ a ∝ c after substitution."
    },

    {
      q: "A fraction in which the degree of the numerator is greater or equal to degree of denominator is:",
      options: ["A Proper fraction", "An improper fraction", "Algebraic Expression", "An equation"],
      ans: "An improper fraction",
      reason: "If numerator degree ≥ denominator degree, it is an improper rational fraction."
    },

    {
      q: "If X and Y are disjoint sets, then X ∩ Y is equal to:",
      options: ["Y", "φ", "X", "Y ∩ X"],
      ans: "φ",
      reason: "Disjoint sets have no common elements, so intersection is empty set."
    },

    {
      q: "If x̄=8, Σx=5+5k and n=10 then value of k is:",
      options: ["15", "8", "17", "25"],
      ans: "15",
      reason: "x̄ = Σx / n ⇒ 8 = (5+5k)/10 ⇒ 80 = 5+5k ⇒ k = 15."
    },

    {
      q: "In given equilateral triangle the value of ∠Q is:",
      options: ["25°", "30°", "45°", "60°"],
      ans: "60°",
      reason: "All angles of an equilateral triangle are 60°."
    },

    {
      q: "If radius is 5cm and AB = 2cm then the value of chord is:",
      options: ["12cm", "8cm", "10cm", "4cm"],
      ans: "8cm",
      reason: "Using geometry of perpendicular from center, chord length comes as 8 cm."
    },

    {
      q: "The distance between the centres of two congruent touching circles externally is:",
      options: ["Twice diameter", "Radius", "Diameter", "Zero"],
      ans: "Diameter",
      reason: "For externally touching equal circles, distance = 2r = diameter."
    },

    {
      q: "If a chord subtends 60° central angle, then chord and radius are:",
      options: ["Congruent", "Incongruent", "Parallel", "Perpendicular"],
      ans: "Incongruent",
      reason: "Chord is shorter than diameter/radius relation, so not equal."
    },

    {
      q: "If O is centre, value of angle x is:",
      options: ["50°", "75°", "100°", "125°"],
      ans: "50°",
      reason: "Angle in triangle with given 30° and 20° gives 50°."
    },

    {
      q: "If distance between centres equals sum of radii, then circles will:",
      options: ["Touch internally", "Touch externally", "Do not intersect", "Intersect"],
      ans: "Touch each other externally",
      reason: "Sum of radii condition means external tangency."
    },

    {
      q: "The triangle with sides 5cm, 7cm and 8cm is:",
      options: ["Acute angled", "Obtuse angled", "Right angled", "Equiangular"],
      ans: "Obtuse angled",
      reason: "Using cosine rule, largest angle is greater than 90°."
    },

    {
      q: "If h: L → M mapping is given (a→3, b→4, c→1, d→2), then h is:",
      options: ["Injective function", "Surjective function", "Bijective function", "Not a function"],
      ans: "Bijective function",
      reason: "Each element has unique image and all elements of M are covered."
    },
    {
      q: "If (x - 3)(x - 1) = 0 then the values of x are:",
      options: ["3, 1", "2, 0", "-3, -1", "-2, -1"],
      ans: "3, 1",
      reason: "Each factor equals zero: x−3=0 ⇒ x=3, x−1=0 ⇒ x=1."
    },

    {
      q: "If roots of px² + qx + 3 = 0 are reciprocal of each other, then value of p is:",
      options: ["0", "-3", "2", "3"],
      ans: "3",
      reason: "Product of roots = c/a = 3/p = 1 ⇒ p = 3."
    },

    {
      q: "If discriminant of a quadratic equation is positive and perfect square then the roots are:",
      options: ["Complex", "Rational", "Irrational", "Equal"],
      ans: "Rational",
      reason: "Positive perfect square discriminant gives rational roots."
    },

    {
      q: "If a ∝ 1/b and b ∝ 1/c then:",
      options: ["a ∝ c", "b ∝ c", "abc ∝ c", "ac ∝ b"],
      ans: "a ∝ c",
      reason: "Substitution gives a directly proportional to c."
    },

    {
      q: "A fraction in which degree of numerator ≥ denominator is:",
      options: ["Proper fraction", "Improper fraction", "Algebraic Expression", "Equation"],
      ans: "Improper fraction",
      reason: "Degree condition defines improper rational fraction."
    },

    {
      q: "If X and Y are disjoint sets, then X ∩ Y is equal to:",
      options: ["Y", "ϕ", "X", "Y ∩ X"],
      ans: "ϕ",
      reason: "No common elements in disjoint sets."
    },

    {
      q: "If x̄ = 8, Σx = 5 + 5k and n = 10 then value of k is:",
      options: ["15", "8", "17", "25"],
      ans: "15",
      reason: "8 = (5+5k)/10 ⇒ k = 15."
    },

    {
      q: "In equilateral triangle, value of ∠Q is:",
      options: ["25°", "30°", "45°", "60°"],
      ans: "60°",
      reason: "All angles in equilateral triangle are 60°."
    },

    {
      q: "If radius = 5cm and distance from center to chord = 2cm then chord length is:",
      options: ["12cm", "8cm", "10cm", "4cm"],
      ans: "8cm",
      reason: "Using perpendicular from center formula gives 8cm."
    },

    {
      q: "Distance between centers of two externally touching congruent circles is:",
      options: ["Twice diameter", "Radius", "Diameter", "Zero"],
      ans: "Diameter",
      reason: "Distance = 2r = diameter."
    },

    {
      q: "Chord subtending 60° central angle has chord and radius:",
      options: ["Congruent", "Incongruent", "Parallel", "Perpendicular"],
      ans: "Incongruent",
      reason: "Chord is shorter than radius relation, not equal."
    },

    {
      q: "If O is center, value of angle x is:",
      options: ["50°", "75°", "100°", "125°"],
      ans: "50°",
      reason: "Angle sum from given 30° and 20° gives 50°."
    },

    {
      q: "If distance between centers equals sum of radii, circles:",
      options: ["Touch internally", "Touch externally", "Do not intersect", "Intersect"],
      ans: "Touch each other externally",
      reason: "Sum of radii condition = external tangency."
    },

    

{
  q: "The discriminant of x² - 3x - 4 = 0 is:",
  options: ["9", "12", "16", "25"],
  ans: "25",
  reason: "D = 9 + 16 = 25."
},

{
  q: "Horizontal component of velocity (20 m/s at 30°) is:",
  options: ["10 m/s", "17.3 m/s", "20 m/s", "0 m/s"],
  ans: "17.3 m/s",
  reason: "20 cos30 = 20 × √3/2 ≈ 17.3."
},

{
  q: "In triangle, a=10, b=15, α=32°, β is:",
  options: ["42.5°", "46.5°", "52.6°", "62.8°"],
  ans: "52.6°",
  reason: "Using sine rule."
},

{
  q: "Best curve for rainbow arcs is:",
  options: ["Straight line", "Parabola", "Circular arc", "Spiral"],
  ans: "Circular arc",
  reason: "Rainbows follow circular arcs."
},

{
  q: "Distance between centres (r=4cm,5cm touching externally) is:",
  options: ["1 cm", "4.5 cm", "9 cm", "20 cm"],
  ans: "9 cm",
  reason: "Sum of radii = 9 cm."
},

{
  q: "Probability of two tails when tossing two coins:",
  options: ["1/2", "1/4", "1/3", "1/6"],
  ans: "1/4",
  reason: "TT out of 4 outcomes."
},

{
  q: "Line of best fit equation is:",
  options: ["y=x²", "y=mx²+c", "y=mx+c", "x=y²"],
  ans: "y=mx+c",
  reason: "Linear regression equation."
},

{
  q: "Angle between tangent and radius at point is:",
  options: ["30°", "45°", "90°", "180°"],
  ans: "90°",
  reason: "Radius ⟂ tangent."
},
{
  q: "Simplify (2x²-2x)/(x+1) × (2x²+2x)/(x-1):",
  options: ["2x", "2x²", "4x", "4x²"],
  ans: "4x²",
  reason: "Factor and cancel terms."
},
{
  q: "If 2x + 3y = 2, y-intercept is:",
  options: ["1", "2/3", "3/2", "2"],
  ans: "2/3",
  reason: "Put x=0 ⇒ y = 2/3."
}
  ];
  }
});
