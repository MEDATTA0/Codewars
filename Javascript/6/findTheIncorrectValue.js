/**
 *
 * @param {Array} arr
 */
function findTheIncorrectValue(arr) {
  //   we consider the root as level 1, its children as level 2, their children as level 3,
  //   and so on, the tree will contain at least 3 levels (and no more than 10)
  let level = Math.log2(arr.length + 1) - 1 + 1;

  //   let nodesAtTheNextLevel = Math.pow(2, level + 1) - 2;
  let nodesAtThePreviousLevel = Math.pow(2, level - 1) - 2;
  let nodesAtLevel = Math.pow(2, level) - 2;
  while (level > 1) {
    // console.log(level, nodesAtThePreviousLevel, nodesAtLevel);
    for (
      let i = nodesAtLevel - 2;
      i >= nodesAtThePreviousLevel - 2;
      i--, nodesAtLevel -= 2, nodesAtThePreviousLevel--
    ) {
      if (
        arr[nodesAtThePreviousLevel] !==
        arr[nodesAtLevel - 1] + arr[nodesAtLevel]
      )
        return [
          nodesAtThePreviousLevel,
          arr[nodesAtLevel - 1] + arr[nodesAtLevel],
        ];
    }
    level--;
    // nodesAtTheNextLevel = Math.pow(2, level + 1) - 2;
    nodesAtThePreviousLevel = Math.pow(2, level - 1) - 2;
    nodesAtLevel = Math.pow(2, level) - 2;
  }
}

console.log(findTheIncorrectValue([29, 13, 16, 5, 8, 9, 1]));
