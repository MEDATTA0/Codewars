class RomanNumerals {
  /**
   *
   * @param {number} num
   */
  static toRoman(num) {
    let romanNumber = "";
    while (num > 0) {
      switch (true) {
        case num < 4:
          romanNumber += "I";
          num -= 1;
          break;
        case num === 4:
          romanNumber += "IV";
          num -= 4;
          break;
        case num < 9:
          romanNumber += "V";
          num -= 5;
          break;
        case num === 9:
          romanNumber += "IX";
          num -= 9;
          break;
        case num < 40:
          romanNumber += "X";
          num -= 10;
          break;
        case num < 50:
          romanNumber += "XL";
          num -= 40;
          break;
        case num < 90:
          romanNumber += "L";
          num -= 50;
          break;
        case num < 100:
          romanNumber += "XC";
          num -= 90;
          break;
        case num < 400:
          romanNumber += "C";
          num -= 100;
          break;
        case num < 500:
          romanNumber += "CD";
          num -= 400;
          break;
        case num < 900:
          romanNumber += "D";
          num -= 500;
          break;
        case num < 1000:
          romanNumber += "CM";
          num -= 900;
          break;
        default:
          romanNumber += "M";
          num -= 1000;
          break;
      }
    }
    return romanNumber;
  }
  /**
   *
   * @param {string} str
   */
  static fromRoman(str) {
    let digitalNumber = 0;
    const romanCorrespondance = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };
    for (let i = 0; i < str.length; i++) {
      if (
        i + 1 < str.length &&
        ["IV", "IX", "XL", "XC", "CD", "CM"].includes(str[i] + str[i + 1])
      ) {
        digitalNumber += romanCorrespondance[`${str[i] + str[i + 1]}`];
        console.log(digitalNumber);
        i++;
      } else {
        digitalNumber += romanCorrespondance[str[i]];
      }
    }
    return digitalNumber;
  }
}
console.log(RomanNumerals.toRoman(2008));
console.log(RomanNumerals.fromRoman("MDCLXVI"));

// if (num >= 1000) {
//     romanNumber += "M";
//     num -= 1000;
//   } else if (num === 900) {
//     romanNumber += "CM";
//     num -= 900;
//   } else if (num >= 500) {
//     romanNumber += "D";
//     num -= 500;
//   } else if (num === 400) {
//     romanNumber += "CD";
//     num -= 400;
//   } else if (num >= 100) {
//     romanNumber += "C";
//     num -= 100;
//   } else if (num === 90) {
//     romanNumber += "XC";
//   } else if (num >= 50) {
//     num -= 100;
//   } else if (num === 9) {
//     romanNumber += "IX";
//     num -= 9;
//   } else if (num === 5) {
//     romanNumber += "V";
//     num -= 5;
//   } else if (num === 4) {
//     romanNumber += "IV";
//     num -= 4;
//   }
//   if (num < 4) {
//     romanNumber += "I";
//     num -= 1;
