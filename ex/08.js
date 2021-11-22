console.log("Ex 08 Solution!!!");

// 8. Read 3 numbers from the user and print the smallest one.

var num1 = +prompt('Please choose a number');
var num2 = +prompt('Please choose a number');
var num3 = +prompt('Please choose a number');

// OPTION 1: console.log(Math.min(num1, num2, num3));

// OPTION 2 listed below:
if (num1 < num2 && num1 < num3) {
    console.log(`Minimum Number: ${num1}`)
} else if (num2 < num1 && num2 < num3) {
    console.log(`Minimum Number: ${num2}`)
} else if (num3 < num1 && num3 < num2) {
    console.log(`Minimum Number: ${num3}`)
} else if ((num1 === num2 && num1 < num3)) {
    console.log(`Two minimum numbers found: ${num1}, ${num2}`)
} else if (num1 === num3 && num1 < num2) {
    console.log(`Two minimum numbers found: ${num1}, ${num3}`)
} else if (num2 === num3 && num2 < num1) {
    console.log(`Two minimum numbers found: ${num2}, ${num3}`)
} else {
    console.log('All numbers are equal.')
}

