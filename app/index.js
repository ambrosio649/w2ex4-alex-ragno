export const checkAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

export const checkIfEvenNumber = (numberToCheckIfIsEven) => {
  if (numberToCheckIfIsEven % 2 === 0) {
    return true;
  }

  return false;
};

export const checkIfIsPrimeNumber = (numberToCheckIfIsPrime) => {
  for (let count = 2; count < numberToCheckIfIsPrime; count++) {
    if (numberToCheckIfIsPrime % count === 0) {
      return false;
    }
  }

  return true;
};
