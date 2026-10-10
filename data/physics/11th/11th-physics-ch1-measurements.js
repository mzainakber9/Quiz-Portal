// Class 11 Physics — Chapter 1: Measurements
// 30 MCQs, each with an explanation. Every answer was re-solved before writing the explanation.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities.
QuizBank.register({
  class: "11th",
  subject: "Physics",
  type: "chapter",
  id: "ch1",
  label: "Chapter 1: Measurements",
  order: 1,
  questions: function () {
    return [
    {
      q: "Which equation cannot be derived from dimensional analysis?",
      options: ["s = v_i t + ½at²","v_f = v_i + at","I = I₀ e^(−μx)","All of these"],
      ans: "I = I₀ e^(−μx)",
      reason: "Dimensional analysis can only test formulas built from powers of quantities. The exponential law I = I₀e^(−μx) contains e raised to a power, and dimensional analysis cannot find numerical factors or functions such as exponentials. The other two equations are ordinary kinematic relations that check out dimensionally."
    },
    {
      q: "What is the ratio of dimensions of power to work?",
      options: ["1 : T²","1 : T⁻²","1 : T⁻¹","1 : T"],
      ans: "1 : T",
      reason: "Power = work/time, so power ÷ work = 1/time = [T⁻¹]. The ratio of power to work is therefore 1 : T."
    },
    {
      q: "The dimensions of force is:",
      options: ["[M⁰ L T⁻²]","[M¹ L¹ T⁻² K⁰]","[M⁰ L¹ T⁻² K¹]","[M¹ L¹ T¹]"],
      ans: "[M¹ L¹ T⁻² K⁰]",
      reason: "F = ma, so [F] = [M][L T⁻²] = [M¹ L¹ T⁻²]. Force has no temperature dimension, so K⁰."
    },
    {
      q: "Dimensions of coefficient of viscosity are:",
      options: ["[M L T⁻¹]","[M L⁻¹ T⁻¹]","[M L² T⁻¹]","[M L T⁻²]"],
      ans: "[M L⁻¹ T⁻¹]",
      reason: "From F = 6πηrv, η = F/(6π r v). [η] = [M L T⁻²] / ([L][L T⁻¹]) = [M L⁻¹ T⁻¹]."
    },
    {
      q: "Dimensions of G (the gravitational constant) are:",
      options: ["[M⁻¹ L³ T⁻²]","[M⁻¹ L⁻³ T²]","[M L³ T²]","None of these"],
      ans: "[M⁻¹ L³ T⁻²]",
      reason: "From F = Gm₁m₂/r², G = Fr²/(m₁m₂). [G] = [M L T⁻²][L²]/[M²] = [M⁻¹ L³ T⁻²]."
    },
    {
      q: "What is the dimensional formula of Coulomb’s constant k?",
      options: ["[M L T⁻¹]","[M² L² T⁻¹]","[M L² T⁻²]","[M L³ T⁻⁴ A⁻²]"],
      ans: "[M L³ T⁻⁴ A⁻²]",
      reason: "From F = kq₁q₂/r², k = Fr²/q². With q = A·T: [k] = [M L T⁻²][L²] / ([A²T²]) = [M L³ T⁻⁴ A⁻²]."
    },
    {
      q: "The dimension of angular acceleration is:",
      options: ["[T⁻¹]","[L T²]","[T⁻²]","[T⁻³]"],
      ans: "[T⁻²]",
      reason: "Angular acceleration α = angular velocity/time = (rad/s)/s. Since the radian is dimensionless, [α] = [T⁻²]."
    },
    {
      q: "Which pair of physical quantities has the same dimension?",
      options: ["Work and Power","Force and Torque","Momentum and Impulse","Torque and Power"],
      ans: "Momentum and Impulse",
      reason: "Impulse = force × time = [M L T⁻²][T] = [M L T⁻¹], which is the same as momentum = mv = [M L T⁻¹]. Work and power, force and torque, and torque and power all differ in dimensions."
    },
    {
      q: "Dimension ratio of angular momentum to linear momentum is:",
      options: ["[M⁰ L¹ T⁰]","[M¹ L¹ T¹]","[M L² T⁻¹]","[M⁻¹ L⁻¹ T⁻¹]"],
      ans: "[M⁰ L¹ T⁰]",
      reason: "Angular momentum L = mvr = [M L² T⁻¹] and linear momentum p = mv = [M L T⁻¹]. Their ratio is [M L² T⁻¹]/[M L T⁻¹] = [L], i.e. [M⁰ L¹ T⁰]."
    },
    {
      q: "Which of the following are dimensionless quantity?",
      options: ["Angle","Pressure","Strain","Both (a) & (c)"],
      ans: "Both (a) & (c)",
      reason: "Angle (arc/radius) and strain (change in length/original length) are both ratios of like quantities, so both are dimensionless. Pressure has dimensions [M L⁻¹ T⁻²]. So the answer is (a) and (c)."
    },
    {
      q: "Which one of the following is a dimensionless quantity?",
      options: ["Stress","Strain","Coefficient of viscosity","Energy"],
      ans: "Strain",
      reason: "Strain = change in length/original length, a ratio of two lengths, so it has no dimensions. Stress, viscosity coefficient and energy all have dimensions."
    },
    {
      q: "Which of the following measurements is more precise?",
      options: ["3127 s","312.7 s","31.27 s","3.127 s"],
      ans: "3.127 s",
      reason: "Precision is shown by the number of decimal places, i.e. the size of the smallest division. 3.127 s is read to 0.001 s, the finest of the four, so it is the most precise."
    },
    {
      q: "A precise measurement is the one which has:",
      options: ["Less precision","Greater precision","Less fractional uncertainty","None of the above"],
      ans: "Less fractional uncertainty",
      reason: "A precise measurement has a small fractional uncertainty (uncertainty/measured value). The smaller this ratio, the more precise the measurement."
    },
    {
      q: "When a scale consistently gives a reading of 101 kg for a 100 kg weight, the scale is:",
      options: ["Accurate but not precise","Precise but not accurate","Both accurate and precise","Neither accurate nor precise"],
      ans: "Precise but not accurate",
      reason: "A scale that always shows 101 kg gives consistent (repeatable) readings, so it is precise. But the readings are not close to the true value of 100 kg, so it is not accurate."
    },
    {
      q: "Which error is suitable to compare accuracy of different measurements?",
      options: ["Direct error","Relative error","Percentage error","Both (b) and (c)"],
      ans: "Both (b) and (c)",
      reason: "Accuracy is compared using relative error (error/true value) or percentage error (relative error × 100), because they remove the effect of the size of the quantity. Direct (absolute) error cannot compare different measurements."
    },
    {
      q: "Four readings of a micrometer to measure the diameter of a wire in mm are 1.21, 1.23, 1.25, and 1.23. The mean of deviations is:",
      options: ["0.02 mm","0.01 mm","0.10 mm","0.20 mm"],
      ans: "0.01 mm",
      reason: "Mean = (1.21 + 1.23 + 1.25 + 1.23)/4 = 1.23 mm. Deviations: 0.02, 0, 0.02, 0. Mean deviation = (0.02 + 0 + 0.02 + 0)/4 = 0.01 mm."
    },
    {
      q: "In a simple pendulum experiment, percentage errors in L and T are 0.1% and 2% respectively. What is the maximum percentage error in LT⁻¹?",
      options: ["4.1%","3%","5%","2.1%"],
      ans: "2.1%",
      reason: "For a quantity LT⁻¹, percentage errors add: (ΔL/L) + 1×(ΔT/T) = 0.1% + 2% = 2.1%. The power of T is ignored in sign and counts as 1."
    },
    {
      q: "A system takes 88.00 seconds to complete 25 oscillations. Time period of the system is:",
      options: ["3.52 s","35.2 s","3.520 s","3.5200 s"],
      ans: "3.520 s",
      reason: "T = 88.00 s / 25 = 3.52 s. The time 88.00 s has 4 significant figures, so the answer is written with 4 significant figures: 3.520 s."
    },
    {
      q: "If the radius of a sphere is r = 2.25 ± 0.01 cm, then percentage uncertainty in r is:",
      options: ["0.2%","0.4%","0.1%","0.3%"],
      ans: "0.4%",
      reason: "Percentage uncertainty = (0.01/2.25) × 100 = 0.444% ≈ 0.4%."
    },
    {
      q: "If a measurement of time is 20 seconds with an uncertainty of 1 second, what is the fractional uncertainty?",
      options: ["0.05","0.1","0.2","0.02"],
      ans: "0.05",
      reason: "Fractional uncertainty = uncertainty/measurement = 1 s / 20 s = 0.05."
    },
    {
      q: "The mean diameter of a wire is found to be 0.50 ± 0.02 mm. Calculate the percentage uncertainty in the diameter.",
      options: ["2%","4%","6%","8%"],
      ans: "4%",
      reason: "Percentage uncertainty = (0.02/0.50) × 100 = 4%."
    },
    {
      q: "A reaction takes place that is expected to yield 171.9 g of product, but it only yields 154.8 g. What is the percent error for this experiment?",
      options: ["17.1%","90.1%","111.0%","9.9%"],
      ans: "9.9%",
      reason: "Percent error = (171.9 − 154.8)/171.9 × 100 = 17.1/171.9 × 100 ≈ 9.9%."
    },
    {
      q: "Three different people weigh a standard mass of 2.00 g on the same balance. Each person obtains a reading of exactly 7.32 g for the mass of the standard. These results imply that the balance that was used is:",
      options: ["Both accurate and precise","Neither accurate nor precise","Accurate but not precise","Precise but not accurate"],
      ans: "Precise but not accurate",
      reason: "All three readings are the same (7.32 g), so the balance is precise. But the actual mass is 2.00 g, so the readings are far from the true value and the balance is not accurate."
    },
    {
      q: "Dimension of universal gravitational constant is:",
      options: ["[M⁻² L³ T⁻²]","[M³ L⁻¹ T²]","[M⁻¹ L³ T⁻²]","[M⁻³ L³ T⁻²]"],
      ans: "[M⁻¹ L³ T⁻²]",
      reason: "From F = Gm₁m₂/r², G = Fr²/m². [G] = [M L T⁻²][L²]/[M²] = [M⁻¹ L³ T⁻²]."
    },
    {
      q: "A measurement which on repetition gives same or nearly same result is called:",
      options: ["Accurate","Average","Precise","Estimated"],
      ans: "Precise",
      reason: "A measurement that gives the same or nearly the same result when repeated is called precise. Accuracy, on the other hand, means closeness to the true value."
    },
    {
      q: "A student is measuring the time of an event by using a stopwatch. He takes 5 measurements as: 3.0 s, 3.2 s, 3.4 s, 2.8 s, 3.1 s. What is the uncertainty in the results?",
      options: ["± 0.3 s","± 0.6 s","± 3.1 s","± 7.75 s"],
      ans: "± 0.3 s",
      reason: "Mean = (3.0 + 3.2 + 3.4 + 2.8 + 3.1)/5 = 3.1 s. The largest deviation from the mean is 0.3 s (3.4 and 2.8), so the uncertainty is ± 0.3 s."
    },
    {
      q: "Which quantity has a different dimension?",
      options: ["Force","Weight","Modulus of elasticity","Tension"],
      ans: "Modulus of elasticity",
      reason: "Force, weight and tension are all forces, with dimensions [M L T⁻²]. Modulus of elasticity = stress/strain has the dimensions of pressure, [M L⁻¹ T⁻²], so it is the odd one out."
    },
    {
      q: "If the dimensions of a physical quantity are given by [Lᵃ Mᵇ Tᶜ], then the physical quantity will be:",
      options: ["Force, if a = −1, b = 0, c = −2","Pressure, if a = −1, b = 1, c = −2","Velocity, if a = 1, b = 0, c = 1","Acceleration, if a = 1, b = 1, c = −2"],
      ans: "Pressure, if a = −1, b = 1, c = −2",
      reason: "[M¹ L⁻¹ T⁻²] is the dimension of pressure (force/area = [M L T⁻²]/[L²]). So a = −1, b = 1, c = −2 gives pressure. Force would need a = 1, b = 1, c = −2."
    },
    {
      q: "Order of magnitude of (10⁶ + 10³) is:",
      options: ["10¹⁸","10⁹","10⁶","10³"],
      ans: "10⁶",
      reason: "The order of magnitude is the nearest power of ten. 10⁶ + 10³ = 1 001 000 ≈ 1.001 × 10⁶, so the order of magnitude is 10⁶."
    },
    {
      q: "Which of the following may be used as a valid formula to calculate speed of ocean waves? [v = speed, g = acceleration due to gravity, λ = wavelength, ρ = density, h = depth]",
      options: ["v = √(λg)","v = ρgh","v = gh / λ","v = λgh"],
      ans: "v = √(λg)",
      reason: "Check dimensions: √(λg) = √([L][L T⁻²]) = [L T⁻¹], which is speed. v = ρgh is a pressure, gh/λ gives [L T⁻²] and λgh gives [L³ T⁻²], so none of those are speeds."
    }
    ];
  }
});
