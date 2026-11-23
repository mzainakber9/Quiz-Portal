# -*- coding: utf-8 -*-
from lib import *
C = 5
def Q(sec, lvl, q, ans, wrong, why): add(C, sec, lvl, q, ans, wrong, why)
S1 = "5.1 Introduction to Internet of Things"
S2 = "5.2.1 Wireless sensor networks"
S3 = "5.2.2 Cloud computing"
S4 = "5.2.3 Big data analytics"
S5 = "5.2.4 Communication protocols"
S6 = "5.2.5 Embedded systems"

# ---------------- 5.1 IoT ----------------
Q(S1, 'K', "In the term Internet of Things, the word 'Things' means:", "physical devices such as smart watches and door locks",
  ["websites that store large amounts of user data", "software programs that run on remote servers", "wireless signals that carry data between towers"],
  "'Things' are physical devices (smart mobiles, watches, bulbs, door locks, TVs, etc.) that are connected through the Internet.")
Q(S1, 'K', "Which of the following is a wireless technology used for creating IoT networks?", "Zigbee",
  ["Coaxial cable", "HDMI port", "Serial port"],
  "Wi-Fi, Bluetooth, Zigbee and NFC are the wireless technologies used to create IoT networks.")
Q(S1, 'K', "What does NFC stand for?", "Near Field Communication",
  ["Network Field Control", "Near Frequency Connection", "Nearby File Copying"],
  "NFC is Near Field Communication, one of the wireless technologies used with IoT devices.")
Q(S1, 'U', "Which change in devices has helped IoT applications to grow?", "Smaller size with higher processing power",
  ["Larger size with lower processing power", "Shorter battery life with higher cost", "Wired links with fixed locations"],
  "Advancement in technology gave devices smaller size, higher processing power and longer battery power, which made IoT practical.")
Q(S1, 'U', "A smart door lock sends an alert to the owner's phone over Wi-Fi when someone opens it. This is an example of:", "Internet of Things",
  ["Blockchain", "Cryptocurrency", "Big data analytics"],
  "A physical device (door lock) connected through the Internet to communicate with the owner is an IoT application.")
Q(S1, 'K', "Which pair contains two wireless technologies used in IoT networks?", "Wi-Fi and Bluetooth",
  ["HDMI and VGA", "USB and Ethernet", "SATA and PCIe"],
  "Wi-Fi and Bluetooth (with Zigbee and NFC) are wireless; the other pairs are wired connections.")
Q(S1, 'U', "Why do IoT devices need the Internet?", "To communicate with each other and with users",
  ["To increase their own physical size", "To generate their own electricity", "To store firmware permanently"],
  "In IoT the Internet is the means through which the devices are connected for communication.")
Q(S1, 'U', "In the figure, which part connects the smart devices to the cloud servers?" + stim(iot_flow_svg(missing=1)), "Internet",
  ["Mobile app", "Firmware", "Ledger"],
  "IoT devices send their data over the Internet to cloud servers, and users reach it through an app.")

# ---------------- WSN ----------------
Q(S2, 'K', "A wireless sensor network (WSN) is a network of:", "physical devices embedded with sensors and software",
  ["wired computers that share one printer", "servers that store blockchain ledgers", "satellites that relay television signals"],
  "A WSN consists of physical devices, appliances and machines that have sensors and software and communicate over wireless channels.")
Q(S2, 'K', "The three types of sensors used to monitor conditions are environmental, industrial and:", "motion detection",
  ["optical imaging", "biological testing", "memory storage"],
  "The book groups sensors into environmental, industrial and motion detection sensors.")
Q(S2, 'K', "Temperature, humidity and air quality sensors belong to which type?", "Environmental sensors",
  ["Industrial sensors", "Motion detection sensors", "Security sensors"],
  "Environmental sensors measure and monitor environmental conditions such as temperature, humidity, air quality, pressure, wind speed and light.")
Q(S2, 'K', "Fluid flow, gas and viscosity sensors are examples of which type?", "Industrial sensors",
  ["Environmental sensors", "Motion detection sensors", "Climate sensors"],
  "Industrial sensors measure physical quantities in the manufacturing process: heat, pressure, gas, vibration, viscosity, fluid flow and magnetic field.")
