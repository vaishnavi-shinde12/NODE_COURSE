/* creating a new file */
// const fs = require("fs");
// fs.writeFileSync('notes.txt', 'My name is Vaishnavi,')        // to create a file with content
// fs.appendFileSync('notes.txt', ' I am learning nodeJS !')    // to append (add) extra content to file

/* Command line Argument */
// console.log(process.argv[1])          // here we use the array to show particular line of array

const command = process.argv[2]
console.log(process.argv)
if(command === 'add') {
    console.log('Adding note')
}
else if(command === 'remove') {
    console.log('Removing note')
}