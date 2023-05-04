import {
  checkAllVowels,
  checkIfEvenNumber,
  checkIfIsPrimeNumber,
} from "./index";

describe("Given checkAllVowels function", () => {
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

describe("Given checkIfEvenNumber function", () => {
  describe("When it receives a even number", () => {
    test("Then it should return true", () => {
      const evenNumber = 4;
      const expectedBoolean = true;

      const check = checkIfEvenNumber(evenNumber);

      expect(check).toBe(expectedBoolean);
    });
  });

  describe("When it receives a odd number", () => {
    test("Then it should return false", () => {
      const oddNumber = 3;
      const expectedBoolean = false;

      const check = checkIfEvenNumber(oddNumber);

      expect(check).toBe(expectedBoolean);
    });
  });
});

describe("Given checkIfIsPrimeNumber function", () => {
  describe("When it recives a prime number", () => {
    test("Then it should return true", () => {
      const primeNumber = 17;
      const expectedBoolean = true;

      const check = checkIfIsPrimeNumber(primeNumber);

      expect(check).toBe(expectedBoolean);
    });
  });

  describe("When it recives a number that is not prime", () => {
    test("Then it should return false", () => {
      const notPrimeNumber = 15;
      const expectedBoolean = false;

      const check = checkIfIsPrimeNumber(notPrimeNumber);

      expect(check).toBe(expectedBoolean);
    });
  });
});
