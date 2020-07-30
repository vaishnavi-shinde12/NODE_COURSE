// setTimeout function is used to delay a operation

setTimeout(() => {
    console.log("Hello, after 4 seconds");
} , 4 * 1000);


// Printing two delay statements Using one function - Example
const myFunction = delay => 
{
    console.log("Hello, after "+ delay + " seconds")
}

setTimeout(myFunction, 5 * 1000, 'five');
setTimeout(myFunction, 10 * 1000, 'ten');
