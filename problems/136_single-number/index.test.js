const {run} = require('lib');
const index = require('./index');

const runTests = (singleNumber) => {

  it('should return 1 when the nums is 2,2,1', ()=> {
    const nums = [2,2,1];
    const expected = 1;
    const actual = singleNumber(nums); 
    expect(actual).toEqual(expected);
  });

  it('should return 4 when the nums is 4,1,2,1,2', ()=> {
    const nums = [4,1,2,1,2];
    const expected = 4;
    const actual = singleNumber(nums); 
    expect(actual).toEqual(expected);
  });

  it('should return 0 when the nums is empty', ()=> {
    const nums = [];
    const expected = 0;
    const actual = singleNumber(nums); 
    expect(actual).toEqual(expected);
  });

};
run(index, runTests);
