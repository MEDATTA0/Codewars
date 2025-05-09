function maxConsecZeros(n){
  const toReadable = {↔}
  let zeros = parseInt(n).toString(2).match(/(0)\1*/g)
  if(!zeros) return "Zero"
  let max = 0;
  for (let i = 0; i < zeros.length; i++){
    if(zeros[i].length < max){
      continue
    }
    max = zeros[i].length
  }
  return toReadable[max];
}