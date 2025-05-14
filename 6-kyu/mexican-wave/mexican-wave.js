function wave(str){
  const words = [];
  for(let i = 0; i < str.length; i++){
    if(str[i] === " ") continue;
    words.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1))
  }
  return words
}