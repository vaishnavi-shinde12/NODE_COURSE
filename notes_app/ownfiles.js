/* Importing our own files */ 
// const name = require('./utils.js')    // import our file utils
// console.log(name)                     // use propertys of utils
   
const add = require('./utils.js')
const sum = add(4, -2)
console.log(sum);

const getNotes = require('./notes.js')   // importing another our own function
const msg = getNotes()
console.log(msg)