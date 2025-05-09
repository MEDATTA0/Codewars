function findNextSquare(sq) {
  return (Number.isInteger( Math.sqrt(sq))) ? (sq + Math.sqrt(sq) + Math.sqrt(sq) + 1) : -1;
  // Return the next square if sq is a perfect square, -1 otherwise
}