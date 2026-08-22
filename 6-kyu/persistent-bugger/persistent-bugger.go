package kata
​
import (
  "strconv"
  "strings"
)
​
func Persistence(n int) int {
  count := 0
  for n > 9 {
    count++
    result := 1
    for v := range strings.SplitSeq(strconv.Itoa(n), "") {
      num, _ := strconv.Atoi(v)
      result *= num
    }
    n = result
  }
​
  return count
}
​