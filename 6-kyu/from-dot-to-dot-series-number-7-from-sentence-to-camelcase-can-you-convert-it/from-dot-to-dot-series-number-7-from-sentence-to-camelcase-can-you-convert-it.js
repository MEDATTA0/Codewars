 
function toCamelCase(s,n){
  const words = s.split(" ")
  switch (n) {
      case 1:
        return words.map((word, index) => {
          if(index === 0) return word;
          return word[0].toUpperCase() + word.slice(1)
        }).join("")
      case 2:
        return words.map((word, index) => {
          if(index === word.length - 1) return word;
          return word.slice(0, word.legth - 1) + word[word.length - 1].toUpperCase()
        }).join("")
      c
  }
}
​