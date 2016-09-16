// POST /products
// * create a new product, default qty of 50

// GET /products
// * return all products

// DELETE /products/:id
// * delete the product with :id

// PUT /products/buy/:id
// * decrement the quantity of :id by 1
// * check that it never drops below 0

// Require our modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

// Create some of our apps
var app = express();

// Set up our middleware
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());     // Configure body-parser to read JSON

// Connect and setup our database
mongoose.connect('mongodb://localhost/products_api');

var ProductSchema = new mongoose.Schema({
    quantity: { type: Number, default: 50 },
    name: String,
    description: String,
    price: Number
}, {timestamps: true});     // Create our Product schema

mongoose.model('Product', ProductSchema);       // Build model
var Product = mongoose.model('Product');        // Create way to work model

// Set up our routes
app.get('/products', function(res, res) {
    Product.find({}, function(err, product) {
        if (err) {
            res.send("Could not locate products.");
        } else {
            res.json(product);
        }
    });
});


app.post('/products', function (req, res) {
    var productInstance = new Product();        // Create new Product document
    productInstance.name = req.body.name;
    productInstance.description = req.body.description;
    productInstance.price = req.body.price;
    console.log(req.body);
    productInstance.save(function(err) {
        if (err) {
            console.log("Unable to create Product document.");
            res.redirect('/');
        } else {
            console.log("Successfully saved Product document.");
            res.redirect('/');
        };
    });
});

app.delete('/products/:id', function (req, res) {
    Product.remove({_id: req.params.id}, function(err) {
        if (err) {
            res.send(err);
        } else {
            res.json({ message: "Product deleted." });
        }
    });
});

app.put ('/products/buy/:id', function (req, res) {
    Product.findOne({_id: req.params.id}, function(err, product) {
        if (err) {
            res.send("Could not locate product.");
        } else {
            if (product.quantity > 0) {
                product.quantity -= 1;
                product.save(function(err) {
                    if (err) {
                        console.log("Unable to change quantity.");
                        res.json({ message: "Unable to change quantity." });
                    } else {
                        console.log("Updated quantity.");
                        res.json({ message: "Quantity updated."});
                    }
                })
            }
        }

    })
})

// Start our server
var serverPort = 8000;
app.listen(serverPort, function() {
    console.log("Listening on port " + serverPort + ".");
});