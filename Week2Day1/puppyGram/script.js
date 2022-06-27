
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