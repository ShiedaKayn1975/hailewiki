# Connect with authentication
mongo 128.199.112.254:27017/spymaster --username spymaster --password spymaster@pedia.topica ^
--authenticationDatabase spymaster ^
--authenticationMechanism SCRAM-SHA-1

mongo --host rs0/128.199.112.254:27017 spymaster --username spymaster --password spymaster@pedia.topica ^
--authenticationDatabase spymaster ^
--authenticationMechanism SCRAM-SHA-1

# Connect to a replica set
mongo ^
rs0/128.199.112.254:27017/spymaster ^
--username spymaster ^
--password spymaster@pedia.topica ^
--authenticationDatabase spymaster ^
--authenticationMechanism SCRAM-SHA-1

# Find the master address
mongo ^
128.199.112.254:27017/spymaster ^
--username spymaster ^
--password spymaster@pedia.topica ^
--authenticationDatabase spymaster ^
--authenticationMechanism SCRAM-SHA-1 ^
--eval "db.isMaster()['primary']"

# Go to shell without connecting
mongo --nodb

# Url style
"mongodb://user:password@mongo.cloudapp.net,mongo.cloudapp.net:27018/database?connect=replicaset&replicaSet=rs" 