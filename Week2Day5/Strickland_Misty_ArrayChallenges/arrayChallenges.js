// 1. Always Hungry
// Write a function that is given an array and each time the value is "food" it should console log "yummy". If "food" was not present in the array console log "I'm hungry" once.

function alwaysHungry(arr) {
    var foodFound = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy")
            foodFound = true;
        }
    }
    if(foodFound == false){
        console.log("I'm hungry")
    }
}

alwaysHungry([6, 13, false, "food", "oreo", "ice cream", "food", 5, "food"]);
// my example array
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


//2. High Pass Filter
// Given an array and a value cutoff, return a new array containing only the values larger than cutoff.

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// var result = highPass([8,13,52,2,0,-7,7,3], 6);
console.log(result); // we expect back [6, 8, 10, 9]


// 3. Better than Average
// Given an array of numbers, return a count of how many of the numbers are larger than the avergae.

function betterThanAverage(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    var avg = sum / arr.length;
    var count = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > avg){
            count += 1;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// var result = betterThanAverage([100,95,88,92,90,96,95,80,97]);
console.log(result); // we expect back 4


// 4. Array Reverse
// Write a function that will reverse the values of an array and return them.

function reverse(arr) {
    var newarr = [];
    for(var i = arr.length-1; i >= 0; i--){
        newarr.push(arr[i]);
    }
    return newarr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
// var result = reverse([10,9,8,7,6,5,4,3,2,1]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


// 5. Fibonacci Array
// Write a function that will return an array of Fibonacci numbers up to a given length n.

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var sum = fibArr[0] + fibArr[1];
    fibArr.push(sum);
    for(var i = 1; i < n-2; i++){
        sum += fibArr[i];
        fibArr.push(sum);
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]





