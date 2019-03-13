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
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1, q = l2, current = dummyHead;
  let carry = 0;
  // 245 + 524 = 769
  while (p || q) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;
    const sum = carry + x + y;
    current.next = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    current = current.next;
    if (p) {
      p = p.next;
    }
    if (q) {
      q = q.next;
    }
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};

module.exports = addTwoNumbers;

// https://leetcode.com/problems/add-two-numbers/discuss/151365/Concise-JavaScript-solution