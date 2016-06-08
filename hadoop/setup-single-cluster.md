Source: https://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-common/SingleCluster.html
More: http://www.scratchtoskills.com/install-hadoop-2-7-2-on-ubuntu-15-10-single-node-cluster/
      http://www.tutorialspoint.com/hadoop/hadoop_enviornment_setup.htm

# Hadoop: Setting up a Single Node Cluster.


Overview --------------------------------------------------------
1. Prerequisites
  + java
  + sshd
2. Add a dedicated Hadoop user
3. Install Hadoop

Let's start --------------------------------------------------------
1. Install prerequisites
  1.1. Java
    Look at: http://wiki.apache.org/hadoop/HadoopJavaVersions
    OpenJDK is OK
      sudo apt-get update
      sudo apt-get install openjdk-7-jdk
      java -version
      update-alternatives --config java
      Set environment (~/.bashrc)
        export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64
        export PATH=$PATH:$JAVA_HOME/bin
2. Add a dedicated Hadoop user
  2.1. Create hadoop user
    sudo addgroup hadoop
    sudo adduser --ingroup hadoop hadooper (poodah)
    sudo adduser hadooper sudo
  2.2. SSH Setup and Key Generation
    $ ssh-keygen -t rsa /or/ ssh-keygen -t rsa -P '' -f $HOME/.ssh/id_rsa
    $ cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
    $ chmod 0600 ~/.ssh/authorized_keys
    Check it:
      $ ssh localhost
3. Install Hadoop
  3.1. Download
    * Get best download link from: http://www.apache.org/dyn/closer.cgi/hadoop/common/
    wget http://mirrors.viethosting.vn/apache/hadoop/common/hadoop-2.7.2/hadoop-2.7.2.tar.gz
    tar xvzf hadoop-2.7.2.tar.gz
    sudo mv hadoop-2.7.2 /usr/local/hadoop
    sudo chown -R hadooper:hadoop /usr/local/hadoop
    export HADOOP_HOME=/usr/local/hadoop
  3.2. Check
    $HADOOP_HOME/bin/hadoop version

