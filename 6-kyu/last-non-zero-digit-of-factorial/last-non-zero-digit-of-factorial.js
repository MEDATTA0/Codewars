 
function lastDigit(n) {
  const numbers = []
  for(let i = n; i > 2; i--){
    let filteredI = i;
    while(!(n % 5) && !(n % 2)){
      filteredI = filteredI % 10
      
    }
    numbers.push(filteredI)
  }
  console.log(numbers)
  const digit = (numbers.reduce((acc, curr) => acc * curr, 1) % 10).toString().match(/(\d)0*$/g)[0]
  return parseInt(digit)
}