/**
 * Changes the opacity when the mouse is hovering over the top data (points, timer, rank)
 * Makes text less invisible
 * @param {Document or class/id} doc 
 */
 function highOpacity(doc){
    doc.style.opacity = 0.99;
}

/**
 * Changes the opacity when the mouse is hovering over the top data (points, timer, rank)
 * Makes text more invisible
 * @param {Document or class/id} doc 
 */
function lowOpacity(doc){
    doc.style.opacity = 0.2;
}

document.addEventListener("DOMContentLoaded", function(){
    let topBoard = document.getElementById("top-board");
    topBoard.onmouseover = () => highOpacity(topBoard);
    topBoard.onmouseout = () => lowOpacity(topBoard);
});