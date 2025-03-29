
function sortArr(arr){
   return arr.sort((a,b)=> a-b);
}
function getMinMax(arr){
    sortArr(arr);
    let n = arr.length
    let min = arr[0]
    let max = arr[n-1]
    return {min,max}

}

    let arr =   [3, 2, 1, 56, 10000, 167]
    console.log(getMinMax(arr))