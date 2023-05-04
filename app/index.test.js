import { checkAllVowels, checkIfEven } from "./index";

describe("Given a check vowels function", () => {
  describe("When it receives a word", () => {
    test("Then it should return true", () => {
      const word = "murcielago";
      const expectedBoolean = true;

      const check = checkAllVowels(word);

      expect(check).toBe(expectedBoolean);
    });
  });

  describe("When it receives a word", () => {
    test("Then it should return false", () => {
      const word = "perro";
      const expectedBoolean = false;

      const check = checkAllVowels(word);

      expect(check).toBe(expectedBoolean);
    });
  });
});

describe("Given check even number function", () => {
  describe("When it receives a even number", () => {
    test("Then it should return true", () => {
      const evenNumber = 4;
      const expectedBoolean = true;

      const check = checkIfEven(evenNumber);

      expect(check).toBe(expectedBoolean);
    });
  });

  describe("When it receives a odd number", () => {
    test("Then it should return false", () => {
      const oddNumber = 3;
      const expectedBoolean = false;

      const check = checkIfEven(oddNumber);

      expect(check).toBe(expectedBoolean);
    });
  });
});
