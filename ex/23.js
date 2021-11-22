'use strict'
console.log("Ex 23 Solution!!!");

// 23. Write the function getFactorial that gets a number and returns n! (Google factorial if 
//     you are not sure what is the mathematical definition of it).

getFactorial(8);
function getFactorial(num) {

    var currNum = 1;
    while (num > 0) {
        currNum *= num;
        num--;
    }
    console.log('currNum', currNum);
}

