/**
 * delete post
 */

var db = require("../lib/Database");

/**
 * Constructor
 * @param {Object} params
 */
var product_category = function(params) {
	
	if (typeof params === "undefined") {
		params = {}
	}
	
}

product_category.prototype.getall = function(callback) {
	var self = this
	
	db.mysql.query("SELECT p.id,p.name,p.code,p.description,pc.category,pc.category_id FROM product as p "+
    			   " LEFT JOIN product_categories as pc on pc.category_id = p.category_id ",
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
exports.product_category = product_category;
