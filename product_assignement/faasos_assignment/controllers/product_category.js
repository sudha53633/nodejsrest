var Prouduct_and_Category = require("../tables/product_category").product_category;

this.getAll = function(req,res,next){
	var prouduct_and_category = new Prouduct_and_Category(req.body);
	prouduct_and_category.getall(function(error,result){
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