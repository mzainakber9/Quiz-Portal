// Class 11 Physics — Chapter 1: Physical Quantities and Measurements
// 105 MCQs, each with an explanation: 30 chapter-file MCQs + 67 SLO-based MCQs (incl. scenario and diagram questions) + 8 FBISE model-paper MCQs.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities (options are plain text).
QuizBank.register({
  class: "11th",
  subject: "Physics",
  type: "chapter",
  id: "ch1",
  label: "Chapter 1: Physical Quantities and Measurements",
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
    },

    // ---- Additional MCQs written to the FBISE HSSC-I Physics (Grade XI) SLOs: straight, scenario-based and diagram questions ----
    {
      q: "<div class=\"stimulus\">Three instruments A, B and C were each used to measure the same metal rod, whose true length is known to be 50.0 mm. Each instrument gave four readings, plotted below on a common scale.<svg viewBox=\"0 0 330 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"30\" y1=\"128\" x2=\"30\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">44</text><line x1=\"74\" y1=\"128\" x2=\"74\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"74\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">46</text><line x1=\"118\" y1=\"128\" x2=\"118\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"118\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">48</text><line x1=\"162\" y1=\"128\" x2=\"162\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">50</text><line x1=\"206\" y1=\"128\" x2=\"206\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"206\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">52</text><line x1=\"250\" y1=\"128\" x2=\"250\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"250\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">54</text><line x1=\"294\" y1=\"128\" x2=\"294\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"294\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">56</text><line x1=\"30\" y1=\"128\" x2=\"294\" y2=\"128\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"162\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">reading (mm)</text><line x1=\"162\" y1=\"16\" x2=\"162\" y2=\"128\" stroke=\"#c0392b\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/><text x=\"162\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#c0392b\">true value 50.0 mm</text><line x1=\"30\" y1=\"55\" x2=\"294\" y2=\"55\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"49\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">A</text><circle cx=\"157.6\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"159.8\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"164.2\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"166.4\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"85\" x2=\"294\" y2=\"85\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"79\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">B</text><circle cx=\"201.6\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"203.8\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"208.2\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"210.4\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"115\" x2=\"294\" y2=\"115\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"109\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">C</text><circle cx=\"74\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"140\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"184\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"250\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/></svg></div>Which instrument gave readings that are both accurate and precise?",
      options: ["A","B","A and B equally","C"],
      ans: "A",
      reason: "A's readings are tightly grouped (precise) and centred on 50.0 mm (accurate). B is tightly grouped but about 2 mm too high; C is centred on the true value but widely scattered."
    },
    {
      q: "<div class=\"stimulus\">Three instruments A, B and C were each used to measure the same metal rod, whose true length is known to be 50.0 mm. Each instrument gave four readings, plotted below on a common scale.<svg viewBox=\"0 0 330 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"30\" y1=\"128\" x2=\"30\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">44</text><line x1=\"74\" y1=\"128\" x2=\"74\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"74\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">46</text><line x1=\"118\" y1=\"128\" x2=\"118\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"118\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">48</text><line x1=\"162\" y1=\"128\" x2=\"162\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">50</text><line x1=\"206\" y1=\"128\" x2=\"206\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"206\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">52</text><line x1=\"250\" y1=\"128\" x2=\"250\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"250\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">54</text><line x1=\"294\" y1=\"128\" x2=\"294\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"294\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">56</text><line x1=\"30\" y1=\"128\" x2=\"294\" y2=\"128\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"162\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">reading (mm)</text><line x1=\"162\" y1=\"16\" x2=\"162\" y2=\"128\" stroke=\"#c0392b\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/><text x=\"162\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#c0392b\">true value 50.0 mm</text><line x1=\"30\" y1=\"55\" x2=\"294\" y2=\"55\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"49\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">A</text><circle cx=\"157.6\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"159.8\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"164.2\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"166.4\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"85\" x2=\"294\" y2=\"85\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"79\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">B</text><circle cx=\"201.6\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"203.8\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"208.2\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"210.4\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"115\" x2=\"294\" y2=\"115\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"109\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">C</text><circle cx=\"74\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"140\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"184\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"250\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/></svg></div>Which description of instrument B is correct?",
      options: ["Accurate but not precise; it has large random errors","Neither precise nor accurate, because its readings differ from each other","Both accurate and precise, because its readings are close together","Precise but not accurate; it probably has a systematic error such as a zero error"],
      ans: "Precise but not accurate; it probably has a systematic error such as a zero error",
      reason: "B's four readings agree closely (precise) but all lie about 2 mm above the true value, a constant offset typical of a systematic error. Closeness of readings to each other says nothing about closeness to the true value."
    },
    {
      q: "<div class=\"stimulus\">Three instruments A, B and C were each used to measure the same metal rod, whose true length is known to be 50.0 mm. Each instrument gave four readings, plotted below on a common scale.<svg viewBox=\"0 0 330 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"30\" y1=\"128\" x2=\"30\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">44</text><line x1=\"74\" y1=\"128\" x2=\"74\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"74\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">46</text><line x1=\"118\" y1=\"128\" x2=\"118\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"118\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">48</text><line x1=\"162\" y1=\"128\" x2=\"162\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">50</text><line x1=\"206\" y1=\"128\" x2=\"206\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"206\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">52</text><line x1=\"250\" y1=\"128\" x2=\"250\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"250\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">54</text><line x1=\"294\" y1=\"128\" x2=\"294\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"294\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">56</text><line x1=\"30\" y1=\"128\" x2=\"294\" y2=\"128\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"162\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">reading (mm)</text><line x1=\"162\" y1=\"16\" x2=\"162\" y2=\"128\" stroke=\"#c0392b\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/><text x=\"162\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#c0392b\">true value 50.0 mm</text><line x1=\"30\" y1=\"55\" x2=\"294\" y2=\"55\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"49\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">A</text><circle cx=\"157.6\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"159.8\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"164.2\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"166.4\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"85\" x2=\"294\" y2=\"85\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"79\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">B</text><circle cx=\"201.6\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"203.8\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"208.2\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"210.4\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"115\" x2=\"294\" y2=\"115\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"109\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">C</text><circle cx=\"74\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"140\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"184\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"250\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/></svg></div>The mean of B's readings is 52.0 mm. What is the percentage error of this mean?",
      options: ["4.0%","2.0%","0.4%","3.8%"],
      ans: "4.0%",
      reason: "Error = 52.0 − 50.0 = 2.0 mm. Percentage error = (2.0 / 50.0) × 100 = 4.0%. Dividing by the measured value instead gives 3.8%."
    },
    {
      q: "<div class=\"stimulus\">Three instruments A, B and C were each used to measure the same metal rod, whose true length is known to be 50.0 mm. Each instrument gave four readings, plotted below on a common scale.<svg viewBox=\"0 0 330 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"30\" y1=\"128\" x2=\"30\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">44</text><line x1=\"74\" y1=\"128\" x2=\"74\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"74\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">46</text><line x1=\"118\" y1=\"128\" x2=\"118\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"118\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">48</text><line x1=\"162\" y1=\"128\" x2=\"162\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">50</text><line x1=\"206\" y1=\"128\" x2=\"206\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"206\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">52</text><line x1=\"250\" y1=\"128\" x2=\"250\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"250\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">54</text><line x1=\"294\" y1=\"128\" x2=\"294\" y2=\"133\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"294\" y=\"146\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">56</text><line x1=\"30\" y1=\"128\" x2=\"294\" y2=\"128\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"162\" y=\"162\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">reading (mm)</text><line x1=\"162\" y1=\"16\" x2=\"162\" y2=\"128\" stroke=\"#c0392b\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\"/><text x=\"162\" y=\"12\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#c0392b\">true value 50.0 mm</text><line x1=\"30\" y1=\"55\" x2=\"294\" y2=\"55\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"49\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">A</text><circle cx=\"157.6\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"159.8\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"164.2\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"166.4\" cy=\"45\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"85\" x2=\"294\" y2=\"85\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"79\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">B</text><circle cx=\"201.6\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"203.8\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"208.2\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"210.4\" cy=\"75\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><line x1=\"30\" y1=\"115\" x2=\"294\" y2=\"115\" stroke=\"#ddd\" stroke-width=\"1\"/><text x=\"12\" y=\"109\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">C</text><circle cx=\"74\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"140\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"184\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/><circle cx=\"250\" cy=\"105\" r=\"4\" fill=\"#1f5fbf\" fill-opacity=\"0.7\" stroke=\"#1f5fbf\"/></svg></div>Each instrument is used to take 100 more readings and the mean is calculated. Which mean would still be about 2 mm away from the true value?",
      options: ["Instrument C","Instrument B","Instrument A","None of them; averaging removes all errors"],
      ans: "Instrument B",
      reason: "Averaging reduces random scatter (as in C) but cannot remove a constant systematic offset (as in B). So B's mean would still be about 52 mm."
    },
    {
      q: "<div class=\"stimulus\">A student measures a rectangular metal plate with a ruler and records its length and width with their absolute uncertainties, as shown.<svg viewBox=\"0 0 290 168\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"20\" y=\"20\" width=\"150\" height=\"100\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"20\" y1=\"138\" x2=\"170\" y2=\"138\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"20,138 28,135 28,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"170,138 162,135 162,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"95\" y=\"157\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">l = 12.0 ± 0.1 cm</text><line x1=\"188\" y1=\"20\" x2=\"188\" y2=\"120\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,20 185,28 191,28\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,120 185,112 191,112\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"196\" y=\"64\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">w = 8.0</text><text x=\"196\" y=\"80\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">± 0.1 cm</text><text x=\"95\" y=\"75\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">metal plate</text></svg></div>What is the absolute uncertainty in the perimeter of the plate?",
      options: ["± 0.1 cm","± 0.4 cm","± 0.2 cm","± 0.8 cm"],
      ans: "± 0.4 cm",
      reason: "Perimeter = 2(l + w) = 40.0 cm. Absolute uncertainties add for sums: Δ(l + w) = 0.1 + 0.1 = 0.2 cm, and the factor 2 multiplies it: ± 0.4 cm. ± 0.2 cm forgets the factor 2."
    },
    {
      q: "<div class=\"stimulus\">A student measures a rectangular metal plate with a ruler and records its length and width with their absolute uncertainties, as shown.<svg viewBox=\"0 0 290 168\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"20\" y=\"20\" width=\"150\" height=\"100\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"20\" y1=\"138\" x2=\"170\" y2=\"138\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"20,138 28,135 28,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"170,138 162,135 162,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"95\" y=\"157\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">l = 12.0 ± 0.1 cm</text><line x1=\"188\" y1=\"20\" x2=\"188\" y2=\"120\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,20 185,28 191,28\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,120 185,112 191,112\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"196\" y=\"64\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">w = 8.0</text><text x=\"196\" y=\"80\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">± 0.1 cm</text><text x=\"95\" y=\"75\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">metal plate</text></svg></div>What is the absolute uncertainty in the area of the plate?",
      options: ["± 2 cm²","± 0.2 cm²","± 1 cm²","± 4 cm²"],
      ans: "± 2 cm²",
      reason: "Area = 12.0 × 8.0 = 96 cm². Fractional uncertainties add: 0.1/12.0 + 0.1/8.0 = 0.00833 + 0.0125 = 0.0208. Absolute uncertainty = 0.0208 × 96 = 2.0 cm². Simply adding 0.1 + 0.1 would be wrong for a product."
    },
    {
      q: "<div class=\"stimulus\">A student measures a rectangular metal plate with a ruler and records its length and width with their absolute uncertainties, as shown.<svg viewBox=\"0 0 290 168\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"20\" y=\"20\" width=\"150\" height=\"100\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"20\" y1=\"138\" x2=\"170\" y2=\"138\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"20,138 28,135 28,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"170,138 162,135 162,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"95\" y=\"157\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">l = 12.0 ± 0.1 cm</text><line x1=\"188\" y1=\"20\" x2=\"188\" y2=\"120\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,20 185,28 191,28\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,120 185,112 191,112\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"196\" y=\"64\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">w = 8.0</text><text x=\"196\" y=\"80\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">± 0.1 cm</text><text x=\"95\" y=\"75\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">metal plate</text></svg></div>The student calculates the difference (l − w). What is the percentage uncertainty in this difference?",
      options: ["0.2%","5.0%","10%","1.7%"],
      ans: "5.0%",
      reason: "l − w = 4.0 cm. For a difference the absolute uncertainties add: 0.1 + 0.1 = 0.2 cm. Percentage uncertainty = (0.2 / 4.0) × 100 = 5.0%, much larger than that of either l or w alone."
    },
    {
      q: "<div class=\"stimulus\">A student measures a rectangular metal plate with a ruler and records its length and width with their absolute uncertainties, as shown.<svg viewBox=\"0 0 290 168\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"20\" y=\"20\" width=\"150\" height=\"100\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"20\" y1=\"138\" x2=\"170\" y2=\"138\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"20,138 28,135 28,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"170,138 162,135 162,141\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"95\" y=\"157\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">l = 12.0 ± 0.1 cm</text><line x1=\"188\" y1=\"20\" x2=\"188\" y2=\"120\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,20 185,28 191,28\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><polygon points=\"188,120 185,112 191,112\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"196\" y=\"64\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">w = 8.0</text><text x=\"196\" y=\"80\" text-anchor=\"start\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">± 0.1 cm</text><text x=\"95\" y=\"75\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">metal plate</text></svg></div>What is the percentage uncertainty in the ratio l / w?",
      options: ["0.4%","2.1%","1.0%","4.2%"],
      ans: "2.1%",
      reason: "For a quotient the percentage uncertainties add: (0.1/12.0) × 100 + (0.1/8.0) × 100 = 0.83% + 1.25% = 2.08% ≈ 2.1%. They are added, not subtracted."
    },
    {
      q: "<div class=\"stimulus\">A student wants a formula for the speed v of a satellite moving in a circular orbit of radius r around a planet of mass M. She assumes v = k Gᵃ Mᵇ rᶜ, where G is the gravitational constant, with dimensions [M⁻¹ L³ T⁻²], and k is a dimensionless constant.</div>Matching dimensions on both sides, what are the values of a, b and c?",
      options: ["a = ½, b = ½, c = −½","a = −½, b = ½, c = ½","a = 1, b = 1, c = −1","a = ½, b = −½, c = ½"],
      ans: "a = ½, b = ½, c = −½",
      reason: "Time: −2a = −1 so a = ½. Mass: −a + b = 0 so b = ½. Length: 3a + c = 1 so c = −½. Hence v = k √(GM / r)."
    },
    {
      q: "<div class=\"stimulus\">A student wants a formula for the speed v of a satellite moving in a circular orbit of radius r around a planet of mass M. She assumes v = k Gᵃ Mᵇ rᶜ, where G is the gravitational constant, with dimensions [M⁻¹ L³ T⁻²], and k is a dimensionless constant.</div>According to the derived relation, what happens to the orbital speed if the orbital radius is made four times larger (same planet)?",
      options: ["It becomes half","It becomes one quarter","It doubles","It remains unchanged"],
      ans: "It becomes half",
      reason: "v ∝ r^(−½) = 1/√r. Quadrupling r divides v by √4 = 2, so the speed halves."
    },
    {
      q: "<div class=\"stimulus\">A student wants a formula for the speed v of a satellite moving in a circular orbit of radius r around a planet of mass M. She assumes v = k Gᵃ Mᵇ rᶜ, where G is the gravitational constant, with dimensions [M⁻¹ L³ T⁻²], and k is a dimensionless constant.</div>Theory shows k = 1. For a satellite just above Earth's surface, take GM = 4.0 × 10¹⁴ m³ s⁻² and r = 6.4 × 10⁶ m. The orbital speed is about",
      options: ["5.6 km/s","62 500 km/s","11.2 km/s","7.9 km/s"],
      ans: "7.9 km/s",
      reason: "v = √(GM / r) = √(4.0×10¹⁴ / 6.4×10⁶) = √(6.25×10⁷) ≈ 7.9×10³ m/s = 7.9 km/s. Forgetting the square root gives the absurd 62 500 km/s; 11.2 km/s would come from √(2GM/r)."
    },
    {
      q: "<div class=\"stimulus\">A student wants a formula for the speed v of a satellite moving in a circular orbit of radius r around a planet of mass M. She assumes v = k Gᵃ Mᵇ rᶜ, where G is the gravitational constant, with dimensions [M⁻¹ L³ T⁻²], and k is a dimensionless constant.</div>Which part of the formula can NOT be found by dimensional analysis?",
      options: ["The exponent of r","The exponent of M","The numerical value of the constant k","The dimensions of G"],
      ans: "The numerical value of the constant k",
      reason: "Dimensional analysis fixes the powers of the variables but cannot determine dimensionless numerical constants; these come from theory or experiment."
    },
    {
      q: "<div class=\"stimulus\">A student measures the length of a rod with a metre rule graduated in millimetres. One end of the rod is placed at the 1.0 cm mark and the other end lines up exactly with the 6.4 cm mark, as shown.<svg viewBox=\"0 0 330 120\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"46\" y=\"14\" width=\"183.6\" height=\"26\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><text x=\"137.8\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">rod</text><rect x=\"8\" y=\"40\" width=\"316.8\" height=\"46\" fill=\"#f3f3f3\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"12\" y1=\"40\" x2=\"12\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"15.4\" y1=\"40\" x2=\"15.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"18.8\" y1=\"40\" x2=\"18.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"22.2\" y1=\"40\" x2=\"22.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"25.6\" y1=\"40\" x2=\"25.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"29\" y1=\"40\" x2=\"29\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"32.4\" y1=\"40\" x2=\"32.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"35.8\" y1=\"40\" x2=\"35.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"39.2\" y1=\"40\" x2=\"39.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"42.6\" y1=\"40\" x2=\"42.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"46\" y1=\"40\" x2=\"46\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"49.4\" y1=\"40\" x2=\"49.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"52.8\" y1=\"40\" x2=\"52.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"56.2\" y1=\"40\" x2=\"56.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"59.6\" y1=\"40\" x2=\"59.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"63\" y1=\"40\" x2=\"63\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"66.4\" y1=\"40\" x2=\"66.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"69.8\" y1=\"40\" x2=\"69.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"73.2\" y1=\"40\" x2=\"73.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"76.6\" y1=\"40\" x2=\"76.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"83.4\" y1=\"40\" x2=\"83.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"86.8\" y1=\"40\" x2=\"86.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"90.2\" y1=\"40\" x2=\"90.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"93.6\" y1=\"40\" x2=\"93.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"97\" y1=\"40\" x2=\"97\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"100.4\" y1=\"40\" x2=\"100.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"103.8\" y1=\"40\" x2=\"103.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"107.2\" y1=\"40\" x2=\"107.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"110.6\" y1=\"40\" x2=\"110.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"117.4\" y1=\"40\" x2=\"117.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"120.8\" y1=\"40\" x2=\"120.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"124.2\" y1=\"40\" x2=\"124.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"127.6\" y1=\"40\" x2=\"127.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"131\" y1=\"40\" x2=\"131\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"134.4\" y1=\"40\" x2=\"134.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"137.8\" y1=\"40\" x2=\"137.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"141.2\" y1=\"40\" x2=\"141.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"144.6\" y1=\"40\" x2=\"144.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"148\" y1=\"40\" x2=\"148\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"151.4\" y1=\"40\" x2=\"151.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"154.8\" y1=\"40\" x2=\"154.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"158.2\" y1=\"40\" x2=\"158.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"161.6\" y1=\"40\" x2=\"161.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"165\" y1=\"40\" x2=\"165\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"168.4\" y1=\"40\" x2=\"168.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"171.8\" y1=\"40\" x2=\"171.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"175.2\" y1=\"40\" x2=\"175.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"178.6\" y1=\"40\" x2=\"178.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"182\" y1=\"40\" x2=\"182\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"185.4\" y1=\"40\" x2=\"185.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"188.8\" y1=\"40\" x2=\"188.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"192.2\" y1=\"40\" x2=\"192.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"195.6\" y1=\"40\" x2=\"195.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"199\" y1=\"40\" x2=\"199\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"202.4\" y1=\"40\" x2=\"202.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205.8\" y1=\"40\" x2=\"205.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"209.2\" y1=\"40\" x2=\"209.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"212.6\" y1=\"40\" x2=\"212.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"216\" y1=\"40\" x2=\"216\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"219.4\" y1=\"40\" x2=\"219.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"222.8\" y1=\"40\" x2=\"222.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"226.2\" y1=\"40\" x2=\"226.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"229.6\" y1=\"40\" x2=\"229.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"233\" y1=\"40\" x2=\"233\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"236.4\" y1=\"40\" x2=\"236.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"239.8\" y1=\"40\" x2=\"239.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"243.2\" y1=\"40\" x2=\"243.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"246.6\" y1=\"40\" x2=\"246.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"253.4\" y1=\"40\" x2=\"253.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"256.8\" y1=\"40\" x2=\"256.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"260.2\" y1=\"40\" x2=\"260.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"263.6\" y1=\"40\" x2=\"263.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"267\" y1=\"40\" x2=\"267\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"270.4\" y1=\"40\" x2=\"270.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"273.8\" y1=\"40\" x2=\"273.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"277.2\" y1=\"40\" x2=\"277.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"280.6\" y1=\"40\" x2=\"280.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"284\" y1=\"40\" x2=\"284\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"287.4\" y1=\"40\" x2=\"287.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"290.8\" y1=\"40\" x2=\"290.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"294.2\" y1=\"40\" x2=\"294.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"297.6\" y1=\"40\" x2=\"297.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"301\" y1=\"40\" x2=\"301\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"304.4\" y1=\"40\" x2=\"304.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"307.8\" y1=\"40\" x2=\"307.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"311.2\" y1=\"40\" x2=\"311.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"314.6\" y1=\"40\" x2=\"314.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"318\" y1=\"40\" x2=\"318\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"321.4\" y1=\"40\" x2=\"321.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"12\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">0</text><text x=\"46\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">1</text><text x=\"80\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">2</text><text x=\"114\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">3</text><text x=\"148\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4</text><text x=\"182\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5</text><text x=\"216\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">6</text><text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">7</text><text x=\"284\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">8</text><text x=\"318\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">9</text><text x=\"331.6\" y=\"99\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">cm</text><text x=\"165\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">metre rule graduated in mm</text></svg></div>What is the least count of this metre rule?",
      options: ["0.5 cm","1 cm","0.1 cm","0.01 cm"],
      ans: "0.1 cm",
      reason: "The smallest division on the rule is 1 mm = 0.1 cm, so this is its least count."
    },
    {
      q: "<div class=\"stimulus\">A student measures the length of a rod with a metre rule graduated in millimetres. One end of the rod is placed at the 1.0 cm mark and the other end lines up exactly with the 6.4 cm mark, as shown.<svg viewBox=\"0 0 330 120\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"46\" y=\"14\" width=\"183.6\" height=\"26\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><text x=\"137.8\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">rod</text><rect x=\"8\" y=\"40\" width=\"316.8\" height=\"46\" fill=\"#f3f3f3\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"12\" y1=\"40\" x2=\"12\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"15.4\" y1=\"40\" x2=\"15.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"18.8\" y1=\"40\" x2=\"18.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"22.2\" y1=\"40\" x2=\"22.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"25.6\" y1=\"40\" x2=\"25.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"29\" y1=\"40\" x2=\"29\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"32.4\" y1=\"40\" x2=\"32.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"35.8\" y1=\"40\" x2=\"35.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"39.2\" y1=\"40\" x2=\"39.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"42.6\" y1=\"40\" x2=\"42.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"46\" y1=\"40\" x2=\"46\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"49.4\" y1=\"40\" x2=\"49.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"52.8\" y1=\"40\" x2=\"52.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"56.2\" y1=\"40\" x2=\"56.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"59.6\" y1=\"40\" x2=\"59.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"63\" y1=\"40\" x2=\"63\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"66.4\" y1=\"40\" x2=\"66.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"69.8\" y1=\"40\" x2=\"69.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"73.2\" y1=\"40\" x2=\"73.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"76.6\" y1=\"40\" x2=\"76.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"83.4\" y1=\"40\" x2=\"83.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"86.8\" y1=\"40\" x2=\"86.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"90.2\" y1=\"40\" x2=\"90.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"93.6\" y1=\"40\" x2=\"93.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"97\" y1=\"40\" x2=\"97\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"100.4\" y1=\"40\" x2=\"100.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"103.8\" y1=\"40\" x2=\"103.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"107.2\" y1=\"40\" x2=\"107.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"110.6\" y1=\"40\" x2=\"110.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"117.4\" y1=\"40\" x2=\"117.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"120.8\" y1=\"40\" x2=\"120.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"124.2\" y1=\"40\" x2=\"124.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"127.6\" y1=\"40\" x2=\"127.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"131\" y1=\"40\" x2=\"131\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"134.4\" y1=\"40\" x2=\"134.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"137.8\" y1=\"40\" x2=\"137.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"141.2\" y1=\"40\" x2=\"141.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"144.6\" y1=\"40\" x2=\"144.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"148\" y1=\"40\" x2=\"148\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"151.4\" y1=\"40\" x2=\"151.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"154.8\" y1=\"40\" x2=\"154.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"158.2\" y1=\"40\" x2=\"158.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"161.6\" y1=\"40\" x2=\"161.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"165\" y1=\"40\" x2=\"165\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"168.4\" y1=\"40\" x2=\"168.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"171.8\" y1=\"40\" x2=\"171.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"175.2\" y1=\"40\" x2=\"175.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"178.6\" y1=\"40\" x2=\"178.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"182\" y1=\"40\" x2=\"182\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"185.4\" y1=\"40\" x2=\"185.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"188.8\" y1=\"40\" x2=\"188.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"192.2\" y1=\"40\" x2=\"192.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"195.6\" y1=\"40\" x2=\"195.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"199\" y1=\"40\" x2=\"199\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"202.4\" y1=\"40\" x2=\"202.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205.8\" y1=\"40\" x2=\"205.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"209.2\" y1=\"40\" x2=\"209.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"212.6\" y1=\"40\" x2=\"212.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"216\" y1=\"40\" x2=\"216\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"219.4\" y1=\"40\" x2=\"219.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"222.8\" y1=\"40\" x2=\"222.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"226.2\" y1=\"40\" x2=\"226.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"229.6\" y1=\"40\" x2=\"229.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"233\" y1=\"40\" x2=\"233\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"236.4\" y1=\"40\" x2=\"236.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"239.8\" y1=\"40\" x2=\"239.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"243.2\" y1=\"40\" x2=\"243.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"246.6\" y1=\"40\" x2=\"246.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"253.4\" y1=\"40\" x2=\"253.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"256.8\" y1=\"40\" x2=\"256.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"260.2\" y1=\"40\" x2=\"260.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"263.6\" y1=\"40\" x2=\"263.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"267\" y1=\"40\" x2=\"267\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"270.4\" y1=\"40\" x2=\"270.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"273.8\" y1=\"40\" x2=\"273.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"277.2\" y1=\"40\" x2=\"277.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"280.6\" y1=\"40\" x2=\"280.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"284\" y1=\"40\" x2=\"284\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"287.4\" y1=\"40\" x2=\"287.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"290.8\" y1=\"40\" x2=\"290.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"294.2\" y1=\"40\" x2=\"294.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"297.6\" y1=\"40\" x2=\"297.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"301\" y1=\"40\" x2=\"301\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"304.4\" y1=\"40\" x2=\"304.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"307.8\" y1=\"40\" x2=\"307.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"311.2\" y1=\"40\" x2=\"311.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"314.6\" y1=\"40\" x2=\"314.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"318\" y1=\"40\" x2=\"318\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"321.4\" y1=\"40\" x2=\"321.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"12\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">0</text><text x=\"46\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">1</text><text x=\"80\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">2</text><text x=\"114\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">3</text><text x=\"148\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4</text><text x=\"182\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5</text><text x=\"216\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">6</text><text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">7</text><text x=\"284\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">8</text><text x=\"318\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">9</text><text x=\"331.6\" y=\"99\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">cm</text><text x=\"165\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">metre rule graduated in mm</text></svg></div>What is the length of the rod?",
      options: ["5.4 cm","5.0 cm","6.4 cm","7.4 cm"],
      ans: "5.4 cm",
      reason: "Length = final reading − initial reading = 6.4 − 1.0 = 5.4 cm. Quoting 6.4 cm would ignore that the rod does not start at zero."
    },
    {
      q: "<div class=\"stimulus\">A student measures the length of a rod with a metre rule graduated in millimetres. One end of the rod is placed at the 1.0 cm mark and the other end lines up exactly with the 6.4 cm mark, as shown.<svg viewBox=\"0 0 330 120\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"46\" y=\"14\" width=\"183.6\" height=\"26\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><text x=\"137.8\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">rod</text><rect x=\"8\" y=\"40\" width=\"316.8\" height=\"46\" fill=\"#f3f3f3\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"12\" y1=\"40\" x2=\"12\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"15.4\" y1=\"40\" x2=\"15.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"18.8\" y1=\"40\" x2=\"18.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"22.2\" y1=\"40\" x2=\"22.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"25.6\" y1=\"40\" x2=\"25.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"29\" y1=\"40\" x2=\"29\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"32.4\" y1=\"40\" x2=\"32.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"35.8\" y1=\"40\" x2=\"35.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"39.2\" y1=\"40\" x2=\"39.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"42.6\" y1=\"40\" x2=\"42.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"46\" y1=\"40\" x2=\"46\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"49.4\" y1=\"40\" x2=\"49.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"52.8\" y1=\"40\" x2=\"52.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"56.2\" y1=\"40\" x2=\"56.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"59.6\" y1=\"40\" x2=\"59.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"63\" y1=\"40\" x2=\"63\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"66.4\" y1=\"40\" x2=\"66.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"69.8\" y1=\"40\" x2=\"69.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"73.2\" y1=\"40\" x2=\"73.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"76.6\" y1=\"40\" x2=\"76.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"83.4\" y1=\"40\" x2=\"83.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"86.8\" y1=\"40\" x2=\"86.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"90.2\" y1=\"40\" x2=\"90.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"93.6\" y1=\"40\" x2=\"93.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"97\" y1=\"40\" x2=\"97\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"100.4\" y1=\"40\" x2=\"100.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"103.8\" y1=\"40\" x2=\"103.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"107.2\" y1=\"40\" x2=\"107.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"110.6\" y1=\"40\" x2=\"110.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"117.4\" y1=\"40\" x2=\"117.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"120.8\" y1=\"40\" x2=\"120.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"124.2\" y1=\"40\" x2=\"124.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"127.6\" y1=\"40\" x2=\"127.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"131\" y1=\"40\" x2=\"131\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"134.4\" y1=\"40\" x2=\"134.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"137.8\" y1=\"40\" x2=\"137.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"141.2\" y1=\"40\" x2=\"141.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"144.6\" y1=\"40\" x2=\"144.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"148\" y1=\"40\" x2=\"148\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"151.4\" y1=\"40\" x2=\"151.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"154.8\" y1=\"40\" x2=\"154.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"158.2\" y1=\"40\" x2=\"158.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"161.6\" y1=\"40\" x2=\"161.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"165\" y1=\"40\" x2=\"165\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"168.4\" y1=\"40\" x2=\"168.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"171.8\" y1=\"40\" x2=\"171.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"175.2\" y1=\"40\" x2=\"175.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"178.6\" y1=\"40\" x2=\"178.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"182\" y1=\"40\" x2=\"182\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"185.4\" y1=\"40\" x2=\"185.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"188.8\" y1=\"40\" x2=\"188.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"192.2\" y1=\"40\" x2=\"192.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"195.6\" y1=\"40\" x2=\"195.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"199\" y1=\"40\" x2=\"199\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"202.4\" y1=\"40\" x2=\"202.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205.8\" y1=\"40\" x2=\"205.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"209.2\" y1=\"40\" x2=\"209.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"212.6\" y1=\"40\" x2=\"212.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"216\" y1=\"40\" x2=\"216\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"219.4\" y1=\"40\" x2=\"219.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"222.8\" y1=\"40\" x2=\"222.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"226.2\" y1=\"40\" x2=\"226.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"229.6\" y1=\"40\" x2=\"229.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"233\" y1=\"40\" x2=\"233\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"236.4\" y1=\"40\" x2=\"236.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"239.8\" y1=\"40\" x2=\"239.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"243.2\" y1=\"40\" x2=\"243.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"246.6\" y1=\"40\" x2=\"246.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"253.4\" y1=\"40\" x2=\"253.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"256.8\" y1=\"40\" x2=\"256.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"260.2\" y1=\"40\" x2=\"260.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"263.6\" y1=\"40\" x2=\"263.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"267\" y1=\"40\" x2=\"267\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"270.4\" y1=\"40\" x2=\"270.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"273.8\" y1=\"40\" x2=\"273.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"277.2\" y1=\"40\" x2=\"277.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"280.6\" y1=\"40\" x2=\"280.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"284\" y1=\"40\" x2=\"284\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"287.4\" y1=\"40\" x2=\"287.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"290.8\" y1=\"40\" x2=\"290.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"294.2\" y1=\"40\" x2=\"294.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"297.6\" y1=\"40\" x2=\"297.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"301\" y1=\"40\" x2=\"301\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"304.4\" y1=\"40\" x2=\"304.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"307.8\" y1=\"40\" x2=\"307.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"311.2\" y1=\"40\" x2=\"311.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"314.6\" y1=\"40\" x2=\"314.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"318\" y1=\"40\" x2=\"318\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"321.4\" y1=\"40\" x2=\"321.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"12\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">0</text><text x=\"46\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">1</text><text x=\"80\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">2</text><text x=\"114\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">3</text><text x=\"148\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4</text><text x=\"182\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5</text><text x=\"216\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">6</text><text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">7</text><text x=\"284\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">8</text><text x=\"318\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">9</text><text x=\"331.6\" y=\"99\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">cm</text><text x=\"165\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">metre rule graduated in mm</text></svg></div>Taking the uncertainty in the length as one least count, what is the percentage uncertainty in the measured length?",
      options: ["0.2%","1.9%","5.4%","19%"],
      ans: "1.9%",
      reason: "Percentage uncertainty = (0.1 / 5.4) × 100 = 1.85% ≈ 1.9%."
    },
    {
      q: "<div class=\"stimulus\">A student measures the length of a rod with a metre rule graduated in millimetres. One end of the rod is placed at the 1.0 cm mark and the other end lines up exactly with the 6.4 cm mark, as shown.<svg viewBox=\"0 0 330 120\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"46\" y=\"14\" width=\"183.6\" height=\"26\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.5\" /><text x=\"137.8\" y=\"32\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">rod</text><rect x=\"8\" y=\"40\" width=\"316.8\" height=\"46\" fill=\"#f3f3f3\" stroke=\"#222\" stroke-width=\"1.5\" /><line x1=\"12\" y1=\"40\" x2=\"12\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"15.4\" y1=\"40\" x2=\"15.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"18.8\" y1=\"40\" x2=\"18.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"22.2\" y1=\"40\" x2=\"22.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"25.6\" y1=\"40\" x2=\"25.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"29\" y1=\"40\" x2=\"29\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"32.4\" y1=\"40\" x2=\"32.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"35.8\" y1=\"40\" x2=\"35.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"39.2\" y1=\"40\" x2=\"39.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"42.6\" y1=\"40\" x2=\"42.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"46\" y1=\"40\" x2=\"46\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"49.4\" y1=\"40\" x2=\"49.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"52.8\" y1=\"40\" x2=\"52.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"56.2\" y1=\"40\" x2=\"56.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"59.6\" y1=\"40\" x2=\"59.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"63\" y1=\"40\" x2=\"63\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"66.4\" y1=\"40\" x2=\"66.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"69.8\" y1=\"40\" x2=\"69.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"73.2\" y1=\"40\" x2=\"73.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"76.6\" y1=\"40\" x2=\"76.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"80\" y1=\"40\" x2=\"80\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"83.4\" y1=\"40\" x2=\"83.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"86.8\" y1=\"40\" x2=\"86.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"90.2\" y1=\"40\" x2=\"90.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"93.6\" y1=\"40\" x2=\"93.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"97\" y1=\"40\" x2=\"97\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"100.4\" y1=\"40\" x2=\"100.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"103.8\" y1=\"40\" x2=\"103.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"107.2\" y1=\"40\" x2=\"107.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"110.6\" y1=\"40\" x2=\"110.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"114\" y1=\"40\" x2=\"114\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"117.4\" y1=\"40\" x2=\"117.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"120.8\" y1=\"40\" x2=\"120.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"124.2\" y1=\"40\" x2=\"124.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"127.6\" y1=\"40\" x2=\"127.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"131\" y1=\"40\" x2=\"131\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"134.4\" y1=\"40\" x2=\"134.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"137.8\" y1=\"40\" x2=\"137.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"141.2\" y1=\"40\" x2=\"141.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"144.6\" y1=\"40\" x2=\"144.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"148\" y1=\"40\" x2=\"148\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"151.4\" y1=\"40\" x2=\"151.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"154.8\" y1=\"40\" x2=\"154.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"158.2\" y1=\"40\" x2=\"158.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"161.6\" y1=\"40\" x2=\"161.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"165\" y1=\"40\" x2=\"165\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"168.4\" y1=\"40\" x2=\"168.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"171.8\" y1=\"40\" x2=\"171.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"175.2\" y1=\"40\" x2=\"175.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"178.6\" y1=\"40\" x2=\"178.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"182\" y1=\"40\" x2=\"182\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"185.4\" y1=\"40\" x2=\"185.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"188.8\" y1=\"40\" x2=\"188.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"192.2\" y1=\"40\" x2=\"192.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"195.6\" y1=\"40\" x2=\"195.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"199\" y1=\"40\" x2=\"199\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"202.4\" y1=\"40\" x2=\"202.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"205.8\" y1=\"40\" x2=\"205.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"209.2\" y1=\"40\" x2=\"209.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"212.6\" y1=\"40\" x2=\"212.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"216\" y1=\"40\" x2=\"216\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"219.4\" y1=\"40\" x2=\"219.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"222.8\" y1=\"40\" x2=\"222.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"226.2\" y1=\"40\" x2=\"226.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"229.6\" y1=\"40\" x2=\"229.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"233\" y1=\"40\" x2=\"233\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"236.4\" y1=\"40\" x2=\"236.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"239.8\" y1=\"40\" x2=\"239.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"243.2\" y1=\"40\" x2=\"243.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"246.6\" y1=\"40\" x2=\"246.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"250\" y1=\"40\" x2=\"250\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"253.4\" y1=\"40\" x2=\"253.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"256.8\" y1=\"40\" x2=\"256.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"260.2\" y1=\"40\" x2=\"260.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"263.6\" y1=\"40\" x2=\"263.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"267\" y1=\"40\" x2=\"267\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"270.4\" y1=\"40\" x2=\"270.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"273.8\" y1=\"40\" x2=\"273.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"277.2\" y1=\"40\" x2=\"277.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"280.6\" y1=\"40\" x2=\"280.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"284\" y1=\"40\" x2=\"284\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"287.4\" y1=\"40\" x2=\"287.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"290.8\" y1=\"40\" x2=\"290.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"294.2\" y1=\"40\" x2=\"294.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"297.6\" y1=\"40\" x2=\"297.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"301\" y1=\"40\" x2=\"301\" y2=\"50\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"304.4\" y1=\"40\" x2=\"304.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"307.8\" y1=\"40\" x2=\"307.8\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"311.2\" y1=\"40\" x2=\"311.2\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"314.6\" y1=\"40\" x2=\"314.6\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"318\" y1=\"40\" x2=\"318\" y2=\"54\" stroke=\"#222\" stroke-width=\"1\"/><line x1=\"321.4\" y1=\"40\" x2=\"321.4\" y2=\"46\" stroke=\"#222\" stroke-width=\"1\"/><text x=\"12\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">0</text><text x=\"46\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">1</text><text x=\"80\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">2</text><text x=\"114\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">3</text><text x=\"148\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4</text><text x=\"182\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5</text><text x=\"216\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">6</text><text x=\"250\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">7</text><text x=\"284\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">8</text><text x=\"318\" y=\"78\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">9</text><text x=\"331.6\" y=\"99\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">cm</text><text x=\"165\" y=\"112\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">metre rule graduated in mm</text></svg></div>Which of the following would introduce a systematic error in the student's readings?",
      options: ["The student judges by eye how close the rod end is to a graduation mark, sometimes rounding up and sometimes down","The student's eye is sometimes slightly above and sometimes slightly below the mark when reading","The room temperature varies randomly by 0.5 °C between readings","The first 2 mm of the rule's end are worn off and the rod is placed against that end as the zero"],
      ans: "The first 2 mm of the rule's end are worn off and the rod is placed against that end as the zero",
      reason: "A worn end shifts every reading by the same amount in the same direction: a systematic error. The other three change unpredictably from reading to reading (random errors)."
    },
    {
      q: "<div class=\"stimulus\">A student studies the transverse waves on a stretched string of length L, tension T (a force) and mass per unit length μ. She wants to check, using dimensions only, some formulas she found.</div>What are the dimensions of μ, the mass per unit length of the string?",
      options: ["[M L⁻¹]","[L M⁻¹]","[M L]","[M L⁻²]"],
      ans: "[M L⁻¹]",
      reason: "μ = mass / length, so [μ] = [M] / [L] = [M L⁻¹]."
    },
    {
      q: "<div class=\"stimulus\">A student studies the transverse waves on a stretched string of length L, tension T (a force) and mass per unit length μ. She wants to check, using dimensions only, some formulas she found.</div>Which expression for the speed v of the waves is dimensionally consistent?",
      options: ["v = √(T μ)","v = T / μ","v = √(T / μ)","v = T μ"],
      ans: "v = √(T / μ)",
      reason: "[T / μ] = [M L T⁻²] / [M L⁻¹] = [L² T⁻²], so √(T / μ) has dimensions [L T⁻¹], a speed. T/μ itself would be [L² T⁻²]; Tμ has the dimension of mass squared per time squared."
    },
    {
      q: "<div class=\"stimulus\">A student studies the transverse waves on a stretched string of length L, tension T (a force) and mass per unit length μ. She wants to check, using dimensions only, some formulas she found.</div>Which expression for the fundamental frequency f of the string is dimensionally consistent?",
      options: ["f = (1 / 2L) √(T μ)","f = (1 / 2L) √(T / μ)","f = (1 / 2) √(T / μ)","f = (L / 2) √(T / μ)"],
      ans: "f = (1 / 2L) √(T / μ)",
      reason: "√(T/μ) has dimensions [L T⁻¹]; dividing by L gives [T⁻¹], which is the dimension of frequency. Without the 1/L the result would be a speed; with L in the numerator it would be [L² T⁻¹]."
    },
    {
      q: "<div class=\"stimulus\">A student studies the transverse waves on a stretched string of length L, tension T (a force) and mass per unit length μ. She wants to check, using dimensions only, some formulas she found.</div>She finds that f = (3 / 2L) √(T / μ) also passes the dimensional check. What does this show?",
      options: ["The formulas must both be correct physically","Numerical factors such as 3 are dimensionless, so the check cannot tell whether they are correct","The formula with the factor 3 is the correct one","Dimensional checks are unreliable for any formula containing a square root"],
      ans: "Numerical factors such as 3 are dimensionless, so the check cannot tell whether they are correct",
      reason: "A dimensional check can only reveal dimensional inconsistency; pure numbers have no dimensions, so the factors ½ and 3 cannot be tested. Passing the test is necessary but not sufficient for a formula to be correct."
    },
    {
      q: "Which of the following is an SI base unit?",
      options: ["kilogram","joule","newton","pascal"],
      ans: "kilogram",
      reason: "The seven SI base units are metre, kilogram, second, ampere, kelvin, mole and candela. Newton, joule and pascal are derived units. Note that the base unit of mass is the kilogram, not the gram."
    },
    {
      q: "The pascal (unit of pressure) expressed in SI base units is",
      options: ["kg m⁻¹ s⁻²","kg m⁻² s⁻¹","kg m s⁻²","kg m² s⁻²"],
      ans: "kg m⁻¹ s⁻²",
      reason: "Pa = N / m² = (kg m s⁻²) / m² = kg m⁻¹ s⁻². kg m s⁻² is the newton."
    },
    {
      q: "The watt expressed in SI base units is",
      options: ["kg m s⁻²","kg m² s⁻²","kg m² s⁻³","kg m s⁻³"],
      ans: "kg m² s⁻³",
      reason: "W = J / s, and J = N m = kg m² s⁻². So W = kg m² s⁻² / s = kg m² s⁻³. kg m² s⁻² is the joule."
    },
    {
      q: "The volt (V = W / A) expressed in SI base units is",
      options: ["kg m² s⁻³ A","kg m² s⁻² A⁻¹","kg m² s⁻³ A⁻¹","kg m s⁻² A⁻¹"],
      ans: "kg m² s⁻³ A⁻¹",
      reason: "V = W / A = (kg m² s⁻³) / A = kg m² s⁻³ A⁻¹. Equivalently V = J / C = kg m² s⁻² / (A s)."
    },
    {
      q: "The ohm (Ω = V / A) expressed in SI base units is",
      options: ["kg m² s⁻² A⁻²","kg m² s⁻³ A⁻¹","kg m² s⁻³ A⁻²","kg m² s⁻¹ A⁻²"],
      ans: "kg m² s⁻³ A⁻²",
      reason: "Ω = V / A = (kg m² s⁻³ A⁻¹) / A = kg m² s⁻³ A⁻². The option with A⁻¹ is the volt."
    },
    {
      q: "The tesla, defined through F = B I L (force on a current-carrying wire), expressed in SI base units is",
      options: ["kg s⁻¹ A⁻¹","kg m² s⁻² A⁻¹","kg s⁻² A⁻¹","kg m s⁻² A⁻¹"],
      ans: "kg s⁻² A⁻¹",
      reason: "B = F / (I L) = (kg m s⁻²) / (A m) = kg s⁻² A⁻¹. The metre in the force cancels with the length L."
    },
    {
      q: "The farad (F = C / V) expressed in SI base units is",
      options: ["kg m² s⁻⁴ A⁻²","kg⁻¹ m⁻² s³ A²","kg⁻¹ m⁻² s⁴ A²","kg⁻¹ m⁻² s² A"],
      ans: "kg⁻¹ m⁻² s⁴ A²",
      reason: "C = A s and V = kg m² s⁻³ A⁻¹. So F = (A s) / (kg m² s⁻³ A⁻¹) = kg⁻¹ m⁻² s⁴ A²."
    },
    {
      q: "Specific heat capacity c is defined by Q = m c ΔT. In SI base units its unit (J kg⁻¹ K⁻¹) is",
      options: ["kg m² s⁻² K⁻¹","m² s⁻² K⁻¹","m² s⁻¹ K⁻¹","m s⁻² K⁻¹"],
      ans: "m² s⁻² K⁻¹",
      reason: "J = kg m² s⁻². Dividing by kg and K: (kg m² s⁻²) / (kg K) = m² s⁻² K⁻¹. The kilogram cancels."
    },
    {
      q: "From Coulomb's law F = q₁q₂ / (4π ε₀ r²), the SI base units of the permittivity ε₀ are",
      options: ["kg⁻¹ m⁻³ s² A²","kg m³ s⁻⁴ A⁻²","kg⁻¹ m⁻² s⁴ A²","kg⁻¹ m⁻³ s⁴ A²"],
      ans: "kg⁻¹ m⁻³ s⁴ A²",
      reason: "ε₀ = q² / (4π F r²) (4π is a pure number), so unit = (A s)² / (kg m s⁻² · m²) = A² s² / (kg m³ s⁻²) = kg⁻¹ m⁻³ s⁴ A²."
    },
    {
      q: "Which of the following does NOT have the same SI base units as the other three?",
      options: ["N s","W s","N m","V C"],
      ans: "N s",
      reason: "N m, W s and V C are all joules (kg m² s⁻²). N s is the unit of impulse or momentum, kg m s⁻¹."
    },
    {
      q: "The principle of homogeneity of dimensions states that in any correct physical equation",
      options: ["the left side contains only one term","every term has the same dimensions","every term has the same numerical value","every quantity is measured in SI units"],
      ans: "every term has the same dimensions",
      reason: "Only quantities with the same dimensions can be added, subtracted or equated, so all terms of a correct equation must have identical dimensions."
    },
    {
      q: "The quantity ρv² (ρ = density of a fluid, v = its speed) has the same dimensions as",
      options: ["energy","power","pressure","force"],
      ans: "pressure",
      reason: "[ρv²] = [M L⁻³][L² T⁻²] = [M L⁻¹ T⁻²], which is the dimension of pressure (force / area). Force is [M L T⁻²], energy [M L² T⁻²], power [M L² T⁻³]."
    },
    {
      q: "A student writes the centripetal force as F = m v² / r². The dimensions of the right-hand side are",
      options: ["[M L T⁻²]","[M L⁻¹ T⁻²]","[M T⁻²]","[M L² T⁻²]"],
      ans: "[M T⁻²]",
      reason: "[m v² / r²] = [M][L² T⁻²] / [L²] = [M T⁻²], which differs from the dimensions of force [M L T⁻²], so the student's equation is not homogeneous (the correct form is mv²/r)."
    },
    {
      q: "In the van der Waals equation (P + a / V²)(V − b) = RT, P is pressure and V is volume. The dimensions of the constant a are",
      options: ["[M L⁻¹ T⁻²]","[L³]","[M L⁵ T⁻²]","[M L² T⁻²]"],
      ans: "[M L⁵ T⁻²]",
      reason: "a / V² must have the dimensions of P, so [a] = [P][V²] = [M L⁻¹ T⁻²][L⁶] = [M L⁵ T⁻²]."
    },
    {
      q: "The amplitude of a damped oscillation decays as x = x₀ e^(−bt), where t is time. The dimensions of b are",
      options: ["[M⁰ L⁰ T⁰]","[L T⁻¹]","[T]","[T⁻¹]"],
      ans: "[T⁻¹]",
      reason: "The exponent of e must be dimensionless, so [b][T] = 1, giving [b] = [T⁻¹]."
    },
    {
      q: "For a wind turbine, the power P in the wind passing through the swept area A is proportional to which expression? (ρ = air density, v = wind speed; the constant is a pure number.)",
      options: ["ρ A² v³","ρ A v³","ρ A v²","ρ A v⁴"],
      ans: "ρ A v³",
      reason: "[ρ A v³] = [M L⁻³][L²][L³ T⁻³] = [M L² T⁻³], the dimensions of power. ρAv² gives [M L T⁻²] (force), ρA²v³ gives [M L T⁻³] and ρAv⁴ gives [M L³ T⁻⁴]."
    },
    {
      q: "Which quantity has the same dimensions as torque?",
      options: ["Force","Power","Energy","Momentum"],
      ans: "Energy",
      reason: "[torque] = [r][F] = [L][M L T⁻²] = [M L² T⁻²], the same as energy (work). Force is [M L T⁻²], power [M L² T⁻³], momentum [M L T⁻¹]."
    },
    {
      q: "The period T of a simple pendulum depends only on its length l and on g. If T = k lᵃ gᵇ with k dimensionless, then",
      options: ["a = ½, b = −½","a = ½, b = ½","a = 1, b = −1","a = −½, b = ½"],
      ans: "a = ½, b = −½",
      reason: "[T] = [L]ᵃ [L T⁻²]ᵇ. Time: −2b = 1 so b = −½. Length: a + b = 0 so a = ½. Hence T = k √(l / g)."
    },
    {
      q: "By dimensional analysis the period of a simple pendulum is T ∝ √(l / g). A pendulum of length 4l is taken to a planet where g is one quarter of its value on Earth. Compared with its period on Earth, its period becomes",
      options: ["2 times","4 times","16 times","8 times"],
      ans: "4 times",
      reason: "T ∝ √(l / g). Length ×4 and g ×¼ makes l / g 16 times larger, so T becomes √16 = 4 times larger."
    },
    {
      q: "The viscous drag F on a small sphere moving slowly through a liquid depends on the liquid's coefficient of viscosity η [M L⁻¹ T⁻¹], the sphere's radius r and its speed v: F = k ηᵃ rᵇ vᶜ. The values of (a, b, c) are",
      options: ["(2, 1, 1)","(1, 1, 1)","(1, 1, 2)","(1, 2, 1)"],
      ans: "(1, 1, 1)",
      reason: "Mass: a = 1. Time: −a − c = −2 so c = 1. Length: −a + b + c = 1 so b = 1. Thus F = k η r v."
    },
    {
      q: "The drag force F on a body moving fast through air depends on the air density ρ, the cross-sectional area A and the speed v. Dimensional analysis gives F proportional to",
      options: ["ρ A v²","ρ² A v²","ρ A v","ρ A² v"],
      ans: "ρ A v²",
      reason: "Let F ∝ ρᵃAᵇvᶜ. Mass: a = 1. Time: −c = −2 so c = 2. Length: −3a + 2b + c = 1 gives 2b = 2, so b = 1. Thus F ∝ ρAv²."
    },
    {
      q: "Assuming the speed of sound v in a gas depends only on its pressure P and density ρ, dimensional analysis gives",
      options: ["v = k P / ρ","v = k ρ / P","v = k √(P / ρ)","v = k √(P ρ)"],
      ans: "v = k √(P / ρ)",
      reason: "[P / ρ] = [M L⁻¹ T⁻²] / [M L⁻³] = [L² T⁻²], so its square root has the dimensions of speed [L T⁻¹]."
    },
    {
      q: "A mass m oscillates on a spring of spring constant k (unit N m⁻¹). Assuming the period depends only on m and k, a 0.50 kg mass has period 0.50 s. The period of a 2.0 kg mass on the same spring is",
      options: ["1.0 s","0.25 s","0.50 s","2.0 s"],
      ans: "1.0 s",
      reason: "[k] = [M T⁻²]. With T = C mᵃ kᵇ: Mass: a + b = 0; Time: −2b = 1, so a = ½ and b = −½. Hence T ∝ √m. Mass ×4 gives period ×2: 0.50 s × 2 = 1.0 s."
    },
    {
      q: "The period T of a satellite in a circular orbit of radius r around a planet of mass M depends on G [M⁻¹ L³ T⁻²], M and r: T = k Gᵃ Mᵇ rᶜ. The exponents (a, b, c) are",
      options: ["(−½, −½, 3/2)","(−½, ½, 3/2)","(−1, −1, 3)","(½, ½, −3/2)"],
      ans: "(−½, −½, 3/2)",
      reason: "Time: −2a = 1 so a = −½. Mass: −a + b = 0 so b = −½. Length: 3a + c = 0 so c = 3/2. Thus T = k √(r³ / GM), consistent with Kepler's third law."
    },
    {
      q: "The accuracy of a measurement describes",
      options: ["the number of digits displayed by the instrument","how close repeated readings are to one another","the smallest division on the instrument's scale","how close the measured value is to the true or accepted value"],
      ans: "how close the measured value is to the true or accepted value",
      reason: "Accuracy is closeness to the true (accepted) value. Closeness of repeated readings to each other is precision, and the smallest scale division is the least count."
    },
    {
      q: "A thermometer placed in boiling water at standard pressure (100.0 °C) reads 98.2 °C. Its percentage error for this reading is",
      options: ["3.6%","18%","0.18%","1.8%"],
      ans: "1.8%",
      reason: "Error = 100.0 − 98.2 = 1.8 °C. Percentage error = (1.8 / 100.0) × 100 = 1.8%."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 192\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><circle cx=\"75\" cy=\"52\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"52\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"52\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"52\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"75\" cy=\"52\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"78\" cy=\"50\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"72\" cy=\"54\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"77\" cy=\"55\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"25\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">P</text><circle cx=\"240\" cy=\"52\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"52\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"52\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"52\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"261\" cy=\"34\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"264\" cy=\"36\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"259\" cy=\"32\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"263\" cy=\"31\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"190\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">Q</text><circle cx=\"75\" cy=\"142\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"142\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"142\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"142\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"55\" cy=\"152\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"93\" cy=\"128\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"83\" cy=\"164\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"63\" cy=\"122\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"25\" y=\"112\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">R</text><circle cx=\"240\" cy=\"142\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"142\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"142\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"142\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"264\" cy=\"156\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"252\" cy=\"168\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"270\" cy=\"140\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"258\" cy=\"146\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"190\" y=\"112\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">S</text></svg></div>Each target shows four shots; the bull's-eye represents the true value. Which target shows readings with small random error but large systematic error?",
      options: ["P","Q","R","S"],
      ans: "Q",
      reason: "Q's shots are tightly grouped (small random error) but all displaced from the centre by the same amount (large systematic error). P is accurate and precise, R is scattered about the centre, and S is both scattered and off-centre."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 192\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><circle cx=\"75\" cy=\"52\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"52\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"52\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"52\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"75\" cy=\"52\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"78\" cy=\"50\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"72\" cy=\"54\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"77\" cy=\"55\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"25\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">P</text><circle cx=\"240\" cy=\"52\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"52\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"52\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"52\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"261\" cy=\"34\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"264\" cy=\"36\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"259\" cy=\"32\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"263\" cy=\"31\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"190\" y=\"22\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">Q</text><circle cx=\"75\" cy=\"142\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"142\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"142\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"75\" cy=\"142\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"55\" cy=\"152\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"93\" cy=\"128\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"83\" cy=\"164\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"63\" cy=\"122\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"25\" y=\"112\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">R</text><circle cx=\"240\" cy=\"142\" r=\"38\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"142\" r=\"25\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"142\" r=\"12\" fill=\"#fff\" stroke=\"#222\" stroke-width=\"1\"/><circle cx=\"240\" cy=\"142\" r=\"2\" fill=\"#222\" stroke=\"#222\" stroke-width=\"1.5\"/><circle cx=\"264\" cy=\"156\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"252\" cy=\"168\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"270\" cy=\"140\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><circle cx=\"258\" cy=\"146\" r=\"3.2\" fill=\"#c0392b\" stroke=\"#c0392b\"/><text x=\"190\" y=\"112\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">S</text></svg></div>Each target shows four shots; the bull's-eye represents the true value. Which target shows readings with large random error but negligible systematic error?",
      options: ["R","P","S","Q"],
      ans: "R",
      reason: "R's shots are widely scattered (large random error) but are spread around the bull's-eye so their mean is almost at the centre (negligible systematic error). S is also scattered, but its centre of grouping is displaced."
    },
    {
      q: "A digital stopwatch displays 0.01 s but, due to a faulty clock, always runs 5% fast. Which statement is correct?",
      options: ["Its small least count makes it precise, but its fast clock makes its readings inaccurate","It is inaccurate because its least count is too small","The 0.01 s least count guarantees that its readings are accurate","Its readings are accurate because they are repeatable"],
      ans: "Its small least count makes it precise, but its fast clock makes its readings inaccurate",
      reason: "A fine least count gives high resolution (precision), but it says nothing about accuracy. The clock error is a constant 5% systematic error, so readings are consistently away from the true time."
    },
    {
      q: "Four readings of g (true value 9.8 m s⁻²) from an experiment are 8.3, 8.4, 8.5 and 8.4 m s⁻². The percentage error of the mean value is about",
      options: ["1.4%","17%","8.3%","14%"],
      ans: "14%",
      reason: "Mean = 8.4 m s⁻². Error = 9.8 − 8.4 = 1.4 m s⁻². Percentage error = (1.4 / 9.8) × 100 = 14.3% ≈ 14%. Dividing by the measured mean (17%) is wrong; the true value is the reference."
    },
    {
      q: "A digital balance shows 0.05 g when nothing is on its pan, so every reading is 0.05 g too large. The best way to improve the accuracy of its readings is to",
      options: ["take the mean of ten readings of the same object","use a balance showing more decimal places","weigh the object more slowly","subtract 0.05 g from every reading (or zero the balance)"],
      ans: "subtract 0.05 g from every reading (or zero the balance)",
      reason: "This is a constant systematic (zero) error, which is removed by correcting for it. Averaging reduces only random scatter and more decimal places improve precision, not accuracy."
    },
    {
      q: "Student 1 measures a 100.0 m track as 101.0 m. Student 2 measures a 10.0 cm pencil as 10.4 cm. Whose measurement is more accurate?",
      options: ["Student 2; absolute error 0.4 cm is less than 1.0 m","The two cannot be compared because the quantities have different units","Student 1; relative error 1% is less than 4%","Student 2; relative error 4% is less than 1%"],
      ans: "Student 1; relative error 1% is less than 4%",
      reason: "Accuracy is compared through relative (percentage) error, which has no units: student 1 has 1.0/100.0 = 1%, student 2 has 0.4/10.0 = 4%. Absolute errors cannot be compared fairly for different-sized quantities."
    },
    {
      q: "When two measured quantities are multiplied or divided, the uncertainty in the result is found by adding their",
      options: ["fractional uncertainties and then dividing by two","squares of the absolute uncertainties","fractional (or percentage) uncertainties","absolute uncertainties"],
      ans: "fractional (or percentage) uncertainties",
      reason: "For products and quotients, the fractional (percentage) uncertainties add. Absolute uncertainties are added only for sums and differences."
    },
    {
      q: "A beaker with liquid has mass (85.3 ± 0.1) g and the empty beaker has mass (60.1 ± 0.1) g. The mass of the liquid is",
      options: ["(25.2 ± 0.1) g","(25.2 ± 0.02) g","(25.2 ± 0.0) g","(25.2 ± 0.2) g"],
      ans: "(25.2 ± 0.2) g",
      reason: "Mass of liquid = 85.3 − 60.1 = 25.2 g. For a difference the absolute uncertainties are added: 0.1 + 0.1 = 0.2 g."
    },
    {
      q: "A runner covers d = (20.0 ± 0.2) m in t = (4.0 ± 0.1) s. The speed v = d / t is",
      options: ["(5.0 ± 0.2) m/s","(5.0 ± 0.3) m/s","(5.0 ± 0.1) m/s","(5.0 ± 0.4) m/s"],
      ans: "(5.0 ± 0.2) m/s",
      reason: "v = 5.0 m/s. Fractional uncertainty = 0.2/20.0 + 0.1/4.0 = 0.010 + 0.025 = 0.035. Δv = 0.035 × 5.0 = 0.175 ≈ 0.2 m/s. Adding the absolute uncertainties (0.3) is wrong for a quotient."
    },
    {
      q: "The power dissipated in a resistor is P = V² / R. V = (12.0 ± 0.1) V and R = (8.0 ± 0.2) Ω. The percentage uncertainty in P is",
      options: ["4.2%","6.7%","1.7%","3.3%"],
      ans: "4.2%",
      reason: "% in V = 0.1/12.0 × 100 = 0.83%; % in R = 0.2/8.0 × 100 = 2.5%. Since V is squared, its percentage counts twice: 2(0.83) + 2.5 = 4.17% ≈ 4.2%. Not doubling V's contribution gives 3.3%."
    },
    {
      q: "A cube has side (3.00 ± 0.03) cm and mass (54.0 ± 0.5) g. Its density is",
      options: ["(2.00 ± 0.02) g cm⁻³","(2.00 ± 0.08) g cm⁻³","(2.00 ± 0.16) g cm⁻³","(2.00 ± 0.04) g cm⁻³"],
      ans: "(2.00 ± 0.08) g cm⁻³",
      reason: "ρ = 54.0 / 27.0 = 2.00 g cm⁻³. % in m = 0.5/54.0 × 100 = 0.93%; % in side = 1.0%, counted three times for l³: 3.0%. Total = 3.93%, so Δρ = 0.0393 × 2.00 = 0.08 g cm⁻³."
    },
    {
      q: "The temperature of water rises from T₁ = (21.4 ± 0.2) °C to T₂ = (45.2 ± 0.2) °C. The percentage uncertainty in the temperature rise is about",
      options: ["1.7%","0.8%","0.4%","3.4%"],
      ans: "1.7%",
      reason: "ΔT = 45.2 − 21.4 = 23.8 °C. For a difference, absolute uncertainties add: 0.2 + 0.2 = 0.4 °C. Percentage = 0.4/23.8 × 100 = 1.7%. Using 0.2/45.2 gives only 0.4%."
    },
    {
      q: "Two lengths are measured as L₁ = (50.0 ± 0.1) cm and L₂ = (49.5 ± 0.1) cm. The percentage uncertainty in the difference L₁ − L₂ is",
      options: ["4%","0.4%","40%","20%"],
      ans: "40%",
      reason: "L₁ − L₂ = 0.5 cm and the absolute uncertainties add: 0.2 cm. Percentage = 0.2/0.5 × 100 = 40%. Subtracting two nearly equal measurements gives a very uncertain result."
    },
    {
      q: "A stone falls from rest through a height h = (1.25 ± 0.05) m. Taking g as exact, the speed v = √(2gh) has a percentage uncertainty of",
      options: ["8%","2%","1%","4%"],
      ans: "2%",
      reason: "% in h = 0.05/1.25 × 100 = 4%. Since v ∝ h^½, the percentage uncertainty is multiplied by the power ½: 4% × ½ = 2%."
    },
    {
      q: "In a pendulum experiment, g = 4π²L / T² is calculated from L = (1.000 ± 0.002) m and T = (2.00 ± 0.02) s. The percentage uncertainty in g is",
      options: ["4.4%","2.2%","1.2%","0.8%"],
      ans: "2.2%",
      reason: "% in L = 0.002/1.000 × 100 = 0.2%; % in T = 0.02/2.00 × 100 = 1%, counted twice because T is squared: 2%. Total = 0.2 + 2 = 2.2%."
    },
    {
      q: "A voltmeter pointer rests at 0.2 V when it is not connected, so every reading is 0.2 V too large. This is an example of",
      options: ["an error removed by averaging many readings","a random error","a systematic error","a percentage error"],
      ans: "a systematic error",
      reason: "A fixed offset in the same direction in every reading is a systematic (zero) error. Averaging does not remove it; it must be corrected for."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 100\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"14\" y1=\"34\" x2=\"278\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"22\" x2=\"14\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"36\" y1=\"22\" x2=\"36\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"36\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">22</text><line x1=\"58\" y1=\"22\" x2=\"58\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"80\" y1=\"22\" x2=\"80\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"80\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">24</text><line x1=\"102\" y1=\"22\" x2=\"102\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"124\" y1=\"22\" x2=\"124\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"124\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">26</text><line x1=\"146\" y1=\"22\" x2=\"146\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"168\" y1=\"22\" x2=\"168\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"168\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">28</text><line x1=\"190\" y1=\"22\" x2=\"190\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"212\" y1=\"22\" x2=\"212\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"212\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">30</text><line x1=\"234\" y1=\"22\" x2=\"234\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"256\" y1=\"22\" x2=\"256\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"256\" y=\"18\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">32</text><line x1=\"278\" y1=\"22\" x2=\"278\" y2=\"34\" stroke=\"#222\" stroke-width=\"1.1\"/><rect x=\"71.2\" y=\"34\" width=\"198\" height=\"32\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.3\" /><line x1=\"71.2\" y1=\"34\" x2=\"71.2\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"71.2\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">0</text><line x1=\"91\" y1=\"34\" x2=\"91\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"91\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">1</text><line x1=\"110.8\" y1=\"34\" x2=\"110.8\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"110.8\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">2</text><line x1=\"130.6\" y1=\"34\" x2=\"130.6\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"130.6\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">3</text><line x1=\"150.4\" y1=\"34\" x2=\"150.4\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"150.4\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">4</text><line x1=\"170.2\" y1=\"34\" x2=\"170.2\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"170.2\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">5</text><line x1=\"190\" y1=\"34\" x2=\"190\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"190\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">6</text><line x1=\"209.8\" y1=\"34\" x2=\"209.8\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"209.8\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">7</text><line x1=\"229.6\" y1=\"34\" x2=\"229.6\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"229.6\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">8</text><line x1=\"249.4\" y1=\"34\" x2=\"249.4\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"249.4\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">9</text><line x1=\"269.2\" y1=\"34\" x2=\"269.2\" y2=\"44\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"269.2\" y=\"60\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">10</text><text x=\"300\" y=\"92\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">mm</text></svg></div>The diagram shows a vernier caliper whose vernier scale has 10 divisions covering 9 mm of the main scale (least count 0.1 mm). The reading is",
      options: ["23.4 mm","23.6 mm","29.6 mm","23.06 mm"],
      ans: "23.6 mm",
      reason: "The vernier zero lies just past the 23 mm main-scale mark, so the main-scale reading is 23 mm. The 6th vernier division coincides with a main-scale mark, so vernier reading = 6 × 0.1 = 0.6 mm. Total = 23.6 mm."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 222\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"14\" y=\"12\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">jaws closed</text><line x1=\"14\" y1=\"42\" x2=\"256\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"30\" x2=\"14\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"36\" y1=\"30\" x2=\"36\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"36\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">0</text><line x1=\"58\" y1=\"30\" x2=\"58\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"80\" y1=\"30\" x2=\"80\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"80\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">2</text><line x1=\"102\" y1=\"30\" x2=\"102\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"124\" y1=\"30\" x2=\"124\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"124\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4</text><line x1=\"146\" y1=\"30\" x2=\"146\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"168\" y1=\"30\" x2=\"168\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"168\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">6</text><line x1=\"190\" y1=\"30\" x2=\"190\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"212\" y1=\"30\" x2=\"212\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"212\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">8</text><line x1=\"234\" y1=\"30\" x2=\"234\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"256\" y1=\"30\" x2=\"256\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.1\"/><rect x=\"44.8\" y=\"42\" width=\"198\" height=\"32\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.3\" /><line x1=\"44.8\" y1=\"42\" x2=\"44.8\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"44.8\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">0</text><line x1=\"64.6\" y1=\"42\" x2=\"64.6\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"64.6\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">1</text><line x1=\"84.4\" y1=\"42\" x2=\"84.4\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"84.4\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">2</text><line x1=\"104.2\" y1=\"42\" x2=\"104.2\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"104.2\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">3</text><line x1=\"124\" y1=\"42\" x2=\"124\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"124\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">4</text><line x1=\"143.8\" y1=\"42\" x2=\"143.8\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"143.8\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">5</text><line x1=\"163.6\" y1=\"42\" x2=\"163.6\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"163.6\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">6</text><line x1=\"183.4\" y1=\"42\" x2=\"183.4\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"183.4\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">7</text><line x1=\"203.2\" y1=\"42\" x2=\"203.2\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"203.2\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">8</text><line x1=\"223\" y1=\"42\" x2=\"223\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"223\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">9</text><line x1=\"242.8\" y1=\"42\" x2=\"242.8\" y2=\"52\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"242.8\" y=\"68\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">10</text><text x=\"14\" y=\"128\" text-anchor=\"start\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">object between jaws</text><line x1=\"14\" y1=\"158\" x2=\"256\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"14\" y1=\"146\" x2=\"14\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"36\" y1=\"146\" x2=\"36\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"36\" y=\"142\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">12</text><line x1=\"58\" y1=\"146\" x2=\"58\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"80\" y1=\"146\" x2=\"80\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"80\" y=\"142\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">14</text><line x1=\"102\" y1=\"146\" x2=\"102\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"124\" y1=\"146\" x2=\"124\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"124\" y=\"142\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">16</text><line x1=\"146\" y1=\"146\" x2=\"146\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"168\" y1=\"146\" x2=\"168\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"168\" y=\"142\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">18</text><line x1=\"190\" y1=\"146\" x2=\"190\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"212\" y1=\"146\" x2=\"212\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"212\" y=\"142\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">20</text><line x1=\"234\" y1=\"146\" x2=\"234\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><line x1=\"256\" y1=\"146\" x2=\"256\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"256\" y=\"142\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">22</text><rect x=\"49.2\" y=\"158\" width=\"198\" height=\"32\" fill=\"#dbe9ff\" stroke=\"#222\" stroke-width=\"1.3\" /><line x1=\"49.2\" y1=\"158\" x2=\"49.2\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"49.2\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">0</text><line x1=\"69\" y1=\"158\" x2=\"69\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"69\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">1</text><line x1=\"88.8\" y1=\"158\" x2=\"88.8\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"88.8\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">2</text><line x1=\"108.6\" y1=\"158\" x2=\"108.6\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"108.6\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">3</text><line x1=\"128.4\" y1=\"158\" x2=\"128.4\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"128.4\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">4</text><line x1=\"148.2\" y1=\"158\" x2=\"148.2\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"148.2\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">5</text><line x1=\"168\" y1=\"158\" x2=\"168\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"168\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">6</text><line x1=\"187.8\" y1=\"158\" x2=\"187.8\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"187.8\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">7</text><line x1=\"207.6\" y1=\"158\" x2=\"207.6\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"207.6\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">8</text><line x1=\"227.4\" y1=\"158\" x2=\"227.4\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"227.4\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">9</text><line x1=\"247.2\" y1=\"158\" x2=\"247.2\" y2=\"168\" stroke=\"#222\" stroke-width=\"1.1\"/><text x=\"247.2\" y=\"184\" text-anchor=\"middle\" font-size=\"10\" font-weight=\"normal\" fill=\"#222\">10</text></svg></div>The same vernier caliper (least count 0.1 mm) is shown with its jaws closed and then with an object between the jaws. The correct length of the object is",
      options: ["12.0 mm","12.6 mm","12.2 mm","13.0 mm"],
      ans: "12.2 mm",
      reason: "With the jaws closed, the 4th vernier division coincides, so the zero error is +0.4 mm. The object reading is 12 + 6 × 0.1 = 12.6 mm. Correct length = 12.6 − 0.4 = 12.2 mm."
    },
    {
      q: "A screw gauge has a pitch of 0.5 mm and its circular scale has 50 divisions. Its least count is",
      options: ["0.5 mm","0.01 mm","0.05 mm","0.1 mm"],
      ans: "0.01 mm",
      reason: "Least count = pitch / number of circular-scale divisions = 0.5 mm / 50 = 0.01 mm."
    },
    {
      q: "Which type of error is reduced by repeating a measurement many times and taking the mean?",
      options: ["Calibration error","Systematic error","Random error","Zero error"],
      ans: "Random error",
      reason: "Random errors vary unpredictably above and below the true value, so they tend to cancel in the mean. Zero, calibration and other systematic errors are the same in every reading and are not reduced by averaging."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 172\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"30\" y1=\"130\" x2=\"305\" y2=\"130\" stroke=\"#222\" stroke-width=\"1.5\"/><line x1=\"30\" y1=\"130\" x2=\"30\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4.0</text><line x1=\"85\" y1=\"130\" x2=\"85\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"85\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4.5</text><line x1=\"140\" y1=\"130\" x2=\"140\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"140\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5</text><line x1=\"195\" y1=\"130\" x2=\"195\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"195\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">5.5</text><line x1=\"250\" y1=\"130\" x2=\"250\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"250\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">6</text><line x1=\"305\" y1=\"130\" x2=\"305\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"305\" y=\"148\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">6.5</text><text x=\"167.5\" y=\"164\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">length (cm)</text><line x1=\"85\" y1=\"30\" x2=\"151\" y2=\"30\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"85\" y1=\"24\" x2=\"85\" y2=\"36\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"151\" y1=\"24\" x2=\"151\" y2=\"36\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><circle cx=\"118\" cy=\"30\" r=\"3.5\" fill=\"#1f5fbf\"/><text x=\"12\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">X</text><line x1=\"140\" y1=\"60\" x2=\"206\" y2=\"60\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"140\" y1=\"54\" x2=\"140\" y2=\"66\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"206\" y1=\"54\" x2=\"206\" y2=\"66\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><circle cx=\"173\" cy=\"60\" r=\"3.5\" fill=\"#1f5fbf\"/><text x=\"12\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Y</text><line x1=\"228\" y1=\"90\" x2=\"272\" y2=\"90\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"228\" y1=\"84\" x2=\"228\" y2=\"96\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><line x1=\"272\" y1=\"84\" x2=\"272\" y2=\"96\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><circle cx=\"250\" cy=\"90\" r=\"3.5\" fill=\"#1f5fbf\"/><text x=\"12\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Z</text></svg></div>Three students measure the same rod and report X = (4.8 ± 0.3) cm, Y = (5.3 ± 0.3) cm and Z = (6.0 ± 0.2) cm, shown with their uncertainty ranges. Which statement is correct?",
      options: ["X and Y agree within their uncertainties, but Z agrees with neither","All three results agree within their uncertainties","X and Z agree because their means differ by less than 1.5 cm","Only Y and Z agree within their uncertainties"],
      ans: "X and Y agree within their uncertainties, but Z agrees with neither",
      reason: "X covers 4.5–5.1 cm and Y covers 5.0–5.6 cm; these ranges overlap, so they agree. Z covers 5.8–6.2 cm, which overlaps neither X nor Y. A fixed 1.5 cm difference is not a valid test; the uncertainty ranges must be compared."
    },

    // ---- MCQs from the FBISE HSSC-I Physics model question paper (Section A), placed by chapter ----
    {
      q: "Which of the following is the derived unit of density in terms of SI base units?",
      options: ["m²/kg","m³/kg","kg/m³","kg/m²"],
      ans: "kg/m³",
      reason: "Density = mass / volume. Mass is in kg and volume in m³, so density has the unit kg/m³. The other options invert the ratio or use area instead of volume."
    },
    {
      q: "Students drop a ball from a height close to the ground to calculate g. They get slightly different values each time under similar conditions. This is because of:",
      options: ["lack of skills","uncertainty in measurements","temperature variation","variation in the value of g"],
      ans: "uncertainty in measurements",
      reason: "Every measurement carries some uncertainty (random variation in timing and reading). Under similar conditions g itself does not vary measurably, so the scatter comes from the measurements."
    },
    {
      q: "A physical quantity has dimensions [MLT⁻²]. This corresponds to:",
      options: ["energy","force","pressure","power"],
      ans: "force",
      reason: "Force = mass × acceleration = M × LT⁻² = MLT⁻². Energy is ML²T⁻², pressure is ML⁻¹T⁻² and power is ML²T⁻³."
    },
    {
      q: "A student calculates the kinetic energy K of a moving body using K = ½mv². If m and v each have a percentage uncertainty of 5%, what is the total percentage uncertainty in the calculated kinetic energy K?",
      options: ["5%","10%","15%","20%"],
      ans: "15%",
      reason: "K ∝ m·v², so %ΔK = %Δm + 2 × %Δv = 5% + 2 × 5% = 15%. The power of v multiplies its percentage uncertainty."
    },
    {
      q: "The homogeneity of the equation s = ut + ½at² is checked by:",
      options: ["comparing numerical values only","comparing dimensions of variables","analyzing coefficients of variables","plotting s versus t"],
      ans: "comparing dimensions of variables",
      reason: "An equation is homogeneous if every term has the same dimensions. Here [s] = L, [ut] = L and [½at²] = L, so each term has dimension L. Numerical coefficients such as ½ have no dimensions and cannot be tested this way."
    },
    {
      q: "A measurement which, on repetition, gives the same or nearly the same result is called:",
      options: ["accurate reading","average reading","precise reading","estimated reading"],
      ans: "precise reading",
      reason: "Precision describes how closely repeated measurements agree with each other. Accuracy is closeness to the true value, which is a different property."
    },
    {
      q: "The fractional uncertainty in the given length L ± ΔL = 2.0 m ± 0.1 m is:",
      options: ["0.05","0.1","0.15","0.5"],
      ans: "0.05",
      reason: "Fractional uncertainty = ΔL / L = 0.1 / 2.0 = 0.05 (that is, 5%)."
    },
    {
      q: "Rod A has a length of (12.0 ± 0.2) cm and rod B has a length of (8.0 ± 0.3) cm. Their combined length is given as:",
      options: ["20.0 ± 0.5 cm","20.0 ± 0.2 cm","20.0 ± 0.3 cm","20.0 ± 0.1 cm"],
      ans: "20.0 ± 0.5 cm",
      reason: "When quantities are added, the absolute uncertainties add: Δ(L) = 0.2 + 0.3 = 0.5 cm. The sum is 12.0 + 8.0 = 20.0 cm, so the result is (20.0 ± 0.5) cm."
    }
    ];
  }
});
