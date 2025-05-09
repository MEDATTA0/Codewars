 
function maxConsecZeros(n){
  const toReadable = {↔}
  let zeros = parseInt(n)
  console.log(zeros)
  zeros = zeros.toString(2)
  
//     .match(/(0)\1*/g)
  let max = 0;
  for (let i = 0; i < zeros.length; i++){
    if(zeros[i].length < max){
      continue
    }
    max = zeros[i].length
  }
  return max;
}