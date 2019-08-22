const {run} = require('lib');
const index = require('./index');

const runTests = (groupAnagrams) => {

  it('normal case', () => {
  	const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  	const expected = [
  	  ['ate','eat','tea'],
  	  ['nat','tan'],
  	  ['bat']
  	].map(arr => arr.sort());
  	const actual = groupAnagrams(strs).map(arr => arr.sort());
  	expect(actual).toEqual(expected);
  });

  it('empty array', () => {
    const strs = [];
    const expected = [].map(arr => arr.sort());
    const actual = groupAnagrams(strs).map(arr => arr.sort());
    expect(actual).toEqual(expected);
  });

};

run(index, runTests);
