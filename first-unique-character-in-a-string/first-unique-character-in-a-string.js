/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
//     let unique = new Set()
    
//     for(let i = 0; i < s.length; i++){
//         let letter = s[i]
//         if(!unique.has(letter)){
//             unique.add(letter)
//         }
//     }
//     console.log(unique)
//     return unique
    
    let uniques = {}
    for(let letter of s){
        uniques[letter] = (uniques[letter] || 0) + 1
        // console.log(uniques)
    }
    
    for(let i = 0; i < s.length; i++){
        if(uniques[s[i]] === 1){
            // console.log(s[i])
            return i
        }
    }
    return -1
    
};