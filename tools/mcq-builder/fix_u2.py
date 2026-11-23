from lib import *
def P(key, wrong, ans=None, old=None):
    hits = [x for x in QS[2] if key in x['q'] and (old is None or x['ans'] == old)]
    assert len(hits) == 1, (key, old, len(hits))
    x = hits[0]
    if ans is not None: x['ans'] = ans
    x['options'] = [x['ans']] + list(wrong)
    assert len(set(x['options'])) == 4

def apply():
    P("Computational thinking is best described as", ["a method of repairing computer hardware when it stops working properly in the lab", "a way of typing programs faster by using shortcut keys on a keyboard", "a technique for connecting several computers together into one network"])
    P("Computational artifacts are:", ["natural objects found in the environment that are studied using computer programs", "only the physical parts of a computer, such as the keyboard, mouse and monitor", "errors and warnings that appear on the screen while a program is running"])
    P("produced before the coding phase", ["They remove the need to test the software before it is delivered to the users", "They make the final program run faster on every type of computer", "They replace the programming language that is used in the coding phase"])
    P("design methods used as computational artifacts", ["Bugs, patches and software updates", "Hubs, switches and network routers", "Plaintext, ciphertext and secret keys"])
    P("An algorithm is:", ["a program that has already been compiled and is ready to run on a computer", "a diagram made only of shapes that are joined to each other by arrows", "a hardware device that is used to store data permanently on a disk"])
    P("Pseudocode is best described as", ["the compiled version of a finished program that runs on the computer", "a special type of symbol that is drawn inside a flowchart diagram", "the output that is displayed when a finished program is executed"])
    P("A flowchart is:", ["a table that records the values of variables while an algorithm is run", "a program written in a high-level language and ready for compilation", "a list of the errors that were found during the testing of a program"])
    # flowchart symbols: unify wording
    P("What is this symbol used for?", ["Input or output of data values", "A decision with a Yes or No answer", "An arithmetic operation on data"], ans="Start or end of the program", old="Start or end of the program")
    P("What is this symbol used for?", ["Start or end of the program", "A decision with a Yes or No answer", "An arithmetic operation on data"], ans="Input or output of data values", old="Input or output of data")
    P("What is this symbol used for?", ["Input or output of data values", "Start or end of the program", "An arithmetic operation on data"], ans="A decision with a Yes or No answer", old="A decision that has a Yes or No answer")
    P("What is this symbol used for?", ["Input or output of data values", "Start or end of the program", "A decision with a Yes or No answer"], ans="An arithmetic operation on data", old="An arithmetic operation or data processing step")
    P("what are the arrows (flow lines) used for", ["To perform the arithmetic calculations that are needed by the program", "To store the values of all the variables used in the algorithm", "To mark the place where the program starts running only"])
    P("normally has:", ["only one exit path leading downwards", "no exit path, as it ends the flowchart", "three exit paths, one for each variable"])
    P("Which statement about pseudocode is correct", ["It must be written in one fixed syntax for all programmers", "It can be run directly by the computer without translation", "It must always use capital letters for every single word"])
    P("consistent indentation", ["To make the program run faster on the computer", "To use less memory while the program is running", "To avoid having to write comments in the code"])
    P("Listing the inputs and expected outputs", ["the programming language and the computer that will be used for the problem", "the number of people who will use the program after it has been written", "the errors that the compiler is likely to report when the code is run"])
    P("A data structure is:", ["a statement that repeats a group of instructions until a condition is false", "a diagram that shows the flow of a program with symbols and arrows", "a test that checks an algorithm by hand using sample input values"])
    P("trace an algorithm by hand before writing", ["To make the program use less memory when it is finally executed on a computer", "To translate the algorithm into machine language that the computer can run", "To decide which programming language will be used to write the final program"])
    P("A trace table is used to:", ["measure the time that is taken by each statement of the algorithm", "store the finished program permanently on the disk of a computer", "list the errors that were reported by a compiler during translation"])
    P("What should be done first when tracing", ["Verify the final output of the algorithm", "Compile the algorithm into machine code", "Delete the variables that are not used"])
    P("final output is compared with", ["the number of lines that the algorithm contains", "the output produced by a completely different algorithm", "the amount of memory used by all the variables"])
    P("such as a negative age", ["To make the algorithm run faster on the computer", "To avoid having to draw a flowchart of the algorithm", "To reduce the number of steps in the algorithm"])
    P("four common parameters used to evaluate", ["Speed, colour, size and price of the computer", "Input, process, output and storage of the data", "Design, coding, testing and deployment of software"])
    P("Sorting algorithms are used to:", ["find the position of an item in a list of data values", "remove all the errors from a program before it runs", "protect the data in a network from unauthorized users"])
    P("Bubble sort works by:", ["picking the middle element of a list and then halving the list again and again", "scanning a list from the start until the required item is found in it", "inserting each element into a separate empty list that is already sorted"])
    P("Insertion sort works by:", ["swapping only the first and the last element of the list over and over", "dividing the list into two halves each time and sorting the halves apart", "comparing every element with the middle element of the whole list first"])
    P("starts from the second element", ["the first element is always the smallest in the list", "the second element is always the largest in the list", "the first element has to be deleted from the list"])
    P("Searching algorithms are used to:", ["arrange the elements of a group in ascending order", "convert pseudocode into a flowchart with symbols", "check the speed of the network between computers"])
