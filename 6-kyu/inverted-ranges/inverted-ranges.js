 
function invertedRanges(ranges) {
  if(ranges.length === 0) return [[0, 100]]
  if(ranges[0].join("") === "0100") return []
  const includedNumbers = []
  const excludedNumbers = []
  for(let i = 0; i < ranges.length; i++){
    const range = ranges[i];
    for(let j = range[0]; j <= range[1]; j++) includedNumbers.push(j)
  }
  let range = [];
  for(let i = 0; i < ; i++){
    
  }  
  console.log(excludedNumbers)
}