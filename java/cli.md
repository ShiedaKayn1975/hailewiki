# Compile with jar
  javac -cp <jar you want to include>;<jar you want to include> <source.java>
  replace ; with : on unix
  javac -classpath .;acm.jar TestConsole.java
  Ex:
    javac -cp lib/*.jar mapredier/wordcount/*.java -d build/mapredier/wordcount
    jar -cvf build/mapredier/wordcount/wordcount.jar -C build/mapredier/wordcount .
