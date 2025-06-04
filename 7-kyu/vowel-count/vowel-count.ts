export class Kata {
  static getCount(str: string): number {
    const voyels = str.match(/[aeiou]/g)
    return voyels ? voyels.length : 0
  }
}