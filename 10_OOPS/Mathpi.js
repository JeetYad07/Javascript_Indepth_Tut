//    Advance details of object: Can we change value of any default/standard things: pi:3.14
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)
// Can we create our own Object which have these values 
const chai = {
    name:"ginger chai",
    price:250,
    isAvailable:true,

    isOrder: function(){
        console.log(`chai nhi bani`);
        
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,"name",{
    // writable:false,
    enumerable:true
})
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))
// console.log(chai)

// for (let [key,value] of chai) {
//     console.log(`${key} : ${value}`);
    
// }
// The above Object is not iterable, To make iterable
for (let [key,value] of Object.entries(chai) ) {
    if(typeof value !== 'function'){
        // console.log(`${key} : ${value}`);

    }
    
}