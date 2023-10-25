/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let newObj = {}
    let result = []
    // console.log(nums1, nums2)
    for(let num of nums1){
        // console.log(num)
        if(!newObj[num]){
            newObj[num] = 1
        }else{
            newObj[num]++ 
        }
    }
    // console.log(newObj)
    
    for(let num of nums2){
        if(newObj[num] > 0){
            // console.log(newObj[num])
            result.push(num)
            newObj[num]--
        }
    }
    // console.log(result)
    return result
};