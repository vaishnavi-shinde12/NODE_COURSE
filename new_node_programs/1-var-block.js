
// Normal Block scope - var keyword
{ 
   var score = 63;        // declaring variable inside a block
   console.log("Inside a Block : " + score);      // accessing that variable inside a block
}
console.log("Outside a Block : " + score);      // we can also access variable outside a normal block

// Normal Block scope - var keyword
{
    let marks = 34;
    console.log("Marks are : " + marks);        // "let" keyword is used to give private access within a block 
} 
// console.log("Marks are : " + marks);       // we can't access the variables which are declare using "let" keyword 



// Conditional Block Scope
if(true) {
     // Block scope
     var name = 'Aishu'
}
console.log(name);      // we can also access variable outside a conditional block 



// Looping Block Scope
for(var i = 1; i <= 10; i++) {
}
console.log(i);        // we can also access the variable outside a looping block



// Function Scope
function multiply(a, b) { 
    var age = 20;
    console.log("Age is : " + age);
    var result = a * b;
}
// console.log(age);         // Error - whatever we declare inside a function, can't be accessd outside a function scope
multiply(2,4);