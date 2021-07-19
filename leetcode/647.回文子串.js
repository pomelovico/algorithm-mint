const isSubString = (s, start, end) => {
  if (start === end) {
    return true;
  }
  while (start <= end) {
    if (s[start++] !== s[end--]) {
      return false;
    }
  }
  return true;
};

const countSubString = (s) => {
  let count = 0;
  for (let i = 0; i < 2 * s.length - 1; i++) {
    let start = Math.floor(i / 2);
    let end = start + (i % 2);
    while (start >= 0 && end < s.length && s[start--] === s[end++]) {
      count++;
    }
  }
  return count;
};

console.log(countSubString("abc"));
