/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    strs.sort()
    
    let common = ""
    let first = strs[0]
    let last = strs[strs.length - 1]
    
    for(let i = 0; i < first.length; i++){
        if(first[i] === last[i]){
            common = common + first[i]
            // console.log(common)
        }else{
            break;
        }
    }
    // console.log(strs, first, last, common)
    return strs.length === 0 ? "" : common
    
};