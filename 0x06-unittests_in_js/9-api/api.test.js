const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  const API_URL = 'http://localhost:7865';

  it('should return a welcome message for GET /', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system'); // Verifies the response content is correct
      done();
    });
  });

  it('should return payment methods for valid cart ID on GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47'); // Checks proper response for a valid numeric ID
      done();
    });
  });

  it('should return 404 for a negative cart ID on GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404); // Ensures invalid IDs (negative numbers) are not accepted
      done();
    });
  });

  it('should return 404 for non-numeric cart ID on GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404); // Validates rejection of non-numeric cart IDs
      done();
    });
  });
});

