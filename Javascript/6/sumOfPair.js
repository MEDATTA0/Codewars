/*
Given a list of integers and a single sum value, return the first two values (parse from the left please)
in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
*/

/**
 *
 * @param {Array} ints
 * @param {number} s
 */
function sumOfPair(ints, s) {
  const indexes = [];
  const values = [];
  // We will put the pairs for which the sum is equal to "s" in values, and their indexes in "indexes"
  ints.map((element, index) => {
    for (let i = index + 1; i < ints.length; i++) {
      if (element + ints[i] === s) {
        indexes.push(index, i);
        values.push(element, ints[i]);
      }
    }
  });
  if (values.length === 0) return undefined;

  // If there are several elements, we look for the pair for which the index of the second element is the smallest
  const secondElementWithSmallestIndex = Math.min(
    ...indexes.filter((element, index) => index % 2)
  );

  // Since we found it, we will now look for the index
  // This index will allow us to find the corresponding value in "values"
  let indexOfTheSecondElementWithSmallestIndex = indexes.indexOf(
    secondElementWithSmallestIndex
  );
  return [
    values[indexOfTheSecondElementWithSmallestIndex - 1],
    values[indexOfTheSecondElementWithSmallestIndex],
  ];
}

console.log(sumOfPair([20, -13, 40], -7));
