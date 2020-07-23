let numArray = [1, 2, 3, 4, 7];
console.log("Index of 7 is : " + numArray.indexOf(7));   
     // indexOf() function is used to get the index of that particular element, 
     //if the element is present it returns its value, otherwise return -1 (element not present).

console.log(numArray.includes(4));   // include() is boolean function,that return true if element is present inside array


// Example 
const listIngredients = ['butter', 'eggs', 'milk', 'sugar'];
if(listIngredients.includes('chocolates')) {
    console.log("We are going to make a chocolate cake!");
}
else {
    console.log("We can't make a chocolate cake because we are missing chocolates...");
}