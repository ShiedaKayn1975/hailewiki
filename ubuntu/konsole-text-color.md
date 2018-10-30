Hi,

Maybe this will help:

http://tldp.org/LDP/abs/html/colorizing.html

So to output in green:

Code:
echo -e "\E[1;32mHello World"
The style and colour is defined in the example as: 1;32

0=none, 1=bold, 4=underscore, 5=blink, 7=reverse, 8=concealed

30=black, 31=red, 32=green, 33=yellow, 34=blue, 35=magenta, 36=cyan, 37=white

To reset back to normal text run:

Code:
tput sgr0
