'use strict'

// 38.Write a function named biggerThan100. It gets an array of numbers and returns an 
// array of only the numbers that are bigger than 100. 

biggerThan100();
function biggerThan100() {
    var nums = [10, 100, 200, 299, 400, 508, 645386043080, 1];

    for (var i = 0; i < nums.length; i++) {
        var currNum = nums[i];
        if (currNum > 100) {
            console.log(currNum)
        }
    }
    return currNum;
}