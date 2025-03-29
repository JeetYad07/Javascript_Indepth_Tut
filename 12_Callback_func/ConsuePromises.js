// Problem with Callback func:
// 1. Callback hell
// 2. Inversion of Control: Loosing control


// Promises are used to handle aysnc code 

// const cart = ["shoes","pant","cap"];
// createOrder(cart, function(orderId){
//     proceedPayment(orderId)
// });


// There is issue with above approach is that we are passing callback function into
// another function and blindly trusting on createOrder fun that it will create order
// and call the func which might not sure how many times

// to resolve the issue, we have promise
// const promise = createOrder(cart); // we r waiting that it will fetch data from api and store in promise
// here we attaching callback fun to promise object and for sure it will call only once when we have data on promise

// promise.then(function(orderId){
//     proceedToPayment(orderId)
// })


// const GITHUB_API = "https://api.github.com/users/jeetyad07"

// const user = fetch(GITHUB_API);
// console.log(user);
// user.then(function(data){
//     console.log(data);
    
// })

// Interview Ques:

// What is Promise: Promise object represents the eventual completion (or failure) of an aysnchronous operation
// and it's resulting values

// How we handle
const cart = ["shoes","pant","cap"];
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId, function(paymentInfo){
//         showOrderSummary(paymentInfo, function(){
//             updateWalletBallence();
//         })
//     })
// });

// This is also know as Pyramid of doom
// callback hell


// to resolve the issue.
// Also known as promise chain
createOrder(cart)
.then(function(orderId){
   return proceedToPayment(orderId)
})
.then(function(paymentInfo){
   return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
   return updateWallet(paymentInfo);
})