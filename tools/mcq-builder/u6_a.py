# -*- coding: utf-8 -*-
from lib import *
C = 6
def Q(sec, lvl, q, ans, wrong, why): add(C, sec, lvl, q, ans, wrong, why)
T = truth_html
S1 = "6.1 Information"
S2 = "6.2 Information sources"
S3 = "6.3 Safe use of information sources"
S4 = "6.4 Bias in data"
S5 = "6.5 Reliable information"
S6 = "6.6 Sources of unreliable information"
S7 = "6.7 Data searches"

# ---------------- 6.1 ----------------
Q(S1, 'K', "In computing, information is data that has been:", "meaningfully organized and processed",
  ["deleted after it was collected", "copied without any change", "encrypted so nobody can read it"],
  "Information is data organized, processed or formatted so that it communicates knowledge, facts or insights.")
Q(S1, 'U', "Calculating, sorting and filtering raw data to give it context and meaning produces:", "information",
  ["firmware", "a protocol", "a blockchain"],
  "Processing raw data through calculations, sorting and filtering turns it into information.")
Q(S1, 'K', "Which of the following is a format in which information can appear?", "Video",
  ["Voltage", "Firmware", "Bandwidth"],
  "Information can take the form of text, numbers, photos, audio and video.")
Q(S1, 'U', "The marks of a class are processed as shown in the table. The result 'Class average is 71' is:" +
  stim(T(['Step', 'Content'], [['Raw data', '45, 67, 82, 90'], ['Processed result', 'Class average is 71']])), "information",
  ["raw data", "a primary source", "a data bias"],
  "Raw data becomes information once it is processed into a meaningful result such as an average.")

# ---------------- 6.2 sources ----------------
Q(S2, 'K', "Which list gives the three categories of information sources?", "Primary, secondary and tertiary",
  ["Print, human and electronic", "Original, copied and edited", "Public, private and hybrid"],
  "Information sources are divided into primary, secondary and tertiary sources.")
Q(S2, 'K', "Primary sources are:", "original documents giving first-hand knowledge",
  ["summaries written about other works", "overviews written for quick reference", "opinions copied from other websites"],
  "Primary sources are authentic, undisturbed documents or artifacts that offer first-hand knowledge of an event or subject.")
Q(S2, 'K', "The items in the table are examples of which type of source?" + stim(T(['Examples'], [['Letters'], ['Diaries'], ['Photographs'], ['Surveys']])), "Primary sources",
  ["Secondary sources", "Tertiary sources", "Human sources"],
  "Letters, diaries, photographs, surveys and raw data are primary sources.")
Q(S2, 'K', "The items in the table are examples of which type of source?" + stim(T(['Examples'], [['Books'], ['Academic articles'], ['Documentaries'], ['News reports']])), "Secondary sources",
  ["Primary sources", "Tertiary sources", "Print sources"],
  "Books, academic articles, documentaries and news reports analyze or summarize primary sources, so they are secondary.")
Q(S2, 'K', "The items in the table are examples of which type of source?" + stim(T(['Examples'], [['Encyclopedias'], ['Dictionaries'], ['Handbooks'], ['Textbooks']])), "Tertiary sources",
  ["Primary sources", "Secondary sources", "Human sources"],
  "Encyclopedias, dictionaries, handbooks and textbooks combine primary and secondary sources, so they are tertiary.")
Q(S2, 'U', "Secondary sources are created by people who:", "analyze or summarize primary sources",
  ["witness an event first-hand", "collect raw data themselves", "write only personal diaries"],
  "Secondary sources are produced by individuals or organizations who analyze, interpret or summarize primary sources.")
Q(S2, 'U', "Tertiary sources are most useful for:", "quick reference and overall knowledge",
  ["first-hand evidence of an event", "raw data of a new survey", "personal opinions of one expert"],
  "Tertiary sources give a thorough overview of a topic, so they suit quick reference and general knowledge.")
Q(S2, 'U', "Which source type is missing in the figure?" + stim(sources_svg(missing=1)), "Secondary",
  ["Primary", "Tertiary", "Digital"],
  "The middle source analyzes and summarizes primary sources, which is a secondary source.")
