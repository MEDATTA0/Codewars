function Point(x, y) {
  this.x = x;
  this.y = y;
}
​
function Segment(a, b) {
  this.a = a;
  this.b = b;
}
​
​
function isOneGraph(input) {
  const adjacency = new Map()
  input.forEach(({a, b}) => {
    const keyA = JSON.stringify(a);
    const keyB = JSON.stringify(b);
    
    if(!adjacency.has(keyA))  adjacency.set(keyA, [])
    if(!adjacency.has(keyB))  adjacency.set(keyB, [])
    
    adjacency.get(keyA).push(keyB)
    adjacency.get(keyB).push(keyA)
  })
  const visited = new Set()
  const keys = [...adjacency.keys()]
  if(!keys.length) return true;
  const queue = [keys[0]];
  visited.add(keys[0])
  while(queue.length){
    const current = queue.shift()
    for(const neighbor of adjacency.get(current)){
      if(!visited.has(neighbor)){
        visited.add(neighbor)
        queue.push(neighbor)
      }
    }
  }
  return visited.size === keys.length;
}