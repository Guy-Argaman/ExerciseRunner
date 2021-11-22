'use strict'
// 49.Implement the function sortNums(nums) this function returns a sorted array (without
//     changing the given array). 
//     It works by looping through the array, finding the minimum, splicing it out, and adding 
//     it to the new array. 
//     Read about how to sort an array yourself, by using the bubble sort algorithm, google 
//     it, copy it and use it. 

sortNums([3, 2, 1,]);
function sortNums(nums) {

	var min = Infinity;

	for (var i = 0; i < nums.length; i++) {

		if (nums[i] < 0) {
			min = nums[i];
		}
	}
	console.log(nums);
}


function bubbleSort(arr) {
	var done = false;
	while (!done) {
		done = true;
		for (var i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				done = false;
				var tmpNum = arr[i - 1];
				arr[i - 1] = arr[i];
				arr[i] = tmpNum;
			}
		}
	}
}
