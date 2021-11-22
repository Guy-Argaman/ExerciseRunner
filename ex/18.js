console.log("Ex 17 Solution!!!");

// 18. Write a function named isAbove18 that gets a name and an age. This function 
// checks if the age is above eighteen.
// In case the user is younger than eighteen, alert 'You are too young', otherwise alert 
// 'You're allowed to buy a beer' (Use the user's name within the alerts).
// Also, the function should return a boolean value.
// * For now, we will make no use of the returned value. 

isAbove18('John', 18)
function isAbove18(name, age) {
    if (age >= 18) {
        alert('You\'re allowed to buy beer, ' + name)
        return true
    } else {
        alert('You are too young, ' + name)
        return false
    }
}