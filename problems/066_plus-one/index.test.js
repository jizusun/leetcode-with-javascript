const {run} = require('lib');
const index = require('./index');

const runTests = plusOne => {

  it('123 + 1 = 124', ()=> {
    const expected = [1, 2, 4];
    const nums = [1, 2, 3];
    const actual = plusOne(nums);
    expect(actual).toEqual(expected);
  });

  it('9 + 1  = 10', ()=> {
    const expected = [1, 0];
    const nums = [9];
    const actual = plusOne(nums);
    expect(actual).toEqual(expected);
  });

  it('19 + 1  = 20', ()=> {
    const expected = [2, 0];
    const nums = [1, 9];
    const actual = plusOne(nums);
    expect(actual).toEqual(expected);
  });
};
run(index, runTests);
