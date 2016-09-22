# Jackfruit

```sh
mongodump --host sgdb1.pedia.vn:27017,sgdb2.pedia.vn:27017 \
  --username pedia \
  --password pedia.jackfruit@topica \
  --db jackfruit
```

# Siren

```sh
mongodump --host sgdbsector40.edumall.vn:27017,sgdbsector41.edumall.vn:27017 \
  --username siren \
  --password pedia.siren@topica \
  --db siren
```

# Spymaster

```sh
mongodump --host sgdbsector40.edumall.vn:27017,sgdbsector41.edumall.vn:27017 \
  --username spymaster \
  --password spymaster@pedia.topica \
  --db spymaster
```

## Gambit

```sh
mongodump --host sgdbsector30.edumall.vn:27017,sgdbsector31.edumall.vn:27017 \
  --username gambit \
  --password pedia.gambit@topica \
  --db gambit
```

## Restore

```sh
mongorestore --host localhost:27017 --db spymaster dump/spymaster
mongorestore --host localhost:27017 --db marol dump/marol
mongorestore --host localhost:27017 --db jackfruit dump/jackfruit
mongorestore --host localhost:27017 --db gambit dump/gambit
```

## Drop tartarus

```sh
mongo
use tartarus
db.dropDatabase()
```