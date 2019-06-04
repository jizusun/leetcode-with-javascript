const {run} = require('lib');
const index = require('./index');

const runTests = (strStr) => {

  it('should return 2 when we want to find ll in hello', ()=> {
    const haystack = 'hello';
    const needle = 'll';

    const expected = 2;
    const actual = strStr(haystack, needle);
    expect(actual).toEqual(expected);
  });

  it('should return -1 when we want to find bba in aaaa', ()=> {
    const haystack = 'aaaaa';
    const needle = 'bba';

    const expected = -1;
    const actual = strStr(haystack, needle);
    expect(actual).toEqual(expected);
  });

  it('should return 0 when we want to find an empty string', ()=> {
    const haystack = 'hello';
    const needle = '';

    const expected = 0;
    const actual = strStr(haystack, needle);
    expect(actual).toEqual(expected);
  });

};
run(index, runTests);