Q(S2, 'K', "What does PIR stand for in a PIR sensor?", "Passive Infrared",
  ["Public Internet Relay", "Positive Input Reader", "Primary Index Radar"],
  "A Passive Infrared (PIR) sensor is a motion detection sensor.")
Q(S2, 'K', "Which sensor is used for measuring distance?", "Ultrasonic sensor",
  ["PIR sensor", "Light sensor", "Humidity sensor"],
  "The ultrasonic sensor measures distance, while the PIR sensor detects motion.")
Q(S2, 'U', "A factory monitors pressure and fluid flow inside its production pipes. Which type of sensors does it use?", "Industrial sensors",
  ["Environmental sensors", "Motion detection sensors", "Atmospheric sensors"],
  "Measuring physical quantities such as pressure and fluid flow in a manufacturing process needs industrial sensors.")
Q(S2, 'U', "An alarm is triggered when someone enters a restricted hall of a museum. Which type of sensor is working?", "Motion detection sensor",
  ["Environmental sensor", "Industrial sensor", "Atmospheric sensor"],
  "Motion detection sensors detect movement of humans or objects and prevent unauthorized movement in restricted areas.")
Q(S2, 'U', "Which sensor completes the group of environmental sensors in the table?" +
  stim(truth_html(['Environmental sensors'], [['Temperature'], ['Humidity'], ['Air pressure'], ['?']])), "Wind speed",
  ["Viscosity", "Magnetic field", "Proximity"],
  "Wind speed is an environmental sensor; viscosity and magnetic field are industrial and proximity is a motion detection sensor.")
Q(S2, 'U', "Which sensor completes the group of motion detection sensors in the table?" +
  stim(truth_html(['Motion detection sensors'], [['Ultrasonic'], ['Proximity'], ['?']])), "Passive Infrared (PIR)",
  ["Gas", "Viscosity", "Humidity"],
  "Ultrasonic, proximity and PIR are motion detection sensors; gas, viscosity and humidity belong to the other two types.")
Q(S2, 'K', "Which of these is an example of a WSN used in IoT systems?", "Weather monitoring system",
  ["Spreadsheet calculation", "Offline video editing", "Document typing"],
  "Surveillance, weather monitoring, structural health monitoring and smart grids are WSN examples in IoT.")
Q(S2, 'U', "In a smart grid, a WSN is used for:", "monitoring and managing electricity transport",
  ["storing patient records in blocks", "sorting large sets of marks", "translating text between languages"],
  "A smart grid electricity network uses WSNs to monitor and manage the transport of electricity.")
Q(S2, 'A', "Wireless sensors are fixed on a bridge to watch its condition continuously. Which WSN application is this?", "Structural health monitoring",
  ["Weather monitoring", "Surveillance", "Smart grid"],
  "Structural health monitoring in civil engineering uses WSNs to check the condition of structures such as bridges.")

# ---------------- cloud ----------------
Q(S3, 'K', "Cloud computing provides storage, servers and application services:", "over the Internet",
  ["through USB drives", "inside one computer only", "by using printed manuals"],
  "Cloud computing is an IT infrastructure that delivers data storage, databases, servers, networking and software over the Internet.")
Q(S3, 'K', "Which list shows the four cloud computing models?", "Public, private, community, hybrid",
  ["Public, private, consortium, hybrid", "Public, private, community, social", "Local, private, community, hybrid"],
  "The four cloud models are public, private, community and hybrid cloud (consortium is a blockchain network, not a cloud model here).")
Q(S3, 'K', "In which cloud model are resources owned and operated by a cloud service provider and delivered over the Internet?", "Public cloud",
  ["Private cloud", "Community cloud", "Hybrid cloud"],
  "In the public cloud the provider owns, manages and maintains the resources instead of the user installing them in-house.")
