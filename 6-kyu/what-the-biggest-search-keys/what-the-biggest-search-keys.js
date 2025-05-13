 
function theBiggestSearchKeys(...keywords) {
  const lengths = [];
  
  const sortedKeywords = keywords.sort().reverse()
  let output = [];
  sortedKeywords.some((keyword) => {
    if(keyword.length === sortedKeywords[0].length){
      output.push(`\'${keyword}\'`)
    }
  })
  return output.length ? output.reverse().join(", ") : "\'\'"
}