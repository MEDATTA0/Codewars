 
function accum(s) {
  let result = s.split("").map((value, index) => value.toUpperCase().padEnd(index - 1, value.toLowerCase())).join("-")
  
}