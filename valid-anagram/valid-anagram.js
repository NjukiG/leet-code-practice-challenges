/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // console.log(helper(s))
    // console.log(helper(t))
    // if(helper(s) === helper(t)){
    //     return true
    // }else{return false}

    let result = helper(s) === helper(t)
    return result
};

var helper = function (str) {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}