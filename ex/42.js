'use strict'
// 42.Write a function named startsWithS that gets an array of names and returns an array
// of the names that start with S. 
// Step2: Refactor your function to work on any letter by adding a letter parameter, you 
// might need to rename the function so it will suit it’s new functionality.

// Loop over every name if the name starts with an 'S', push, sNames

startsWithS(['David', 'John', 'Michael', 'S', 'Sarah', 'Steve']);
function startsWithS(names) {
    var sNames = [];
    for (var i = 0; i < names.length; i++) {
        if (names[i][0] === 'S') {
            sNames.push(names[i]);
        }
    }
    console.log(sNames);
    return sNames;
}

// make a variable that contains parameter letter, and compare it to 'S', then make an if that says if it equals to itself that will be our argument
startsWithLetter(['David', 'John', 'Michael', 'SSdskdosS', 'Sarah', 'Steve'], 'J');

function startsWithLetter(names, letter) {
    var letterNames = [];
    for (var i = 0; i < names.length; i++) {
        var idx = names[i][0];
        if (idx === letter) {
            letterNames.push(names[i]);
        }
    }
    console.log(letterNames);
    return letterNames;
}