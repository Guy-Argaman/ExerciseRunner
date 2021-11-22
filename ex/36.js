'use strict'
// 36.+UnitTesting Write a function that gets a string of names delimited by a comma. I.e:
// 'igal,moshe,haim' and prints the longest name, and the shortest name. Tip: use the 
// function indexOf, note that the function accepts 2 parameters 
var names = 'igal,moshe,haim,';

splitNames(names, ',');

function splitNames(str, sep) {
    var shortest = str;
    var longest = '';
    for (var i = 0; i < str.length; i++) {
        var sepIdx = str.indexOf(sep, i);
        var currName = names.substring(i, sepIdx);
        i += currName.length;
        if (currName.length > longest.length) {
            longest = currName;
        }
        if (currName.length < shortest.length) {
            shortest = currName;
        }
        console.log(currName);
    }
    console.log('longest', longest)
    console.log('shortest', shortest)
}