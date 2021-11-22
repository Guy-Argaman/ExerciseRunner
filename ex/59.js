'use strict'

// 59.Bingo - Your challenge is to simulate a Bingo game. In this game there are 2 players. 
// Each player has his own board (with different random numbers). The winner is the
// player who marks all the numbers on his board first. Here is the suggested data 
// structure: 
// Development Plan
// a. Implement the createBingoBoard(size) function
// i. Start by implementing a function that returns a 5*5 matrix containing cell 
// object as described above with the numbers 1..25
// ii. Implement the function printBingoBoard(board) that prints the board
// showing only the number (value) in each cell.
// 1. If the isHit value in the object is true, add 'v' to the printed number.
// 2. Check your function by manually setting a cell's isHit to true:
// gPlayers[0].board[0][0].isHit = trueCopyright 2020 © misterBIT
// *after you see that it works you can comment out or delete this line
// and print the board. 
// Now you should have two boards.
// The first board contains the data objects. This board was created by the
// createBingoBoard function. If you print this board to the console you will see
// something like this:
// The second board is just for the player to see the number in each cell (or the 
// number + 'v' if the cell isHit). It is not a part of our data model but our way to 
// view the game. This board was created by the printBingoBoard function. 
// When you print this board to the console you will see something like this:
// b. Implement the playBingo function: 
// i. It is a common practice to setup the structure and add the 
// implementation in steps, in this case: 
// 1. drawNum can be a simple function for now returning a fixed 
// number (e.g. 17) 
// 2. markBoard can be an empty function for now.Copyright 2020 © misterBIT
// 3. checkBingo can be a simple function returning true for now (note, 
// if the function will return false it will be in an infinite loop).
// c. Now we can implement the markBoard function: 
// 1. If there is a cell with the calledNum, update the cell's isHit value 
// accordingly and also increase the player hitsCount . 
// 2. Use the printBoard function to debug your function and make sure 
// it works correctly.
// d. Implement the checkBingo function:
// 1. Just check if the player hitsCount has reached 25.
// e. Implement the drawNum function:
// 1. We will later need this function to return a random number, but we 
// don’t want repetitions, so we will use an array - gNums.
// 2. Add the function resetNums that updates the global variable: 
// gNums to be an array with the numbers 1..25
// 3. This function should be called at the beginning of createBoard
// and also at the beginning of the playBingo function.
// 4. The function drawNum can just pop from that array for now 
// (predictable order helps while developing)
// f. At this stage you should have a basic working game that ends after 25 
// iterations. Do you? 
// g. OK so now implement the following additions/modification: 
// i. The gNums array should have numbers from 1 to 99.
// ii. drawNum should return (use splice) a random number from the array.
// iii. Print a happy greeting when a player:
// 1. completes a row: ‘Muki has completed a row!’.
// 2. completes the main diagonal: ‘Muki has completed the main 
// diagonal!’
// 3. Completes the secondary diagonal ‘Muki has completed the 
// secondary diagonal!’.
// iv. Slow down the game so it feels more realistic and easy to follow:
// 1. Use setInterval instead of the while loop: 
// a. var gameInterval = setInterval(playTurn, 1000)
// 2. User clearInterval(gameInterval) when the game is over

var gPlayers = [
	{ name: 'Player1', hitsCount: 0, board: createBingoBoard(10) },
	{ name: 'Player2', hitsCount: 0, board: createBingoBoard(10) }
]
var gBoard = [];
var count = 0;
var gNums = getNums();

playBingo();
function getNums() {
	var newNums = [];
	var count = 1;
	for (var i = 1; i < 100; i++) {
		newNums.push(count++)
	}
	console.log(newNums);
	return newNums
}

