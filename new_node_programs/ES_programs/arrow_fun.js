// function declaration
function school() {
    return " I am going to school...";
}
console.log(school());

// anonymous function
 const college = function () {
     return " I am going to college...";
 }
console.log(college());

// arrow function
//Example - 1
const office = (time, place) => {                          // If we have multiple arguments we can use paranthesis 
    return ` I am going to office at ${time} to ${place}...`  
}
console.log(office("at 9 O'clock", "Pune Station"));

//Example -2
const lunch = food => ` I'm going to eat ${food} at lunch... `;  // If we have only one argument and only one statement we can use single line function
console.log(lunch("pav bhaji"));