Standalone Mode
  By default, Hadoop is configured to run in a non-distributed mode, as a single Java process. This is useful for debugging
  Try to run an example
    $ mkdir input
    $ cp $HADOOP_HOME/etc/hadoop/*.xml input
    $ $HADOOP_HOME/bin/hadoop jar $HADOOP_HOME/share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.2.jar grep input output 'dfs[a-z.]+'
    $ cat output/*

Pseudo Distributed Mode
1. Set Hadoop environment variables
  1.1. Add to ~/.bashrc
    export HADOOP_HOME=/usr/local/hadoop
    export HADOOP_MAPRED_HOME=$HADOOP_HOME
    export HADOOP_COMMON_HOME=$HADOOP_HOME
    export HADOOP_HDFS_HOME=$HADOOP_HOME
    export YARN_HOME=$HADOOP_HOME
    export HADOOP_COMMON_LIB_NATIVE_DIR=$HADOOP_HOME/lib/native
    export PATH=$PATH:$HADOOP_HOME/sbin:$HADOOP_HOME/bin
    export HADOOP_INSTALL=$HADOOP_HOME
  1.2. Apply
    $ source ~/.bashrc
2. Hadoop Configuration
  2.1. hadoop-env.sh
    export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64
  2.2. core-site.xml
    <configuration>
       <property>
          <name>fs.default.name</name>
          <value>hdfs://localhost:9000</value> 
       </property>
    </configuration>
  2.3. hdfs-site.xml
    <configuration>
  <property>
    <name>dfs.replication</name>
    <value>1</value>
  </property>
  <property>
    <name>dfs.namenode.name.dir</name>
    <value>file:///usr/local/hadoop/storage/hdfs/namenode</value>
  </property>
  <property>
    <name>dfs.datanode.data.dir</name> 
    <value>file:///usr/local/hadoop/storage/hdfs/datanode</value> 
  </property>
    </configuration>
  2.4. yarn-site.xml
    <configuration>
      <property>
        <name>yarn.nodemanager.aux-services</name>
        <value>mapreduce_shuffle</value> 
      </property>
    </configuration>
  2.4. mapred-site.xml
    cp $HADOOP_HOME/etc/hadoop/mapred-site.xml.template $HADOOP_HOME/etc/hadoop/mapred-site.xml
    <configuration>
      <property> 
        <name>mapreduce.framework.name</name>
        <value>yarn</value>
      </property>
    </configuration>

3. Verifying Hadoop Installation
  3.1. Name Node Setup
    $ hdfs namenode -format
  3.2. Verifying Hadoop dfs
    $ start-dfs.sh 
  3.3. Verifying Yarn Script
    $ start-yarn.sh
  3.4. Accessing Hadoop on Browser
    NameNode: http://localhost:50070/
  3.5. Verify All Applications for Cluster
    ResourceManager: http://localhost:8088/

4. Check it
  $ hadoop fs -mkdir -p /user/hadooper
  $ $HADOOP_HOME/bin/hadoop jar $HADOOP_HOME/share/hadoop/mapreduce/hadoop-mapreduce-examples-2.7.2.jar grep input output 'dfs[a-z.]+'



Full Distributed Mode
0. Install java, create hadoop user, ssh on all nodes

1. Mapping the nodes
  Update /etc/hosts on all nodes
    192.168.1.109 hadoop-master
    192.168.1.145 hadoop-slave-1
    192.168.56.1  hadoop-slave-2

2. Configuring Key Based Login
  Do on all nodes
    $ ssh-copy-id -i ~/.ssh/id_rsa.pub hadooper@hadoop-master
    $ ssh-copy-id -i ~/.ssh/id_rsa.pub hadooper@hadoop-slave-1
    $ ssh-copy-id -i ~/.ssh/id_rsa.pub hadooper@hadoop-slave-2

3. Configuring Hadoop on Master
  3.1. core-site.xml
    <configuration>
      <property> 
        <name>fs.default.name</name> 
        <value>hdfs://hadoop-master:9000/</value> 
      </property> 
      <property> 
        <name>dfs.permissions</name> 
        <value>false</value> 
      </property> 
    </configuration>
  
  3.2. hdfs-site.xml
    <configuration>
      <property> 
        <name>dfs.namenode.name.dir</name> 
        <value>file:///usr/local/hadoop/storage/hdfs/namenode</value>
        <final>true</final> 
      </property> 

      <property> 
        <name>dfs.datanode.data.dir</name> 
        <value>file:///usr/local/hadoop/storage/hdfs/datanode</value>
        <final>true</final> 
      </property>

      <property> 
        <name>dfs.replication</name> 
        <value>1</value> 
      </property> 
    </configuration>
  
  3.3. mapred-site.xml
    <configuration>
      <property> 
        <name>mapred.job.tracker</name> 
        <value>hadoop-master:9001</value> 
      </property>
    </configuration>

  3.4. hadoop-env.sh
    export JAVA_HOME=/usr/lib/jvm/java-7-openjdk-amd64
    export HADOOP_OPTS=-Djava.net.preferIPv4Stack=true
    export HADOOP_CONF_DIR=/etc/hadoop/conf/

https://docs.hortonworks.com/HDPDocuments/HDP2/HDP-2.3.0/bk_installing_manually_book/content/ch_setting_up_hadoop_configuration_chapter.html

4. Install Hadoop on slaves
  $ su hadooper
  $ cd /usr/local
  $ scp -r hadoop hadoop-slave-1:/usr/local
  $ scp -r hadoop hadoop-slave-2:/usr/local

5. Configuring Hadoop on Master Server
  $HADOOP_HOME/etc/hadoop/masters
    hadoop-master
  $HADOOP_HOME/etc/hadoop/slaves
    hadoop-slave-1 
    hadoop-slave-2
6. Format Name Node on Hadoop Master
  hadoop namenode –format
7. Starting Hadoop Services
  start-all.sh



* Notice
  - Remember to remove datanode directory when clone hadoop from master to slaves
    Node will be replaced by other when they have the same storageID


  Other topics
  1. Benchmarking and Stress Testing an Hadoop Cluster With TeraSort, TestDFSIO & Co.
    http://www.michael-noll.com/blog/2011/04/09/benchmarking-and-stress-testing-an-hadoop-cluster-with-terasort-testdfsio-nnbench-mrbench/



  Some problems:
  1. Task failed: "Could not delete tempory file"
    => Remove 127.0.1.1 lines in /etc/hosts