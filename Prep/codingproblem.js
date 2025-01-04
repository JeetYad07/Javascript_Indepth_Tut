// Write a JavaScript function to calculate the sum of two numbers. 
// function sum(n1,n2){
//     return n1+n2;
// }

// console.log(sum(2,2))

// Write a JavaScript program to find the maximum number in an array. 

// console.log(Math.max(...arr))
/**
 * Math.max(): it is not taking directly an array, that is why we have used the spread oper
 * which open the each element from an array, Math.max(...arr):Math.max(2,3,4,5,7)
 */
let temp=0;
// Have O(n^2) time complexity
for(let i =0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++)
    if(arr[i]<arr[j]){
        temp = j;
    }else if(arr[i]>arr[j]){
            temp = i;
    }
}
// O(n)
// let temp=0;
// for(let i =1;i<arr.length;i++){ // iteration happening from i=1 to n-1: 
        
//         if(arr[0]<arr[i]) // This comp: taking O(1) time
//         {  // 2,1,3,5
//             temp = i;
//         }else if(arr[0]>arr[i]){
//                 temp = 0;
//         }
//     } 

//    Time complexity  O(1) * O(n-1) = O(n-1) : O(n)
// Used only one variable: temp : O(1)
// let arr = [2,3,9,5,7];
// let start = 0, end = arr.length - 1, mid = (start + end)/2;
// while(start<=end){
//     if(arr[start]<arr[end]){
//         mid = start;
//         start++;
//         end--;
//     }else{
//         mid = end;
//         start++;
//         end--;
//     }
// }

// console.log(arr[mid])

// Write a JavaScript function 
// to check if a given string is a palindrome (reads the same forwards and backwards).
// const str = 'malayalam'
// console.log(str.charAt(0))
// let str1 = ''
// for(let i = str.length-1;i>=0;i--){  // Time complexity: O(n),Spcace complexity:O(n)
//     str1 += str[i]
//     // console.log(str1)
// }
// console.log(str1);
// console.log(str1 === str ? 'True':'false')
// function isPaindrom(str){
//     return str === str.split('').reverse().join('');
// }

// console.log(isPaindrom('malayalam'))