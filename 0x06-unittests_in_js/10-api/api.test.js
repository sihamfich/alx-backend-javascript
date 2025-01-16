const request = require('request');
const { expect } = require('chai');

describe('API Integration Tests', () => {
  const API_URL = 'http://localhost:7865';

  it('should return a welcome message for GET /', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system'); // Validates response content for root endpoint
      done();
    });
  });

  it('should provide payment methods for a valid cart ID on GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47'); // Checks response for a valid numeric cart ID
      done();
    });
  });

  it('should return 404 for negative cart IDs on GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404); // Confirms API rejects negative cart IDs
      done();
    });
  });

  it('should return 404 for non-numeric cart IDs on GET /cart/:id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404); // Ensures non-numeric cart IDs are rejected
      done();
    });
  });

  it('should return a personalized welcome message for POST /login', (done) => {
    request.post(`${API_URL}/login`, { json: { userName: 'Pinkbrook' } }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Pinkbrook'); // Verifies user-specific login response
      done();
    });
  });

  it('should return available payment methods for GET /available_payments', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } }); // Validates available payment methods
      done();
    });
  });
});

