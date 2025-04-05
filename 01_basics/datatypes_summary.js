/**
 * Data types described based on storing in memory and how to access
 * Call By Value (Whatever we will change, will change in value not in refernce(address))
 * Primitive: 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt.
 

*/
const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('1234');
const anotherID = Symbol('1234');
// console.log(id === anotherID);


const bigNumber =  123432343n

/*
 * Reference (Non Primitive)
 * Array, Objects, Functions 
 */

const heros = ["jeet","vish"];

let myObj = {
    name: "jeet",
    age: 25,
}

const  myFunction = function(){
    console.log("Hello");
}

// to find variable type
// console.log(typeof isLoggedIn);

// is javascript statically or dynamically types : dynamically typed


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// two types of memory
// stack memory stores(Primitive datatypes), Heap (Non-Primitive)
let myName = "heer"; // memory will be store in stack
let anotherName = myName;  // copy of myName will be pass to anotherName avriable
anotherName = "jeet"
console.log(myName); // heer
console.log(anotherName); // jeet : why because we have copy of the variable not refernce or address

let userOne = {
    email:"jeet@google.com",
    upi:"jeeT@ybl"
}
// console.log(userOne.email)
let userTwo = userOne;
userTwo.email = "heer@google.com"

console.log(userOne.email);  //heer@google.com
console.log(userTwo.email);  //heer@google.com  : why this happen, because heap will store the refernce of the userOne due to Non Primitive
