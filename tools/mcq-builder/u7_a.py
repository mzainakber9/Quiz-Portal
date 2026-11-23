# -*- coding: utf-8 -*-
from lib import *
C = 7
R0 = "7.0 Digital literacy and research questions"
R1 = "7.1 Method, strategy and data collection strategy"
R2 = "7.1.1 Qualitative interviews: nature"
R3 = "7.1.1 Steps of a qualitative interview"
R4 = "7.1.1 Case study: qualitative interview"

# ---------------- 7.0 ----------------
add(C, R0, 'K', "The ability to find, create, evaluate, communicate and share digital content is called:", "digital literacy",
    ["data encryption", "computer programming", "network security"],
    "Digital literacy is the ability to find, create, evaluate, communicate and share digital content using technologies such as phones, social media and the Internet.")
add(C, R0, 'K', "The goal that is answered after collecting data, evaluating it and reaching a conclusion is the:", "research question",
    ["survey form", "interview guide", "data prototype"],
    "The conclusion of the research gives the ultimate answer to the research question for which the whole procedure was designed.")
add(C, R0, 'U', stim("A student narrows down a topic in three stages.", boxes_svg(["Earthquakes", "Impact on\nhuman mind", "Impact in hilly\nareas of Pakistan"], bw=130, gap=24, hh=50)) + "What has the student done?", "Narrowed the question",
    ["Collected the data", "Transcribed an interview", "Built a prototype"],
    "She started from a broad topic and narrowed it down to a specific group and place, which sets clear boundaries for the research.")
add(C, R0, 'U', "Why should a research question have clear boundaries?", "It shows what will be studied",
    ["It makes the survey shorter", "It removes the need for data", "It replaces the hypothesis"],
    "Clear boundaries state which matter will be addressed and which part is kept aside for future research.")
add(C, R0, 'K', "Which of the following must be considered when choosing a data collection method?", "The type of data needed",
    ["The colour of the report", "The brand of the computer", "The number of slides"],
    "The purpose of the research question, the type of data, and the methods to collect, store and process it are the key points to remember.")
add(C, R0, 'U', "Accurate data collection mainly helps a business to:", "make informed decisions",
    ["avoid all research", "print larger reports", "reduce its staff"],
    "Accurate data collection supports informed business decisions, research integrity and quality.")

# ---------------- 7.1 ----------------
add(C, R1, 'K', "A process, steps or procedure used to perform a task is called a:", "method",
    ["strategy", "hypothesis", "prototype"],
    "A method is the process or set of steps to perform a task; a strategy is the goal or plan of action.")
add(C, R1, 'U', stim("Two terms are described below.", truth_html(["Term", "Meaning"], [["A", "How to select a goal"], ["B", "How to achieve that goal"]])) + "Which statement is correct?", "A is a strategy and B is a method",
    ["A is a method and B is a strategy", "Both are strategies", "Both are methods"],
    "A strategy is how to select a goal, while a method is how to achieve that goal.")
add(C, R1, 'U', "A company that sells very expensive products decides to focus on high-end customers. This plan of action is a:", "strategy",
    ["method", "prototype", "simulation"],
    "A strategy is a plan of action designed to achieve a long-term goal. The company then uses various methods to follow it.")
add(C, R1, 'K', "A data collection strategy is:", "a set of methods for reliable data",
    ["a single tool for storing data", "a chart type for showing results", "a rule for naming data files"],
    "A data collection strategy is the collection of methods that will be used to get accurate and reliable data.")
add(C, R1, 'A', "To study the use of paid cloud services by phone users, a researcher first lists the available cloud services. This step belongs to:", "a collection strategy",
    ["a simulation model", "a final survey report", "a prototype tool"],
    "Planning what data is needed and from where is part of a data collection strategy, which uses several methods.")

# ---------------- interviews: nature ----------------
add(C, R2, 'K', "The questions asked in a qualitative interview are mainly:", "open-ended",
    ["yes-or-no", "multiple-choice", "true-or-false"],
    "Open-ended questions let participants answer freely and give in-depth insight into the research question.")
add(C, R2, 'U', "An interviewer asks follow-up questions to get clarity and uncover deeper meaning in an answer. Which technique is this?", "Probing",
    ["Sampling", "Transcribing", "Prototyping"],
    "Probing techniques are used to delve deeper into a participant's response and get clarity and additional information.")
add(C, R2, 'K', "Qualitative interviews are aimed at understanding the participant's:", "viewpoint",
    ["salary", "location", "typing speed"],
    "They are participant-centred, so the aim is to understand the participant's point of view.")
add(C, R2, 'U', "Qualitative interviews are usually conducted with:", "a small number of participants",
    ["a very large population", "only machines as participants", "no prepared questions"],
    "The emphasis is on in-depth analysis, so a small number of participants is usual.")
add(C, R2, 'U', "The emphasis of a qualitative interview is on:", "depth of analysis",
    ["quantity of answers", "speed of replies", "size of the sample"],
    "Quality and depth of analysis matter more than the quantity of information and generalisation.")
add(C, R2, 'U', stim("Two data collection tools are compared.", truth_html(["Feature", "Tool X", "Tool Y"], [["Questions", "Open-ended", "Fixed choices"], ["Structure", "Flexible", "Highly structured"], ["Detail", "In-depth", "Less detailed"]])) + "Which tool is the qualitative interview?", "Tool X",
    ["Tool Y", "Both tools", "Neither tool"],
    "Qualitative interviews use open-ended questions, a flexible semi-structured approach and give in-depth answers. Surveys are more formal and structured.")
add(C, R2, 'U', "A semi-structured approach in an interview is used to get:", "participant-centred views",
    ["machine-centred statistics", "fixed yes-or-no answers", "random guesses by chance"],
    "It lets the participant's social, cultural and contextual factors shape the answers.")
