// Create a small node server capable of handling the following request URLs:

// localhost:6789/             This route should serve a view file called index.html and display a greeting.
// localhost:6789/ninjas       This route should serve a view file called ninjas.html and display information about ninjas.
// localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).
// If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.

// Addendum:
// For this assignment, you will use Jquery to make this a "single page app".
// You will still be hitting the endpoints of "/", "/ninjas", and "/dojos/new",
// but you will use the jQuery "AJAX" to request them, and then load them into
// your body using the Jquery "html" method.

// get the http module
var http = require('http');

// fs module allows us to read and write content for response!!
var fs = require('fs');

// create a server using http module:
var server = http.createServer(function(request, response) {
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if (request.url === '/') {
        fs.readFile('landing_page.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
            response.write(contents);                                // send response body
            response.end();                                          // finished!
            });
        }

    else if (request.url === '/ninjas') {
        fs.readFile('ninja_data.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
            response.write(contents);                                // send response body
            response.end();                                          // finished!
            });
        }

    else if (request.url === '/dojos/new') {
        fs.readFile('ninja_form.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'Content-Type': 'text/html'}); // send data about response
            response.write(contents);                                // send response body
            response.end();                                          // finished!
            });
        }

        // request didn't match anything!
        else {
            response.writeHead(404);
            response.end('File not found!!');
        }
});

// tell your server which port to run on
server.listen(6789);

// print to terminal window
console.log("running in localhost at port 6789");