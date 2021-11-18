const findDuplicateNums = (nums) => {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let n = Math.abs(nums[i]);
    if (nums[n - 1] < 0) {
      res.push(n);
    } else {
      nums[n - 1] = -nums[n - 1];
    }
  }

  return res;
};

console.log(findDuplicateNums([4, 3, 2, 7, 8, 2, 3, 4, 1]));
