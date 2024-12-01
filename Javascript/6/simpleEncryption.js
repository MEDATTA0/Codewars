// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates
// all the odd-indexed characters of S with all the even-indexed characters of S,
// this process should be repeated N times.

console.log("Encrypted: ", encrypt("This is a test!", 2));
console.log("Decrypted: ", decrypt("s eT ashi tist!", 2));

/**
 * Returns the encrypted text
 * exemple: encrypt("012345", 2) returns "304152"
 * @param {string} text
 * @param {number} n
 */
function encrypt(text, n) {
  if (text === null) return null;
  else if (text.length == 0 || n <= 0) return text;
  else {
    const splitedEncryptedText = text.split("");

    for (let i = 0; i < n; i++) {
      const oddIndexedCharacters = splitedEncryptedText.filter(
        (value, index) => index % 2
      );
      const evenIndexedCharacters = splitedEncryptedText.filter(
        (value, index) => !(index % 2)
      );
      splitedEncryptedText.splice(0, splitedEncryptedText.length);
      splitedEncryptedText.push(
        ...oddIndexedCharacters,
        ...evenIndexedCharacters
      );
    }

    // console.log("Decrypted: ", decrypt(splitedEncryptedText.join(""), 1));
    return splitedEncryptedText.join("");
  }
}

/**
 * Return the decrypted text encrypted by the encrypt(text, n) function
 * @param {string} encryptedText
 * @param {number} n
 */
function decrypt(encryptedText, n) {
  if (encryptedText === null) return null;
  if (encryptedText.length === 0 || n <= 0) return encryptedText;
  for (let i = 0; i < n; i++) {
    const mid = Math.floor(encryptedText.length / 2);
    const oddIndexedCharacters = encryptedText.slice(0, mid);
    const evenIndexedCharacters = encryptedText.slice(mid);
    const splitedDecryptedText = [];
    for (let j = 0; j < evenIndexedCharacters.length; j++) {
      // When the length is odd, it means that the evenIndexedCharacters is shorter than odds one
      // So we have to check if the odd character existes before pushing it in the splitedDecryptedText
      splitedDecryptedText.push(evenIndexedCharacters[j]);
      if (j < oddIndexedCharacters.length) {
        splitedDecryptedText.push(oddIndexedCharacters[j]);
      }
    }
    encryptedText = splitedDecryptedText.join("");
  }

  return encryptedText;
}
