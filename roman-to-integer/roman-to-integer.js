/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romanNums = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
    
    let result = 0
    for(let i = 0; i < s.length; i++){
        console.log(romanNums[s[i]])
        
        if(romanNums[s[i]] < romanNums[s[i + 1]]){
            result = result - romanNums[s[i]]
        }else{
            result = result + romanNums[s[i]]
        }
    }
    
    return result
    
};