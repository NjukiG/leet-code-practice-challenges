/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let missing = []
    
    nums.sort((a, b) => a - b)
    
    // console.log(nums)
    if(nums[0] !== 0) return 0
    
    for(let i = 0; i < nums.length; i++){
        // console.log(nums[i])
        if(nums[i] + 1 !== nums[i+1]){
            missing.push(nums[i] + 1)
        }
    }
    return missing[0]
};