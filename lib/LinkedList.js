class ListNode {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(args) {
    // new LinkedList()
    this.tail = null;
    this.head = null;
    this.length = 0;
    // new LinkedList([1, 2, 3])
    if(args) {
      const list = [...args];
      list.forEach(val => {
        this.push(val);
      });
    }
  }


  push(val) {
    const node = new ListNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }
}

module.exports = {
  ListNode,
  LinkedList
};
