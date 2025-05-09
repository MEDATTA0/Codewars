 
function lastDigit(n) {
  const numbers = []
  for(let i = n; i > 2; i--){
    let filteredI = i;
    while(n % 5 === 0 && n % 2 === 0 && n !== 0){
      
      filteredI = filteredI % 10
    }
    if(filteredI === 0) filteredI = 1
    numbers.push(filteredI)
  }
  console.log(numbers)
  const digit = (numbers.reduce((acc, curr) => acc * curr, 1) % 10).toString().match(/(\d)0*$/g)[0]
  return parseInt(digit)
}