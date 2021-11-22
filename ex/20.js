'use strict'
console.log("Ex 20 Solution!!!");

// 20.Read 10 numbers from the user and print: 
// a. The maximum number.
// b. The minimum number.
// c. The average.

var sum = 0;
var max = -Infinity;
var min = Infinity;
var count = 0;
while (count < 10) {
    var userNum = +prompt('Enter a number');
    // Finding the maximum number by comparing the current input to the maximum variable
    if (userNum > max) {
        max = userNum;
    }
    // Finding the minimum number by comparing the current input to the minimum variable
    if (userNum < min) {
        min = userNum;
    }
    // Finding the average by replacing the average variable with the current num with the new value plus the old value 
    sum += userNum;
    console.log('num ', userNum);
    count++;
}
//  Dividing the sum by the number of iterations and assigning it a new variable
var avg = sum / count;
console.log('The maximum number is:', max);
console.log('The minimum number is:', min);
console.log('The average is:', avg);