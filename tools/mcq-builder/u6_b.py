# -*- coding: utf-8 -*-
from lib import *
C = 6
def Q(sec, lvl, q, ans, wrong, why): add(C, sec, lvl, q, ans, wrong, why)
T = truth_html
S8 = "6.8 Data source verification: humans and computers"
S9 = "6.9 Computing and connectivity"
S10 = "6.10 Impact of connectivity on the environment"
S11 = "6.11 Effects of connectivity on culture"
S12 = "6.12 Effects of connectivity on people"
S13 = "6.13 Assistive technologies"
S14 = "6.14 Digital divide"
S15 = "6.15 Technological innovations"

# ---------------- 6.8 humans vs computers ----------------
Q(S8, 'K', "Which verification task is better suited to humans?", "Judging the credibility of a news source",
  ["Sorting a million records", "Running regression models", "Checking data against fixed rules"],
  "Subjective judgments, such as assessing the credibility of a news source, are better done by humans.")
Q(S8, 'K', "Which verification task is better suited to computers?", "Sorting and filtering huge data",
  ["Judging the tone of a text", "Moderating sensitive content", "Handling unclear instructions"],
  "Computers are strong at processing large amounts of data quickly and accurately, such as sorting, filtering and aggregating.")
Q(S8, 'U', "The tasks in the table are best suited to:" + stim(T(['Tasks'], [['Subjective judgments'], ['Handling ambiguity'], ['Complex decision-making']])), "humans",
  ["computers", "search engines", "sensors"],
  "Subjective judgment, handling ambiguity and complex decisions need context, ethics and common sense, which humans provide.")
Q(S8, 'U', "The tasks in the table are best suited to:" + stim(T(['Tasks'], [['Processing large amounts of data'], ['Statistical analysis'], ['Speed and consistency'], ['Automated verification']])), "computing devices",
  ["human reviewers", "editors", "observers"],
  "Computing devices handle large, repetitive and rule-based tasks quickly and with constant accuracy.")
Q(S8, 'U', "Why are humans better at content moderation decisions on social media?", "They consider cultural and ethical factors",
  ["They process data faster", "They never get tired", "They follow fixed rules only"],
  "Complex decisions based on a deep understanding of context, ethics and social norms are handled better by humans.")
Q(S8, 'U', "Why are computers better at checking thousands of records against fixed rules?", "They work fast with constant accuracy",
  ["They understand ethics deeply", "They get tired quickly", "They judge tone better"],
  "Computers process data much faster and with consistent precision, so automated verification suits them.")
Q(S8, 'A', "A team must check 2 million entries against fixed rules and also judge whether a source seems biased. Which pair of performers fits best?" +
  stim(T(['Tasks to be done'], [['Check 2 million entries against fixed rules'], ['Judge whether a source seems biased']])), "Computer for the rules, human for the bias",
  ["Human for the rules, computer for the bias", "Computer for both of the tasks", "Human for both of the tasks"],
  "Rule-based checks of large data suit computers, while judging bias needs human judgment.")
Q(S8, 'U', "Detecting anomalies and trends in data can be handled efficiently by:", "machine learning algorithms",
  ["personal opinions", "printed reports", "manual surveys"],
  "Pattern recognition tasks, such as identifying anomalies or trends, can be done efficiently by machine learning algorithms.")
Q(S8, 'U', "A combination of humans and computing devices is often effective because:", "humans give judgment and computers do repetitive work",
  ["computers always give judgment on ethics", "humans do all the data-intensive work", "both do exactly the same tasks"],
  "Humans provide expertise, judgment and oversight, while computing devices handle repetitive, data-intensive tasks.")

# ---------------- 6.9 connectivity ----------------
Q(S9, 'K', "Computing refers to using computers and computational systems to:", "perform tasks, solve problems and process information",
  ["repair damaged electronic devices", "print documents on paper", "design the outer cases of computers"],
  "Computing is the use of computers and computational systems for tasks, problem solving, data manipulation and information processing.")
Q(S9, 'K', "Connectivity is the ability of devices or people to:", "communicate and exchange data",
  ["repair each other's faults", "store data forever", "change their own size"],
  "Connectivity means the ability of different networks, devices or people to communicate and exchange data with one another.")
Q(S9, 'U', "World Wide Web, email and instant messaging allow people to communicate in real time. This is the role of:", "the Internet and networking",
  ["embedded firmware", "local storage devices", "data compression"],
  "Computer networks such as the Internet have made it easy for people all over the world to connect and share information.")
Q(S9, 'U', "The features in the table are possible mainly because of:" + stim(T(['Feature'], [['Voice calls'], ['Video calls'], ['Chatting on social media'], ['Checking email']])), "smartphones and tablets",
  ["fax machines", "landline telephones", "printed newsletters"],
  "Smartphones and tablets have powerful computers inside that enable calls, chat, email and Internet browsing.")
