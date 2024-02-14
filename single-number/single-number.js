/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // console.log(nums)
//    let obj = {}
   
//    for(let num of nums){
//        if(obj[num]){
//            obj[num]++
//        }else{
//            obj[num] = 1
//    }
//    }
    
//     for(let item in obj){
//         if(obj[item] === 1) return item
//     }
    
    let itemMap = new Map()
    
    for(let num of nums){
        itemMap.set(num, (itemMap.get(num) || 0) + 1)
    }
    
    for(let [key, count] of itemMap){
        if(count === 1) return key
    }
    
    return null
    
   
    
    
    
   
   
   
};