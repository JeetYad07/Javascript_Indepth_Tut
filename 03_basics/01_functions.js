
// function defination
// function sayMyName(){
//     console.log("J");
//     console.log("E");
//     console.log("E");
//     console.log("T");
// }
// //  sayMyName // this will give reference of func
// sayMyName() // function invokation/ execute

// real use of fun
//  function addTwoNumbers(number1,number2){ // (number1,number2): number1,number2: will call them as parameter
//     let result =  number1 + number2
//     console.log(result);
//  }

function addTwoNumbers(number1,number2){ // (number1,number2): number1,number2: will call them as parameter
    let result =  number1 + number2
    // console.log(result);
    return result;
 }

//  addTwoNumbers(3,4) // 3,4: arguments : print:7
//  addTwoNumbers(3,"4") // 3,4: arguments: print:34 why because number1,number2 donot check datatype
// let res = addTwoNumbers(3,4)
// console.log(typeof res); // number
// let res = addTwoNumbers(3,"4")
// console.log(typeof res);

function loginUserMessage(userName = "Heer"){
    // if(userName === undefined){ 
    //     return `Please Enter username`
    // }
    if(!userName){ 
            console.log(`Please Enter a username`)
            return
        }

    // console.log(`${userName} logged in successfully`)
    return `${userName} logged in successfully`
    // console.log("Welcome to our website");
}
console.log(loginUserMessage("Jeet"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("Jeet"));

//common situation in ecom: where we don't know num of parameter

function myFunction1(num){
    // console.log(num)
}
function myFunction2(...num){ // rest operator wil combine the parameters and return it in an array
    // console.log(num)
}
// interview question
function myFunction3(val1,val2,...num){ // rest operator wil combine the parameters and return it in an array
    // console.log(num)
}
// myFunction1(5) 
// myFunction2(5,2,3) // in this case we are pass 3 arguments, but it is taking only one, to resolve this issue
// myFunction3(5,2,3,5,3,0,3) 

// we will pass objects

const user = {
    userName:"jeet",
    age:25
}

function getUserValue(userval){
    return userval
}
// console.log(getUserValue(user)); // {userName:"jeet",age:25} //
// console.log(getUserValue({name:'jeer',age:23}))

// similarly for array
const userArray = [12,2,3,1,2,4];
function getUserArrayValue(userArray){
    return userArray[0]
}
console.log(getUserArrayValue(userArray)) // 
console.log(getUserArrayValue(["userArray","2","Nete"])) // 

