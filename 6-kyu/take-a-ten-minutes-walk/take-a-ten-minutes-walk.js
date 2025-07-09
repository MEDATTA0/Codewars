function isValidWalk(walks) {
  if (walks.length !== 10) return false
  const directions = {
    e: 0,
    w: 0,
    n: 0,
    s: 0
  }
  walks.map((walk) => directions[walk] = directions[walk] + 1)
  return directions.n === directions.s && directions.e === directions.w 
}