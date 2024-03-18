function kRadiSubarr(k, nums) {
  const n = nums.length;
  if (n < k * 2 + 1) return [-1];
  var sum = 0,
    sums = 0
  var clonearr = nums.slice(0)
  clonearr.slice(0, (k * 2 + 1)).forEach((a) => { sum += a })
  var avgValue = null;
  const avgArr = [];
  sums = sum
  for (var i = 0; i < n; i++) {
    if (i < k || (n - 1 - i) < k) {
      avgArr.push(-1)
    } else {
      avgArr.push(parsum / (k * 2 + 1))
      const ifZero = k == 0 ? 0 : k
      sum += nums[i + 1 + k] - nums[i - ifZero]
    };
  };

  return avgArr
};