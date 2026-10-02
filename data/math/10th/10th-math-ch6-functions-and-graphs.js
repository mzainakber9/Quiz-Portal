// Class 10 Math — Chapter 6: Functions and Graphs
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch6",
  label: "Chapter 6: Functions and Graphs",
  order: 6,
  questions: function () {
    return [
    {
      q: "If \\(A=\\{-2,0,2\\}\\), \\(B=\\{0,2\\}\\) and \\(f:A\\to B\\) is defined as \\(f=\\{(-2,2),(0,0),(2,0)\\}\\), what type of function is \\(f\\)?",
      options: ["Into","Bijective","Injective","Onto"],
      ans: "Onto",
      reason: "The range \\(\\{2,0\\}\\) equals the co-domain \\(B=\\{0,2\\}\\), so \\(f\\) is onto (not one-one, since \\(0\\) and \\(2\\) both map to \\(0\\))."
    },
    {
      q: "If the number of elements in set \\(X\\) is 3 and in set \\(Y\\) is 2, how many binary relations are possible from \\(Y\\) to \\(X\\)?",
      options: ["4","\\(2^6\\)","6","\\(2^9\\)"],
      ans: "\\(2^6\\)",
      reason: "\\(Y\\times X\\) has \\(2\\times3=6\\) ordered pairs, and every subset of it is a relation: \\(2^6\\)."
    },
    {
      q: "What is the domain of the relation \\(g=\\{(1,0),(2,2),(3,4)\\}\\)?",
      options: ["\\(\\{0,1,2,3,4\\}\\)","\\(\\{1,2,3\\}\\)","\\(\\{0,2,4\\}\\)","\\(\\{0,1,2,3\\}\\)"],
      ans: "\\(\\{1,2,3\\}\\)",
      reason: "The domain is the set of first elements: \\(\\{1,2,3\\}\\)."
    },
    {
      q: "What is the x-intercept of every point on the y-axis?",
      options: ["Undefined","\\(-1\\)","0","1"],
      ans: "0",
      reason: "Every point on the y-axis has \\(x=0\\), so its x-coordinate (x-intercept) is 0."
    },
    {
      q: "At what point will the graph of \\(y=2x^2-1\\) cut the y-axis?",
      options: ["\\(-1\\)","\\((-1,0)\\)","\\((0,-1)\\)","\\(\\left(\\pm\\sqrt{\\frac12},0\\right)\\)"],
      ans: "\\((0,-1)\\)",
      reason: "Put \\(x=0\\): \\(y=-1\\), so the graph cuts the y-axis at \\((0,-1)\\)."
    },
    {
      q: "If \\(y=2x-1\\), what is \\(f^{-1}(x)\\)?",
      options: ["\\(\\dfrac{1+y}{2}\\)","\\(y+1\\)","\\(2y-1\\)","\\(\\dfrac{1+x}{2}\\)"],
      ans: "\\(\\dfrac{1+x}{2}\\)",
      reason: "\\(y=2x-1\\Rightarrow x=\\dfrac{y+1}{2}\\), so \\(f^{-1}(x)=\\dfrac{1+x}{2}\\)."
    },
    {
      q: "If \\(f(x)=\\dfrac{1}{2}x\\), what is \\(f^2(x)\\) (i.e. \\(f(f(x))\\))?",
      options: ["\\(\\dfrac{1}{4x}\\)","\\(\\dfrac{1}{4}x^2\\)","\\(\\dfrac{1}{4}x\\)","2x"],
      ans: "\\(\\dfrac{1}{4}x\\)",
      reason: "\\(f(f(x))=\\tfrac12\\left(\\tfrac12x\\right)=\\tfrac14x\\)."
    },
    {
      q: "If \\(y=\\dfrac{x}{x-2}\\), for what value of \\(x\\) will the function become undefined?",
      options: ["\\(-2\\)","2","0","\\(\\pm2\\)"],
      ans: "2",
      reason: "The function is undefined when the denominator is zero: \\(x-2=0\\Rightarrow x=2\\)."
    },
    {
      q: "Which of the following is an exponential function?",
      options: ["All of \\(\\left(\\frac13\\right)^x,\\ e^x,\\ 2^x\\)","Only \\(\\left(\\frac13\\right)^x\\)","Only \\(e^x\\)","Only \\(2^x\\)"],
      ans: "All of \\(\\left(\\frac13\\right)^x,\\ e^x,\\ 2^x\\)",
      reason: "A function \\(a^x\\) with \\(a>0,\\ a\\ne1\\) is exponential. \\(\\left(\\tfrac13\\right)^x,\\ e^x,\\ 2^x\\) all are."
    },
    {
      q: "If \\(f(x)=\\dfrac{2}{3}x^2-5\\), what is the value of \\(f(-3)\\)?",
      options: ["\\(-3\\)","0","\\(-1\\)","1"],
      ans: "1",
      reason: "\\(f(-3)=\\tfrac23(9)-5=6-5=1\\)."
    },
    {
      q: "The inverse of \\(f(x)=\\dfrac{3x}{2x-1}\\) is:",
      options: ["\\(f^{-1}(x)=\\dfrac{3x}{2x-3}\\)","\\(f^{-1}(x)=\\dfrac{x}{2x-3}\\)","\\(f^{-1}(x)=\\dfrac{x-3}{2x}\\)","\\(f^{-1}(x)=\\dfrac{x}{2x-1}\\)"],
      ans: "\\(f^{-1}(x)=\\dfrac{x}{2x-3}\\)",
      reason: "\\(y=\\dfrac{3x}{2x-1}\\Rightarrow2xy-y=3x\\Rightarrow x(2y-3)=y\\Rightarrow x=\\dfrac{y}{2y-3}\\). So \\(f^{-1}(x)=\\dfrac{x}{2x-3}\\)."
    },
    {
      q: "For \\(f(x)=\\dfrac{3x}{2x-1}\\), \\(f^{-1}(x)\\) is undefined when \\(x=\\)",
      options: ["\\(\\dfrac23\\)","\\(\\dfrac32\\)","\\(\\dfrac12\\)","\\(-\\dfrac32\\)"],
      ans: "\\(\\dfrac32\\)",
      reason: "\\(f^{-1}(x)=\\dfrac{x}{2x-3}\\) is undefined when \\(2x-3=0\\Rightarrow x=\\tfrac32\\)."
    },
    {
      q: "For \\(f(x)=\\dfrac{3x}{2x-1}\\), \\(f^{-1}(-1)=\\)",
      options: ["5","\\(-5\\)","\\(-\\dfrac15\\)","\\(\\dfrac15\\)"],
      ans: "\\(\\dfrac15\\)",
      reason: "\\(f^{-1}(-1)=\\dfrac{-1}{-2-3}=\\dfrac15\\)."
    },
    {
      q: "The graph of the quadratic function \\(y=-x^2-4x\\) will open:",
      options: ["Cannot be determined","Upward, since \\(a=-1<0\\)","Downward, since \\(a=-1<0\\)","Neither, it is a straight line"],
      ans: "Downward, since \\(a=-1<0\\)",
      reason: "The coefficient of \\(x^2\\) is \\(a=-1\\lt 0\\), so the parabola opens downward."
    },
    {
      q: "The equation of the form \\(y=ax^2+bx+c\\) which cuts the x-axis at \\((-1,0)\\) and \\((1,0)\\) and the y-axis at \\((0,10)\\) is:",
      options: ["\\(y=10x^2-10\\)","\\(y=-10x^2-10\\)","\\(y=-10x^2+10\\)","\\(y=10x^2+10\\)"],
      ans: "\\(y=-10x^2+10\\)",
      reason: "\\(c=10\\). Points \\((\\pm1,0)\\) give \\(a+b+10=0\\) and \\(a-b+10=0\\), so \\(b=0,\\ a=-10\\): \\(y=-10x^2+10\\)."
    },
    {
      q: "For the function \\(f(x)=x^2-x-6\\), the value(s) of \\(x\\) for which \\(f(x)=f(3)\\) are:",
      options: ["\\(x=3\\) or \\(x=2\\)","\\(x=-3\\) or \\(x=2\\)","\\(x=3\\) or \\(x=-2\\)","\\(x=-3\\) or \\(x=-2\\)"],
      ans: "\\(x=3\\) or \\(x=-2\\)",
      reason: "\\(f(3)=9-3-6=0\\). Solve \\(x^2-x-6=0\\Rightarrow(x-3)(x+2)=0\\Rightarrow x=3\\) or \\(-2\\)."
    },
    {
      q: "The inverse function converting Celsius to Fahrenheit, given \\(C=\\dfrac{5}{9}(F-32)\\), is:",
      options: ["\\(F=\\dfrac{9}{5}C+32\\)","\\(F=\\dfrac{9}{5}C-32\\)","\\(F=\\dfrac{9}{5}(C-32)\\)","\\(F=\\dfrac{5}{9}C+32\\)"],
      ans: "\\(F=\\dfrac{9}{5}C+32\\)",
      reason: "Solve \\(C=\\tfrac59(F-32)\\) for \\(F\\): \\(F=\\tfrac95C+32\\)."
    },
    {
      q: "Using this inverse function, \\(25^\\circ\\)C in Fahrenheit is:",
      options: ["\\(45^\\circ\\)F","\\(77^\\circ\\)F","\\(57^\\circ\\)F","\\(71.4^\\circ\\)F"],
      ans: "\\(77^\\circ\\)F",
      reason: "\\(F=\\tfrac95(25)+32=45+32=77^\\circ\\)F."
    },
    {
      q: "The points of intersection of \\(f(x)=x-2\\) and \\(g(x)=x^2-4x+2\\) are:",
      options: ["\\((-1,1)\\) and \\((2,4)\\)","\\((1,1)\\) and \\((4,-2)\\)","\\((1,-1)\\) and \\((4,2)\\)","\\((1,-1)\\) and \\((2,4)\\)"],
      ans: "\\((1,-1)\\) and \\((4,2)\\)",
      reason: "\\(x-2=x^2-4x+2\\Rightarrow x^2-5x+4=0\\Rightarrow x=1,4\\). Points: \\((1,-1)\\) and \\((4,2)\\)."
    },
    {
      q: "Using \\(f(n)=120\\times(0.9)^n\\), the amount of medicine remaining is 20 mg after approximately:",
      options: ["17 hours","6 hours","20 hours","12 hours"],
      ans: "17 hours",
      reason: "\\(120(0.9)^n=20\\Rightarrow0.9^n=\\tfrac16\\Rightarrow n=\\dfrac{\\ln6}{-\\ln0.9}\\approx17\\) hours."
    },
    {
      q: "For a sound wave with amplitude \\(A(t)=|2\\cos(t)|\\), the amplitude at \\(t=5\\) seconds (in radians) is approximately:",
      options: ["0.57","2","1.98","0"],
      ans: "0.57",
      reason: "\\(A(5)=|2\\cos5|\\) (5 radians). \\(\\cos5\\approx0.2837\\), so \\(A\\approx0.57\\)."
    },
    {
      q: "The Cartesian product \\(A\\times B\\) of two non-empty sets is the set of all:",
      options: ["Unordered pairs","Elements common to both sets","Ordered pairs \\((x,y)\\) with \\(x\\in A,\\,y\\in B\\)","Elements in \\(A\\) only"],
      ans: "Ordered pairs \\((x,y)\\) with \\(x\\in A,\\,y\\in B\\)",
      reason: "The Cartesian product \\(A\\times B\\) is the set of all ordered pairs \\((x,y)\\) with \\(x\\in A,\\ y\\in B\\)."
    },
    {
      q: "A relation from set \\(A\\) to set \\(B\\) is:",
      options: ["Any subset of \\(A\\times B\\)","Always onto","Always a function","The same as \\(A\\cap B\\)"],
      ans: "Any subset of \\(A\\times B\\)",
      reason: "A relation from \\(A\\) to \\(B\\) is any subset of \\(A\\times B\\)."
    },
    {
      q: "A function \\(f:A\\to B\\) maps each element of \\(A\\) to:",
      options: ["A unique element of \\(B\\)","No element of \\(B\\)","Every element of \\(B\\)","At least one element of \\(B\\)"],
      ans: "A unique element of \\(B\\)",
      reason: "A function maps each element of \\(A\\) to a unique element of \\(B\\)."
    },
    {
      q: "If \\(|X|=3\\) and \\(|Y|=2\\), the number of binary relations possible from \\(Y\\) to \\(X\\) is:",
      options: ["6","\\(2^3\\)","\\(2^6\\)","\\(2^2\\)"],
      ans: "\\(2^6\\)",
      reason: "\\(|Y\\times X|=6\\), and each subset is a relation, so \\(2^6\\)."
    },
    {
      q: "The domain of the relation \\(g=\\{(1,0),(2,2),(3,4)\\}\\) is:",
      options: ["\\(\\{0,2,4\\}\\)","\\(\\{0,1,2,3\\}\\)","\\(\\{1,2,3\\}\\)","\\(\\{0,1,2,3,4\\}\\)"],
      ans: "\\(\\{1,2,3\\}\\)",
      reason: "The domain is the set of first elements: \\(\\{1,2,3\\}\\)."
    },
    {
      q: "The range of the relation \\(g=\\{(1,0),(2,2),(3,4)\\}\\) is:",
      options: ["\\(\\{0,1,2,3,4\\}\\)","\\(\\{1,2,3\\}\\)","\\(\\{0,1,2,3\\}\\)","\\(\\{0,2,4\\}\\)"],
      ans: "\\(\\{0,2,4\\}\\)",
      reason: "The range is the set of second elements: \\(\\{0,2,4\\}\\)."
    },
    {
      q: "A function is a special type of relation in which:",
      options: ["All elements of \\(B\\) are used","No two ordered pairs have the same first element","No two ordered pairs have the same second element","\\(A=B\\) always"],
      ans: "No two ordered pairs have the same first element",
      reason: "In a function no two ordered pairs share the same first element."
    },
    {
      q: "If a vertical line intersects a graph more than once, the graph:",
      options: ["Always represents a function","Represents a one-one function","Does not represent a function","Represents an onto function"],
      ans: "Does not represent a function",
      reason: "If a vertical line meets the graph more than once, one \\(x\\) has several \\(y\\) values, so it is not a function."
    },
    {
      q: "The set \\(A\\) in a function \\(f:A\\to B\\) is called the:",
      options: ["Range","Image","Co-domain","Domain"],
      ans: "Domain",
      reason: "The set \\(A\\) is the domain."
    },
    {
      q: "The set \\(B\\) in a function \\(f:A\\to B\\) is called the:",
      options: ["Domain","Range (always equal to \\(B\\))","Co-domain","Pre-image"],
      ans: "Co-domain",
      reason: "The set \\(B\\) is the co-domain."
    },
    {
      q: "The set of all images of elements of \\(A\\) under \\(f\\) is called the:",
      options: ["Co-domain","Domain","Relation","Range"],
      ans: "Range",
      reason: "The set of all images is the range."
    },
    {
      q: "The range of a function is always:",
      options: ["A subset of the co-domain","Equal to the co-domain","Larger than the co-domain","Equal to the domain"],
      ans: "A subset of the co-domain",
      reason: "The range is always a subset of the co-domain."
    },
    {
      q: "The domain of \\(f(x)=\\dfrac{1}{x-2}\\) is:",
      options: ["\\(x\\le2\\)","All real numbers except \\(x=2\\)","\\(x\\ge2\\)","All real numbers"],
      ans: "All real numbers except \\(x=2\\)",
      reason: "The function is undefined when \\(x-2=0\\), so the domain is all real numbers except \\(x=2\\)."
    },
    {
      q: "The domain of \\(f(x)=\\sqrt{x}\\) is:",
      options: ["\\(x>0\\)","\\(x\\ge0\\)","\\(x\\le0\\)","All real numbers"],
      ans: "\\(x\\ge0\\)",
      reason: "\\(\\sqrt x\\) is real only for \\(x\\ge0\\)."
    },
    {
      q: "The function \\(f(x)=\\dfrac{x}{x-2}\\) is undefined when \\(x=\\)",
      options: ["\\(\\pm2\\)","2","\\(-2\\)","0"],
      ans: "2",
      reason: "The denominator \\(x-2\\) is zero at \\(x=2\\)."
    },
    {
      q: "The domain of \\(f(x)=x^2+1\\) is:",
      options: ["All real numbers","\\(x>1\\)","\\(x\\neq0\\)","\\(x\\ge0\\)"],
      ans: "All real numbers",
      reason: "\\(x^2+1\\) is defined for every real number."
    },
    {
      q: "What is the y-intercept of every point on the x-axis?",
      options: ["Undefined","1","0","\\(-1\\)"],
      ans: "0",
      reason: "Every point on the x-axis has \\(y=0\\), so its y-coordinate is 0."
    },
    {
      q: "The graph of \\(y=2x^2-1\\) cuts the y-axis at:",
      options: ["\\((0,1)\\)","\\(\\left(\\pm\\sqrt{\\frac12},0\\right)\\)","\\((0,-1)\\)","\\((-1,0)\\)"],
      ans: "\\((0,-1)\\)",
      reason: "At \\(x=0\\): \\(y=-1\\), so the graph cuts the y-axis at \\((0,-1)\\)."
    },
    {
      q: "The range of the constant function \\(f(x)=5\\) is:",
      options: ["All real numbers","Empty set","\\(\\{0\\}\\)","\\(\\{5\\}\\)"],
      ans: "\\(\\{5\\}\\)",
      reason: "A constant function has only one output value, so the range is \\(\\{5\\}\\)."
    },
    {
      q: "The domain of the reciprocal function \\(f(x)=\\dfrac{1}{x}\\) is:",
      options: ["All real numbers except 0","\\(x>0\\) only","All real numbers","\\(x<0\\) only"],
      ans: "All real numbers except 0",
      reason: "\\(\\tfrac1x\\) is undefined only at \\(x=0\\)."
    },
    {
      q: "The range of \\(f(x)=x^2\\) (for real \\(x\\)) is:",
      options: ["All real numbers","\\(y\\ge0\\)","\\(y\\le0\\)","\\(y>0\\) only"],
      ans: "\\(y\\ge0\\)",
      reason: "\\(x^2\\ge0\\) for all real \\(x\\), so the range is \\(y\\ge0\\)."
    },
    {
      q: "The domain of \\(f(x)=\\sqrt{x}\\), where \\(x\\ge0\\), is the domain of a:",
      options: ["Linear function","Reciprocal function","Square root function","Absolute value function"],
      ans: "Square root function",
      reason: "\\(f(x)=\\sqrt x\\) with \\(x\\ge0\\) is the square root function."
    },
    {
      q: "A function \\(f:A\\to B\\) is called into if:",
      options: ["Range\\((f)=B\\)","It is one-one","It is bijective","Range\\((f)\\) is a proper subset of \\(B\\)"],
      ans: "Range\\((f)\\) is a proper subset of \\(B\\)",
      reason: "A function is into when its range is a proper subset of the co-domain."
    },
    {
      q: "A function \\(f:A\\to B\\) is called onto if:",
      options: ["Range\\((f)\\subset B\\)","It is not one-one","Range\\((f)=B\\)","Domain \\(=B\\)"],
      ans: "Range\\((f)=B\\)",
      reason: "A function is onto when its range equals the co-domain."
    },
    {
      q: "A function \\(f:A\\to B\\) is one-one if:",
      options: ["All elements of \\(A\\) have the same image","\\(A=B\\)","Range\\((f)=B\\)","Distinct elements of \\(A\\) have distinct images in \\(B\\)"],
      ans: "Distinct elements of \\(A\\) have distinct images in \\(B\\)",
      reason: "A function is one-one when different elements of \\(A\\) have different images."
    },
    {
      q: "A function is injective if it is:",
      options: ["Into and onto","Onto and one-one","Neither into nor onto","Into and one-one"],
      ans: "Into and one-one",
      reason: "In this course, a function that is one-one and into is called injective."
    },
    {
      q: "A function is bijective if it is:",
      options: ["Onto only","Onto and one-one","Into and one-one","Into only"],
      ans: "Onto and one-one",
      reason: "A bijective function is both one-one and onto."
    },
    {
      q: "Every bijective function has:",
      options: ["No correspondence between elements","More elements in the range than the domain","An undefined inverse","A one-one correspondence between its elements"],
      ans: "A one-one correspondence between its elements",
      reason: "A bijective function pairs each element of the domain with exactly one element of the co-domain (one-one correspondence)."
    },
    {
      q: "If \\(A=\\{-2,0,2\\}\\), \\(B=\\{0,2\\}\\) and \\(f=\\{(-2,2),(0,0),(2,0)\\}\\), then \\(f\\) is:",
      options: ["Bijective","Not a function","Onto (but not one-one)","Into"],
      ans: "Onto (but not one-one)",
      reason: "The range \\(\\{2,0\\}\\) equals \\(B\\), so \\(f\\) is onto. It is not one-one (\\(0\\) and \\(2\\) both map to 0)."
    },
    {
      q: "A function that is both onto and one-one is called:",
      options: ["Into","Constant","Undefined","Bijective"],
      ans: "Bijective",
      reason: "A function that is both onto and one-one is bijective."
    },
    {
      q: "If range\\((f)\\) is a proper subset of the co-domain, the function is:",
      options: ["Into","Injective","Onto","Bijective"],
      ans: "Into",
      reason: "If the range is a proper subset of the co-domain, the function is into."
    },
    {
      q: "A one-one function that is also into is called:",
      options: ["Constant","Injective","Onto","Bijective"],
      ans: "Injective",
      reason: "A one-one and into function is called injective."
    },
    {
      q: "Which of the following is true for a bijective function?",
      options: ["It has an inverse that is also a function","Its domain must equal its range as sets of numbers","It cannot be linear","It never has an inverse"],
      ans: "It has an inverse that is also a function",
      reason: "A bijective function is one-one and onto, so it has an inverse which is also a function."
    },
    {
      q: "If two different elements of the domain map to the same element of the co-domain, the function is:",
      options: ["Not a function at all","Always onto","Not one-one","Always into"],
      ans: "Not one-one",
      reason: "If two different elements have the same image, the function is not one-one."
    },
    {
      q: "If \\(f(x)=\\dfrac{2}{3}x^2-5\\), then \\(f(-3)=\\)",
      options: ["0","\\(-1\\)","1","\\(-3\\)"],
      ans: "1",
      reason: "\\(f(-3)=\\tfrac23(9)-5=1\\)."
    },
    {
      q: "For any two functions \\(f\\) and \\(g\\), \\((f+g)(x)=\\)",
      options: ["\\(f(x)-g(x)\\)","\\(f(x)+g(x)\\)","\\(f(x)\\div g(x)\\)","\\(f(x)\\times g(x)\\)"],
      ans: "\\(f(x)+g(x)\\)",
      reason: "\\((f+g)(x)=f(x)+g(x)\\)."
    },
    {
      q: "For any two functions \\(f\\) and \\(g\\), \\((f-g)(x)=\\)",
      options: ["\\(f(x)-g(x)\\)","\\(f(x)\\times g(x)\\)","\\(f(x)+g(x)\\)","\\(g(x)-f(x)\\)"],
      ans: "\\(f(x)-g(x)\\)",
      reason: "\\((f-g)(x)=f(x)-g(x)\\)."
    },
    {
      q: "For any two functions \\(f\\) and \\(g\\), \\((f\\times g)(x)=\\)",
      options: ["\\(f(x)+g(x)\\)","\\(f(g(x))\\)","\\(f(x)\\div g(x)\\)","\\(f(x)\\times g(x)\\)"],
      ans: "\\(f(x)\\times g(x)\\)",
      reason: "\\((f\\times g)(x)=f(x)\\times g(x)\\)."
    },
    {
      q: "For any two functions \\(f\\) and \\(g\\) (with \\(g(x)\\neq0\\)), \\((f\\div g)(x)=\\)",
      options: ["\\(g(x)\\div f(x)\\)","\\(f(x)\\times g(x)\\)","\\(f(g(x))\\)","\\(f(x)\\div g(x)\\)"],
      ans: "\\(f(x)\\div g(x)\\)",
      reason: "\\((f\\div g)(x)=\\dfrac{f(x)}{g(x)}\\) with \\(g(x)\\ne0\\)."
    },
    {
      q: "If \\(f(x)=2x+3\\) and \\(g(x)=x-1\\), then \\((f+g)(x)=\\)",
      options: ["\\(3x+2\\)","\\(3x+4\\)","\\(x+4\\)","\\(2x^2+x-3\\)"],
      ans: "\\(3x+2\\)",
      reason: "\\((2x+3)+(x-1)=3x+2\\)."
    },
    {
      q: "If \\(f(x)=2x+3\\) and \\(g(x)=x-1\\), then \\((f-g)(x)=\\)",
      options: ["\\(3x+2\\)","\\(x+4\\)","\\(-x-4\\)","\\(x+2\\)"],
      ans: "\\(x+4\\)",
      reason: "\\((2x+3)-(x-1)=x+4\\)."
    },
    {
      q: "If \\(f(x)=x^2\\) and \\(g(x)=x+1\\), then \\((f\\times g)(x)=\\)",
      options: ["\\(x^3+x^2\\)","\\(x^3+1\\)","\\(x^2-x-1\\)","\\(x^2+x+1\\)"],
      ans: "\\(x^3+x^2\\)",
      reason: "\\(x^2(x+1)=x^3+x^2\\)."
    },
    {
      q: "The process of finding the value of the dependent variable by substituting a specific value of the independent variable is called:",
      options: ["Evaluation of a function","Inversion of a function","Composition of a function","Differentiation of a function"],
      ans: "Evaluation of a function",
      reason: "Substituting a value of the independent variable to get the dependent variable is evaluating the function."
    },
    {
      q: "If \\(f(x)=x^2-x-6\\), then the value(s) of \\(x\\) for which \\(f(x)=f(3)\\) are:",
      options: ["\\(x=3\\) or \\(x=2\\)","\\(x=-3\\) or \\(x=-2\\)","\\(x=-3\\) or \\(x=2\\)","\\(x=3\\) or \\(x=-2\\)"],
      ans: "\\(x=3\\) or \\(x=-2\\)",
      reason: "\\(f(3)=0\\). Solving \\(x^2-x-6=0\\) gives \\((x-3)(x+2)=0\\), so \\(x=3\\) or \\(-2\\)."
    },
    {
      q: "If \\(y=f(x)\\ \\forall\\,x\\in X\\), then \\(x=\\)",
      options: ["\\(f^{-1}(y)\\ \\forall\\,y\\in Y\\)","\\(y^{-1}\\)","\\(f(y)\\)","\\(-f(y)\\)"],
      ans: "\\(f^{-1}(y)\\ \\forall\\,y\\in Y\\)",
      reason: "If \\(y=f(x)\\), then \\(x=f^{-1}(y)\\) for all \\(y\\) in the range."
    },
    {
      q: "The domain of \\(f(x)\\) equals the:",
      options: ["Range of \\(f(x)\\)","Co-domain of \\(f(x)\\)","Domain of \\(f^{-1}(x)\\)","Range of \\(f^{-1}(x)\\)"],
      ans: "Range of \\(f^{-1}(x)\\)",
      reason: "The domain of \\(f\\) is the range of \\(f^{-1}\\)."
    },
    {
      q: "If \\(y=2x-1\\), then \\(f^{-1}(x)=\\)",
      options: ["\\(2x-1\\)","\\(2(x+1)\\)","\\(\\dfrac{1+x}{2}\\)","\\(\\dfrac{x-1}{2}\\)"],
      ans: "\\(\\dfrac{1+x}{2}\\)",
      reason: "\\(y=2x-1\\Rightarrow x=\\dfrac{y+1}{2}\\), so \\(f^{-1}(x)=\\dfrac{1+x}{2}\\)."
    },
    {
      q: "If \\(f(x)=\\dfrac{3x}{2x-1}\\), then \\(f^{-1}(x)=\\)",
      options: ["\\(\\dfrac{x-3}{2x}\\)","\\(\\dfrac{3x}{2x-3}\\)","\\(\\dfrac{x}{2x-3}\\)","\\(\\dfrac{x}{2x-1}\\)"],
      ans: "\\(\\dfrac{x}{2x-3}\\)",
      reason: "\\(y=\\dfrac{3x}{2x-1}\\Rightarrow x=\\dfrac{y}{2y-3}\\), so \\(f^{-1}(x)=\\dfrac{x}{2x-3}\\)."
    },
    {
      q: "For \\(f(x)=\\dfrac{2x}{x+3}\\), \\(f^{-1}(x)\\) is undefined when \\(x=\\)",
      options: ["3","2","\\(-2\\)","\\(-3\\)"],
      ans: "2",
      reason: "\\(y=\\dfrac{2x}{x+3}\\Rightarrow xy+3y=2x\\Rightarrow x=\\dfrac{3y}{2-y}\\). So \\(f^{-1}(x)=\\dfrac{3x}{2-x}\\), undefined at \\(x=2\\)."
    },
    {
      q: "For \\(f(x)=\\dfrac{2x}{x+3}\\), \\(f^{-1}(-1)=\\)",
      options: ["1","\\(-3\\)","\\(-1\\)","3"],
      ans: "\\(-1\\)",
      reason: "\\(f^{-1}(-1)=\\dfrac{3(-1)}{2-(-1)}=\\dfrac{-3}{3}=-1\\)."
    },
    {
      q: "The inverse function converting kilometers \\(k\\) to miles \\(m\\), given \\(k=1.6m\\), is:",
      options: ["\\(m=\\dfrac{k}{1.6}\\)","\\(m=k+1.6\\)","\\(m=\\dfrac{1.6}{k}\\)","\\(m=1.6k\\)"],
      ans: "\\(m=\\dfrac{k}{1.6}\\)",
      reason: "\\(k=1.6m\\Rightarrow m=\\dfrac{k}{1.6}\\)."
    },
    {
      q: "Using \\(F=\\dfrac{9}{5}C+32\\), \\(25^\\circ\\)C in Fahrenheit is:",
      options: ["\\(57^\\circ\\)F","\\(71.4^\\circ\\)F","\\(45^\\circ\\)F","\\(77^\\circ\\)F"],
      ans: "\\(77^\\circ\\)F",
      reason: "\\(F=\\tfrac95(25)+32=77^\\circ\\)F."
    },
    {
      q: "A function has an inverse that is also a function only if the original function is:",
      options: ["Into only","Many-one","Undefined","One-one (and onto its range)"],
      ans: "One-one (and onto its range)",
      reason: "An inverse function exists only if the original function is one-one (and onto its range)."
    },
    {
      q: "If \\(f^{-1}(x)\\) exists, then \\(f(f^{-1}(x))=\\)",
      options: ["x","\\(f(x)\\)","0","1"],
      ans: "x",
      reason: "\\(f(f^{-1}(x))=x\\)."
    },
    {
      q: "The composition of two functions \\(f(x)\\) and \\(g(x)\\) is denoted by:",
      options: ["\\((f\\circ g)(x)=g(f(x))\\)","\\((f\\circ g)(x)=f(g(x))\\)","\\((f\\circ g)(x)=f(x)+g(x)\\)","\\((f\\circ g)(x)=f(x)g(x)\\)"],
      ans: "\\((f\\circ g)(x)=f(g(x))\\)",
      reason: "\\((f\\circ g)(x)=f(g(x))\\)."
    },
    {
      q: "If \\(f(x)=\\dfrac{1}{2}x\\), then \\(f^2(x)=f(f(x))=\\)",
      options: ["\\(\\dfrac{1}{4}x^2\\)","\\(\\dfrac{1}{4}x\\)","2x","\\(\\dfrac{1}{4x}\\)"],
      ans: "\\(\\dfrac{1}{4}x\\)",
      reason: "\\(f(f(x))=\\tfrac12\\cdot\\tfrac12x=\\tfrac14x\\)."
    },
    {
      q: "If \\(f(x)=x+2\\) and \\(g(x)=3x\\), then \\((f\\circ g)(x)=\\)",
      options: ["\\(3x+6\\)","\\(x+6\\)","\\(3(x+2)\\)","\\(3x+2\\)"],
      ans: "\\(3x+2\\)",
      reason: "\\(f(g(x))=g(x)+2=3x+2\\)."
    },
    {
      q: "If \\(f(x)=x+2\\) and \\(g(x)=3x\\), then \\((g\\circ f)(x)=\\)",
      options: ["\\(3x+6\\)","\\(x+6\\)","3x","\\(3x+2\\)"],
      ans: "\\(3x+6\\)",
      reason: "\\(g(f(x))=3f(x)=3(x+2)=3x+6\\)."
    },
    {
      q: "In general, for two functions \\(f\\) and \\(g\\):",
      options: ["\\((f\\circ g)(x)\\neq(g\\circ f)(x)\\) in general","Composition is commutative for all functions","\\((f\\circ g)(x)=(g\\circ f)(x)\\) always","Composition is the same as addition"],
      ans: "\\((f\\circ g)(x)\\neq(g\\circ f)(x)\\) in general",
      reason: "In general \\(f\\circ g\\ne g\\circ f\\); composition is not commutative."
    },
    {
      q: "If \\(f(x)=x^2\\) and \\(g(x)=x-1\\), then \\((f\\circ g)(x)=\\)",
      options: ["\\((x-1)^2\\)","\\(x-1\\)","\\(x^2-1\\)","\\(x^2-x\\)"],
      ans: "\\((x-1)^2\\)",
      reason: "\\(f(g(x))=(x-1)^2\\)."
    },
    {
      q: "If \\(f(x)=x^2\\) and \\(g(x)=x-1\\), then \\((g\\circ f)(x)=\\)",
      options: ["\\(1-x^2\\)","\\(x^2-1\\)","\\(x^2-x\\)","\\((x-1)^2\\)"],
      ans: "\\(x^2-1\\)",
      reason: "\\(g(f(x))=x^2-1\\)."
    },
    {
      q: "For the points of intersection of \\(f(x)=x-2\\) and \\(g(x)=x^2-4x+2\\), we solve:",
      options: ["\\(x-2=0\\)","\\(x-2=x^2-4x+2\\)","\\(x^2-4x+2=0\\)","\\(f(x)+g(x)=0\\)"],
      ans: "\\(x-2=x^2-4x+2\\)",
      reason: "Points of intersection satisfy \\(f(x)=g(x)\\): \\(x-2=x^2-4x+2\\)."
    },
    {
      q: "A polynomial function of degree zero is called a:",
      options: ["Constant function","Zero polynomial function","Linear function","Quadratic function"],
      ans: "Constant function",
      reason: "A polynomial function of degree 0 is a constant function."
    },
    {
      q: "A polynomial function of degree one is called a:",
      options: ["Constant function","Linear function","Quadratic function","Cubic function"],
      ans: "Linear function",
      reason: "Degree 1 is a linear function."
    },
    {
      q: "A polynomial function of degree two is called a:",
      options: ["Cubic function","Constant function","Linear function","Quadratic function"],
      ans: "Quadratic function",
      reason: "Degree 2 is a quadratic function."
    },
    {
      q: "A polynomial function of degree three is called a:",
      options: ["Cubic function","Quadratic function","Constant function","Linear function"],
      ans: "Cubic function",
      reason: "Degree 3 is a cubic function."
    },
    {
      q: "A polynomial function with no degree is called a:",
      options: ["Identity function","Zero polynomial function","Linear function","Constant function"],
      ans: "Zero polynomial function",
      reason: "A polynomial with no degree is the zero polynomial function."
    },
    {
      q: "The function \\(f(x)=\\sqrt{x}\\), where \\(x\\ge0\\), is called a:",
      options: ["Square root function","Exponential function","Reciprocal function","Absolute valued function"],
      ans: "Square root function",
      reason: "\\(f(x)=\\sqrt x\\) with \\(x\\ge0\\) is the square root function."
    },
    {
      q: "The function \\(f(x)=|x|\\) is called the:",
      options: ["Square root function","Identity function","Reciprocal function","Absolute valued function"],
      ans: "Absolute valued function",
      reason: "\\(f(x)=|x|\\) is the absolute valued function."
    },
    {
      q: "The function \\(f(x)=\\dfrac{1}{x}\\), where \\(x\\neq0\\), is called a:",
      options: ["Square root function","Absolute valued function","Exponential function","Reciprocal function"],
      ans: "Reciprocal function",
      reason: "\\(f(x)=\\tfrac1x\\) with \\(x\\ne0\\) is the reciprocal function."
    },
    {
      q: "An exponential function has the form \\(f(x)=a^x\\), where:",
      options: ["\\(a=0\\)","\\(a>0\\) and \\(a\\neq1\\)","\\(a<0\\)","\\(a=1\\)"],
      ans: "\\(a>0\\) and \\(a\\neq1\\)",
      reason: "An exponential function \\(a^x\\) needs \\(a>0\\) and \\(a\\ne1\\)."
    },
    {
      q: "Which of the following is NOT an exponential function?",
      options: ["\\(3^x\\)","\\(x^3\\)","\\(e^x\\)","\\((0.5)^x\\)"],
      ans: "\\(x^3\\)",
      reason: "\\(x^3\\) has the variable in the base, so it is a power (polynomial) function, not exponential."
    },
    {
      q: "The identity function \\(f(x)=x\\) maps every element to:",
      options: ["Zero","Itself","Its negative","A constant"],
      ans: "Itself",
      reason: "The identity function maps every element to itself."
    },
    {
      q: "A constant function \\(f(x)=c\\) has a graph that is:",
      options: ["A vertical line","A curve through the origin only","A horizontal line","A parabola"],
      ans: "A horizontal line",
      reason: "The graph of \\(f(x)=c\\) is a horizontal line."
    },
    {
      q: "For the parabola \\(y=ax^2+bx+c\\), the vertex is at \\((h,k)\\) where \\(h=\\)",
      options: ["\\(\\dfrac{c}{2a}\\)","\\(\\dfrac{b}{2a}\\)","\\(-\\dfrac{c}{2a}\\)","\\(-\\dfrac{b}{2a}\\)"],
      ans: "\\(-\\dfrac{b}{2a}\\)",
      reason: "The vertex has \\(h=-\\dfrac{b}{2a}\\)."
    },
    {
      q: "For the parabola \\(y=ax^2+bx+c\\), the vertex is at \\((h,k)\\) where \\(k=\\)",
      options: ["\\(c+\\dfrac{b^2}{4a}\\)","\\(-\\dfrac{b^2}{4a}\\)","\\(c-\\dfrac{b^2}{4a}\\)","\\(\\dfrac{b^2}{4a}\\)"],
      ans: "\\(c-\\dfrac{b^2}{4a}\\)",
      reason: "\\(k=c-\\dfrac{b^2}{4a}\\)."
    },
    {
      q: "The parabola \\(y=ax^2+bx+c\\) opens upward when:",
      options: ["\\(b>0\\)","\\(a<0\\)","\\(a>0\\)","\\(a=0\\)"],
      ans: "\\(a>0\\)",
      reason: "The parabola opens upward when \\(a>0\\)."
    },
    {
      q: "The graph of \\(y=-x^2-4x\\) opens:",
      options: ["Sideways","Cannot be determined","Upward","Downward, since \\(a=-1<0\\)"],
      ans: "Downward, since \\(a=-1<0\\)",
      reason: "Here \\(a=-1\\lt 0\\), so it opens downward."
    },
    {
      q: "The point of intersection of two graphs is called their:",
      options: ["Solution point","Vertex","Asymptote","Intercept"],
      ans: "Solution point",
      reason: "The point where two graphs meet is their solution point (it satisfies both equations)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(t\\) (hours)</th><th>\\(P(t)\\) (bacteria)</th></tr><tr><td>0</td><td>?</td></tr><tr><td>2</td><td>?</td></tr><tr><td>5</td><td>\\(\\approx1244\\)</td></tr></table><p>A bacteria population is modeled by \\(P(t)=500\\times(1.2)^t\\), where \\(t\\) is time in hours.</p></div>The initial population (at \\(t=0\\)) is:",
      options: ["600","500","0","1"],
      ans: "500",
      reason: "At \\(t=0\\): \\(P=500(1.2)^0=500\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(t\\) (hours)</th><th>\\(P(t)\\) (bacteria)</th></tr><tr><td>0</td><td>?</td></tr><tr><td>2</td><td>?</td></tr><tr><td>5</td><td>\\(\\approx1244\\)</td></tr></table><p>A bacteria population is modeled by \\(P(t)=500\\times(1.2)^t\\), where \\(t\\) is time in hours.</p></div>The population after 2 hours is approximately:",
      options: ["600","864","500","720"],
      ans: "720",
      reason: "\\(P(2)=500(1.44)=720\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(t\\) (hours)</th><th>\\(P(t)\\) (bacteria)</th></tr><tr><td>0</td><td>?</td></tr><tr><td>2</td><td>?</td></tr><tr><td>5</td><td>\\(\\approx1244\\)</td></tr></table><p>A bacteria population is modeled by \\(P(t)=500\\times(1.2)^t\\), where \\(t\\) is time in hours.</p></div>This function represents:",
      options: ["Exponential decay","Exponential growth","A constant function","Linear growth"],
      ans: "Exponential growth",
      reason: "The base \\(1.2>1\\), so the function shows exponential growth."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(t\\) (hours)</th><th>\\(P(t)\\) (bacteria)</th></tr><tr><td>0</td><td>?</td></tr><tr><td>2</td><td>?</td></tr><tr><td>5</td><td>\\(\\approx1244\\)</td></tr></table><p>A bacteria population is modeled by \\(P(t)=500\\times(1.2)^t\\), where \\(t\\) is time in hours.</p></div>The population will reach approximately 1000 after (to the nearest whole hour):",
      options: ["2 hours","6 hours","4 hours","3 hours"],
      ans: "4 hours",
      reason: "\\(500(1.2)^t=1000\\Rightarrow1.2^t=2\\Rightarrow t=\\dfrac{\\ln2}{\\ln1.2}\\approx3.8\\), i.e. about 4 hours."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units)</th><th>\\(P(x)\\) (thousand Rs)</th></tr><tr><td>5</td><td>0</td></tr><tr><td>10</td><td>50</td></tr><tr><td>15</td><td>0</td></tr></table><p>A company's profit from selling \\(x\\) units is modeled by \\(P(x)=-2x^2+40x-150\\) (in thousand rupees).</p></div>The parabola \\(P(x)\\) opens:",
      options: ["Sideways","Downward, since \\(a=-2<0\\)","Upward, since \\(a=-2<0\\)","Cannot be determined"],
      ans: "Downward, since \\(a=-2<0\\)",
      reason: "The coefficient of \\(x^2\\) is \\(-2\\lt 0\\), so the parabola opens downward."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units)</th><th>\\(P(x)\\) (thousand Rs)</th></tr><tr><td>5</td><td>0</td></tr><tr><td>10</td><td>50</td></tr><tr><td>15</td><td>0</td></tr></table><p>A company's profit from selling \\(x\\) units is modeled by \\(P(x)=-2x^2+40x-150\\) (in thousand rupees).</p></div>The number of units that maximizes profit is:",
      options: ["\\(x=10\\)","\\(x=5\\)","\\(x=20\\)","\\(x=15\\)"],
      ans: "\\(x=10\\)",
      reason: "The maximum is at \\(x=-\\dfrac{b}{2a}=-\\dfrac{40}{-4}=10\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units)</th><th>\\(P(x)\\) (thousand Rs)</th></tr><tr><td>5</td><td>0</td></tr><tr><td>10</td><td>50</td></tr><tr><td>15</td><td>0</td></tr></table><p>A company's profit from selling \\(x\\) units is modeled by \\(P(x)=-2x^2+40x-150\\) (in thousand rupees).</p></div>The maximum profit is:",
      options: ["Rs 45,000","Rs 40,000","Rs 55,000","Rs 50,000"],
      ans: "Rs 50,000",
      reason: "\\(P(10)=-200+400-150=50\\) thousand rupees, i.e. Rs 50,000."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>\\(x\\) (units)</th><th>\\(P(x)\\) (thousand Rs)</th></tr><tr><td>5</td><td>0</td></tr><tr><td>10</td><td>50</td></tr><tr><td>15</td><td>0</td></tr></table><p>A company's profit from selling \\(x\\) units is modeled by \\(P(x)=-2x^2+40x-150\\) (in thousand rupees).</p></div>Profit is zero (break-even) when \\(x=\\)",
      options: ["5 or 15","10 or 15","5 or 10","0 or 20"],
      ans: "5 or 15",
      reason: "\\(-2x^2+40x-150=0\\Rightarrow x^2-20x+75=0\\Rightarrow(x-5)(x-15)=0\\Rightarrow x=5\\) or \\(15\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Original price</th><th>After Rs 200 off, \\(f(x)\\)</th><th>Then 10% off, \\(g(f(x))\\)</th></tr><tr><td>Rs 2000</td><td>Rs 1800</td><td>Rs 1620</td></tr><tr><td>Rs 3000</td><td>Rs 2800</td><td>?</td></tr></table><p>An online store first deducts a flat Rs 200: \\(f(x)=x-200\\), then applies a 10% discount to the reduced price: \\(g(x)=0.9x\\). The amount actually paid is \\((g\\circ f)(x)\\).</p></div>The combined function \\((g\\circ f)(x)\\) simplifies to:",
      options: ["\\(0.9x-200\\)","\\(x-380\\)","\\(0.9x-180\\)","\\(0.9(x-200)-200\\)"],
      ans: "\\(0.9x-180\\)",
      reason: "\\((g\\circ f)(x)=0.9(x-200)=0.9x-180\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Original price</th><th>After Rs 200 off, \\(f(x)\\)</th><th>Then 10% off, \\(g(f(x))\\)</th></tr><tr><td>Rs 2000</td><td>Rs 1800</td><td>Rs 1620</td></tr><tr><td>Rs 3000</td><td>Rs 2800</td><td>?</td></tr></table><p>An online store first deducts a flat Rs 200: \\(f(x)=x-200\\), then applies a 10% discount to the reduced price: \\(g(x)=0.9x\\). The amount actually paid is \\((g\\circ f)(x)\\).</p></div>The final price paid for an item originally priced Rs 3000 is:",
      options: ["Rs 2520","Rs 2700","Rs 2800","Rs 2500"],
      ans: "Rs 2520",
      reason: "\\(0.9(3000)-180=2520\\), so Rs 2520."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Original price</th><th>After Rs 200 off, \\(f(x)\\)</th><th>Then 10% off, \\(g(f(x))\\)</th></tr><tr><td>Rs 2000</td><td>Rs 1800</td><td>Rs 1620</td></tr><tr><td>Rs 3000</td><td>Rs 2800</td><td>?</td></tr></table><p>An online store first deducts a flat Rs 200: \\(f(x)=x-200\\), then applies a 10% discount to the reduced price: \\(g(x)=0.9x\\). The amount actually paid is \\((g\\circ f)(x)\\).</p></div>If the discounts were applied in reverse order, \\((f\\circ g)(x)\\) would be:",
      options: ["\\(0.9x-180\\)","\\(0.9(x-200)\\)","\\(0.9x-200\\)","\\(x-200-0.9x\\)"],
      ans: "\\(0.9x-200\\)",
      reason: "\\((f\\circ g)(x)=0.9x-200\\) (10% off first, then Rs 200 off)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Original price</th><th>After Rs 200 off, \\(f(x)\\)</th><th>Then 10% off, \\(g(f(x))\\)</th></tr><tr><td>Rs 2000</td><td>Rs 1800</td><td>Rs 1620</td></tr><tr><td>Rs 3000</td><td>Rs 2800</td><td>?</td></tr></table><p>An online store first deducts a flat Rs 200: \\(f(x)=x-200\\), then applies a 10% discount to the reduced price: \\(g(x)=0.9x\\). The amount actually paid is \\((g\\circ f)(x)\\).</p></div>For an original price of Rs 2000, which order gives the customer a lower final price?",
      options: ["\\((g\\circ f)\\) — Rs 200 off first, then 10% off","Cannot be determined","Both give the same price","\\((f\\circ g)\\) — 10% off first, then Rs 200 off"],
      ans: "\\((f\\circ g)\\) — 10% off first, then Rs 200 off",
      reason: "Rs 200 off first, then 10%: \\(0.9(1800)=1620\\). 10% off first, then Rs 200: \\(1800-200=1600\\). The second order is cheaper."
    }
    ];
  }
});
