'use strict'

// 56.Symmetric Matrix: 
// A symmetric matrix is a matrix that passes this boolean condition: 
// mat[i][j] === mat[j][i] 
// Write the function checkIfSymmetric(mat). 

var nums = [
	[4, 1, 1],
	[1, 5, 1],
	[1, 1, 9]
];

console.log(checkIfSymmetric(nums));

function checkIfSymmetric(mat) {
	for (var i = 0; i < mat.length; i++) {
		for (var j = 0; j < mat[i].length; j++) {
			if (mat[i][j] !== mat[j][i]) {
				return false
			}
		}
	}
	return true
}

