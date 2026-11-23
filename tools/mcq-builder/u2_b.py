# -*- coding: utf-8 -*-
from lib import *
C = 2
S5 = "2.1.4 Testing artifacts: tracing & trace tables"
S6 = "2.1.4 Evaluating algorithms"
S7 = "2.2.1 Sorting algorithms"
S8 = "2.2.2 Searching algorithms"

# ---------------- testing / tracing ----------------
add(C, S5, 'K', "Tracing an algorithm is also known as:", "a dry run or desk check",
    ["compiling the algorithm", "deploying the algorithm", "debugging the hardware"],
    "Tracing is a manual check of an algorithm, also called a dry run or desk check, done before the code is written.")
add(C, S5, 'U', "Why do programmers trace an algorithm by hand before writing its code?", "To check that the algorithm works correctly by following variable values and the flow of control",
    ["To make the program use less memory when it runs", "To translate the algorithm into machine language", "To decide which programming language to use"],
    "Hand simulation of the algorithm, keeping track of variable values and the logic flow, helps find logical errors early.")
add(C, S5, 'K', "A trace table is used to:", "show how the values of variables change at each step of an algorithm",
    ["measure the time taken by each statement", "store the final program permanently", "list the errors reported by a compiler"],
    "Trace tables record the values of variables at each stage, which tests whether the algorithm gives the expected output and exposes logical errors.")
add(C, S5, 'K', "What should be done first when tracing an algorithm?", "Understand the logic flow of the algorithm",
    ["Verify the final output", "Compile the algorithm", "Delete the unused variables"],
    "Before tracing starts, the algorithm's logic flow must be understood. Then test input is chosen and variables are initialised.")
add(C, S5, 'U', "At the end of tracing, the final output is compared with:", "the expected output for the chosen test input",
    ["the number of lines in the algorithm", "the output of a different algorithm", "the memory used by the variables"],
    "The last tracing step is to verify that the output matches what is expected for the given input.")
add(C, S5, 'U', "Why should a tester also try invalid input, such as a negative age, when testing an algorithm?", "To find logical errors that the algorithm may not handle",
    ["To make the algorithm run faster", "To avoid writing a flowchart", "To reduce the number of steps"],
    "Testing should consider potential logical errors, for example what happens if a user enters invalid data.")
add(C, S5, 'A', stim("Study the pseudocode and its trace table.", pre('''x <- 2
FOR i FROM 1 TO 3
    x <- x * 2
ENDFOR
OUTPUT x''') + truth_html(['i', 'x'], [('start', 2), (1, 4), (2, 8), (3, '?')])) + "What value of x replaces the question mark?",
    "16", ["6", "12", "32"],
    "x doubles in every pass: 2, 4, 8, 16. When i = 3, x becomes 8 × 2 = 16, which is also the output.")
add(C, S5, 'A', stim("Study the pseudocode and the incomplete trace table.", pre('''A <- [4, 7, 4, 9, 4]
count <- 0
FOR i FROM 0 TO 4
    IF A[i] = 4 THEN
        count <- count + 1
    ENDIF
ENDFOR''') + truth_html(['i', 'A[i]', 'count'], [(0, 4, 1), (1, 7, 1), (2, 4, 2), (3, 9, 2), (4, 4, '?')])) + "What is the final value of count?",
    "3", ["2", "4", "5"],
    "count increases by 1 each time A[i] equals 4. This happens at i = 0, 2 and 4, so the final value is 3.")
add(C, S5, 'A', stim("Study the pseudocode and the incomplete trace table.", pre('''n <- 20
c <- 0
WHILE n > 5
    n <- n - 6
    c <- c + 1
ENDWHILE
OUTPUT c''') + truth_html(['Pass', 'n', 'c'], [('start', 20, 0), (1, 14, 1), (2, 8, 2), (3, '?', 3)])) + "What is the value of n after the third pass, and why does the loop then stop?",
    "2; because 2 > 5 is false", ["2; because c has reached 3", "8; because 8 > 5 is false", "-4; because n becomes negative"],
    "After the third pass n = 8 - 6 = 2. The condition n > 5 is now false, so the loop ends and the output is 3.")
add(C, S5, 'A', stim("Study the pseudocode and the incomplete trace table.", pre('''sum <- 0
FOR i FROM 1 TO 4
    sum <- sum + i * i
ENDFOR
OUTPUT sum''') + truth_html(['i', 'i * i', 'sum'], [(1, 1, 1), (2, 4, 5), (3, 9, '?'), (4, 16, 30)])) + "What value replaces the question mark?",
    "14", ["9", "12", "18"],
    "sum is 5 after i = 2, so after i = 3 it is 5 + 9 = 14. After i = 4 it becomes 14 + 16 = 30.")

