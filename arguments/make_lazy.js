module.exports = function() {
  var args = Array.prototype.slice.call(arguments);
  var method = args.shift();
  return function() {
    return method.apply(null, args);
  }
}
