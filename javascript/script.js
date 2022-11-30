import { code, convertToMorse } from "../modules/modules.js";

// English text area
const engInput = document.querySelector("#englishTranslation");

//Morse Output area
const morseOutput = document.querySelector("#morseTranslation");

// Submit button
const submitBtn = document.querySelector("#submitBtn");
console.log(submitBtn);

engInput.addEventListener("input", () => {
  morseOutput.value = convertToMorse(engInput.value);
});
