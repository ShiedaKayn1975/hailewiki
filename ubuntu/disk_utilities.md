# View all disks and partitions
sudo lsblk -o NAME,FSTYPE,SIZE,MOUNTPOINT,LABEL

# Test speed
hdparm -t /dev/sdb

# Check I/O speed
iotop
