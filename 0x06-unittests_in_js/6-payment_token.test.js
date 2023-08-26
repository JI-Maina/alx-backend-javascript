const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token.js');
  
describe('getPaymentTokenFromAPI', function () {
  it('should return an obect if argurment is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(result => {
        assert(result, {data: 'Successful response from the API' });
        done();
      })
  });
});
