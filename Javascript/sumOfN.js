let myList = [];
function sumOfN(m, n = 0) {
  myList.push((n += n));
  if (m > 0 && n < m) {
    sumOfN(m, ++n);
  } else if (m < 0 && n > m) {
    sumOfN(m, --n);
  } else {
    myList.push((n += m));
  }
}
sumOfN(5);
console.log(myList);
