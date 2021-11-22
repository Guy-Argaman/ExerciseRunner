'use strict'
console.log("Ex 22 Solution!!!");

// 22.+UnitTesting Write a function named myPow that gets 2 parameters: base, exponent 
// and returns the power. (use a loop…)


myPow(6, 6)
function myPow(base, exponent) {
    var count = 0;
    var power = base;
    while (count < exponent - 1) {
        power *= base;
        count++;
    }
    console.log(power);
    return power;

}
