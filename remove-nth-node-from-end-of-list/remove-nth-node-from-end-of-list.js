/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode()
    dummy.next = head

    let firstPointer = dummy
    let secondPointer = dummy

    // Move the second pointer ahead by n times
    for(let i = 0; i < n; i++){
        secondPointer = secondPointer.next
    }
    // After moving the second pointer till it's one ahead of n node, now lets start moving both pointers
    while(secondPointer.next){
        firstPointer = firstPointer.next
        secondPointer = secondPointer.next
    }

    //  Now if second's next hits null, we move the first to bypass its next
    firstPointer.next = firstPointer.next.next

    return dummy.next
};