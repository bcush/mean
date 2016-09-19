var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();

require('./server/config/mongoose.js');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))
app.use(express.static(path.join(__dirname, "client", "static")))
/*routes*/
require('./server/config/routes.js')(app);

var port = 9001;
app.listen(port, function(){
	console.log(port);
})