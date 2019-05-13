const {searchRange} = require('./index');

xit('normal case', ()=> {
  const nums = [5,7,7,8,8,10], target = 8
  const expected = [3,4];
  const actual = searchRange(nums, target);
  expect(actual).toEqual(expected);
});



xit('normal case', ()=> {
  const nums = [5,7,7,8,8,10], target = 6
  const expected = [-1,-1];
  const actual = searchRange(nums, target);
  expect(actual).toEqual(expected);
});






