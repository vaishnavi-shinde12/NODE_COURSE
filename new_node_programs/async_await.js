const https = require('https');

// JS is single-threaded, we can able to perform operations asynchronously without affecting/blocking UI.

// await mthod is used to wait for tour desired result & 
// it  will return your desired desult staight away, which we where to supposed to get in future.
// Remember when you use 'await' keyword in your function, then you have to marks the function as 'async' using 'async' keyword 

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

async function read() {
    const promisedData = await fetchData('https://www.javascript.com/')  // if we use await keyword here then the return type of this function will no longer be type of promise
    console.log(promisedData.length)
}

console.log("Program Starts");

read();

console.log("Programs End");

                                       