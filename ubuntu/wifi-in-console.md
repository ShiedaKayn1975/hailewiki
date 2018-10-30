# For short
nmcli d wifi connect TOPICA password topica@123 ifname wlp2s0

# View saved wifi password
cd /etc/NetworkManager/system-connections/
---

Okay, I'm going to try and answer your question, even though there is no terminal output included in your question.

+ The command ifconfig wlan0 does not turn on your wireless card. It gives you information about your wlan0. To turn on your wireless card, you would enter ifconfig wlan0 up. Although, it's not always wlan0. To find out the name of your wireless card, type iwconfig, and look at the row that has some information in it, not 'no wireless extensions'.
+ To be able to run the commands ifconfig wlan0 up, iwconfig wlan0 essid name key password and dhclient wlan0, you need to be root. So, you have to put the word sudo before those commands (unless you're already logged in as root).
+ The password in the command iwconfig wlan0 essid name key password should be in hexadecimal. If you want to type the ASCII password, you would use
```
iwconfig wlan0 essid name key s:password.
```

The command
```
iwconfig wlan0 essid name key password
```
only works with access points that use WEP as encryption. If the access point uses WPA/WPA2, you'll have to use another method to connect, found here: How do I connect to a WPA wifi network using the command line?
Also, might I ask, is there a reason why you're trying to connect to a WiFi network through command line? Unless you're experimenting of course.

---
I think you want to keep using managed interface (by NetworkManager). nmcli is a command‐line tool for controlling NetworkManager.

To see list of saved connections, use (<SavedWiFiConn>)
nmcli c
To see list of available WiFi hotspots (<WiFiSSID>)

nmcli d wifi list
or:
sudo iwlist wlan0 scanning
To see list of interfaces (<WifiInterface>)
ifconfig -a
Just change <WifiInterface>, <WiFiSSID>, <WiFiPassword> in the following commands to reflect your setup. If WiFi info already saved, easier way using <SavedWiFiConn> name of connection as it was saved in NetworkManager.

Ubuntu 16.04

## disconnect
nmcli d disconnect <WifiInterface>

## connect
nmcli d connect <WifiInterface>
Another way:

## disconnect
nmcli c down <SavedWiFiConn>

## connect
nmcli c up <SavedWiFiConn>
Ubuntu 15.10 & previous

## disconnect
nmcli d disconnect iface <WifiInterface>

## connect
nmcli d wifi connect <WiFiSSID> password <WiFiPassword> iface <WifiInterface>
Another way:

## disconnect:
nmcli c down id <SavedWiFiConn>

## connect:
nmcli c up id <SavedWiFiConn>
Reference: man nmcli


---
If your wi-fi access point is saved, it will auto-connect. Turn wireless on or off with a simpler command:
```sh
nmcli nm wifi on
nmcli nm wifi off
on newer version:

nmcli radio wifi on
nmcli radio wifi off
```

For reference, see man nmcli.

