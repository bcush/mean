var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {
	// getAll: function(req,res){
	// 	Product.find({}).exec(function(err,products){
	// 		if (err){
	// 			res.status(500).send(err);
	// 		}else{
	// 			res.json(products);
	// 		}
	// 	});
	// },	// Create new product

	buy: function(req,res){
		Product.update({_id:req.params.id}, {$inc:{quantity:-1}})
			.exec(function(err,product){
			if (err){
				res.status(500).send("Product did not update");
			}else{
				res.sendStatus(200);
			}				
		})
	}
}
/*
GET /products
Query Products to Get All Items

PUT /products/buy/:id
Decrement the quantity of the product with that id by 1
Do not let it go below zero

*/