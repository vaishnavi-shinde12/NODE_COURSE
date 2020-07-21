// Example - 1
let word1 = 'Aishu';
let word2 = 'Sangpal';

const fullName = word1 + ' ' + word2;     // we can concat/merge the string using '+' sign
console.log(fullName);
const fullname = `${word1} ${word2}`;     // we can make use of template literals(template strings) to concat
console.log(fullname);

// Example - 2
let num1 = 2;
let num2 = 8;

const sum = num1 + num2;
console.log(sum);
const sum1 = `${num1 + num2}`;      
console.log(sum1);

if(num1 > num2) {
    console.log("Number 1 is greater");
}
else {
    console.log("Number 2 is greater");
}

// Example - 3
let example = 'Hello\n' + 'World';
console.log(example);
