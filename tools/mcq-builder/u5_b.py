# -*- coding: utf-8 -*-
from lib import *
C = 5
def Q(sec, lvl, q, ans, wrong, why): add(C, sec, lvl, q, ans, wrong, why)
S7 = "5.3 Blockchain: introduction and enabling technologies"
S8 = "5.4.2 Blockchain networks"
S9 = "5.4.3 Transaction process on the network"
S10 = "5.5 Integration of Blockchain and IoT"
S11 = "5.6 Stakeholders' interests in AI systems"

# ---------------- blockchain intro ----------------
Q(S7, 'K', "A blockchain is a digital ledger of transactions that is:", "shared and maintained by network users",
  ["owned by one bank only", "kept on a single computer", "printed once every year"],
  "A blockchain is a digital ledger (database) of transactions shared and maintained by the users of the network.")
Q(S7, 'K', "The continuously growing list of records in a blockchain ledger is made of:", "blocks",
  ["packets", "tables", "frames"],
  "The ledger is a list of continuously growing records called blocks, chained together using cryptography.")
Q(S7, 'K', "The blocks of a blockchain are chained together using:", "cryptography",
  ["firmware", "sensors", "protocols"],
  "Blocks are linked with cryptography, which keeps the transaction data secure and immutable.")
Q(S7, 'K', "Which of the following technologies enabled blockchain?", "Cryptography",
  ["Embedded systems", "Big data analytics", "Wireless sensor networks"],
  "Cryptography, blockchain networks and the transaction process are the technologies that enabled blockchain; the others enabled IoT.")
Q(S7, 'U', "Which of the following technologies enabled IoT but not blockchain?", "Embedded systems",
  ["Cryptography", "Blockchain networks", "Transaction process"],
  "Embedded systems are one of the five technologies that enabled IoT, while the other options are blockchain technologies.")
Q(S7, 'U', "Cryptography provides confidentiality, integrity and authentication. Which of these means that only the intended people can read the data?", "Confidentiality",
  ["Integrity", "Authentication", "Availability"],
  "Confidentiality keeps data readable only by those for whom it is intended; integrity means it is unaltered and authentication proves identity.")
Q(S7, 'U', "Data in a blockchain is called immutable because it:", "cannot be altered once it is recorded",
  ["can be edited by any user", "is deleted after being shared", "is stored on printed paper"],
  "Immutable means unchangeable: cryptography protects recorded transactions from being altered.")
Q(S7, 'U', "In the figure, each block is linked to the one before it through:" + stim(chain_svg()), "the previous block's hash",
  ["the user's password", "the sensor reading", "the cloud address"],
  "Each block stores the hash (cryptographic code) of the previous block, which chains the blocks together.")
Q(S7, 'A', "In the figure, the data of Block 2 is changed. What happens to the chain?" + stim(chain_svg(tamper=1)), "Block 3 no longer matches Block 2",
  ["Block 1 changes automatically", "All blocks update themselves", "The chain stays fully valid"],
  "Changing Block 2 changes its hash, so the 'Prev' value stored in Block 3 no longer matches; the tampering is exposed.")

# ---------------- networks ----------------
Q(S8, 'U', "A blockchain network in which only authorized individuals can perform or view transactions is called:", "permissioned blockchain",
  ["public blockchain", "private cryptocurrency", "open ledger network"],
  "In a permissioned network anyone who wants to join needs permission, and only authorized people can access it.")
Q(S8, 'U', "A blockchain network managed by one business, with public access restricted, is called:", "private blockchain",
  ["public blockchain", "consortium blockchain", "permissioned blockchain"],
  "A private blockchain is administered by a single organization, which can customize user access and authorization.")
Q(S8, 'U', "A blockchain network in which several organizations share the responsibility of managing one network is called:", "consortium blockchain",
  ["public blockchain", "private blockchain", "single-owner blockchain"],
  "A consortium blockchain is a permissioned network managed by multiple organizations.")
Q(S8, 'U', "Bitcoin is exchanged on which type of blockchain network?", "Public blockchain",
  ["Private blockchain", "Permissioned blockchain", "Consortium blockchain"],
  "A public blockchain is open to anyone in the world and is used for exchanging cryptocurrency such as Bitcoin.")
Q(S8, 'U', "A cryptocurrency is a digital currency that lets people make payments:", "directly to each other without a bank",
  ["only through a central bank", "only with printed notes", "only inside one country"],
  "Cryptocurrency allows direct payments between people through an online system without the need for a bank.")
Q(S8, 'U', "Why is the security of a public blockchain network considered weak?", "Anyone in the world can join it",
  ["Only one company controls it", "Every user needs permission", "It does not keep a ledger"],
  "A public network is an open platform that anyone can join, so it is less secure than private or permissioned networks.")
