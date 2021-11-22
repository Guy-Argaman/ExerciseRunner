'use strict'
// 33.+UnitTesting VOWELS (aeiou)
// code the following functions: 
// a. Write a function named printVowelsCount(str) that gets a string and print how 
// many times each vowel appears. 
// b. Write a function that gets a string and changes the vowels to lowercase letters, 
// and the rest to uppercase letters (GiZiM GiDoo). 
// c. Write a function that gets a string and doubles all the vowels in it.
// Test the functions using the inputs: “aeiouAEIOU” “TelAvivBeach”

printVowelsCount('aeiouAEIOU TelAvivBeach');
function printVowelsCount(str) {

    var aCount = 0;
    var eCount = 0;
    var oCount = 0;
    var uCount = 0;
    var iCount = 0;

    for (var i = 0; i < str.length; i++) {
        switch (str.charAt(i).toLowerCase()) {
            case 'a':
                aCount++;
                break;
            case 'e':
                eCount++;
                break;
            case 'i':
                iCount++;
                break;
            case 'o':
                oCount++;
                break;
            case 'u':
                uCount++;
                break;
        }
    }
    console.log('Vowel counter:', 'aCount = ', aCount, 'eCount = ', eCount, 'iCount = ', iCount, 'oCount = ', oCount, 'uCount = ', uCount)

}


printVowelsLowerCase('GiZiM GiDoo');
function printVowelsLowerCase(str) {

    var newStr = '';

    for (var i = 0; i < str.length; i++) {
        switch (str.charAt(i).toLowerCase()) {
            case 'a':

                newStr += 'a';
                break;

            case 'e':

                newStr += 'e';
                break;
            case 'i':

                newStr += 'i';
                break;
            case 'o':

                newStr += 'o';
                break;
            case 'u':

                newStr += 'u';
                break;
            default:
                newStr += str.charAt(i).toUpperCase()

                break;
        }


    }
    console.log('Prints vowels as lowercase and the rest as uppercase:', newStr)

}

doubleVowels('aeiouAEIOU TelAvivBeach')
function doubleVowels(str) {
    var newStr = '';
    var vowels = 'aeiouAEIOU';

    for (var i = 0; i < str.length; i++) {
        var letter = str.charAt(i);
        if (vowels.includes(letter)) {
            newStr += letter + letter;

        } else {
            newStr += letter;
        }
    }
    console.log('Prints double vowels:', newStr)
}