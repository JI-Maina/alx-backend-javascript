const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
  it('should return 6 when a is 1.4 and b is 4.5', function() {
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });

  it('should return -4 when a is 1.4 and b is 4.5', function() {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return 0.2 when a is 1.4 and b is 4.5', function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it("should return 'Error' when a is 1.4 and b is 0", function() {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it("should return 'undefined' when type is 'Sum'", function() {
    assert.equal(calculateNumber('Sum', 1.4, 0), undefined);
  });

  it("should return 'undefined' when type is 'sum'", function() {
    assert.equal(calculateNumber('sum', 1.4, 0), undefined);
  });
});
