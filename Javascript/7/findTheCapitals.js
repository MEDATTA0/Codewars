const myWord = "CodEWaRs";

/**
 * @param {string} word
 */
const capitals = (word) => {
  const capitalLetterIndex = [];
  for (let i = 0; i < word.length; i++)
    if (word[i].toUpperCase() === word[i]) capitalLetterIndex.push(i);
  // word.split("").filter((value, index) => {
  //   if (65 <= value.charCodeAt(0) && value.charCodeAt(0) <= 90)
  //     capitalLetterIndex.push(index);
  // });
  return capitalLetterIndex;
};

console.log(capitals(myWord));
