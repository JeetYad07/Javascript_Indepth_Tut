/**
 * All three methods—call(), apply(), and bind()—
 * are used to change the context (this) of a function when invoking it.
 *  They are primarily used when dealing with function borrowing,
 *  explicit this binding, and method invocation.
 */

// call()-> Executes a function immediately
// Allows passing arguments one by one
// Explicitly sets this

let car1 = {
    color:"red",
    company:"ferrari"
}

function purchaseCar(currency,price){
    console.log(
        `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
    );
    
}
// purchaseCar.call(car1,"$","500000")

// polyfill for call

// Function.prototype.myCall = function(context = {}, ...args){
//     // check edge case
//     if(typeof this !== 'function'){
//         throw new Error(this + "It's Not callable")
//     }
//     context.fn = this;
//     context.fn(...args);
// }

// apply()-> Executes a function immediately
// Allows passing arguments as an array
// Explicitly sets this

// purchaseCar.apply(car1,["$","600000"])
// polyfill for apply
// Function.prototype.myApply = function(context = {}, args = []){
//     if(typeof this !== 'function'){
//         throw new Error(this + "It's not callable");
        
//     }
//     // check args is an array or not
//     if(!Array.from(args)){
//         throw new TypeError("CreateListfromArrayLike called on non-object");
        
//     }
//     context.fn = this
//     context.fn(...args)
// }
// purchaseCar.myApply(car1,['$',600000])

// bind()-> not excute fun immediately, return a new fun
// const newFun = purchaseCar.bind(car1,"$",500000)
// console.log(newFun());

// polyfill of bind()
Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + "Cannot bind it."); 
    }

    context.fn = this
   return function(...newArgs){
    return context.fn(...args,...newArgs)
   }

}
const newFun = purchaseCar.myBind(car1)
console.log(newFun("$",400000));