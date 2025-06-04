export class Kata {
  static squareDigits(num: number): number {
    return parseInt(num.toString().split("").map((e: string) => parseInt(e) ** 2).join(""))
  }
}