/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let array = new Array()
    for(let num of nums){
        if(array.includes(num)){
            return true
        }
        array.push(num)
        // console.log(array)
    }
    
    return false
    
};