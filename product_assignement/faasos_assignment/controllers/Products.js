var Products_info = require("../tables/Products").products_list;

this.get_proudct_list = function(req,res,next){
		
	var products_info = new Products_info({
		category_id : req.param("category_id")
	});
	
	products_info.get_product_list(function(error,result){
		if (error) {
			next(error);
		} else {
			res.send({
				status:  "ok",
				recs: result
			});
		}
	});
};