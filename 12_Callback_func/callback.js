// What is callback?: When we pass one function as argument to another function in js, it is called callback func
// Why we need?: 1. To handle asynchronous operations (e.g., API calls, file reading).
// To execute code after another function completes.
// To improve code modularity and reusability.

// setTimeout(()=> {
//     console.log("timer");
    
// },5000)

// function x(y){
//     console.log("x");
//     y()
// }

// x (function y(){
//     console.log("y");
    
// })

// JS is a synchronous and single threaded language
// Blocking the main thread
// Power of callbacks?
// Deep about EventListeners
// Scope Demo with Event Listners

// problem we solved using the global variable
// let count = 0
// document.getElementById('clickMe').addEventListener('click', function xyz(){
//     console.log("Button Clicked", ++count)
// })
// but creating a global variable can cause problem, because someother place someone if use then there will be problem
// To resolve the issue we will use closure
function attachEventListner(){
    let count = 0
    document.getElementById('clickMe').addEventListener('click', function xyz(){
        console.log("Button Clicked", ++count);
        
    })

}
attachEventListner()

// Garbage Collection & removeEventList ? Why do we need to remove EventLister:
// EventListner are heavy, that mean it takes memory, when we attach an eventListner
//  it forms a closure. Even though the call stack is empty, It will take the memory
