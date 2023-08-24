const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe("calculateNumber test", function() {
  it("should return +ve when +ve no's are passed", function() {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it("should return 5 when a is 1 and b is 3.7", function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it("should return 5 when a is 1.2 and b is 3.7", function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it("should return 6 when a is 1.5 and b is 3.7", function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it("should return 4 when a is 0 and b is 3.7", function() {
    assert.equal(calculateNumber(0, 3.7), 4);
  });
  it("should return 0 when a is 0 and b is 0", function() {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it("should return 2 when a is 0.5 and b is 0.5", function() {
    assert.equal(calculateNumber(0.5, 0.5), 2);
  });
  it("should return 0 when a is 0.3 and b is 0.4", function() {
    assert.equal(calculateNumber(0.4, 0.4), 0);
  });
  it("should return 1 when a is 0.7 and b is 0.3", function() {
    assert.equal(calculateNumber(0.7, 0.3), 1);
  });
});
