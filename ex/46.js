'use strict'
// 46. +UnitTesting Write the function: multBy(nums, multiplier) that returns a modified
// array in which each item in the array is multiplied by a multiplier.
// Step2: Add another param: isImmutable. It will be a variable that when it’s value is set 
// to true, use array.slice() to work on a new array. Leave the original array as it was. 

// Unit Testing
var nums = [1, 2, 3]
var res = multBy(nums, 3, false);
console.log('Input:[1, 2, 3], 3, true Expected: [3, 6, 9] Got: ' + res + ' nums: ' + nums);

function multBy(nums, multiplier, isImmutable) {
    var newNums = [];
    if (isImmutable) {
        var newNums = nums.slice();
    } else {
        newNums = nums;
    }
    for (var i = 0; i < nums.length; i++) {
        newNums[i] *= multiplier;
    }
    return newNums;
}