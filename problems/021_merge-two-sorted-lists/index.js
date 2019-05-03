const {ListNode} = require('../../lib/LinkedList');

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode();
  let tail = dummyHead;
  while (l1!==null && l2!==null) {
    if (l1.val < l2.val)  {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  if (l1 === null)  {
    tail.next = l2;
  } else {
    tail.next = l1; 
  }
  return dummyHead.next;
};

module.exports = mergeTwoLists;
