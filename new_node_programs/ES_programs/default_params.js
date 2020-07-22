// Example 1 - Simple Arrow Function
const person = () => {
    console.log("The person name is Varun Dhawan ");
}
person();


// Example 2 -  Passing parameters/ arguments to function
const person1 = (actor) => {
    console.log(`The person name is ${actor}`);
}
person1("Shahid Kapoor");


// Example 3 -  Passing default paramenters
const person2 = (actor = "Sushant Singh" ) => {        // We can make use of default params
    console.log(`The person name is ${actor}`);
}
person2();                        // If we won't to pass value as agrument


// Example 4 -  Passing default parameter and argument to function
const person3 = (actor = "Ajay Devgan") => {        // passing default param along with arguments 
    console.log(`The person name is ${actor}`);    // It will accepts only agrument pass value, and not default param
}
person3("Ranbir Kapoor");
