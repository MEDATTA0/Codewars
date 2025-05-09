 
function lastDigit(n) {
  const numbers = []
  let t2s = 0
  let t5s = 0
  for(let i = n; i > 2; i--){
    let filteredI = i;
    while(!(filteredI % 5 || filteredI % 2)){
      if(!(filteredI % 5)){
        filteredI /= 5
        t5s++
      }
      else{
        filteredI /= 2
        t2s++
      }
    }
    if(filteredI === 0) filteredI = 1
    numbers.push(filteredI)
  }
  let factorial = numbers.reduce((acc, curr) => acc * curr, 1) % 10
  
}