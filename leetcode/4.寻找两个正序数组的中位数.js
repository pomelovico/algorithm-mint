/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const total = len1 + len2;
  const middle = Math.floor(total / 2 + 1);

  let count = 0,
    p1 = 0,
    p2 = 0,
    res = [];
  while (p1 < len1 || p2 < len2) {
    const a = nums1[p1];
    const b = nums2[p2];
    if (b === undefined || a < b) {
      p1++;
      res.push(a);
    } else if (a === undefined || a >= b) {
      p2++;
      res.push(b);
    }
    if (++count === middle) {
      return total % 2 ? res.pop() : (res.pop() + res.pop()) / 2;
    }
  }
};

console.log(findMedianSortedArrays([1, 2, 3], [5, 6, 7, 8, 9, 10, 11]));
