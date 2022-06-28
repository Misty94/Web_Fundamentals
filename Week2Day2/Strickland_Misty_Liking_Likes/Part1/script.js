
function incrementLike(id){
    var element = document.querySelector(id);
    let likeCount = Number(element.innerText);
    likeCount += 1;
    element.innerText = likeCount;
}