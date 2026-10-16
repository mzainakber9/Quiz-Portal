// Class 11 Physics — Chapter 2: Vectors
// 104 MCQs, each with an explanation: 28 chapter-file MCQs + 74 SLO-based MCQs (incl. scenario and diagram questions) + 2 FBISE model-paper MCQs.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities (options are plain text).
QuizBank.register({
  class: "11th",
  subject: "Physics",
  type: "chapter",
  id: "ch2",
  label: "Chapter 2: Vectors",
  order: 2,
  questions: function () {
    return [
    {
      q: "At what angle components of a vector have same magnitude?",
      options: ["0°","30°","45°","90°"],
      ans: "45°",
      reason: "The components Aₓ = A cosθ and A_y = A sinθ are equal when cosθ = sinθ, i.e. θ = 45°."
    },
    {
      q: "The reverse process of addition of vectors is called:",
      options: ["Multiplication of vectors","Subtraction of vectors","Resolution of vectors","Negative of vectors"],
      ans: "Resolution of vectors",
      reason: "Adding vectors combines them into one resultant. The reverse process, splitting one vector into two or more parts, is called resolution of vectors."
    },
    {
      q: "A force of 5 N is acting along y-axis. Its component along x-axis is:",
      options: ["5 N","0 N","10 N","2.5 N"],
      ans: "0 N",
      reason: "A force along the y-axis is perpendicular to the x-axis, so Fₓ = 5 cos 90° = 0 N."
    },
    {
      q: "If A = 2i − j + 3k, then magnitude of A is:",
      options: ["4","14","√14","none of these"],
      ans: "√14",
      reason: "|A| = √(2² + (−1)² + 3²) = √(4 + 1 + 9) = √14."
    },
    {
      q: "The value of x-component on y-axis is:",
      options: ["one","maximum","zero","cannot be defined"],
      ans: "zero",
      reason: "A vector lying along the y-axis makes 90° with the x-axis, so its x-component is A cos 90° = 0."
    },
    {
      q: "If a force of 100 N makes an angle of 60° with x-axis, its x-component is given by:",
      options: ["86.6 N","50 N","8.66 N","None of these"],
      ans: "50 N",
      reason: "Fₓ = F cosθ = 100 × cos 60° = 100 × 0.5 = 50 N."
    },
    {
      q: "If a force of 50 N is acting along x-axis, then its component along y-axis will be:",
      options: ["The same","Zero","25 N","none of these"],
      ans: "Zero",
      reason: "A force along the x-axis makes 90° with the y-axis, so F_y = 50 cos 90° = 0."
    },
    {
      q: "Maximum number of components of a vector may be:",
      options: ["One","Two","Three","Infinite"],
      ans: "Infinite",
      reason: "A vector can be resolved along any pair of directions you choose, and there are infinitely many such pairs. So the number of possible components is infinite."
    },
    {
      q: "In a Cartesian coordinate system, how a vector represented?",
      options: ["Using angles and magnitude","using a set of coordinates (x, y, z)","using a single numerical value","using a circular path"],
      ans: "using a set of coordinates (x, y, z)",
      reason: "In a Cartesian coordinate system a vector is represented by its set of coordinates (x, y, z), i.e. by its components along the axes."
    },
    {
      q: "A vector has a magnitude of 10 units and makes an angle of 45° with the positive y-axis. Find its x-component.",
      options: ["6.06 units","7.07 units","5 N","8.66 N"],
      ans: "7.07 units",
      reason: "The angle is measured from the y-axis, so the angle with the x-axis is 90° − 45° = 45°. Aₓ = 10 cos 45° = 10 × 0.7071 = 7.07 units."
    },
    {
      q: "Determine the direction of the vector, A = 4i − 3j with respect to the positive x-axis.",
      options: ["223.17°","323.13°","270°","300°"],
      ans: "323.13°",
      reason: "tan φ = 3/4, so φ = 36.87° below the +x axis (vector is in the 4th quadrant). Direction = 360° − 36.87° = 323.13° from the positive x-axis."
    },
    {
      q: "If the magnitudes of scalar and vector product of two vectors are 2√3 and 2 respectively, the angle between vectors is:",
      options: ["30°","60°","120°","180°"],
      ans: "30°",
      reason: "A·B = AB cosθ = 2√3 and |A × B| = AB sinθ = 2. Dividing: tanθ = 2/(2√3) = 1/√3, so θ = 30°."
    },
    {
      q: "Which of the following vector is/are perpendicular to the vector 4i − 3j?",
      options: ["4i + 3j","6i","7i","3i + 4j"],
      ans: "3i + 4j",
      reason: "Two vectors are perpendicular when their dot product is zero. (4i − 3j)·(3i + 4j) = 12 − 12 = 0. The other options give non-zero dot products (7, 24, 28)."
    },
    {
      q: "A = 2i + 3j − k and B = 4i + 6j − 2k. Then the angle between them will be:",
      options: ["0°","45°","60°","90°"],
      ans: "0°",
      reason: "B = 4i + 6j − 2k = 2(2i + 3j − k) = 2A, so B is parallel to A in the same direction. The angle between them is 0°."
    },
    {
      q: "If F = 2i + 3j and d = 4i − 2j, then work done is:",
      options: ["2 J","14 J","−2 J","8 J"],
      ans: "2 J",
      reason: "W = F·d = (2)(4) + (3)(−2) = 8 − 6 = 2 J."
    },
    {
      q: "Dot product of two perpendicular vectors of magnitude A will be:",
      options: ["A","2A","0","A²"],
      ans: "0",
      reason: "A·B = AB cos 90° = 0 for perpendicular vectors, whatever their magnitudes."
    },
    {
      q: "The self-scalars product of A is given by:",
      options: ["√A","1/A","A²","A"],
      ans: "A²",
      reason: "A·A = A A cos 0° = A²."
    },
    {
      q: "Projection of B on A is:",
      options: ["A cos θ","B cos θ","A sin θ","B sin θ"],
      ans: "B cos θ",
      reason: "The projection (component) of B on A is the length of B along A's direction, which is B cosθ."
    },
    {
      q: "If two forces have magnitudes 50 N and 100 N, and their resultant force has a magnitude of √3 × 50 N, what is the angle between these two forces?",
      options: ["60°","120°","90°","45°"],
      ans: "120°",
      reason: "R² = F₁² + F₂² + 2F₁F₂ cosθ. (50√3)² = 50² + 100² + 2(50)(100) cosθ gives 7500 = 12500 + 10000 cosθ, so cosθ = −0.5 and θ = 120°."
    },
    {
      q: "The magnitude of |i × j| is equal to:",
      options: ["i","1","0","k"],
      ans: "1",
      reason: "i × j = k, a unit vector, so |i × j| = |k| = 1."
    },
    {
      q: "If A · B = 0 and A × C = 0, what is the angle between B and C?",
      options: ["25°","90°","135°","180°"],
      ans: "90°",
      reason: "A·B = 0 means B ⟂ A. A × C = 0 means C is parallel (or anti-parallel) to A. So B is perpendicular to C too, and the angle is 90°."
    },
    {
      q: "The expression (j × k) + (j × i) × i will be:",
      options: ["i − j","i","j","0"],
      ans: "i − j",
      reason: "j × k = i. j × i = −k, so (j × i) × i = −k × i = −j. Total = i − j."
    },
    {
      q: "i · (i × k) = ?",
      options: ["1","k","−k","0"],
      ans: "0",
      reason: "i × k = −j, so i·(i × k) = i·(−j) = 0. (A scalar triple product with a repeated vector is zero.)"
    },
    {
      q: "Cross product of two anti-parallel vectors is:",
      options: ["0","1","Maximum","Negative"],
      ans: "0",
      reason: "|A × B| = AB sinθ. For anti-parallel vectors θ = 180°, sin 180° = 0, so the cross product is zero (a null vector)."
    },
    {
      q: "Self-cross product of A is given by:",
      options: ["√A","1/A","A²","0 (null vector)"],
      ans: "0 (null vector)",
      reason: "A × A = A A sin 0° n̂ = 0, the null vector."
    },
    {
      q: "If A × B points along positive z-axis, then vector A and B will lie in:",
      options: ["zx-plane","xy-plane","xz-plane","None"],
      ans: "xy-plane",
      reason: "A × B is perpendicular to both A and B. If it points along +z, then A and B must lie in the plane perpendicular to the z-axis, i.e. the xy-plane."
    },
    {
      q: "Area of parallelogram formed by A and B as two adjacent sides is equal to:",
      options: ["AB","AB cos θ","AB sin θ","AB tan θ"],
      ans: "AB sin θ",
      reason: "The magnitude of A × B = AB sinθ equals the area of the parallelogram with A and B as adjacent sides."
    },
    {
      q: "Cross product of two vectors is a negative vector when they are:",
      options: ["parallel","anti-parallel","perpendicular","None"],
      ans: "None",
      reason: "A × B = AB sinθ n̂. For parallel and anti-parallel vectors it is zero (null vector), and for perpendicular vectors it has maximum magnitude along n̂. None of the cases makes it a negative vector, so the answer is None."
    },

    // ---- Additional MCQs written to the FBISE HSSC-I Physics (Grade XI) SLOs: straight, scenario-based and diagram questions ----
    {
      q: "Which of the following is a scalar quantity?",
      options: ["Torque","Weight","Momentum","Work"],
      ans: "Work",
      reason: "Work = F·d is the dot product of two vectors, so it has magnitude only and is a scalar. Momentum, torque and weight all have direction and are vectors."
    },
    {
      q: "Which of the following lists contains only vector quantities?",
      options: ["Displacement, velocity, momentum","Work, power, energy","Speed, force, torque","Mass, weight, density"],
      ans: "Displacement, velocity, momentum",
      reason: "Displacement, velocity and momentum all need a direction. Each other list contains at least one scalar (speed; work, power, energy; mass, density)."
    },
    {
      q: "The unit vector in the direction of A = 5i − 12j is:",
      options: ["0.92i − 0.38j","0.38i + 0.92j","5i − 12j","0.38i − 0.92j"],
      ans: "0.38i − 0.92j",
      reason: "|A| = √(25 + 144) = 13, so Â = A/|A| = (5i − 12j)/13 = 0.38i − 0.92j. Check: 0.38² + 0.92² ≈ 1."
    },
    {
      q: "The magnitude of the vector A = 3i − 4j + 12k is:",
      options: ["169","5","13","19"],
      ans: "13",
      reason: "|A| = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13. (169 forgets the square root.)"
    },
    {
      q: "A vector has magnitude 5 units. Which of the following cannot be its x-component?",
      options: ["3 units","−5 units","6 units","0"],
      ans: "6 units",
      reason: "Aₓ = 5 cosθ, so |Aₓ| can never exceed 5. A component of 6 units is impossible; −5, 0 and 3 occur at θ = 180°, 90° and about 53°."
    },
    {
      q: "The x-component of a vector is twice its y-component, and both are positive. The angle the vector makes with the +x axis is:",
      options: ["26.6°","63.4°","30°","45°"],
      ans: "26.6°",
      reason: "tanθ = Aᵧ/Aₓ = 1/2 = 0.5, so θ = tan⁻¹(0.5) = 26.6°. (63.4° would be the angle with the y-axis.)"
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"25\" y1=\"115\" x2=\"268\" y2=\"115\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"275,115 268,118 268,112\" fill=\"#888\" stroke=\"none\"/><line x1=\"150\" y1=\"165\" x2=\"150\" y2=\"32\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"150,25 153,32 147,32\" fill=\"#888\" stroke=\"none\"/><text x=\"277\" y=\"129\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">x</text><text x=\"158\" y=\"35\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">y</text><line x1=\"150\" y1=\"115\" x2=\"81.6\" y2=\"75.5\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"73.8,71 83.6,72 79.6,79\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M176 115 A26 26 0 0 0 127.5 102\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"184\" y=\"107\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">150°</text><text x=\"69.8\" y=\"65\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">A = 12 units</text></svg></div>A vector A of magnitude 12 units makes an angle of 150° with the +x axis, measured anticlockwise as shown. Its components are:",
      options: ["Aₓ = −6.0, Aᵧ = +10.4","Aₓ = −10.4, Aᵧ = −6.0","Aₓ = +10.4, Aᵧ = +6.0","Aₓ = −10.4, Aᵧ = +6.0"],
      ans: "Aₓ = −10.4, Aᵧ = +6.0",
      reason: "Aₓ = 12 cos150° = −10.4 and Aᵧ = 12 sin150° = +6.0. The vector lies in the second quadrant, so x is negative and y is positive. (−6.0 and +10.4 come from swapping sine and cosine.)"
    },
    {
      q: "A vector has components Aₓ = −5 and Aᵧ = −12. Its direction, measured anticlockwise from the +x axis, is:",
      options: ["112.6°","247.4°","67.4°","292.6°"],
      ans: "247.4°",
      reason: "Both components are negative, so the vector is in the third quadrant. The reference angle is tan⁻¹(12/5) = 67.4°, so the direction is 180° + 67.4° = 247.4°."
    },
    {
      q: "A drone moves with a velocity of 20 m/s directed 40° below the horizontal +x axis (towards positive x). Its velocity components are:",
      options: ["vₓ = +15.3 m/s, vᵧ = +12.9 m/s","vₓ = +12.9 m/s, vᵧ = −15.3 m/s","vₓ = −15.3 m/s, vᵧ = −12.9 m/s","vₓ = +15.3 m/s, vᵧ = −12.9 m/s"],
      ans: "vₓ = +15.3 m/s, vᵧ = −12.9 m/s",
      reason: "vₓ = 20 cos40° = 15.3 m/s and vᵧ = −20 sin40° = −12.9 m/s (negative because the motion is downward). The angle is measured from the x-axis, so cosine gives the x-component."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"10\" y1=\"160\" x2=\"290\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"50\" y1=\"160\" x2=\"50\" y2=\"130\" stroke=\"#222\" stroke-width=\"2\"/><circle cx=\"50\" cy=\"124\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"118\" x2=\"117.5\" y2=\"18.4\" stroke=\"#555\" stroke-width=\"1.2\"/><polygon points=\"117.5,4.4 127.5,18.4 117.5,34.4 107.5,18.4\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"60\" y1=\"118\" x2=\"145\" y2=\"118\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"60\" y1=\"118\" x2=\"93\" y2=\"60.8\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"97.5,53 96.5,62.8 89.5,58.8\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M94 118 A34 34 0 0 0 77 88.6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"100\" y=\"106\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><text x=\"103.5\" y=\"75\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">T = 20 N</text></svg></div>A girl flies a kite. The string makes 60° with the horizontal ground and its tension is 20 N. The vertical component of the tension is:",
      options: ["10 N","17.3 N","20 N","34.6 N"],
      ans: "17.3 N",
      reason: "T_y = T sin60° = 20 × 0.866 = 17.3 N. (10 N is the horizontal component, T cos60°.)"
    },
    {
      q: "If A = 3i + 2j and B = −5i + 4j, the magnitude of A − B is:",
      options: ["10.0","6.32","8.25","7.35"],
      ans: "8.25",
      reason: "A − B = (3 + 5)i + (2 − 4)j = 8i − 2j, so |A − B| = √(64 + 4) = √68 = 8.25. (6.32 is |A + B| and 7.35 is √(A² + B²).)"
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"45\" y1=\"150\" x2=\"156.5\" y2=\"112.8\" stroke=\"#222\" stroke-width=\"2.2\"/><polygon points=\"165,110 157.7,116.6 155.2,109.1\" fill=\"#222\" stroke=\"none\"/><line x1=\"165\" y1=\"110\" x2=\"229.3\" y2=\"31.9\" stroke=\"#1f5fbf\" stroke-width=\"2.2\"/><polygon points=\"235,25 232.4,34.5 226.2,29.4\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"45\" y1=\"150\" x2=\"227.5\" y2=\"29.9\" stroke=\"#c0392b\" stroke-width=\"2.2\"/><polygon points=\"235,25 229.7,33.3 225.3,26.6\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"100\" y=\"152\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">A</text><text x=\"183\" y=\"70\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">B</text><text x=\"110\" y=\"95\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">C</text></svg></div>In the diagram, vectors A and B are joined head to tail and C is drawn from the tail of A to the head of B. Then C is equal to:",
      options: ["A + B","A − B","B − A","−(A + B)"],
      ans: "A + B",
      reason: "By the head-to-tail rule, the resultant of A and B is the vector from the tail of the first to the head of the last, which is C = A + B."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 185\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"55\" y1=\"155\" x2=\"197.5\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.2\"/><polygon points=\"205,55 199.7,63.3 195.3,56.7\" fill=\"#222\" stroke=\"none\"/><line x1=\"55\" y1=\"155\" x2=\"216\" y2=\"155\" stroke=\"#1f5fbf\" stroke-width=\"2.2\"/><polygon points=\"225,155 216,159 216,151\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"225\" y1=\"155\" x2=\"206.8\" y2=\"63.8\" stroke=\"#c0392b\" stroke-width=\"2.2\"/><polygon points=\"205,55 210.7,63 202.8,64.6\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"110\" y=\"95\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">A</text><text x=\"140\" y=\"172\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">B</text><text x=\"239\" y=\"105\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">C</text></svg></div>Vectors A and B are drawn from a common point. The vector C is drawn from the head of B to the head of A. Then C is equal to:",
      options: ["A − B","½(A + B)","B − A","A + B"],
      ans: "A − B",
      reason: "Going from the head of B to the head of A means C + B = A, so C = A − B. (B − A would point from the head of A to the head of B.)"
    },
    {
      q: "Two forces of 3 N and 5 N act at the same point. Which of the following cannot be the magnitude of their resultant?",
      options: ["2 N","4 N","9 N","8 N"],
      ans: "9 N",
      reason: "The resultant lies between |5 − 3| = 2 N (opposite directions) and 5 + 3 = 8 N (same direction). 9 N is outside this range."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"115\" y1=\"145\" x2=\"196\" y2=\"145\" stroke=\"#c0392b\" stroke-width=\"2.2\"/><polygon points=\"205,145 196,149 196,141\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"115\" y1=\"145\" x2=\"74.5\" y2=\"74.9\" stroke=\"#1f5fbf\" stroke-width=\"2.2\"/><polygon points=\"70,67.1 78,72.9 71,76.9\" fill=\"#1f5fbf\" stroke=\"none\"/><path d=\"M145 145 A30 30 0 0 0 100 119\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"125\" y=\"107\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">120°</text><text x=\"203\" y=\"161\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₁ = 10 N</text><text x=\"76\" y=\"61.1\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₂ = 10 N</text></svg></div>Two forces of equal magnitude, 10 N each, act at a point with 120° between them as shown. The magnitude of their resultant is:",
      options: ["10 N","14.1 N","17.3 N","20 N"],
      ans: "10 N",
      reason: "R = √(F² + F² + 2F² cos120°) = √(100 + 100 − 100) = 10 N. For equal forces R = 2F cos(θ/2) = 20 cos60° = 10 N. (17.3 N would be correct for 60° between them.)"
    },
    {
      q: "Two forces of 8 N and 6 N act at a point at an angle of 60° to each other. The magnitude of the resultant is:",
      options: ["14.0 N","10.0 N","12.2 N","7.2 N"],
      ans: "12.2 N",
      reason: "R² = 8² + 6² + 2(8)(6)cos60° = 64 + 36 + 48 = 148, so R = 12.2 N. (10.0 N ignores the angle term; 7.2 N subtracts it.)"
    },
    {
      q: "Two forces of 8 N and 6 N act at a point at 60° to each other. The resultant makes what angle with the 8 N force?",
      options: ["60°","30°","34.7°","25.3°"],
      ans: "25.3°",
      reason: "tanα = 6 sin60° / (8 + 6 cos60°) = 5.196 / 11 = 0.472, so α = 25.3°. (34.7° is its angle with the 6 N force, 60° − 25.3°.)"
    },
    {
      q: "Two perpendicular vectors A and B each have magnitude 5. What is |A − B|?",
      options: ["10","0","5","7.07"],
      ans: "7.07",
      reason: "|A − B|² = A² + B² − 2AB cos90° = 25 + 25 = 50, so |A − B| = 7.07. (10 would be |A + B| for parallel vectors.)"
    },
    {
      q: "How do the vectors A − B and B − A compare?",
      options: ["Equal in magnitude and direction","Different in magnitude but same direction","Equal in magnitude but opposite in direction","Perpendicular to each other"],
      ans: "Equal in magnitude but opposite in direction",
      reason: "B − A = −(A − B). Subtraction of vectors is not commutative: reversing the order reverses the direction while the magnitude stays the same."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"55\" y1=\"150\" x2=\"236.1\" y2=\"126.2\" stroke=\"#222\" stroke-width=\"2.2\"/><polygon points=\"245,125 236.6,130.1 235.6,122.2\" fill=\"#222\" stroke=\"none\"/><line x1=\"245\" y1=\"125\" x2=\"146.8\" y2=\"40.9\" stroke=\"#1f5fbf\" stroke-width=\"2.2\"/><polygon points=\"140,35 149.4,37.8 144.2,43.9\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"140\" y1=\"35\" x2=\"60.3\" y2=\"142.8\" stroke=\"#c0392b\" stroke-width=\"2.2\"/><polygon points=\"55,150 57.1,140.4 63.6,145.1\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"150\" y=\"160\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">F₁</text><text x=\"205\" y=\"70\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">F₂</text><text x=\"80\" y=\"85\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">F₃</text></svg></div>Three forces F₁, F₂ and F₃ acting on a body are represented in magnitude and direction by the three sides of a triangle taken in order, as shown. Their resultant is:",
      options: ["F₃","F₁ + F₂ + F₃ (sum of magnitudes)","zero","2F₃"],
      ans: "zero",
      reason: "Head-to-tail addition of the three vectors ends where it began, so the resultant is zero and the body is in equilibrium. (F₁ + F₂ = −F₃ in vector form.)"
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"120\" y1=\"150\" x2=\"186\" y2=\"150\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"195,150 186,154 186,146\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"120\" y1=\"150\" x2=\"120\" y2=\"59\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"120,50 124,59 116,59\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"157.5\" y=\"166\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">car A: 60 km/h</text><text x=\"128\" y=\"44\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">car B: 80 km/h</text><line x1=\"25\" y1=\"50\" x2=\"25\" y2=\"25\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"25,18 28,25 22,25\" fill=\"#222\" stroke=\"none\"/><text x=\"25\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">N</text><line x1=\"40\" y1=\"50\" x2=\"61\" y2=\"50\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"68,50 61,53 61,47\" fill=\"#222\" stroke=\"none\"/><text x=\"76\" y=\"54\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">E</text></svg></div>Two cars leave a crossing at the same time: car A travels east at 60 km/h and car B travels north at 80 km/h (arrows drawn to scale). The velocity of car B relative to car A is:",
      options: ["100 km/h, 36.9° east of north","140 km/h, 36.9° west of north","100 km/h, 36.9° west of north","20 km/h, due north"],
      ans: "100 km/h, 36.9° west of north",
      reason: "v(B rel. A) = v_B − v_A = 80 N − 60 E = (−60 east, +80 north). Magnitude √(60² + 80²) = 100 km/h; tan⁻¹(60/80) = 36.9° towards the west of north. (East of north would be v_B + v_A.)"
    },
    {
      q: "A man walks at 4 m/s on level ground while rain falls vertically at 3 m/s relative to the ground. At what angle to the vertical, towards his direction of walking, must he tilt his umbrella to shield himself best?",
      options: ["53.1°","30°","45°","36.9°"],
      ans: "53.1°",
      reason: "Rain relative to the man = v_rain − v_man = (−4, −3) m/s, speed 5 m/s, arriving from the front. Its angle to the vertical is tan⁻¹(4/3) = 53.1°, so the umbrella is tilted forward by 53.1°. (36.9° is the angle from the horizontal.)"
    },
    {
      q: "A body is in equilibrium under three forces: 10 N towards the east, 10 N towards the north, and a third force F₃. F₃ is:",
      options: ["20 N towards the south-west","14.1 N towards the south-west","14.1 N towards the north-east","10 N towards the south-west"],
      ans: "14.1 N towards the south-west",
      reason: "The first two forces give a resultant √(10² + 10²) = 14.1 N towards the north-east. For equilibrium F₃ must be equal and opposite: 14.1 N towards the south-west. (North-east is the direction of the resultant, not of the balancing force.)"
    },
    {
      q: "If |A + B| = |A − B| for two non-zero vectors, the angle between A and B is:",
      options: ["90°","60°","180°","0°"],
      ans: "90°",
      reason: "|A + B|² − |A − B|² = 4 A·B = 0, so A·B = 0 and the vectors are perpendicular."
    },
    {
      q: "Two vectors have magnitudes 3 and 4. Their scalar product can have any value from:",
      options: ["0 to 12","−7 to +7","1 to 7","−12 to +12"],
      ans: "−12 to +12",
      reason: "A·B = 12 cosθ and cosθ varies from −1 (θ = 180°) to +1 (θ = 0°), so A·B lies between −12 and +12. The dot product can be negative; only magnitudes cannot."
    },
    {
      q: "The magnitude of the vector product of two vectors of magnitudes 3 and 4 can have any value from:",
      options: ["0 to 7","1 to 12","−12 to +12","0 to 12"],
      ans: "0 to 12",
      reason: "|A × B| = 12 sinθ, and sinθ lies between 0 (parallel or anti-parallel) and 1 (perpendicular) for 0° ≤ θ ≤ 180°. A magnitude cannot be negative."
    },
    {
      q: "Which relation is true for any two vectors A and B?",
      options: ["A·B = −B·A","A × B = A·B","A × B = B × A","A·B = B·A"],
      ans: "A·B = B·A",
      reason: "The scalar product is commutative (AB cosθ is unchanged by swapping). The vector product is anti-commutative: A × B = −(B × A)."
    },
    {
      q: "Which of the following is NOT obtained as the vector (cross) product of two vectors?",
      options: ["Magnetic force on a moving charge","Work done by a force","Torque","Angular momentum"],
      ans: "Work done by a force",
      reason: "Work = F·d is a scalar (dot) product. Torque (r × F), angular momentum (r × p) and magnetic force (qv × B) are cross products."
    },
    {
      q: "The value of (i × j)·(j × i) is:",
      options: ["0","−k","1","−1"],
      ans: "−1",
      reason: "i × j = k and j × i = −k, so the expression is k·(−k) = −(k·k) = −1."
    },
    {
      q: "The expression (k × j) + (i × k) is equal to:",
      options: ["i + j","i − j","−i + j","−i − j"],
      ans: "−i − j",
      reason: "k × j = −i and i × k = −j (reverse of the cyclic order i → j → k). The sum is −i − j."
    },
    {
      q: "If A = 2i − 3j + k and B = 4i + j − 2k, then A·B is:",
      options: ["3","9","13","−3"],
      ans: "3",
      reason: "A·B = (2)(4) + (−3)(1) + (1)(−2) = 8 − 3 − 2 = 3. (9 comes from forgetting the sign of the k term.)"
    },
    {
      q: "The angle between A = i + j and B = j + k is:",
      options: ["90°","30°","60°","45°"],
      ans: "60°",
      reason: "A·B = (1)(0) + (1)(1) + (0)(1) = 1. |A| = |B| = √2, so cosθ = 1/(√2 × √2) = 0.5 and θ = 60°."
    },
    {
      q: "The vectors (p i + 2j − k) and (3i − 2j + 2k) are perpendicular. The value of p is:",
      options: ["2","6","1","−2"],
      ans: "2",
      reason: "Perpendicular means the dot product is zero: 3p − 4 − 2 = 0, so p = 2."
    },
    {
      q: "A force F = 6i − 4j newtons displaces a body by d = 2i + 5j metres. The work done is:",
      options: ["32 J","8 J","−8 J","−32 J"],
      ans: "−8 J",
      reason: "W = F·d = (6)(2) + (−4)(5) = 12 − 20 = −8 J. The negative sign means the force has a component opposing the displacement."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 260 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"45\" y1=\"150\" x2=\"126\" y2=\"150\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"135,150 126,154 126,146\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"45\" y1=\"150\" x2=\"112.5\" y2=\"33.1\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"117,25.3 116,35.1 109,31.1\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"117\" y1=\"25.3\" x2=\"117\" y2=\"150\" stroke=\"#555\" stroke-width=\"1.2\" stroke-dasharray=\"4 3\"/><path d=\"M71 150 A26 26 0 0 0 58 127.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"77\" y=\"142\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><text x=\"115\" y=\"168\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">B = 5</text><text x=\"107\" y=\"47.3\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">A = 8</text></svg></div>Vectors A (magnitude 8) and B (magnitude 5) are drawn from the same point with 60° between them. The dashed line is the perpendicular from the head of A onto the line of B. The scalar product A·B is:",
      options: ["34.6","40","20","10"],
      ans: "20",
      reason: "A·B = AB cosθ = 8 × 5 × cos60° = 20, i.e. |B| times the projection of A on B (A cos60° = 4, and 4 × 5 = 20). (34.6 uses sin60°; 40 ignores the angle.)"
    },
    {
      q: "Two vectors of magnitudes 4 and 5 have a scalar product of 10. The magnitude of their vector product is:",
      options: ["10","20","8.66","17.3"],
      ans: "17.3",
      reason: "cosθ = 10/(4 × 5) = 0.5, so θ = 60°. Then |A × B| = 4 × 5 × sin60° = 17.3."
    },
    {
      q: "Two adjacent sides of a triangle are represented by the vectors A = 2i + 3j and B = 4i + 2j. The area of the triangle is:",
      options: ["14 units²","4 units²","7 units²","8 units²"],
      ans: "4 units²",
      reason: "A × B = (2·2 − 3·4)k = −8k, so |A × B| = 8 is the area of the parallelogram. The triangle has half of this: 4 units². (14 is A·B = 8 + 6, which is not an area.)"
    },
    {
      q: "For A = i + 2j + 3k and B = 2i − j + k, the vector product A × B is:",
      options: ["−5i + 5j + 5k","5i + 5j − 5k","5i − 5j − 5k","−5i − 5j + 5k"],
      ans: "5i + 5j − 5k",
      reason: "A × B = (2·1 − 3·(−1))i − (1·1 − 3·2)j + (1·(−1) − 2·2)k = 5i + 5j − 5k."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 280 160\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"120\" x2=\"243\" y2=\"120\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"250,120 243,123 243,117\" fill=\"#888\" stroke=\"none\"/><line x1=\"130\" y1=\"145\" x2=\"130\" y2=\"27\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"130,20 133,27 127,27\" fill=\"#888\" stroke=\"none\"/><text x=\"252\" y=\"134\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">x</text><text x=\"138\" y=\"30\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">y</text><line x1=\"130\" y1=\"120\" x2=\"130\" y2=\"49\" stroke=\"#c0392b\" stroke-width=\"2.6\"/><polygon points=\"130,40 134,49 126,49\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"130\" y1=\"120\" x2=\"206\" y2=\"120\" stroke=\"#1f5fbf\" stroke-width=\"2.6\"/><polygon points=\"215,120 206,124 206,116\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"118\" y=\"50\" text-anchor=\"end\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">A</text><text x=\"215\" y=\"138\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">B</text></svg></div>Vectors A and B lie in the plane of the page, with A along +y and B along +x as shown. The direction of A × B is:",
      options: ["Out of the page","Into the page","Along +y","Along +x"],
      ans: "Into the page",
      reason: "A × B is perpendicular to the plane of A and B. Curling the right-hand fingers from A (up) towards B (right) is a clockwise turn, so the thumb points into the page. (Equivalently j × i = −k.)"
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 280 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"105\" y1=\"140\" x2=\"89.2\" y2=\"50.4\" stroke=\"#c0392b\" stroke-width=\"2.6\"/><polygon points=\"87.6,41.5 93.1,49.7 85.3,51.1\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"105\" y1=\"140\" x2=\"170\" y2=\"128.5\" stroke=\"#1f5fbf\" stroke-width=\"2.6\"/><polygon points=\"178.9,127 170.7,132.5 169.3,124.6\" fill=\"#1f5fbf\" stroke=\"none\"/><path d=\"M134.5 134.8 A30 30 0 0 0 99.8 110.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"135\" y=\"98\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">90°</text><text x=\"79.6\" y=\"45.5\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">A = 4</text><text x=\"184.9\" y=\"131\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">B = 3</text></svg></div>A and B lie in the plane of the page, with magnitudes 4 and 3 and 90° between them as shown. A × B is:",
      options: ["12 units, into the page","0","6 units, into the page","12 units, out of the page"],
      ans: "12 units, into the page",
      reason: "|A × B| = 4 × 3 × sin90° = 12. Turning from A to B through the 90° angle is a clockwise rotation (A is at 100°, B at 10°), so by the right-hand rule the direction is into the page."
    },
    {
      q: "A force F = 10i N acts at the point with position vector r = (0.4i + 0.3j) m relative to a pivot. The torque r × F about the pivot is:",
      options: ["−4.0 k̂ N m","+4.0 k̂ N m","+3.0 k̂ N m","−3.0 k̂ N m"],
      ans: "−3.0 k̂ N m",
      reason: "τ = r × F = (0.4i + 0.3j) × 10i = 4(i × i) + 3(j × i) = 0 + 3(−k) = −3.0 k̂ N m."
    },
    {
      q: "A force is applied to a door along the line joining the hinge and the point of application. The torque of this force about the hinge is zero because:",
      options: ["r × F = 0, since F is parallel to r (sinθ = 0)","the force is too small","the door is not heavy","the force is perpendicular to r"],
      ans: "r × F = 0, since F is parallel to r (sinθ = 0)",
      reason: "Torque = r × F has magnitude rF sinθ. When F is along the line of r, θ = 0° (or 180°) and sinθ = 0, so there is no turning effect. (A force perpendicular to r would give maximum torque.)"
    },
    {
      q: "An electron moves towards the east in a region where the magnetic field points towards the north. The magnetic force on the electron is directed:",
      options: ["Vertically downward","Towards the west","Vertically upward","Towards the south"],
      ans: "Vertically downward",
      reason: "Take east = x, north = y, up = z. For a positive charge v × B = x × y = +z (up). The electron is negative, so the force is reversed: vertically downward."
    },
    {
      q: "A proton moving parallel to a uniform magnetic field experiences a magnetic force of:",
      options: ["Zero","qvB / 2","qB / v","qvB"],
      ans: "Zero",
      reason: "F = qv × B has magnitude qvB sinθ. For motion parallel to B, θ = 0° and sinθ = 0, so the force is zero."
    },
    {
      q: "If A·B = 12 and A·C = −5, then A·(B − C) equals:",
      options: ["−17","17","7","60"],
      ans: "17",
      reason: "The dot product is distributive: A·(B − C) = A·B − A·C = 12 − (−5) = 17. (7 comes from forgetting the minus sign of the second term.)"
    },
    {
      q: "The vector A × (A + B) is equal to:",
      options: ["A² + A × B","0","B × A","A × B"],
      ans: "A × B",
      reason: "By the distributive law A × (A + B) = A × A + A × B = 0 + A × B = A × B. (B × A would be the negative of this.)"
    },
    {
      q: "If A·B = A·C for non-zero vectors A, B and C, then which of the following must be true?",
      options: ["B − C is parallel to A","A·(B − C) = 0","B = C","B is parallel to C"],
      ans: "A·(B − C) = 0",
      reason: "A·B − A·C = A·(B − C) = 0, so B − C is zero or perpendicular to A. It does not force B = C: for example B and C may differ by a vector perpendicular to A."
    },
    {
      q: "A box slides 5 m along a rough floor against a constant friction force of 20 N. The work done by friction is:",
      options: ["+100 J","+4 J","−100 J","0 J"],
      ans: "−100 J",
      reason: "Friction is opposite to the displacement (θ = 180°), so W = F d cos180° = 20 × 5 × (−1) = −100 J. (4 comes from dividing 20 by 5.)"
    },
    {
      q: "For any two vectors A and B, the quantity (A × B)·A is equal to:",
      options: ["A²B cosθ","A²B sinθ","AB","0"],
      ans: "0",
      reason: "A × B is perpendicular to A, so its dot product with A is |A × B| A cos90° = 0."
    },
    {
      q: "A triangle has vertices at the origin and at the points (4, 1) and (1, 3). Its area is:",
      options: ["7 units²","5.5 units²","3.5 units²","11 units²"],
      ans: "5.5 units²",
      reason: "Take sides OP = 4i + j and OQ = i + 3j. |OP × OQ| = |4·3 − 1·1| = 11 is the parallelogram area, so the triangle area is 11/2 = 5.5 units². (7 is the dot product 4 + 3.)"
    },
    {
      q: "<div class=\"stimulus\">A boat can move at 4.0 m/s relative to still water. A pilot points it straight across a river 120 m wide, perpendicular to the banks. The river flows parallel to the banks at 3.0 m/s. The arrows are drawn to scale.<svg viewBox=\"0 0 300 215\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"0\" y=\"38\" width=\"300\" height=\"150\" fill=\"#dbe9ff\" stroke=\"none\" stroke-width=\"0\" /><line x1=\"0\" y1=\"38\" x2=\"300\" y2=\"38\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"0\" y1=\"188\" x2=\"300\" y2=\"188\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"270\" y=\"32\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">far bank</text><text x=\"270\" y=\"205\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">near bank</text><line x1=\"95\" y1=\"185\" x2=\"95\" y2=\"90\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"95,81 99,90 91,90\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"164\" y2=\"185\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"173,185 164,189 164,181\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"173\" y2=\"81\" stroke=\"#222\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><text x=\"89\" y=\"133\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">boat velocity</text><text x=\"89\" y=\"146\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">rel. to water</text><text x=\"134\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">river current</text><text x=\"177\" y=\"133\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">path</text><path d=\"M125 185 A30 30 0 0 0 113 161\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"131\" y=\"173\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">θ</text></svg></div>The speed of the boat relative to the river bank is:",
      options: ["7 m/s","3.5 m/s","5 m/s","1 m/s"],
      ans: "5 m/s",
      reason: "The two velocities are perpendicular, so v = √(4² + 3²) = 5 m/s. (7 m/s adds the magnitudes, which is only valid for parallel velocities.)"
    },
    {
      q: "<div class=\"stimulus\">A boat can move at 4.0 m/s relative to still water. A pilot points it straight across a river 120 m wide, perpendicular to the banks. The river flows parallel to the banks at 3.0 m/s. The arrows are drawn to scale.<svg viewBox=\"0 0 300 215\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"0\" y=\"38\" width=\"300\" height=\"150\" fill=\"#dbe9ff\" stroke=\"none\" stroke-width=\"0\" /><line x1=\"0\" y1=\"38\" x2=\"300\" y2=\"38\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"0\" y1=\"188\" x2=\"300\" y2=\"188\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"270\" y=\"32\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">far bank</text><text x=\"270\" y=\"205\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">near bank</text><line x1=\"95\" y1=\"185\" x2=\"95\" y2=\"90\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"95,81 99,90 91,90\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"164\" y2=\"185\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"173,185 164,189 164,181\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"173\" y2=\"81\" stroke=\"#222\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><text x=\"89\" y=\"133\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">boat velocity</text><text x=\"89\" y=\"146\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">rel. to water</text><text x=\"134\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">river current</text><text x=\"177\" y=\"133\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">path</text><path d=\"M125 185 A30 30 0 0 0 113 161\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"131\" y=\"173\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">θ</text></svg></div>The angle θ between the boat's actual path and the bank (downstream direction) is:",
      options: ["36.9°","53.1°","45°","60°"],
      ans: "53.1°",
      reason: "tanθ = 4/3 (across-river speed over downstream speed), so θ = 53.1°. (36.9° is the angle from the straight-across direction.)"
    },
    {
      q: "<div class=\"stimulus\">A boat can move at 4.0 m/s relative to still water. A pilot points it straight across a river 120 m wide, perpendicular to the banks. The river flows parallel to the banks at 3.0 m/s. The arrows are drawn to scale.<svg viewBox=\"0 0 300 215\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"0\" y=\"38\" width=\"300\" height=\"150\" fill=\"#dbe9ff\" stroke=\"none\" stroke-width=\"0\" /><line x1=\"0\" y1=\"38\" x2=\"300\" y2=\"38\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"0\" y1=\"188\" x2=\"300\" y2=\"188\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"270\" y=\"32\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">far bank</text><text x=\"270\" y=\"205\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">near bank</text><line x1=\"95\" y1=\"185\" x2=\"95\" y2=\"90\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"95,81 99,90 91,90\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"164\" y2=\"185\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"173,185 164,189 164,181\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"173\" y2=\"81\" stroke=\"#222\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><text x=\"89\" y=\"133\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">boat velocity</text><text x=\"89\" y=\"146\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">rel. to water</text><text x=\"134\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">river current</text><text x=\"177\" y=\"133\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">path</text><path d=\"M125 185 A30 30 0 0 0 113 161\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"131\" y=\"173\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">θ</text></svg></div>The time taken to cross the river is:",
      options: ["20 s","24 s","30 s","40 s"],
      ans: "30 s",
      reason: "Only the component of velocity across the river moves the boat across: t = 120 / 4.0 = 30 s. (24 s divides by the resultant speed 5 m/s, which wrongly uses the path speed with the width.)"
    },
    {
      q: "<div class=\"stimulus\">A boat can move at 4.0 m/s relative to still water. A pilot points it straight across a river 120 m wide, perpendicular to the banks. The river flows parallel to the banks at 3.0 m/s. The arrows are drawn to scale.<svg viewBox=\"0 0 300 215\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"0\" y=\"38\" width=\"300\" height=\"150\" fill=\"#dbe9ff\" stroke=\"none\" stroke-width=\"0\" /><line x1=\"0\" y1=\"38\" x2=\"300\" y2=\"38\" stroke=\"#222\" stroke-width=\"2\"/><line x1=\"0\" y1=\"188\" x2=\"300\" y2=\"188\" stroke=\"#222\" stroke-width=\"2\"/><text x=\"270\" y=\"32\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">far bank</text><text x=\"270\" y=\"205\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">near bank</text><line x1=\"95\" y1=\"185\" x2=\"95\" y2=\"90\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"95,81 99,90 91,90\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"164\" y2=\"185\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"173,185 164,189 164,181\" fill=\"#1f5fbf\" stroke=\"none\"/><line x1=\"95\" y1=\"185\" x2=\"173\" y2=\"81\" stroke=\"#222\" stroke-width=\"1.6\" stroke-dasharray=\"5 4\"/><text x=\"89\" y=\"133\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">boat velocity</text><text x=\"89\" y=\"146\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">rel. to water</text><text x=\"134\" y=\"200\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">river current</text><text x=\"177\" y=\"133\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">path</text><path d=\"M125 185 A30 30 0 0 0 113 161\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"131\" y=\"173\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">θ</text></svg></div>The distance by which the boat is swept downstream by the time it reaches the far bank is:",
      options: ["150 m","90 m","120 m","72 m"],
      ans: "90 m",
      reason: "Crossing time is 120 / 4.0 = 30 s, and the current carries the boat 3.0 × 30 = 90 m downstream. (150 m is the length of the actual path, 5 × 30.)"
    },
    {
      q: "<div class=\"stimulus\">A 5.0 kg block rests on a smooth plane inclined at 30° to the horizontal. Take g = 9.8 m/s². Resolve the weight W of the block into components along the incline and perpendicular to it.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"30,170 270,170 270,31.4\" fill=\"#eeeeee\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"112.3,122.5 164.2,92.5 145.2,59.6 93.3,89.6\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"128.8\" y1=\"91\" x2=\"128.8\" y2=\"152\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"128.8,161 124.8,152 132.8,152\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"134.8\" y=\"171\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">weight W</text><path d=\"M75 170 A45 45 0 0 0 69 147.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"80\" y=\"164\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"122.8\" y=\"61\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5.0 kg</text></svg></div>The component of the weight along (parallel to) the incline is:",
      options: ["49 N","24.5 N","42.4 N","12.3 N"],
      ans: "24.5 N",
      reason: "W = mg = 5.0 × 9.8 = 49 N. Component along the incline = W sin30° = 24.5 N. (42.4 N is the perpendicular component, W cos30°.)"
    },
    {
      q: "<div class=\"stimulus\">A 5.0 kg block rests on a smooth plane inclined at 30° to the horizontal. Take g = 9.8 m/s². Resolve the weight W of the block into components along the incline and perpendicular to it.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"30,170 270,170 270,31.4\" fill=\"#eeeeee\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"112.3,122.5 164.2,92.5 145.2,59.6 93.3,89.6\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"128.8\" y1=\"91\" x2=\"128.8\" y2=\"152\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"128.8,161 124.8,152 132.8,152\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"134.8\" y=\"171\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">weight W</text><path d=\"M75 170 A45 45 0 0 0 69 147.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"80\" y=\"164\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"122.8\" y=\"61\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5.0 kg</text></svg></div>The component of the weight perpendicular to the incline is:",
      options: ["56.6 N","42.4 N","49 N","24.5 N"],
      ans: "42.4 N",
      reason: "The component pressing into the plane is W cos30° = 49 × 0.866 = 42.4 N. (56.6 N would come from dividing by cos30° instead of multiplying.)"
    },
    {
      q: "<div class=\"stimulus\">A 5.0 kg block rests on a smooth plane inclined at 30° to the horizontal. Take g = 9.8 m/s². Resolve the weight W of the block into components along the incline and perpendicular to it.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"30,170 270,170 270,31.4\" fill=\"#eeeeee\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"112.3,122.5 164.2,92.5 145.2,59.6 93.3,89.6\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"128.8\" y1=\"91\" x2=\"128.8\" y2=\"152\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"128.8,161 124.8,152 132.8,152\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"134.8\" y=\"171\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">weight W</text><path d=\"M75 170 A45 45 0 0 0 69 147.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"80\" y=\"164\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"122.8\" y=\"61\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5.0 kg</text></svg></div>The acceleration of the block down the smooth incline is:",
      options: ["2.5 m/s²","8.5 m/s²","4.9 m/s²","9.8 m/s²"],
      ans: "4.9 m/s²",
      reason: "The net force is the along-incline component, so a = g sin30° = 9.8 × 0.5 = 4.9 m/s². (8.5 m/s² is g cos30°.)"
    },
    {
      q: "<div class=\"stimulus\">A 5.0 kg block rests on a smooth plane inclined at 30° to the horizontal. Take g = 9.8 m/s². Resolve the weight W of the block into components along the incline and perpendicular to it.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"30,170 270,170 270,31.4\" fill=\"#eeeeee\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"112.3,122.5 164.2,92.5 145.2,59.6 93.3,89.6\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"128.8\" y1=\"91\" x2=\"128.8\" y2=\"152\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"128.8,161 124.8,152 132.8,152\" fill=\"#c0392b\" stroke=\"none\"/><text x=\"134.8\" y=\"171\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">weight W</text><path d=\"M75 170 A45 45 0 0 0 69 147.5\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"80\" y=\"164\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"122.8\" y=\"61\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5.0 kg</text></svg></div>For which angle of incline would the two components of the weight have equal magnitudes?",
      options: ["45°","30°","90°","60°"],
      ans: "45°",
      reason: "W sinθ = W cosθ requires tanθ = 1, i.e. θ = 45°."
    },
    {
      q: "<div class=\"stimulus\">Two ropes pull on a ring with forces F₁ = 20 N and F₂ = 20 N. F₁ is directed at 60° and F₂ at 120° from the +x axis, both measured anticlockwise as shown.<svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"145\" x2=\"273\" y2=\"145\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"280,145 273,148 273,142\" fill=\"#888\" stroke=\"none\"/><line x1=\"150\" y1=\"160\" x2=\"150\" y2=\"32\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"150,25 153,32 147,32\" fill=\"#888\" stroke=\"none\"/><text x=\"282\" y=\"159\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">x</text><text x=\"158\" y=\"35\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">y</text><line x1=\"150\" y1=\"145\" x2=\"195.5\" y2=\"66.2\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"200,58.4 199,68.2 192,64.2\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"150\" y1=\"145\" x2=\"104.5\" y2=\"66.2\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"100,58.4 108,64.2 101,68.2\" fill=\"#1f5fbf\" stroke=\"none\"/><circle cx=\"150\" cy=\"145\" r=\"4\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M180 145 A30 30 0 0 0 165 119\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"188\" y=\"137\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><path d=\"M198 145 A48 48 0 0 0 126 103.4\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"136\" y=\"93\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">120°</text><text x=\"206\" y=\"62.4\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₁ = 20 N</text><text x=\"94\" y=\"62.4\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₂ = 20 N</text></svg></div>The components (Fₓ, Fᵧ) of F₂ are:",
      options: ["(−17.3 N, +10 N)","(+10 N, +17.3 N)","(−10 N, +17.3 N)","(−10 N, −17.3 N)"],
      ans: "(−10 N, +17.3 N)",
      reason: "F₂ is in the second quadrant: Fₓ = 20 cos120° = −10 N and Fᵧ = 20 sin120° = +17.3 N."
    },
    {
      q: "<div class=\"stimulus\">Two ropes pull on a ring with forces F₁ = 20 N and F₂ = 20 N. F₁ is directed at 60° and F₂ at 120° from the +x axis, both measured anticlockwise as shown.<svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"145\" x2=\"273\" y2=\"145\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"280,145 273,148 273,142\" fill=\"#888\" stroke=\"none\"/><line x1=\"150\" y1=\"160\" x2=\"150\" y2=\"32\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"150,25 153,32 147,32\" fill=\"#888\" stroke=\"none\"/><text x=\"282\" y=\"159\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">x</text><text x=\"158\" y=\"35\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">y</text><line x1=\"150\" y1=\"145\" x2=\"195.5\" y2=\"66.2\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"200,58.4 199,68.2 192,64.2\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"150\" y1=\"145\" x2=\"104.5\" y2=\"66.2\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"100,58.4 108,64.2 101,68.2\" fill=\"#1f5fbf\" stroke=\"none\"/><circle cx=\"150\" cy=\"145\" r=\"4\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M180 145 A30 30 0 0 0 165 119\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"188\" y=\"137\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><path d=\"M198 145 A48 48 0 0 0 126 103.4\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"136\" y=\"93\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">120°</text><text x=\"206\" y=\"62.4\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₁ = 20 N</text><text x=\"94\" y=\"62.4\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₂ = 20 N</text></svg></div>The resultant of F₁ and F₂ has magnitude and direction:",
      options: ["40 N along +y","20 N along +y","34.6 N along +y","34.6 N along +x"],
      ans: "34.6 N along +y",
      reason: "The x-components (+10 and −10) cancel; the y-components add: 17.3 + 17.3 = 34.6 N along +y."
    },
    {
      q: "<div class=\"stimulus\">Two ropes pull on a ring with forces F₁ = 20 N and F₂ = 20 N. F₁ is directed at 60° and F₂ at 120° from the +x axis, both measured anticlockwise as shown.<svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"145\" x2=\"273\" y2=\"145\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"280,145 273,148 273,142\" fill=\"#888\" stroke=\"none\"/><line x1=\"150\" y1=\"160\" x2=\"150\" y2=\"32\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"150,25 153,32 147,32\" fill=\"#888\" stroke=\"none\"/><text x=\"282\" y=\"159\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">x</text><text x=\"158\" y=\"35\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">y</text><line x1=\"150\" y1=\"145\" x2=\"195.5\" y2=\"66.2\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"200,58.4 199,68.2 192,64.2\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"150\" y1=\"145\" x2=\"104.5\" y2=\"66.2\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"100,58.4 108,64.2 101,68.2\" fill=\"#1f5fbf\" stroke=\"none\"/><circle cx=\"150\" cy=\"145\" r=\"4\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M180 145 A30 30 0 0 0 165 119\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"188\" y=\"137\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><path d=\"M198 145 A48 48 0 0 0 126 103.4\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"136\" y=\"93\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">120°</text><text x=\"206\" y=\"62.4\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₁ = 20 N</text><text x=\"94\" y=\"62.4\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₂ = 20 N</text></svg></div>If the same two 20 N forces were instead applied at an angle of 120° to each other, their resultant would be:",
      options: ["20 N","40 N","0 N","34.6 N"],
      ans: "20 N",
      reason: "For equal forces R = 2F cos(θ/2) = 2 × 20 × cos60° = 20 N."
    },
    {
      q: "<div class=\"stimulus\">Two ropes pull on a ring with forces F₁ = 20 N and F₂ = 20 N. F₁ is directed at 60° and F₂ at 120° from the +x axis, both measured anticlockwise as shown.<svg viewBox=\"0 0 300 175\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"145\" x2=\"273\" y2=\"145\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"280,145 273,148 273,142\" fill=\"#888\" stroke=\"none\"/><line x1=\"150\" y1=\"160\" x2=\"150\" y2=\"32\" stroke=\"#888\" stroke-width=\"1.2\"/><polygon points=\"150,25 153,32 147,32\" fill=\"#888\" stroke=\"none\"/><text x=\"282\" y=\"159\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">x</text><text x=\"158\" y=\"35\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">y</text><line x1=\"150\" y1=\"145\" x2=\"195.5\" y2=\"66.2\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"200,58.4 199,68.2 192,64.2\" fill=\"#c0392b\" stroke=\"none\"/><line x1=\"150\" y1=\"145\" x2=\"104.5\" y2=\"66.2\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"100,58.4 108,64.2 101,68.2\" fill=\"#1f5fbf\" stroke=\"none\"/><circle cx=\"150\" cy=\"145\" r=\"4\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><path d=\"M180 145 A30 30 0 0 0 165 119\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"188\" y=\"137\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><path d=\"M198 145 A48 48 0 0 0 126 103.4\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"136\" y=\"93\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">120°</text><text x=\"206\" y=\"62.4\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₁ = 20 N</text><text x=\"94\" y=\"62.4\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F₂ = 20 N</text></svg></div>A third force F₃ = 20 N along +x is now added to the original F₁ and F₂. The magnitude of the new resultant is:",
      options: ["40 N","20 N","54.6 N","34.6 N"],
      ans: "40 N",
      reason: "Rₓ = 10 − 10 + 20 = 20 N and Rᵧ = 34.6 N, so R = √(20² + 34.6²) = √1600 = 40 N. (54.6 N adds the magnitudes 20 + 34.6.)"
    },
    {
      q: "<div class=\"stimulus\">A child pulls a 5 kg sled along level ground with a rope. The rope exerts a constant force of 40 N at 60° above the horizontal and the sled moves 10 m horizontally. Take g = 9.8 m/s².<svg viewBox=\"0 0 300 185\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"10\" y1=\"135\" x2=\"290\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><rect x=\"95\" y=\"105\" width=\"80\" height=\"25\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"90\" y1=\"132\" x2=\"180\" y2=\"132\" stroke=\"#222\" stroke-width=\"1.2\"/><line x1=\"175\" y1=\"112\" x2=\"255\" y2=\"112\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"175\" y1=\"112\" x2=\"208\" y2=\"54.8\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"212.5,47 211.5,56.8 204.5,52.8\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M211 112 A36 36 0 0 0 193 80.8\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"215\" y=\"96\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><text x=\"218.5\" y=\"53\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 40 N</text><line x1=\"95\" y1=\"158\" x2=\"246\" y2=\"158\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><polygon points=\"255,158 246,162 246,154\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"175\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">displacement d = 10 m</text><text x=\"135\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5 kg</text></svg></div>The work done by the child's pulling force is:",
      options: ["100 J","400 J","200 J","346 J"],
      ans: "200 J",
      reason: "W = F·d = F d cos60° = 40 × 10 × 0.5 = 200 J. (346 J uses sin60°; 400 J ignores the angle.)"
    },
    {
      q: "<div class=\"stimulus\">A child pulls a 5 kg sled along level ground with a rope. The rope exerts a constant force of 40 N at 60° above the horizontal and the sled moves 10 m horizontally. Take g = 9.8 m/s².<svg viewBox=\"0 0 300 185\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"10\" y1=\"135\" x2=\"290\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><rect x=\"95\" y=\"105\" width=\"80\" height=\"25\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"90\" y1=\"132\" x2=\"180\" y2=\"132\" stroke=\"#222\" stroke-width=\"1.2\"/><line x1=\"175\" y1=\"112\" x2=\"255\" y2=\"112\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"175\" y1=\"112\" x2=\"208\" y2=\"54.8\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"212.5,47 211.5,56.8 204.5,52.8\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M211 112 A36 36 0 0 0 193 80.8\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"215\" y=\"96\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><text x=\"218.5\" y=\"53\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 40 N</text><line x1=\"95\" y1=\"158\" x2=\"246\" y2=\"158\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><polygon points=\"255,158 246,162 246,154\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"175\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">displacement d = 10 m</text><text x=\"135\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5 kg</text></svg></div>The work done by the weight of the sled during this displacement is:",
      options: ["−490 J","0 J","490 J","245 J"],
      ans: "0 J",
      reason: "The weight (down) is perpendicular to the displacement (horizontal), so W = mg d cos90° = 0."
    },
    {
      q: "<div class=\"stimulus\">A child pulls a 5 kg sled along level ground with a rope. The rope exerts a constant force of 40 N at 60° above the horizontal and the sled moves 10 m horizontally. Take g = 9.8 m/s².<svg viewBox=\"0 0 300 185\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"10\" y1=\"135\" x2=\"290\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><rect x=\"95\" y=\"105\" width=\"80\" height=\"25\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"90\" y1=\"132\" x2=\"180\" y2=\"132\" stroke=\"#222\" stroke-width=\"1.2\"/><line x1=\"175\" y1=\"112\" x2=\"255\" y2=\"112\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"175\" y1=\"112\" x2=\"208\" y2=\"54.8\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"212.5,47 211.5,56.8 204.5,52.8\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M211 112 A36 36 0 0 0 193 80.8\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"215\" y=\"96\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><text x=\"218.5\" y=\"53\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 40 N</text><line x1=\"95\" y1=\"158\" x2=\"246\" y2=\"158\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><polygon points=\"255,158 246,162 246,154\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"175\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">displacement d = 10 m</text><text x=\"135\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5 kg</text></svg></div>For the same 40 N force and 10 m displacement, the work done would be greatest if the rope were at an angle (to the horizontal) of:",
      options: ["90°","45°","30°","0°"],
      ans: "0°",
      reason: "W = F d cosθ is largest when cosθ = 1, i.e. θ = 0° (force along the displacement). At 90° the work would be zero."
    },
    {
      q: "<div class=\"stimulus\">A child pulls a 5 kg sled along level ground with a rope. The rope exerts a constant force of 40 N at 60° above the horizontal and the sled moves 10 m horizontally. Take g = 9.8 m/s².<svg viewBox=\"0 0 300 185\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"10\" y1=\"135\" x2=\"290\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><rect x=\"95\" y=\"105\" width=\"80\" height=\"25\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"90\" y1=\"132\" x2=\"180\" y2=\"132\" stroke=\"#222\" stroke-width=\"1.2\"/><line x1=\"175\" y1=\"112\" x2=\"255\" y2=\"112\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"175\" y1=\"112\" x2=\"208\" y2=\"54.8\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"212.5,47 211.5,56.8 204.5,52.8\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M211 112 A36 36 0 0 0 193 80.8\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"215\" y=\"96\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">60°</text><text x=\"218.5\" y=\"53\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 40 N</text><line x1=\"95\" y1=\"158\" x2=\"246\" y2=\"158\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><polygon points=\"255,158 246,162 246,154\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"175\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">displacement d = 10 m</text><text x=\"135\" y=\"121\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5 kg</text></svg></div>The sled also experiences a constant friction force of 15 N opposing the motion over the 10 m. The net work done on the sled by the rope and friction together is:",
      options: ["350 J","−150 J","50 J","200 J"],
      ans: "50 J",
      reason: "Friction does −15 × 10 = −150 J (θ = 180°). Net work = 200 − 150 = 50 J. (350 J adds the friction work instead of subtracting it.)"
    },
    {
      q: "<div class=\"stimulus\">A proton moves to the right with speed 2.0 × 10⁶ m/s through a uniform magnetic field of strength B = 0.50 T that points into the page, as shown. The charge of a proton is 1.6 × 10⁻¹⁹ C.<svg viewBox=\"0 0 300 205\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><circle cx=\"45\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"23.8\" x2=\"49.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"32.2\" x2=\"49.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"57.8\" x2=\"49.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"66.2\" x2=\"49.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"133.8\" x2=\"49.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"142.2\" x2=\"49.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"165.8\" x2=\"49.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"174.2\" x2=\"49.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"23.8\" x2=\"109.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"32.2\" x2=\"109.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"57.8\" x2=\"109.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"66.2\" x2=\"109.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"133.8\" x2=\"109.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"142.2\" x2=\"109.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"165.8\" x2=\"109.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"174.2\" x2=\"109.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"23.8\" x2=\"169.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"32.2\" x2=\"169.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"57.8\" x2=\"169.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"66.2\" x2=\"169.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"133.8\" x2=\"169.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"142.2\" x2=\"169.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"165.8\" x2=\"169.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"174.2\" x2=\"169.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"23.8\" x2=\"229.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"32.2\" x2=\"229.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"57.8\" x2=\"229.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"66.2\" x2=\"229.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"133.8\" x2=\"229.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"142.2\" x2=\"229.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"165.8\" x2=\"229.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"174.2\" x2=\"229.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"23.8\" x2=\"279.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"32.2\" x2=\"279.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"57.8\" x2=\"279.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"66.2\" x2=\"279.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"133.8\" x2=\"279.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"142.2\" x2=\"279.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"165.8\" x2=\"279.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"174.2\" x2=\"279.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"75\" cy=\"100\" r=\"9\" fill=\"#ffd7d7\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"75\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">+</text><line x1=\"84\" y1=\"100\" x2=\"166\" y2=\"100\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"175,100 166,104 166,96\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">v</text><text x=\"75\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">proton</text><text x=\"150\" y=\"195\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">× = uniform magnetic field B, into the page</text></svg></div>The direction of the magnetic force on the proton in the situation shown is:",
      options: ["Into the page","Towards the bottom of the page","Towards the right","Towards the top of the page"],
      ans: "Towards the top of the page",
      reason: "F = q v × B. With v along +x and B along −z: x × (−z) = −(x × z) = −(−y) = +y, i.e. towards the top of the page for a positive charge."
    },
    {
      q: "<div class=\"stimulus\">A proton moves to the right with speed 2.0 × 10⁶ m/s through a uniform magnetic field of strength B = 0.50 T that points into the page, as shown. The charge of a proton is 1.6 × 10⁻¹⁹ C.<svg viewBox=\"0 0 300 205\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><circle cx=\"45\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"23.8\" x2=\"49.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"32.2\" x2=\"49.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"57.8\" x2=\"49.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"66.2\" x2=\"49.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"133.8\" x2=\"49.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"142.2\" x2=\"49.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"165.8\" x2=\"49.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"174.2\" x2=\"49.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"23.8\" x2=\"109.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"32.2\" x2=\"109.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"57.8\" x2=\"109.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"66.2\" x2=\"109.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"133.8\" x2=\"109.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"142.2\" x2=\"109.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"165.8\" x2=\"109.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"174.2\" x2=\"109.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"23.8\" x2=\"169.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"32.2\" x2=\"169.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"57.8\" x2=\"169.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"66.2\" x2=\"169.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"133.8\" x2=\"169.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"142.2\" x2=\"169.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"165.8\" x2=\"169.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"174.2\" x2=\"169.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"23.8\" x2=\"229.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"32.2\" x2=\"229.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"57.8\" x2=\"229.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"66.2\" x2=\"229.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"133.8\" x2=\"229.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"142.2\" x2=\"229.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"165.8\" x2=\"229.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"174.2\" x2=\"229.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"23.8\" x2=\"279.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"32.2\" x2=\"279.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"57.8\" x2=\"279.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"66.2\" x2=\"279.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"133.8\" x2=\"279.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"142.2\" x2=\"279.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"165.8\" x2=\"279.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"174.2\" x2=\"279.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"75\" cy=\"100\" r=\"9\" fill=\"#ffd7d7\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"75\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">+</text><line x1=\"84\" y1=\"100\" x2=\"166\" y2=\"100\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"175,100 166,104 166,96\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">v</text><text x=\"75\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">proton</text><text x=\"150\" y=\"195\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">× = uniform magnetic field B, into the page</text></svg></div>An electron is fired with the same velocity through the same field. The magnetic force on it is directed:",
      options: ["Towards the bottom of the page","Out of the page","Towards the top of the page","Towards the left"],
      ans: "Towards the bottom of the page",
      reason: "The electron has negative charge, so F = −e v × B is opposite to the force on a proton: towards the bottom of the page."
    },
    {
      q: "<div class=\"stimulus\">A proton moves to the right with speed 2.0 × 10⁶ m/s through a uniform magnetic field of strength B = 0.50 T that points into the page, as shown. The charge of a proton is 1.6 × 10⁻¹⁹ C.<svg viewBox=\"0 0 300 205\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><circle cx=\"45\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"23.8\" x2=\"49.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"32.2\" x2=\"49.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"57.8\" x2=\"49.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"66.2\" x2=\"49.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"133.8\" x2=\"49.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"142.2\" x2=\"49.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"165.8\" x2=\"49.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"174.2\" x2=\"49.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"23.8\" x2=\"109.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"32.2\" x2=\"109.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"57.8\" x2=\"109.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"66.2\" x2=\"109.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"133.8\" x2=\"109.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"142.2\" x2=\"109.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"165.8\" x2=\"109.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"174.2\" x2=\"109.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"23.8\" x2=\"169.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"32.2\" x2=\"169.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"57.8\" x2=\"169.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"66.2\" x2=\"169.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"133.8\" x2=\"169.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"142.2\" x2=\"169.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"165.8\" x2=\"169.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"174.2\" x2=\"169.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"23.8\" x2=\"229.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"32.2\" x2=\"229.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"57.8\" x2=\"229.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"66.2\" x2=\"229.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"133.8\" x2=\"229.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"142.2\" x2=\"229.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"165.8\" x2=\"229.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"174.2\" x2=\"229.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"23.8\" x2=\"279.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"32.2\" x2=\"279.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"57.8\" x2=\"279.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"66.2\" x2=\"279.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"133.8\" x2=\"279.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"142.2\" x2=\"279.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"165.8\" x2=\"279.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"174.2\" x2=\"279.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"75\" cy=\"100\" r=\"9\" fill=\"#ffd7d7\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"75\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">+</text><line x1=\"84\" y1=\"100\" x2=\"166\" y2=\"100\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"175,100 166,104 166,96\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">v</text><text x=\"75\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">proton</text><text x=\"150\" y=\"195\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">× = uniform magnetic field B, into the page</text></svg></div>The magnitude of the magnetic force on the proton is:",
      options: ["1.6 × 10⁻¹³ N","1.6 × 10⁻¹² N","6.4 × 10⁻¹³ N","3.2 × 10⁻¹³ N"],
      ans: "1.6 × 10⁻¹³ N",
      reason: "v ⟂ B, so F = qvB = (1.6 × 10⁻¹⁹)(2.0 × 10⁶)(0.50) = 1.6 × 10⁻¹³ N."
    },
    {
      q: "<div class=\"stimulus\">A proton moves to the right with speed 2.0 × 10⁶ m/s through a uniform magnetic field of strength B = 0.50 T that points into the page, as shown. The charge of a proton is 1.6 × 10⁻¹⁹ C.<svg viewBox=\"0 0 300 205\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><circle cx=\"45\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"23.8\" x2=\"49.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"32.2\" x2=\"49.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"57.8\" x2=\"49.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"66.2\" x2=\"49.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"133.8\" x2=\"49.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"142.2\" x2=\"49.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"45\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"40.8\" y1=\"165.8\" x2=\"49.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"40.8\" y1=\"174.2\" x2=\"49.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"23.8\" x2=\"109.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"32.2\" x2=\"109.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"57.8\" x2=\"109.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"66.2\" x2=\"109.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"133.8\" x2=\"109.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"142.2\" x2=\"109.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"105\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"100.8\" y1=\"165.8\" x2=\"109.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"100.8\" y1=\"174.2\" x2=\"109.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"23.8\" x2=\"169.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"32.2\" x2=\"169.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"57.8\" x2=\"169.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"66.2\" x2=\"169.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"133.8\" x2=\"169.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"142.2\" x2=\"169.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"165\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"160.8\" y1=\"165.8\" x2=\"169.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"160.8\" y1=\"174.2\" x2=\"169.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"23.8\" x2=\"229.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"32.2\" x2=\"229.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"57.8\" x2=\"229.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"66.2\" x2=\"229.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"133.8\" x2=\"229.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"142.2\" x2=\"229.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"225\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"220.8\" y1=\"165.8\" x2=\"229.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"220.8\" y1=\"174.2\" x2=\"229.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"28\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"23.8\" x2=\"279.2\" y2=\"32.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"32.2\" x2=\"279.2\" y2=\"23.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"62\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"57.8\" x2=\"279.2\" y2=\"66.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"66.2\" x2=\"279.2\" y2=\"57.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"138\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"133.8\" x2=\"279.2\" y2=\"142.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"142.2\" x2=\"279.2\" y2=\"133.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"275\" cy=\"170\" r=\"6\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"270.8\" y1=\"165.8\" x2=\"279.2\" y2=\"174.2\" stroke=\"#222\" stroke-width=\"1.3\"/><line x1=\"270.8\" y1=\"174.2\" x2=\"279.2\" y2=\"165.8\" stroke=\"#222\" stroke-width=\"1.3\"/><circle cx=\"75\" cy=\"100\" r=\"9\" fill=\"#ffd7d7\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"75\" y=\"104\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">+</text><line x1=\"84\" y1=\"100\" x2=\"166\" y2=\"100\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><polygon points=\"175,100 166,104 166,96\" fill=\"#1f5fbf\" stroke=\"none\"/><text x=\"130\" y=\"92\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">v</text><text x=\"75\" y=\"122\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">proton</text><text x=\"150\" y=\"195\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">× = uniform magnetic field B, into the page</text></svg></div>The proton is now fired so that its velocity makes 30° with the field direction (same speed). The magnetic force has magnitude:",
      options: ["0 N","8.0 × 10⁻¹⁴ N","1.6 × 10⁻¹³ N","1.4 × 10⁻¹³ N"],
      ans: "8.0 × 10⁻¹⁴ N",
      reason: "F = qvB sin30° = 1.6 × 10⁻¹³ × 0.5 = 8.0 × 10⁻¹⁴ N. (1.4 × 10⁻¹³ N wrongly uses cos30°.)"
    },
    {
      q: "<div class=\"stimulus\">A mechanic tightens a bolt with a spanner. A force of 80 N is applied at the end of the handle, 0.25 m from the centre of the bolt, at 30° to the handle as shown. The spanner and force both lie in the plane of the page; the x-axis points right and the y-axis points up.<svg viewBox=\"0 0 300 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"45,104 205,106 205,114 45,116\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"11\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"45\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">bolt</text><line x1=\"205\" y1=\"110\" x2=\"275\" y2=\"110\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"205\" y1=\"110\" x2=\"257.8\" y2=\"79.5\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"265.6,75 259.8,83 255.8,76\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M243 110 A38 38 0 0 0 237.9 91\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"247\" y=\"106\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"261.6\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 80 N</text><line x1=\"45\" y1=\"134\" x2=\"205\" y2=\"134\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"125\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">r = 0.25 m</text><line x1=\"45\" y1=\"128\" x2=\"45\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205\" y1=\"128\" x2=\"205\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/></svg></div>The magnitude of the torque about the centre of the bolt is:",
      options: ["10 N m","5 N m","20 N m","17.3 N m"],
      ans: "10 N m",
      reason: "τ = r F sinθ = 0.25 × 80 × sin30° = 10 N m. (17.3 N m wrongly uses cos30°.)"
    },
    {
      q: "<div class=\"stimulus\">A mechanic tightens a bolt with a spanner. A force of 80 N is applied at the end of the handle, 0.25 m from the centre of the bolt, at 30° to the handle as shown. The spanner and force both lie in the plane of the page; the x-axis points right and the y-axis points up.<svg viewBox=\"0 0 300 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"45,104 205,106 205,114 45,116\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"11\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"45\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">bolt</text><line x1=\"205\" y1=\"110\" x2=\"275\" y2=\"110\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"205\" y1=\"110\" x2=\"257.8\" y2=\"79.5\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"265.6,75 259.8,83 255.8,76\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M243 110 A38 38 0 0 0 237.9 91\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"247\" y=\"106\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"261.6\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 80 N</text><line x1=\"45\" y1=\"134\" x2=\"205\" y2=\"134\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"125\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">r = 0.25 m</text><line x1=\"45\" y1=\"128\" x2=\"45\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205\" y1=\"128\" x2=\"205\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/></svg></div>The direction of the torque vector τ = r × F is:",
      options: ["Out of the page","Along the spanner","Into the page","Along the force"],
      ans: "Out of the page",
      reason: "r points along +x and F has a positive y-component, so r × F points along +z (x × y = z), i.e. out of the page. The torque vector is perpendicular to both r and F."
    },
    {
      q: "<div class=\"stimulus\">A mechanic tightens a bolt with a spanner. A force of 80 N is applied at the end of the handle, 0.25 m from the centre of the bolt, at 30° to the handle as shown. The spanner and force both lie in the plane of the page; the x-axis points right and the y-axis points up.<svg viewBox=\"0 0 300 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"45,104 205,106 205,114 45,116\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"11\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"45\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">bolt</text><line x1=\"205\" y1=\"110\" x2=\"275\" y2=\"110\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"205\" y1=\"110\" x2=\"257.8\" y2=\"79.5\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"265.6,75 259.8,83 255.8,76\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M243 110 A38 38 0 0 0 237.9 91\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"247\" y=\"106\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"261.6\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 80 N</text><line x1=\"45\" y1=\"134\" x2=\"205\" y2=\"134\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"125\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">r = 0.25 m</text><line x1=\"45\" y1=\"128\" x2=\"45\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205\" y1=\"128\" x2=\"205\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/></svg></div>With the same force and the same distance from the bolt, the largest possible torque would be:",
      options: ["10 N m","20 N m","40 N m","17.3 N m"],
      ans: "20 N m",
      reason: "The torque is maximum when F ⟂ r (sin90° = 1): τ = 0.25 × 80 = 20 N m."
    },
    {
      q: "<div class=\"stimulus\">A mechanic tightens a bolt with a spanner. A force of 80 N is applied at the end of the handle, 0.25 m from the centre of the bolt, at 30° to the handle as shown. The spanner and force both lie in the plane of the page; the x-axis points right and the y-axis points up.<svg viewBox=\"0 0 300 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><polygon points=\"45,104 205,106 205,114 45,116\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"11\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"45\" cy=\"110\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"45\" y=\"138\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">bolt</text><line x1=\"205\" y1=\"110\" x2=\"275\" y2=\"110\" stroke=\"#555\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"205\" y1=\"110\" x2=\"257.8\" y2=\"79.5\" stroke=\"#c0392b\" stroke-width=\"2.4\"/><polygon points=\"265.6,75 259.8,83 255.8,76\" fill=\"#c0392b\" stroke=\"none\"/><path d=\"M243 110 A38 38 0 0 0 237.9 91\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"247\" y=\"106\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><text x=\"261.6\" y=\"67\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">F = 80 N</text><line x1=\"45\" y1=\"134\" x2=\"205\" y2=\"134\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"125\" y=\"150\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">r = 0.25 m</text><line x1=\"45\" y1=\"128\" x2=\"45\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205\" y1=\"128\" x2=\"205\" y2=\"140\" stroke=\"#222\" stroke-width=\"1\"/></svg></div>To produce a torque of 10 N m with the force applied perpendicular to the handle at the same point, the force needed is:",
      options: ["10 N","80 N","20 N","40 N"],
      ans: "40 N",
      reason: "With sinθ = 1, F = τ / r = 10 / 0.25 = 40 N."
    },

    // ---- MCQs from the FBISE HSSC-I Physics model question paper (Section A), placed by chapter ----
    {
      q: "The direction of the vector A = 3î + 4ĵ relative to the x-axis is approximately:",
      options: ["30°","37°","41°","53°"],
      ans: "53°",
      reason: "tan θ = Ay / Ax = 4 / 3, so θ = tan⁻¹(1.333) = 53.1°. The angle 37° would be measured from the y-axis."
    },
    {
      q: "The equation |A · B| = |A × B| is consistent when the angle between vectors A and B is:",
      options: ["30°","45°","60°","90°"],
      ans: "45°",
      reason: "|A · B| = AB|cos θ| and |A × B| = AB sin θ. They are equal when |cos θ| = sin θ, i.e. tan θ = 1, so θ = 45°."
    }
    ];
  }
});
