var assert = require('assert');
var ticket = require('./ticket.js');

describe('ticket', function() {
  var test_1 = [25, 25, 25, 25, 25, 100, 100];

  it('should be equal', function() {
    assert.equal(ticket(test_1), "NO");
  });

  var test_2 = [ 25, 25, 50, 50 ];
  it('should be equal', function() {
    assert.equal(ticket(test_2), "YES");
  });

  var test_3 = [ 25, 25, 25, 25, 50, 100, 50 ];
  it('should be equal', function() {
    assert.equal(ticket(test_3), "YES");
  });

  var test_4 = [ 25, 50, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100, 50, 50 ];
  it('should be equal', function() {
    assert.equal(ticket(test_4), "NO");
  });
})
