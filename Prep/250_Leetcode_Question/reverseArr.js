// Reverse a given array:

// [1,2,3,4] : [4,3,2,1]

// This can be solved using two ways:
// Brute force approach"
// 1. Take temperoray arr
// pass all the arr values from end to temp arr
// return the temp arr
// function reverseArr(arr){
//     let n = arr.length;
//     let arr1 = []
//     for(let i = 0;i<n;i++){
//         arr1[i] = arr[n-i-1]
//     }
//     return arr1;
// }

// let arr = [1,2,3,4]
// console.log(reverseArr(arr))

// The above approach is having Time Complexity: O(n) and Space complexity: O(n) 

// function reverseArr(arr){
//     // Edge case if only 1 array is there
//     if(arr.length === 1) return arr;
//     let l = 0, r = arr.length-1;
//     while(l<r){
//         // swap the array: we can do it without using extra space
//         // by using array Destructuring
//         [arr[l],arr[r]] = [arr[r],arr[l]];
//         l++;
//         r--;
//     }
//     return arr;
// }

// let arr = [1]
// console.log(reverseArr(arr))

// This approach will run in O(n): Time complexity
// Space: O(1)