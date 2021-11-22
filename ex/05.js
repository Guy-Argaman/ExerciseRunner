console.log("Ex 05 Solution!!!");

// 5. Read 3 digits from the user and print the number in full: 
// for example: if the user entered the numbers 3,2,6, we should store them in a 
// variable holding the value of 326 and then print that variable to the console. 
// ● BONUS: In this case, working with strings is easier, try solving the task while 
// using numeric variables.

var num1 = prompt('Please insert the first number.');
var num2 = prompt('Please insert the second number.');
var num3 = prompt('Please insert the third number.');

console.log('User\'s selected numbers: ' + num1, num2, num3);

var nums = `${num1} ${num2} ${num3}`;

console.log('Numbers presented in the console: ' + nums);