## Pokec

Pokec is the most popular on-line social network in Slovakia. The popularity of network has not changed even after the coming of Facebook. Pokec has been provided for more than 10 years and connects more than 1.6 million people. Datasets contains anonymized data of the whole network. Profile data contains gender, age, hobbies, interest, education etc. Profile data are in Slovak language. Friendships in Pokec are oriented.
For the benchmark we are using a curated version, which only includes the following attributes: `user_id`, `public`, `completion_percentage`, `gender`, `region`, `last_login`, `registration`, `age`.

|  stats     | #           |
| ---------- | ----------- |
| nodes      | 1.632.803   |
| edges      | 30.622.564  |

[Download](https://snap.stanford.edu/data/soc-pokec.html)

### Neo4j Import Guidelines

CSV headers.
```
# nodes
userId:ID(User),public,completion_percentage,gender,region,last_login,registration,age

# relationships
:START_ID(User),:END_ID(User
```

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

### Source:

* L. Takac, M. Zabovsky. Data Analysis in Public Social Networks, International Scientific Conference & International Workshop Present Day Trends of Innovations, May 2012 Lomza, Poland.