Q(S8, 'U', "Why is a consortium blockchain more complex to set up?", "Several organizations must collaborate",
  ["Only one organization manages it", "Anyone can join without permission", "It works without cryptography"],
  "It requires collaboration between several organizations or businesses, which makes it more complex.")
Q(S8, 'U', "Which blockchain network is shown in the figure?" + stim(bcnet_svg('public')), "Public blockchain",
  ["Private blockchain", "Consortium blockchain", "Permissioned blockchain"],
  "Participants from anywhere in the world can join a public blockchain network.")
Q(S8, 'U', "Which blockchain network is shown in the figure?" + stim(bcnet_svg('consortium')), "Consortium blockchain",
  ["Public blockchain", "Private blockchain", "Open ledger network"],
  "Several organizations (Bank A, B and C) jointly manage one network, which is a consortium blockchain.")
Q(S8, 'A', "A government agency wants a secure and transparent record-keeping system that only its own staff can manage. Which network suits it?", "Private blockchain",
  ["Public blockchain", "Consortium blockchain", "Bitcoin network"],
  "Private blockchains are used by businesses and government agencies for secure and transparent record keeping under single control.")
Q(S8, 'A', "Several banks form a group to store information about all debtors in one shared database. Which network type fits best?", "Consortium blockchain",
  ["Public blockchain", "Private blockchain", "Open cryptocurrency network"],
  "Banks use consortium blockchains to form a group that collects and stores needed information, with each member sharing the management.")

# ---------------- transactions ----------------
Q(S9, 'K', "Blockchain lets individuals make deals directly without:", "intermediaries such as a bank",
  ["participants on the network", "cryptography", "the Internet"],
  "Blockchain allows deals without the involvement of intermediaries such as a bank or government.")
Q(S9, 'U', "Each blockchain transaction is verified by the participants of a:", "peer-to-peer network",
  ["client-server network", "single central database", "private telephone network"],
  "Transactions are checked by the participants in a peer-to-peer network.")
Q(S9, 'U', "Once a deal is agreed between participants, the transaction is:", "added to the ledger and irreversible",
  ["kept pending until a bank approves it", "editable by any participant later", "visible to only one participant"],
  "After the deal, the transaction is permanent: it is added to the ledger and cannot be reversed.")
Q(S9, 'A', "A user sends money to the wrong person on a blockchain and the transaction is recorded in the ledger. What is the result?", "It cannot be reversed",
  ["It is deleted after an hour", "A bank cancels it later", "The ledger edits it itself"],
  "Blockchain transactions are permanent and irreversible once added to the ledger.")
Q(S9, 'U', "The figure shows the same ledger stored on many connected computers. This feature is called:" + stim(decentral_svg('p2p')), "decentralization",
  ["centralization", "encryption", "compression"],
  "Blockchain stores its data in many computers all over the world instead of one central server, which is decentralization.")

# ---------------- integration ----------------
Q(S10, 'U', "Why do IoT networks need security measures such as blockchain?", "The data they exchange is open to cyber-attacks",
  ["Their devices are too small to connect", "Sensors cannot measure any physical value", "Firmware cannot be installed in them"],
  "Billions of IoT devices exchange vast data through the Internet, which is vulnerable to attacks such as hacking and breaches.")
Q(S10, 'U', "Blockchain's decentralized ledger gives IoT transparency and:", "immutable recording of transactions",
  ["editable records for all users", "slower device communication", "larger sensor sizes"],
  "The decentralized ledger provides transparency and immutable recording, and does not allow transaction data to be altered.")
Q(S10, 'K', "Which area completes the list of fields where IoT and blockchain are integrated: supply chain, energy grid, healthcare, automotive, agriculture and ... ?", "water management",
  ["word processing", "video editing", "font design"],
  "The book lists supply chain, energy grid, healthcare, automotive sector, agriculture and water management.")
Q(S10, 'A', "Smart meters on an energy grid use blockchain to talk to each other without a middle party. Which benefit do they gain?", "Faster communication between devices",
  ["Larger device size", "Higher cost for every message", "Weaker security"],
  "Merging IoT with blockchain gives faster communication because no intermediaries are required.")

# ---------------- AI stakeholders ----------------
Q(S11, 'K', "Artificial Intelligence is a branch of computer science that makes machines able to:", "perform human-like tasks intelligently",
  ["store data permanently", "connect only wirelessly", "encrypt every file"],
  "AI makes computer-controlled machines that can intelligently perform human-like tasks with decision-making ability.")
Q(S11, 'K', "A stakeholder of an AI system is an individual or group that is:", "affected by it or interested in its impact",
  ["the only programmer of it", "the machine running it", "the only owner of it"],
  "Stakeholders are the people or groups who are affected by an AI system or have an interest in its social impact.")
