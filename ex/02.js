console.log("Ex 02 Solution!!!");

//2. Read two numbers and print (to the console) the result of the following operations
//  on them: (% ,/ ,*)

var num1 = prompt('Please insert a number')
var num2 = prompt('Please insert a second number')

console.log(`The remainder of the first number you selected: (${num1}), and the second number you selected: (${num2}), is: ` + num1 % num2)
console.log(`The division of the first number you selected: (${num1}) and the second number you selected: (${num2}) is: ` + num1 / num2)
console.log(`The multiplication of the first number you selected (${num1}), and the second number you selected: (${num2}), is: ` + num1 * num2)