add(C, R2, 'A', "Which research problem is best suited to a qualitative interview?", "Why parents let children use gadgets",
    ["How many phones were sold in 2024", "What the average age of players is", "Which game has the most downloads"],
    "A 'why' question needs in-depth, open-ended answers. The others ask for counts that a survey or records can supply.")

# ---------------- interview steps ----------------
add(C, R3, 'U', stim("Part of the interview process is shown. One step is hidden.", vboxes_svg(["Define research question", "Select participants", "?", "Develop interview guide"], missing=2, bw=190)) + "Which step is hidden?", "Obtain informed consent",
    ["Transcribe the data", "Conduct the interview", "Train the interviewer"],
    "The order is: define the question, select participants, obtain informed consent, develop the guide, train interviewers, record, set up the place, conduct, respect views, transcribe.")
add(C, R3, 'K', stim("The first step of the interview process is hidden.", boxes_svg(["?", "Select participants", "Obtain consent"], missing=0, bw=130, gap=24)) + "Which step is hidden?", "Define the research question",
    ["Record the whole interview", "Transcribe the recordings", "Train all the interviewers"],
    "A well-defined research question is the foundation of a qualitative interview and comes first.")
add(C, R3, 'K', stim("The last step of the interview process is hidden.", boxes_svg(["Conduct interview", "Respect views", "?"], missing=2, bw=130, gap=24)) + "Which step is hidden?", "Transcribe and analyse data",
    ["Obtain informed consent", "Select the participants", "Develop the guide"],
    "After the interview, the recordings are transcribed accurately and the data is analysed.")
add(C, R3, 'U', stim("Three steps of the interview process are shown.", boxes_svg(["Obtain consent", "?", "Train interviewer"], missing=1, bw=130, gap=24)) + "Which step is hidden?", "Develop an interview guide",
    ["Define the question", "Conduct the interview", "Transcribe the data"],
    "The interview guide of open-ended questions is prepared after consent and before the interviewers are trained.")
add(C, R3, 'U', "Choosing people who can give valuable insights for the research question is called:", "purposeful sampling",
    ["random sampling", "chance selection", "census counting"],
    "Purposeful sampling selects participants whose characteristics fit the research question, which gives richness and depth to the data.")
add(C, R3, 'K', "Before starting the interviews, the researchers must obtain:", "informed consent",
    ["a prototype", "a transcript", "a hypothesis"],
    "Participants must understand the purpose, procedures, risks and benefits, and agree voluntarily before the interview.")
add(C, R3, 'A', "A participant wants to leave the study halfway through. What does informed consent require the researcher to do?", "Let them withdraw at any time",
    ["Ask them to finish first", "Use their data anyway", "Pay them to continue"],
    "Participation is voluntary, and participants have the right to withdraw at any time.")
add(C, R3, 'U', "What does an interview guide contain?", "A set of open-ended questions",
    ["A list of expected answers", "A copy of the final report", "A summary of all results"],
    "The guide has open-ended questions for detailed responses, which keeps the interviews consistent with each other.")
add(C, R3, 'U', "Why should the interview guide be flexible?", "To explore topics raised by participants",
    ["To avoid any recording", "To ask each person different topics", "To end the interview early"],
    "Flexibility allows spontaneous exploration of topics the participant raises and keeps the conversation natural.")
add(C, R3, 'U', "Why are interviewers trained before the study?", "To stay neutral and reduce bias",
    ["To add more questions", "To replace the interview guide", "To shorten the transcripts"],
    "Training in active listening and probing helps interviewers stay neutral and follow ethical standards.")
add(C, R3, 'U', "Why is audio or video recording better than writing notes during an interview?", "It can be replayed often",
    ["It needs no consent", "It removes the interviewer", "It reduces the sample size"],
    "A recording keeps the answers in their original form and can be replayed repeatedly to get true insight.")
add(C, R3, 'U', "Which place is most suitable for conducting the interview?", "A private and quiet room",
    ["A crowded school canteen", "A noisy roadside market", "An open playground at break"],
    "The place should be relaxed, neutral, private and free from distractions so that the participant feels at ease.")
add(C, R3, 'A', "A participant gives an opinion that the interviewer strongly disagrees with. What should the interviewer do?", "Record it and respect it",
    ["Argue until they agree", "Leave it out of the notes", "Stop the interview"],
    "The interviewer must not judge or impose his own views. True and genuine responses are needed for meaningful data.")

add(C, R3, 'U', "Right after an interview, the researcher types out the recording word for word. Which step is this?", "Transcription",
    ["Probing", "Consent", "Sampling"],
    "Accurate transcription of the recordings is done soon after each interview, before the facts fade, and is followed by analysis.")

# ---------------- case study ----------------
add(C, R4, 'U', "In the case study on digital games, who are the right participants?", "Parents of gadget-using 4 to 5 year olds",
    ["Teachers of gadget-using 10 year olds", "Children aged 4 to 5 themselves", "Shopkeepers selling digital gadgets"],
    "The participants should be parents of children aged 4 to 5 whose children use digital gadgets.")
add(C, R4, 'A', "Which question suits the interview guide of the case study?", "Which game does your child prefer?",
    ["Are gadgets harmful? Answer yes or no.", "Tick one: good, bad or neutral", "Which party do you support?"],
    "The guide uses open-ended questions about the child's gadget use. Yes-or-no, tick-box and unrelated questions do not fit.")
add(C, R4, 'U', "Parents who do not want to take part in the case study should not be forced. Which principle is this?", "Participation is voluntary",
    ["Answers are always wrong", "The interview would be shorter", "They have no children"],
    "Informed consent means that only willing participants are selected and nobody is forced to share information.")
