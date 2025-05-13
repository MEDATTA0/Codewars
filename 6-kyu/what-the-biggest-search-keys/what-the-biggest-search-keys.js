 
function theBiggestSearchKeys(...keywords) {
  const sortedKeywords = keywords.sort().reverse()
  let output = ""
  sortedKeywords.some((keyword) => {
    if(keyword.length === sortedKeywords[0].length)
      output += `${keyword}`
  }).sort().join(", ")
  
}