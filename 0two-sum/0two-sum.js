/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let indices = {}
  for (let i = 0; i < nums.length; i++) {
    let currentValue = nums[i]
    let targetValue = target - currentValue
    let targetIndex = indices[targetValue]
    if(targetIndex != null){
      return [targetIndex,i]
    }else{
      indices[currentValue] = i
    }
  }
  return indices
};