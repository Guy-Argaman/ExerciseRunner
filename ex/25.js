'use strict'
console.log("Ex 25 Solution!!!");

// 25.Write A function named getRandomInteger(min, max). The function should generate 
// a random integer between the min and max parameters.
// Hint: Use Math.Random & Math.Floor. 
// a. After you've played with it enough, read this page. Look at the getRandomInt 
// function.
// b. Yes, it's better, now remember you can always use it later on in the course. 
// (how amazing is that?)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}