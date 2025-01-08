/**
 *
 * @param {Array} arr
 */
function sumDifferences(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  return sortedArr[0] - sortedArr.at(-1);
}
