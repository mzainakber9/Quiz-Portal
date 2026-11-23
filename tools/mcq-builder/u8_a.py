# -*- coding: utf-8 -*-
from lib import *
C = 8
def Q(sec, lvl, q, ans, wrong, why): add(C, sec, lvl, q, ans, wrong, why)
T = truth_html
S1 = "8.1 Introduction to product development"
S2 = "8.2.1 What is a prototype? Types of prototypes"
S3 = "8.2.2 Importance of prototyping"
S4 = "8.3.1 Tools and materials for prototypes"
S5 = "8.3.2 Building low-fidelity prototypes"
S6 = "8.3.3 Iterative design and refinement"

# ---------------- 8.1 ----------------
Q(S1, 'K', "Products are typically:", "physical items that can be touched or held",
  ["intangible actions done by people", "plans written for a business idea", "payments collected from customers"],
  "Products are typically physical items, ranging from smartphones and clothing to industrial machinery.")
Q(S1, 'K', "Which statement describes a service?", "An intangible task done by people or firms",
  ["A physical item that can be held", "A machine used in a factory", "A tool for sketching ideas"],
  "Services are intangible and involve a specific action or task performed by individuals or organizations, such as consulting or healthcare.")
Q(S1, 'U', "The items in the table are examples of:" + stim(T(['Examples'], [['Smartphones'], ['Clothing'], ['Automobiles'], ['Detergent']])), "products",
  ["services", "prototypes", "start-ups"],
  "Smartphones, clothing, automobiles and detergent are physical items, so they are products.")
Q(S1, 'U', "The items in the table are examples of:" + stim(T(['Examples'], [['Consulting'], ['Car-wash'], ['Catering'], ['Overseas travelling']])), "services",
  ["products", "prototypes", "tools"],
  "Consulting, car-wash, catering and travelling are intangible tasks performed for customers, so they are services.")
Q(S1, 'K', "A product or service is the final outcome of a complex process designed to meet:", "a specific need or want of consumers",
  ["the wishes of the producers only", "the rules set by competitors", "the running costs of the factory"],
  "Products and services are created to address a particular problem, enhance convenience or fulfil a customer requirement.")
Q(S1, 'U', "A firm's product has unique features and better quality than its rivals'. Which benefit of product development is this?", "Competitive advantage",
  ["Market expansion", "Revenue generation", "Customer satisfaction"],
  "A well-developed product can set a company apart from competitors through unique features, quality or price.")
Q(S1, 'U', "A company launches a new product for a new region and a new age group. Which benefit of product development is this?", "Market expansion",
  ["Competitive advantage", "Revenue generation", "Innovation and adaptation"],
  "New products allow a company to explore new markets and demographics, which diversifies its business.")
Q(S1, 'U', "A new product expands the customer base and increases a company's profits. Which benefit is this?", "Revenue generation",
  ["Market expansion", "Customer satisfaction", "Competitive advantage"],
  "New products and services open up revenue streams, expand the customer base and increase profits.")
Q(S1, 'A', "A phone maker adds features that customers asked for, and the customers stay loyal. Which benefit of product development does this show?", "Customer satisfaction",
  ["Market expansion", "Revenue generation", "Cost savings"],
  "Addressing customers' needs and wants improves satisfaction and loyalty.")

# ---------------- 8.2.1 ----------------
Q(S2, 'K', "A prototype is a preliminary model that is:", "a tangible or digital representation of a product",
  ["the final version sold to customers", "a legal document of a business", "a report on competitors' sales"],
  "A prototype is a tangible or digital representation of a product, or a part of it, created during the design and development phase.")
Q(S2, 'K', "All prototypes share the common goal of providing:", "valuable insights and feedback",
  ["final profits and sales", "legal rights to a design", "new customers for the market"],
  "Prototypes vary in fidelity, complexity and purpose, but all give insights and feedback to improve the final product.")
Q(S2, 'K', "Sketches and wireframes are examples of:", "low-fidelity prototypes",
  ["high-fidelity prototypes", "working prototypes", "functional prototypes"],
  "Sketches and wireframes are simple, hand-drawn or digital representations of the basic layout, so they are low-fidelity.")
Q(S2, 'K', "Interactive, computer-generated simulations of the final product are called:", "digital prototypes",
  ["paper prototypes", "alpha prototypes", "proof-of-concept prototypes"],
  "Digital prototypes closely resemble the user interface and functionality of the actual product.")
