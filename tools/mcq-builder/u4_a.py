# -*- coding: utf-8 -*-
from lib import *
C = 4
T1 = "4.1 Statistical modeling and use cases"
T2 = "4.1.2 Solving a data science case study"
T3 = "4.1.3 Statistical modeling techniques"
T4 = "4.1.4 Building a statistical model in Python"

# ---------------- 4.1 ----------------
add(C, T1, 'K', "Which term describes using mathematical models and statistical assumptions to make predictions about the real world?", "Statistical modeling",
    ["Data wrangling", "Data encryption", "Data hosting"],
    "Statistical modeling uses mathematical models and statistical assumptions to generate sample data and make predictions about the real world.")
add(C, T1, 'U', "In a model y = 5x + 2, x is the weight of students and y is their height. Why is y called the dependent variable?", "Its value depends on x",
    ["It is always larger than x", "It is chosen by the user", "It never changes at all"],
    "The value of y is found from x, so y depends on x. Variable x is the independent variable.")
add(C, T1, 'K', "A concrete real-world task that is solved using the available data is called a:", "data science use case",
    ["data wrangling task", "data product line", "statistical model"],
    "A data science use case can be a problem to be resolved, a hypothesis to be checked or a question to be answered.")
add(C, T1, 'U', "While planning a use case, a team defines KPIs. What do KPIs measure?", "The success of the project",
    ["The size of the dataset", "The speed of the computer", "The cost of data storage"],
    "KPI means key performance indicator. It is defined during planning as a measure of success.")
add(C, T1, 'U', stim("A bank lists the latest card payments of one customer.", truth_html(["Payment", "Amount (PKR)", "City"], [["1", "2,500", "Lahore"], ["2", "1,800", "Lahore"], ["3", "950,000", "Dubai"]])) + "The bank's system flags payment 3 as unusual and possibly stolen. Which typical task is this?", "Fraud detection",
    ["Price optimization", "Customer segmentation", "Churn prediction"],
    "Finding unusual, suspicious transactions is fraud detection, a typical data science use case.")
add(C, T1, 'U', "A shop divides its customers into groups with similar buying habits. Which typical task is this?", "Customer segmentation",
    ["Fraud detection", "Price optimization", "Churn prediction"],
    "Dividing customers into groups with common behaviour is customer segmentation.")
add(C, T1, 'U', "An online store shows 'you may also like' items to each visitor. Which approach does it use?", "Recommendations",
    ["Forecasting", "Image recognition", "Anomaly detection"],
    "Suggesting items based on the data of a user's behaviour is the recommendation approach.")
add(C, T1, 'U', "A weather office predicts next week's rainfall from past data. Which approach is this?", "Forecasting",
    ["Image recognition", "Recommendations", "Classification"],
    "Using past data to predict a future value is forecasting.")
add(C, T1, 'K', "A statistical model is a collection of ___ on the set of all possible outcomes of an experiment.", "probability distributions",
    ["programming languages", "network protocols", "database tables"],
    "A statistical model is a collection of probability distributions on the set of all possible outcomes of an experiment.")

# ---------------- 4.1.2 ----------------
steps = ["Formulate the question", "Data collection", "Data wrangling", "Data modeling", "Result communication"]
add(C, T2, 'U', stim("The five steps of solving a data science case study are shown. One step is hidden.", boxes_svg(["Question", "Collection", "Wrangling", "Modeling", "Results"], missing=2, bw=84, gap=26)) + "Which step is hidden?", "Data wrangling",
    ["Data collection", "Data modeling", "Result communication"],
    "The order is: formulate the question, data collection, data wrangling, data analysis and modeling, result communication.")
add(C, T2, 'K', "What is the first step of solving a data science case study?", "Formulating the question",
    ["Collecting the data", "Wrangling the data", "Communicating results"],
    "The roadmap starts with formulating the right question, often with a literature review.")
