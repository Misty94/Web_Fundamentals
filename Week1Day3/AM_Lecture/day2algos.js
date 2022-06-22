// Data Types and Variables

/*
Data Types can include the following:
1. Numbers (integers and decimals (floats)) -> 1,2,3,99,500,100. Decimals: 3.14. 3.50
2. Strings -> Characters and letters combined into one using quotes -> "Welcome to web fundamentals!?.#$&*526"
3. Booleans -> true or false
*/

var name = "Misty Strickland";
var age = 28;
var chipotlePrice = 9.75;
var isTeachingToday = true;

// camelCase
// snake_case
// PascalCase

const numDayInWeek = 7; // const means variable will NEVER change

console.log("Wazzaaaaaa " + name) // or "Wazzaaaaa" + " " + name

chipotlePrice += 1; // or chipotlePrice -= 1; or chipotlePrice = chipotlePrice - 1;

console.log(chipotlePrice);

var halfMyAge = age / 2;
var twiceMyAge = age * 2;

console.log(halfMyAge);
console.log(twiceMyAge);
console.log("half my age is", halfMyAge);
console.log("twice my age is", twiceMyAge);

/*
Data Structures are things where we can put one or many data types inside of (we can group data types into one thing)

1. Array

*/

var artists = ["Drake", "Weezy", "Weekend", "NIN", "Taylor Swift", "Weezer", "Saint John", "Andre3000", "Billie", "Hannah Montana", "Linkin Park"]; // 9 elements in this array
// indexes -> 0 1 2 3 4 5 6 7 8

console.log(artists[4]);

/*
A for loop is a way for us to repeat a process a certain number of times
*/

for(var i = 0; i < artists.length; i++){ // .length also works with strings
    console.log(artists[i]); //console.log(artists[i].length)
}