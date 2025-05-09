function groupByCommas(n) {
  let digits = n.toString()
  let groupedDigits = []
  for (let i = digits.length - 1; i >=0; i-=3){
    groupedDigits.push(`${digits[i - 2] || ""}${digits[i - 1] || ""}${digits[i] || ""}`)
  }
  return groupedDigits.reverse().join(",")
}