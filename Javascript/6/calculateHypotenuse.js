/**
 *
 * @param {number} a
 * @param {number} b
 */
const calculateHypotenuse = (a, b) => {
  if (!isNaN(a) && a > 0 && !isNaN(b) && b > 0) {
    return parseFloat(Math.sqrt(a ** 2 + b ** 2).toFixed(3));
  } else {
    return new Error(undefined, undefined);
  }
};
console.log(calculateHypotenuse(1, 1));

// return !isNaN(a) && a > 0 && !isNaN(b) && b > 0
//     ? parseFloat(Math.sqrt(a ** 2 + b ** 2).toFixed(3))
//     : undefined;
