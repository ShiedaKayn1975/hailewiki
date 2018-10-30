sudo apt-get install htop

# Create 2G swap
sudo dd if=/dev/zero of=/swapfile1 bs=1M count=2048
sudo chown root:root /swapfile1
sudo chmod 0600 /swapfile1
sudo mkswap /swapfile1
sudo swapon /swapfile1
echo '/swapfile1 none swap sw 0 0' >> /etc/fstab
