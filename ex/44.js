'use strict'
// 44.Write the function printNumsCount(nums). The array nums will contain integers in the 
// range of 0-3 such as:

// The function prints how many times each of these numbers appears in the array. 
// GUIDANCE: the fact that the values are in a specific range allows us to use an array 
// where the index is actually the number itself. The value in the array counts the 
// appearances of the numbers. 
// e.g. for the array [3,2,0,2,2,0,3] the array will look like this: [2,0,3,2]

printNumsCount([3, 2, 0, 2, 2, 0, 3])
function printNumsCount(nums) {
    var newNums = [0, 0, 0, 0];
    for (var i = 0; i < nums.length; i++) {
        newNums[nums[i]]++;
    }
    console.log(newNums);
}


































// printNumsCount(1123213);
// function printNumsCount(nums) {

//     var a = [];
//     var b = [];
//     var count = 0;
//     var prev;

//     for (var i = 0; i < nums.length; i++) {

//         if (nums[i] === prev) {
//             a.push(nums[i]);
//             b.push(1);
//         } else {
//             b++;
//         }
//     }
//     console.log(prev);
//     console.log(a);
//     console.log(b);
// }

