function twoSum(nums,target){
    let n = nums.length;
    // for(let i = 0; i< nums.length-1;i++){ // O(n)
    //     for(let j=i ; j<=nums.length-1;j++){ // O(n) * O(n) = 2*O(n)
    //         if(nums[i] + nums[j] == target){
    //             return [i,j];
    //         }
    //     }
    // }
    // Another approach is two pointer
    let l = 0, r = n-1;
    while (l < r) {
        if(nums[l]+nums[r] == target){
            return [l,r];
            
        }else{
            l++
           
        }
    }
}

let nums = [2,11,7,0,8,2,11,19,0,0], target = 9
console.log(twoSum(nums,target))

/**
 * Navie Approach: 1. take one loop from i = 0 -> n-1
 * 2. take j =1 -> n-1
 * 3. Do comparison (nums[i]+nums[j]== target) return [i,j]
 * 4. else return 0
 */