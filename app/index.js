const checkAllVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];

  return vowels.every((vowel) => word.includes(vowel));
};

const checkIfEven = (checkNumber) => {
  if (checkNumber % 2 === 0) {
    return true;
  }

  return false;
};

exports.checkAllVowels = checkAllVowels;
exports.checkIfEven = checkIfEven;
