
function incrementLike(click){
    var element = document.querySelector(click);
    let likeCount = Number(element.innerText);
    likeCount += 1;
    element.innerText = likeCount;
}