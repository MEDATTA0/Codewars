/**
 *
 * @param {number} n
 */
// function extraPerfect(n) {

// Method 1 :
//   const perfectNumbers = [];
//   for (let i = 1; i <= n; i++) {
//     if (i.toString(2)[0] == 1 && i.toString(2).at(-1) == 1)
//       perfectNumbers.push(i);
//   }
//   return perfectNumbers;

// Method 2 :
//   const perfectNumbers = [];
//   for (let i = 1; i <= n; i += 2) perfectNumbers.push(i);
//   return perfectNumbers;
// }

const extraPerfect = (n) =>
  Array.from({ length: Math.ceil(n / 2) }, (_, i) => i * 2 + 1);
console.log(extraPerfect(39));
