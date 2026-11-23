# -*- coding: utf-8 -*-
from lib import *
C = 8
def Q(sec, lvl, q, ans, wrong, why): add(C, sec, lvl, q, ans, wrong, why)
T = truth_html
S7 = "8.4.1 Importance of user testing"
S8 = "8.4.2 Analyzing and interpreting test results"
S9 = "8.5 Building and launching the MVP"
S0 = "8.0 Entrepreneurship and digital start-ups"
S10 = "8.6 Business examples and lessons learned"
S11 = "8.7 Pakistan's successful business start-ups"
S12 = "8.8 Pakistani entrepreneur example: Neuro-Mat"

# ---------------- 8.4.1 ----------------
Q(S7, 'K', "User testing helps ensure that the final product matches the needs of:", "the target audience",
  ["the competitors", "the investors only", "the programmers"],
  "User testing keeps the product aligned with the needs, preferences and expectations of the target audience.")
Q(S7, 'U', "Finding usability problems early saves time because it prevents:", "costly changes later on",
  ["all future feedback", "any further user testing", "the use of prototypes"],
  "Testing prototypes identifies problems early, which prevents costly changes later in development.")
Q(S7, 'U', "User testing validates whether the product concept:", "solves the identified problem",
  ["has the lowest price", "uses the newest technology", "is the most colourful"],
  "Validation confirms that the concept effectively solves the identified problem or meets the intended goals.")
Q(S7, 'U', "Usability testing mainly focuses on:", "how users interact with the product",
  ["how much the product costs", "how the company is managed", "how the adverts are designed"],
  "Usability testing looks at how users interact with the product, improving its interface, navigation and experience.")
Q(S7, 'U', "Feedback from real users is valuable because it shows their:", "thoughts and experiences",
  ["bank balances", "home addresses", "exam results"],
  "Gathering feedback from real users gives insight into their thoughts and experiences, which informs improvements.")
Q(S7, 'A', "Before release, a team lets 20 people try its mobile app and notes where they get stuck. What does this improve?", "The quality and usability of the app",
  ["Only the server speed", "Only the company profits", "The advertising reach"],
  "User testing before release helps improve the quality and usability of the application.")
Q(S7, 'A', "A tester notices that most users cannot find the 'Pay' button in a prototype. Which benefit of user testing is this?", "Identifying usability issues",
  ["Market expansion", "Revenue generation", "Investor confidence"],
  "Testing prototypes lets teams identify usability problems and design flaws early.")

# ---------------- 8.4.2 ----------------
Q(S8, 'K', "Task completion rates and time spent are examples of:", "quantitative data",
  ["qualitative data", "documentation", "feedback forms"],
  "Quantitative data are measurable values such as task completion rates, time spent and survey responses.")
Q(S8, 'K', "User comments and observations during testing are examples of:", "qualitative data",
  ["quantitative data", "numerical data", "test scripts"],
  "Qualitative data are descriptive, such as user comments and observations.")
Q(S8, 'U', "The data in the table are examples of:" + stim(T(['Measure', 'Result'], [['Task completion rate', '80%'], ['Time spent on the task', '4 minutes'], ['Survey score', '7 out of 10']])), "quantitative data",
  ["qualitative data", "user comments", "design sketches"],
  "Measured numbers such as rates, times and scores are quantitative data.")
Q(S8, 'U', "Usability issues found in testing are prioritized by their:", "severity and impact on user experience",
  ["cost to fix only", "order of discovery", "number of testers"],
  "Issues are prioritized by severity and impact, and the critical ones are addressed first.")
Q(S8, 'A', "Which issue in the table should the team fix first?" + stim(T(['Issue found in testing', 'Severity'], [['Typing mistake in the footer', 'Low'], ['App crashes at payment', 'Critical'], ['Banner image loads slowly', 'Medium']])), "App crashes at payment",
  ["Typing mistake in the footer", "Banner image loads slowly", "Colour of a button"],
  "Critical issues with the biggest effect on user experience are addressed first.")
