const sumNodes = (root) => {
  if(root === null) return null;
  const leftValues = sumNodes(root.left)
  const rightValues = sumNodes(root.right)
  console.log(leftValues, rightValues)
  if(leftValues === null && rightValues === null) return root.value
  if(leftValues === null) return root.value + rightValues
  if(rightValues === null) return root.value + leftValues
  return root.value + Math.max(leftValues, rightValues)
}
​
function maxSum(root) {
  if(root === null) return 0
  return sumNodes(root)
}
​