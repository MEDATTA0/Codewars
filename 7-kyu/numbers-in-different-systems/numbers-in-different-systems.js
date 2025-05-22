function sysNums(n, sys) {
  const help = "abcdef".split("");
  const result = n.toString(sys);
  if(help.some((value) => result.includes(value))) return result;
  return parseInt(result);
}