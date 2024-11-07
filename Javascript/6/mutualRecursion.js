// Mutual Recursion allows us to take the fun of regular recursion (where a function calls itself until a terminating condition)
// and apply it to multiple functions calling each other!
// Let's use the Hofstadter Female and Male sequences to demonstrate this technique.

function F(n) {
  return n === 0 ? 1 : n - M(F(n - 1));
}

function M(n) {
  return n === 0 ? 0 : n - F(M(n - 1));
}
