// Class 11 Physics — Chapter 2: Vectors
// 28 MCQs, each with an explanation. Every answer was re-solved before writing the explanation.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities.
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
    }
    ];
  }
});
