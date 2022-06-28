
function uploadPup(element){ // you can name it anything like (button)
    console.log("Wazzzaaaa", element);
    element.innerText = "Uploaded! Thank you";
}


function removeElement(element){
    console.log("trying to remove something.... wazzaaaa")
    element.remove();
}


function playVideo(element){
    console.log("wasssaa playing video");
    element.play();
}

function pauseVideo(element){
    element.pause();
}

function changeImg(element){
    console.log("wazzaaa", element);
    element.src = "./resources/anothaPuppy.jpeg";
}

function cookieMonster(){
    console.log("cookie monster");
    var element = document.querySelector("#cookie-box");
    element.remove();
}

function incrementLike(id){
    console.log("likeing!", id);
    var element = document.querySelector(id); //this line grabs the element from the html whose id is equal to the variable id
    // console.log("element looks like this", element.innerText);
    let likeCount = Number(element.innerText); //element.innerText is the like count inside the span element. We will convert that to a number and store it in a variable.
    // console.log(likeCount);
    likeCount += 1; // increment the like count
    element.innerText = likeCount; // update the element so that its innerText is the new like count
}



// in css
// .like-count::after {
//     content: "like(s)";
//      background-color: blue;
// }