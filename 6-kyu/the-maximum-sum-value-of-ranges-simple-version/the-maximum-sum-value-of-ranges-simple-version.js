function maxSum(arr,range){
  const sums = range.map((array)=>{
    let sum = 0
    for(let i = array[0]; i <= array[1]; i++) sum += arr[i]
  return sum;
  })
  return Math.max(...sums) 
}