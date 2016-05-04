var util = require("util"),
	nodemailer = require('nodemailer'),
	config = require('../config.js')

/**
 * Smtp singletone class
 */
var Smtp = function Smtp() {
  //defining a var instead of this (works for variable & function) will create a private definition
  this.transport = nodemailer.createTransport("SMTP", {
	  host: config.smtp.host,
	  auth: {
	  	user: config.smtp.user,
	  	pass: config.smtp.password
		}
	})

  if (Smtp.caller != Smtp.getInstance) {
		throw new Error("This object cannot be instanciated")
  }
}

Smtp.instance = null

/**
 * Database getInstance definition
 * @return {Database} class
 */

Smtp.getInstance = function(){

    if(this.instance === null){
	    this.instance = new Smtp()
    }
    return this.instance
}

module.exports = Smtp.getInstance()