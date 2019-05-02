/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const arr = s.split('');
  
  const isSameType = (open, close) => {
    const pairs = {
      ')': '(',
      '}': '{',
      ']': '['  
    };
    const expectedOpen = pairs[close];
    return (expectedOpen === open);
  };
  
  for (let ch of arr) {
    if (stack.length > 0) {
      const top = stack[stack.length-1];
      if ( isSameType(top, ch) ) {
        stack.pop(); 
      }
      else {
        stack.push(ch);
      }
    } else {
      stack.push(ch);
    }
  }
  
  return stack.length === 0;
};


module.exports = isValid;
