const reverse = require('./index');

it('1534236469 => 0', ( ) => {
  const x = 1534236469;
  const expected = 0;
  const actual = reverse(x);
  expect(actual).toEqual(expected);
});



it('123 => 321', ( ) => {
  const x = 123;
  const expected = 321;
  const actual = reverse(x);
  expect(actual).toEqual(expected);
});

it('-123 => -321', ( ) => {
  const x = -123;
  const expected = -321;
  const actual = reverse(x);
  expect(actual).toEqual(expected);
});

it('120 => 21', ( ) => {
  const x = 120;
  const expected = 21;
  const actual = reverse(x);
  expect(actual).toEqual(expected);
});
