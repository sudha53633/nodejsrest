Products.com
=========

Node.js + Express


## Copy to config.js
	this.host = ""// your host name
	this.port = ""//port number
	this.url = "http://" + this.host + ":" + this.port

	// Database config
	this.database = {
		host: "localhost",
		user: "", // your username
		password: "", // your password
		databaseName: "" // database name
	}

	// Memcache config
	this.memcache = {
		host: "localhost",
		port: "11211"
	}

	// SMTP config
	this.smtp = {
		host: "",
		user: "",
		password: ""
	}
	
	
## Download and install Node.js 
Offical website: [http://nodejs.org][1]
## Update modules and packages 
	npm install -d
## Run application 
	node app.js

[1]: http://nodejs.org
