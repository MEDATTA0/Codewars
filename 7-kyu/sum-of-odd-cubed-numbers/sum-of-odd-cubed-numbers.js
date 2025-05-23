function cubeOdd(arr) {
  if("abcdefghijklmnopqrstuvwxyz".split("").some((val) => arr.includes(val))) return undefined;
  const sum = arr.reduce((acc, val)=> acc + (val % 2 ? val : 0) ** 3, 0)
  return sum;
}