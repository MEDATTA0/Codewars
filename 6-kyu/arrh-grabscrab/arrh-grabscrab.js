 
function grabscrab(anagram, dictionary) {
  const matches = [];
  for(const word of dictionary){
    let notMatched = false
    for(let i = 0; i < anagram.length; i++){
      if(!word.includes(anagram[i])){
        notMatched = true
        break;
      }
    }
    if(!notMatched) matches.push(word)
    console.log(matches)
  }
  return matches;
}