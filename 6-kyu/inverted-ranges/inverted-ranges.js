 
function invertedRanges(ranges) {
  if(ranges.length === 0) return [[0, 100]]
  if(ranges[0].join("") === "0100") return []
  
//   for(let i = 0; i < ranges.length; i++){
//     const previousHigherBound = ranges[i][1];
//     const nextLowerBound = ranges[i++][0];
//     console.log(previousHigherBound, nextLowerBound)
//   }
}