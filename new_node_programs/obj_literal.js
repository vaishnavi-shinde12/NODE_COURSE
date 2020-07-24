// Example -1 
const myObj = {
    strProp : "Hello...someone!",           // string as object literals
    numProp: 23,                            // number as object literals
    bprop: false,                           // boolean as object literals
    brands: ['mac', 'hp', 'dell', 'acer'],  // array as object literals
    pos: {                                  // object as object literals
        x: 62,
        y: 722
    },
};
console.log(myObj.strProp);
console.log(myObj.numProp);
console.log(myObj.bProp);
console.log(myObj.brands[0]);
console.log(myObj.pos.x);

// Example - 2
const myObject = {
    name: 'Aishu',               
    age: 21,
    onSwap: function() {         // Regular function
    },      
    onClick() {                  // Regular Function without keyword 'function
     },             
    myFunc: () => {              // Arrow Function
     }           
};    
myObject.onSwap(); 
myObject.onClick(); 
myObject.myFunc(); 


// Example -3 
const bear = 'animal';
const PI = Math.PI;

const myObjectt = {
    [bear] : 'wild',         // 'bear' is replaced bt 'animal'
    PI                       // equivalent to PI : PI
};
myObjectt.propX = true;      // Add new Property
myObjectt['propZ'] = 22;       // Add new Property

/*********** OUTPUT **********/
// fc@Administrator:~/NODE_COURSE/new_node_programs$ node
// > const bear = 'animal';
// undefined

// > const myObjectt = {
// ...     [bear] : 'wild'                   
// ... }
// undefined
// > myObjectt.bear
// undefined
// > myObjectt.animal
// 'wild'
// > myObjectt
// { animal: 'wild' }

// > myObjectt.propX = true;
// true
// > myObjectt['propZ'] = 22;
// 22

// > myObjectt
// { animal: 'wild', propX: true, propZ: 22 }

// > const PI = Math.PI;
// undefined
// > PI
// 3.141592653589793
// > 