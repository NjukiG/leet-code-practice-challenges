/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // let newObj = {}
    // let result = []
    // console.log(nums1, nums2)
    // for(let num of nums1){
//         // console.log(num)
//         if(!newObj[num]){
//             newObj[num] = 1
//         }else{
//             newObj[num]++ 
//         }
//     }
//     // console.log(newObj)
    
//     for(let num of nums2){
//         if(newObj[num] > 0){
//             // console.log(newObj[num])
//             result.push(num)
//             newObj[num]--
//         }
//     }
//     // console.log(result)
//     return result
    
    let map1 = new Map()
    
    for(let num of nums1){
        map1.set(num, (map1.get(num) || 0) + 1)
    }
    
    let result = []
    
    for(let num of nums2){
        if(map1.has(num) && map1.get(num) > 0){
            result.push(num)
            map1.set(num, (map1.get(num) - 1))
        }
    }
    
    return result
};