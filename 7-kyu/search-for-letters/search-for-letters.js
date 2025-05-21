function change(string){
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const includedLetters = Array(26).fill(0);
  string.toLowerCase().split("").forEach((value)=>{
    const letterIndex = letters.indexOf(value)
    if(letterIndex !== -1 && includedLetters[letterIndex] === 0) includedLetters.splice(letterIndex, 1, 1)
  })
  return includedLetters.join("");
}