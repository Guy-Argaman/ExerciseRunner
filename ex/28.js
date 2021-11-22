'use strict'
console.log("Ex 28 Solution!!!");

// 28.Write a program that computes the greatest common divisor (GCD) of two positive 
// integers.
// Example: 6, 15 => gcd: 3
// Hint: we need something like a loop: i 6 -> 2 and check modulus. 

biggestDivisor(6, 15);
function biggestDivisor(x, y) {
    let hcf;
    for (var i = 1; i <= x && i <= y; i++) {
        if (x % i === 0 && y % i === 0) {
            hcf = i;
        }
    }
    console.log(`HCF of ${x} and ${y} is ${hcf}.`);
}