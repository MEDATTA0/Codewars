function lookAndSay(data,len){
  const results = [data]
  for(let j = 0; j < len; j++){
    let result = "";
    const groups = results[j].match(/(.)\1*/g)
    for(let i = 0; i < groups.length; i++){
      result += `${groups[i].length}${groups[i][0]}`
    }
    results.push(result)
  }
  results.shift()
  return results
}