function GeometricSequenceSum(a, r, n) {
  return r !== 1 ? a * (1 - r ** n) / (1 - r) : a * n
}