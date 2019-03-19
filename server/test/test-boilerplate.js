const assert = require("assert");

// A test to test the tests
describe("Array", () => {
  describe("#indexOf()", () => {
    it("should return -1 when the value is not present", () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Real tests start below
