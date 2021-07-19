/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 可使用 KMP 实现该算法

// 实现 indexOf 「偏移法」
var strStr = function (haystack, needle) {
  if (needle === "") {
    return 0;
  }
  const offsetTable = {};
  needle.split("").forEach((s, i) => {
    offsetTable[s] = needle.length - i;
  });

  // 查找
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] === needle[j]) {
        if (j === needle.length - 1) {
          // 找到了
          return i;
        }
      } else {
        // 不匹配
        i = (offsetTable[haystack[i + needle.length]] || 1) + i - 1;
        break;
      }
    }
  }

  return -1;
};

console.log(strStr("a", "a"));
