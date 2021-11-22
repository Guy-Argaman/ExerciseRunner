'use strict'
// 31. Read a string from the user and print:
// c. Its length.
// d. Its first and last characters.
// e. The string in uppercase and lowercase letters.

var str = prompt('Enter a name');
console.log('Length of name', str.length);
console.log('First and last characters', str.charAt(0), str.charAt(str.length - 1));
console.log('Name uppercased', str.toUpperCase());
console.log('Name lowercased', str.toLowerCase());