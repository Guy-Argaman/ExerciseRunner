'use strict'

// 57.Write the function findMode(mat) that will print out the number that appears most 
// frequently in the multi-dimensional array.
// BONUS: If there are ties (e.g.: both 47 and 53 appeared 17 times), print both of them, 
// or all of them. (TIP: use an object map to count the numbers) 

var nums = [
	[4, 1, 1],
	[1, 7, 1],
	[1, 1, 7]
];

findMode(nums)
function findMode(mat) {
	var numsMap = {};
	for (var i = 0; i < mat.length; i++) {
		for (var j = 0; j < mat[i].length; j++) {
			var currNum = mat[i][j];
			if (numsMap[currNum]) {
				numsMap[currNum]++;
			} else {
				numsMap[currNum] = 1;
			}
		}
	}
	console.log('numsMap', numsMap)
}