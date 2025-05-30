export function accum(s: string): string {
  return s.split("").map((letter: string, index: number) => {return `${letter.toUpperCase()}`.padEnd(index + 1, letter.toLowerCase())}).join("-")
}