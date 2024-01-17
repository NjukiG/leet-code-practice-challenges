/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let myStack = []

    for(let char of s){
        if(char === "("){
            myStack.push(")")
        }else if(char === "["){
            myStack.push("]")
        }else if(char === "{"){
            myStack.push("}")
        }else if(myStack.length === 0 || myStack.pop() !== char){
            return false
        }
    }
        return myStack.length === 0
    
};