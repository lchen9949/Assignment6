/*eslint-env browser*/
"use strict";
let number1 = parseInt(prompt("Enter the first number."));
let number2 = parseInt(prompt("Enter the second number."));
if (number1 > number2) {
    document.write("number1: "+ number1 +" is larger.");
}
else if (number1 == number2) {
    document.write("The two numbers are equal.");
}
else {
    document.write("number2: "+ number2 +" is larger.");
}
