/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length === 0) {
    return prefix;
  }

  const minLen = strs.reduce(
    (min, next) => Math.min(min, next.length),
    Infinity
  );
  for (let i = 0; i < minLen; i++) {
    let c = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== c) {
        return prefix;
      }
    }
    prefix += c;
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
