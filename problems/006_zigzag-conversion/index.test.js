const convert = require('./index');

it('normal case 1', () => {
  const s = 'PAYPALISHIRING', numRows = 3;
  const expected = 'PAHNAPLSIIGYIR';
  const actual = convert(s, numRows);
  expect(actual).toEqual(expected);
});

it('normal case 2', () => {
 	const s = 'PAYPALISHIRING', numRows = 4;
  const expected = 'PINALSIGYAHRPI';
  const actual = convert(s, numRows);
  expect(actual).toEqual(expected);
});


it('empty string as input', () => {
 	const s = '', numRows =3;
  const expected = '';
  const actual = convert(s, numRows);
  expect(actual).toEqual(expected);
});

it('numRows is larger than the length of the string', () => {
 	const s = 'abc', numRows = 6;
  const expected = 'abc';
  const actual = convert(s, numRows);
  expect(actual).toEqual(expected);
});

