console.log("Welcome to Event loop");

setInterval(() => {
    console.log("Hello...Event Loop");
},5000);
// way - 1 : here you have to terminate the loop by ctrl+C in terminal
// way - 2 : you can also terminate it by using the process id
// the processid can be get by using following command in new terminal
//   > ps -ef | grep node 
// process id is will be always new for newly running the file