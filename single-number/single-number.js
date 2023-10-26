/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // console.log(nums)
   let obj = {}
   // console.log(object)
   
   for(let num of nums){
       if(obj[num]){
           obj[num]++
       }else{
           obj[num] = 1
   }
   }
    
    for(let item in obj){
        if(obj[item] === 1) return item
    }
    
    
    
   
   
   
};