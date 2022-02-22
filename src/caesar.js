const caesarModule = (function () {
  function caesar(input, shift, encode) {
    //Error handling
    if (shift < -25 || shift > 25 || shift === 0 || !shift) return false;
    if (encode === false) {
      shift = shift * -1;
    }
    const alphabet = [
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
    const codedMessage = [];

    //Encode and decode
    input.split("").forEach((char) => {
      const charToLower = char.toLowerCase();
      const alphIncludesChar = alphabet.includes(charToLower);
      const position = alphabet.indexOf(charToLower);
      const newPosition = (position + shift) % 26;

      if (shift > 0) {
        if (alphIncludesChar) {
          codedMessage.push(alphabet[newPosition]);
        } else {
          codedMessage.push(charToLower);
        }
      }
      if (shift < 0) {
        if (alphIncludesChar) {
          if (newPosition < 0) {
            let negNum = newPosition + alphabet.length;
            codedMessage.push(alphabet[negNum]);
          } else {
            codedMessage.push(alphabet[newPosition]);
          }
        } else {
          codedMessage.push(charToLower);
        }
      }
    });
    return codedMessage.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };