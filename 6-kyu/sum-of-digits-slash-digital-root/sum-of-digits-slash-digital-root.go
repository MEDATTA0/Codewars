package kata
import (
  "fmt"
  "strconv"
)
​
func DigitalRoot(n int) int {
  m := fmt.Sprint(n)
  sum := n;
  for sum > 9 {
    m = strconv.Itoa(sum)
    sum = 0
    for _, r := range m {
      parsedInt := int(r - '0')
      sum += parsedInt
    }
  }
  return sum
}