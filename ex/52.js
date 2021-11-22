// 'use strict'

// 52.Monsters: Copyright 2020 © misterBIT
// Create an array of monsters with 4 monsters (use a createMonsters() function) 
// a. Each monster should also have 
// i. id – a unique sequential number
// ii. name – that you will read from the user
// iii. power (random 1-100)
// b. Write the functions:
// i. createMonsters()
// ii. createMonster(name, power) – returns a new monster object. The name 
// and power parameters are optional. That means that you should set 
// them to a defaultive value if nothing is sent in the parameters.
// iii. getMonsterById(id) - finds and returns a monster object by its id. 
// iv. deleteMonster(id) - the function removes the specified monster from the 
// array. 
// v. updateMonster(id, newPower) - the function updates the specified 
// monster, setting a new power. 
// c. Write the function: findMostPowerful(monsters). 
// d. Write the function: breedMonsters(monsterId1, monsterId2), the function 
// returns a new monster. The breeded monster power is an average of its 
// parents power. The name is the beginning half of the first parent name, and the 
// second half is the end of the second parent name. 


// Variables
var gNextId = 1;
var gMonsters = [];

// Functions to call, please uncomment to use:
// createMonster();
createMonsters();
// console.log(gMonsters);
// console.log(findMostPowerful(gMonsters))
// deleteMonster(3);
// console.log(getMonsterById(1));
// updateMonster(1, 20);



breedMonsters(1, 2)
function breedMonsters(monsterId1, monsterId2) {

	var monster1 = getMonsterById(monsterId1);
	var monster2 = getMonsterById(monsterId2);
	var avg = (monster1.power + monster2.power) / 2;
	var newName = monster1.name + monster2.name;

	var newMonster = createMonster();
	if (monsterId1 === monsterId2) {
		return console.log('Cannot breed the same monster.');
	}
	newMonster.power = avg;
	newMonster.name = newName;
	gMonsters.push(newMonster);
	return newMonster;
}
// var res = findMostPowerful(gMonsters);

function findMostPowerful(monsters) {
	var maxPower = 0;
	var mostPowerful;
	for (var i = 0; i < monsters.length; i++) {
		var currMonster = monsters[i];
		if (currMonster.power > maxPower) {
			mostPowerful = currMonster;
			maxPower = currMonster.power;
		}
	}
	return mostPowerful
}

function updateMonster(id, newPower) {
	for (var i = 0; i < gMonsters.length; i++) {
		var currMonster = gMonsters[i]
		if (currMonster.id === id) {
			currMonster.power = newPower
			return newPower
		}
	}
}

function createMonster(name = 'Alucard', power = 1) {
	var newMonster = {};
	newMonster.id = gNextId++;
	newMonster.name = name;
	newMonster.power = power;
	return newMonster
}

function deleteMonster(id) {
	for (var i = 0; i < gMonsters.length; i++) {
		var currMonster = gMonsters[i]
		if (currMonster.id === id) {
			gMonsters.splice(i, 1);
			console.log(`Monster name: ${currMonster.name}, id: ${id} has been deleted`)
		}
	}
}

function getMonsterById(id) {
	for (var i = 0; i < gMonsters.length; i++) {
		var currMonster = gMonsters[i]
		if (currMonster.id === id) {
			return currMonster;
		}
	}
}

function createMonsters() {
	for (var i = 0; i < 4; i++) {
		var newMonster = createMonster();
		newMonster.name = prompt('Enter the monster\'s name');
		newMonster.power = (getRandomInt(1, 100));
		gMonsters.push(newMonster);
	}
	return newMonster
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

