const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  it("Should return 42 for i or j", () => {
    expect(polybius("i")).to.equal("42");
    expect(polybius("i")).to.equal("42");
  });

  it("Should return i/j for 42", () => {
    expect(polybius("42", false)).to.equal("ij");
  });

  it("Should ignores capital letters", () => {
    const withCapital = polybius("A Message");
    const withoutCapital = polybius("a message");
    expect(withCapital).to.equal(withoutCapital);
  });

  it("Should maintains spaces", () => {
    const expected = " 3251131343 2543241341 ";
    expect(polybius(" Hello World ")).to.equal(expected);
  });
});