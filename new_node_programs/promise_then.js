const https = require('https');

// Promise - promise is like a contract, it is like a gurantee that after the operation complete it will return your desired result
// here our desired result is some data from url,
// in future(after some time instance) after completion of long operation this promise will give you desired result

// Our Long Operation
function fetchData(url) {
    const promiseToken = new Promise((resolve, reject) => {
        https.get(url, (response) => {
            let data = '';
            response.on('data', (rd) => data = data + rd);
            response.on('end', () => resolve(data));
        });  
    });
    return promiseToken;
}
console.log("Program Starts");

const promiseTok = fetchData('https://www.javascript.com/');
promiseTok.then((promisedData) => {                               // to catch that result we use .then() function
    console.log(promisedData.length);
})

console.log("Programs End");