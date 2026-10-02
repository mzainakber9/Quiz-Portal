// Class 10 Math — Chapter 12: Basic Statistics
// 112 MCQs (100 base + 12 stimulus-based), each with an explanation.
// Every answer was re-solved; corrections made during conversion are listed in the project notes.
// Math is written in LaTeX (\\( ... \\)) and rendered client-side by KaTeX.
// Questions/explanations use \\lt for "<" inside math so the browser never mistakes it for an HTML tag.
QuizBank.register({
  class: "10th",
  subject: "Math",
  type: "chapter",
  id: "ch12",
  label: "Chapter 12: Basic Statistics",
  order: 12,
  questions: function () {
    return [
    {
      q: "Which of the following is NOT a measure of dispersion?",
      options: ["Standard deviation","Arithmetic mean","Variance","Range"],
      ans: "Arithmetic mean",
      reason: "The arithmetic mean is a measure of central tendency; the others measure spread."
    },
    {
      q: "What is the median of the data 4, 3, 0, 2, 1?",
      options: ["3","0","4","2"],
      ans: "2",
      reason: "Arranged: \\(0,1,2,3,4\\). The middle value is 2."
    },
    {
      q: "Which of the following is a measure of dispersion?",
      options: ["Range","Quartile","Median","Arithmetic mean"],
      ans: "Range",
      reason: "The range measures how spread out the data are."
    },
    {
      q: "Which of the following is used to compare the consistency of two data sets?",
      options: ["Coefficient of variation (C.V.)","Arithmetic mean","Geometric mean","Standard deviation"],
      ans: "Coefficient of variation (C.V.)",
      reason: "The coefficient of variation \\(\\left(\\dfrac{SD}{\\text{mean}}\\times100\\right)\\) compares the consistency of data sets."
    },
    {
      q: "What is the sum of deviations of data values taken from their arithmetic mean?",
      options: ["0","\\(\\Sigma x\\)","\\(\\Sigma f\\)","n"],
      ans: "0",
      reason: "The deviations from the mean always add up to zero: \\(\\sum(x-\\bar x)=0\\)."
    },
    {
      q: "What is the variance of the five values 4, 4, 4, 4, 4?",
      options: ["5","4","0","Does not exist"],
      ans: "0",
      reason: "All values equal the mean, so every deviation is 0 and the variance is 0."
    },
    {
      q: "Which of the following divides the data into four equal parts?",
      options: ["Percentile","Quartile","Decile","Median"],
      ans: "Quartile",
      reason: "Quartiles divide the data into four equal parts."
    },
    {
      q: "Which of the following divides the data into ten equal parts?",
      options: ["Median","Percentile","Quartile","Decile"],
      ans: "Decile",
      reason: "Deciles divide the data into ten equal parts."
    },
    {
      q: "Which of the following divides the data into two equal parts?",
      options: ["Decile","Quartile","Median","Percentile"],
      ans: "Median",
      reason: "The median divides the data into two equal parts."
    },
    {
      q: "Which of the following divides the data into a hundred equal parts?",
      options: ["Median","Decile","Percentile","Quartile"],
      ans: "Percentile",
      reason: "Percentiles divide the data into a hundred equal parts."
    },
    {
      q: "A line of best fit is given by the equation:",
      options: ["\\(y=x^2\\)","\\(x=y^2\\)","\\(y=mx+c\\)","\\(y=mx^2+c\\)"],
      ans: "\\(y=mx+c\\)",
      reason: "A straight line has the equation \\(y=mx+c\\)."
    },
    {
      q: "The coefficient of variation (C.V.) is given by the formula:",
      options: ["\\(\\dfrac{SD}{\\text{mean}}\\times100\\)","\\(\\dfrac{SD}{100}\\times\\text{mean}\\)","\\(\\dfrac{SD}{\\text{range}}\\times100\\)","\\(\\dfrac{\\text{mean}}{SD}\\times100\\)"],
      ans: "\\(\\dfrac{SD}{\\text{mean}}\\times100\\)",
      reason: "\\(C.V.=\\dfrac{SD}{\\text{mean}}\\times100\\)."
    },
    {
      q: "The probability of drawing a king in one draw is ...... than the probability of drawing 2 kings in 2 draws (without replacement).",
      options: ["Equal","Smaller","No relation","Greater"],
      ans: "Greater",
      reason: "\\(P(\\text{king})=\\tfrac{4}{52}\\approx0.077\\), while \\(P(2\\text{ kings})=\\tfrac4{52}\\cdot\\tfrac3{51}\\approx0.0045\\), so the first is greater."
    },
    {
      q: "The probability of drawing 2 aces in 2 draws with replacement is ...... than the probability of drawing 2 jacks in 2 draws without replacement.",
      options: ["Equal","Smaller","Greater","No relation"],
      ans: "Greater",
      reason: "With replacement: \\(\\left(\\tfrac4{52}\\right)^2\\approx0.0059\\). Two jacks without replacement: \\(\\tfrac4{52}\\cdot\\tfrac3{51}\\approx0.0045\\). The first is greater."
    },
    {
      q: "The probability of rolling a standard cubical die and getting an even number in 2 attempts is ...... the probability of getting an odd number in 2 attempts.",
      options: ["Smaller","Greater","No relation","Equal"],
      ans: "Equal",
      reason: "Two even numbers: \\(\\tfrac12\\cdot\\tfrac12=\\tfrac14\\). Two odd numbers: also \\(\\tfrac14\\). They are equal."
    },
    {
      q: "A smooth curve representing cumulative frequency is called a(n): class boundaries c.f.",
      options: ["Ogive","Bar chart","Histogram","Pie chart"],
      ans: "Ogive",
      reason: "A cumulative frequency curve is called an ogive."
    },
    {
      q: "A cumulative frequency polygon is made by joining points with: class boundaries c.f.",
      options: ["Straight line segments","Bars","A smooth curve","Circular arcs"],
      ans: "Straight line segments",
      reason: "A cumulative frequency polygon joins the plotted points with straight line segments."
    },
    {
      q: "The three values that divide a data set into four equal parts are called:",
      options: ["Deciles","Quartiles","Modes","Percentiles"],
      ans: "Quartiles",
      reason: "The three values that divide data into four equal parts are the quartiles."
    },
    {
      q: "The middle quartile \\(Q_2\\) is also known as the:",
      options: ["Mean","Median","Mode","Range"],
      ans: "Median",
      reason: "\\(Q_2\\) is the median."
    },
    {
      q: "The lower quartile \\(Q_1\\) divides the arranged data in the ratio:",
      options: ["1 : 1","3 : 1","1 : 4","1 : 3"],
      ans: "1 : 3",
      reason: "\\(Q_1\\) has one quarter of the data below it and three quarters above: ratio 1 : 3."
    },
    {
      q: "The upper quartile \\(Q_3\\) divides the arranged data in the ratio:",
      options: ["3 : 1","1 : 1","1 : 3","1 : 4"],
      ans: "3 : 1",
      reason: "\\(Q_3\\) has three quarters below and one quarter above: ratio 3 : 1."
    },
    {
      q: "The interquartile range (IQR) is defined as:",
      options: ["\\(Q_3+Q_1\\)","\\(Q_3-Q_1\\)","\\(Q_3\\times Q_1\\)","\\(Q_2-Q_1\\)"],
      ans: "\\(Q_3-Q_1\\)",
      reason: "\\(IQR=Q_3-Q_1\\)."
    },
    {
      q: "A box-and-whisker plot displays a dataset using how many key values?",
      options: ["3","4","5","6"],
      ans: "5",
      reason: "A box-and-whisker plot uses five numbers."
    },
    {
      q: "The five values displayed by a box-and-whisker plot are:",
      options: ["Mode, mean, median, min, max","\\(\\text{Min}, Q_1, Q_2, Q_3, \\text{Max}\\)","Min, mean, max, SD, variance","Mean, mode, median, range, variance"],
      ans: "\\(\\text{Min}, Q_1, Q_2, Q_3, \\text{Max}\\)",
      reason: "The five numbers are the minimum, \\(Q_1\\), \\(Q_2\\) (median), \\(Q_3\\) and the maximum."
    },
    {
      q: "A single value that can represent an entire data set is called a measure of:",
      options: ["Dispersion","Correlation","Probability","Central tendency"],
      ans: "Central tendency",
      reason: "A single value representing a whole data set is a measure of central tendency."
    },
    {
      q: "The measures that describe how spread out the values of a data set are, are called measures of:",
      options: ["Location","Position","Central tendency","Dispersion"],
      ans: "Dispersion",
      reason: "Measures of spread are called measures of dispersion."
    },
    {
      q: "The range of a data set is defined as:",
      options: ["The sum of all values","The difference between the largest and smallest values","The middle value","The mean of largest and smallest values"],
      ans: "The difference between the largest and smallest values",
      reason: "Range \\(=\\) largest value \\(-\\) smallest value."
    },
    {
      q: "Variance is defined as the:",
      options: ["Difference of largest and smallest values","Square root of the sum of deviations","Product of mean and range","Ratio of the sum of squares of deviations from the mean to the number of values"],
      ans: "Ratio of the sum of squares of deviations from the mean to the number of values",
      reason: "Variance is the mean of the squared deviations from the mean: \\(\\dfrac{\\sum(x-\\bar x)^2}{n}\\)."
    },
    {
      q: "Standard deviation is defined as the:",
      options: ["Negative square root of the variance","Square of the variance","Positive square root of the variance","Reciprocal of the variance"],
      ans: "Positive square root of the variance",
      reason: "The standard deviation is the positive square root of the variance."
    },
    {
      q: "A scatter diagram is used to study the relationship between:",
      options: ["Three or more categorical variables","A single variable over time","Frequencies only","Two variables"],
      ans: "Two variables",
      reason: "A scatter diagram shows the relationship between two variables."
    },
    {
      q: "If, in a scatter diagram, the points rise from lower-left to upper-right, the correlation is:",
      options: ["Zero","Positive","Negative","Undefined"],
      ans: "Positive",
      reason: "Points rising from lower-left to upper-right show positive correlation."
    },
    {
      q: "If, in a scatter diagram, the points fall from upper-left to lower-right, the correlation is:",
      options: ["Perfect","Zero","Negative","Positive"],
      ans: "Negative",
      reason: "Points falling from upper-left to lower-right show negative correlation."
    },
    {
      q: "If the points in a scatter diagram show no clear pattern, the correlation is:",
      options: ["Strong positive","Perfect","Approximately zero (no correlation)","Strong negative"],
      ans: "Approximately zero (no correlation)",
      reason: "A random scatter with no pattern shows approximately zero correlation."
    },
    {
      q: "The value of a correlation coefficient r always lies in the range:",
      options: ["\\(1\\le r\\le 2\\)","\\(-\\infty < r < \\infty\\)","\\(-1\\le r\\le 1\\)","\\(0\\le r\\le 1\\)"],
      ans: "\\(-1\\le r\\le 1\\)",
      reason: "The correlation coefficient satisfies \\(-1\\le r\\le1\\)."
    },
    {
      q: "A correlation coefficient close to +1 indicates:",
      options: ["A strong negative linear relationship","A strong positive linear relationship","No relationship","A perfect zero relationship"],
      ans: "A strong positive linear relationship",
      reason: "\\(r\\) close to \\(+1\\) means a strong positive linear relationship."
    },
    {
      q: "A correlation coefficient close to 0 indicates:",
      options: ["A perfect negative relationship","A perfect positive relationship","A strong linear relationship","Little to no linear relationship"],
      ans: "Little to no linear relationship",
      reason: "\\(r\\) close to 0 means little or no linear relationship."
    },
    {
      q: "Probability is a measure of the:",
      options: ["Spread of a data set","Central tendency of data","Correlation between variables","Likelihood of an event occurring"],
      ans: "Likelihood of an event occurring",
      reason: "Probability measures the likelihood of an event."
    },
    {
      q: "Two events that cannot occur at the same time are called:",
      options: ["Dependent events","Independent events","Complementary events only","Mutually exclusive events"],
      ans: "Mutually exclusive events",
      reason: "Events that cannot occur together are mutually exclusive."
    },
    {
      q: "For two independent events A and B, P(A and B) equals:",
      options: ["\\(P(A)-P(B)\\)","\\(P(A)+P(B)\\)","\\(P(A)\\times P(B)\\)","\\(P(A)/P(B)\\)"],
      ans: "\\(P(A)\\times P(B)\\)",
      reason: "For independent events, \\(P(A\\text{ and }B)=P(A)\\times P(B)\\)."
    },
    {
      q: "For two mutually exclusive events A and B, P(A or B) equals:",
      options: ["\\(P(A)-P(B)\\)","\\(P(A)+P(B)\\)","\\(P(A)/P(B)\\)","\\(P(A)\\times P(B)\\)"],
      ans: "\\(P(A)+P(B)\\)",
      reason: "For mutually exclusive events, \\(P(A\\text{ or }B)=P(A)+P(B)\\)."
    },
    {
      q: "For dependent events A and B, P(A and B) equals:",
      options: ["\\(P(B\\mid A)\\) alone","\\(P(A)\\times P(B)\\)","\\(P(A)\\times P(B\\mid A)\\)","\\(P(A)+P(B)\\)"],
      ans: "\\(P(A)\\times P(B\\mid A)\\)",
      reason: "For dependent events, \\(P(A\\text{ and }B)=P(A)\\times P(B\\mid A)\\)."
    },
    {
      q: "\\(P(B\\mid A)\\) denotes the probability of B:",
      options: ["Given that A has occurred","Being the complement of A","Being independent of A","Occurring before A"],
      ans: "Given that A has occurred",
      reason: "\\(P(B\\mid A)\\) is the probability of \\(B\\) given that \\(A\\) has occurred."
    },
    {
      q: "Find the arithmetic mean of the data: 2, 4, 6, 8, 10.",
      options: ["8","6","7","5"],
      ans: "6",
      reason: "Mean \\(=\\dfrac{2+4+6+8+10}{5}=6\\)."
    },
    {
      q: "Find the range of the data: 2, 4, 6, 8, 10.",
      options: ["10","7","8","6"],
      ans: "8",
      reason: "Range \\(=10-2=8\\)."
    },
    {
      q: "Find the median of the data: 2, 4, 6, 8, 10.",
      options: ["6","10","9","8"],
      ans: "6",
      reason: "The middle of five ordered values is 6."
    },
    {
      q: "For the data 2, 4, 6, 8, 10, the variance (using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\)) is:",
      options: ["2.83","10","3.83","8"],
      ans: "8",
      reason: "Deviations: \\(-4,-2,0,2,4\\). \\(\\sigma^2=\\dfrac{16+4+0+4+16}{5}=8\\)."
    },
    {
      q: "For the data 2, 4, 6, 8, 10, the standard deviation (rounded to two decimal places) is approximately:",
      options: ["3.83","1.83","2.83","8"],
      ans: "2.83",
      reason: "\\(\\sigma=\\sqrt8\\approx2.83\\)."
    },
    {
      q: "Find the arithmetic mean of the data: 3, 5, 7, 9, 11.",
      options: ["8","7","9","6"],
      ans: "7",
      reason: "Mean \\(=\\dfrac{35}{5}=7\\)."
    },
    {
      q: "Find the range of the data: 3, 5, 7, 9, 11.",
      options: ["6","10","7","8"],
      ans: "8",
      reason: "Range \\(=11-3=8\\)."
    },
    {
      q: "Find the median of the data: 3, 5, 7, 9, 11.",
      options: ["7","8","10","9"],
      ans: "7",
      reason: "The middle value is 7."
    },
    {
      q: "For the data 3, 5, 7, 9, 11, the variance (using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\)) is:",
      options: ["8","2.83","3.83","10"],
      ans: "8",
      reason: "Deviations \\(-4,-2,0,2,4\\) give \\(\\sigma^2=\\dfrac{40}{5}=8\\)."
    },
    {
      q: "For the data 3, 5, 7, 9, 11, the standard deviation (rounded to two decimal places) is approximately:",
      options: ["2.83","1.83","3.83","8"],
      ans: "2.83",
      reason: "\\(\\sqrt8\\approx2.83\\)."
    },
    {
      q: "Find the arithmetic mean of the data: 10, 12, 14, 16, 18.",
      options: ["15","13","8","14"],
      ans: "14",
      reason: "Mean \\(=\\dfrac{70}{5}=14\\)."
    },
    {
      q: "Find the range of the data: 10, 12, 14, 16, 18.",
      options: ["8","14","6","10"],
      ans: "8",
      reason: "Range \\(=18-10=8\\)."
    },
    {
      q: "Find the median of the data: 10, 12, 14, 16, 18.",
      options: ["14","8","17","16"],
      ans: "14",
      reason: "The middle value is 14."
    },
    {
      q: "For the data 10, 12, 14, 16, 18, the variance (using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\)) is:",
      options: ["3.83","10","2.83","8"],
      ans: "8",
      reason: "Deviations \\(-4,-2,0,2,4\\) give \\(\\sigma^2=8\\)."
    },
    {
      q: "For the data 10, 12, 14, 16, 18, the standard deviation (rounded to two decimal places) is approximately:",
      options: ["2.83","1.83","3.83","8"],
      ans: "2.83",
      reason: "\\(\\sqrt8\\approx2.83\\)."
    },
    {
      q: "Find the arithmetic mean of the data: 1, 2, 3, 4, 5, 6.",
      options: ["5","3.5","2.5","4.5"],
      ans: "3.5",
      reason: "Mean \\(=\\dfrac{21}{6}=3.5\\)."
    },
    {
      q: "Find the range of the data: 1, 2, 3, 4, 5, 6.",
      options: ["3.5","7","3","5"],
      ans: "5",
      reason: "Range \\(=6-1=5\\)."
    },
    {
      q: "Find the median of the data: 1, 2, 3, 4, 5, 6.",
      options: ["3.5","6.5","5.5","5"],
      ans: "3.5",
      reason: "The median is the average of the middle two values: \\(\\dfrac{3+4}{2}=3.5\\)."
    },
    {
      q: "For the data 1, 2, 3, 4, 5, 6, the variance (using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\)) is:",
      options: ["2.92","1.71","4.92","5"],
      ans: "2.92",
      reason: "Deviations: \\(-2.5,-1.5,-0.5,0.5,1.5,2.5\\). \\(\\sigma^2=\\dfrac{17.5}{6}\\approx2.92\\)."
    },
    {
      q: "For the data 1, 2, 3, 4, 5, 6, the standard deviation (rounded to two decimal places) is approximately:",
      options: ["0.71","2.71","2.92","1.71"],
      ans: "1.71",
      reason: "\\(\\sqrt{2.92}\\approx1.71\\)."
    },
    {
      q: "Find the arithmetic mean of the data: 5, 10, 15, 20.",
      options: ["12.5","13.5","11.5","15"],
      ans: "12.5",
      reason: "Mean \\(=\\dfrac{50}{4}=12.5\\)."
    },
    {
      q: "Find the range of the data: 5, 10, 15, 20.",
      options: ["13","15","12.5","17"],
      ans: "15",
      reason: "Range \\(=20-5=15\\)."
    },
    {
      q: "Find the median of the data: 5, 10, 15, 20.",
      options: ["14.5","12.5","15.5","15"],
      ans: "12.5",
      reason: "The median is \\(\\dfrac{10+15}{2}=12.5\\)."
    },
    {
      q: "For the data 5, 10, 15, 20, the variance (using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\)) is:",
      options: ["31.25","15","33.25","5.59"],
      ans: "31.25",
      reason: "Deviations: \\(-7.5,-2.5,2.5,7.5\\). \\(\\sigma^2=\\dfrac{125}{4}=31.25\\)."
    },
    {
      q: "For the data 5, 10, 15, 20, the standard deviation (rounded to two decimal places) is approximately:",
      options: ["6.59","31.25","5.59","4.59"],
      ans: "5.59",
      reason: "\\(\\sqrt{31.25}\\approx5.59\\)."
    },
    {
      q: "Find the arithmetic mean of the data: 7, 8, 9, 10, 11, 12.",
      options: ["8.5","9.5","10.5","5"],
      ans: "9.5",
      reason: "Mean \\(=\\dfrac{57}{6}=9.5\\)."
    },
    {
      q: "Find the range of the data: 7, 8, 9, 10, 11, 12.",
      options: ["9.5","5","7","3"],
      ans: "5",
      reason: "Range \\(=12-7=5\\)."
    },
    {
      q: "Find the median of the data: 7, 8, 9, 10, 11, 12.",
      options: ["9.5","12.5","5","11.5"],
      ans: "9.5",
      reason: "The median is \\(\\dfrac{9+10}{2}=9.5\\)."
    },
    {
      q: "For the data 7, 8, 9, 10, 11, 12, the variance (using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\)) is:",
      options: ["1.71","4.92","5","2.92"],
      ans: "2.92",
      reason: "The deviations match those of \\(1,\\dots,6\\): \\(\\sigma^2\\approx2.92\\)."
    },
    {
      q: "For the data 7, 8, 9, 10, 11, 12, the standard deviation (rounded to two decimal places) is approximately:",
      options: ["0.71","2.71","1.71","2.92"],
      ans: "1.71",
      reason: "\\(\\sqrt{2.92}\\approx1.71\\)."
    },
    {
      q: "Find the arithmetic mean of the data: 4, 8, 12, 16, 20.",
      options: ["16","12","11","13"],
      ans: "12",
      reason: "Mean \\(=\\dfrac{60}{5}=12\\)."
    },
    {
      q: "Find the range of the data: 4, 8, 12, 16, 20.",
      options: ["18","14","16","12"],
      ans: "16",
      reason: "Range \\(=20-4=16\\)."
    },
    {
      q: "Find the median of the data: 4, 8, 12, 16, 20.",
      options: ["15","12","14","16"],
      ans: "12",
      reason: "The middle value is 12."
    },
    {
      q: "For the data 4, 8, 12, 16, 20, the variance (using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\)) is:",
      options: ["34","32","16","5.66"],
      ans: "32",
      reason: "Deviations \\(-8,-4,0,4,8\\): \\(\\sigma^2=\\dfrac{160}{5}=32\\)."
    },
    {
      q: "For the data 4, 8, 12, 16, 20, the standard deviation (rounded to two decimal places) is approximately:",
      options: ["4.66","5.66","6.66","32"],
      ans: "5.66",
      reason: "\\(\\sqrt{32}\\approx5.66\\)."
    },
    {
      q: "Find the arithmetic mean of the data: 6, 9, 12, 15.",
      options: ["11.5","9","9.5","10.5"],
      ans: "10.5",
      reason: "Mean \\(=\\dfrac{42}{4}=10.5\\)."
    },
    {
      q: "Find the range of the data: 6, 9, 12, 15.",
      options: ["10.5","9","7","11"],
      ans: "9",
      reason: "Range \\(=15-6=9\\)."
    },
    {
      q: "For the ordered data 2, 6, 10, 14, 18, 22, 26, 30, 34, 38, the median (\\(Q_2\\)) is:",
      options: ["18","20","22","28"],
      ans: "20",
      reason: "There are 10 values, so the median is the average of the 5th and 6th: \\(\\dfrac{18+22}{2}=20\\)."
    },
    {
      q: "For the ordered data 2, 6, 10, 14, 18, 22, 26, 30, 34, 38 with \\(Q_1=10\\) and \\(Q_3=30\\), the interquartile range (IQR) is:",
      options: ["25","8","20","28"],
      ans: "20",
      reason: "\\(IQR=Q_3-Q_1=30-10=20\\)."
    },
    {
      q: "For the ordered data 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, the median (\\(Q_2\\)) is:",
      options: ["25","27.5","30","12.5"],
      ans: "27.5",
      reason: "The median is the average of the 5th and 6th values: \\(\\dfrac{25+30}{2}=27.5\\)."
    },
    {
      q: "For the ordered data 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 with \\(Q_1=15\\) and \\(Q_3=40\\), the interquartile range (IQR) is:",
      options: ["30","12.5","37.5","25"],
      ans: "25",
      reason: "\\(IQR=40-15=25\\). (\\(Q_1\\) and \\(Q_3\\) are the medians of the lower and upper halves.)"
    },
    {
      q: "For the ordered data 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, the median (\\(Q_2\\)) is:",
      options: ["6","6.5","7","9"],
      ans: "6.5",
      reason: "The median is the average of the 6th and 7th values: \\(\\dfrac{6+7}{2}=6.5\\)."
    },
    {
      q: "For the ordered data 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 with \\(Q_1=3.5\\) and \\(Q_3=9.5\\), the interquartile range (IQR) is:",
      options: ["6","3","9","11"],
      ans: "6",
      reason: "\\(IQR=9.5-3.5=6\\)."
    },
    {
      q: "For the ordered data 10, 20, 30, 40, 50, 60, 70, 80, the median (\\(Q_2\\)) is:",
      options: ["60","40","45","20"],
      ans: "45",
      reason: "There are 8 values, so the median is the average of the 4th and 5th: \\(\\dfrac{40+50}{2}=45\\)."
    },
    {
      q: "For the ordered data 10, 20, 30, 40, 50, 60, 70, 80 with \\(Q_1=25\\) and \\(Q_3=65\\), the interquartile range (IQR) is:",
      options: ["20","45","40","60"],
      ans: "40",
      reason: "\\(IQR=65-25=40\\)."
    },
    {
      q: "A fair coin is tossed twice. The probability of getting heads both times is:",
      options: ["\\(\\dfrac{1}{2}\\)","1","\\(\\dfrac{1}{3}\\)","\\(\\dfrac{1}{4}\\)"],
      ans: "\\(\\dfrac{1}{4}\\)",
      reason: "\\(\\tfrac12\\times\\tfrac12=\\tfrac14\\)."
    },
    {
      q: "A fair die is rolled once. The probability of getting an even number is:",
      options: ["\\(\\dfrac{2}{3}\\)","\\(\\dfrac{1}{6}\\)","\\(\\dfrac{1}{3}\\)","\\(\\dfrac{1}{2}\\)"],
      ans: "\\(\\dfrac{1}{2}\\)",
      reason: "Even numbers are 2, 4, 6: \\(\\tfrac36=\\tfrac12\\)."
    },
    {
      q: "A fair die is rolled twice. The probability of getting a 6 both times is:",
      options: ["\\(\\dfrac{1}{6}\\)","\\(\\dfrac{1}{12}\\)","\\(\\dfrac{1}{36}\\)","\\(\\dfrac{1}{3}\\)"],
      ans: "\\(\\dfrac{1}{36}\\)",
      reason: "\\(\\tfrac16\\times\\tfrac16=\\tfrac1{36}\\)."
    },
    {
      q: "A card is drawn from a standard deck of 52 cards. The probability that it is a king is:",
      options: ["\\(\\dfrac{1}{52}\\)","\\(\\dfrac{4}{13}\\)","\\(\\dfrac{1}{4}\\)","\\(\\dfrac{1}{13}\\)"],
      ans: "\\(\\dfrac{1}{13}\\)",
      reason: "There are 4 kings in 52 cards: \\(\\tfrac4{52}=\\tfrac1{13}\\)."
    },
    {
      q: "Two cards are drawn from a standard deck without replacement. The probability that both are kings is:",
      options: ["\\(\\dfrac{1}{13}\\times\\dfrac{1}{13}\\)","\\(\\dfrac{4}{52}\\times\\dfrac{3}{51}\\)","\\(\\dfrac{4}{52}+\\dfrac{3}{51}\\)","\\(\\dfrac{1}{52}\\)"],
      ans: "\\(\\dfrac{4}{52}\\times\\dfrac{3}{51}\\)",
      reason: "Without replacement: \\(\\tfrac4{52}\\times\\tfrac3{51}\\)."
    },
    {
      q: "Two cards are drawn from a standard deck with replacement. The probability that both are aces is:",
      options: ["\\(\\left(\\dfrac{4}{52}\\right)^2\\)","\\(\\dfrac{1}{52}\\)","\\(\\dfrac{4}{52}+\\dfrac{4}{52}\\)","\\(\\dfrac{4}{52}\\times\\dfrac{3}{51}\\)"],
      ans: "\\(\\left(\\dfrac{4}{52}\\right)^2\\)",
      reason: "With replacement the draws are independent: \\(\\left(\\tfrac4{52}\\right)^2\\)."
    },
    {
      q: "A bag has 3 red and 2 blue balls. One ball is drawn at random. The probability it is red is:",
      options: ["\\(\\dfrac{3}{5}\\)","\\(\\dfrac{2}{5}\\)","\\(\\dfrac{1}{2}\\)","\\(\\dfrac{1}{5}\\)"],
      ans: "\\(\\dfrac{3}{5}\\)",
      reason: "\\(P(\\text{red})=\\tfrac35\\)."
    },
    {
      q: "For an event A, if \\(P(A)=0.3\\), then \\(P(\\text{not }A)\\) is:",
      options: ["0.3","1.3","0.7","0"],
      ans: "0.7",
      reason: "\\(P(\\text{not }A)=1-0.3=0.7\\)."
    },
    {
      q: "If \\(P(A)=0.4\\) and \\(P(B)=0.5\\) where A, B are mutually exclusive, then \\(P(A\\text{ or }B)\\) is:",
      options: ["0.2","1","0.9","0.1"],
      ans: "0.9",
      reason: "Mutually exclusive: \\(0.4+0.5=0.9\\)."
    },
    {
      q: "If A and B are independent with \\(P(A)=0.6\\) and \\(P(B)=0.5\\), then \\(P(A\\text{ and }B)\\) is:",
      options: ["0.1","1.1","0.5","0.3"],
      ans: "0.3",
      reason: "Independent: \\(0.6\\times0.5=0.3\\)."
    },
    {
      q: "As the number of hours studied increases, exam scores tend to increase. This scatter diagram shows:",
      options: ["Negative correlation","Perfect zero correlation","Positive correlation","No correlation"],
      ans: "Positive correlation",
      reason: "Both variables increase together: positive correlation."
    },
    {
      q: "As the price of an item increases, the quantity demanded tends to decrease. This scatter diagram shows:",
      options: ["Positive correlation","No correlation","Negative correlation","Undefined correlation"],
      ans: "Negative correlation",
      reason: "Price rises while demand falls: negative correlation."
    },
    {
      q: "A scatter diagram of shoe size versus favourite colour shows points scattered with no pattern. This indicates:",
      options: ["No (approximately zero) correlation","Strong negative correlation","Perfect correlation","Strong positive correlation"],
      ans: "No (approximately zero) correlation",
      reason: "No pattern means approximately zero correlation."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Student</th><th>Marks (out of 15)</th></tr><tr><td>A</td><td>3</td></tr><tr><td>B</td><td>6</td></tr><tr><td>C</td><td>9</td></tr><tr><td>D</td><td>12</td></tr><tr><td>E</td><td>15</td></tr></table><p>A teacher records the marks scored by five students in a short quiz, as shown.</p></div>The arithmetic mean of the marks is:",
      options: ["6","9","12","15"],
      ans: "9",
      reason: "Mean \\(=\\dfrac{3+6+9+12+15}{5}=9\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Student</th><th>Marks (out of 15)</th></tr><tr><td>A</td><td>3</td></tr><tr><td>B</td><td>6</td></tr><tr><td>C</td><td>9</td></tr><tr><td>D</td><td>12</td></tr><tr><td>E</td><td>15</td></tr></table><p>A teacher records the marks scored by five students in a short quiz, as shown.</p></div>The range of the marks is:",
      options: ["9","12","15","18"],
      ans: "12",
      reason: "Range \\(=15-3=12\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Student</th><th>Marks (out of 15)</th></tr><tr><td>A</td><td>3</td></tr><tr><td>B</td><td>6</td></tr><tr><td>C</td><td>9</td></tr><tr><td>D</td><td>12</td></tr><tr><td>E</td><td>15</td></tr></table><p>A teacher records the marks scored by five students in a short quiz, as shown.</p></div>Using the population formula \\(\\sigma^2=\\dfrac{\\sum(x-\\bar{x})^2}{n}\\), the variance of the marks is:",
      options: ["12","15","18","24"],
      ans: "18",
      reason: "Deviations \\(-6,-3,0,3,6\\): \\(\\sigma^2=\\dfrac{36+9+0+9+36}{5}=18\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Student</th><th>Marks (out of 15)</th></tr><tr><td>A</td><td>3</td></tr><tr><td>B</td><td>6</td></tr><tr><td>C</td><td>9</td></tr><tr><td>D</td><td>12</td></tr><tr><td>E</td><td>15</td></tr></table><p>A teacher records the marks scored by five students in a short quiz, as shown.</p></div>The standard deviation (rounded to two decimal places) is approximately:",
      options: ["3.00","4.24","4.50","6.00"],
      ans: "4.24",
      reason: "\\(\\sigma=\\sqrt{18}\\approx4.24\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Month</th><th>Sales (units)</th></tr><tr><td>1</td><td>20</td></tr><tr><td>2</td><td>30</td></tr><tr><td>3</td><td>40</td></tr><tr><td>4</td><td>50</td></tr><tr><td>5</td><td>60</td></tr><tr><td>6</td><td>70</td></tr><tr><td>7</td><td>80</td></tr><tr><td>8</td><td>90</td></tr></table><p>A shop's monthly sales (in units) for eight consecutive months, already arranged in order, are shown.</p></div>The median \\(Q_2\\) of the sales data is:",
      options: ["50","55","60","65"],
      ans: "55",
      reason: "With 8 values the median is \\(\\dfrac{50+60}{2}=55\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Month</th><th>Sales (units)</th></tr><tr><td>1</td><td>20</td></tr><tr><td>2</td><td>30</td></tr><tr><td>3</td><td>40</td></tr><tr><td>4</td><td>50</td></tr><tr><td>5</td><td>60</td></tr><tr><td>6</td><td>70</td></tr><tr><td>7</td><td>80</td></tr><tr><td>8</td><td>90</td></tr></table><p>A shop's monthly sales (in units) for eight consecutive months, already arranged in order, are shown.</p></div>The lower quartile \\(Q_1\\) is:",
      options: ["30","35","40","45"],
      ans: "35",
      reason: "\\(Q_1\\) is the median of the lower half \\(20,30,40,50\\): \\(\\dfrac{30+40}{2}=35\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Month</th><th>Sales (units)</th></tr><tr><td>1</td><td>20</td></tr><tr><td>2</td><td>30</td></tr><tr><td>3</td><td>40</td></tr><tr><td>4</td><td>50</td></tr><tr><td>5</td><td>60</td></tr><tr><td>6</td><td>70</td></tr><tr><td>7</td><td>80</td></tr><tr><td>8</td><td>90</td></tr></table><p>A shop's monthly sales (in units) for eight consecutive months, already arranged in order, are shown.</p></div>The upper quartile \\(Q_3\\) is:",
      options: ["70","75","80","85"],
      ans: "75",
      reason: "\\(Q_3\\) is the median of the upper half \\(60,70,80,90\\): \\(\\dfrac{70+80}{2}=75\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Month</th><th>Sales (units)</th></tr><tr><td>1</td><td>20</td></tr><tr><td>2</td><td>30</td></tr><tr><td>3</td><td>40</td></tr><tr><td>4</td><td>50</td></tr><tr><td>5</td><td>60</td></tr><tr><td>6</td><td>70</td></tr><tr><td>7</td><td>80</td></tr><tr><td>8</td><td>90</td></tr></table><p>A shop's monthly sales (in units) for eight consecutive months, already arranged in order, are shown.</p></div>The interquartile range (IQR) is:",
      options: ["35","40","45","50"],
      ans: "40",
      reason: "\\(IQR=75-35=40\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Total bulbs</th><th>Defective bulbs</th></tr><tr><td>10</td><td>2</td></tr></table><p>A box contains 10 light bulbs, of which 2 are defective. Two bulbs are drawn one after another for a quality check.</p></div>If bulbs are drawn without replacement, the probability that the first bulb drawn is defective is:",
      options: ["\\(\\dfrac{1}{10}\\)","\\(\\dfrac{1}{5}\\)","\\(\\dfrac{1}{2}\\)","\\(\\dfrac{4}{5}\\)"],
      ans: "\\(\\dfrac{1}{5}\\)",
      reason: "\\(P=\\tfrac2{10}=\\tfrac15\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Total bulbs</th><th>Defective bulbs</th></tr><tr><td>10</td><td>2</td></tr></table><p>A box contains 10 light bulbs, of which 2 are defective. Two bulbs are drawn one after another for a quality check.</p></div>Given the first bulb drawn was defective, the probability that the second bulb (also drawn without replacement) is defective is:",
      options: ["\\(\\dfrac{1}{9}\\)","\\(\\dfrac{2}{9}\\)","\\(\\dfrac{1}{10}\\)","\\(\\dfrac{2}{10}\\)"],
      ans: "\\(\\dfrac{1}{9}\\)",
      reason: "One defective is gone; 1 defective remains among 9 bulbs: \\(\\tfrac19\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Total bulbs</th><th>Defective bulbs</th></tr><tr><td>10</td><td>2</td></tr></table><p>A box contains 10 light bulbs, of which 2 are defective. Two bulbs are drawn one after another for a quality check.</p></div>The probability that both bulbs drawn (without replacement) are defective is:",
      options: ["\\(\\dfrac{1}{45}\\)","\\(\\dfrac{1}{25}\\)","\\(\\dfrac{1}{100}\\)","\\(\\dfrac{2}{19}\\)"],
      ans: "\\(\\dfrac{1}{45}\\)",
      reason: "\\(\\tfrac2{10}\\times\\tfrac19=\\tfrac{2}{90}=\\tfrac1{45}\\)."
    },
    {
      q: "<div class=\"stimulus\"><table><tr><th>Total bulbs</th><th>Defective bulbs</th></tr><tr><td>10</td><td>2</td></tr></table><p>A box contains 10 light bulbs, of which 2 are defective. Two bulbs are drawn one after another for a quality check.</p></div>If each bulb is tested and replaced before the next draw, the probability that both drawn bulbs are defective is:",
      options: ["\\(\\dfrac{1}{45}\\)","\\(\\dfrac{1}{25}\\)","\\(\\dfrac{1}{5}\\)","\\(\\dfrac{2}{25}\\)"],
      ans: "\\(\\dfrac{1}{25}\\)",
      reason: "With replacement the draws are independent: \\(\\tfrac15\\times\\tfrac15=\\tfrac1{25}\\)."
    }
    ];
  }
});
