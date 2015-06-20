module.exports = function(peopleInLine){
  console.log(peopleInLine);
  var remain = peopleInLine[0];
  var change = 0;
  var quarter = 0;
  var half = 0;
  var one = 0;

  if (remain > 25) {
    return "NO";
  } else quarter++;


  for (var i = 1; i < peopleInLine.length; i++) {
    if(peopleInLine[i] == 25) {
      quarter++;
    }

    if(peopleInLine[i] == 50) {
      half++;
    }

    if(peopleInLine[i] == 100) {
      one++;
    }

    change = peopleInLine[i] - 25;

    if (remain < change) {
      return "NO";
    }

    if (change == 0) {
      remain = remain + 25;
    }
    if (change == 25) {
      if (quarter > 0) {
        quarter--;
        remain = remain + 25;
      } else {
        return "NO";
      }
    }
    if (change == 75) {
        if ((half > 0 && quarter < 1) || (half < 1 && quarter < 3)) {
          return "NO";
        }

      if (half > 0 && quarter > 0) {
        half--;
        quarter--;
        remain = remain + 25;
      }
      if (half < 1 && quarter > 2) {
        quarter = quarter - 3;
        remain = remain + 25;
      }

    }
  }

  return "YES";
}
