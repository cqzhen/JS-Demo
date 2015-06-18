exports.all = function(n) {
  var num = n - 1;
  while (num > 1) {
   if (n % num == 0) { return false;}
   num--;
  }
  return n > 1;
};

exports.sqrt = function(n) {
  var prime = true;

  if (n < 2) {
    prime = false;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n%i == 0) {
        prime = false;
        break;
      }
    }
  }

  return prime;
};


exports.half = function (n){
  for (var i = 2; i <= n / 2; i++) {
    if (!(n % i)) {
      return false;
    }
  }

  return n >= 2;
};
