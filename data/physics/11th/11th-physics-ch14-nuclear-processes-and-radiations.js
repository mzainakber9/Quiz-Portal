// Class 11 Physics — Chapter 14: Particle Physics (Nuclear Processes and Radiations)
// 109 MCQs, each with an explanation: 60 chapter-file MCQs + 39 SLO-based MCQs (incl. scenario and diagram questions) + 10 FBISE model-paper MCQs.
// Text is plain Unicode (no LaTeX needed). Question/explanation text is inserted as HTML, so < > & are written as entities (options are plain text).
QuizBank.register({
  class: "11th",
  subject: "Physics",
  type: "chapter",
  id: "ch14",
  label: "Chapter 14: Particle Physics (Nuclear Processes and Radiations)",
  order: 14,
  questions: function () {
    return [
    {
      q: "In a nuclear reaction, the quantity that must always remain conserved is:",
      options: ["Nucleon number and charge","Number of electrons only","Atomic mass only","Chemical properties only"],
      ans: "Nucleon number and charge",
      reason: "Nuclear processes obey conservation laws; total nucleon number and total charge remain constant before and after the reaction."
    },
    {
      q: "The nucleon number of an atom represents the total number of:",
      options: ["Protons only","Electrons and neutrons","Protons and neutrons","Neutrons only"],
      ans: "Protons and neutrons",
      reason: "Nucleon number (mass number A) is the sum of protons and neutrons in the nucleus."
    },
    {
      q: "In a nuclear equation, the sum of mass numbers before and after the reaction must be:",
      options: ["Increased","Decreased","Equal","Zero"],
      ans: "Equal",
      reason: "Nucleon number is conserved, so total nucleons remain unchanged."
    },
    {
      q: "Which conservation law ensures that the total electric charge remains unchanged in a nuclear reaction?",
      options: ["Conservation of energy","Conservation of momentum","Conservation of charge","Conservation of temperature"],
      ans: "Conservation of charge",
      reason: "Total electric charge is conserved in every nuclear reaction: the sum of the charges before the reaction equals the sum after it. Energy and momentum are also conserved, but they do not guarantee that charge stays constant, and temperature is not a conserved quantity."
    },
    {
      q: "In the nuclear reaction: ¹⁴N + ⁴He → ¹⁷O + X, the unknown particle X is:",
      options: ["Proton","Neutron","Electron","Alpha particle"],
      ans: "Proton",
      reason: "Nucleon number: 14 + 4 = 18 and ¹⁷O has 17, so X has nucleon number 1. Charge: 7 + 2 = 9 and O has charge 8, so X has charge +1. A particle with nucleon number 1 and charge +1 is a proton (¹₁H). This is Rutherford's reaction ¹⁴N + α → ¹⁷O + p."
    },
    {
      q: "Which statement about nuclear reactions is correct?",
      options: ["Charge can be created during nuclear reactions","Nucleons can disappear completely","Total nucleon number remains constant","Atomic number always increases"],
      ans: "Total nucleon number remains constant",
      reason: "Nuclear reactions rearrange nucleons but do not create or destroy total nucleon number."
    },
    {
      q: "During alpha decay, the nucleus emits:",
      options: ["Two protons and two neutrons","One proton only","Two electrons","One neutron only"],
      ans: "Two protons and two neutrons",
      reason: "An alpha particle is a helium nucleus containing 2 protons and 2 neutrons."
    },
    {
      q: "When a nucleus undergoes alpha decay, its nucleon number changes by:",
      options: ["+4","+2","-4","-2"],
      ans: "-4",
      reason: "An alpha particle contains four nucleons, so the parent nucleus loses four nucleons."
    },
    {
      q: "When a nucleus emits a beta particle, the nucleon number:",
      options: ["Increases by 1","Decreases by 1","Remains unchanged","Becomes zero"],
      ans: "Remains unchanged",
      reason: "Beta decay converts a neutron into a proton (or vice versa), so total nucleons remain constant."
    },
    {
      q: "In beta minus decay, a neutron changes into:",
      options: ["Proton + electron + antineutrino","Proton + alpha particle","Electron + neutron","Proton only"],
      ans: "Proton + electron + antineutrino",
      reason: "A neutron converts into a proton while emitting an electron and antineutrino."
    },
    {
      q: "During beta minus decay, the atomic number:",
      options: ["Decreases by 1","Increases by 1","Remains unchanged","Becomes negative"],
      ans: "Increases by 1",
      reason: "A neutron becomes a proton, increasing the number of protons by one."
    },
    {
      q: "Which quantity remains unchanged during beta decay?",
      options: ["Atomic number","Charge of nucleus","Nucleon number","Number of protons"],
      ans: "Nucleon number",
      reason: "A neutron converts into a proton, so the total number of nucleons does not change."
    },
    {
      q: "Consider the reaction: ²³⁸U₉₂ → ²³⁴Th₉₀ + X. The particle X must be:",
      options: ["Gamma ray","Beta particle","Alpha particle","Neutron"],
      ans: "Alpha particle",
      reason: "Mass number decreases by 4 and charge decreases by 2, which corresponds to alpha emission."
    },
    {
      q: "Gamma emission from a nucleus causes:",
      options: ["Change in nucleon number only","Change in charge only","No change in nucleon number or charge","Loss of protons"],
      ans: "No change in nucleon number or charge",
      reason: "Gamma rays are electromagnetic radiation and contain no nucleons or charge."
    },
    {
      q: "Which nuclear process conserves nucleon number but changes charge?",
      options: ["Gamma emission","Beta decay","Alpha decay","Nuclear fission only"],
      ans: "Beta decay",
      reason: "Beta decay changes a neutron into a proton or vice versa while keeping total nucleons constant."
    },
    {
      q: "The conservation of charge in a nuclear reaction means:",
      options: ["The number of electrons must remain unchanged.","Total positive and negative charges before and after are equal.","The nucleus cannot change.","No radiation can be emitted."],
      ans: "Total positive and negative charges before and after are equal.",
      reason: "The total electric charge of all particles remains conserved during nuclear processes."
    },
    {
      q: "In nuclear equations, the lower number written beside an element symbol represents:",
      options: ["Charge number (atomic number)","Nucleon number","Number of neutrons only","Energy level"],
      ans: "Charge number (atomic number)",
      reason: "The atomic number represents the number of protons and hence the nuclear charge."
    },
    {
      q: "In a nuclear equation, if the nucleon numbers do not balance, it indicates:",
      options: ["Energy conservation is violated.","The equation is incomplete or incorrect.","Charge is conserved automatically.","The reaction cannot occur."],
      ans: "The equation is incomplete or incorrect.",
      reason: "A valid nuclear equation must satisfy conservation of nucleon number."
    },
    {
      q: "Which reaction satisfies nucleon number conservation?",
      options: ["¹²C₆ → ¹⁰B₅ + ²₁H","¹⁴N₇ → ¹³C₆ + ²₁H","¹⁶O₈ → ¹³N₇ + ²₁H","²⁰Ne₁₀ → ¹⁵N₇ + ⁴₂He"],
      ans: "¹²C₆ → ¹⁰B₅ + ²₁H",
      reason: "Option A balances: mass numbers 12 = 10 + 2 and charges 6 = 5 + 1. Option B fails because 14 ≠ 13 + 2, option C because 16 ≠ 13 + 2, and option D because 20 ≠ 15 + 4."
    },
    {
      q: "In nuclear fission, although the original nucleus splits into smaller nuclei:",
      options: ["Charge is destroyed","Nucleon number is destroyed","Total nucleon number is conserved","Energy disappears"],
      ans: "Total nucleon number is conserved",
      reason: "The nucleons are redistributed among the products but total nucleon number remains constant."
    },
    {
      q: "Nuclear fusion obeys conservation laws because:",
      options: ["New nucleons are created","Total charge and nucleon number remain constant","Mass never changes","Energy is not released"],
      ans: "Total charge and nucleon number remain constant",
      reason: "Fusion combines nuclei while conserving total nucleon number and charge."
    },
    {
      q: "In the reaction: ²₁H + ³₁H → ⁴₂He + X, the particle X is:",
      options: ["Proton","Neutron","Electron","Gamma ray"],
      ans: "Neutron",
      reason: "Nucleon numbers: 2 + 3 = 5, helium has 4, leaving 1 neutron. Charge: 1 + 1 = 2, helium already has charge 2."
    },
    {
      q: "Which particle has zero charge but contributes to nucleon number?",
      options: ["Electron","Proton","Neutron","Positron"],
      ans: "Neutron",
      reason: "Neutrons have no electric charge but are counted as nucleons."
    },
    {
      q: "The atomic number of an element changes during:",
      options: ["Gamma emission only","Beta decay","Gamma absorption only","No nuclear reaction"],
      ans: "Beta decay",
      reason: "Beta decay changes a neutron into a proton or a proton into a neutron, altering atomic number."
    },
    {
      q: "A nuclear reaction is possible only if:",
      options: ["Nucleon number and charge are balanced.","The number of electrons increases.","Energy is destroyed.","Atomic symbols remain unchanged."],
      ans: "Nucleon number and charge are balanced.",
      reason: "Conservation of nucleon number and charge are fundamental requirements for nuclear equations."
    },
    {
      q: "The total charge of reactants compared with products in a nuclear reaction is:",
      options: ["Always greater","Always smaller","Equal","Random"],
      ans: "Equal",
      reason: "Electric charge is a conserved quantity."
    },
    {
      q: "If a neutron is emitted during a nuclear reaction, the atomic number:",
      options: ["Increases by one","Decreases by one","Remains unchanged","Doubles"],
      ans: "Remains unchanged",
      reason: "A neutron has no charge, so emitting it does not change the number of protons."
    },
    {
      q: "Which statement is false about nuclear conservation laws?",
      options: ["Total nucleon number is conserved.","Total charge is conserved.","Individual nuclei must remain unchanged.","Nuclear reactions rearrange nucleons."],
      ans: "Individual nuclei must remain unchanged.",
      reason: "Nuclei can change into different nuclei while still conserving nucleon number and charge."
    },
    {
      q: "A proton emission from a nucleus causes:",
      options: ["Nucleon number decrease by 1 and charge decrease by 1.","Nucleon number increase by 1.","No change in charge.","No change in nucleus."],
      ans: "Nucleon number decrease by 1 and charge decrease by 1.",
      reason: "A proton contributes one nucleon and one positive charge."
    },
    {
      q: "The most important reason for balancing nuclear equations is to verify:",
      options: ["Chemical properties","Conservation of fundamental quantities","Temperature change","Physical appearance of elements"],
      ans: "Conservation of fundamental quantities",
      reason: "Balanced nuclear equations obey conservation of nucleon number and electric charge."
    },
    {
      q: "Alpha (α) radiation is composed of:",
      options: ["Two protons and two electrons","Two protons and two neutrons","One proton and one neutron","Four electrons"],
      ans: "Two protons and two neutrons",
      reason: "An alpha particle is a helium nucleus containing two protons and two neutrons."
    },
    {
      q: "The charge on an alpha particle is:",
      options: ["+1.6 × 10⁻¹⁹ C","+3.2 × 10⁻¹⁹ C","-3.2 × 10⁻¹⁹ C","Zero"],
      ans: "+3.2 × 10⁻¹⁹ C",
      reason: "An alpha particle contains two protons, each having charge +1.6 × 10⁻¹⁹ C, so total charge is +3.2 × 10⁻¹⁹ C."
    },
    {
      q: "The mass of an alpha particle is approximately:",
      options: ["Equal to the mass of an electron","Four times the mass of a proton","Twice the mass of a proton","Zero"],
      ans: "Four times the mass of a proton",
      reason: "An alpha particle contains two protons and two neutrons, giving a mass approximately four times that of a proton."
    },
    {
      q: "Which radiation consists of high-energy electromagnetic waves?",
      options: ["Alpha radiation","Beta-minus radiation","Gamma radiation","Beta-plus radiation"],
      ans: "Gamma radiation",
      reason: "Gamma rays are electromagnetic waves with very high frequency and energy."
    },
    {
      q: "Gamma (γ) radiation has:",
      options: ["Positive charge and large mass","Negative charge and small mass","Zero charge and zero rest mass","Positive charge and zero mass"],
      ans: "Zero charge and zero rest mass",
      reason: "Gamma photons have no electric charge and no rest mass."
    },
    {
      q: "A beta-minus (β⁻) particle is actually:",
      options: ["A proton","A neutron","An electron","A positron"],
      ans: "An electron",
      reason: "β⁻ radiation consists of high-speed electrons emitted from the nucleus."
    },
    {
      q: "The charge of a beta-minus particle is:",
      options: ["+1.6 × 10⁻¹⁹ C","-1.6 × 10⁻¹⁹ C","+3.2 × 10⁻¹⁹ C","Zero"],
      ans: "-1.6 × 10⁻¹⁹ C",
      reason: "A beta-minus particle is an electron, which carries one negative elementary charge."
    },
    {
      q: "The mass of a beta-minus particle is:",
      options: ["Approximately equal to proton mass","Approximately equal to neutron mass","Approximately equal to electron mass","Four times proton mass"],
      ans: "Approximately equal to electron mass",
      reason: "Beta-minus particles are electrons, so their mass is the electron rest mass."
    },
    {
      q: "Beta-plus (β⁺) radiation consists of:",
      options: ["Neutrons","Electrons","Positrons","Alpha particles"],
      ans: "Positrons",
      reason: "β⁺ radiation is made up of positrons, which are the antimatter counterparts of electrons."
    },
    {
      q: "The charge on a positron is:",
      options: ["-1.6 × 10⁻¹⁹ C","+1.6 × 10⁻¹⁹ C","Zero","+3.2 × 10⁻¹⁹ C"],
      ans: "+1.6 × 10⁻¹⁹ C",
      reason: "A positron has the same mass as an electron but opposite charge."
    },
    {
      q: "Which pair has the same mass but opposite charges?",
      options: ["Alpha particle and proton","Electron and positron","Gamma ray and alpha particle","Electron and neutron"],
      ans: "Electron and positron",
      reason: "Electrons and positrons have equal masses but charges of opposite signs."
    },
    {
      q: "Which radiation has the greatest mass?",
      options: ["Alpha radiation","Beta-minus radiation","Beta-plus radiation","Gamma radiation"],
      ans: "Alpha radiation",
      reason: "Alpha particles contain four nucleons, making them much heavier than beta particles and gamma photons."
    },
    {
      q: "Which radiation is not affected by electric and magnetic fields?",
      options: ["Alpha particles","Beta particles","Both alpha and beta particles","Gamma rays"],
      ans: "Gamma rays",
      reason: "Gamma rays have no charge, so they are not deflected by electric or magnetic fields."
    },
    {
      q: "When comparing α, β⁻ and γ radiations, the correct order of increasing mass is:",
      options: ["γ < β⁻ < α","α < β⁻ < γ","β⁻ < γ < α","γ < α < β⁻"],
      ans: "γ < β⁻ < α",
      reason: "Gamma has zero rest mass, beta particles have electron mass, and alpha particles are the heaviest."
    },
    {
      q: "The charge-to-mass ratio (q/m) is highest for:",
      options: ["Alpha particles","Beta particles","Gamma rays","Neutrons"],
      ans: "Beta particles",
      reason: "Beta particles have very small mass but a charge equal to an electron, giving them the highest (q/m) ratio."
    },
    {
      q: "Which statement about alpha particles is correct?",
      options: ["They are negatively charged electrons.","They are helium nuclei without electrons.","They are electromagnetic waves.","They have no mass."],
      ans: "They are helium nuclei without electrons.",
      reason: "Alpha particles are helium nuclei consisting of two protons and two neutrons."
    },
    {
      q: "If an alpha particle loses one proton, it becomes:",
      options: ["A hydrogen nucleus","A neutron","A beta particle","A gamma photon"],
      ans: "A hydrogen nucleus",
      reason: "An alpha particle is a helium nucleus (2 protons + 2 neutrons). Removing one proton leaves 1 proton + 2 neutrons, which is the nucleus of tritium (hydrogen-3), a hydrogen isotope. The other options cannot result from removing one proton."
    },
    {
      q: "Which radiation has a charge magnitude equal to one elementary charge?",
      options: ["Alpha radiation only","Beta radiation only","Alpha and gamma radiation","Gamma radiation only"],
      ans: "Beta radiation only",
      reason: "Both β⁻ and β⁺ particles have charge magnitude equal to one elementary charge."
    },
    {
      q: "A radioactive source emits radiation that is not deflected in a magnetic field. The radiation is most likely:",
      options: ["α radiation","β⁻ radiation","β⁺ radiation","γ radiation"],
      ans: "γ radiation",
      reason: "Only gamma radiation has no charge and therefore experiences no magnetic force."
    },
    {
      q: "Which of the following correctly represents the composition of β⁺ radiation?",
      options: ["Two protons and two neutrons","A photon","A positively charged electron","A neutral particle"],
      ans: "A positively charged electron",
      reason: "A positron is an electron-like particle with positive charge."
    },
    {
      q: "Which statement correctly compares β⁻ and β⁺ particles?",
      options: ["Both have positive charges.","Both have negative charges.","They have equal mass but opposite charges.","They have different masses and same charge."],
      ans: "They have equal mass but opposite charges.",
      reason: "β⁻ is an electron and β⁺ is a positron; both have the same mass but opposite charges."
    },
    {
      q: "The approximate mass ratio of α-particle to β-particle is:",
      options: ["1:1","4:1","7300:1","1:7300"],
      ans: "7300:1",
      reason: "Mass of an alpha particle ≈ 6.64 × 10⁻²⁷ kg and mass of an electron (β⁻ particle) ≈ 9.11 × 10⁻³¹ kg, so the ratio is about 7300 : 1. Equivalently, 4 u ≈ 4 × 1836 electron masses ≈ 7300."
    },
    {
      q: "Which radiation can be considered as a stream of particles?",
      options: ["Gamma radiation only","Alpha and beta radiations","Gamma and beta radiations only","All radiations are particles"],
      ans: "Alpha and beta radiations",
      reason: "Alpha and beta radiations are particle radiations, while gamma is electromagnetic radiation."
    },
    {
      q: "Which of the following has the smallest mass?",
      options: ["Alpha particle","Electron","Positron","Gamma photon"],
      ans: "Gamma photon",
      reason: "Gamma photons have zero rest mass, whereas electrons and positrons have small but non-zero masses."
    },
    {
      q: "A radiation has a charge of +2e and mass approximately equal to four atomic mass units. It is:",
      options: ["β⁺ particle","Alpha particle","Gamma photon","Proton"],
      ans: "Alpha particle",
      reason: "An alpha particle has charge +2e and mass approximately 4 u."
    },
    {
      q: "A radioactive emission has no charge but carries energy. It is:",
      options: ["Positron radiation","Gamma radiation","Alpha radiation","Beta radiation"],
      ans: "Gamma radiation",
      reason: "Gamma rays are neutral electromagnetic waves that carry energy. Alpha particles and beta particles (electrons or positrons) are charged."
    },
    {
      q: "The charge of an alpha particle compared with a proton is:",
      options: ["Half of proton charge","Same as proton charge","Four times proton charge","Twice proton charge"],
      ans: "Twice proton charge",
      reason: "An alpha particle contains two protons, so its charge is twice that of a proton."
    },
    {
      q: "Which radioactive emission consists of electrons?",
      options: ["Alpha particle","Gamma photon","Beta-minus particle","Positron"],
      ans: "Beta-minus particle",
      reason: "β⁻ radiation consists of high-speed electrons emitted from the nucleus when a neutron changes into a proton. Alpha particles are helium nuclei, gamma photons are electromagnetic waves and positrons carry positive charge."
    },
    {
      q: "Which particle has the same mass as β⁻ radiation?",
      options: ["Proton","Neutron","Positron","Alpha particle"],
      ans: "Positron",
      reason: "β⁻ particles are electrons, and positrons have the same mass as electrons."
    },
    {
      q: "A radioactive nucleus emits a particle with charge e⁻ and very small mass. This emission is:",
      options: ["α radiation","β⁻ radiation","β⁺ radiation","γ radiation"],
      ans: "β⁻ radiation",
      reason: "β⁻ radiation consists of electrons having charge e⁻ and very small mass."
    },

    // ---- Additional MCQs written to the FBISE HSSC-I Physics (Grade XI) SLOs: straight, scenario-based and diagram questions ----
    {
      q: "<div class=\"stimulus\">Carbon-14 (nucleon number 14, atomic number 6) in an ancient bone undergoes β<sup>−</sup> decay. Radiocarbon dating works by counting how many of these decays occur each second.</div>Which particle is emitted together with the β<sup>−</sup> particle in this decay?",
      options: ["A positron","An electron antineutrino","An electron neutrino","A proton"],
      ans: "An electron antineutrino",
      reason: "In β⁻ decay an electron and an (electron) antineutrino are emitted; the neutrino (not antineutrino) goes with β⁺ decay."
    },
    {
      q: "<div class=\"stimulus\">Carbon-14 (nucleon number 14, atomic number 6) in an ancient bone undergoes β<sup>−</sup> decay. Radiocarbon dating works by counting how many of these decays occur each second.</div>At the quark level, which change takes place inside the decaying nucleon?",
      options: ["An up quark changes into a down quark","A down quark changes into an up quark","A down quark changes into a strange quark","An up quark changes into a charm quark"],
      ans: "A down quark changes into an up quark",
      reason: "A neutron (udd) becomes a proton (uud): one d quark turns into a u quark. The reverse change (u → d) occurs in β⁺ decay."
    },
    {
      q: "<div class=\"stimulus\">Carbon-14 (nucleon number 14, atomic number 6) in an ancient bone undergoes β<sup>−</sup> decay. Radiocarbon dating works by counting how many of these decays occur each second.</div>What are the atomic number Z and nucleon number A of the daughter nucleus?",
      options: ["Z = 5, A = 14","Z = 7, A = 14","Z = 7, A = 13","Z = 6, A = 13"],
      ans: "Z = 7, A = 14",
      reason: "Nucleon number is unchanged (14) because the electron and antineutrino carry none. Charge: 6 = Z + (−1) + 0, so Z = 7 (nitrogen-14)."
    },
    {
      q: "<div class=\"stimulus\">Carbon-14 (nucleon number 14, atomic number 6) in an ancient bone undergoes β<sup>−</sup> decay. Radiocarbon dating works by counting how many of these decays occur each second.</div>Which exchange particle is involved in the quark change, and which force does it mediate?",
      options: ["Gluon, strong force","Photon, electromagnetic force","Z boson, weak force","W⁻ boson, weak force"],
      ans: "W⁻ boson, weak force",
      reason: "β decay is a weak-force process. The quark changes charge (d → u), so the carrier is the charged W⁻, which then becomes e⁻ + antineutrino. The Z boson is neutral and cannot carry away the charge change."
    },
    {
      q: "<div class=\"stimulus\">In PET scanning a patient is injected with fluorine-18 (atomic number 9, nucleon number 18), which decays by β<sup>+</sup> emission. Each emitted positron soon meets an electron in the tissue and the pair annihilate. The rest energy of an electron (or positron) is 0.511 MeV.</div>Which nuclide is formed when fluorine-18 emits a β<sup>+</sup> particle (and a neutrino)?",
      options: ["Neon-18 (Z = 10)","Fluorine-17 (Z = 9)","Oxygen-18 (Z = 8)","Nitrogen-18 (Z = 7)"],
      ans: "Oxygen-18 (Z = 8)",
      reason: "Nucleon number stays 18. Charge: 9 = Z + 1 + 0, so Z = 8, which is oxygen-18. Neon-18 would result from β⁻ emission."
    },
    {
      q: "<div class=\"stimulus\">In PET scanning a patient is injected with fluorine-18 (atomic number 9, nucleon number 18), which decays by β<sup>+</sup> emission. Each emitted positron soon meets an electron in the tissue and the pair annihilate. The rest energy of an electron (or positron) is 0.511 MeV.</div>What is the antiparticle of the emitted positron?",
      options: ["The neutrino","The proton","The photon","The electron"],
      ans: "The electron",
      reason: "Antiparticle pairs are symmetric: the positron is the antiparticle of the electron, so the electron is the antiparticle of the positron."
    },
    {
      q: "<div class=\"stimulus\">In PET scanning a patient is injected with fluorine-18 (atomic number 9, nucleon number 18), which decays by β<sup>+</sup> emission. Each emitted positron soon meets an electron in the tissue and the pair annihilate. The rest energy of an electron (or positron) is 0.511 MeV.</div>Assuming the electron and positron are essentially at rest when they annihilate into two photons, what is the energy of each photon?",
      options: ["0.511 MeV","1.02 MeV","0.256 MeV","2.04 MeV"],
      ans: "0.511 MeV",
      reason: "Total energy = 2 × 0.511 = 1.022 MeV. Initial momentum is zero, so the two photons go in opposite directions with equal energy: 1.022 / 2 = 0.511 MeV each. 1.02 MeV is the total, not the energy of each photon."
    },
    {
      q: "<div class=\"stimulus\">In PET scanning a patient is injected with fluorine-18 (atomic number 9, nucleon number 18), which decays by β<sup>+</sup> emission. Each emitted positron soon meets an electron in the tissue and the pair annihilate. The rest energy of an electron (or positron) is 0.511 MeV.</div>Why are two photons produced instead of just one?",
      options: ["Linear momentum must be conserved, and the initial momentum is zero","Charge conservation requires two photons","Nucleon number conservation requires two photons","One photon of 1.02 MeV would be too energetic to exist"],
      ans: "Linear momentum must be conserved, and the initial momentum is zero",
      reason: "A single photon always carries momentum, but the pair had (almost) none, so at least two photons moving oppositely are needed. Charge is zero before and after either way, and no nucleons are involved."
    },
    {
      q: "<div class=\"stimulus\">A student tabulates the quark content of four hadrons. Quark charges: up (u) = +2/3 e, down (d) = −1/3 e, strange (s) = −1/3 e; an antiquark has the opposite charge of the quark.<table><thead><tr><th>Hadron</th><th>Quark content</th></tr></thead><tbody><tr><td>P</td><td>u u d</td></tr><tr><td>Q</td><td>u d̄</td></tr><tr><td>R</td><td>u d d</td></tr><tr><td>S</td><td>s ū</td></tr></tbody></table></div>Which two hadrons are baryons?",
      options: ["P and R","P and Q","R and S","Q and S"],
      ans: "P and R",
      reason: "A baryon has three quarks (P: uud, R: udd); a meson has a quark and an antiquark (Q and S)."
    },
    {
      q: "<div class=\"stimulus\">A student tabulates the quark content of four hadrons. Quark charges: up (u) = +2/3 e, down (d) = −1/3 e, strange (s) = −1/3 e; an antiquark has the opposite charge of the quark.<table><thead><tr><th>Hadron</th><th>Quark content</th></tr></thead><tbody><tr><td>P</td><td>u u d</td></tr><tr><td>Q</td><td>u d̄</td></tr><tr><td>R</td><td>u d d</td></tr><tr><td>S</td><td>s ū</td></tr></tbody></table></div>Which hadron is the proton?",
      options: ["S","P","Q","R"],
      ans: "P",
      reason: "A proton is uud: charge 2/3 + 2/3 − 1/3 = +1 e. R (udd) is the neutron."
    },
    {
      q: "<div class=\"stimulus\">A student tabulates the quark content of four hadrons. Quark charges: up (u) = +2/3 e, down (d) = −1/3 e, strange (s) = −1/3 e; an antiquark has the opposite charge of the quark.<table><thead><tr><th>Hadron</th><th>Quark content</th></tr></thead><tbody><tr><td>P</td><td>u u d</td></tr><tr><td>Q</td><td>u d̄</td></tr><tr><td>R</td><td>u d d</td></tr><tr><td>S</td><td>s ū</td></tr></tbody></table></div>What is the electric charge of hadron S?",
      options: ["+1 e","0","−1 e","−1/3 e"],
      ans: "−1 e",
      reason: "S = s ū: −1/3 + (−2/3) = −1 e. (The antiquark ū has charge −2/3 e.)"
    },
    {
      q: "<div class=\"stimulus\">A student tabulates the quark content of four hadrons. Quark charges: up (u) = +2/3 e, down (d) = −1/3 e, strange (s) = −1/3 e; an antiquark has the opposite charge of the quark.<table><thead><tr><th>Hadron</th><th>Quark content</th></tr></thead><tbody><tr><td>P</td><td>u u d</td></tr><tr><td>Q</td><td>u d̄</td></tr><tr><td>R</td><td>u d d</td></tr><tr><td>S</td><td>s ū</td></tr></tbody></table></div>What is the quark content of the antiparticle of hadron Q?",
      options: ["d u","u u d","d ū","u d̄"],
      ans: "d ū",
      reason: "The antiparticle is formed by replacing every quark by its antiquark: u → ū and d̄ → d, giving d ū (charge −1/3 − 2/3 = −1 e, opposite to Q's +1 e)."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 205\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah_d1\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#222\"/></marker></defs><rect x=\"95\" y=\"12\" width=\"225\" height=\"186\" fill=\"#eef4ff\" stroke=\"#888\" stroke-dasharray=\"4 3\"/><text x=\"115\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"115\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"115\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"115\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"115\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"115\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"143\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"143\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"143\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"143\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"143\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"143\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"171\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"171\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"171\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"171\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"171\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"171\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"199\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"199\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"199\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"199\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"199\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"199\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"227\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"227\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"227\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"227\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"227\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"227\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"255\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"255\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"255\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"255\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"255\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"255\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"283\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"283\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"283\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"283\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"283\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"283\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"311\" y=\"34\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"311\" y=\"64\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"311\" y=\"94\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"311\" y=\"124\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"311\" y=\"154\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><text x=\"311\" y=\"184\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#6a86b8\">×</text><rect x=\"12\" y=\"92\" width=\"26\" height=\"26\" fill=\"#ddd\" stroke=\"#222\"/><text x=\"25\" y=\"134\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">source</text><line x1=\"38\" y1=\"105\" x2=\"95\" y2=\"105\" stroke=\"#222\"/><path d=\"M95 105 Q195 105 275 78\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"2\"/><text x=\"288\" y=\"76\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">A</text><path d=\"M95 105 Q165 105 215 26\" fill=\"none\" stroke=\"#2a7a2a\" stroke-width=\"2\"/><text x=\"222\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">D</text><path d=\"M95 105 Q165 105 215 184\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\"/><text x=\"222\" y=\"192\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">C</text><line x1=\"95\" y1=\"105\" x2=\"300\" y2=\"105\" stroke=\"#222\" stroke-width=\"2\" stroke-dasharray=\"1 0\"/><text x=\"310\" y=\"109\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">B</text><text x=\"200\" y=\"8\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">magnetic field B into the page (×)</text></svg></div>Radiation from a source passes through a region of uniform magnetic field directed into the page, and four tracks A, B, C, D are observed (A, C and D are curved, B is straight). Which track is that of the β<sup>−</sup> particles?",
      options: ["C","D","A","B"],
      ans: "C",
      reason: "For B into the page, a positive charge moving to the right is pushed up (F = qv × B) and a negative charge is pushed down. β⁻ particles are negative, so they curve downward: track C. D curves the other way, with equal radius: that is β⁺. A is the heavy, slowly curving α, and B (undeflected) is γ."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 185\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"35\" y1=\"150\" x2=\"35\" y2=\"20\" stroke=\"#222\"/><line x1=\"35\" y1=\"150\" x2=\"155\" y2=\"150\" stroke=\"#222\"/><text x=\"95\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">kinetic energy →</text><text x=\"95\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Source X</text><text x=\"18\" y=\"90\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" transform=\"rotate(-90 18 90)\" text-anchor=\"middle\">number detected</text><line x1=\"205\" y1=\"150\" x2=\"205\" y2=\"20\" stroke=\"#222\"/><line x1=\"205\" y1=\"150\" x2=\"325\" y2=\"150\" stroke=\"#222\"/><text x=\"265\" y=\"175\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">kinetic energy →</text><text x=\"265\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Source Y</text><text x=\"188\" y=\"90\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\" transform=\"rotate(-90 188 90)\" text-anchor=\"middle\">number detected</text><line x1=\"105\" y1=\"150\" x2=\"105\" y2=\"40\" stroke=\"#c0392b\" stroke-width=\"3\"/><line x1=\"125\" y1=\"150\" x2=\"125\" y2=\"85\" stroke=\"#c0392b\" stroke-width=\"3\"/><polyline points=\"205.0,150.0 206.1,131.4 207.2,122.2 208.3,115.0 209.4,109.1 210.5,104.0 211.6,99.5 212.7,95.4 213.8,91.8 214.9,88.6 216.0,85.7 217.1,83.0 218.2,80.6 219.3,78.4 220.4,76.5 221.5,74.7 222.6,73.1 223.7,71.7 224.8,70.4 225.9,69.3 227.0,68.3 228.1,67.4 229.2,66.7 230.3,66.1 231.4,65.6 232.5,65.2 233.6,64.9 234.7,64.7 235.8,64.6 236.9,64.6 238.0,64.7 239.1,64.8 240.2,65.1 241.3,65.4 242.4,65.8 243.5,66.3 244.6,66.8 245.7,67.4 246.8,68.0 247.9,68.8 249.0,69.5 250.1,70.4 251.2,71.3 252.3,72.2 253.4,73.2 254.5,74.2 255.6,75.3 256.7,76.4 257.8,77.6 258.9,78.8 260.0,80.0 261.1,81.3 262.2,82.6 263.3,84.0 264.4,85.3 265.5,86.7 266.6,88.2 267.7,89.6 268.8,91.1 269.9,92.6 271.0,94.1 272.1,95.7 273.2,97.2 274.3,98.8 275.4,100.4 276.5,102.0 277.6,103.6 278.7,105.3 279.8,106.9 280.9,108.6 282.0,110.2 283.1,111.9 284.2,113.5 285.3,115.2 286.4,116.8 287.5,118.4 288.6,120.1 289.7,121.7 290.8,123.3 291.9,124.9 293.0,126.5 294.1,128.1 295.2,129.7 296.3,131.2 297.4,132.7 298.5,134.2 299.6,135.6 300.7,137.1 301.8,138.4 302.9,139.8 304.0,141.1 305.1,142.3 306.2,143.5 307.3,144.7 308.4,145.8 309.5,146.7 310.6,147.7 311.7,148.5 312.8,149.2 313.9,149.7 315.0,150.0\" fill=\"none\" stroke=\"#1f5fbf\" stroke-width=\"2\"/></svg></div>The graphs show the energies of particles emitted by two different radioactive sources. Which statement is correct?",
      options: ["Source X emits β particles; a β particle always takes all the decay energy","Source Y emits β particles; the energy of each decay is shared in varying proportions with an antineutrino","Source Y emits β particles; the electrons lose different amounts of energy in the air","Source X emits β particles; the antineutrino carries a fixed amount of energy"],
      ans: "Source Y emits β particles; the energy of each decay is shared in varying proportions with an antineutrino",
      reason: "Source X shows discrete lines (α particles: two-body decay, fixed energies). Source Y shows a continuous spread up to a maximum: β particles, because the decay energy is shared between the electron and an (anti)neutrino in any proportion."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 215\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><circle cx=\"105\" cy=\"105\" r=\"75\" fill=\"#f7f7f7\" stroke=\"#222\"/><circle cx=\"105\" cy=\"60\" r=\"19\" fill=\"#ffd6d6\" stroke=\"#222\"/><text x=\"105\" y=\"65\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"normal\" fill=\"#222\">u</text><circle cx=\"70\" cy=\"125\" r=\"19\" fill=\"#d6e6ff\" stroke=\"#222\"/><text x=\"70\" y=\"130\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"normal\" fill=\"#222\">d</text><circle cx=\"140\" cy=\"125\" r=\"19\" fill=\"#d6e6ff\" stroke=\"#222\"/><text x=\"140\" y=\"130\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"normal\" fill=\"#222\">d</text><polyline points=\"105.0,79.0 103.3,79.0 101.9,79.1 100.9,79.7 100.4,80.7 100.3,82.2 100.5,83.8 100.7,85.5 100.6,86.9 100.1,88.0 99.1,88.5 97.7,88.7 96.0,88.7 94.3,88.6 92.9,88.8 91.9,89.4 91.4,90.4 91.3,91.8 91.5,93.5 91.7,95.2 91.6,96.6 91.1,97.6 90.1,98.2 88.7,98.4 87.0,98.3 85.3,98.3 83.9,98.5 82.9,99.0 82.4,100.1 82.3,101.5 82.5,103.2 82.7,104.8 82.6,106.3 82.1,107.3 81.1,107.9 79.7,108.0 78.0,108.0\" fill=\"none\" stroke=\"#777\" stroke-width=\"1.6\"/><polyline points=\"89.0,125.0 89.9,126.2 90.8,127.2 91.7,127.5 92.6,127.2 93.4,126.2 94.3,125.0 95.2,123.8 96.1,122.8 97.0,122.5 97.9,122.8 98.8,123.8 99.7,125.0 100.6,126.2 101.4,127.2 102.3,127.5 103.2,127.2 104.1,126.2 105.0,125.0 105.9,123.8 106.8,122.8 107.7,122.5 108.6,122.8 109.4,123.8 110.3,125.0 111.2,126.2 112.1,127.2 113.0,127.5 113.9,127.2 114.8,126.2 115.7,125.0 116.6,123.8 117.4,122.8 118.3,122.5 119.2,122.8 120.1,123.8 121.0,125.0\" fill=\"none\" stroke=\"#777\" stroke-width=\"1.6\"/><polyline points=\"105.0,79.0 104.8,80.7 104.9,82.1 105.4,83.1 106.4,83.7 107.8,83.9 109.5,83.8 111.2,83.8 112.6,84.0 113.6,84.5 114.1,85.6 114.2,87.0 114.0,88.7 113.8,90.3 113.9,91.8 114.4,92.8 115.4,93.4 116.8,93.5 118.5,93.5 120.2,93.5 121.6,93.6 122.6,94.2 123.1,95.2 123.2,96.7 123.0,98.3 122.8,100.0 122.9,101.4 123.4,102.5 124.4,103.0 125.8,103.2 127.5,103.2 129.2,103.1 130.6,103.3 131.6,103.9 132.1,104.9 132.2,106.3 132.0,108.0\" fill=\"none\" stroke=\"#777\" stroke-width=\"1.6\"/><text x=\"245\" y=\"70\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">quark charges:</text><text x=\"245\" y=\"88\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">u = +2/3 e</text><text x=\"245\" y=\"104\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">d = −1/3 e</text><text x=\"105\" y=\"205\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">zigzag lines: gluons</text></svg></div>The sketch shows the quarks (held by gluons) inside a hadron. What is this particle and what is its total charge?",
      options: ["Antineutron, charge 0","Neutron, charge −1/3 e","Proton, charge +1 e","Neutron, charge 0"],
      ans: "Neutron, charge 0",
      reason: "Quark content u d d: charge 2/3 − 1/3 − 1/3 = 0, which is the neutron. A proton is u u d (+1 e). An antineutron would contain the antiquarks ū d̄ d̄."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 200\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah_d4\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#222\"/></marker></defs><ellipse cx=\"40\" cy=\"120\" rx=\"30\" ry=\"22\" fill=\"#f7f7f7\" stroke=\"#222\"/><text x=\"40\" y=\"124\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"normal\" fill=\"#222\">u</text><text x=\"40\" y=\"160\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">inside proton</text><line x1=\"72\" y1=\"120\" x2=\"150\" y2=\"120\" stroke=\"#222\" marker-end=\"url(#ah_d4)\"/><ellipse cx=\"180\" cy=\"120\" rx=\"28\" ry=\"22\" fill=\"#f7f7f7\" stroke=\"#222\"/><text x=\"180\" y=\"124\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"normal\" fill=\"#222\">d</text><polyline points=\"88.0,112.0 90.5,111.9 92.7,111.6 94.3,110.6 95.3,109.0 95.7,106.8 95.8,104.2 95.8,101.7 96.2,99.5 97.2,97.9 98.8,96.9 101.0,96.6 103.5,96.5 106.0,96.4 108.2,96.1 109.8,95.1 110.8,93.5 111.2,91.3 111.2,88.8 111.3,86.2 111.7,84.0 112.7,82.4 114.3,81.4 116.5,81.1 119.0,81.0 121.5,80.9 123.7,80.6 125.3,79.6 126.3,78.0 126.7,75.8 126.8,73.2 126.8,70.7 127.2,68.5 128.2,66.9 129.8,65.9 132.0,65.6 134.5,65.5 137.0,65.4 139.2,65.1 140.8,64.1 141.8,62.5 142.2,60.3 142.2,57.8 142.3,55.2 142.7,53.0 143.7,51.4 145.3,50.4 147.5,50.1 150.0,50.0\" fill=\"none\" stroke=\"#b35900\" stroke-width=\"1.6\"/><text x=\"70\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">W⁺</text><text x=\"110\" y=\"100\" text-anchor=\"middle\" font-size=\"1\" font-weight=\"normal\" fill=\"#222\"></text><line x1=\"152\" y1=\"46\" x2=\"220\" y2=\"25\" stroke=\"#222\" marker-end=\"url(#ah_d4)\"/><text x=\"262\" y=\"28\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">e⁺</text><line x1=\"152\" y1=\"52\" x2=\"220\" y2=\"75\" stroke=\"#222\" marker-end=\"url(#ah_d4)\"/><text x=\"248\" y=\"82\" text-anchor=\"middle\" font-size=\"15\" font-weight=\"normal\" fill=\"#222\">X</text><text x=\"180\" y=\"190\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">quark level picture of β⁺ decay</text></svg></div>The sketch shows β⁺ decay at the quark level: an up quark in a proton changes to a down quark and a W⁺ boson is emitted, which then decays into a positron and a particle X. What is X?",
      options: ["A photon","An electron neutrino","An electron","An electron antineutrino"],
      ans: "An electron neutrino",
      reason: "W⁺ → e⁺ + ν_e. The positron is an antilepton, so the accompanying neutral lepton is a neutrino (not an antineutrino), as stated for β⁺ decay. Antineutrinos accompany β⁻ decay."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 200\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah_d5\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#222\"/></marker></defs><line x1=\"20\" y1=\"110\" x2=\"115\" y2=\"110\" stroke=\"#1f5fbf\" stroke-width=\"2\" marker-end=\"url(#ah_d5)\"/><line x1=\"310\" y1=\"110\" x2=\"215\" y2=\"110\" stroke=\"#c0392b\" stroke-width=\"2\" marker-end=\"url(#ah_d5)\"/><circle cx=\"165\" cy=\"110\" r=\"5\" fill=\"#222\"/><text x=\"65\" y=\"92\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">e⁻</text><text x=\"65\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">KE = 0.511 MeV</text><text x=\"265\" y=\"92\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">e⁺</text><text x=\"265\" y=\"132\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">KE = 0.511 MeV</text><polyline points=\"165.0,110.0 167.2,110.0 169.1,109.7 170.5,108.9 171.4,107.6 171.9,105.7 172.0,103.5 172.1,101.3 172.6,99.4 173.5,98.1 174.9,97.3 176.8,97.0 179.0,97.0 181.2,97.0 183.1,96.7 184.5,95.9 185.4,94.6 185.9,92.7 186.0,90.5 186.1,88.3 186.6,86.4 187.5,85.1 188.9,84.3 190.8,84.0 193.0,84.0 195.2,84.0 197.1,83.7 198.5,82.9 199.4,81.6 199.9,79.7 200.0,77.5 200.1,75.3 200.6,73.4 201.5,72.1 202.9,71.3 204.8,71.0 207.0,71.0 209.2,71.0 211.1,70.7 212.5,69.9 213.4,68.6 213.9,66.7 214.0,64.5 214.1,62.3 214.6,60.4 215.5,59.1 216.9,58.3 218.8,58.0 221.0,58.0 223.2,58.0 225.1,57.7 226.5,56.9 227.4,55.6 227.9,53.7 228.0,51.5 228.1,49.3 228.6,47.4 229.5,46.1 230.9,45.3 232.8,45.0 235.0,45.0\" fill=\"none\" stroke=\"#b35900\" stroke-width=\"1.6\"/><polyline points=\"165.0,110.0 162.8,110.0 160.9,110.3 159.5,111.1 158.6,112.4 158.1,114.3 158.0,116.5 157.9,118.7 157.4,120.6 156.5,121.9 155.1,122.7 153.2,123.0 151.0,123.0 148.8,123.0 146.9,123.3 145.5,124.1 144.6,125.4 144.1,127.3 144.0,129.5 143.9,131.7 143.4,133.6 142.5,134.9 141.1,135.7 139.2,136.0 137.0,136.0 134.8,136.0 132.9,136.3 131.5,137.1 130.6,138.4 130.1,140.3 130.0,142.5 129.9,144.7 129.4,146.6 128.5,147.9 127.1,148.7 125.2,149.0 123.0,149.0 120.8,149.0 118.9,149.3 117.5,150.1 116.6,151.4 116.1,153.3 116.0,155.5 115.9,157.7 115.4,159.6 114.5,160.9 113.1,161.7 111.2,162.0 109.0,162.0 106.8,162.0 104.9,162.3 103.5,163.1 102.6,164.4 102.1,166.3 102.0,168.5 101.9,170.7 101.4,172.6 100.5,173.9 99.1,174.7 97.2,175.0 95.0,175.0\" fill=\"none\" stroke=\"#b35900\" stroke-width=\"1.6\"/><text x=\"250\" y=\"40\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">γ</text><text x=\"82\" y=\"185\" text-anchor=\"middle\" font-size=\"14\" font-weight=\"normal\" fill=\"#222\">γ</text><text x=\"165\" y=\"20\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">head-on, equal speeds</text></svg></div>In the sketch an electron and a positron, each with kinetic energy 0.511 MeV, collide head-on and annihilate into two photons moving in opposite directions. The rest energy of each is 0.511 MeV. What is the energy of each photon?",
      options: ["0.511 MeV","1.53 MeV","1.02 MeV","2.04 MeV"],
      ans: "1.02 MeV",
      reason: "Total energy = 2 × (0.511 rest + 0.511 kinetic) = 2.044 MeV. Total momentum is zero, so the photons share it equally: 2.044 / 2 ≈ 1.02 MeV each. 0.511 MeV ignores the kinetic energy; 2.04 MeV is the total."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 160\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah_d6\" viewBox=\"0 0 10 10\" refX=\"9\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto\"><path d=\"M0 0 L10 5 L0 10 z\" fill=\"#222\"/></marker></defs><rect x=\"8\" y=\"40\" width=\"80\" height=\"52\" fill=\"#fff3c4\" stroke=\"#222\"/><text x=\"48.0\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">U-238</text><text x=\"48.0\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Z = 92</text><rect x=\"124\" y=\"40\" width=\"80\" height=\"52\" fill=\"#fff3c4\" stroke=\"#222\"/><text x=\"164.0\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">X</text><text x=\"164.0\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">A, Z</text><rect x=\"240\" y=\"40\" width=\"80\" height=\"52\" fill=\"#fff3c4\" stroke=\"#222\"/><text x=\"280.0\" y=\"60\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">Y</text><text x=\"280.0\" y=\"78\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">?</text><line x1=\"88\" y1=\"66\" x2=\"124\" y2=\"66\" stroke=\"#222\" marker-end=\"url(#ah_d6)\"/><line x1=\"204\" y1=\"66\" x2=\"240\" y2=\"66\" stroke=\"#222\" marker-end=\"url(#ah_d6)\"/><text x=\"106\" y=\"56\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">α</text><text x=\"222\" y=\"56\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">β⁻</text><text x=\"165\" y=\"125\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">U-238 emits an α particle to form X;</text><text x=\"165\" y=\"141\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">X then emits a β⁻ particle to form Y.</text></svg></div>In the decay chain shown, uranium-238 (nucleon number 238, Z = 92) emits an α particle and then the product emits a β<sup>−</sup> particle. What are the nucleon number A and atomic number Z of nuclide Y?",
      options: ["A = 230, Z = 89","A = 238, Z = 91","A = 234, Z = 91","A = 234, Z = 89"],
      ans: "A = 234, Z = 91",
      reason: "α emission: A = 238 − 4 = 234, Z = 92 − 2 = 90 (X = thorium-234). β⁻ emission: A stays 234, Z = 90 + 1 = 91 (Y = protactinium-234). Z = 89 would come from subtracting for β⁻."
    },
    {
      q: "<div class=\"stimulus\"><svg viewBox=\"0 0 330 205\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"10\" y1=\"70\" x2=\"325\" y2=\"70\" stroke=\"#999\" stroke-dasharray=\"3 3\"/><rect x=\"40\" y=\"58\" width=\"22\" height=\"24\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"51.0\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">1</text><line x1=\"51.0\" y1=\"82\" x2=\"51.0\" y2=\"128\" stroke=\"#222\"/><rect x=\"100\" y=\"58\" width=\"34\" height=\"24\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"117.0\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">2</text><line x1=\"117.0\" y1=\"82\" x2=\"117.0\" y2=\"140\" stroke=\"#222\"/><rect x=\"170\" y=\"58\" width=\"50\" height=\"24\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"195.0\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">3</text><line x1=\"195.0\" y1=\"82\" x2=\"195.0\" y2=\"128\" stroke=\"#222\"/><rect x=\"255\" y=\"58\" width=\"70\" height=\"24\" fill=\"#dbe9ff\" stroke=\"#222\"/><text x=\"290.0\" y=\"100\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">4</text><line x1=\"290.0\" y1=\"82\" x2=\"290.0\" y2=\"140\" stroke=\"#222\"/><line x1=\"51\" y1=\"128\" x2=\"205\" y2=\"128\" stroke=\"#222\"/><line x1=\"120\" y1=\"140\" x2=\"290\" y2=\"140\" stroke=\"#222\"/><line x1=\"51\" y1=\"45\" x2=\"51\" y2=\"58\" stroke=\"#222\"/><circle cx=\"150\" cy=\"170\" r=\"14\" fill=\"#fff\" stroke=\"#222\"/><text x=\"150\" y=\"175\" text-anchor=\"middle\" font-size=\"16\" font-weight=\"normal\" fill=\"#222\">~</text><line x1=\"150\" y1=\"156\" x2=\"150\" y2=\"140\" stroke=\"#222\"/><line x1=\"136\" y1=\"170\" x2=\"95\" y2=\"170\" stroke=\"#222\"/><line x1=\"95\" y1=\"170\" x2=\"95\" y2=\"128\" stroke=\"#222\"/><text x=\"150\" y=\"198\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">alternating voltage, fixed frequency</text><circle cx=\"18\" cy=\"70\" r=\"6\" fill=\"#c0392b\"/><text x=\"18\" y=\"55\" text-anchor=\"middle\" font-size=\"13\" font-weight=\"normal\" fill=\"#222\">+</text><text x=\"300\" y=\"40\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">tubes 1, 2, 3, 4</text></svg></div>In a linear accelerator, charged particles pass through metal drift tubes connected alternately to an alternating voltage of fixed frequency. Why do the successive tubes have to be longer?",
      options: ["The particles slow down in each tube","The particles gain mass so they need more room","The magnetic field in each tube is stronger","The particles move faster in each tube but the time spent in a tube (half an AC cycle) is the same"],
      ans: "The particles move faster in each tube but the time spent in a tube (half an AC cycle) is the same",
      reason: "The particle is accelerated in each gap, so its speed increases. For it to reach the next gap just as the voltage reverses, it must cross each tube in the same half-period, so length = speed × time grows tube by tube."
    },
    {
      q: "Which statement correctly compares an electron with its antiparticle, the positron?",
      options: ["They have the same mass and the same charge","They have the same mass but opposite charge","The positron has no charge but the same mass","They have equal charge but different masses"],
      ans: "They have the same mass but opposite charge",
      reason: "An antiparticle has the same mass as its particle but opposite charge. The positron has mass 9.11 × 10⁻³¹ kg and charge +e."
    },
    {
      q: "Which of the following quantities has the same value for a proton and an antiproton?",
      options: ["Quark content","Electric charge","Direction of magnetic moment relative to spin","Mass"],
      ans: "Mass",
      reason: "An antiparticle has the same mass but opposite electric (and magnetic) properties. Proton: uud; antiproton: ū ū d̄ with charge −e."
    },
    {
      q: "An antiproton is the antiparticle of the proton (u u d). What is its quark content and charge?",
      options: ["d̄ d̄ ū, charge 0","ū ū d̄, charge −1 e","u u d̄, charge +1 e","ū ū d, charge −1/3 e"],
      ans: "ū ū d̄, charge −1 e",
      reason: "Replace each quark by its antiquark: ū ū d̄. Charge = −2/3 − 2/3 + 1/3 = −1 e, opposite to the proton."
    },
    {
      q: "Which three quark flavours each carry electric charge +2/3 e?",
      options: ["Up, down, strange","Up, charm, top","Down, strange, bottom","Charm, strange, top"],
      ans: "Up, charm, top",
      reason: "The up-type quarks (up, charm, top) have charge +2/3 e; the down-type quarks (down, strange, bottom) have −1/3 e."
    },
    {
      q: "What is the electric charge of an anti-up quark (ū)?",
      options: ["+2/3 e","+1/3 e","−2/3 e","−1/3 e"],
      ans: "−2/3 e",
      reason: "An antiquark has the opposite charge of the quark; the up quark is +2/3 e, so the anti-up quark is −2/3 e."
    },
    {
      q: "A baryon is made of two up quarks and one strange quark. What is its electric charge? (u = +2/3 e, s = −1/3 e)",
      options: ["0","+2/3 e","+1/3 e","+1 e"],
      ans: "+1 e",
      reason: "Charge = 2/3 + 2/3 − 1/3 = +1 e. Three quarks make it a baryon."
    },
    {
      q: "Which of the following quark combinations is a meson? (c = charm, s = strange)",
      options: ["c s̄","u d d","ū ū d̄","d d s"],
      ans: "c s̄",
      reason: "A meson is a quark plus an antiquark: c s̄. 'u d d' and 'd d s' have three quarks (baryons); ū ū d̄ has three antiquarks (an antibaryon)."
    },
    {
      q: "In the β⁻ decay of a neutron, one quark changes flavour. By how much does the total charge of the quarks change, and what balances it?",
      options: ["Does not change; no charged particle is emitted","Increases by +1/3 e; the antineutrino carries −1/3 e","Increases by +1 e; the emitted electron carries −1 e","Decreases by 1 e; the emitted electron carries +1 e"],
      ans: "Increases by +1 e; the emitted electron carries −1 e",
      reason: "d (−1/3) → u (+2/3) is a change of +1 e. To conserve charge, the electron (−1 e) is emitted; the antineutrino is neutral."
    },
    {
      q: "Which of the following is a lepton?",
      options: ["Neutron","Neutrino","Proton","Up quark"],
      ans: "Neutrino",
      reason: "Electrons and neutrinos are leptons, fundamental particles not made of quarks. Protons and neutrons are baryons; the up quark is a quark."
    },
    {
      q: "Electrons and neutrinos belong to the family of leptons. What is true of leptons?",
      options: ["Each is made of three quarks","They are fundamental particles that are not made of quarks","They are the exchange particles of the strong force","Each is made of a quark and an antiquark"],
      ans: "They are fundamental particles that are not made of quarks",
      reason: "Leptons (electron, neutrinos) are fundamental, with no quark substructure. Hadrons (baryons, mesons) contain quarks, and the exchange particles are separate (W, Z, gluon, photon)."
    },
    {
      q: "<div class=\"stimulus\"><table><thead><tr><th>Exchange particle</th><th>Force mediated</th></tr></thead><tbody><tr><td>Photon</td><td>Electromagnetic</td></tr><tr><td>Gluon</td><td>Strong</td></tr><tr><td>W boson</td><td>Weak</td></tr><tr><td>Z boson</td><td>Strong</td></tr></tbody></table></div>A student wrote the table of exchange particles. For which particle is the force entry incorrect?",
      options: ["W boson","Z boson","Photon","Gluon"],
      ans: "Z boson",
      reason: "The Z boson (like the W) mediates the weak force. The photon mediates the electromagnetic force and the gluon the strong force, so only the Z entry is wrong."
    },
    {
      q: "Which exchange particle binds quarks together inside a proton?",
      options: ["Higgs boson","Photon","Gluon","W boson"],
      ans: "Gluon",
      reason: "Gluons carry the strong force between quarks. Photons act between charged particles (electromagnetic); W and Z carry the weak force."
    },
    {
      q: "The Higgs boson is the fundamental particle that is responsible for:",
      options: ["The mass of particles","The electric charge of particles","The decay of neutrons into protons","The strong force between quarks"],
      ans: "The mass of particles",
      reason: "The Higgs boson is associated with the mechanism that gives fundamental particles their mass. Charge, strong force (gluons) and β decay (W boson) are not its role."
    },
    {
      q: "Why do the α particles emitted by a given nuclide have discrete energies, unlike β particles?",
      options: ["The decay produces only two bodies (α and daughter nucleus), so the energy and momentum are shared in a fixed way","The α particles are stopped by air","The decay energy is shared among three particles in any proportion","The α particles carry the antineutrino with them"],
      ans: "The decay produces only two bodies (α and daughter nucleus), so the energy and momentum are shared in a fixed way",
      reason: "In α decay only two bodies share the energy, which fixes each one's share. In β decay a third body (the antineutrino or neutrino) is emitted so the electron can have any energy up to a maximum."
    },
    {
      q: "In particle accelerators, charged particles are speeded up mainly by:",
      options: ["Gravitational fields","Electric fields","Magnetic fields doing work on them","The strong nuclear force"],
      ans: "Electric fields",
      reason: "A magnetic force is perpendicular to the velocity so it does no work; it only steers the particles. Their speed (energy) is raised by electric fields."
    },
    {
      q: "Observations of the universe indicate that most of the observable matter is:",
      options: ["Antimatter, with very little ordinary matter","Equal amounts of matter and antimatter","Ordinary matter, with very little antimatter","Antimatter in stars and matter only in gas clouds"],
      ans: "Ordinary matter, with very little antimatter",
      reason: "Almost everything observed is made of ordinary matter; antimatter is only seen in tiny amounts, for example in cosmic rays or in laboratory experiments."
    },
    {
      q: "Why is the matter–antimatter asymmetry of the universe described as an unsolved mystery?",
      options: ["Antimatter has the same charge as matter and cannot be detected","Antimatter cannot exist because it has negative mass","Equal amounts of both were expected to form early on, yet almost only matter is observed, and the reason is not known","Antimatter has never been produced in a laboratory"],
      ans: "Equal amounts of both were expected to form early on, yet almost only matter is observed, and the reason is not known",
      reason: "Theory suggests matter and antimatter should have been created equally and annihilated completely, but the universe is made almost entirely of matter. Antimatter does exist (mass is positive, charge is opposite, and it has been produced in the lab)."
    },
    {
      q: "An electron and a positron, each of mass 9.11 × 10⁻³¹ kg, annihilate while at rest. Using c = 3 × 10⁸ m/s, what is the total energy released?",
      options: ["8.2 × 10⁻¹⁴ J","3.3 × 10⁻¹³ J","1.8 × 10⁻³⁰ J","1.64 × 10⁻¹³ J"],
      ans: "1.64 × 10⁻¹³ J",
      reason: "E = 2mc² = 2 × 9.11 × 10⁻³¹ × (3 × 10⁸)² = 1.64 × 10⁻¹³ J (≈ 1.02 MeV). 8.2 × 10⁻¹⁴ J is only one particle's mc²; 1.8 × 10⁻³⁰ J forgets c²."
    },
    {
      q: "A proton and an antiproton collide at very high energy and annihilate. Which statement is correct?",
      options: ["Only a single photon can be produced","Part of the released energy can appear as new subatomic particles such as pions","No new particles can form; all the mass becomes only heat","The products must have total charge +2 e"],
      ans: "Part of the released energy can appear as new subatomic particles such as pions",
      reason: "In annihilation, mass-energy is conserved. The products can be photons or, if energy allows, new particles such as pions. Total charge is zero (+1 − 1), and momentum conservation forbids a single photon."
    },
    {
      q: "Which pair of particles is emitted in β⁺ decay?",
      options: ["A positron and an electron antineutrino","A positron and an electron neutrino","An electron and an electron neutrino","An electron and an electron antineutrino"],
      ans: "A positron and an electron neutrino",
      reason: "β⁺ decay (proton → neutron) emits a positron and an electron neutrino; β⁻ decay emits an electron and an electron antineutrino."
    },

    // ---- MCQs from the FBISE HSSC-I Physics model question paper (Section A), placed by chapter ----
    {
      q: "During β⁻ decay, a neutron within a nucleus transforms into which of the following sets of particles?",
      options: ["proton + electron + anti-neutrino","proton + positron + neutrino","electron + gamma rays","neutron + proton"],
      ans: "proton + electron + anti-neutrino",
      reason: "n → p + e⁻ + ν̄. Charge is conserved (0 = +1 − 1 + 0) and lepton number is conserved (0 = +1 − 1 for the electron and anti-neutrino)."
    },
    {
      q: "Which statement best compares a quark and an anti-quark of the same flavour?",
      options: ["Both have the same electric charge but opposite masses","Both have opposite electric charges but the same mass","Both have the same charge and mass but different colours","They are identical in every way"],
      ans: "Both have opposite electric charges but the same mass",
      reason: "An antiparticle has the same mass as its particle but opposite charge (and opposite other quantum numbers). For example, the up quark has charge +2/3 e and the anti-up quark has charge −2/3 e."
    },
    {
      q: "Which elementary particle serves as the force carrier for electromagnetic interactions?",
      options: ["Gluon","Photon","Z-boson","W-boson"],
      ans: "Photon",
      reason: "The photon is the gauge boson of the electromagnetic force. Gluons carry the strong force, and W and Z bosons carry the weak force."
    },
    {
      q: "Alpha particles are emitted with discrete energies, whereas beta particles are emitted with a continuous range of energies because:",
      options: ["neutrino shares the energy in alpha decay","neutrino/anti-neutrino shares the energy in beta decay","anti-neutrino shares the energy in alpha decay","alpha particles are bosons"],
      ans: "neutrino/anti-neutrino shares the energy in beta decay",
      reason: "Alpha decay is a two-body process, so the energy is fixed. Beta decay is a three-body process: the available energy is shared in varying proportions between the electron and the anti-neutrino, so the beta energies form a continuous spectrum."
    },
    {
      q: "In electron–positron annihilation, why are at least two photons produced instead of just one?",
      options: ["To conserve electric charge","To conserve mass","To conserve linear momentum","To conserve lepton number"],
      ans: "To conserve linear momentum",
      reason: "For an electron and positron at rest the total momentum is zero. A single photon always carries momentum E/c, so one photon would violate momentum conservation. Two photons going in opposite directions give a total momentum of zero."
    },
    {
      q: "Both electrons and neutrinos are classified as leptons because:",
      options: ["they experience the strong nuclear force","they do not experience the strong nuclear force","they are made up of quarks","they are made up of anti-quarks"],
      ans: "they do not experience the strong nuclear force",
      reason: "Leptons are elementary particles that do not take part in the strong interaction (they have no colour charge). Quarks do."
    },
    {
      q: "<div class=\"stimulus\">Inside a 'high-velocity' research chamber, physicists observe two different subatomic interactions. They note the following:<br>System: quarks bound inside a proton → interaction mechanism: exchange of gluons.<br>System: electrons in the beam → interaction mechanism: exchange of photons.<svg viewBox=\"0 0 320 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"160\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Interaction mechanisms observed</text><text x=\"80\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Quarks in a proton</text><text x=\"240\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Electrons in the beam</text><line x1=\"35\" y1=\"60\" x2=\"125\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"35\" y1=\"130\" x2=\"125\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"50.0,92.0 53.0,92.5 55.7,93.8 57.8,95.7 59.0,98.0 59.3,100.3 58.7,102.2 57.5,103.5 56.0,104.0 54.5,103.5 53.3,102.2 52.7,100.3 53.0,98.0 54.2,95.7 56.3,93.8 59.0,92.5 62.0,92.0 65.0,92.5 67.7,93.8 69.8,95.7 71.0,98.0 71.3,100.3 70.7,102.2 69.5,103.5 68.0,104.0 66.5,103.5 65.3,102.2 64.7,100.3 65.0,98.0 66.2,95.7 68.3,93.8 71.0,92.5 74.0,92.0 77.0,92.5 79.7,93.8 81.8,95.7 83.0,98.0 83.3,100.3 82.7,102.2 81.5,103.5 80.0,104.0 78.5,103.5 77.3,102.2 76.7,100.3 77.0,98.0 78.2,95.7 80.3,93.8 83.0,92.5 86.0,92.0 89.0,92.5 91.7,93.8 93.8,95.7 95.0,98.0 95.3,100.3 94.7,102.2 93.5,103.5 92.0,104.0 90.5,103.5 89.3,102.2 88.7,100.3 89.0,98.0 90.2,95.7 92.3,93.8 95.0,92.5 98.0,92.0 101.0,92.5 103.7,93.8 105.8,95.7 107.0,98.0 107.3,100.3 106.7,102.2 105.5,103.5 104.0,104.0 102.5,103.5 101.3,102.2 100.7,100.3 101.0,98.0 102.2,95.7 104.3,93.8 107.0,92.5 110.0,92.0\" fill=\"none\" stroke=\"#2a8a4a\" stroke-width=\"1.8\"/><text x=\"80\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of gluon</text><line x1=\"195\" y1=\"60\" x2=\"285\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"195\" y1=\"130\" x2=\"285\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"210.0,95.0 211.0,97.5 212.0,99.3 213.0,100.0 214.0,99.3 215.0,97.5 216.0,95.0 217.0,92.5 218.0,90.7 219.0,90.0 220.0,90.7 221.0,92.5 222.0,95.0 223.0,97.5 224.0,99.3 225.0,100.0 226.0,99.3 227.0,97.5 228.0,95.0 229.0,92.5 230.0,90.7 231.0,90.0 232.0,90.7 233.0,92.5 234.0,95.0 235.0,97.5 236.0,99.3 237.0,100.0 238.0,99.3 239.0,97.5 240.0,95.0 241.0,92.5 242.0,90.7 243.0,90.0 244.0,90.7 245.0,92.5 246.0,95.0 247.0,97.5 248.0,99.3 249.0,100.0 250.0,99.3 251.0,97.5 252.0,95.0 253.0,92.5 254.0,90.7 255.0,90.0 256.0,90.7 257.0,92.5 258.0,95.0 259.0,97.5 260.0,99.3 261.0,100.0 262.0,99.3 263.0,97.5 264.0,95.0 265.0,92.5 266.0,90.7 267.0,90.0 268.0,90.7 269.0,92.5 270.0,95.0\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"1.8\"/><text x=\"240\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of photon</text><text x=\"35\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"35\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"195\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text><text x=\"195\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text></svg></div>Which fundamental force is responsible for the exchange of gluons between quarks?",
      options: ["Electromagnetic force","Weak nuclear force","Strong force","Gravitational force"],
      ans: "Strong force",
      reason: "Gluons are the carriers of the strong force, which binds quarks together inside protons, neutrons and other hadrons."
    },
    {
      q: "<div class=\"stimulus\">Inside a 'high-velocity' research chamber, physicists observe two different subatomic interactions. They note the following:<br>System: quarks bound inside a proton → interaction mechanism: exchange of gluons.<br>System: electrons in the beam → interaction mechanism: exchange of photons.<svg viewBox=\"0 0 320 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"160\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Interaction mechanisms observed</text><text x=\"80\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Quarks in a proton</text><text x=\"240\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Electrons in the beam</text><line x1=\"35\" y1=\"60\" x2=\"125\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"35\" y1=\"130\" x2=\"125\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"50.0,92.0 53.0,92.5 55.7,93.8 57.8,95.7 59.0,98.0 59.3,100.3 58.7,102.2 57.5,103.5 56.0,104.0 54.5,103.5 53.3,102.2 52.7,100.3 53.0,98.0 54.2,95.7 56.3,93.8 59.0,92.5 62.0,92.0 65.0,92.5 67.7,93.8 69.8,95.7 71.0,98.0 71.3,100.3 70.7,102.2 69.5,103.5 68.0,104.0 66.5,103.5 65.3,102.2 64.7,100.3 65.0,98.0 66.2,95.7 68.3,93.8 71.0,92.5 74.0,92.0 77.0,92.5 79.7,93.8 81.8,95.7 83.0,98.0 83.3,100.3 82.7,102.2 81.5,103.5 80.0,104.0 78.5,103.5 77.3,102.2 76.7,100.3 77.0,98.0 78.2,95.7 80.3,93.8 83.0,92.5 86.0,92.0 89.0,92.5 91.7,93.8 93.8,95.7 95.0,98.0 95.3,100.3 94.7,102.2 93.5,103.5 92.0,104.0 90.5,103.5 89.3,102.2 88.7,100.3 89.0,98.0 90.2,95.7 92.3,93.8 95.0,92.5 98.0,92.0 101.0,92.5 103.7,93.8 105.8,95.7 107.0,98.0 107.3,100.3 106.7,102.2 105.5,103.5 104.0,104.0 102.5,103.5 101.3,102.2 100.7,100.3 101.0,98.0 102.2,95.7 104.3,93.8 107.0,92.5 110.0,92.0\" fill=\"none\" stroke=\"#2a8a4a\" stroke-width=\"1.8\"/><text x=\"80\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of gluon</text><line x1=\"195\" y1=\"60\" x2=\"285\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"195\" y1=\"130\" x2=\"285\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"210.0,95.0 211.0,97.5 212.0,99.3 213.0,100.0 214.0,99.3 215.0,97.5 216.0,95.0 217.0,92.5 218.0,90.7 219.0,90.0 220.0,90.7 221.0,92.5 222.0,95.0 223.0,97.5 224.0,99.3 225.0,100.0 226.0,99.3 227.0,97.5 228.0,95.0 229.0,92.5 230.0,90.7 231.0,90.0 232.0,90.7 233.0,92.5 234.0,95.0 235.0,97.5 236.0,99.3 237.0,100.0 238.0,99.3 239.0,97.5 240.0,95.0 241.0,92.5 242.0,90.7 243.0,90.0 244.0,90.7 245.0,92.5 246.0,95.0 247.0,97.5 248.0,99.3 249.0,100.0 250.0,99.3 251.0,97.5 252.0,95.0 253.0,92.5 254.0,90.7 255.0,90.0 256.0,90.7 257.0,92.5 258.0,95.0 259.0,97.5 260.0,99.3 261.0,100.0 262.0,99.3 263.0,97.5 264.0,95.0 265.0,92.5 266.0,90.7 267.0,90.0 268.0,90.7 269.0,92.5 270.0,95.0\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"1.8\"/><text x=\"240\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of photon</text><text x=\"35\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"35\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"195\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text><text x=\"195\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text></svg></div>The exchange of photons between electrons mediates which type of interaction?",
      options: ["Strong interaction","Electromagnetic interaction","Gravitational interaction","Beta decay interaction"],
      ans: "Electromagnetic interaction",
      reason: "Photons are the carriers of the electromagnetic force; two electrons repel each other by exchanging photons."
    },
    {
      q: "<div class=\"stimulus\">Inside a 'high-velocity' research chamber, physicists observe two different subatomic interactions. They note the following:<br>System: quarks bound inside a proton → interaction mechanism: exchange of gluons.<br>System: electrons in the beam → interaction mechanism: exchange of photons.<svg viewBox=\"0 0 320 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"160\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Interaction mechanisms observed</text><text x=\"80\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Quarks in a proton</text><text x=\"240\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Electrons in the beam</text><line x1=\"35\" y1=\"60\" x2=\"125\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"35\" y1=\"130\" x2=\"125\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"50.0,92.0 53.0,92.5 55.7,93.8 57.8,95.7 59.0,98.0 59.3,100.3 58.7,102.2 57.5,103.5 56.0,104.0 54.5,103.5 53.3,102.2 52.7,100.3 53.0,98.0 54.2,95.7 56.3,93.8 59.0,92.5 62.0,92.0 65.0,92.5 67.7,93.8 69.8,95.7 71.0,98.0 71.3,100.3 70.7,102.2 69.5,103.5 68.0,104.0 66.5,103.5 65.3,102.2 64.7,100.3 65.0,98.0 66.2,95.7 68.3,93.8 71.0,92.5 74.0,92.0 77.0,92.5 79.7,93.8 81.8,95.7 83.0,98.0 83.3,100.3 82.7,102.2 81.5,103.5 80.0,104.0 78.5,103.5 77.3,102.2 76.7,100.3 77.0,98.0 78.2,95.7 80.3,93.8 83.0,92.5 86.0,92.0 89.0,92.5 91.7,93.8 93.8,95.7 95.0,98.0 95.3,100.3 94.7,102.2 93.5,103.5 92.0,104.0 90.5,103.5 89.3,102.2 88.7,100.3 89.0,98.0 90.2,95.7 92.3,93.8 95.0,92.5 98.0,92.0 101.0,92.5 103.7,93.8 105.8,95.7 107.0,98.0 107.3,100.3 106.7,102.2 105.5,103.5 104.0,104.0 102.5,103.5 101.3,102.2 100.7,100.3 101.0,98.0 102.2,95.7 104.3,93.8 107.0,92.5 110.0,92.0\" fill=\"none\" stroke=\"#2a8a4a\" stroke-width=\"1.8\"/><text x=\"80\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of gluon</text><line x1=\"195\" y1=\"60\" x2=\"285\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"195\" y1=\"130\" x2=\"285\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"210.0,95.0 211.0,97.5 212.0,99.3 213.0,100.0 214.0,99.3 215.0,97.5 216.0,95.0 217.0,92.5 218.0,90.7 219.0,90.0 220.0,90.7 221.0,92.5 222.0,95.0 223.0,97.5 224.0,99.3 225.0,100.0 226.0,99.3 227.0,97.5 228.0,95.0 229.0,92.5 230.0,90.7 231.0,90.0 232.0,90.7 233.0,92.5 234.0,95.0 235.0,97.5 236.0,99.3 237.0,100.0 238.0,99.3 239.0,97.5 240.0,95.0 241.0,92.5 242.0,90.7 243.0,90.0 244.0,90.7 245.0,92.5 246.0,95.0 247.0,97.5 248.0,99.3 249.0,100.0 250.0,99.3 251.0,97.5 252.0,95.0 253.0,92.5 254.0,90.7 255.0,90.0 256.0,90.7 257.0,92.5 258.0,95.0 259.0,97.5 260.0,99.3 261.0,100.0 262.0,99.3 263.0,97.5 264.0,95.0 265.0,92.5 266.0,90.7 267.0,90.0 268.0,90.7 269.0,92.5 270.0,95.0\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"1.8\"/><text x=\"240\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of photon</text><text x=\"35\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"35\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"195\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text><text x=\"195\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text></svg></div>In particle physics, gluons and photons are both called force-carrying particles. They are generally categorized as:",
      options: ["leptons","hadrons","gauge bosons","fermions"],
      ans: "gauge bosons",
      reason: "Force carriers have integer spin and are called gauge bosons. Leptons and quarks are fermions, and hadrons are composite particles made of quarks."
    },
    {
      q: "<div class=\"stimulus\">Inside a 'high-velocity' research chamber, physicists observe two different subatomic interactions. They note the following:<br>System: quarks bound inside a proton → interaction mechanism: exchange of gluons.<br>System: electrons in the beam → interaction mechanism: exchange of photons.<svg viewBox=\"0 0 320 170\" style=\"width:100%;max-width:330px;height:auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"160\" y=\"14\" text-anchor=\"middle\" font-size=\"12\" font-weight=\"normal\" fill=\"#222\">Interaction mechanisms observed</text><text x=\"80\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Quarks in a proton</text><text x=\"240\" y=\"34\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">Electrons in the beam</text><line x1=\"35\" y1=\"60\" x2=\"125\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"35\" y1=\"130\" x2=\"125\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"50.0,92.0 53.0,92.5 55.7,93.8 57.8,95.7 59.0,98.0 59.3,100.3 58.7,102.2 57.5,103.5 56.0,104.0 54.5,103.5 53.3,102.2 52.7,100.3 53.0,98.0 54.2,95.7 56.3,93.8 59.0,92.5 62.0,92.0 65.0,92.5 67.7,93.8 69.8,95.7 71.0,98.0 71.3,100.3 70.7,102.2 69.5,103.5 68.0,104.0 66.5,103.5 65.3,102.2 64.7,100.3 65.0,98.0 66.2,95.7 68.3,93.8 71.0,92.5 74.0,92.0 77.0,92.5 79.7,93.8 81.8,95.7 83.0,98.0 83.3,100.3 82.7,102.2 81.5,103.5 80.0,104.0 78.5,103.5 77.3,102.2 76.7,100.3 77.0,98.0 78.2,95.7 80.3,93.8 83.0,92.5 86.0,92.0 89.0,92.5 91.7,93.8 93.8,95.7 95.0,98.0 95.3,100.3 94.7,102.2 93.5,103.5 92.0,104.0 90.5,103.5 89.3,102.2 88.7,100.3 89.0,98.0 90.2,95.7 92.3,93.8 95.0,92.5 98.0,92.0 101.0,92.5 103.7,93.8 105.8,95.7 107.0,98.0 107.3,100.3 106.7,102.2 105.5,103.5 104.0,104.0 102.5,103.5 101.3,102.2 100.7,100.3 101.0,98.0 102.2,95.7 104.3,93.8 107.0,92.5 110.0,92.0\" fill=\"none\" stroke=\"#2a8a4a\" stroke-width=\"1.8\"/><text x=\"80\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of gluon</text><line x1=\"195\" y1=\"60\" x2=\"285\" y2=\"60\" stroke=\"#222\" stroke-width=\"2.5\"/><line x1=\"195\" y1=\"130\" x2=\"285\" y2=\"130\" stroke=\"#222\" stroke-width=\"2.5\"/><polyline points=\"210.0,95.0 211.0,97.5 212.0,99.3 213.0,100.0 214.0,99.3 215.0,97.5 216.0,95.0 217.0,92.5 218.0,90.7 219.0,90.0 220.0,90.7 221.0,92.5 222.0,95.0 223.0,97.5 224.0,99.3 225.0,100.0 226.0,99.3 227.0,97.5 228.0,95.0 229.0,92.5 230.0,90.7 231.0,90.0 232.0,90.7 233.0,92.5 234.0,95.0 235.0,97.5 236.0,99.3 237.0,100.0 238.0,99.3 239.0,97.5 240.0,95.0 241.0,92.5 242.0,90.7 243.0,90.0 244.0,90.7 245.0,92.5 246.0,95.0 247.0,97.5 248.0,99.3 249.0,100.0 250.0,99.3 251.0,97.5 252.0,95.0 253.0,92.5 254.0,90.7 255.0,90.0 256.0,90.7 257.0,92.5 258.0,95.0 259.0,97.5 260.0,99.3 261.0,100.0 262.0,99.3 263.0,97.5 264.0,95.0 265.0,92.5 266.0,90.7 267.0,90.0 268.0,90.7 269.0,92.5 270.0,95.0\" fill=\"none\" stroke=\"#c0392b\" stroke-width=\"1.8\"/><text x=\"240\" y=\"155\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">exchange of photon</text><text x=\"35\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"35\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">q</text><text x=\"195\" y=\"56\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text><text x=\"195\" y=\"126\" text-anchor=\"middle\" font-size=\"11\" font-weight=\"normal\" fill=\"#222\">e⁻</text></svg></div>Why do quarks exchange gluons whereas electrons do not?",
      options: ["electrons are negatively charged particles and repel gluons","gluons only interact with particles having colour charge, and quarks possess colour charge","gluons decay before reaching electrons","gluons only interact with leptons"],
      ans: "gluons only interact with particles having colour charge, and quarks possess colour charge",
      reason: "Gluons couple to colour charge. Quarks carry colour and so feel the strong force, but electrons (leptons) carry no colour charge, so gluons do not act on them."
    }
    ];
  }
});
