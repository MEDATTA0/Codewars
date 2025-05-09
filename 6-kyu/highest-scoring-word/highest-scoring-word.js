function high(x){
  const wordsPoints = {}
  const words = x.split(" ")
  const alphabets = "abcdefghijklmnopqrstuvwxyz"
  words.forEach((word)=>{
    wordsPoints[word] = word.split("").reduce(
      (acc, letter)=> acc + alphabets.indexOf(letter) + 1,
      0)
  })
  const values = Object.values(wordsPoints)
  return Object.keys(wordsPoints)[values.indexOf(Math.max(...values))]
}