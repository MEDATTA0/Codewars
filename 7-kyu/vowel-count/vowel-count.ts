export class Kata {
  static getCount(str: string): number {
    const vowels = str.match(/[aeiou]/g)
    return vowels ? vowels.length : 0
  }
}