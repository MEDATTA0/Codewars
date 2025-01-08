/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
*/

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function arrayDiff(a, b) {
  return a.filter((element) => !b.includes(element));
}

// Method 1 :
// b.map((bElement) => {
//     a = a.filter((aElement) => aElement != bElement);
//   });
//   return a;
console.log(arrayDiff([1, 2, 3], [1, 2]));
