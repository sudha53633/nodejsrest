this.host = "localhost"
this.port = 7777
this.url = "http://" + this.host + ":" + this.port

// Database config
this.database = {
    host: "localhost",
    user: "root", // your username
    password: "logictree", // your password
    databaseName: "google" // database name
}

// Memcache config
this.memcache = {
    host: "localhost",
    port: "11211"
}

//SMTP config
this.smtp = {
    host: "",// host name
    user: "",//your user name
    password: ""// your password
}



//Logger configuration
this.filepath = "./var/logs/texting.log" 

