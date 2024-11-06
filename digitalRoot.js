// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.
let n = 942;

function recursive_1(n) {
  if (n < 10) return n;
  else return (n % 10) + recursive_1(Math.floor(n / 10));
}

function recursive_2(n) {
  let sum_checked = recursive_1(n);
  if (sum_checked < 10) {
    console.log(sum_checked);
    return sum_checked;
  } else return recursive_2(sum_checked);
}

let result = recursive_2(n);

// return (n - 1) % 9 + 1

console.log(result);
