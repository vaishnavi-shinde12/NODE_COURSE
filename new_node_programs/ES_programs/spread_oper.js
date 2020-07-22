// Normal example
let contacts = ["SS", "MS", "VW"];
let personalFriends = contacts;  // here we not created a new array but we provide a new reference to existing array
                        // so if we want to access array we can make use of both variables 'contacts' & 'personalFriends'
console.log("Original data : " + contacts);
console.log("Reference array : " + personalFriends);

contacts.push("PP");           // If we add new value to array
console.log("Original data new newly added" + contacts);
console.log("Reflected data: " + personalFriends);     // That will again reflect in our reference variable

console.log("*******************************************");


// Using ES6 Spread operator of Array
let shoppingList = ["milk", "bread", "eggs", "butter"];
let shoppingBasket = ["waterBottel", ...shoppingList, "icecream", "chocloates"];
console.log(shoppingList);
console.log(shoppingBasket);


console.log("**********************************");


// Another Example of object 
let person = {
    name: 'Rose',
    age: 22,
    city: 'Pune'
}
let employee = {
    ...person,                  // spread operator
    salary: 25000,
    position: 'developer'
}
console.log(person);
console.log(employee);

console.log("********************************");