Q(S9, 'U', "Cloud computing fosters connectedness by letting people:", "access and share data and apps remotely",
  ["avoid using any networks", "keep all files on one computer", "stop sharing documents"],
  "Cloud computing makes it possible to remotely access and store data, apps and services, enabling collaboration and real-time sharing.")
Q(S9, 'U', "Social networking websites such as Facebook, Instagram and LinkedIn were made possible by:", "computing",
  ["telegraphy", "printing", "radio broadcasting"],
  "Social media platforms exist because of computing, which changed the way people communicate and exchange information.")

# ---------------- 6.10 environment ----------------
Q(S10, 'U', "Which option completes the list of positive environmental impacts in the table?" +
  stim(T(['Positive environmental impacts'], [['Reduced travel'], ['Resource and efficiency improvement'], ['Monitoring the environment'], ['?']])), "Economic opportunities for green technologies",
  ["Generation of e-waste", "Resource extraction", "Privacy issues"],
  "Reduced travel, resource efficiency, environmental monitoring and opportunities for green technologies are the positive impacts.")
Q(S10, 'K', "E-waste refers to:", "discarded electronic devices",
  ["unused Internet bandwidth", "deleted computer files", "old software versions"],
  "The growth of electronic devices increases electronic waste (e-waste), whose improper disposal can harm the environment and human health.")
Q(S10, 'U', "Why does remote work reduce carbon emissions?", "People need to commute less",
  ["Computers use no power", "Offices are heated more", "Cars become lighter"],
  "Remote work and online meetings reduce commuting and business travel, so transport emissions fall.")
Q(S10, 'U', "IoT and connected technologies improve resource management by:", "using water and electricity more effectively",
  ["increasing the use of paper", "making devices larger", "removing all sensors"],
  "Connected technologies enable more effective use of resources such as water and electricity.")
Q(S10, 'U', "The extraction of rare earth metals for electronic devices can lead to:", "habitat destruction",
  ["a decrease in e-waste", "cleaner air everywhere", "reduced travel"],
  "Producing devices and connectivity infrastructure needs raw materials, which can contribute to habitat destruction and degradation.")
Q(S10, 'U', "Real-time environmental monitoring through connectivity helps to:", "detect pollution and deforestation",
  ["increase electronic waste", "stop all natural disasters", "remove the need for sensors"],
  "Enhanced connectivity allows real-time monitoring to detect and respond to problems such as pollution, deforestation and natural disasters.")
Q(S10, 'U', "The items in the table are examples of:" + stim(T(['Environmental effects'], [['E-waste'], ['Resource extraction'], ['Digital divide']])), "harmful environmental effects",
  ["positive environmental impacts", "cultural benefits", "assistive technologies"],
  "E-waste, resource extraction, the digital divide and privacy issues are harmful effects of increased connectivity.")
Q(S10, 'A', "A city installs smart grids and renewable energy systems linked by connected devices. Which positive impact is this?", "Opportunities for green technologies",
  ["Generation of e-waste", "Resource extraction", "Privacy issues"],
  "Smart grids and renewable energy systems are green technologies that connectivity helps to develop and implement.")

# ---------------- 6.11 culture ----------------
Q(S11, 'U', "Increased connectivity has created a 'global village' in which:", "people of different cultures share ideas",
  ["all travel has stopped completely", "every language has disappeared", "local customs are forbidden"],
  "People from different cultures can easily connect, share ideas and learn from each other.")
Q(S11, 'U', "What is a cultural worry about global connectivity?", "Cultures may become similar to each other",
  ["Cultures stop using any language", "Traditions are only printed in books", "People avoid sharing their ideas"],
  "Some worry that fast-spreading global trends and influences may make all cultures the same.")
Q(S11, 'A', "A teenager follows global trends online and slowly stops celebrating local festivals. Which concern does this show?", "Loss of cultural identity",
  ["Reduced travel", "Growth of e-waste", "Better access to information"],
  "People must deal with the challenge of keeping their own cultural identities amid global mixing.")

# ---------------- 6.12 people ----------------
Q(S12, 'U', "The effects in the table are:" + stim(T(['Effects of connectivity on people'], [['Easy contact with family and friends'], ['Fast access to information'], ['Online education and work']])), "positive effects",
  ["negative effects", "environmental effects", "hardware effects"],
  "Easier communication, fast information and new education and work chances are positive effects of connectivity.")
Q(S12, 'K', "Which of the following is a drawback of greater connectivity?", "Social media addiction",
  ["Online education", "Easy family contact", "New online jobs"],
  "Screen and social media addiction, privacy issues and false information are drawbacks of increased connectivity.")
Q(S12, 'U', "How can people get the most from connectivity?", "By keeping a balance and using it with awareness",
  ["By staying online all day", "By believing every post", "By avoiding every device"],
  "Maintaining a balance and using technology with awareness maximizes the advantages and limits the disadvantages.")
