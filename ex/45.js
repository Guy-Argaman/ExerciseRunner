'use strict'
// 45.Write the function removeDuplicates(nums). The array nums should contain numbers 
// in the range of 0-10 such a

removeDuplicates([0, 1, 2, 3, 1, 1, 4, 5, 5, 5]);

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

