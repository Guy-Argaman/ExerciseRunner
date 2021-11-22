'use strict'
// 47.Implement your own version of the split function: mySplit(str, sep) Test it with different 
// types of strings and separators. I.e ‘Japan,Russia,Sweden'
// You can assume that the separator (delimiter) is a single character. (BONUS: don’t 
// assume that)

// Unit Testing
var res = mySplit('Japan,Russia,Sweden', ',');
console.log('Input: \'asasHello\', \'H\' Expected: \'asasHell\' Got:', res);

function mySplit(str, sep) {
    str += sep;
    var newStr = '';
    var newArray = [];
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) === sep) {
            newArray.push(newStr);
            newStr = '';
        } else {
            newStr += str.charAt(i);
        }
    }
    return newArray;
}