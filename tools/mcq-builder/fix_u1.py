from lib import *
def patch(ch, key, wrong, ans=None):
    hits = [x for x in QS[ch] if key in x['q']]
    assert len(hits) == 1, (key, len(hits))
    x = hits[0]
    if ans is not None:
        x['ans'] = ans
    x['options'] = [x['ans']] + list(wrong)
    assert len(set(x['options'])) == 4

def apply(ch=1):
    P = lambda k, w, a=None: patch(ch, k, w, a)
    P("covered by alphanumeric codes?", ["Only digits and punctuation marks", "Only upper-case and lower-case letters", "Only special characters and symbols"])
    P("best suited?", ["Analog signals, because they vary continuously and are easy to copy", "Analog signals, because they resist noise over long distances", "Digital signals, because they degrade slowly with every copy made"])
    P("groups of adjacent 1s can be formed", ["diagonally or vertically, but not horizontally", "only in groups of three cells at a time", "in any shape, including diagonal groups"])
    P("K-map mainly helps to", ["increase the number of gates to make a circuit faster", "convert a binary number into its ASCII character", "store the truth table permanently in memory"])
    P("standard visual notation", ["HTML (HyperText Markup Language)", "SQL (Structured Query Language)", "C++ (a programming language)"])
    P("In black box testing, the tester", ["examines every statement of the source code line by line", "knows the internal logic and structure of the program", "only fixes errors found in the design documents"])
    P("repairing, modifying or enhancing", ["Deployment/implementation phase", "Testing/verification phase", "Documentation phase"])
    P("major disadvantage of the Waterfall model", ["it needs the customer to be available throughout the project", "it does not define the activities of each phase", "it delivers a working product at the end of every sprint"])
    P("Network topology is:", ["a program that protects computers and devices from viruses", "a type of cable used to connect devices in a network", "a method of encrypting data sent over a network"])
    P("What is cloud computing?", ["Storing all of a user's data only on the local hard disk of one computer", "Connecting computers together with network cables inside one building", "Installing software on every computer in an organization separately"])
    P("virtual machines, storage and networks?", ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Hybrid cloud deployment model"])
    P("limitation of vertical scaling", ["It needs many servers that must share the workload", "It cannot improve the performance of the application", "It always needs load balancing between several machines"])
    P("key components of reliability in cloud", ["Caching, hashing, compiling, debugging and formatting", "Resolution, frame rate, colour depth and sampling rate", "Benchmarking, tuning, scripting, formatting and testing"])
    P("This is an example of:</", ["vertical scalability of a single server", "measured service billing by usage", "broad network access from any device"]) if False else None
    P("different regions so that service continues", ["vertical scalability of a single server", "measured service billing by usage", "broad network access from any device"]) if False else None

def apply2(ch=1):
    P = lambda k, w, a=None: patch(ch, k, w, a)
    # questions whose stems end differently: match on distinctive text
    P("outage. This is an example of", ["vertical scalability of a single server", "measured service billing by usage", "broad network access from any device"])
    P("Cybersecurity is the practice of", ["increasing the speed and capacity of internet connections for users", "repairing damaged computer hardware, cables and network devices", "designing attractive, user-friendly websites for organizations"])
    P("reason why cybersecurity is important", ["It increases the storage capacity of servers in an organization", "It reduces the amount of electricity used by computers", "It makes new software install much faster on any device"])
    P("aim of a DDoS attack", ["To steal user passwords by sending fake e-mails to victims", "To lock the files of a victim and demand payment in return", "To spread silently by attaching itself to infected programs"])
    P("What is this security method called", ["Symmetric encryption (one shared key)", "A firewall (network traffic filter)", "Antivirus scanning (malware removal)"])
    P("What does a firewall do", ["It converts plaintext into unreadable ciphertext using a key", "It stores backup copies of important data in another location", "It scans stored files only, looking for known viruses and Trojans"])
    P("Encryption is the process of converting", ["ciphertext into readable plaintext without using any key", "passwords into usernames using a mathematical formula", "analog signals into digital signals using a converter"])
    P("Symmetric encryption uses", ["a public key and a private key as a pair", "no key, relying only on a secret algorithm", "a different key for every character in the message"])
    P("advantage of asymmetric encryption over symmetric", ["It is much faster when encrypting very large files", "It needs far less computing power than symmetric methods", "It uses only one key for encryption and decryption"])
