let nums = [1,3,2,5];
let target = 6;
const numlength = nums.length;
console.time('for');
for (let x = 0; x < numlength; x++) {
  for (let i = x+1; i < numlength; i++) {
    //console.log(x, i)
   if ((nums[x] + nums[i]) == target &&  x != i) {
     console.log([x, i])
     
   }
  }
};
console.timeEnd('for');