// console.log("Hello Node");


// // Arguments
// function myFunction() {
//     console.log(arguments);
// }
// myFunction(3,6,9,12,15);

// wrapper

// function (exports, require, module, _filename, _dirname) {
exports.a = 23;       // here exports is nothing but alice of module.exports
module.id = 11;        // assigning value to 'id'
// console.log(arguments);          // comments this for a while
   
exports.display = () => {
    console.log("I am from wrapper module")
}


// console.log(exports);             // this both will return same value
// console.log(module.exports);      // this both will return same value
// returns modeule.exports;  // OR return exports
// }