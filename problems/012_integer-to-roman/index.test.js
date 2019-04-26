const intToRoman = require('./index');


it('3 => III', () => {
  const num = 3;
  const	actual = intToRoman(num);
  const expected = 'III';
  expect(actual).toEqual(expected);
});

it('9 => IX', () => {
  const num = 9;
  const	actual = intToRoman(num);
  const expected = 'IX';
  expect(actual).toEqual(expected);
});


it('58 => LVIII', () => {
  const num = 58;
  const	actual = intToRoman(num);
  const expected = 'LVIII';
  expect(actual).toEqual(expected);
});



it('1994 => MCMXCIV', () => {
  const num = 1994;
  const	actual = intToRoman(num);
  const expected = 'MCMXCIV';
  expect(actual).toEqual(expected);
});
