## Citations

This is a curated version of the **High-energy physics citation networks**. The original dataset, Arxiv HEP-PH (high energy physics phenomenology) citation graph, is from the e-print arXiv and covers all the citations within a dataset of 34,546 papers with 421,578 edges. If a paper i cites paper j, the graph contains a directed edge from i to j. If a paper cites, or is cited by, a paper outside the dataset, the graph does not contain any information about this.

The data covers papers in the period from January 1993 to April 2003 (124 months). It begins within a few months of the inception of the arXiv, and thus represents essentially the complete history of its HEP-TH section. 

|  stats     | #       |
| ---------- | ------- |
| nodes      | 29.554  |
| edges      | 167.103 |


[Download](https://snap.stanford.edu/data/cit-HepPh.html) <br>
[Download JSON files](./citation-edges-vertices-jsons.tar.gz)

### Applications
 
#### High energy physics citation network analysis

We implemented a wrapper (i.e. GraphX algorithms wrapper) integrated with TruenoDB's Web UI. In this application, we analyze the citations SNAP dataset. First, we built a personalized PageRank algorithm to obtain a rank relative to the "source" node (e.g. Vs) in the graph **G**. We were able to find the most important paper from the perspective of the source paper (i.e. Vs). 
* We obtained the top ranked node (e.g. via PageRank algorithm we got MAPT).       
* We found the most important paper ("An algorithm to generate classical solutions for string effective action") from the top ranked paper point of view.
 
 
### Neo4j Import Guidelines

Parse json files to csv.
```
awk -F'"' 'NR > 1 && NF > 1 { print $2 "," "\""$6"\"" }' citation-vertices.json > citation-nodes.csv

awk -F"\t" 'NR>4 {print $1 "," $2}' cit-HepTh.txt > citation-relationships.csv
awk -F"," 'NR>1 && NF>1 { gsub(/ /,"", $1); sub(/\[/, "", $1); sub(/\]/, "", $2); print $1 "," $2 }' citation-edges.json > citation-relationships.csv
```

Import data into Neo4j.
```
bin/neo4j-admin import --database citation.db \
 --id-type integer \
 --nodes:Paper ./import/citation-nodes.csv \
 --relationships:CITES ./import/citation-relationships.csv
```

```
CREATE CONSTRAINT ON (paper:Paper) ASSERT paper.paperId IS UNIQUE
```

### Source:

* J. Leskovec, J. Kleinberg and C. Faloutsos. Graphs over Time: Densification Laws, Shrinking Diameters and Possible Explanations. ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD), 2005.
* J. Gehrke, P. Ginsparg, J. M. Kleinberg. Overview of the 2003 KDD Cup. SIGKDD Explorations 5(2): 149-151, 2003.
