/*
---
created: 20190501
updated: 
  - 20190515
level: medium
tags: 
  - linked list
  - two pointers 
solutions: 
  - removeNthFromEnd 
    - runtime: 64 ms, beats 92.06% 
    - memory: 34 MB, beats 59.47%
  -	removeNthFromEndInOnePass 
    - runtime: 64 ms, beats 92.06%
    - memory: 34.2 MB, beats 21.68%
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
var removeNthFromEndInOnePass = function(head, n) {
  let dummyHead = new ListNode();
  dummyHead.next = head;
    
  let p = dummyHead, q = dummyHead;
  for (let i = 0; i < n; i++ ) {
    q = q.next;
  }
  while(q.next !== null) {
    p = p.next;
    q = q.next; 
  }
  p.next = p.next.next;
  return dummyHead.next;
};

module.exports = {
  removeNthFromEnd,
  removeNthFromEndInOnePass
};
