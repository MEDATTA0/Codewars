/**
 *
 * @param {string} word
 */
function countDuplicate(word) {
  let duplicatedLetters = 0;
  word = word.toLowerCase();
  for (let letter of word) {
    if (word.indexOf(letter) !== word.lastIndexOf(letter)) {
      duplicatedLetters += 1;
      word = word.replaceAll(letter, "");
    }
  }
  return duplicatedLetters;
  //   let letters = new Map();
  //   [...word].map((element, index) => {
  //     if (letters.has(element.toLowerCase())) {
  //       letters.set(element.toLowerCase(), letters.get(element) + 1);
  //     } else letters.set(element.toLowerCase(), 1);
  //   });
  //   let duplicatedLetters = 0;
  //   letters.forEach((value) => {
  //     if (value !== 1) duplicatedLetters += 1;
  //   });
  //   return duplicatedLetters;
}
console.log(countDuplicate("aabBcde"));
console.log(countDuplicate("Indivisibility"));
console.log(countDuplicate("Indivisibilities"));
console.log(countDuplicate("abcdefghijklmnABCDEFGabcdefABCDEABCDABCABA"));
