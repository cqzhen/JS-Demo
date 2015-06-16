var assert = require('assert');
var make_lazy = require('./make_lazy.js');

describe('lazy_function', function() {
  var add = function(a, b) {
    return a+b;
  };

  var add_value = make_lazy(add, 1, 2);

  it('should be equal', function() {
    assert.equal(add_value(), 3);
  });

  var mutiple = function(a, b) {
    return a*b;
  };

  var mutiple_value = make_lazy(mutiple, 2, 3);

  it('should be equal', function() {
    assert.equal(mutiple_value(), 6);
  })
})
