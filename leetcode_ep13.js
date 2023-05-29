let O_year = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

function Lama(S_year) {
  let N_result = 0;
  const N_yearlength = S_year.length
  console.time('func')
  for (let x = 0; x < N_yearlength; x++) {
    let N_year0 = O_year[S_year[x]]
    let N_year1 = O_year[S_year[x + 1]];
    if (N_year0 < N_year1) {
      N_result += N_year1 - N_year0;
      x++
    } else {
      N_result += N_year0;
    }
  }
  console.timeEnd('func')
  return N_result
};

console.log(Lama('IVXXL'))