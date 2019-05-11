/*
---
created: 20190510
updated: 
  - 20190511
tags: 
  - recursive
  - linked list
solutions: 
  - reverseList
    - runtime: 52 ms, beats 99.80%
    - memory: 35 MB, beats 47.37%
  - reverseListRecursive
    - runtime: 60 ms, beats 98.89%
    - memory: 35.4 MB, beats 15.38%
---
*/

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
 * @return {ListNode}
 */

var reverseList = function(head) {
  const dummyHead = new ListNode();
  dummyHead.next = null;

  while (head) {
    const t = dummyHead.next;
    dummyHead.next = head;
    head = head.next;
    dummyHead.next.next = t;
  }
  return dummyHead.next;
};

var reverseListRecursive = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  const result = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return result;
};

module.exports = {
  reverseList,
  reverseListRecursive
};
