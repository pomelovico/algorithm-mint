/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let cached = {};
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    const c = nums[i];
    nums[pre] = c;
    if (!cached[c]) {
      // 不存在
      pre++;
    }
    // 记录
    cached[c] = true;
  }
  // 截掉
  nums.length = pre;
  return pre;
};

console.log(removeDuplicates([2, 3, 4, 4, 4, 2, 3]));
