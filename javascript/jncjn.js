const lettersArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function addLetters(...letters) {
  let i = 0;
  let sum = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == " ") {
      return "z";
    }
    if (letters.length == 1) {
        return letters
    }
    for (let index = 0; index < lettersArray.length; index++) {
      if (i == index) {
        sum += index + 1;
      }
    }
  }
  return sum;
}
// test 
[["a", "b", "c"], "f"], [["z"], "z"], [["a", "b"], "c"], [["c"], "c"], [["z", "a"], "a"], [["y", "c", "b"], "d"];
