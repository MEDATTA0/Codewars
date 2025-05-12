 
function grabscrab(anagram, dictionary) {
  const matches = [];
  for(const word of dictionary){
    let notMatched = true
    const letters = anagram.split("")
    if(!letter.some((letter) => !word.includes(letter)))
      matches.push(word)
    console.log(matches)
  }
  return matches;
}