/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 2) return nums[0];
    let totalLoot = [];

    totalLoot[0] = nums[0];
    totalLoot[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        totalLoot[i] = Math.max(totalLoot[i - 2] + nums[i], totalLoot[i - 1]);
    }

    return totalLoot[totalLoot.length - 1];
};