Q(S2, 'K', "A proof-of-concept prototype is used to demonstrate:", "core functionality and technical feasibility",
  ["final colours and package design", "advertising and sales plans", "the price of the finished product"],
  "Proof-of-concept prototypes test technical aspects and validate the feasibility of a concept, even if they lack the full design.")
Q(S2, 'U', "An advanced, functional version with most features, used for internal testing, is a:", "alpha prototype",
  ["beta prototype", "digital prototype", "paper prototype"],
  "Alpha prototypes are advanced functional versions typically used for internal testing and refinement.")
Q(S2, 'U', "A near-final version released to a select group of testers is a:", "beta prototype",
  ["alpha prototype", "paper prototype", "proof-of-concept prototype"],
  "Beta prototypes are near-final versions made available to a select group of users before the official release.")
Q(S2, 'U', "Which prototype type is missing in the figure?" + stim(fidelity_svg(missing=0)), "Low-fidelity",
  ["High-fidelity", "Alpha", "Beta"],
  "The quick, cheap prototype that shows only the basic layout is the low-fidelity prototype.")
Q(S2, 'U', "Which prototype type is missing in the figure?" + stim(fidelity_svg(missing=2)), "High-fidelity",
  ["Low-fidelity", "Alpha", "Beta"],
  "The prototype with a realistic interface and function is the high-fidelity prototype.")
Q(S2, 'U', "Beta testing helps to identify:", "remaining issues and bugs before release",
  ["the price of the product", "the name of the company", "the number of competitors"],
  "Beta testing with a select group of users finds any remaining issues or bugs before the product's official release.")
Q(S2, 'U', "Why are high-fidelity prototypes suitable for stakeholder presentations?", "They closely resemble the real product",
  ["They are the cheapest to make", "They show only the basic layout", "They have no user interface"],
  "High-fidelity prototypes look and work like the actual product, which makes them valuable for usability studies and stakeholder presentations.")
Q(S2, 'U', "Why are low-fidelity prototypes ideal for early-stage ideation?", "They are quick and inexpensive to create",
  ["They look exactly like the final product", "They need the final program code", "They are the last stage of testing"],
  "Low-fidelity prototypes are quick and cheap, so they suit early-stage ideation and concept validation.")
Q(S2, 'A', "A team wants to check whether its new sensor idea is technically possible, without worrying about looks. Which prototype fits?", "Proof-of-concept prototype",
  ["Beta prototype", "Digital prototype", "Paper prototype"],
  "A proof-of-concept prototype validates the technical feasibility of a concept.")
Q(S2, 'A', "On the first day of a project, a team wants a quick and cheap check of an app's layout. Which prototype fits?", "A sketch or wireframe",
  ["A beta version", "An alpha version", "A working 3D model"],
  "Sketches and wireframes are quick and inexpensive, which is ideal for early layout checks.")

# ---------------- 8.2.2 ----------------
Q(S3, 'U', "A designer shows a sketch to a client so that everybody understands the idea. Which importance of prototyping is this?", "Visualization and communication",
  ["Risk reduction", "Cost savings", "Investor confidence"],
  "Prototypes are a tangible way to communicate ideas to stakeholders, team members and users.")
Q(S3, 'U', "Collecting feedback from end-users early in development is part of:", "user-centered design",
  ["risk reduction", "investor confidence", "market expansion"],
  "Prototyping lets designers gather feedback early, so the final product addresses real user needs.")
Q(S3, 'U', "Finding design flaws before full-scale production reduces:", "the risk of costly errors",
  ["the number of users", "the need for any feedback", "the size of the market"],
  "Prototypes help developers address design flaws and technical problems before investing resources, which mitigates risk.")
Q(S3, 'U', "Creating several improved versions of a product based on feedback is called:", "iterative development",
  ["risk reduction", "visualization", "market expansion"],
  "Prototyping supports an iterative approach in which multiple versions are created and improved on feedback.")
Q(S3, 'U', "Why is it cheaper to fix problems during prototyping?", "Changes cost less before production starts",
  ["Prototypes never have problems", "Customers pay for the repairs", "Fixes are impossible after launch"],
  "It is more cost-effective to rectify problems in the prototype phase than after manufacturing or deployment.")
