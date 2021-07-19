/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let prev = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[prev] = nums[i];
    if (nums[i] !== val) {
      prev++;
    }
  }
  nums.length = prev;
  return nums.length;
};

const nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
console.log(nums);
