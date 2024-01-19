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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let values = []

    function inOrder(node) {
        if (node) {
            inOrder(node.left)
            values.push(node.val)
            inOrder(node.right)
        }
        return values
    }
    inOrder(root)

    for(let i = 1; i < values.length;i++){
        if(values[i] <= values[i - 1]){
            return false
        }
    }

    return true
};