# ---------------- evaluation ----------------
add(C, S6, 'K', "Which list gives the four common parameters used to evaluate an algorithm?", "Correctness, efficiency, clarity and reliability",
    ["Speed, colour, size and price", "Input, process, output and storage", "Design, coding, testing and deployment"],
    "Algorithms are evaluated on correctness, efficiency (time and space), clarity and reliability.")
add(C, S6, 'K', "Which evaluation parameter requires an algorithm to produce the desired output for all possible valid inputs?", "Correctness",
    ["Clarity", "Efficiency", "Reliability"],
    "Correctness is considered the most fundamental evaluation parameter. Various inputs are tried to check it.")
add(C, S6, 'K', "The time complexity of an algorithm refers to:", "the amount of time the algorithm takes to run",
    ["the amount of memory the algorithm needs", "how easily humans can read the algorithm", "the number of errors found in the algorithm"],
    "Time complexity is the time taken to run, while space complexity is the amount of memory required.")
add(C, S6, 'K', "The space complexity of an algorithm refers to:", "the amount of memory required to run the algorithm",
    ["the time taken by the algorithm to finish", "the number of steps written in the flowchart", "the length of the pseudocode on the page"],
    "Space complexity measures the memory needed by the algorithm. Efficiency deals with both time and space.")
add(C, S6, 'U', "How easily the logic and steps of an algorithm can be understood by people is called its:", "clarity",
    ["efficiency", "correctness", "complexity"],
    "Clarity refers to how easily humans involved in software development can understand the algorithm's logic and steps.")
add(C, S6, 'U', "The ability of an algorithm to always give accurate results with consistency for a set of inputs is called its:", "reliability",
    ["clarity", "space complexity", "abstraction"],
    "A reliable algorithm always performs its task with a high degree of accuracy and consistency.")
add(C, S6, 'A', "Two algorithms give the same correct result, but one finishes sooner and uses less memory. Which evaluation parameter separates them?", "Efficiency",
    ["Clarity", "Correctness", "Reliability"],
    "Efficiency deals with time and space (memory) complexity, so the faster and lighter algorithm is more efficient.")
add(C, S6, 'A', "A new team member cannot follow the steps of an algorithm written by a colleague, even though it gives correct results. Which parameter is weak?", "Clarity",
    ["Correctness", "Efficiency", "Reliability"],
    "The algorithm is correct but hard for humans to understand. That is a clarity problem.")

# ---------------- sorting ----------------
add(C, S7, 'K', "Sorting algorithms are used to:", "arrange data in a useful order, such as ascending or descending",
    ["find the position of an item in a list", "remove errors from a program", "protect data from unauthorized users"],
    "Sorting arranges data in a useful order. Bubble sort and insertion sort are two basic sorting methods.")
add(C, S7, 'K', "Bubble sort works by:", "repeatedly comparing adjacent elements and swapping them if they are in the wrong order",
    ["picking the middle element and halving the list", "scanning from the start until the item is found", "inserting each element into a separate empty list"],
    "Bubble sort compares neighbouring elements and swaps those that are out of order. It repeats this until the whole list is sorted.")
add(C, S7, 'U', "After the first pass of bubble sort in ascending order, which element is guaranteed to be in its correct position?", "The largest element, at the end of the array",
    ["The smallest element, at the start of the array", "The middle element of the array", "Every element of the array"],
    "In the first pass the largest element is carried step by step to the last place, so it need not be checked in later passes.")
a = [13, 32, 26, 35, 10]
r, sw = bubble_pass(a)
assert r == [13, 26, 32, 10, 35]
add(C, S7, 'A', stim("The array is to be sorted in ascending order using bubble sort.", array_svg(a)) + "What does the array look like after the first pass?",
    fmt(r), ["13, 32, 26, 10, 35", "10, 13, 26, 32, 35", "13, 26, 10, 32, 35"],
    "Pass 1: (13,32) stay; (32,26) swap; (32,35) stay; (35,10) swap. The array becomes 13, 26, 32, 10, 35 and 35 reaches the end.")
a = [5, 1, 4, 2, 8]
r, sw = bubble_pass(a)
assert sw == 3 and r == [1, 4, 2, 5, 8]
add(C, S7, 'A', stim("The array is to be sorted in ascending order using bubble sort.", array_svg(a)) + "How many swaps take place during the first pass?",
    "3", ["2", "4", "5"],
    "Pass 1: (5,1) swap, (5,4) swap, (5,2) swap, (5,8) no swap. There are 3 swaps and the array becomes 1, 4, 2, 5, 8.")
a = [29, 10, 14, 37, 13]
r, sw = bubble_pass(a)
assert r == [10, 14, 29, 13, 37]
add(C, S7, 'A', stim("The list is to be arranged in ascending order using bubble sort.", array_svg(a)) + "What is the list after the first pass?",
    fmt(r), ["10, 14, 13, 29, 37", "10, 13, 14, 29, 37", "29, 10, 14, 13, 37"],
    "Pass 1: (29,10) swap; (29,14) swap; (29,37) stay; (37,13) swap. The result is 10, 14, 29, 13, 37.")
