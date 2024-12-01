let r = 70;
let g = 8;
let b = 53;

let hexNumber = {
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

// function recursive_1(n) {
//   if (n < 16) return n > 9 ? hexNumber[n] : n.toString();
//   else {
//     let remainder = n % 16;
//     let hexChar = remainder > 9 ? hexNumber[remainder] : remainder.toString();
//     return recursive_1(Math.floor(n / 16)) + hexChar;
//   }
// }

// function recursive_1(n) {
//   if (n < 16) return n > 9 ? hexNumber[n] : n.toString();
//   else {
//     let hexChar = n % 16 > 9 ? hexNumber[n % 16] : (n % 16).toString();
//     return recursive_1(Math.floor(n / 16)) + hexChar;
//   }
// }

// function recursive_1(n, secondTour = false) {
//   if (n <= 0) return "00";
//   else if (n >= 255) return "FF";
//   else if (n < 16 && !secondTour)
//     return n > 9 ? "0" + hexNumber[n] : "0" + n.toString();
//   else if (n < 16 && secondTour) return n > 9 ? hexNumber[n] : n.toString();
//   else
//     return (
//       recursive_1(Math.floor(n / 16), true) +
//       (n % 16 > 9 ? hexNumber[n % 16] : (n % 16).toString())
//     );
// }

function toHex(n) {
  if (n < 0) return "00";
  else if (n >= 255) return "FF";
  else {
    return ("0" + Number(n).toString(16)).slice(-2).toUpperCase();
  }
}

// let toHex = recursive_1(r) + recursive_1(g) + recursive_1(b);

console.log(toHex(r) + toHex(g) + toHex(b));
