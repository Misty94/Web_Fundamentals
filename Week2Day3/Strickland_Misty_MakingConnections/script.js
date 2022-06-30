

function changeName(element){
    var element = document.querySelector("#card-h1");
    var newName = (element.innerText);
    element.innerText = "Hannah Montana";
}

var requests = document.querySelector("#reqNum");
var connections = document.querySelector("#c-num");

function accept(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerText--;
    connections.innerText++;
}

function decline(id){
    var element = document.querySelector(id);
    element.remove();
    requests.innerText--;
}

//These two functions worked when I wanted to remove the user, but I added on to them above so that they each did more. (I had to watch the solutions video to understand how to do the bonus parts though.)

// function removeName(element){
//     var element = document.querySelector("#req-people-1");
//     element.remove();
// }

// function removeName2(element){
//     var element = document.querySelector("#req-people-2");
//     element.remove();
// }




// Many failed attempts

// var requestNum = document.querySelector("#reqNum");
// var connections = document.querySelector("#c-num");
// function acceptDecline(num){
//     var element = document.querySelector(num);
//     requestNum.innerText--;
//     connections.innerText++;
// }

// function decreaseNum(num){
//     var element = document.querySelector(num);
//     var requestNum = Number(element.innerText);
//     requestNum = requestNum - 1;
//     element.innerText = requestNum;
// }

// function accept(id){
//     var element = document.querySelector(id);
    // var connections = Number(element.innerText);
    // var connections = document.querySelector("#c-num");
    // var requestNum = document.querySelector("#reqNum");
    // connections += 1;
    // element.innerText = connections;
//     connections.innerText++;
//     requestNum.innerText--;
// }

//onclick="acceptDecline()" onclick="accept('#c-num')"
