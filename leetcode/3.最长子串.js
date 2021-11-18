const lengthOfLongestSubstring = (s) => {
  const sArr = s.split('');
  const map = {};
  let max = 0;
  for (let end = 0, start = 0; end < sArr.length; end++) {
    const letter = sArr[end];

    if (letter in map) {
      start = Math.max(map[letter] + 1, start);
    }
    max = Math.max(end - start + 1, max);
    map[letter] = end;
  }

  return max;
};

const lengthOfLongestSubstring2 = (s) => {
  const sArr = s.split('');
  let i = 0;
  let j = 0;
  let max = 0;
  let set = new Set();
  while (i < sArr.length && j < sArr.length) {
    if (!set.has(sArr[j])) {
      set.add(sArr[j++]);
      max = Math.max(max, j - i);
    } else {
      set.delete(sArr[i++]);
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcabcdba'));
console.log(lengthOfLongestSubstring2('abcabcdba'));
