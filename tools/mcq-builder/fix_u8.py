# -*- coding: utf-8 -*-
from lib import *
T = truth_html
def F(key, wrong=None, ans=None, q=None, why=None, lvl=None):
    hits = [x for x in QS[8] if key in x['q']]
    assert len(hits) == 1, (key, len(hits))
    x = hits[0]
    if q is not None: x['q'] = q
    if ans is not None: x['ans'] = ans
    if wrong is not None: x['options'] = [x['ans']] + list(wrong)
    if why is not None: x['reason'] = why
    if lvl is not None: x['_lvl'] = lvl
    assert len(set(x['options'])) == 4, key

def apply():
    # ---- table / diagram conversions ----
    F("unique features and better quality", ["Market expansion", "Revenue generation", "Innovation and adaptation"],
      q="The table compares a firm's product with its rival's. Which benefit of product development does it show?" + stim(T(['Feature', "Firm's product", "Rival's product"], [['Unique features', 'Yes', 'No'], ['Quality', 'Better', 'Average'], ['Price', 'Lower', 'Higher']])))
    F("adds features that customers asked for", ["Market expansion", "Revenue generation", "Innovation and adaptation"],
      q="A phone maker's actions and results are shown in the table. Which benefit of product development is this?" + stim(T(['Action or result', 'Detail'], [['Longer battery asked for', 'Added'], ['Better camera asked for', 'Added'], ['Customer loyalty', 'Increased']])))
    F("check whether its new sensor idea", ["Beta test prototype", "Paper prototype", "Digital high-fidelity prototype"],
      q="A team has the goals shown in the table. Which prototype fits?" + stim(T(['Goal of the team', 'Importance'], [['Check that the sensor works', 'High'], ['Final looks and colours', 'Low']])))
    F("On the first day of a project", ["A beta version of the app", "An alpha version for testing", "A working 3D model"],
      q="A team's situation is shown in the table. Which prototype fits?" + stim(T(['Situation', 'Detail'], [['Project stage', 'Day one'], ['Budget', 'Very low'], ['Need', 'Check the app layout']])))
    F("wants to secure funding by impressing", ["A rough sketch drawn on paper", "A list of ideas", "A report of bugs"],
      q="A start-up's needs are shown in the table. Which prototype helps most?" + stim(T(['Item', 'Detail'], [['Aim', 'Secure funding'], ['Audience', 'Investors'], ['Wanted impression', 'A realistic preview']])))
    F("build an electronics prototype of a smart alarm", ["A sketchbook, pencils and sticky notes", "A 3D scanner", "A foamboard sheet"],
      q="The project in the table needs a tool. Which item suits the work?" + stim(T(['Project', 'Detail'], [['Product', 'Smart alarm'], ['Type of prototype', 'Electronics'], ['Parts needed', 'Sensors, buzzer, controller']])))
    F("cardboard mock-up of a handheld device", ["A high-fidelity digital prototype model", "A beta prototype", "A proof-of-concept program"],
      q="What type of prototype is described in the table?" + stim(T(['Item', 'Detail'], [['Material', 'Cardboard'], ['Product', 'Handheld device'], ['Test', 'Comfort and fit']])))
    F("mixed comments after the first round", ["Launch the product to all users anyway", "Ignore all the comments", "Start a different product"], ans="Analyze the feedback and revise it",
      q="The table shows feedback from round 1 of testing. What should the team do before the next round?" + stim(T(['Comment from round 1', 'Users'], [['The menu is confusing', '9'], ['Colours look nice', '2'], ['Cannot find the Pay button', '7']])),
      why="Feedback is analyzed to find improvements and the prototype is revised before it is tested again.")
    F("cannot find the 'Pay' button", ["Market expansion into new regions", "Revenue generation", "Investor confidence"],
      q="The table shows a usability test result. Which benefit of user testing is this?" + stim(T(['Tester note', 'Users'], [['Could not find the Pay button', '7 of 10'], ['Found it easily', '3 of 10']])))
    F("Facebook began as a social", ["online shoppers worldwide", "office workers", "school teachers"],
      q="Facebook began as a social networking platform for which users?" + stim(T(['Company', 'First users'], [['Facebook', '?']])))
    F("Netflix began as a:", ["music streaming store", "online bank", "radio station"],
      q="What did Netflix begin as?" + stim(T(['Company', 'Began as', 'Later became'], [['Netflix', '?', 'A streaming platform']])))
    F("advanced, functional version with most features", None,
      q="Which stage is missing in the figure?" + stim(release_svg(missing=0)))
    F("near-final version released to a select group", None,
      q="Which stage is missing in the figure?" + stim(release_svg(missing=1)))

    # ---- option-length balance ----
    F("Products are typically", ["intangible tasks performed by individuals", "plans written for a new business idea", "payments collected from loyal customers"])
    F("Which statement describes a service", ["A physical item that people can touch or hold", "A machine used inside a factory", "A tool for sketching early ideas"])
    F("final outcome of a complex process", ["the wishes of the company's producers", "the rules set by competitors", "the running costs of the factory"])
    F("A prototype is a preliminary model", ["the final version that is sold to customers", "a legal document for registering a company", "a yearly report about the competitors' sales"], ans="a tangible or digital model of a product")
    F("common goal of providing", ["the final profits and the sales", "legal rights to a design", "new customers for the market"])
    F("proof-of-concept prototype is used", ["the final colours, logo and package design", "advertising plans and sales targets", "the selling price of the finished product"], ans="core function and technical feasibility")
    F("Beta testing helps to identify", ["the price of the finished product", "the name chosen for the company", "the total number of competitors"], ans="remaining issues before release")
    F("suitable for stakeholder presentations", ["They are the cheapest of all to make", "They show only the very basic layout", "They do not need any user interface"], ans="They closely resemble the product")
    F("ideal for early-stage ideation", ["They look exactly like the finished product", "They need the final program code", "They are the last stage of testing"])

    F("A designer shows a sketch", ["Risk reduction and safety", "Cost savings in production", "Investor confidence in the whole firm"])
    F("end-users early in development", ["risk reduction and safety", "investor confidence", "market expansion"])
    F("Finding design flaws before", ["the number of potential users", "the need for any user feedback", "the size of the market"])
    F("Creating several improved versions", ["risk reduction and safety", "visualization", "market expansion"])
    F("Why is it cheaper to fix problems", ["Prototypes never have any design problems at all", "Customers always pay for all the repairs", "Fixes are impossible after launch"])
    F("win investors", ["They are completely free of any cost", "They hide all the product's weaknesses", "They replace the final product"], ans="They give a realistic product preview")
    F("Prototypes make abstract ideas", ["private and hidden from the real users", "costly and hard to explain", "fixed and impossible to change"])
    F("Prototyping supports which approach", ["One-time and fixed in advance", "Secret and individual", "Production-first"])
    F("The items in the table are reasons for", ["choosing a name for the business", "advertising a finished product line", "packaging a physical product"])
    F("Adobe XD, Sketch", ["3D printing", "paper sketching", "database programming work"])
    F("Which languages can developers use", ["SQL, Bash, Fortran and Pascal", "COBOL, Pascal and C", "Basic, SQL and Perl"])
    F("Fusion 360 and Blender", ["prototyping kits", "3D scanning devices", "internet browser programs"])
    F("A 3D printer is used to", ["scan real objects into digital models", "draw wireframes by hand on paper", "write code for mobile web apps"], ans="turn digital designs into objects")
    F("Cardboard and foamboard", ["durable high-fidelity prototypes", "interactive digital prototypes", "3D-printed final models"], ans="low-cost physical prototypes")
    F("Wood, plastic or metal", ["quick sketches drawn on paper", "digital wireframes made on screen", "storyboards of the user's journey"], ans="durable high-fidelity prototypes")
    F("common prototyping methods?", ["Waterfall model prototyping", "Black-box prototyping", "Binary prototyping"])
    F("low-fidelity digital prototype?", ["A beta version tested with real data", "The final coded application", "A 3D-printed model"])
    F("placeholder text and generic icons", ["To hide the product from its users", "To make the prototype the final product", "To increase the cost of the work"], ans="To show content without final detail")
    F("sticky notes or index cards", ["print copies of the final product", "store customer data", "write program code"])
    F("The methods in the table", ["types of software testing methods", "encryption methods", "data sampling methods"])
    F("In a low-fidelity physical prototype, which", ["Final colours, logos and branding", "Fine surface finishing", "Advertising plans"])
    F("Iterative design means creating", ["Deleting the old design", "Selling the design", "Copying the design"])
    F("After revising a prototype", ["launch it to every customer at once", "stop collecting feedback", "delete the old data"])
    F("move to high-fidelity prototyping", ["Before any sketch has been made", "When all users dislike it", "After the product is sold"], ans="When the design has matured")
    F("Why is each change documented", ["To hide all of the earlier designs", "To remove the user feedback later", "To avoid any further rounds of testing"])
    F("find common pain points", ["Competitors' price lists and offers", "Staff attendance sheets", "Social media likes"])
    F("Final validation of the product", ["rough paper sketches with competitors", "old products with the staff only", "advertisements with the public"], ans="high-fidelity prototypes with users")
    F("cornerstone of business", ["closure and financial loss", "secrecy and delay", "taxes and rules"])
    F("matches the needs of", ["the competitors in the market", "the investors only", "the programmers"])
    F("validates whether the product concept", ["has the lowest price in the market", "uses the newest technology", "is the most colourful"])
    F("Usability testing mainly focuses on", ["how much the product costs", "how the company's staff are all managed", "how the adverts are designed"])
    F("Feedback from real users", ["bank balances and savings", "home addresses", "exam results"])
    F("lets 20 people try its mobile app", ["Only the speed of the company's servers", "Only the company profits", "The advertising reach"], ans="Quality and usability of the app")
    F("Task completion rates and time spent", ["qualitative data", "documentation", "user feedback forms"])
    F("The data in the table are examples of", ["qualitative data", "written user comments", "design sketches"])
    F("Usability issues found in testing are prioritized", ["cost to fix the issue only", "order in which they were found", "number of testers"], ans="severity and impact on users")
    F("re-tested to ensure", ["no further feedback will ever be needed again", "the testers are replaced by new ones", "the documentation is deleted for good"], ans="issues are fixed and experience improved")
    F("is the most basic version of a product that includes", ["every feature planned for the full product", "only the final design", "only the advertising plan"])
    F("Feature prioritization means", ["look the most attractive to investors", "cost the least to build", "competitors have just added"], ans="are necessary for the core problem")
    F("designed with scalability in mind", ["To make it much larger at the start", "To remove all core features", "To stop user feedback"])
    F("User onboarding in an MVP", ["pay extra fees before using it", "leave the product quickly", "share their data without any consent"], ans="learn the basic features quickly")
    F("tested continuously with real users", ["To avoid making any further changes later", "To hide errors from the team", "To reduce the number of users"], ans="To gather feedback and validate ideas")
    F("How does an MVP differ from a prototype", ["A prototype is always sold to customers", "An MVP has no features", "A prototype is the final product"])
    F("sells educational videos online", ["traditional retail business", "manual manufacturing", "a government service"])
    F("fast-growing app crashes", ["Spend more on the packaging of goods", "Stop adding new users", "Remove all the features"], ans="Invest in infrastructure and scale")
    F("Snapchat stayed relevant", ["To ignore all of the user feedback", "To remove all features", "To copy printed media"])
    F("ride app entering a new country", ["Ignore the local rules and continue", "Leave every market at once", "Cancel the app's features"], ans="Adapt its model to local rules")
    F("Bykea provides", ["online property listings for home buyers", "grocery delivery from local stores", "digital banking for small firms"])
    F("Neuro-Mat is a mat", ["road traffic on the highways", "crop growth", "bank accounts"])
    F("A smoke test checks demand", ["repairing it for free after it breaks", "copying it for free", "renting it for a day"])
    F("which step came right after the complex circuit", ["Complex pressure circuit", "Small-scale circuit", "Final product idea"])
