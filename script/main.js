function main(){
    console.log("Started game...")

    /**
     * ToDo -> Variablen beschreiben
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

    var rect = new Rectangle(2);
    drawRectAtStart(rect.size, rect.xPos, rect.yPos)

    console.log(rect.size);

    console.log(rect.debug())

    // Update every second (1000 ms)
    setInterval(function(){
        console.log("x= " + rect.getXPos() + " y = " + rect.getYPos());
        rect.updateX();
        timeLeft -= 1;
        $(".timer").text("Time left: " + timeLeft);
        if (timeLeft <= 0){
            finish();
        }
    }, 1000);

}

function finish(){
    // Code here
    // -> Look at Trello Board "Pop Up Ending"
}

function drawRectAtStart(rectSize, rectPosX, rectPosY){
    var size = rectSize;

    var x = rectPosX;
    var y = rectPosY;

    var c = document.getElementsByClassName("game-box");
    var ctx = c[0].getContext("2d");
    ctx.beginPath();
    ctx.fillRect(x, y, size, size);
    ctx.stroke();
    console.log(size);
    return [x, y, ctx];
}



/** Optional */
function getCursorPosition(canvas, event){
    var box = canvas[0].getBoundingClientRect();
    var x = event.clientX - box.left;
    var y = event.clientY - box.top;
    return [x, y];
}
