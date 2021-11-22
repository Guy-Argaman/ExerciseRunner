console.log("Ex 13 Solution!!!");

// 13.The Elevator 
// • Keep a currentFloor variable, initialize it to 0
// • Ask the user which floor would he like to go to. 
// • Validate the floor is between -2 and 4.
// • Update the currentFloor variable accordingly.
// • Let the user know his current floor.
// • If the user goes to floor 0 alert 'Bye Bye'.
// • If the user goes to the parking lot (negative floors) alert: 'Drive Safely'. 


var currentFloor = 0;

var desiredFloor = +prompt('Please select a floor. (Floors Available: (-2 - 4)');

if (desiredFloor >= -2 && desiredFloor <= 4) {
    currentFloor = desiredFloor;
    console.log(currentFloor);
} else {
    console.log('Invalid Input.')
}
if (desiredFloor === 0) {
    alert('Bye bye.')
}
if (desiredFloor === -1 || desiredFloor === -2) {
    alert('Drive Safely.')
}