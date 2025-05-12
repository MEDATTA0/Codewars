 
function grabscrab(anagram, dictionary) {
  const matches = [];
  const anagramObject = {};
  for(let i = 0; i < anagram.length; i++){
    if(anagramObject[anagram[i]]) anagramObject[anagram[i]]++;
    else {
      anagramObject[anagram[i]] = 1
    }
  }
  for(const word of dictionary){
    
    const wordObject = {}
    word.split("").forEach((letter)=>{
      if(wordObject[letter]) wordObject[letter]++;
      else {
      wordObject[letter] = 1
      }
    })
  }
  for(const [letter, frequency] of anagramObject)
  return matches;
}