/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let result = []
  let carry = 1;

  for(let i = digits.length - 1; i >= 0; i--){
      let sum = digits[i] + carry;
      result.unshift(sum % 10)
      carry= Math.floor(sum / 10)
  }

  if(carry > 0){
      result.unshift(carry)
  }


  return result
};