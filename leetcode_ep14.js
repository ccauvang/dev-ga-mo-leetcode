var longestCommonPrefix = function(strs) {
  console.log(strs.length)
  let len = strs.length;
  if ((len == 0) || (strs[0][0] != strs[1][0])) return '';
  let point = 1;
  let pointlen = strs[point].length;
  let prefix = '';
  
  for (let i = 0; i < pointlen; i++) {
    console.log(point, i, prefix)
    if (point == 1) {
      
      if (strs[0][i] == strs[point][i]) {
        prefix = strs[point].substring(0, i+1)
      } else if (strs[0][i] != strs[point][i] && len-1 < 2){
        return prefix
      } else if (strs[0][i] != strs[point][i] && len-1 > 2){
        point++
        i = 0
      }
    } else if (point > 1) {
      //console.log(prefix[i])
      //console.log(strs[point].substring(0, i +1))
      if (prefix[i] == strs[point][i]) {
        prefix = strs[point].substring(0, i)
      } else if (len - 1 > point && prefix[i] != strs[point][i]){
        point++
        i = 0
      } else if (len - 1 <= point && prefix[i] != strs[point][i]){
        return prefix
      }
    };
  };
  //return prefix
};

const arr = ['leeek', 'leeet', 'leeesin', 'leee'];
console.log(longestCommonPrefix(arr))
//console.log(arr[0].substring(0, arr[0].lastIndexOf('e')))