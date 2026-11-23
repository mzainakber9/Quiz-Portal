# -*- coding: utf-8 -*-
from lib import *
def F(key, wrong=None, ans=None, q=None, why=None, lvl=None):
    hits = [x for x in QS[5] if key in x['q']]
    assert len(hits) == 1, (key, len(hits))
    x = hits[0]
    if q is not None: x['q'] = q
    if ans is not None: x['ans'] = ans
    if wrong is not None: x['options'] = [x['ans']] + list(wrong)
    if why is not None: x['reason'] = why
    if lvl is not None: x['_lvl'] = lvl
    assert len(set(x['options'])) == 4, key

def apply():
    # ---- balance option lengths ----
    F("Why do IoT devices need the Internet", ["To increase the physical size of each device", "To generate electricity for their batteries", "To store their firmware permanently"], ans="To exchange data with users and other devices")
    F("A wireless sensor network (WSN) is a network of", ["wired computers that share a single printer", "servers that store the blockchain ledger", "satellites that relay television signals"], ans="devices with embedded sensors and software")
    F("completes the group of motion detection sensors", ["Gas sensor", "Viscosity sensor", "Humidity sensor"], ans="PIR sensor", why="Ultrasonic, proximity and Passive Infrared (PIR) sensors are motion detection sensors; gas, viscosity and humidity sensors belong to the other two types.")
    F("In a smart grid, a WSN", ["storing patient records in a ledger", "sorting large sets of student marks", "translating text between languages"], ans="managing the transport of electricity")
    F("fixed on a bridge", ["Weather monitoring systems", "Surveillance systems", "Smart grid electricity network"], ans="Structural health monitoring")
    F("In a hybrid cloud, data and applications can be", ["stored only on the public cloud servers", "saved only on local USB flash drives", "deleted from both clouds every day"])
    F("Why does a private cloud need a huge investment", ["Providers charge a fee for every single user", "The resources are shared with many other firms", "It stores all its data in chained blocks"], ans="The organization owns and maintains everything")
    F("data sources produces 'big data'", ["One short handwritten note", "A small plain text file", "A single pocket calculator"], ans="Millions of app users")
    F("An IoT communication protocol is a set of", ["sensors that detect motion in a room", "programs stored permanently in firmware", "servers that keep a shared ledger"])
    F("different companies cannot understand", ["A bigger and longer-lasting battery", "A faster microcontroller chip", "A private blockchain network"])
    F("Communication protocols are needed in IoT", ["printing of all ledger blocks on paper", "storage of the device firmware code", "cooling of the microcontroller chips"])
    F("controls an embedded system through its firmware", ["A hard disk drive", "A network router", "A computer keyboard"])
    F("A blockchain is a digital ledger", ["owned and kept by one bank only", "kept on a single central computer", "printed on paper once every year"])
    F("is called immutable because", ["can be edited by any network user", "is deleted after it has been shared", "is stored only on printed paper"])
    F("each block is linked", ["the user's login password", "the sensor's last reading", "the cloud server address"])
    F("A cryptocurrency is a digital currency", ["only through a central bank account", "only with printed paper money notes", "only inside the issuing country's borders"])
    F("Smart meters on an energy grid", ["Larger physical size of devices", "Higher cost for every sent message", "Weaker protection of the data"])
    F("Artificial Intelligence is a branch", ["store all data permanently on disks", "connect to the Internet wirelessly", "encrypt every file with a key"])
    F("A stakeholder of an AI system is an individual", ["the only programmer who wrote it", "the computer that runs its code", "the single owner of the company"])
    F("AI-based recruitment system", ["It prefers graduates of one university", "It follows its own personal feelings", "It ignores the skills of applicants"])
    F("Why is building an AI system costly", ["It needs no data in order to learn", "It runs on only free and old tools", "It runs without any hardware at all"], ans="It needs time, resources and latest hardware", why="Creating machines that simulate human intelligence requires plenty of time, resources and the latest hardware and software.")
    F("may grow uncontrollably", ["high cost of development", "zero risk in hazardous work", "lack of employment for staff"])
    F("How should conflicts among AI stakeholders be handled", ["They should be ignored by developers", "They should be suppressed by the owner", "They should be kept secret from users"])
    F("advertisers want more sales", ["zero risk of failure in AI design", "unbiased decisions by the AI system", "decentralized storage of the ledger"])
    F("Teachers, learners and programmers", ["Follow only the programmers' priorities", "Ignore the learners' expectations", "Remove all the teachers' requirements"])
    F("Conflicts among AI stakeholders can arise", ["colour schemes of the interface", "brands of the computer hardware", "lengths of the program source code"])
    # ---- convert to table / diagram stimulus ----
    F("Fluid flow, gas and viscosity sensors", q="The sensors listed in the table belong to which type?" + stim(truth_html(['Sensors'], [['Heat'], ['Pressure'], ['Gas'], ['Viscosity']])))
    F("Temperature, humidity and air quality sensors belong", q="The sensors listed in the table belong to which type?" + stim(truth_html(['Sensors'], [['Temperature'], ['Humidity'], ['Air quality'], ['Light']])))
    F("A bank wants full control", q="A bank has the requirements shown in the table. Which cloud model suits it best?" + stim(truth_html(['Requirement', 'Level'], [['Control over servers', 'Full'], ['Protection of customer data', 'Highest'], ['Users of the cloud', 'Only the bank']])))
    F("A small start-up", q="A start-up has the needs shown in the table. Which cloud model suits it?" + stim(truth_html(['Need', 'Detail'], [['Money for hardware', 'None'], ['Billing', 'Pay only for usage'], ['Maintenance of servers', 'By the provider']])))
    F("A company runs its everyday tasks", q="A company uses the cloud as shown in the table. Which model is it using?" + stim(truth_html(['Work', 'Cloud used'], [['Everyday tasks', 'Public cloud'], ['Sensitive data', 'Private cloud']])))
    F("Three government departments", q="Three departments need the cloud as shown in the table. Which model fits them?" + stim(truth_html(['Department', 'Need'], [['Police', 'Shared security policy'], ['Tax office', 'Shared compliance rules'], ['Courts', 'Shared cost of the cloud']])))
    F("managed by one business, with public access restricted", q="Which blockchain network is shown in the figure?" + stim(bcnet_svg('private')), why="All the nodes belong to a single organization, which manages the network and restricts public access: a private blockchain.")
    F("sends money to the wrong person", q="The figure shows a centralized system. Compared with it, a blockchain keeps its ledger:" + stim(decentral_svg('central')),
      ans="on many computers at once", wrong=["on one central server", "on a single bank's disk", "on paper registers at a bank"], lvl='U',
      why="Blockchain uses decentralization: the ledger is stored on many connected computers instead of one central server.")
    F("Which of the following is a stakeholder of an AI system", q="Which option completes the list of AI stakeholders in the table?" + stim(truth_html(['Stakeholders'], [['End users'], ['Developers'], ['Customers'], ['?']])))
    F("Which of the following is an embedded system", q="Which option completes the list of embedded systems in the table?" + stim(truth_html(['Embedded systems'], [['Oven'], ['Security system'], ['Washing machine'], ['?']])),
      ans="Vending machine", wrong=["Desktop computer", "Laptop computer", "Web server"],
      why="Vending machines, ovens, security systems and washing machines are embedded systems built for a specific task.")
    F("Which of the following is a positive impact of AI systems", q="Which option completes the list of positive impacts of AI in the table?" + stim(truth_html(['Positive impacts'], [['Unbiased decisions'], ['Around the clock availability'], ['Zero risk'], ['?']])),
      ans="Reduction in human error", wrong=["High cost of development", "Lack of employment", "Ethical and moral concerns"],
      why="Unbiased decisions, around the clock availability, zero risk and reduction in human error are the four positive impacts.")
    F("Which of the following is a negative impact of AI systems", q="Which option completes the list of negative impacts of AI in the table?" + stim(truth_html(['Negative impacts'], [['Less creativity and emotions'], ['Lack of employment'], ['Ethical and moral concerns'], ['?']])),
      ans="High cost of building AI", wrong=["Around the clock availability", "Unbiased decisions", "Reduction in human error"],
      why="Less creativity and emotions, lack of employment, ethical and moral concerns and high cost are the negative impacts of AI.")

