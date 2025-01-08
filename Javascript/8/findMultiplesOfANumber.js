/**
 *
 * @param {number} n
 * @param {number} limit
 */
function findMultiples(n, limit) {
  // const multiples = [];
  // for (let i = 1; n * i <= limit; i++) {
  //   multiples.push(n * i);
  // }
  // return multiples;
  return Array.from({ length: Math.ceil(limit / n) }, (_, i) => n * (i + 1));
}

console.log(findMultiples(2, 10));
