console.log("Ex 07 Solution!!!");

// 7. Read 3 numbers from the user and check if the 3rd is the sum of the first two, if so, 
// print all the numbers to the console in this way: 6 + 4 = 10

var num1 = +prompt('Please choose a number');
var num2 = +prompt('Please choose a number');
var num3 = +prompt('Please choose a number');


var sum = num1 + num2;

if (num3 === sum) {
    console.log(`${num1} + ${num2} = ${num3}`);
}
else {
    console.log(`${num3} is not the sum of ${num1} + ${num2}`)
}


