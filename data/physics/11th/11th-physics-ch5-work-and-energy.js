// Class 11 Physics — Chapter 5: Work and Energy
// 67 MCQs, each with an explanation. Every answer was re-solved before writing the explanation.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities.
QuizBank.register({
  class: "11th",
  subject: "Physics",
  type: "chapter",
  id: "ch5",
  label: "Chapter 5: Work and Energy",
  order: 5,
  questions: function () {
    return [
    {
      q: "When angle between force and displacement θ &lt; 90°, the work done is:",
      options: ["positive","negative","maximum","zero"],
      ans: "positive",
      reason: "W = Fd cosθ. For θ &lt; 90°, cosθ is positive, so the work done is positive."
    },
    {
      q: "The work done is said to be negative when force and displacement are:",
      options: ["Parallel","Anti-parallel","Perpendicular","None"],
      ans: "Anti-parallel",
      reason: "W = Fd cosθ is negative when cosθ &lt; 0. For anti-parallel force and displacement θ = 180° and cos 180° = −1, so the work is negative."
    },
    {
      q: "The SI unit of work is:",
      options: ["newton","N × m²","Joule","Kelvin"],
      ans: "Joule",
      reason: "Work = force × distance = newton × metre, which is called the joule (J) in the SI system."
    },
    {
      q: "Dimension of work is same as:",
      options: ["torque","energy per unit volume","modulus of elasticity","force"],
      ans: "torque",
      reason: "Work has dimensions [M L² T⁻²]. Torque = force × distance has the same dimensions. Energy per unit volume and modulus of elasticity have the dimensions of pressure, [M L⁻¹ T⁻²], and force has [M L T⁻²]."
    },
    {
      q: "The dimensions of work are:",
      options: ["[M L T⁻²]","[M L² T]","[M L² T⁻²]","[M L T]"],
      ans: "[M L² T⁻²]",
      reason: "W = F × d = [M L T⁻²] × [L] = [M L² T⁻²]."
    },
    {
      q: "Work done will be maximum when angle between F and d is:",
      options: ["180°","0°","45°","90°"],
      ans: "0°",
      reason: "W = Fd cosθ is maximum when cosθ = 1, i.e. θ = 0°."
    },
    {
      q: "The work done will be zero when angle between F and d is:",
      options: ["180°","0°","45°","90°"],
      ans: "90°",
      reason: "W = Fd cosθ = 0 when cosθ = 0, i.e. θ = 90°. A force perpendicular to the displacement does no work."
    },
    {
      q: "The area under force displacement curve gives:",
      options: ["Power","Work","Momentum","distance"],
      ans: "Work",
      reason: "The area under a force–displacement graph is ∫F dx, which is the work done."
    },
    {
      q: "When force F making angle 60° with displacement d, then work on the body will be:",
      options: ["Fd","Fd / 2","0.866 Fd","Fd / 3"],
      ans: "Fd / 2",
      reason: "W = Fd cos 60° = Fd × 0.5 = Fd/2."
    },
    {
      q: "Work done by centripetal force is:",
      options: ["Positive","Negative","Zero","Non zero"],
      ans: "Zero",
      reason: "Centripetal force is always perpendicular to the motion (displacement), so cos 90° = 0 and the work done is zero."
    },
    {
      q: "When the finite force is parallel to the direction of motion of the body, the work done is:",
      options: ["Minimum","Maximum","Infinity","Varies"],
      ans: "Maximum",
      reason: "If the force is parallel to the motion, θ = 0° and cosθ = 1, so W = Fd, which is the maximum possible work for that force and displacement."
    },
    {
      q: "If a 50 kg crate is pushed through 2 m across the floor with a force of 50 N, the work done will be:",
      options: ["245 J","150 J","200 J","100 J"],
      ans: "100 J",
      reason: "W = Fd = 50 N × 2 m = 100 J. The mass of the crate is not needed because the pushing force is given."
    },
    {
      q: "A man pushes a lawn mower with 40 N force directed at an angle of 20° downward from the horizontal. Find the work done by the man as he cuts a strip of grass 20 m long.",
      options: ["752 J","800 J","2 J","1000 J"],
      ans: "752 J",
      reason: "W = Fd cosθ = 40 × 20 × cos 20° = 800 × 0.9397 = 751.8 ≈ 752 J."
    },
    {
      q: "Work is said to be negative when force and displacement are:",
      options: ["parallel","anti parallel","perpendicular","none of these"],
      ans: "anti parallel",
      reason: "Work is negative when the force opposes the displacement (θ = 180°), i.e. when they are anti-parallel."
    },
    {
      q: "If the force applied to an object decreases linearly from 100 N to 0 N over a displacement of 10 meters, what is the shape of the area under the force–displacement graph?",
      options: ["rectangle","triangle","trapezoid","parabola"],
      ans: "triangle",
      reason: "A force that drops uniformly from 100 N to 0 N makes a straight line on the graph, and the area under it is a triangle. (Work = ½ × 10 × 100 = 500 J.)"
    },
    {
      q: "A man rowing a boat upstream is at rest with respect to the shore. His work done is:",
      options: ["positive","negative","no work","none of these"],
      ans: "no work",
      reason: "The man is at rest with respect to the shore, so the displacement is zero and W = F × 0 = 0. No work is done on the boat relative to the shore."
    },
    {
      q: "The work done in moving a body between two points in the conservative field is independent of:",
      options: ["force","direction","path followed by the body","energy"],
      ans: "path followed by the body",
      reason: "In a conservative field the work done between two points depends only on the positions of the two points, not on the path taken."
    },
    {
      q: "If force and displacement of a particle in the direction of force are doubled, the work would be:",
      options: ["Double","4 time","half","4.4 J"],
      ans: "4 time",
      reason: "W = Fd. If both F and d are doubled, W = (2F)(2d) = 4Fd, so the work becomes 4 times."
    },
    {
      q: "An electron revolves around the nucleus and completes 100 rev/min. The work done by the Coulomb's force is:",
      options: ["50 J","50 Ergs","50 Foot pound","zero"],
      ans: "zero",
      reason: "The Coulomb force acts toward the nucleus (centripetal), perpendicular to the electron's motion along a circle. Also, in one full revolution the displacement is zero. So the work done is zero."
    },
    {
      q: "You are lifting an object with a mass of 20 kg to a height of 3 meters. Calculate the work done.",
      options: ["0","294 J","600 J","588 J"],
      ans: "588 J",
      reason: "Lifting a mass: W = mgh = 20 × 9.8 × 3 = 588 J."
    },
    {
      q: "Which of the following is a non conservative force?",
      options: ["Electric Force","Gravitational Force","Elastic Spring Force","Normal Force"],
      ans: "Normal Force",
      reason: "Electric, gravitational and elastic spring forces are conservative. The normal force is a contact (constraint) force and is not conservative, so it is the answer."
    },
    {
      q: "In earth's gravitational field, work done in a closed path is:",
      options: ["maximum","positive","negative","zero"],
      ans: "zero",
      reason: "Gravity is a conservative force. The work done in a closed path in a conservative field is zero."
    },
    {
      q: "When the displacement is against the gravitational force, the work done is:",
      options: ["positive","negative","zero","cannot be calculated"],
      ans: "negative",
      reason: "If displacement is against gravity (upward), the angle between gravity and displacement is 180°, so the work done by gravity is negative."
    },
    {
      q: "Tick the conservative force:",
      options: ["Tension in a string","Air Resistance","Elastic spring force","Frictional force"],
      ans: "Elastic spring force",
      reason: "The elastic spring force is conservative (the work depends only on the initial and final extension). Tension, air resistance and friction are non-conservative."
    },
    {
      q: "An example of non-conservative force is:",
      options: ["Electric Force","Gravitational Force","Frictional Force","elastic spring force"],
      ans: "Frictional Force",
      reason: "Frictional force is non-conservative because the work done against it depends on the path and converts energy into heat. Electric, gravitational and elastic spring forces are conservative."
    },
    {
      q: "Which of the following is a non-conservative force?",
      options: ["Nuclear force","Elastic force","Electrostatic force","Viscous force"],
      ans: "Viscous force",
      reason: "Viscous force is a dissipative (non-conservative) force. Nuclear, elastic and electrostatic forces are conservative."
    },
    {
      q: "Which of the following types of force can do no work on the particle on which it acts?",
      options: ["Friction force","gravitational force","Elastic force","centripetal force"],
      ans: "centripetal force",
      reason: "Centripetal force is always perpendicular to the velocity, so cos 90° = 0 and it does no work on the particle."
    },
    {
      q: "Gravity performs zero work when body moves:",
      options: ["vertically","horizontally","at angle 60° with vertical","at angle 60° with horizontal"],
      ans: "horizontally",
      reason: "Gravity acts vertically. For horizontal motion the displacement is perpendicular to gravity, so W = mg d cos 90° = 0."
    },
    {
      q: "A man carries a bucket of water of 1 kg for 10 m, then work done by gravity:",
      options: ["10 J","5 J","2.5 J","zero"],
      ans: "zero",
      reason: "Gravity acts vertically downward but the man's displacement is horizontal, so the angle is 90° and W = mgd cos 90° = 0."
    },
    {
      q: "The force whose total work done in moving a body along a closed path is zero is:",
      options: ["Frictional force","conservative force","Normal force","Viscous force"],
      ans: "conservative force",
      reason: "A conservative force does zero total work around any closed path. Friction, normal force and viscous force are not conservative."
    },
    {
      q: "Consider the work done by air resistance on a falling object. Why is air resistance considered a non conservative force?",
      options: ["Air resistance only depends on the initial and final positions.","Air resistance increases the mechanical energy of the system.","Air resistance dissipates mechanical energy as heat.","Air resistance can be described by a potential energy function."],
      ans: "Air resistance dissipates mechanical energy as heat.",
      reason: "Air resistance dissipates mechanical energy as heat, and the work it does depends on the path taken. This is what makes it non-conservative."
    },
    {
      q: "Which of the following statements is true regarding conservative and non conservative forces?",
      options: ["Conservative forces do work that depends only on the initial and final positions, while non conservative forces depend on the path taken.","Conservative forces are always frictional forces, while non conservative forces are gravitational.","Conservative forces dissipate energy, while non conservative forces conserve energy.","Conservative force only acts in one direction, while non conservative forces act in multiple directions."],
      ans: "Conservative forces do work that depends only on the initial and final positions, while non conservative forces depend on the path taken.",
      reason: "A conservative force does work that depends only on the start and end positions, while a non-conservative force does work that depends on the path taken. The other statements are incorrect (friction is non-conservative, gravity is conservative)."
    },
    {
      q: "When a ball is thrown vertically upward and then falls back to the ground, which force can be considered conservative in this scenario?",
      options: ["Air resistance","Gravity","Friction between the ball and air","Contact force with the hand"],
      ans: "Gravity",
      reason: "Gravity is conservative (its work depends only on the initial and final heights). Air resistance and friction are non-conservative, and the contact force from the hand acts only during release."
    },
    {
      q: "An example of non conservative force is:",
      options: ["Electric force","gravitational force","frictional force","none"],
      ans: "frictional force",
      reason: "Frictional force is non-conservative. Electric and gravitational forces are conservative."
    },
    {
      q: "The bob of an oscillating simple pendulum comes to rest after some time due to work done by:",
      options: ["its mass","gravity","friction of air","Tension in the string"],
      ans: "friction of air",
      reason: "The pendulum loses its mechanical energy to air friction (a non-conservative force) and finally stops. Gravity does no net work over a full oscillation and the string tension does no work."
    },
    {
      q: "A body of weight 1 N has a kinetic energy of 1 Joule when its speed is:",
      options: ["1.46 m/sec","2.44 m/sec","3.42 m/sec","4.43 m/sec"],
      ans: "4.43 m/sec",
      reason: "Weight = mg = 1 N, so m = 1/9.8 = 0.102 kg. K.E = ½mv² = 1 gives v² = 2/0.102 = 19.6, so v = 4.43 m/s."
    },
    {
      q: "A moving body need not have:",
      options: ["velocity","momentum","potential energy","kinetic energy"],
      ans: "potential energy",
      reason: "A moving body always has velocity, momentum and kinetic energy, but it need not have potential energy (for example a body moving horizontally at ground level)."
    },
    {
      q: "The K.E of a body of mass 1 kg and momentum 2 Ns is equal to:",
      options: ["1 J","10 J","5 J","2 J"],
      ans: "2 J",
      reason: "K.E = p²/(2m) = 2²/(2 × 1) = 4/2 = 2 J."
    },
    {
      q: "A body is projected such that the K.E at the topmost position is half of the initial K.E. What is its angle of projection with the horizontal?",
      options: ["45°","90°","60°","30°"],
      ans: "45°",
      reason: "At the top only the horizontal component v_i cosθ remains. K.E_top = ½m(v_i cosθ)² = ½(½mv_i²), so cos²θ = ½, cosθ = 1/√2 and θ = 45°."
    },
    {
      q: "If the velocity of a body becomes double and mass becomes half, then K.E:",
      options: ["becomes double","becomes four times","is halved","becomes eight times"],
      ans: "becomes double",
      reason: "K.E = ½mv². New K.E = ½(m/2)(2v)² = ½ × (m/2) × 4v² = 2 × (½mv²). So the kinetic energy doubles."
    },
    {
      q: "The K.E of a body of mass m is E. Its momentum is:",
      options: ["√(2mE)","2mE","√(mE/2)","2E/m"],
      ans: "√(2mE)",
      reason: "E = p²/(2m), so p² = 2mE and p = √(2mE)."
    },
    {
      q: "A bomb of mass 9 kg explodes into two pieces of mass 3 kg and 6 kg. The velocity of mass 3 kg is 16 m/s. K.E of mass 6 kg is:",
      options: ["96 J","192 J","384 J","768 J"],
      ans: "192 J",
      reason: "Momentum is conserved (the bomb was at rest): 3 × 16 = 6 × v, so v = 8 m/s. K.E of the 6 kg piece = ½ × 6 × 8² = 3 × 64 = 192 J."
    },
    {
      q: "What is the kinetic energy of a 100 kg mass moving with a speed of 5 m/s?",
      options: ["1000 J","125 J","625 J","1250 J"],
      ans: "1250 J",
      reason: "K.E = ½mv² = ½ × 100 × 5² = 50 × 25 = 1250 J."
    },
    {
      q: "Two bodies of mass 1 kg and 2 kg have equal momentum. The ratio of their kinetic energies is:",
      options: ["1 : 1","2 : 1","1 : 3","3 : 1"],
      ans: "2 : 1",
      reason: "For equal momentum K.E = p²/(2m) ∝ 1/m. So K.E₁ : K.E₂ = (1/1) : (1/2) = 2 : 1."
    },
    {
      q: "Which quantity increases to double to get double kinetic energy?",
      options: ["Mass","Speed","Height","Velocity"],
      ans: "Mass",
      reason: "K.E = ½mv². K.E is directly proportional to mass, so doubling the mass doubles the kinetic energy. (Doubling the speed would make it 4 times.)"
    },
    {
      q: "How does kinetic energy vary with speed for an object in motion?",
      options: ["Kinetic energy is directly proportional to speed.","Kinetic energy is inversely proportional to speed.","Kinetic energy is independent of speed.","Kinetic energy varies with the square of the speed."],
      ans: "Kinetic energy varies with the square of the speed.",
      reason: "K.E = ½mv², so the kinetic energy varies with the square of the speed."
    },
    {
      q: "A bullet strikes and becomes lodged in a solid block situated on a horizontal, frictionless surface. Which quantity is not conserved?",
      options: ["momentum and kinetic energy","momentum alone","kinetic energy alone","neither momentum nor kinetic energy"],
      ans: "kinetic energy alone",
      reason: "When the bullet embeds in the block, the collision is perfectly inelastic. Momentum is conserved (no external horizontal force), but some kinetic energy is lost as heat and deformation. So kinetic energy alone is not conserved."
    },
    {
      q: "Two bodies of masses m₁ and m₂ have equal momentum. Their kinetic energies E₁ and E₂ are in the ratio:",
      options: ["√m₁ : √m₂","m₁ : m₂","m₂ : m₁","√m₁² : √m₂²"],
      ans: "m₂ : m₁",
      reason: "With p equal, K.E = p²/(2m) ∝ 1/m, so E₁ : E₂ = (1/m₁) : (1/m₂) = m₂ : m₁."
    },
    {
      q: "Two bodies A and B of equal mass have velocities in the ratio 2:1. Their kinetic energies are in the ratio:",
      options: ["2:1","1:2","4:1","1:4"],
      ans: "4:1",
      reason: "K.E ∝ v² for equal masses. Ratio = 2² : 1² = 4 : 1."
    },
    {
      q: "A force acts on a body in the direction of motion. The kinetic energy of the body will:",
      options: ["increase","decrease","remain the same","none"],
      ans: "increase",
      reason: "A force in the direction of motion does positive work on the body. By the work–energy theorem the kinetic energy increases."
    },
    {
      q: "A light and a heavy body have equal momentum. Which one will have greater kinetic energy?",
      options: ["the light body","the heavy body","both will have equal kinetic energy","data given is incomplete"],
      ans: "the light body",
      reason: "For the same momentum K.E = p²/(2m), so the light body (smaller mass) has the greater kinetic energy."
    },
    {
      q: "Two bodies of mass m and 4m are moving with equal kinetic energies. The ratio of their linear momentum is:",
      options: ["1:4","4:1","1:2","1:√2"],
      ans: "1:2",
      reason: "For equal K.E, p = √(2mE) ∝ √m. So p₁ : p₂ = √m : √(4m) = 1 : 2."
    },
    {
      q: "If momentum is increased by 2%, then K.E increases by:",
      options: ["4.04%","5.05%","6.06%","7.07%"],
      ans: "4.04%",
      reason: "K.E ∝ p². A 2% increase in p gives (1.02)² = 1.0404 times the kinetic energy, i.e. a 4.04% increase."
    },
    {
      q: "Actual mechanical advantage is:",
      options: ["Equal to ideal mechanical advantage","less than ideal mechanical advantage","greater than ideal mechanical advantage","none of these"],
      ans: "less than ideal mechanical advantage",
      reason: "Actual mechanical advantage = load/effort in a real machine. Friction means more effort is needed than in an ideal machine, so the actual mechanical advantage is less than the ideal mechanical advantage."
    },
    {
      q: "Input of mechanical machines:",
      options: ["input = effort × distance through which effort acts","input = load × distance through which effort acts","input = effort × distance through which load acts","input = load × distance through which load acts"],
      ans: "input = effort × distance through which effort acts",
      reason: "Input (work put into the machine) = effort × the distance through which the effort acts."
    },
    {
      q: "Output of mechanical machines:",
      options: ["output = effort × distance through which effort acts","output = load × distance through which effort acts","output = effort × distance through which load acts","output = load × distance through which load acts"],
      ans: "output = load × distance through which load acts",
      reason: "Output (useful work done by the machine) = load × the distance through which the load moves."
    },
    {
      q: "Efficiency of a machine is:",
      options: ["ratio of output to input","ratio of output to output","ratio of input to input","ratio of input to output"],
      ans: "ratio of output to input",
      reason: "Efficiency = (useful output / input) × 100, i.e. the ratio of output to input."
    },
    {
      q: "An ideal machine is one whose efficiency is:",
      options: ["between 60 and 70%","between 70 and 80%","between 80 and 90%","100%"],
      ans: "100%",
      reason: "An ideal machine has no losses (no friction), so output = input and its efficiency is 100%."
    },
    {
      q: "In an ideal machine, the output as compared to input is:",
      options: ["less","more","equal","always less"],
      ans: "equal",
      reason: "An ideal machine has no losses, so the output work equals the input work."
    },
    {
      q: "If the unit of force and displacement travelled each be increased five times, then the unit of work will be increased by:",
      options: ["25 times","10 times","5 times","0 times"],
      ans: "25 times",
      reason: "W = F × d. If both F and d become 5 times, W becomes 5 × 5 = 25 times."
    },
    {
      q: "The force that acts on a body but does no work is:",
      options: ["gravitational force","frictional force","elastic force","centripetal force"],
      ans: "centripetal force",
      reason: "Centripetal force is perpendicular to the displacement, so it acts on the body but does no work."
    },
    {
      q: "The odd force from the following is:",
      options: ["gravitational force","elastic force","frictional force","electric force"],
      ans: "frictional force",
      reason: "Gravitational, elastic and electric forces are all conservative forces. Frictional force is non-conservative, so it is the odd one."
    },
    {
      q: "If the velocity of a body reduces to half of its initial value, then the kinetic energy of the body compared to its initial value is:",
      options: ["one fourth","double","four times","half"],
      ans: "one fourth",
      reason: "K.E ∝ v². If v becomes ½v, the K.E becomes (½)² = ¼ of the initial value, i.e. one fourth."
    },
    {
      q: "A moving hockey ball is hit, such that its speed doubles. Its kinetic energy will become:",
      options: ["double","quadruple","halve","zero"],
      ans: "quadruple",
      reason: "K.E ∝ v². If the speed doubles, K.E becomes 2² = 4 times (quadruple)."
    },
    {
      q: "An engine converts 600 J of input energy into 150 J of useful work. The efficiency of the engine is:",
      options: ["25%","50%","75%","100%"],
      ans: "25%",
      reason: "Efficiency = (useful work output / input energy) × 100 = (150/600) × 100 = 25%."
    },
    {
      q: "Consider two machines, A and B. Machine A has an efficiency of 40% and Machine B has an efficiency of 60%. If both machines are provided with 500 J of energy, how much more useful work does Machine B perform compared to Machine A?",
      options: ["50 J","100 J","200 J","300 J"],
      ans: "100 J",
      reason: "Machine A: 40% of 500 = 200 J. Machine B: 60% of 500 = 300 J. Difference = 300 − 200 = 100 J."
    },
    {
      q: "A wind turbine converts 30% of the wind's kinetic energy into electrical energy. If the kinetic energy of the wind is 900 J, the electrical energy produced by the turbine is:",
      options: ["90 J","270 J","600 J","700 J"],
      ans: "270 J",
      reason: "Electrical energy = 30% of 900 J = 0.30 × 900 = 270 J."
    }
    ];
  }
});
