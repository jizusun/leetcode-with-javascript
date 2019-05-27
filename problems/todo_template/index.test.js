const {run} = require('lib');
const index = require('./index');

const runTests = (singleNumber) => {

  it('placeholder', ()=> {
    const expected = 1;
    const actual = singleNumber(nums); 
    expect(actual).toEqual(expected);
  });
};
run(index, runTests);
