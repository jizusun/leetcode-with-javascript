// sample 52 ms submission

var divide = function(dvd, dvs) {
  const IntMax = 2 ** 31 - 1;
  const IntMin = -(IntMax + 1);
  if (dvs === 0 || (dvd === IntMin && dvs === -1)) {
    return IntMax;
  }
  if (dvs === 1) return dvd;
  if (dvs === dvd) return 1;
  const pos = dvd > 0 && dvs > 0 || dvd < 0 && dvs < 0;
  dvd = Math.abs(dvd);
  dvs = Math.abs(dvs);
  let ret = 0;
  while (dvd >= dvs) {
    let digit = 0;
    while (dvd >= (dvs << digit) && (dvs << digit) > 0) {
      digit++;
    }
      
    ret += 1 << (digit - 1);
    dvd -= (dvs << (digit - 1));
      
  }
  return pos ? ret : -ret;
};

module.exports = divide;