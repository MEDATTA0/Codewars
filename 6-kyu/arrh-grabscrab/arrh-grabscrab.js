 
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
    if(word.length !== anagram.length)
      break;
    const wordObject = {}
    word.split("").forEach((letter)=>{
      if(wordObject[letter]) wordObject[letter]++;
      else {
      wordObject[letter] = 1
      }
    })
    console.log(wordObject)
    let matched = false
    for(const [letter, frequency] in anagramObject){
      
      if(wordObject[letter] !== frequency){
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