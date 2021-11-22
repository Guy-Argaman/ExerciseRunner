'use strict'
// 34.+UnitTesting write a function named myIndexOf(str, searchStr) that accepts 2 strings. 
// The function returns the index of the second string in the first, if it wasn’t found, return 
// -1 (don’t use the built-in indexOf...).


console.log(myIndexOf('The little fox says hi', 'little'));
function myIndexOf(str, searchStr) {
    // begins the count from the first index of the string, if we began from 0, it would do the first loop iteration by doing i + 1
    var pos = 0;
    for (var i = 0; i < str.length; i++) {
        var cutStr = str.substr(i, str.length);
        if (cutStr.includes(searchStr)) {
            pos = i;
        }
    }
    return pos;
}

