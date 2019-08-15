const {run} = require('lib');
const index = require('./index');

const runTests = (sort) => {

  it('should sort the array', ()=> {
    // const expected = 1;
    // const actual = singleNumber(nums); 
    // expect(actual).toEqual(expected);

    const nums = [10,5,3,8,2,6,4,7,9,1];
    const actual = sort(nums);
    const expected = [1,2,3,4,5,6,7,8,9,10];
    expect(actual).toEqual(expected);
  });

  it('should sort an empty array', () => {
  	const nums = [];
  	const actual = sort(nums);
  	const expected = [];
  	expect(actual).toEqual(expected);
  });
};


run(index, runTests);
