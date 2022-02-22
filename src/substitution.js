const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    //Error handling
    if (!alphabet || alphabet.length !== 26) return false;

    //Checking if alphabet has no duplicates
    const newAlphabet = alphabet.split("");
    const hasDuplicate = newAlphabet.some(
      (char, i) => newAlphabet.indexOf(char) !== i
    );
    if (hasDuplicate) {
      return false;
    }

    let localAlphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const newWord = [];

    input.split("").forEach((char, index) => {
      let charToLower = char.toLowerCase();
      if (encode) {
        if (charToLower === " ") {
          newWord.push(charToLower);
        } else {
          if (localAlphabet.includes(charToLower)) {
            newWord.push(newAlphabet[localAlphabet.indexOf(charToLower)]);
          }
        }
      } else {
        if (charToLower === " ") {
          newWord.push(charToLower);
        } else {
          if (newAlphabet.includes(charToLower)) {
            newWord.push(localAlphabet[newAlphabet.indexOf(charToLower)]);
          }
        }
      }
    });
    return newWord.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };