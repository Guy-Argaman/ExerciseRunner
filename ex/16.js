console.log("Ex 16 Solution!!!");

// 16. Write a function named isEven that gets a number, and returns true if the number is 
// even. Otherwise the function will return false.

isEven(16);

function isEven(x) {

    if (x % 2 === 0) {
        return console.log('The remainder is 0, therefore the result is:', true)
    } else {
        return console.log('The remainder is not 0, therefore the result is:', false)
    }
}