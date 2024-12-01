// function logA() {
//   console.log("A");
// }
// function logB() {
//   console.log("B");
// }
// function logC() {
//   console.log("C");
// }
// function logD() {
//   console.log("D");
// }

// // Click the "RUN" button to learn how this works!
// logA();
// setTimeout(logB, 100);
// Promise.resolve().then(logC);
// setTimeout(logD, 100);
// setTimeout(logA, 100);
// Promise.resolve().then(logC);
// setTimout(logA, 100);
// logD();
// Promise.resolve().then(logC);
// Promise.resolve()
//   .then(logC)
//   .then(logC)
//   .then(logC)
//   .then(logA)
//   .then(logB)
//   .then(logC)
//   .then(logD);

function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(2)(3)(3));
