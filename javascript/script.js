import { convertToMorse, convertToEnglish } from "../modules/morseUtils.js";

// English text area
const engInput = document.querySelector("#englishTranslation");

//Morse Output area
const morseOutput = document.querySelector("#morseTranslation");

// English to Morse button
const engBtn = document.querySelector("#engBtn");
console.log(engBtn);

// Morse to English button
const morseBtn = document.querySelector("#morseBtn");
console.log(morseBtn);

engBtn.addEventListener("click", () => {
  morseOutput.value = convertToMorse(engInput.value);
});

morseBtn.addEventListener("click", () => {
  engInput.value = convertToEnglish(morseOutput.value);
});
