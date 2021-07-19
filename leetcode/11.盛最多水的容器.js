/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0,
    r = height.length - 1,
    max = -1;
  while (l < r) {
    const left = height[l];
    const right = height[r];
    if (left < right) {
      max = Math.max(max, (r - l) * left);
      l++;
    } else {
      max = Math.max(max, (r - l) * right);
      r--;
    }
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
