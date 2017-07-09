## Twitter

This is network of follower relationships from a snapshot of Twitter in 2010. An edge from i to j indicates that j is a follower of i. The dataset include the Twitter ids of the users.

|  stats     | #             |
| ---------- | ------------- |
| nodes      | 41.652.230    |
| edges      | 1.468.365.182 |


[Download](https://snap.stanford.edu/data/twitter-2010.html)

### Neo4j Import Guidelines

Parse CSV files.  Change the separator from ' ' (blank space) to ',' (comma) on the **relationship** CSV.
```
echo ":START_ID(User),:END_ID(User)" > twitter-2010-relationships.csv
tr ' ' ',' < twitter-2010.txt >> twitter-2010-relationships.csv

echo "node_id:ID(User),twitter_id" > twitter-2010-nodes.csv
cat twitter-2010-ids.csv >> twitter-2010-nodes.csv
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

### Source:

* Haewoon Kwak, et al. "What is Twitter, a social network or a news media?." Proceedings of the 19th international conference on World wide web. ACM, 2010.
* Paolo Boldi and Sebastiano Vigna. "The webgraph framework I: compression techniques." Proceedings of the 13th international conference on World Wide Web. ACM, 2004.
* Paolo Boldi, et al. "Layered label propagation: A multiresolution coordinate-free ordering for compressing social networks." Proceedings of the 20th international conference on World Wide Web. ACM, 2011.
