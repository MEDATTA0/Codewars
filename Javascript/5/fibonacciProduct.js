const fibonacciProduct = 4895;
const result = [];
for (let i = 0; i <= 20; i++) {
  let currentFibonacciSequence = Fibonacci(i);
  let nextFibonacciSequence = Fibonacci(i + 1);
  if (currentFibonacciSequence * nextFibonacciSequence === fibonacciProduct) {
    result.push(currentFibonacciSequence, nextFibonacciSequence, true);
    break;
  }
  if (currentFibonacciSequence * nextFibonacciSequence > fibonacciProduct) {
    result.push(currentFibonacciSequence, nextFibonacciSequence, false);
    break;
  }
}

console.log(result);

function Fibonacci(n) {
  if (n <= 1) {
    return 1;
  } else return Fibonacci(n - 1) + Fibonacci(n - 2);
}
