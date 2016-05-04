var add_product = require("../controllers/Add_Product"),
	validateHelper = require("../helpers/ValidateHelper")

module.exports = function(app) {
	app.post("/product/add_product", 
		function(req, res, next) {
			req.assert("category_id", 'Please select phrase.').notEmpty()
			req.assert("name", 'Please select language.').notEmpty()
			req.assert("code", 'Please type text.').notEmpty()
			req.assert("description", 'Please type text.').notEmpty()
			var errors = validateHelper.makeErrors(req.validationErrors())
			
			if (errors.length > 0) {
				next(errors)
				return 
			}
			req.sanitize("category_id").toInt()
			req.sanitize("name").xss()
			req.sanitize("code").xss()
			req.sanitize("description").xss()
		
			next()
		},
		add_product.add
	)	
}
