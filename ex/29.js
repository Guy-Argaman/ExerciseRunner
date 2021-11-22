'use strict'
console.log("Ex 29 Solution!!!");

// 29.Read a number from the user (keep it as string such as “24367”) and then:
// a. Basic operations:
// i. Print each of its digits in a separate line.
// ii. Calculate the sum of its digits.
// iii. Calculate the multiplication (מכפלה (of its digits
// iv. Sum it’s first and last digits.
// v. Print it with it’s first and last digits swapped (2731=>1732)
// vi. Check whether it’s symmetric (like this number: 95459)
// vii. Print the number reversed (BONUS: as a number and not as string).
// b. BONUS: Special Numbers
// i. Check if the number is an Armstrong number. I.e 371 is an Armstrong 
// number: 33+73+13 =371. If the number passed the test, print it to the 
// console.
// ii. Check if the number is a Perfect number. Perfect number is a number 
// that the sum of all its dividers is the number itself. I.e 6 is a perfect 
// number (1+2+3). 

getInput();
function getInput() {

    var userInput = prompt('Enter a number');
    console.log('User\'s input', userInput);
    var sum = 0;
    var i = 0;
    var multi = 1;
    while (i < userInput.length) {
        var currDigit = parseInt(userInput.charAt(i));

        multi *= currDigit;
        sum += currDigit;

        console.log('Each character of user\'s input', userInput.charAt(i) + '\n');
        i++;
    }
    var firstDigit = parseInt(userInput.charAt(0))
    var lastDigit = parseInt(userInput.charAt(userInput.length - 1))
    console.log('Sum', sum);
    console.log('Multi', multi);
    console.log('First digit and last digit of the user\'s input', firstDigit, lastDigit);
    console.log('First and last digits swapped', userInput.charAt(userInput.length - 1) + userInput.substring(1, userInput.length - 1) + userInput.charAt(0))
    console.log('Checking whether the number is symmetric true = yes, false = no', checkIsSymmetric(parseInt(userInput)));
    reverseString(userInput)
}

// Unit Testing
// var num = 12321;
// var res = checkIsSymmetric(num);
// console.log(num + ' - Expecting: true, Got:' + res);

// num = 15644;
// res = checkIsSymmetric(num)
// console.log(num + ' - Expecting: false, Got:' + res);

// num = 456654;
// res = checkIsSymmetric(num)
// console.log(num + ' - Expecting: true, Got:' + res);

function checkIsSymmetric(num) {

    var length = ('' + num).length
    var divider = 10 ** (length - 1)
    while (num > 9) {

        var rightDigit = num % 10
        var leftDigit = parseInt(num / divider)

        if (rightDigit !== leftDigit) return false

        // remove right digit
        num = parseInt(num / 10)
        divider /= 10
        // remove left digit
        num -= (divider * leftDigit)
        divider /= 10
    }

    return true
}

function reverseString(str) {
    var reversedString = '';
    console.log('User\'s input length', str.length);
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log('Revesred userinput', reversedString);
}



