console.log("Ex 17 Solution!!!");

// 17. Write a function named getBigger that gets 2 numbers and returns the bigger one.

getBigger(10, 15)

function getBigger(x, y) {
    if (x > y) {
        return console.log('The bigger number is:', x)
    } else {
        return console.log('The bigger number is:', y)
    }
}

