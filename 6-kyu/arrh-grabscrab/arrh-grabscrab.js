 
function grabscrab(anagram, dictionary) {
  const matches = [];
  const anagramObject = {};
//  convert anagram to {letter: frequency}
  for(let i = 0; i < anagram.length; i++){
    if(anagramObject[anagram[i]]) anagramObject[anagram[i]]++;
    else {
      anagramObject[anagram[i]] = 1
    }
  }
//   convert word to {letter: frequency}
  for(const word of dictionary){
    
    if(word.length !== anagram.length)
      continue;
    const wordObject = {}
    word.split("").forEach((letter)=>{
      if(wordObject[letter]) wordObject[letter]++;
      else {
      wordObject[letter] = 1
      }
    })
​
    let matched = false
    for(const letter in anagramObject){
      if(wordObject[letter] !== anagramObject[letter]){
        matched = false
        break;
      }else{
        matched = true;
      }
    }
    if(matched)
      matches.push(word)
  }
  return matches;
}