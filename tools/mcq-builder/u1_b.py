# -*- coding: utf-8 -*-
from lib import *
C = 1
SC = "1.4 SDLC, testing, deployment & development models"

add(C, SC, 'K', "What does SDLC stand for?", "Software Development Life Cycle",
    ["System Design Language Code", "Software Deployment Logic Chain", "Structured Data Life Cycle"],
    "SDLC is the Software Development Life Cycle: the process of planning, writing, modifying and maintaining software.")
add(C, SC, 'K', "In which SDLC phase is the problem or system to be developed clearly defined and the requirements documented?", "Defining the problem phase",
    ["Planning phase", "Feasibility study phase", "Analysis phase"],
    "The defining the problem phase states clearly what must be built (for example, a Students' Examination System) and documents the product requirements.")
add(C, SC, 'U', "Before investing money, a company studies whether a proposed system is technically, economically, legally and operationally possible within the estimated cost and time. Which SDLC phase is this?",
    "Feasibility study phase", ["Analysis phase", "Planning phase", "Requirement engineering phase"],
    "A feasibility study analyses and evaluates a proposed system to decide whether it is feasible in terms of technology, finance, law, operations and time.")
add(C, SC, 'A', "A software company checks that its new patient-records system follows all data-protection laws and regulations before starting development. Which type of feasibility is this?",
    "Legal feasibility", ["Economic feasibility", "Technical feasibility", "Operational feasibility"],
    "Legal feasibility evaluates whether a proposed system complies with applicable laws, regulations and standards.")
add(C, SC, 'K', "Which type of feasibility compares the costs and benefits of a proposed system?", "Economic feasibility",
    ["Technical feasibility", "Schedule feasibility", "Legal feasibility"],
    "Economic feasibility evaluates the financial viability of a system by comparing its costs and benefits.")
add(C, SC, 'K', "Which of the following is a step of requirement engineering?", "Requirements validation",
    ["Code compilation", "Hardware installation", "System conversion"],
    "Requirement engineering has three steps: requirements gathering, requirements validation and requirements management.")
add(C, SC, 'A', "An analyst watches clerks at their desks to see how they currently process examination results and notes the weak points. Which requirement-gathering technique is being used?",
    "Observation", ["Interview", "Survey", "Document analysis"],
    "Observation means watching users in their natural work environment to understand how they perform tasks and where improvement is needed.")
add(C, SC, 'K', "Which language gives developers a standard visual notation for modelling a system in the design phase?", "UML (Unified Modeling Language)",
    ["HTML", "SQL", "C++"],
    "UML is a standardised visual modelling language used in the design phase so that developers, analysts and stakeholders can visualise a system.")
add(C, SC, 'U', "In which SDLC phase do developers turn the design into database structures, user-interface screens and program code?", "Development/coding phase",
    ["Design phase", "Testing/verification phase", "Deployment phase"],
    "In the development/coding phase the plans from the design phase are translated into actual code using a programming language.")
add(C, SC, 'K', "In black box testing, the tester:", "checks outputs for given inputs without seeing the internal code",
    ["examines every statement of the source code", "knows the internal logic of the program", "only fixes errors in the design documents"],
    "Black box testing focuses on the outputs produced for specified inputs. The tester has no knowledge of the internal code or logic.")
add(C, SC, 'U', "A tester checks a website's login page with a correct password, a wrong password and empty fields, without access to the source code. Which technique is used?",
    "Black box testing", ["White box testing", "Direct testing", "Parallel testing"],
    "The tester only compares expected and actual outputs for different inputs, without knowing the code, so this is black box testing.")
add(C, SC, 'A', "A tester has the source code and checks each statement and code path of a function that calculates percentage marks. Which technique is being used?",
    "White box testing", ["Black box testing", "Pilot testing", "Phased testing"],
    "White box testing is used when the tester knows the internal code and logic and checks statements, code paths and variables.")
add(C, SC, 'A', "A bank switches off its old payment system and starts using the new one for all branches on the same day. Which deployment method is this?",
    "Direct", ["Parallel", "Phased", "Pilot"],
    "In direct deployment the old system is replaced entirely by the new one at once, so the old system becomes obsolete immediately.")
