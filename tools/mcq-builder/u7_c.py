# -*- coding: utf-8 -*-
from lib import *
C = 7
R9 = "7.3 Advanced web search (SLO CS-11-G-01)"

add(C, R9, 'K', "Which symbols placed around words make a search engine look for that exact phrase?", "Quotation marks",
    ["Round brackets", "Hash signs", "Asterisks"],
    "Putting words inside quotation marks searches for the exact phrase in that order, which narrows the results.")
add(C, R9, 'U', "A user searches for: jaguar -car. What does the minus sign do?", "Excludes pages with car",
    ["Adds car to every result", "Finds only the word car", "Sorts the results by car"],
    "A minus sign directly before a word excludes the pages that contain it, so results about the animal are not mixed with cars.")
add(C, R9, 'K', "Which search operator limits the results to one particular website?", "site:",
    ["filetype:", "url:", "web:"],
    "site: restricts results to a chosen website or domain, such as site:who.int. filetype: limits the type of document instead.")
add(C, R9, 'A', "A student wants only PDF documents about a climate report. Which search is best?", "climate report filetype:pdf",
    ["climate report site:pdf", "pdf -climate report", "\"pdf\" climate report"],
    "filetype:pdf asks the search engine to return only PDF files that match the keywords.")
add(C, R9, 'A', "Which search finds the exact phrase qualitative interview only on the website who.int?", "\"qualitative interview\" site:who.int",
    ["qualitative interview filetype:who.int", "site:\"qualitative interview\" who.int", "-qualitative interview site:who.int"],
    "Quotation marks keep the phrase together and site:who.int limits the search to that website. The other forms use the operators wrongly.")
