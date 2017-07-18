# Datasets

## Data files

Otherwise indicated, the datasets used for the benchmarks are the ones available on their respective source (eg. SNAP). 
On same cases, the data sets are curated version of the original version. 
The following list shows all the datasets used for benchmarks:

* [Films Freebase Network](./FILMS.md)
* [Citation Network](./CITATION.md)
* [Biogrid Protein Interaction Network](./BIOGRID.md)
* [Pokec Social Network](./POKEC.md)
* [Twitter Follower Network](./TWITTER.md)
* [LDBC (Linked Data Benchmark Council)](./LDBC.md)

## Stats

|  dataset   | nodes      | edges         |
| ---------- | ---------- | ------------- |
| films      | 32.7642    | 725.788       |
| biogrid    | 15.034     | 301.685       |
| citation   | 29.554     | 167.103       |
| pokec      | 1.632.803  | 30.622.564    |
| twitter    | 41.652.230 | 1.468.365.182 |
| ldbc snb   | 9.152      | 180.832       |
| ldbc graphalytics |  34.379 | 1.010.631 |


## Neo4j

Guidelines to import data sets into Neo4j are provided. The datasets can be loaded into Neo4j using the import tool (`neo4j-admin`). If needed, data is parsed using `bash` scripting.


## Trueno

Scripts and guidelines to import the data sets into Trueno are provided.

## SNAP (Stanford Large Dataset Collection)

Some of the datasets used for provided comes from the SNAP repository, which BibTeX citation is as follows:

```
@misc{snapnets,
  author       = {Jure Leskovec and Andrej Krevl},
  title        = {{SNAP Datasets}: {Stanford} Large Network Dataset Collection},
  howpublished = {\url{http://snap.stanford.edu/data}},
  month        = jun,
  year         = 2014
}
```
