// Class 10 Math — Chapter 4: Linear and Quadratic Inequalities
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch4",
  label: "Chapter 4: Linear and Quadratic Inequalities",
  order: 4,
  questions: function () {
    return [
    {
      q: "The solution of the inequality \\(6x-7\\ge2x+17\\) is:",
      options: ["\\(x>6\\)","\\(x\\le6\\)","\\(x<6\\)","\\(x\\ge6\\)"],
      ans: "\\(x\\ge6\\)",
      reason: "\\(6x-2x\\ge17+7\\Rightarrow4x\\ge24\\Rightarrow x\\ge6\\)."
    },
    {
      q: "The solution of the inequality \\(x\\lt 3\\) for \\(x\\in\\mathbb{N}\\) is:",
      options: ["\\(\\{1\\}\\)","\\(\\{-2,-1,0,1,2\\}\\)","\\(\\{1,2\\}\\)","\\(\\{0,1,2\\}\\)"],
      ans: "\\(\\{1,2\\}\\)",
      reason: "Natural numbers less than 3 are \\(1\\) and \\(2\\)."
    },
    {
      q: "In general, we use a test point when graphing an inequality:",
      options: ["\\((-1,-1)\\)","\\((2,2)\\)","\\((0,0)\\)","\\((-3,-3)\\)"],
      ans: "\\((0,0)\\)",
      reason: "The origin \\((0,0)\\) is the usual test point (when the line does not pass through it) because it is easy to substitute."
    },
    {
      q: "The solution of \\(\\dfrac{x}{-2}\\lt 3-x\\) is:",
      options: ["\\(x<-2\\)","\\(x>2\\)","\\(x<6\\)","\\(x<2\\)"],
      ans: "\\(x<6\\)",
      reason: "Multiply by \\(-2\\) (reverse the sign): \\(x>-2(3-x)=-6+2x\\Rightarrow-x>-6\\Rightarrow x\\lt 6\\)."
    },
    {
      q: "Which ordered pair is a solution of the inequality \\(4x-y\\ge3\\)?",
      options: ["\\((-1,2)\\)","\\((0,-2)\\)","\\((0,0)\\)","\\((1,1)\\)"],
      ans: "\\((1,1)\\)",
      reason: "Substituting \\((1,1)\\): \\(4(1)-1=3\\ge3\\) is true. The other points give \\(-6,\\ 2,\\ 0\\), all less than 3."
    },
    {
      q: "Which ordered pair is a solution of the system \\(2x-y\\le5\\) and \\(x+2y>2\\)?",
      options: ["\\((3,2)\\)","\\((1,-1)\\)","\\((2,0)\\)","\\((4,1)\\)"],
      ans: "\\((3,2)\\)",
      reason: "For \\((3,2)\\): \\(2(3)-2=4\\le5\\) and \\(3+4=7>2\\). Both hold. The other points each fail one inequality."
    },
    {
      q: "The solution for \\(-5x\\ge-80\\) is:",
      options: ["\\(\\{x\\mid x>16\\}\\)","\\(\\{x\\mid x\\le16\\}\\)","\\(\\{x\\mid x<16\\}\\)","\\(\\{x\\mid x\\ge16\\}\\)"],
      ans: "\\(\\{x\\mid x\\le16\\}\\)",
      reason: "Divide by \\(-5\\) and reverse the sign: \\(x\\le16\\)."
    },
    {
      q: "\\((7,-2)\\) is a solution of the inequality:",
      options: ["\\(-x-y>-3\\)","\\(2x+y<10\\)","\\(x-y<-4\\)","\\(x+10y<1\\)"],
      ans: "\\(x+10y<1\\)",
      reason: "For \\((7,-2)\\): \\(x+10y=7-20=-13\\lt 1\\) is true. The other three options are false."
    },
    {
      q: "Solve \\(\\dfrac23x-4\\ge1\\).",
      options: ["\\(x\\le7.5\\)","\\(x\\ge15\\)","\\(x\\ge7.5\\)","\\(x\\ge5\\)"],
      ans: "\\(x\\ge7.5\\)",
      reason: "\\(\\tfrac23x\\ge5\\Rightarrow x\\ge\\tfrac{15}{2}=7.5\\)."
    },
    {
      q: "Solve \\(1-3x\\le-14+2x\\).",
      options: ["\\(x\\ge3\\)","\\(x\\le5\\)","\\(x\\le3\\)","\\(x\\ge5\\)"],
      ans: "\\(x\\ge3\\)",
      reason: "\\(1+14\\le2x+3x\\Rightarrow15\\le5x\\Rightarrow x\\ge3\\)."
    },
    {
      q: "Solve \\(7(x-1)>-8+7x\\).",
      options: ["\\(x<-1\\)","No solution","All real numbers (always true)","\\(x>1\\)"],
      ans: "All real numbers (always true)",
      reason: "\\(7x-7>-8+7x\\Rightarrow-7>-8\\), which is always true, so every real number is a solution."
    },
    {
      q: "Solve \\(-3(2x-1)\\ge1-8x\\).",
      options: ["\\(x\\ge1\\)","\\(x\\ge-1\\)","\\(x\\le-1\\)","\\(x\\le1\\)"],
      ans: "\\(x\\ge-1\\)",
      reason: "\\(-6x+3\\ge1-8x\\Rightarrow2x\\ge-2\\Rightarrow x\\ge-1\\)."
    },
    {
      q: "A linear inequality in one variable is obtained by replacing the \"=\" sign in a linear equation with:",
      options: ["\\(\\therefore\\)","\\(\\neq\\) only","\\(\\pm\\)","\\(<,\\le,>,\\) or \\(\\ge\\)"],
      ans: "\\(<,\\le,>,\\) or \\(\\ge\\)",
      reason: "Replacing \"=\" by \\(\\lt ,\\le,>\\) or \\(\\ge\\) gives a linear inequality."
    },
    {
      q: "If \\(a>b\\), then \\(a+c\\ ?\\ b+c\\) for any real \\(c\\):",
      options: ["\\(\\ge\\)","\\(=\\)","\\(>\\)","\\(<\\)"],
      ans: "\\(>\\)",
      reason: "Adding the same number to both sides keeps the inequality: \\(a+c>b+c\\)."
    },
    {
      q: "If \\(a\\lt b\\) and \\(c\\) is positive, then \\(ac\\ ?\\ bc\\):",
      options: ["\\(=\\)","\\(>\\)","\\(<\\)","\\(\\le\\)"],
      ans: "\\(<\\)",
      reason: "Multiplying by a positive number keeps the direction: \\(ac\\lt bc\\)."
    },
    {
      q: "If \\(a\\lt b\\) and \\(c\\) is negative, then \\(ac\\ ?\\ bc\\):",
      options: ["\\(=\\)","\\(>\\)","\\(\\ge\\)","\\(<\\)"],
      ans: "\\(>\\)",
      reason: "Multiplying by a negative number reverses the direction: \\(ac>bc\\)."
    },
    {
      q: "Dividing both sides of an inequality by a negative number:",
      options: ["Reverses the direction of the inequality","Keeps the inequality unchanged","Has no effect","Makes it an equation"],
      ans: "Reverses the direction of the inequality",
      reason: "Dividing (or multiplying) by a negative number reverses the inequality sign."
    },
    {
      q: "On a number line, an open circle is used for:",
      options: ["\\(\\le\\) or \\(\\ge\\)","\\(<\\) or \\(>\\)","All inequalities","\\(=\\)"],
      ans: "\\(<\\) or \\(>\\)",
      reason: "An open circle shows the end point is not included, used for \\(\\lt \\) and \\(>\\)."
    },
    {
      q: "On a number line, a closed (filled) circle is used for:",
      options: ["\\(<\\) or \\(>\\)","\\(=\\) only","\\(\\le\\) or \\(\\ge\\)","None of these"],
      ans: "\\(\\le\\) or \\(\\ge\\)",
      reason: "A closed (filled) circle shows the end point is included, used for \\(\\le\\) and \\(\\ge\\)."
    },
    {
      q: "A solution of an inequality in two variables \\(x,y\\) is:",
      options: ["An ordered pair \\((x,y)\\) that makes the inequality true","Only positive values of \\(x\\)","The slope of the boundary line","A single number"],
      ans: "An ordered pair \\((x,y)\\) that makes the inequality true",
      reason: "A solution of a two-variable inequality is an ordered pair \\((x,y)\\) that makes it true."
    },
    {
      q: "The boundary line for a linear inequality \\(ax+by\\lt c\\) (strict) is drawn:",
      options: ["Dashed","Always dotted and thick","Always solid","Not drawn"],
      ans: "Dashed",
      reason: "For a strict inequality the boundary line is not part of the solution, so it is drawn dashed."
    },
    {
      q: "The boundary line for \\(ax+by\\le c\\) is drawn:",
      options: ["Dotted","Solid","Not needed","Dashed"],
      ans: "Solid",
      reason: "For \\(\\le\\) or \\(\\ge\\) the boundary is included, so it is drawn solid."
    },
    {
      q: "A linear inequality in two variables has the general form:",
      options: ["\\(a+b=c\\)","\\(ax^2+by=c\\)","\\(ax+by<c\\) (or \\(\\le,>,\\ge\\))","\\(ax+by=c\\) only"],
      ans: "\\(ax+by<c\\) (or \\(\\le,>,\\ge\\))",
      reason: "A linear inequality in two variables has the form \\(ax+by\\lt c\\) (or \\(\\le,>,\\ge\\))."
    },
    {
      q: "To check whether a point is a solution of an inequality, we:",
      options: ["Compare with the origin only","Graph the point on a separate axis","Substitute only the \\(x\\)-value","Substitute the point's coordinates and see if it makes the inequality true"],
      ans: "Substitute the point's coordinates and see if it makes the inequality true",
      reason: "Substitute the coordinates of the point and see whether the inequality is true."
    },
    {
      q: "The solution set of a system of linear inequalities is the set of points that:",
      options: ["Lie on the boundary lines only","Satisfy any one inequality","Satisfy none of the inequalities","Satisfy all inequalities in the system"],
      ans: "Satisfy all inequalities in the system",
      reason: "A solution of a system must satisfy all of its inequalities at once."
    },
    {
      q: "If \\(a\\ge b\\) and \\(b\\ge c\\), then:",
      options: ["\\(a=c\\)","\\(a\\le c\\)","No relation can be determined","\\(a\\ge c\\)"],
      ans: "\\(a\\ge c\\)",
      reason: "By transitivity, \\(a\\ge b\\) and \\(b\\ge c\\) give \\(a\\ge c\\)."
    },
    {
      q: "Adding the same number to both sides of an inequality:",
      options: ["Makes both sides equal","Does not change the direction of the inequality","Is not allowed","Always reverses the inequality"],
      ans: "Does not change the direction of the inequality",
      reason: "Adding the same number to both sides does not change the direction."
    },
    {
      q: "Solve \\(x+5>12\\).",
      options: ["\\(x<17\\)","\\(x<7\\)","\\(x>17\\)","\\(x>7\\)"],
      ans: "\\(x>7\\)",
      reason: "\\(x>12-5=7\\)."
    },
    {
      q: "Solve \\(2x-3\\le7\\).",
      options: ["\\(x\\le5\\)","\\(x\\le2\\)","\\(x\\ge5\\)","\\(x\\ge2\\)"],
      ans: "\\(x\\le5\\)",
      reason: "\\(2x\\le10\\Rightarrow x\\le5\\)."
    },
    {
      q: "Solve \\(-3x>9\\).",
      options: ["\\(x<3\\)","\\(x>3\\)","\\(x>-3\\)","\\(x<-3\\)"],
      ans: "\\(x<-3\\)",
      reason: "Divide by \\(-3\\) and reverse: \\(x\\lt -3\\)."
    },
    {
      q: "Solve \\(\\dfrac{x}{2}\\ge4\\).",
      options: ["\\(x\\le2\\)","\\(x\\ge2\\)","\\(x\\ge8\\)","\\(x\\le8\\)"],
      ans: "\\(x\\ge8\\)",
      reason: "Multiply by 2: \\(x\\ge8\\)."
    },
    {
      q: "Solve \\(4x+1\\lt 2x+9\\).",
      options: ["\\(x<2\\)","\\(x>4\\)","\\(x<4\\)","\\(x>2\\)"],
      ans: "\\(x<4\\)",
      reason: "\\(4x-2x\\lt 9-1\\Rightarrow2x\\lt 8\\Rightarrow x\\lt 4\\)."
    },
    {
      q: "Solve \\(5-2x\\ge-1\\).",
      options: ["\\(x\\le-3\\)","\\(x\\le3\\)","\\(x\\ge-3\\)","\\(x\\ge3\\)"],
      ans: "\\(x\\le3\\)",
      reason: "\\(-2x\\ge-6\\Rightarrow x\\le3\\)."
    },
    {
      q: "Solve \\(3(x-2)\\lt x+4\\).",
      options: ["\\(x>5\\)","\\(x<-5\\)","\\(x<5\\)","\\(x>-5\\)"],
      ans: "\\(x<5\\)",
      reason: "\\(3x-6\\lt x+4\\Rightarrow2x\\lt 10\\Rightarrow x\\lt 5\\)."
    },
    {
      q: "Solve \\(\\dfrac34x-6\\ge0\\).",
      options: ["\\(x\\ge8\\)","\\(x\\ge4.5\\)","\\(x\\le8\\)","\\(x\\ge6\\)"],
      ans: "\\(x\\ge8\\)",
      reason: "\\(\\tfrac34x\\ge6\\Rightarrow x\\ge8\\)."
    },
    {
      q: "Solve \\(2-5x\\le-18+3x\\).",
      options: ["\\(x\\ge5\\)","\\(x\\le2.5\\)","\\(x\\le5\\)","\\(x\\ge2.5\\)"],
      ans: "\\(x\\ge2.5\\)",
      reason: "\\(2+18\\le3x+5x\\Rightarrow20\\le8x\\Rightarrow x\\ge2.5\\)."
    },
    {
      q: "Solve \\(4(x-2)>-6+4x\\).",
      options: ["All real numbers (always true)","\\(x>2\\)","No solution","\\(x<-2\\)"],
      ans: "No solution",
      reason: "\\(4x-8>-6+4x\\Rightarrow-8>-6\\), which is false for every \\(x\\), so there is no solution."
    },
    {
      q: "Solve \\(-2(3x-2)\\ge5-10x\\).",
      options: ["\\(x\\le4\\)","\\(x\\ge4\\)","\\(x\\le0.25\\)","\\(x\\ge0.25\\)"],
      ans: "\\(x\\ge0.25\\)",
      reason: "\\(-6x+4\\ge5-10x\\Rightarrow4x\\ge1\\Rightarrow x\\ge0.25\\)."
    },
    {
      q: "Solve \\(9x-2\\ge3x+16\\).",
      options: ["\\(x>3\\)","\\(x\\ge3\\)","\\(x\\le3\\)","\\(x\\le-3\\)"],
      ans: "\\(x\\ge3\\)",
      reason: "\\(6x\\ge18\\Rightarrow x\\ge3\\)."
    },
    {
      q: "The solution for \\(-4x\\ge-48\\) is:",
      options: ["\\(\\{x\\mid x<12\\}\\)","\\(\\{x\\mid x\\ge12\\}\\)","\\(\\{x\\mid x>12\\}\\)","\\(\\{x\\mid x\\le12\\}\\)"],
      ans: "\\(\\{x\\mid x\\le12\\}\\)",
      reason: "Divide by \\(-4\\) and reverse: \\(x\\le12\\)."
    },
    {
      q: "Solve \\(\\dfrac{x}{-3}\\lt 2-x\\).",
      options: ["\\(x<-3\\)","\\(x<3\\)","\\(x>3\\)","\\(x<1\\)"],
      ans: "\\(x<3\\)",
      reason: "Multiply by \\(-3\\) (reverse): \\(x>-3(2-x)=-6+3x\\Rightarrow-2x>-6\\Rightarrow x\\lt 3\\)."
    },
    {
      q: "If \\(x\\lt 4\\) and \\(x\\in\\mathbb{N}\\), the solution set is:",
      options: ["\\(\\{1,2\\}\\)","\\(\\{-2,-1,0,1,2,3\\}\\)","\\(\\{0,1,2,3\\}\\)","\\(\\{1,2,3\\}\\)"],
      ans: "\\(\\{1,2,3\\}\\)",
      reason: "Natural numbers less than 4 are \\(1,2,3\\)."
    },
    {
      q: "The graph of a linear inequality in one variable on a number line is:",
      options: ["A parabola","A single point","The entire number line always","A ray (part of the number line)"],
      ans: "A ray (part of the number line)",
      reason: "The graph of a one-variable inequality on a number line is a ray."
    },
    {
      q: "The graph of \\(x\\ge6\\) on a number line is a:",
      options: ["Open circle at 6 with a ray extending to the left","Closed circle at 6 with a ray extending to the right","Closed circle at 6 with a ray extending to the left","Open circle at 6 with a ray extending to the right"],
      ans: "Closed circle at 6 with a ray extending to the right",
      reason: "\\(x\\ge6\\) includes 6 (closed circle) and extends to the right."
    },
    {
      q: "The graph of \\(x\\lt -2\\) on a number line is a:",
      options: ["Open circle at \\(-2\\) with a ray extending to the left","Closed circle at \\(-2\\) with a ray to the left","Open circle at \\(-2\\) with a ray extending to the right","Closed circle at \\(-2\\) with a ray extending to the right"],
      ans: "Open circle at \\(-2\\) with a ray extending to the left",
      reason: "\\(x\\lt -2\\) excludes \\(-2\\) (open circle) and extends to the left."
    },
    {
      q: "A linear inequality in two variables, when graphed, divides the coordinate plane into:",
      options: ["Four regions","Two regions","Three regions","One region"],
      ans: "Two regions",
      reason: "The boundary line splits the plane into two regions (half-planes)."
    },
    {
      q: "In graphing \\(y>2x\\), the boundary line \\(y=2x\\) is drawn:",
      options: ["Dashed, since the inequality is strict","Dotted and thick","Solid","Not drawn at all"],
      ans: "Dashed, since the inequality is strict",
      reason: "\\(y>2x\\) is strict, so the boundary line is dashed."
    },
    {
      q: "In graphing \\(y\\ge-5\\), the boundary line is drawn:",
      options: ["As a curve","Not drawn","Solid, since the inequality includes equality","Dashed"],
      ans: "Solid, since the inequality includes equality",
      reason: "\\(y\\ge-5\\) includes equality, so the boundary line is solid."
    },
    {
      q: "For the inequality \\(y>2x\\), the shaded region is:",
      options: ["To the left of the line","Below the line \\(y=2x\\)","On the line only","Above the line \\(y=2x\\)"],
      ans: "Above the line \\(y=2x\\)",
      reason: "\\(y>2x\\) means \\(y\\) is greater than the line's height, so the region above the line."
    },
    {
      q: "For the inequality \\(y\\le-5\\), the shaded region is:",
      options: ["Below (and on) the horizontal line \\(y=-5\\)","On the line only","Above the line","To the right of the line"],
      ans: "Below (and on) the horizontal line \\(y=-5\\)",
      reason: "\\(y\\le-5\\) includes the line and every point below it."
    },
    {
      q: "A vertical boundary line such as \\(x=2\\) represents an inequality that involves:",
      options: ["Both \\(x\\) and \\(y\\) equally","Neither variable","Only the variable \\(x\\)","Only the variable \\(y\\)"],
      ans: "Only the variable \\(x\\)",
      reason: "A vertical line \\(x=2\\) involves only \\(x\\)."
    },
    {
      q: "A horizontal boundary line such as \\(y=-5\\) represents an inequality that involves:",
      options: ["Neither variable","Both variables equally","Only the variable \\(y\\)","Only the variable \\(x\\)"],
      ans: "Only the variable \\(y\\)",
      reason: "A horizontal line \\(y=-5\\) involves only \\(y\\)."
    },
    {
      q: "The graph of the system \\(y>2x\\) and \\(y\\lt 3x\\) (for \\(x>0\\)) is:",
      options: ["The region between the two lines","The region below both lines","Empty (no region)","The region above both lines"],
      ans: "The region between the two lines",
      reason: "\\(y>2x\\) is above the first line and \\(y\\lt 3x\\) is below the second: the region between them."
    },
    {
      q: "When a test point satisfies an inequality, the region:",
      options: ["Containing that test point is shaded","Nothing is shaded","The whole plane is shaded","Opposite to the test point is shaded"],
      ans: "Containing that test point is shaded",
      reason: "If the test point satisfies the inequality, the region containing that point is the solution and is shaded."
    },
    {
      q: "A quadratic inequality in one variable has the general form:",
      options: ["\\(ax+b<0\\)","\\(ax^2+bx+c<0\\) (or \\(\\le,>,\\ge\\)), \\(a\\neq0\\)","\\(ax^2+bx+c=0\\)","\\(ax^3+bx^2+c<0\\)"],
      ans: "\\(ax^2+bx+c<0\\) (or \\(\\le,>,\\ge\\)), \\(a\\neq0\\)",
      reason: "A quadratic inequality has the form \\(ax^2+bx+c\\lt 0\\) (or \\(\\le,>,\\ge\\)) with \\(a\\ne0\\)."
    },
    {
      q: "The first step in solving a quadratic inequality like \\((x-6)(x+2)>0\\) is to:",
      options: ["Graph a parabola directly","Take the square root of both sides","Divide both sides by \\(x\\)","Solve the corresponding equation \\((x-6)(x+2)=0\\)"],
      ans: "Solve the corresponding equation \\((x-6)(x+2)=0\\)",
      reason: "First solve the related equation to find the critical points."
    },
    {
      q: "The critical points that divide the number line when solving \\((x-6)(x+2)>0\\) are:",
      options: ["\\(x=6\\) and \\(x=2\\)","\\(x=6\\) and \\(x=-2\\)","\\(x=-6\\) and \\(x=2\\)","\\(x=0\\) only"],
      ans: "\\(x=6\\) and \\(x=-2\\)",
      reason: "\\((x-6)(x+2)=0\\Rightarrow x=6\\) or \\(x=-2\\)."
    },
    {
      q: "The solution set of \\((x-6)(x+2)>0\\) is:",
      options: ["\\(\\{x\\mid x<-2 \\text{ or } x>6\\}\\)","\\(\\{x\\mid x>-2\\}\\)","\\(\\{x\\mid -2<x<6\\}\\)","\\(\\{x\\mid x<6\\}\\)"],
      ans: "\\(\\{x\\mid x<-2 \\text{ or } x>6\\}\\)",
      reason: "The product is positive when both factors have the same sign, so \\(x\\lt -2\\) or \\(x>6\\)."
    },
    {
      q: "The solution set of \\(x^2+6x-27\\le0\\) is:",
      options: ["\\(\\{x\\mid -3\\le x\\le9\\}\\)","\\(\\{x\\mid -9\\le x\\le3\\}\\)","\\(\\{x\\mid x\\le-9 \\text{ or } x\\ge3\\}\\)","\\(\\{x\\mid x\\ge3\\}\\)"],
      ans: "\\(\\{x\\mid -9\\le x\\le3\\}\\)",
      reason: "\\(x^2+6x-27=(x+9)(x-3)\\le0\\) between the roots: \\(-9\\le x\\le3\\)."
    },
    {
      q: "To test a region while solving a quadratic inequality, we:",
      options: ["Always test \\(x=0\\) only","Choose a test point from each part of the number line and substitute it","Test only the critical points themselves","Test only positive numbers"],
      ans: "Choose a test point from each part of the number line and substitute it",
      reason: "Pick a test point in each interval and substitute it to decide the sign there."
    },
    {
      q: "The solution set of \\(x^2-4>0\\) is:",
      options: ["\\(\\{x\\mid x>2\\}\\)","\\(\\{x\\mid x<-2\\}\\)","\\(\\{x\\mid x<-2 \\text{ or } x>2\\}\\)","\\(\\{x\\mid -2<x<2\\}\\)"],
      ans: "\\(\\{x\\mid x<-2 \\text{ or } x>2\\}\\)",
      reason: "\\(x^2>4\\Rightarrow x\\lt -2\\) or \\(x>2\\)."
    },
    {
      q: "The solution set of \\(x^2-4\\lt 0\\) is:",
      options: ["\\(\\{x\\mid -2<x<2\\}\\)","\\(\\{x\\mid x<-2 \\text{ or } x>2\\}\\)","\\(\\{x\\mid x>-2\\}\\)","\\(\\{x\\mid x<2\\}\\)"],
      ans: "\\(\\{x\\mid -2<x<2\\}\\)",
      reason: "\\(x^2\\lt 4\\Rightarrow-2\\lt x\\lt 2\\)."
    },
    {
      q: "The solution set of \\(x^2-9\\ge0\\) is:",
      options: ["\\(\\{x\\mid -3\\le x\\le3\\}\\)","\\(\\{x\\mid x\\le-3\\}\\)","\\(\\{x\\mid x\\ge3\\}\\)","\\(\\{x\\mid x\\le-3 \\text{ or } x\\ge3\\}\\)"],
      ans: "\\(\\{x\\mid x\\le-3 \\text{ or } x\\ge3\\}\\)",
      reason: "\\(x^2\\ge9\\Rightarrow x\\le-3\\) or \\(x\\ge3\\)."
    },
    {
      q: "The solution set of \\((x-3)(x+9)\\le0\\) is:",
      options: ["\\(\\{x\\mid -9\\le x\\le3\\}\\)","\\(\\{x\\mid -3\\le x\\le9\\}\\)","\\(\\{x\\mid x\\le-9 \\text{ or } x\\ge3\\}\\)","\\(\\{x\\mid x\\ge3\\}\\)"],
      ans: "\\(\\{x\\mid -9\\le x\\le3\\}\\)",
      reason: "\\((x-3)(x+9)\\le0\\) between the roots: \\(-9\\le x\\le3\\)."
    },
    {
      q: "If \\(a>0\\) in \\(ax^2+bx+c>0\\) and the discriminant is negative, the solution set is:",
      options: ["All real numbers","A single point","The empty set","Between the two roots"],
      ans: "All real numbers",
      reason: "With \\(a>0\\) and \\(D\\lt 0\\) the parabola lies above the axis, so \\(ax^2+bx+c>0\\) for all real \\(x\\)."
    },
    {
      q: "If \\(a>0\\) in \\(ax^2+bx+c\\lt 0\\) and the discriminant is negative, the solution set is:",
      options: ["All real numbers","The empty set (no solution)","A single point","Between the roots"],
      ans: "The empty set (no solution)",
      reason: "With \\(a>0\\) and \\(D\\lt 0\\) the expression is never negative, so the solution set is empty."
    },
    {
      q: "For a quadratic expression \\((x-p)(x-q)\\) with \\(p\\lt q\\), the expression is negative when:",
      options: ["\\(x<p\\) only","\\(x>q\\) only","\\(x<p\\) or \\(x>q\\)","\\(p<x<q\\)"],
      ans: "\\(p<x<q\\)",
      reason: "The product \\((x-p)(x-q)\\) is negative between the roots: \\(p\\lt x\\lt q\\)."
    },
    {
      q: "For a quadratic expression \\((x-p)(x-q)\\) with \\(p\\lt q\\), the expression is positive when:",
      options: ["\\(p<x<q\\)","\\(x<p\\) or \\(x>q\\)","\\(x=p\\) only","\\(x=q\\) only"],
      ans: "\\(x<p\\) or \\(x>q\\)",
      reason: "It is positive outside the roots: \\(x\\lt p\\) or \\(x>q\\)."
    },
    {
      q: "Solve \\(x^2-x-6>0\\).",
      options: ["\\(\\{x\\mid x>3\\}\\)","\\(\\{x\\mid -2<x<3\\}\\)","\\(\\{x\\mid x<-2\\}\\)","\\(\\{x\\mid x<-2 \\text{ or } x>3\\}\\)"],
      ans: "\\(\\{x\\mid x<-2 \\text{ or } x>3\\}\\)",
      reason: "\\(x^2-x-6=(x-3)(x+2)>0\\Rightarrow x\\lt -2\\) or \\(x>3\\)."
    },
    {
      q: "Solve \\(x^2-5x+6\\le0\\).",
      options: ["\\(\\{x\\mid 2\\le x\\le3\\}\\)","\\(\\{x\\mid x\\le2 \\text{ or } x\\ge3\\}\\)","\\(\\{x\\mid x\\ge3\\}\\)","\\(\\{x\\mid x\\le2\\}\\)"],
      ans: "\\(\\{x\\mid 2\\le x\\le3\\}\\)",
      reason: "\\((x-2)(x-3)\\le0\\Rightarrow2\\le x\\le3\\)."
    },
    {
      q: "A quadratic inequality can be solved using:",
      options: ["The sign (test point) method after finding the roots","Logarithms","Cramer's rule","Matrix inversion"],
      ans: "The sign (test point) method after finding the roots",
      reason: "Find the roots and use the sign (test point) method on the intervals."
    },
    {
      q: "The boundary points obtained by solving the associated quadratic equation divide the number line into:",
      options: ["Exactly two parts always","An infinite number of parts","At most three parts","Exactly four parts"],
      ans: "At most three parts",
      reason: "Two roots split the line into three parts (one or no root gives fewer), so at most three."
    },
    {
      q: "A solution of a system of linear inequalities is an ordered pair that:",
      options: ["Satisfies every inequality in the system","Satisfies at least one inequality","Lies only on the boundary","Satisfies none of the inequalities"],
      ans: "Satisfies every inequality in the system",
      reason: "A solution of the system satisfies every inequality in it."
    },
    {
      q: "The graph of a system of linear inequalities is:",
      options: ["Always the whole plane","A single line","The union of all shaded regions","The overlapping (common) region of all the individual graphs"],
      ans: "The overlapping (common) region of all the individual graphs",
      reason: "The graph of the system is the overlap (common region) of the individual graphs."
    },
    {
      q: "Does the system \\(x-y>5\\) and \\(x-y\\lt 1\\) have a solution?",
      options: ["Yes, infinitely many solutions","Yes, exactly one solution","Yes, exactly two solutions","No, the system is inconsistent"],
      ans: "No, the system is inconsistent",
      reason: "\\(x-y>5\\) and \\(x-y\\lt 1\\) cannot both hold, so the system is inconsistent."
    },
    {
      q: "Which ordered pair is a solution of \\(3x-y\\ge4\\)?",
      options: ["\\((2,1)\\)","\\((0,0)\\)","\\((-1,-1)\\)","\\((0,5)\\)"],
      ans: "\\((2,1)\\)",
      reason: "For \\((2,1)\\): \\(3(2)-1=5\\ge4\\) is true. The other points give \\(0,\\ -2,\\ -5\\)."
    },
    {
      q: "Which ordered pair is a solution of the system \\(x-2y\\le4\\) and \\(3x+y>1\\)?",
      options: ["\\((2,0)\\)","\\((-2,1)\\)","\\((-1,-3)\\)","\\((0,-2)\\)"],
      ans: "\\((2,0)\\)",
      reason: "For \\((2,0)\\): \\(2\\le4\\) and \\(6>1\\), both true. The other points each fail one inequality."
    },
    {
      q: "\\((4,3)\\) is a solution of the inequality:",
      options: ["\\(x+y<5\\)","\\(2x-y<7\\)","\\(x-y>3\\)","\\(3x+2y<10\\)"],
      ans: "\\(2x-y<7\\)",
      reason: "For \\((4,3)\\): \\(2x-y=5\\lt 7\\) is true. The others give \\(7\\lt 5\\), \\(1>3\\) and \\(18\\lt 10\\), all false."
    },
    {
      q: "The region satisfying both \\(3x+4y\\ge12\\) and \\(5x+6y\\le30\\) is:",
      options: ["The empty set always","The intersection (overlap) of the two half-planes","The union of the two half-planes","Only the boundary lines"],
      ans: "The intersection (overlap) of the two half-planes",
      reason: "A system is solved by the points common to both half-planes: their intersection."
    },
    {
      q: "For the system \\(8x+5y\\le40\\) and \\(x\\ge0\\), the region is restricted to:",
      options: ["Only the \\(y\\)-axis","The right half-plane (\\(x\\ge0\\)) intersected with the region below the line \\(8x+5y=40\\)","The left half-plane only","The entire plane"],
      ans: "The right half-plane (\\(x\\ge0\\)) intersected with the region below the line \\(8x+5y=40\\)",
      reason: "Both inequalities must hold: \\(x\\ge0\\) (right of the y-axis) and on/below the line \\(8x+5y=40\\)."
    },
    {
      q: "A rectangle with vertices \\((2,1),(2,4),(6,4),(6,1)\\) can be described using inequalities:",
      options: ["\\(x\\ge2\\) and \\(y\\ge1\\) only","\\(2\\le x\\le4\\) and \\(1\\le y\\le6\\)","\\(x\\le2\\) and \\(y\\le1\\) only","\\(2\\le x\\le6\\) and \\(1\\le y\\le4\\)"],
      ans: "\\(2\\le x\\le6\\) and \\(1\\le y\\le4\\)",
      reason: "The rectangle spans \\(x\\) from 2 to 6 and \\(y\\) from 1 to 4."
    },
    {
      q: "A triangle's shaded region can generally be described by:",
      options: ["A system of equations only","A quadratic inequality","The intersection of three linear inequalities, one for each side","A single linear inequality"],
      ans: "The intersection of three linear inequalities, one for each side",
      reason: "A triangle has three sides, so it needs three linear inequalities (one per side) whose regions intersect."
    },
    {
      q: "For two linear inequalities in two unknowns to be solved simultaneously, we look for:",
      options: ["The origin only","The union of all points in the plane","The region common to both graphs","Only the points on both boundary lines"],
      ans: "The region common to both graphs",
      reason: "A simultaneous solution is a point common to both graphs."
    },
    {
      q: "If the boundary lines of two inequalities are parallel and the shaded regions don't overlap, the system has:",
      options: ["Exactly two solutions","Infinitely many solutions","No solution","Exactly one solution"],
      ans: "No solution",
      reason: "Parallel boundaries with non-overlapping shaded regions leave no common point, so no solution."
    },
    {
      q: "The inequality \\(y\\ge2x\\) combined with \\(y\\lt -x+4\\) describes:",
      options: ["The region below both lines","The region above the line \\(y=2x\\) and below the line \\(y=-x+4\\)","The region above both lines","Only the intersection point of the two lines"],
      ans: "The region above the line \\(y=2x\\) and below the line \\(y=-x+4\\)",
      reason: "\\(y\\ge2x\\) is above the line \\(y=2x\\), and \\(y\\lt -x+4\\) is below the line \\(y=-x+4\\)."
    },
    {
      q: "For the system \\(x>-2\\) and \\(2x+y\\lt 3\\), a valid test point to check the solution region could be:",
      options: ["A point outside the coordinate plane","Any point on the line \\(x=-2\\)","The origin \\((0,0)\\), if it does not lie on either boundary line","Any point on the line \\(2x+y=3\\)"],
      ans: "The origin \\((0,0)\\), if it does not lie on either boundary line",
      reason: "A test point should not lie on a boundary line. The origin satisfies neither \\(x=-2\\) nor \\(2x+y=3\\), so it can be tested."
    },
    {
      q: "In a system of inequalities describing a bounded shaded region (like a rectangle or triangle), the number of boundary lines needed equals:",
      options: ["Always three","Always two","The number of sides of the region","Always four"],
      ans: "The number of sides of the region",
      reason: "Each side of a bounded region needs its own boundary line, so the number of lines equals the number of sides."
    },
    {
      q: "For the system \\(y-x\\ge1\\) and \\(y-4\\le4\\), the second inequality simplifies to:",
      options: ["\\(y\\le8\\)","\\(y\\le4\\)","\\(y\\ge4\\)","\\(y\\ge8\\)"],
      ans: "\\(y\\le8\\)",
      reason: "\\(y-4\\le4\\Rightarrow y\\le8\\)."
    },
    {
      q: "A point lying exactly on the boundary line of \\(ax+by\\le c\\):",
      options: ["Is included in the solution set","Is included only if \\(a=b\\)","Cannot be determined","Is never included in the solution set"],
      ans: "Is included in the solution set",
      reason: "For \\(\\le\\) the boundary is included, so a point on it satisfies the inequality."
    },
    {
      q: "A point lying exactly on the boundary line of \\(ax+by\\lt c\\) (strict inequality):",
      options: ["Is included only if the point is the origin","Is always included","Cannot be determined","Is not included in the solution set"],
      ans: "Is not included in the solution set",
      reason: "For a strict inequality the boundary is excluded, so a point on it does not satisfy the inequality."
    },
    {
      q: "To describe the shaded region for a rectangle with vertices \\((2,1),(2,4),(6,4),(6,1)\\), we need inequalities involving:",
      options: ["Only \\(x\\)","Neither variable","Both \\(x\\) and \\(y\\) bounds","Only \\(y\\)"],
      ans: "Both \\(x\\) and \\(y\\) bounds",
      reason: "A rectangle has bounds in both directions, so inequalities in both \\(x\\) and \\(y\\) are needed."
    },
    {
      q: "To describe a triangular shaded region with three distinct vertices, we generally need:",
      options: ["One quadratic inequality","Three linear inequalities","One linear inequality","Four linear inequalities"],
      ans: "Three linear inequalities",
      reason: "A triangle has three sides, so three linear inequalities are needed."
    },
    {
      q: "The test point method for graphing a linear inequality involves:",
      options: ["Picking a point not on the boundary line and checking if it satisfies the inequality","Graphing without any test point","Picking a point on the boundary line","Always picking the point \\((1,1)\\)"],
      ans: "Picking a point not on the boundary line and checking if it satisfies the inequality",
      reason: "Choose a point not on the boundary and substitute it: if true, shade its side."
    },
    {
      q: "If substituting a test point into an inequality gives a false statement, then:",
      options: ["The whole plane is shaded","The region not containing that point is shaded","No region is shaded","The region containing that point is shaded"],
      ans: "The region not containing that point is shaded",
      reason: "If the test point gives a false statement, the other side of the line is the solution region."
    },
    {
      q: "A real-world quantity such as weight, cost, or time that \"cannot exceed\" a limit is best modeled using:",
      options: ["\\(>\\)","\\(\\neq\\)","\\(=\\)","\\(\\le\\)"],
      ans: "\\(\\le\\)",
      reason: "\"Cannot exceed\" means \"at most\", so use \\(\\le\\)."
    },
    {
      q: "A real-world quantity that must be \"more than\" a certain amount is modeled using:",
      options: ["\\(\\le\\)","\\(=\\)","\\(<\\)","\\(>\\)"],
      ans: "\\(>\\)",
      reason: "\"More than\" means strictly greater, so use \\(>\\)."
    },
    {
      q: "If a bag already weighing 26.5 pounds must not exceed a 60-pound limit, the additional weight \\(w\\) that can be added satisfies:",
      options: ["\\(w\\ge33.5\\)","\\(w\\le33.5\\)","\\(w\\le60\\)","\\(w\\ge26.5\\)"],
      ans: "\\(w\\le33.5\\)",
      reason: "\\(26.5+w\\le60\\Rightarrow w\\le33.5\\)."
    },
    {
      q: "In interpreting a graph of a linear inequality, a shaded region represents:",
      options: ["Nothing meaningful","All the points satisfying the inequality","Only the boundary points","Points that do NOT satisfy the inequality"],
      ans: "All the points satisfying the inequality",
      reason: "The shaded region contains all points that satisfy the inequality."
    },
    {
      q: "When both inequalities of a system are strict, have the same boundary line but opposite shading, the solution set is:",
      options: ["Infinite in one direction only","Just the boundary line","Empty (no common region)","The entire plane"],
      ans: "Empty (no common region)",
      reason: "For example \\(y>2x\\) and \\(y\\lt 2x\\) cannot hold together, so no point satisfies both and the solution set is empty."
    },
    {
      q: "A system of linear inequalities used to model a real-world constraint (such as a budget or a weight limit) typically has:",
      options: ["Exactly one inequality regardless of the number of constraints","No inequalities, only equations","Only quadratic inequalities","One inequality per constraint"],
      ans: "One inequality per constraint",
      reason: "Each real-world constraint is written as its own inequality, so there is one inequality per constraint."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Constraint</th><th>Inequality</th></tr><tr><td>Budget</td><td>\\(5x+3y\\le60\\)</td></tr><tr><td>Minimum items</td><td>\\(x+y\\ge8\\)</td></tr><tr><td>Non-negativity</td><td>\\(x\\ge0,\\ y\\ge0\\)</td></tr></table><p>A shopkeeper buys \\(x\\) chairs at Rs.\\,5 each and \\(y\\) stools at Rs.\\,3 each, subject to the constraints above.</p></div>Is the point \\((6,4)\\) a solution of \\(5x+3y\\le60\\)?",
      options: ["Yes, but only on the boundary","No, since \\(x+y<8\\)","No, since it exceeds 60","Yes, since \\(5(6)+3(4)=42\\le60\\)"],
      ans: "Yes, since \\(5(6)+3(4)=42\\le60\\)",
      reason: "\\(5(6)+3(4)=42\\le60\\), so \\((6,4)\\) satisfies the budget constraint."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Constraint</th><th>Inequality</th></tr><tr><td>Budget</td><td>\\(5x+3y\\le60\\)</td></tr><tr><td>Minimum items</td><td>\\(x+y\\ge8\\)</td></tr><tr><td>Non-negativity</td><td>\\(x\\ge0,\\ y\\ge0\\)</td></tr></table><p>A shopkeeper buys \\(x\\) chairs at Rs.\\,5 each and \\(y\\) stools at Rs.\\,3 each, subject to the constraints above.</p></div>Is the point \\((10,10)\\) a solution of the budget constraint \\(5x+3y\\le60\\)?",
      options: ["No, since \\(5(10)+3(10)=80>60\\)","Yes, since \\(x+y\\ge8\\)","No, since \\(x<0\\)","Yes, since it satisfies the constraint"],
      ans: "No, since \\(5(10)+3(10)=80>60\\)",
      reason: "\\(5(10)+3(10)=80>60\\), so \\((10,10)\\) does not satisfy the budget constraint."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Constraint</th><th>Inequality</th></tr><tr><td>Budget</td><td>\\(5x+3y\\le60\\)</td></tr><tr><td>Minimum items</td><td>\\(x+y\\ge8\\)</td></tr><tr><td>Non-negativity</td><td>\\(x\\ge0,\\ y\\ge0\\)</td></tr></table><p>A shopkeeper buys \\(x\\) chairs at Rs.\\,5 each and \\(y\\) stools at Rs.\\,3 each, subject to the constraints above.</p></div>The boundary line \\(5x+3y=60\\) is drawn:",
      options: ["Not drawn","As a curve","Dashed, since it is strict","Solid, since the inequality includes equality"],
      ans: "Solid, since the inequality includes equality",
      reason: "The inequality \\(5x+3y\\le60\\) includes equality, so the boundary line is solid."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Constraint</th><th>Inequality</th></tr><tr><td>Budget</td><td>\\(5x+3y\\le60\\)</td></tr><tr><td>Minimum items</td><td>\\(x+y\\ge8\\)</td></tr><tr><td>Non-negativity</td><td>\\(x\\ge0,\\ y\\ge0\\)</td></tr></table><p>A shopkeeper buys \\(x\\) chairs at Rs.\\,5 each and \\(y\\) stools at Rs.\\,3 each, subject to the constraints above.</p></div>The feasible region satisfying all the constraints lies:",
      options: ["In the entire coordinate plane","Only on the boundary lines","In the region common to all the shaded half-planes","Outside all the shaded regions"],
      ans: "In the region common to all the shaded half-planes",
      reason: "A feasible region must satisfy all constraints, so it is the common region of all the half-planes."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Roots</th></tr><tr><td>\\(x^2-2x-15=0\\)</td><td>?</td></tr></table><p>Solve the quadratic inequality \\(x^2-2x-15>0\\) using the sign (test point) method.</p></div>The corresponding equation \\(x^2-2x-15=0\\) has roots:",
      options: ["\\(x=-5\\) and \\(x=3\\)","\\(x=-5\\) and \\(x=-3\\)","\\(x=5\\) and \\(x=-3\\)","\\(x=5\\) and \\(x=3\\)"],
      ans: "\\(x=5\\) and \\(x=-3\\)",
      reason: "\\(x^2-2x-15=(x-5)(x+3)=0\\Rightarrow x=5,-3\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Roots</th></tr><tr><td>\\(x^2-2x-15=0\\)</td><td>?</td></tr></table><p>Solve the quadratic inequality \\(x^2-2x-15>0\\) using the sign (test point) method.</p></div>These roots divide the number line into:",
      options: ["Three intervals","One interval","Two intervals","Four intervals"],
      ans: "Three intervals",
      reason: "Two critical points split the number line into three intervals."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Roots</th></tr><tr><td>\\(x^2-2x-15=0\\)</td><td>?</td></tr></table><p>Solve the quadratic inequality \\(x^2-2x-15>0\\) using the sign (test point) method.</p></div>Testing \\(x=0\\) in \\(x^2-2x-15\\) gives:",
      options: ["0","15 (positive)","\\(-15\\) (negative)","Cannot be tested"],
      ans: "\\(-15\\) (negative)",
      reason: "At \\(x=0\\): \\(0-0-15=-15\\), which is negative."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Equation</th><th>Roots</th></tr><tr><td>\\(x^2-2x-15=0\\)</td><td>?</td></tr></table><p>Solve the quadratic inequality \\(x^2-2x-15>0\\) using the sign (test point) method.</p></div>The solution set of \\(x^2-2x-15>0\\) is:",
      options: ["\\(\\{x\\mid -3<x<5\\}\\)","\\(\\{x\\mid x>5\\}\\)","\\(\\{x\\mid x<-3 \\text{ or } x>5\\}\\)","\\(\\{x\\mid x<-3\\}\\)"],
      ans: "\\(\\{x\\mid x<-3 \\text{ or } x>5\\}\\)",
      reason: "The expression is positive outside the roots (the test at \\(x=0\\), in the middle, is negative): \\(x\\lt -3\\) or \\(x>5\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>P</td><td>\\((1,4)\\)</td></tr><tr><td>Q</td><td>\\((3,0)\\)</td></tr><tr><td>R</td><td>\\((5,5)\\)</td></tr></table><p>Consider the system of inequalities \\(y\\le2x\\) and \\(y\\ge x-2\\).</p></div>Is point P a solution of \\(y\\le2x\\)?",
      options: ["Yes, on the boundary","Cannot be determined","No, since \\(4>2(1)=2\\)","Yes, since \\(4\\le2\\)"],
      ans: "No, since \\(4>2(1)=2\\)",
      reason: "For \\(P(1,4)\\): \\(y\\le2x\\) means \\(4\\le2\\), which is false since \\(4>2\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>P</td><td>\\((1,4)\\)</td></tr><tr><td>Q</td><td>\\((3,0)\\)</td></tr><tr><td>R</td><td>\\((5,5)\\)</td></tr></table><p>Consider the system of inequalities \\(y\\le2x\\) and \\(y\\ge x-2\\).</p></div>Is point Q a solution of \\(y\\ge x-2\\)?",
      options: ["No, since \\(0<3-2=1\\)","Yes, since \\(0\\ge1\\)","Cannot be determined","Yes, on the boundary"],
      ans: "No, since \\(0<3-2=1\\)",
      reason: "For \\(Q(3,0)\\): \\(y\\ge x-2\\) means \\(0\\ge1\\), which is false since \\(0\\lt 1\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>P</td><td>\\((1,4)\\)</td></tr><tr><td>Q</td><td>\\((3,0)\\)</td></tr><tr><td>R</td><td>\\((5,5)\\)</td></tr></table><p>Consider the system of inequalities \\(y\\le2x\\) and \\(y\\ge x-2\\).</p></div>Is point R a solution of both inequalities?",
      options: ["Yes, since \\(5\\le10\\) and \\(5\\ge3\\)","No, it fails \\(y\\ge x-2\\)","No, it fails \\(y\\le2x\\)","No, it fails both"],
      ans: "Yes, since \\(5\\le10\\) and \\(5\\ge3\\)",
      reason: "For \\(R(5,5)\\): \\(5\\le10\\) and \\(5\\ge3\\), both true."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Point</th><th>Coordinates</th></tr><tr><td>P</td><td>\\((1,4)\\)</td></tr><tr><td>Q</td><td>\\((3,0)\\)</td></tr><tr><td>R</td><td>\\((5,5)\\)</td></tr></table><p>Consider the system of inequalities \\(y\\le2x\\) and \\(y\\ge x-2\\).</p></div>The solution region of the system is:",
      options: ["The union of the two half-planes","The overlap of the region below \\(y=2x\\) and above \\(y=x-2\\)","The region below both lines","The region above both lines"],
      ans: "The overlap of the region below \\(y=2x\\) and above \\(y=x-2\\)",
      reason: "The system is \\(y\\le2x\\) (below that line) and \\(y\\ge x-2\\) (above that line): the overlap of the two regions."
    }
    ];
  }
});
