class RowSumOddNumbers {
    public static int rowSumOddNumbers(int n) {
      int floorNum = (n - 1) * (n) / 2;
      int ceilNum = (n) * (n + 1) / 2;
      int sum = 0;
      while (floorNum < ceilNum) {
        sum += (floorNum * 2) + 1;
        floorNum++;
      }
      return sum;
    }
}