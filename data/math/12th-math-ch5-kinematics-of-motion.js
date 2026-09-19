// Class 12 Math -- Chapter 5: Kinematics of Motion in a Straight Line
// Converted from the 200-question Class 12 MCQ bank (chapters 4-5), with
// short explanations added for every question.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch5",
  label: "Chapter 5: Kinematics of Motion in a Straight Line",
  order: 5,
  questions: function () {
    return [
      {
        q: "A quantity that has magnitude only is called a:",
        options: ["vector", "scalar", "tensor", "matrix"],
        ans: "scalar",
        reason: "A scalar is defined as a quantity possessing magnitude alone, with no associated direction."
      },
      {
        q: "A quantity that has both magnitude and direction is called a:",
        options: ["scalar", "vector", "constant", "coefficient"],
        ans: "vector",
        reason: "A vector is defined as a quantity possessing both magnitude and direction."
      },
      {
        q: "Which of the following is a scalar quantity?",
        options: ["displacement", "velocity", "distance", "acceleration"],
        ans: "distance",
        reason: "Distance measures only how much ground is covered, with no direction attached, making it a scalar."
      },
      {
        q: "Which of the following is a vector quantity?",
        options: ["distance", "speed", "time", "displacement"],
        ans: "displacement",
        reason: "Displacement specifies both how far and in what direction, making it a vector."
      },
      {
        q: "Distance is a scalar quantity because it:",
        options: ["depends on direction", "describes only how much path is covered, regardless of direction", "is always negative", "always equals the displacement"],
        ans: "describes only how much path is covered, regardless of direction",
        reason: "Distance simply totals the path length travelled, ignoring any change in direction."
      },
      {
        q: "A body travels 3 km due north and then 4 km due east. The total distance covered is:",
        options: ["3 km", "4 km", "7 km", "5 km"],
        ans: "7 km",
        reason: "Total distance is the sum of the path lengths travelled, regardless of direction: \\(3+4=7\\) km."
      },
      {
        q: "For the same body as in the previous question, the magnitude of the displacement is:",
        options: ["7 km", "5 km", "3 km", "4 km"],
        ans: "5 km",
        reason: "Displacement is the straight-line distance from start to end, found via the Pythagorean theorem: \\(\\sqrt{3^2+4^2}=5\\) km."
      },
      {
        q: "Speed is defined as:",
        options: ["the rate of change of displacement", "the rate of change of distance with time, regardless of direction", "the rate of change of velocity", "the total change in position"],
        ans: "the rate of change of distance with time, regardless of direction",
        reason: "Speed is defined as the rate of change of distance with time, without regard to direction."
      },
      {
        q: "Velocity is defined as:",
        options: ["the rate of change of distance", "the rate of change of displacement with respect to time", "the rate of change of acceleration", "the total path length covered"],
        ans: "the rate of change of displacement with respect to time",
        reason: "Velocity is defined as the rate of change of displacement with respect to time."
      },
      {
        q: "Which of the following pairs consists of two vector quantities?",
        options: ["mass, time", "velocity, acceleration", "distance, speed", "time, speed"],
        ans: "velocity, acceleration",
        reason: "Both velocity and acceleration have direction as well as magnitude, making them the vector pair here."
      },
      {
        q: "\"A car moves at 50 km/h due west\" describes the car's:",
        options: ["speed only", "velocity", "distance", "displacement only"],
        ans: "velocity",
        reason: "Specifying both a speed and a direction describes velocity, not just speed."
      },
      {
        q: "If an object moves along a curved path from point \\(A\\) to point \\(B\\), its displacement is represented by:",
        options: ["the length of the curved path", "the straight line segment \\(\\overrightarrow{AB}\\)", "twice the curved path", "always zero"],
        ans: "the straight line segment \\(\\overrightarrow{AB}\\)",
        reason: "Displacement is always the straight-line vector from the initial to the final point, regardless of the actual path taken."
      },
      {
        q: "Which of the following statements is always true?",
        options: ["distance \\(<\\) magnitude of displacement", "distance \\(\\ge\\) magnitude of displacement", "distance = displacement always", "displacement is always positive"],
        ans: "distance \\(\\ge\\) magnitude of displacement",
        reason: "The straight-line displacement can never exceed the actual path length travelled, so distance is always at least as large."
      },
      {
        q: "Weight is an example of a:",
        options: ["scalar quantity", "vector quantity", "neither scalar nor vector", "dimensionless quantity"],
        ans: "vector quantity",
        reason: "Weight is a force, and force has direction (acting downward), making it a vector quantity."
      },
      {
        q: "Acceleration is defined as the rate of change of:",
        options: ["distance with respect to time", "displacement with respect to time", "velocity with respect to time", "speed with respect to distance"],
        ans: "velocity with respect to time",
        reason: "Acceleration is by definition the rate of change of velocity with respect to time."
      },
      {
        q: "On a displacement-time graph, the independent variable (time) is plotted along the:",
        options: ["\\(y\\)-axis", "\\(x\\)-axis", "both axes", "neither axis"],
        ans: "\\(x\\)-axis",
        reason: "By convention, the independent variable (time) is plotted along the horizontal x-axis."
      },
      {
        q: "On a displacement-time graph, the slope of the line represents the object's:",
        options: ["acceleration", "velocity", "distance", "time"],
        ans: "velocity",
        reason: "The slope of a displacement-time graph gives the rate of change of displacement, i.e. velocity."
      },
      {
        q: "For uniform motion, the displacement-time graph is:",
        options: ["a parabola", "a straight line with non-zero slope", "a horizontal line", "always through the origin"],
        ans: "a straight line with non-zero slope",
        reason: "Constant velocity produces a constant rate of change of displacement, i.e. a straight line with nonzero slope."
      },
      {
        q: "A positive slope on a displacement-time graph indicates that the object is:",
        options: ["moving in the positive direction", "at rest", "moving in the negative direction", "accelerating uniformly"],
        ans: "moving in the positive direction",
        reason: "A positive slope means displacement is increasing with time, indicating motion in the positive direction."
      },
      {
        q: "A negative slope on a displacement-time graph indicates that the object is:",
        options: ["speeding up", "moving in the negative direction (returning towards the origin)", "at rest", "undergoing undefined motion"],
        ans: "moving in the negative direction (returning towards the origin)",
        reason: "A negative slope means displacement is decreasing with time, indicating motion back toward (or past) the origin."
      },
      {
        q: "A horizontal line on a displacement-time graph indicates that the object is:",
        options: ["moving with constant velocity", "at rest (displacement is not changing)", "accelerating uniformly", "moving with increasing speed"],
        ans: "at rest (displacement is not changing)",
        reason: "A horizontal line means displacement isn't changing with time, so the object is at rest."
      },
      {
        q: "If a displacement-time graph is curved and becoming steeper with time, the object's velocity is:",
        options: ["constant", "decreasing", "increasing", "zero"],
        ans: "increasing",
        reason: "An increasing slope over time on a displacement-time graph means the object's velocity is increasing."
      },
      {
        q: "On a displacement-time graph, which axis carries the dependent quantity?",
        options: ["the \\(x\\)-axis (time)", "the \\(y\\)-axis (displacement)", "neither", "both equally"],
        ans: "the \\(y\\)-axis (displacement)",
        reason: "Displacement, the quantity being measured as time varies, is the dependent variable plotted on the y-axis."
      },
      {
        q: "On a distance-time graph, two straight segments \\(AB\\) and \\(CD\\) both have positive slope, but \\(AB\\) is steeper than \\(CD\\). This means:",
        options: ["the speed during \\(AB\\) is greater than during \\(CD\\)", "the speed during \\(AB\\) is less than during \\(CD\\)", "the speeds are equal", "no conclusion can be drawn"],
        ans: "the speed during \\(AB\\) is greater than during \\(CD\\)",
        reason: "A steeper slope on a distance-time graph corresponds to a greater rate of change of distance, i.e. greater speed."
      },
      {
        q: "The average velocity over a time interval, read from a displacement-time graph, is calculated as:",
        options: ["the slope of the tangent at a single point", "\\(\\dfrac{\\text{change in displacement}}{\\text{change in time}}\\) over that interval", "the area under the graph", "the \\(y\\)-intercept"],
        ans: "\\(\\dfrac{\\text{change in displacement}}{\\text{change in time}}\\) over that interval",
        reason: "Average velocity over an interval is defined as the total change in displacement divided by the elapsed time."
      },
      {
        q: "A moving object has displacement 0 m, 2 m, 4 m, 4 m, 4 m at times 0, 2, 4, 6, 8 seconds respectively. The average velocity between \\(t=4\\) s and \\(t=8\\) s is:",
        options: ["0 m/s", "1 m/s", "2 m/s", "4 m/s"],
        ans: "0 m/s",
        reason: "Displacement stays at 4 m from \\(t=4\\) to \\(t=8\\), so the change is zero, giving average velocity 0."
      },
      {
        q: "Using the data of the previous question, the average velocity for the first 4 seconds is:",
        options: ["0.5 m/s", "1 m/s", "2 m/s", "4 m/s"],
        ans: "1 m/s",
        reason: "Displacement changes from 0 to 4 m over 4 s, giving average velocity \\(4/4=1\\) m/s."
      },
      {
        q: "The instantaneous velocity at a point on a displacement-time graph is given by:",
        options: ["the average slope of the whole graph", "the slope of the tangent to the curve at that point", "the \\(y\\)-intercept", "the area under the curve up to that point"],
        ans: "the slope of the tangent to the curve at that point",
        reason: "Instantaneous velocity is defined as the slope of the tangent line to the displacement-time curve at that instant."
      },
      {
        q: "On a velocity-time graph, the slope of the line represents:",
        options: ["displacement", "distance", "acceleration", "time"],
        ans: "acceleration",
        reason: "The slope of a velocity-time graph gives the rate of change of velocity, i.e. acceleration."
      },
      {
        q: "The area between a velocity-time graph and the time axis, over an interval, represents:",
        options: ["acceleration", "the displacement of the particle in that interval", "the average speed only", "jerk"],
        ans: "the displacement of the particle in that interval",
        reason: "The area between a velocity-time graph and the time axis represents the net displacement over that interval."
      },
      {
        q: "If a velocity-time graph is a horizontal line, the acceleration is:",
        options: ["increasing", "zero", "negative", "undefined"],
        ans: "zero",
        reason: "A horizontal velocity-time graph means velocity isn't changing, so acceleration is zero."
      },
      {
        q: "A velocity-time graph with a positive, non-zero, constant slope represents:",
        options: ["uniform velocity", "uniform (positive) acceleration", "uniform deceleration", "zero acceleration"],
        ans: "uniform (positive) acceleration",
        reason: "A constant positive slope on a velocity-time graph means velocity is increasing at a steady rate, i.e. uniform acceleration."
      },
      {
        q: "A velocity-time graph sloping downward (negative slope) represents:",
        options: ["increasing positive acceleration", "negative acceleration (retardation)", "constant velocity", "zero velocity throughout"],
        ans: "negative acceleration (retardation)",
        reason: "A downward-sloping velocity-time graph means velocity is steadily decreasing, i.e. negative acceleration (retardation)."
      },
      {
        q: "For two points on a velocity-time graph, with velocities \\(v_1\\) at time \\(t_1\\) and \\(v_2\\) at time \\(t_2\\), the acceleration equals:",
        options: ["\\(\\dfrac{v_2-v_1}{t_2-t_1}\\)", "\\(\\dfrac{v_2+v_1}{t_2+t_1}\\)", "\\(v_2t_2-v_1t_1\\)", "\\(\\dfrac{t_2-t_1}{v_2-v_1}\\)"],
        ans: "\\(\\dfrac{v_2-v_1}{t_2-t_1}\\)",
        reason: "Acceleration is the rate of change of velocity, computed as the change in velocity over the change in time."
      },
      {
        q: "A particle's velocity is recorded as \\(v=2\\) m/s at \\(t=0\\) and \\(v=8\\) m/s at \\(t=2\\) s. Its acceleration over this interval is:",
        options: ["2 m/s²", "3 m/s²", "4 m/s²", "6 m/s²"],
        ans: "3 m/s²",
        reason: "\\(a=\\dfrac{8-2}{2-0}=3\\) m/s²."
      },
      {
        q: "An athlete accelerates uniformly from rest to 9 m/s in 4 s. His acceleration is:",
        options: ["2 m/s²", "2.25 m/s²", "2.5 m/s²", "3 m/s²"],
        ans: "2.25 m/s²",
        reason: "\\(a=\\dfrac{9-0}4=2.25\\) m/s²."
      },
      {
        q: "The velocity of 9 m/s in the previous question is then maintained for a further 8 s. The total displacement of the athlete over the 12 s is:",
        options: ["72 m", "90 m", "108 m", "36 m"],
        ans: "90 m",
        reason: "The accelerating phase covers \\(\\frac12(9)(4)=18\\) m, and the constant-speed phase covers \\(9\\times8=72\\) m, totalling 90 m."
      },
      {
        q: "A cyclist accelerates uniformly from rest to 8 m/s in 20 s. His acceleration is:",
        options: ["0.2 m/s²", "0.4 m/s²", "0.8 m/s²", "1.6 m/s²"],
        ans: "0.4 m/s²",
        reason: "\\(a=\\dfrac{8-0}{20}=0.4\\) m/s²."
      },
      {
        q: "The cyclist above then travels at a constant 8 m/s for 40 s. The displacement covered in this phase is:",
        options: ["160 m", "240 m", "320 m", "400 m"],
        ans: "320 m",
        reason: "At constant velocity, displacement is simply speed times time: \\(8\\times40=320\\) m."
      },
      {
        q: "The cyclist then decelerates uniformly from 8 m/s to rest in 15 s. His deceleration is approximately:",
        options: ["0.4 m/s²", "0.53 m/s²", "0.6 m/s²", "8 m/s²"],
        ans: "0.53 m/s²",
        reason: "\\(a=\\dfrac{0-8}{15}\\approx-0.53\\) m/s²."
      },
      {
        q: "On a velocity-time graph, if the graph lies below the time axis, the displacement in that interval is:",
        options: ["positive", "negative (in the opposite direction)", "always zero", "undefined"],
        ans: "negative (in the opposite direction)",
        reason: "A velocity-time graph below the axis means the velocity (and hence displacement) is in the negative direction."
      },
      {
        q: "A particle moves with the velocity given in the table below.<br><table><tr><th>\\(t\\) (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr><tr><th>\\(v\\) (m/s)</th><td>2</td><td>5</td><td>8</td><td>8</td><td>8</td><td>4</td><td>0</td></tr></table>The acceleration between \\(t=0\\) s and \\(t=2\\) s is:",
        options: ["2 m/s²", "3 m/s²", "4 m/s²", "6 m/s²"],
        ans: "3 m/s²",
        reason: "\\(a=\\dfrac{8-2}{2-0}=3\\) m/s²."
      },
      {
        q: "Using the same table as the previous question (\\(t=0\\) to \\(6\\) s, \\(v=2,5,8,8,8,4,0\\) m/s), the retardation (deceleration) of the particle between \\(t=4\\) s and \\(t=6\\) s is:",
        options: ["2 m/s²", "3 m/s²", "4 m/s²", "8 m/s²"],
        ans: "4 m/s²",
        reason: "\\(a=\\dfrac{0-8}{6-4}=-4\\) m/s², so the magnitude of the retardation is 4 m/s²."
      },
      {
        q: "A boy is standing beside a railway track. A train travelling at 22 m/s takes 5 s to pass him. The length of the train is:",
        options: ["27 m", "110 m", "90 m", "22 m"],
        ans: "110 m",
        reason: "Length = speed × time = \\(22\\times5=110\\) m."
      },
      {
        q: "Which of the following statements about a velocity-time graph is FALSE?",
        options: ["its slope gives the acceleration", "the area under it gives the displacement", "a horizontal line means constant velocity", "a horizontal line always means zero velocity"],
        ans: "a horizontal line always means zero velocity",
        reason: "A horizontal line on a velocity-time graph means constant velocity, which need not be zero — so this statement is false."
      },
      {
        q: "If a velocity-time graph shows a constant negative slope throughout the motion, the motion is:",
        options: ["uniformly accelerated in the positive direction", "uniformly decelerated (uniform negative acceleration)", "a body permanently at rest", "oscillatory motion"],
        ans: "uniformly decelerated (uniform negative acceleration)",
        reason: "A constant negative slope throughout means velocity decreases steadily, i.e. uniform negative acceleration (deceleration)."
      },
      {
        q: "If \\(S(t)\\) is the displacement of a particle at time \\(t\\), its velocity is given by:",
        options: ["\\(v=\\displaystyle\\int S\\,dt\\)", "\\(v=\\dfrac{dS}{dt}\\)", "\\(v=S\\cdot t\\)", "\\(v=\\dfrac{d^2S}{dt^2}\\)"],
        ans: "\\(v=\\dfrac{dS}{dt}\\)",
        reason: "Velocity is by definition the first derivative of displacement with respect to time."
      },
      {
        q: "Acceleration is related to displacement \\(S(t)\\) by:",
        options: ["\\(a=\\dfrac{dS}{dt}\\)", "\\(a=\\dfrac{d^2S}{dt^2}\\)", "\\(a=\\displaystyle\\int S\\,dt\\)", "\\(a=S^2\\)"],
        ans: "\\(a=\\dfrac{d^2S}{dt^2}\\)",
        reason: "Acceleration is by definition the second derivative of displacement with respect to time."
      },
      {
        q: "If \\(S(t)=t^2+2\\cos t\\), then the velocity \\(v(t)\\) is:",
        options: ["\\(2t-2\\sin t\\)", "\\(2t+2\\sin t\\)", "\\(t^2-2\\sin t\\)", "\\(2t-2\\cos t\\)"],
        ans: "\\(2t-2\\sin t\\)",
        reason: "Differentiating term by term: \\(\\frac{d}{dt}(t^2)=2t\\) and \\(\\frac{d}{dt}(2\\cos t)=-2\\sin t\\)."
      },
      {
        q: "If \\(v(t)=2t+2\\cos t\\), the acceleration \\(a(t)\\) is:",
        options: ["\\(2-2\\sin t\\)", "\\(2+2\\sin t\\)", "\\(2\\sin t\\)", "\\(2t-2\\sin t\\)"],
        ans: "\\(2-2\\sin t\\)",
        reason: "Differentiating term by term: \\(\\frac{d}{dt}(2t)=2\\) and \\(\\frac{d}{dt}(2\\cos t)=-2\\sin t\\)."
      },
      {
        q: "If the position function is \\(S(t)=\\sqrt t+\\ln(t+1)\\), the velocity function \\(v(t)\\) is:",
        options: ["\\(\\dfrac1{2\\sqrt t}+\\dfrac1{t+1}\\)", "\\(\\dfrac1{2\\sqrt t}-\\dfrac1{t+1}\\)", "\\(\\sqrt t+\\dfrac1{t+1}\\)", "\\(\\dfrac1{2\\sqrt t}+t+1\\)"],
        ans: "\\(\\dfrac1{2\\sqrt t}+\\dfrac1{t+1}\\)",
        reason: "Differentiating: \\(\\frac{d}{dt}\\sqrt t=\\frac1{2\\sqrt t}\\) and \\(\\frac{d}{dt}\\ln(t+1)=\\frac1{t+1}\\)."
      },
      {
        q: "If \\(v(t)=3t^2+4\\) and \\(S(0)=0\\), then the displacement function \\(S(t)\\) is:",
        options: ["\\(t^3+4t\\)", "\\(t^3+4t+1\\)", "\\(\\dfrac32t^3+4t\\)", "\\(t^2+4t\\)"],
        ans: "\\(t^3+4t\\)",
        reason: "Integrating \\(3t^2+4\\) gives \\(t^3+4t+C\\); applying \\(S(0)=0\\) gives \\(C=0\\)."
      },
      {
        q: "If the acceleration \\(a(t)=6t\\) and \\(v(0)=0\\), then the velocity function \\(v(t)\\) is:",
        options: ["\\(3t^2\\)", "\\(6t^2\\)", "\\(3t\\)", "\\(t^3\\)"],
        ans: "\\(3t^2\\)",
        reason: "Integrating \\(6t\\) gives \\(3t^2+C\\); applying \\(v(0)=0\\) gives \\(C=0\\)."
      },
      {
        q: "If \\(a(t)=24t+\\cos t\\) and \\(v(0)=0\\), then \\(v(t)\\) is:",
        options: ["\\(12t^2+\\sin t\\)", "\\(12t^2-\\sin t\\)", "\\(24t^2+\\sin t\\)", "\\(12t^2+\\cos t\\)"],
        ans: "\\(12t^2+\\sin t\\)",
        reason: "Integrating term by term gives \\(12t^2+\\sin t+C\\); applying \\(v(0)=0\\) gives \\(C=0\\)."
      },
      {
        q: "Continuing the previous question, if \\(S\\left(\\dfrac{\\pi}2\\right)=\\dfrac{\\pi^3}2\\), then \\(S(t)\\) is:",
        options: ["\\(4t^3-\\cos t\\)", "\\(4t^3+\\cos t\\)", "\\(4t^3-\\cos t+1\\)", "\\(12t^3-\\cos t\\)"],
        ans: "\\(4t^3-\\cos t\\)",
        reason: "Integrating \\(v(t)\\) gives \\(S(t)=4t^3-\\cos t+C\\); applying the given condition shows \\(C=0\\)."
      },
      {
        q: "For \\(S(t)=\\sqrt t+\\ln(t+1)\\), the velocity at \\(t=1\\) is:",
        options: ["1 m/s", "0.5 m/s", "1.5 m/s", "2 m/s"],
        ans: "1 m/s",
        reason: "At \\(t=1\\): \\(\\frac1{2\\sqrt1}+\\frac1{1+1}=\\frac12+\\frac12=1\\) m/s."
      },
      {
        q: "For the same function as above, the velocity at \\(t=4\\) is:",
        options: ["\\(\\dfrac9{20}\\) m/s", "\\(\\dfrac14\\) m/s", "\\(\\dfrac15\\) m/s", "\\(\\dfrac12\\) m/s"],
        ans: "\\(\\dfrac9{20}\\) m/s",
        reason: "At \\(t=4\\): \\(\\frac1{2\\sqrt4}+\\frac1{4+1}=\\frac14+\\frac15=\\frac9{20}\\) m/s."
      },
      {
        q: "If displacement \\(S(t)=4t^3-\\cos t\\), then the acceleration \\(a(t)\\) is:",
        options: ["\\(24t+\\cos t\\)", "\\(24t-\\cos t\\)", "\\(12t+\\sin t\\)", "\\(24t^2+\\cos t\\)"],
        ans: "\\(24t+\\cos t\\)",
        reason: "Differentiating twice: \\(v=12t^2+\\sin t\\), then \\(a=24t+\\cos t\\)."
      },
      {
        q: "A particle has zero velocity at \\(t=0\\) and a constant acceleration \\(g\\). Its velocity function is:",
        options: ["\\(v=gt\\)", "\\(v=g\\)", "\\(v=\\dfrac12gt^2\\)", "\\(v=gt^2\\)"],
        ans: "\\(v=gt\\)",
        reason: "Integrating the constant acceleration g with \\(v(0)=0\\) gives \\(v=gt\\)."
      },
      {
        q: "For motion with constant acceleration \\(a\\), initial velocity \\(u\\), and time \\(t\\), the final velocity \\(v\\) is given by:",
        options: ["\\(v=u+at\\)", "\\(v=u-at\\)", "\\(v=at\\)", "\\(v=u+\\dfrac12at^2\\)"],
        ans: "\\(v=u+at\\)",
        reason: "This is the standard first equation of motion for constant acceleration."
      },
      {
        q: "The displacement \\(S\\) of a particle moving with constant acceleration is given by:",
        options: ["\\(S=ut+\\dfrac12at^2\\)", "\\(S=ut-at\\)", "\\(S=vt\\)", "\\(S=\\dfrac12vt^2\\)"],
        ans: "\\(S=ut+\\dfrac12at^2\\)",
        reason: "This is the standard second equation of motion for constant acceleration."
      },
      {
        q: "The equation relating \\(v,u,a\\), and \\(S\\) (without time) is:",
        options: ["\\(v^2=u^2+2aS\\)", "\\(v=u^2+2aS\\)", "\\(v^2=u+2aS\\)", "\\(v^2=u^2+aS\\)"],
        ans: "\\(v^2=u^2+2aS\\)",
        reason: "This is the standard third equation of motion, eliminating time."
      },
      {
        q: "A stone is projected vertically upward with velocity 10 m/s. Taking \\(g=9.8\\) m/s² downward, the velocity function is:",
        options: ["\\(v=-gt+10\\)", "\\(v=gt+10\\)", "\\(v=-gt-10\\)", "\\(v=10t-g\\)"],
        ans: "\\(v=-gt+10\\)",
        reason: "Taking upward as positive, the constant downward acceleration gives \\(v=u-gt=10-gt\\), i.e. \\(v=-gt+10\\)."
      },
      {
        q: "Using the previous question, the displacement (height) function of the stone is:",
        options: ["\\(S=-\\dfrac12gt^2+10t\\)", "\\(S=\\dfrac12gt^2+10t\\)", "\\(S=-gt^2+10t\\)", "\\(S=10t^2-\\dfrac12g\\)"],
        ans: "\\(S=-\\dfrac12gt^2+10t\\)",
        reason: "Integrating \\(v=-gt+10\\) with \\(S(0)=0\\) gives \\(S=-\\frac12gt^2+10t\\)."
      },
      {
        q: "For the stone above, the time taken to reach maximum height (where \\(v=0\\)) is approximately:",
        options: ["1.02 s", "2.04 s", "0.51 s", "10 s"],
        ans: "1.02 s",
        reason: "Setting \\(v=0\\) gives \\(t=\\dfrac{10}{9.8}\\approx1.02\\) s."
      },
      {
        q: "The maximum height attained by the stone above is approximately:",
        options: ["5.10 m", "10.2 m", "9.8 m", "1.02 m"],
        ans: "5.10 m",
        reason: "Substituting \\(t\\approx1.02\\) s into \\(S=-4.9t^2+10t\\) gives approximately 5.10 m."
      },
      {
        q: "A ball is thrown downward from a tower of height 20 m (with \\(g=9.8\\) m/s²). Using \\(S=\\dfrac12gt^2\\), the time taken to reach the ground is approximately:",
        options: ["2.02 s", "1.43 s", "4.08 s", "0.51 s"],
        ans: "2.02 s",
        reason: "Solving \\(20=\\frac12(9.8)t^2\\) gives \\(t^2\\approx4.08\\), so \\(t\\approx2.02\\) s."
      },
      {
        q: "Using the previous question, the velocity with which the ball hits the ground is approximately:",
        options: ["19.8 m/s", "9.8 m/s", "20 m/s", "4.9 m/s"],
        ans: "19.8 m/s",
        reason: "\\(v=gt=9.8\\times2.02\\approx19.8\\) m/s."
      },
      {
        q: "A particle \\(P\\) moves along the \\(x\\)-axis with acceleration \\(a=(4t-8)\\) m/s² and initial velocity \\(v(0)=6\\) m/s. Its velocity function is:",
        options: ["\\(2t^2-8t+6\\)", "\\(2t^2-8t\\)", "\\(4t^2-8t+6\\)", "\\(2t^2+8t+6\\)"],
        ans: "\\(2t^2-8t+6\\)",
        reason: "Integrating \\(4t-8\\) gives \\(2t^2-8t+C\\); applying \\(v(0)=6\\) gives \\(C=6\\)."
      },
      {
        q: "Using the previous question, the times at which \\(P\\) is instantaneously at rest are:",
        options: ["\\(t=1,3\\)", "\\(t=2,3\\)", "\\(t=1,4\\)", "\\(t=0,4\\)"],
        ans: "\\(t=1,3\\)",
        reason: "Solving \\(2t^2-8t+6=0\\) simplifies to \\((t-1)(t-3)=0\\), giving \\(t=1\\) and \\(t=3\\)."
      },
      {
        q: "A car starts from rest with acceleration \\(a=4-\\dfrac12t\\) for \\(0\\le t\\le8\\). Its velocity function is:",
        options: ["\\(4t-\\dfrac{t^2}4\\)", "\\(4t-\\dfrac{t^2}2\\)", "\\(4t+\\dfrac{t^2}4\\)", "\\(2t^2-\\dfrac{t^2}4\\)"],
        ans: "\\(4t-\\dfrac{t^2}4\\)",
        reason: "Integrating \\(4-\\frac{t}2\\) gives \\(4t-\\frac{t^2}4+C\\); starting from rest gives \\(C=0\\)."
      },
      {
        q: "Using the previous question, the car attains its maximum speed (when \\(a=0\\)) at:",
        options: ["\\(t=8\\) s", "\\(t=4\\) s", "\\(t=2\\) s", "\\(t=16\\) s"],
        ans: "\\(t=8\\) s",
        reason: "Setting \\(a=4-\\frac{t}2=0\\) gives \\(t=8\\) s."
      },
      {
        q: "A particle moves with constant acceleration \\(a\\), initial velocity \\(v_i\\), and after time \\(t\\) attains velocity \\(v_f\\) while covering displacement \\(S\\). The correct relation is:",
        options: ["\\(2aS=v_f^2-v_i^2\\)", "\\(2aS=v_f-v_i\\)", "\\(aS=v_f^2-v_i^2\\)", "\\(2aS=v_f^2+v_i^2\\)"],
        ans: "\\(2aS=v_f^2-v_i^2\\)",
        reason: "This is precisely the third equation of motion, rearranged to isolate \\(2aS\\)."
      },
      {
        q: "A car travels 180 km in 3 hours. Its average speed for the journey is:",
        options: ["40 km/h", "50 km/h", "60 km/h", "90 km/h"],
        ans: "60 km/h",
        reason: "Average speed is total distance over total time: \\(180/3=60\\) km/h."
      },
      {
        q: "A cyclist travels 4.0 km along a main road in 10.0 minutes, then 1.0 km along a side street in 5.0 minutes. The correct average speed (in km/min) for the whole journey is:",
        options: ["\\(\\dfrac{5.0}{15.0}=0.33\\) km/min", "\\(\\dfrac{15.0}{5.0}=3.0\\) km/min", "\\(4.0+1.0=5.0\\) km/min", "\\(4.0\\times1.0=4.0\\) km/min"],
        ans: "\\(\\dfrac{5.0}{15.0}=0.33\\) km/min",
        reason: "Average speed is total distance divided by total time: \\(\\frac{4.0+1.0}{10.0+5.0}=\\frac{5.0}{15.0}\\approx0.33\\) km/min."
      },
      {
        q: "For a projectile under gravity alone (no air resistance), the acceleration vector is:",
        options: ["directed horizontally", "directed vertically downward, and constant in magnitude", "zero throughout the motion", "increasing with height"],
        ans: "directed vertically downward, and constant in magnitude",
        reason: "Under gravity alone, the acceleration is always directed vertically downward with constant magnitude g."
      },
      {
        q: "A vector valued function \\(\\mathbf r(t)\\) is a function whose domain is a subset of the real numbers and whose range is:",
        options: ["a set of real numbers", "a set of vectors", "a set of scalars", "a matrix"],
        ans: "a set of vectors",
        reason: "By definition, a vector-valued function maps real numbers to vectors, so its range is a set of vectors."
      },
      {
        q: "The general three-dimensional vector valued function is written as:",
        options: ["\\(\\mathbf r(t)=x(t)+y(t)+z(t)\\)", "\\(\\mathbf r(t)=x(t)\\hat i+y(t)\\hat j+z(t)\\hat k\\)", "\\(\\mathbf r(t)=x\\hat i\\cdot y\\hat j\\cdot z\\hat k\\)", "\\(\\mathbf r(t)=x(t)y(t)z(t)\\)"],
        ans: "\\(\\mathbf r(t)=x(t)\\hat i+y(t)\\hat j+z(t)\\hat k\\)",
        reason: "This is the standard component form of a three-dimensional vector-valued function."
      },
      {
        q: "The domain of a vector-valued function \\(\\mathbf r(t)=x(t)\\hat i+y(t)\\hat j+z(t)\\hat k\\) is:",
        options: ["the union of the domains of \\(x(t),y(t),z(t)\\)", "the intersection of the domains of \\(x(t),y(t),z(t)\\)", "always all real numbers", "always empty"],
        ans: "the intersection of the domains of \\(x(t),y(t),z(t)\\)",
        reason: "All three components must be simultaneously defined, so the domain is the intersection of their individual domains."
      },
      {
        q: "Find the domain of \\(\\mathbf r(t)=\\ln|t-1|\\,\\hat i+e^t\\,\\hat j+\\sqrt t\\,\\hat k\\).",
        options: ["\\([0,1)\\cup(1,\\infty)\\)", "\\((-\\infty,1)\\cup(1,\\infty)\\)", "\\([0,\\infty)\\)", "\\((0,1)\\)"],
        ans: "\\([0,1)\\cup(1,\\infty)\\)",
        reason: "The square root requires \\(t\\ge0\\) and the logarithm excludes \\(t=1\\); intersecting these domains gives \\([0,1)\\cup(1,\\infty)\\)."
      },
      {
        q: "A function that maps a vector to a single real number is called a:",
        options: ["vector valued function", "scalar valued function", "matrix function", "domain function"],
        ans: "scalar valued function",
        reason: "A function producing a single real-number output (rather than a vector) is called a scalar-valued function."
      },
      {
        q: "The magnitude of the vector valued function \\(\\mathbf r(t)=3\\hat i+t\\hat j+(\\sin t)\\hat k\\) is:",
        options: ["\\(\\sqrt{9+t^2+\\sin^2t}\\)", "\\(9+t^2+\\sin^2t\\)", "\\(3+t+\\sin t\\)", "\\(\\sqrt{3+t+\\sin t}\\)"],
        ans: "\\(\\sqrt{9+t^2+\\sin^2t}\\)",
        reason: "The magnitude of a vector is the square root of the sum of the squares of its components: \\(\\sqrt{9+t^2+\\sin^2t}\\)."
      },
      {
        q: "The derivative of the vector valued function \\(\\mathbf f(t)=f_1(t)\\hat i+f_2(t)\\hat j+f_3(t)\\hat k\\) is obtained by:",
        options: ["differentiating only \\(f_1(t)\\)", "differentiating each component function separately", "multiplying all components together and differentiating", "integrating each component"],
        ans: "differentiating each component function separately",
        reason: "A vector-valued function is differentiated componentwise, treating each unit-vector direction independently."
      },
      {
        q: "Find the derivative of \\(\\mathbf f(t)=3t^2\\hat i+8t\\hat j-\\dfrac1{t^3}\\hat k\\).",
        options: ["\\(6t\\hat i+8\\hat j+\\dfrac3{t^4}\\hat k\\)", "\\(6t\\hat i+8\\hat j-\\dfrac3{t^4}\\hat k\\)", "\\(3t\\hat i+8\\hat j+\\dfrac3{t^4}\\hat k\\)", "\\(6t^2\\hat i+8t\\hat j+\\dfrac3{t^4}\\hat k\\)"],
        ans: "\\(6t\\hat i+8\\hat j+\\dfrac3{t^4}\\hat k\\)",
        reason: "Differentiating each component: \\(\\frac{d}{dt}(3t^2)=6t\\), \\(\\frac{d}{dt}(8t)=8\\), and \\(\\frac{d}{dt}(-t^{-3})=3t^{-4}\\)."
      },
      {
        q: "If \\(\\mathbf r(t)\\) represents the position of a particle, its first derivative \\(\\mathbf r'(t)\\) represents:",
        options: ["acceleration", "velocity", "displacement", "speed only"],
        ans: "velocity",
        reason: "The first derivative of a position vector with respect to time gives the velocity vector."
      },
      {
        q: "The second derivative \\(\\mathbf r''(t)\\) of a position vector function represents:",
        options: ["velocity", "acceleration", "jerk only", "displacement"],
        ans: "acceleration",
        reason: "The second derivative of a position vector with respect to time gives the acceleration vector."
      },
      {
        q: "Find the velocity of \\(\\mathbf f(t)=2t^2\\hat i+3t^4\\hat j-t^3\\hat k\\) at \\(t=1\\).",
        options: ["\\(4\\hat i+12\\hat j-3\\hat k\\)", "\\(4\\hat i+12\\hat j+3\\hat k\\)", "\\(2\\hat i+12\\hat j-3\\hat k\\)", "\\(4\\hat i+4\\hat j-3\\hat k\\)"],
        ans: "\\(4\\hat i+12\\hat j-3\\hat k\\)",
        reason: "Differentiating gives \\(4t\\hat i+12t^3\\hat j-3t^2\\hat k\\); substituting \\(t=1\\) gives \\(4\\hat i+12\\hat j-3\\hat k\\)."
      },
      {
        q: "Using the previous question, the acceleration of the function at \\(t=1\\) is:",
        options: ["\\(4\\hat i+36\\hat j-6\\hat k\\)", "\\(4\\hat i+12\\hat j-6\\hat k\\)", "\\(4\\hat i+36\\hat j+6\\hat k\\)", "\\(8\\hat i+36\\hat j-6\\hat k\\)"],
        ans: "\\(4\\hat i+36\\hat j-6\\hat k\\)",
        reason: "Differentiating the velocity again gives \\(4\\hat i+36t^2\\hat j-6t\\hat k\\); at \\(t=1\\) this is \\(4\\hat i+36\\hat j-6\\hat k\\)."
      },
      {
        q: "If \\(\\mathbf r(t)=(\\cos t)\\hat i+(\\sin t)\\hat j+3t\\hat k\\) represents the position of a particle, the motion projected onto the \\(x\\)-\\(y\\) plane is:",
        options: ["linear", "circular", "exponential", "the particle is at rest"],
        ans: "circular",
        reason: "The x and y components, \\(\\cos t\\) and \\(\\sin t\\), trace out a unit circle as t varies, regardless of the z-component."
      },
      {
        q: "Which of the following is TRUE regarding vector-valued functions used in kinematics?",
        options: ["they can only describe motion along a straight line", "they can be used to calculate the velocity, acceleration, arc length and curvature of a trajectory", "they cannot be differentiated", "their range is always a scalar"],
        ans: "they can be used to calculate the velocity, acceleration, arc length and curvature of a trajectory",
        reason: "Vector-valued functions in kinematics support computing velocity, acceleration, arc length, and curvature of a trajectory in space, not just straight-line motion."
      },
      {
        q: "Which of the following quantities is a vector?",
        options: ["charge", "mass", "momentum", "time"],
        ans: "momentum",
        reason: "Momentum is mass times velocity, and since velocity is a vector, momentum is also a vector."
      },
      {
        q: "Which of the following is a scalar quantity?",
        options: ["displacement", "weight", "force", "work"],
        ans: "work",
        reason: "Work is defined as a dot product of force and displacement, yielding a single number with no direction — a scalar."
      },
      {
        q: "Which of the following can be used to determine the magnitude of velocity?",
        options: ["area under an acceleration-time graph", "area under a velocity-time graph", "gradient of an acceleration-time graph", "gradient of a velocity-time graph"],
        ans: "area under an acceleration-time graph",
        reason: "The area under an acceleration-time graph gives the change in velocity, which (starting from rest) equals the velocity's magnitude directly."
      },
      {
        q: "The winner of a 400 metre race must have the greatest:",
        options: ["acceleration", "average speed", "instantaneous speed", "maximum speed"],
        ans: "average speed",
        reason: "The race is won by whoever covers the fixed distance in the least time, i.e. whoever has the greatest average speed."
      },
      {
        q: "A car travels 100 km. The journey takes two hours. The highest speed of the car is 80 km/h, and the lowest speed 40 km/h. What is the average speed for the journey?",
        options: ["40 km/h", "50 km/h", "60 km/h", "120 km/h"],
        ans: "50 km/h",
        reason: "Average speed depends only on total distance and total time: \\(100/2=50\\) km/h, regardless of how speed varied during the trip."
      },
      {
        q: "A car travels 6.0 km along a main road in 6.0 minutes. It then travels 2 km along a minor road in 6.0 minutes. Which calculation of average speed for the whole journey is correct?",
        options: ["\\(\\dfrac{8.0}{12.0}=0.67\\) km/min", "\\(\\dfrac{12.0}{8.0}=1.5\\) km/min", "\\(8.0+12.0=20\\) km/min", "\\(8.0\\times12.0=96\\) km/min"],
        ans: "\\(\\dfrac{8.0}{12.0}=0.67\\) km/min",
        reason: "Average speed is total distance over total time: \\(\\frac{6.0+2.0}{6.0+6.0}=\\frac{8.0}{12.0}\\approx0.67\\) km/min."
      },
      {
        q: "Which person is experiencing an acceleration?",
        options: ["a driver of a car that is braking to stop at a traffic light", "a passenger in a train that is stationary at a railway station", "a shopper in a large store ascending an escalator at a uniform speed", "a skydiver falling at a constant speed towards the Earth"],
        ans: "a driver of a car that is braking to stop at a traffic light",
        reason: "Braking means velocity is changing (decreasing), which by definition is an acceleration; the other scenarios all involve constant or zero velocity."
      },
      {
        q: "A child is standing on the platform of a station. A train travelling at 30 m/s takes 3.0 s to pass the child. What is the length of the train?",
        options: ["10 m", "27 m", "30 m", "90 m"],
        ans: "90 m",
        reason: "Length = speed × time = \\(30\\times3.0=90\\) m."
      },
      {
        q: "A heavy object is released near the surface of the earth and falls freely (air resistance is ignored). Which statement about the acceleration of the object due to gravity is correct?",
        options: ["the acceleration depends on the mass of the object", "the acceleration depends on the volume of the object", "the acceleration is constant", "the acceleration is initially zero and increases as the object falls"],
        ans: "the acceleration is constant",
        reason: "In free fall (ignoring air resistance), all objects experience the same constant gravitational acceleration, regardless of mass."
      },
      {
        q: "If \\(\\mathbf r(t)=(t+1)\\hat i+(t^2-1)\\hat j+5t\\hat k\\) is the position of a particle, the value of \\(\\mathbf r(2)\\) is:",
        options: ["\\(3\\hat i+3\\hat j+10\\hat k\\)", "\\(3\\hat i+4\\hat j+10\\hat k\\)", "\\(2\\hat i+3\\hat j+10\\hat k\\)", "\\(3\\hat i+3\\hat j+5\\hat k\\)"],
        ans: "\\(3\\hat i+3\\hat j+10\\hat k\\)",
        reason: "Substituting \\(t=2\\): \\((2+1)\\hat i+(2^2-1)\\hat j+5(2)\\hat k=3\\hat i+3\\hat j+10\\hat k\\)."
      },
      {
        stimulus: "<table><tr><th>Phase</th><th>Description</th></tr><tr><td>1</td><td>Accelerates uniformly from rest to 20 m/s in 5 s</td></tr><tr><td>2</td><td>Travels at constant 20 m/s for 10 s</td></tr><tr><td>3</td><td>Decelerates uniformly to rest in 4 s</td></tr></table>",
        q: "The acceleration during Phase 1 is:",
        options: ["4 m/s²", "5 m/s²", "2 m/s²", "20 m/s²"],
        ans: "4 m/s²",
        reason: "\\(a=\\dfrac{20-0}5=4\\) m/s²."
      },
      {
        stimulus: "<table><tr><th>Phase</th><th>Description</th></tr><tr><td>1</td><td>Accelerates uniformly from rest to 20 m/s in 5 s</td></tr><tr><td>2</td><td>Travels at constant 20 m/s for 10 s</td></tr><tr><td>3</td><td>Decelerates uniformly to rest in 4 s</td></tr></table>",
        q: "The displacement covered during Phase 1 is:",
        options: ["50 m", "100 m", "20 m", "40 m"],
        ans: "50 m",
        reason: "Using the average of initial and final velocity, displacement \\(=\\frac{0+20}2\\times5=50\\) m."
      },
      {
        stimulus: "<table><tr><th>Phase</th><th>Description</th></tr><tr><td>1</td><td>Accelerates uniformly from rest to 20 m/s in 5 s</td></tr><tr><td>2</td><td>Travels at constant 20 m/s for 10 s</td></tr><tr><td>3</td><td>Decelerates uniformly to rest in 4 s</td></tr></table>",
        q: "The displacement covered during Phase 2 is:",
        options: ["200 m", "100 m", "20 m", "300 m"],
        ans: "200 m",
        reason: "At constant velocity, displacement is simply speed × time: \\(20\\times10=200\\) m."
      },
      {
        stimulus: "<table><tr><th>Phase</th><th>Description</th></tr><tr><td>1</td><td>Accelerates uniformly from rest to 20 m/s in 5 s</td></tr><tr><td>2</td><td>Travels at constant 20 m/s for 10 s</td></tr><tr><td>3</td><td>Decelerates uniformly to rest in 4 s</td></tr></table>",
        q: "The deceleration during Phase 3, and the total displacement over all three phases, are respectively:",
        options: ["5 m/s² and 290 m", "4 m/s² and 250 m", "5 m/s² and 250 m", "4 m/s² and 290 m"],
        ans: "5 m/s² and 290 m",
        reason: "The deceleration is \\(\\frac{20-0}4=5\\) m/s², and Phase 3 adds \\(\\frac{20+0}2\\times4=40\\) m, giving a total of \\(50+200+40=290\\) m."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Initial upward velocity \\(u\\)</td><td>20 m/s</td></tr><tr><td>\\(g\\)</td><td>9.8 m/s² (downward)</td></tr></table>A ball is thrown vertically upward with the given initial velocity.",
        q: "The velocity function (taking upward as positive) is:",
        options: ["\\(v=20-9.8t\\)", "\\(v=20+9.8t\\)", "\\(v=9.8t-20\\)", "\\(v=-9.8t\\)"],
        ans: "\\(v=20-9.8t\\)",
        reason: "With upward positive and gravity acting downward, \\(v=u-gt=20-9.8t\\)."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Initial upward velocity \\(u\\)</td><td>20 m/s</td></tr><tr><td>\\(g\\)</td><td>9.8 m/s² (downward)</td></tr></table>A ball is thrown vertically upward with the given initial velocity.",
        q: "The time taken to reach maximum height is approximately:",
        options: ["2.04 s", "1.02 s", "4.08 s", "0.51 s"],
        ans: "2.04 s",
        reason: "Setting \\(v=0\\) gives \\(t=\\dfrac{20}{9.8}\\approx2.04\\) s."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Initial upward velocity \\(u\\)</td><td>20 m/s</td></tr><tr><td>\\(g\\)</td><td>9.8 m/s² (downward)</td></tr></table>A ball is thrown vertically upward with the given initial velocity.",
        q: "The maximum height reached is approximately:",
        options: ["20.4 m", "10.2 m", "40.8 m", "9.8 m"],
        ans: "20.4 m",
        reason: "Substituting \\(t\\approx2.04\\)s into \\(S=20t-4.9t^2\\) gives approximately 20.4 m."
      },
      {
        stimulus: "<table><tr><th>Quantity</th><th>Value</th></tr><tr><td>Initial upward velocity \\(u\\)</td><td>20 m/s</td></tr><tr><td>\\(g\\)</td><td>9.8 m/s² (downward)</td></tr></table>A ball is thrown vertically upward with the given initial velocity.",
        q: "By symmetry of projectile motion, the total time for the ball to return to its starting point is approximately:",
        options: ["4.08 s", "2.04 s", "8.16 s", "1.02 s"],
        ans: "4.08 s",
        reason: "By the symmetry of projectile motion, the total time up and back down is twice the time to reach the peak: \\(2\\times2.04\\approx4.08\\) s."
      },
      {
        stimulus: "<table><tr><th>Position vector</th><th>Value</th></tr><tr><td>\\(\\mathbf r(t)\\)</td><td>\\(t^2\\hat i+(2t+1)\\hat j-4t\\hat k\\)</td></tr></table>",
        q: "The velocity vector \\(\\mathbf r'(t)\\) is:",
        options: ["\\(2t\\hat i+2\\hat j-4\\hat k\\)", "\\(2t\\hat i+2\\hat j+4\\hat k\\)", "\\(t\\hat i+2\\hat j-4\\hat k\\)", "\\(2t^2\\hat i+2\\hat j-4\\hat k\\)"],
        ans: "\\(2t\\hat i+2\\hat j-4\\hat k\\)",
        reason: "Differentiating each component: \\(\\frac{d}{dt}(t^2)=2t\\), \\(\\frac{d}{dt}(2t+1)=2\\), \\(\\frac{d}{dt}(-4t)=-4\\)."
      },
      {
        stimulus: "<table><tr><th>Position vector</th><th>Value</th></tr><tr><td>\\(\\mathbf r(t)\\)</td><td>\\(t^2\\hat i+(2t+1)\\hat j-4t\\hat k\\)</td></tr></table>",
        q: "The acceleration vector \\(\\mathbf r''(t)\\) is:",
        options: ["\\(2\\hat i\\)", "\\(2\\hat i+2\\hat j\\)", "\\(0\\)", "\\(2t\\hat i\\)"],
        ans: "\\(2\\hat i\\)",
        reason: "Differentiating the velocity components again: \\(\\frac{d}{dt}(2t)=2\\), and the other two components are already constant, so they vanish."
      },
      {
        stimulus: "<table><tr><th>Position vector</th><th>Value</th></tr><tr><td>\\(\\mathbf r(t)\\)</td><td>\\(t^2\\hat i+(2t+1)\\hat j-4t\\hat k\\)</td></tr></table>",
        q: "The velocity at \\(t=3\\) is:",
        options: ["\\(6\\hat i+2\\hat j-4\\hat k\\)", "\\(9\\hat i+2\\hat j-4\\hat k\\)", "\\(6\\hat i+6\\hat j-4\\hat k\\)", "\\(6\\hat i+2\\hat j-12\\hat k\\)"],
        ans: "\\(6\\hat i+2\\hat j-4\\hat k\\)",
        reason: "Substituting \\(t=3\\) into \\(r'(t)=2t\\hat i+2\\hat j-4\\hat k\\) gives \\(6\\hat i+2\\hat j-4\\hat k\\)."
      },
      {
        stimulus: "<table><tr><th>Position vector</th><th>Value</th></tr><tr><td>\\(\\mathbf r(t)\\)</td><td>\\(t^2\\hat i+(2t+1)\\hat j-4t\\hat k\\)</td></tr></table>",
        q: "The magnitude of the acceleration vector is:",
        options: ["2", "4", "\\(2\\sqrt2\\)", "0"],
        ans: "2",
        reason: "Since the acceleration vector is simply \\(2\\hat i\\), its magnitude is 2."
      }
    ];
  }
});
