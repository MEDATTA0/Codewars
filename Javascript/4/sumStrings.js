let a = "0000103";
let b = "000008567";

if (a.length > b.length) {
  while (a.length > b.length) {
    b = "0" + b;
  }
} else {
  while (b.length > a.length) {
    a = "0" + a;
  }
}
let sum = "";
let overload = 0;
//Go through a and b, and adding every a[i] with b[i]
for (let i = a.length - 1; i >= 0; i--) {
  let currentSum = parseInt(a[i]) + parseInt(b[i]) + overload;
  if (currentSum >= 10) {
    sum = (currentSum % 10).toString() + sum;
    overload = 1;
  } else {
    sum = currentSum.toString() + sum;
    overload = 0;
  }
  //Adding the last overload if its value is equal to 1
  if (i === 0 && overload != 0) sum = overload.toString() + sum;
}
// To remove the zeros that are in front of the other numbers like 00123 after the sum of the 2 strings
const splittedSum = sum.split("");
for (let i = 0; i < splittedSum.length; i++) {
  if (splittedSum[i] == 0) {
    splittedSum.splice(i, 1);
    i--; // Go back one notch to handle the index after `splice`
  } else {
    break;
  }
}

console.log(splittedSum.join(""));
