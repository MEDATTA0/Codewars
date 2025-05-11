function invertedRanges(ranges) {
  if(ranges.length === 0) return [[0, 100]]
  if(ranges[0].join("") === "0100") return []
  const includedNumbers = []
  const excludedNumbers = []
  
  for(let i = 0; i < ranges.length; i++){
    const range = ranges[i];
    for(let j = range[0]; j <= range[1]; j++) includedNumbers.push(j)
  }
  
  if(includedNumbers[0] !== 0){
    excludedNumbers.push([0, includedNumbers[0] - 1])
  }
  
  for(let i = 0; i < includedNumbers.length; i++){
    const nextNumber = includedNumbers[i + 1];
    const nextInteger = includedNumbers[i] + 1
    if(nextNumber !== nextInteger && nextInteger <= 100){
        excludedNumbers.push([includedNumbers[i] + 1, includedNumbers[i+1] - 1 || 100])
    }
  }
  return excludedNumbers;
}