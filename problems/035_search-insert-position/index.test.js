const searchInsert= require('./index');

/*



*/
it('should return the index if the target is found', ()=> { 
  const nums = [1,3,5,6], target = 5;
  const expected = 2;
  const actual = searchInsert(nums, target);
  expect(actual).toEqual(expected);
});

it('should return the index where it would be if it were inserted in order', ()=> { 
  const nums = [1,3,5,6], target = 2;
  const expected = 1;
  const actual = searchInsert(nums, target);
  expect(actual).toEqual(expected);
});

it('should return the index where it would be if it were inserted in order, when the index is at the end', ()=> { 
  const nums = [1,3,5,6], target = 7;
  const expected = 4;
  const actual = searchInsert(nums, target);
  expect(actual).toEqual(expected);
});

it('should return the index where it would be if it were inserted in order, when the index is at the beginning', ()=> { 
  const nums = [1,3,5,6], target = 0;
  const expected = 0;
  const actual = searchInsert(nums, target);
  expect(actual).toEqual(expected);
});

