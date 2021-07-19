/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length <= 1) {
    return false;
  }
  const ss = s + s;
  return ss.indexOf(s, 1) !== ss.lastIndexOf(s);
};

console.log(repeatedSubstringPattern("abcabcabcd"));