Q(S8, 'U', "After changes are made, the prototype is re-tested to ensure that:", "issues are resolved and the experience improved",
  ["no more feedback is ever needed", "the testers are replaced", "the documentation is deleted"],
  "Validation means re-testing the prototype to check that the issues were resolved and the experience improved.")
Q(S8, 'U', "Looking for patterns, trends and outliers in test data is part of:", "data analysis",
  ["data collection", "documentation", "product launch"],
  "In data analysis, the collected data is organized and examined to identify patterns, trends and outliers.")

# ---------------- 8.5 MVP ----------------
Q(S9, 'K', "A Minimum Viable Product (MVP) is the most basic version of a product that includes:", "essential features for the core problem",
  ["every planned feature", "only the final design", "only the advertising plan"],
  "An MVP is the most basic version with the essential features needed to address the core problem of the target audience.")
Q(S9, 'U', "The solid boxes in the figure show the:" + stim(mvp_svg()), "features of the MVP",
  ["features of the final product", "bugs found in testing", "ideas rejected forever"],
  "An MVP keeps only the core features needed to solve the main problem; the other features are postponed.")
Q(S9, 'U', "Feature prioritization means identifying the features that:", "are absolutely necessary for the core problem",
  ["look the most attractive", "cost the least to build", "competitors have just added"],
  "Core features that provide value to early users are identified first.")
Q(S9, 'U', "Avoiding feature creep keeps an MVP:", "simple and lean",
  ["large and complex", "slow and costly", "hidden from users"],
  "Simplicity means keeping the MVP as lean as possible and giving a streamlined user experience.")
Q(S9, 'K', "Which development methodology is used to build an MVP quickly?", "Agile",
  ["Waterfall", "Big bang", "Linear"],
  "Agile methodologies allow rapid development and flexibility in responding to changing requirements and user feedback.")
Q(S9, 'U', "Why should an MVP be designed with scalability in mind?", "To support future enhancements",
  ["To make it larger at the start", "To remove all core features", "To stop user feedback"],
  "Although the MVP is minimal, its architecture and technology should support future enhancements.")
Q(S9, 'K', "User onboarding in an MVP helps users to:", "learn the basic features and start using it",
  ["pay extra fees", "leave the product quickly", "share data without asking"],
  "Onboarding and guidance make it easy for users to understand how to use the product effectively.")
Q(S9, 'U', "Why is an MVP tested continuously with real users?", "To gather feedback and validate assumptions",
  ["To avoid any further changes", "To hide errors from the team", "To reduce the number of users"],
  "Continuous testing gives user insights, and improvements are made based on them.")
Q(S9, 'A', "A team builds a food-ordering app with menus, ordering and payment first, and leaves reviews for later. What is the team doing?", "Building an MVP",
  ["Adding feature creep", "Making a beta release", "Doing the final launch"],
  "Starting with only the essential features and adding the rest later is how an MVP is built.")
Q(S9, 'A', "A developer wants to add ten extra features before showing anything to users. Which MVP principle is broken?", "Simplicity",
  ["Scalability", "User onboarding", "Rapid development"],
  "An MVP should avoid feature creep and stay as simple and lean as possible.")

# ---------------- 8.0 digital entrepreneurship ----------------
Q(S0, 'K', "Digital entrepreneurship means creating a new venture built on:", "digital technology",
  ["traditional shops only", "family savings only", "government grants only"],
  "Digital entrepreneurs use digital technology as the foundation of a new business venture.")
Q(S0, 'U', "How does an MVP differ from a prototype?", "An MVP is launched for early users",
  ["A prototype is always sold", "An MVP has no features", "A prototype is the final product"],
  "A prototype is a trial model for testing and feedback, while an MVP is the basic version of the product that early users actually use.")
Q(S0, 'A', "A group of students sells educational videos online and uses social media to reach viewers. This is an example of:", "digital entrepreneurship",
  ["traditional retail", "manual manufacturing", "a government service"],
  "A new venture built on digital technology and online platforms is digital entrepreneurship.")

# ---------------- 8.6 examples ----------------
Q(S10, 'K', "Facebook began as a social networking platform for:", "college students",
  ["online shoppers", "office workers", "school teachers"],
  "Facebook started for college students and then expanded to other user groups through iterative development.")
