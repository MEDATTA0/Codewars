function minXPath(grid) {
  if(grid.length === 0) return 0;
  const rows = grid.split("\n");
  const n = rows.length
  const columns = Array(n).fill("").map((_, colIndex)=> rows.map(row=> row[colIndex]).join(""))
  const row = Math.min(...rows.map((row)=> row.split("x").join("").length))
  const column = Math.min(...columns.map((column)=> column.split("x").join("").length))
  const mainDiagonal = rows.map((row, index)=> row[index]).filter(char=> char === ".").length
  const antiDiagonal = rows.map((row, index)=> row.at(-(index + 1))).filter(char=> char===".").length
  return Math.min(row, column, mainDiagonal, antiDiagonal)
}