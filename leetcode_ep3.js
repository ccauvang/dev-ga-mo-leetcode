/*const O_wordlong = {};
function wool(S_string) {
  const N_strlgt = S_string.length;
  for (let N_i = 0; N_i < N_strlgt; N_i++) {
    if (O_wordlong[S_string[N_i]]) {
       return Object.keys(O_wordlong).length;
       break;
    } else {
    O_wordlong[S_string[N_i]] = "Burh Lmao";
    }
  }
}

console.log(wool("aabbcabcbb"))*/

function QKA(S_string) {
  //tạo obj để  {keys: char value: N_right +1 để chắc chắn nó sẽ không bị lặp lại}
  const O_ocd = {};
  const N_strlgt = S_string.length;
  let N_loglength = 0;
  //loop cho đén hết string 
  for (let N_left = 0, N_right = 0; N_right < N_strlgt; N_right++) {
    //lấy char tại vị trí hiện tại mỗi lầm đi qua
   const S_charAt = S_string[N_right];
   
   // nếu phát hiện char đã có trong obj
   if (O_ocd[S_charAt]) {
     // N_left = Math.max(O_ocd[S_charAt], N_left);
     // thì set N_left lên vị trí là value của char đó đã được set trong obj
     if (O_ocd[S_charAt] > N_left) {
       N_left = O_ocd[S_charAt];
     } else {
       N_left = N_left;
     }
   }
  //biến đếm = Nright - Nleft + 1 nếu không thì bằng chính nó
  N_loglength = Math.max(N_right - N_left +1, N_loglength);
  //set char này vào vị trí hiện tại +1 để đảm bào nó sẽ không bị lặp lại
  O_ocd[S_charAt] = N_right +1
  }
  //return
  return N_loglength
}

console.log(QKA('abac'))