add(C, SC, 'A', "A company runs its old and new payroll systems side by side for a month so major problems can be fixed without losing data. Which deployment method is this?",
    "Parallel", ["Direct", "Phased", "Pilot"],
    "In parallel deployment both systems run at the same time for a period, which allows problems in the new system to be found safely.")
add(C, SC, 'A', "A school introduces its new software one department at a time while slowly phasing out the old system. Which deployment method is this?",
    "Phased", ["Direct", "Parallel", "Pilot"],
    "Phased deployment is a gradual transition in which the new system is introduced step by step while the old one is progressively phased out.")
add(C, SC, 'A', "A company first gives its new system to a small group of users to collect their feedback and then releases it to everyone. Which deployment method is this?",
    "Pilot", ["Direct", "Parallel", "Phased"],
    "In pilot deployment the new system is first used by a small group who test it and give feedback. After it is judged satisfactory it is rolled out to all users.")
add(C, SC, 'K', "In which SDLC phase are user manuals and design records prepared so that errors can be diagnosed even if the original analysts have left?",
    "Documentation phase", ["Testing phase", "Planning phase", "Feasibility study phase"],
    "Good documentation is a means of communication among those who develop, implement and maintain the system, and is important for diagnosing errors and making changes later.")
add(C, SC, 'K', "Which SDLC phase includes repairing, modifying or enhancing the system after it has been delivered?", "Maintenance/support phase",
    ["Deployment phase", "Design phase", "Analysis phase"],
    "System maintenance is an ongoing process: the system is monitored, and repairs, modifications or enhancements are made after delivery.")
add(C, SC, 'K', "Fixing errors that were left undiscovered during development and testing is called:", "corrective maintenance",
    ["perfective maintenance", "requirements validation", "system conversion"],
    "Corrective maintenance corrects errors found after release. Perfective maintenance, in contrast, enhances the functionality of the software.")
add(C, SC, 'K', "Which software development model is sequential, with phases that follow one another and do not overlap?", "Waterfall model",
    ["Agile model", "Pilot model", "Parallel model"],
    "The Waterfall model is a linear approach in which each phase must be completed before the next one begins.")
add(C, SC, 'U', stim("The figure shows the phases of the Waterfall model. One phase is marked with a question mark.", waterfall_svg(3)) + "Which phase is missing at the position marked '?'",
    "Testing", ["Deployment", "Planning", "Maintenance"],
    "The Waterfall phases are requirements, design, development, testing, deployment and maintenance. Testing comes after development.")
add(C, SC, 'A', "A project has all of its requirements clearly defined and they are not expected to change. Which software development model is most suitable?",
    "Waterfall model", ["Agile model", "Pilot deployment", "Phased deployment"],
    "Waterfall suits projects whose requirements are predefined and stable, because its phases follow a fixed order and the cost and release date can be estimated in advance.")
add(C, SC, 'A', "A start-up is building a mobile app. The client keeps changing requirements, and the team wants to deliver a working version every few weeks. Which model should it follow?",
    "Agile model", ["Waterfall model", "Direct deployment", "Parallel deployment"],
    "Agile develops software iteratively in short cycles called sprints, welcoming change and continuous customer feedback.")
add(C, SC, 'K', "A major disadvantage of the Waterfall model is that:", "it is difficult to change requirements once a phase is complete",
    ["it requires the customer to be available all the time", "it does not define its phases clearly", "it delivers a working product at every sprint"],
    "Waterfall is inflexible: mid-project changes are hard, delivery is late and defects are found late. The other options describe Agile.")
add(C, SC, 'U', "Which of the following is a limitation of the Agile model?", "it depends heavily on the availability of the customer",
    ["its release date and final cost are fixed in advance", "testing is done only at the end of the project", "requirements can never be changed"],
    "Agile depends on continuous customer involvement, can suffer scope creep and gives less emphasis to documentation. Fixed cost and date are Waterfall features.")

if __name__ == '__main__':
    print(stats(1))
