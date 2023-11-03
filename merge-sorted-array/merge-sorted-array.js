/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    if(n === 0){
        return nums1
    }
    
    for (let i = 0, j = m; i < nums2.length && j < nums1.length; i++, j++){
            nums1[j] = nums2[i]
        }
    
    return nums1.sort((x, y) => {
        return x - y
    })
    
};