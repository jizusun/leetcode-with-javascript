const {ListNode, LinkedList} = require('./LinkedList');

test('The value of a ListNode and its next node can be accessed', () => {
  const firstValue = 100;
  const secondValue = 200;
  const firstNode = new ListNode(firstValue);
  firstNode.next = new ListNode(secondValue);

  expect(firstNode.val).toBe(firstValue);
  expect(firstNode.next.val).toBe(secondValue);
});


test('An empty LinkedList should have both its head and tail as null, and its length as 0', () => {
  const emptyLinkedList = new LinkedList();

  expect(emptyLinkedList.head).toBe(null);
  expect(emptyLinkedList.tail).toBe(null);
  expect(emptyLinkedList.length).toBe(0);
});

test('A LinkedList constructed with an array should have all the elements pushed', () => {
  const arr = [1, 3, 5];
  const linkedList = new LinkedList(arr);

  expect(linkedList.length).toBe(3);
  expect(linkedList.head.val).toBe(1);
  expect(linkedList.head.next.val).toBe(3);
  expect(linkedList.head.next.next.val).toBe(5);
  expect(linkedList.head.next.next.next).toBe(null);
});

test('Should make head and tail as this element if the LinkedList to be pushed is empty', () => {
  const l = new LinkedList();
  l.push(2);
  expect(l.head.val).toBe(2);
  expect(l.tail.val).toBe(2);
  expect(l.length).toBe(1);
});

test('Should make the tail as the element if the LinkedList to be push is not empty', () => {
  const l = new LinkedList();
  l.push(1);
  l.push(3);
  expect(l.tail.val).toBe(3);
  expect(l.length).toBe(2);
});