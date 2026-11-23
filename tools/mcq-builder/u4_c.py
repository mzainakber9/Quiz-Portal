# -*- coding: utf-8 -*-
from lib import *
import statistics as st
C = 4
T9 = "4.2.5 Data collection methods"
T10 = "4.2.6 Real-world experimentation (A/B testing)"
T11 = "4.3 Summary statistics and data visualization"

# ---------------- 4.2.5 ----------------
add(C, T9, 'K', "Data that is collected firsthand, directly from the main source, is called:", "primary data",
    ["secondary data", "derived data", "archived data"],
    "Primary data has not been collected in the past; it is gathered directly, for example through interviews, observations or surveys.")
add(C, T9, 'K', "Which of the following is a primary data collection method?", "Interviews",
    ["Libraries", "Government archives", "The Internet"],
    "Interviews, observations, surveys and questionnaires, focus groups and oral histories are primary methods. The others are secondary sources.")
add(C, T9, 'U', "A student uses crime figures published in a government archive for a project. This is ___ data collection.", "secondary",
    ["primary", "firsthand", "observed"],
    "The data was already collected by someone else, so it is secondary data.")
add(C, T9, 'U', "Which of the following is a secondary data collection method?", "Government archives",
    ["Telephone interviews", "Field observations", "Online questionnaires"],
    "Secondary data comes from existing sources such as the Internet, government archives and libraries.")
add(C, T9, 'U', "A researcher watches people walking their pets on a busy street to decide whether to open a pet food store. Which method is used?", "Observation",
    ["Interview", "Focus group", "Oral history"],
    "Watching a situation and recording the findings is the observation method.")
add(C, T9, 'U', "A group of people who share a common interest is questioned together to learn why they think in a certain way. Which method is this?", "Focus group",
    ["Interview", "Survey", "Observation"],
    "A focus group is like an interview but is conducted with a group of people who have something in common.")
add(C, T9, 'U', "A questionnaire is posted on the Internet to get answers from people all over the world. Which method is this?", "Survey",
    ["Focus group", "Oral history", "Observation"],
    "Surveys and questionnaires reach large groups of people and can be conducted face-to-face, by mail or on the Internet.")
add(C, T9, 'A', "A researcher asks elderly people about their experiences of a particular flood in which they were involved. Which method is this?", "Oral history",
    ["Survey", "Observation", "Library research"],
    "Oral histories collect the opinions and experiences of people about one particular event they were involved in.")
add(C, T9, 'U', "Why is data from government archives a good secondary source?", "It is authentic and verifiable",
    ["It is always freely available", "It holds only recent records", "It needs no permission to use"],
    "The main advantage is authenticity and verifiability. The challenge is that some data, such as criminal records, is classified.")
add(C, T9, 'A', "Which of the following is an example of primary data?", "Answers from her own survey",
    ["A library's annual report", "A government archive file", "An article found on the Internet"],
    "Data she collects herself from respondents is firsthand. The other three already exist in published sources, so they are secondary.")

# ---------------- 4.2.6 ----------------
add(C, T10, 'K', "A/B testing is also known as:", "split testing",
    ["blind testing", "load testing", "unit testing"],
    "A/B testing, or split testing, compares two versions of something to find out which performs better.")
add(C, T10, 'U', "In an A/B test of a new app feature, the two versions are shown to:", "randomly assigned user groups",
    ["all users at the same time", "only the company's own staff", "only brand-new customers"],
    "Users are randomly assigned to version A or B, and data on their interactions is then compared.")
add(C, T10, 'U', "YouTube tests a new layout. Which group sees the existing layout?", "Group A, the control group",
    ["Group B, the experimental group", "Both of the groups", "Neither of the groups"],
    "Group A is the control group with the existing version, and group B is the experimental group with the change.")
