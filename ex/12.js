console.log("Ex 12 Solution!!!");

// 2.Guess Who
// • Use the alert function, and ask the user to think about an actor
// • Use the confirm function and ask the user 2 yes/no questions:
// Question 1: Is he a man?
//  Yes: 
// ● Question 2: Is he Blonde? 
// ○ Yes: Philip Seymour! Copyright 2020 © misterBIT
// ○ No: Tom Cruise!
//  No: 
// ● Question 2: Is she English? 
// ○ Yes: Keira Knightley!
// ○ No: Natalie Portman!

alert('Think about an actor')

var isMan = confirm('Is he a man?')

if (isMan) {
    var isBlonde = confirm('Is he blonde?')
    if (isBlonde) {
        alert('Philip Seymour!')

    } else {
        alert('Tom cruise!')
    }
} else {
    var isEng = confirm('Is she English?')
    if (isEng) {
        alert('Keira Knightley!')
    } else if (!isEng) {
        alert('Natalie Portman!')
    }
}