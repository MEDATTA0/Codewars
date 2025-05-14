 
function toCamelCase(s,n){
  const words = s.split(" ")
  let result;
  switch (n) {
      case 1:
        result = words.map((word, index) => {
          if(index === 0) return word;
          return word[0].toUpperCase() + word.slice(1)
        }).join("")
        break;
      case 2:
        result = words.map((word, index) => {
          if(index === words.length - 1) return word;
          return word.slice(0, word.length - 1) + word.at(-1).toUpperCase()
        }).join("")
        break;
      case 3:
        result = words.map((word, index) => {
          if(index === words.length - 1) return word;
          return word.slice(0, word.length - 1) + word.at(-1).toUpperCase()
          
        }).join("")
        break;
  }
  console.log(result)
  return result
}
​