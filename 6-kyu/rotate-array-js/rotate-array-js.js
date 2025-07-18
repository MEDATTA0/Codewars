function rotate(array, n) {
  array = Array.from(array)
  if(n === 0 || !array.length ) return array
  if(n > 0) {
    for(let i = 0; i < n; i++) {
      array.unshift(array.pop())
    }
  } else {
    for (let i = 0; i > n; i--) {
      array.push(array.shift())
    }
  }
  return array;
}