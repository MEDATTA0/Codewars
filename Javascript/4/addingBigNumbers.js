/*
We need to sum big numbers and we require your help.
Write a function that returns the sum of two numbers.
The input numbers are strings and the function must return a string.
*/

let a =
  "00000000000000000000000000000000000000000000000000000000000000000000000000000";
let b =
  "90980198234110000000000000000000000000000000000000000000000000000000000000000000000000000";
let lengthA = a.length;
let lengthB = b.length;
let greaterNumber = null;
let lowerNumber = null;
let greaterNumberLength = null;
let lowerNumberLength = null;

// The greater Number is which is the longest
// a is considered the longer if they have the same length
if (lengthA >= lengthB) {
  greaterNumber = a;
  greaterNumberLength = a.length;
  lowerNumber = b;
  lowerNumberLength = b.length;
} else {
  greaterNumber = b;
  greaterNumberLength = b.length;
  lowerNumber = a;
  lowerNumberLength = a.length;
}

let digitDifference = greaterNumberLength - lowerNumberLength;
//To make them at the same length
for (let i = 0; i < digitDifference; i++) {
  lowerNumber = "0" + lowerNumber;
  lowerNumberLength++;
}
console.log(lowerNumber);

//Initializing variables before entering in the loop
let sum = "";
let currentDigit = greaterNumberLength - 1;
let overload = 0;

for (let i = greaterNumberLength - 1; i >= 0; i--) {
  let currentSum =
    Number(greaterNumber[currentDigit]) +
    Number(lowerNumber[currentDigit]) +
    overload;
  if (currentSum < 10) {
    sum = currentSum.toString() + sum;
    overload = 0;
  } else {
    sum = (currentSum - 10).toString() + sum;
    overload = 1;
  }
  if (currentDigit === 0 && overload !== 0) {
    sum = overload.toString() + sum;
  }
  currentDigit--;
}

console.log(sum);
// function addBigNumbers(a, b) {}
