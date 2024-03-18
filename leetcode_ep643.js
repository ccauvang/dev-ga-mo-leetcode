function maxAvgSubarr(k, nums) {
  const n = nums.length;
  var sum = 0,
    sums = 0
  var clonearr = nums.slice(0)
  clonearr.slice(0, k).forEach((a) => { sum += a })
  var avgValue = null;
  sums = sum
  for (var i = k; i < n; i++) {
    sum += nums[i] - nums[i - k]
    sums = Math.max(sums, sum);
  };

  avgValue = sums / k;
  return avgValue
};
