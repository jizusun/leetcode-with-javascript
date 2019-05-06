const removeDuplicates = require('./index');

it('normal case', ()=> {
  const nums = [1,1,2];
  const actual = removeDuplicates(nums);
  const expected = 2;
  expect(actual).toEqual(expected);
});

it('another normal case', ()=> {
  const nums = [0,0,1,1,1,2,2,3,3,4];
  const actual = removeDuplicates(nums);
  const expected = 5;
  expect(actual).toEqual(expected);
});

it('nums is an empty array', ()=> {
  const nums = [];
  const actual = removeDuplicates(nums);
  const expected = 0;
  expect(actual).toEqual(expected);
});

