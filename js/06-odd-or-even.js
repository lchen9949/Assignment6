/*eslint-env browser*/
"use strict";

var number = 0;
var i;
for (i=0; i<16; i++) {
    if (number % 2 === 0 ) {
        console.log (number + " is even");
    }
    else {
        console.log (number + " is odd");
    }

    number ++;
}