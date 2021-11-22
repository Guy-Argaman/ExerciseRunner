'use strict'

// 58.Write a function that gets a 2d array and vailates it’s a magic square: 
// a. It must be a square
// b. The rows, columns, and the two diagonals sums should be equal

var gMat = [
	[2, 7, 6],
	[9, 5, 1],
	[4, 3, 8]
]

// Funuctions called
// sumSecondaryDiag(gMat);
// sumPrimaryDiag(gMat);
// sumRow(gMat, 1)
// sumCol(gMat, 0)
// console.log(checkIfSquareSum());

function checkIfSquareSum() {

	var priDiagSum = sumPrimaryDiag(gMat)
	var secDiagSum = sumSecondaryDiag(gMat)

	if (priDiagSum !== secDiagSum) {
		return false
	}
	for (var i = 0; i < gMat.length; i++) {
		var rowSum = sumRow(gMat, i)
		var colSum = sumCol(gMat, i)

		if (rowSum !== priDiagSum || colSum !== priDiagSum) {
			return false;
		}
	}
	return true;
}

function sumSecondaryDiag(mats) {
	var sum = 0;
	for (var i = 0; i < mats.length; i++) {
		var item = mats[i][mats.length - 1];
		sum += item;
	}
	console.log('Secondary Diagonal Sum:', sum);
	return sum
}


function sumPrimaryDiag(mats) {
	var sum = 0;
	for (var i = 0; i < mats.length; i++) {
		var item = mats[i][i];
		sum += item;
	}
	console.log('Primary Diagonal Sum:', sum);
	return sum
}

function sumCol(mat, colIdx) {
	var sum = 0;
	for (var i = 0; i < mat.length; i++) {
		sum += mat[i][colIdx]
	}
	console.log(`The sum of col ${colIdx} is ${sum}`);
	return sum
}

function sumRow(mat, rowIdx) {
	var sum = 0;
	for (var i = 0; i < mat.length; i++) {
		var innerIdx = mat[rowIdx][i];
		sum += innerIdx;
	}

	console.log(`The sum of row ${rowIdx} is ${sum}`)
	return sum
}
