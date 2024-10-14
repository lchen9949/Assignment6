/*eslint-env browser*/
"use strict";

var number = 1;
var i;
let str = "";
for (i=0; i<100; i++) {

    if (number % 3 === 0 && number % 5 === 0 ) {
        let str3 = `  Marco! Polo!`;
        str += str3;
    }
    else if (number % 5 === 0 ) {
        let str2 = `  Polo!`;
        str += str2;
    }
    else if (number % 3 === 0 ) {
        let str1 = `  Marco!`;
        str += str1;
    }
    else {
        let str4 = `  ${number}`;
        str += str4;
    }

    number++
}
console.log (str);