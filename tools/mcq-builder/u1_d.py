# -*- coding: utf-8 -*-
from lib import *
C = 1
SF = "1.6 Cybersecurity & encryption"

add(C, SF, 'K', "Cybersecurity is the practice of:", "protecting internet-connected systems, networks and data from malicious attacks",
    ["increasing the speed of an internet connection", "repairing damaged computer hardware", "designing attractive websites"],
    "Cybersecurity protects computers, servers, mobile devices, networks and data from malicious attacks and unauthorized access.")
add(C, SF, 'U', "Which of the following is a reason why cybersecurity is important?", "It protects sensitive data such as personal and financial information",
    ["It increases the storage capacity of servers", "It reduces the electricity used by computers", "It makes software install faster"],
    "Cybersecurity protects sensitive data, prevents attacks, keeps critical infrastructure running, ensures business continuity and helps meet regulations.")
add(C, SF, 'A', "A malicious program copies itself and spreads across a hospital network without any user opening or running anything. Which type of malware is this?",
    "Worm", ["Virus", "Trojan", "Spyware"],
    "A worm is self-replicating malware that spreads across networks without user intervention. A virus needs an infected program to be executed.")
add(C, SF, 'K', "Malicious code that attaches itself to a legitimate program and spreads when the infected program is run is called a:", "virus",
    ["worm", "Trojan", "firewall"],
    "A virus attaches to legitimate programs and spreads when the infected program is executed.")
add(C, SF, 'A', "A free game looks genuine, but secretly lets an attacker control the user's computer. Which type of malware is it?", "Trojan",
    ["Worm", "Virus", "Ransomware"],
    "A Trojan appears to be legitimate software but hides malicious functions such as remote control or data theft.")
add(C, SF, 'A', "All the files of a company are locked and the attackers demand payment in exchange for the decryption key. This is an example of:", "ransomware",
    ["spyware", "a worm", "phishing"],
    "Ransomware encrypts files or entire systems and demands a ransom for the decryption key. Paying does not guarantee the data will be recovered.")
add(C, SF, 'K', "Which malware collects user information without their knowledge, often for advertising or surveillance?", "Spyware",
    ["Ransomware", "Worm", "Trojan"],
    "Spyware secretly gathers information about a user's activity without their knowledge.")
add(C, SF, 'A', "A student receives an email that appears to come from the bank and asks them to click a link and type their password. Which attack is this?", "Phishing",
    ["DDoS attack", "Ransomware attack", "Insider threat"],
    "Phishing is a social engineering attack in which criminals deceive users into revealing sensitive information such as passwords.")
add(C, SF, 'K', "Phishing attacks aimed at specific individuals or organizations using personalised information are called:", "spear phishing",
    ["email phishing", "DDoS attacks", "insider threats"],
    "Spear phishing is targeted phishing against particular people or organizations using personal details.")
add(C, SF, 'U', "What is the aim of a DDoS attack?", "To overwhelm a system with traffic so legitimate users cannot access it",
    ["To steal passwords through fake emails", "To lock files and demand a ransom", "To spread through infected programs"],
    "Denial of Service attacks flood a target with excessive traffic so that it becomes inaccessible to legitimate users.")
add(C, SF, 'U', "How does a DDoS attack differ from a DoS attack?", "Many compromised devices coordinate to flood the target",
    ["It uses only one attacker's device", "It only targets e-mail accounts", "It encrypts the victim's data"],
    "In a DDoS attack multiple compromised devices flood the target together, which makes it harder to stop than a DoS attack.")
add(C, SF, 'K', "An employee who misuses their access rights to share sensitive information with outsiders is an example of:", "an insider threat",
    ["a DDoS attack", "spear phishing", "a Trojan"],
    "Insider threats come from people inside the organization, such as employees or contractors, who misuse their access to systems and data.")
add(C, SF, 'U', "Which of the following is the strongest password?", "Tg7#kLm!92pQ",
    ["ali2008", "password123", "12345678"],
    "A strong password is long, mixes upper and lower case letters, numbers and special characters, and is unpredictable. The others are short or easily guessed.")
add(C, SF, 'K', "According to the textbook, a strong password should usually be at least how many characters long?", "12", ["4", "6", "8"],
    "Longer passwords are harder to crack, and a strong password is usually at least 12 characters long with a mix of letters, numbers and symbols.")
add(C, SF, 'U', "Why should a different password be used for each online account?", "If one account is compromised, the others remain safe",
    ["It makes every password shorter", "It removes the need for software updates", "It stops a firewall from working"],
    "Reusing passwords is risky: if one account is broken into, attackers can try the same password on the user's other accounts.")
add(C, SF, 'K', "Why should software be kept up to date?", "To patch known security vulnerabilities",
    ["To make the files larger", "To remove the need for passwords", "To increase screen brightness"],
    "Updates patch known vulnerabilities and add security improvements. Outdated software is an easy target for malware.")
add(C, SF, 'A', "A bank asks a customer for a password and then sends a one-time code (OTP) to the customer's phone before logging in. What is this security method called?",
    "Two-factor authentication (2FA)", ["Symmetric encryption", "A firewall", "Phishing"],
    "2FA needs two different forms of verification, such as something you know (password) and something you have (an OTP on your phone).")
