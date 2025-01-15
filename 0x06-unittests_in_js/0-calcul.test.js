const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber Tests', () => {
  it('should correctly add two whole numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });

  it('should round down and add when b has fractional part', () => {
    assert.strictEqual(calculateNumber(1.0, 2.4), 3);
  });

  it('should round down both numbers with fractional parts and add', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('should round down and add when a has fractional part', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('should round up and add when b has fractional part >= 0.5', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('should round up both numbers with fractional parts >= 0.5 and add', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('should round up and add when a has fractional part >= 0.5', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });

  it('should handle fractional parts close to 0.5 correctly for both numbers', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});

