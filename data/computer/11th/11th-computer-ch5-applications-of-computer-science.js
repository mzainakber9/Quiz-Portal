// Class 11 Computer Science — Unit 5: Applications of Computer Science
// 100 MCQs, each with an explanation. Based on the NBF Grade 11 Computer Science textbook (Unit 5, pp.155-168) and the SLOs
// CS-11-E-01 (technologies behind IoT, cloud computing and blockchain) and CS-11-E-02 (stakeholders' interests in AI system design).
// Mix follows the FBISE model paper: about 30% Knowledge, 50% Understanding, 20% Application, with scenario, diagram and table questions.
// Question/explanation text is inserted as HTML (so < > & are written as entities); options are plain text.
// Diagrams are inline SVG.
QuizBank.register({
  class: "11th",
  subject: "Computer",
  type: "chapter",
  id: "ch5",
  label: "Unit 5: Applications of Computer Science",
  order: 5,
  questions: function () {
    return [
    {
      q: "In the term Internet of Things, the word 'Things' means:",
      options: ["physical devices such as smart watches and door locks", "websites that store large amounts of user data", "software programs that run on remote servers", "wireless signals that carry mobile calls between towers"],
      ans: "physical devices such as smart watches and door locks",
      reason: "'Things' are physical devices (smart mobiles, watches, bulbs, door locks, TVs, etc.) that are connected through the Internet."
    },
    {
      q: "Which of the following is a wireless technology used for creating IoT networks?",
      options: ["Zigbee", "Coaxial cable", "HDMI port", "Serial port"],
      ans: "Zigbee",
      reason: "Wi-Fi, Bluetooth, Zigbee and NFC are the wireless technologies used to create IoT networks."
    },
    {
      q: "What does NFC stand for?",
      options: ["Near Field Communication", "Network Field Control", "Near Frequency Connection", "Nearby File Copying"],
      ans: "Near Field Communication",
      reason: "NFC is Near Field Communication, one of the wireless technologies used with IoT devices."
    },
    {
      q: "Which change in devices has helped IoT applications to grow?",
      options: ["Smaller size with higher processing power", "Larger size with lower processing power", "Shorter battery life with a higher price tag", "Wired links with fixed locations"],
      ans: "Smaller size with higher processing power",
      reason: "Advancement in technology gave devices smaller size, higher processing power and longer battery power, which made IoT practical."
    },
    {
      q: "A smart door lock sends an alert to the owner's phone over Wi-Fi when someone opens it. This is an example of:",
      options: ["Internet of Things", "Blockchain", "Cryptocurrency", "Big data analytics"],
      ans: "Internet of Things",
      reason: "A physical device (door lock) connected through the Internet to communicate with the owner is an IoT application."
    },
    {
      q: "Which pair contains two wireless technologies used in IoT networks?",
      options: ["Wi-Fi and Bluetooth", "HDMI and VGA", "USB and Ethernet", "SATA and PCIe"],
      ans: "Wi-Fi and Bluetooth",
      reason: "Wi-Fi and Bluetooth (with Zigbee and NFC) are wireless; the other pairs are wired connections."
    },
    {
      q: "Why do IoT devices need the Internet?",
      options: ["To exchange data with users and other devices", "To increase the physical size of every device", "To generate electricity for their batteries", "To store their firmware permanently"],
      ans: "To exchange data with users and other devices",
      reason: "In IoT the Internet is the means through which the devices are connected for communication."
    },
    {
      q: "In the figure, which part connects the smart devices to the cloud servers?<div class=\"stimulus\"><svg viewBox=\"0 0 370 84\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"8\" y=\"20\" width=\"76\" height=\"44\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"46.0\" y=\"39.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Smart</text><text x=\"46.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">devices</text><line x1=\"84\" y1=\"42\" x2=\"100\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"100\" y=\"20\" width=\"76\" height=\"44\" rx=\"4\" fill=\"#ffe0e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"138.0\" y=\"46.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">?</text><line x1=\"176\" y1=\"42\" x2=\"192\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"192\" y=\"20\" width=\"76\" height=\"44\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"230.0\" y=\"39.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Cloud</text><text x=\"230.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">servers</text><line x1=\"268\" y1=\"42\" x2=\"284\" y2=\"42\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"284\" y=\"20\" width=\"76\" height=\"44\" rx=\"4\" fill=\"#f3e5f5\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"322.0\" y=\"39.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Mobile</text><text x=\"322.0\" y=\"53.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">app</text></svg></div>",
      options: ["Internet", "Mobile app", "Firmware", "Ledger"],
      ans: "Internet",
      reason: "IoT devices send their data over the Internet to cloud servers, and users reach it through an app."
    },
    {
      q: "A wireless sensor network (WSN) is a network of:",
      options: ["devices with embedded sensors and software", "wired computers that share a single printer", "servers that store the blockchain ledger", "satellites that relay television signals"],
      ans: "devices with embedded sensors and software",
      reason: "A WSN consists of physical devices, appliances and machines that have sensors and software and communicate over wireless channels."
    },
    {
      q: "The three types of sensors used to monitor conditions are environmental, industrial and:",
      options: ["motion detection", "optical imaging", "biological testing", "memory storage"],
      ans: "motion detection",
      reason: "The book groups sensors into environmental, industrial and motion detection sensors."
    },
    {
      q: "The sensors listed in the table belong to which type?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Sensors</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Temperature</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Humidity</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Air quality</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Light</td></tr></table></div>",
      options: ["Environmental sensors", "Industrial sensors", "Motion detection sensors", "Security sensors"],
      ans: "Environmental sensors",
      reason: "Environmental sensors measure and monitor environmental conditions such as temperature, humidity, air quality, pressure, wind speed and light."
    },
    {
      q: "The sensors listed in the table belong to which type?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Sensors</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Heat</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Pressure</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Gas</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Viscosity</td></tr></table></div>",
      options: ["Industrial sensors", "Environmental sensors", "Motion detection sensors", "Climate sensors"],
      ans: "Industrial sensors",
      reason: "Industrial sensors measure physical quantities in the manufacturing process: heat, pressure, gas, vibration, viscosity, fluid flow and magnetic field."
    },
    {
      q: "What does PIR stand for in a PIR sensor?",
      options: ["Passive Infrared", "Public Internet Relay", "Positive Input Reader", "Primary Index Radar"],
      ans: "Passive Infrared",
      reason: "A Passive Infrared (PIR) sensor is a motion detection sensor."
    },
    {
      q: "Which sensor is used for measuring distance?",
      options: ["Ultrasonic sensor", "PIR sensor", "Light sensor", "Humidity sensor"],
      ans: "Ultrasonic sensor",
      reason: "The ultrasonic sensor measures distance, while the PIR sensor detects motion."
    },
    {
      q: "A factory monitors pressure and fluid flow inside its production pipes. Which type of sensors does it use?",
      options: ["Industrial sensors", "Environmental sensors", "Motion detection sensors", "Atmospheric sensors"],
      ans: "Industrial sensors",
      reason: "Measuring physical quantities such as pressure and fluid flow in a manufacturing process needs industrial sensors."
    },
    {
      q: "An alarm is triggered when someone enters a restricted hall of a museum. Which type of sensor is working?",
      options: ["Motion detection sensor", "Environmental sensor", "Industrial sensor", "Atmospheric sensor"],
      ans: "Motion detection sensor",
      reason: "Motion detection sensors detect movement of humans or objects and prevent unauthorized movement in restricted areas."
    },
    {
      q: "Which sensor completes the group of environmental sensors in the table?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Environmental sensors</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Temperature</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Humidity</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Air pressure</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>",
      options: ["Wind speed", "Viscosity", "Magnetic field", "Proximity"],
      ans: "Wind speed",
      reason: "Wind speed is an environmental sensor; viscosity and magnetic field are industrial and proximity is a motion detection sensor."
    },
    {
      q: "Which sensor completes the group of motion detection sensors in the table?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Motion detection sensors</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Ultrasonic</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Proximity</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>",
      options: ["PIR sensor", "Gas sensor", "Viscosity sensor", "Humidity sensor"],
      ans: "PIR sensor",
      reason: "Ultrasonic, proximity and Passive Infrared (PIR) sensors are motion detection sensors; gas, viscosity and humidity sensors belong to the other two types."
    },
    {
      q: "Which of these is an example of a WSN used in IoT systems?",
      options: ["Weather monitoring system", "Spreadsheet calculation", "Offline video editing", "Document typing"],
      ans: "Weather monitoring system",
      reason: "Surveillance, weather monitoring, structural health monitoring and smart grids are WSN examples in IoT."
    },
    {
      q: "In a smart grid, a WSN is used for:",
      options: ["managing the transport of electricity", "storing patient records in a ledger", "sorting large sets of student marks", "translating spoken text between two languages"],
      ans: "managing the transport of electricity",
      reason: "A smart grid electricity network uses WSNs to monitor and manage the transport of electricity."
    },
    {
      q: "Wireless sensors are fixed on a bridge to watch its condition continuously. Which WSN application is this?",
      options: ["Structural health monitoring", "Weather monitoring systems", "Surveillance systems", "Smart grid electricity network"],
      ans: "Structural health monitoring",
      reason: "Structural health monitoring in civil engineering uses WSNs to check the condition of structures such as bridges."
    },
    {
      q: "Cloud computing provides storage, servers and application services:",
      options: ["over the Internet", "through USB drives", "inside one computer only", "by using printed manuals"],
      ans: "over the Internet",
      reason: "Cloud computing is an IT infrastructure that delivers data storage, databases, servers, networking and software over the Internet."
    },
    {
      q: "Which list shows the four cloud computing models?",
      options: ["Public, private, community, hybrid", "Public, private, consortium, hybrid", "Public, private, community, social", "Local, private, community, hybrid"],
      ans: "Public, private, community, hybrid",
      reason: "The four cloud models are public, private, community and hybrid cloud (consortium is a blockchain network, not a cloud model here)."
    },
    {
      q: "In which cloud model are resources owned and operated by a cloud service provider and delivered over the Internet?",
      options: ["Public cloud", "Private cloud", "Community cloud", "Hybrid cloud"],
      ans: "Public cloud",
      reason: "In the public cloud the provider owns, manages and maintains the resources instead of the user installing them in-house."
    },
    {
      q: "Amazon Web Services, Microsoft Azure and Google Cloud are examples of:",
      options: ["public cloud providers", "private cloud owners", "community cloud users", "blockchain networks"],
      ans: "public cloud providers",
      reason: "AWS, Microsoft Azure and Google Cloud provide public cloud services to remote users worldwide."
    },
    {
      q: "Which cloud model is shown in the figure?<div class=\"stimulus\"><svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"40\" y=\"8\" width=\"240\" height=\"140\" rx=\"8\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"1.6\" stroke-dasharray=\"6,4\"/><text x=\"160\" y=\"24\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">One organization</text><ellipse cx=\"160\" cy=\"62\" rx=\"75.0\" ry=\"24.0\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"66\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Cloud</text><rect x=\"105\" y=\"108\" width=\"110\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160.0\" y=\"126.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Staff and systems</text><line x1=\"160\" y1=\"108\" x2=\"160\" y2=\"86\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/></svg></div>",
      options: ["Private cloud", "Public cloud", "Community cloud", "Hybrid cloud"],
      ans: "Private cloud",
      reason: "A cloud dedicated to a single organization is a private cloud."
    },
    {
      q: "Which cloud model is shown in the figure?<div class=\"stimulus\"><svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><ellipse cx=\"160\" cy=\"40\" rx=\"95.0\" ry=\"28.0\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"37\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Cloud owned by</text><text x=\"160\" y=\"51\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">service provider</text><rect x=\"8\" y=\"118\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"40.0\" y=\"136.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Business</text><line x1=\"40\" y1=\"118\" x2=\"106.0\" y2=\"66\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"88\" y=\"118\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"120.0\" y=\"136.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">School</text><line x1=\"120\" y1=\"118\" x2=\"142.0\" y2=\"66\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"168\" y=\"118\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"200.0\" y=\"136.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Shop</text><line x1=\"200\" y1=\"118\" x2=\"178.0\" y2=\"66\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"248\" y=\"118\" width=\"64\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"280.0\" y=\"136.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Person</text><line x1=\"280\" y1=\"118\" x2=\"214.0\" y2=\"66\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/></svg></div>",
      options: ["Public cloud", "Private cloud", "Community cloud", "Hybrid cloud"],
      ans: "Public cloud",
      reason: "One provider-owned cloud serving many different users over the Internet is a public cloud."
    },
    {
      q: "Which cloud model is shown in the figure?<div class=\"stimulus\"><svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><ellipse cx=\"160\" cy=\"40\" rx=\"80.0\" ry=\"26.0\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"44\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Shared cloud</text><rect x=\"20\" y=\"112\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"55.0\" y=\"130.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Org A</text><line x1=\"55\" y1=\"112\" x2=\"118.0\" y2=\"66\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\" marker-start=\"url(#ah)\"/><rect x=\"125\" y=\"112\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160.0\" y=\"130.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Org B</text><line x1=\"160\" y1=\"112\" x2=\"160.0\" y2=\"66\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\" marker-start=\"url(#ah)\"/><rect x=\"230\" y=\"112\" width=\"70\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"265.0\" y=\"130.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Org C</text><line x1=\"265\" y1=\"112\" x2=\"202.0\" y2=\"66\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\" marker-start=\"url(#ah)\"/><text x=\"160\" y=\"158\" text-anchor=\"middle\" font-size=\"11\" fill=\"#555\">Same security and compliance needs</text></svg></div>",
      options: ["Community cloud", "Public cloud", "Private cloud", "Hybrid cloud"],
      ans: "Community cloud",
      reason: "A cloud shared by several organizations with common needs (security, policy, compliance) is a community cloud."
    },
    {
      q: "Which cloud model is shown in the figure?<div class=\"stimulus\"><svg viewBox=\"0 0 320 165\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><ellipse cx=\"75\" cy=\"50\" rx=\"60.0\" ry=\"26.0\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"75\" y=\"47\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Private</text><text x=\"75\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">cloud</text><ellipse cx=\"245\" cy=\"50\" rx=\"60.0\" ry=\"26.0\" fill=\"#eaf1fb\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"245\" y=\"47\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Public</text><text x=\"245\" y=\"61\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">cloud</text><line x1=\"135\" y1=\"50\" x2=\"185\" y2=\"50\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\" marker-start=\"url(#ah)\"/><rect x=\"20\" y=\"110\" width=\"110\" height=\"28\" rx=\"4\" fill=\"#ffe9b3\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"75.0\" y=\"128.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Sensitive data</text><rect x=\"190\" y=\"110\" width=\"110\" height=\"28\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"245.0\" y=\"128.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Normal tasks</text><line x1=\"75\" y1=\"110\" x2=\"75\" y2=\"76\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><line x1=\"245\" y1=\"110\" x2=\"245\" y2=\"76\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/></svg></div>",
      options: ["Hybrid cloud", "Public cloud", "Private cloud", "Community cloud"],
      ans: "Hybrid cloud",
      reason: "A combination of a private cloud and a public cloud with data and applications shared between them is a hybrid cloud."
    },
    {
      q: "In a hybrid cloud, data and applications can be:",
      options: ["shared between public and private clouds", "stored only on the public cloud servers", "saved only on local USB flash drives and disks", "deleted from both clouds every day"],
      ans: "shared between public and private clouds",
      reason: "Hybrid cloud uses technology that allows data and applications to be shared between the public and private clouds."
    },
    {
      q: "Why does a private cloud need a huge investment?",
      options: ["The organization owns and maintains everything", "Providers charge a high fee for every single user", "The resources are shared with many other firms", "It stores all its data in chained blocks"],
      ans: "The organization owns and maintains everything",
      reason: "The user organization is responsible for the hardware, software and network of its own private cloud, which makes it costly."
    },
    {
      q: "Which order lists the cloud models from the least secure to the most secure?",
      options: ["Public, community, private", "Private, community, public", "Community, public, private", "Public, private, community"],
      ans: "Public, community, private",
      reason: "Community cloud is more secure than public cloud but less secure than private cloud."
    },
    {
      q: "A bank has the requirements shown in the table. Which cloud model suits it best?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Requirement</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Level</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Control over servers</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Full</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Protection of customer data</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Highest</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Users of the cloud</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Only the bank</td></tr></table></div>",
      options: ["Private cloud", "Public cloud", "Community cloud", "Hybrid cloud"],
      ans: "Private cloud",
      reason: "A private cloud gives more control over servers and network and is the most secure model."
    },
    {
      q: "A start-up has the needs shown in the table. Which cloud model suits it?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Need</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Detail</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Money for hardware</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">None</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Billing</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Pay only for usage</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Maintenance of servers</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">By the provider</td></tr></table></div>",
      options: ["Public cloud", "Private cloud", "Community cloud", "On-site servers"],
      ans: "Public cloud",
      reason: "Public cloud services are offered on pay-per-usage or subscription charges, with no in-house infrastructure to maintain."
    },
    {
      q: "Three departments need the cloud as shown in the table. Which model fits them?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Department</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Need</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Police</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Shared security policy</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Tax office</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Shared compliance rules</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Courts</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Shared cost of the cloud</td></tr></table></div>",
      options: ["Community cloud", "Public cloud", "Private cloud", "Hybrid cloud"],
      ans: "Community cloud",
      reason: "A community cloud serves several organizations with common concerns and is cost effective because the cost is shared."
    },
    {
      q: "A company uses the cloud as shown in the table. Which model is it using?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Work</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Cloud used</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Everyday tasks</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Public cloud</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Sensitive data</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Private cloud</td></tr></table></div>",
      options: ["Hybrid cloud", "Community cloud", "Public cloud", "Private cloud"],
      ans: "Hybrid cloud",
      reason: "Using both a public cloud (general tasks) and a private cloud (sensitive data) together is a hybrid cloud."
    },
    {
      q: "Big data analytics collects extremely large data from various sources and uses software to find:",
      options: ["market trends and patterns", "hardware faults and errors", "network cable lengths", "printer and scanner drivers"],
      ans: "market trends and patterns",
      reason: "Big data analytics uses analytics software on very large data to find market trends, patterns and insights."
    },
    {
      q: "Why can traditional databases not handle the data created by banking, emails and mobile apps every day?",
      options: ["The volume of data is too huge", "The data is always encrypted", "The data has no digital form", "The data is created once a year"],
      ans: "The volume of data is too huge",
      reason: "A huge volume of data is created daily from digital sources, which cannot be handled by traditional databases."
    },
    {
      q: "What does big data analytics do with the data collected by IoT devices?",
      options: ["Turns it into actionable information", "Converts it into new physical hardware", "Blocks it from reaching users", "Stores it in a chain of blocks"],
      ans: "Turns it into actionable information",
      reason: "Big data analytics transforms IoT data into actionable information to improve decision-making."
    },
    {
      q: "Which of the following is an area of big data analytics?",
      options: ["Healthcare industry", "Font designing", "Printer repair", "Typing practice"],
      ans: "Healthcare industry",
      reason: "Healthcare, transport, banking, insurance, digital marketing, media and government are areas of big data analytics."
    },
    {
      q: "A supermarket studies millions of customer receipts to find which items are often bought together. This is an example of:",
      options: ["big data analytics", "an embedded system", "a wireless sensor network", "a private blockchain"],
      ans: "big data analytics",
      reason: "Analysing very large amounts of data to find patterns and insights for business decisions is big data analytics."
    },
    {
      q: "Which of the following data sources produces 'big data'?",
      options: ["Millions of app users", "One short handwritten note", "A small plain text file", "A single pocket calculator"],
      ans: "Millions of app users",
      reason: "Big data comes from sources like mobile apps, banking transactions and medical records that create huge volumes of data."
    },
    {
      q: "An IoT communication protocol is a set of:",
      options: ["rules for transferring and understanding data", "sensors that detect motion and heat in a large room", "programs stored permanently in firmware", "servers that keep a shared ledger"],
      ans: "rules for transferring and understanding data",
      reason: "A protocol is a set of rules that govern how data is transferred and understood between IoT devices, sensors and end users."
    },
    {
      q: "Two smart devices made by different companies cannot understand each other's messages. Which IoT technology is missing?",
      options: ["A common communication protocol", "A bigger and longer-lasting battery", "A faster microcontroller chip", "A private blockchain network"],
      ans: "A common communication protocol",
      reason: "Protocols give the agreed rules for exchanging information between IoT devices and end users."
    },
    {
      q: "Which option completes the list of technologies that enabled IoT?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Technologies that enabled IoT</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Wireless sensor networks</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Cloud computing</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Big data analytics</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Embedded systems</td></tr></table></div>",
      options: ["Communication protocols", "Digital signatures", "Hashing algorithms", "Language compilers"],
      ans: "Communication protocols",
      reason: "The five enabling technologies are WSN, cloud computing, big data analytics, communication protocols and embedded systems."
    },
    {
      q: "Communication protocols are needed in IoT for the:",
      options: ["proper functioning of IoT-enabled devices", "printing of all the ledger blocks on paper sheets", "storage of the device firmware code", "cooling of the microcontroller chips"],
      ans: "proper functioning of IoT-enabled devices",
      reason: "Protocols provide the exchange of information and methods of connection that IoT-enabled devices need to work properly."
    },
    {
      q: "Firmware is software that is:",
      options: ["permanently installed in a device", "downloaded again from the Internet for every use", "stored only on cloud servers", "written by the user every day"],
      ans: "permanently installed in a device",
      reason: "Firmware is software permanently installed in a device or electronic machine."
    },
    {
      q: "An embedded system is a combination of hardware and:",
      options: ["firmware", "freeware", "malware", "middleware"],
      ans: "firmware",
      reason: "Embedded systems are small electronic devices made of hardware and firmware."
    },
    {
      q: "Which component controls an embedded system through its firmware?",
      options: ["A microcontroller", "A hard disk drive", "A network router", "A computer keyboard"],
      ans: "A microcontroller",
      reason: "An embedded system has a microcontroller or microprocessor that controls its operation through firmware."
    },
    {
      q: "An embedded system is designed to perform:",
      options: ["a specific task", "any task the user wants", "only networking tasks", "only gaming tasks"],
      ans: "a specific task",
      reason: "Unlike a general-purpose computer, an embedded system is designed for a specific task."
    },
    {
      q: "Which option completes the list of embedded systems in the table?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Embedded systems</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Oven</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Security system</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Washing machine</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>",
      options: ["Vending machine", "Desktop computer", "Laptop computer", "Web server"],
      ans: "Vending machine",
      reason: "Vending machines, ovens, security systems and washing machines are embedded systems built for a specific task."
    },
    {
      q: "In the figure, which part runs the firmware and makes decisions?<div class=\"stimulus\"><svg viewBox=\"0 0 350 92\" style=\"width:100%;max-width:380px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"6\" y=\"24\" width=\"90\" height=\"44\" rx=\"4\" fill=\"#e5f6e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"51.0\" y=\"43.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Temperature</text><text x=\"51.0\" y=\"57.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">sensor</text><line x1=\"96\" y1=\"46\" x2=\"124\" y2=\"46\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"124\" y=\"14\" width=\"112\" height=\"64\" rx=\"4\" fill=\"#ffe0e0\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"180.0\" y=\"50.0\" text-anchor=\"middle\" font-size=\"12\" fill=\"#222\" font-weight=\"bold\">?</text><line x1=\"236\" y1=\"46\" x2=\"264\" y2=\"46\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"264\" y=\"24\" width=\"80\" height=\"44\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"304.0\" y=\"50.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\">Heater</text></svg></div>",
      options: ["Microcontroller", "Temperature sensor", "Heater", "Battery"],
      ans: "Microcontroller",
      reason: "The microcontroller reads the sensor and controls the heater according to the firmware."
    },
    {
      q: "A smart air conditioner checks the room temperature and adjusts cooling by itself. Where are its control instructions permanently stored?",
      options: ["In its firmware", "In a cloud ledger", "In big data tools", "In a public blockchain"],
      ans: "In its firmware",
      reason: "Embedded systems monitor conditions such as room temperature and adjust automatically through instructions kept in firmware."
    },
    {
      q: "A blockchain is a digital ledger of transactions that is:",
      options: ["shared and maintained by network users", "owned and kept by one bank only", "kept on a single central computer", "printed on paper once every financial year"],
      ans: "shared and maintained by network users",
      reason: "A blockchain is a digital ledger (database) of transactions shared and maintained by the users of the network."
    },
    {
      q: "The continuously growing list of records in a blockchain ledger is made of:",
      options: ["blocks", "packets", "tables", "frames"],
      ans: "blocks",
      reason: "The ledger is a list of continuously growing records called blocks, chained together using cryptography."
    },
    {
      q: "The blocks of a blockchain are chained together using:",
      options: ["cryptography", "firmware", "sensors", "protocols"],
      ans: "cryptography",
      reason: "Blocks are linked with cryptography, which keeps the transaction data secure and immutable."
    },
    {
      q: "Which of the following technologies enabled blockchain?",
      options: ["Cryptography", "Embedded systems", "Big data analytics", "Wireless sensor networks"],
      ans: "Cryptography",
      reason: "Cryptography, blockchain networks and the transaction process are the technologies that enabled blockchain; the others enabled IoT."
    },
    {
      q: "Which of the following technologies enabled IoT but not blockchain?",
      options: ["Embedded systems", "Cryptography", "Blockchain networks", "Transaction process"],
      ans: "Embedded systems",
      reason: "Embedded systems are one of the five technologies that enabled IoT, while the other options are blockchain technologies."
    },
    {
      q: "Cryptography provides confidentiality, integrity and authentication. Which of these means that only the intended people can read the data?",
      options: ["Confidentiality", "Integrity", "Authentication", "Availability"],
      ans: "Confidentiality",
      reason: "Confidentiality keeps data readable only by those for whom it is intended; integrity means it is unaltered and authentication proves identity."
    },
    {
      q: "Data in a blockchain is called immutable because it:",
      options: ["cannot be altered once it is recorded", "can be edited by any user of the network", "is deleted after it has been shared", "is stored only on printed paper"],
      ans: "cannot be altered once it is recorded",
      reason: "Immutable means unchangeable: cryptography protects recorded transactions from being altered."
    },
    {
      q: "In the figure, each block is linked to the one before it through:<div class=\"stimulus\"><svg viewBox=\"0 0 366 106\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"6\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.8\"/><text x=\"44\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 1</text><text x=\"44\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Data: T1</text><text x=\"44\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Prev: 00</text><text x=\"44\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\" font-weight=\"bold\">Hash: A7</text><line x1=\"82\" y1=\"53\" x2=\"94\" y2=\"53\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"94\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.8\"/><text x=\"132\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 2</text><text x=\"132\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Data: T2</text><text x=\"132\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Prev: A7</text><text x=\"132\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\" font-weight=\"bold\">Hash: C3</text><line x1=\"170\" y1=\"53\" x2=\"182\" y2=\"53\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"182\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.8\"/><text x=\"220\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 3</text><text x=\"220\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Data: T3</text><text x=\"220\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Prev: C3</text><text x=\"220\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\" font-weight=\"bold\">Hash: 5E</text><line x1=\"258\" y1=\"53\" x2=\"270\" y2=\"53\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"270\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.8\"/><text x=\"308\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 4</text><text x=\"308\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Data: T4</text><text x=\"308\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Prev: 5E</text><text x=\"308\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\" font-weight=\"bold\">Hash: 9B</text></svg></div>",
      options: ["the previous block's hash", "the user's secret login password", "the sensor's last reading", "the cloud server address"],
      ans: "the previous block's hash",
      reason: "Each block stores the hash (cryptographic code) of the previous block, which chains the blocks together."
    },
    {
      q: "In the figure, the data of Block 2 is changed. What happens to the chain?<div class=\"stimulus\"><svg viewBox=\"0 0 366 106\" style=\"width:100%;max-width:400px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><defs><marker id=\"ah\" markerWidth=\"7\" markerHeight=\"7\" refX=\"6\" refY=\"3.5\" orient=\"auto\"><path d=\"M0,0 L7,3.5 L0,7 Z\" fill=\"#222\"/></marker></defs><rect x=\"6\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.8\"/><text x=\"44\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 1</text><text x=\"44\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Data: T1</text><text x=\"44\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Prev: 00</text><text x=\"44\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\" font-weight=\"bold\">Hash: A7</text><line x1=\"82\" y1=\"53\" x2=\"94\" y2=\"53\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"94\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#ffe0e0\" stroke=\"#c62828\" stroke-width=\"1.8\"/><text x=\"132\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 2</text><text x=\"132\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c62828\">Data: T2*</text><text x=\"132\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Prev: A7</text><text x=\"132\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c62828\" font-weight=\"bold\">Hash: F0</text><line x1=\"170\" y1=\"53\" x2=\"182\" y2=\"53\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"182\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#dcebff\" stroke=\"#c62828\" stroke-width=\"1.8\" stroke-dasharray=\"5,3\"/><text x=\"220\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 3</text><text x=\"220\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Data: T3</text><text x=\"220\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#c62828\">Prev: C3</text><text x=\"220\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\" font-weight=\"bold\">Hash: 5E</text><line x1=\"258\" y1=\"53\" x2=\"270\" y2=\"53\" stroke=\"#222\" stroke-width=\"1.6\" marker-end=\"url(#ah)\"/><rect x=\"270\" y=\"10\" width=\"76\" height=\"86\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.8\"/><text x=\"308\" y=\"26\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Block 4</text><text x=\"308\" y=\"42\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Data: T4</text><text x=\"308\" y=\"62\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Prev: 5E</text><text x=\"308\" y=\"80\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\" font-weight=\"bold\">Hash: 9B</text></svg></div>",
      options: ["Block 3 no longer matches Block 2", "Block 1 changes by itself automatically", "All blocks update themselves", "The chain stays fully valid"],
      ans: "Block 3 no longer matches Block 2",
      reason: "Changing Block 2 changes its hash, so the 'Prev' value stored in Block 3 no longer matches; the tampering is exposed."
    },
    {
      q: "A blockchain network in which only authorized individuals can perform or view transactions is called:",
      options: ["permissioned blockchain", "public blockchain", "private cryptocurrency", "open ledger network"],
      ans: "permissioned blockchain",
      reason: "In a permissioned network anyone who wants to join needs permission, and only authorized people can access it."
    },
    {
      q: "Which blockchain network is shown in the figure?<div class=\"stimulus\"><svg viewBox=\"0 0 320 158\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"60\" y=\"14\" width=\"200\" height=\"110\" rx=\"8\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"1.6\" stroke-dasharray=\"6,4\"/><text x=\"160\" y=\"30\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Single organization</text><line x1=\"100\" y1=\"60\" x2=\"160\" y2=\"50\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"100\" y1=\"60\" x2=\"115\" y2=\"100\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"50\" x2=\"220\" y2=\"62\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"50\" x2=\"115\" y2=\"100\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"50\" x2=\"205\" y2=\"100\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"220\" y1=\"62\" x2=\"205\" y2=\"100\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"115\" y1=\"100\" x2=\"205\" y2=\"100\" stroke=\"#222\" stroke-width=\"1.6\" /><circle cx=\"100\" cy=\"60\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"160\" cy=\"50\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"220\" cy=\"62\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"115\" cy=\"100\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"205\" cy=\"100\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/></svg></div>",
      options: ["private blockchain", "public blockchain", "consortium blockchain", "permissioned blockchain"],
      ans: "private blockchain",
      reason: "All the nodes belong to a single organization, which manages the network and restricts public access: a private blockchain."
    },
    {
      q: "A blockchain network in which several organizations share the responsibility of managing one network is called:",
      options: ["consortium blockchain", "public blockchain", "private blockchain", "single-owner blockchain"],
      ans: "consortium blockchain",
      reason: "A consortium blockchain is a permissioned network managed by multiple organizations."
    },
    {
      q: "Bitcoin is exchanged on which type of blockchain network?",
      options: ["Public blockchain", "Private blockchain", "Permissioned blockchain", "Consortium blockchain"],
      ans: "Public blockchain",
      reason: "A public blockchain is open to anyone in the world and is used for exchanging cryptocurrency such as Bitcoin."
    },
    {
      q: "A cryptocurrency is a digital currency that lets people make payments:",
      options: ["directly to each other without a bank", "only through a central bank account", "only with printed paper money notes", "only inside the issuing country's borders"],
      ans: "directly to each other without a bank",
      reason: "Cryptocurrency allows direct payments between people through an online system without the need for a bank."
    },
    {
      q: "Why is the security of a public blockchain network considered weak?",
      options: ["Anyone in the world can join it", "Only one single company controls it", "Every user needs permission", "It does not keep a ledger"],
      ans: "Anyone in the world can join it",
      reason: "A public network is an open platform that anyone can join, so it is less secure than private or permissioned networks."
    },
    {
      q: "Why is a consortium blockchain more complex to set up?",
      options: ["Several organizations must collaborate", "Only one organization manages it", "Anyone can join the network without permission", "It works without cryptography"],
      ans: "Several organizations must collaborate",
      reason: "It requires collaboration between several organizations or businesses, which makes it more complex."
    },
    {
      q: "Which blockchain network is shown in the figure?<div class=\"stimulus\"><svg viewBox=\"0 0 320 158\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"40\" y1=\"40\" x2=\"110\" y2=\"25\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40\" y1=\"40\" x2=\"60\" y2=\"110\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"110\" y1=\"25\" x2=\"190\" y2=\"45\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"110\" y1=\"25\" x2=\"140\" y2=\"95\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"190\" y1=\"45\" x2=\"270\" y2=\"30\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"190\" y1=\"45\" x2=\"140\" y2=\"95\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"190\" y1=\"45\" x2=\"225\" y2=\"115\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"270\" y1=\"30\" x2=\"285\" y2=\"100\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"60\" y1=\"110\" x2=\"140\" y2=\"95\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"140\" y1=\"95\" x2=\"225\" y2=\"115\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"225\" y1=\"115\" x2=\"285\" y2=\"100\" stroke=\"#222\" stroke-width=\"1.6\" /><circle cx=\"40\" cy=\"40\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"110\" cy=\"25\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"190\" cy=\"45\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"270\" cy=\"30\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"60\" cy=\"110\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"140\" cy=\"95\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"225\" cy=\"115\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"285\" cy=\"100\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"152\" text-anchor=\"middle\" font-size=\"11\" fill=\"#555\">Participants from anywhere in the world</text></svg></div>",
      options: ["Public blockchain", "Private blockchain", "Consortium blockchain", "Permissioned blockchain"],
      ans: "Public blockchain",
      reason: "Participants from anywhere in the world can join a public blockchain network."
    },
    {
      q: "Which blockchain network is shown in the figure?<div class=\"stimulus\"><svg viewBox=\"0 0 320 158\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><rect x=\"10\" y=\"14\" width=\"96\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"1.6\" stroke-dasharray=\"6,4\"/><text x=\"58\" y=\"30\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Bank A</text><circle cx=\"40\" cy=\"60\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"76\" cy=\"60\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"58\" cy=\"92\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><line x1=\"40\" y1=\"60\" x2=\"76\" y2=\"60\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"40\" y1=\"60\" x2=\"58\" y2=\"92\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"76\" y1=\"60\" x2=\"58\" y2=\"92\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"112\" y=\"14\" width=\"96\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"1.6\" stroke-dasharray=\"6,4\"/><text x=\"160\" y=\"30\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Bank B</text><circle cx=\"142\" cy=\"60\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"178\" cy=\"60\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"160\" cy=\"92\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><line x1=\"142\" y1=\"60\" x2=\"178\" y2=\"60\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"142\" y1=\"60\" x2=\"160\" y2=\"92\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"178\" y1=\"60\" x2=\"160\" y2=\"92\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"214\" y=\"14\" width=\"96\" height=\"100\" rx=\"8\" fill=\"none\" stroke=\"#b45309\" stroke-width=\"1.6\" stroke-dasharray=\"6,4\"/><text x=\"262\" y=\"30\" text-anchor=\"middle\" font-size=\"11\" fill=\"#b45309\" font-weight=\"bold\">Bank C</text><circle cx=\"244\" cy=\"60\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"280\" cy=\"60\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><circle cx=\"262\" cy=\"92\" r=\"9\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><line x1=\"244\" y1=\"60\" x2=\"280\" y2=\"60\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"244\" y1=\"60\" x2=\"262\" y2=\"92\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"280\" y1=\"60\" x2=\"262\" y2=\"92\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"106\" y1=\"60\" x2=\"112\" y2=\"60\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"208\" y1=\"60\" x2=\"214\" y2=\"60\" stroke=\"#222\" stroke-width=\"1.6\" /></svg></div>",
      options: ["Consortium blockchain", "Public blockchain", "Private blockchain", "Open ledger network"],
      ans: "Consortium blockchain",
      reason: "Several organizations (Bank A, B and C) jointly manage one network, which is a consortium blockchain."
    },
    {
      q: "A government agency wants a secure and transparent record-keeping system that only its own staff can manage. Which network suits it?",
      options: ["Private blockchain", "Public blockchain", "Consortium blockchain", "Bitcoin network"],
      ans: "Private blockchain",
      reason: "Private blockchains are used by businesses and government agencies for secure and transparent record keeping under single control."
    },
    {
      q: "Several banks form a group to store information about all debtors in one shared database. Which network type fits best?",
      options: ["Consortium blockchain", "Public blockchain", "Private blockchain", "Open cryptocurrency network"],
      ans: "Consortium blockchain",
      reason: "Banks use consortium blockchains to form a group that collects and stores needed information, with each member sharing the management."
    },
    {
      q: "Blockchain lets individuals make deals directly without:",
      options: ["intermediaries such as a bank", "participants on the peer-to-peer network", "cryptography", "the Internet"],
      ans: "intermediaries such as a bank",
      reason: "Blockchain allows deals without the involvement of intermediaries such as a bank or government."
    },
    {
      q: "Each blockchain transaction is verified by the participants of a:",
      options: ["peer-to-peer network", "client-server network", "single central database", "private telephone network"],
      ans: "peer-to-peer network",
      reason: "Transactions are checked by the participants in a peer-to-peer network."
    },
    {
      q: "Once a deal is agreed between participants, the transaction is:",
      options: ["added to the ledger and irreversible", "kept pending until a bank approves it", "editable by any participant later", "visible to only one participant"],
      ans: "added to the ledger and irreversible",
      reason: "After the deal, the transaction is permanent: it is added to the ledger and cannot be reversed."
    },
    {
      q: "The figure shows a centralized system. Compared with it, a blockchain keeps its ledger:<div class=\"stimulus\"><svg viewBox=\"0 0 320 168\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"160\" y1=\"80\" x2=\"40\" y2=\"30\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"80\" x2=\"280\" y2=\"30\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"80\" x2=\"40\" y2=\"120\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"80\" x2=\"280\" y2=\"120\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"80\" x2=\"160\" y2=\"150\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"130\" y=\"64\" width=\"60\" height=\"32\" rx=\"4\" fill=\"#ffe9b3\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160.0\" y=\"84.0\" text-anchor=\"middle\" font-size=\"11\" fill=\"#222\" font-weight=\"bold\">Server</text><rect x=\"25\" y=\"19\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"40\" y=\"34\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"265\" y=\"19\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"280\" y=\"34\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"25\" y=\"109\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"40\" y=\"124\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"265\" y=\"109\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"280\" y=\"124\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text><rect x=\"145\" y=\"139\" width=\"30\" height=\"22\" rx=\"3\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160\" y=\"154\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">PC</text></svg></div>",
      options: ["on many computers at once", "on one central server", "on a single bank's disk", "on paper registers at a bank"],
      ans: "on many computers at once",
      reason: "Blockchain uses decentralization: the ledger is stored on many connected computers instead of one central server."
    },
    {
      q: "The figure shows the same ledger stored on many connected computers. This feature is called:<div class=\"stimulus\"><svg viewBox=\"0 0 320 160\" style=\"width:100%;max-width:340px;height:auto;display:block;margin:6px auto\" xmlns=\"http://www.w3.org/2000/svg\" font-family=\"Arial\" font-size=\"12\"><line x1=\"160\" y1=\"22\" x2=\"265\" y2=\"62\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"22\" x2=\"240\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"22\" x2=\"80\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"160\" y1=\"22\" x2=\"55\" y2=\"62\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"265\" y1=\"62\" x2=\"240\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"265\" y1=\"62\" x2=\"80\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"265\" y1=\"62\" x2=\"55\" y2=\"62\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"240\" y1=\"135\" x2=\"80\" y2=\"135\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"240\" y1=\"135\" x2=\"55\" y2=\"62\" stroke=\"#222\" stroke-width=\"1.6\" /><line x1=\"80\" y1=\"135\" x2=\"55\" y2=\"62\" stroke=\"#222\" stroke-width=\"1.6\" /><rect x=\"136\" y=\"9\" width=\"48\" height=\"26\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"160.0\" y=\"26.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Ledger</text><rect x=\"241\" y=\"49\" width=\"48\" height=\"26\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"265.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Ledger</text><rect x=\"216\" y=\"122\" width=\"48\" height=\"26\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"240.0\" y=\"139.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Ledger</text><rect x=\"56\" y=\"122\" width=\"48\" height=\"26\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"80.0\" y=\"139.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Ledger</text><rect x=\"31\" y=\"49\" width=\"48\" height=\"26\" rx=\"4\" fill=\"#dcebff\" stroke=\"#222\" stroke-width=\"1.6\"/><text x=\"55.0\" y=\"66.0\" text-anchor=\"middle\" font-size=\"10\" fill=\"#222\">Ledger</text></svg></div>",
      options: ["decentralization", "centralization", "encryption", "compression"],
      ans: "decentralization",
      reason: "Blockchain stores its data in many computers all over the world instead of one central server, which is decentralization."
    },
    {
      q: "Why do IoT networks need security measures such as blockchain?",
      options: ["The data they exchange is open to cyber-attacks", "Their devices are too small to connect to a network", "Sensors cannot measure any physical value", "Firmware cannot be installed in them"],
      ans: "The data they exchange is open to cyber-attacks",
      reason: "Billions of IoT devices exchange vast data through the Internet, which is vulnerable to attacks such as hacking and breaches."
    },
    {
      q: "Blockchain's decentralized ledger gives IoT transparency and:",
      options: ["immutable recording of transactions", "editable records that every user can change", "slower device communication", "larger sensor sizes"],
      ans: "immutable recording of transactions",
      reason: "The decentralized ledger provides transparency and immutable recording, and does not allow transaction data to be altered."
    },
    {
      q: "Which area completes the list of fields where IoT and blockchain are integrated: supply chain, energy grid, healthcare, automotive, agriculture and ... ?",
      options: ["water management", "word processing", "video editing", "font design"],
      ans: "water management",
      reason: "The book lists supply chain, energy grid, healthcare, automotive sector, agriculture and water management."
    },
    {
      q: "Smart meters on an energy grid use blockchain to talk to each other without a middle party. Which benefit do they gain?",
      options: ["Faster communication between devices", "Larger physical size of all the devices", "Higher cost for every sent message", "Weaker protection of the data"],
      ans: "Faster communication between devices",
      reason: "Merging IoT with blockchain gives faster communication because no intermediaries are required."
    },
    {
      q: "Artificial Intelligence is a branch of computer science that makes machines able to:",
      options: ["perform human-like tasks intelligently", "store all the data permanently on hard disks", "connect to the Internet wirelessly", "encrypt every file with a key"],
      ans: "perform human-like tasks intelligently",
      reason: "AI makes computer-controlled machines that can intelligently perform human-like tasks with decision-making ability."
    },
    {
      q: "A stakeholder of an AI system is an individual or group that is:",
      options: ["affected by it or interested in its impact", "the only programmer who wrote the program code", "the computer that runs its code", "the single owner of the company"],
      ans: "affected by it or interested in its impact",
      reason: "Stakeholders are the people or groups who are affected by an AI system or have an interest in its social impact."
    },
    {
      q: "Which option completes the list of AI stakeholders in the table?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Stakeholders</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">End users</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Developers</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Customers</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>",
      options: ["Regulator", "Firmware", "Router", "Compiler"],
      ans: "Regulator",
      reason: "Stakeholders include end users, developers, customers, suppliers, employees, regulators, funders, owners and policy makers."
    },
    {
      q: "Which option completes the list of positive impacts of AI in the table?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Positive impacts</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Unbiased decisions</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Around the clock availability</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Zero risk</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>",
      options: ["Reduction in human error", "High cost of development", "Lack of employment", "Ethical and moral concerns"],
      ans: "Reduction in human error",
      reason: "Unbiased decisions, around the clock availability, zero risk and reduction in human error are the four positive impacts."
    },
    {
      q: "Why can an AI-based recruitment system make unbiased decisions?",
      options: ["It decides by reason and logic, not emotion", "It prefers graduates of one university", "It follows its own personal feelings and moods", "It ignores the skills of applicants"],
      ans: "It decides by reason and logic, not emotion",
      reason: "AI decisions rest on reason and logic, so the system can hire by skills and qualification rather than ethnicity or demographics."
    },
    {
      q: "A chatbot answers customers' questions at 3 a.m. Which positive impact of AI is this?",
      options: ["Around the clock availability", "Zero risk", "Unbiased decisions", "Reduction in human error"],
      ans: "Around the clock availability",
      reason: "AI systems can work without breaks, so a chatbot can help customers all day and night."
    },
    {
      q: "A robot is sent to defuse a bomb instead of a person. Which positive impact of AI is this?",
      options: ["Zero risk", "Unbiased decisions", "Around the clock availability", "Reduction in human error"],
      ans: "Zero risk",
      reason: "AI robots perform tasks in hazardous environments, removing the risk to human life."
    },
    {
      q: "A robotic surgery system performs an operation with great precision. Which positive impact does it show?",
      options: ["Reduction in human error", "Zero risk", "Unbiased decisions", "Around the clock availability"],
      ans: "Reduction in human error",
      reason: "Properly programmed AI systems reduce human errors and give high accuracy, as in robotic surgery."
    },
    {
      q: "Which option completes the list of negative impacts of AI in the table?<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Negative impacts</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Less creativity and emotions</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Lack of employment</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Ethical and moral concerns</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">?</td></tr></table></div>",
      options: ["High cost of building AI", "Around the clock availability", "Unbiased decisions", "Reduction in human error"],
      ans: "High cost of building AI",
      reason: "Less creativity and emotions, lack of employment, ethical and moral concerns and high cost are the negative impacts of AI."
    },
    {
      q: "Robots are replacing workers in factories and hotels. Which negative impact of AI does this cause?",
      options: ["Lack of employment", "High cost", "Less creativity", "Zero risk"],
      ans: "Lack of employment",
      reason: "When robots replace humans in industries, unemployment may increase."
    },
    {
      q: "Why is building an AI system costly?",
      options: ["It needs time, resources and latest hardware", "It needs no data in order to learn", "It runs on only free and old tools", "It runs without any hardware or software at all"],
      ans: "It needs time, resources and latest hardware",
      reason: "Creating machines that simulate human intelligence requires plenty of time, resources and the latest hardware and software."
    },
    {
      q: "The worry that AI may grow uncontrollably is an example of:",
      options: ["ethical and moral concerns", "high cost of development", "zero risk in hazardous work", "lack of employment for staff"],
      ans: "ethical and moral concerns",
      reason: "It is difficult to build ethics and morality into AI, and people fear it may grow uncontrollably."
    },
    {
      q: "Human decisions are driven by emotion and imagination, while AI decisions rely on:",
      options: ["algorithms and data inputs", "experience and intuition", "personal connections", "emotions and moods"],
      ans: "algorithms and data inputs",
      reason: "AI relies on algorithms and data to make decisions; human creativity comes from experience, emotions and imagination."
    },
    {
      q: "Why do conflicting requirements make the work of AI developers harder?",
      options: ["They must satisfy all the stakeholders", "Stakeholders never use the AI system itself", "Only one stakeholder is involved", "Conflicts are always hidden"],
      ans: "They must satisfy all the stakeholders",
      reason: "Conflicting requirements make AI application design more difficult because developers have to satisfy all stakeholders."
    },
    {
      q: "How should conflicts among AI stakeholders be handled?",
      options: ["They should be resolved, not suppressed", "They should be ignored by developers", "They should be suppressed by the owner", "They should be kept secret from all the users"],
      ans: "They should be resolved, not suppressed",
      reason: "Conflicts among stakeholders are unavoidable and should be resolved rather than suppressed."
    },
    {
      q: "On a social media platform, advertisers want more sales, users want privacy and developers want users to stay longer. This is an example of:<div class=\"stimulus\"><table style=\"border-collapse:collapse;margin:6px auto;font-size:14px\"><tr><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Stakeholder</th><th style=\"border:1px solid #9bb;padding:3px 10px;background:#eaf1fb\">Goal</th></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Advertisers</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Sell more products</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Users</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Keep data private</td></tr><tr><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Developers</td><td style=\"border:1px solid #9bb;padding:3px 10px;text-align:center\">Increase time on the app</td></tr></table></div>",
      options: ["conflicting stakeholder requirements", "zero risk of failure in every AI design", "unbiased decisions by the AI system", "decentralized storage of the ledger"],
      ans: "conflicting stakeholder requirements",
      reason: "Different stakeholders expect different outcomes from the same AI algorithm, which creates conflicting requirements."
    },
    {
      q: "Teachers, learners and programmers have different priorities for a language-learning AI. What should the developers do?",
      options: ["Balance the priorities of all stakeholders", "Follow only the programmers' own priorities", "Ignore the learners' expectations", "Remove all the teachers' requirements"],
      ans: "Balance the priorities of all stakeholders",
      reason: "Developers should identify each stakeholder's interest and resolve the conflicts so the system serves all of them."
    },
    {
      q: "Conflicts among AI stakeholders can arise from different:",
      options: ["interpretations of the same problem", "colour schemes of the interface", "brands of the computer hardware", "lengths of the whole program source code"],
      ans: "interpretations of the same problem",
      reason: "Conflicts can be due to a different interpretation or understanding of the given problem, or different views on how to implement needs."
    }
    ];
  }
});
