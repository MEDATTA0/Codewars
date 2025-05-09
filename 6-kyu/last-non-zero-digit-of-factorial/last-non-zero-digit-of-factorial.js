 
function lastDigit(n) {
  const numbers = []
  
  for(let i = n; i > 2; i--){
    let filteredI = i;
    while(){
      filteredI = filteredI % 10
    }
    if(filteredI === 0) filteredI = 1
    numbers.push(filteredI)
  }
  return numbers.reduce((acc, curr) => acc * curr, 1) % 10
}