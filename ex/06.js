console.log("Ex 06 Solution!!!");

//6. Read 3 variables from the user: a, b, c. These will be the a, b, c variables of a  .equation quadratic

var a = +prompt('Please choose a number');
var b = +prompt('Please choose a number');
var c = +prompt('Please choose a number');

console.log(-b);
console.log(2 * a);
console.log('Equation solution: ', (b * b) - (4 * a * c));

console.log('(b * b) - (4 * a * c)');

var result1 = (-b + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
var result2 = (-b - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a);
console.log(`The equation's first result is: ${result1}`);
console.log(`The equation's second result is: ${result2}`);