def R(key, old, new):
    hits = [x for x in QS[8] if key in x['q']]
    assert len(hits) == 1, (key, len(hits))
    x = hits[0]
    assert old in x['options'] and old != x['ans'], (key, old)
    x['options'][x['options'].index(old)] = new
    assert len(set(x['options'])) == 4

def apply2():
    R("The table compares a firm's product", "Innovation and adaptation", "Product innovation")
    R("A phone maker's actions", "Innovation and adaptation", "Product innovation")
    R("common goal of providing", "the final profits and the sales", "final profits and sales")
    R("Beta testing helps to identify", "the price of the finished product", "the price of the product")
    R("suitable for stakeholder presentations", "They are the cheapest of all to make", "They are the cheapest to make")
    R("end-users early in development", "risk reduction and safety", "risk reduction")
    R("Creating several improved versions", "risk reduction and safety", "risk reduction")
    R("Prototyping supports which approach", "One-time and fixed in advance", "One-time and fixed")
    R("Fusion 360 and Blender", "internet browser programs", "web browsers")
    R("common prototyping methods?", "Waterfall model prototyping", "Waterfall prototyping")
    R("sticky notes or index cards", "print copies of the final product", "print the final product")
    R("cornerstone of business", "closure and financial loss", "closure and loss")
    R("Feedback from real users", "bank balances and savings", "bank balances")
    R("sells educational videos online", "traditional retail business", "traditional retail")
    R("Neuro-Mat is a mat", "road traffic on the highways", "road traffic")
    R("Facebook began as a social", "online shoppers worldwide", "online shoppers")
    R("Which statement describes a service", "A physical item that people can touch or hold", "A physical item that can be held")
    R("Why is it cheaper to fix problems", "Prototypes never have any design problems at all", "Prototypes never have problems")
    R("Which statement describes a service", "A machine used inside a factory", "A machine used inside a big factory")
    R("Which statement describes a service", "A tool for sketching early ideas", "A tool for sketching ideas early")
    R("Prototyping supports which approach", "Secret and individual", "Secret and individual work")
    R("Prototyping supports which approach", "Production-first", "Production-first only")
    R("sticky notes or index cards", "store customer data", "store all customer data")
    R("sticky notes or index cards", "write program code", "write the program code")
    R("cornerstone of business", "secrecy and delay", "secrecy and long delay")
    R("cornerstone of business", "taxes and rules", "taxes and many rules")
    R("Feedback from real users", "home addresses", "home addresses of users")
    R("Feedback from real users", "exam results", "past exam results")
    R("Neuro-Mat is a mat", "crop growth", "crop growth in fields")
    R("Neuro-Mat is a mat", "bank accounts", "bank accounts of clients")

