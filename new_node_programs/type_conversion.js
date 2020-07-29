// string and number concatenations
let x =  2 + '2';         
console.log(x);
console.log(typeof(x));

let y = 2 + 2 + '2';
console.log(y);
console.log(typeof(y));

// number and boolean value concatenation
let z = 2 + true;         // this will make addition of 2 and 1(true)
                          // false means value (0)
console.log(z);
console.log(typeof(z));

// string, number and boolean value concatenation
let a = 2 + true + '2'
console.log(a);
console.log(typeof(a));

// boolean and string concatenation
let b = true + '2'; 
console.log(b);
console.log(typeof(b));

console.log("********");

let c = Number('2');                // if we declare string here
console.log(c);                     // the o/p will be NaN
console.log(typeof(c));             // here the o/p is number

let d = Boolean('');            // if we decalre (''- empty string, 0, null, undefined) the o/p will be false 
console.log(d);                      // otherwise it will be true
console.log(typeof(d));

console.log("*********************************");

// Type Conversion

let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);

let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num);

console.log(Boolean(1)); 
console.log(Boolean(0)); 
console.log(Boolean("hello"));
console.log(Boolean(""));