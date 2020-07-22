// Example - 1
let incomes = [69304, 39348, 14354];
let total = 0;

for(income of incomes) {
    console.log(income);
    total += income;
}
console.log(total);

console.log("************** **************");
// Example - 2
let fullName = "My name is Aishu";

for(const char of fullName) {
    console.log(char);
}
console.log("****************************");

// Example - 3
const students = [
    { name: "Aarvi", city: "New York" },
    { name: "Trisha", city: "Paris" },
    { name: "Sayee", city: "Sidney" }
];

for (const student of students) {
    console.log(student.name + " lives in " + student.city);
}
