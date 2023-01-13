import { convertToMorse, convertToEnglish } from "./morseUtils.js";

describe("Test if morse code translates to english correctly", () => {
  test("Translates english words to morse code", () => {
    expect(convertToMorse("hello")).toBe(".... . .-.. .-.. ---");
  });
  test("Translates numbers to morse code", () => {
    expect(convertToMorse("1234")).toBe(".---- ..--- ...-- ....-");
  });
  test("Translates capital letters", () => {
    expect(convertToMorse("HEY")).toBe(".... . -.--");
  });
  test("Translate symbols", () => {
    expect(convertToMorse("($$!)")).toBe("-.--. ...-..- ...-..- -.-.-- -.--.-");
  });
  test("Translates capital letters, symbols, spaces and numbers together", () => {
    expect(convertToMorse("He11o & B3y")).toBe(
      ".... . .---- .---- ---   .-...   -... ...-- -.--"
    );
  });
  test("Outputs any symbol not in the code dictionary as it is typed", () => {
    expect(convertToMorse("///")).toBe("/ / /");
  });
  test("Morse converts to english and joins the letters to form a word", () => {
    expect(convertToEnglish("... --- ...")).toBe("sos");
  });
  test("Morse converts numbers and symbols", () => {
    expect(convertToEnglish("..--.. .---- ..--- ...-- -.-.--")).toBe("?123!");
  });
  test("When there is two spaces between a character in morse code it accepts that is the start of a new word", () => {
    expect(convertToEnglish(".... . .-.. .-.. ---  .-- --- .-. .-.. -..")).toBe(
      "hello world"
    );
  });
});
