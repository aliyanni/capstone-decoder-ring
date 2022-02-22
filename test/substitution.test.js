const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
  it("Should return false if alphabet is not 26 chars long", () => {
    const expected = false;
    expect(substitution("test", "xoyqmcgrukswaflnthdjpzbev")).to.equal(
      expected
    );
    expect(substitution("test", "xoyqmcgrukswaflnthdjpfdzibev")).to.equal(
      expected
    );
  });

  it("Should correctly translates the given phrase", () => {
    const expected = "jrufscpw";
    const expected2 = "elp xhm xf mbymwwmfj dne";
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal(
      expected
    );
    expect(
      substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.equal(expected2);
  });

  it("Should return false if there are any duplicates in given alphabet", () => {
    const expected = false;
    expect(substitution("test", "xoyqmcgrukswaflntxdjpzibev")).to.equal(
      expected
    );
  });

  it("Should maintains spaces in the message", () => {
    const expected2 = " thinkful thinkful thinkful ";
    expect(
      substitution(
        " jrufscpw jrufscpw jrufscpw ",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      )
    ).to.equal(expected2);
  });

  it("Should ignores capital letters", () => {
    const expected = "xoyqm";
    expect(substitution("AbCdE", "xoyqmcgrukswaflnthdjpzibev")).to.equal(
      expected
    );
  });
});