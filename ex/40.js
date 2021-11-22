'use strict'
// 40.Write a function named getLoremIpsum(wordsCount) that return a sentence with 
// random dummy text (google: lorem ipsum...) TIP, here are the steps you may use to 
// solve this: 
// a. First, write a function named getWord(). The function returns a single word 
// made out of 3-5 random letters the length of the word will be generated 
// randomly. Tip: you can create a string or an array of all the characters in the 
// English alphabet.
// // b. Lastly, call this function in a loop to create a sentence.

getLoremIpsum(60);
function getLoremIpsum(wordsCount) {
    var sentence = 'Lorem ipsum ';
    for (var i = 0; i < wordsCount; i++) {
        var word = getWord();
        sentence += word + ' ';
    }
    console.log(sentence)
    return sentence;
}

// getWord();
function getWord() {

    var str = 'abcdefghijklmnopqrstuvwxyz';
    var newWord = '';
    for (var i = 0; i < getRandomInt(3, 6); i++) {
        var index = getRandomInt(1, str.length);
        var letter = str.charAt(index);
        newWord += letter;
    }
    return newWord
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}