Q(S12, 'A', "A student scrolls social media most of the night and sleeps very late. Which drawback of connectivity is this?", "Screen and social media addiction",
  ["Spread of false information", "Loss of cultural identity", "Growth of e-waste"],
  "Spending excessive time on screens and social media is addiction, one of the drawbacks of greater connectivity.")

# ---------------- 6.13 assistive technologies ----------------
Q(S13, 'K', "The items in the table are types of:" + stim(T(['Types'], [['Voice recognition software'], ['Screen readers'], ['Mobility devices'], ['Adaptive equipment']])), "assistive technologies",
  ["search engines", "network protocols", "cloud services"],
  "Assistive technologies are tools, devices and software that help people with disabilities perform tasks.")
Q(S13, 'K', "A person with a visual impairment needs a text-reading software tool. Which assistive technology is this?" +
  stim(T(['Need', 'Assistive technology'], [['Reading text aloud for the blind', '?']])), "Screen reader",
  ["Voice recognition", "Mobility device", "Adaptive keyboard"],
  "Screen readers read text out loud to people who are visually impaired.")
Q(S13, 'K', "Software that recognizes spoken commands to control computers is called:", "voice recognition software",
  ["screen reading software", "mobility software", "antivirus software"],
  "Voice recognition software lets people with disabilities control computers and other devices using speech commands.")
Q(S13, 'U', "A wheelchair belongs to which category of assistive technology?", "Mobility devices",
  ["Screen readers", "Voice recognition software", "Adaptive keyboards"],
  "Mobility devices such as wheelchairs help people with mobility issues move around on their own.")
Q(S13, 'A', "A person with limited hand movement uses a joystick controller in place of a mouse. This is an example of:", "adaptive equipment",
  ["a screen reader", "a mobility device", "voice recognition"],
  "Modified keyboards, switches and joystick controllers are adaptive equipment for people with physical limitations.")
Q(S13, 'U', "The primary goal of assistive technologies is to improve the:", "independence and quality of life of users",
  ["speed of computer processors", "size of computer displays", "price of electronic devices"],
  "Assistive technologies enhance independence, functionality and quality of life for people with disabilities.")

# ---------------- 6.14 digital divide ----------------
Q(S14, 'K', "The digital divide is the gap between people who:", "can and cannot access digital technology",
  ["use laptops and use tablets", "read books and read news", "work online and work at night"],
  "The digital divide is the gap between those who have access to digital technologies and the Internet and those who do not.")
Q(S14, 'U', "The gap shown between Group A and Group B in the figure is called the:" + stim(divide_svg()), "digital divide",
  ["data bias", "global village", "cloud gap"],
  "One group has access to the Internet and devices while the other does not: this is the digital divide.")
Q(S14, 'U', "Which option completes the factors that can cause the digital divide?" + stim(T(['Factors'], [['Income'], ['Location'], ['Age'], ['Education'], ['?']])), "Socio-economic status",
  ["Screen resolution", "Typing speed", "Battery colour"],
  "The divide can be based on income, location, age, education and socio-economic status.")
Q(S14, 'U', "A result of the digital divide is that it:", "increases existing inequalities",
  ["removes all barriers to information", "makes every network faster", "ends the problem of e-waste"],
  "The divide can intensify existing inequalities and limit opportunities for those on the wrong side of it.")

# ---------------- 6.15 innovations ----------------
Q(S15, 'K', "Which technology provides wireless Internet access in homes, offices and public spaces?", "Wi-Fi",
  ["Bluetooth", "NFC", "Ethernet cable"],
  "Wi-Fi networks provide wireless Internet access in homes, offices and public places.")
Q(S15, 'K', "Which technology provides short-range wireless links between phones, headphones and speakers?", "Bluetooth",
  ["Wi-Fi", "5G", "Fibre optics"],
  "Bluetooth is a short-range wireless standard used to connect peripherals and share data without cables.")
Q(S15, 'U', "Why are 4G and 5G networks important for IoT connectivity?", "They give faster speed and lower latency",
  ["They need a longer cable length", "They work without any signal", "They remove all Internet costs"],
  "4G and 5G offer faster data speeds, lower latency and increased capacity, which supports IoT connectivity and video calls.")
Q(S15, 'U', "Which mobile networks improved the features shown in the table?" + stim(T(['Feature', 'Improvement'], [['Data speed', 'Faster'], ['Latency', 'Lower'], ['Capacity', 'Increased']])), "4G and 5G cellular networks",
  ["Bluetooth and NFC", "Wi-Fi and Zigbee", "Ethernet and fibre"],
  "Fourth- and fifth-generation cellular networks significantly improved mobile communication.")
Q(S15, 'A', "A passenger makes a high-quality video call while travelling between two cities. Which technology makes this possible?", "5G cellular network",
  ["Bluetooth link", "Wired Ethernet", "NFC tag"],
  "Cellular networks such as 4G and 5G enable high-quality video calls and mobile Internet browsing while moving.")