def W(old, new):
    hits = [(x, i) for x in QS[5] for i, o in enumerate(x['options']) if o == old and o != x['ans']]
    assert len(hits) == 1, (old, len(hits))
    x, i = hits[0]; x['options'][i] = new

def apply2():
    for old, new in [
        ("wireless signals that carry data between towers", "wireless signals that carry mobile calls between towers"),
        ("Shorter battery life with higher cost", "Shorter battery life with a higher price tag"),
        ("To increase the physical size of each device", "To increase the physical size of every device"),
        ("translating text between languages", "translating spoken text between two languages"),
        ("saved only on local USB flash drives", "saved only on local USB flash drives and disks"),
        ("Providers charge a fee for every single user", "Providers charge a high fee for every single user"),
        ("Converts it into new hardware", "Converts it into new physical hardware"),
        ("sensors that detect motion in a room", "sensors that detect motion and heat in a large room"),
        ("printing of all ledger blocks on paper", "printing of all the ledger blocks on paper sheets"),
        ("downloaded again for every use", "downloaded again from the Internet for every use"),
        ("printed on paper once every year", "printed on paper once every financial year"),
        ("can be edited by any network user", "can be edited by any user of the network"),
        ("the user's login password", "the user's secret login password"),
        ("Block 1 changes automatically", "Block 1 changes by itself automatically"),
        ("Only one company controls it", "Only one single company controls it"),
        ("Anyone can join without permission", "Anyone can join the network without permission"),
        ("participants on the network", "participants on the peer-to-peer network"),
        ("Their devices are too small to connect", "Their devices are too small to connect to a network"),
        ("editable records for all users", "editable records that every user can change"),
        ("Larger physical size of devices", "Larger physical size of all the devices"),
        ("store all data permanently on disks", "store all the data permanently on hard disks"),
        ("the only programmer who wrote it", "the only programmer who wrote the program code"),
        ("It follows its own personal feelings", "It follows its own personal feelings and moods"),
        ("It runs without any hardware at all", "It runs without any hardware or software at all"),
        ("Stakeholders never use the system", "Stakeholders never use the AI system itself"),
        ("They should be kept secret from users", "They should be kept secret from all the users"),
        ("zero risk of failure in AI design", "zero risk of failure in every AI design"),
        ("Follow only the programmers' priorities", "Follow only the programmers' own priorities"),
        ("lengths of the program source code", "lengths of the whole program source code"),
    ]: W(old, new)
