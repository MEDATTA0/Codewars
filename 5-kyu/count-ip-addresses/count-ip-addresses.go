package kata
​
import (
  "math"
  "strconv"
  "strings"
)
​
func IpsBetween(start, end string) uint32 {
  startIp := convertIpToNumber(start)
  endIp := convertIpToNumber(end)
  return uint32(endIp - startIp)
}
​
func convertIpToNumber(ip string) int {
  i := 3
  ipVal := 0
  for v := range strings.SplitSeq(ip, ".") {
    val, _ := strconv.ParseInt(v, 0, 64)
    ipVal += int(val) * int(math.Pow(256, float64(i)))
    i--
  }
  return ipVal
}
​