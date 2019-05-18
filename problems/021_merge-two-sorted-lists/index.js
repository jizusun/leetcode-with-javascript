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
  dummyHead.tail = null;
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
    tail.next = null;
  }
  tail.next = l1 || l2;
  return dummyHead.next;
};

var mergeTwoListsRecursive = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;

  if (l1.val > l2.val ) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  } else {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }
};

module.exports = {
  mergeTwoLists,
  mergeTwoListsRecursive
};
