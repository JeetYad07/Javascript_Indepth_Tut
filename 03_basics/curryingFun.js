// Curring Docs: https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more

// curring in js
// ex: f(a,b) into f(a)(b)

// function f(a,b){
//     console.log(a,b)
// }

// function f(a){
//     return function(b){
//         // console.log(a,b);
//         return `${a} ${b}`
//     }
// }
// console.log(f(5)(6))

// Q: Why should we use currying?
// A: To avoid using same variable again and again

// Q: sum(2)(6)(1)
// expalin interviewer with normal function
// function Sum(a,b,c){
//     return a+b+c;
// }
// console.log(Sum(2,6,1))
// function Sum(a){
//     return function(b){
//        return function(c){
//         return a+b+c;
//        }
//     }
// }
// console.log(Sum(2)(6)(1))

/**
 * evaluate("sum")(4)(2) => 6
 * evaluate("multiply")(4)(2) => 8
 * evaluate("divide")(4)(2) => 2
 * evaluate("sub")(4)(2) => 2
 *  */ 

// function evaluate(operation){
//     return function(b){
//         return function(c){
//             if(operation === "sum"){
//                 return b + c;
//             }else if(operation === "multiply"){
//                 return b*c;
//             }else if(operation === "divide"){
//                 return b/c;
//             }else{
//                 return b-c
//             }
//         }
//     }
// }

// console.log("Sum of two numbers",evaluate("sum")(4)(2))
// console.log("Multiply of two numbers",evaluate("multiply")(4)(2))
// console.log("Divide of two numbers",evaluate("divide")(4)(2))
// console.log("Subtract of two numbers",evaluate("sub")(4)(2))

//Q3: - Infinite Curring -> sum(1)(2)(3).....(n)

// function sum(a){
//     return function(b){
//         if(b) return sum(a + b);
//         return a;
//     }
// }

// console.log(sum(5)(2)(7)(12)(2)())

// Q4: Curring vs Partial Application
// curring means it will have no of function as per arguments (3 fun when 3 arguments)
// partial application: func expected 3 arguments but have 2 nested func
// function sum(a){
//     return function(b,c){
//         return a+b+c;
//     }
// }

// const x = sum(10);
// console.log(x(2,12));
// console.log(x(4,22));

// or

// console.log(sum(20)(1,4));

// curring means it will have no of function as per arguments (3 fun when 3 arguments)
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }

// Q5: - Manipulating DOM
// function updateElementText(id){
//     return function(content){
//         document.querySelector("#" + id).textContent = content;
//     };
// }

// const updateHeader = updateElementText("heading");
// updateHeader("Jeet Yadav")

// Q6: Write a function curry() that converts f(a,b,c) into a curried function f(a)(b)(c) .

function curry(func){
    return function curriedFunc(...args){
        // console.log(args.length, func.length)
        if(args.length >= func.length){
            return func(...args)
        }else{
            return function(...next){
                return curriedFunc(...args, ...next)
            }
        }
    }
}

const sum = (a,b,c,d)=> a+b+c+d;
// console.log(sum(0,3,4,5));
const totalFunc = curry(sum)
console.log(totalFunc(1)(2)(3)(4))
