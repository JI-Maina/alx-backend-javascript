const { expect } = require("chai");
const request = require("request");

const API_URL = 'http://localhost:7865';

describe("API integration test", function() {
  it("return correct response on te base url", function(done) {
    request.get(`${API_URL}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal("Welcome to the payment system");
      done();
    })
  });

  it("return correct response when id is a number", function(done) {
    request.get(`${API_URL}/cart/12`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal("Payment methods for cart 12");
      done();
    })
  });

  it("return correct response when id is not a number", function(done) {
    request.get(`${API_URL}/cart/hello`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      // expect(res.body).to.be.equal("Cannot GET /cart/hello");
      done();
    })
  });
});
