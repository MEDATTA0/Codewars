package kata
​
func Persistence(n int) int {
  count := 0
  for n > 9 {
    temp := 1
    for n > 0 {
      temp *= n % 10
      n /= 10
    }
    n = temp
    count++
  }
​
  return count
}