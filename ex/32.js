'use strict'
// 32.Read a string from the user and print it backwards using a loop.

reverseString();

function reverseString() {
    var str = prompt('Enter a name');
    var reversedString = '';
    console.log(str.length);
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(reversedString);
}