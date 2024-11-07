// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet.
// ROT13 is an example of the Caesar cipher.

let message = "Ruby is cool!";
let cryptedPhrase = "";

for (let i = 0; i < message.length; i++) {
  if (
    "a".charCodeAt(0) <= message[i].charCodeAt(0) &&
    "z".charCodeAt(0) >= message[i].charCodeAt(0)
  ) {
    if ("z".charCodeAt(0) >= message[i].charCodeAt(0) + 13)
      cryptedPhrase += String.fromCharCode(message[i].charCodeAt(0) + 13);
    else {
      cryptedPhrase += String.fromCharCode(
        "a".charCodeAt(0) + (message[i].charCodeAt(0) + 12 - "z".charCodeAt(0))
      );
    }
  } else if (
    "A".charCodeAt(0) <= message[i].charCodeAt(0) &&
    "Z".charCodeAt(0) >= message[i].charCodeAt(0)
  ) {
    if ("Z".charCodeAt(0) >= message[i].charCodeAt(0) + 13)
      cryptedPhrase += String.fromCharCode(message[i].charCodeAt(0) + 13);
    else {
      cryptedPhrase += String.fromCharCode(
        "A".charCodeAt(0) + (message[i].charCodeAt(0) + 12 - "Z".charCodeAt(0))
      );
    }
  } else {
    cryptedPhrase += message[i];
  }
}

console.log("phrase: ", message, "\nencrypted phrase: ", cryptedPhrase);
