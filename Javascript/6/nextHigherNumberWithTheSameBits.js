let n = 128;
const splittedBits = n.toString(2).split("");
//   .map((bit) => parseInt(bit));
console.log(splittedBits);
splittedBits.splice(0, 0, 0);
let pivot = null;
let afterPivot = null;
for (let i = splittedBits.length - 1; i > 0; i--) {
  if (splittedBits[i] > splittedBits[i - 1]) {
    pivot = splittedBits[i - 1];
    afterPivot = splittedBits.splice(i - 1);
    break;
  }
}
pivot = Math.max(...afterPivot);
afterPivot.splice(afterPivot.indexOf(pivot.toString()), 1);
afterPivot.sort((a, b) => a - b);
splittedBits.push(pivot, ...afterPivot);
console.log(parseInt(splittedBits.join(""), 2));
