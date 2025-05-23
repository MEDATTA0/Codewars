function solution(fullText, search) {
  const myReg = new RegExp(search, "g")
  const matches = fullText.match(myReg) ?? []
  return matches.length;
}