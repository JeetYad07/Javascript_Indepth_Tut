// Basic unit: Object literal: Literally an Object: which have collection of properties and methods
const user = {
    username:"Jeet",
    loginCount:12,
    signedIn:true,
    getUserDetails: function(){
        // console.log(`Got User Information`)
        // console.log(`Username: ${this.username}`);
        // console.log(this)
        
    }

}
// this: refers to current context
// const user2 = {
//     username:"Manga",
//     loginCount:11,
//     signedIn:false,
//     getUserDetails: function(){
//         console.log(`Got User Information`)
//     }

// }
// console.log(user)
// console.log(user2)
// console.log(user.getUserDetails())
// console.log(this)
// But above using above approach, we have to write the object multiple time, and code will not be clean
// this: refers to current context

// Constructor function
// const promiseOne = new Promise()
// const date = new Date()
// new: constructor function : allows to create multiple func/new instance from one object literals

function User (username,loginCount,signedIn){
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn,
    this.greetings = function(){
        console.log(`Welcomne ${this.username}`);
        
    }
    return this;
}

// const userOne = User("Jeet",12,true)
// const userTwo = User("Manga",11,false) // this method is overridding the existing  object, because
// it is pointing the same reference
// To avoid the above issue, we should user new constructer
const userOne = new User("Jeet",12,true)
const userTwo = new User("Manga",11,false)
console.log(userOne.constructor)
// console.log(userTwo)
// new keyword: 1. when we use new keyword: an empty object creates, called as instance
// 2. a constructor fun call due to new keyword
// 3. this keyword inject the values
// 4. we will get the values

// constructor properties refers to same func