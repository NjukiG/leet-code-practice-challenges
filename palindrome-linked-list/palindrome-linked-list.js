/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true
    
    let pointer1 = head
    let pointer2 = head
    
    while(pointer2.next && pointer2.next.next){
        pointer1 = pointer1.next
        pointer2 = pointer2.next.next
    }
    
    let secondHalf = reversed(pointer1.next)
    
    let firstHalf = head
    
    while(secondHalf){
        if(firstHalf.val !== secondHalf.val){
            return false
        }
        firstHalf = firstHalf.next
        secondHalf = secondHalf.next
    }
    
    return true
    
};


function reversed(head){
    let prev = null
    let current = head
    
    while(current){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}