var assert = require('assert');
var digitize = require('./digitize.js');

describe('split a number into an array', function() {
  var nu = 123;

  it('should be equal', function() {
    assert.deepEqual(digitize(nu), [1, 2, 3]);
  });
})
