# Start datanode on slaves
	hadoop-daemon.sh start datanode
# View all nodes
	hdfs dfsadmin -report
# Format namenode
	hadoop namenode -format
# List all jobs
	mapred job -list
# Kill a job
	mapred job -kill <job_id>