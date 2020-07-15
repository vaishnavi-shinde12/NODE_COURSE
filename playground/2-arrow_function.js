// NORMAL/REGULAR FUNCTION...
// const square = function(x) {         
//     return x * x
// }

// ARROW FUNCTION...
// const square = (x) => {                
//     return x * x
// }

// Arrow Function with Single Statement
// const square = (x) => x * x       
// console.log(square(2))

const event = {
    name: 'Birthday Party',
    guestList: ['Aishu', 'Akshu', 'Alia'],
    printGuestList1: function() {                    // first way to write function
        console.log('Guest list for '+ this.name)
    },              
    printGuestList2 () {                              // second way to write function
        // const that = this                           // way to access above variables -- instead of using 'this' we use that
        console.log('Guest list for '+ this.name)

        this.guestList.forEach((guest) => {                         // if we have write function keyword for this 'guest' function we have to use 'that'
            console.log(guest + ' is attending '+ this.name)        // For above comment ==> 'this.name' should not work ---> use that.name
        })
    }
}

// event.printGuestList1()
event.printGuestList2()