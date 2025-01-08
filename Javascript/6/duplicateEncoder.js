// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/

function duplicateEncode(word) {
  word = word.toLowerCase();
  let encoded = "";
  word.split("").forEach((el, index) => {
    word.indexOf(el) === word.lastIndexOf(el)
      ? (encoded += "(")
      : (encoded += ")");
  });
  return encoded;
}
