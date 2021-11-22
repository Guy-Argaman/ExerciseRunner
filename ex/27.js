'use strict'
console.log("Ex 27 Solution!!!");

// 27. Asterisks! 
// a. Write the function getAsterisks(length) that returns a string containing asterisks 
// according to the number supplied.
// For example: when the requested length is 4, it returns '****' 
// b. Write a function named: getTriangle(height) that returns a triangle:

// (the parameter value here is 4)
// Hint: use the function getAsterisks in a loop. Also, use ‘\n’ to create a new line.
// c. Write a function named: getMusicEqualizer(rowsCount) that generates random 
// numbers between 1 and 10 and return columns in random lengths: 

// d. Write a function that returns a block of asterisks (*) by the following parameters: 
// rowsCount and colsCount. I.e: for 4, 5 
// Now, return only the outline:Copyright 2020 © misterBIT
// e. Surprise, there is a new requirement to support any character (not necessarily 
// asterisk), how easy would it be to refactor your code? The character should be 
// decided by the user


// getLine(10);
function getLine(length) {
    var count = 0;
    var str = '';
    while (count < length) {
        str += '*';
        count++;
    }
    // console.log(str);
    return str;
}

// getTriangle(5);
function getTriangle(height) {
    var count = 0;
    var str = '';

    while (count < height) {
        str += '*';

        console.log(str);
        count++;
    }

    while (count > 1) {
        str = str.substring(1);
        console.log(str);
        count--;
    }
}

// getMusicEqualizer(3);
function getMusicEqualizer(rowsCount) {
    var i = 0;
    while (i < rowsCount) {
        var count = 0;
        var str = '';
        i++;
        while (count < getRandomInt(1, 10)) {
            str += '*';
            count++;
        }
        console.log(str);
    }
}


// getBlock(5, 5)
function getBlock(rowsCount, colsCount) {

    var count = 0;
    var str = '';
    while (count < rowsCount) {
        str += '*';
        count++;
    }

    var count1 = 0;
    var newLine = '';
    while (count1 < colsCount) {
        newLine += '\n' + str;
        count1++;
    }
    console.log(str, newLine);
}

// getOutline(11, 11)
function getOutline(rowsCount, colsCount) {
    var count = 0;
    var str = '';
    var space = giveMeSpace(colsCount - 2);
    while (count < colsCount) {
        if ((count === 0) || (count === rowsCount - 1)) {
            str += getLine(rowsCount) + '\n';
        } else {
            str += '*' + space + '*' + '\n';
        }
        count++;
    }
    console.log(str);
}

// console.log(giveMeSpace(3));
function giveMeSpace(num) {
    var str = '';
    for (var i = 0; i < num; i++) {
        str += ' ';
    }
    return str;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

