// const userEmail ="Jeet@gmail"
// We are assuming that above is true
const userEmail = []
// console.log(true)
if(userEmail){
    console.log(`Got User Email`)
}else{
    console.log(`Don't have user email`);
}

// +++++++++++++ Interview   +++++++++++++
// There are some rules for truthy and falsy values
//Falsy values
// : false,0,-0,"",BigInt 0n, null,undefined,NaN
// Truthy values
// : "0","false"," ",[],{},function(){}

// if(userEmail.length === 0){
//     console.log(`Array is empty`);
// }
// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log(`Object is empty`);
// }


// Nullish  Coalescing Operator (??): null, undefined
// Will use incase we don't want to stop the program,or we wanted to assign some values
// const name = null ?? "Jeet"
// console.log(name);
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 4
// val1 = null ?? undefined ?? 4
console.log(val1);


// Terniary operator

// condition ? true : false
// const iceTeaPrice = 100
// iceTeaPrice <=80 ? console.log("less than 80"):console.log("more than 80");;