Q(S3, 'K', "Amazon Web Services, Microsoft Azure and Google Cloud are examples of:", "public cloud providers",
  ["private cloud owners", "community cloud users", "blockchain networks"],
  "AWS, Microsoft Azure and Google Cloud provide public cloud services to remote users worldwide.")
Q(S3, 'U', "Which cloud model is shown in the figure?" + stim(cloud_svg('private')), "Private cloud",
  ["Public cloud", "Community cloud", "Hybrid cloud"],
  "A cloud dedicated to a single organization is a private cloud.")
Q(S3, 'U', "Which cloud model is shown in the figure?" + stim(cloud_svg('public')), "Public cloud",
  ["Private cloud", "Community cloud", "Hybrid cloud"],
  "One provider-owned cloud serving many different users over the Internet is a public cloud.")
Q(S3, 'U', "Which cloud model is shown in the figure?" + stim(cloud_svg('community')), "Community cloud",
  ["Public cloud", "Private cloud", "Hybrid cloud"],
  "A cloud shared by several organizations with common needs (security, policy, compliance) is a community cloud.")
Q(S3, 'U', "Which cloud model is shown in the figure?" + stim(cloud_svg('hybrid')), "Hybrid cloud",
  ["Public cloud", "Private cloud", "Community cloud"],
  "A combination of a private cloud and a public cloud with data and applications shared between them is a hybrid cloud.")
Q(S3, 'U', "In a hybrid cloud, data and applications can be:", "shared between public and private clouds",
  ["kept only on the public cloud", "stored only on local USB drives", "deleted from both clouds daily"],
  "Hybrid cloud uses technology that allows data and applications to be shared between the public and private clouds.")
Q(S3, 'U', "Why does a private cloud need a huge investment?", "The organization owns and maintains the infrastructure",
  ["Providers charge a fee for every user", "The resources are shared with other firms", "It stores data in chained blocks"],
  "The user organization is responsible for the hardware, software and network of its own private cloud, which makes it costly.")
Q(S3, 'U', "Which order lists the cloud models from the least secure to the most secure?", "Public, community, private",
  ["Private, community, public", "Community, public, private", "Public, private, community"],
  "Community cloud is more secure than public cloud but less secure than private cloud.")
Q(S3, 'A', "A bank wants full control over its servers and the best protection for customer data. Which cloud model suits it best?", "Private cloud",
  ["Public cloud", "Community cloud", "Hybrid cloud"],
  "A private cloud gives more control over servers and network and is the most secure model.")
Q(S3, 'A', "A small start-up has no money for hardware and wants to pay only for the resources it uses. Which model suits it?", "Public cloud",
  ["Private cloud", "Community cloud", "On-site servers"],
  "Public cloud services are offered on pay-per-usage or subscription charges, with no in-house infrastructure to maintain.")
Q(S3, 'A', "Three government departments with common security and compliance needs want to share one cloud and its cost. Which model fits?", "Community cloud",
  ["Public cloud", "Private cloud", "Hybrid cloud"],
  "A community cloud serves several organizations with common concerns and is cost effective because the cost is shared.")
Q(S3, 'A', "A company runs its everyday tasks on a public cloud but keeps its sensitive data on its own private cloud. Which model is it using?", "Hybrid cloud",
  ["Community cloud", "Public cloud", "Private cloud"],
  "Using both a public cloud (general tasks) and a private cloud (sensitive data) together is a hybrid cloud.")

# ---------------- big data ----------------
Q(S4, 'K', "Big data analytics collects extremely large data from various sources and uses software to find:", "market trends and patterns",
  ["hardware faults and errors", "network cable lengths", "printer and scanner drivers"],
  "Big data analytics uses analytics software on very large data to find market trends, patterns and insights.")
Q(S4, 'U', "Why can traditional databases not handle the data created by banking, emails and mobile apps every day?", "The volume of data is too huge",
  ["The data is always encrypted", "The data has no digital form", "The data is created once a year"],
  "A huge volume of data is created daily from digital sources, which cannot be handled by traditional databases.")
Q(S4, 'U', "What does big data analytics do with the data collected by IoT devices?", "Turns it into actionable information",
  ["Converts it into new hardware", "Blocks it from reaching users", "Stores it in a chain of blocks"],
  "Big data analytics transforms IoT data into actionable information to improve decision-making.")
