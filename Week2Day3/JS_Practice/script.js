

function print(element){
    console.log("I clicked Another Button");
}

function turnOff(element){
    element.innerText = "Off";
}

// the (element) is refering to the (this) and this means that button

function turnOn(element){
    element.innerText = "On";
}

function removeH1(element){
    element.remove();
}

function hover(element){
    alert("mouseover");
}

function noHover(element){
    alert("mouseout");
}

function changeColor(element){
    element.style.backgroundColor = "plum";
}

function changeBack(element){
    element.style.backgroundColor = "snow";
}