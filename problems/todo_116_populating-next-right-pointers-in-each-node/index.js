/*
---
created: 20190911
updated:
  -
source:
  - https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
level:
  - medium
description:
  - You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition: ...
tags:
  - Tree
  - Depth-first Search
solutions:
  -
    - runtime: ms, beats %
    - memory:  MB, beats %
---
*/


/**
 *  * // Definition for a Node.
 *   * function Node(val,left,right,next) {
 *    *    this.val = val;
 *     *    this.left = left;
 *      *    this.right = right;
 *       *    this.next = next;
 *        * };
 *         */
/**
 *  * @param {Node} root
 *   * @return {Node}
 *    */
var connect = function(root) {
      if(!root) return null;
      if(root.left){
                root.left.next = root.right;
                if(root.next)
                      root.right.next = root.next.left;
            }

      connect(root.left);
      connect(root.right);

     return root;
};

module.exports = {
  connect
};