Q(S2, 'U', "A historian studies letters that a soldier wrote during a war. The letters are:", "primary sources",
  ["secondary sources", "tertiary sources", "unreliable sources"],
  "Letters are original first-hand documents, so they are primary sources.")
Q(S2, 'U', "A student watches a documentary about a war to understand it better. The documentary is a:", "secondary source",
  ["primary source", "tertiary source", "human source"],
  "A documentary interprets and summarizes primary material, so it is a secondary source.")
Q(S2, 'A', "A student needs a quick definition of a technical term. Which source should she use?", "A dictionary",
  ["A private diary", "Raw survey data", "A soldier's letter"],
  "A dictionary is a tertiary source created for quick reference.")
Q(S2, 'K', "Which of the following is an example of a digital source?", "An online database",
  ["A printed newspaper", "A paper magazine", "A bound journal"],
  "Websites, online databases, social media, blogs and multimedia are digital sources; newspapers, magazines and journals are print sources.")
Q(S2, 'U', "Experts, mentors, colleagues and community members are examples of:", "human sources",
  ["print sources", "digital sources", "tertiary sources"],
  "Information obtained directly from people, through conversation or expert consultation, comes from human sources.")
Q(S2, 'U', "Which option completes the list of print sources in the table?" + stim(T(['Print sources'], [['Books'], ['Newspapers'], ['Magazines'], ['?']])), "Journals",
  ["Websites", "Blogs", "E-books"],
  "Books, newspapers, magazines and journals are print sources; websites, blogs and e-books are electronic or digital.")

# ---------------- 6.3 safe use ----------------
Q(S3, 'K', "The checks in the table are steps of:" + stim(T(['Check'], [["The source's reputation and authority"], ["The author's qualification"], ['Transparency about the author']])), "evaluating credibility",
  ["avoiding plagiarism", "reporting false information", "respecting copyright"],
  "Checking reputation, authority, author's expertise and transparency is how the credibility of a source is evaluated.")
Q(S3, 'K', "Using someone else's work without giving credit to the author is called:", "plagiarism",
  ["citation", "fair use", "referencing"],
  "Plagiarism is using another person's words or ideas without crediting them.")
Q(S3, 'U', "Why should you credit the original author when you quote or paraphrase?", "To avoid plagiarism",
  ["To make the text longer", "To hide the real source", "To remove copyright rules"],
  "Crediting the original author with proper citation respects intellectual property and avoids plagiarism.")
Q(S3, 'K', "APA is a:", "citation style for academic writing",
  ["type of data encryption", "kind of search engine", "network protocol"],
  "The APA citation style is a set of rules for documenting and citing sources in academic writing.")
Q(S3, 'U', "You find false and harmful information on a platform. What should you do?", "Report it to the platform",
  ["Share it with friends", "Edit it and repost it", "Save it for later use"],
  "False or harmful information should be reported to the platform or authorities, encouraging responsible sharing.")
Q(S3, 'U', "Being aware of bias in sources means being able to tell:", "facts from opinions",
  ["text from images", "old files from new files", "fast sources from slow ones"],
  "All sources can have some bias, so a reader must separate factual information from opinions.")
Q(S3, 'A', "A student copies a paragraph from a website into her assignment without any reference. Which principle of safe use is broken?", "Avoid plagiarism",
  ["Report false information", "Evaluate credibility", "Check for bias"],
  "Copying text without crediting the author is plagiarism.")
Q(S3, 'A', "A post says a miracle cure works for everyone, which seems too good to be true. What is the best action?", "Verify it with reliable sources",
  ["Share it with all friends", "Believe it at once", "Copy it into your notes"],
  "Be skeptical of information that seems too good to be true and check it against reliable sources.")

# ---------------- 6.4 bias ----------------
Q(S4, 'U', "Which option completes the list of biases in data collection in the table?" + stim(T(['Types of bias'], [['Sampling bias'], ['Selection bias'], ['Observer bias'], ['?']])), "Data interpretation bias",
  ["Random bias", "Storage bias", "Hardware bias"],
  "The book describes sampling, selection, observer and data interpretation bias.")