add(C, SF, 'K', "What does a firewall do?", "It monitors and controls network traffic and blocks malicious traffic",
    ["It converts plaintext into ciphertext", "It stores backup copies of data", "It only scans files for viruses"],
    "A firewall is a barrier between a trusted internal network and untrusted external networks. It filters and blocks malicious traffic.")
add(C, SF, 'U', "Software that detects, quarantines and removes viruses, Trojans and spyware by scanning files in real time is called:", "antivirus software",
    ["a firewall", "a backup plan", "an encryption key"],
    "Antivirus and anti-malware software detect, quarantine and remove malicious software and scan files in real time.")
add(C, SF, 'U', "How do regular backups help an organization after a ransomware attack?", "Critical data can be restored without paying the ransom",
    ["They stop the attack from starting", "They make passwords stronger", "They block suspicious e-mails"],
    "Backup and disaster recovery plans let organizations restore data after a cyberattack, minimising downtime and data loss.")
add(C, SF, 'K', "The process of verifying the identity of a user or system before giving access is called:", "authentication",
    ["encryption", "decryption", "scaling"],
    "Authentication verifies that a user or system is who it claims to be. 2FA is one authentication method.")
add(C, SF, 'K', "Encryption is the process of converting:", "plaintext into unreadable ciphertext using an algorithm and a key",
    ["ciphertext into plaintext without any key", "passwords into usernames", "analog signals into digital signals"],
    "Encryption transforms readable plaintext into scrambled ciphertext with an encryption algorithm and key, so only someone with the decryption key can read it.")
add(C, SF, 'K', "In encryption, the original human-readable data is called:", "plaintext", ["ciphertext", "key", "algorithm"],
    "Plaintext is the original readable data. Ciphertext is the scrambled form produced by encryption.")
add(C, SF, 'U', stim("The figure shows the encryption process. One label is replaced by a question mark.", enc_flow_svg(mid_missing=True, k1='Key', k2='Key')) + "Which term replaces the question mark?",
    "Ciphertext", ["Decryption key", "Firewall", "Plaintext"],
    "Encryption turns plaintext into ciphertext. Decryption then reverses the process to produce plaintext again.")
add(C, SF, 'K', "Symmetric encryption uses:", "a single key for both encryption and decryption",
    ["a public key and a private key", "no key at all", "a different key for every character"],
    "Symmetric encryption relies on one shared secret key to encrypt plaintext and decrypt ciphertext.")
add(C, SF, 'U', stim("The figure shows how a message is encrypted and decrypted.", enc_flow_svg(mid='Ciphertext', k1='Same secret key', k2='Same secret key')) + "Which type of encryption is shown?",
    "Symmetric encryption", ["Asymmetric encryption", "Two-factor authentication", "Firewall filtering"],
    "The same key is used to encrypt and to decrypt, which is symmetric encryption.")
add(C, SF, 'A', stim("A message is encrypted with the receiver's public key, as shown.", enc_flow_svg(mid='Ciphertext', k1='Public key', k2='Private key')) + "Which type of encryption is this, and which key is used to decrypt the message?",
    "Asymmetric; the private key", ["Asymmetric; the public key", "Symmetric; the private key", "Symmetric; the shared key"],
    "Two different keys are used, so it is asymmetric encryption. The public key encrypts and only the matching private key can decrypt.")
add(C, SF, 'A', "A company must encrypt very large amounts of data quickly, and a secure way of sharing the key already exists. Which encryption method is more suitable?",
    "Symmetric encryption", ["Asymmetric encryption", "Public-key exchange only", "No encryption"],
    "Symmetric encryption is faster and less computationally complex, so it is well suited to large amounts of data when a secure key channel exists.")
add(C, SF, 'A', "Two people who have never met want to exchange secret messages over the internet without first sharing a secret key. Which method should they use?",
    "Asymmetric encryption", ["Symmetric encryption", "A single shared password", "Plaintext messaging"],
    "Asymmetric encryption allows secure communication between parties who have never met, because public keys can be shared openly and only the private key decrypts.")
add(C, SF, 'K', "Which is an advantage of asymmetric encryption over symmetric encryption?", "It removes the need to share a secret key in advance",
    ["It is much faster for large files", "It needs less computing power", "It uses only one key"],
    "Asymmetric encryption simplifies key distribution because public keys can be shared openly. It is, however, slower and more computationally complex.")
add(C, SF, 'K', "The main challenge of symmetric encryption is:", "distributing and managing the secret key securely",
    ["its very slow speed", "needing two different keys", "being unable to encrypt text"],
    "If the single shared key is stolen or sent over an insecure channel, all the encrypted data becomes vulnerable.")
add(C, SF, 'K', "Which property means the sender of a message cannot deny having sent it?", "Non-repudiation",
    ["Redundancy", "Scalability", "Elasticity"],
    "Asymmetric encryption gives non-repudiation: the sender cannot deny sending the message because only their private key matches.")
add(C, SF, 'K', "Cryptography is best described as:", "the science of securing information by turning it into an unreadable format",
    ["a program that removes viruses", "a device that filters network traffic", "a technique for making backups"],
    "Cryptography uses mathematical algorithms to secure information. It ensures confidentiality, integrity and authentication.")

if __name__ == '__main__':
    print(stats(1))
