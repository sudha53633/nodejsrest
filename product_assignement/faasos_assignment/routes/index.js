module.exports = function(app) {
	require("./products")(app),	
	require("./add_product")(app),
	require("./get_all_products_and_categories")(app)
}
