 
function modPow(base, exp, mod) {
  let result = 1;
  base = base % mod;
  while (exp > 0) {
    if (exp % 2 === 1) result = (result * base) % mod;
    base = (base * base) % mod;
    exp = Math.floor(exp / 2);
  }
  return result;
}
​
function lastDigit(n) {
  let numbers = 1
  let t2s = 0
  let t5s = 0
  for(let i = n; i > 2; i--){
    let filteredI = i;
    while(filteredI % 5 === 0 || filteredI % 2 === 0){
      if(!(filteredI % 5)){
        filteredI /= 5
        t5s++
      }
      if(!(filteredI % 2)){
        filteredI /= 2
        t2s++
      }
    }
    if(filteredI === 0) filteredI = 1
    numbers = (numbers * filteredI) % 10
  }
  if(t2s > t5s) numbers = (numbers * modPow(2, t2s - t5s, 10)) % 10 
  
  return numbers % 10
}