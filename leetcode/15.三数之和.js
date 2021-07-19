/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 有序 + 双指针查找

var threeSum = function (nums) {
  const sorted = nums.sort((p, n) => (p > n ? 1 : -1));
  const groups = [];
  const cached = {};
  for (let i = 0; i < sorted.length - 2; i++) {
    const current = sorted[i];
    let pl = i + 1;
    let pr = sorted.length - 1;
    while (pl < pr) {
      const sum = sorted[pl] + sorted[pr] + current;
      if (sum > 0) {
        pr--;
      } else if (sum < 0) {
        pl++;
      } else {
        const next = [current, sorted[pl], sorted[pr]];
        const s = next.toString();
        if (!cached[s]) {
          groups.push(next);
          cached[s] = true;
        }
        pl++;
        pr--;
      }
    }
  }
  // return groups;
  return groups.map((g) => g.join(",")).join(" ; ");
};

console.log(threeSum([0, 0, 0, 0]));
