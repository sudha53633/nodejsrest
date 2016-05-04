var express = require('express'),
	cors = require('cors'),
	app = express(),
	config = require('./config.js'),
	expressValidator = require('express-validator');
	
	

console.log("configuring express....");
app.use(express.bodyParser())
app.use(expressValidator)
app.use(express.static(__dirname+'/public'))
app.use(cors()); // automatically supports pre-flighting

console.log("Express configured");

require("./routes")(app)

// CORS apply 
app.get('/*',function(req, res, next){
	res.json({message: 'This is CORS-enabled for all origins!'});
})


app.use(function(err, req, res, next) {
	if (err instanceof Error) {
	  	res.send({
		  	status: "error",
		  	message: err.message
		})
	} else {
		res.send({
	  	status: "error",
	  	errors: err
	  })
	}
})

app.listen(config.port, function(){
	console.log("Listening on " + config.port);
})