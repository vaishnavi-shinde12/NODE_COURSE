function add (nums)
 {
    //  console.log(nums)           // this will display only first number
    console.log(arguments);         // this  will display all elements
 }

 add(4, 7, 8, 6, 4, 19);

 function adding (...adds) {            // here we have use spread operator
    console.log(adds);                  // here we can get numbers array
 }
 adding(3, 7, 3, 6, 9);             