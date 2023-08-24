const chai = require('chai');
const calculateNumber = require('./1-calcul.js');

const expect = chai.expect;

describe('calculateNumber', function() {
  it('should return 6 when a is 1.4 and b is 4.5', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.be.equal(6);
  });

  it('should return -4 when a is 1.4 and b is 4.5', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.be.equal(-4);
  });

  it('should return 0.2 when a is 1.4 and b is 4.5', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.equal(0.2);
  });

  it("should return 'Error' when a is 1.4 and b is 0", function() {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.be.equal('Error');
  });

  it("should return 'undefined' when type is 'Sum'", function() {
    expect(calculateNumber('Sum', 1.4, 0)).to.be.equal(undefined);
  });

  it("should return 'undefined' when type is 'sum'", function() {
    expect(calculateNumber('sum', 1.4, 0)).to.be.equal(undefined);
  });
});