add(C, S7, 'U', "How many comparisons are made in the first pass of bubble sort on a list of 6 elements?", "5", ["6", "4", "12"],
    "Each pass compares adjacent pairs from the start, so a list of n elements needs n - 1 comparisons in the first pass: 6 - 1 = 5.")
add(C, S7, 'U', "According to the textbook, the number of iterations needed by bubble sort is one less than:", "the total number of elements in the array",
    ["the number of swaps in the first pass", "the largest value in the array", "the number of sorted elements"],
    "For an array of n elements bubble sort needs at most n - 1 iterations, so a 5-element array needs 4.")
add(C, S7, 'K', "Bubble sort is mainly suited to:", "small data sets and educational purposes",
    ["sorting very large databases quickly", "searching a sorted list in half steps", "encrypting data before transmission"],
    "The textbook recommends bubble sort for a small number of items and for educational purposes.")
add(C, S7, 'K', "Insertion sort works by:", "picking each element and inserting it into its correct place in the already sorted part",
    ["swapping only the first and last elements", "dividing the list into two halves each time", "comparing every element with the middle element"],
    "Insertion sort builds a sorted portion step by step: each new element is inserted into its correct position relative to the elements already sorted.")
add(C, S7, 'U', "In insertion sort, the algorithm starts from the second element because:", "the first element is assumed to be already sorted",
    ["the first element is always the smallest", "the second element is always the largest", "the first element must be deleted"],
    "A single element is trivially sorted, so insertion sort starts with the second element and compares it with the sorted part.")
a = [12, 31, 25, 8, 32, 17]
st = insertion_steps(a)
assert st[2] == [12, 25, 31, 8, 32, 17] and st[3] == [8, 12, 25, 31, 32, 17]
add(C, S7, 'A', stim("An array is being sorted in ascending order using insertion sort. The first element is assumed sorted.", array_svg(a, {0: 'g'})) + "What does the array look like after the third element (25) has been inserted into the sorted part?",
    fmt(st[2]), ["12, 31, 25, 8, 32, 17", "25, 12, 31, 8, 32, 17", "8, 12, 25, 31, 32, 17"],
    "12 and 31 are in order. 25 is smaller than 31, so 31 shifts right and 25 is inserted after 12: 12, 25, 31, 8, 32, 17.")
add(C, S7, 'A', stim("An array is being sorted in ascending order using insertion sort. The first three elements are already sorted.", array_svg([12, 25, 31, 8, 32, 17], {0: 'g', 1: 'g', 2: 'g'})) + "What does the array look like after the fourth element (8) has been inserted?",
    fmt(st[3]), ["12, 25, 31, 8, 32, 17", "8, 25, 31, 12, 32, 17", "12, 8, 25, 31, 32, 17"],
    "8 is smaller than 31, 25 and 12, so those three elements shift one place to the right and 8 is inserted at the front: 8, 12, 25, 31, 32, 17.")
add(C, S7, 'A', "A teacher keeps adding one new student's marks to a list that is already sorted and wants it kept in order with the least work. Which sorting method is most suitable?",
    "Insertion sort", ["Linear search", "Binary search", "Direct deployment"],
    "Insertion sort places each new element into its position in an already (nearly) sorted list, so it works well for nearly sorted data.")
add(C, S7, 'U', "Picking up each book and placing it in its correct position among the books you are already holding is similar to which sorting algorithm?", "Insertion sort",
    ["Bubble sort", "Binary search", "Linear search"],
    "The textbook compares insertion sort to inserting each book into its correct position relative to the books already sorted.")
add(C, S7, 'U', "Comparing each pair of neighbouring books from left to right and swapping a pair that is out of order is similar to which algorithm?", "Bubble sort",
    ["Insertion sort", "Binary search", "Linear search"],
    "Bubble sort repeatedly compares adjacent items and swaps them if they are out of order.")
add(C, S7, 'K', "Which sorting algorithm shifts larger elements to the right to make space for the current element?", "Insertion sort",
    ["Bubble sort", "Binary search", "Linear search"],
    "In insertion sort, larger elements of the sorted part are shifted right so the current element can be inserted into its position.")

# ---------------- searching ----------------
add(C, S8, 'K', "Searching algorithms are used to:", "find a desired element in a group of elements",
    ["arrange elements in ascending order", "convert pseudocode into a flowchart", "check the speed of a network"],
    "Searching algorithms look for a required item in a collection of elements. Linear search and binary search are two examples.")
add(C, S8, 'K', "Binary search can be used only when the list is:", "sorted", ["unsorted", "very small", "made of text only"],
    "Binary search compares the target with the middle element and discards half the list, which only works if the list is sorted.")
