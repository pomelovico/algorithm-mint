const lengthOfLongestSubstring = (s) => {
  const sArr = s.split("");
  // let max = 0;
  // let tempQueue = [];
  // for (let i = 0; i < sArr.length; i++) {
  //   const next = sArr[i];
  //   const index = tempQueue.indexOf(next);
  //   if (index !== -1) {
  //     tempQueue = tempQueue.slice(index + 1);
  //     i--;
  //   } else {
  //     tempQueue.push(next);
  //     max = Math.max(tempQueue.length, max);
  //   }
  // }
  // return max;
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

console.log(lengthOfLongestSubstring("abcabcdb"));
