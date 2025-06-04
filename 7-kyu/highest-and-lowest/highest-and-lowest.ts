export class Kata {
  static highAndLow(numbers: string): string {
    const parsedNumbers = numbers.split(" ").map((e)=> parseInt(e))
    return `${Math.max(...parsedNumbers)} ${Math.min(...parsedNumbers)}`
  }
}