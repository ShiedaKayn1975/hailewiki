# Connect with authentication
mongo <host>/<dbname> --username <username> --password <password> ^
--authenticationDatabase <dbname> ^
--authenticationMechanism SCRAM-SHA-1

mongo --host <replicaname>/<host> <dbname> --username <username> --password <password> ^
--authenticationDatabase <dbname> ^
--authenticationMechanism SCRAM-SHA-1

# Connect to a replica set
mongo ^
<replicaname>/<host>/<dbname> ^
--username <username> ^
--password <password> ^
--authenticationDatabase <dbname> ^
--authenticationMechanism SCRAM-SHA-1

# Find the master address
mongo ^
<host>/<dbname> ^
--username <username> ^
--password <password> ^
--authenticationDatabase <dbname> ^
--authenticationMechanism SCRAM-SHA-1 ^
--eval "db.isMaster()['primary']"

# Go to shell without connecting
mongo --nodb

# Url style
"mongodb://user:password@mongo.cloudapp.net,mongo.cloudapp.net:27018/database?connect=replicaset&replicaSet=rs" 