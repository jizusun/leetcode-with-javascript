const {run} = require('lib');
const index = require('./index');

const runTests = divide => {

  it(' 10 / 3 = 3', ()=> {
    const expected = 3;
    const actual = divide(10, 3);
    expect(actual).toEqual(expected);
  });

  
  it(' 7 / -3 = -2', ()=> {
    const expected = -2;
    const actual = divide(7, -3);
    expect(actual).toEqual(expected);
  });

  it(' 0 / 1 = 0', ()=> {
    const expected = 0;
    const actual = divide(0, 1);
    expect(actual).toEqual(expected);
  });

  it('2147483647 / 1 = 2147483647', ()=> {
    const expected = 2147483647;
    const actual = divide(2147483647, 1);
    expect(actual).toEqual(expected);
  });

  it('-2147483648 / -1 = 2147483647', ()=> {
    const expected = 2147483647;
    const actual = divide(-2147483648, -1);
    expect(actual).toEqual(expected);
  });

  it('-2147483648 / 1 = -2147483648', ()=> {
    const expected = -2147483648;
    const actual = divide(-2147483648, 1);
    expect(actual).toEqual(expected);
  });


  it(' 1 / 1 = 1', ()=> {
    const expected = 1;
    const actual = divide(1, 1);
    expect(actual).toEqual(expected);
  });

  
  it(' 2147483647 / 2 = 1073741823', ()=> {
    const expected = 1073741823;
    const actual = divide(2147483647, 2);
    expect(actual).toEqual(expected);
  });

};

run(index, runTests);