a_rate, b_rate = 40 / 500 * 100, 55 / 500 * 100
assert round(b_rate - a_rate) == 3
add(C, T10, 'A', stim("An online shop tested two versions of a page on different visitors.", truth_html(["Page", "Visitors", "Buyers"], [["A", "500", "40"], ["B", "500", "55"]])) + "Which page performs better?", "B, by 3 percentage points",
    ["A, by 3 percentage points", "B, by 15 percentage points", "B, by 30 percentage points"],
    "Page A converts 40 / 500 = 8% and page B 55 / 500 = 11%. B is better by 3 percentage points.")

# ---------------- 4.3 ----------------
add(C, T11, 'U', "Which Python library does the book install to read and analyse a CSV dataset?", "pandas",
    ["turtle", "random", "datetime"],
    "The command pip install pandas installs the library, which is the most important one for data analysis.")
add(C, T11, 'K', "Which pandas function reads a CSV file into the program?", "pd.read_csv()",
    ["pd.open_csv()", "pd.load_file()", "pd.get_csv()"],
    "read_csv() loads the file, for example data = pd.read_csv(\"tips.csv\").")
add(C, T11, 'U', stim("Part of the book's code:", pre("data = pd.read_csv(\"tips.csv\")\ndisplay(data.head(10))")) + "What does data.head(10) show?", "The first 10 rows",
    ["The last 10 rows", "Ten random rows", "Only the 10th row"],
    "head(n) displays the top n rows of the table.")
add(C, T11, 'K', "Mean, median and mode are measures of:", "central tendency",
    ["dispersion", "correlation", "causation"],
    "They show how closely similar the data is around a typical value; dispersion shows how scattered it is.")
data = [6, 2, 9, 4, 4, 5]
med = st.median(data); rng = max(data) - min(data); assert med == 4.5 and rng == 7
add(C, T11, 'A', stim("A list of six values.", array_svg(data)) + "What is the median of the data?", "4.5",
    ["4", "5", "6"],
    "Sorted data is 2, 4, 4, 5, 6, 9. With six values the median is the mean of the middle two: (4 + 5) / 2 = 4.5.")
add(C, T11, 'A', stim("A list of six values.", array_svg(data)) + "What is the range (a measure of spread) of the data?", str(rng),
    ["6", "11", "4.5"],
    "Range = largest value - smallest value = 9 - 2 = 7.")
days = ["Sat", "Sun", "Thu", "Fri"]; tips = [18, 14, 9, 6]
best = days[tips.index(max(tips))]
add(C, T11, 'A', stim("The bar chart shows the number of tips given on four days.", bar_svg(days, tips, "Tips per day", ymax=20)) + "On which day were the most tips given?", best,
    ["Sun", "Thu", "Fri"],
    "The tallest bar is Saturday at 18 tips.")
shares = [40, 25, 20, 15]
add(C, T11, 'A', stim("The pie chart shows the share of tips given on four days.", pie_svg(days, shares)) + "What percentage of the tips was given on Thursday and Friday together?", "%d%%" % (shares[2] + shares[3]),
    ["20%", "15%", "65%"],
    "Thursday 20% + Friday 15% = 35%.")
months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]; sales = [20, 26, 24, 33, 38, 30]
hm = months[sales.index(max(sales))]
add(C, T11, 'A', stim("The line chart shows monthly sales of a shop.", line_svg(months, sales, "Monthly sales (units)")) + "In which month were the sales highest?", hm,
    ["Apr", "Feb", "Jun"],
    "The line reaches its highest point in May.")
add(C, T11, 'A', stim("Part of the book's matplotlib code:", pre("plt.hist(data['total_bill'])\nplt.title(\"Histogram\")\nplt.show()")) + "Which statement draws the histogram?", "plt.hist(data['total_bill'])",
    ["plt.title(\"Histogram\")", "plt.boxplot(data['total_bill'])", "plt.pie(data['total_bill'])"],
    "hist() computes how often values fall in each bin and draws the histogram. title() only adds the heading and show() displays the figure.")
