/**
 *
 * @param {Number} n
 * @returns {Number}
 */
const factorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
};

/**
 *
 * @param {String} expr
 * @returns {String}
 */
function expand(expr) {
  // Let's suppose expr = (ax+b)^n
  const splittedExpr = expr.match(/([-+]?\d+)|(-)|([a-zA-Z]+)/g);
  const n = parseInt(splittedExpr.at(-1)); // n is "n" in the formula
  if (n === 0) return "1";

  const unknown = splittedExpr.at(-3); // unknown is "x" in the formula
  const coefficientOfUnknown = !isNaN(splittedExpr[0]) // coefficientOfUnknown is "a" in the formula
    ? parseInt(splittedExpr[0])
    : splittedExpr[0] === "-"
    ? -1
    : 1;

  const b = parseInt(splittedExpr.at(-2)); // b is "b" in the formula
  let result = "";
  for (let k = 0; k <= n; k++) {
    if (k === n) {
      result += `${b ** k}`; // when we reach the n value in the loop
      console.log(result);
    } else {
      // We are going to calculate the newton's binomial. The formula is n!/k!(n-k)!
      const newtonSBinomial = factorial(n) / (factorial(k) * factorial(n - k));
      const coefficient =
        newtonSBinomial * (coefficientOfUnknown ** (n - k) * b ** k);
      if (coefficient === 0) break; //Skip

      result += `${
        coefficient !== 1 && coefficient !== -1
          ? coefficient
          : coefficient == -1
          ? "-"
          : ""
      }${unknown}${n - k > 1 ? `^${n - k}` : ""}+`;

      console.log(result);
    }
  }
  // refactor signs (+- equals -) and (++ equals +)
  result = result.replaceAll(/(\+-)/g, "-");
  result = result.replaceAll(/(\+\+)/g, "+");
  return result.at(-1) === "+" ? result.slice(0, result.length - 1) : result;
}

console.log(expand("(x-1)^2"));
