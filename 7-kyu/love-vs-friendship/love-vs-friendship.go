package kata
​
func WordsToMarks(s string) int {
  sum := 0
​
  for _, v := range s {
    sum += int((v + 1) - 'a')
  }
  return sum
}