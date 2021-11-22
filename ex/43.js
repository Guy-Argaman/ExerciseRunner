'use strict'
// 43.Write the function sumArrays that gets 2 arrays and returns the sum of the two 
// arrays. I.e: [1, 4, 3] [2, 5, 1, 9] => [3, 9, 4, 9] 
// TIP: this can be done in a single loop by first identifying the shorter or longer array 
// from the two. 
// Step2: Read these arrays from the user (until the number 999 is entered) TIP: write 
// the function: getArrayFromUser and call it twice 

// while loop to assign arrays by prompt user input, and then proceed to summarize

sumArrays();
function sumArrays() {
    // variables
    var nums1 = [];
    nums1 = getArrayFromUser();
    var nums2 = [];
    nums2 = getArrayFromUser();
    var shortest = ' ';
    var longest = [];
    var sumArray = [];

    // if statements
    if (nums1.length < nums2.length) {
        shortest = nums1;
        longest = nums2;
        console.log('The shortest array is the first:', nums1, `${nums1.length} items`);
        console.log('The longest array is the second:', nums2, `${nums2.length} items`);
    } else if (nums2.length < nums1.length) {
        shortest = nums2;
        longest = nums1;
        console.log('The shortest array is the second:', nums2, `${nums2.length} items`);
        console.log('The longest array is the first:', nums1, `${nums1.length} items`);

    } else {
        shortest = nums1;
        longest = nums2;
        console.log('The first array is the same length as the second array.');
    }
    for (var i = 0; i < longest.length; i++) {
        if (i >= shortest.length) {
            sumArray.push(longest[i]);
        } else {
            sumArray.push(nums1[i] + nums2[i]);

        }
    }
    console.log('The sum of both arrays:', sumArray);
    console.log('The first array:', nums1);
    console.log('The second array:', nums2);
}

function getArrayFromUser() {
    var count = 0;
    var nums = [];
    while (userInput !== 999) {
        var userInput = +prompt('Enter an array and then enter \'999\'');

        if (userInput !== 999) {
            nums.push(userInput);
            console.log(userInput);
        }
        count++;
    }
    return nums;
}