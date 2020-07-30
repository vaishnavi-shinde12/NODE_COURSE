// setTimeout with function
const myFunc = () => {
    console.log('Hello after 5 seconds');
};
setTimeout(myFunc, 5 * 1000);

// myFunct(arg1, arg2, arg3, ...);
// setTimeout(myFunc, 5 * 1000, 'a', 'b', 1, 2, ...);       // here 'a', 'b', 1, 2 are the arguments we can pass to function\


// Example
const myFunc = (param1, param2) => {
    console.log(param1 + ' ' +param2 + ' ' + 'Shinde'); 
}

setTimeout(myFunc, 2 * 1000, 'Vaishnavi', 'Paresh');