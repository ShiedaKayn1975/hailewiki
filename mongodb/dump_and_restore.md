# Dump

```sh
mongodump --host <> \
  --username <> \
  --password <> \
  --db <>
```

## Restore

```sh
mongorestore --host localhost:27017 --db <db_name> dump/<db_name>
```

## Drop db

```sh
mongo
use db_name
db.dropDatabase()
```