 
function theBiggestSearchKeys(...keywords) {
  const sortedKeywords = keywords.sort().reverse()
  
  return sortedKeywords.filter((keyword) => {
    if(keyword.length === sortedKeywords[0].length)
      return `${keyword}`
  }).sort().join(", ")
}