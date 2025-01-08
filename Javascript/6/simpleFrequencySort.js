// In this kata, you will sort elements in an array by decreasing frequency of elements.
// If two elements have the same frequency, sort them by increasing value.

/**
 *
 * @param {Array} arr
 */
function solve(arr) {
  const numbersAndOccurences = new Map();
  const sortedArray = [];
  arr
    .sort((a, b) => a - b)
    .forEach((element, index) => {
      if (numbersAndOccurences.has(element)) {
        numbersAndOccurences.set(
          element,
          numbersAndOccurences.get(element) + 1
        );
      } else {
        numbersAndOccurences.set(element, 1);
      }
    });
  while (numbersAndOccurences.size > 0) {
    const max = Math.max(...numbersAndOccurences.values());
    for (let [number, occurence] of numbersAndOccurences) {
      if (occurence === max) {
        for (let i = 1; i <= occurence; i++) sortedArray.push(number);
        numbersAndOccurences.delete(number);
        break;
      }
    }
  }
  return sortedArray;
}
console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
