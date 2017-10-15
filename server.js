var http = require("http");
var url = require("url");
var fs = require("fs");

var PORT = 8080;

var server = http.createServer(request);

function request(req, res) {
	
	var parsedURL = url.parse(req.url);

	switch (parsedURL.pathname) {


    case "/":
	    fs.readFile(__dirname + "/index.html", function(err, data) {
		    res.writeHead(200, { "Content-Type": "text/html" });
		    res.end(data);
	    });
    	break;

    case "/food":
	    fs.readFile(__dirname + "/food.html", function(err, data) {
		    res.writeHead(200, { "Content-Type": "text/html" });
		    res.end(data);
	    });
    	break;

    case "/frameworks":
	    fs.readFile(__dirname + "/frameworks.html", function(err, data) {
		    res.writeHead(200, { "Content-Type": "text/html" });
		    res.end(data);
	    });
    	break;

    case "/movies":
	    fs.readFile(__dirname + "/movies.html", function(err, data) {
		    res.writeHead(200, { "Content-Type": "text/html" });
		    res.end(data);
	    });
    	break;
  	}
}

server.listen(PORT, function(error) {
	if (error) throw error;
	console.log("listening on PORT 8080");
})