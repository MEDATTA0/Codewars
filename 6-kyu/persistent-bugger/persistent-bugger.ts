export function persistence(num: number): number {
  let i = 0;
  while (num >= 10) {
    i++;
    num = num
      .toString()
      .split("")
      .reduce((acc, curr) => parseInt(curr) * acc, 1);
  }
  return i;
}
​