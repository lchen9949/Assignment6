/*eslint-env browser*/
"use strict";
let coinFlip = Math.round(Math.random() * 100);
let choice = prompt("Select the Heads or Tails.");
let gussresult = false;
document.write("<p>The coinFlip's random number is: "+coinFlip+ ".<\p>");
if ( coinFlip >= 50) {
    gussresult = true;
    if (choice =="Heads") {
        document.write("The flip was heads and you chose heads...you win!");
    }
    else {
        document.write("The flip was heads but you chose tails...you lose!");
    }
}
else {
    gussresult = false;
    if (choice =="Heads") {
        document.write("The flip was tails but you chose heads...you lose!");
    }
    else {
        document.write("The flip was tails and you chose tails...you win!");
    }
}
