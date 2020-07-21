
const student = {
    name: 'Priya',
    marks: {
        maths: 54,
        english: 89
    },
    age: 19,
    color: 'red',
    address: {
        city: 'Nashik'
    }
}

// console.log("Name is: " + student.name);         // if we have to access object info we use objectName.propertyName
// console.log("Age is: " + student.age);
// console.log("Address is: " + student.address.city);


// Alternative to above statements using ES6 
const { name, age, color } = student;         // we can broke down the student.name, student.marks,..etc into name, marks,..etc in single statement
console.log(`${name} has ${age} age,and ${name} like ${color} color`);


const { marks } = student;
console.log(`${name} got ${marks.maths} marks in Mathematics and ${marks.english} marks in English`);   // 1st way to access nested object property
// ************** OR *****************
const { address: { city } } = student;                 // 2nd way to access nested object property
console.log(`${name} lives in ${city}`);
