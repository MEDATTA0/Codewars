String.prototype.isUpperCase = function () {
  console.log(typeof this.toUpperCase());
  return this == this.toUpperCase();
};

console.log("HELLO".isUpperCase());

// Method 1 :
// const checker =
//     this.split("").some((element) => {
//       if (!(element === element.toUpperCase())) {
//         return false;
//       }
//     }) || true;
//   return !checker ? false : true;
