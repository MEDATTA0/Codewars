export const reverseSeq = (n: number): number[] => {
  const myArr: number[] = [];
  for(let i = 0; i < n; i++) myArr.push(n - i);
  return myArr;
};