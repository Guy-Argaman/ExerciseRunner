'use strict'

// 39.Write a function named countVotes(votes, candidateName) that counts how many 
// votes this candidate got. i.e.: if the votes array looks like this: ['Nuli', 'Pingi', 'Uza', 
// 'Shabi', ‘Uza’] And the candidateName is : 'Uza', the function returns 2.

var votes = ['Nuli', 'Pingi', 'Uza', 'Shabi', 'Uza']

countVotes(votes, 'Uza');
function countVotes(votes, candidateName) {
    var count = 0;
    for (var i = 0; i < votes.length; i++) {
        if (candidateName === votes[i])
            count++;
    }
    return console.log(`votes count for ${candidateName} ${count}`);
}
