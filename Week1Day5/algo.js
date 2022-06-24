function greetUser(firstName, lastName){ //inside the () is the parameter
    console.log("Hello " + firstName + " " + lastName)
}

// greetUser("Thiery", "Nis");
greetUser("Spensir", "Fields");
greetUser("Misty", "Strickland")

// Parameter -> words that represent what the function is expecting as input. Parameters are set when you DEFINE the function. (it's like the variable)

// Argument -> the data that I give to the function when I INVOKE/CALL the function! (it's like the value)


function sum(num1, num2){
    console.log("before the return ")
    return num1 + num2; // return = nothing gets printed, but something DID happen. It gives back data.

    console.log("hello") //this does not happen because the function stops after the return. (It will also stop a loop.)
}

var someNum = (sum(3,9) + sum(1,2));

// The VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS!!

console.log(someNum);



function sum(num1, num2){
    for(var i = 1; i<10; i++){
        console.log(i)
        if(i == 3){
            return;
        }
    }

    console.log("before the return ") // it doesn't go here, because the first return stops the function.
    return num1 + num2;
}

sum(1,2)



function sum(num1, num2){
    for(var i = 1; i<10; i++){
        console.log(i)
        if(i == 3){
            break; // this breaks out of the for loop but continues on with the function
        }
    }

    console.log("before the return ")
    return num1 + num2;
}

sum(1,2)

var artists = ["Drake", "J Cole", "MJ", "Hannah Montana", "Taylor Swift", "Ariana Grande"]

function searchForArtist(artistName){
    for(var i = 0; i < artists.length; i++){
        // console.log(artists[i]) // baby step it
        if(artists[i] == artistName){
            // return "Found your artist at index numer " + i;
            return "Found " + artistName + " at index number " + i
        }
    }
}

console.log(searchForArtist("MJ"));
console.log(searchForArtist("Ariana Grande"));