add(C, S8, 'K', "Binary search follows which approach?", "Divide and conquer",
    ["Checking every element in order", "Swapping adjacent elements", "Inserting elements one by one"],
    "The sorted list is divided into two parts. The item is compared with the middle element, and only the half that can contain the item is searched.")
arr = [10, 12, 24, 29, 39, 40, 51, 56, 69]
seq, pos = binary_trace(arr, 56)
assert [arr[m] for (_, m, _) in seq] == [39, 51, 56] and pos == 7
add(C, S8, 'A', stim("The sorted array below is searched for the value 56 using binary search.", array_svg(arr, {4: 'y'}, tags={0: 'low', 4: 'mid', 8: 'high'})) + "Which element is compared first?",
    "39", ["10", "56", "69"],
    "The first step checks the middle element of the whole array. With 9 elements the middle is the 5th, which is 39.")
add(C, S8, 'A', stim("The value 56 is being searched in the sorted array. The first middle element was 39.", array_svg(arr, {4: 'y'}, tags={4: 'mid'})) + "56 is greater than 39. Which part of the array is searched next?",
    "The right part (40, 51, 56, 69)", ["The left part (10, 12, 24, 29)", "The whole array again", "Only the element 39"],
    "The array is sorted, so a value larger than 39 can only lie to its right. The left half is ignored.")
add(C, S8, 'A', stim("The sorted array below is searched for 56 using binary search.", array_svg(arr)) + "How many elements are compared with 56 before it is found (counting the comparison that finds it)?",
    "3", ["2", "4", "8"],
    "Comparisons: 39 (too small), then 51 (too small), then 56 (found). That is 3 comparisons, whereas linear search would need 8.")
add(C, S8, 'U', "In binary search, if the middle element is greater than the target value, the algorithm:", "ignores the right half and continues in the left half",
    ["ignores the left half and continues in the right half", "starts again from the first element", "stops and reports that the value is missing"],
    "If the middle element is greater than the target, the target (if present) must be in the left part of the sorted list.")
add(C, S8, 'K', "Linear search is also called:", "sequential search", ["binary search", "bubble search", "divide search"],
    "Linear (sequential) search goes through the elements one by one until the required item is found.")
arr2 = [70, 40, 30, 11, 57, 41, 25, 14, 56]
assert arr2.index(41) == 5
add(C, S8, 'A', stim("The unsorted array below is searched for 41 using linear search.", array_svg(arr2, {5: 'g'})) + "At which index (position) is 41 found?",
    "5", ["4", "6", "41"],
    "Linear search starts at index 0 and checks 70, 40, 30, 11, 57 and then 41. The element 41 is at index 5.")
add(C, S8, 'A', stim("The unsorted array below is searched for 41 using linear search, starting from index 0.", array_svg(arr2)) + "How many elements are compared with 41 before the search stops (including the match)?",
    "6", ["5", "9", "1"],
    "The elements 70, 40, 30, 11, 57 and 41 are compared in turn, so 6 comparisons are made.")
add(C, S8, 'U', "What does linear search return if the required item is not found in the array?", "NULL (item not found)",
    ["The first element of the array", "The middle element of the array", "The last element of the array"],
    "If the end of the array is reached without a match, the algorithm returns NULL.")
add(C, S8, 'A', "A teacher has an unsorted list of 20 student names and wants to find one name. Which search should be used?", "Linear search",
    ["Binary search", "Bubble sort", "Insertion sort"],
    "Binary search needs a sorted list. Linear search works on unsorted data and is suitable for a smaller number of elements.")
add(C, S8, 'A', "A phone directory of millions of names is already sorted alphabetically. Which search will find a name faster in general?", "Binary search",
    ["Linear search", "Bubble sort", "Insertion sort"],
    "Binary search halves the search space at every step, so it is ideal for a large, sorted list.")
add(C, S8, 'U', "Why can linear search be used on a list of newly added records that has not been sorted?", "It does not require the data to be sorted first",
    ["It always finds the item faster than binary search", "It sorts the list while searching", "It only works on very large lists"],
    "Linear search checks elements one after another, so no sorting or preparation is needed.")
add(C, S8, 'U', "Scrolling down a list from the top until you find a movie is similar to which searching algorithm?", "Linear search",
    ["Binary search", "Insertion sort", "Bubble sort"],
    "Starting at the top and checking items one by one is a linear (sequential) search.")
add(C, S8, 'U', "Repeatedly dividing a sorted list in half to quickly narrow down the options is similar to which searching algorithm?", "Binary search",
    ["Linear search", "Insertion sort", "Bubble sort"],
    "Halving the list at each step is the idea of binary search, which is ideal for a larger number of elements.")

if __name__ == '__main__':
    print(stats(2))
