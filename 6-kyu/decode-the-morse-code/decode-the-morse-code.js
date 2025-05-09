function decodeMorse (morseCode){
  morseCode = morseCode.trim();
  const morseWords = morseCode.split("   ");
  const decodedMorse = morseWords.map((word)=>{
    const decodedWord = word.split(" ").map((letter) => MORSE_CODE[letter])
    return decodedWord.join("");
  })
  return decodedMorse.join(" ");
  
}