## Films

This is a subset of the [Freebase film data](https://github.com/dgraph-io/benchmarks/blob/master/data/21million.rdf.gz) composed of five CSV files: `films.csv`, `genres.csv`, `directors.csv`, `filmgenre.csv` and `directorfilm.csv`.
The dataset is used to compare dgraph against Neo4j.

|  stats     | #        |
| ---------- | -------- |
| nodes      | 32.7642  |
| edges      | 725.788  |


### Source

* [Neo4j vs Dgraph - The numbers speak for themselves](https://open.dgraph.io/post/benchmark-neo4j/).



[Download](https://github.com/dgraph-io/benchmarks/tree/master/data/neo4j)

## Citations

This is a curated version of the **High-energy physics citation networks**. The original dataset, Arxiv HEP-PH (high energy physics phenomenology) citation graph, is from the e-print arXiv and covers all the citations within a dataset of 34,546 papers with 421,578 edges. If a paper i cites paper j, the graph contains a directed edge from i to j. 

|  stats     | #       |
| ---------- | ------- |
| nodes      | 29.554  |
| edges      | 167.103 |


[Download](https://snap.stanford.edu/data/cit-HepPh.html)

### Source:

* J. Leskovec, J. Kleinberg and C. Faloutsos. Graphs over Time: Densification Laws, Shrinking Diameters and Possible Explanations. ACM SIGKDD International Conference on Knowledge Discovery and Data Mining (KDD), 2005.
* J. Gehrke, P. Ginsparg, J. M. Kleinberg. Overview of the 2003 KDD Cup. SIGKDD Explorations 5(2): 149-151, 2003.

## Biogrid

Genetic protein interaction data set.

|  stats     | #       |
| ---------- | ------- |
| nodes      | 15.034  |
| edges      | 301.685 |

### Source:

* A. Chatr-Aryamontri, R. Oughtred, L. Boucher, J. Rust, C. Chang, N. K. Kolas, L. O’Donnell, S. Oster, C. Theesfeld, A. Sellam, C. Stark, B. J. Breitkreutz, K. Dolinski, and M. Tyers, “The BioGRID interaction database: 2017 update,” Nucleic Acids Research, vol. 45, no. D1, pp. D369–D379, 2017

## Pokec

Pokec is the most popular on-line social network in Slovakia. The popularity of network has not changed even after the coming of Facebook. Pokec has been provided for more than 10 years and connects more than 1.6 million people. Datasets contains anonymized data of the whole network. Profile data contains gender, age, hobbies, interest, education etc. Profile data are in Slovak language. Friendships in Pokec are oriented.
For the benchmark we are using a curated version, which only includes the following attributes: `user_id`, `public`, `completion_percentage`, `gender`, `region`, `last_login`, `registration`, `age`.

|  stats     | #           |
| ---------- | ----------- |
| nodes      | 1.632.803   |
| edges      | 30.622.564  |

[Download](https://snap.stanford.edu/data/soc-pokec.html)

### Source:

* L. Takac, M. Zabovsky. Data Analysis in Public Social Networks, International Scientific Conference & International Workshop Present Day Trends of Innovations, May 2012 Lomza, Poland.

## Twitter

This is network of follower relationships from a snapshot of Twitter in 2010. An edge from i to j indicates that j is a follower of i. The dataset include the Twitter ids of the users.

|  stats     | #             |
| ---------- | ------------- |
| nodes      | 41.652.230    |
| edges      | 1.468.365.182 |

### Source:

* Haewoon Kwak, et al. "What is Twitter, a social network or a news media?." Proceedings of the 19th international conference on World wide web. ACM, 2010.
* Paolo Boldi and Sebastiano Vigna. "The webgraph framework I: compression techniques." Proceedings of the 13th international conference on World Wide Web. ACM, 2004.
* Paolo Boldi, et al. "Layered label propagation: A multiresolution coordinate-free ordering for compressing social networks." Proceedings of the 20th international conference on World Wide Web. ACM, 2011.

[Download](https://snap.stanford.edu/data/twitter-2010.html)


## SNAP 
```
@misc{snapnets,
  author       = {Jure Leskovec and Andrej Krevl},
  title        = {{SNAP Datasets}: {Stanford} Large Network Dataset Collection},
  howpublished = {\url{http://snap.stanford.edu/data}},
  month        = jun,
  year         = 2014
}
```