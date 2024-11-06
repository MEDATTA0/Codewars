let array = ["a", "b", "d", "e", "g"];
let arrayIndex = 1;
const minLetters = "abcdefghijklmnopqrstuvwxyz";
const majLetters = "ABCDEFGHIJKLMNOPWZRSUVWXYZ";

let minLetttersIndex = minLetters.indexOf(array[0]) + 1;
let missedLetters = [];
function recursive_1(array, arrayIndex, minLetters, minLetttersIndex) {
  if (
    minLetters[minLetttersIndex] != array[arrayIndex] &&
    arrayIndex < array.length - 1
  ) {
    missedLetters.push(minLetters[minLetttersIndex + 1]);
    return recursive_1(array, arrayIndex + 1, minLetters, minLetttersIndex + 1);
  } else
    return recursive_1(array, arrayIndex, minLetters, minLetttersIndex + 1);
}

console.log(missedLetters);
