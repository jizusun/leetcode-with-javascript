const {run} = require('lib');
const index = require('./index');

const runTests = isIsomorphic => {

  it('egg & add is isomorphic ', ()=> {
    const expected = true;
    const actual = isIsomorphic('egg', 'add');
    expect(actual).toEqual(expected);
  });

  it('foo & bar is NOT isomorphic ', ()=> {
    const expected = false;
    const actual = isIsomorphic('foo', 'bar');
    expect(actual).toEqual(expected);
  });

  it('paper & title is isomorphic ', ()=> {
    const expected = true;
    const actual = isIsomorphic('paper', 'title');
    expect(actual).toEqual(expected);
  });

  it('ab & ca is isomorphic ', ()=> {
    const expected = true;
    const actual = isIsomorphic('ab', 'ca');
    expect(actual).toEqual(expected);
  });

  it('ab & aa is isomorphic ', ()=> {
    const expected = false;
    const actual = isIsomorphic('ab', 'aa');
    expect(actual).toEqual(expected);
  });


};
run(index, runTests);
