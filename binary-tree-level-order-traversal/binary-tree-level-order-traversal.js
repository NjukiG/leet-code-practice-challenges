/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let queau = []
    let result = []
    
    queau.push(root)
    
    while(queau.length){
        let currentLevel = []
        let currentSize = queau.length
        
        for(let i = 0; i < currentSize; i++){
            let current = queau.shift()
            currentLevel.push(current.val)
            
            if(current.left) queau.push(current.left)
            if(current.right) queau.push(current.right)
        }
        result.push(currentLevel)
     
    }
    
    return result
};