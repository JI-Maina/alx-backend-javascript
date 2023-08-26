const { expect } = require("chai");
const request = require("request");

const APL_URL = 'http://localhost:7865';

describe("API integration test", function() {
  it("return correct response on call GET /", function(done) {
    request.get(`${APL_URL}`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(res.body).to.be.equal("Welcome to the payment system");
      done();
    })
  });
});
