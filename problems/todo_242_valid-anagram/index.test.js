const {run} = require('lib');
const index = require('./index');

const runTests = (isAnagram) => {

  it('should return true if t is an anagram of s', ()=> {
		const s = "anagram", t = "nagaram"
    const expected = true;
    const actual = isAnagram(s, t); 
    expect(actual).toEqual(expected);
  });
};

  it('should return false if t is not an anagram of s', ()=> {
		const s = "rat", t = "cat"
    const expected = false;
    const actual = isAnagram(s, t); 
    expect(actual).toEqual(expected);
  });
};

run(index, runTests);
