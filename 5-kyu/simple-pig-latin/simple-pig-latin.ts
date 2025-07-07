export const pigIt = (a : string) : string =>  {
  const splittedWords = a.match(/([a-zA-Z]+|\W+)/g)
  if(!splittedWords) return ""
  return splittedWords.map((word) => {
    return /[a-zA-Z]/.test(word) ? word.slice(1) + word[0] + "ay" : word
  }).join("")
}