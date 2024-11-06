let string = "The quick brown fox jumps over the lazy dog.";

let letters = [];
for (let i = 0; i < string.length; i++) {
  if ([" ", ".", ","].includes(string[i])) continue;
  if (!letters.includes(string[i].toLowerCase()))
    letters.push(string[i].toLowerCase());
}

console.log(letters.length === 26);
