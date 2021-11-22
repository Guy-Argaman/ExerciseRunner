'use strict'
// 48.+UnitTesting Write the function getNthLargest(nums, nthNum) to get the nth largest
// element from an array of unique numbers. I.e: getNthLargest ([ 7, 56, 23, 88, 92, 99, 
// 89, 11], 3) Result: 89 

// Unit Testing
var res = getNthLargest([10, 8, 9, 4, 5, 3, 8, 6, 9, 4, 7, 6, 6, 5, 4, 1], 3);
console.log('[10, 8,9 4, 5, 3, 8, 6, 9 ,4 ,7 ,6, 6,5 ,4 ,1], 3 Expected: 8 Got:', res)

function getNthLargest(nums, nthNum) {
    // Sorts numbers by order
    nums.sort(function (a, b) { return a - b });
    // removes duplicated numbers
    var newArray = removeDuplicates(nums);
    // returns num of NTh largest
    return newArray[newArray.length - nthNum];
}
// removeDuplicates([0, 1, 2, 3, 1, 1, 4, 5, 5, 5]);

function removeDuplicates(nums) {
    var newNums = [];
    for (var i = 0; i < nums.length; i++) {
        if (newNums.includes(nums[i])) {
            continue;
        }
        newNums.push(nums[i])
    }
    console.log(newNums)
    return newNums
}
