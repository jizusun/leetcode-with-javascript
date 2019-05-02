const {ListNode} = require('../../lib/LinkedList');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let length = 0;
  let dummy = new ListNode();
  dummy.next = head;
  let p = dummy;
  while (p.next !== null) {
    length++;
    p = p.next;
  }
  
  let idx = length - n;  
  if (idx === 0) {
    return head.next;
  }
  p = dummy;
  for(let i = 0; i < idx; i++) {
    p = p.next;
  }
  p.next = p.next.next;
  return head;
};


module.exports = removeNthFromEnd;
