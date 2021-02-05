function main(){

    console.log("Starting game...")

    /**
     * ToDo -> Variablen beschreiben
     * @var {time left before the game is over} timeLeft 
     * @var {game points that a player has} points 
     * @var {rank that the player has} rank 
     */
    var timeLeft = 60;
    var points = 0;
    var rank = 1;

    /**
     * ToDo -> Sachen werden gesetzt
     */
    $(".points").text("Points: " + points);
    $(".timer").text("Time left: " + timeLeft);
    $(".rank").text("Rank: " + rank);

    /** Dieser Abschnitt, bis zum Ende des "if" statements, ist zum Testen */
    if ($(".game-box")){
        $(".game-box").click(function(e){
            var canvas = document.getElementsByClassName('game-box');
            var position = getCursorPosition(canvas, e);
            console.log("Cursor position: " + position)
        });
    }

    // Create new rectangle with size of n
    var rect = new Rectangle(30);

    // Draw rectangle on canvas with size of rect and at pos of rect
    drawRectAtStart(rect.size, rect.xPos, rect.yPos)

    // These two lines are for debugging
    console.log("Rectangle size: " + rect.size);
    console.log(rect.debug())

    // Update every second (1000 ms)
    setInterval(function(){
        console.log("x= " + rect.xPos + " y = " + rect.yPos);
        rect.updateX();
        timeLeft -= 1;
        $(".timer").text("Time left: " + timeLeft);
        if (timeLeft <= 0){
            finish();
        }
    }, 1000);

}

/**
 * 
 */
function finish(){
    // Code here
    // -> Look at Trello Board "Pop Up Ending"
}

/**
 * This method draws a rectangle with the given parameters on the canvas
 * (It gets the canvas within the method)
 * @param {size of rectangle} rectSize 
 * @param {x position of rectangle} rectPosX 
 * @param {y position of rectangle} rectPosY 
 */
function drawRectAtStart(rectSize, rectPosX, rectPosY){
    var size = rectSize;

    var x = rectPosX;
    var y = rectPosY;

    var c = document.getElementsByClassName("game-box");
    var ctx = c[0].getContext("2d");
    ctx.beginPath();
    ctx.fillRect(x, y, size, size);
    ctx.translate(-1, -1);
    ctx.stroke();
    return [x, y, ctx];
}

/**
 * Changes the opacity when the mouse is hovering over the top data (time left etc)
 * -> Text is nearly invisible
 * @param {document/class/id} doc 
 */
function highOpacity(doc){
    doc.style.opacity = 1;
}

/**
// Changes the opacity when the mouse is hovering over the top data (time left etc)
 * -> Text is clearly visible
 * @param {document/class/id} doc 
 */
function lowOpacity(doc){
    doc.style.opacity = 0.2;
}


/** Optional
 * This was for testing purpose, don't delete it!
*/
function getCursorPosition(canvas, event){
    var box = canvas[0].getBoundingClientRect();
    var x = event.clientX - box.left;
    var y = event.clientY - box.top;
    return [x, y];
}

