/*eslint-env browser*/
"use strict";

let number = parseInt(prompt ("Enter a number."));

if (number >= 0 ) {
    for (let i =number; i >= 0; i--) {
        console.log (number);
        number--;
    }
}
