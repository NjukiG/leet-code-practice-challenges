/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let maxSummed = nums[0]
    let currentMax = nums[0]
    
    for(let i = 1; i < nums.length; i++){
        currentMax = Math.max(nums[i], nums[i] + currentMax)
        maxSummed = Math.max(currentMax, maxSummed)
    }
    
    return maxSummed
    
};