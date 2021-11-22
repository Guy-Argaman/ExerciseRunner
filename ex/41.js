'use strict'
// 41.+UnitTesting Write a function named sayNum(num) that prints each digit in words.
// I.e: 123 => One Two Three. 7294 => Seven Two Nine Four. TIP: You may use 
// Switch inside a loop OR an array named digitNames. (Or what the heck, try them 
// both.)

sayNum(111245607);
function sayNum(num) {

    // Stringified -> 123 
    var string = num + '';
    var nums = string.split('');
    var newString = '';
    var digitNames = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    console.log(nums);
    for (var i = 0; i < nums.length; i++) {
        newString += digitNames[nums[i]] + ' ';
    }
    console.log(newString);
    return newString
}