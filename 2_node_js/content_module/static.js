var fs = require('fs');
// var upath = require('url').parse(request.url);
var url = require('url');

module.exports = function(request, response) {

        var urlp = url.parse(request.url);
                console.log(urlp);
        if (urlp.pathname === '/images') {
            console.log('you made it to images');
            response.writeHead(200, {'Content-type': 'text/html'});
            fs.readFile("." + request.url, 'utf8', function(errors, contents) {
                response.writeHead(200, {'Content-type': 'text/css'});
                if (contents) {
                    response.write('contents');
                    response.end();
                }
                else {
                    response.writeHead(404, {'Content-type': 'text/css'});
                    response.write('file not found');
                    response.end();
                }
            })
        }
}