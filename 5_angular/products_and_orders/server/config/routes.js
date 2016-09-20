var products = require('../controllers/Products.js');
var orders = require('../controllers/Orders.js');

module.exports = function(app){
	app.post('/products', products.post);
	app.get('/products/json', products.getAll);
	app.get('/products/:id', products.get);
	app.delete('/products/:id', products.delete);
	app.put('/products/:id', products.buy);
}

