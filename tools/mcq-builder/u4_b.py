# -*- coding: utf-8 -*-
from lib import *
C = 4
T5 = "4.2.1 Experimental design: flow and variables"
T6 = "4.2.1 Principles of experimental design"
T7 = "4.2.2 Correlation and causation"
T8 = "4.2.3-4.2.4 Population, sample, parameter, statistic"

# ---------------- flow & variables ----------------
add(C, T5, 'K', "Experimental design is about precise planning so that ___ can be prevented.", "erroneous conclusions",
    ["hardware faults", "network delays", "software licences"],
    "Experimental design makes sure the appropriate data and design are used for the analysis, so wrong conclusions are avoided.")
add(C, T5, 'K', "Experimental design is used in which of the following fields?", "Agriculture",
    ["Calligraphy", "Tailoring", "Carpentry"],
    "Experimental design is used in many disciplines such as engineering, psychology, agriculture and medicine.")
add(C, T5, 'U', stim("Part of the experimental design flow is shown. One step is hidden.", boxes_svg(["Question", "Hypotheses", "Variables", "Design"], missing=1, bw=100, gap=26)) + "Which step is hidden?", "Develop hypotheses",
    ["Calculate sample size", "Carry out experiment", "Report the results"],
    "The flow starts with the research question, then develops hypotheses, finds the variables and chooses the experimental design.")
add(C, T5, 'K', "A variable that the researcher changes to see its effect is called the:", "independent variable",
    ["dependent variable", "confounding factor", "control group"],
    "The independent variable is set or changed by the experimenter; the dependent variable is the one that responds.")
add(C, T5, 'U', "Employees with more work experience are expected to earn higher salaries. Which is the independent variable?", "Years of experience",
    ["Annual salary amount", "Employee's own name", "Size of the company"],
    "Salary depends on experience, so salary is the dependent variable and years of experience is the independent variable.")
add(C, T5, 'U', "In the salary example, employees with C++ skills may earn more than those with Java skills. This skill type is a:", "confounding factor",
    ["dependent variable", "random sample", "parameter"],
    "A confounding factor is another variable that may also affect the result and must be taken into account.")
add(C, T5, 'U', "Why is the sample size calculated before an experiment?", "To get reliable results",
    ["To avoid writing a report", "To remove all variables", "To shorten the experiment"],
    "The needed sample size is worked out so that the statistical results are appropriate and significant effects can be identified.")
add(C, T5, 'U', "What does random assignment and selection of samples ensure?", "Groups are similar and unbiased",
    ["All groups get equal results", "The sample becomes smaller", "The hypothesis is always true"],
    "Random selection makes the groups alike so that a change in the dependent variable is due to the independent variable only.")
add(C, T5, 'U', "Why should an experiment be thoroughly documented?", "So others can repeat it",
    ["So that it runs faster", "So that it needs no analysis", "So that it uses fewer variables"],
    "Good documentation allows other data scientists to repeat the experiment and get more or less the same results.")
add(C, T5, 'U', "An expected relationship between variables, stated before the experiment, is called a:", "hypothesis",
    ["parameter", "sample", "dataset"],
    "Hypotheses clarify the expected differences and correlations between the variables of the experiment.")
add(C, T5, 'A', "A school tests whether a new teaching method improves marks. The marks obtained after the test are the:", "dependent variable",
    ["independent variable", "control group", "sample size"],
    "The teaching method is changed by the researcher (independent). The marks respond to it, so they are the dependent variable.")

# ---------------- principles ----------------
add(C, T6, 'K', "Which of the following is a principle of experimental design?", "Blocking",
    ["Compiling", "Hashing", "Debugging"],
    "The principles are randomization, local control, blocking and replication.")
add(C, T6, 'K', "Dividing participants into treatment groups by chance is the principle of:", "randomization",
    ["blocking", "replication", "local control"],
    "Randomization divides people into treatment groups at random so that there is no bias or planned grouping.")
add(C, T6, 'K', "A group that receives no new treatment and is used for comparison is the:", "control group",
    ["treatment group", "sample group", "focus group"],
    "The control group has not received the treatment, so its results can be compared with the treatment group.")
add(C, T6, 'U', "Why is a control group used in an experiment?", "To compare with treatment",
    ["To increase the sample size", "To remove all variables", "To collect survey answers"],
    "Comparing the treatment group with the control group shows whether the treatment is the cause of the outcome.")
add(C, T6, 'U', "A medicine is tested on 100 patients who are split into two groups of 50 by a random draw. Which principle is applied?", "Randomization",
    ["Blocking", "Replication", "Local control"],
    "Making the groups by random draw is randomization; it spreads mild and severe cases by chance.")
add(C, T6, 'U', "Patients are first separated into men and women, and each gender is then split between the new and the old medicine. Which principle is applied?", "Blocking",
    ["Randomization", "Replication", "Local control"],
    "Grouping participants by a trait that may affect the results (gender) is blocking.")
