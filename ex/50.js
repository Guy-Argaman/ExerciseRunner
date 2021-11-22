'use strict'
// 50.Making Water! Let's imagine that we have the following atoms: 
// a. Use an array with letters that stands for each atom. 
// b. Pick random atoms from the array to create molecules of 3 atoms.
// c. Stop when you got ‘HOH’ for water. (Two Hydrogens and one Oxygen)
// d. Print how many tries you had before ‘HOH’ was drawn. 

function generateMolecule() {
	let atoms = ['H', 'B', 'C', 'N', 'O', 'F'];
	let newAtoms = [];
	let str = '';
	for (let i = 0; i < 3; i++) {
		let atom = getRandomInt(0, atoms.length);
		newAtoms.push(atoms[atom]);
	}
	str = newAtoms[0].concat(newAtoms[1] + newAtoms[2]);
	return str;
}

findWater();
function findWater() {
	let count = 0;
	let str = '';
	while (str !== 'HOH') {
		let molecule = generateMolecule();
		str = molecule;
		console.log(str);
		console.log('I tried', ++count, 'times');
	}
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
