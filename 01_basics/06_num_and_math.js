const score = 400;
// console.log(score); it will convert the variable into number type and print

const balance = new Number(19201.00)
// console.log(balance);
// console.log(balance.toString())
const num = 123.897
// console.log(balance.toFixed(2)); // should use in ecommerce website 
// console.log(num.toPrecision(4));  // it will check the value and based on that will take action

const hundreds = 100000
// console.log(hundreds.toLocaleString('en-IN')) // it will convert the number into string and add comma in between

// ++++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math); // Math is object in JS,It comes up with JS
// console.log(Math.PI);
// console.log(Math.SQRT1_2);
// console.log(Math.SQRT2);
// console.log(Math.min(1,3,8,0));
// console.log(Math.max(2,8,9,1));
// console.log(Math.floor(4.093));
// console.log(Math.ceil(4.093));
// console.log(Math.round(4.993));

// console.log(Math.random());  // returns value between 0-1
// I wanted the number should come more than 1
// console.log(Math.random() * 10); // returns value between 0-10 : shift 1 digit to the left
// console.log(Math.floor(Math.random() * 10)); // returns value between 0-9
// console.log(Math.floor(Math.random() * 10) + 1); // returns value between
// console.log(Math.ceil(Math.random() * 10) + 1); // returns value between 1-11

// general formula to find values b/w min and max

const min  = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);