add(C, T2, 'U', "Cleaned data is fitted into a selected predictive statistical model. Which step is this?", "Data analysis and modeling",
    ["Data collection and storage", "Data wrangling and cleaning", "Result communication"],
    "After wrangling, the clean data is analysed and fitted to a statistical model in the data analysis and modeling step.")
add(C, T2, 'U', "Temperature, rainfall and wind speed are gathered with a thermometer and a rain gauge. Which step is this?", "Data collection",
    ["Data wrangling", "Data modeling", "Result communication"],
    "Gathering data from instruments or the meteorological department is data collection.")
add(C, T2, 'U', stim("A small dataset has a repeated row and a missing mark.", truth_html(["Name", "Mark"], [["Ali", "85"], ["Sara", ""], ["Ali", "85"]])) + "An analyst removes the repeated row and fills in the missing mark. Which step is this?", "Data wrangling",
    ["Data collection", "Data modeling", "Result communication"],
    "Cleaning, preprocessing and transforming the raw data into a suitable form is data wrangling.")
add(C, T2, 'U', "Sharing the main findings and conclusions with managers and stakeholders is the step of:", "result communication",
    ["data wrangling", "data collection", "data modeling"],
    "The final step is result communication: presenting the findings to management and other involved parties.")
add(C, T2, 'K', "Analysing medical records in a case study helps mainly in:", "timely diagnosis of diseases",
    ["faster internet speeds", "designing computer chips", "printing patient bills"],
    "Data from healthcare organisations helps in medical research and timely diagnosis of diseases.")
add(C, T2, 'U', "Which step comes immediately before data analysis and modeling?", "Data wrangling",
    ["Data collection", "Formulating the question", "Result communication"],
    "Raw data is first wrangled (cleaned and transformed) so that it is ready for analysis and modeling.")

# ---------------- 4.1.3 ----------------
add(C, T3, 'K', "Which are the two categories of statistical modeling methods used in data analysis?", "Supervised and unsupervised learning",
    ["Primary and secondary learning", "Static and dynamic learning", "Manual and automatic learning"],
    "Statistical modeling methods are of two categories: supervised learning and unsupervised learning.")
add(C, T3, 'K', "Which learning model trains on a labelled dataset with an answer key?", "Supervised learning",
    ["Unsupervised learning", "Reinforcement learning", "Association learning"],
    "In supervised learning the algorithm uses labelled data and an answer key to check its accuracy while it trains.")
add(C, T3, 'U', "Pictures labelled 'Fruit' and 'Not Fruit' are used to train a model that labels new pictures. This is an example of:", "supervised learning",
    ["unsupervised learning", "clustering", "association rules"],
    "The training data carries labels, so the model learns from the inputs and labels: that is supervised learning.")
pts_a = [(40, 120), (55, 140), (48, 105), (62, 128), (150, 60), (165, 75), (140, 82), (158, 50), (235, 135), (250, 118), (225, 108), (245, 145)]
add(C, T3, 'U', stim("An algorithm is given the unlabelled data on the left and separates it into the groups on the right.",
    cluster_pair([pts_a[0:4], pts_a[4:8], pts_a[8:12]])) + "Which technique has been applied?", "Clustering",
    ["Regression", "Classification", "Blocking"],
    "Dividing unlabelled data into groups of items with maximum similarity is clustering, an unsupervised technique.")
add(C, T3, 'K', "If the outcome of a model is a continuous value, the model is called:", "regression",
    ["classification", "clustering", "association"],
    "A model that predicts a continuous value is a regression model; a model that predicts a discrete value is a classification model.")
add(C, T3, 'U', "Predicting whether an employee will get a salary raise (yes or no) is an example of:", "classification",
    ["regression", "clustering", "smoothing"],
    "The result is a discrete value (yes or no), so it is a classification problem.")
add(C, T3, 'U', "Predicting how much salary raise an employee will get is an example of:", "regression",
    ["classification", "clustering", "association"],
    "The result is an amount, which is a continuous value, so it is a regression problem.")
add(C, T3, 'K', "In the equation y = mx + b of simple linear regression, m is the:", "slope",
    ["intercept", "predictor", "response"],
    "m is the slope of the line and b is the y-intercept. x is the predictor and y is the response.")
