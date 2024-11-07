// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.

let n = 55;
let occurenceOf1 = 0;
// function recursive_1(n) {
//   if (n % 2 === 1) return 1 + recursive_1(Math.floor(n / 2));
//   else return 0 + recursive_1(Math.floor(n / 2));
// }

while (n >= 2) {
  if (n % 2 === 1) occurenceOf1++;
  n = Math.floor(n / 2);
  if (n === 1) occurenceOf1++;
}

// let occurence = recursive_1(n);
console.log(occurenceOf1);
