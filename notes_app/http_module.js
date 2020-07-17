var http = require('http');
var events = require('events')

var eventEmitter = new events.EventEmitter();    

var server = http.createServer(function(req, res) {      // server created
    eventEmitter.emit('someone requested','TESTED')       // Event Trigger
    res.end('Server Worksss !!!')                        // server response message
});

eventEmitter.on('someone requested', function(data) {
    console.log('A request has been done on server!', data);
});    // Event Listener

server.listen(3000, 'localhost', function(err) {        // listening to server
   if(!err) {
       console.log('Server started on port : 3000');
   }
});




