/**
 *
 * @param {string} s1
 * @param {string} s2
 */
function buyNewspaper(s1, s2) {
  let string2 = s2.split("");
  //   console.log(string2);
  let i = 0;
  while (true) {
    const numberOfCharactersToRemove = commonCharateres(s1, string2);
    // console.log(numberOfCharactersToRemove);
    string2.splice(0, numberOfCharactersToRemove);
    i++;
    console.log(string2);
    if (string2.length === 0 || numberOfCharactersToRemove === 0) break;
    // console.log(string2);
  }
  return i;
}

// console.log(commonCharateres("abc", "ba"));
/**
 *
 * @param {Array} s1
 * @param {Array} s2
 */
function commonCharateres(s1, s2) {
  let i = s1.indexOf(s2[0]);
  let numberOfCharateres = 0;
  for (let j = 0; i < s1.length && j < s2.length; j++) {
    if (s1[i] === s2[j]) {
      numberOfCharateres++;
      i++;
    } else break;
  }
  return numberOfCharateres;
}

console.log(buyNewspaper("abc", "bcac"));

// let numberOfCharateres = 0;
// for (let i = 0; i < Math.min(s1.length, s2.length); i++) {
//   if (numberOfCharateres === 0 && s1[i] === s2[i]) {
//     numberOfCharateres++;
//   } else if (s1[i] === s2[i]) {
//     numberOfCharateres++;
//   } else if (numberOfCharateres !== 0) break;
// }
// return numberOfCharateres;
