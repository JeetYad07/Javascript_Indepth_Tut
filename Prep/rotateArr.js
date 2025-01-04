// 

// function reverseArrfirst(arr){
//     let l = 0, r = arr.length - 1
//     while(l<r){
//         [arr[l],arr[r]] =  [arr[r],arr[l]]
//         l++;
//         r--;
//     }
//     return arr;
// }
// function reverseArrSecond(arr){
//     let l = 1, r = arr.length - 1
//     while(l<r){
//         [arr[l],arr[r]] =  [arr[r],arr[l]]
//         l++;
//         r--;
//     }
//     return arr;
// }
// function rotateArr(arr){
//     arr =  reverseArrfirst(arr)
//    return reverseArrSecond(arr)
// }

// let arr = [1,2,3,4]
// console.log(rotateArr(arr))

//  The above approach is traversing twice: O(n) + (n-1) = 2(n) => O(n)
// Aux space: O(1)

// Another approach is
// function rotateArr(arr){
//     let n = arr.length
//     let firstVal = arr[n-1];
//     for(let i = n-1; i > 0; i--){
//         arr[i] = arr[i-1]
//     }
//     arr[0] = firstVal
//     return arr
// }

// let arr = [1,2,3,4]
// console.log(rotateArr(arr))
// Timecomplexity: O(n), space complexity: O(1)

// another approach using two pointer

function rotateArr(arr){
    let l = 0; r = arr.length - 1;
    while(l<r){
        [arr[l],arr[r]] = [arr[r],arr[l]]
        l++;
    }
    return arr
}
let arr = [1,2,3,4]
console.log(rotateArr(arr))