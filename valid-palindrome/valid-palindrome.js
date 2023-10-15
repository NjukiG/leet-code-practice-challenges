/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let pal = s.toLowerCase().replace(/[^a-z0-9]/g, "")

    let reversed = pal.split("").reverse().join("")

    return reversed === pal
};