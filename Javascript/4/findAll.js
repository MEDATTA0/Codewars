/**
 *
 * @param {number} sum
 * @param {number} count
 */
function findAll(sum, count) {
  const minInteger = parseInt("1".repeat(count));
  const maxInteger = parseInt("9".repeat(count));
  const allIntegers = [];
  for (let i = minInteger; i <= maxInteger; i++) {
    const splittedDigits = i.toString(10).split("");
    if (
      [...splittedDigits]
        .sort((a, b) => a - b)
        .some((value, index) => value !== splittedDigits[index])
    ) {
      if (
        splittedDigits.reduce(
          (acc, currentValue) => acc + parseInt(currentValue),
          0
        ) === sum
      ) {
        allIntegers.push(i.toString(10));
      }
    }
  }
  return;
}

console.log(findAll(10, 3));

// function findAll(sum, count) {
//     const minInteger = parseInt("1".repeat(count));
//     const maxInteger = parseInt("9".repeat(count));
//     const allIntegers = [];
//     for (let i = minInteger; i <= maxInteger; i++) {
//       const splittedDigits = i.toString(10).split("");
//       const sortedDigits = [...splittedDigits].sort((a, b) => a - b);
//       if (
//         !splittedDigits.some((value, index) => value !== sortedDigits[index]) &&
//         splittedDigits.reduce(
//           (acc, currentValue) => acc + parseInt(currentValue),
//           0
//         ) === sum
//       ) {
//         allIntegers.push(i.toString(10));
//       }
//     }
//     return allIntegers.length ? [allIntegers.length, allIntegers[0], allIntegers[allIntegers.length - 1]] : [];
//   }
