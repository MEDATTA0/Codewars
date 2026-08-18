package kata
​
import "regexp"
​
func alphanumeric(str string) bool {
  if len(str) == 0 {
    return false
  }
  
  re := regexp.MustCompile("[^A-Za-z0-9]")
  matched := re.MatchString(str)
​
  return !matched
}