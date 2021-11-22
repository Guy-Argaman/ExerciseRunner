console.log("Ex 10 Solution!!!");

// 10.Ask the user how many friends he has on FB and print out an analysis: 
// More than 500 – ‘OMG, a celebrity!’
// • More than 300 (and up to 500) – ‘You are well connected!’
// • More than 100– ‘You know some people...’
// • Up to 100 – ‘Quite picky aren't you?’
// • 0 – ‘Let’s be friends!’


var friends = +prompt('Please enter how many friends you have on Facebook?');

if (friends >= 500) {
    console.log('OMG, a celebrity!');
} else if (friends >= 300) {
    console.log('You are well connected!');
} else if (friends >= 100) {
    console.log('You know some people...');
} else if (friends > 0) {
    console.log('Quite picky aren\'t you?');
} else if (friends === 0) {
    console.log('Let\'s be friends!');
}