Q(S3, 'U', "Why do high-fidelity prototypes win investors' confidence?", "They give a realistic preview of the product",
  ["They are free of any cost", "They hide the product's weaknesses", "They replace the final product"],
  "High-fidelity prototypes can secure funding because they show the product's capabilities and potential realistically.")
Q(S3, 'K', "Prototypes make abstract ideas:", "concrete and easier to understand",
  ["private and hidden from users", "costly and hard to explain", "fixed and impossible to change"],
  "Prototypes make abstract ideas concrete so everyone involved can understand the vision.")
Q(S3, 'K', "Prototyping supports which approach to design?", "Iterative and user-centered",
  ["One-time and fixed", "Secret and individual", "Production-first"],
  "Prototyping supports an iterative, user-centered design process.")
Q(S3, 'A', "A start-up wants to secure funding by impressing investors. Which prototype helps most?", "A high-fidelity prototype",
  ["A rough paper sketch", "A list of ideas", "A report of bugs"],
  "High-fidelity prototypes give investors a realistic preview of the final product.")
Q(S3, 'A', "A team skips prototyping and builds the product. Users dislike the layout and the whole product must be redesigned. Which benefit was lost?", "Cost savings",
  ["Market expansion", "Customer loyalty", "Revenue generation"],
  "Problems are cheaper to fix in the prototype phase; late design changes are costly.")
Q(S3, 'U', "The items in the table are reasons for:" + stim(T(['Reasons'], [['Visualization and communication'], ['User-centered design'], ['Risk reduction'], ['Iterative development']])), "prototyping in product development",
  ["choosing a business name", "advertising a final product", "packaging a physical product"],
  "These, with cost savings and investor confidence, are the importance of prototyping in the product development process.")

# ---------------- 8.3.1 ----------------
Q(S4, 'K', "Adobe XD, Sketch, Figma and InVision are used for:", "digital prototyping",
  ["3D printing", "paper sketching", "database coding"],
  "Graphic design or prototyping software such as Adobe XD, Sketch, Figma and InVision creates interactive digital prototypes.")
Q(S4, 'K', "Which languages can developers use for high-fidelity interactive prototypes?", "HTML, CSS and JavaScript",
  ["SQL, Bash and Fortran", "COBOL, Pascal and C", "Basic, SQL and Perl"],
  "Web and app developers may use HTML, CSS and JavaScript to create functional prototypes.")
Q(S4, 'K', "Fusion 360 and Blender are examples of:", "3D modeling software",
  ["prototyping kits", "3D scanners", "web browsers"],
  "3D modeling software such as Fusion 360 or Blender is used to create 3D models of physical products.")
Q(S4, 'U', "A 3D printer is used to:", "turn digital designs into tangible objects",
  ["scan objects into digital models", "draw wireframes on paper", "write code for web apps"],
  "3D printers transform digital designs into tangible physical prototypes.")
Q(S4, 'U', "Which device scans an existing object and converts it into a digital model?", "3D scanner",
  ["3D printer", "Arduino kit", "Foamboard"],
  "3D scanners scan existing objects and convert them into digital models for modification or replication.")
Q(S4, 'U', "Cardboard and foamboard are best suited to:", "low-cost, low-fidelity physical prototypes",
  ["durable high-fidelity prototypes", "interactive digital prototypes", "3D-printed final models"],
  "Cardboard and foamboard are excellent for building low-cost, low-fidelity physical prototypes.")
Q(S4, 'U', "Wood, plastic or metal are used to build:", "durable, high-fidelity physical prototypes",
  ["quick paper sketches", "digital wireframes", "storyboards"],
  "More durable and high-fidelity physical prototypes are commonly made of wood, plastic or metal.")
Q(S4, 'A', "A student wants to build an electronics prototype of a smart alarm. Which item suits the work?", "An Arduino prototyping kit",
  ["A sketchbook and pencils", "A 3D scanner", "A foamboard sheet"],
  "Specialized prototyping kits such as Arduino kits are used for electronics prototypes.")

# ---------------- 8.3.2 ----------------
Q(S5, 'K', "Which of the following is one of the common prototyping methods?", "Wizard of Oz prototyping",
  ["Waterfall prototyping", "Black-box prototyping", "Binary prototyping"],
  "The common methods include sketches, paper interfaces, storyboards, Lego prototypes, role playing, physical models, Wizard of Oz and user-driven prototypes.")