function printGreet(player) {
	var firstRow = true;
	var secondRow = true;
	var thirdRow = true;
	var fourthRow = true;
	var fifthRow = true;
	var fourthRow = true;
	var sixthRow = true;
	var seventhRow = true;
	var eighthRow = true;
	var ninthRow = true;
	var tenthRow = true;
	var firstFile = true;
	var secondFile = true;
	var thirdFile = true;
	var fourthFile = true;
	var fifthFile = true;
	var fourthFile = true;
	var sixthFile = true;
	var seventhFile = true;
	var eighthFile = true;
	var ninthFile = true;
	var tenthFile = true;
	var i = 0;
	for (var j = 0; j < player.board.length; j++) {
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && firstRow) {
			console.log(`${player.name} has completed the first row!`);
			firstRow = false;
		}
		var i = 1;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && secondRow) {
			console.log(`${player.name} has completed the second row!`);
			secondRow = false;
		}
		var i = 2;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && thirdRow) {
			console.log(`${player.name} has completed the third row!`);
			thirdRow = false;
		}
		var i = 3;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && fourthRow) {
			console.log(`${player.name} has completed the fourth row!`);
			fourthRow = false;
		}
		var i = 4;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && fifthRow) {
			console.log(`${player.name} has completed the fifth row!`);
			fifthRow = false;
		}
		var i = 5;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && sixthRow) {
			console.log(`${player.name} has completed the sixth row!`);
			sixthRow = false;
		}
		var i = 6;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && seventhRow) {
			console.log(`${player.name} has completed the seventh row!`);
			seventhRow = false;
		}
		var i = 7;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && eighthRow) {
			console.log(`${player.name} has completed the eighth row!`);
			eighthRow = false;
		}
		var i = 8;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && ninthRow) {
			console.log(`${player.name} has completed the ninth row!`);
			ninthRow = false;
		}
		var i = 9;
		if (player.board[i][0].isHit &&
			player.board[i][1].isHit &&
			player.board[i][2].isHit &&
			player.board[i][3].isHit &&
			player.board[i][4].isHit &&
			player.board[i][5].isHit &&
			player.board[i][6].isHit &&
			player.board[i][7].isHit &&
			player.board[i][8].isHit &&
			player.board[i][9].isHit && tenthRow) {
			console.log(`${player.name} has completed the tenth row!`);
			tenthRow = false;
		}
		// FILES
		var j = 0;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && firstFile) {
			console.log(`${player.name} has completed the first file!`);
			firstFile = false;
		}
		var j = 1;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && secondFile) {
			console.log(`${player.name} has completed the second file!`);
			secondFile = false;
		}
		var j = 2;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && thirdFile) {
			console.log(`${player.name} has completed the third file!`);
			thirdFile = false;
		}
		var j = 3;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && fourthFile) {
			console.log(`${player.name} has completed the fourth file!`);
			fourthFile = false;
		}
		var j = 4;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && fifthFile) {
			console.log(`${player.name} has completed the fifth file!`);
			fifthFile = false;
		}
		var j = 5;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && sixthFile) {
			console.log(`${player.name} has completed the sixth file!`);
			sixthFile = false;
		}
		var j = 6;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && seventhFile) {
			console.log(`${player.name} has completed the seventh file!`);
			seventhFile = false;
		}
		var j = 7;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && eighthFile) {
			console.log(`${player.name} has completed the eighth file!`);
			eighthFile = false;
		}
		var j = 8;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && ninthFile) {
			console.log(`${player.name} has completed the ninth file!`);
			ninthFile = false;
		}
		var j = 9;
		if (player.board[0][j].isHit &&
			player.board[1][j].isHit &&
			player.board[2][j].isHit &&
			player.board[3][j].isHit &&
			player.board[4][j].isHit &&
			player.board[5][j].isHit &&
			player.board[6][j].isHit &&
			player.board[7][j].isHit &&
			player.board[8][j].isHit &&
			player.board[9][j].isHit && tenthFile) {
			console.log(`${player.name} has completed the tenth file!`);
			tenthFile = false;
		}
	}
}

function resetNums() {
	gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
}

function drawNum() {
	return gNums.splice(getRandomInt(1, 99), 1)[0];
}

function markBoard(player, calledNum) {
	printGreet(player);
	for (var i = 0; i < player.board.length; i++) {
		for (var j = 0; j < player.board.length; j++) {
			if (player.board[i][j].value === 'FREE') {
				continue
			}
			if (player.board[i][j].value === calledNum) {
				player.hitsCount++;

				player.board[i][j].isHit = true;
				return;
			}
		}
	}
	return;
}

function playBingo() {
	var isVictory = false;
	resetNums();
	while (!isVictory) {
		var calledNum = drawNum();
		for (var i = 0; !isVictory && i < gPlayers.length; i++) {
			var player = gPlayers[i];
			markBoard(player, calledNum);
			printBingoBoard(player.board);
			isVictory = checkBingo(player);
		}
	}
}

function checkBingo(player) {
	console.log('HITS COUNT', player.hitsCount)
	if (player.hitsCount === 98) {
		console.log(player.name, 'OVER')
		return true;
	}
}

function printBingoBoard(board) {
	var boardValues = [];
	for (var i = 0; i < board.length; i++) {

		boardValues[i] = [];
		for (var j = 0; j < board[i].length; j++) {

			boardValues[i][j] = board[i][j].value + '';
			if (board[i][j].isHit) {
				boardValues[i][j] += ' ✔';
			}
		}
	}
	console.log('COUNT!!', count++);
	console.table(boardValues);
}

function createBingoBoard(size) {
	var mat = [];
	resetNums();
	for (var i = 0; i < size; i++) {
		mat[i] = [];
		for (var j = 0; j < size; j++) {
			var randomIdx = getRandomInt(0, gNums.length);
			mat[i][j] = {
				value: gNums[randomIdx],
				isHit: false
			}
			gNums.splice(randomIdx, 1);
		}
	}
	mat[9][9].value = 'FREE';
	console.log(mat)
	return mat
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}