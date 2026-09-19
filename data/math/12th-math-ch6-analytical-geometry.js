// Class 12 Math -- Chapter 6: Analytical Geometry
// Converted from the 200-question Class 12 MCQ bank (chapters 6-7), with
// short explanations added for every question.
// NOTE: Q86 and Q87 answer keys were corrected (source had them swapped;
// see delivery notes for the math verification).
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch6",
  label: "Chapter 6: Analytical Geometry",
  order: 6,
  questions: function () {
    return [
      {
        q: "A set of straight lines that all pass through a single common point is called:",
        options: ["Parallel lines", "Concurrent lines", "Collinear lines", "Perpendicular lines"],
        ans: "Concurrent lines",
        reason: "Lines that all pass through one shared point are, by definition, called concurrent lines."
      },
      {
        q: "If the determinant of the coefficients of three lines \\(a_ix+b_iy+c_i=0\\), \\(i=1,2,3\\), is zero, then the three lines are:",
        options: ["Concurrent", "Intersecting in pairs only", "Parallel", "Perpendicular"],
        ans: "Concurrent",
        reason: "The vanishing of the coefficient determinant is precisely the standard test for three lines being concurrent."
      },
      {
        q: "Which of the following equations is homogeneous?",
        options: ["\\(x^2+5x=0\\)", "\\(2x+3y+1=0\\)", "\\(x^2+5xy=0\\)", "\\(4y+8=0\\)"],
        ans: "\\(x^2+5xy=0\\)",
        reason: "Every term in \\(x^2+5xy=0\\) has the same total degree (2), which is the defining property of a homogeneous equation."
      },
      {
        q: "Which of the following equations is not homogeneous?",
        options: ["\\(x^2+3xy=0\\)", "\\(2x-3y=0\\)", "\\(xy^2+y^3=0\\)", "\\(5x-5=0\\)"],
        ans: "\\(5x-5=0\\)",
        reason: "The terms \\(5x\\) (degree 1) and \\(-5\\) (degree 0) have different degrees, so this equation is not homogeneous."
      },
      {
        q: "The equation \\(ax+by+c=0\\) passes through the origin if:",
        options: ["\\(a=0\\)", "\\(c=0\\)", "\\(b=0\\)", "\\(a=b=c=0\\)"],
        ans: "\\(c=0\\)",
        reason: "Substituting \\((0,0)\\) into \\(ax+by+c=0\\) gives \\(c=0\\) as the condition for passing through the origin."
      },
      {
        q: "The lines represented by \\(ax^2+2hxy+by^2=0\\) are real and distinct if:",
        options: ["\\(h^2>ab\\)", "\\(h^2=ab\\)", "\\(h^2<ab\\)", "\\(h^2\\le ab\\)"],
        ans: "\\(h^2>ab\\)",
        reason: "The pair of lines is real and distinct exactly when the discriminant condition \\(h^2>ab\\) holds."
      },
      {
        q: "The lines represented by \\(ax^2+2hxy+by^2=0\\) are coincident if:",
        options: ["\\(h^2>ab\\)", "\\(h^2=ab\\)", "\\(h^2<ab\\)", "\\(h^2\\le ab\\)"],
        ans: "\\(h^2=ab\\)",
        reason: "The lines coincide exactly when \\(h^2=ab\\), the boundary case of the discriminant condition."
      },
      {
        q: "The lines represented by \\(ax^2+2hxy+by^2=0\\) are imaginary if:",
        options: ["\\(h^2>ab\\)", "\\(h^2=ab\\)", "\\(h^2<ab\\)", "\\(h^2\\ge ab\\)"],
        ans: "\\(h^2<ab\\)",
        reason: "The lines are imaginary (only the origin is real) exactly when \\(h^2<ab\\)."
      },
      {
        q: "The lines represented by \\(ax^2+2hxy+by^2=0\\) are perpendicular if:",
        options: ["\\(a-b=0\\)", "\\(b-a=0\\)", "\\(a+b=1\\)", "\\(a+b=0\\)"],
        ans: "\\(a+b=0\\)",
        reason: "The lines represented are perpendicular exactly when the sum of the coefficients of \\(x^2\\) and \\(y^2\\) is zero."
      },
      {
        q: "Half of the determinant formed by the coordinates of the vertices of a triangle gives its:",
        options: ["Perimeter", "Area", "Volume", "Both (a) and (b)"],
        ans: "Area",
        reason: "Half the absolute value of the vertex-coordinate determinant is precisely the formula for a triangle's area."
      },
      {
        q: "If the determinant formed by three points is zero, then the points are:",
        options: ["Collinear", "Non-collinear", "Imaginary", "Concurrent"],
        ans: "Collinear",
        reason: "A zero area (determinant) means the three points don't form a proper triangle, i.e. they are collinear."
      },
      {
        q: "The point of intersection of the three angle bisectors of a triangle is called the:",
        options: ["Incenter", "Circumcenter", "Centroid", "Orthocenter"],
        ans: "Incenter",
        reason: "The incenter is defined as the point where the three internal angle bisectors of a triangle meet."
      },
      {
        q: "The point of intersection of the right bisectors of the sides of a triangle is called the:",
        options: ["Incenter", "Circumcenter", "Centroid", "Orthocenter"],
        ans: "Circumcenter",
        reason: "The circumcenter is defined as the point where the perpendicular bisectors of the sides meet."
      },
      {
        q: "The point of intersection of the three medians of a triangle is called the:",
        options: ["Incenter", "Circumcenter", "Centroid", "Orthocenter"],
        ans: "Centroid",
        reason: "The centroid is defined as the point where the three medians of a triangle meet."
      },
      {
        q: "The point of intersection of the three altitudes of a triangle is called the:",
        options: ["Incenter", "Circumcenter", "Centroid", "Orthocenter"],
        ans: "Orthocenter",
        reason: "The orthocenter is defined as the point where the three altitudes of a triangle meet."
      },
      {
        q: "Which of the following lines is perpendicular to \\(y=-\\dfrac12x\\)?",
        options: ["\\(y=2x\\)", "\\(y=-2x\\)", "\\(2y=x\\)", "\\(2y=-x\\)"],
        ans: "\\(y=2x\\)",
        reason: "The perpendicular slope is the negative reciprocal of \\(-\\frac12\\), which is 2, matching \\(y=2x\\)."
      },
      {
        q: "Two non-parallel lines \\(l_1:a_1x+b_1y+c_1=0\\) and \\(l_2:a_2x+b_2y+c_2=0\\) intersect at exactly:",
        options: ["Zero points", "One point", "Two points", "Infinitely many points"],
        ans: "One point",
        reason: "Two lines that aren't parallel meet at exactly one point in the plane."
      },
      {
        q: "The point of intersection of \\(a_1x+b_1y+c_1=0\\) and \\(a_2x+b_2y+c_2=0\\) has \\(x\\)-coordinate:",
        options: ["\\(\\dfrac{b_1c_2-b_2c_1}{a_1b_2-a_2b_1}\\)", "\\(\\dfrac{a_1c_2-a_2c_1}{a_1b_2-a_2b_1}\\)", "\\(\\dfrac{b_1c_2-b_2c_1}{a_1b_1-a_2b_2}\\)", "\\(\\dfrac{c_1-c_2}{a_1-a_2}\\)"],
        ans: "\\(\\dfrac{b_1c_2-b_2c_1}{a_1b_2-a_2b_1}\\)",
        reason: "This is the standard Cramer's-rule expression for the x-coordinate of the intersection of two lines."
      },
      {
        q: "Two lines \\(a_1x+b_1y+c_1=0\\) and \\(a_2x+b_2y+c_2=0\\) are parallel if:",
        options: ["\\(a_1b_2-a_2b_1=0\\)", "\\(a_1a_2+b_1b_2=0\\)", "\\(a_1b_1-a_2b_2=0\\)", "\\(a_1+a_2=0\\)"],
        ans: "\\(a_1b_2-a_2b_1=0\\)",
        reason: "Two lines are parallel exactly when their coefficient determinant \\(a_1b_2-a_2b_1\\) vanishes."
      },
      {
        q: "Two lines \\(l_1\\) and \\(l_2\\) with slopes \\(m_1\\) and \\(m_2\\) are perpendicular if:",
        options: ["\\(m_1=m_2\\)", "\\(m_1m_2=1\\)", "\\(m_1m_2=-1\\)", "\\(m_1+m_2=0\\)"],
        ans: "\\(m_1m_2=-1\\)",
        reason: "Two lines are perpendicular exactly when the product of their slopes equals \\(-1\\)."
      },
      {
        q: "The point of intersection of the lines \\(x-y=0\\) and \\(x+y=4\\) is:",
        options: ["\\((2,2)\\)", "\\((0,4)\\)", "\\((4,0)\\)", "\\((-2,-2)\\)"],
        ans: "\\((2,2)\\)",
        reason: "Adding the two equations gives \\(2x=4\\), so \\(x=2\\) and, from \\(x=y\\), \\(y=2\\)."
      },
      {
        q: "The point of intersection of \\(2x+y-5=0\\) and \\(x-y+2=0\\) is:",
        options: ["\\((1,3)\\)", "\\((2,1)\\)", "\\((3,1)\\)", "\\((1,2)\\)"],
        ans: "\\((1,3)\\)",
        reason: "Adding the equations eliminates y: \\(3x-3=0\\Rightarrow x=1\\), then \\(y=x+2=3\\)."
      },
      {
        q: "If two lines have equal slopes but different \\(y\\)-intercepts, then the lines are:",
        options: ["Concurrent", "Parallel and distinct", "Perpendicular", "Coincident"],
        ans: "Parallel and distinct",
        reason: "Lines with identical slopes but different y-intercepts never meet, making them parallel and distinct."
      },
      {
        q: "If \\(a_1b_2-a_2b_1\\ne0\\) for two lines, then the lines are:",
        options: ["Parallel", "Coincident", "Non-parallel (they intersect at one point)", "Perpendicular only"],
        ans: "Non-parallel (they intersect at one point)",
        reason: "A nonzero coefficient determinant means the lines aren't parallel, so they intersect at exactly one point."
      },
      {
        q: "Three or more lines that pass through one common point are called:",
        options: ["Parallel lines", "Concurrent lines", "Skew lines", "Perpendicular lines"],
        ans: "Concurrent lines",
        reason: "By definition, three or more lines sharing a single common point are called concurrent lines."
      },
      {
        q: "To check whether three lines are concurrent using the determinant method, we test whether:",
        options: ["The sum of coefficients is zero", "The determinant of the coefficients is zero", "The product of slopes is \\(-1\\)", "The lines have equal intercepts"],
        ans: "The determinant of the coefficients is zero",
        reason: "The determinant test for concurrency checks whether the coefficient determinant of the three lines vanishes."
      },
      {
        q: "In the direct method of checking concurrency, we first find the point of intersection of two lines and then check whether it:",
        options: ["Lies on the third line", "Lies at the origin", "Bisects the third line", "Is equidistant from both lines"],
        ans: "Lies on the third line",
        reason: "The direct method finds where two lines meet, then checks whether that same point also satisfies the third line's equation."
      },
      {
        q: "The three lines \\(3x+y-3=0\\), \\(5x+ky-3=0\\), \\(3x-y-2=0\\) are given to be concurrent. Using the determinant condition, the value of \\(k\\) is:",
        options: ["\\(\\dfrac73\\)", "\\(-\\dfrac73\\)", "\\(\\dfrac37\\)", "\\(-\\dfrac37\\)"],
        ans: "\\(-\\dfrac73\\)",
        reason: "Expanding the coefficient determinant and setting it to zero gives \\(3k+7=0\\), so \\(k=-\\dfrac73\\)."
      },
      {
        q: "In a triangle, the three perpendicular bisectors of the sides always meet at a point that is:",
        options: ["Equidistant from the three vertices", "Equidistant from the three sides", "The midpoint of one side", "Always outside the triangle"],
        ans: "Equidistant from the three vertices",
        reason: "Since each perpendicular bisector consists of points equidistant from two vertices, their common meeting point is equidistant from all three vertices."
      },
      {
        q: "The centroid of a triangle divides each median in the ratio (vertex : opposite side), starting from the vertex:",
        options: ["\\(1:1\\)", "\\(1:2\\)", "\\(2:1\\)", "\\(3:1\\)"],
        ans: "\\(2:1\\)",
        reason: "This is the well-known centroid property: it divides each median in the ratio 2:1, measured from the vertex."
      },
      {
        q: "For a right-angled triangle, the orthocenter is located at:",
        options: ["The midpoint of the hypotenuse", "The vertex containing the right angle", "The centroid", "Outside the triangle"],
        ans: "The vertex containing the right angle",
        reason: "In a right triangle, two of the altitudes coincide with the legs, meeting exactly at the right-angle vertex."
      },
      {
        q: "The three points -- circumcenter, centroid and orthocenter -- of any triangle are always:",
        options: ["Concyclic", "Collinear", "Equidistant from each vertex", "Coincident"],
        ans: "Collinear",
        reason: "These three centers always lie on a single line, known as the Euler line."
      },
      {
        q: "For the triangle with vertices \\(A(0,0)\\), \\(B(6,0)\\), \\(C(0,6)\\), the centroid is:",
        options: ["\\((2,2)\\)", "\\((3,3)\\)", "\\((6,6)\\)", "\\((1,1)\\)"],
        ans: "\\((2,2)\\)",
        reason: "The centroid is the average of the vertices' coordinates: \\(\\left(\\frac{0+6+0}3,\\frac{0+0+6}3\\right)=(2,2)\\)."
      },
      {
        q: "The circumcenter of triangle \\(A(0,0)\\), \\(B(6,0)\\), \\(C(0,6)\\) is:",
        options: ["\\((0,0)\\)", "\\((3,3)\\)", "\\((6,6)\\)", "\\((2,2)\\)"],
        ans: "\\((3,3)\\)",
        reason: "By symmetry of this right triangle, the circumcenter lies at the midpoint of the hypotenuse, \\((3,3)\\)."
      },
      {
        q: "To find the equation of an altitude of a triangle through vertex \\(A\\), we use the point \\(A\\) together with a slope equal to:",
        options: ["The slope of \\(BC\\)", "The negative reciprocal of the slope of \\(BC\\)", "The slope of \\(AB\\)", "Zero, always"],
        ans: "The negative reciprocal of the slope of \\(BC\\)",
        reason: "An altitude is perpendicular to the opposite side, so its slope is the negative reciprocal of that side's slope."
      },
      {
        q: "To find the right bisector of side \\(BC\\) of a triangle, we require:",
        options: ["The midpoint of \\(BC\\) and slope \\(=-1/(\\text{slope of }BC)\\)", "The midpoint of \\(BC\\) and slope = slope of \\(BC\\)", "Vertex \\(A\\) and slope of \\(BC\\)", "Only the length of \\(BC\\)"],
        ans: "The midpoint of \\(BC\\) and slope \\(=-1/(\\text{slope of }BC)\\)",
        reason: "A perpendicular bisector passes through the segment's midpoint with a slope that is the negative reciprocal of the segment's own slope."
      },
      {
        q: "A median of a triangle is a line segment joining:",
        options: ["A vertex to the midpoint of the opposite side", "The midpoints of two sides", "Two vertices", "A vertex to the foot of the altitude"],
        ans: "A vertex to the midpoint of the opposite side",
        reason: "A median is defined as the segment joining a vertex to the midpoint of the side opposite it."
      },
      {
        q: "The equation of the median from \\(A(x_1,y_1)\\) to side \\(BC\\) (with midpoint \\(D\\)) is obtained using:",
        options: ["The two-point form through \\(A\\) and \\(D\\)", "The slope-intercept form only", "The perpendicular distance formula", "The determinant of area"],
        ans: "The two-point form through \\(A\\) and \\(D\\)",
        reason: "Since the median passes through the known points A and the midpoint D, the two-point line formula applies directly."
      },
      {
        q: "The area of a triangle with vertices \\((x_1,y_1)\\), \\((x_2,y_2)\\), \\((x_3,y_3)\\) is given by:",
        options: ["\\(\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|\\)", "\\(x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\\)", "\\(\\tfrac12(x_1+x_2+x_3)(y_1+y_2+y_3)\\)", "\\(\\tfrac13|x_1y_2-x_2y_1|\\)"],
        ans: "\\(\\tfrac12|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)|\\)",
        reason: "This is the standard determinant-based formula for the area of a triangle given its vertices."
      },
      {
        q: "The area of a triangle can also be written as \\(\\tfrac12|\\Delta|\\) where \\(\\Delta\\) is:",
        options: ["\\(\\begin{vmatrix}x_1&y_1&1\\\\x_2&y_2&1\\\\x_3&y_3&1\\end{vmatrix}\\)", "\\(\\begin{vmatrix}x_1&x_2\\\\y_1&y_2\\end{vmatrix}\\)", "\\(\\begin{vmatrix}x_1&y_1\\\\x_3&y_3\\end{vmatrix}\\)", "\\(x_1+x_2+x_3\\)"],
        ans: "\\(\\begin{vmatrix}x_1&y_1&1\\\\x_2&y_2&1\\\\x_3&y_3&1\\end{vmatrix}\\)",
        reason: "The area formula is exactly half the absolute value of this 3×3 vertex-and-ones determinant."
      },
      {
        q: "Three points \\(A,B,C\\) are collinear if the area of \\(\\triangle ABC\\) is:",
        options: ["Negative", "Zero", "Equal to the perimeter", "Equal to \\(1\\)"],
        ans: "Zero",
        reason: "Three points form a degenerate (zero-area) triangle exactly when they are collinear."
      },
      {
        q: "If the area computed from the determinant formula turns out negative, we:",
        options: ["Conclude the points are collinear", "Ignore the sign and take the area as positive", "Conclude the triangle does not exist", "Double the value"],
        ans: "Ignore the sign and take the area as positive",
        reason: "A negative result simply reflects the orientation (clockwise vs counterclockwise) of the vertices; area itself is always taken as the positive magnitude."
      },
      {
        q: "The area of a triangle with vertices \\((4,-2)\\), \\((-2,4)\\) and \\((5,5)\\) is:",
        options: ["\\(12\\) square units", "\\(18\\) square units", "\\(24\\) square units", "\\(36\\) square units"],
        ans: "\\(24\\) square units",
        reason: "Applying the determinant formula: \\(\\frac12|4(4-5)+(-2)(5+2)+5(-2-4)|=\\frac12|{-4-14-30}|=24\\)."
      },
      {
        q: "The area of the triangle with vertices \\((1,-1)\\), \\((-4,6)\\) and \\((-3,-5)\\) is:",
        options: ["\\(24\\) sq. units", "\\(27\\) sq. units", "\\(\\dfrac{45}2\\) sq. units", "\\(32\\) sq. units"],
        ans: "\\(24\\) sq. units",
        reason: "Applying the determinant formula: \\(\\frac12|1(6+5)+(-4)(-5+1)+(-3)(-1-6)|=\\frac12|11+16+21|=24\\) sq. units."
      },
      {
        q: "Besides the determinant formula, the area of a triangle may also be found by:",
        options: ["Finding the three side lengths and applying Heron's formula", "Using only the slope of one side", "Using the eccentricity formula", "Using the joint equation of the sides"],
        ans: "Finding the three side lengths and applying Heron's formula",
        reason: "Besides the coordinate determinant, computing the three side lengths and applying Heron's formula is another standard way to find a triangle's area."
      },
      {
        q: "Vertices of a triangle are \\((3,2)\\), \\((4,h)\\) and \\((2,6)\\). If the area of the triangle is \\(10\\) square units, this information is used to form an equation in:",
        options: ["\\(x\\) only", "\\(y\\) only", "\\(h\\)", "The area itself"],
        ans: "\\(h\\)",
        reason: "Since the only unknown coordinate among the vertices is h, setting the area formula equal to 10 produces an equation to solve for h."
      },
      {
        q: "If \\(A(6,0)\\), \\(B(-3,6)\\) and \\(C(3,2)\\) are three points, the area of \\(\\triangle ABC\\), using the determinant formula, equals:",
        options: ["\\(0\\) (points are collinear)", "\\(9\\)", "\\(15\\)", "\\(21\\)"],
        ans: "\\(0\\) (points are collinear)",
        reason: "Applying the determinant formula gives \\(\\frac12|6(6-2)+(-3)(2-0)+3(0-6)|=\\frac12|24-6-18|=0\\), so the points are collinear."
      },
      {
        q: "A quadrilateral's area using coordinates can be computed by:",
        options: ["Splitting it into two triangles and adding their areas", "Using the perimeter formula", "Only the distance formula", "Only the midpoint formula"],
        ans: "Splitting it into two triangles and adding their areas",
        reason: "A common technique for a quadrilateral's area is to divide it into two triangles by a diagonal and sum their individual areas."
      },
      {
        q: "The area of the triangle formed by the lines \\(x=0\\), \\(y=0\\) and \\(2x+3y=6\\) is:",
        options: ["\\(3\\) sq. units", "\\(6\\) sq. units", "\\(9\\) sq. units", "\\(12\\) sq. units"],
        ans: "\\(3\\) sq. units",
        reason: "The line meets the axes at \\((3,0)\\) and \\((0,2)\\), forming a right triangle with legs 3 and 2, giving area \\(\\frac12(3)(2)=3\\)."
      },
      {
        q: "If the vertices of a triangle are \\((a,0)\\), \\((0,b)\\) and \\((0,0)\\), the area of the triangle is:",
        options: ["\\(ab\\)", "\\(\\tfrac12ab\\)", "\\(\\tfrac12(a+b)\\)", "\\(2ab\\)"],
        ans: "\\(\\tfrac12ab\\)",
        reason: "This is a right triangle with legs of length a and b along the axes, giving area \\(\\frac12ab\\)."
      },
      {
        q: "An equation \\(f(x,y)=0\\) is called homogeneous of degree \\(n\\) if:",
        options: ["\\(f(kx,ky)=k^nf(x,y)\\)", "\\(f(kx,ky)=f(x,y)\\)", "\\(f(kx,ky)=k+f(x,y)\\)", "\\(f(x,y)=n\\)"],
        ans: "\\(f(kx,ky)=k^nf(x,y)\\)",
        reason: "By definition, f is homogeneous of degree n if scaling both variables by k scales the output by \\(k^n\\)."
      },
      {
        q: "Every homogeneous linear equation \\(ax+by=0\\) always passes through:",
        options: ["\\((1,1)\\)", "The origin", "\\((a,b)\\)", "None of these"],
        ans: "The origin",
        reason: "Substituting \\((0,0)\\) always satisfies \\(a(0)+b(0)=0\\), so the line always passes through the origin."
      },
      {
        q: "A homogeneous linear system of equations:",
        options: ["Never has a non-trivial solution", "May have one or infinitely many solutions, but always has at least one (trivial) solution", "Has exactly two solutions", "Has no solution at all"],
        ans: "May have one or infinitely many solutions, but always has at least one (trivial) solution",
        reason: "A homogeneous system always admits the trivial (all-zero) solution, and may additionally have infinitely many nontrivial ones."
      },
      {
        q: "The equation \\(2x-5y+7=0\\) is:",
        options: ["A homogeneous linear equation", "A non-homogeneous linear equation", "A homogeneous quadratic equation", "None of these"],
        ans: "A non-homogeneous linear equation",
        reason: "The presence of the nonzero constant term \\(+7\\) means the equation is not homogeneous."
      },
      {
        q: "If two homogeneous linear equations \\(a_1x+b_1y=0\\) and \\(a_2x+b_2y=0\\) are multiplied together, the result is called:",
        options: ["A joint equation", "A normal equation", "A tangent equation", "A directrix equation"],
        ans: "A joint equation",
        reason: "The product of the two linear factors is, by definition, called their joint equation."
      },
      {
        q: "The joint equation \\(a_1a_2x^2+(a_1b_2+a_2b_1)xy+b_1b_2y^2=0\\) represents:",
        options: ["A single straight line", "A pair of straight lines through the origin", "A circle", "A parabola"],
        ans: "A pair of straight lines through the origin",
        reason: "Since each linear factor individually passes through the origin, their product represents this pair of lines through the origin."
      },
      {
        q: "The general second-degree homogeneous equation in two variables is written as:",
        options: ["\\(ax^2+2hxy+by^2=0\\)", "\\(ax+by+c=0\\)", "\\(ax^2+by^2=r^2\\)", "\\(y^2=4ax\\)"],
        ans: "\\(ax^2+2hxy+by^2=0\\)",
        reason: "This is the standard general form of a second-degree homogeneous equation in two variables."
      },
      {
        q: "In the equation \\(ax^2+2hxy+by^2=0\\), the constants \\(a\\) and \\(b\\) must satisfy:",
        options: ["\\(a=b\\) always", "\\(a\\) and \\(b\\) are not simultaneously zero", "\\(a+b=0\\) always", "\\(ab=1\\)"],
        ans: "\\(a\\) and \\(b\\) are not simultaneously zero",
        reason: "If both a and b were zero, the equation would reduce to a single term \\(2hxy=0\\), losing its second-degree pair-of-lines character, so a and b cannot both vanish."
      },
      {
        q: "The general equation of second degree \\(ax^2+2hxy+by^2+2gx+2fy+c=0\\) represents a pair of straight lines if:",
        options: ["\\(\\begin{vmatrix}a&h&g\\\\h&b&f\\\\g&f&c\\end{vmatrix}=0\\)", "\\(a+b+c=0\\)", "\\(h^2=4ab\\)", "\\(g^2+f^2=c\\)"],
        ans: "\\(\\begin{vmatrix}a&h&g\\\\h&b&f\\\\g&f&c\\end{vmatrix}=0\\)",
        reason: "This determinant vanishing is the standard condition for the general second-degree equation to factor into two linear equations."
      },
      {
        q: "If \\(m_1\\) and \\(m_2\\) are the slopes of the lines represented by \\(ax^2+2hxy+by^2=0\\), then \\(m_1+m_2\\) equals:",
        options: ["\\(-\\dfrac{2h}b\\)", "\\(\\dfrac{a}b\\)", "\\(\\dfrac{2h}a\\)", "\\(-\\dfrac{a}b\\)"],
        ans: "\\(-\\dfrac{2h}b\\)",
        reason: "Dividing \\(ax^2+2hxy+by^2=0\\) by \\(x^2\\) gives a quadratic in \\(m=y/x\\): \\(bm^2+2hm+a=0\\), whose sum of roots is \\(-2h/b\\)."
      },
      {
        q: "If \\(m_1\\) and \\(m_2\\) are the slopes of the lines represented by \\(ax^2+2hxy+by^2=0\\), then \\(m_1m_2\\) equals:",
        options: ["\\(-\\dfrac{2h}b\\)", "\\(\\dfrac{a}b\\)", "\\(-\\dfrac{a}b\\)", "\\(\\dfrac{2h}b\\)"],
        ans: "\\(\\dfrac{a}b\\)",
        reason: "From the same quadratic \\(bm^2+2hm+a=0\\), the product of roots is \\(a/b\\)."
      },
      {
        q: "The joint equation of the lines \\(y=m_1x\\) and \\(y=m_2x\\) is:",
        options: ["\\(y^2-(m_1+m_2)xy+m_1m_2x^2=0\\)", "\\(y^2+(m_1+m_2)xy-m_1m_2x^2=0\\)", "\\(x^2-(m_1+m_2)xy+m_1m_2y^2=0\\)", "\\(m_1m_2x^2+y^2=0\\)"],
        ans: "\\(y^2-(m_1+m_2)xy+m_1m_2x^2=0\\)",
        reason: "Multiplying \\((y-m_1x)(y-m_2x)=0\\) and expanding gives \\(y^2-(m_1+m_2)xy+m_1m_2x^2=0\\)."
      },
      {
        q: "The lines represented by \\(ax^2+2hxy+by^2=0\\) are real and coincident if:",
        options: ["\\(h^2-ab>0\\)", "\\(h^2-ab=0\\)", "\\(h^2-ab<0\\)", "\\(a+b=0\\)"],
        ans: "\\(h^2-ab=0\\)",
        reason: "The lines coincide exactly when the discriminant \\(h^2-ab\\) equals zero."
      },
      {
        q: "The measure of the acute angle \\(\\theta\\) between the lines represented by \\(ax^2+2hxy+by^2=0\\) satisfies:",
        options: ["\\(\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{a+b}\\)", "\\(\\tan\\theta=\\dfrac{h^2-ab}{a+b}\\)", "\\(\\sin\\theta=\\dfrac{2h}{a+b}\\)", "\\(\\tan\\theta=\\dfrac{a+b}{2h}\\)"],
        ans: "\\(\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{a+b}\\)",
        reason: "This is the standard formula for the tangent of the angle between the two lines represented by the homogeneous equation."
      },
      {
        q: "Lines represented by \\(ax^2+2hxy+by^2=0\\) are orthogonal (perpendicular) when:",
        options: ["\\(h^2=ab\\)", "\\(a+b=0\\)", "\\(a=b\\)", "\\(h=0\\)"],
        ans: "\\(a+b=0\\)",
        reason: "The lines are perpendicular exactly when the sum of the coefficients of \\(x^2\\) and \\(y^2\\) vanishes."
      },
      {
        q: "If \\(\\theta=0\\) for the lines represented by \\(ax^2+2hxy+by^2=0\\), then this implies the condition for the lines to be coincident, namely:",
        options: ["\\(h^2-ab=0\\)", "\\(a+b=0\\)", "\\(h=0\\)", "\\(ab=1\\)"],
        ans: "\\(h^2-ab=0\\)",
        reason: "An angle of zero between the two lines means they coincide, which corresponds to \\(h^2-ab=0\\)."
      },
      {
        q: "The measure of the acute angle between the lines represented by \\(6x^2-xy-y^2=0\\) is:",
        options: ["\\(30^\\circ\\)", "\\(45^\\circ\\)", "\\(60^\\circ\\)", "\\(90^\\circ\\)"],
        ans: "\\(45^\\circ\\)",
        reason: "With \\(a=6,h=-\\frac12,b=-1\\), \\(\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{a+b}=\\dfrac{2\\sqrt{6.25}}5=1\\), giving \\(\\theta=45°\\)."
      },
      {
        q: "The lines represented by \\(x^2-7xy+12y^2=0\\) are:",
        options: ["\\(x-3y=0\\) and \\(x-4y=0\\)", "\\(x+3y=0\\) and \\(x+4y=0\\)", "\\(x-3y=0\\) and \\(x+4y=0\\)", "\\(3x-y=0\\) and \\(4x-y=0\\)"],
        ans: "\\(x-3y=0\\) and \\(x-4y=0\\)",
        reason: "Factoring gives \\((x-3y)(x-4y)=x^2-7xy+12y^2\\), matching the equation."
      },
      {
        q: "The lines represented by \\(x^2-4xy-12y^2=0\\) are:",
        options: ["\\(x+2y=0\\) and \\(x-6y=0\\)", "\\(x-2y=0\\) and \\(x+6y=0\\)", "\\(2x+y=0\\) and \\(6x-y=0\\)", "\\(x+2y=0\\) and \\(x+6y=0\\)"],
        ans: "\\(x+2y=0\\) and \\(x-6y=0\\)",
        reason: "Factoring gives \\((x+2y)(x-6y)=x^2-4xy-12y^2\\), matching the equation."
      },
      {
        q: "If the lines represented by \\(x^2+5xy+6y^2=0\\) are found, one of the two lines is:",
        options: ["\\(x+2y=0\\)", "\\(x-2y=0\\)", "\\(2x+y=0\\)", "\\(5x+6y=0\\)"],
        ans: "\\(x+2y=0\\)",
        reason: "Factoring gives \\((x+2y)(x+3y)=x^2+5xy+6y^2\\), so one of the two lines is \\(x+2y=0\\)."
      },
      {
        q: "Which of the following equations represents a pair of real, distinct lines through the origin?",
        options: ["\\(x^2-y^2=0\\)", "\\(x^2+y^2=0\\)", "\\(x^2+2xy+y^2=0\\)", "\\(x^2+4y^2=0\\)"],
        ans: "\\(x^2-y^2=0\\)",
        reason: "Factoring \\(x^2-y^2=(x-y)(x+y)\\) gives two distinct real lines through the origin."
      },
      {
        q: "Which of the following equations represents a pair of coincident lines?",
        options: ["\\(x^2-4xy+4y^2=0\\)", "\\(x^2-4y^2=0\\)", "\\(x^2+y^2=0\\)", "\\(x^2+xy=0\\)"],
        ans: "\\(x^2-4xy+4y^2=0\\)",
        reason: "This expression is a perfect square, \\((x-2y)^2=0\\), representing two coincident lines."
      },
      {
        q: "Which of the following equations represents a pair of imaginary lines (intersecting only at the real point \\((0,0)\\))?",
        options: ["\\(x^2+y^2=0\\)", "\\(x^2-y^2=0\\)", "\\(x^2-4xy+3y^2=0\\)", "\\(x^2-9y^2=0\\)"],
        ans: "\\(x^2+y^2=0\\)",
        reason: "This sum of two squares equals zero only at the origin for real x, y, so the represented lines are imaginary."
      },
      {
        q: "For the pair of lines \\(x^2+2xy\\sec\\theta+y^2=0\\) (a general type of homogeneous equation), the condition for real and distinct lines requires:",
        options: ["\\(\\sec^2\\theta>1\\)", "\\(\\sec^2\\theta=1\\)", "\\(\\sec^2\\theta<1\\)", "\\(\\sec\\theta=0\\)"],
        ans: "\\(\\sec^2\\theta>1\\)",
        reason: "Here \\(h=\\sec\\theta, a=b=1\\), so the real-and-distinct condition \\(h^2>ab\\) becomes \\(\\sec^2\\theta>1\\)."
      },
      {
        q: "The joint equation of the pair of lines through the origin and perpendicular to the lines \\(3x^2+5xy+2y^2=0\\) is obtained by:",
        options: ["Replacing \\(x\\) by \\(y\\) and \\(y\\) by \\(-x\\) in the factors, then re-multiplying", "Adding \\(1\\) to each coefficient", "Taking the reciprocal of the equation", "Multiplying the whole equation by \\(-1\\)"],
        ans: "Replacing \\(x\\) by \\(y\\) and \\(y\\) by \\(-x\\) in the factors, then re-multiplying",
        reason: "Replacing x with y and y with \\(-x\\) in each linear factor rotates each line by 90°, producing the perpendicular pair."
      },
      {
        q: "To find a joint equation of two lines through the origin perpendicular to the lines given by \\(ax^2+2hxy+by^2=0\\), we essentially:",
        options: ["Interchange the coefficients of \\(x^2\\) and \\(y^2\\) and change the sign of the \\(xy\\) term when needed", "Keep the equation exactly the same", "Set \\(h=0\\)", "Multiply by \\(\\tan\\theta\\)"],
        ans: "Interchange the coefficients of \\(x^2\\) and \\(y^2\\) and change the sign of the \\(xy\\) term when needed",
        reason: "This coefficient-swap-and-sign-change procedure is the standard shortcut for constructing the perpendicular pair's joint equation."
      },
      {
        q: "If \\(\\theta=90^\\circ\\) for lines represented by \\(ax^2+2hxy+by^2=0\\), then \\(\\tan\\theta\\) is undefined, which forces:",
        options: ["\\(h^2=ab\\)", "\\(a+b=0\\)", "\\(a=b\\)", "\\(h=0\\)"],
        ans: "\\(a+b=0\\)",
        reason: "The tangent formula has \\(a+b\\) in its denominator, so \\(\\tan\\theta\\) being undefined (infinite) forces \\(a+b=0\\)."
      },
      {
        q: "A homogeneous quadratic equation \\(ax^2+2hxy+by^2=0\\) in two variables always represents:",
        options: ["A pair of straight lines passing through the origin", "A circle centred at the origin", "A single line not through the origin", "A parabola opening along the \\(x\\)-axis"],
        ans: "A pair of straight lines passing through the origin",
        reason: "A second-degree homogeneous equation in two variables always factors into two (possibly equal or imaginary) linear equations through the origin."
      },
      {
        q: "The general equation of second degree, \\(ax^2+2hxy+by^2+2gx+2fy+c=0\\), represents a pair of lines only if a certain \\(3\\times3\\) determinant vanishes; this determinant is formed from:",
        options: ["The coefficients \\(a,h,b,g,f,c\\)", "Only \\(a\\) and \\(b\\)", "Only the constant \\(c\\)", "The roots of the equation"],
        ans: "The coefficients \\(a,h,b,g,f,c\\)",
        reason: "The pair-of-lines determinant condition is built from all six coefficients of the general second-degree equation."
      },
      {
        q: "Two lines represented by a homogeneous quadratic equation are always:",
        options: ["Parallel to each other", "Concurrent at the origin", "Perpendicular to each other", "Non-intersecting"],
        ans: "Concurrent at the origin",
        reason: "Since each linear factor of a homogeneous equation individually passes through the origin, both lines necessarily meet there."
      },
      {
        q: "If \\(h^2-ab<0\\) in \\(ax^2+2hxy+by^2=0\\), the \"lines\" obtained are imaginary, but the point that still satisfies the joint equation is:",
        options: ["\\((1,1)\\)", "\\((0,0)\\)", "\\((a,b)\\)", "\\((h,h)\\)"],
        ans: "\\((0,0)\\)",
        reason: "The origin \\((0,0)\\) always satisfies the homogeneous equation identically, regardless of whether the 'lines' are real or imaginary."
      },
      {
        q: "For the equation \\(2x^2-7xy+6y^2=0\\), the sum of the slopes \\(m_1+m_2\\) of the represented lines is:",
        options: ["\\(\\dfrac76\\)", "\\(-\\dfrac76\\)", "\\(\\dfrac26\\)", "\\(\\dfrac67\\)"],
        ans: "\\(\\dfrac76\\)",
        reason: "Using \\(m_1+m_2=-\\dfrac{2h}b\\) with \\(h=-\\frac72,b=6\\) gives \\(\\dfrac76\\)."
      },
      {
        q: "For the equation \\(2x^2-7xy+6y^2=0\\), the product of the slopes \\(m_1m_2\\) of the represented lines is:",
        options: ["\\(\\dfrac26=\\dfrac13\\)", "\\(\\dfrac76\\)", "\\(-\\dfrac13\\)", "\\(6\\)"],
        ans: "\\(\\dfrac26=\\dfrac13\\)",
        reason: "Using \\(m_1m_2=\\dfrac{a}b\\) with \\(a=2,b=6\\) gives \\(\\dfrac26=\\dfrac13\\)."
      },
      {
        q: "A joint equation formed from two homogeneous linear equations \\(l_1=0\\) and \\(l_2=0\\) is written as:",
        options: ["\\(l_1+l_2=0\\)", "\\(l_1\\cdot l_2=0\\)", "\\(l_1-l_2=0\\)", "\\(l_1/l_2=0\\)"],
        ans: "\\(l_1\\cdot l_2=0\\)",
        reason: "The joint (combined) equation of two lines is formed by multiplying their individual equations together."
      },
      {
        q: "The pair of lines given by \\(x^2-y^2=0\\) consists of the lines:",
        options: ["\\(x=y\\) and \\(x=-y\\)", "\\(x=0\\) and \\(y=0\\)", "\\(x=1\\) and \\(y=1\\)", "\\(x+y=1\\) and \\(x-y=1\\)"],
        ans: "\\(x=y\\) and \\(x=-y\\)",
        reason: "Factoring \\(x^2-y^2=(x-y)(x+y)\\) gives the two lines \\(x=y\\) and \\(x=-y\\)."
      },
      {
        q: "If a second-degree homogeneous equation has \\(a=b\\) and \\(h=0\\), the pair of lines represented is:",
        options: ["Real and distinct, both passing through the origin at \\(45^\\circ\\)", "Imaginary", "Coincident", "Perpendicular, i.e. \\(x=\\pm y\\)-type lines with equal coefficients"],
        ans: "Imaginary",
        reason: "With \\(a=b\\) and \\(h=0\\), the discriminant \\(h^2-ab=-a^2\\) is negative, so the lines are imaginary."
      },
      {
        q: "Given \\(ax^2+2hxy+by^2=0\\), if \\(a=0\\), one of the lines represented is always:",
        options: ["The \\(y\\)-axis, \\(x=0\\)", "The \\(x\\)-axis, \\(y=0\\)", "The line \\(y=x\\)", "The line \\(x+y=0\\)"],
        ans: "The \\(x\\)-axis, \\(y=0\\)",
        reason: "With \\(a=0\\), the equation reduces to \\(2hxy+by^2=y(2hx+by)=0\\), so \\(y=0\\), the x-axis, is one of the factors."
      },
      {
        q: "Given \\(ax^2+2hxy+by^2=0\\), if \\(b=0\\), one of the lines represented is always:",
        options: ["The \\(x\\)-axis, \\(y=0\\)", "The \\(y\\)-axis, \\(x=0\\)", "The line \\(y=-x\\)", "The line \\(y=2x\\)"],
        ans: "The \\(y\\)-axis, \\(x=0\\)",
        reason: "With \\(b=0\\), the equation reduces to \\(ax^2+2hxy=x(ax+2hy)=0\\), so \\(x=0\\), the y-axis, is one of the factors."
      },
      {
        q: "Two lines represented by \\(ax^2+2hxy+by^2=0\\) coincide with each other only when the quadratic (in \\(m=y/x\\)) \\(bm^2+2hm+a=0\\) has:",
        options: ["Two distinct real roots", "Equal (repeated) roots", "Complex roots", "No solution"],
        ans: "Equal (repeated) roots",
        reason: "The two line-slopes coincide precisely when this quadratic has a repeated (equal) root, i.e. discriminant zero."
      },
      {
        q: "Analytic (coordinate) geometry combines the methods of:",
        options: ["Algebra and Geometry", "Algebra and Statistics", "Geometry and Calculus only", "Trigonometry and Algebra only"],
        ans: "Algebra and Geometry",
        reason: "Analytic (coordinate) geometry is defined as the study of geometric problems using algebraic methods and coordinates."
      },
      {
        q: "An engineer checking whether three proposed roads represented by linear equations meet at a single junction is essentially testing for:",
        options: ["Perpendicularity of two roads", "Concurrency of three lines", "The area of a triangular plot", "The homogeneity of an equation"],
        ans: "Concurrency of three lines",
        reason: "Determining whether three straight roads meet at one point is precisely a test of concurrency of three lines."
      },
      {
        q: "A city planner computing the area of a triangular park with known corner coordinates would use:",
        options: ["The area-of-triangle (determinant) formula", "The condition of concurrency", "The homogeneous equation condition", "The angle-between-lines formula"],
        ans: "The area-of-triangle (determinant) formula",
        reason: "Given the corner coordinates, the standard determinant-based area formula directly gives the park's area."
      },
      {
        q: "Two straight railway tracks that meet at a junction and are modelled by a joint (homogeneous) equation \\(x^2-4xy-12y^2=0\\); the angle between the tracks is found using:",
        options: ["The area formula", "The formula \\(\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{a+b}\\)", "The concurrency determinant", "The midpoint formula"],
        ans: "The formula \\(\\tan\\theta=\\dfrac{2\\sqrt{h^2-ab}}{a+b}\\)",
        reason: "The angle between two lines given by a homogeneous joint equation is found using the standard angle-between-lines formula."
      },
      {
        q: "A surveyor wants to know if three straight boundary walls meet at one point. The most direct analytic-geometry test is to check whether the:",
        options: ["Sum of their slopes is zero", "Determinant of their coefficients vanishes", "Product of their \\(y\\)-intercepts is \\(1\\)", "Lines are all of equal length"],
        ans: "Determinant of their coefficients vanishes",
        reason: "Checking whether three boundary walls meet at a single point is exactly the determinant concurrency test."
      },
      {
        q: "An architect models two support beams crossing at the origin using the joint equation \\(2x^2-8y^2=0\\). The beams (lines) are:",
        options: ["\\(x-2y=0\\) and \\(x+2y=0\\)", "\\(x-4y=0\\) and \\(x+4y=0\\)", "\\(2x-y=0\\) and \\(2x+y=0\\)", "\\(x-8y=0\\) and \\(x+8y=0\\)"],
        ans: "\\(x-2y=0\\) and \\(x+2y=0\\)",
        reason: "Factoring \\(2x^2-8y^2=2(x-2y)(x+2y)\\) gives the two beam lines \\(x-2y=0\\) and \\(x+2y=0\\)."
      },
      {
        q: "A satellite dish support modelled by a triangular frame requires the installer to find the point equidistant from all three vertices; this point is the:",
        options: ["Centroid", "Circumcenter", "Incenter", "Orthocenter"],
        ans: "Circumcenter",
        reason: "The point equidistant from all three vertices of a triangle is, by definition, the circumcenter."
      },
      {
        q: "In designing a roundabout where three roads meet, engineers use the point of concurrency; if the three road equations are consistent (concurrent), the resulting single point represents:",
        options: ["The centre of the roundabout", "The area of the roundabout", "The radius of the roundabout", "The perimeter of the roundabout"],
        ans: "The centre of the roundabout",
        reason: "The single common point where the three road lines meet naturally represents the roundabout's central point."
      },
      {
        q: "A landscaper wants the cost of planting an entire triangular garden bed; after finding the area \\(A\\) in square units and cost \\(c\\) per square unit, the total cost is:",
        options: ["\\(A+c\\)", "\\(A\\times c\\)", "\\(A/c\\)", "\\(A-c\\)"],
        ans: "\\(A\\times c\\)",
        reason: "Total cost is found by multiplying the total area by the cost per unit area."
      },
      {
        q: "Analytic geometry, as the cornerstone of many modern branches such as algebraic and differential geometry, is fundamentally the study of geometric shapes using:",
        options: ["Coordinates and equations", "Only physical measurement", "Only compass and straightedge constructions", "Trial and error graphing"],
        ans: "Coordinates and equations",
        reason: "Analytic geometry is fundamentally the study of geometric shapes using coordinate systems and algebraic equations."
      },
      {
        q: "A welder designs a support structure from two beams intersecting at the origin, represented by the joint equation \\(x^2-y^2=0\\). The angle between the two beams is:",
        options: ["\\(0^\\circ\\)", "\\(45^\\circ\\)", "\\(90^\\circ\\)", "\\(60^\\circ\\)"],
        ans: "\\(90^\\circ\\)",
        reason: "The lines \\(x=y\\) and \\(x=-y\\) have slopes 1 and \\(-1\\), whose product is \\(-1\\), meaning they are perpendicular, i.e. \\(90°\\) apart."
      },
      {
        stimulus: "<table><tr><th>Line</th><th>Equation</th></tr><tr><td>\\(l_1\\)</td><td>\\(2x+3y-8=0\\)</td></tr><tr><td>\\(l_2\\)</td><td>\\(x-y-1=0\\)</td></tr><tr><td>\\(l_3\\)</td><td>\\(x+ky-3=0\\)</td></tr></table>",
        q: "The point of intersection of \\(l_1\\) and \\(l_2\\) is:",
        options: ["\\((2.2,1.2)\\)", "\\((1,0)\\)", "\\((3,1)\\)", "\\((2,1)\\)"],
        ans: "\\((2.2,1.2)\\)",
        reason: "From \\(l_2\\): \\(x=y+1\\); substituting into \\(l_1\\) gives \\(2(y+1)+3y-8=0\\Rightarrow5y=6\\Rightarrow y=1.2,\\ x=2.2\\)."
      },
      {
        stimulus: "<table><tr><th>Line</th><th>Equation</th></tr><tr><td>\\(l_1\\)</td><td>\\(2x+3y-8=0\\)</td></tr><tr><td>\\(l_2\\)</td><td>\\(x-y-1=0\\)</td></tr><tr><td>\\(l_3\\)</td><td>\\(x+ky-3=0\\)</td></tr></table>",
        q: "For \\(l_1,l_2,l_3\\) to be concurrent, the determinant of their coefficients must equal:",
        options: ["\\(1\\)", "\\(-1\\)", "\\(0\\)", "The sum of the constants"],
        ans: "\\(0\\)",
        reason: "The determinant of the coefficients of three lines vanishing is precisely the standard test for concurrency."
      },
      {
        stimulus: "<table><tr><th>Line</th><th>Equation</th></tr><tr><td>\\(l_1\\)</td><td>\\(2x+3y-8=0\\)</td></tr><tr><td>\\(l_2\\)</td><td>\\(x-y-1=0\\)</td></tr><tr><td>\\(l_3\\)</td><td>\\(x+ky-3=0\\)</td></tr></table>",
        q: "Using the determinant condition on \\(l_1,l_2,l_3\\), the value of \\(k\\) that makes them concurrent is:",
        options: ["\\(k=-3\\)", "\\(k=3\\)", "\\(k=1\\)", "\\(k=-1\\)"],
        ans: "\\(k=-3\\)",
        reason: "Substituting the coefficients into the concurrency determinant and setting it to zero solves for the value of k that makes the three lines concurrent."
      },
      {
        stimulus: "<table><tr><th>Line</th><th>Equation</th></tr><tr><td>\\(l_1\\)</td><td>\\(2x+3y-8=0\\)</td></tr><tr><td>\\(l_2\\)</td><td>\\(x-y-1=0\\)</td></tr><tr><td>\\(l_3\\)</td><td>\\(x+ky-3=0\\)</td></tr></table>",
        q: "With that value of \\(k\\), the common point through which all three lines pass is:",
        options: ["\\((2.2,1.2)\\)", "\\((0,0)\\)", "\\((1,1)\\)", "\\((3,3)\\)"],
        ans: "\\((2.2,1.2)\\)",
        reason: "Once k is chosen to satisfy the concurrency condition, all three lines are guaranteed to pass through the point already found as the intersection of \\(l_1\\) and \\(l_2\\)."
      },
      {
        stimulus: "<table><tr><th>Vertex</th><th>Coordinates</th></tr><tr><td>\\(A\\)</td><td>\\((0,0)\\)</td></tr><tr><td>\\(B\\)</td><td>\\((8,0)\\)</td></tr><tr><td>\\(C\\)</td><td>\\((0,6)\\)</td></tr></table>",
        q: "The area of \\(\\triangle ABC\\), by the determinant formula, is:",
        options: ["\\(24\\) sq. units", "\\(48\\) sq. units", "\\(14\\) sq. units", "\\(12\\) sq. units"],
        ans: "\\(24\\) sq. units",
        reason: "This is a right triangle with legs 8 and 6 along the axes, giving area \\(\\frac12(8)(6)=24\\) sq. units."
      },
      {
        stimulus: "<table><tr><th>Vertex</th><th>Coordinates</th></tr><tr><td>\\(A\\)</td><td>\\((0,0)\\)</td></tr><tr><td>\\(B\\)</td><td>\\((8,0)\\)</td></tr><tr><td>\\(C\\)</td><td>\\((0,6)\\)</td></tr></table>",
        q: "The centroid of \\(\\triangle ABC\\) is:",
        options: ["\\(\\left(\\tfrac83,2\\right)\\)", "\\((4,3)\\)", "\\((8,6)\\)", "\\((2,2)\\)"],
        ans: "\\(\\left(\\tfrac83,2\\right)\\)",
        reason: "The centroid is the average of the vertices: \\(\\left(\\frac{0+8+0}3,\\frac{0+0+6}3\\right)=\\left(\\frac83,2\\right)\\)."
      },
      {
        stimulus: "<table><tr><th>Vertex</th><th>Coordinates</th></tr><tr><td>\\(A\\)</td><td>\\((0,0)\\)</td></tr><tr><td>\\(B\\)</td><td>\\((8,0)\\)</td></tr><tr><td>\\(C\\)</td><td>\\((0,6)\\)</td></tr></table>",
        q: "Since the triangle is right-angled at \\(A\\), its orthocenter is:",
        options: ["\\((0,0)\\)", "\\((4,3)\\)", "\\((8,0)\\)", "\\((0,6)\\)"],
        ans: "\\((0,0)\\)",
        reason: "In a right triangle, the orthocenter is located exactly at the vertex containing the right angle, here \\(A=(0,0)\\)."
      },
      {
        stimulus: "<table><tr><th>Vertex</th><th>Coordinates</th></tr><tr><td>\\(A\\)</td><td>\\((0,0)\\)</td></tr><tr><td>\\(B\\)</td><td>\\((8,0)\\)</td></tr><tr><td>\\(C\\)</td><td>\\((0,6)\\)</td></tr></table>",
        q: "Its circumcenter (the midpoint of the hypotenuse \\(BC\\)) is:",
        options: ["\\((4,3)\\)", "\\((0,0)\\)", "\\(\\left(\\tfrac83,2\\right)\\)", "\\((8,6)\\)"],
        ans: "\\((4,3)\\)",
        reason: "For a right triangle, the circumcenter is the midpoint of the hypotenuse: \\(\\left(\\frac{8+0}2,\\frac{0+6}2\\right)=(4,3)\\)."
      },
      {
        stimulus: "<table><tr><th>Joint equation</th><th>\\(3x^2-8xy-3y^2=0\\)</th></tr></table>",
        q: "Comparing with \\(ax^2+2hxy+by^2=0\\), the values of \\(a,\\,2h,\\,b\\) are:",
        options: ["\\(a=3,\\ 2h=-8,\\ b=-3\\)", "\\(a=-3,\\ 2h=8,\\ b=3\\)", "\\(a=3,\\ 2h=8,\\ b=-3\\)", "\\(a=-3,\\ 2h=-8,\\ b=-3\\)"],
        ans: "\\(a=3,\\ 2h=-8,\\ b=-3\\)",
        reason: "Matching coefficients directly against \\(ax^2+2hxy+by^2\\) gives \\(a=3\\), \\(2h=-8\\), \\(b=-3\\)."
      },
      {
        stimulus: "<table><tr><th>Joint equation</th><th>\\(3x^2-8xy-3y^2=0\\)</th></tr></table>",
        q: "The sum of the slopes \\(m_1+m_2=-2h/b\\) equals:",
        options: ["\\(-\\tfrac83\\)", "\\(\\tfrac83\\)", "\\(1\\)", "\\(-1\\)"],
        ans: "\\(-\\tfrac83\\)",
        reason: "With \\(2h=-8\\) and \\(b=-3\\), \\(m_1+m_2=-\\dfrac{2h}b=-\\dfrac{-8}{-3}=-\\dfrac83\\)."
      },
      {
        stimulus: "<table><tr><th>Joint equation</th><th>\\(3x^2-8xy-3y^2=0\\)</th></tr></table>",
        q: "The product of the slopes \\(m_1m_2=a/b\\) equals:",
        options: ["\\(-1\\)", "\\(1\\)", "\\(\\tfrac83\\)", "\\(3\\)"],
        ans: "\\(-1\\)",
        reason: "With \\(a=3\\) and \\(b=-3\\), \\(m_1m_2=\\dfrac{a}b=\\dfrac3{-3}=-1\\)."
      },
      {
        stimulus: "<table><tr><th>Joint equation</th><th>\\(3x^2-8xy-3y^2=0\\)</th></tr></table>",
        q: "Since \\(h^2-ab=16-(-9)=25>0\\), the lines represented are:",
        options: ["Real and distinct", "Coincident", "Imaginary", "Parallel"],
        ans: "Real and distinct",
        reason: "Since \\(h=-4\\), \\(h^2-ab=16-(-9)=25>0\\), so the lines are real and distinct."
      }
    ];
  }
});
