const removeElement= require('./index');

it('normal case', ()=> {
  const actual = removeElement([3,2,2,3], 3);
  const expected = 2;
  expect(actual).toEqual(expected);
});

it('another normal case', ()=> {
  const actual = removeElement([0,1,2,2,3,0,4,2], 2);
  const expected = 5;
  expect(actual).toEqual(expected);
});

