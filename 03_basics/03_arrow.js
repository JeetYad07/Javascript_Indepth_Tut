// this keyword tells about current context
const user = {
    userName:"Jeet",
    price:999,

    welcomeMessage: function (){
        console.log(`${this.userName}, Welcome to Website`);
        console.log(this)
    }
    
}
// user.welcomeMessage //  : it will return the address
// user.welcomeMessage(); // Jeet, Welcome to Website
// user.userName = "Meera"
// user.welcomeMessage()

// console.log(this) // Here this will return to an empty object
// But in Brower : this is pointing to window object, that is why we get window object


// in function we cannot access this or this will not work
// function chai(){
//     let userName = "Jeet" // 
//     console.log(this.user)
// }
// console.log(chai())

// const chai = function(){
//     let userName = "Jeet" // 
//     console.log(this.user)
// }


// const chai = () => {
//     let userName = "Jeet" // 
//     console.log(this)
// }

// chai()
// arrow function
// const addTwo = (num1,num2) => {
//     // console.log(this) // here this is pointing to global object
//     return num1 + num2
// }

//Implicit function, with return keyword
// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)
//will pass object
const addTwo = (num1,num2) =>  ({key:"1"})
// console.log(addTwo(2,3))

const myArr = [2,3,4,1,4]
