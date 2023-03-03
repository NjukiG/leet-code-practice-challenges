/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    for(let i = 0; i < nums.length; i++){
        let lower = i
        
        for(let j = i+1; j < nums.length; j++){
            if(nums[j] < nums[lower])
                lower = j
        }
        let tempNum = nums[i]
        nums[i] = nums[lower]
        nums[lower] = tempNum
    }
    return nums
    
};