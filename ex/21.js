'use strict'
console.log("Ex 21 Solution!!!");

// 21.Read numbers from the user, until the number 999 is entered. For each number:
// a. Print if it’s divided by 3.
// b. Print whether this number is much bigger (more than 10) than the previous 
// number.

var count = 0;
var currNum = 0;

while (userNum !== 999) {
    var userNum = +prompt('Enter a number (In order to exit the program type \'999\')')
    if (userNum === 999) {
        break;
    }
    if (userNum % 3 === 0) {
        console.log(`The number ${userNum} is divided by 3.`)
    }
    var diff = userNum - currNum;
    if (diff >= 10) {
        console.log(`The number ${userNum} is bigger than ${currNum}`)
    }
    currNum = userNum;
    count++;
}
