let myList = [];
let max = 20;

function sequenceOfSumOfN(myList, max, current = 0, sum = 0) {
  if (max === 0) myList.push(0);
  if (current < max) {
    sum += current;
    myList.push(sum);
    sequenceOfSumOfN(myList, max, current + 1, sum);
  } else if (current > max) {
    sum += current;
    myList.push(sum);
    sequenceOfSumOfN(myList, max, current - 1, sum); // recursive call with the next number
  }
}

// [0, 1, 3, 6, 10, ...]
sequenceOfSumOfN(myList, max);
console.log(myList);
