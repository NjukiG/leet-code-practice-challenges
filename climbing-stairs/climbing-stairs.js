/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    // console.log(n)
// It's almost like fibonacci
    let ways = [1, 2]

    for (let i = 2; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }
    // console.log(ways)
    return ways[n - 1]

};