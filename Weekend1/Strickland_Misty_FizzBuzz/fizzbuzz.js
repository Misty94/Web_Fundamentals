

// Write code that will go through each number from 1 to 100 AND
// For each number that is a multiple of 3, print "Fizz" AND
// For each number that is a multiple of 5, print "Buzz" AND
// For numbers which are a multiple of both 3 AND 5, print "FuzzBuzz"
// All other numbers should just print normally

for(var i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// It works!