'use strict'
// 30. Read 2 names from the user and print the longest.
var longest = '';
var name1 = prompt('Enter a name');
var name2 = prompt('Enter a name');

if (name1.length > name2.length) {
    longest = name1.length;
} else if (name2.length > name1.length) {
    longest = name2.length;
} else if (name1.length === name2.length) {
    longest = name1.length;
    console.log('Same Length')
} else
    longest = name2.length;
console.log(`The longest input is: ${longest}`)
