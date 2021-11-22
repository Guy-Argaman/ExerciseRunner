'use strict'
// 35.+UnitTesting Write the function encrypt that gets a string and encrypts it. It replaces
// each character code with the code+5 (I.e. 'r' will be replaced by: 'w'). NOTE: The 
// function should encrypt the entire string by shifting each letter as described above. 
// Now write the function decrypt that decrypts a message. Tip: try to write in the 
// console: 'ABC'.charCodeAt(0)
// Tip - search for the opposite function to charCodeAtCopyright 2020 © misterBIT
// Bonus: extract the common logic to an encode function that both encrypts and 
// decrypts.

encrypt('Astronaut');
function encrypt(str) {
    var replace = '';
    var res = '';
    for (var i = 0; i < str.length; i++) {
        replace = str.charCodeAt(i) + 5;
        res += String.fromCharCode(replace);
    }
    console.log(res);
}

decrypt('Fxywtsfzy');
function decrypt(str) {
    var replace = '';
    var res = '';
    for (var i = 0; i < str.length; i++) {
        replace = str.charCodeAt(i) - 5;
        res += String.fromCharCode(replace)
    }
    console.log(res);
}