add(C, T3, 'A', stim("A fitted line is drawn on a scatter plot.", scatter_svg([(1, 6), (2, 8), (3, 8), (4, 12), (5, 12), (6, 15)], fit=(2, 3), xmax=6.5, ymax=17, xl='x', yl='y')) + "What is the y-intercept of the line?", "3",
    ["2", "5", "0"],
    "The y-intercept is the point where the line meets the y-axis, which is at y = 3. The slope (2) is the rise per unit of x.")
(x1, y1), (x2, y2) = (1, 5), (4, 11)
m = (y2 - y1) / (x2 - x1); assert m == 2
add(C, T3, 'A', "A straight line passes through the points (1, 5) and (4, 11). What is its slope?", "2",
    ["3", "6", "0.5"],
    "Slope = rise / run = (11 - 5) / (4 - 1) = 6 / 3 = 2.")
mm, bb, xx = 3, 4, 5
add(C, T3, 'A', "A fitted model is y = 3x + 4. What value does it predict for y when x = 5?", str(mm * xx + bb),
    ["15", "23", "12"],
    "y = 3(5) + 4 = 15 + 4 = 19.")
add(C, T3, 'U', "A supermarket finds that customers who buy bread and milk often also buy tea. Which technique finds such a link?", "Association rules",
    ["Linear regression", "Classification", "Smoothing"],
    "Association rules show how likely a second item is bought when the first one is bought.")
add(C, T3, 'U', "In k-means clustering, what does the letter k stand for?", "The number of groups",
    ["The number of labels", "The size of the dataset", "The slope of the line"],
    "k is the specified number of groups (clusters) into which the data points are divided according to similarity.")
add(C, T3, 'K', "Which of the following is a classification model?", "Decision tree",
    ["K-means", "Linear regression", "Association rules"],
    "Decision trees, Naive Bayes, nearest neighbour, random forests and neural networks are classification models.")

# ---------------- 4.1.4 ----------------
add(C, T4, 'K', "Which of the following is a tool for building a statistical model?", "Weka",
    ["Paint", "Notepad", "Photoshop"],
    "MS-Excel, Weka, RStudio and Python are tools used to build statistical models.")
add(C, T4, 'K', "Which online platform did the book use to run its model code in a web browser?", "Colab",
    ["Replit", "Kaggle", "GitHub"],
    "The book opens Google Colab, an online compiler for Python. Kaggle and GitHub are places to find datasets.")
add(C, T4, 'U', "Why is it not necessary to download a dataset for the book's first experimental model?", "Random numbers can create one",
    ["Models do not need data", "Colab already holds one", "Excel makes it by itself"],
    "A dataset can be created by generating random numbers with Python code and then fitting y = mx + c to it.")
add(C, T4, 'U', "In the model code, the sklearn library supplies LinearRegression. What does model.fit(X, y) do?", "Trains the model on the data",
    ["Plots the data points", "Predicts new values", "Generates random numbers"],
    "fit() fits the line to the data. predict() is the function used afterwards to obtain predictions.")
add(C, T4, 'U', stim("Part of the book's code:", pre("model = LinearRegression()\nmodel.fit(X, y)\ny_pred = model.predict(X_new)")) + "Which function is used to obtain the predicted values?", "model.predict()",
    ["model.fit()", "model.scatter()", "model.show()"],
    "After fitting, predict() gives the model's output for new input values.")
add(C, T4, 'A', stim("Part of the book's plotting code:", pre("plt.scatter(X, y, label='Original data')\nplt.plot(X_new, y_pred, 'r-', label='Line')\nplt.show()")) + "Which statement draws the red regression line?", "plt.plot(X_new, y_pred, 'r-')",
    ["plt.scatter(X, y, label='Data')", "plt.title('Regression line')", "plt.legend(loc='upper left')"],
    "plot() draws the line through the predicted points in red ('r-'). scatter() draws only the original data points.")
