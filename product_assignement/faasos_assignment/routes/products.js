var products = require('../controllers/Products');

module.exports = function(app){
	app.get("/product/get_products_by_cid", 
		function(req, res, next) {
			next();
		},
		products.get_proudct_list
	); 
};