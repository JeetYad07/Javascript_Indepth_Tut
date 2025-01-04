// let try to understand scope using keywords : let,const and var
// let a =10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);

// till above everything looks good: let me introduce scope: {} : anything inside this braces is called scope
// scope is like a container that holds variables and functions
// var c = 300
// if (true) {
//     let a =10
//     const b = 20
//     var c = 30
 
// }

// console.log(a);  
// console.log(b);
// console.log(c);

// Here comes the main problem, var is having global scope and let and const are having block scope
// any variable if having global scope can have global as well as block access,but vice versa is not true

// let a = 200
// if (true) {
//         let a =10
//         console.log("Inner ",a)
    // }
    
// console.log(a);  

function a(){
    const username ="Jeet"
    function b(){
        const website = "google"
        console.log(username)
        
    }
    // console.log(website)
    b()
}
// a()
  
if (true) {
    const username = "Jeet"
    if(username === "Jeet"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website)
}
// console.log(username)


// +++++++++++++++++++++++++ Interesting ++++++++++++++++++++++++++
//concept: Hoisting
console.log(addone(5));
function addone(num){
    return num + 1
}

addTwo(5)
// expression/like variable
const addTwo = function (num){
    return num + 2
}
