## Biogrid

This is a repository of preotein, chemical and genetic interactions.

|  stats     | #       |
| ---------- | ------- |
| nodes      | 15.034  |
| edges      | 301.685 |

[Download](./biogrid-csvs.tar.gz) <br>
[Download JSON files](./biogrid-vertices-edges-jsons.tar.gz)

### Applications

#### Top ranked gene in the Parkinson's neighborhood

TruenoDB provides a simple filtering and analysis of the full Biogrid dataset. The visualization and analysis are straightforward using TruenoDB Web UI. For larger datasets, the Web UI integrates the distributed compute engine (Apache Spark) via  Spark Job Server. TruenoDB Web UI incorporates NetworkX to analyze small networks in memory.

### Neo4j Import Guidelines

Parse json files to csv.
```
sed "s/},/},\\`echo -e '\n '`/g" biogrid-vertices.json > biogrid-vertices-clean.json
awk -F'"' 'NF > 1 { print $2 "," $6 }' biogrid-vertices.json > citation-nodes.csv
```

Import data into Neo4j.
```
bin/neo4j-admin import --database biogrid.db \
 --id-type integer \
 --nodes:Protein ./import/biogrid-nodes.csv \
 --relationships:INTERACTS ./import/biogrid-relationships.csv
```

```
CREATE CONSTRAINT ON (protein:Protein) ASSERT protein.proteinId IS UNIQUE
```

### Source:

* https://thebiogrid.org/
* A. Chatr-Aryamontri, R. Oughtred, L. Boucher, J. Rust, C. Chang, N. K. Kolas, L. O’Donnell, S. Oster, C. Theesfeld, A. Sellam, C. Stark, B. J. Breitkreutz, K. Dolinski, and M. Tyers, [“The BioGRID interaction database: 2017 update,”](http://doi.org/10.1093/nar/gkw1102xcg.) Nucleic Acids Research, vol. 45, no. D1, pp. D369–D379, 2017
