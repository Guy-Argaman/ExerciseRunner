console.log("Ex 11 Solution!!!");
// 11.Rolling Project: BankSystem
// • Initialize a variable: currBalance with the value: 1000
// • Prompt the user to get a secret pin code, ‘0796’.
// • After it was validated to be true, ask the user how much would he like to withdraw. 
// Print a nice message with the new balance.
// • If the code was wrong, alert with a different message, and don’t let him to withdraw 
// the sum. 
// • Add a feature: don’t let the user withdraw more than he has in his account.

var currBalance = 1000;

var pinCode = prompt('Please enter your secret pin code.');
// var isValid;
if (pinCode === '0796') {
    console.log('Pin Accepted!')

    var newBalance = +prompt('How much would you like to withdraw');
    if (newBalance > currBalance || newBalance < 0) {

        console.log('Invalid Action!')
    } else {
        newBalance = currBalance - newBalance;
        console.log(`Your new balance is: ${newBalance}`);
    }
} else {
    console.log('Incorrect Pin');
}
