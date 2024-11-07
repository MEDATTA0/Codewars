// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
function spinWords(string) {
  //TODO Have fun :)

  let stringArray = string.split(" ");

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length >= 5) {
      stringArray[i] = stringArray[i].split("").reverse().join("");
    }
  }

  return stringArray.join(" ");
}
