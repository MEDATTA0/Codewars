function reverseLetter(str) {
  return str.match(/[a-zA-Z]+/g).join("").split("").reverse().join("")  
}