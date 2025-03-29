// using extra array, without using 
function removeDuplicates(arr){
    // let arr = Array.from(str)
    let arr1 = [];
    for(let i = 0; i < arr.length; i++){
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i])
        }
        
    }
    return arr1.join(',');
   
}
// 0 
// const str = "123412";
let arr = [1,2,1,0,2,3]
console.log(removeDuplicates(arr));