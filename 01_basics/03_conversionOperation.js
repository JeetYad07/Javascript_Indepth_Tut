// let score = 33
// let score = "33";
// let score = "33scd";
let score = null
// let score = undefined

// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

/*  
    "33" => 33  : String can be convert to number
    "33adc" => NaN
    true => 1; false : 0
    null => if we tried to convert it in number: it will give 0
*/
// let isLoggedIn = 1
// let isLoggedIn = 0
// let isLoggedIn = ""
let isLoggedIn = "jeet"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


/* Investigation/Note
    1 => true; 0 => false
    "" => false
    "jeet" => true
*/

let someNumber = 33
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************************************Operations*****************************************
let value = 3
let negValue = - value
// console.log(negValue); 

// console.log(2+3);

let str1 = "Hello"
let str2 = " Jeet"
let str3 = str1 + str2

// console.log(str3);
// console.log("1"+2);   //12                                               // when we put + b/w string and number it will convert number to string
// console.log(typeof ("1"+2)); // string
// console.log(3 + 1 + "3"); // 43
// console.log(typeof (1 + "3")); // string
// console.log("1" + 3 + 3); //when we add str + num +num => it will concatenate the value
// console.log(1 + 4 + "4"); // 
// console.log(+true);
// console.log(+"");

// Key Differences:
// == (Equality Operator)

// Compares values after type conversion (coercion) if necessary.
// Different data types can be considered equal if JavaScript can convert one to match the other.

// === (Strict Equality Operator)

// Compares both value and type without performing type conversion.
// Returns true only if both the value and the type are exactly the same.

console.log(5 == "5");   // true (type coercion: "5" is converted to number)
console.log(5 === "5");  // false (different types: number vs string)

console.log(0 == false); // true (false is coerced to 0)
console.log(0 === false); // false (number vs boolean)

console.log(null == undefined); // true (special case in JS)
console.log(null === undefined); // false (different types)
// Special Case: null == undefined
// When using ==, JavaScript has an internal rule that states:
// null and undefined are considered equal to each other but not to any other value.

console.log([] == 0);    // true (empty array is coerced to number 0)
// console.log([] === 0);   // false (array vs number)
