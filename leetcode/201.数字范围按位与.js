/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
  if (m.toString(2).length !== n.toString(2).length) {
    return 0;
  }
  while (m < n) {
    n = n & (n - 1);
  }
  return n;
};

console.log(rangeBitwiseAnd(8, 10));
