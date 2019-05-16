const {LinkedList} = require('../../lib/LinkedList');
const index = require('./index');

Object.entries(index)
  .forEach( ([name, removeNthFromEnd]) => {

    describe(`${name}`, () => {

      test('normal case', () => {
        const linkedList = new LinkedList([1, 2, 3, 4, 5]);
        const n = 2;
        const actual = removeNthFromEnd(linkedList.head, n);
        const expected = new LinkedList([1, 2, 3, 5]);
        expect(actual).toEqual(expected.head);
      });

      test('remove the only node', () => {
        const linkedList = new LinkedList([1]);
        const n = 1;
        const actual = removeNthFromEnd(linkedList.head, n);
        const expected = new LinkedList([]);
        expect(actual).toEqual(expected.head);
      });

      test('remove the actually first node', () => {
        const linkedList = new LinkedList([1, 2, 3, 4, 5]);
        const n = 5;
        const actual = removeNthFromEnd(linkedList.head, n);
        const expected = new LinkedList([2, 3, 4, 5]);
        expect(actual).toEqual(expected.head);
      });
    });
  });

