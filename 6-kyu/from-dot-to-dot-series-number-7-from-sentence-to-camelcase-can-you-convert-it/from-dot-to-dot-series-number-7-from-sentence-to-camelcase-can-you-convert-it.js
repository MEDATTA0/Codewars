function toCamelCase(s,n){
  const words = s.split(" ")
  let result;
  switch (n) {
      case 1:
        return words.map((word, index) => {
          if(index === 0) return word.toLowerCase();
          return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }).join("")
      case 2:
        return words.map((word, index) => {
          if(index === words.length - 1) return word.toLowerCase();
          return word.slice(0, word.length - 1).toLowerCase() + word.at(-1).toUpperCase()
        }).join("")
      case 3:
        return words.map((word, index) => {
          if(index === 0) return word.slice(0, word.length - 1).toLowerCase() + word.at(-1).toUpperCase()
          else if (index === words.length - 1) return word[0].toUpperCase() + word.slice(1).toLowerCase();
          return word[0].toUpperCase() + word.slice(1, word.length - 1).toLowerCase() + word.at(-1).toUpperCase()
        }).join("")
  }
}
​