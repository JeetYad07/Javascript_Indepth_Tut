const accountId = 11343;
let accountEmail = "jeetb.yadav11@gmail.com";
var accountPassword = "1234";
accountCity = "Bengaluru" // not a good way to assign

let accountState;

// accountId = 32132 : TypeError: Assignment to constant variable. :  This is not allowed
// accountEmail = "jeet@gmail.com"
// accountPassword = "12121211213"
// accountCity = "Ludhiana"
/*  
    Prefer not to use var
    : Because of issue in block scope and functional scope 
*/

// console.log(accountId);
// console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

// for(let i = 0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }

// var points to same memory refernce, but let not
// for(var i = 0;i<10;i++){
//     setTimeout(()=>{
//         console.log(i);
//     },2000)
// }



// Interview Question : var vs let vs const

// Scope: 
// var: global scope, block scope: let and const
//  variable shadowing
// function test(){
//     let a = 10
//     if(true){
//         let a = 20;
//         console.log("if block value: ",a)
//     }
//     console.log("Outer value",a);
    
// }
// test()


// Below is called illegal shadowing
// function test(){
//     let a = 10
//     let b = 10
//     if(true){
//         let a = 20;
//         var b = 20
//         console.log("if block value: ",a)
//         console.log("if block value: ",b)
//     }
//     console.log("Outer value",a);
//     console.log("Outer value",b);
    
// }
// test()

// we can do shadowing var variable with let but cannot do reverse
// function test(){
//     let a = 10
//     var b = 10
//     if(true){
//         let a = 20;
//         let b = 20
//         console.log("if block value: ",a)
//         console.log("if block value: ",b)
//     }
//     console.log("Outer value",a);
//     console.log("Outer value",b);
    
// }
// test()

// Declaration: var can be redeclare in the same scope, but let and const can't 
// var a 
// var a 

// Declaration without initialisation
// let a;  Allowed
// a = 10
// var b;
// b=12
// const c; // not allowd

// Q: Re-Initialisation: var and let can be re-Initialise, but const can't
// var a =10
// a =20;
// console.log(a)
// let a = 2;
// a=4
// const a = 4;
// a=6    --< Not all
// console.log(a)


// Hoisting : Hoisting is the phenomena in which variable and function decalartion
//  move to top due to the first phase of execution context that is Memory Creation phase

// function abc(){

//     console.log(a,b) // undefined
//     var a= 10
//     let b = 10;
// }
// abc()
// console.log(a)
// var a =10

// console.log(b) // this will give referenceError: because let and const are in Temporal dead zone
// let b =10;  
// Temporal dead zone: it is the time b/w declaration and initlization of let and const variable.
// During this period, the variable cannot be accessed and will throw a ReferenceError




