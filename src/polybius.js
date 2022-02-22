const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const alphabet = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    let codedMessage = [];

    if (!encode) {
      if (input.replace(" ", "").length % 2 !== 0) return false;
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          codedMessage.push(input[i]);
          i += 1;
        }
        let char = input[i] + input[i + 1];
        for (let key in alphabet) {
          if (alphabet[key] === char) {
            codedMessage.push(key);
          }
        }
      }
    } else {
      for (let i = 0; i < input.length; i++) {
        let char = input[i].toLowerCase();
        if (char === " ") {
          codedMessage.push(char);
        } else {
          for (let key in alphabet) {
            if (key === char) {
              codedMessage.push(alphabet[char]);
            }
          }
        }
      }
    }
    return codedMessage.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };