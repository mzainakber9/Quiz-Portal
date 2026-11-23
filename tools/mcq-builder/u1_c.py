# -*- coding: utf-8 -*-
from lib import *
C = 1
SD = "1.5 Network topologies, scalability & reliability"
SE = "1.5 Cloud computing"

topo = [
 ('bus', "Bus topology", ["Ring topology", "Star topology", "Tree topology"], 'K',
  "In a bus topology all devices connect to one main cable running through the network."),
 ('star', "Star topology", ["Bus topology", "Ring topology", "Mesh topology"], 'K',
  "In a star topology every device is linked to a central hub or switch."),
 ('ring', "Ring topology", ["Bus topology", "Star topology", "Tree topology"], 'K',
  "In a ring topology devices are connected in a circular loop and data travels around the ring."),
 ('mesh', "Mesh topology", ["Star topology", "Tree topology", "Hybrid topology"], 'U',
  "In a mesh topology every node is connected to all the other nodes, giving many alternative paths."),
 ('tree', "Tree topology", ["Star topology", "Bus topology", "Mesh topology"], 'U',
  "A tree (hierarchical) topology has a root node at the top and several hubs or switches below it, like a star with several hubs."),
 ('hybrid', "Hybrid topology", ["Tree topology", "Mesh topology", "Bus topology"], 'U',
  "A hybrid topology combines two or more basic topologies. Here a star and a ring are joined into one network."),
]
for kind, ans, wrong, lvl, why in topo:
    add(C, SD, lvl, stim("Study the network layout shown in the figure.", topo_svg(kind)) + "Which network topology is shown?", ans, wrong, why)

add(C, SD, 'K', "Network topology is:", "the systematic arrangement of computers and other devices in a network",
    ["a program that protects a network from viruses", "a type of cable used in networks", "a method of encrypting network data"],
    "Network topology is the arrangement of nodes (computers, switches, routers and other devices) in a network and how they are connected.")
add(C, SD, 'K', "The devices that are connected in a network are called:", "nodes", ["packets", "protocols", "bytes"],
    "Computers, printers, switches and other devices on a network are called nodes.")
add(C, SD, 'U', "Why can one damaged main cable stop an entire bus network?", "All the nodes are connected to a single cable",
    ["Every node has its own cable to the hub", "Data travels only in a circular loop", "Every node is connected to all the other nodes"],
    "In a bus topology there is only one cable, so a break in it disrupts communication for all devices. This is its main weakness.")
add(C, SD, 'U', "What happens in a star topology if the central hub or switch fails?", "The entire network is affected",
    ["Only one device loses its connection", "Data automatically moves to a ring", "Nothing, because every node is connected to all others"],
    "All nodes depend on the central hub or switch. If one node fails only that node is lost, but if the hub fails every connected device loses connectivity.")
add(C, SD, 'A', "A data centre needs a network that keeps working even when several links or nodes fail. Which topology is most suitable?", "Mesh topology",
    ["Bus topology", "Star topology", "Ring topology"],
    "Mesh topology has redundant connections because every node links to all others. Data can take another route when one path fails, so it is very reliable.")
add(C, SD, 'K', "Which protocol uses a special packet called a token to control access in a ring network?", "Token Ring",
    ["CSMA/CD", "Bluetooth", "FTP"],
    "In Token Ring, only the device holding the token may transmit data. The token circulates continuously around the ring.")
add(C, SD, 'K', "Ethernet in a bus topology uses which protocol to manage access to the shared medium?", "CSMA/CD",
    ["Token passing", "Dual ring", "HTTP"],
    "Ethernet uses CSMA/CD (Carrier Sense Multiple Access with Collision Detection) to manage access to the shared cable.")
add(C, SD, 'K', "In a tree topology, the node at the top of the hierarchy is called the:", "root node", ["hub node", "client node", "gateway node"],
    "A tree (hierarchical) topology has a central top-level node known as the root node.")
add(C, SD, 'A', "A large company uses a star topology in its branch offices and a mesh topology in its data centre, all linked into one network. This combination is called:",
    "hybrid topology", ["tree topology", "dual ring topology", "bus topology"],
    "A hybrid topology merges two or more different topologies, here star and mesh, to combine their strengths.")
add(C, SD, 'U', "Which test simulates a large number of users or devices using a network at the same time to check performance under heavy traffic?", "Load testing",
    ["Fault tolerance testing", "Disaster recovery testing", "Benchmarking"],
    "Load testing evaluates network performance under heavy traffic. Stress testing goes further by pushing the network beyond its capacity.")
add(C, SD, 'U', "Which testing gradually increases traffic beyond the capacity of a network to find its breaking point?", "Stress testing",
    ["Load testing", "Availability testing", "Security testing"],
    "Stress testing pushes the network beyond its limits until latency rises or it fails, which reveals the breaking point.")