Q(S4, 'K', "Observer bias is also called:", "experimenter bias",
  ["sampling bias", "selection bias", "interpretation bias"],
  "Observer bias, or experimenter bias, happens when the person collecting data is influenced by their own beliefs or expectations.")
Q(S4, 'U', "In the figure, only people from one area were surveyed. This causes:" + stim(sample_svg('urban')), "sampling bias",
  ["observer bias", "data interpretation bias", "random sampling"],
  "The sample does not represent the whole population (rural people are missing), which is sampling bias.")
Q(S4, 'U', "Sampling bias occurs when the sample used for data collection:", "does not represent the entire population",
  ["contains every member of the population", "is chosen by an unbiased random draw", "is larger than the population itself"],
  "A sample that fails to represent the whole population gives a biased dataset.")
Q(S4, 'U', "A company interviews only graduates of one university because it believes they are the best. Which bias does this show?", "Selection bias",
  ["Observer bias", "Data interpretation bias", "Measurement error"],
  "Certain individuals or groups are systematically excluded from the process: selection bias.")
Q(S4, 'U', "Selection bias occurs when certain individuals or groups are:", "systematically excluded from data collection",
  ["included equally in every sample", "chosen by a random draw", "asked the same question each time"],
  "Selection bias results from groups being systematically left out, intentionally or not.")
Q(S4, 'U', "After a survey, an analyst reads the results only in a way that matches her existing beliefs. Which bias is this?", "Data interpretation bias",
  ["Selection bias", "Sampling bias", "Random error"],
  "Interpreting information to fit pre-existing beliefs instead of analysing it objectively is data interpretation bias.")
Q(S4, 'A', "A survey on Internet use is planned for the whole country. Which sample reduces bias best?", "People from urban and rural areas",
  ["Only students of one city", "Only people who own smartphones", "Only the surveyor's friends"],
  "A good mix of different examples that represents the whole population keeps the results fair and accurate.")
Q(S4, 'U', "In the figure, persons are surveyed from both urban and rural areas. What can be said about the sample?" + stim(sample_svg('mixed')), "It represents the whole population",
  ["It includes only urban people", "It excludes all rural people", "It is a biased sample"],
  "Because the surveyed people come from both areas, the sample is spread over the population and is less biased.")
Q(S4, 'U', "Why is data bias a serious problem in machine learning?", "The computer may make unfair decisions",
  ["The computer stops running programs", "The data gets compressed", "The storage becomes full"],
  "If the data is not fair, the computer learns from it and may make unfair decisions.")

# ---------------- 6.5 reliable ----------------
Q(S5, 'K', "Reliable information is information that is:", "trusted and supported by evidence",
  ["popular and widely shared", "free on every website", "written very quickly"],
  "Reliable information can be depended on for accuracy and credibility, is free from bias and is backed by evidence.")
Q(S5, 'K', "Which website domain extension is usually used by government agencies?" + stim(T(['Domain', 'Usually belongs to'], [['?', 'Government'], ['.edu', 'Educational institution'], ['.org', 'Nonprofit organization']])), ".gov",
  [".com", ".net", ".info"],
  "Websites ending in .gov belong to government agencies and provide vetted, authoritative information.")
Q(S5, 'K', "A website address ending in .edu most likely belongs to:", "an educational institution",
  ["a government agency", "an online shop", "a social network"],
  "The .edu domain indicates a college or university.")
Q(S5, 'K', "A website address ending in .org often belongs to:", "a nonprofit organization",
  ["a government agency", "a university", "a shopping site"],
  "The book states that .org sites often belong to nonprofit organizations.")
Q(S5, 'U', "Why are peer-reviewed journals considered reliable?", "Experts review them very carefully",
  ["Anyone can publish in them", "They are always free to read", "They are short and popular"],
  "Peer-reviewed articles go through a rigorous review process by experts in the field.")
