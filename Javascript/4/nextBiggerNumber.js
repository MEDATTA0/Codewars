let number = "139";
let nextBiggerNumber = "";
let pivotIndex = number.length - 1;
let pivot = number[pivotIndex];

for (let i = number.length - 1; i >= 0; i--) {
  if (number[i] > number[i - 1]) {
    pivot = number[i - 1];
    pivotIndex = i - 1;
    break;
  }
}
if (pivotIndex === number.length - 1) nextBiggerNumber = -1;
else {
  console.log(pivot, pivotIndex);

  const digitsBeforePivot = number.slice(0, pivotIndex);
  let sortedDigitsAfterPivot = number
    .split("")
    .slice(pivotIndex + 1)
    .sort();
  let digitGreaterThanPivot = null;
  for (let i = 0; i < sortedDigitsAfterPivot.length; i++) {
    if (pivot < sortedDigitsAfterPivot[i]) {
      digitGreaterThanPivot = sortedDigitsAfterPivot[i];
      sortedDigitsAfterPivot.splice(i, 1);
      sortedDigitsAfterPivot.push(pivot);
      sortedDigitsAfterPivot.sort();
      break;
    }
  }
  console.log(digitGreaterThanPivot);
  if (digitGreaterThanPivot === null) {
    nextBiggerNumber =
      digitsBeforePivot + pivot + sortedDigitsAfterPivot.join("");
  } else {
    nextBiggerNumber =
      digitsBeforePivot +
      digitGreaterThanPivot +
      sortedDigitsAfterPivot.join("");
  }
}

// let sortedDigitsAfterPivot = digitsAfterPivot;

// nextBiggerNumber = digitsBeforePivot + sortedDigitsAfterPivot;
console.log(nextBiggerNumber);
