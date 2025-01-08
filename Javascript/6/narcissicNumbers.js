/**
 *
 * @param {number} num
 */
function isNarcissic(num) {
  const numLength = num.toString(10).length;
  return (
    num
      .toString(10)
      .split("")
      .reduce((acc, value) => (acc += Math.pow(value, numLength)), 0) === num
  );
}
console.log(isNarcissic(153));
