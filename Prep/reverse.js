// Reverse a string without using reverse() method

// function reverseString(str){
//     let reverse = '';
//     for(let i = str.length - 1;i>=0;i--){
//         reverse += str[i];
//     }
// console.log(reverse)
// }

// reverseString('jeet')
/**
 * Time complexity for this function is O(n)
 * Space complexity: O(1)
 */

// Reverse a string using reverse method
// split(): will convert the string into array
// .reverse() will reverse the array
// .join('') will join the char of array into string
// function reverseString(str){
//    return str.split('').reverse().join('');

// }

// console.log(reverseString('teej'))

// using recersion: reverse a string
function reverseStringRec(str){
    if(str.length <= 1) return str;
    return reverseStringRec(str.slice(1)) + str[0]
}
console.log(reverseStringRec('Jeet'))