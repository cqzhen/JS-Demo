var assert = require('assert');
var prime = require('./prime.js');

describe('prime number', function() {
  it('should be equal', function() {
    assert.equal(prime.all(2), true);
    assert.equal(prime.all(4), false);
    assert.equal(prime.all(5), true);
    assert.equal(prime.all(7), true);
    assert.equal(prime.all(77), false);
  });

  it('should be equal', function() {
    assert.equal(prime.half(2), true);
    assert.equal(prime.half(4), false);
    assert.equal(prime.half(5), true);
    assert.equal(prime.half(7), true);
    assert.equal(prime.half(77), false);
  });

  it('should be equal', function() {
    assert.equal(prime.sqrt(2), true);
    assert.equal(prime.sqrt(4), false);
    assert.equal(prime.sqrt(5), true);
    assert.equal(prime.sqrt(7), true);
    assert.equal(prime.sqrt(77), false);
  });
});
