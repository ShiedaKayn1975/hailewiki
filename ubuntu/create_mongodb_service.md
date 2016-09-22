# We'll create a unit file to manage the MongoDB service. Create a configuration file named mongodb.service in the /etc/systemd/system directory using nano or your favorite text editor.
sudo nano /etc/systemd/system/mongodb.service

``` /etc/systemd/system/mongodb.service
[Unit]
Description=High-performance, schema-free document-oriented database
After=network.target

[Service]
User=mongodb
ExecStart=/usr/bin/mongod --quiet --config /etc/mongod.conf

[Install]
WantedBy=multi-user.target
```

# Next, start the newly created service with systemctl.
sudo systemctl start mongodb

# Check status
sudo systemctl status mongodb

# The last step is to enable automatically starting MongoDB when the system starts.
sudo systemctl enable mongodb


# Source https://www.digitalocean.com/community/tutorials/how-to-install-mongodb-on-ubuntu-16-04