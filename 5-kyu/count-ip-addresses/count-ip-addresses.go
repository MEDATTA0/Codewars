package kata
​
import (
  "encoding/binary"
  "net/netip"
)
​
func IpsBetween(start, end string) uint32 {
  startIp, _ := netip.ParseAddr(start)
  endIp, _ := netip.ParseAddr(end)
  startByte := []byte{}
  endByte := []byte{}
  startByte, _ = startIp.AppendBinary(startByte)
  endByte, _ = endIp.AppendBinary(endByte)
​
  return binary.BigEndian.Uint32(endByte) - binary.BigEndian.Uint32(startByte)
​
  // return uint32(endIp - startIp)
}