let nums = [1,3,2,5,4];
let target = 5;
console.time('for')
let a = {};
const numlength = nums.length
//let i = 0;
//loop
for (let i = 0; i< numlength; i++) {
  const bravo = target - nums[i];
  // nếu trong obj đã có giá trị thì trả ra kết quả 
  if (a[bravo] >= 0) {
    console.log(a[bravo], i);
    //add break để dừng loop khi bắt dc giá trị đầu tiên hoặc không để bắt hết giá trị = target
    break;
  } else {
  // nếu chua có thì add vào obj key = value của array value = indexof của array
  a[nums[i]] = i;
  continue;
  }
};
console.timeEnd('for')
/*const numlength = nums.length;
console.time('for');
for (let x = 0; x < numlength; x++) {
  for (let i = x+1; i < numlength; i++) {
    //console.log(x, i)
   if ((nums[x] + nums[i]) == target &&  x != i) {
     console.log([x, i])
     
   }
  }
};
console.timeEnd('for');*/

