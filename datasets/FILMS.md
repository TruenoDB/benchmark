## Films

This is a subset of the [Freebase film data](https://github.com/dgraph-io/benchmarks/blob/master/data/21million.rdf.gz) composed of five CSV files: `films.csv`, `genres.csv`, `directors.csv`, `filmgenre.csv` and `directorfilm.csv`.
The dataset is used to compare dgraph against Neo4j.

|  stats     | #        |
| ---------- | -------- |
| nodes      | 32.7642  |
| edges      | 725.788  |


[Download](https://github.com/dgraph-io/benchmarks/tree/master/data/neo4j)

### Neo4j Import Guidelines

Import data into Neo4j.
```
bin/neo4j-admin import --database film.db \
  --id-type string \
  --nodes:Film ./import/films.csv \
  --nodes:Genre ./import/genres.csv \
  --nodes:Director ./import/directors.csv \
  --relationships:GENRE ./import/filmgenre.csv \
  --relationships:FILMS ./import/directorfilm.csv
```

```
CREATE CONSTRAINT ON (file:Film) ASSERT film.filmId IS UNIQUE

CREATE INDEX ON :Film(filmId)
```

### Source

* Rawal, Pawan. [Dgraph Blog: Neo4j vs Dgraph - The numbers speak for themselves](https://open.dgraph.io/post/benchmark-neo4j/). Jan 23, 2017.
