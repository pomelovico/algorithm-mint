/**
 * @param {string} s
 * @return {number}
 */

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const bitMap = {
  V: 1,
  X: 1,
  L: 10,
  C: 10,
  D: 100,
  M: 100,
};

const specialCase = {
  I: ["V", "X"],
  X: ["L", "C"],
  C: ["D", "M"],
};

const specialCaseMap = {
  V: 4,
  L: 4,
  D: 4,
  X: 9,
  C: 9,
  M: 9,
};

var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const next = s[i + 1];
    if (["I", "X", "C"].includes(char)) {
      if (specialCase[char].includes(next)) {
        sum += specialCaseMap[next] * bitMap[next];
        i++;
        continue;
      }
    }
    sum += map[char];
  }

  return sum;
};

console.log(romanToInt("MCMXCIV"));
