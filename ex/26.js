'use strict'
console.log("Ex 26 Solution!!!");

// 26.Write a program that generates 10 random numbers. The numbers should be 
// generated so each number is greater than the previously generated number.
// To simplify, generate the first number n so it is between (0→1000), and each 
// subsequent number will be in the range of ( n+1 → n+1001).
// example:
// First random number: (0→1000) 100
// Second random number: (101→1101) 748
// Third random number: (749→1749) 1650…


getHigher();
function getHigher() {

    var count = 0;
    var num = getRandomInt(0, 1000);
    console.log(`num ${num}`);
    while (count < 10) {
        num = getRandomInt(num, num + 1000);
        console.log(`num ${num}`);

        count++;
        console.log(count);
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}