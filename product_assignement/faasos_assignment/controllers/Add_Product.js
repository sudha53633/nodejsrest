var Add_Product_Details = require("../tables/AddProduct").add_product_details;
var async = require("async");

this.add = function(req,res,next){
	var product_details = new Add_Product_Details(req.body);
	
		product_details.save(function(error,result){
			if (error) {
				next(error);
			} else {
				res.send({
					status:  "ok",
					message: "Product details added.",
					recs: result[0]
				});
			}
		});
};