Q(S5, 'K', "Which is an example of a low-fidelity digital prototype?", "A wireframe with placeholder text",
  ["A beta version with real data", "The final coded application", "A 3D-printed model"],
  "Wireframes or mock-ups made in design software with minimal details are low-fidelity digital prototypes.")
Q(S5, 'U', "Why are placeholder text and generic icons used in low-fidelity digital prototypes?", "To show content and function without detail",
  ["To hide the product from users", "To make the product final", "To increase the cost of the work"],
  "They convey content and functionality while keeping the prototype simple.")
Q(S5, 'U', "In paper prototyping, sticky notes or index cards are used to:", "simulate interactive elements",
  ["print the final product", "store customer data", "write program code"],
  "Sticky notes and cards are moved or swapped manually to simulate the user's interactions.")
Q(S5, 'U', "The methods in the table are examples of:" + stim(T(['Methods'], [['Sketches and diagrams'], ['Storyboards'], ['Role playing'], ['Physical models']])), "common prototyping methods",
  ["software testing types", "encryption methods", "data sampling methods"],
  "Sketches, storyboards, role playing and physical models are among the eight most common prototyping methods.")
Q(S5, 'U', "In a low-fidelity physical prototype, which should come first?", "Basic form, size and function",
  ["Final colours and logos", "Fine surface finishing", "Advertising plans"],
  "Low-fidelity physical prototypes focus on basic form, size and function, keeping aesthetics secondary.")
Q(S5, 'A', "A designer tests a cardboard mock-up of a handheld device for comfort and fit. What is this?", "A low-fidelity physical prototype",
  ["A high-fidelity digital prototype", "A beta prototype", "A proof-of-concept program"],
  "A cardboard mock-up tested for ergonomics and fit is a low-fidelity physical prototype.")

# ---------------- 8.3.3 ----------------
Q(S6, 'K', "Which step is missing in the iterative cycle?" + stim(iter_loop_svg(missing=2)), "Make changes",
  ["Print the product", "Launch the product", "Sell the product"],
  "Iterating means making changes to the prototype based on feedback and analysis, followed by repeat testing.")
Q(S6, 'K', "Iterative design means creating, testing and what, many times?", "Refining the design",
  ["Deleting the design", "Selling the design", "Copying the design"],
  "Prototyping is an iterative process of creating, testing and refining designs multiple times.")
Q(S6, 'U', "After revising a prototype, the next step is to:", "test the updated prototype again",
  ["launch it at once", "stop collecting feedback", "delete the old data"],
  "After revisions, further testing is conducted with the updated prototype.")
Q(S6, 'U', "When does a team move to high-fidelity prototyping?", "When the design matures and confidence grows",
  ["Before any sketch is made", "When all users dislike it", "After the product is sold"],
  "As the design matures and confidence in the concept grows, the team moves to high-fidelity prototypes.")
Q(S6, 'U', "Why is each change documented during the iterations?", "To keep a record of design decisions",
  ["To hide the earlier designs", "To remove user feedback", "To avoid any further testing"],
  "Documentation maintains a record of the design evolution for reference and future development.")
Q(S6, 'U', "Which data helps a team to find common pain points in a prototype?", "Observations from usability tests",
  ["Competitors' price lists", "Staff attendance sheets", "Social media likes"],
  "Analyzing data and observations from usability tests shows common pain points, issues and patterns.")
Q(S6, 'A', "A team gets mixed comments after the first round of testing. What should it do before the next round?", "Analyze the feedback and revise the prototype",
  ["Launch the product anyway", "Ignore all the comments", "Start a different product"],
  "Feedback is analyzed to find improvements and the prototype is revised before it is tested again.")
Q(S6, 'U', "Final validation of the product is done using:", "high-fidelity prototypes with users and stakeholders",
  ["rough paper sketches with competitors", "old products with the staff only", "advertisements with the public"],
  "High-fidelity prototypes are used for final validation with users and stakeholders to confirm that the product meets expectations.")

Q(S1, 'K', "Successful product development is a cornerstone of business:", "sustainability and growth",
  ["closure and loss", "secrecy and delay", "taxes and rules"],
  "The book calls successful product development a cornerstone of business sustainability and growth.")
