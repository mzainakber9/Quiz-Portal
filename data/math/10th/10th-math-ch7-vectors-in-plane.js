// Class 10 Math — Chapter 7: Vectors in Plane
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch7",
  label: "Chapter 7: Vectors in Plane",
  order: 7,
  questions: function () {
    return [
    {
      q: "Which of the following is a scalar quantity?",
      options: ["Force","Velocity","Torque","Speed"],
      ans: "Speed",
      reason: "Speed has magnitude only, so it is a scalar. Force, velocity and torque are vectors."
    },
    {
      q: "Which of the following is a vector quantity?",
      options: ["Distance","Speed","Velocity","Work"],
      ans: "Velocity",
      reason: "Velocity has both magnitude and direction. Distance, speed and work are scalars."
    },
    {
      q: "If \\(\\vec a\\) and \\(\\vec b\\) are position vectors of points \\(A\\) and \\(B\\) respectively, then \\(\\overrightarrow{AB}\\) is:",
      options: ["\\(\\vec b+\\vec a\\)","\\(\\vec a-\\vec b\\)","\\(-\\vec b-\\vec a\\)","\\(\\vec b-\\vec a\\)"],
      ans: "\\(\\vec b-\\vec a\\)",
      reason: "\\(\\overrightarrow{AB}=\\overrightarrow{OB}-\\overrightarrow{OA}=\\vec b-\\vec a\\)."
    },
    {
      q: "Which of the following is NOT a symbol of vector \\(a\\)?",
      options: ["\\(|\\vec a|\\)","\\(\\underline{a}\\)","\\(\\mathbf{a}\\)","\\(\\vec a\\)"],
      ans: "\\(|\\vec a|\\)",
      reason: "\\(|\\vec a|\\) denotes the magnitude of \\(\\vec a\\), not the vector itself."
    },
    {
      q: "If \\(\\overrightarrow{OP}=[-6,7]\\), then \\(-\\overrightarrow{OP}\\) is equal to:",
      options: ["\\([-6,7]\\)","\\([-6,-7]\\)","\\([6,7]\\)","\\([6,-7]\\)"],
      ans: "\\([6,-7]\\)",
      reason: "The negative of a vector reverses both components: \\(-[-6,7]=[6,-7]\\)."
    },
    {
      q: "If \\(\\vec u=-5\\hat{\\imath}+12\\hat{\\jmath}\\), then \\(|\\vec u|\\) is equal to:",
      options: ["17","13","169","7"],
      ans: "13",
      reason: "\\(|\\vec u|=\\sqrt{25+144}=13\\)."
    },
    {
      q: "Given that \\(\\vec u\\) is any vector, which of the following is true?",
      options: ["\\(|-\\vec u|=|\\vec u|\\)","\\(|\\vec u|+|-\\vec u|=0\\)","\\(-|\\vec u|=|\\vec u|\\)","\\(|\\vec u|=0\\)"],
      ans: "\\(|-\\vec u|=|\\vec u|\\)",
      reason: "A vector and its negative have the same length: \\(|-\\vec u|=|\\vec u|\\)."
    },
    {
      q: "The unit vector of \\(\\vec u=6\\hat{\\imath}+10\\hat{\\jmath}-2\\hat{\\jmath}\\) is:",
      options: ["\\(\\dfrac35\\hat{\\imath}+\\dfrac45\\hat{\\jmath}\\)","\\(-\\dfrac35\\hat{\\imath}-\\dfrac45\\hat{\\jmath}\\)","\\(\\dfrac35\\hat{\\imath}-\\dfrac45\\hat{\\jmath}\\)","\\(-\\dfrac35\\hat{\\imath}+\\dfrac45\\hat{\\jmath}\\)"],
      ans: "\\(\\dfrac35\\hat{\\imath}+\\dfrac45\\hat{\\jmath}\\)",
      reason: "\\(\\vec u=6\\hat\\imath+8\\hat\\jmath\\), \\(|\\vec u|=10\\), so the unit vector is \\(\\tfrac35\\hat\\imath+\\tfrac45\\hat\\jmath\\)."
    },
    {
      q: "If \\(\\vec a=\\lambda\\vec b\\), \\(\\vec a=12\\hat{\\imath}-18\\hat{\\jmath}\\) and \\(\\vec b=-2\\hat{\\imath}+3\\hat{\\jmath}\\), then \\(\\lambda\\) is equal to:",
      options: ["\\(-6\\)","6","3","\\(-3\\)"],
      ans: "\\(-6\\)",
      reason: "\\(\\lambda=\\dfrac{12}{-2}=-6\\), and \\(\\dfrac{-18}{3}=-6\\) agrees."
    },
    {
      q: "If \\(\\vec u=[-5x,8]\\) and \\(\\vec v=[10,4y]\\) are equal vectors, then:",
      options: ["\\(x=-2,\\,y=2\\)","\\(x=2,\\,y=2\\)","\\(x=-2,\\,y=-2\\)","\\(x=2,\\,y=-2\\)"],
      ans: "\\(x=-2,\\,y=2\\)",
      reason: "Equal vectors have equal components: \\(-5x=10\\Rightarrow x=-2\\); \\(8=4y\\Rightarrow y=2\\)."
    },
    {
      q: "If \\(\\vec p=[5,-6]\\) and \\(\\vec q=[2,6]\\), then \\(\\vec p-2\\vec q\\) is:",
      options: ["\\([9,18]\\)","\\([1,18]\\)","\\([-9,-18]\\)","\\([1,-18]\\)"],
      ans: "\\([1,-18]\\)",
      reason: "\\(\\vec p-2\\vec q=[5-4,\\ -6-12]=[1,-18]\\)."
    },
    {
      q: "If \\(\\vec u=5\\hat{\\imath}+10\\hat{\\jmath}\\) and \\(\\vec v=4\\hat{\\jmath}\\), then \\(|\\vec u-\\vec v|\\) is:",
      options: ["\\(\\sqrt{61}\\)","\\(-\\sqrt{61}\\)","\\(\\sqrt{123}\\)","\\(\\sqrt{11}\\)"],
      ans: "\\(\\sqrt{61}\\)",
      reason: "\\(\\vec u-\\vec v=5\\hat\\imath+6\\hat\\jmath\\), so \\(|\\vec u-\\vec v|=\\sqrt{25+36}=\\sqrt{61}\\)."
    },
    {
      q: "Which of the following vectors represents a position vector?",
      options: ["\\(\\overrightarrow{PO}\\)","\\(\\overrightarrow{PQ}\\)","\\(\\overrightarrow{OP}\\)","\\(-\\overrightarrow{OP}\\)"],
      ans: "\\(\\overrightarrow{OP}\\)",
      reason: "A position vector starts at the origin: \\(\\overrightarrow{OP}\\)."
    },
    {
      q: "What type of quadrilateral is \\(ABCD\\), if \\(\\overrightarrow{AB}=\\dfrac{2}{3}\\overrightarrow{DC}\\)?",
      options: ["Trapezium","Rhombus","Kite","Rectangle"],
      ans: "Trapezium",
      reason: "\\(\\overrightarrow{AB}=\\tfrac23\\overrightarrow{DC}\\) means \\(AB\\parallel DC\\) but with unequal lengths, so exactly one pair of sides is parallel: a trapezium."
    },
    {
      q: "Given that \\(\\vec p=3\\hat{\\imath}-4\\hat{\\jmath}\\) and \\(\\vec q=-3\\hat{\\imath}-4\\hat{\\jmath}\\):",
      options: ["\\(|\\vec p|=|\\vec q|=3\\)","\\(|\\vec p|\\neq|\\vec q|\\)","\\(|\\vec p|=|\\vec q|=5\\), but \\(\\vec p\\neq\\vec q\\)","\\(\\vec p=\\vec q\\)"],
      ans: "\\(|\\vec p|=|\\vec q|=5\\), but \\(\\vec p\\neq\\vec q\\)",
      reason: "\\(|\\vec p|=|\\vec q|=\\sqrt{9+16}=5\\), but their x-components differ, so \\(\\vec p\\ne\\vec q\\)."
    },
    {
      q: "If \\(\\vec a=2\\hat{\\imath}-4\\hat{\\jmath}\\) and \\(\\vec b=-2\\hat{\\imath}+x\\hat{\\jmath}\\), the value(s) of \\(x\\) if \\(|\\vec a+2\\vec b|=6\\) is/are:",
      options: ["\\(x=-2\\pm2\\sqrt2\\)","\\(x=2\\pm\\sqrt2\\)","\\(x=2\\pm2\\sqrt2\\)","\\(x=4\\pm2\\sqrt2\\)"],
      ans: "\\(x=2\\pm2\\sqrt2\\)",
      reason: "\\(\\vec a+2\\vec b=-2\\hat\\imath+(2x-4)\\hat\\jmath\\). \\(4+(2x-4)^2=36\\Rightarrow(2x-4)^2=32\\Rightarrow x=2\\pm2\\sqrt2\\)."
    },
    {
      q: "In \\(\\triangle OAB\\) with \\(\\overrightarrow{OA}=\\vec a\\), \\(\\overrightarrow{OB}=\\vec b\\), and \\(M\\) the midpoint of \\(OA\\), \\(\\overrightarrow{OM}=\\)",
      options: ["\\(\\dfrac12\\vec a\\)","\\(2\\vec a\\)","\\(\\vec a\\)","\\(\\dfrac12\\vec b\\)"],
      ans: "\\(\\dfrac12\\vec a\\)",
      reason: "\\(M\\) is the midpoint of \\(OA\\), so \\(\\overrightarrow{OM}=\\tfrac12\\vec a\\)."
    },
    {
      q: "In the same triangle, \\(\\overrightarrow{AM}=\\)",
      options: ["\\(\\dfrac12\\vec a\\)","\\(\\dfrac12\\vec b\\)","\\(-\\dfrac12\\vec b\\)","\\(-\\dfrac12\\vec a\\)"],
      ans: "\\(-\\dfrac12\\vec a\\)",
      reason: "\\(\\overrightarrow{AM}=\\overrightarrow{OM}-\\overrightarrow{OA}=\\tfrac12\\vec a-\\vec a=-\\tfrac12\\vec a\\)."
    },
    {
      q: "In the same triangle, \\(\\overrightarrow{BM}=\\)",
      options: ["\\(\\dfrac12\\vec a-\\vec b\\)","\\(\\vec a-\\dfrac12\\vec b\\)","\\(\\vec b-\\dfrac12\\vec a\\)","\\(\\dfrac12\\vec a+\\vec b\\)"],
      ans: "\\(\\dfrac12\\vec a-\\vec b\\)",
      reason: "\\(\\overrightarrow{BM}=\\overrightarrow{OM}-\\overrightarrow{OB}=\\tfrac12\\vec a-\\vec b\\)."
    },
    {
      q: "In the same triangle, \\(\\overrightarrow{OB}+\\overrightarrow{BA}=\\)",
      options: ["\\(\\vec a+\\vec b\\)","\\(\\vec a-\\vec b\\)","\\(\\vec b\\)","\\(\\vec a\\)"],
      ans: "\\(\\vec a\\)",
      reason: "\\(\\overrightarrow{OB}+\\overrightarrow{BA}=\\overrightarrow{OA}=\\vec a\\) (triangle law)."
    },
    {
      q: "Two tractors pull a stuck truck: 250N at \\(50^\\circ\\) and 300N at \\(40^\\circ\\) with the horizontal. The magnitude of the resultant force is approximately:",
      options: ["300 N","548 N","250 N","600 N"],
      ans: "548 N",
      reason: "The angle between the forces is \\(10^\\circ\\). \\(R^2=250^2+300^2+2(250)(300)\\cos10^\\circ\\approx300{,}221\\), so \\(R\\approx548\\) N."
    },
    {
      q: "Two balls are thrown with paths \\(V_1=120\\hat\\imath+12\\hat\\jmath\\) and \\(V_2=90\\hat\\imath-30\\hat\\jmath\\) (in meters). How much farther did the first ball travel than the second?",
      options: ["\\(\\approx94.9\\) m","\\(\\approx14.6\\) m","\\(\\approx120.6\\) m","\\(\\approx25.7\\) m"],
      ans: "\\(\\approx25.7\\) m",
      reason: "\\(|V_1|=\\sqrt{120^2+12^2}\\approx120.6\\) and \\(|V_2|=\\sqrt{90^2+30^2}\\approx94.9\\). Difference \\(\\approx25.7\\) m."
    },
    {
      q: "The distance between the two balls thrown is approximately:",
      options: ["\\(\\approx42\\) m","\\(\\approx30\\) m","\\(\\approx72\\) m","\\(\\approx51.6\\) m"],
      ans: "\\(\\approx51.6\\) m",
      reason: "\\(V_1-V_2=30\\hat\\imath+42\\hat\\jmath\\), whose magnitude is \\(\\sqrt{900+1764}\\approx51.6\\) m."
    },
    {
      q: "Ahmad swims at 6 m/s in still water in a river with a 1.5 m/s current flowing west. His resultant speed swimming due west along the current is:",
      options: ["6 m/s","4.5 m/s","1.5 m/s","7.5 m/s"],
      ans: "7.5 m/s",
      reason: "Swimming with the current the speeds add: \\(6+1.5=7.5\\) m/s."
    },
    {
      q: "His resultant speed swimming due east against the current is:",
      options: ["6 m/s","1.5 m/s","7.5 m/s","4.5 m/s"],
      ans: "4.5 m/s",
      reason: "Swimming against the current the speeds subtract: \\(6-1.5=4.5\\) m/s."
    },
    {
      q: "His resultant speed swimming north across the river is approximately:",
      options: ["6 m/s","4.5 m/s","6.18 m/s","7.5 m/s"],
      ans: "6.18 m/s",
      reason: "Across the river the two velocities are perpendicular: \\(\\sqrt{6^2+1.5^2}=\\sqrt{38.25}\\approx6.18\\) m/s."
    },
    {
      q: "A plane travels north at 150 km/h with a steady 50 km/h wind blowing east. The resultant speed of the plane is approximately:",
      options: ["100 km/h","150 km/h","200 km/h","158.1 km/h"],
      ans: "158.1 km/h",
      reason: "\\(\\sqrt{150^2+50^2}=\\sqrt{25000}\\approx158.1\\) km/h."
    },
    {
      q: "The distance of this plane from its starting point after 10 hours is approximately:",
      options: ["2000 km","1500 km","500 km","1581 km"],
      ans: "1581 km",
      reason: "Distance \\(=158.1\\times10\\approx1581\\) km."
    },
    {
      q: "A quantity having both magnitude and direction is called a:",
      options: ["Determinant","Scalar","Vector","Matrix"],
      ans: "Vector",
      reason: "A quantity with magnitude and direction is a vector."
    },
    {
      q: "A quantity having only magnitude (no direction) is called a:",
      options: ["Unit vector","Vector","Tensor","Scalar"],
      ans: "Scalar",
      reason: "A quantity with magnitude only is a scalar."
    },
    {
      q: "A vector can be represented geometrically as a:",
      options: ["Circle","Straight line without direction","Directed line segment","Point"],
      ans: "Directed line segment",
      reason: "A vector is drawn as a directed line segment."
    },
    {
      q: "The starting point of a directed line segment representing a vector is called its:",
      options: ["Terminal point","Midpoint","Initial point","Origin only"],
      ans: "Initial point",
      reason: "The starting point of the segment is its initial point."
    },
    {
      q: "The endpoint of a directed line segment representing a vector is called its:",
      options: ["Initial point","Vertex","Origin","Terminal point"],
      ans: "Terminal point",
      reason: "The end point of the segment is its terminal point."
    },
    {
      q: "Which of these is an example of a vector quantity?",
      options: ["Temperature","Acceleration","Time","Energy"],
      ans: "Acceleration",
      reason: "Acceleration has direction, so it is a vector. Temperature, time and energy are scalars."
    },
    {
      q: "Which of these is an example of a scalar quantity?",
      options: ["Mass","Acceleration","Displacement","Momentum"],
      ans: "Mass",
      reason: "Mass has no direction, so it is a scalar. The others are vectors."
    },
    {
      q: "Two vectors are said to be equal if they have the same:",
      options: ["Terminal point only","Initial point only","Magnitude only","Magnitude and direction"],
      ans: "Magnitude and direction",
      reason: "Vectors are equal when both magnitude and direction are the same."
    },
    {
      q: "The vector \\(\\overrightarrow{AB}\\) has initial point:",
      options: ["\\(B\\)","The midpoint of \\(AB\\)","\\(A\\)","The origin"],
      ans: "\\(A\\)",
      reason: "In \\(\\overrightarrow{AB}\\) the vector starts at \\(A\\)."
    },
    {
      q: "Which notation denotes the magnitude of vector \\(\\vec u\\)?",
      options: ["\\(\\hat u\\)","\\(\\vec u\\)","\\(|\\vec u|\\)","\\(-\\vec u\\)"],
      ans: "\\(|\\vec u|\\)",
      reason: "\\(|\\vec u|\\) denotes the magnitude of \\(\\vec u\\)."
    },
    {
      q: "A vector with magnitude zero is called the:",
      options: ["Identity vector","Zero (null) vector","Unit vector","Position vector"],
      ans: "Zero (null) vector",
      reason: "A vector of zero magnitude is the zero (null) vector."
    },
    {
      q: "The negative of a vector \\(\\vec u\\) has the same magnitude as \\(\\vec u\\) but:",
      options: ["The same direction","Opposite direction","Double the magnitude","Zero magnitude"],
      ans: "Opposite direction",
      reason: "The negative of a vector has the same length but the opposite direction."
    },
    {
      q: "A position vector of a point \\(P\\) is the vector:",
      options: ["The vector \\(\\overrightarrow{PQ}\\) for any point \\(Q\\)","\\(\\overrightarrow{OP}\\), from the origin \\(O\\) to \\(P\\)","Any vector parallel to \\(OP\\)","\\(\\overrightarrow{PO}\\)"],
      ans: "\\(\\overrightarrow{OP}\\), from the origin \\(O\\) to \\(P\\)",
      reason: "The position vector of \\(P\\) is \\(\\overrightarrow{OP}\\), from the origin to \\(P\\)."
    },
    {
      q: "If \\(A\\) has position vector \\([3,5]\\) and \\(B\\) has position vector \\([7,1]\\), then vector \\(\\overrightarrow{AB}\\) is:",
      options: ["\\([10,6]\\)","\\([4,-4]\\)","\\([4,4]\\)","\\([-4,4]\\)"],
      ans: "\\([4,-4]\\)",
      reason: "\\(\\overrightarrow{AB}=[7-3,\\ 1-5]=[4,-4]\\)."
    },
    {
      q: "Which of the following represents the vector from the origin to point \\(Q\\)?",
      options: ["\\(\\overrightarrow{OQ}\\)","\\(\\overrightarrow{QO}\\)","\\(-\\overrightarrow{OQ}\\)","\\(\\overrightarrow{PQ}\\)"],
      ans: "\\(\\overrightarrow{OQ}\\)",
      reason: "The vector from the origin \\(O\\) to \\(Q\\) is \\(\\overrightarrow{OQ}\\)."
    },
    {
      q: "If \\(\\overrightarrow{AB}=[4,-9]\\), then \\(-\\overrightarrow{AB}\\) is equal to:",
      options: ["\\([-4,9]\\)","\\([4,9]\\)","\\([4,-9]\\)","\\([-4,-9]\\)"],
      ans: "\\([-4,9]\\)",
      reason: "\\(-[4,-9]=[-4,9]\\)."
    },
    {
      q: "A vector \\([x,y]\\) can be written in terms of unit vectors as:",
      options: ["\\(xy(\\hat\\imath+\\hat\\jmath)\\)","\\(x\\hat{\\jmath}+y\\hat{\\imath}\\)","\\(x\\hat{\\imath}+y\\hat{\\jmath}\\)","\\((x+y)\\hat{\\imath}\\)"],
      ans: "\\(x\\hat{\\imath}+y\\hat{\\jmath}\\)",
      reason: "\\([x,y]=x\\hat\\imath+y\\hat\\jmath\\)."
    },
    {
      q: "If \\(\\vec u=[3x,-9]\\) and \\(\\vec v=[12,3y]\\) are equal vectors, then:",
      options: ["\\(x=4,\\,y=3\\)","\\(x=4,\\,y=-3\\)","\\(x=-4,\\,y=3\\)","\\(x=-4,\\,y=-3\\)"],
      ans: "\\(x=4,\\,y=-3\\)",
      reason: "\\(3x=12\\Rightarrow x=4\\); \\(-9=3y\\Rightarrow y=-3\\)."
    },
    {
      q: "If \\(\\vec p=[4,-1]\\) and \\(\\vec q=[3,5]\\), then \\(\\vec p+2\\vec q\\) is:",
      options: ["\\([10,4]\\)","\\([10,-9]\\)","\\([10,9]\\)","\\([-2,9]\\)"],
      ans: "\\([10,9]\\)",
      reason: "\\(\\vec p+2\\vec q=[4+6,\\ -1+10]=[10,9]\\)."
    },
    {
      q: "The position vector of the origin \\(O\\) is:",
      options: ["\\([1,0]\\)","The zero vector \\(\\vec 0\\)","Undefined","\\([1,1]\\)"],
      ans: "The zero vector \\(\\vec 0\\)",
      reason: "The origin has position vector \\(\\vec 0\\) (it is the zero vector)."
    },
    {
      q: "If \\(A\\) has position vector \\(\\vec a=2\\hat{\\imath}+3\\hat{\\jmath}\\) and \\(B\\) has position vector \\(\\vec b=5\\hat{\\imath}-\\hat{\\jmath}\\), then \\(\\overrightarrow{AB}=\\)",
      options: ["\\(3\\hat{\\imath}-4\\hat{\\jmath}\\)","\\(-3\\hat{\\imath}+4\\hat{\\jmath}\\)","\\(7\\hat{\\imath}+2\\hat{\\jmath}\\)","\\(3\\hat{\\imath}+4\\hat{\\jmath}\\)"],
      ans: "\\(3\\hat{\\imath}-4\\hat{\\jmath}\\)",
      reason: "\\(\\overrightarrow{AB}=\\vec b-\\vec a=(5-2)\\hat\\imath+(-1-3)\\hat\\jmath=3\\hat\\imath-4\\hat\\jmath\\)."
    },
    {
      q: "In a rectangular coordinate plane, a vector from the origin to the point \\((x,y)\\) has components:",
      options: ["\\(x\\) and \\(y\\)","Always equal components","Always zero","\\(y\\) and \\(x\\) reversed"],
      ans: "\\(x\\) and \\(y\\)",
      reason: "The vector from the origin to \\((x,y)\\) has components \\(x\\) and \\(y\\)."
    },
    {
      q: "The magnitude of the vector \\(\\vec u=a\\hat{\\imath}+b\\hat{\\jmath}\\) is:",
      options: ["\\(a+b\\)","\\(\\sqrt{a^2+b^2}\\)","\\(a^2+b^2\\)","\\(\\sqrt{a-b}\\)"],
      ans: "\\(\\sqrt{a^2+b^2}\\)",
      reason: "\\(|a\\hat\\imath+b\\hat\\jmath|=\\sqrt{a^2+b^2}\\)."
    },
    {
      q: "If \\(\\vec v=8\\hat{\\imath}-6\\hat{\\jmath}\\), then \\(|\\vec v|\\) is equal to:",
      options: ["2","100","14","10"],
      ans: "10",
      reason: "\\(\\sqrt{64+36}=10\\)."
    },
    {
      q: "If \\(\\vec u=6\\hat{\\imath}+8\\hat{\\jmath}\\), then \\(|\\vec u|=\\)",
      options: ["48","10","14","2"],
      ans: "10",
      reason: "\\(\\sqrt{36+64}=10\\)."
    },
    {
      q: "For any vector \\(\\vec u\\), \\(|\\vec u|+|-\\vec u|\\) equals:",
      options: ["\\(|\\vec u|\\)","Cannot be determined","\\(2|\\vec u|\\)","0"],
      ans: "\\(2|\\vec u|\\)",
      reason: "\\(|-\\vec u|=|\\vec u|\\), so the sum is \\(2|\\vec u|\\)."
    },
    {
      q: "If \\(\\vec u=5\\hat{\\imath}+10\\hat{\\jmath}\\) and \\(\\vec v=4\\hat{\\jmath}\\), then \\(|\\vec u-\\vec v|=\\)",
      options: ["\\(\\sqrt{61}\\)","\\(\\sqrt{123}\\)","\\(-\\sqrt{61}\\)","\\(\\sqrt{11}\\)"],
      ans: "\\(\\sqrt{61}\\)",
      reason: "\\(\\vec u-\\vec v=5\\hat\\imath+6\\hat\\jmath\\), so the magnitude is \\(\\sqrt{61}\\)."
    },
    {
      q: "The magnitude of the zero vector is:",
      options: ["Infinite","1","0","Undefined"],
      ans: "0",
      reason: "The zero vector has magnitude 0."
    },
    {
      q: "Which of the following represents a position vector?",
      options: ["\\(\\overrightarrow{PQ}\\)","\\(\\overrightarrow{PO}\\)","\\(\\overrightarrow{OP}\\)","\\(-\\overrightarrow{OP}\\)"],
      ans: "\\(\\overrightarrow{OP}\\)",
      reason: "A position vector starts at the origin: \\(\\overrightarrow{OP}\\)."
    },
    {
      q: "If \\(\\vec u=8\\hat{\\imath}+15\\hat{\\jmath}\\) and \\(\\vec v=3\\hat{\\jmath}\\), then \\(|\\vec u-\\vec v|\\) is:",
      options: ["\\(4\\sqrt{13}\\)","\\(\\sqrt{89}\\)","\\(\\sqrt{73}\\)","13"],
      ans: "\\(4\\sqrt{13}\\)",
      reason: "\\(\\vec u-\\vec v=8\\hat\\imath+12\\hat\\jmath\\); \\(\\sqrt{64+144}=\\sqrt{208}=4\\sqrt{13}\\)."
    },
    {
      q: "The magnitude of a vector is always:",
      options: ["Negative","A vector itself","An ordered pair","A non-negative real number"],
      ans: "A non-negative real number",
      reason: "Magnitude is a length, so it is a non-negative real number."
    },
    {
      q: "Given \\(\\vec m=5\\hat{\\imath}+12\\hat{\\jmath}\\) and \\(\\vec n=-5\\hat{\\imath}+12\\hat{\\jmath}\\):",
      options: ["\\(|\\vec m|=|\\vec n|=13\\), but \\(\\vec m\\neq\\vec n\\)","\\(|\\vec m|\\neq|\\vec n|\\)","\\(\\vec m=\\vec n\\)","\\(|\\vec m|=|\\vec n|=5\\)"],
      ans: "\\(|\\vec m|=|\\vec n|=13\\), but \\(\\vec m\\neq\\vec n\\)",
      reason: "\\(|\\vec m|=|\\vec n|=\\sqrt{25+144}=13\\), but the x-components have opposite signs, so \\(\\vec m\\ne\\vec n\\)."
    },
    {
      q: "If \\(|\\vec u|=0\\), then \\(\\vec u\\) must be:",
      options: ["A unit vector","Undefined","The zero vector","A position vector"],
      ans: "The zero vector",
      reason: "Only the zero vector has magnitude 0."
    },
    {
      q: "If \\(\\vec a=[2,3]\\) and \\(\\vec b=[1,4]\\), then \\(\\vec a+\\vec b=\\)",
      options: ["\\([3,-1]\\)","\\([3,7]\\)","\\([1,-1]\\)","\\([2,12]\\)"],
      ans: "\\([3,7]\\)",
      reason: "\\([2+1,\\ 3+4]=[3,7]\\)."
    },
    {
      q: "If \\(\\vec a=[5,2]\\) and \\(\\vec b=[3,-1]\\), then \\(\\vec a-\\vec b=\\)",
      options: ["\\([-2,-3]\\)","\\([8,1]\\)","\\([2,-3]\\)","\\([2,3]\\)"],
      ans: "\\([2,3]\\)",
      reason: "\\([5-3,\\ 2-(-1)]=[2,3]\\)."
    },
    {
      q: "If \\(\\vec a=[2,-3]\\), then \\(3\\vec a=\\)",
      options: ["\\([5,0]\\)","\\([6,-9]\\)","\\([2,-9]\\)","\\([6,-3]\\)"],
      ans: "\\([6,-9]\\)",
      reason: "\\(3[2,-3]=[6,-9]\\)."
    },
    {
      q: "Vector addition follows the:",
      options: ["Pythagorean law only","Triangle law (or parallelogram law)","Distributive law of matrices","Law of determinants"],
      ans: "Triangle law (or parallelogram law)",
      reason: "Vectors add by the triangle law (equivalently the parallelogram law)."
    },
    {
      q: "If \\(\\overrightarrow{OA}=\\vec a\\) and \\(\\overrightarrow{OB}=\\vec b\\), then by the triangle law, \\(\\overrightarrow{AB}=\\)",
      options: ["\\(\\vec a+\\vec b\\)","\\(\\vec b-\\vec a\\)","\\(-\\vec a-\\vec b\\)","\\(\\vec a-\\vec b\\)"],
      ans: "\\(\\vec b-\\vec a\\)",
      reason: "\\(\\overrightarrow{AB}=\\vec b-\\vec a\\)."
    },
    {
      q: "For any vectors \\(\\vec u,\\vec v\\): \\(\\vec u+\\vec v=\\)",
      options: ["Never equal to \\(\\vec v+\\vec u\\)","\\(\\vec v+\\vec u\\) (vector addition is commutative)","\\(\\vec u-\\vec v\\)","\\(\\vec v-\\vec u\\) always"],
      ans: "\\(\\vec v+\\vec u\\) (vector addition is commutative)",
      reason: "Vector addition is commutative: \\(\\vec u+\\vec v=\\vec v+\\vec u\\)."
    },
    {
      q: "For any vector \\(\\vec u\\) and scalar \\(k\\), \\(k\\vec u\\) is:",
      options: ["Parallel to \\(\\vec u\\) (or zero)","Never a vector","Always perpendicular to \\(\\vec u\\)","Always equal to \\(\\vec u\\)"],
      ans: "Parallel to \\(\\vec u\\) (or zero)",
      reason: "\\(k\\vec u\\) is parallel to \\(\\vec u\\) (or zero when \\(k=0\\))."
    },
    {
      q: "If \\(\\vec u=[3,4]\\) and \\(\\vec v=[1,-2]\\), then \\(2\\vec u-\\vec v=\\)",
      options: ["\\([5,6]\\)","\\([7,6]\\)","\\([5,10]\\)","\\([7,10]\\)"],
      ans: "\\([5,10]\\)",
      reason: "\\(2\\vec u-\\vec v=[6-1,\\ 8+2]=[5,10]\\)."
    },
    {
      q: "The zero vector added to any vector \\(\\vec u\\) gives:",
      options: ["\\(-\\vec u\\)","The zero vector","\\(2\\vec u\\)","\\(\\vec u\\)"],
      ans: "\\(\\vec u\\)",
      reason: "\\(\\vec u+\\vec 0=\\vec u\\)."
    },
    {
      q: "\\(\\vec u+(-\\vec u)=\\)",
      options: ["Undefined","\\(\\vec u\\)","\\(2\\vec u\\)","The zero vector"],
      ans: "The zero vector",
      reason: "\\(\\vec u+(-\\vec u)=\\vec 0\\)."
    },
    {
      q: "In \\(\\triangle OAB\\) with \\(\\overrightarrow{OA}=\\vec a\\), \\(\\overrightarrow{OB}=\\vec b\\), if \\(N\\) is the midpoint of \\(OB\\), then \\(\\overrightarrow{ON}=\\)",
      options: ["\\(\\vec b\\)","\\(\\dfrac12\\vec a\\)","\\(\\dfrac12\\vec b\\)","\\(2\\vec b\\)"],
      ans: "\\(\\dfrac12\\vec b\\)",
      reason: "\\(N\\) is the midpoint of \\(OB\\), so \\(\\overrightarrow{ON}=\\tfrac12\\vec b\\)."
    },
    {
      q: "\\(\\overrightarrow{AN}=\\)",
      options: ["\\(\\dfrac12\\vec b-\\vec a\\)","\\(\\dfrac12\\vec a-\\vec b\\)","\\(\\dfrac12\\vec b+\\vec a\\)","\\(\\vec a-\\dfrac12\\vec b\\)"],
      ans: "\\(\\dfrac12\\vec b-\\vec a\\)",
      reason: "\\(\\overrightarrow{AN}=\\overrightarrow{ON}-\\overrightarrow{OA}=\\tfrac12\\vec b-\\vec a\\)."
    },
    {
      q: "In \\(\\triangle OAB\\), \\(\\overrightarrow{OA}+\\overrightarrow{AB}=\\)",
      options: ["\\(\\vec a-\\vec b\\)","\\(\\vec b\\)","\\(\\vec a\\)","\\(\\vec a+\\vec b\\)"],
      ans: "\\(\\vec b\\)",
      reason: "\\(\\overrightarrow{OA}+\\overrightarrow{AB}=\\overrightarrow{OB}=\\vec b\\)."
    },
    {
      q: "If \\(\\vec a=\\lambda\\vec b\\), \\(\\vec a=-15\\hat{\\imath}+20\\hat{\\jmath}\\) and \\(\\vec b=3\\hat{\\imath}-4\\hat{\\jmath}\\), then \\(\\lambda=\\)",
      options: ["\\(-5\\)","3","5","\\(-3\\)"],
      ans: "\\(-5\\)",
      reason: "\\(\\lambda=\\dfrac{-15}{3}=-5\\); also \\(\\dfrac{20}{-4}=-5\\)."
    },
    {
      q: "A unit vector is a vector whose magnitude is:",
      options: ["Equal to its direction","Undefined","1","0"],
      ans: "1",
      reason: "A unit vector has magnitude 1."
    },
    {
      q: "The unit vector in the direction of \\(\\vec u\\) is given by:",
      options: ["\\(\\dfrac{\\vec u}{|\\vec u|}\\)","\\(\\vec u\\times|\\vec u|\\)","\\(|\\vec u|\\cdot\\vec u\\)","\\(\\dfrac{1}{\\vec u}\\)"],
      ans: "\\(\\dfrac{\\vec u}{|\\vec u|}\\)",
      reason: "The unit vector in the direction of \\(\\vec u\\) is \\(\\hat u=\\dfrac{\\vec u}{|\\vec u|}\\)."
    },
    {
      q: "The standard unit vectors along the x- and y-axes are denoted by:",
      options: ["\\(\\hat{\\imath}\\) and \\(\\hat{\\jmath}\\)","\\(\\vec a\\) and \\(\\vec b\\)","\\(x\\) and \\(y\\)","\\(\\vec u\\) and \\(\\vec v\\)"],
      ans: "\\(\\hat{\\imath}\\) and \\(\\hat{\\jmath}\\)",
      reason: "The standard unit vectors are \\(\\hat\\imath\\) (x-axis) and \\(\\hat\\jmath\\) (y-axis)."
    },
    {
      q: "The unit vector of \\(\\vec w=-8\\hat{\\imath}+6\\hat{\\jmath}\\) is:",
      options: ["\\(\\dfrac45\\hat{\\imath}+\\dfrac35\\hat{\\jmath}\\)","\\(\\dfrac45\\hat{\\imath}-\\dfrac35\\hat{\\jmath}\\)","\\(-\\dfrac45\\hat{\\imath}-\\dfrac35\\hat{\\jmath}\\)","\\(-\\dfrac45\\hat{\\imath}+\\dfrac35\\hat{\\jmath}\\)"],
      ans: "\\(-\\dfrac45\\hat{\\imath}+\\dfrac35\\hat{\\jmath}\\)",
      reason: "\\(|\\vec w|=\\sqrt{64+36}=10\\), so \\(\\hat w=-\\tfrac45\\hat\\imath+\\tfrac35\\hat\\jmath\\)."
    },
    {
      q: "The magnitude of any unit vector is:",
      options: ["Always 1","Always 0","Equal to its components","Never defined"],
      ans: "Always 1",
      reason: "By definition every unit vector has magnitude 1."
    },
    {
      q: "If \\(\\vec u\\) is a unit vector, then \\(2\\vec u\\) has magnitude:",
      options: ["1","4","2","0.5"],
      ans: "2",
      reason: "\\(|2\\vec u|=2|\\vec u|=2\\)."
    },
    {
      q: "The unit vector along the positive x-axis is:",
      options: ["\\(\\hat{\\jmath}\\)","\\(-\\hat{\\imath}\\)","\\(\\hat{\\imath}\\)","\\(\\vec 0\\)"],
      ans: "\\(\\hat{\\imath}\\)",
      reason: "The unit vector along the positive x-axis is \\(\\hat\\imath\\)."
    },
    {
      q: "The unit vector along the positive y-axis is:",
      options: ["\\(\\vec 0\\)","\\(\\hat{\\jmath}\\)","\\(-\\hat{\\jmath}\\)","\\(\\hat{\\imath}\\)"],
      ans: "\\(\\hat{\\jmath}\\)",
      reason: "The unit vector along the positive y-axis is \\(\\hat\\jmath\\)."
    },
    {
      q: "Two vectors are equal if and only if they have:",
      options: ["The same magnitude only","The same terminal point only","The same initial point","The same magnitude and the same direction"],
      ans: "The same magnitude and the same direction",
      reason: "Equal vectors have the same magnitude and the same direction."
    },
    {
      q: "Two vectors are parallel if one is a:",
      options: ["Always equal to the other","Scalar multiple of the other","Perpendicular to the other","Sum of the other and a constant"],
      ans: "Scalar multiple of the other",
      reason: "Two vectors are parallel if one is a scalar multiple of the other."
    },
    {
      q: "If \\(\\vec a=\\lambda\\vec b\\) for some scalar \\(\\lambda\\), the vectors \\(\\vec a\\) and \\(\\vec b\\) are:",
      options: ["Equal in magnitude only","Always equal","Parallel","Perpendicular"],
      ans: "Parallel",
      reason: "If \\(\\vec a=\\lambda\\vec b\\), the vectors are parallel."
    },
    {
      q: "Three or more points lying on the same straight line are called:",
      options: ["Coplanar points only","Concurrent points","Collinear points","Parallel points"],
      ans: "Collinear points",
      reason: "Points on one straight line are collinear."
    },
    {
      q: "Points \\(A,B,C\\) are collinear if \\(\\overrightarrow{AB}\\) and \\(\\overrightarrow{BC}\\) are:",
      options: ["Equal in magnitude only","Parallel (scalar multiples of each other)","Always equal vectors","Perpendicular"],
      ans: "Parallel (scalar multiples of each other)",
      reason: "\\(A,B,C\\) are collinear if \\(\\overrightarrow{AB}\\) and \\(\\overrightarrow{BC}\\) are parallel (share the point \\(B\\))."
    },
    {
      q: "What type of quadrilateral is \\(PQRS\\) if \\(\\overrightarrow{PQ}=\\dfrac34\\overrightarrow{SR}\\)?",
      options: ["Rectangle","Rhombus","Trapezium","Kite"],
      ans: "Trapezium",
      reason: "\\(\\overrightarrow{PQ}=\\tfrac34\\overrightarrow{SR}\\) means \\(PQ\\parallel SR\\) with unequal lengths: a trapezium."
    },
    {
      q: "Two vectors with the same magnitude but opposite directions are:",
      options: ["Equal vectors","Negatives of each other","Unit vectors","Perpendicular vectors"],
      ans: "Negatives of each other",
      reason: "Same magnitude but opposite directions means each is the negative of the other."
    },
    {
      q: "Non-parallel, non-zero coplanar vectors can be used to express:",
      options: ["Any other vector in that plane as a linear combination of them","Only position vectors","Nothing useful","Only unit vectors"],
      ans: "Any other vector in that plane as a linear combination of them",
      reason: "Two non-parallel, non-zero coplanar vectors can express any vector in their plane as a linear combination."
    },
    {
      q: "If two vectors are parallel and equal in magnitude, and both connect corresponding pairs of vertices of a quadrilateral in the same rotational sense, the quadrilateral is a:",
      options: ["Parallelogram","Triangle","Trapezium only","Kite"],
      ans: "Parallelogram",
      reason: "Parallel and equal opposite sides make a parallelogram."
    },
    {
      q: "If \\(\\overrightarrow{AB}=\\overrightarrow{DC}\\) for a quadrilateral \\(ABCD\\), then \\(ABCD\\) is a:",
      options: ["Irregular quadrilateral","Parallelogram","Trapezium only","Kite"],
      ans: "Parallelogram",
      reason: "\\(\\overrightarrow{AB}=\\overrightarrow{DC}\\) means \\(AB\\) and \\(DC\\) are equal and parallel: a parallelogram."
    },
    {
      q: "The midpoint of the segment joining position vectors \\(\\vec a\\) and \\(\\vec b\\) has position vector:",
      options: ["\\(\\dfrac{\\vec a-\\vec b}{2}\\)","\\(\\vec a+\\vec b\\)","\\(\\dfrac{\\vec a+\\vec b}{2}\\)","\\(2(\\vec a+\\vec b)\\)"],
      ans: "\\(\\dfrac{\\vec a+\\vec b}{2}\\)",
      reason: "The midpoint has position vector \\(\\dfrac{\\vec a+\\vec b}{2}\\)."
    },
    {
      q: "The resultant of two forces acting on a body is found using:",
      options: ["Scalar addition of their magnitudes only","Vector addition","Matrix multiplication","Subtraction of their directions"],
      ans: "Vector addition",
      reason: "Forces are vectors, so their resultant is found by vector addition."
    },
    {
      q: "When a swimmer's velocity is combined with a river current's velocity, the actual (resultant) velocity is found using:",
      options: ["The average of the two speeds","Vector addition","Simple scalar subtraction only","Multiplication of the two speeds"],
      ans: "Vector addition",
      reason: "Velocities are vectors, so the resultant is found by vector addition."
    },
    {
      q: "A ship sails east at 40 km/h, with a steady 30 km/h current pushing it south. The resultant speed of the ship is:",
      options: ["70 km/h","100 km/h","40 km/h","50 km/h"],
      ans: "50 km/h",
      reason: "\\(\\sqrt{40^2+30^2}=50\\) km/h."
    },
    {
      q: "The distance this ship travels from its starting point after 6 hours is:",
      options: ["180 km","420 km","240 km","300 km"],
      ans: "300 km",
      reason: "Distance \\(=50\\times6=300\\) km."
    },
    {
      q: "Sara swims at 8 m/s in still water in a river with a 2 m/s current flowing east. Her resultant speed swimming due east along the current is:",
      options: ["10 m/s","8 m/s","6 m/s","2 m/s"],
      ans: "10 m/s",
      reason: "Along the current the speeds add: \\(8+2=10\\) m/s."
    },
    {
      q: "Sara's resultant speed swimming due west against the same current is:",
      options: ["2 m/s","8 m/s","10 m/s","6 m/s"],
      ans: "6 m/s",
      reason: "Against the current the speeds subtract: \\(8-2=6\\) m/s."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Force</th><th>Magnitude (N)</th><th>Angle with horizontal</th></tr><tr><td>\\(F_1\\)</td><td>200</td><td>\\(30^\\circ\\)</td></tr><tr><td>\\(F_2\\)</td><td>150</td><td>\\(60^\\circ\\)</td></tr></table><p>Two forces act on an object as shown.</p></div>The magnitude of the resultant force \\(F_1+F_2\\) is approximately:",
      options: ["300 N","350 N","338.3 N","228 N"],
      ans: "338.3 N",
      reason: "\\(F_1=(173.2,\\ 100)\\), \\(F_2=(75,\\ 129.9)\\), sum \\(=(248.2,\\ 229.9)\\). Magnitude \\(=\\sqrt{248.2^2+229.9^2}\\approx338.3\\) N."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Force</th><th>Magnitude (N)</th><th>Angle with horizontal</th></tr><tr><td>\\(F_1\\)</td><td>200</td><td>\\(30^\\circ\\)</td></tr><tr><td>\\(F_2\\)</td><td>150</td><td>\\(60^\\circ\\)</td></tr></table><p>Two forces act on an object as shown.</p></div>The resultant force acts at an angle (with the horizontal) of approximately:",
      options: ["\\(45^\\circ\\)","\\(42.8^\\circ\\)","\\(30^\\circ\\)","\\(60^\\circ\\)"],
      ans: "\\(42.8^\\circ\\)",
      reason: "\\(\\theta=\\tan^{-1}\\dfrac{229.9}{248.2}\\approx42.8^\\circ\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Force</th><th>Magnitude (N)</th><th>Angle with horizontal</th></tr><tr><td>\\(F_1\\)</td><td>200</td><td>\\(30^\\circ\\)</td></tr><tr><td>\\(F_2\\)</td><td>150</td><td>\\(60^\\circ\\)</td></tr></table><p>Two forces act on an object as shown.</p></div>If a third force of 100 N acting along the positive horizontal direction (\\(0^\\circ\\)) is added, the new resultant magnitude is approximately:",
      options: ["338.3 N","400 N","417.3 N","448 N"],
      ans: "417.3 N",
      reason: "Adding \\(100\\) N horizontally gives \\((348.2,\\ 229.9)\\), whose magnitude is \\(\\approx417.3\\) N."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Force</th><th>Magnitude (N)</th><th>Angle with horizontal</th></tr><tr><td>\\(F_1\\)</td><td>200</td><td>\\(30^\\circ\\)</td></tr><tr><td>\\(F_2\\)</td><td>150</td><td>\\(60^\\circ\\)</td></tr></table><p>Two forces act on an object as shown.</p></div>Combining several forces acting on a point into one equivalent force uses:",
      options: ["Vector addition","The unit circle","Matrix inversion","Scalar subtraction"],
      ans: "Vector addition",
      reason: "Combining forces into one equivalent force is done by vector addition."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Position vector</th></tr><tr><td>A</td><td>\\([2,5]\\)</td></tr><tr><td>B</td><td>\\([8,1]\\)</td></tr><tr><td>C</td><td>\\([4,-3]\\)</td></tr></table><p>Triangle \\(ABC\\) has the position vectors shown.</p></div>The vector \\(\\overrightarrow{AB}\\) is:",
      options: ["\\([6,-4]\\)","\\([-6,4]\\)","\\([10,6]\\)","\\([6,4]\\)"],
      ans: "\\([6,-4]\\)",
      reason: "\\(\\overrightarrow{AB}=[8-2,\\ 1-5]=[6,-4]\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Position vector</th></tr><tr><td>A</td><td>\\([2,5]\\)</td></tr><tr><td>B</td><td>\\([8,1]\\)</td></tr><tr><td>C</td><td>\\([4,-3]\\)</td></tr></table><p>Triangle \\(ABC\\) has the position vectors shown.</p></div>\\(|\\overrightarrow{AB}|\\) is:",
      options: ["\\(2\\sqrt{10}\\)","\\(\\sqrt{20}\\)","\\(2\\sqrt{13}\\)","10"],
      ans: "\\(2\\sqrt{13}\\)",
      reason: "\\(|\\overrightarrow{AB}|=\\sqrt{36+16}=\\sqrt{52}=2\\sqrt{13}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Position vector</th></tr><tr><td>A</td><td>\\([2,5]\\)</td></tr><tr><td>B</td><td>\\([8,1]\\)</td></tr><tr><td>C</td><td>\\([4,-3]\\)</td></tr></table><p>Triangle \\(ABC\\) has the position vectors shown.</p></div>The midpoint of \\(BC\\) has position vector:",
      options: ["\\([-6,-1]\\)","\\([12,-2]\\)","\\([6,1]\\)","\\([6,-1]\\)"],
      ans: "\\([6,-1]\\)",
      reason: "Midpoint of \\(BC=\\left[\\dfrac{8+4}{2},\\ \\dfrac{1-3}{2}\\right]=[6,-1]\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Position vector</th></tr><tr><td>A</td><td>\\([2,5]\\)</td></tr><tr><td>B</td><td>\\([8,1]\\)</td></tr><tr><td>C</td><td>\\([4,-3]\\)</td></tr></table><p>Triangle \\(ABC\\) has the position vectors shown.</p></div>The vector from \\(A\\) to the midpoint of \\(BC\\) (the median) is:",
      options: ["\\([4,6]\\)","\\([4,-6]\\)","\\([-4,6]\\)","\\([8,-12]\\)"],
      ans: "\\([4,-6]\\)",
      reason: "The median vector is \\([6-2,\\ -1-5]=[4,-6]\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Current speed (m/s)</th><th>Downstream resultant</th><th>Upstream resultant</th></tr><tr><td>2</td><td>7 m/s</td><td>3 m/s</td></tr><tr><td>3</td><td>8 m/s</td><td>2 m/s</td></tr></table><p>A swimmer's speed in still water is 5 m/s. The table shows resultant speeds for two different current speeds.</p></div>With a 2 m/s current, the swimmer's downstream resultant speed is:",
      options: ["10 m/s","5 m/s","3 m/s","7 m/s"],
      ans: "7 m/s",
      reason: "Downstream the speeds add: \\(5+2=7\\) m/s (matches the table)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Current speed (m/s)</th><th>Downstream resultant</th><th>Upstream resultant</th></tr><tr><td>2</td><td>7 m/s</td><td>3 m/s</td></tr><tr><td>3</td><td>8 m/s</td><td>2 m/s</td></tr></table><p>A swimmer's speed in still water is 5 m/s. The table shows resultant speeds for two different current speeds.</p></div>With a 3 m/s current, the swimmer's upstream resultant speed is:",
      options: ["2 m/s","5 m/s","8 m/s","3 m/s"],
      ans: "2 m/s",
      reason: "Upstream the speeds subtract: \\(5-3=2\\) m/s (matches the table)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Current speed (m/s)</th><th>Downstream resultant</th><th>Upstream resultant</th></tr><tr><td>2</td><td>7 m/s</td><td>3 m/s</td></tr><tr><td>3</td><td>8 m/s</td><td>2 m/s</td></tr></table><p>A swimmer's speed in still water is 5 m/s. The table shows resultant speeds for two different current speeds.</p></div>With a 2 m/s current, swimming directly across the river (perpendicular to the current), the resultant speed is approximately:",
      options: ["2 m/s","5.39 m/s","5 m/s","7 m/s"],
      ans: "5.39 m/s",
      reason: "Across the river the velocities are perpendicular: \\(\\sqrt{5^2+2^2}=\\sqrt{29}\\approx5.39\\) m/s."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Current speed (m/s)</th><th>Downstream resultant</th><th>Upstream resultant</th></tr><tr><td>2</td><td>7 m/s</td><td>3 m/s</td></tr><tr><td>3</td><td>8 m/s</td><td>2 m/s</td></tr></table><p>A swimmer's speed in still water is 5 m/s. The table shows resultant speeds for two different current speeds.</p></div>At what current speed would the swimmer make zero progress swimming upstream?",
      options: ["3 m/s","7 m/s","2 m/s","5 m/s"],
      ans: "5 m/s",
      reason: "Upstream speed \\(=5-c=0\\Rightarrow c=5\\) m/s."
    }
    ];
  }
});
