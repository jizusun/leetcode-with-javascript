const nextPermutation = require('./index');

it('normal case', ()=> {
  const nums = [1,2,3];
  const expected = [1,3,2];
  nextPermutation(nums);
  expect(nums).toEqual(expected);
});

it('another normal case', ()=> {
  const nums = [1,1,5];
  const expected = [1,5,1];
  nextPermutation(nums);
  expect(nums).toEqual(expected);
});

it('should first swap, then revert the right side of the peak', ()=> {
  const nums = [1,2,8,7,5];
  const expected = [1,5,2,7,8];
  nextPermutation(nums);
  expect(nums).toEqual(expected);
});

it('If such arrangement is not possible, it must rearrange it as the lowest possible order ', ()=> {
  const nums = [3,2,1];
  const expected = [1,2,3];
  nextPermutation(nums);
  expect(nums).toEqual(expected);
});

