/* Destructuring Object */
// const PI = Math.PI;
// const E = Math.E; 
// const SQRT2 = Math.SQRT2;

//Destructuring for modern javascript
const { PI, E, SQRT2 } = Math;      // apply destructuring to above three statements

const { readFile } = require('fs');
const circle = {
    radius: 2,
    smomeProp: 'someValue'
};
// const cirArea = (circle) => {
//     return (PI * circle.radius * circle.radius).toFixed(2);   // to get the result of precision 2 i.e no of digit after decimal 
// }

const cirArea = ({radius}, {precision = 2} = {}) => {                   // ES6 destructuring to avove functio
    return (PI * radius * radius).toFixed(precision);
}
console.log(cirArea(circle, {precision : 5}));          // value of precison is overwritten




/* Destructuring Array */
// Rest operator for Array
const [first, second, , fourth] = [10, 20, 30, 40];
console.log(first);
console.log(second);
console.log(fourth);

const [one, ...restOfItems] = [1, 2, 3, 4];
console.log(one);
const newArray = [...restOfItems];  // spread operator means copying one array elements into new array
console.log(newArray);

// Rest operator for object
const data = {
    temp1 : '001',
    temp2 : '002',
    firstName : 'Aishu',
    lastName : 'Shinde'
};
const {temp1, temp2, ...person} = data     // if we only want to display first & last Name from data to person's object we can use rest operator 
console.log(temp1);
console.log(temp2);
console.log(person);