Q(S4, 'K', "Which of the following is an area of big data analytics?", "Healthcare industry",
  ["Font designing", "Printer repair", "Typing practice"],
  "Healthcare, transport, banking, insurance, digital marketing, media and government are areas of big data analytics.")
Q(S4, 'A', "A supermarket studies millions of customer receipts to find which items are often bought together. This is an example of:", "big data analytics",
  ["an embedded system", "a wireless sensor network", "a private blockchain"],
  "Analysing very large amounts of data to find patterns and insights for business decisions is big data analytics.")
Q(S4, 'U', "Which of the following data sources produces 'big data'?", "Millions of mobile app users",
  ["One handwritten note", "A small text file", "A pocket calculator"],
  "Big data comes from sources like mobile apps, banking transactions and medical records that create huge volumes of data.")

# ---------------- protocols ----------------
Q(S5, 'K', "An IoT communication protocol is a set of:", "rules for transferring and understanding data",
  ["sensors that detect motion", "programs stored in firmware", "servers that keep a ledger"],
  "A protocol is a set of rules that govern how data is transferred and understood between IoT devices, sensors and end users.")
Q(S5, 'U', "Two smart devices made by different companies cannot understand each other's messages. Which IoT technology is missing?", "A common communication protocol",
  ["A bigger battery", "A faster microcontroller", "A private blockchain"],
  "Protocols give the agreed rules for exchanging information between IoT devices and end users.")
Q(S5, 'K', "Which option completes the list of technologies that enabled IoT?" +
  stim(truth_html(['Technologies that enabled IoT'], [['Wireless sensor networks'], ['Cloud computing'], ['Big data analytics'], ['?'], ['Embedded systems']])), "Communication protocols",
  ["Digital signatures", "Hashing algorithms", "Language compilers"],
  "The five enabling technologies are WSN, cloud computing, big data analytics, communication protocols and embedded systems.")
Q(S5, 'K', "Communication protocols are needed in IoT for the:", "proper functioning of IoT-enabled devices",
  ["printing of ledger blocks", "storage of firmware code", "cooling of microcontrollers"],
  "Protocols provide the exchange of information and methods of connection that IoT-enabled devices need to work properly.")

# ---------------- embedded ----------------
Q(S6, 'K', "Firmware is software that is:", "permanently installed in a device",
  ["downloaded again for every use", "stored only on cloud servers", "written by the user every day"],
  "Firmware is software permanently installed in a device or electronic machine.")
Q(S6, 'K', "An embedded system is a combination of hardware and:", "firmware",
  ["freeware", "malware", "middleware"],
  "Embedded systems are small electronic devices made of hardware and firmware.")
Q(S6, 'K', "Which component controls an embedded system through its firmware?", "A microcontroller",
  ["A hard disk", "A router", "A keyboard"],
  "An embedded system has a microcontroller or microprocessor that controls its operation through firmware.")
Q(S6, 'K', "An embedded system is designed to perform:", "a specific task",
  ["any task the user wants", "only networking tasks", "only gaming tasks"],
  "Unlike a general-purpose computer, an embedded system is designed for a specific task.")
Q(S6, 'U', "Which of the following is an embedded system?", "A washing machine",
  ["A desktop computer", "A laptop computer", "A web server"],
  "Washing machines, ovens and security systems are embedded systems built to do a specific job.")
Q(S6, 'U', "In the figure, which part runs the firmware and makes decisions?" + stim(embedded_svg(True)), "Microcontroller",
  ["Temperature sensor", "Heater", "Battery"],
  "The microcontroller reads the sensor and controls the heater according to the firmware.")
Q(S6, 'A', "A smart air conditioner checks the room temperature and adjusts cooling by itself. Where are its control instructions permanently stored?", "In its firmware",
  ["In a cloud ledger", "In big data tools", "In a public blockchain"],
  "Embedded systems monitor conditions such as room temperature and adjust automatically through instructions kept in firmware.")
