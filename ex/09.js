console.log("Ex 09 Solution!!!");

// 9. Read 2 positive numbers from the user. Calculate the difference between the two of 
// them (the absolute value)

var num1 = +prompt('Please choose a number');
var num2 = +prompt('Please choose a second number');
var diff = num1 - num2;

if (num1 < num2 || num1 > num2) {
    console.log(diff);
}
if (diff < num1 && diff < num2) {
    console.log('Relatively Close!')
}