// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.
const text = "apples, pears # and bananas\ngrapes\nbananas !apples";
const markers = ["#", "!"];
/**
 *
 */
function stripComments() {
  let text = "aa + bb\ncc - dd\need dsd  * ff";
  const markers = ["+", "-", "*"];
  //initializing markerIndex to -1
  let newLineIndex = null;
  let textWithoutComment = "";
  let thereIsComment = true;
  while (thereIsComment) {
    let markerIndex = -1;
    markerIndex = text.split("").findIndex((value) => markers.includes(value));
    if (markerIndex === -1) {
      textWithoutComment += text;
      //   console.log(textWithoutComment);
      //   console.log(text);
      thereIsComment = false;
    } else {
      newLineIndex = text.indexOf("\n");
      if (newLineIndex === -1) {
        textWithoutComment += text.slice(0, markerIndex);
        // console.log(textWithoutComment);
        // console.log(text);
        thereIsComment = false;
      } else {
        if (markerIndex <= newLineIndex) {
          textWithoutComment += text.slice(0, markerIndex);
          text = text.slice(newLineIndex);
          //   console.log(textWithoutComment);
          //   console.log(text);
        } else {
          textWithoutComment += text.slice(newLineIndex, markerIndex);
          text = text.slice(markerIndex);
          //   console.log(textWithoutComment);
          //   console.log(text);
        }
      }
    }
  }
  console.log(-1);
  return textWithoutComment.trimEnd();
}

console.log(stripComments());
