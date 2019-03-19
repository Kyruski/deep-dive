const assert = require("assert");
const chai = require("chai")

// A test to test the tests
describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// Tests for API calls start below
describe('/GET VoterId', () => {
  it('it should GET all states VoterId requirements', (done) => {
    chai.request("http://localhost:8000")
      .get("/voterId")

  })
})