Q(S10, 'K', "Amazon began as an online:", "bookstore",
  ["taxi service", "movie theatre", "bank"],
  "Amazon began as an online bookstore and gradually expanded into a vast e-commerce platform.")
Q(S10, 'K', "Netflix began as a:", "DVD rental service",
  ["music store", "online bank", "radio station"],
  "Netflix started as a DVD rental service and moved to a streaming platform.")
Q(S10, 'U', "Netflix improved its recommendations by continuously analyzing:", "user data",
  ["weather reports", "bank records", "rivals' prices"],
  "Netflix continuously analyzed user data to improve its recommendation algorithms and content offerings.")
Q(S10, 'A', "A fast-growing app crashes often because the number of users suddenly jumps. Which lesson from Twitter applies?", "Invest in infrastructure and scalability",
  ["Spend more on packaging", "Stop adding new users", "Remove all the features"],
  "Twitter's early outages taught it to invest in infrastructure and scalability to support its growing user base.")
Q(S10, 'U', "Snapchat stayed relevant by adding Stories, Filters and Discover. What did it learn?", "To listen to users and adapt",
  ["To ignore user feedback", "To remove all features", "To copy printed media"],
  "Snapchat learned the importance of listening to its young user base and adapting to their evolving needs.")
Q(S10, 'A', "A ride app entering a new country faces strict local rules. Which lesson from Uber applies?", "Adapt the business model to local rules",
  ["Ignore the local rules", "Leave every market at once", "Cancel the app's features"],
  "Uber learned to adapt its business model and strategies to local regulations and cultural differences.")

# ---------------- 8.7 Pakistan ----------------
Q(S11, 'K', "Which Pakistani start-up is a digital health platform with an online pharmacy network?", "Dawaai",
  ["Bykea", "Zameen.com", "Daraz"],
  "Dawaai is a digital health platform that includes an online pharmacy network and generic pharmaceuticals.")
Q(S11, 'K', "Bykea provides:", "instant transport and courier services",
  ["online real estate listings", "grocery delivery only", "digital banking"],
  "Bykea is a social impact app that saves time and money by providing instant transport and courier services.")
Q(S11, 'K', "Which sector does Zameen.com serve?" + stim(T(['Start-up', 'Sector'], [['Zameen.com', '?']])), "Real estate",
  ["Healthcare", "Digital banking", "Used cars"],
  "Zameen.com is software that helps people navigate the real estate market.")
Q(S11, 'U', "Which start-up is a business-to-business platform where retailers order directly from manufacturers and wholesalers?", "Salesflo",
  ["Daraz", "SadaPay", "CarFirst"],
  "Salesflo lets retailers place orders directly with manufacturers, wholesalers and authorized distributors.")

# ---------------- 8.8 Neuro-Mat ----------------
Q(S12, 'K', "Neuro-Mat is a mat fitted with sensors that monitors:", "elderly people and patients",
  ["road traffic", "crop growth", "bank accounts"],
  "Neuro-Mat monitors basic parameters of an elderly person or patient resting on it and sounds an alarm when the patient leaves the mat.")
Q(S12, 'U', "In the smoke test figure, which option got the most interest?" + stim(bar_svg_u8([8, 14, 30], ['Baby monitors', 'Hired caretakers', 'Neuro-Mat'], 'Smoke test results')), "Neuro-Mat",
  ["Baby monitors", "Hired caretakers", "All were equal"],
  "Neuro-Mat scored 30, about double its nearest competitor, hired caretakers (14).")
Q(S12, 'K', "A smoke test checks demand for a product by measuring users' interest in:", "pre-ordering it before it is built",
  ["repairing it after it breaks", "copying it for free", "renting it for a day"],
  "In the Neuro-Mat case, more than 85% of users in the smoke test showed interest in pre-ordering.")
Q(S12, 'U', "In the Neuro-Mat iterations, which step came right after the complex circuit?" + stim(lean_svg()), "Cost-driven circuit",
  ["Complex circuit", "Small-scale circuit", "Final product idea"],
  "After the complex pressure-sensor circuit, the cost-driven circuit with infrared sensors and a microcontroller was tried.")
