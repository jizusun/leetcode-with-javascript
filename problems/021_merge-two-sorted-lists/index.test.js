const mergeTwoLists = require('./index');
const {LinkedList} = require('../../lib/LinkedList');


it('normal case', ()=> {
  const l1 = new LinkedList([1, 2, 4]);
  const l2 = new LinkedList([1, 3, 4]);
  const actual = mergeTwoLists(l1.head, l2.head);
  const expected = new LinkedList([1, 1, 2, 3, 4, 4]);
  expect(actual).toEqual(expected.head);
});

it('both of the linked lists is empty', ()=> {
  const l1 = new LinkedList([]);
  const l2 = new LinkedList([]);
  const actual = mergeTwoLists(l1.head, l2.head);
  const expected = new LinkedList([]);
  expect(actual).toEqual(expected.head);
});

it('one linked list is greater than another', ()=> {
  const l1 = new LinkedList([1, 2, 3]);
  const l2 = new LinkedList([8, 9]);
  const actual = mergeTwoLists(l1.head, l2.head);
  const expected = new LinkedList([1, 2, 3, 8, 9]);
  expect(actual).toEqual(expected.head);
});
