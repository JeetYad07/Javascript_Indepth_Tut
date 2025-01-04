// Promise object represents the eventual completion (or failure) of an aysnchronous operation
// and it's resulting values

// file reading/network/

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

const promiseOne = new Promise((resolve,reject) => {
    // Do an aysnce task
    // network related call, DB calls
    setTimeout(function(){
        console.log(`Aysnce task is completed`);
        // .then have relation with resolve
        resolve()
    },1000)

})

promiseOne.then(function(){
    console.log(`Promise is Consumed`);
    
})

// Another Promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`Aysnc task 2 is completed`);
        resolve()
    },1000)
}).then(function(){
    console.log(`Aysnc 2 resolved`)
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Jeet",email:"jeet@gmail.com"})
    },1000)
})
promiseThree.then(function(users){
    console.log(users)
})

const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"Jeet",password:"123"})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user) 
    return user.username
})
.then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>console.log(`The Promise is either resolved or rejected`))

const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"Javascript",password:"1234"})
        }else{
            reject("Error: JS went wrong")
        }
    },1000)
})

// Another way to consume promise: aysnce/await

async function consumePromiseFive() {
    try {
        const response =    await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
 
}
consumePromiseFive()

// async function getAllUsers() {
//   try {
//     const response =   await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
    
//   }
  
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response,reject)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error))