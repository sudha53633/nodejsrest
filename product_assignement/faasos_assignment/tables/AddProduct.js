/**
 * Retrieving post details from  posts table to display on mobile landing pages
 */


var db = require("../lib/Database");


var add_product_details = function(params) {
	
	if (typeof params === "undefined") {
		params = {}
	}
	
	if (typeof params.category_id !== 'undefined') {
		this.category_id = params.category_id		
	}

	if (typeof params.name !== 'undefined') {
		this.name = params.name		
	}

	if (typeof params.code !== 'undefined') {
		this.code = params.code		
	}

	if (typeof params.description !== 'undefined') {
		this.description = params.description		
	}
	
}



add_product_details.prototype.save = function(callback) {
	var self = this
	db.mysql.query("INSERT INTO `product` SET ?",
					{
						category_id : self.category_id,
						name		: self.name,
						code		: self.code,
						description	: self.description	
					},
					function(error,result){
						if(error){
							callback(error);
						}
						else{
							callback(error, result);
						}
						console.log(JSON.stringify(result));
					}	
				)
};

exports.add_product_details = add_product_details;



