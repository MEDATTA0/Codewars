/**
 *
 * @param {number} n
 */

function lookAndSayAndSum(n) {
  let sequence = "1";

  for (let i = 1; i < n; i++) {
    let newSequence = "";
    let count = 1;

    for (let j = 1; j <= sequence.length; j++) {
      if (sequence[j] === sequence[j - 1]) {
        count++;
      } else {
        newSequence += count + sequence[j - 1];
        count = 1;
      }
    }

    sequence = newSequence;
  }

  // Calculer la somme directement sans passer par `split`
  let sum = 0;
  for (let digit of sequence) {
    sum += digit - "0"; // Convertit directement un caractère en nombre
  }

  return sum;
}

// function lookAndSayAndSum(n) {
//   //   if (n === 1) return 1;
//   let lastLookAndSay = "1";
//   for (let i = 1; i < n; i++) {
//     let occurences = 1;
//     let currentLookAndSay = lastLookAndSay
//       .split("")
//       .map((element, index) => {
//         if (element !== lastLookAndSay[index + 1]) {
//           const lastOccurence = occurences;
//           occurences = 1;
//           return `${lastOccurence}` + `${element}`;
//         } else occurences++;
//       })
//       .join("");
//     lastLookAndSay = currentLookAndSay;
//     currentLookAndSay = "";
//   }
//   return lastLookAndSay
//     .split("")
//     .reduce((acc, element) => (acc += parseInt(element)), 0);
// }

// function lookAndSayAndSum(n) {
//   const lookAndSayArray = ["1"];
//   if (n === 1) return 1;
//   let lookAndSayString = "";
//   for (let i = 0; i < n; i++) {
//     let lookAndSayElement = lookAndSayArray[i].toString().split("");
//     let occurences = 1;
//     for (let j = 0; j < lookAndSayElement.length; j++) {
//       if (lookAndSayElement[j] !== lookAndSayElement[j + 1]) {
//         lookAndSayString += `${occurences}` + `${lookAndSayElement[j]}`;
//         occurences = 1;
//       } else occurences++;
//     }
//     lookAndSayArray.push(lookAndSayString);
//     lookAndSayString = "";
//   }
//   return lookAndSayArray[n - 1]
//     .split("")
//     .reduce((acc, element) => (acc += parseInt(element)), 0);
// }

console.log(lookAndSayAndSum(2));
console.log(lookAndSayAndSum(3));
console.log(lookAndSayAndSum(4));
console.log(lookAndSayAndSum(5));
console.log(lookAndSayAndSum(8));