women, men = 56, 44
add(C, T6, 'A', stim("A medicine trial has two blocks of patients.", truth_html(["Block", "Patients"], [["Women", "56"], ["Men", "44"]])) + "Each block is split equally between the new and the regular medicine. How many women get the new medicine?", str(women // 2),
    ["56", "22", "44"],
    "Each block is halved: 56 / 2 = 28 women get the new medicine and 28 get the regular one.")
add(C, T6, 'A', stim("Each block is split equally between the new and the regular medicine.", truth_html(["Block", "Patients"], [["Women", "56"], ["Men", "44"]])) + "What is the total number of patients in the new-medicine group?", str(women // 2 + men // 2),
    ["100", "44", "28"],
    "The new-medicine group has half of each block: 28 women + 22 men = 50 patients.")
add(C, T6, 'U', "Different data scientists repeat the same test on other patient groups to confirm that the new medicine works. Which principle is applied?", "Replication",
    ["Blocking", "Randomization", "Local control"],
    "Repeating the experiment again and again is replication; it shows that the results are not a coincidence.")
add(C, T6, 'U', "The principle of replication makes sure that the results are:", "reliable and not by chance",
    ["quicker and cheaper to collect", "hidden from other researchers", "identical in every experiment"],
    "If the same result is found each time the experiment is repeated, the outcome is reliable and not an accident.")

# ---------------- correlation & causation ----------------
add(C, T7, 'K', "Which term describes an association in which two variables change together?", "Correlation",
    ["Causation", "Sampling", "Classification"],
    "Correlation is a statistical measure of how the change in one variable goes with the change in another.")
add(C, T7, 'K', "When a change in one variable brings about a change in the other, the relationship is called:", "causation",
    ["correlation", "randomization", "replication"],
    "Causation is a cause-and-effect relationship between the variables.")
add(C, T7, 'U', "Which statement about correlation and causation is correct?", "Correlation does not imply causation",
    ["Correlation always implies causation", "Causation never implies correlation", "Both terms mean the same thing"],
    "Variables can move together without one causing the other, but if one causes the other they must be correlated.")
add(C, T7, 'U', "A phone lags when its owner sends a text, but the real cause is five open game apps using the RAM. The owner's mistake is:", "treating correlation as causation",
    ["treating causation as correlation", "choosing a biased sample", "skipping data wrangling"],
    "The lag happened together with sending a text, but the text was not the cause. Low RAM was.")
hrs = [(1, 35), (2, 42), (3, 50), (4, 58), (5, 66), (6, 72), (7, 85), (8, 90)]
add(C, T7, 'U', stim("The scatter plot shows hours of study (x) and marks obtained (y) of eight students.", scatter_svg(hrs, xmax=9, ymax=100, xl='Hours of study', yl='Marks')) + "Which relationship does it show?", "Positive correlation",
    ["Negative correlation", "No correlation", "Perfect causation"],
    "As x increases, y also increases, so the variables have a positive correlation.")
price = [(10, 90), (20, 80), (30, 72), (40, 60), (50, 48), (60, 40), (70, 30), (80, 22)]
add(C, T7, 'U', stim("The scatter plot shows the price (x) and the number of units sold (y) of a product.", scatter_svg(price, xmax=90, ymax=100, xl='Price', yl='Units sold', color='#ef4444')) + "Which relationship does it show?", "Negative correlation",
    ["Positive correlation", "No correlation", "Perfect causation"],
    "As the price rises, the units sold fall, so the correlation is negative.")
add(C, T7, 'A', "Ice-cream sales and drowning cases both rise in summer. What is the most likely explanation?", "Hot weather affects both",
    ["Ice cream causes drowning", "Drowning raises ice-cream sales", "The data must be invalid"],
    "The two are correlated, but neither causes the other. A third factor, hot weather, drives both.")
add(C, T7, 'K', "The correlation coefficient is used to judge the:", "linear association",
    ["size of a sample", "number of groups", "cost of an experiment"],
    "The correlation coefficient shows how strong the linear association between two variables is.")

# ---------------- population / parameter ----------------
add(C, T8, 'K', "The complete set of items or people under study is called the:", "population",
    ["sample", "statistic", "variable"],
    "A population is a complete collection of similar items or events of interest.")
add(C, T8, 'K', "A subset of a population is called a:", "sample",
    ["parameter", "population", "block"],
    "A sample is a part of the population; a random sample gives every member an equal chance of selection.")
add(C, T8, 'U', "In a random sample, each member of the population has:", "an equal chance of selection",
    ["no chance of selection", "a fixed order of selection", "a double chance of selection"],
    "A random sample is chosen so that every member of the population is equally likely to be selected.")
add(C, T8, 'K', "A number that describes an aspect of the whole population is a:", "parameter",
    ["statistic", "sample", "variable"],
    "A parameter describes the entire population. It is a fixed number that is usually unknown.")
add(C, T8, 'K', "A number that describes a characteristic of a sample is a:", "statistic",
    ["parameter", "population", "dataset"],
    "A statistic describes a sample and is used to estimate the matching parameter of the population.")
add(C, T8, 'U', "The mean weight of 100 Persian cats chosen from the whole group of Persian cats is a:", "statistic",
    ["parameter", "population", "variable"],
    "It describes a sample of 100 cats, so it is a statistic.")
add(C, T8, 'U', "The average income of all government employees in Pakistan is a:", "parameter",
    ["statistic", "sample", "variable"],
    "It describes the entire population of government employees, so it is a parameter.")
add(C, T8, 'A', stim("Two values were calculated from university data.", truth_html(["Description", "Mean age"], [["All 30,000 students of the university", "21.4"], ["200 students who answered a survey", "20.9"]])) + "Which value is the parameter?", "21.4",
    ["20.9", "200", "30,000"],
    "The mean age of all 30,000 students describes the whole population, so it is the parameter. 20.9 comes from a sample, so it is a statistic.")
add(C, T8, 'U', "Parameters are usually unknown, so they are estimated using:", "sample statistics",
    ["population sizes", "hypotheses", "control groups"],
    "Statistics calculated from a sample give estimates of the population parameters, with some uncertainty.")
add(C, T8, 'U', stim("The outer circle shows all items studied. The dashed circle shows the items chosen.", pop_sample_svg()) + "What does the dashed circle represent?", "A sample",
    ["A population", "A parameter", "A block"],
    "The chosen part inside the whole group is a sample; the outer circle is the population.")
