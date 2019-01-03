const keystone = require('keystone');
exports = module.exports = function(req, res) {
	const view = new keystone.View(req, res);
	const locals = res.locals;

	//Set locals
	locals.section = 'store';
	locals.filters = {
		product: req.params.product
	};
	locals.data = {
		product: []
	};

	view.on('init', function(next) {
		let q = keystone.list('Product').model.findOne({
			slug: locals.filters.product
		});
		q.exec(function(err, result) {
			locals.data.product = result;
			next(err);
		});
	});

	// Render our view
	view.render('product');
};
