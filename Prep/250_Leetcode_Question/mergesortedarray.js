function mergesortArr(nums1, m, nums2, n) {
    let arr = []
    arr =  nums1.concat(nums2)
    console.log(arr)
//    return arr.sort((a,b)=> a-b)
 };

 let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
 mergesortArr(nums1,nums2,m,n)
//  console.log(nums1)