 
function grabscrab(anagram, dictionary) {
  const matches = [];
  const anagramObject = {};
  for(let i = 0; i < anagram.length; i++){
    if(anagramObject[anagram[i]]) anagramObject[anagram[i]]++;
    else {
      anagramObject[anagram[i]] = 1
    }
  }
  console.log(anagramObject)
  for(const word of dictionary){
    const wordObject = {}
    
  }
  return matches;
}