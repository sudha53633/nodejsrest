var product_category = require('../controllers/product_category');

module.exports = function(app){
	app.get("/product/get_products_and_categories", 
		function(req, res, next) {
			next()
		},
		product_category.getAll
	)
};