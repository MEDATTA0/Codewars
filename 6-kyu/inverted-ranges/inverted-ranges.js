 
function invertedRanges(ranges) {
  if(ranges.length === 0) return [[0, 100]]
  if(ranges[0].join("") === "0100") return []
//   const allNumbers = [];
  const includedNumbers = []
  
//   for(let i = 0; i <= 100; i++) allNumbers.push(i);
  for(let i = 0; i < ranges.length; i++){
    const range = ranges[i];
    for(let j = range[0]; j <= range[1]; j++) includedNumbers.push(j)
  }
  
  console.log(includedNumbers)
}