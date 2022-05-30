let strings = "Paskie.dev Pascal De Wit";
let stringsArray = strings.split(" "); // splits the strings into an array where each string is it's own entry
for (let strings = 0; strings < stringsArray.length; strings++) {
  window["subStringsArray" + strings] = stringsArray[strings].split("");
  console.table(window["subStringsArray" + strings]);
} // creates an array of individual characters for each string in "stringsArray"

/*const arrayDelay = 4; // number of steps before the animation starts

function test() {
  let stringsArray = [];
  let reversedStringsArray = [];
  let concatArray = [];

  for (step = 0; step < arrayDelay; step++) {
    stringsArray.unshift({ step: " ", stepDelay: 700 });
  } // adds "empty" steps to enable the caret animation

  for (step = 0; step < subStringsArray.length; step++) {
    stringsArray.push({ step: subStringsArray[step], stepDelay: 150 });
  } // adds metadata to each character

  for (step = arrayDelay + 1; step < stringsArray.length; step++) {
    stringsArray[step].step = stringsArray[step - 1].step + stringsArray[step].step;
  } // adds the previous character to the current one, except for the first character

  stringsArray[stringsArray.length - 1].stepDelay = 700; // changes the delay on the last entry in the array

  reversedStringsArray = [...stringsArray]; // creates a copy of the array
  reversedStringsArray.reverse(); // reverses the order of the copied array
  reversedStringsArray.pop(); // removes the last entry in the array
  reversedStringsArray.pop(); // ""

  concatArray = stringsArray.concat(reversedStringsArray); // combines the two arrays into one

  console.table(subStringsArray);
  console.table(stringsArray);
  console.table(reversedStringsArray);
  console.table(concatArray);
}
test();*/