Q(S11, 'U', "Which of the following is a stakeholder of an AI system?", "Regulator",
  ["Firmware", "Router", "Compiler"],
  "Stakeholders include end users, developers, customers, suppliers, employees, regulators, funders, owners and policy makers.")
Q(S11, 'U', "Which of the following is a positive impact of AI systems?", "Unbiased decisions",
  ["Lack of employment", "High cost", "Ethical concerns"],
  "Unbiased decisions, around the clock availability, zero risk and reduction in human error are the positive impacts; the others are negative.")
Q(S11, 'U', "Why can an AI-based recruitment system make unbiased decisions?", "It decides by reason and logic, not emotion",
  ["It prefers one university", "It follows personal feelings", "It ignores applicants' skills"],
  "AI decisions rest on reason and logic, so the system can hire by skills and qualification rather than ethnicity or demographics.")
Q(S11, 'A', "A chatbot answers customers' questions at 3 a.m. Which positive impact of AI is this?", "Around the clock availability",
  ["Zero risk", "Unbiased decisions", "Reduction in human error"],
  "AI systems can work without breaks, so a chatbot can help customers all day and night.")
Q(S11, 'A', "A robot is sent to defuse a bomb instead of a person. Which positive impact of AI is this?", "Zero risk",
  ["Unbiased decisions", "Around the clock availability", "Reduction in human error"],
  "AI robots perform tasks in hazardous environments, removing the risk to human life.")
Q(S11, 'U', "A robotic surgery system performs an operation with great precision. Which positive impact does it show?", "Reduction in human error",
  ["Zero risk", "Unbiased decisions", "Around the clock availability"],
  "Properly programmed AI systems reduce human errors and give high accuracy, as in robotic surgery.")
Q(S11, 'U', "Which of the following is a negative impact of AI systems?", "Less creativity and emotions",
  ["Unbiased decisions", "Reduction in human error", "Around the clock availability"],
  "AI relies on algorithms and data and cannot be creative or feel emotions; the other options are positive impacts.")
Q(S11, 'A', "Robots are replacing workers in factories and hotels. Which negative impact of AI does this cause?", "Lack of employment",
  ["High cost", "Less creativity", "Zero risk"],
  "When robots replace humans in industries, unemployment may increase.")
Q(S11, 'U', "Why is building an AI system costly?", "It needs time, resources and the latest hardware and software",
  ["It needs no data to learn", "It uses only free tools", "It runs without any electricity"],
  "Creating machines that simulate human intelligence requires plenty of time, resources and latest hardware and software.")
Q(S11, 'U', "The worry that AI may grow uncontrollably is an example of:", "ethical and moral concerns",
  ["high cost", "zero risk", "lack of employment"],
  "It is difficult to build ethics and morality into AI, and people fear it may grow uncontrollably.")
Q(S11, 'U', "Human decisions are driven by emotion and imagination, while AI decisions rely on:", "algorithms and data inputs",
  ["experience and intuition", "personal connections", "emotions and moods"],
  "AI relies on algorithms and data to make decisions; human creativity comes from experience, emotions and imagination.")
Q(S11, 'U', "Why do conflicting requirements make the work of AI developers harder?", "They must satisfy all the stakeholders",
  ["Stakeholders never use the system", "Only one stakeholder is involved", "Conflicts are always hidden"],
  "Conflicting requirements make AI application design more difficult because developers have to satisfy all stakeholders.")
Q(S11, 'U', "How should conflicts among AI stakeholders be handled?", "They should be resolved, not suppressed",
  ["They should be ignored", "They should be suppressed", "They should be kept secret"],
  "Conflicts among stakeholders are unavoidable and should be resolved rather than suppressed.")
Q(S11, 'A', "On a social media platform, advertisers want more sales, users want privacy and developers want users to stay longer. This is an example of:" +
  stim(truth_html(['Stakeholder', 'Goal'], [['Advertisers', 'Sell more products'], ['Users', 'Keep data private'], ['Developers', 'Increase time on the app']])),
  "conflicting stakeholder requirements",
  ["zero risk in AI design", "unbiased decision making", "decentralized storage"],
  "Different stakeholders expect different outcomes from the same AI algorithm, which creates conflicting requirements.")
Q(S11, 'A', "Teachers, learners and programmers have different priorities for a language-learning AI. What should the developers do?", "Balance the priorities of all stakeholders",
  ["Follow only the programmers", "Ignore the learners", "Remove the teachers' input"],
  "Developers should identify each stakeholder's interest and resolve the conflicts so the system serves all of them.")
Q(S11, 'U', "Conflicts among AI stakeholders can arise from different:", "interpretations of the same problem",
  ["colours of the interface", "brands of hardware", "lengths of the program code"],
  "Conflicts can be due to a different interpretation or understanding of the given problem, or different views on how to implement needs.")
