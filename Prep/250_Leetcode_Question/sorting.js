// How to sort in JS using sorting function/built in lib
// To sort an array we have to use .sort() method, which is part of Array.prototype.sort
// if .sort(): with arguments, it will convert given array into string and sort in albhabetically
// to sort numbers, we have to pass comparator fun which will have two args: a,b
// .sort((a,b)=> a-b)
// if a-b = negative, a appear before b
// if a-b = positive, b appear before a
// if a-b = 0, order will remain same

// let arr = ['a','c','f','b']
// console.log(arr.sort());

// let arr = [4,2,1,6,3]
// console.log(arr.sort((a,b)=> a-b));

// we have given an arr which have 0s,1s,2s
// we have to sort it

// console.log(arr.sort((a,b)=>a-b))  // This is naive approach using sort fun

// have to do without using sort, 
/**
 * Approach: 1. Take the count of all 0s,1s,2s
 *           2. insert the 0s,1s,then 2s
 *           3. return the arr
 */

// function sort012(arr){
//     let c0=0,c1=0,c2=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === 0){
//             c0 +=1
//         }else if(arr[i] === 1){
//             c1 +=1
//         }else if(arr[i] === 2){
//             c2 +=1
//         }
//     }
    
//     let idx = 0;

//     for(let i=0;i<c0;i++)
//         arr[idx++] = 0
//     for(let i=0;i<c1;i++)
//         arr[idx++] = 1
//     for(let i=0;i<c2;i++)
//         arr[idx++] = 2
    
//     // return arr
//     // console.log(arr)
//     // console.log(`Count of 0s: ${c0},1s:${c1},2s:${c2}`)  
//     // return c0:c0,c1,c2;
    
// }
// let arr = [0,1,1,0,2,2,1,1,2,2,0,0,0,1,2,0,1,1,2,0,1]
// sort012(arr)
// console.log(arr)

/**
 * Time Complexity: O(2 * n), where n is the number of elements in the array
Auxiliary Space: O(1)

The issues with this approach are:

It would not work if 0s and 1s represent keys of objects.
Not stable
Requires two traversals

*/

// [Expected Approach] Dutch National Flag Algorithm – One Pass – O(n) Time and O(1) Space
// 

// Without using count

function sort012(arr){
    let lo=0,mid=0,hi=arr.length-1
    while(mid<=hi){
        if(arr[mid]===0){
            [arr[lo],arr[mid]] = [arr[mid],arr[lo]]
            lo++
            mid++
        }else if(arr[mid] === 1){
            mid++
        }else{
            [arr[mid],arr[hi]] = [arr[hi],arr[mid]]
            hi--
        }
    }
}
let arr = [0,1,1,0,2,2,1,1,2,2,0,0,0,1,2,0,1,1,2,0,1]
sort012(arr)
console.log(arr.join(' '))