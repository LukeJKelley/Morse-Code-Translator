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
console.log(morseOutput.value);
// Fix above line

// Submit button
const submitBtn = document.querySelector("#submitBtn");
console.log(submitBtn);

// submitBtn.addEventListener("click", () => {
//   engInput.value = "translated";
//   console.log(morseOutput.value);
// });

morseOutput.addEventListener("input", () => {
  engInput.value = morseOutput.value;
});
