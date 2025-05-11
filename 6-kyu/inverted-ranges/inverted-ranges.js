function invertedRanges(ranges) {
  if(ranges.length === 0) return [[0, 100]]
  if(ranges[0].join("") === "0100") return []
  const includedNumbers = []
  const excludedNumbers = []
  
  for(let i = 0; i < ranges.length; i++){
    const range = ranges[i];
    for(let j = range[0]; j <= range[1]; j++) includedNumbers.push(j)
  }
  
  // Check if the first included number is greater than 0
  // If so, we need to start the first excluded range from 0
  if(includedNumbers[0] !== 0){
    excludedNumbers.push([0, includedNumbers[0] - 1])
  }
  
  // Loop through the included numbers to find any gaps
  for(let i = 0; i < includedNumbers.length; i++){
    const nextNumber = includedNumbers[i + 1]; // The next number in the list
    const nextExpected = includedNumbers[i] + 1 // What the next number *should* be if no gap exists
​
    
    // If there's a gap between current and next number
    if(nextNumber !== nextExpected && nextExpected <= 100){
        excludedNumbers.push([includedNumbers[i] + 1, includedNumbers[i+1] - 1 || 100])
    }
  }
  return excludedNumbers;
}