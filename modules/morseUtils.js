import { code } from "./morse-english-dictionary.js";

export const convertToMorse = (str) => {
  return str
    .toUpperCase()
    .split("")
    .map((el) => {
      return code[el] || el;
    })
    .join(" ");
};

export const convertToEnglish = (str) => {
  const keys = Object.keys(code);
  let result = "";
  str.split(" ").forEach((val, index) => {
    if (val === "" && str.split(" ")[index - 1] !== "") {
      result += " ";
    } else {
      const englishVal = keys.find((key) => code[key] === val);
      if (englishVal) {
        result += englishVal;
      }
    }
  });
  return result.toLowerCase();
};
