'use strict'
// 37.Write a function named generatePass(passLength) that generates a password of a 
// specified length. The password is made out of random digits and letters.

generatePass(50);

function generatePass(passLength) {

    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    var pass = '';
    for (var i = 0; i < passLength; i++) {
        var randomIdx = getRandomInt(0, chars.length)
        pass += chars.charAt(randomIdx);
    }
    console.log(`Random Password: ${pass}`);
}




function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
