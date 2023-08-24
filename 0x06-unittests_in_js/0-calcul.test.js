const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe("calculateNumber test", function() {
  it("should return +ve when +ve no's are passed", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("should return +ve when a is 1 and b is 3.7", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("should return +ve when a is 1.2 and b is 3.7", function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("should round to whole no when a is 1.5 and b is 3.7", function() {
    assert.equal(calculateNumber(1.5, 3.7), 5);
  });
  it("should return +ve when a is 0 and b is 3.7", function() {
    assert.equal(calculateNumber(0, 3.7), 4);
  });
  it("should return 0 when a is 0 and b is 0", function() {
    assert.equal(calculateNumber(0, 0), 0);
  });
});
