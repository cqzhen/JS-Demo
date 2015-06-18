module.exports = function(n) {
  var result = [];

    while (n/10 > 0) {
      result.unshift(n%10);
      n = parseInt(n/10);
    }

    return result;
}
