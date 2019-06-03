const {run} = require('lib');
const index = require('./index');

const runTests = (myAtoi) => {

  it('42 => 42', ()=> {
    const str = '42';
    const expected = 42;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });

  it('4193 with words => 4193', ()=> {
    const str = '4193 with words';
    const expected = 4193;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });

  it('   -42 => -42', ()=> {
    const str = '   -42';
    const expected = -42;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });

  it('+1 => 1', ()=> {
    const str = '+1';
    const expected = 1;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });

  it('-+1 => 0', ()=> {
    const str = '-+1';
    const expected = 0;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });

  it(' => 0', ()=> {
    const str = '';
    const expected = 0;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });

  it('words and 987 => 0', ()=> {
    const str = 'words and 987';
    const expected = 0;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });


  it('-91283472332 => -2147483648', ()=> {
    const str = '-91283472332';
    const expected = -2147483648;
    const actual = myAtoi(str);
    expect(actual).toEqual(expected);
  });


};

run(index, runTests);
