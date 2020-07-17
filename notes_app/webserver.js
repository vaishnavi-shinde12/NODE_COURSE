// calling http library 
var http = require('http');
var url = require('url');

// creating server
var server = http.createServer(function(req, res) {
    //setting content header
    res.writeHead(200, ('Content-type', 'text/html'));
    // var q = url.parse(req.url, true).query;
    // var text = q.year + " " + q.month;
    // send string to response
    res.end('Hello');
});

// assigning 8082 as server listening port
server.listen(8082, 'localhost');