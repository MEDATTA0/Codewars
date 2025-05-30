export function change(string: string): string{
  return "abcdefghijklmnopqrstuvwxyz".split("").map((el: string): number=>{return +string.toLowerCase().includes(el)}).join("")
}