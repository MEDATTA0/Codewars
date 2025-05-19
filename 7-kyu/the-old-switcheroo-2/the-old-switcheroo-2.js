function encode(str) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return str.toLowerCase().split("").map((char) => {
    return letters.includes(char) ? letters.indexOf(char) + 1 : char 
  }).join("")
}