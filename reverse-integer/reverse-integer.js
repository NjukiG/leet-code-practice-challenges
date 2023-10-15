/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversedInt = x.toString().split("").reverse().join("")
    // console.log(reversedInt)
    let answer = parseInt(reversedInt) * Math.sign(x)
    if (answer < Math.pow(-2, 31) || answer > Math.pow(2, 31) - 1) {
    return 0;
  }
    
    return answer
    
};