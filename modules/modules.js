export const code = {
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
  V: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  ",": "--..--",
  ".": ".-.-.-",
  "?": "..--..",
  ";": "-.-.-",
  ":": "---...",
  "/": "-..-.",
  "-": "-....-",
  "'": ".----.",
  "(": "-.--.",
  ")": "-.--.-",
  "@": ".--.-.",
  "!": "-.-.--",
  "&": ".-...",
  "=": "-...-",
  "+": ".-.-.",
  '"': ".-..-.",
  $: "...-..-",
  _: "..--.-",
};

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


//rename convert to morse
//make new file convert to english

//Flip the array or grab the key
//wrap
//split at " space"
//map
//join empty string instead of empty space

// morse or english

// regex check anything other than -.
//check google
// you for very check
//split array key to empty space