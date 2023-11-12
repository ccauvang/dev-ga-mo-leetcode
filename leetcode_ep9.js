var isPalindrome = function(x) {
  let testCase = [];
  if (x < 0) return false
  const s = x.toString();
  //console.log(`${x}`.split('').map(i => Number(i)));
  s.split('').forEach(i => {
    testCase.unshift(i);
  });
  return testCase.join('') == s
};

//copy sauce
var isPalindrome2 = function(x) {

    var reverse = 0;
    var copy = x;

    //The loop break when the copy of original number becomes zero
    //Also negative number cannot be a palindrome
    while (copy > 0) {
      const digit = copy % 10;
      reverse *= 10 + digit;
      copy /= 10;
    }

    return reverse == x;
    
}; 

var isPalindrome3 = function(x) {
  if (x < 0) return false
  let foo = Number(x.toString().split('').reverse().join(''))
  return foo == x
}; 

let n = prompt('num');

console.time('time')
console.log(isPalindrome(n))
console.timeEnd('time')