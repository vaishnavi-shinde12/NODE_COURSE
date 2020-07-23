var fs = require('fs');

fs.writeFile('./hello.txt'," I am miss Vaishnavi Paresh Shinde ", function(err) {
    if(!err) {
        fs.readFile('./hello.txt', function(err, data) {
            if(!err) {
                console.log(data.toString());
            }
        });
    }
});