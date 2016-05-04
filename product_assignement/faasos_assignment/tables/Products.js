/**
 * chat history
 */

var db = require("../lib/Database");

/**
 * Constructor
 * @param {Object} params
 */
var products_list = function(params) {
	
	if (typeof params === "undefined") {
		params = {}
	}
	
	if (typeof params.category_id !== 'undefined') {
		this.category_id = params.category_id	
	}
	
}

products_list.prototype.get_product_list = function(callback) {
	var self = this
	
	db.mysql.query("select category_id,name,description,code from product where category_id ="+ self.category_id,
			function(error,result){
				if(error){	
					callback(error);
				}
				else{
					callback(error, result);
				}		
			}	
		)
};
exports.products_list = products_list;
