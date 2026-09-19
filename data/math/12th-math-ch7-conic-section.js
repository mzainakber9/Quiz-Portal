// Class 12 Math -- Chapter 7: Conic Section
// Converted from the 200-question Class 12 MCQ bank (chapters 6-7), with
// short explanations added for every question.
QuizBank.register({
  class: "12th",
  subject: "Math",
  type: "chapter",
  id: "ch7",
  label: "Chapter 7: Conic Section",
  order: 7,
  questions: function () {
    return [
      {
        q: "The eccentricity of a conic section is the ratio of the distance of a point on the conic from the:",
        options: ["Focus to the directrix", "Directrix to the focus", "Vertex to the directrix", "Directrix to the vertex"],
        ans: "Focus to the directrix",
        reason: "Eccentricity is defined as the ratio of the distance from a point on the conic to the focus, over its distance to the directrix."
      },
      {
        q: "The eccentricity of a circle is:",
        options: ["\\(e>1\\)", "\\(e<1\\)", "\\(e=1\\)", "\\(e=0\\)"],
        ans: "\\(e=0\\)",
        reason: "A circle is the special case of eccentricity 0, meaning it has no elongation at all."
      },
      {
        q: "The focus of the parabola \\(x^2=-16y\\) is:",
        options: ["\\((4,0)\\)", "\\((-4,0)\\)", "\\((0,4)\\)", "\\((0,-4)\\)"],
        ans: "\\((0,-4)\\)",
        reason: "Comparing with \\(x^2=-4ay\\) gives \\(4a=16\\Rightarrow a=4\\), so the focus is at \\((0,-a)=(0,-4)\\)."
      },
      {
        q: "The length of the latus rectum of the ellipse \\(\\dfrac{x^2}{16}+\\dfrac{y^2}9=1\\) is:",
        options: ["\\(\\dfrac{32}9\\)", "\\(\\dfrac9{32}\\)", "\\(\\dfrac92\\)", "\\(\\dfrac89\\)"],
        ans: "\\(\\dfrac92\\)",
        reason: "With \\(a^2=16\\) and \\(b^2=9\\), the latus rectum is \\(\\dfrac{2b^2}a=\\dfrac{18}4=\\dfrac92\\)."
      },
      {
        q: "The equations of the directrices of the ellipse \\(\\dfrac{x^2}{16}+\\dfrac{y^2}{36}=1\\) are:",
        options: ["\\(y=\\pm\\dfrac{18}{\\sqrt5}\\)", "\\(y=\\pm\\dfrac{\\sqrt5}{18}\\)", "\\(x=\\dfrac{18}{\\sqrt5}\\)", "\\(x=\\dfrac{\\sqrt5}{18}\\)"],
        ans: "\\(y=\\pm\\dfrac{18}{\\sqrt5}\\)",
        reason: "Since \\(36>16\\), the major axis is vertical with \\(a=6\\); the directrices are \\(y=\\pm\\dfrac{a}e=\\pm\\dfrac{18}{\\sqrt5}\\)."
      },
      {
        q: "The eccentricity of the hyperbola \\(\\dfrac{x^2}{25}-\\dfrac{y^2}{81}=1\\) is:",
        options: ["\\(\\dfrac5{\\sqrt{106}}\\)", "\\(\\dfrac{\\sqrt{106}}5\\)", "\\(\\dfrac{\\sqrt{106}}9\\)", "\\(\\dfrac9{\\sqrt{106}}\\)"],
        ans: "\\(\\dfrac{\\sqrt{106}}5\\)",
        reason: "With \\(a^2=25,b^2=81\\), \\(c^2=a^2+b^2=106\\), giving \\(e=\\dfrac{c}a=\\dfrac{\\sqrt{106}}5\\)."
      },
      {
        q: "The equation of the conjugate axis of the hyperbola \\(\\dfrac{(x-1)^2}4-\\dfrac{(y+3)^2}{12}=1\\) is:",
        options: ["\\(x=1\\)", "\\(x=-1\\)", "\\(y=3\\)", "\\(y=-3\\)"],
        ans: "\\(x=1\\)",
        reason: "The conjugate axis is the vertical line through the centre, perpendicular to the (horizontal) transverse axis: \\(x=1\\)."
      },
      {
        q: "The length of the tangent drawn from the point \\((1,2)\\) to the circle \\(2x^2+2y^2+3x+2y-6=0\\) is:",
        options: ["\\(11\\)", "\\(\\sqrt{11}\\)", "\\(\\dfrac{11}2\\)", "\\(\\sqrt{\\dfrac{11}2}\\)"],
        ans: "\\(\\sqrt{\\dfrac{11}2}\\)",
        reason: "Normalizing the circle equation and substituting \\((1,2)\\) into \\(\\sqrt{x^2+y^2+\\frac32x+y-3}\\) gives \\(\\sqrt{11/2}\\)."
      },
      {
        q: "The chord joining the two points \\((at_1^2,2at_1)\\) and \\((at_2^2,2at_2)\\) on the parabola \\(y^2=4ax\\) is a focal chord if:",
        options: ["\\(t_1+t_2=1\\)", "\\(t_1+t_2=-1\\)", "\\(t_1t_2=1\\)", "\\(t_1t_2=-1\\)"],
        ans: "\\(t_1t_2=-1\\)",
        reason: "This is the standard condition for two points on \\(y^2=4ax\\) to form a chord passing through the focus."
      },
      {
        q: "Exactly one tangent can be drawn to a circle from a point if that point lies:",
        options: ["Outside the circle", "On the circle", "Inside the circle", "At the centre of the circle"],
        ans: "On the circle",
        reason: "A point on the circle itself has exactly one tangent line, the one touching at that very point."
      },
      {
        q: "A conic section is formed by the intersection of a plane with a:",
        options: ["Cylinder", "Right circular cone", "Sphere", "Prism"],
        ans: "Right circular cone",
        reason: "By definition, a conic section is the curve formed by intersecting a plane with a right circular cone."
      },
      {
        q: "When a plane cuts a cone parallel to one of its generators (not through the vertex), the resulting conic is a:",
        options: ["Circle", "Ellipse", "Parabola", "Hyperbola"],
        ans: "Parabola",
        reason: "Cutting parallel to exactly one generator line of the cone produces a parabola."
      },
      {
        q: "When a cutting plane is perpendicular to the axis of the cone and does not pass through the vertex, the section obtained is a:",
        options: ["Circle", "Parabola", "Ellipse (non-circular)", "Hyperbola"],
        ans: "Circle",
        reason: "A cut perpendicular to the cone's axis, away from the vertex, produces a circular cross-section."
      },
      {
        q: "If the cutting plane passes through the vertex of the cone, the \"degenerate\" conic obtained may be a point or:",
        options: ["A circle", "A pair of intersecting lines", "An ellipse", "A parabola"],
        ans: "A pair of intersecting lines",
        reason: "Passing the cutting plane through the vertex collapses the conic to a degenerate case: a point or a pair of intersecting lines."
      },
      {
        q: "A circle is the set of all points in a plane that are:",
        options: ["Equidistant from a fixed line", "Equidistant from a fixed point", "At a constant sum of distances from two fixed points", "At a constant difference of distances from two fixed points"],
        ans: "Equidistant from a fixed point",
        reason: "A circle is, by definition, the set of points at a constant distance from a fixed centre point."
      },
      {
        q: "The standard equation of a circle with centre \\((h,k)\\) and radius \\(r\\) is:",
        options: ["\\((x-h)^2+(y-k)^2=r^2\\)", "\\((x-h)^2-(y-k)^2=r^2\\)", "\\((x+h)^2+(y+k)^2=r\\)", "\\(x^2+y^2=r^2-h-k\\)"],
        ans: "\\((x-h)^2+(y-k)^2=r^2\\)",
        reason: "This is the standard (centre-radius) form of a circle's equation."
      },
      {
        q: "The equation of a circle with centre at the origin and radius \\(r\\) is:",
        options: ["\\(x^2+y^2=r\\)", "\\(x^2+y^2=r^2\\)", "\\(x^2-y^2=r^2\\)", "\\(x+y=r^2\\)"],
        ans: "\\(x^2+y^2=r^2\\)",
        reason: "Setting \\((h,k)=(0,0)\\) in the standard form gives \\(x^2+y^2=r^2\\)."
      },
      {
        q: "The general form of the equation of a circle is:",
        options: ["\\(x^2+y^2+2gx+2fy+c=0\\)", "\\(x^2+2hxy+y^2=0\\)", "\\(ax^2+by^2=1\\)", "\\(y^2=4ax\\)"],
        ans: "\\(x^2+y^2+2gx+2fy+c=0\\)",
        reason: "This is the standard general (expanded) form of a circle's equation."
      },
      {
        q: "For the circle \\(x^2+y^2+2gx+2fy+c=0\\), the centre and radius are respectively:",
        options: ["\\((g,f)\\) and \\(\\sqrt{g^2+f^2-c}\\)", "\\((-g,-f)\\) and \\(\\sqrt{g^2+f^2-c}\\)", "\\((-g,-f)\\) and \\(g^2+f^2-c\\)", "\\((g,f)\\) and \\(g^2+f^2+c\\)"],
        ans: "\\((-g,-f)\\) and \\(\\sqrt{g^2+f^2-c}\\)",
        reason: "Completing the square on the general form shows the centre is \\((-g,-f)\\) with radius \\(\\sqrt{g^2+f^2-c}\\)."
      },
      {
        q: "For the general equation of a circle \\(x^2+y^2+2gx+2fy+c=0\\), the radius is real if:",
        options: ["\\(g^2+f^2-c>0\\)", "\\(g^2+f^2-c<0\\)", "\\(g^2+f^2-c=0\\) only", "\\(c>0\\)"],
        ans: "\\(g^2+f^2-c>0\\)",
        reason: "The radius, being a square root, is real only when the expression under it, \\(g^2+f^2-c\\), is positive."
      },
      {
        q: "The circle \\(x^2+y^2+2gx+2fy+c=0\\) represents an imaginary circle (no real locus) when:",
        options: ["\\(g^2+f^2-c>0\\)", "\\(g^2+f^2-c=0\\)", "\\(g^2+f^2-c<0\\)", "\\(g=f=0\\)"],
        ans: "\\(g^2+f^2-c<0\\)",
        reason: "A negative value under the square root means no real radius exists, giving an imaginary circle."
      },
      {
        q: "The centre and radius of the circle \\(x^2+y^2-6x-10y+18=0\\) are:",
        options: ["\\((3,5)\\) and \\(4\\)", "\\((-3,-5)\\) and \\(4\\)", "\\((3,5)\\) and \\(16\\)", "\\((6,10)\\) and \\(4\\)"],
        ans: "\\((3,5)\\) and \\(4\\)",
        reason: "Here \\(g=-3,f=-5,c=18\\), so the centre \\((-g,-f)=(3,5)\\) and the radius \\(\\sqrt{9+25-18}=4\\)."
      },
      {
        q: "The equation of the circle with centre \\((2,-5)\\) and radius \\(3\\) is:",
        options: ["\\((x-2)^2+(y+5)^2=9\\)", "\\((x+2)^2+(y-5)^2=9\\)", "\\((x-2)^2+(y+5)^2=3\\)", "\\((x-2)^2-(y+5)^2=9\\)"],
        ans: "\\((x-2)^2+(y+5)^2=9\\)",
        reason: "Substituting the centre and radius directly into the standard form gives \\((x-2)^2+(y+5)^2=9\\)."
      },
      {
        q: "To find the equation of a circle passing through three non-collinear points, we generally use the:",
        options: ["Standard form directly", "General form \\(x^2+y^2+2gx+2fy+c=0\\) and solve for \\(g,f,c\\)", "Slope formula only", "Midpoint formula only"],
        ans: "General form \\(x^2+y^2+2gx+2fy+c=0\\) and solve for \\(g,f,c\\)",
        reason: "Since three conditions are needed for three unknowns, substituting all three points into the general equation and solving the resulting system gives g, f, c."
      },
      {
        q: "If a circle passes through two given points, the centre of the circle must be:",
        options: ["The midpoint of the two points", "Equidistant from both points", "On the line joining the two points", "At the origin"],
        ans: "Equidistant from both points",
        reason: "Since both points lie on the circle, both are the same distance (the radius) from the centre, so the centre is equidistant from them."
      },
      {
        q: "If a line is tangent to a circle at a given point \\(P\\), then the line joining the centre \\(C\\) to \\(P\\) is:",
        options: ["Parallel to the tangent", "Perpendicular to the tangent", "Equal in length to the tangent", "Coincident with the tangent"],
        ans: "Perpendicular to the tangent",
        reason: "A fundamental circle property: the radius to the point of tangency is always perpendicular to the tangent line there."
      },
      {
        q: "A circle touches a given line at a point \\(P\\) and also passes through another point \\(Q\\). To find its centre, we use the facts that \\(|CP|=|CQ|\\) and:",
        options: ["\\(CP\\) is parallel to the given line", "\\(CP\\) is perpendicular to the given line", "\\(CQ\\) is perpendicular to the given line", "\\(C\\) lies on the given line"],
        ans: "\\(CP\\) is perpendicular to the given line",
        reason: "Since the circle is tangent to the line at P, the radius CP must be perpendicular to that line."
      },
      {
        q: "A circle circumscribes a rectangle. The centre of the circle must be:",
        options: ["A vertex of the rectangle", "The point of intersection of the diagonals of the rectangle", "The midpoint of one side", "Outside the rectangle"],
        ans: "The point of intersection of the diagonals of the rectangle",
        reason: "The diagonals of a rectangle are equal and bisect each other, so their common midpoint is equidistant from all four vertices — the circle's centre."
      },
      {
        q: "Two circles touch each other externally at a point \\(P\\). At that point, the line joining the two centres:",
        options: ["Is perpendicular to the common tangent at \\(P\\)", "Passes through \\(P\\) and is perpendicular to the common tangent", "Does not pass through \\(P\\)", "Is always vertical"],
        ans: "Passes through \\(P\\) and is perpendicular to the common tangent",
        reason: "At the point of contact, both circles share the same tangent line, and the line joining their centres passes through that point perpendicular to it."
      },
      {
        q: "A line intersects a circle \\(x^2+y^2=r^2\\) at two distinct points if the perpendicular distance \\(d\\) from the centre to the line satisfies:",
        options: ["\\(d>r\\)", "\\(d=r\\)", "\\(d<r\\)", "\\(d=0\\) always"],
        ans: "\\(d<r\\)",
        reason: "A line cuts the circle in two points exactly when it passes closer to the centre than the radius, i.e. \\(d<r\\)."
      },
      {
        q: "A line is tangent to a circle if the perpendicular distance from the centre to the line is:",
        options: ["Equal to the radius", "Greater than the radius", "Less than the radius", "Equal to zero"],
        ans: "Equal to the radius",
        reason: "A line is tangent exactly when its distance from the centre equals the radius."
      },
      {
        q: "A line neither touches nor intersects a circle when the distance from the centre to the line is:",
        options: ["Equal to the radius", "Less than the radius", "Greater than the radius", "Equal to the diameter"],
        ans: "Greater than the radius",
        reason: "The line misses the circle entirely when its distance from the centre exceeds the radius."
      },
      {
        q: "For the line \\(y=mx+c\\) to be tangent to the circle \\(x^2+y^2=r^2\\), the condition on \\(c\\) is:",
        options: ["\\(c=\\pm r\\sqrt{m^2+1}\\)", "\\(c=\\pm r(m+1)\\)", "\\(c=r^2m\\)", "\\(c=\\pm rm\\)"],
        ans: "\\(c=\\pm r\\sqrt{m^2+1}\\)",
        reason: "This is the standard condition ensuring the line \\(y=mx+c\\) touches the circle \\(x^2+y^2=r^2\\) at exactly one point."
      },
      {
        q: "The line \\(x+2y-3=0\\) is tangent to the circle \\(x^2+y^2=r^2\\) only for a specific value of:",
        options: ["\\(m\\)", "\\(r\\)", "The centre", "The \\(y\\)-intercept only, regardless of \\(r\\)"],
        ans: "\\(r\\)",
        reason: "Since the line's slope and intercept are fixed, only a particular radius r makes the tangency condition hold."
      },
      {
        q: "Differentiating the equation of a circle \\(x^2+y^2+2gx+2fy+c=0\\) implicitly with respect to \\(x\\) gives the:",
        options: ["Equation of the normal directly", "Slope of the tangent line at any point on the circle", "Radius of the circle", "Centre of the circle"],
        ans: "Slope of the tangent line at any point on the circle",
        reason: "Differentiating the circle's equation implicitly with respect to x yields the slope \\(dy/dx\\) of the tangent at any point."
      },
      {
        q: "The equation of the tangent to the circle \\(x^2+y^2+2gx+2fy+c=0\\) at the point \\((x_1,y_1)\\) on the circle is obtained by the standard \"replacement rule\":",
        options: ["\\(xx_1+yy_1+g(x+x_1)+f(y+y_1)+c=0\\)", "\\(x^2+y^2=x_1^2+y_1^2\\)", "\\(xx_1-yy_1=c\\)", "\\(x+x_1+y+y_1=0\\)"],
        ans: "\\(xx_1+yy_1+g(x+x_1)+f(y+y_1)+c=0\\)",
        reason: "This is the standard 'replace \\(x^2\\) by \\(xx_1\\), \\(y^2\\) by \\(yy_1\\)' rule for writing a circle's tangent at a point on it."
      },
      {
        q: "A line that is perpendicular to the tangent at the point of tangency on a circle is called the:",
        options: ["Chord", "Secant", "Normal", "Diameter"],
        ans: "Normal",
        reason: "By definition, the line perpendicular to the tangent at the point of tangency is called the normal."
      },
      {
        q: "The normal to a circle at any point \\(P\\) on the circle always passes through the:",
        options: ["Centre of the circle", "Origin, always", "Point diametrically opposite \\(P\\) only", "Point where the tangent meets the \\(x\\)-axis"],
        ans: "Centre of the circle",
        reason: "Since the tangent is perpendicular to the radius, the normal (perpendicular to the tangent) lies along the radius itself, passing through the centre."
      },
      {
        q: "If the slope of the tangent to a circle at point \\(P(x_1,y_1)\\) is \\(m\\), then the slope of the normal at \\(P\\) is:",
        options: ["\\(m\\)", "\\(-m\\)", "\\(\\dfrac1m\\)", "\\(-\\dfrac1m\\)"],
        ans: "\\(-\\dfrac1m\\)",
        reason: "Since the normal is perpendicular to the tangent, its slope is the negative reciprocal of the tangent's slope m."
      },
      {
        q: "The equation of the tangent to the circle \\(x^2+y^2=25\\) at the point \\((3,4)\\) is:",
        options: ["\\(3x+4y=25\\)", "\\(4x+3y=25\\)", "\\(3x-4y=25\\)", "\\(x+y=25\\)"],
        ans: "\\(3x+4y=25\\)",
        reason: "Using the replacement rule \\(xx_1+yy_1=r^2\\) with \\((x_1,y_1)=(3,4)\\) gives \\(3x+4y=25\\)."
      },
      {
        q: "For the circle \\(x^2+y^2-4x+2y-5=0\\), the slope of the tangent at the point \\((1,2)\\) is found by first computing \\(dy/dx\\), which equals:",
        options: ["\\(\\dfrac{2-x}{y+1}\\)", "\\(\\dfrac{x-2}{y+1}\\)", "\\(\\dfrac{x+2}{y-1}\\)", "\\(\\dfrac{2-y}{x+1}\\)"],
        ans: "\\(\\dfrac{2-x}{y+1}\\)",
        reason: "Differentiating implicitly gives \\(2x+2yy'-4+2y'=0\\), which solves to \\(y'=\\dfrac{2-x}{y+1}\\)."
      },
      {
        q: "Two circles touch each other internally or externally when the common tangent at the point of contact is:",
        options: ["Perpendicular to the line joining the centres", "Parallel to the line joining the centres", "Undefined", "Equal in length to both radii"],
        ans: "Perpendicular to the line joining the centres",
        reason: "At the point of contact, the shared tangent line is perpendicular to the line joining the two centres."
      },
      {
        q: "A point \\(P(x_1,y_1)\\) lies outside the circle \\(x^2+y^2+2gx+2fy+c=0\\) if:",
        options: ["\\(x_1^2+y_1^2+2gx_1+2fy_1+c>0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c=0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c<0\\)", "\\(x_1^2+y_1^2=0\\)"],
        ans: "\\(x_1^2+y_1^2+2gx_1+2fy_1+c>0\\)",
        reason: "Substituting a point's coordinates into the circle's expression gives a positive value exactly when the point lies outside."
      },
      {
        q: "A point \\(P(x_1,y_1)\\) lies inside the circle \\(x^2+y^2+2gx+2fy+c=0\\) if:",
        options: ["\\(x_1^2+y_1^2+2gx_1+2fy_1+c>0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c<0\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c=0\\)", "\\(|CP|=r\\)"],
        ans: "\\(x_1^2+y_1^2+2gx_1+2fy_1+c<0\\)",
        reason: "Substituting a point's coordinates into the circle's expression gives a negative value exactly when the point lies inside."
      },
      {
        q: "A point \\(P\\) lies on the circle \\(x^2+y^2+2gx+2fy+c=0\\) if:",
        options: ["\\(|CP|>r\\)", "\\(|CP|<r\\)", "\\(|CP|=r\\)", "\\(|CP|=0\\)"],
        ans: "\\(|CP|=r\\)",
        reason: "A point lies exactly on the circle when its distance from the centre equals the radius."
      },
      {
        q: "The point \\((4,3)\\) with respect to the circle \\(x^2+y^2=20\\) lies:",
        options: ["On the circle", "Inside the circle", "Outside the circle", "At the centre"],
        ans: "Outside the circle",
        reason: "Substituting gives \\(16+9=25\\), which exceeds 20, so the point lies outside the circle."
      },
      {
        q: "The length of the tangent drawn from an external point \\(P(x_1,y_1)\\) to the circle \\(x^2+y^2+2gx+2fy+c=0\\) is:",
        options: ["\\(\\sqrt{x_1^2+y_1^2+2gx_1+2fy_1+c}\\)", "\\(x_1^2+y_1^2+2gx_1+2fy_1+c\\)", "\\(\\sqrt{x_1^2+y_1^2}-r\\)", "\\(\\sqrt{g^2+f^2-c}\\)"],
        ans: "\\(\\sqrt{x_1^2+y_1^2+2gx_1+2fy_1+c}\\)",
        reason: "This is the standard formula for the length of the tangent from an external point, derived from substituting the point into the circle's expression."
      },
      {
        q: "If two tangents \\(PA\\) and \\(PB\\) are drawn from an external point \\(P\\) to a circle with points of tangency \\(A\\) and \\(B\\), then:",
        options: ["\\(|PA|\\ne|PB|\\) in general", "\\(|PA|=|PB|\\)", "\\(|PA|+|PB|=\\)diameter", "\\(|PA|\\cdot|PB|=r^2\\) always"],
        ans: "\\(|PA|=|PB|\\)",
        reason: "By symmetry (congruent right triangles sharing the hypotenuse CP), the two tangent segments from an external point are always equal in length."
      },
      {
        q: "The length of the tangent from the point \\((1,2)\\) to the circle \\(x^2+y^2+3x-4y+15=0\\) is:",
        options: ["\\(\\sqrt{15}\\)", "\\(\\sqrt{4+3-8+15}\\) simplified \\(=\\sqrt{14}\\)", "\\(15\\)", "\\(\\sqrt{1+2+3-4+15}\\)"],
        ans: "\\(\\sqrt{15}\\)",
        reason: "Substituting the point gives \\(1+4+3(1)-4(2)+15=15\\), so the tangent length is \\(\\sqrt{15}\\)."
      },
      {
        q: "The proof that two tangents from an external point to a circle are equal in length uses which theorem, applied to the right triangle formed by the centre, external point and point of tangency?",
        options: ["The Law of Cosines", "The Pythagoras theorem", "The Law of Sines", "The Midpoint theorem"],
        ans: "The Pythagoras theorem",
        reason: "Since the radius meets the tangent at a right angle, the Pythagorean theorem directly relates the radius, tangent length, and distance CP."
      },
      {
        q: "If the length of the tangent from a point \\(P\\) to a circle is zero, then \\(P\\) must lie:",
        options: ["Outside the circle", "Inside the circle", "On the circle", "At the centre"],
        ans: "On the circle",
        reason: "A tangent length of zero means the external point has collapsed onto the circle itself."
      },
      {
        q: "A parabola is the set of all points in a plane that are equidistant from a fixed point (focus) and a fixed line called the:",
        options: ["Latus rectum", "Directrix", "Axis", "Chord"],
        ans: "Directrix",
        reason: "The fixed line used in the equidistance definition of a parabola is called the directrix."
      },
      {
        q: "The standard equation of a parabola with vertex at the origin and focus at \\((a,0)\\), \\(a>0\\), is:",
        options: ["\\(y^2=4ax\\)", "\\(y^2=-4ax\\)", "\\(x^2=4ay\\)", "\\(x^2+y^2=a^2\\)"],
        ans: "\\(y^2=4ax\\)",
        reason: "This is the standard equation of a parabola opening rightward with vertex at the origin and focus \\((a,0)\\)."
      },
      {
        q: "The parabola \\(x^2=4ay\\) has its focus at:",
        options: ["\\((a,0)\\)", "\\((-a,0)\\)", "\\((0,a)\\)", "\\((0,-a)\\)"],
        ans: "\\((0,a)\\)",
        reason: "Comparing with the standard vertical-axis form \\(x^2=4ay\\), the focus is at \\((0,a)\\)."
      },
      {
        q: "The parabola \\(y^2=-4ax\\) opens towards the:",
        options: ["Positive \\(x\\)-direction", "Negative \\(x\\)-direction", "Positive \\(y\\)-direction", "Negative \\(y\\)-direction"],
        ans: "Negative \\(x\\)-direction",
        reason: "The negative sign flips the standard rightward-opening parabola to open in the negative x-direction."
      },
      {
        q: "The directrix of the parabola \\(y^2=4ax\\) is the line:",
        options: ["\\(x=a\\)", "\\(x=-a\\)", "\\(y=a\\)", "\\(y=-a\\)"],
        ans: "\\(x=-a\\)",
        reason: "The directrix always lies on the opposite side of the vertex from the focus, at \\(x=-a\\)."
      },
      {
        q: "The axis of symmetry of the parabola \\(y^2=4ax\\) is:",
        options: ["\\(x=0\\)", "\\(y=0\\)", "\\(x=a\\)", "\\(y=a\\)"],
        ans: "\\(y=0\\)",
        reason: "For a parabola opening along the x-axis, the axis of symmetry is the x-axis itself, \\(y=0\\)."
      },
      {
        q: "The length of the latus rectum of the parabola \\(y^2=4ax\\) is:",
        options: ["\\(a\\)", "\\(2a\\)", "\\(4a\\)", "\\(\\dfrac{a}2\\)"],
        ans: "\\(4a\\)",
        reason: "This is the standard result: the latus rectum of \\(y^2=4ax\\) has length \\(4a\\)."
      },
      {
        q: "A chord of a parabola which passes through the focus is called a:",
        options: ["Latus rectum", "Focal chord", "Directrix chord", "Normal chord"],
        ans: "Focal chord",
        reason: "A chord passing through the focus is, by definition, called a focal chord."
      },
      {
        q: "For a parabola with vertex \\((h,k)\\) and axis parallel to the \\(x\\)-axis, the standard form is:",
        options: ["\\((y-k)^2=4a(x-h)\\)", "\\((x-h)^2=4a(y-k)\\)", "\\((y-k)^2=4a(y-h)\\)", "\\((x-h)^2+(y-k)^2=4a\\)"],
        ans: "\\((y-k)^2=4a(x-h)\\)",
        reason: "This is the standard translated form of a horizontally-opening parabola with vertex \\((h,k)\\)."
      },
      {
        q: "For the parabola \\((x-h)^2=-4a(y-k)\\), the parabola opens:",
        options: ["Upward", "Downward", "Rightward", "Leftward"],
        ans: "Downward",
        reason: "The negative sign together with the vertical-axis form means the parabola opens downward."
      },
      {
        q: "The vertex of the parabola \\(y=x^2-3x+7\\), after completing the square, is located at:",
        options: ["\\(\\left(\\tfrac32,\\tfrac{19}4\\right)\\)", "\\((3,7)\\)", "\\(\\left(-\\tfrac32,\\tfrac{19}4\\right)\\)", "\\(\\left(\\tfrac32,-\\tfrac{19}4\\right)\\)"],
        ans: "\\(\\left(\\tfrac32,\\tfrac{19}4\\right)\\)",
        reason: "Completing the square: \\(y=\\left(x-\\frac32\\right)^2-\\frac94+7=\\left(x-\\frac32\\right)^2+\\frac{19}4\\), giving vertex \\(\\left(\\frac32,\\frac{19}4\\right)\\)."
      },
      {
        q: "Given that the vertex of a parabola is \\((2,3)\\) and the focus is \\((7,3)\\), since both have the same \\(y\\)-coordinate, the axis of the parabola is:",
        options: ["Vertical, \\(x=2\\)", "Horizontal, \\(y=3\\)", "The line \\(y=x\\)", "Vertical, \\(x=7\\)"],
        ans: "Horizontal, \\(y=3\\)",
        reason: "Since the vertex and focus share the same y-coordinate, the axis of symmetry is the horizontal line \\(y=3\\)."
      },
      {
        q: "A parabola with vertex \\((3,-1)\\) and directrix \\(x=-4\\) opens towards the:",
        options: ["Left", "Right", "Upward", "Downward"],
        ans: "Right",
        reason: "Since the directrix \\(x=-4\\) lies to the left of the vertex \\(x=3\\), the parabola must open to the right, away from the directrix."
      },
      {
        q: "The condition for the line \\(y=mx+c\\) to be tangent to the parabola \\(y^2=4ax\\) is:",
        options: ["\\(c=\\dfrac{a}m\\)", "\\(c=am\\)", "\\(c=\\dfrac{a}{m^2}\\)", "\\(c=am^2\\)"],
        ans: "\\(c=\\dfrac{a}m\\)",
        reason: "This is the standard tangency condition for the line \\(y=mx+c\\) to touch \\(y^2=4ax\\)."
      },
      {
        q: "Using the slope form, the equation of a tangent to the parabola \\(y^2=4ax\\) with slope \\(m\\) is:",
        options: ["\\(y=mx+\\dfrac{a}m\\)", "\\(y=mx-\\dfrac{a}m\\)", "\\(y=mx+am\\)", "\\(y=mx-am^2\\)"],
        ans: "\\(y=mx+\\dfrac{a}m\\)",
        reason: "Substituting the tangency condition \\(c=a/m\\) into \\(y=mx+c\\) gives the tangent line in slope form."
      },
      {
        q: "The equation of the tangent to the parabola \\((y-k)^2=4a(x-h)\\) at the point \\((x_1,y_1)\\) on the parabola is:",
        options: ["\\((y_1-k)(y-k)=2a[(x-h)+(x_1-h)]\\)", "\\((y-k)^2=4a(x_1-h)\\)", "\\(yy_1=4ax_1\\) only", "\\((x-x_1)=(y-y_1)\\)"],
        ans: "\\((y_1-k)(y-k)=2a[(x-h)+(x_1-h)]\\)",
        reason: "This is the standard replacement-rule tangent equation for the translated parabola \\((y-k)^2=4a(x-h)\\)."
      },
      {
        q: "At the vertex \\((0,0)\\) of the parabola \\(y^2=4ax\\), the equation of the tangent line is:",
        options: ["\\(x=0\\)", "\\(y=0\\)", "\\(x=a\\)", "\\(y=a\\)"],
        ans: "\\(x=0\\)",
        reason: "At the vertex, the tangent line to \\(y^2=4ax\\) is vertical, \\(x=0\\), perpendicular to the axis of the parabola."
      },
      {
        q: "The slope of the normal line to a parabola at a point \\(P\\) is related to the slope \\(m\\) of the tangent at \\(P\\) by:",
        options: ["Normal slope \\(=m\\)", "Normal slope \\(=-\\dfrac1m\\)", "Normal slope \\(=\\dfrac1m\\)", "Normal slope \\(=-m\\)"],
        ans: "Normal slope \\(=-\\dfrac1m\\)",
        reason: "Since the normal is perpendicular to the tangent, its slope is the negative reciprocal of the tangent slope m."
      },
      {
        q: "At a given point \\((x_1,y_1)\\) on the parabola \\(y^2=4ax\\), the equation of the normal line is:",
        options: ["\\(y_1(x-x_1)+2a(y-y_1)=0\\)", "\\(y-y_1=\\dfrac{2a}{y_1}(x-x_1)\\)", "\\(y+y_1=2a(x-x_1)\\)", "\\(x+x_1=0\\)"],
        ans: "\\(y_1(x-x_1)+2a(y-y_1)=0\\)",
        reason: "This is the standard equation of the normal line to \\(y^2=4ax\\) at a point on the curve."
      },
      {
        q: "If a tangent line and a normal line are drawn at the same point of a parabola, the two lines are always:",
        options: ["Parallel", "Perpendicular", "Coincident", "Equal in length"],
        ans: "Perpendicular",
        reason: "By definition, the normal is the line perpendicular to the tangent at the point of contact."
      },
      {
        q: "An ellipse is the set of all points in a plane such that the sum of the distances from two fixed points (foci) is:",
        options: ["Zero", "Constant", "Equal to the eccentricity", "Always equal to \\(2b\\)"],
        ans: "Constant",
        reason: "An ellipse is defined as the locus of points where the sum of distances to the two foci remains constant."
      },
      {
        q: "The standard equation of an ellipse with centre at the origin and major axis along the \\(x\\)-axis is:",
        options: ["\\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1,\\ a>b\\)", "\\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1,\\ b>a\\)", "\\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\)", "\\(x^2+y^2=a^2\\)"],
        ans: "\\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1,\\ a>b\\)",
        reason: "For the major axis to lie along the x-axis, the denominator under \\(x^2\\) (namely \\(a^2\\)) must be the larger one, so \\(a>b\\)."
      },
      {
        q: "For the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) with \\(a>b\\), the foci are located at:",
        options: ["\\((\\pm a,0)\\)", "\\((\\pm b,0)\\)", "\\((\\pm c,0)\\) where \\(c^2=a^2-b^2\\)", "\\((0,\\pm c)\\)"],
        ans: "\\((\\pm c,0)\\) where \\(c^2=a^2-b^2\\)",
        reason: "This is the standard relation locating an ellipse's foci along its major axis."
      },
      {
        q: "The relationship between \\(a,b\\) and \\(c\\) for an ellipse (with \\(a>b\\)) is:",
        options: ["\\(c^2=a^2+b^2\\)", "\\(b^2=a^2-c^2\\)", "\\(a^2=b^2-c^2\\)", "\\(c^2=b^2-a^2\\)"],
        ans: "\\(b^2=a^2-c^2\\)",
        reason: "Rearranging the standard relation \\(c^2=a^2-b^2\\) gives \\(b^2=a^2-c^2\\)."
      },
      {
        q: "The eccentricity of an ellipse is defined as:",
        options: ["\\(e=\\dfrac{a}c\\), and \\(e>1\\)", "\\(e=\\dfrac{c}a\\), and \\(0<e<1\\)", "\\(e=\\dfrac{b}a\\)", "\\(e=\\dfrac{c}b\\)"],
        ans: "\\(e=\\dfrac{c}a\\), and \\(0<e<1\\)",
        reason: "An ellipse's eccentricity is defined as \\(e=c/a\\), which is always between 0 and 1 since \\(c<a\\)."
      },
      {
        q: "The length of the major axis of the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) (with \\(a>b\\)) is:",
        options: ["\\(a\\)", "\\(2a\\)", "\\(b\\)", "\\(2b\\)"],
        ans: "\\(2a\\)",
        reason: "The major axis spans from \\((-a,0)\\) to \\((a,0)\\), giving total length \\(2a\\)."
      },
      {
        q: "The length of the latus rectum of an ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) is:",
        options: ["\\(\\dfrac{2b^2}a\\)", "\\(\\dfrac{2a^2}b\\)", "\\(\\dfrac{b^2}a\\)", "\\(2a\\)"],
        ans: "\\(\\dfrac{2b^2}a\\)",
        reason: "This is the standard formula for the latus rectum length of an ellipse."
      },
      {
        q: "The equations of the directrices of the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) (major axis along \\(x\\)-axis) are:",
        options: ["\\(x=\\pm\\dfrac{a}e\\)", "\\(y=\\pm\\dfrac{a}e\\)", "\\(x=\\pm ae\\)", "\\(y=\\pm ae\\)"],
        ans: "\\(x=\\pm\\dfrac{a}e\\)",
        reason: "This is the standard formula for the directrices of an ellipse with major axis along the x-axis."
      },
      {
        q: "The points where an ellipse cuts its minor axis are called its:",
        options: ["Foci", "Vertices", "Co-vertices", "Directrices"],
        ans: "Co-vertices",
        reason: "The endpoints of the minor axis are, by definition, called the co-vertices."
      },
      {
        q: "A chord of an ellipse that passes through a focus is called a:",
        options: ["Latus rectum", "Focal chord", "Minor chord", "Directrix"],
        ans: "Focal chord",
        reason: "A chord of the ellipse passing through a focus is, by definition, called a focal chord."
      },
      {
        q: "For the ellipse \\(\\dfrac{x^2}9+\\dfrac{y^2}{25}=1\\), since \\(25>9\\), the major axis lies along the:",
        options: ["\\(x\\)-axis", "\\(y\\)-axis", "Line \\(y=x\\)", "Line \\(y=-x\\)"],
        ans: "\\(y\\)-axis",
        reason: "Since the larger denominator (25) is under \\(y^2\\), the major axis lies along the y-axis."
      },
      {
        q: "The centre of the ellipse \\(\\dfrac{(x-1)^2}9+\\dfrac{(y+2)^2}4=1\\) is:",
        options: ["\\((1,-2)\\)", "\\((-1,2)\\)", "\\((1,2)\\)", "\\((-1,-2)\\)"],
        ans: "\\((1,-2)\\)",
        reason: "Comparing with \\((x-h)^2/a^2+(y-k)^2/b^2=1\\) gives centre \\((h,k)=(1,-2)\\)."
      },
      {
        q: "The condition for the line \\(y=mx+c\\) to be tangent to the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) is:",
        options: ["\\(c^2=a^2m^2+b^2\\)", "\\(c^2=a^2m^2-b^2\\)", "\\(c=am+b\\)", "\\(c^2=a^2+b^2m^2\\)"],
        ans: "\\(c^2=a^2m^2+b^2\\)",
        reason: "This is the standard tangency condition for the line \\(y=mx+c\\) to touch the ellipse."
      },
      {
        q: "The equation of the tangent to the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) in slope form (slope \\(m\\)) is:",
        options: ["\\(y=mx\\pm\\sqrt{a^2m^2+b^2}\\)", "\\(y=mx\\pm\\sqrt{a^2m^2-b^2}\\)", "\\(y=mx\\pm ab\\)", "\\(y=mx\\pm\\sqrt{b^2m^2+a^2}\\)"],
        ans: "\\(y=mx\\pm\\sqrt{a^2m^2+b^2}\\)",
        reason: "Substituting the tangency condition into \\(y=mx+c\\) and solving for c gives \\(y=mx\\pm\\sqrt{a^2m^2+b^2}\\)."
      },
      {
        q: "At the point \\((x_1,y_1)\\) on the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\), the equation of the tangent line is:",
        options: ["\\(\\dfrac{xx_1}{a^2}+\\dfrac{yy_1}{b^2}=1\\)", "\\(\\dfrac{xx_1}{a^2}-\\dfrac{yy_1}{b^2}=1\\)", "\\(\\dfrac{x}{x_1}+\\dfrac{y}{y_1}=\\dfrac{a^2}{b^2}\\)", "\\(xx_1+yy_1=a^2+b^2\\)"],
        ans: "\\(\\dfrac{xx_1}{a^2}+\\dfrac{yy_1}{b^2}=1\\)",
        reason: "This is the standard replacement-rule tangent equation for the ellipse at a point on it."
      },
      {
        q: "The slope of the normal line to the ellipse \\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\) at \\((x_1,y_1)\\), given the tangent slope is \\(-\\dfrac{b^2x_1}{a^2y_1}\\), is:",
        options: ["\\(-\\dfrac{b^2x_1}{a^2y_1}\\)", "\\(\\dfrac{a^2y_1}{b^2x_1}\\)", "\\(\\dfrac{b^2x_1}{a^2y_1}\\)", "\\(-\\dfrac{a^2y_1}{b^2x_1}\\)"],
        ans: "\\(\\dfrac{a^2y_1}{b^2x_1}\\)",
        reason: "The normal slope is the negative reciprocal of the given tangent slope: \\(-\\dfrac1{-b^2x_1/(a^2y_1)}=\\dfrac{a^2y_1}{b^2x_1}\\)."
      },
      {
        q: "At the centre-relative point \\((0,0)\\) if it were on an ellipse, the tangent and normal are undefined; instead, for an ellipse centred at the origin, the tangent at the endpoint of the major axis \\((a,0)\\) is the vertical line:",
        options: ["\\(x=a\\)", "\\(y=a\\)", "\\(x=0\\)", "\\(y=0\\)"],
        ans: "\\(x=a\\)",
        reason: "At the endpoint of the major axis, the tangent to the ellipse is vertical, \\(x=a\\)."
      },
      {
        q: "A hyperbola is the set of all points in a plane such that the difference of the distances from two fixed points (foci) is:",
        options: ["Zero", "Constant", "Always equal to \\(2c\\)", "Equal to the eccentricity"],
        ans: "Constant",
        reason: "A hyperbola is defined as the locus of points where the difference of distances to the two foci remains constant."
      },
      {
        q: "The standard equation of a hyperbola with centre at the origin and transverse axis along the \\(x\\)-axis is:",
        options: ["\\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\)", "\\(\\dfrac{x^2}{a^2}+\\dfrac{y^2}{b^2}=1\\)", "\\(\\dfrac{y^2}{a^2}-\\dfrac{x^2}{b^2}=1\\)", "\\(x^2-y^2=a^2+b^2\\)"],
        ans: "\\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\)",
        reason: "This is the standard equation of a hyperbola centred at the origin with transverse axis along the x-axis."
      },
      {
        q: "For the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\), the relationship between \\(a,b,c\\) is:",
        options: ["\\(c^2=a^2-b^2\\)", "\\(c^2=a^2+b^2\\)", "\\(b^2=a^2+c^2\\)", "\\(a^2=b^2+c^2\\)"],
        ans: "\\(c^2=a^2+b^2\\)",
        reason: "Unlike the ellipse, a hyperbola's relation is \\(c^2=a^2+b^2\\), since c must exceed a."
      },
      {
        q: "The eccentricity of a hyperbola is always:",
        options: ["Equal to \\(1\\)", "Less than \\(1\\)", "Greater than \\(1\\)", "Equal to \\(0\\)"],
        ans: "Greater than \\(1\\)",
        reason: "Since \\(c>a\\) for a hyperbola, the eccentricity \\(e=c/a\\) is always greater than 1."
      },
      {
        q: "For the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\), the length of the conjugate axis is:",
        options: ["\\(2a\\)", "\\(2b\\)", "\\(a\\)", "\\(b\\)"],
        ans: "\\(2b\\)",
        reason: "The conjugate axis spans from \\((0,-b)\\) to \\((0,b)\\), giving total length \\(2b\\)."
      },
      {
        q: "The length of the latus rectum of the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\) is:",
        options: ["\\(\\dfrac{2a^2}b\\)", "\\(\\dfrac{2b^2}a\\)", "\\(\\dfrac{b^2}a\\)", "\\(2a\\)"],
        ans: "\\(\\dfrac{2b^2}a\\)",
        reason: "This is the standard formula for the latus rectum length of a hyperbola, analogous to the ellipse's."
      },
      {
        q: "The condition for the line \\(y=mx+c\\) to be tangent to the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\) is:",
        options: ["\\(c^2=a^2m^2-b^2\\)", "\\(c^2=a^2m^2+b^2\\)", "\\(c^2=b^2m^2-a^2\\)", "\\(c=am-b\\)"],
        ans: "\\(c^2=a^2m^2-b^2\\)",
        reason: "This is the standard tangency condition for the line \\(y=mx+c\\) to touch the hyperbola."
      },
      {
        q: "At the point \\((x_1,y_1)\\) on the hyperbola \\(\\dfrac{x^2}{a^2}-\\dfrac{y^2}{b^2}=1\\), the equation of the tangent line is:",
        options: ["\\(\\dfrac{xx_1}{a^2}-\\dfrac{yy_1}{b^2}=1\\)", "\\(\\dfrac{xx_1}{a^2}+\\dfrac{yy_1}{b^2}=1\\)", "\\(xx_1-yy_1=a^2-b^2\\)", "\\(\\dfrac{x}{x_1}-\\dfrac{y}{y_1}=1\\)"],
        ans: "\\(\\dfrac{xx_1}{a^2}-\\dfrac{yy_1}{b^2}=1\\)",
        reason: "This is the standard replacement-rule tangent equation for the hyperbola at a point on it."
      },
      {
        q: "If, at a given point on a hyperbola, the tangent line turns out to be vertical (\\(x=\\)constant), then the normal line at that point must be:",
        options: ["Also vertical", "Horizontal", "Undefined", "Parallel to an asymptote"],
        ans: "Horizontal",
        reason: "Since the normal is always perpendicular to the tangent, a vertical tangent forces the normal to be horizontal."
      },
      {
        q: "A suspension bridge cable that hangs in the shape of a conic section, with its lowest point closest to the road, is best modelled by a:",
        options: ["Circle", "Parabola", "Ellipse", "Hyperbola"],
        ans: "Parabola",
        reason: "A cable under a uniformly distributed load (like a bridge deck) hangs in the shape of a parabola."
      },
      {
        q: "Planetary orbits, according to Kepler's law, are best modelled by an ellipse with the Sun located at:",
        options: ["The centre of the ellipse", "One of the foci", "A vertex", "A co-vertex"],
        ans: "One of the foci",
        reason: "Kepler's First Law states planetary orbits are ellipses with the Sun located at one focus, not the centre."
      },
      {
        q: "The cross-section of a nuclear cooling tower, which is narrow in the middle and wide at the top and bottom, is typically modelled by a:",
        options: ["Circle", "Parabola", "Ellipse", "Hyperbola"],
        ans: "Hyperbola",
        reason: "The narrow-waisted, flared-top-and-bottom profile of a cooling tower follows a hyperbolic cross-section."
      },
      {
        stimulus: "<table><tr><th>Circle</th><th>Equation</th></tr><tr><td>General form</td><td>\\(x^2+y^2-8x+6y+21=0\\)</td></tr></table>",
        q: "The centre of the circle is:",
        options: ["\\((4,-3)\\)", "\\((-4,3)\\)", "\\((8,-6)\\)", "\\((4,3)\\)"],
        ans: "\\((4,-3)\\)",
        reason: "With \\(g=-4,f=3\\), the centre is \\((-g,-f)=(4,-3)\\)."
      },
      {
        stimulus: "<table><tr><th>Circle</th><th>Equation</th></tr><tr><td>General form</td><td>\\(x^2+y^2-8x+6y+21=0\\)</td></tr></table>",
        q: "The radius of the circle is:",
        options: ["\\(2\\)", "\\(4\\)", "\\(16\\)", "\\(\\sqrt{21}\\)"],
        ans: "\\(2\\)",
        reason: "The radius is \\(\\sqrt{g^2+f^2-c}=\\sqrt{16+9-21}=2\\)."
      },
      {
        stimulus: "<table><tr><th>Circle</th><th>Equation</th></tr><tr><td>General form</td><td>\\(x^2+y^2-8x+6y+21=0\\)</td></tr></table>",
        q: "The position of the point \\((0,0)\\) with respect to this circle is:",
        options: ["Outside (since \\(21>0\\))", "Inside", "On the circle", "At the centre"],
        ans: "Outside (since \\(21>0\\))",
        reason: "Substituting \\((0,0)\\) into the circle's expression gives \\(21\\), which is positive, so the origin lies outside."
      },
      {
        stimulus: "<table><tr><th>Circle</th><th>Equation</th></tr><tr><td>General form</td><td>\\(x^2+y^2-8x+6y+21=0\\)</td></tr></table>",
        q: "The length of the tangent from \\((0,0)\\) to the circle is:",
        options: ["\\(\\sqrt{21}\\)", "\\(21\\)", "\\(2\\)", "\\(4\\)"],
        ans: "\\(\\sqrt{21}\\)",
        reason: "The tangent length from an external point equals the square root of the same substituted expression: \\(\\sqrt{21}\\)."
      },
      {
        stimulus: "<table><tr><th>Parabola</th><th>\\(y^2=12x\\)</th></tr></table>",
        q: "Comparing with \\(y^2=4ax\\), the value of \\(a\\) is:",
        options: ["\\(3\\)", "\\(12\\)", "\\(6\\)", "\\(4\\)"],
        ans: "\\(3\\)",
        reason: "Comparing \\(y^2=12x\\) with \\(y^2=4ax\\) gives \\(4a=12\\), so \\(a=3\\)."
      },
      {
        stimulus: "<table><tr><th>Parabola</th><th>\\(y^2=12x\\)</th></tr></table>",
        q: "The focus of the parabola is at:",
        options: ["\\((3,0)\\)", "\\((0,3)\\)", "\\((-3,0)\\)", "\\((12,0)\\)"],
        ans: "\\((3,0)\\)",
        reason: "The focus of \\(y^2=4ax\\) is at \\((a,0)=(3,0)\\)."
      },
      {
        stimulus: "<table><tr><th>Parabola</th><th>\\(y^2=12x\\)</th></tr></table>",
        q: "The equation of the directrix is:",
        options: ["\\(x=-3\\)", "\\(x=3\\)", "\\(y=-3\\)", "\\(y=3\\)"],
        ans: "\\(x=-3\\)",
        reason: "The directrix is the vertical line \\(x=-a=-3\\)."
      },
      {
        stimulus: "<table><tr><th>Parabola</th><th>\\(y^2=12x\\)</th></tr></table>",
        q: "The length of the latus rectum is:",
        options: ["\\(12\\)", "\\(3\\)", "\\(6\\)", "\\(24\\)"],
        ans: "\\(12\\)",
        reason: "The latus rectum has length \\(4a=4(3)=12\\)."
      },
      {
        stimulus: "<table><tr><th>Conic</th><th>Equation</th></tr><tr><td>\\(C\\)</td><td>\\(\\dfrac{x^2}{25}+\\dfrac{y^2}9=1\\)</td></tr></table>",
        q: "Since \\(25>9\\), the major axis of \\(C\\) lies along the:",
        options: ["\\(x\\)-axis", "\\(y\\)-axis", "Line \\(y=x\\)", "Line \\(y=-x\\)"],
        ans: "\\(x\\)-axis",
        reason: "Since the larger denominator, 25, is under \\(x^2\\), the major axis lies along the x-axis."
      },
      {
        stimulus: "<table><tr><th>Conic</th><th>Equation</th></tr><tr><td>\\(C\\)</td><td>\\(\\dfrac{x^2}{25}+\\dfrac{y^2}9=1\\)</td></tr></table>",
        q: "The value of \\(c\\), where \\(c^2=a^2-b^2\\), is:",
        options: ["\\(4\\)", "\\(16\\)", "\\(34\\)", "\\(\\sqrt{34}\\)"],
        ans: "\\(4\\)",
        reason: "\\(c^2=a^2-b^2=25-9=16\\), so \\(c=4\\)."
      },
      {
        stimulus: "<table><tr><th>Conic</th><th>Equation</th></tr><tr><td>\\(C\\)</td><td>\\(\\dfrac{x^2}{25}+\\dfrac{y^2}9=1\\)</td></tr></table>",
        q: "The eccentricity \\(e=c/a\\) of \\(C\\) is:",
        options: ["\\(\\dfrac45\\)", "\\(\\dfrac54\\)", "\\(\\dfrac35\\)", "\\(1\\)"],
        ans: "\\(\\dfrac45\\)",
        reason: "\\(e=\\dfrac{c}a=\\dfrac45\\)."
      },
      {
        stimulus: "<table><tr><th>Conic</th><th>Equation</th></tr><tr><td>\\(C\\)</td><td>\\(\\dfrac{x^2}{25}+\\dfrac{y^2}9=1\\)</td></tr></table>",
        q: "The length of the latus rectum \\(2b^2/a\\) of \\(C\\) is:",
        options: ["\\(\\dfrac{18}5\\)", "\\(\\dfrac{50}9\\)", "\\(5\\)", "\\(9\\)"],
        ans: "\\(\\dfrac{18}5\\)",
        reason: "The latus rectum is \\(\\dfrac{2b^2}a=\\dfrac{2(9)}5=\\dfrac{18}5\\)."
      }
    ];
  }
});
