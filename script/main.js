function main(){
    console.log("Started game...")

    var timeLeft = 60;
    var points = 0;
    var rank = 1;

    $(".points").text("Points: " + points);
    $(".timer").text("Time left: " + timeLeft);
    $(".rank").text("Rank: " + rank);

    var canvas = document.getElementsByClassName('game-box');

    var rect = new Rectangle(20, 20);
    drawRectAtStart(rect.xSize, rect.ySize, rect.xPos, rect.yPos)

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

function drawRectAtStart(rectSizeX, rectSizeY, rectPosX, rectPosY){
    var rectX = rectSizeX;
    var rectY = rectSizeY;

    var x = rectPosX;
    var y = rectPosY;

    var c = document.getElementsByClassName("game-box");
    var ctx = c[0].getContext("2d");
    ctx.beginPath();
    ctx.fillRect(x, y, rectX, rectY);
    ctx.stroke();
    console.log(x, y);
    return [x, y, ctx];
}



/** Optional */
function getCursorPosition(canvas, event){
    var box = canvas[0].getBoundingClientRect();
    var x = event.clientX - box.left;
    var y = event.clientY - box.top;
    return [x, y];
}
