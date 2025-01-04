// Immediately Invoked Function Expression
// IIFE: As soon as wrote the fun, should execute immediately
// Why we need IIFE: 1. Sepeartely Database connectivity 
// 2. To avoid Global scope variable pollution

// function chai(){
//     console.log(`DB Connected`);
// }chai()

// how to write iife function
// (function chai(){
//     console.log(`DB Connected`)
// })()
// above one is similar to chai()

// how to write two iffe func:
// named iffe
 (function chai(){
        console.log(`DB Connected`)
 })();

 //unnamediffe
 ((name) =>{
        console.log(`DB Connected 2 ${name}`)
 })("Jeet")

 // how to stop execution context in iife  ***Interview question*****
//  If we write like above it will give error, to avoid the error we need to stop executing ;