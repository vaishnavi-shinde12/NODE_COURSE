const http = require('http');

const requestListener = (request, response) => {    // (http req-res) - how to use them & what capabilities do they provide

    // console.log(request);                           // to print http req object(it contains a lots of properties)
    // console.dir(request, {depth:0});                // depth:0 means - we are going to print 1st level of property of req 
                            // there are two incomming message req and both are different 
    // console.log(request.url + " - URL");          // two diff URL means to diff message for req obj

    //    console.log(response);                     // to print http res object(it contains a lots of properties)
       console.dir(response, {depth:0});             // depth:0 means - we are going so print 1st level of property of res

    response.write('Hello from different World !!!');
    response.end();
}

const server = http.createServer(requestListener);

const confirmationCallback = () => {
    console.log('Server is running...');
}

server.listen(9000, confirmationCallback);