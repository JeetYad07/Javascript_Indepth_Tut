// When we want some control over our code
// if
const isLoggedIn = true

// if(isLoggedIn){
//     console.log("You are logged in")
// }
// console.log("You are not Logged"); // This will always execute

// <,>, <=, >=, ==, ===: strict check, !=,!== : comparison operator


// if(3=="3"){
//     console.log(`You r good`);
// }else{
//     console.log(`You r bad`);
// }

// Will discuss about scope
// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// shorthand notation
const balance = 1000
// if(balance > 500) console.log("test"),console.log("test");  avoid,not good pratice

// basic nested loops
// if(balance < 500){
//     console.log(`Balance is greater than 500`);
// }else if(balance < 700){
//     console.log(`Balance is greater than 700`);
// }else if(balance < 900){
//     console.log(`Balance is greater than 900`);
// }else{
//     console.log(`Balance is less than 1200`);
// }


const userLoggedIn = true
const debitCard = true

const userLoggedUsingGoogle = true
const userLoggedUsingEmail = false

// if(userLoggedIn && debitCard ){
//     console.log("You can proceed");
// }

if(userLoggedUsingEmail || userLoggedUsingGoogle){
    console.log("You can proceed");
}