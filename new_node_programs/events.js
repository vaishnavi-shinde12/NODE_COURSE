const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// myEmitter.emit('TEST-EVENT');      // what if we want to emit event before it register use setImmediate or setTimeout function

setImmediate(() => {                  // setImmediate function is get executed if the code written below in this file completes its execution
    myEmitter.emit('TEST-EVENT');     // thats why the other code executed before, instead of executing 'TEST-EVENT' event
});

myEmitter.on('TEST-EVENT', () => {                   // event registered
    console.log("The test event-I was fired");
});
myEmitter.on('TEST-EVENT', () => {
    console.log("The test event-II was fired");
});
myEmitter.on('TEST-EVENT', () => {
    console.log("The test event-III was fired");
});

// myEmitter.emit('TEST-EVENT');             // if we register event and emit it after then it is the write sequence to execute the code 


myEmitter.on('TESTED', () => {
    console.log("Testing is completed");
})

myEmitter.emit('TESTED');