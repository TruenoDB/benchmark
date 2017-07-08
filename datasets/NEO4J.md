# Import Guidelines

The datasets can be loaded into Neo4j using the import tool (`neo4j-admin`). If needed, data is parsed using `bash` scripting.

## Films

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

## Citations

Parse json files to csv.
```
awk -F'"' 'NR > 1 && NF > 1 { print $2 "," $6 }'

awk -F'"' 'NR > 1 && NF > 1 { print $2 "," $6 }' citation-vertices.json > citation-nodes.csv
awk -F'"' 'NR > 1 && NF > 1 { print $2 "," "\""$6"\"" }' citation-vertices.json > citation-nodes.csv

# citation-edges-clear.json is similar to citation-edges.json but w/diff that each source and target
# are included on one row.

awk -F"\t" 'NR>4 {print $1 "," $2}' cit-HepTh.txt > citation-relationships.csv
awk -F"," 'NR>1 && NF>1 { gsub(/ /,"", $1); sub(/\[/, "", $1); sub(/\]/, "", $2); print $1 "," $2 }' citation-edges-clear.json > citation-relationships.csv
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

### Biogrid

Parse json files to csv.
```
sed "s/},/},\\`echo -e '\n '`/g" biogrid-vertices.json > biogrid-vertices-clean.json
awk -F'"' 'NF > 1 { print $2 "," $6 }' citation-vertices.json > citation-nodes.csv
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


## Pokec

Import data into Neo4j.
```
bin/neo4j-admin import --database pokec.db \
 --id-type integer \
 --nodes:User import/soc-pokec-profiles.csv \
 --relationships:KNOWS import/soc-pokec-relationships.csv
```

```
CREATE CONSTRAINT ON (user:User) ASSERT user.userId IS UNIQUE
```

### Twitter

Parse csv files.  Change the separator from ' ' (blank space) to ',' (comma) on the relationship csv.
```
head -1 soc-pokec-relationships.csv > twitter-2010-relationships.csv
tr ' ' ',' < twitter-2010.txt >> twitter-2010-relationships.csv
```

Import data into Neo4j.
```
bin/neo4j-admin import --database twitter.db \
 --id-type integer \
 --nodes:User import/twitter-2010-nodes.csv \
 --relationships:KNOWS import/twitter-2010-relationships.csv
```

```
CREATE CONSTRAINT ON (user:User) ASSERT user.userId IS UNIQUE
```