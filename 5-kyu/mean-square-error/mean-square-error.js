const solution = function(firstArray, secondArray) {
  const squared = [];
//   loop through the array and store the square
  for(let i = 0; i < firstArray.length; i++){
    squared.push(Math.abs(firstArray[i] - secondArray[i]) ** 2)
  }
//   Sum the squares and return the average
  return squared.reduce((sum, value) => sum + value, 0) / squared.length
}