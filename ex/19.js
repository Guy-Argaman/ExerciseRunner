'use strict'
console.log("Ex 19 Solution!!!");

// 19. Read 10 numbers from the user, if the number is even, print it, otherwise print that 
// the number is odd. 

var count = 0;
while (count < 10) {
    var num = +prompt('Enter a number');
    if (num % 2 === 0) {
        console.log(`The number \'${num}\' is even `);
    } else if (num % 2 !== 0) {
        console.log(`The number \'${num}\' is odd`);
    } else {
        break;
    }
    count++;
}