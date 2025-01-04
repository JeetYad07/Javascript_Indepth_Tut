// singleton: object made using constructor
// singleton object made using class
// Object.create

//object literals, creates literals
var obj = {
    //name: string,value:sting
    name:"Heeer",
    age:23,
    city:"Bangalore",
    email:"heer@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}
// console.log(obj);
// console.log(obj.name);  // two ways to access obj:1 using (.) operator,using [""]
// console.log(obj["age"]);
// console.log(obj["email"]);
// console.log(obj.name="jeet");
// console.log(obj);
// console.log(Object.freeze(obj));
// console.log(obj.email="jeet@google.com");
// console.log(obj); // obj is frozen, cannot be changed
// how to use symbol in obj: 
const mySum = Symbol("Key1") // Symbol declaration
var newObj = {
    //name: string,value:sting
    name:"Heeer",
    "full name":"heer chaudhary",
    [mySum]:"key1",
    age:23,
    city:"Bangalore",
    email:"heer@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Wednesday"]
}
// console.log(newObj["full name"]);
// console.log(newObj.mySum);
// console.log(typeof newObj.mySum);
// console.log(newObj);

//function

// newObj.greeting = function(){
//     console.log("Hello JS user");
// }
// newObj.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }
// console.log(newObj.greeting); // it will return fun reference
// console.log(newObj.greetingTwo()); // Method invoke