var getAverages = function(nums, k) { 
  const n = nums.length;
  const o = k * 2 + 1
  var sum = 0;
  var cloneArr = nums.slice(0)
  cloneArr.slice(0, o).map((a) => { sum += a })
  const avgArr = [];
  for (var i = 0; i < n; i++) {
    if (i < k || (n - 1 - i) < k) {
      avgArr.push(-1)
    } else {
      avgArr.push(parseInt(sum / o))
      
      sum += nums[i + 1 + k] - nums[i - k]
    };
  };

  return avgArr
};

