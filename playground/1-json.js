const fs = require('fs')
const book = {
    title: 'Machine Learning',
    author: 'Vaishnavi Shinde'
}
// const bookJSON = JSON.stringify(book);           // stringify method is used to convert JS to JSON
// console.log(bookJSON)
// const parsedData = JSON.parse(bookJSON)          // parse method is used to convert JSON to an object
// console.log('Title is : ' +parsedData.title)
// console.log('Author is: ' +parsedData.author)

// const bookJSON = JSON.stringify(book)         
// fs.writeFileSync('1-json.json',bookJSON)        // write a file containing JSON data
// const dataBuffer = fs.readFileSync('1-json.json')  // read a JSON file
// console.log(dataBuffer.toString())                 // toString method is used to convert data to string

// const dataBuffer = fs.readFileSync('1-json.json')  //read file & get binary data
// const dataJSON = dataBuffer.toString()             // convert binary data in JS string
// const data = JSON.parse(dataJSON)                 // parsed data into an object
// console.log(data.title)

//challenge part
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user =JSON.parse(dataJSON)

user.name = "Aishu"
user.age = 23

const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json', userJSON)