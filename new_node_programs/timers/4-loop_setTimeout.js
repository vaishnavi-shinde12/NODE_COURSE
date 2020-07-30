setTimeout( () => {
    console.log("Hello after 0.5 seconds..");
}, 500);                                   

for (let i = 0; i < 10; i++) {    // even if set time is after half sec, they will wait for execution of below statements
    console.log("Hello...");
}
console.log("**************************");

// Another Example
// Print "Hello World" every sec
// And stop after 5 counts
// After 5 counts Print "Done" and exit node

let counter = 0;
const funct = () => {
    console.log("Hello World!");
    counter += 1;

    if(counter === 5) {
        console.log("Done");
        clearInterval(timerId);
    }
};
const timerId = setInterval(funct, 1000);
