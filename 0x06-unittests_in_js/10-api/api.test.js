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

  it("return correct name on login", function(done) {
    request.get(`${API_URL}/login`, {json: {userName: 'Maina'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal("Welcome Maina");
      done();
    })
  });

  it("return correct object on /available_payments", function(done) {
    request.get(`${API_URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.deep.equal({"payment_methods":{"credit_cards":true,"paypal":false}});
      done();
    })
  });
});