Q(S5, 'U', "Which source is the most reliable for scientific information?", "A peer-reviewed journal",
  ["A social media post", "An anonymous blog", "A forum thread"],
  "Peer-reviewed journals from respected academic institutions are generally reliable.")
Q(S5, 'U', "Cross-checking information means comparing it with:", "several other reputable sources",
  ["the same single source again", "its own earlier drafts", "pictures from social media"],
  "If multiple reputable sources report the same information, it is more likely to be reliable.")
Q(S5, 'U', "JSTOR, PubMed and Google Scholar are examples of:", "library databases for research",
  ["social media platforms", "online shopping sites", "video streaming services"],
  "Library resources such as JSTOR, PubMed and Google Scholar give reliable academic and research information.")
Q(S5, 'A', "Three reputable news websites report the same event with the same facts. What does this suggest?" +
  stim(T(['Source', 'Report'], [['News site A', 'Bridge opened at 5 pm'], ['News site B', 'Bridge opened at 5 pm'], ['News site C', 'Bridge opened at 5 pm']])), "The information is likely reliable",
  ["The event is surely false", "The sites copied a rumour", "The facts are only opinions"],
  "Agreement between multiple reputable sources increases the reliability of information.")

# ---------------- 6.6 unreliable ----------------
Q(S6, 'K', "Unreliable information is information that:", "may not be accurate or trustworthy",
  ["is always checked by experts", "comes only from government sites", "is printed in books only"],
  "Unreliable information cannot always be trusted to be right, so it must be double-checked before use.")
Q(S6, 'K', "Which of the following is a source of unreliable information?", "Social media without fact-checking",
  ["A peer-reviewed article", "A government website", "A university library database"],
  "Social media and websites that lack fact-checking may spread rumours, fake news and unverified claims.")
Q(S6, 'U', "Why can information from anonymous sources be unreliable?", "Its accuracy cannot be verified",
  ["It is always printed on paper", "It is too well known", "It has passed peer review"],
  "Anonymous or user-generated content often lacks credibility because nobody can check its accuracy.")
Q(S6, 'U', "Why can outdated information mislead a reader?", "The situation may have changed since then",
  ["It is always peer reviewed", "It is always too short", "It uses a newer file format"],
  "Outdated or incomplete information can mislead when the context has changed.")
Q(S6, 'U', "News outlets that distort facts to suit their own agenda are called:", "biased or sensationalist outlets",
  ["peer-reviewed outlets", "government-vetted outlets", "library-based outlets"],
  "Biased or sensationalist outlets can distort facts and are a source of unreliable information.")
Q(S6, 'A', "A friend says a cream cured his rash, so it must work for everyone. What is the weakness of this evidence?", "A personal anecdote may not show a broader truth",
  ["It came from a peer-reviewed journal", "It was cross-checked with experts", "It is published on a .gov site"],
  "Personal anecdotes, while valuable, may not represent broader truths.")
Q(S6, 'U', "Which source in the table is unreliable?" + stim(T(['Source'], [['Government website'], ['University library database'], ['Peer-reviewed journal'], ['Anonymous rumour page']])), "Anonymous rumour page",
  ["Government website", "University library database", "Peer-reviewed journal"],
  "Anonymous rumour pages lack fact-checking and transparency, while the other sources are vetted or reviewed.")

# ---------------- 6.7 searches ----------------
Q(S7, 'K', "Tools such as Google that find information using keywords are called:", "search engines",
  ["operating systems", "compilers", "firewalls"],
  "A search engine helps to find a specific piece of information among the huge amount of data on the Internet.")
Q(S7, 'U', "Why are keywords and filters used in data searches?", "To narrow the results to what is needed",
  ["To slow down the search", "To hide useful pages", "To delete old data"],
  "Keywords and filters help to discover exactly the information you are looking for.")
Q(S7, 'A', "A student gets millions of results when she searches for 'computer'. Which action gives better results?", "Add specific keywords and filters",
  ["Search with a shorter word", "Open every single result", "Stop searching altogether"],
  "More specific keywords and filters narrow the results to the required information.")
