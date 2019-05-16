const {LinkedList, run} = require('lib');
const index = require('./index');

const runTests = (reverseList) => {

  it('normal case', ()=> {
    const linkedList = new LinkedList([1, 2, 3, 4, 5]);
    const expected = new LinkedList([5, 4, 3, 2, 1]);
    const actual = reverseList(linkedList.head);
    expect(actual).toEqual(expected.head);
  });

  it('array with only one element', ()=> {
    const linkedList = new LinkedList([1]);
    const expected = new LinkedList([1]);
    const actual = reverseList(linkedList.head);
    expect(actual).toEqual(expected.head);
  });

  it('empty array', ()=> {
    const linkedList = new LinkedList([]);
    const expected = new LinkedList([]);
    const actual = reverseList(linkedList.head);
    expect(actual).toEqual(expected.head);
  });

};
run(index, runTests);