add(C, SD, 'A', "A network engineer deliberately injects faults into a network to check whether it keeps working when individual components fail. Which test is this?",
    "Fault tolerance testing", ["Load testing", "Scalability testing", "Benchmarking"],
    "Fault tolerance testing verifies that the network continues functioning even when individual components fail.")

# cloud
add(C, SE, 'K', "What is cloud computing?", "Accessing computing resources and services over the internet instead of owning the hardware",
    ["Storing all data only on the local hard disk", "A type of computer virus", "A standard for network cables"],
    "Cloud computing gives access to servers, storage, databases, software and analytics over the internet, without owning and maintaining physical infrastructure.")
add(C, SE, 'A', "A school uses an online email and document-editing service paid for by monthly subscription, with nothing installed on its computers. Which cloud service model is this?",
    "Software as a Service (SaaS)", ["Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)", "Community cloud"],
    "SaaS delivers software applications over the internet on a subscription basis, so users need not install, maintain or update the software.")
add(C, SE, 'U', "Which cloud service model gives developers tools, services and frameworks to build applications without managing the underlying infrastructure?",
    "Platform as a Service (PaaS)", ["Software as a Service (SaaS)", "Infrastructure as a Service (IaaS)", "Hybrid cloud"],
    "PaaS provides a development platform (tools, services and frameworks) so developers need not manage the infrastructure beneath it.")
add(C, SE, 'U', "Which cloud service model delivers virtualised resources such as virtual machines, storage and networks?",
    "Infrastructure as a Service (IaaS)", ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Private cloud"],
    "IaaS delivers virtualised computing resources (virtual machines, storage and networks) over the internet.")
add(C, SE, 'U', "Which cloud deployment model gives one organization exclusive use of the resources, with more control and customisation?", "Private cloud",
    ["Public cloud", "Community cloud", "Hybrid cloud"],
    "In a private cloud the resources are used exclusively by a single organization, which gives greater control over the infrastructure.")
add(C, SE, 'A', "A company keeps its sensitive data in its own private cloud and uses a third-party public cloud for other tasks, with data and applications shared between them. This is a:",
    "hybrid cloud", ["community cloud", "public cloud", "private cloud"],
    "A hybrid cloud combines elements of public and private clouds and allows data and applications to be shared between them.")
add(C, SE, 'K', "A cloud shared by several organizations with common interests, such as regulatory requirements, is called a:", "community cloud",
    ["public cloud", "private cloud", "hybrid cloud"],
    "Community cloud infrastructure is shared by several organizations that have common concerns, such as industry standards or regulations.")
add(C, SE, 'K', "Which characteristic of cloud computing lets resources be scaled up or down quickly as demand changes?", "Rapid elasticity",
    ["Resource pooling", "Measured service", "Broad network access"],
    "Rapid elasticity means resources can be quickly increased or decreased to meet changes in demand, which saves cost.")
add(C, SE, 'K', "In the cloud, users are billed according to their actual usage. This characteristic is called:", "measured service",
    ["on-demand self-service", "resource pooling", "rapid elasticity"],
    "Measured service means resource usage is monitored, controlled and billed on actual consumption.")
add(C, SE, 'A', "A video website adds 20 more servers during a live event and shares the traffic among them. What type of scaling is this?", "Horizontal scaling (scaling out)",
    ["Vertical scaling (scaling up)", "Stress testing", "Disaster recovery"],
    "Horizontal scaling means increasing the number of servers and distributing the workload among them. It gives high availability.")
add(C, SE, 'U', "Adding more CPU and RAM to a single server to improve its performance is called:", "vertical scaling (scaling up)",
    ["horizontal scaling (scaling out)", "load balancing", "resource pooling"],
    "Vertical scaling increases the capacity of one server by adding resources such as CPU, RAM, disk space or bandwidth.")
add(C, SE, 'U', "Which is a limitation of vertical scaling?", "There is a physical limit to how far one server can be upgraded",
    ["It needs many servers sharing the load", "It cannot improve performance at all", "It always needs load balancing between machines"],
    "A single server can be upgraded only so far, and vertical scaling can be costly and may cause downtime.")
add(C, SE, 'K', "Which of the following are key components of reliability in cloud computing?", "Redundancy, fault tolerance, disaster recovery and failover",
    ["Caching, hashing, compiling and debugging", "Resolution, frame rate, colour depth and bit rate", "Benchmarking, tuning, scripting and formatting"],
    "Cloud reliability (high availability) depends on redundancy, fault tolerance, disaster recovery and failover mechanisms.")
add(C, SE, 'A', "A cloud provider stores a bank's data in several data centres in different regions so that service continues if one centre has an outage. This is an example of:",
    "reliability through redundancy", ["vertical scalability", "measured service", "broad network access"],
    "Keeping copies of data in multiple data centres is redundancy. It keeps the service available if one data centre fails, which is cloud reliability.")

if __name__ == '__main__':
    print(stats(1))
