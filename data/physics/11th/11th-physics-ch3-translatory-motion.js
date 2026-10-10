// Class 11 Physics — Chapter 3: Translatory Motion
// 63 MCQs, each with an explanation. Every answer was re-solved before writing the explanation.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities.
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
    }
    ];
  }
});
