// setInyterval function is used to delay a operation in loop

setInterval( () => {
    console.log("Hello, after 4 seconds");
}
, 4000);

const func = ( (delay) => {
    console.log("Hello...")
});
setInterval(func, '500');