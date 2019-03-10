const addTwoNumber = require('./index');
const {LinkedList} = require('../../lib/LinkedList');

/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order
 * and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.

 * You may assume the two numbers do not contain any leading zero,
 * except the number 0 itself.
 */


test('No carry, same amount of digits', () => {
  const listNode1 = new LinkedList([2, 4, 5]);
  const listNode2 = new LinkedList([5, 2, 4]);
  const actual = addTwoNumber(listNode1.head, listNode2.head);
  const expected = new LinkedList([7, 6, 9]);
  expect(actual).toEqual(expected.head);
});



test('With carry, same amount of digits', () => {
  const listNode1 = new LinkedList([2, 4, 3]);
  const listNode2 = new LinkedList([5, 6, 4]);
  const actual = addTwoNumber(listNode1.head, listNode2.head);
  const expected = new LinkedList([7, 0, 8]);
  expect(actual).toEqual(expected.head);
});


test('With carry, different amount of digits', () => {
  const listNode1 = new LinkedList([2, 4]);
  const listNode2 = new LinkedList([5, 6, 4]);
  const actual = addTwoNumber(listNode1.head, listNode2.head);
  const expected = new LinkedList([7, 0, 5]);
  expect(actual).toEqual(expected.head);
});
