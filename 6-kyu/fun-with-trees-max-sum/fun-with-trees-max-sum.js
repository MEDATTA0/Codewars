 
function maxSum(root) {
  const visited = new Set();
  const queue = [root];
  visited.add(JSON.stringify(root));
  if(root === null) return 0;
  
  console.log(root.value, maxSum(root.left), maxSum(root.right))
  return 0
}