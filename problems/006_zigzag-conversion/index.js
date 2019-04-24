/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows === 1) {
    return s;
  }
  const rows = Math.min(numRows, s.length);
  const arr = new Array(rows).fill('');
  let col = 0, goingDown = false;
  [...s].forEach( c => {
    arr[col] += c;
    if(col === 0 || col === rows-1) { 
      goingDown = !goingDown;
    }
    col = goingDown ? col+1 : col-1;
  }); 
  const result = arr.join('');
  return result;
};


module.exports = convert;
