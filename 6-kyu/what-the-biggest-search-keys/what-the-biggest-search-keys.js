function theBiggestSearchKeys(...keywords) {
  const lengths = keywords.map((keyword) => keyword.length)
  const max = Math.max(...lengths)
  let output = [];
  keywords.filter((keyword) => {
    if(keyword.length === max){
      output.push(`\'${keyword}\'`)
    }
  })
  return output.length ? output.sort().join(", ") : "\'\'"
}