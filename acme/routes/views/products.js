const keystone = require('keystone');
exports = module.exports = function(req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	//Set locals
	locals.section = 'store';

	//Load our products
	view.query('products', keystone.list('Product').model.find());

	// Render our view
	view.render('products');
};
