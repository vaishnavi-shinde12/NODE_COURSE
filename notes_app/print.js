/* npm module modules */
const validator = require('validator')

console.log(validator.isEmail('vaishups12@gmail.com'))   // validating email using validator
console.log(validator.isURL('https://google.com'))          // validating URL using validator  

/* printing in color */
const chalk = require('chalk')
const greetingmsg = chalk.cyan('Vaishnavi')
console.log(greetingmsg)                                                     // changing text color
console.log(chalk.red('Hello') + chalk.white(' World') + chalk.green(' !'))  // using diff color to diff word
console.log(chalk.cyan.bgRed.bold.underline('Heyy... My name is vaishu'))    // providing text & bg color, bold, underline
console.log(chalk.cyan.bgRed.bold.underline.inverse('Heyy... My name is vaishu'))  // using inverse - it will interchange the text and bg color