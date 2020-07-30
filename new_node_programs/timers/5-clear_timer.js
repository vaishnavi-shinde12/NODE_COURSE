const myFunction = () => {
     console.log("Hello....");
}
const timerId = setTimeout(myFunction, 0);    // If we have delay of 0 sec, we have an alternative method as below 

for(let i = 0; i < 10; i++) {
    console.log("Hieee");           // after executing this loop, it will immediately close the control
}
clearTimeout(timerId);              // to stop the control


// setImmediate function - an alternative to 0 sec delay function
const timerId = setImmediate(myFunction);      // bydefault delay time is 0
clearImmediate(timerId);

const timerId = setInterval(myFunction, delay);
clearInterval(timerId);