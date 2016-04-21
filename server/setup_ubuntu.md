# Steps to setup a server

1. Install Git
sudo apt-get update
sudo apt-get install git

2. Installing RVM and Ruby
RVM
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable
Ruby
rvm install 2.2.3
rvm use 2.2.3 --default
Rails
gem install rails -V --no-ri --no-rdoc
gem install rails -v '4.2.4' -V --no-ri --no-rdoc
gem install bundler -V --no-ri --no-rdoc
With Rails 4.2.4:
  sudo apt-get install libgmp-dev

3. MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
