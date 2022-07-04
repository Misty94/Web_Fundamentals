// MATH LIBRARY IN JAVASCRIPT

var floor = Math.floor(1.8); // Math.floor(x) = returns x rounded down to nearest integer
var ceiling = Math.ceil( Math.PI ); // Math.ceil(x) = returns x rounded up to nearest integer
var random = Math.random(); // Math.random = returns random number between 0 and 1
    
console.log(floor); // 1
console.log(ceiling); // 4
console.log(random); // 0.11219112643176077 <- just a random number, changes each time


// Dice Roller          ????
function d6() {
    var roll = Math.random();
    
    var sides = 6;

    // roll = Math.floor() ?


    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);


// Consult the Oracle

var lifesAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes – definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

function randomAnswer(){
    var answer = lifesAnswers[Math.floor(Math.random())];
    return answer;
}

var questionAnswered = randomAnswer();
console.log("Your answer is " + questionAnswered);