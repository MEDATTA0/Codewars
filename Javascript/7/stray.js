// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

let numbers = [1, 1, 2, 1, 1];

let repetition = new Map();

for (let index in numbers) {
  if (repetition.has(numbers[index])) {
    // console.log(repetition.values(numbers[index]));
    repetition.set(numbers[index], repetition.get(numbers[index]) + 1);
    // console.log(repetition.values(numbers[index]));
  } else repetition.set(numbers[index], 1);
}

for (let [key, value] of repetition) {
  if (value === 1) console.log(key);
}

console.log(repetition);
