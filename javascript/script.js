const code = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

// English text area
const engInput = document.querySelector("#englishTranslation");
console.log(engInput);

//Morse Output area
const morseOutput = document.querySelector("#morseTranslation");
console.log(morseOutput);
// Fix above line

// Submit button
const submitBtn = document.querySelector("#submitBtn");
console.log(submitBtn);

const createElement = (elementType, text, parent) => {
  const newElement = document.createElement(elementType);

  const textNode = document.createTextNode(text);

  newElement.appendChild(textNode);

  parent.appendChild(newElement);
};

submitBtn.addEventListener("click", () => {
  createElement("p", engInput.value, morseOutput);
});
