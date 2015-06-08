var A = ['a','b','c'];
for (var i = 0; i < 3; i++){
    (function(i) {
        setTimeout(function() {
            console.log(A[i]);
        },(i+1)*1000);
    })(i);
}
