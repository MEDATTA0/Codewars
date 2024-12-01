/**
 *A Hamming number is a positive integer of the form 2i3j5k, for some non-negative integers i, j, and k.
 * @param {number} n
 */
function hamming(n) {
  if (n === 1) return 1;
  let maxRepetition = n < 101 ? 10 : 25; //To reduce repetition if n is smaller than 100
  let hammingNumbers = [1];
  let lastHammingNumbersLength = 0;
  for (let i = 0; i < maxRepetition; i++) {
    const tempValues = [];
    for (let j = lastHammingNumbersLength; j < hammingNumbers.length; j++)
      tempValues.push(
        hammingNumbers[j] * 2,
        hammingNumbers[j] * 3,
        hammingNumbers[j] * 5
      );
    lastHammingNumbersLength = hammingNumbers.length;
    // hammingNumbers = [...new Set(hammingNumbers, tempValues)];
    hammingNumbers.push(...tempValues);
    hammingNumbers = [...new Set(hammingNumbers)];
  }
  return [...hammingNumbers].sort((a, b) => a - b)[n - 1];
}

console.log(hamming(167));
// console.log(treeNodes.length);

// Method 1 : representing numbers as a tree
// const treeNodes = [1];
// let treeLength = 0;
// let treeContent = 1;
// for (let i = 0; i < 16; i++) {
//   treeContent = (Math.pow(3, treeLength + 1) - 1) / 2;
//   let nodesAtTheLastLevel = Math.pow(3, treeLength);
//   // console.log(treeLength);
//  On parcourt les éléments de la dernière racine pour les multiplier par 2, 3 et 5
//   for (let j = treeContent - nodesAtTheLastLevel; j < treeContent; j++)
//     treeNodes.push(treeNodes[j] * 2, treeNodes[j] * 3, treeNodes[j] * 5);
//   treeLength += 1;
// }
//   const hammingNumber = [...new Set(treeNumbers)].sort((a, b) => a - b);
//   return hammingNumber[n - 1];
// return [...new Set(treeNodes)].sort((a, b) => a - b)[n - 1];

// Method 2 : On va à chaque fois multiplier par 2, 3 et 5 tous les éléments de hammingNumbers.
// Les résultats seront stockés dans tempValue.
// Et après, on a va les ajouter dans hammingNumbers tout en évitant les doublons.

// const hammingNumbers = new Set([1]);
// for (let i = 0; i < 50; i++) {
//   const tempValue = [];
//   for (let value of hammingNumbers) {
//     tempValue.push(value * 2, value * 3, value * 5);
//     // hammingNumbers.add(value * 2);
//     // hammingNumbers.add(value * 3);
//     // hammingNumbers.add(value * 5);
//   }
//   for (let j = 0; j < tempValue.length; j++) {
//     hammingNumbers.add(tempValue[j]);
//   }
// }
// return [...hammingNumbers].sort((a, b) => a - b)[n - 1];
