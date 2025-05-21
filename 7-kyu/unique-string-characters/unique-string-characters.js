function solve(a,b){
  return [
    ...a.split("").filter((val) => !b.includes(val)), 
    ...b.split("").filter((val) => !a.includes(val))
  ].join("")
};