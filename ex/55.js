'use strict'

// 55.Fill up a multi-dimensional array with numbers, and then, Write the following
// functions: 
// a. sumCol(mat, colIdx)
// b. sumRow(mat, rowIdx)
// c. findMax(mat, colIdx)
// d. findAvg(mat)
// e. sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd)


var nums = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];

// Functions called:

findMax(nums, 2);
sumCol(nums, 1);
sumRow(nums, 0);
findAvg(nums);
sumArea(nums, 0, 2, 1, 2);


function sumArea(mat, rowIdxStart, rowIdxEnd, colIdxStart, colIdxEnd) {
	var sum = 0;
	for (var i = rowIdxStart; i <= rowIdxEnd; i++) {
		for (var j = colIdxStart; j <= colIdxEnd; j++) {
			var currCell = mat[i][j];
			sum += currCell;
		}
	}
	console.log(`The sum area is ${sum}`);
}

function findAvg(mat) {
	var sum = 0;
	for (var i = 0; i < mat.length; i++) {
		for (var j = 0; j < mat[i].length; j++) {
			sum += mat[i][j];
			var avg = (sum) / mat[i][j];
		}
	}
	console.log(`The average is ${avg}`);
}

function findMax(mat, colIdx) {

	var max = -Infinity
	for (var i = 0; i < mat.length; i++) {
		for (var j = 0; j < mat[i].length; j++) {
			if (mat[i][colIdx] > max) {
				max = mat[i][j];
			}
		}
	}
	console.log('The max is:', max);
}

function sumCol(mat, colIdx) {

	var sum = 0;
	for (var i = 0; i < mat.length; i++) {
		sum += mat[i][colIdx]
	}
	console.log(`The sum of col ${colIdx} is ${sum}`);
}

function sumRow(mat, rowIdx) {

	for (var i = 0; i < mat.length; i++) {

		var sum = 0;
		for (var j = 0; j < mat[i].length; j++) {
			// rowIdx = mat[j].length;
			var innerIdx = mat[rowIdx][j];
			sum += innerIdx;
		}
	}
	console.log(`The sum of row ${rowIdx} is ${sum}`)
}
