for(var i = 0; i < 10; i++){
    console.log(i);
    i = i + 3;
}

console.log("outside of the loop " + i);



var artists = ["Drake", "J Cole", "MJ", "Taylor Swift", "Beyonce"]

for(var i = 0; i < artists.length; i++){
    //if the artist is MJ, then print "King of Pop!"
    if(artists[i] == "MJ"){
        console.log("King of Pop!");
    }
    else{
        console.log(artists[i]);
    }
    //for everybody else, just print their name
}


var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: "

if(isSunny) {
    whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isRaining) {
    whatToBring += "an umbrella, ";
}
// else{

// }

whatToBring += "and a smile!";

console.log(whatToBring);

//you can do if(is Sunny==false) or if(!isSunny) they are both saying not sunny or false


for(var i = 10; i >= 1; i--){
    console.log(i);
}

console.log("Blast off! To the moon.")