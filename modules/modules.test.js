import { convertToMorse } from "./modules.js";

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
});
