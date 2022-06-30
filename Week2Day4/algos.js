
var nums = [23,0,30,24,8,6,1,22];
var nums2 = [2,4,8,0,2,5];

// search through a given array for a number, and return which index (position) this number was found. If the number was not found, return -1.
function searchForNum(arr, numToFind){
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        //if the current value is equal to numToFind, then return the current index number
        if(arr[i] == numToFind){
            return i;
        }
    }
    return -1;
}

console.log(searchForNum(nums, 11));


var nestedNums = [
    [4,8,10],
    [3,6,9],
    [23,24,99],
];

// console.log(nestedNums[2][1]);


function searchNestedArray(arr, numToFind){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
        var currentSubArray = arr[i];
        for(var j = 0; j < currentSubArray.length; j++){
            // console.log(currentSubArray[j]); or
            // console.log(arr[i][j]);
            if(arr[i][j] == numToFind){
                return {i,j} // the curly braces allow more than one variable to be returned / you could also [i,j]
            }
        }
    }
}

console.log(searchNestedArray(nestedNums, 9));