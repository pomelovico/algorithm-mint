const countSubString = (s) => {
  let maxStr = "",
    maxLen = 0;
  for (let i = 0; i < 2 * s.length - 1; i++) {
    let start = Math.floor(i / 2);
    let end = start + (i % 2);
    let len = 0;
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      len = end - start + 1;
      start--;
      end++;
    }
    if (maxLen < len) {
      maxStr = s.slice(start + 1, end);
      maxLen = len;
    }
  }
  return maxStr;
};

console.log(countSubString("babad"));
