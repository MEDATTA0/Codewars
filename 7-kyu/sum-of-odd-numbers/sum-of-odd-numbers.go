package kata
​
func RowSumOddNumbers(n int) int {
  floorNum := (n - 1) * (n) / 2; // triangular numbers' formula
  ceilNum := (n) * (n + 1) / 2;
  sum := 0;
  for floorNum < ceilNum {
    sum += floorNum * 2 + 1;
    floorNum++;
  }
  return sum;
}
​