/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
};
const letterCombinations = function (digits) {
  digits = digits.split("").map((n) => Number(n));
  const len = digits.length;
  const ans = [];
  const traverse = (str, depth) => {
    if (depth === len) {
      // 到底
      str && ans.push(str);
      return;
    }
    const digit = digits[depth];
    const letters = map[digit];
    for (let i = 0; i < letters.length; i++) {
      traverse(str + letters[i], depth + 1);
    }
  };
  traverse("", 0);
  return ans;
};

console.log(letterCombinations("23"));
