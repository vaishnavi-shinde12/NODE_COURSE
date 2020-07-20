const http = require('http');

const requestListener = (request, response) => {
    response.write('Hello from different World!');
    response.end();
    // response.end('Hello from different World');      // above two statements are equivalent to this single statement
}

const server = http.createServer(requestListener)

const confirmationCallback = () => {
    console.log('Server is running...');
}

server.listen(9000, confirmationCallback);