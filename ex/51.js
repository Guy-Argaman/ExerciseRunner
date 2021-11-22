'use strict'

// 51.+UnitTesting Object as a Map: Write the function countWordApperances(txt) that
// returns an object map. This object will have a key that will be the word. The value will 
// be the count (how many times this word appeared in the string).
// example: countWordApperances('puki ben david and muki ben david') will return:
// { puki: 1, ben: 2, david: 2, and: 1, muki: 1 }

var txt = ('puki ben david and muki ben david');

countWordAppearances(txt);
function countWordAppearances(txt) {
	var wordsMap = {};
	var words = txt.split(' ');
	for (var i = 0; i < words.length; i++) {
		var word = words[i];
		if (wordsMap[word]) {
			wordsMap[word]++
		} else {
			wordsMap[word] = 1;
		}
	}
	console.log(wordsMap)
}