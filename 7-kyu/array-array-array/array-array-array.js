function explode(x){
  const sum = (!isNaN(x[0]) ? x[0] : 0) + (!isNaN(x[1]) ? x[1] : 0)
  if(sum === 0) return !x.includes(0) ? "Void!" : []
  return Array(sum).fill(x)
}