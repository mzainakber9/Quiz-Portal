// Class 11 Physics — Chapter 3: Translatory Motion
// 105 MCQs, each with an explanation: 63 chapter-file MCQs + 36 SLO-based MCQs (incl. scenario and diagram questions) + 6 FBISE model-paper MCQs.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities (options are plain text).
QuizBank.register({
  class: "11th",
  subject: "Physics",
  type: "chapter",
  id: "ch3",
  label: "Chapter 3: Translatory Motion",
  order: 3,
  questions: function () {
    return [
    {
      q: "A body falling freely strikes the ground in 5 seconds, the distance covered by the body is:",
      options: ["122.5 m","25 m","24.5 m","34.5 m"],
      ans: "122.5 m",
      reason: "Free fall from rest: s = ½gt² = ½ × 9.8 × 5² = 122.5 m."
    },
    {
      q: "An object is dropped from a height of 10 m. Its velocity at the moment it touches the ground is:",
      options: ["10 ms⁻¹","14.14 ms⁻¹","196 ms⁻¹","19.6 ms⁻¹"],
      ans: "14.14 ms⁻¹",
      reason: "v² = 2gh = 2 × 10 × 10 = 200, so v = √200 = 14.14 m/s (taking g ≈ 10 m/s²). With g = 9.8 m/s² the value is about 14 m/s, so 14.14 m/s is the closest option."
    },
    {
      q: "The distances traveled by a body falling from rest in the first, second and third seconds are in the ratio:",
      options: ["1:2:3","1:3:5","1:4:9","none of these"],
      ans: "1:3:5",
      reason: "From rest, the distances in successive equal seconds are in the ratio of odd numbers: 1 : 3 : 5. (Distance in the nth second = ½g(2n − 1).)"
    },
    {
      q: "A bullet shot straight up, returns to its starting point in 10 sec, the initial speed was:",
      options: ["10 ms⁻¹","49 ms⁻¹","24 ms⁻¹","98 ms⁻¹"],
      ans: "49 ms⁻¹",
      reason: "Time up = time down = 10/2 = 5 s. At the top v = 0, so 0 = u − gt gives u = 9.8 × 5 = 49 m/s."
    },
    {
      q: "A ball is thrown horizontally from the top of a 50 meter-high cliff with an initial speed of 15 m/s. How long will it take to hit the ground?",
      options: ["2.5 seconds","3.2 seconds","3.6 seconds","4.1 seconds"],
      ans: "3.2 seconds",
      reason: "Vertical motion only: h = ½gt², so t = √(2h/g) = √(2 × 50/9.8) = √10.2 = 3.2 s. The horizontal speed does not affect the fall time."
    },
    {
      q: "A ball is thrown horizontally from the top of a tower 30 m high and lands 15 m from its base. What is the ball's initial speed?",
      options: ["36.14 ms⁻¹","6.07 ms⁻¹","24.49 ms⁻¹","98 ms⁻¹"],
      ans: "6.07 ms⁻¹",
      reason: "Fall time t = √(2h/g) = √(2 × 30/9.8) ≈ 2.47 s. Horizontal speed = range/time = 15/2.47 ≈ 6.07 m/s."
    },
    {
      q: "A ball thrown straight up at 15 ms⁻¹ feels a downward acceleration of 9.8 ms⁻² due to the pull of the earth on it. How high does the ball go before it starts to fall back?",
      options: ["11.48 m","25 m","50 m","30 m"],
      ans: "11.48 m",
      reason: "At the top v = 0, so v² = u² − 2gh gives h = u²/(2g) = 15²/(2 × 9.8) = 225/19.6 = 11.48 m."
    },
    {
      q: "A car travelling at 20 m/s comes to a stop in 4 seconds due to uniform deceleration. The stopping distance of the car is",
      options: ["11.48 m","25 m","40 m","30 m"],
      ans: "40 m",
      reason: "Uniform deceleration to rest: s = ((u + v)/2) t = ((20 + 0)/2) × 4 = 40 m."
    },
    {
      q: "By applying the brakes, a driver reduces the velocity of his car from 25 m/s to 15 m/s after a distance of 40 m. The deceleration of the car is:",
      options: ["0 ms⁻²","−5 ms⁻²","−10 ms⁻²","20 ms⁻²"],
      ans: "−5 ms⁻²",
      reason: "v² = u² + 2as gives 15² = 25² + 2a(40), so 225 = 625 + 80a and a = −400/80 = −5 m/s². The negative sign shows deceleration."
    },
    {
      q: "Salina is driving at a velocity of 12 ms⁻¹. Seeing a goat in front, she brakes to stop her car. If the deceleration of the car is 3 ms⁻², what is the distance covered by the car when it comes to a halt?",
      options: ["24 m","48 m","96 m","120 m"],
      ans: "24 m",
      reason: "v² = u² − 2as with v = 0: s = u²/(2a) = 12²/(2 × 3) = 144/6 = 24 m."
    },
    {
      q: "Starting from rest, a sprinter reaches his highest velocity in 4 seconds. He runs a distance of 32 m in 4 seconds. What is his acceleration?",
      options: ["0 ms⁻²","4 ms⁻²","10 ms⁻²","32 ms⁻²"],
      ans: "4 ms⁻²",
      reason: "From rest, s = ½at², so a = 2s/t² = 2 × 32/4² = 64/16 = 4 m/s²."
    },
    {
      q: "A rickshaw accelerates from 15 ms⁻¹ with an acceleration of 3 ms⁻². What is the velocity after 6 seconds?",
      options: ["3 ms⁻¹","23 ms⁻¹","33 ms⁻¹","13 ms⁻¹"],
      ans: "33 ms⁻¹",
      reason: "v = u + at = 15 + 3 × 6 = 15 + 18 = 33 m/s."
    },
    {
      q: "The angle between velocity and acceleration at the highest point during projectile motion is:",
      options: ["45°","30°","0°","90°"],
      ans: "90°",
      reason: "At the highest point the velocity is horizontal and the acceleration (gravity) is vertically downward, so the angle between them is 90°."
    },
    {
      q: "When the projectile reaches the highest point of the trajectory, the vertical component of velocity becomes:",
      options: ["−9.8 m/s","9.8 m/s","zero","infinity"],
      ans: "zero",
      reason: "At the top of its path the projectile stops rising, so the vertical component of velocity is zero (only the horizontal component remains)."
    },
    {
      q: "Which of the following remains constant during the motion of a projectile fired from a planet?",
      options: ["Kinetic energy","Momentum","Vertical component of velocity","Horizontal component of velocity"],
      ans: "Horizontal component of velocity",
      reason: "Gravity acts only vertically, so the horizontal component of velocity stays constant. Kinetic energy, momentum and the vertical velocity all change during the flight."
    },
    {
      q: "The acceleration of projectile along x-axis is:",
      options: ["Zero","Increases","Decreases","none of these"],
      ans: "Zero",
      reason: "Gravity acts only downward, so there is no force and no acceleration along the x-axis (horizontal): aₓ = 0."
    },
    {
      q: "The path of a projectile usually appears as:",
      options: ["Parabola","Hyperbola","Straight line","None of above"],
      ans: "Parabola",
      reason: "Combining uniform horizontal motion with uniformly accelerated vertical motion gives y ∝ x², so the path of a projectile is a parabola."
    },
    {
      q: "During projectile motion, the vertical component of velocity:",
      options: ["changes with time","becomes zero","does not change but remains constant","increases with time"],
      ans: "changes with time",
      reason: "The vertical velocity v_y = v_i sinθ − gt changes continuously with time (it decreases while rising, is zero at the top and then increases downward)."
    },
    {
      q: "A bomber drops its bomb when it is vertically above the target. It misses the target due to:",
      options: ["Horizontal component of velocity","Vertical component of velocity","Pull of the Earth","Acceleration due to gravity"],
      ans: "Horizontal component of velocity",
      reason: "The bomb carries the horizontal velocity of the bomber when it is released. While it falls it keeps moving forward with this horizontal component, so it lands ahead of the target and misses it."
    },
    {
      q: "Motion of projectiles is:",
      options: ["1 dimension","2 dimension","3 dimension","4 dimension"],
      ans: "2 dimension",
      reason: "A projectile moves in a vertical plane with both horizontal and vertical motion, i.e. in two dimensions."
    },
    {
      q: "A ball is thrown up at an angle of 60° with horizontal, with a speed of 14 ms⁻¹. The velocity of the ball at the highest point is:",
      options: ["14 m/s","0 m/s","7 m/s","16 m/s"],
      ans: "7 m/s",
      reason: "At the highest point only the horizontal component remains: v = v_i cosθ = 14 × cos 60° = 14 × 0.5 = 7 m/s."
    },
    {
      q: "A ball is thrown with an initial speed of 30 ms⁻¹ in a direction 30° above the horizontal. Its vertical component of velocity is:",
      options: ["25.98 ms⁻¹","30 ms⁻¹","11 ms⁻¹","15 ms⁻¹"],
      ans: "15 ms⁻¹",
      reason: "v_y = v_i sinθ = 30 × sin 30° = 30 × 0.5 = 15 m/s. (25.98 m/s is the horizontal component.)"
    },
    {
      q: "The value of horizontal acceleration during projectile motion:",
      options: ["45 ms⁻²","Zero","9.8 ms⁻²","Maximum"],
      ans: "Zero",
      reason: "The only force is gravity, which acts vertically. So the horizontal acceleration of a projectile is zero."
    },
    {
      q: "Which of the following quantities remain same during projectile motion?",
      options: ["vertical component of acceleration","horizontal component of acceleration","horizontal component of velocity","all of these"],
      ans: "all of these",
      reason: "In projectile motion the acceleration is always g downward (vertical component of acceleration is constant) and zero horizontally (also constant), and the horizontal velocity is constant. So all three stay the same."
    },
    {
      q: "Two particles A and B are projected with the same velocities. A is projected vertically upwards while B is projected at an angle 45° with the horizontal. Which of the following statement is wrong?",
      options: ["the range of B is more than A","the vertical component of velocity of B is more than A","the horizontal component of velocity of B is more than A","the height achieved by A is more than B"],
      ans: "the vertical component of velocity of B is more than A",
      reason: "B is projected at 45°, so its vertical component is v sin 45° = 0.707v, which is less than A's vertical velocity v. So the statement 'vertical component of B is more than A' is wrong. The other three statements are true."
    },
    {
      q: "A person can throw a stone to a maximum distance of 100 m. The greatest height to which he can throw the stone is:",
      options: ["100 m","75 m","50 m","25 m"],
      ans: "50 m",
      reason: "Maximum range (at 45°) = v²/g = 100 m, so v² = 100g. The greatest height is by throwing vertically upward: h = v²/(2g) = 100g/(2g) = 50 m."
    },
    {
      q: "The velocity of projectile at its maximum height is:",
      options: ["v_i sinθ","v_i cosθ","v_i","Zero"],
      ans: "v_i cosθ",
      reason: "At maximum height the vertical component is zero, so the velocity of the projectile is only the horizontal component, v_i cosθ."
    },
    {
      q: "The maximum height attained by a projectile is:",
      options: ["(v_i² sin²θ) / 2g","(v_i² sin²θ) / g","(v_i² cos²θ) / 2g","(v_i² cos²θ) / g"],
      ans: "(v_i² sin²θ) / 2g",
      reason: "At maximum height v_y = 0: 0 = (v_i sinθ)² − 2gH, so H = v_i² sin²θ / (2g)."
    },
    {
      q: "A projectile is launched at an angle of 45° with an initial velocity of 20 m/s. What is the maximum height it reaches? (Assume g = 9.8 m/s²)",
      options: ["5.1 meters","10.2 meters","15.3 meters","20.4 meters"],
      ans: "10.2 meters",
      reason: "H = v_i² sin²θ/(2g) = (20)² × sin² 45° / (2 × 9.8) = 400 × 0.5 / 19.6 = 10.2 m."
    },
    {
      q: "Which of the following is best to calculate the time of flight for projectile is",
      options: ["2v_i sinθ / g","v_i² sin²θ / 2g","v_i² sin(2θ) / g","2v_i sin²θ / g"],
      ans: "2v_i sinθ / g",
      reason: "Time of flight = 2v_y/g = 2v_i sinθ / g. The other formulas are for maximum height and range."
    },
    {
      q: "If the time of flight of a projectile is doubled, what happens to the maximum height attained?",
      options: ["Halved","Remains unchanged","Doubled","Becomes four times"],
      ans: "Becomes four times",
      reason: "H = v_i² sin²θ/(2g) and T = 2v_i sinθ/g, so H = gT²/8. Thus H ∝ T²: doubling T makes the maximum height 4 times."
    },
    {
      q: "If the initial velocity of a projectile becomes double, the time of flight will be:",
      options: ["Double","Same","3 times","4 times"],
      ans: "Double",
      reason: "T = 2v_i sinθ/g, so T ∝ v_i. Doubling the initial velocity doubles the time of flight."
    },
    {
      q: "A basketball player throws a ball at a speed of 12 m/s at an angle of 60° from the horizontal. Calculate the time of flight of the ball until it hits the ground.",
      options: ["2.12 seconds","4.24 seconds","7.5 seconds","15 seconds"],
      ans: "2.12 seconds",
      reason: "T = 2v_i sinθ/g = 2 × 12 × sin 60° / 9.8 = 24 × 0.866 / 9.8 = 2.12 s."
    },
    {
      q: "The horizontal range of projectile is maximum when it is projected at angle of:",
      options: ["20°","30°","45°","60°"],
      ans: "45°",
      reason: "Range R = v_i² sin2θ / g is largest when sin 2θ = 1, i.e. 2θ = 90°, θ = 45°."
    },
    {
      q: "Range of projectile is proportional to:",
      options: ["sinθ","sin²θ","2sinθ","sin(2θ)"],
      ans: "sin(2θ)",
      reason: "R = v_i² sin(2θ)/g, so the range is proportional to sin(2θ) for a given speed."
    },
    {
      q: "A projectile will cover the same horizontal distances for which of the following pair of angles:",
      options: ["30°, 60°","20°, 50°","20°, 40°","20°, 80°"],
      ans: "30°, 60°",
      reason: "Range is the same for complementary angles (θ and 90° − θ) because sin 2θ = sin(180° − 2θ). Among the options only 30° and 60° add up to 90°."
    },
    {
      q: "A stone is thrown at an angle θ with the horizontal such that the horizontal range is equal to maximum height, then the value of tan θ is:",
      options: ["1","2","3","4"],
      ans: "4",
      reason: "R = v² sin2θ/g = 2v² sinθ cosθ/g and H = v² sin²θ/(2g). Setting R = H: 2 sinθ cosθ = sin²θ/2, so 4 cosθ = sinθ and tanθ = 4."
    },
    {
      q: "Which shows correct relation between H and T for a projectile:",
      options: ["H = gT² / 8","H = gT² / 9","H = 8g / T²","H = 8 / (gT²)"],
      ans: "H = gT² / 8",
      reason: "H = gT²/8. This follows from H = v_i² sin²θ/(2g) and T = 2v_i sinθ/g, giving v_i sinθ = gT/2 and H = (gT/2)²/(2g) = gT²/8."
    },
    {
      q: "The angle of projection for which maximum height of projectile and corresponding range are equal:",
      options: ["46°","56°","66°","76°"],
      ans: "76°",
      reason: "Maximum height H = v_i² sin²θ/(2g) and range R = v_i² sin2θ/g. Setting H = R gives sin²θ/2 = 2 sinθ cosθ, so tanθ = 4 and θ = tan⁻¹(4) ≈ 76°."
    },
    {
      q: "If the angle of projection is greater than 45°, then the:",
      options: ["Height attained is more but range is less","height attained is less but range is more","Range and height attained is less","both height attained and range are more"],
      ans: "Height attained is more but range is less",
      reason: "For θ &gt; 45° the projectile is thrown more steeply. Maximum height H ∝ sin²θ is greater, while the range R ∝ sin 2θ is smaller than the maximum range (for 45° &lt; θ &lt; 90°)."
    },
    {
      q: "Relation for the maximum range of projectile is:",
      options: ["2v_i² / g","v_i² / g","(v_i² sin 2θ) / g","v_i² / 2g"],
      ans: "v_i² / g",
      reason: "R = v_i² sin 2θ / g is maximum when sin 2θ = 1, so R_max = v_i² / g."
    },
    {
      q: "The range of a projectile becomes half of its maximum value at an angle of:",
      options: ["15°","25°","45°","72°"],
      ans: "15°",
      reason: "R = R_max/2 gives sin 2θ = 1/2, so 2θ = 30° and θ = 15° (the other solution is 75°). 15° is the option given."
    },
    {
      q: "The horizontal range of projectile is minimum when it is projected at angle of:",
      options: ["50°","60°","70°","80°"],
      ans: "80°",
      reason: "R ∝ sin 2θ. Compare the options: sin 100° = 0.985, sin 120° = 0.866, sin 140° = 0.643, sin 160° = 0.342. The smallest range is at 80°."
    },
    {
      q: "The angle of projection for which max. height is equal to the horizontal range is:",
      options: ["45°","67°","76°","56°"],
      ans: "76°",
      reason: "Height = range gives tanθ = 4, so θ = 75.96° ≈ 76°."
    },
    {
      q: "A cricket ball is launched from the ground at an angle of 45° with an initial velocity of 30 ms⁻¹. What is the range of the projectile?",
      options: ["60 meters","90 meters","120 meters","150 meters"],
      ans: "90 meters",
      reason: "R = v² sin 2θ / g = 30² × sin 90° / 10 = 90 m (taking g ≈ 10 m/s²). With g = 9.8 m/s² it is about 91.8 m, so 90 m is the closest option."
    },
    {
      q: "Two projectiles are projected with the same speed at 30° and 60° with the horizontal respectively. The ratio of their range will be:",
      options: ["0.5:1","1:1","1:15","1:2"],
      ans: "1:1",
      reason: "The angles 30° and 60° are complementary (sum 90°), so sin 60° = sin 120° and the ranges are equal. Ratio = 1 : 1."
    },
    {
      q: "The horizontal range of projectile is minimum when it is projected at angle of:",
      options: ["20°","30°","15°","45°"],
      ans: "15°",
      reason: "R ∝ sin 2θ: sin 30° = 0.5 (15°), sin 60° = 0.866 (30°), sin 90° = 1 (45°). The smallest value among the options is at 15°."
    },
    {
      q: "In case of elastic collision between two bodies:",
      options: ["momentum is conserved but energy is not","energy is conserved but momentum is not","both momentum and energy are conserved","both momentum and energy are not conserved"],
      ans: "both momentum and energy are conserved",
      reason: "In an elastic collision both the momentum and the kinetic energy of the system are conserved."
    },
    {
      q: "A ball is dropped from a height of 4.2 meters. At what height will it rise if there is no loss after rebounding?",
      options: ["4.2 m","8.4 m","12.6 m","None"],
      ans: "4.2 m",
      reason: "With no energy loss on rebounding, the ball keeps its mechanical energy and rises back to its original height of 4.2 m."
    },
    {
      q: "In an inelastic collision:",
      options: ["K.E is more after the collision","K.E is less after the collision","momentum is more after the collision","momentum is less after the collision"],
      ans: "K.E is less after the collision",
      reason: "In an inelastic collision momentum is conserved, but some kinetic energy is converted to heat, sound and deformation. So the kinetic energy after the collision is less."
    },
    {
      q: "When a massive body of mass m₁ collides with lighter stationary body of mass m₂, the velocity of massive body after collision will be:",
      options: ["v₁' = 2v₁","v₂' = v₁","v₁' = v₁","v₂' = 2v₂"],
      ans: "v₁' = v₁",
      reason: "For a very heavy body hitting a light stationary body (m₁ ≫ m₂): v₁' = ((m₁ − m₂)/(m₁ + m₂))v₁ ≈ v₁. The heavy body continues almost unaffected, with the same velocity."
    },
    {
      q: "The two masses m₁ and m₂ can interchange their velocities after collision if:",
      options: ["m₁ >> m₂","m₁ = m₂","m₂ >> m₁","m₂ = 0"],
      ans: "m₁ = m₂",
      reason: "In an elastic collision, v₁' = ((m₁ − m₂)/(m₁ + m₂))v₁ + (2m₂/(m₁ + m₂))v₂. For m₁ = m₂ this gives v₁' = v₂ and v₂' = v₁, so the two bodies exchange velocities."
    },
    {
      q: "Two identical balls, each of mass 2 kg, collide head on elastically. If one ball is stationary and the other is moving at 3 m/s before the collision, what is the velocity of the moving ball after collision?",
      options: ["0 m/s","1.5 m/s","3 m/s","6 m/s"],
      ans: "0 m/s",
      reason: "Identical masses in an elastic head-on collision exchange velocities. The moving ball transfers all its motion to the stationary ball and stops, so its final velocity is 0 m/s."
    },
    {
      q: "If two objects have the same momentum, which object has greater kinetic energy?",
      options: ["Object with larger mass","Object with smaller mass","Both have the same kinetic energy","It cannot be determined"],
      ans: "Object with smaller mass",
      reason: "K.E = p²/(2m). For the same momentum, K.E ∝ 1/m, so the object with the smaller mass has more kinetic energy."
    },
    {
      q: "A projectile thrown upward moves in its parabolic path, the velocity and acceleration vectors for the projectile are perpendicular to each other at:",
      options: ["no where","the highest point","the launch point","the landing point"],
      ans: "the highest point",
      reason: "Velocity and acceleration are perpendicular only at the highest point, where the velocity is horizontal and the acceleration is vertical (downward)."
    },
    {
      q: "A truck driving along a highway road has a large quantity of momentum. If it moves at the same speed but has twice as much mass, its momentum is:",
      options: ["zero","quadruple","doubled","unchanged"],
      ans: "doubled",
      reason: "p = mv. At the same speed, doubling the mass doubles the momentum."
    },
    {
      q: "A 5 N force is applied to a 3 kg ball to change its velocity from 9 m/s to 3 m/s. This impulse causes momentum change of the ball to be ........ kg·m/s.",
      options: ["−2.5","−10","−18","−45"],
      ans: "−18",
      reason: "Change in momentum (impulse) = m(v_f − v_i) = 3 × (3 − 9) = 3 × (−6) = −18 kg·m/s. The 5 N force value is not needed."
    },
    {
      q: "Which of the following statement is true about the projectile motion?",
      options: ["Projectile motion is the motion of an object projected vertically upward into the air and moving under the influence of gravity.","Projectile motion is the motion of an object projected into the air and moving independently of gravity.","Projectile motion is the motion of an object projected into the air and moving under the influence of gravity.","Projectile motion is the motion of an object projected horizontally into the air and moving independently of gravity."],
      ans: "Projectile motion is the motion of an object projected into the air and moving under the influence of gravity.",
      reason: "Projectile motion is the motion of an object thrown into the air that moves under the influence of gravity alone (after launch). It is not independent of gravity, and it is not limited to vertical or horizontal projection."
    },
    {
      q: "The vertical component of velocity of a projectile is smallest at:",
      options: ["The instant it is thrown.","Halfway to the top.","The top.","The landing point."],
      ans: "The top.",
      reason: "The vertical component of velocity is zero at the top of the path, which is its smallest magnitude. It is larger at launch and landing."
    },
    {
      q: "A 4 kg object has a momentum of 12 kg·m/s. The object's speed is........ m/s.",
      options: ["3","4","12","48"],
      ans: "3",
      reason: "p = mv, so v = p/m = 12/4 = 3 m/s."
    },
    {
      q: "A bomb of mass 9 kg explodes into 2 pieces of mass 3 kg and 6 kg. The velocity of mass 3 kg is 1.6 m/s. What is the kinetic energy of mass 6 kg?",
      options: ["3.84 J","9.6 J","1.92 J","2.92 J"],
      ans: "1.92 J",
      reason: "Initial momentum is zero, so the pieces have equal and opposite momentum: 3 × 1.6 = 6 × v, so v = 0.8 m/s. K.E of the 6 kg piece = ½ × 6 × 0.8² = 3 × 0.64 = 1.92 J."
    },
    {
      q: "What is the force experienced by a projectile after the initial force that launched it into the air in the absence of air resistance?",
      options: ["The gravitational force","The nuclear force","The contact force","The electromagnetic force"],
      ans: "The gravitational force",
      reason: "After launch, in the absence of air resistance, the only force acting on a projectile is the gravitational force (its weight). The launching force acts only at the start."
    },
    {
      q: "If a projectile is launched on level ground, what launch angle maximizes the range of the projectile?",
      options: ["0°","30°","45°","90°"],
      ans: "45°",
      reason: "On level ground R = v² sin 2θ / g is largest when sin 2θ = 1, i.e. θ = 45°."
    },

    // ---- Additional MCQs written to the FBISE HSSC-I Physics (Grade XI) SLOs: straight, scenario-based and diagram questions ----
    {
      q: "<div class=\"stimulus\">A footballer kicks a ball from level ground with initial speed 50 m/s at an angle θ above the horizontal, where sin θ = 0.6 and cos θ = 0.8. Neglect air resistance and take g = 9.8 m/s².<svg viewBox=\"0 0 300 150\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"125.0\" x2=\"290.0\" y2=\"125.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,125.0 35.0,121.3 40.0,117.8 45.0,114.4 50.0,111.2 55.0,108.2 60.0,105.3 65.0,102.5 70.0,99.9 75.0,97.5 80.0,95.2 85.0,93.0 90.0,91.0 95.0,89.2 100.0,87.5 105.0,86.0 110.0,84.6 115.0,83.4 120.0,82.3 125.0,81.4 130.0,80.6 135.0,80.0 140.0,79.6 145.0,79.3 150.0,79.1 155.0,79.1 160.0,79.3 165.0,79.6 170.0,80.0 175.0,80.6 180.0,81.4 185.0,82.3 190.0,83.4 195.0,84.6 200.0,86.0 205.0,87.5 210.0,89.2 215.0,91.1 220.0,93.1 225.0,95.2 230.0,97.5 235.0,100.0 240.0,102.6 245.0,105.3 250.0,108.2 255.0,111.3 260.0,114.5 265.0,117.9 270.0,121.4 275.0,125.1\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"30.0\" y1=\"125.0\" x2=\"55.6\" y2=\"105.8\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"62.0,101.0 53.5,103.0 57.7,108.6\" fill=\"#c0392b\"/><text x=\"75.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀ = 50 m/s</text><path d=\"M 58 125 A 28 28 0 0 0 52.4 108.2\" fill=\"none\" stroke=\"#222\"/><text x=\"66.0\" y=\"119.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >θ</text><text x=\"30.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"275.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"152.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >path of the ball (no air resistance)</text></svg></div>How long is the ball in the air before it returns to the ground?",
      options: ["6.12 s","8.16 s","10.2 s","3.06 s"],
      ans: "6.12 s",
      reason: "T = 2v₀ sinθ / g = 2 × 30 / 9.8 = 6.12 s. Using v₀ instead of the vertical component (10.2 s) or the horizontal component (8.16 s) is wrong; 3.06 s is only the time to the top."
    },
    {
      q: "<div class=\"stimulus\">A footballer kicks a ball from level ground with initial speed 50 m/s at an angle θ above the horizontal, where sin θ = 0.6 and cos θ = 0.8. Neglect air resistance and take g = 9.8 m/s².<svg viewBox=\"0 0 300 150\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"125.0\" x2=\"290.0\" y2=\"125.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,125.0 35.0,121.3 40.0,117.8 45.0,114.4 50.0,111.2 55.0,108.2 60.0,105.3 65.0,102.5 70.0,99.9 75.0,97.5 80.0,95.2 85.0,93.0 90.0,91.0 95.0,89.2 100.0,87.5 105.0,86.0 110.0,84.6 115.0,83.4 120.0,82.3 125.0,81.4 130.0,80.6 135.0,80.0 140.0,79.6 145.0,79.3 150.0,79.1 155.0,79.1 160.0,79.3 165.0,79.6 170.0,80.0 175.0,80.6 180.0,81.4 185.0,82.3 190.0,83.4 195.0,84.6 200.0,86.0 205.0,87.5 210.0,89.2 215.0,91.1 220.0,93.1 225.0,95.2 230.0,97.5 235.0,100.0 240.0,102.6 245.0,105.3 250.0,108.2 255.0,111.3 260.0,114.5 265.0,117.9 270.0,121.4 275.0,125.1\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"30.0\" y1=\"125.0\" x2=\"55.6\" y2=\"105.8\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"62.0,101.0 53.5,103.0 57.7,108.6\" fill=\"#c0392b\"/><text x=\"75.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀ = 50 m/s</text><path d=\"M 58 125 A 28 28 0 0 0 52.4 108.2\" fill=\"none\" stroke=\"#222\"/><text x=\"66.0\" y=\"119.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >θ</text><text x=\"30.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"275.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"152.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >path of the ball (no air resistance)</text></svg></div>What is the maximum height reached by the ball?",
      options: ["45.9 m","81.6 m","91.8 m","127.6 m"],
      ans: "45.9 m",
      reason: "Only the vertical component (30 m/s) matters: H = (v₀ sinθ)² / 2g = 30² / 19.6 = 45.9 m. 81.6 m comes from wrongly using the horizontal component 40 m/s."
    },
    {
      q: "<div class=\"stimulus\">A footballer kicks a ball from level ground with initial speed 50 m/s at an angle θ above the horizontal, where sin θ = 0.6 and cos θ = 0.8. Neglect air resistance and take g = 9.8 m/s².<svg viewBox=\"0 0 300 150\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"125.0\" x2=\"290.0\" y2=\"125.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,125.0 35.0,121.3 40.0,117.8 45.0,114.4 50.0,111.2 55.0,108.2 60.0,105.3 65.0,102.5 70.0,99.9 75.0,97.5 80.0,95.2 85.0,93.0 90.0,91.0 95.0,89.2 100.0,87.5 105.0,86.0 110.0,84.6 115.0,83.4 120.0,82.3 125.0,81.4 130.0,80.6 135.0,80.0 140.0,79.6 145.0,79.3 150.0,79.1 155.0,79.1 160.0,79.3 165.0,79.6 170.0,80.0 175.0,80.6 180.0,81.4 185.0,82.3 190.0,83.4 195.0,84.6 200.0,86.0 205.0,87.5 210.0,89.2 215.0,91.1 220.0,93.1 225.0,95.2 230.0,97.5 235.0,100.0 240.0,102.6 245.0,105.3 250.0,108.2 255.0,111.3 260.0,114.5 265.0,117.9 270.0,121.4 275.0,125.1\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"30.0\" y1=\"125.0\" x2=\"55.6\" y2=\"105.8\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"62.0,101.0 53.5,103.0 57.7,108.6\" fill=\"#c0392b\"/><text x=\"75.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀ = 50 m/s</text><path d=\"M 58 125 A 28 28 0 0 0 52.4 108.2\" fill=\"none\" stroke=\"#222\"/><text x=\"66.0\" y=\"119.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >θ</text><text x=\"30.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"275.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"152.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >path of the ball (no air resistance)</text></svg></div>Where is the ball 2.0 s after the kick, measured from the launch point (horizontal distance, height)?",
      options: ["(80 m, 40.4 m)","(80 m, 60 m)","(100 m, 40.4 m)","(80 m, 20.8 m)"],
      ans: "(80 m, 40.4 m)",
      reason: "x = vₓt = 40 × 2 = 80 m. y = v_y t − ½gt² = 30 × 2 − 4.9 × 4 = 40.4 m. (20.8 m results from forgetting the ½ in ½gt².)"
    },
    {
      q: "<div class=\"stimulus\">A footballer kicks a ball from level ground with initial speed 50 m/s at an angle θ above the horizontal, where sin θ = 0.6 and cos θ = 0.8. Neglect air resistance and take g = 9.8 m/s².<svg viewBox=\"0 0 300 150\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"125.0\" x2=\"290.0\" y2=\"125.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,125.0 35.0,121.3 40.0,117.8 45.0,114.4 50.0,111.2 55.0,108.2 60.0,105.3 65.0,102.5 70.0,99.9 75.0,97.5 80.0,95.2 85.0,93.0 90.0,91.0 95.0,89.2 100.0,87.5 105.0,86.0 110.0,84.6 115.0,83.4 120.0,82.3 125.0,81.4 130.0,80.6 135.0,80.0 140.0,79.6 145.0,79.3 150.0,79.1 155.0,79.1 160.0,79.3 165.0,79.6 170.0,80.0 175.0,80.6 180.0,81.4 185.0,82.3 190.0,83.4 195.0,84.6 200.0,86.0 205.0,87.5 210.0,89.2 215.0,91.1 220.0,93.1 225.0,95.2 230.0,97.5 235.0,100.0 240.0,102.6 245.0,105.3 250.0,108.2 255.0,111.3 260.0,114.5 265.0,117.9 270.0,121.4 275.0,125.1\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"30.0\" y1=\"125.0\" x2=\"55.6\" y2=\"105.8\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"62.0,101.0 53.5,103.0 57.7,108.6\" fill=\"#c0392b\"/><text x=\"75.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀ = 50 m/s</text><path d=\"M 58 125 A 28 28 0 0 0 52.4 108.2\" fill=\"none\" stroke=\"#222\"/><text x=\"66.0\" y=\"119.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >θ</text><text x=\"30.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"275.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"152.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >path of the ball (no air resistance)</text></svg></div>What is the speed of the ball 2.0 s after the kick?",
      options: ["40.0 m/s","50.0 m/s","41.3 m/s","10.4 m/s"],
      ans: "41.3 m/s",
      reason: "vₓ = 40 m/s (constant); v_y = 30 − 9.8 × 2 = 10.4 m/s. Speed = √(40² + 10.4²) = 41.3 m/s. 40 m/s ignores the vertical component; 10.4 m/s ignores the horizontal one."
    },
    {
      q: "<div class=\"stimulus\">Two carts run on a straight, level, frictionless air track. A 2 kg cart moving at 6 m/s collides head-on with a 4 kg cart at rest.<svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"6.0\" y=\"16.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >Before</text><rect x=\"40\" y=\"36\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"60.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"48\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"72\" cy=\"65\" r=\"4\" fill=\"#222\"/><rect x=\"190\" y=\"36\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"220.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"198\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"242\" cy=\"65\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"69.0\" x2=\"310.0\" y2=\"69.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"60.0\" y1=\"29.0\" x2=\"102.0\" y2=\"29.0\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"110.0,29.0 102.0,25.5 102.0,32.5\" fill=\"#c0392b\"/><text x=\"120.0\" y=\"33.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >6 m/s</text><text x=\"220.0\" y=\"28.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >at rest</text><text x=\"6.0\" y=\"98.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >After</text><rect x=\"95\" y=\"118\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"115.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"103\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"127\" cy=\"147\" r=\"4\" fill=\"#222\"/><rect x=\"215\" y=\"118\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"245.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"223\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"267\" cy=\"147\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"151.0\" x2=\"310.0\" y2=\"151.0\" stroke=\"#222\" stroke-width=\"1.4\"/><text x=\"115.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₁′ = ?</text><text x=\"245.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₂′ = ?</text></svg></div>If the collision is perfectly elastic, what is the velocity of the 4 kg cart after the collision?",
      options: ["4 m/s","6 m/s","2 m/s","3 m/s"],
      ans: "4 m/s",
      reason: "Elastic: v₂′ = 2m₁u₁/(m₁ + m₂) = 2 × 2 × 6 / 6 = 4 m/s. Check by momentum: 12 = 2v₁′ + 4(4) gives v₁′ = −2 m/s. 2 m/s is the common speed if the carts stuck together."
    },
    {
      q: "<div class=\"stimulus\">Two carts run on a straight, level, frictionless air track. A 2 kg cart moving at 6 m/s collides head-on with a 4 kg cart at rest.<svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"6.0\" y=\"16.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >Before</text><rect x=\"40\" y=\"36\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"60.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"48\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"72\" cy=\"65\" r=\"4\" fill=\"#222\"/><rect x=\"190\" y=\"36\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"220.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"198\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"242\" cy=\"65\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"69.0\" x2=\"310.0\" y2=\"69.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"60.0\" y1=\"29.0\" x2=\"102.0\" y2=\"29.0\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"110.0,29.0 102.0,25.5 102.0,32.5\" fill=\"#c0392b\"/><text x=\"120.0\" y=\"33.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >6 m/s</text><text x=\"220.0\" y=\"28.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >at rest</text><text x=\"6.0\" y=\"98.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >After</text><rect x=\"95\" y=\"118\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"115.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"103\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"127\" cy=\"147\" r=\"4\" fill=\"#222\"/><rect x=\"215\" y=\"118\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"245.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"223\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"267\" cy=\"147\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"151.0\" x2=\"310.0\" y2=\"151.0\" stroke=\"#222\" stroke-width=\"1.4\"/><text x=\"115.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₁′ = ?</text><text x=\"245.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₂′ = ?</text></svg></div>For the same elastic collision, what happens to the 2 kg cart?",
      options: ["It rebounds at 6 m/s","It rebounds at 2 m/s","It stops","It continues forward at 2 m/s"],
      ans: "It rebounds at 2 m/s",
      reason: "v₁′ = (m₁ − m₂)u₁/(m₁ + m₂) = (2 − 4) × 6 / 6 = −2 m/s, so the lighter cart bounces back at 2 m/s. It does not stop (that happens only for equal masses) and it cannot rebound at 6 m/s because that would need extra kinetic energy."
    },
    {
      q: "<div class=\"stimulus\">Two carts run on a straight, level, frictionless air track. A 2 kg cart moving at 6 m/s collides head-on with a 4 kg cart at rest.<svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"6.0\" y=\"16.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >Before</text><rect x=\"40\" y=\"36\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"60.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"48\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"72\" cy=\"65\" r=\"4\" fill=\"#222\"/><rect x=\"190\" y=\"36\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"220.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"198\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"242\" cy=\"65\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"69.0\" x2=\"310.0\" y2=\"69.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"60.0\" y1=\"29.0\" x2=\"102.0\" y2=\"29.0\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"110.0,29.0 102.0,25.5 102.0,32.5\" fill=\"#c0392b\"/><text x=\"120.0\" y=\"33.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >6 m/s</text><text x=\"220.0\" y=\"28.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >at rest</text><text x=\"6.0\" y=\"98.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >After</text><rect x=\"95\" y=\"118\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"115.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"103\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"127\" cy=\"147\" r=\"4\" fill=\"#222\"/><rect x=\"215\" y=\"118\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"245.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"223\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"267\" cy=\"147\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"151.0\" x2=\"310.0\" y2=\"151.0\" stroke=\"#222\" stroke-width=\"1.4\"/><text x=\"115.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₁′ = ?</text><text x=\"245.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₂′ = ?</text></svg></div>In this elastic collision, the relative speed of separation of the two carts is",
      options: ["12 m/s","4 m/s","6 m/s","2 m/s"],
      ans: "6 m/s",
      reason: "In an elastic collision the relative speed of separation equals the relative speed of approach = 6 − 0 = 6 m/s. (Check: 4 − (−2) = 6 m/s.)"
    },
    {
      q: "<div class=\"stimulus\">Two carts run on a straight, level, frictionless air track. A 2 kg cart moving at 6 m/s collides head-on with a 4 kg cart at rest.<svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"6.0\" y=\"16.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >Before</text><rect x=\"40\" y=\"36\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"60.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"48\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"72\" cy=\"65\" r=\"4\" fill=\"#222\"/><rect x=\"190\" y=\"36\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"220.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"198\" cy=\"65\" r=\"4\" fill=\"#222\"/><circle cx=\"242\" cy=\"65\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"69.0\" x2=\"310.0\" y2=\"69.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"60.0\" y1=\"29.0\" x2=\"102.0\" y2=\"29.0\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"110.0,29.0 102.0,25.5 102.0,32.5\" fill=\"#c0392b\"/><text x=\"120.0\" y=\"33.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >6 m/s</text><text x=\"220.0\" y=\"28.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >at rest</text><text x=\"6.0\" y=\"98.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >After</text><rect x=\"95\" y=\"118\" width=\"40\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"115.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2 kg</text><circle cx=\"103\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"127\" cy=\"147\" r=\"4\" fill=\"#222\"/><rect x=\"215\" y=\"118\" width=\"60\" height=\"26\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"245.0\" y=\"135.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4 kg</text><circle cx=\"223\" cy=\"147\" r=\"4\" fill=\"#222\"/><circle cx=\"267\" cy=\"147\" r=\"4\" fill=\"#222\"/><line x1=\"15.0\" y1=\"151.0\" x2=\"310.0\" y2=\"151.0\" stroke=\"#222\" stroke-width=\"1.4\"/><text x=\"115.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₁′ = ?</text><text x=\"245.0\" y=\"113.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₂′ = ?</text></svg></div>Instead, the carts have Velcro pads and stick together on impact. How much kinetic energy is converted to other forms?",
      options: ["24 J","36 J","6 J","12 J"],
      ans: "24 J",
      reason: "Common velocity v = 12 / 6 = 2 m/s. KE before = ½ × 2 × 6² = 36 J; KE after = ½ × 6 × 2² = 12 J. Energy converted (heat, sound, deformation) = 36 − 12 = 24 J. 12 J is the KE that remains."
    },
    {
      q: "<div class=\"stimulus\">A cricket ball is thrown from level ground with speed v₀ at 45° above the horizontal. The dashed curve shows the path it would follow in a vacuum, with range R₀ and maximum height H₀. In real air the ball also experiences a drag force that always opposes its velocity.<svg viewBox=\"0 0 300 140\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"115.0\" x2=\"300.0\" y2=\"115.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,115.0 36.0,109.2 42.0,103.6 48.0,98.3 54.0,93.4 60.0,88.8 66.0,84.4 72.0,80.3 78.0,76.6 84.0,73.2 90.0,70.0 96.0,67.2 102.0,64.6 108.0,62.4 114.0,60.4 120.0,58.8 126.0,57.4 132.0,56.4 138.0,55.6 144.0,55.1 150.0,55.0 156.0,55.2 162.0,55.6 168.0,56.3 174.0,57.4 180.0,58.8 186.0,60.4 192.0,62.3 198.0,64.6 204.0,67.2 210.0,70.0 216.0,73.2 222.0,76.6 228.0,80.3 234.0,84.4 240.0,88.8 246.0,93.4 252.0,98.3 258.0,103.6 264.0,109.2 270.0,115.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"30.0\" y1=\"115.0\" x2=\"60.3\" y2=\"84.7\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"66.0,79.0 57.9,82.2 62.8,87.1\" fill=\"#c0392b\"/><text x=\"70.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀</text><text x=\"60.0\" y=\"111.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >45°</text><text x=\"30.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"270.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"150.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >dashed: path if there were no air resistance</text></svg></div>Compared with the vacuum range R₀, the range of the ball in air is",
      options: ["equal to R₀, because horizontal and vertical motions are independent","greater than R₀, because the ball stays in the air longer","greater than R₀, because drag acts only on the vertical motion","less than R₀"],
      ans: "less than R₀",
      reason: "Drag opposes the velocity, so it slows the ball in both directions. The horizontal speed falls continuously and the ball also spends less time rising, so it lands short of R₀."
    },
    {
      q: "<div class=\"stimulus\">A cricket ball is thrown from level ground with speed v₀ at 45° above the horizontal. The dashed curve shows the path it would follow in a vacuum, with range R₀ and maximum height H₀. In real air the ball also experiences a drag force that always opposes its velocity.<svg viewBox=\"0 0 300 140\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"115.0\" x2=\"300.0\" y2=\"115.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,115.0 36.0,109.2 42.0,103.6 48.0,98.3 54.0,93.4 60.0,88.8 66.0,84.4 72.0,80.3 78.0,76.6 84.0,73.2 90.0,70.0 96.0,67.2 102.0,64.6 108.0,62.4 114.0,60.4 120.0,58.8 126.0,57.4 132.0,56.4 138.0,55.6 144.0,55.1 150.0,55.0 156.0,55.2 162.0,55.6 168.0,56.3 174.0,57.4 180.0,58.8 186.0,60.4 192.0,62.3 198.0,64.6 204.0,67.2 210.0,70.0 216.0,73.2 222.0,76.6 228.0,80.3 234.0,84.4 240.0,88.8 246.0,93.4 252.0,98.3 258.0,103.6 264.0,109.2 270.0,115.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"30.0\" y1=\"115.0\" x2=\"60.3\" y2=\"84.7\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"66.0,79.0 57.9,82.2 62.8,87.1\" fill=\"#c0392b\"/><text x=\"70.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀</text><text x=\"60.0\" y=\"111.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >45°</text><text x=\"30.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"270.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"150.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >dashed: path if there were no air resistance</text></svg></div>How does the horizontal component of the ball's velocity change during the flight in air?",
      options: ["It increases while the ball falls","It stays constant until the highest point and then decreases","It decreases continuously","It stays constant"],
      ans: "It decreases continuously",
      reason: "Drag has a horizontal component directed opposite to the horizontal motion at every instant, so vₓ decreases all the way. (Constant vₓ is true only without air resistance.)"
    },
    {
      q: "<div class=\"stimulus\">A cricket ball is thrown from level ground with speed v₀ at 45° above the horizontal. The dashed curve shows the path it would follow in a vacuum, with range R₀ and maximum height H₀. In real air the ball also experiences a drag force that always opposes its velocity.<svg viewBox=\"0 0 300 140\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"115.0\" x2=\"300.0\" y2=\"115.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,115.0 36.0,109.2 42.0,103.6 48.0,98.3 54.0,93.4 60.0,88.8 66.0,84.4 72.0,80.3 78.0,76.6 84.0,73.2 90.0,70.0 96.0,67.2 102.0,64.6 108.0,62.4 114.0,60.4 120.0,58.8 126.0,57.4 132.0,56.4 138.0,55.6 144.0,55.1 150.0,55.0 156.0,55.2 162.0,55.6 168.0,56.3 174.0,57.4 180.0,58.8 186.0,60.4 192.0,62.3 198.0,64.6 204.0,67.2 210.0,70.0 216.0,73.2 222.0,76.6 228.0,80.3 234.0,84.4 240.0,88.8 246.0,93.4 252.0,98.3 258.0,103.6 264.0,109.2 270.0,115.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"30.0\" y1=\"115.0\" x2=\"60.3\" y2=\"84.7\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"66.0,79.0 57.9,82.2 62.8,87.1\" fill=\"#c0392b\"/><text x=\"70.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀</text><text x=\"60.0\" y=\"111.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >45°</text><text x=\"30.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"270.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"150.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >dashed: path if there were no air resistance</text></svg></div>The maximum height reached by the ball in air is",
      options: ["equal to H₀","greater than H₀","less than H₀","greater than H₀ only if the drag force is small"],
      ans: "less than H₀",
      reason: "While rising, drag acts downward as well as gravity, so the vertical deceleration is greater than g. The vertical velocity vanishes sooner and the ball peaks lower than H₀."
    },
    {
      q: "<div class=\"stimulus\">A cricket ball is thrown from level ground with speed v₀ at 45° above the horizontal. The dashed curve shows the path it would follow in a vacuum, with range R₀ and maximum height H₀. In real air the ball also experiences a drag force that always opposes its velocity.<svg viewBox=\"0 0 300 140\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"115.0\" x2=\"300.0\" y2=\"115.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,115.0 36.0,109.2 42.0,103.6 48.0,98.3 54.0,93.4 60.0,88.8 66.0,84.4 72.0,80.3 78.0,76.6 84.0,73.2 90.0,70.0 96.0,67.2 102.0,64.6 108.0,62.4 114.0,60.4 120.0,58.8 126.0,57.4 132.0,56.4 138.0,55.6 144.0,55.1 150.0,55.0 156.0,55.2 162.0,55.6 168.0,56.3 174.0,57.4 180.0,58.8 186.0,60.4 192.0,62.3 198.0,64.6 204.0,67.2 210.0,70.0 216.0,73.2 222.0,76.6 228.0,80.3 234.0,84.4 240.0,88.8 246.0,93.4 252.0,98.3 258.0,103.6 264.0,109.2 270.0,115.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\" stroke-dasharray=\"6 4\"/><line x1=\"30.0\" y1=\"115.0\" x2=\"60.3\" y2=\"84.7\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"66.0,79.0 57.9,82.2 62.8,87.1\" fill=\"#c0392b\"/><text x=\"70.0\" y=\"92.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v₀</text><text x=\"60.0\" y=\"111.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >45°</text><text x=\"30.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"270.0\" y=\"131.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text><text x=\"150.0\" y=\"16.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >dashed: path if there were no air resistance</text></svg></div>Which description of the actual path in air is correct?",
      options: ["The path is a symmetric parabola but smaller","The descending part is less steep than the ascending part","The path is a straight line followed by a vertical drop","The descending part is steeper than the ascending part, so the path is not symmetric"],
      ans: "The descending part is steeper than the ascending part, so the path is not symmetric",
      reason: "Because vₓ keeps decreasing, the ball covers less horizontal distance per unit of height lost on the way down, so it comes down more steeply than it went up. The path is no longer a symmetric parabola."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"46.0\" y1=\"130.0\" x2=\"46.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"93.6\" y1=\"130.0\" x2=\"93.6\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"141.2\" y1=\"130.0\" x2=\"141.2\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"188.8\" y1=\"130.0\" x2=\"188.8\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"236.4\" y1=\"130.0\" x2=\"236.4\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"284.0\" y1=\"130.0\" x2=\"284.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"130.0\" x2=\"284.0\" y2=\"130.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"107.2\" x2=\"284.0\" y2=\"107.2\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"84.4\" x2=\"284.0\" y2=\"84.4\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"61.6\" x2=\"284.0\" y2=\"61.6\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"38.8\" x2=\"284.0\" y2=\"38.8\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"130.0\" x2=\"46.0\" y2=\"16.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"46.0\" y1=\"130.0\" x2=\"284.0\" y2=\"130.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"46.0\" y1=\"127.0\" x2=\"46.0\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"46.0\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >0</text><line x1=\"93.6\" y1=\"127.0\" x2=\"93.6\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"93.6\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2</text><line x1=\"141.2\" y1=\"127.0\" x2=\"141.2\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"141.2\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4</text><line x1=\"188.8\" y1=\"127.0\" x2=\"188.8\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"188.8\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >6</text><line x1=\"236.4\" y1=\"127.0\" x2=\"236.4\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"236.4\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >8</text><line x1=\"284.0\" y1=\"127.0\" x2=\"284.0\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"284.0\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >10</text><line x1=\"43.0\" y1=\"130.0\" x2=\"49.0\" y2=\"130.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"134.0\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >0</text><line x1=\"43.0\" y1=\"107.2\" x2=\"49.0\" y2=\"107.2\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"111.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >1</text><line x1=\"43.0\" y1=\"84.4\" x2=\"49.0\" y2=\"84.4\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"88.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2</text><line x1=\"43.0\" y1=\"61.6\" x2=\"49.0\" y2=\"61.6\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"65.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >3</text><line x1=\"43.0\" y1=\"38.8\" x2=\"49.0\" y2=\"38.8\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"42.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4</text><text x=\"165.0\" y=\"166.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >t (s)</text><text x=\"12\" y=\"73.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" transform=\"rotate(-90 12 73.0)\">v (m/s)</text><polyline points=\"46.0,130.0 93.6,38.8 236.4,38.8 284.0,130.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2.2\"/><text x=\"165.0\" y=\"32.8\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >constant speed</text></svg></div>The velocity–time graph shows a lift in a tall building that starts from rest at the bottom, moves upward and stops at the top floor. How high is the top floor above the bottom?",
      options: ["24 m","16 m","40 m","32 m"],
      ans: "32 m",
      reason: "Distance = area under the v–t graph = trapezium with parallel sides 6 s and 10 s and height 4 m/s: ½(6 + 10) × 4 = 32 m. (40 m is the rectangle 10 × 4; 24 m is only the constant-speed part.)"
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"46.0\" y1=\"130.0\" x2=\"46.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"85.7\" y1=\"130.0\" x2=\"85.7\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"125.3\" y1=\"130.0\" x2=\"125.3\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"165.0\" y1=\"130.0\" x2=\"165.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"204.7\" y1=\"130.0\" x2=\"204.7\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"244.3\" y1=\"130.0\" x2=\"244.3\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"284.0\" y1=\"130.0\" x2=\"284.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"130.0\" x2=\"284.0\" y2=\"130.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"107.2\" x2=\"284.0\" y2=\"107.2\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"84.4\" x2=\"284.0\" y2=\"84.4\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"61.6\" x2=\"284.0\" y2=\"61.6\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"38.8\" x2=\"284.0\" y2=\"38.8\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"16.0\" x2=\"284.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"130.0\" x2=\"46.0\" y2=\"16.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"46.0\" y1=\"130.0\" x2=\"284.0\" y2=\"130.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"46.0\" y1=\"127.0\" x2=\"46.0\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"46.0\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >0</text><line x1=\"85.7\" y1=\"127.0\" x2=\"85.7\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"85.7\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2</text><line x1=\"125.3\" y1=\"127.0\" x2=\"125.3\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"125.3\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4</text><line x1=\"165.0\" y1=\"127.0\" x2=\"165.0\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"165.0\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >6</text><line x1=\"204.7\" y1=\"127.0\" x2=\"204.7\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"204.7\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >8</text><line x1=\"244.3\" y1=\"127.0\" x2=\"244.3\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"244.3\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >10</text><line x1=\"284.0\" y1=\"127.0\" x2=\"284.0\" y2=\"133.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"284.0\" y=\"146.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >12</text><line x1=\"43.0\" y1=\"130.0\" x2=\"49.0\" y2=\"130.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"134.0\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >0</text><line x1=\"43.0\" y1=\"107.2\" x2=\"49.0\" y2=\"107.2\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"111.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >5</text><line x1=\"43.0\" y1=\"84.4\" x2=\"49.0\" y2=\"84.4\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"88.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >10</text><line x1=\"43.0\" y1=\"61.6\" x2=\"49.0\" y2=\"61.6\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"65.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >15</text><line x1=\"43.0\" y1=\"38.8\" x2=\"49.0\" y2=\"38.8\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"42.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >20</text><line x1=\"43.0\" y1=\"16.0\" x2=\"49.0\" y2=\"16.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"20.0\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >25</text><text x=\"165.0\" y=\"166.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >t (s)</text><text x=\"12\" y=\"73.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" transform=\"rotate(-90 12 73.0)\">s (m)</text><polyline points=\"46.0,130.0 125.3,38.8 204.7,38.8 284.0,130.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2.2\"/></svg></div>The graph shows the displacement s of a trolley from its starting point along a straight line. What is the velocity of the trolley between t = 8 s and t = 12 s?",
      options: ["−1.7 m/s","−5 m/s","+5 m/s","0 m/s"],
      ans: "−5 m/s",
      reason: "Velocity = slope of the s–t graph = (0 − 20) / (12 − 8) = −5 m/s; the negative sign means the trolley is returning to the start. +5 m/s was its velocity during the first 4 s."
    },
    {
      q: "A stone is thrown vertically downward at 5.0 m/s from a bridge and hits the water after 2.0 s. Neglecting air resistance and taking g = 9.8 m/s², the height of the bridge above the water is",
      options: ["49.2 m","10.0 m","29.6 m","19.6 m"],
      ans: "29.6 m",
      reason: "s = ut + ½gt² = 5 × 2 + ½ × 9.8 × 2² = 10 + 19.6 = 29.6 m. 19.6 m ignores the initial speed; 49.2 m forgets the ½."
    },
    {
      q: "A ball is thrown vertically upward at 20 m/s. Taking g = 9.8 m/s² and upward as positive, what is the velocity of the ball 3.0 s after it is thrown?",
      options: ["29.4 m/s downward","9.4 m/s downward","49.4 m/s upward","9.4 m/s upward"],
      ans: "9.4 m/s downward",
      reason: "v = u − gt = 20 − 9.8 × 3 = −9.4 m/s. The negative sign means the ball has already passed the top (at 2.04 s) and is moving down."
    },
    {
      q: "A boy on a 30 m high building throws a ball vertically upward at 12 m/s. The ball misses the roof on the way down and lands at the foot of the building. Taking g = 9.8 m/s² and neglecting air resistance, the time of flight is",
      options: ["2.47 s","7.97 s","1.54 s","3.99 s"],
      ans: "3.99 s",
      reason: "Take up as positive and the landing point 30 m below: −30 = 12t − 4.9t², i.e. 4.9t² − 12t − 30 = 0, so t = (12 + √(144 + 588)) / 9.8 = 3.99 s (the negative root is rejected). 2.47 s is the time for a drop with no initial speed."
    },
    {
      q: "A plane flying horizontally at 80 m/s at a height of 500 m releases a package. Neglecting air resistance and taking g = 9.8 m/s², what horizontal distance does the package travel before hitting the ground?",
      options: ["1010 m","808 m","571 m","404 m"],
      ans: "808 m",
      reason: "Fall time t = √(2h/g) = √(1000/9.8) = 10.1 s. Horizontal distance = vₓt = 80 × 10.1 = 808 m. 571 m comes from t = √(h/g)."
    },
    {
      q: "A car starts from rest and accelerates uniformly at 2 m/s². How far does it travel during the 5th second alone (from t = 4 s to t = 5 s)?",
      options: ["16 m","25 m","10 m","9 m"],
      ans: "9 m",
      reason: "s₅ = ½a(5²) − ½a(4²) = 25 − 16 = 9 m. (25 m is the distance in the first 5 s; 16 m in the first 4 s.)"
    },
    {
      q: "A driver travelling at 20 m/s sees an obstacle. After a reaction time of 0.50 s (car still moving at 20 m/s) the brakes give a uniform deceleration of 5.0 m/s². What is the total distance travelled from the moment the obstacle is seen until the car stops?",
      options: ["50 m","40 m","65 m","10 m"],
      ans: "50 m",
      reason: "Reaction distance = 20 × 0.5 = 10 m. Braking distance = u²/2a = 400 / 10 = 40 m. Total = 50 m. 40 m forgets the reaction distance."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"46.0\" y1=\"150.0\" x2=\"46.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"105.5\" y1=\"150.0\" x2=\"105.5\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"165.0\" y1=\"150.0\" x2=\"165.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"224.5\" y1=\"150.0\" x2=\"224.5\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"284.0\" y1=\"150.0\" x2=\"284.0\" y2=\"16.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"136.6\" x2=\"284.0\" y2=\"136.6\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"109.8\" x2=\"284.0\" y2=\"109.8\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"83.0\" x2=\"284.0\" y2=\"83.0\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"56.2\" x2=\"284.0\" y2=\"56.2\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"29.4\" x2=\"284.0\" y2=\"29.4\" stroke=\"#ddd\" stroke-width=\"0.6\"/><line x1=\"46.0\" y1=\"150.0\" x2=\"46.0\" y2=\"16.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"46.0\" y1=\"83.0\" x2=\"284.0\" y2=\"83.0\" stroke=\"#222\" stroke-width=\"1.4\"/><line x1=\"46.0\" y1=\"80.0\" x2=\"46.0\" y2=\"86.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"46.0\" y=\"164.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >0</text><line x1=\"105.5\" y1=\"80.0\" x2=\"105.5\" y2=\"86.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"105.5\" y=\"164.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >1</text><line x1=\"165.0\" y1=\"80.0\" x2=\"165.0\" y2=\"86.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"165.0\" y=\"164.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >2</text><line x1=\"224.5\" y1=\"80.0\" x2=\"224.5\" y2=\"86.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"224.5\" y=\"164.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >3</text><line x1=\"284.0\" y1=\"80.0\" x2=\"284.0\" y2=\"86.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"284.0\" y=\"164.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >4</text><line x1=\"43.0\" y1=\"136.6\" x2=\"49.0\" y2=\"136.6\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"140.6\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >-20</text><line x1=\"43.0\" y1=\"109.8\" x2=\"49.0\" y2=\"109.8\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"113.8\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >-10</text><line x1=\"43.0\" y1=\"83.0\" x2=\"49.0\" y2=\"83.0\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"87.0\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >0</text><line x1=\"43.0\" y1=\"56.2\" x2=\"49.0\" y2=\"56.2\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"60.2\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >10</text><line x1=\"43.0\" y1=\"29.4\" x2=\"49.0\" y2=\"29.4\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"40.0\" y=\"33.4\" text-anchor=\"end\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >20</text><text x=\"165.0\" y=\"186.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >t (s)</text><text x=\"12\" y=\"83.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" transform=\"rotate(-90 12 83.0)\">v (m/s)</text><polyline points=\"46.0,30.5 284.0,135.5\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2.2\"/><circle cx=\"46.0\" cy=\"30.5\" r=\"3\" fill=\"#c0392b\"/><text x=\"52.0\" y=\"26.5\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >19.6</text><circle cx=\"284.0\" cy=\"135.5\" r=\"3\" fill=\"#c0392b\"/><text x=\"278.0\" y=\"149.5\" text-anchor=\"end\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >−19.6</text></svg></div>The graph shows the velocity (upward positive) of a ball thrown vertically upward from a hand and caught at the same point 4 s later. What is the greatest height of the ball above the hand?",
      options: ["19.6 m","0 m","39.2 m","9.8 m"],
      ans: "19.6 m",
      reason: "The ball is at its highest when v = 0 (t = 2 s). Height = area of the triangle under the graph from 0 to 2 s = ½ × 2 × 19.6 = 19.6 m. The total displacement over 4 s is 0 m because the areas above and below the axis cancel."
    },
    {
      q: "A marble rolls off a horizontal table 1.2 m high at 3.0 m/s. Neglecting air resistance and taking g = 9.8 m/s², its speed just before hitting the floor is",
      options: ["3.00 m/s","5.70 m/s","7.85 m/s","4.85 m/s"],
      ans: "5.70 m/s",
      reason: "Fall time t = √(2 × 1.2 / 9.8) = 0.495 s, so v_y = gt = 4.85 m/s. Speed = √(3.0² + 4.85²) = 5.70 m/s. Adding the components (7.85 m/s) is wrong because they are perpendicular."
    },
    {
      q: "An athlete can throw a javelin at a speed of 28 m/s. Taking g = 9.8 m/s² and neglecting air resistance, the maximum horizontal range on level ground is",
      options: ["56.6 m","40 m","80 m","160 m"],
      ans: "80 m",
      reason: "R_max = v²/g (at 45°) = 28² / 9.8 = 80 m. 40 m is v²/2g, which is the greatest height for a vertical throw."
    },
    {
      q: "A 0.15 kg ball approaches a bat at 20 m/s and leaves the bat in the opposite direction at 30 m/s. What is the magnitude of the change in momentum of the ball?",
      options: ["4.5 kg m/s","7.5 kg m/s","1.5 kg m/s","3.0 kg m/s"],
      ans: "7.5 kg m/s",
      reason: "Taking the incoming direction as positive: Δp = m(v − u) = 0.15 × (−30 − 20) = −7.5 kg m/s, magnitude 7.5 kg m/s. Subtracting the speeds (1.5 kg m/s) ignores the reversal of direction."
    },
    {
      q: "A 10 g bullet moving at 400 m/s embeds itself in a 1.99 kg wooden block at rest on a smooth surface. What percentage of the bullet's initial kinetic energy is converted into other forms (heat, sound, deformation)?",
      options: ["75%","50%","99.5%","0.5%"],
      ans: "99.5%",
      reason: "Momentum: 0.010 × 400 = 2.00 × v, so v = 2 m/s. KE before = ½ × 0.010 × 400² = 800 J; KE after = ½ × 2.00 × 2² = 4 J. Lost = 796 J = 99.5%. Only 0.5% remains as kinetic energy."
    },
    {
      q: "A stone is thrown from the ground at 20 m/s at an unspecified angle. Neglecting air resistance and taking g = 9.8 m/s², its speed when it passes a point 10 m above the ground (on the way up or down) is",
      options: ["14.3 m/s","10.0 m/s","20.0 m/s","17.4 m/s"],
      ans: "14.3 m/s",
      reason: "The speed at a given height does not depend on the launch angle: v² = u² − 2gh = 400 − 2 × 9.8 × 10 = 204, v = 14.3 m/s. 17.4 m/s results from dropping the factor 2."
    },
    {
      q: "One ball is dropped from a high roof while a second ball is thrown horizontally from the same roof at the same instant. Neglecting air resistance, which statement is correct?",
      options: ["The dropped ball reaches the ground first","Both reach the ground at the same time","The thrown ball reaches the ground later because its path is longer","The thrown ball reaches the ground first"],
      ans: "Both reach the ground at the same time",
      reason: "Vertical motion is independent of horizontal motion. Both start with zero vertical velocity and have the same vertical acceleration g over the same height, so they take the same time to fall."
    },
    {
      q: "On a smooth track a 1 kg cart moving at 4 m/s hits a 1 kg cart at rest. Afterwards the first cart moves at 1 m/s and the second at 3 m/s, both in the original direction. Which statement is correct?",
      options: ["Elastic: relative speed of separation is greater than the relative speed of approach","Elastic: both momentum and kinetic energy are conserved","Inelastic: both momentum and kinetic energy are reduced","Inelastic: momentum is conserved but kinetic energy falls from 8 J to 5 J"],
      ans: "Inelastic: momentum is conserved but kinetic energy falls from 8 J to 5 J",
      reason: "Momentum before = 4 kg m/s; after = 1 + 3 = 4 kg m/s (conserved). KE before = ½ × 1 × 16 = 8 J; after = ½(1) + ½(9) = 5 J. Separation speed (2 m/s) is less than approach speed (4 m/s), so the collision is inelastic."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 300 150\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"15.0\" y1=\"125.0\" x2=\"290.0\" y2=\"125.0\" stroke=\"#222\" stroke-width=\"1.4\"/><polyline points=\"30.0,125.0 36.0,119.2 42.0,113.6 48.0,108.3 54.0,103.4 60.0,98.8 66.0,94.4 72.0,90.3 78.0,86.6 84.0,83.2 90.0,80.0 96.0,77.2 102.0,74.6 108.0,72.3 114.0,70.4 120.0,68.8 126.0,67.4 132.0,66.3 138.0,65.6 144.0,65.2 150.0,65.0 156.0,65.2 162.0,65.6 168.0,66.3 174.0,67.4 180.0,68.8 186.0,70.4 192.0,72.3 198.0,74.6 204.0,77.2 210.0,80.0 216.0,83.2 222.0,86.6 228.0,90.3 234.0,94.4 240.0,98.8 246.0,103.4 252.0,108.3 258.0,113.6 264.0,119.2 270.0,125.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><circle cx=\"90\" cy=\"80.0\" r=\"4\" fill=\"#c0392b\"/><text x=\"82.0\" y=\"74.0\" text-anchor=\"end\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\" >P</text><text x=\"30.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >launch</text><text x=\"270.0\" y=\"141.0\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >landing</text></svg></div>The diagram shows the path of a ball thrown from level ground. Neglecting air resistance, in which direction does the acceleration of the ball point when it is at point P on the way up?",
      options: ["Horizontally, in the forward direction","Vertically downward","Perpendicular to the path, towards its concave side","Along the tangent to the path, in the direction of motion"],
      ans: "Vertically downward",
      reason: "The only force is gravity, so the acceleration is g vertically downward at every point of the path. The velocity is along the tangent, but the acceleration is not; it is perpendicular to the path only at the highest point."
    },
    {
      q: "A ball is thrown vertically upward from the ground at 20 m/s. If air resistance is NOT negligible, the speed with which the ball returns to the launch point is",
      options: ["more than 20 m/s","zero","less than 20 m/s","exactly 20 m/s"],
      ans: "less than 20 m/s",
      reason: "Drag does negative work on the ball during both the rise and the fall, so some kinetic energy is lost as heat. Without air resistance the return speed would equal 20 m/s; with it the speed is smaller."
    },
    {
      q: "A rifle of mass 3.0 kg, initially at rest, fires a 15 g bullet at 400 m/s. Ignoring any external force, the recoil speed of the rifle is",
      options: ["0.50 m/s","20 m/s","4.0 m/s","2.0 m/s"],
      ans: "2.0 m/s",
      reason: "Total momentum is zero: 3.0 × V = 0.015 × 400, so V = 6 / 3.0 = 2.0 m/s in the direction opposite to the bullet."
    },
    {
      q: "A 1200 kg car moving at 20 m/s collides with a stationary 800 kg car and the two lock together. How much kinetic energy is lost in the collision?",
      options: ["96 kJ","48 kJ","144 kJ","240 kJ"],
      ans: "96 kJ",
      reason: "Common speed v = 1200 × 20 / 2000 = 12 m/s. KE before = ½ × 1200 × 400 = 240 kJ; KE after = ½ × 2000 × 144 = 144 kJ. Loss = 96 kJ. 144 kJ is the energy that remains."
    },
    {
      q: "Why can the kinetic energy of a closed system decrease in a collision although the total momentum of the system remains constant?",
      options: ["An external force removes kinetic energy but leaves momentum unchanged","Some kinetic energy is changed into other forms such as heat, sound and deformation, while the internal forces cannot change the total momentum","The total energy of the system is destroyed in an inelastic collision","Momentum is conserved only for the total of a system, so kinetic energy of each body must change by different amounts"],
      ans: "Some kinetic energy is changed into other forms such as heat, sound and deformation, while the internal forces cannot change the total momentum",
      reason: "The forces between the colliding bodies are equal and opposite, so they cannot change the total momentum. But they can do work that converts ordered kinetic energy into internal energy, sound and deformation. Total energy is conserved; only kinetic energy decreases."
    },
    {
      q: "A 3 kg block moving at 4 m/s catches up with a 1 kg block moving at 2 m/s in the same direction on a smooth surface and collides elastically with it. The velocity of the 1 kg block after the collision is",
      options: ["3 m/s","5 m/s","7 m/s","4 m/s"],
      ans: "5 m/s",
      reason: "Momentum: 12 + 2 = 3v₁′ + v₂′. Relative speed of approach = 4 − 2 = 2 m/s = v₂′ − v₁′. Solving gives v₁′ = 3 m/s and v₂′ = 5 m/s. (3 m/s is the velocity of the heavier block.)"
    },
    {
      q: "Two identical 2 kg balls collide head-on and elastically. Ball 1 moves at 5 m/s to the right and ball 2 moves at 3 m/s to the left. What is the velocity of ball 1 after the collision?",
      options: ["3 m/s to the left","1 m/s to the right","3 m/s to the right","5 m/s to the left"],
      ans: "3 m/s to the left",
      reason: "Equal masses in a one-dimensional elastic collision exchange velocities, so ball 1 leaves with ball 2's original velocity, 3 m/s to the left. (1 m/s to the right would be the common velocity if they stuck together.)"
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 320 200\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"6.0\" y=\"14.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >Before</text><line x1=\"15.0\" y1=\"50.0\" x2=\"310.0\" y2=\"50.0\" stroke=\"#bbb\" stroke-width=\"0.6\"/><circle cx=\"45\" cy=\"50\" r=\"10\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"45.0\" y=\"54.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >A</text><circle cx=\"150\" cy=\"50\" r=\"10\" fill=\"#fff3c4\" stroke=\"#222\"/><text x=\"150.0\" y=\"54.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >B</text><line x1=\"60.0\" y1=\"50.0\" x2=\"102.0\" y2=\"50.0\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"110.0,50.0 102.0,46.5 102.0,53.5\" fill=\"#c0392b\"/><text x=\"85.0\" y=\"40.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >6 m/s</text><text x=\"150.0\" y=\"31.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >at rest</text><text x=\"6.0\" y=\"86.0\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\" >After</text><circle cx=\"150\" cy=\"140\" r=\"10\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"150.0\" y=\"144.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >A</text><line x1=\"150.0\" y1=\"140.0\" x2=\"168.5\" y2=\"108.0\" stroke=\"#c0392b\" stroke-width=\"2\"/><polygon points=\"172.5,101.0 165.5,106.2 171.5,109.7\" fill=\"#c0392b\"/><text x=\"190.0\" y=\"100.0\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >3 m/s</text><path d=\"M 190 140 A 40 40 0 0 0 170 105.4\" fill=\"none\" stroke=\"#222\"/><text x=\"196.0\" y=\"132.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >60°</text><line x1=\"150.0\" y1=\"140.0\" x2=\"195.0\" y2=\"166.0\" stroke=\"#7a7a7a\" stroke-width=\"2\"/><polygon points=\"202.0,170.0 196.8,163.0 193.3,169.0\" fill=\"#7a7a7a\"/><text x=\"215.0\" y=\"183.0\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" >v_B = ?</text><line x1=\"120.0\" y1=\"140.0\" x2=\"290.0\" y2=\"140.0\" stroke=\"#bbb\" stroke-width=\"0.6\" stroke-dasharray=\"3 3\"/></svg></div>A 1 kg ball A moving at 6 m/s along the x-axis strikes a stationary ball B of mass 1 kg on a smooth horizontal surface (top view). After the collision A moves at 3 m/s at 60° above the x-axis, as shown. What is the speed of B after the collision?",
      options: ["3.0 m/s","9.0 m/s","4.5 m/s","5.2 m/s"],
      ans: "5.2 m/s",
      reason: "Momentum is conserved along each axis. x: 6 = 3cos60° + v_Bx so v_Bx = 4.5 m/s. y: 0 = 3 sin60° + v_By so v_By = −2.60 m/s. Speed = √(4.5² + 2.60²) = 5.2 m/s. 4.5 m/s is only the x-component."
    },

    // ---- MCQs from the FBISE HSSC-I Physics model question paper (Section A), placed by chapter ----
    {
      q: "In the presence of air resistance, how does the horizontal component of a projectile's velocity change during its flight?",
      options: ["remains constant","continuously decreases","continuously increases","decreases, then increases"],
      ans: "continuously decreases",
      reason: "Without air resistance the horizontal velocity is constant because no horizontal force acts. Air resistance acts opposite to the velocity, so it has a backward horizontal component and the horizontal velocity continuously decreases."
    },
    {
      q: "The distance covered by a freely falling body in 2 seconds (starting from rest, g = 9.8 m/s²) is:",
      options: ["4.9 m","19.6 m","39.2 m","44.1 m"],
      ans: "19.6 m",
      reason: "s = ½gt² = ½ × 9.8 × 2² = 19.6 m. 4.9 m is the distance in 1 s and 39.2 m is gt² without the ½."
    },
    {
      q: "<div class=\"stimulus\">A projectile is launched with an initial speed of 200 m/s at an angle of 30° with the horizontal. Take g = 9.8 m/s² and ignore air resistance.<svg viewBox=\"0 0 320 212\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.5\"/><polyline points=\"30.0,150.0 36.5,140.2 43.0,131.0 49.5,122.2 56.0,114.0 62.5,106.2 69.0,99.0 75.5,92.2 82.0,86.0 88.5,80.2 95.0,75.0 101.5,70.2 108.0,66.0 114.5,62.2 121.0,59.0 127.5,56.2 134.0,54.0 140.5,52.3 147.0,51.0 153.5,50.2 160.0,50.0 166.5,50.2 173.0,51.0 179.5,52.2 186.0,54.0 192.5,56.2 199.0,59.0 205.5,62.3 212.0,66.0 218.5,70.2 225.0,75.0 231.5,80.2 238.0,86.0 244.5,92.2 251.0,99.0 257.5,106.2 264.0,114.0 270.5,122.3 277.0,131.0 283.5,140.2 290.0,150.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><line x1=\"30\" y1=\"150\" x2=\"78.49742261192857\" y2=\"122.0\" stroke=\"#2a8a4a\" stroke-width=\"2\"/><polygon points=\"82.0,120.0 77.7,125.6 75.0,120.9\" fill=\"#2a8a4a\"/><text x=\"92\" y=\"126\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#2a8a4a\">200 m/s</text><path d=\"M 62 150 A 32 32 0 0 0 58.7 135\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"72\" y=\"145\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"150\" stroke=\"#888\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"150\" y1=\"51\" x2=\"150.0\" y2=\"145.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"150.0,149.0 147.3,142.6 152.7,142.6\" fill=\"#c0392b\"/><line x1=\"150\" y1=\"50\" x2=\"150\" y2=\"150\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><text x=\"166\" y=\"102\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">maximum</text><text x=\"166\" y=\"116\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">height</text><line x1=\"30\" y1=\"172\" x2=\"286.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"290.0,172.0 283.6,174.7 283.6,169.3\" fill=\"#c0392b\"/><line x1=\"290\" y1=\"172\" x2=\"34.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"30.0,172.0 36.4,169.3 36.4,174.7\" fill=\"#c0392b\"/><text x=\"160\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">range (horizontal displacement)</text><text x=\"160\" y=\"206\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#666\">(not to scale)</text></svg></div>Determine the time of flight of the projectile.",
      options: ["10.41 s","20.41 s","30.52 s","0.41 s"],
      ans: "20.41 s",
      reason: "T = 2u sin θ / g = 2 × 200 × sin 30° / 9.8 = 200 / 9.8 = 20.41 s."
    },
    {
      q: "<div class=\"stimulus\">A projectile is launched with an initial speed of 200 m/s at an angle of 30° with the horizontal. Take g = 9.8 m/s² and ignore air resistance.<svg viewBox=\"0 0 320 212\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.5\"/><polyline points=\"30.0,150.0 36.5,140.2 43.0,131.0 49.5,122.2 56.0,114.0 62.5,106.2 69.0,99.0 75.5,92.2 82.0,86.0 88.5,80.2 95.0,75.0 101.5,70.2 108.0,66.0 114.5,62.2 121.0,59.0 127.5,56.2 134.0,54.0 140.5,52.3 147.0,51.0 153.5,50.2 160.0,50.0 166.5,50.2 173.0,51.0 179.5,52.2 186.0,54.0 192.5,56.2 199.0,59.0 205.5,62.3 212.0,66.0 218.5,70.2 225.0,75.0 231.5,80.2 238.0,86.0 244.5,92.2 251.0,99.0 257.5,106.2 264.0,114.0 270.5,122.3 277.0,131.0 283.5,140.2 290.0,150.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><line x1=\"30\" y1=\"150\" x2=\"78.49742261192857\" y2=\"122.0\" stroke=\"#2a8a4a\" stroke-width=\"2\"/><polygon points=\"82.0,120.0 77.7,125.6 75.0,120.9\" fill=\"#2a8a4a\"/><text x=\"92\" y=\"126\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#2a8a4a\">200 m/s</text><path d=\"M 62 150 A 32 32 0 0 0 58.7 135\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"72\" y=\"145\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"150\" stroke=\"#888\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"150\" y1=\"51\" x2=\"150.0\" y2=\"145.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"150.0,149.0 147.3,142.6 152.7,142.6\" fill=\"#c0392b\"/><line x1=\"150\" y1=\"50\" x2=\"150\" y2=\"150\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><text x=\"166\" y=\"102\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">maximum</text><text x=\"166\" y=\"116\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">height</text><line x1=\"30\" y1=\"172\" x2=\"286.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"290.0,172.0 283.6,174.7 283.6,169.3\" fill=\"#c0392b\"/><line x1=\"290\" y1=\"172\" x2=\"34.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"30.0,172.0 36.4,169.3 36.4,174.7\" fill=\"#c0392b\"/><text x=\"160\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">range (horizontal displacement)</text><text x=\"160\" y=\"206\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#666\">(not to scale)</text></svg></div>Find the peak height of the projectile.",
      options: ["210.2 m","310.2 m","410.2 m","510.2 m"],
      ans: "510.2 m",
      reason: "H = (u sin θ)² / 2g = (200 × 0.5)² / (2 × 9.8) = 10000 / 19.6 = 510.2 m."
    },
    {
      q: "<div class=\"stimulus\">A projectile is launched with an initial speed of 200 m/s at an angle of 30° with the horizontal. Take g = 9.8 m/s² and ignore air resistance.<svg viewBox=\"0 0 320 212\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.5\"/><polyline points=\"30.0,150.0 36.5,140.2 43.0,131.0 49.5,122.2 56.0,114.0 62.5,106.2 69.0,99.0 75.5,92.2 82.0,86.0 88.5,80.2 95.0,75.0 101.5,70.2 108.0,66.0 114.5,62.2 121.0,59.0 127.5,56.2 134.0,54.0 140.5,52.3 147.0,51.0 153.5,50.2 160.0,50.0 166.5,50.2 173.0,51.0 179.5,52.2 186.0,54.0 192.5,56.2 199.0,59.0 205.5,62.3 212.0,66.0 218.5,70.2 225.0,75.0 231.5,80.2 238.0,86.0 244.5,92.2 251.0,99.0 257.5,106.2 264.0,114.0 270.5,122.3 277.0,131.0 283.5,140.2 290.0,150.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><line x1=\"30\" y1=\"150\" x2=\"78.49742261192857\" y2=\"122.0\" stroke=\"#2a8a4a\" stroke-width=\"2\"/><polygon points=\"82.0,120.0 77.7,125.6 75.0,120.9\" fill=\"#2a8a4a\"/><text x=\"92\" y=\"126\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#2a8a4a\">200 m/s</text><path d=\"M 62 150 A 32 32 0 0 0 58.7 135\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"72\" y=\"145\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"150\" stroke=\"#888\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"150\" y1=\"51\" x2=\"150.0\" y2=\"145.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"150.0,149.0 147.3,142.6 152.7,142.6\" fill=\"#c0392b\"/><line x1=\"150\" y1=\"50\" x2=\"150\" y2=\"150\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><text x=\"166\" y=\"102\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">maximum</text><text x=\"166\" y=\"116\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">height</text><line x1=\"30\" y1=\"172\" x2=\"286.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"290.0,172.0 283.6,174.7 283.6,169.3\" fill=\"#c0392b\"/><line x1=\"290\" y1=\"172\" x2=\"34.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"30.0,172.0 36.4,169.3 36.4,174.7\" fill=\"#c0392b\"/><text x=\"160\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">range (horizontal displacement)</text><text x=\"160\" y=\"206\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#666\">(not to scale)</text></svg></div>Calculate the maximum horizontal displacement (range) of the projectile.",
      options: ["2534.7 m","3534.7 m","4534.7 m","5534.7 m"],
      ans: "3534.7 m",
      reason: "R = u² sin 2θ / g = 200² × sin 60° / 9.8 = 40000 × 0.8660 / 9.8 = 3534.7 m."
    },
    {
      q: "<div class=\"stimulus\">A projectile is launched with an initial speed of 200 m/s at an angle of 30° with the horizontal. Take g = 9.8 m/s² and ignore air resistance.<svg viewBox=\"0 0 320 212\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"20\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.5\"/><polyline points=\"30.0,150.0 36.5,140.2 43.0,131.0 49.5,122.2 56.0,114.0 62.5,106.2 69.0,99.0 75.5,92.2 82.0,86.0 88.5,80.2 95.0,75.0 101.5,70.2 108.0,66.0 114.5,62.2 121.0,59.0 127.5,56.2 134.0,54.0 140.5,52.3 147.0,51.0 153.5,50.2 160.0,50.0 166.5,50.2 173.0,51.0 179.5,52.2 186.0,54.0 192.5,56.2 199.0,59.0 205.5,62.3 212.0,66.0 218.5,70.2 225.0,75.0 231.5,80.2 238.0,86.0 244.5,92.2 251.0,99.0 257.5,106.2 264.0,114.0 270.5,122.3 277.0,131.0 283.5,140.2 290.0,150.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2.4\"/><line x1=\"30\" y1=\"150\" x2=\"78.49742261192857\" y2=\"122.0\" stroke=\"#2a8a4a\" stroke-width=\"2\"/><polygon points=\"82.0,120.0 77.7,125.6 75.0,120.9\" fill=\"#2a8a4a\"/><text x=\"92\" y=\"126\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#2a8a4a\">200 m/s</text><path d=\"M 62 150 A 32 32 0 0 0 58.7 135\" fill=\"none\" stroke=\"#222\" stroke-width=\"1.2\"/><text x=\"72\" y=\"145\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30°</text><line x1=\"160\" y1=\"50\" x2=\"160\" y2=\"150\" stroke=\"#888\" stroke-width=\"1\" stroke-dasharray=\"4 3\"/><line x1=\"150\" y1=\"51\" x2=\"150.0\" y2=\"145.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"150.0,149.0 147.3,142.6 152.7,142.6\" fill=\"#c0392b\"/><line x1=\"150\" y1=\"50\" x2=\"150\" y2=\"150\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><text x=\"166\" y=\"102\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">maximum</text><text x=\"166\" y=\"116\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">height</text><line x1=\"30\" y1=\"172\" x2=\"286.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"290.0,172.0 283.6,174.7 283.6,169.3\" fill=\"#c0392b\"/><line x1=\"290\" y1=\"172\" x2=\"34.0\" y2=\"172.0\" stroke=\"#c0392b\" stroke-width=\"1.5\"/><polygon points=\"30.0,172.0 36.4,169.3 36.4,174.7\" fill=\"#c0392b\"/><text x=\"160\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">range (horizontal displacement)</text><text x=\"160\" y=\"206\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#666\">(not to scale)</text></svg></div>Find the time for the projectile to reach its maximum height.",
      options: ["10.20 s","20.41 s","30.52 s","0.41 s"],
      ans: "10.20 s",
      reason: "At the top the vertical velocity is zero: t = u sin θ / g = 100 / 9.8 = 10.20 s, which is half the time of flight."
    }
    ];
  }
});
