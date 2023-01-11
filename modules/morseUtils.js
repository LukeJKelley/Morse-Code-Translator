import { code } from "../modules/array.js";

export const convertToMorse = (str) => {
  return str
    .toUpperCase()
    .split("")
    .map((el) => {
      if (code[el]) {
        return code[el];
      }
      return el;
    })
    .join(" ");
};

export const convertToEnglish = (str) => {
  const keys = Object.keys(code);
  let result = str
    .split(" ")
    .map((val) => keys.find((key) => code[key] === val))
    .join("")
    .toLowerCase();
  return result;
};
