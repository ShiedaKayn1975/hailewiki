1. Download binary
  Go to: http://maven.apache.org/download.cgi to get link
  wget http://mirrors.viethosting.vn/apache/maven/maven-3/3.3.9/binaries/apache-maven-3.3.9-bin.zip
  unzip apache-maven-3.3.9-bin.zip
  sudo mv apache-maven-3.3.9 /usr/local
2. Setup env
  nano ~/.bashrc
    export M2_HOME=/usr/local/apache-maven-3.3.9
    export PATH=$PATH:$M2_HOME/bin
  source ~/.bashrc
3. Test
  mvn -v

4. Create project
  mvn archetype:generate -DgroupId=org.sonatype.mavenbook \
  -DartifactId=simple \
  -Dpackage=org.sonatype.mavenbook \
  -Dversion=1.0-SNAPSHOT

5. Build simple project
  mvn install
  java -cp target/simple-1.0-SNAPSHOT.jar org.sonatype.mavenbook.App