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
	{ name: 'Player1', hitsCount: 0, board: createBingoBoard(5) },
	{ name: 'Player2', hitsCount: 0, board: createBingoBoard(5) }
]


var gNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// checkBingo();
playBingo();





function resetNums() {
	var resetNums = [];

	gNums = resetNums;
	var count = 0;
	while (count < 25) {
		var randomNums = getRandomInt(0, 25);
		gNums.push(randomNums);

		count++;
	}
	return gNums;
}



function drawNum() {

	// var randomIndex = getRandomInt(0, 25);
	// var drawnNumIdx = gNums.indexOf(calledNums);
	// var randomNum = gNums[randomIndex];
	// gNums.splice(randomIndex, 1);
	// return gNums.splice(drawnNumIdx, 1);
	return gNums.pop();
	// return randomNum;
}

// player is { name: 'Player1', hitsCount: 0, board: createBingoBoard(5) },
// calledNum is drawNum() which returns 17
function markBoard(player, calledNum) {

	for (var i = 0; i < player.board.length; i++) {
		// if (gPlayers[i].board ) {
		// }
		for (var j = 0; j < player.board.length; j++) {
			// console.log(checking what is player.board[i][j].value)
			if (player.board[i][j].value === calledNum) {
				player.hitsCount++;
				// debugger;
				// console.log('checking what is player.board.isHit', player.board.isHit)
				player.board[i][j].isHit = true;
				// console.log('checking player',player);
				// console.log('hi')
				// console.log('markBoard', 'i', i, 'j', j);
				return
			}
		}
	}
}



function playBingo() {
	var isVictory = false;
	gNums = resetNums();
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


// player is { name: 'Player1', hitsCount: 0, board: createBingoBoard(5) },
function checkBingo(player) {

	if (player.hitsCount === 25) {
		console.log(player.name, 'IT\'S OVER 25!!!')
		return true;
	}

	return false;
}



var gBoard = []

// gPlayers[0].board[0][0].isHit = true

// console.log(gPlayers[0].board[0][0]);

// console.table(printBingoBoard(gPlayers[0].board));

function printBingoBoard(board) {
	var boardValues = [];
	for (var i = 0; i < board.length; i++) {

		// console.log('board of players:', board);
		boardValues[i] = [];
		for (var j = 0; j < board[i].length; j++) {

			boardValues[i][j] = board[i][j].value + '';
			// boardValues[i][j] = board[i].board.value
			if (board[i][j].isHit) {
				boardValues[i][j] += ' ✔';
			}
		}
	}
	console.table(boardValues)
}



// createBingoBoard(5)

function createBingoBoard(size) {
	
	
	
	// var innerBoard = '';
	// gBoard.push(gBoard)	
	var mat = [];
	for (var i = 0; i < size; i++) {
		
		var nums = resetNums();
		mat[i] = [];
		for (var j = 0; j < size; j++) {
			var randomIdx = getRandomInt(0, nums.length)

			mat[i][j] = {
				// getRandomInt(1,25)
				value: nums[randomIdx],
				isHit: false

			}
			nums.splice(randomIdx, 1);
			// console.log('NUMS', nums)
		}
		// console.log('nums', nums)
	}


	console.log(mat)
	return mat
}







// createBingoBoard(size);

// function createBingoBoard(size) {


// }

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}