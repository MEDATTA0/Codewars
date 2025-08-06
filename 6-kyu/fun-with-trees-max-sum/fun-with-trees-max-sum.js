const sumNodes = (root) => {
  if(root === null) return -Infinity;
  const {value, left, right} = root
  if(left === null && right === null) return root.value
  const leftValues = sumNodes(left)
  const rightValues = sumNodes(right)
  return root.value + Math.max(leftValues, rightValues)
}
​
function maxSum(root) {
  if(root === null) return 0
  return sumNodes(root)
}
​