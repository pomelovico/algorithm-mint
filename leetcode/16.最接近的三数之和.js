/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  const sorted = nums.sort((a, b) => a - b);
  let min = Infinity;
  let ans = null;
  for (let i = 0; i < sorted.length - 2; i++) {
    const current = sorted[i];
    let pl = i + 1;
    let pr = sorted.length - 1;
    while (pl < pr) {
      const sum = sorted[pl] + sorted[pr] + current;
      if (sum > target) {
        pr--;
      } else if (sum < target) {
        pl++;
      } else {
        return target;
      }
      const t = Math.abs(sum - target);
      if (min > t) {
        ans = sum;
        min = t;
      }
    }
  }
  return ans;
};

console.log(threeSumClosest([0, 0, 0], 1));
