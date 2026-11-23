// Class 11 Computer Science — Unit 4: Data and Analysis
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 4) and the SLOs
// CS-11-D-01 (statistical modeling), D-02 (experimental design) and D-03 (summary statistics and data visuals).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with chart, table and code questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG.
QuizBank.register({
  class: "11th",
  subject: "Computer",
  type: "chapter",
  id: "ch4",
  label: "Unit 4: Data and Analysis",
  order: 4,
  questions: function () {
    return [
    {
      q: "Which term describes using mathematical models and statistical assumptions to make predictions about the real world?",
      options: ["Statistical modeling", "Data wrangling", "Data encryption", "Data hosting"],
      ans: "Statistical modeling",
      reason: "Statistical modeling uses mathematical models and statistical assumptions to generate sample data and make predictions about the real world."
    },
    {
      q: "In a model y = 5x + 2, x is the weight of students and y is their height. Why is y called the dependent variable?",
      options: ["Its value depends on x", "It is always larger than x", "It is chosen by the user", "It never changes at all"],
      ans: "Its value depends on x",
      reason: "The value of y is found from x, so y depends on x. Variable x is the independent variable."
    },
    {
      q: "A concrete real-world task that is solved using the available data is called a:",
      options: ["data science use case", "data wrangling task", "data product line", "statistical model"],
      ans: "data science use case",
      reason: "A data science use case can be a problem to be resolved, a hypothesis to be checked or a question to be answered."
    },
    {
      q: "While planning a use case, a team defines KPIs. What do KPIs measure?",
      options: ["The success of the project", "The size of the dataset", "The speed of the computer", "The cost of data storage"],
      ans: "The success of the project",
      reason: "KPI means key performance indicator. It is defined during planning as a measure of success."
    },
    {
      q: "<div class=\"stimulus\">A bank lists the latest card payments of one customer.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Payment</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Amount (PKR)</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">City</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2,500</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Lahore</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">2</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">1,800</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Lahore</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">3</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">950,000</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Dubai</td></tr></table></div>The bank's system flags payment 3 as unusual and possibly stolen. Which typical task is this?",
      options: ["Fraud detection", "Price optimization", "Customer segmentation", "Churn prediction"],
      ans: "Fraud detection",
      reason: "Finding unusual, suspicious transactions is fraud detection, a typical data science use case."
    },
    {
      q: "A shop divides its customers into groups with similar buying habits. Which typical task is this?",
      options: ["Customer segmentation", "Fraud detection", "Price optimization", "Churn prediction"],
      ans: "Customer segmentation",
      reason: "Dividing customers into groups with common behaviour is customer segmentation."
    },
    {
      q: "An online store shows 'you may also like' items to each visitor. Which approach does it use?",
      options: ["Recommendations", "Forecasting", "Image recognition", "Anomaly detection"],
      ans: "Recommendations",
      reason: "Suggesting items based on the data of a user's behaviour is the recommendation approach."
    },
    {
      q: "A weather office predicts next week's rainfall from past data. Which approach is this?",
      options: ["Forecasting", "Image recognition", "Recommendations", "Classification"],
      ans: "Forecasting",
      reason: "Using past data to predict a future value is forecasting."
    },
    {
      q: "A statistical model is a collection of ___ on the set of all possible outcomes of an experiment.",
      options: ["probability distributions", "programming languages", "network protocols", "database tables"],
      ans: "probability distributions",
      reason: "A statistical model is a collection of probability distributions on the set of all possible outcomes of an experiment."
    },
    {
      q: "<div class=\"stimulus\">The five steps of solving a data science case study are shown. One step is hidden.<svg viewBox=\"0 0 544 64\" style=\"width:100%;max-width:544px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ba\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"84\" height=\"44\" rx=\"6\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"52.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Question</text><line x1=\"94\" y1=\"32.0\" x2=\"119\" y2=\"32.0\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ba)\"/><rect x=\"120\" y=\"10\" width=\"84\" height=\"44\" rx=\"6\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"162.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Collection</text><line x1=\"204\" y1=\"32.0\" x2=\"229\" y2=\"32.0\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ba)\"/><rect x=\"230\" y=\"10\" width=\"84\" height=\"44\" rx=\"6\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"272.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"18\" fill=\"#222\" font-weight=\"bold\">?</text><line x1=\"314\" y1=\"32.0\" x2=\"339\" y2=\"32.0\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ba)\"/><rect x=\"340\" y=\"10\" width=\"84\" height=\"44\" rx=\"6\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"382.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Modeling</text><line x1=\"424\" y1=\"32.0\" x2=\"449\" y2=\"32.0\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ba)\"/><rect x=\"450\" y=\"10\" width=\"84\" height=\"44\" rx=\"6\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"492.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Results</text></svg></div>Which step is hidden?",
      options: ["Data wrangling", "Data collection", "Data modeling", "Result communication"],
      ans: "Data wrangling",
      reason: "The order is: formulate the question, data collection, data wrangling, data analysis and modeling, result communication."
    },
    {
      q: "What is the first step of solving a data science case study?",
      options: ["Formulating the question", "Collecting the data", "Wrangling the data", "Communicating results"],
      ans: "Formulating the question",
      reason: "The roadmap starts with formulating the right question, often with a literature review."
    },
    {
      q: "Cleaned data is fitted into a selected predictive statistical model. Which step is this?",
      options: ["Data analysis and modeling", "Data collection and storage", "Data wrangling and cleaning", "Result communication"],
      ans: "Data analysis and modeling",
      reason: "After wrangling, the clean data is analysed and fitted to a statistical model in the data analysis and modeling step."
    },
    {
      q: "Temperature, rainfall and wind speed are gathered with a thermometer and a rain gauge. Which step is this?",
      options: ["Data collection", "Data wrangling", "Data modeling", "Result communication"],
      ans: "Data collection",
      reason: "Gathering data from instruments or the meteorological department is data collection."
    },
    {
      q: "<div class=\"stimulus\">A small dataset has a repeated row and a missing mark.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Name</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Mark</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Ali</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">85</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Sara</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\"></td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Ali</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">85</td></tr></table></div>An analyst removes the repeated row and fills in the missing mark. Which step is this?",
      options: ["Data wrangling", "Data collection", "Data modeling", "Result communication"],
      ans: "Data wrangling",
      reason: "Cleaning, preprocessing and transforming the raw data into a suitable form is data wrangling."
    },
    {
      q: "Sharing the main findings and conclusions with managers and stakeholders is the step of:",
      options: ["result communication", "data wrangling", "data collection", "data modeling"],
      ans: "result communication",
      reason: "The final step is result communication: presenting the findings to management and other involved parties."
    },
    {
      q: "Analysing medical records in a case study helps mainly in:",
      options: ["timely diagnosis of diseases", "faster internet speeds", "designing computer chips", "printing patient bills"],
      ans: "timely diagnosis of diseases",
      reason: "Data from healthcare organisations helps in medical research and timely diagnosis of diseases."
    },
    {
      q: "Which step comes immediately before data analysis and modeling?",
      options: ["Data wrangling", "Data collection", "Formulating the question", "Result communication"],
      ans: "Data wrangling",
      reason: "Raw data is first wrangled (cleaned and transformed) so that it is ready for analysis and modeling."
    },
    {
      q: "Which are the two categories of statistical modeling methods used in data analysis?",
      options: ["Supervised and unsupervised learning", "Primary and secondary learning", "Static and dynamic learning", "Manual and automatic learning"],
      ans: "Supervised and unsupervised learning",
      reason: "Statistical modeling methods are of two categories: supervised learning and unsupervised learning."
    },
    {
      q: "Which learning model trains on a labelled dataset with an answer key?",
      options: ["Supervised learning", "Unsupervised learning", "Reinforcement learning", "Association learning"],
      ans: "Supervised learning",
      reason: "In supervised learning the algorithm uses labelled data and an answer key to check its accuracy while it trains."
    },
    {
      q: "Pictures labelled 'Fruit' and 'Not Fruit' are used to train a model that labels new pictures. This is an example of:",
      options: ["supervised learning", "unsupervised learning", "clustering", "association rules"],
      ans: "supervised learning",
      reason: "The training data carries labels, so the model learns from the inputs and labels: that is supervised learning."
    },
    {
      q: "<div class=\"stimulus\">An algorithm is given the unlabelled data on the left and separates it into the groups on the right.<svg viewBox=\"0 0 340 136\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"8\" y1=\"112\" x2=\"158\" y2=\"112\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"8\" y1=\"8\" x2=\"8\" y2=\"112\" stroke=\"#222\" stroke-width=\"1.6\" /><circle cx=\"36.0\" cy=\"86.4\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"44.2\" cy=\"100.8\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"40.4\" cy=\"75.6\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"48.1\" cy=\"92.2\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"96.5\" cy=\"43.2\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"104.8\" cy=\"54.0\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"91.0\" cy=\"59.0\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"100.9\" cy=\"36.0\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"143.2\" cy=\"97.2\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"151.5\" cy=\"85.0\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"137.8\" cy=\"77.8\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"148.8\" cy=\"104.4\" r=\"4.5\" fill=\"#9ca3af\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"83\" y=\"128\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Unlabelled data</text><line x1=\"178\" y1=\"112\" x2=\"328\" y2=\"112\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"178\" y1=\"8\" x2=\"178\" y2=\"112\" stroke=\"#222\" stroke-width=\"1.6\" /><circle cx=\"206.0\" cy=\"86.4\" r=\"4.5\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"214.2\" cy=\"100.8\" r=\"4.5\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"210.4\" cy=\"75.6\" r=\"4.5\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"218.1\" cy=\"92.2\" r=\"4.5\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"266.5\" cy=\"43.2\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"274.8\" cy=\"54.0\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"261.0\" cy=\"59.0\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"270.9\" cy=\"36.0\" r=\"4.5\" fill=\"#f59e0b\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"313.2\" cy=\"97.2\" r=\"4.5\" fill=\"#10b981\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"321.5\" cy=\"85.0\" r=\"4.5\" fill=\"#10b981\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"307.8\" cy=\"77.8\" r=\"4.5\" fill=\"#10b981\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"318.8\" cy=\"104.4\" r=\"4.5\" fill=\"#10b981\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"253\" y=\"128\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Three groups found</text></svg></div>Which technique has been applied?",
      options: ["Clustering", "Regression", "Classification", "Blocking"],
      ans: "Clustering",
      reason: "Dividing unlabelled data into groups of items with maximum similarity is clustering, an unsupervised technique."
    },
    {
      q: "If the outcome of a model is a continuous value, the model is called:",
      options: ["regression", "classification", "clustering", "association"],
      ans: "regression",
      reason: "A model that predicts a continuous value is a regression model; a model that predicts a discrete value is a classification model."
    },
    {
      q: "Predicting whether an employee will get a salary raise (yes or no) is an example of:",
      options: ["classification", "regression", "clustering", "smoothing"],
      ans: "classification",
      reason: "The result is a discrete value (yes or no), so it is a classification problem."
    },
    {
      q: "Predicting how much salary raise an employee will get is an example of:",
      options: ["regression", "classification", "clustering", "association"],
      ans: "regression",
      reason: "The result is an amount, which is a continuous value, so it is a regression problem."
    },
    {
      q: "In the equation y = mx + b of simple linear regression, m is the:",
      options: ["slope", "intercept", "predictor", "response"],
      ans: "slope",
      reason: "m is the slope of the line and b is the y-intercept. x is the predictor and y is the response."
    },
    {
      q: "<div class=\"stimulus\">A fitted line is drawn on a scatter plot.<svg viewBox=\"0 0 300 210\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"40\" y1=\"12\" x2=\"40\" y2=\"176\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40\" y1=\"176\" x2=\"286\" y2=\"176\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40.0\" y1=\"176\" x2=\"40.0\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"40.0\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"115.6923076923077\" y1=\"176\" x2=\"115.6923076923077\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"115.6923076923077\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">2</text><line x1=\"191.3846153846154\" y1=\"176\" x2=\"191.3846153846154\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"191.3846153846154\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">4</text><line x1=\"267.0769230769231\" y1=\"176\" x2=\"267.0769230769231\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"267.0769230769231\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">6</text><line x1=\"36\" y1=\"176.0\" x2=\"40\" y2=\"176.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"180.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"36\" y1=\"127.76470588235294\" x2=\"40\" y2=\"127.76470588235294\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"131.76470588235293\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">5</text><line x1=\"36\" y1=\"79.52941176470588\" x2=\"40\" y2=\"79.52941176470588\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"83.52941176470588\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">10</text><line x1=\"36\" y1=\"31.294117647058812\" x2=\"40\" y2=\"31.294117647058812\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"35.29411764705881\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">15</text><line x1=\"40.0\" y1=\"147.1\" x2=\"286.0\" y2=\"21.6\" stroke=\"#ef4444\" stroke-width=\"2\"/><circle cx=\"77.8\" cy=\"118.1\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"115.7\" cy=\"98.8\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"153.5\" cy=\"98.8\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"191.4\" cy=\"60.2\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"229.2\" cy=\"60.2\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"267.1\" cy=\"31.3\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"163.0\" y=\"206\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">x</text><text x=\"11\" y=\"94.0\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90 11 94.0)\" text-anchor=\"middle\">y</text></svg></div>What is the y-intercept of the line?",
      options: ["3", "2", "5", "0"],
      ans: "3",
      reason: "The y-intercept is the point where the line meets the y-axis, which is at y = 3. The slope (2) is the rise per unit of x."
    },
    {
      q: "A straight line passes through the points (1, 5) and (4, 11). What is its slope?",
      options: ["2", "3", "6", "0.5"],
      ans: "2",
      reason: "Slope = rise / run = (11 - 5) / (4 - 1) = 6 / 3 = 2."
    },
    {
      q: "A fitted model is y = 3x + 4. What value does it predict for y when x = 5?",
      options: ["19", "15", "23", "12"],
      ans: "19",
      reason: "y = 3(5) + 4 = 15 + 4 = 19."
    },
    {
      q: "A supermarket finds that customers who buy bread and milk often also buy tea. Which technique finds such a link?",
      options: ["Association rules", "Linear regression", "Classification", "Smoothing"],
      ans: "Association rules",
      reason: "Association rules show how likely a second item is bought when the first one is bought."
    },
    {
      q: "In k-means clustering, what does the letter k stand for?",
      options: ["The number of groups", "The number of labels", "The size of the dataset", "The slope of the line"],
      ans: "The number of groups",
      reason: "k is the specified number of groups (clusters) into which the data points are divided according to similarity."
    },
    {
      q: "Which of the following is a classification model?",
      options: ["Decision tree", "K-means", "Linear regression", "Association rules"],
      ans: "Decision tree",
      reason: "Decision trees, Naive Bayes, nearest neighbour, random forests and neural networks are classification models."
    },
    {
      q: "Which of the following is a tool for building a statistical model?",
      options: ["Weka", "Paint", "Notepad", "Photoshop"],
      ans: "Weka",
      reason: "MS-Excel, Weka, RStudio and Python are tools used to build statistical models."
    },
    {
      q: "Which online platform did the book use to run its model code in a web browser?",
      options: ["Colab", "Replit", "Kaggle", "GitHub"],
      ans: "Colab",
      reason: "The book opens Google Colab, an online compiler for Python. Kaggle and GitHub are places to find datasets."
    },
    {
      q: "Why is it not necessary to download a dataset for the book's first experimental model?",
      options: ["Random numbers can create one", "Models do not need data", "Colab already holds one", "Excel makes it by itself"],
      ans: "Random numbers can create one",
      reason: "A dataset can be created by generating random numbers with Python code and then fitting y = mx + c to it."
    },
    {
      q: "In the model code, the sklearn library supplies LinearRegression. What does model.fit(X, y) do?",
      options: ["Trains the model on the data", "Plots the data points", "Predicts new values", "Generates random numbers"],
      ans: "Trains the model on the data",
      reason: "fit() fits the line to the data. predict() is the function used afterwards to obtain predictions."
    },
    {
      q: "<div class=\"stimulus\">Part of the book's code:<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">model = LinearRegression()\nmodel.fit(X, y)\ny_pred = model.predict(X_new)</pre></div>Which function is used to obtain the predicted values?",
      options: ["model.predict()", "model.fit()", "model.scatter()", "model.show()"],
      ans: "model.predict()",
      reason: "After fitting, predict() gives the model's output for new input values."
    },
    {
      q: "<div class=\"stimulus\">Part of the book's plotting code:<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">plt.scatter(X, y, label='Original data')\nplt.plot(X_new, y_pred, 'r-', label='Line')\nplt.show()</pre></div>Which statement draws the red regression line?",
      options: ["plt.plot(X_new, y_pred, 'r-')", "plt.scatter(X, y, label='Data')", "plt.title('Regression line')", "plt.legend(loc='upper left')"],
      ans: "plt.plot(X_new, y_pred, 'r-')",
      reason: "plot() draws the line through the predicted points in red ('r-'). scatter() draws only the original data points."
    },
    {
      q: "Experimental design is about precise planning so that ___ can be prevented.",
      options: ["erroneous conclusions", "hardware faults", "network delays", "software licences"],
      ans: "erroneous conclusions",
      reason: "Experimental design makes sure the appropriate data and design are used for the analysis, so wrong conclusions are avoided."
    },
    {
      q: "Experimental design is used in which of the following fields?",
      options: ["Agriculture", "Calligraphy", "Tailoring", "Carpentry"],
      ans: "Agriculture",
      reason: "Experimental design is used in many disciplines such as engineering, psychology, agriculture and medicine."
    },
    {
      q: "<div class=\"stimulus\">Part of the experimental design flow is shown. One step is hidden.<svg viewBox=\"0 0 498 64\" style=\"width:100%;max-width:498px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ba\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"10\" y=\"10\" width=\"100\" height=\"44\" rx=\"6\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"60.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Question</text><line x1=\"110\" y1=\"32.0\" x2=\"135\" y2=\"32.0\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ba)\"/><rect x=\"136\" y=\"10\" width=\"100\" height=\"44\" rx=\"6\" fill=\"#fff3c4\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"186.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"18\" fill=\"#222\" font-weight=\"bold\">?</text><line x1=\"236\" y1=\"32.0\" x2=\"261\" y2=\"32.0\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ba)\"/><rect x=\"262\" y=\"10\" width=\"100\" height=\"44\" rx=\"6\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"312.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Variables</text><line x1=\"362\" y1=\"32.0\" x2=\"387\" y2=\"32.0\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ba)\"/><rect x=\"388\" y=\"10\" width=\"100\" height=\"44\" rx=\"6\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"438.0\" y=\"36.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Design</text></svg></div>Which step is hidden?",
      options: ["Develop hypotheses", "Calculate sample size", "Carry out experiment", "Report the results"],
      ans: "Develop hypotheses",
      reason: "The flow starts with the research question, then develops hypotheses, finds the variables and chooses the experimental design."
    },
    {
      q: "A variable that the researcher changes to see its effect is called the:",
      options: ["independent variable", "dependent variable", "confounding factor", "control group"],
      ans: "independent variable",
      reason: "The independent variable is set or changed by the experimenter; the dependent variable is the one that responds."
    },
    {
      q: "Employees with more work experience are expected to earn higher salaries. Which is the independent variable?",
      options: ["Years of experience", "Annual salary amount", "Employee's own name", "Size of the company"],
      ans: "Years of experience",
      reason: "Salary depends on experience, so salary is the dependent variable and years of experience is the independent variable."
    },
    {
      q: "In the salary example, employees with C++ skills may earn more than those with Java skills. This skill type is a:",
      options: ["confounding factor", "dependent variable", "random sample", "parameter"],
      ans: "confounding factor",
      reason: "A confounding factor is another variable that may also affect the result and must be taken into account."
    },
    {
      q: "Why is the sample size calculated before an experiment?",
      options: ["To get reliable results", "To avoid writing a report", "To remove all variables", "To shorten the experiment"],
      ans: "To get reliable results",
      reason: "The needed sample size is worked out so that the statistical results are appropriate and significant effects can be identified."
    },
    {
      q: "What does random assignment and selection of samples ensure?",
      options: ["Groups are similar and unbiased", "All groups get equal results", "The sample becomes smaller", "The hypothesis is always true"],
      ans: "Groups are similar and unbiased",
      reason: "Random selection makes the groups alike so that a change in the dependent variable is due to the independent variable only."
    },
    {
      q: "Why should an experiment be thoroughly documented?",
      options: ["So others can repeat it", "So that it runs faster", "So that it needs no analysis", "So that it uses fewer variables"],
      ans: "So others can repeat it",
      reason: "Good documentation allows other data scientists to repeat the experiment and get more or less the same results."
    },
    {
      q: "An expected relationship between variables, stated before the experiment, is called a:",
      options: ["hypothesis", "parameter", "sample", "dataset"],
      ans: "hypothesis",
      reason: "Hypotheses clarify the expected differences and correlations between the variables of the experiment."
    },
    {
      q: "A school tests whether a new teaching method improves marks. The marks obtained after the test are the:",
      options: ["dependent variable", "independent variable", "control group", "sample size"],
      ans: "dependent variable",
      reason: "The teaching method is changed by the researcher (independent). The marks respond to it, so they are the dependent variable."
    },
    {
      q: "Which of the following is a principle of experimental design?",
      options: ["Blocking", "Compiling", "Hashing", "Debugging"],
      ans: "Blocking",
      reason: "The principles are randomization, local control, blocking and replication."
    },
    {
      q: "Dividing participants into treatment groups by chance is the principle of:",
      options: ["randomization", "blocking", "replication", "local control"],
      ans: "randomization",
      reason: "Randomization divides people into treatment groups at random so that there is no bias or planned grouping."
    },
    {
      q: "A group that receives no new treatment and is used for comparison is the:",
      options: ["control group", "treatment group", "sample group", "focus group"],
      ans: "control group",
      reason: "The control group has not received the treatment, so its results can be compared with the treatment group."
    },
    {
      q: "Why is a control group used in an experiment?",
      options: ["To compare with treatment", "To increase the sample size", "To remove all variables", "To collect survey answers"],
      ans: "To compare with treatment",
      reason: "Comparing the treatment group with the control group shows whether the treatment is the cause of the outcome."
    },
    {
      q: "A medicine is tested on 100 patients who are split into two groups of 50 by a random draw. Which principle is applied?",
      options: ["Randomization", "Blocking", "Replication", "Local control"],
      ans: "Randomization",
      reason: "Making the groups by random draw is randomization; it spreads mild and severe cases by chance."
    },
    {
      q: "Patients are first separated into men and women, and each gender is then split between the new and the old medicine. Which principle is applied?",
      options: ["Blocking", "Randomization", "Replication", "Local control"],
      ans: "Blocking",
      reason: "Grouping participants by a trait that may affect the results (gender) is blocking."
    },
    {
      q: "<div class=\"stimulus\">A medicine trial has two blocks of patients.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Block</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Patients</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Women</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">56</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Men</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">44</td></tr></table></div>Each block is split equally between the new and the regular medicine. How many women get the new medicine?",
      options: ["28", "56", "22", "44"],
      ans: "28",
      reason: "Each block is halved: 56 / 2 = 28 women get the new medicine and 28 get the regular one."
    },
    {
      q: "<div class=\"stimulus\">Each block is split equally between the new and the regular medicine.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Block</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Patients</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Women</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">56</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Men</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">44</td></tr></table></div>What is the total number of patients in the new-medicine group?",
      options: ["50", "100", "44", "28"],
      ans: "50",
      reason: "The new-medicine group has half of each block: 28 women + 22 men = 50 patients."
    },
    {
      q: "Different data scientists repeat the same test on other patient groups to confirm that the new medicine works. Which principle is applied?",
      options: ["Replication", "Blocking", "Randomization", "Local control"],
      ans: "Replication",
      reason: "Repeating the experiment again and again is replication; it shows that the results are not a coincidence."
    },
    {
      q: "The principle of replication makes sure that the results are:",
      options: ["reliable and not by chance", "quicker and cheaper to collect", "hidden from other researchers", "identical in every experiment"],
      ans: "reliable and not by chance",
      reason: "If the same result is found each time the experiment is repeated, the outcome is reliable and not an accident."
    },
    {
      q: "Which term describes an association in which two variables change together?",
      options: ["Correlation", "Causation", "Sampling", "Classification"],
      ans: "Correlation",
      reason: "Correlation is a statistical measure of how the change in one variable goes with the change in another."
    },
    {
      q: "When a change in one variable brings about a change in the other, the relationship is called:",
      options: ["causation", "correlation", "randomization", "replication"],
      ans: "causation",
      reason: "Causation is a cause-and-effect relationship between the variables."
    },
    {
      q: "Which statement about correlation and causation is correct?",
      options: ["Correlation does not imply causation", "Correlation always implies causation", "Causation never implies correlation", "Both terms mean the same thing"],
      ans: "Correlation does not imply causation",
      reason: "Variables can move together without one causing the other, but if one causes the other they must be correlated."
    },
    {
      q: "A phone lags when its owner sends a text, but the real cause is five open game apps using the RAM. The owner's mistake is:",
      options: ["treating correlation as causation", "treating causation as correlation", "choosing a biased sample", "skipping data wrangling"],
      ans: "treating correlation as causation",
      reason: "The lag happened together with sending a text, but the text was not the cause. Low RAM was."
    },
    {
      q: "<div class=\"stimulus\">The scatter plot shows hours of study (x) and marks obtained (y) of eight students.<svg viewBox=\"0 0 300 210\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"40\" y1=\"12\" x2=\"40\" y2=\"176\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40\" y1=\"176\" x2=\"286\" y2=\"176\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40.0\" y1=\"176\" x2=\"40.0\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"40.0\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"94.66666666666666\" y1=\"176\" x2=\"94.66666666666666\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"94.66666666666666\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">2</text><line x1=\"149.33333333333331\" y1=\"176\" x2=\"149.33333333333331\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"149.33333333333331\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">4</text><line x1=\"204.0\" y1=\"176\" x2=\"204.0\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"204.0\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">6</text><line x1=\"258.66666666666663\" y1=\"176\" x2=\"258.66666666666663\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"258.66666666666663\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">8</text><line x1=\"36\" y1=\"176.0\" x2=\"40\" y2=\"176.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"180.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"36\" y1=\"143.2\" x2=\"40\" y2=\"143.2\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"147.2\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">20</text><line x1=\"36\" y1=\"110.4\" x2=\"40\" y2=\"110.4\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"114.4\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">40</text><line x1=\"36\" y1=\"77.6\" x2=\"40\" y2=\"77.6\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"81.6\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">60</text><line x1=\"36\" y1=\"44.80000000000001\" x2=\"40\" y2=\"44.80000000000001\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"48.80000000000001\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">80</text><line x1=\"36\" y1=\"12.0\" x2=\"40\" y2=\"12.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"16.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">100</text><circle cx=\"67.3\" cy=\"118.6\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"94.7\" cy=\"107.1\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"122.0\" cy=\"94.0\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"149.3\" cy=\"80.9\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"176.7\" cy=\"67.8\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"204.0\" cy=\"57.9\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"231.3\" cy=\"36.6\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"258.7\" cy=\"28.4\" r=\"3.8\" fill=\"#3b82f6\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"163.0\" y=\"206\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Hours of study</text><text x=\"11\" y=\"94.0\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90 11 94.0)\" text-anchor=\"middle\">Marks</text></svg></div>Which relationship does it show?",
      options: ["Positive correlation", "Negative correlation", "No correlation", "Perfect causation"],
      ans: "Positive correlation",
      reason: "As x increases, y also increases, so the variables have a positive correlation."
    },
    {
      q: "<div class=\"stimulus\">The scatter plot shows the price (x) and the number of units sold (y) of a product.<svg viewBox=\"0 0 300 210\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"40\" y1=\"12\" x2=\"40\" y2=\"176\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40\" y1=\"176\" x2=\"286\" y2=\"176\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40.0\" y1=\"176\" x2=\"40.0\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"40.0\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"94.66666666666666\" y1=\"176\" x2=\"94.66666666666666\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"94.66666666666666\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">20</text><line x1=\"149.33333333333331\" y1=\"176\" x2=\"149.33333333333331\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"149.33333333333331\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">40</text><line x1=\"204.0\" y1=\"176\" x2=\"204.0\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"204.0\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">60</text><line x1=\"258.66666666666663\" y1=\"176\" x2=\"258.66666666666663\" y2=\"180\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"258.66666666666663\" y=\"191\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">80</text><line x1=\"36\" y1=\"176.0\" x2=\"40\" y2=\"176.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"180.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"36\" y1=\"143.2\" x2=\"40\" y2=\"143.2\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"147.2\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">20</text><line x1=\"36\" y1=\"110.4\" x2=\"40\" y2=\"110.4\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"114.4\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">40</text><line x1=\"36\" y1=\"77.6\" x2=\"40\" y2=\"77.6\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"81.6\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">60</text><line x1=\"36\" y1=\"44.80000000000001\" x2=\"40\" y2=\"44.80000000000001\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"48.80000000000001\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">80</text><line x1=\"36\" y1=\"12.0\" x2=\"40\" y2=\"12.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"16.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">100</text><circle cx=\"67.3\" cy=\"28.4\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"94.7\" cy=\"44.8\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"122.0\" cy=\"57.9\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"149.3\" cy=\"77.6\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"176.7\" cy=\"97.3\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"204.0\" cy=\"110.4\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"231.3\" cy=\"126.8\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"258.7\" cy=\"139.9\" r=\"3.8\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"163.0\" y=\"206\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Price</text><text x=\"11\" y=\"94.0\" font-size=\"11\" font-weight=\"bold\" transform=\"rotate(-90 11 94.0)\" text-anchor=\"middle\">Units sold</text></svg></div>Which relationship does it show?",
      options: ["Negative correlation", "Positive correlation", "No correlation", "Perfect causation"],
      ans: "Negative correlation",
      reason: "As the price rises, the units sold fall, so the correlation is negative."
    },
    {
      q: "Ice-cream sales and drowning cases both rise in summer. What is the most likely explanation?",
      options: ["Hot weather affects both", "Ice cream causes drowning", "Drowning raises ice-cream sales", "The data must be invalid"],
      ans: "Hot weather affects both",
      reason: "The two are correlated, but neither causes the other. A third factor, hot weather, drives both."
    },
    {
      q: "The correlation coefficient is used to judge the:",
      options: ["linear association", "size of a sample", "number of groups", "cost of an experiment"],
      ans: "linear association",
      reason: "The correlation coefficient shows how strong the linear association between two variables is."
    },
    {
      q: "The complete set of items or people under study is called the:",
      options: ["population", "sample", "statistic", "variable"],
      ans: "population",
      reason: "A population is a complete collection of similar items or events of interest."
    },
    {
      q: "A subset of a population is called a:",
      options: ["sample", "parameter", "population", "block"],
      ans: "sample",
      reason: "A sample is a part of the population; a random sample gives every member an equal chance of selection."
    },
    {
      q: "In a random sample, each member of the population has:",
      options: ["an equal chance of selection", "no chance of selection", "a fixed order of selection", "a double chance of selection"],
      ans: "an equal chance of selection",
      reason: "A random sample is chosen so that every member of the population is equally likely to be selected."
    },
    {
      q: "A number that describes an aspect of the whole population is a:",
      options: ["parameter", "statistic", "sample", "variable"],
      ans: "parameter",
      reason: "A parameter describes the entire population. It is a fixed number that is usually unknown."
    },
    {
      q: "A number that describes a characteristic of a sample is a:",
      options: ["statistic", "parameter", "population", "dataset"],
      ans: "statistic",
      reason: "A statistic describes a sample and is used to estimate the matching parameter of the population."
    },
    {
      q: "The mean weight of 100 Persian cats chosen from the whole group of Persian cats is a:",
      options: ["statistic", "parameter", "population", "variable"],
      ans: "statistic",
      reason: "It describes a sample of 100 cats, so it is a statistic."
    },
    {
      q: "The average income of all government employees in Pakistan is a:",
      options: ["parameter", "statistic", "sample", "variable"],
      ans: "parameter",
      reason: "It describes the entire population of government employees, so it is a parameter."
    },
    {
      q: "<div class=\"stimulus\">Two values were calculated from university data.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Description</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Mean age</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">All 30,000 students of the university</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">21.4</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">200 students who answered a survey</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">20.9</td></tr></table></div>Which value is the parameter?",
      options: ["21.4", "20.9", "200", "30,000"],
      ans: "21.4",
      reason: "The mean age of all 30,000 students describes the whole population, so it is the parameter. 20.9 comes from a sample, so it is a statistic."
    },
    {
      q: "Parameters are usually unknown, so they are estimated using:",
      options: ["sample statistics", "population sizes", "hypotheses", "control groups"],
      ans: "sample statistics",
      reason: "Statistics calculated from a sample give estimates of the population parameters, with some uncertainty."
    },
    {
      q: "<div class=\"stimulus\">The outer circle shows all items studied. The dashed circle shows the items chosen.<svg viewBox=\"0 0 310 180\" style=\"width:100%;max-width:310px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><ellipse cx=\"110\" cy=\"85\" rx=\"100\" ry=\"72\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"61.0\" cy=\"50.2\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"131.4\" cy=\"30.9\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"105.0\" cy=\"29.4\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"163.1\" cy=\"92.2\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"169.7\" cy=\"68.6\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"131.6\" cy=\"73.6\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"71.4\" cy=\"90.6\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"52.2\" cy=\"73.1\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"146.7\" cy=\"87.2\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"96.1\" cy=\"139.6\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"113.0\" cy=\"61.9\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"118.5\" cy=\"64.3\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"89.1\" cy=\"71.1\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"183.9\" cy=\"85.6\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"119.3\" cy=\"111.1\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"183.5\" cy=\"78.9\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"91.1\" cy=\"140.2\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"46.7\" cy=\"73.4\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"131.6\" cy=\"139.0\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"81.5\" cy=\"31.9\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"143.9\" cy=\"65.3\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"89.3\" cy=\"103.1\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"122.3\" cy=\"96.7\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"90.6\" cy=\"127.7\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"175.2\" cy=\"86.0\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"86.9\" cy=\"112.5\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"132.8\" cy=\"48.4\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"88.0\" cy=\"121.9\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"104.6\" cy=\"71.7\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"121.8\" cy=\"83.6\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"109.7\" cy=\"31.7\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"179.8\" cy=\"90.8\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"69.9\" cy=\"117.9\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"127.1\" cy=\"85.7\" r=\"3.2\" fill=\"#93c5fd\" stroke=\"#222\" stroke-width=\"1.6\"/><ellipse cx=\"135\" cy=\"85\" rx=\"32\" ry=\"26\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"5 3\"/><text x=\"110\" y=\"172\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Outer circle = all items</text><text x=\"222\" y=\"82\" text-anchor=\"start\" font-size=\"10\" fill=\"#222\"></text><text x=\"200\" y=\"40\" text-anchor=\"start\" font-size=\"10\" fill=\"#ef4444\">dashed circle =</text><text x=\"200\" y=\"54\" text-anchor=\"start\" font-size=\"10\" fill=\"#ef4444\">selected group</text></svg></div>What does the dashed circle represent?",
      options: ["A sample", "A population", "A parameter", "A block"],
      ans: "A sample",
      reason: "The chosen part inside the whole group is a sample; the outer circle is the population."
    },
    {
      q: "Data that is collected firsthand, directly from the main source, is called:",
      options: ["primary data", "secondary data", "derived data", "archived data"],
      ans: "primary data",
      reason: "Primary data has not been collected in the past; it is gathered directly, for example through interviews, observations or surveys."
    },
    {
      q: "Which of the following is a primary data collection method?",
      options: ["Interviews", "Libraries", "Government archives", "The Internet"],
      ans: "Interviews",
      reason: "Interviews, observations, surveys and questionnaires, focus groups and oral histories are primary methods. The others are secondary sources."
    },
    {
      q: "A student uses crime figures published in a government archive for a project. This is ___ data collection.",
      options: ["secondary", "primary", "firsthand", "observed"],
      ans: "secondary",
      reason: "The data was already collected by someone else, so it is secondary data."
    },
    {
      q: "Which of the following is a secondary data collection method?",
      options: ["Government archives", "Telephone interviews", "Field observations", "Online questionnaires"],
      ans: "Government archives",
      reason: "Secondary data comes from existing sources such as the Internet, government archives and libraries."
    },
    {
      q: "A researcher watches people walking their pets on a busy street to decide whether to open a pet food store. Which method is used?",
      options: ["Observation", "Interview", "Focus group", "Oral history"],
      ans: "Observation",
      reason: "Watching a situation and recording the findings is the observation method."
    },
    {
      q: "A group of people who share a common interest is questioned together to learn why they think in a certain way. Which method is this?",
      options: ["Focus group", "Interview", "Survey", "Observation"],
      ans: "Focus group",
      reason: "A focus group is like an interview but is conducted with a group of people who have something in common."
    },
    {
      q: "A questionnaire is posted on the Internet to get answers from people all over the world. Which method is this?",
      options: ["Survey", "Focus group", "Oral history", "Observation"],
      ans: "Survey",
      reason: "Surveys and questionnaires reach large groups of people and can be conducted face-to-face, by mail or on the Internet."
    },
    {
      q: "A researcher asks elderly people about their experiences of a particular flood in which they were involved. Which method is this?",
      options: ["Oral history", "Survey", "Observation", "Library research"],
      ans: "Oral history",
      reason: "Oral histories collect the opinions and experiences of people about one particular event they were involved in."
    },
    {
      q: "Why is data from government archives a good secondary source?",
      options: ["It is authentic and verifiable", "It is always freely available", "It holds only recent records", "It needs no permission to use"],
      ans: "It is authentic and verifiable",
      reason: "The main advantage is authenticity and verifiability. The challenge is that some data, such as criminal records, is classified."
    },
    {
      q: "Which of the following is an example of primary data?",
      options: ["Answers from her own survey", "A library's annual report", "A government archive file", "An article found on the Internet"],
      ans: "Answers from her own survey",
      reason: "Data she collects herself from respondents is firsthand. The other three already exist in published sources, so they are secondary."
    },
    {
      q: "A/B testing is also known as:",
      options: ["split testing", "blind testing", "load testing", "unit testing"],
      ans: "split testing",
      reason: "A/B testing, or split testing, compares two versions of something to find out which performs better."
    },
    {
      q: "In an A/B test of a new app feature, the two versions are shown to:",
      options: ["randomly assigned user groups", "all users at the same time", "only the company's own staff", "only brand-new customers"],
      ans: "randomly assigned user groups",
      reason: "Users are randomly assigned to version A or B, and data on their interactions is then compared."
    },
    {
      q: "YouTube tests a new layout. Which group sees the existing layout?",
      options: ["Group A, the control group", "Group B, the experimental group", "Both of the groups", "Neither of the groups"],
      ans: "Group A, the control group",
      reason: "Group A is the control group with the existing version, and group B is the experimental group with the change."
    },
    {
      q: "<div class=\"stimulus\">An online shop tested two versions of a page on different visitors.<table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Page</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Visitors</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Buyers</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">A</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">500</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">40</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">B</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">500</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">55</td></tr></table></div>Which page performs better?",
      options: ["B, by 3 percentage points", "A, by 3 percentage points", "B, by 15 percentage points", "B, by 30 percentage points"],
      ans: "B, by 3 percentage points",
      reason: "Page A converts 40 / 500 = 8% and page B 55 / 500 = 11%. B is better by 3 percentage points."
    },
    {
      q: "Which Python library does the book install to read and analyse a CSV dataset?",
      options: ["pandas", "turtle", "random", "datetime"],
      ans: "pandas",
      reason: "The command pip install pandas installs the library, which is the most important one for data analysis."
    },
    {
      q: "Which pandas function reads a CSV file into the program?",
      options: ["pd.read_csv()", "pd.open_csv()", "pd.load_file()", "pd.get_csv()"],
      ans: "pd.read_csv()",
      reason: "read_csv() loads the file, for example data = pd.read_csv(\"tips.csv\")."
    },
    {
      q: "<div class=\"stimulus\">Part of the book's code:<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">data = pd.read_csv(\"tips.csv\")\ndisplay(data.head(10))</pre></div>What does data.head(10) show?",
      options: ["The first 10 rows", "The last 10 rows", "Ten random rows", "Only the 10th row"],
      ans: "The first 10 rows",
      reason: "head(n) displays the top n rows of the table."
    },
    {
      q: "Mean, median and mode are measures of:",
      options: ["central tendency", "dispersion", "correlation", "causation"],
      ans: "central tendency",
      reason: "They show how closely similar the data is around a typical value; dispersion shows how scattered it is."
    },
    {
      q: "<div class=\"stimulus\">A list of six values.<svg viewBox=\"0 0 260 60\" style=\"width:100%;max-width:260px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">6</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">2</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">9</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">4</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">4</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><rect x=\"210\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">5</text><text x=\"230.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text></svg></div>What is the median of the data?",
      options: ["4.5", "4", "5", "6"],
      ans: "4.5",
      reason: "Sorted data is 2, 4, 4, 5, 6, 9. With six values the median is the mean of the middle two: (4 + 5) / 2 = 4.5."
    },
    {
      q: "<div class=\"stimulus\">A list of six values.<svg viewBox=\"0 0 260 60\" style=\"width:100%;max-width:260px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"30.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">6</text><text x=\"30.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">0</text><rect x=\"50\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"70.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">2</text><text x=\"70.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">1</text><rect x=\"90\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"110.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">9</text><text x=\"110.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">2</text><rect x=\"130\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"150.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">4</text><text x=\"150.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">3</text><rect x=\"170\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"190.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">4</text><text x=\"190.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">4</text><rect x=\"210\" y=\"6\" width=\"40\" height=\"30\" fill=\"white\" stroke=\"#222\" stroke-width=\"1.5\"/><text x=\"230.0\" y=\"26\" text-anchor=\"middle\" font-size=\"13\" fill=\"#222\" font-weight=\"bold\">5</text><text x=\"230.0\" y=\"52\" text-anchor=\"middle\" font-size=\"10\" fill=\"#666\">5</text></svg></div>What is the range (a measure of spread) of the data?",
      options: ["7", "6", "11", "4.5"],
      ans: "7",
      reason: "Range = largest value - smallest value = 9 - 2 = 7."
    },
    {
      q: "<div class=\"stimulus\">The bar chart shows the number of tips given on four days.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"150.0\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Tips per day</text><line x1=\"38\" y1=\"26\" x2=\"38\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"38\" y1=\"160\" x2=\"292\" y2=\"160\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"34\" y1=\"160.0\" x2=\"38\" y2=\"160.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"31\" y=\"164.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"38\" y1=\"160.0\" x2=\"292\" y2=\"160.0\" stroke=\"#ddd\"/><line x1=\"34\" y1=\"126.5\" x2=\"38\" y2=\"126.5\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"31\" y=\"130.5\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">5</text><line x1=\"38\" y1=\"126.5\" x2=\"292\" y2=\"126.5\" stroke=\"#ddd\"/><line x1=\"34\" y1=\"93.0\" x2=\"38\" y2=\"93.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"31\" y=\"97.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">10</text><line x1=\"38\" y1=\"93.0\" x2=\"292\" y2=\"93.0\" stroke=\"#ddd\"/><line x1=\"34\" y1=\"59.5\" x2=\"38\" y2=\"59.5\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"31\" y=\"63.5\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">15</text><line x1=\"38\" y1=\"59.5\" x2=\"292\" y2=\"59.5\" stroke=\"#ddd\"/><line x1=\"34\" y1=\"26.0\" x2=\"38\" y2=\"26.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"31\" y=\"30.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">20</text><line x1=\"38\" y1=\"26.0\" x2=\"292\" y2=\"26.0\" stroke=\"#ddd\"/><rect x=\"46.0\" y=\"39.4\" width=\"45.5\" height=\"120.6\" fill=\"#3b82f6\" stroke=\"#222\"/><text x=\"68.75\" y=\"174\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Sat</text><rect x=\"107.5\" y=\"66.2\" width=\"45.5\" height=\"93.8\" fill=\"#3b82f6\" stroke=\"#222\"/><text x=\"130.25\" y=\"174\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Sun</text><rect x=\"169.0\" y=\"99.7\" width=\"45.5\" height=\"60.3\" fill=\"#3b82f6\" stroke=\"#222\"/><text x=\"191.75\" y=\"174\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Thu</text><rect x=\"230.5\" y=\"119.8\" width=\"45.5\" height=\"40.2\" fill=\"#3b82f6\" stroke=\"#222\"/><text x=\"253.25\" y=\"174\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Fri</text></svg></div>On which day were the most tips given?",
      options: ["Sat", "Sun", "Thu", "Fri"],
      ans: "Sat",
      reason: "The tallest bar is Saturday at 18 tips."
    },
    {
      q: "<div class=\"stimulus\">The pie chart shows the share of tips given on four days.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><path d=\"M90,95.0 L90.0,25.0 A70,70 0 0 1 131.1,151.6 Z\" fill=\"#3b82f6\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"190\" y=\"40\" width=\"12\" height=\"12\" fill=\"#3b82f6\"/><text x=\"208\" y=\"51\" text-anchor=\"start\" font-size=\"11\" fill=\"#222\">Sat (40%)</text><path d=\"M90,95.0 L131.1,151.6 A70,70 0 0 1 33.4,136.1 Z\" fill=\"#f59e0b\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"190\" y=\"64\" width=\"12\" height=\"12\" fill=\"#f59e0b\"/><text x=\"208\" y=\"75\" text-anchor=\"start\" font-size=\"11\" fill=\"#222\">Sun (25%)</text><path d=\"M90,95.0 L33.4,136.1 A70,70 0 0 1 33.4,53.9 Z\" fill=\"#10b981\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"190\" y=\"88\" width=\"12\" height=\"12\" fill=\"#10b981\"/><text x=\"208\" y=\"99\" text-anchor=\"start\" font-size=\"11\" fill=\"#222\">Thu (20%)</text><path d=\"M90,95.0 L33.4,53.9 A70,70 0 0 1 90.0,25.0 Z\" fill=\"#ef4444\" stroke=\"#fff\" stroke-width=\"2\"/><rect x=\"190\" y=\"112\" width=\"12\" height=\"12\" fill=\"#ef4444\"/><text x=\"208\" y=\"123\" text-anchor=\"start\" font-size=\"11\" fill=\"#222\">Fri (15%)</text></svg></div>What percentage of the tips was given on Thursday and Friday together?",
      options: ["35%", "20%", "15%", "65%"],
      ans: "35%",
      reason: "Thursday 20% + Friday 15% = 35%."
    },
    {
      q: "<div class=\"stimulus\">The line chart shows monthly sales of a shop.<svg viewBox=\"0 0 300 190\" style=\"width:100%;max-width:300px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><text x=\"150.0\" y=\"16\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">Monthly sales (units)</text><line x1=\"40\" y1=\"26\" x2=\"40\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40\" y1=\"158\" x2=\"286\" y2=\"158\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"36\" y1=\"158.0\" x2=\"40\" y2=\"158.0\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"162.0\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">0</text><line x1=\"40\" y1=\"158.0\" x2=\"286\" y2=\"158.0\" stroke=\"#eee\"/><line x1=\"36\" y1=\"127.79405034324942\" x2=\"40\" y2=\"127.79405034324942\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"131.7940503432494\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">10</text><line x1=\"40\" y1=\"127.79405034324942\" x2=\"286\" y2=\"127.79405034324942\" stroke=\"#eee\"/><line x1=\"36\" y1=\"97.58810068649885\" x2=\"40\" y2=\"97.58810068649885\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"101.58810068649885\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">20</text><line x1=\"40\" y1=\"97.58810068649885\" x2=\"286\" y2=\"97.58810068649885\" stroke=\"#eee\"/><line x1=\"36\" y1=\"67.38215102974827\" x2=\"40\" y2=\"67.38215102974827\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"71.38215102974827\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">30</text><line x1=\"40\" y1=\"67.38215102974827\" x2=\"286\" y2=\"67.38215102974827\" stroke=\"#eee\"/><line x1=\"36\" y1=\"37.176201372997696\" x2=\"40\" y2=\"37.176201372997696\" stroke=\"#222\" stroke-width=\"1.6\" /><text x=\"33\" y=\"41.176201372997696\" text-anchor=\"end\" font-size=\"10\" fill=\"#222\">40</text><line x1=\"40\" y1=\"37.176201372997696\" x2=\"286\" y2=\"37.176201372997696\" stroke=\"#eee\"/><text x=\"54.0\" y=\"172\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Jan</text><text x=\"97.6\" y=\"172\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Feb</text><text x=\"141.2\" y=\"172\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Mar</text><text x=\"184.8\" y=\"172\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Apr</text><text x=\"228.4\" y=\"172\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">May</text><text x=\"272.0\" y=\"172\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Jun</text><polyline points=\"54.0,97.6 97.6,79.5 141.2,85.5 184.8,58.3 228.4,43.2 272.0,67.4\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2.2\"/><circle cx=\"54.0\" cy=\"97.6\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"97.6\" cy=\"79.5\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"141.2\" cy=\"85.5\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"184.8\" cy=\"58.3\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"228.4\" cy=\"43.2\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"272.0\" cy=\"67.4\" r=\"3.5\" fill=\"#ef4444\" stroke=\"#222\" stroke-width=\"1.6\"/></svg></div>In which month were the sales highest?",
      options: ["May", "Apr", "Feb", "Jun"],
      ans: "May",
      reason: "The line reaches its highest point in May."
    },
    {
      q: "<div class=\"stimulus\">Part of the book's matplotlib code:<pre style=\"background:#f4f6fa;border:1px solid #dde5f0;border-radius:6px;padding:8px 10px;margin:6px 0;overflow-x:auto;font-size:13px;line-height:1.45;text-align:left;white-space:pre\">plt.hist(data['total_bill'])\nplt.title(\"Histogram\")\nplt.show()</pre></div>Which statement draws the histogram?",
      options: ["plt.hist(data['total_bill'])", "plt.title(\"Histogram\")", "plt.boxplot(data['total_bill'])", "plt.pie(data['total_bill'])"],
      ans: "plt.hist(data['total_bill'])",
      reason: "hist() computes how often values fall in each bin and draws the histogram. title() only adds the heading and show() displays the figure."
    }
    ];
  }
});
