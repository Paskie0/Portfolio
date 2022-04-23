let step = 0;
let stepDivisor = 2; // change this value to increase/decrease the delay before moving to the next step in the array
const hideDuration = 1000;
let stepsArray = [
  { step: " ", stepDelay: 700 },
  { step: " ", stepDelay: 700 },
  { step: " ", stepDelay: 700 },
  { step: " ", stepDelay: 700 },
  { step: "P", stepDelay: 150 },
  { step: "Pa", stepDelay: 150 },
  { step: "Pas", stepDelay: 150 },
  { step: "Pask", stepDelay: 150 },
  { step: "Paski", stepDelay: 150 },
  { step: "Paskie", stepDelay: 150 },
  { step: "Paskie.", stepDelay: 150 },
  { step: "Paskie.d", stepDelay: 150 },
  { step: "Paskie.de", stepDelay: 150 },
  { step: "Paskie.dev", stepDelay: 150 },
  { step: "Paskie.dev", stepDelay: 700 },
  { step: "Paskie.dev", stepDelay: 700 },
  { step: "Paskie.de", stepDelay: 150 },
  { step: "Paskie.d", stepDelay: 150 },
  { step: "Paskie.", stepDelay: 150 },
  { step: "Paskie", stepDelay: 150 },
  { step: "Paski", stepDelay: 150 },
  { step: "Pask", stepDelay: 150 },
  { step: "Pas", stepDelay: 150 },
  { step: "Pa", stepDelay: 150 },
  { step: "P", stepDelay: 150 },
  { step: " ", stepDelay: 700 },
  { step: " ", stepDelay: 700 },
  { step: "P", stepDelay: 150 },
  { step: "Pa", stepDelay: 150 },
  { step: "Pas", stepDelay: 150 },
  { step: "Pasc", stepDelay: 150 },
  { step: "Pasca", stepDelay: 150 },
  { step: "Pascal", stepDelay: 150 },
  { step: "Pascal ", stepDelay: 150 },
  { step: "Pascal D", stepDelay: 150 },
  { step: "Pascal De", stepDelay: 150 },
  { step: "Pascal De ", stepDelay: 150 },
  { step: "Pascal De W", stepDelay: 150 },
  { step: "Pascal De Wi", stepDelay: 150 },
  { step: "Pascal De Wit", stepDelay: 150 },
  { step: "Pascal De Wit", stepDelay: 700 },
  { step: "Pascal De Wit", stepDelay: 700 },
  { step: "Pascal De Wi", stepDelay: 150 },
  { step: "Pascal De W", stepDelay: 150 },
  { step: "Pascal De ", stepDelay: 150 },
  { step: "Pascal De", stepDelay: 150 },
  { step: "Pascal D", stepDelay: 150 },
  { step: "Pascal ", stepDelay: 150 },
  { step: "Pascal", stepDelay: 150 },
  { step: "Pasca", stepDelay: 150 },
  { step: "Pasc", stepDelay: 150 },
  { step: "Pas", stepDelay: 150 },
  { step: "Pa", stepDelay: 150 },
  { step: "P", stepDelay: 150 },
  { step: " ", stepDelay: 700 },
  { step: " ", stepDelay: 700 },
  { step: "W", stepDelay: 150 },
  { step: "We", stepDelay: 150 },
  { step: "Wel", stepDelay: 150 },
  { step: "Welc", stepDelay: 150 },
  { step: "Welco", stepDelay: 150 },
  { step: "Welcom", stepDelay: 150 },
  { step: "Welcome", stepDelay: 150 },
  { step: "Welcome", stepDelay: 700 },
  { step: "Welcome", stepDelay: 700 },
]; /* " " is an invisible unicode space (U+2002) that scales with the font size.
      If replaced by normal spaces, the array will skip over them and the "animation" will hitch. */

function update() {
  let intro = document.getElementById("intro");
  let wrapContent = document.getElementById("wrapContent");
  let steps = stepsArray[step];
  intro.style.animationIterationCount = stepsArray.length;
  intro.innerText = steps.step;
  step++;

  if (step < stepsArray.length) {
    setTimeout(update, steps.stepDelay / stepDivisor);
  } else {
    wrapContent.style.transitionDuration = hideDuration + "ms";
    wrapContent.style.transitionTimingFunction = "ease-out";
    wrapContent.style.transitionDelay = hideDuration + "ms";
    wrapContent.style.opacity = 1;
    intro.style.transitionDuration = hideDuration + "ms";
    intro.classList.add("top");
    setTimeout(function hide() {
      intro.classList.add("hide");
    }, hideDuration);
  }
}
update();
