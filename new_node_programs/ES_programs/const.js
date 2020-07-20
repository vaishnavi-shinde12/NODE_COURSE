// Scalar values

const score = 42; 
const message = 'Hello';
console.log("Message is : " + message);
// score = 60;              // Error - Assignment to const variables is not allowed/restricted

// Arrays 
const numbers = [1, 6, 0, 4];
console.log("Array elements are : " + numbers)

// numbers = [5, 7, 0];              // You cannot change the array

Object.freeze(numbers);              // freeze function is used to make the variable mutable in nature

numbers[0] = 3;                      // but you can change the content of array
numbers[0] = 8.5;                      
console.log("Updated Array elements are : " + numbers);


// Objects
const student = {
    firstName: 'Aishu',
    lastName: 'Shinde'
}
console.log("First Name is : " + student.firstName);
console.log("Last Name is : " + student.lastName);