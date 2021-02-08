var timeLeft = 60;
var points = 0;
var rank = 1;
var positions = {};
var players = 1;

function main(){

    console.log("Starting game...")

    const myCanvas = document.getElementById("game-box");
    const originalHeight = myCanvas.height;
    const originalWidth = myCanvas.width;
    var gameStarted = false;

    render(myCanvas, originalHeight, originalWidth);

    /**
     * @var {time left before the game is over} timeLeft 
     * @var {game points that a player has} points 
     * @var {rank that the player has} rank 
     */
    

    /**
     * Shows points, timer and rank on screen
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
    var rect = new Rectangle(10);
    console.log("Start direction: " + rect.direction);
    
    // Draws the rect with the pos of the created rect and size of it
    drawRect(myCanvas, rect.xPos, rect.yPos, rect.size, rect.size);

    
    // Player Movement -> This needs to be refactored maybe
    window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
        return; // Do nothing if event already handled
    }
    switch(event.code) {
    // "A" key or arrowLeft from here
        case "KeyA":
            if (rect.direction == 0){
                console.log("A - Direction 1");
                rect.direction = 1;
            }
            else if (rect.direction == 1){
                console.log("A - Direction 2");
                rect.direction = 2;
            }
            else if (rect.direction == 2){
                console.log("A - Direction 3");
                rect.direction = 3;
            }
            else{
                console.log("A - Direction 0");
                rect.direction = 0;
            }
            break;
        case "ArrowLeft":
            if (rect.direction == 0){
                rect.direction = 1;
            }
            else if (rect.direction == 1){
                rect.direction = 2;
            }
            else if (rect.direction == 2){
                rect.direction = 3;
            }
            else{
                rect.direction = 0;
            }
            break;

    // "D" key or arrowRight from here   
        case "KeyD":
            if (rect.direction == 0){
                rect.direction = 3;
            }
            else if (rect.direction == 3){
                rect.direction = 2;
            }
            else if (rect.direction == 2){
                rect.direction = 1;
            }
            else{
                rect.direction = 0;
            }
            break;
        case "ArrowRight":
            if (rect.direction == 0){
                rect.direction = 3;
            }
            else if (rect.direction == 3){
                rect.direction = 2;
            }
            else if (rect.direction == 2){
                rect.direction = 1;
            }
            else{
                rect.direction = 0;
            }
            break;
        case "Enter":
            if (gameStarted != true){
                startMatch(rect, myCanvas);
                gameStarted = true;
            }
            break;
        case "Tab":
            console.log("TEST");
            Playerlist.showScoreboard();
            break;
        }

        // Consume the event so it doesn't get handled twice
        event.preventDefault();
    }, true);


    window.addEventListener("keyup", function(event) {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }

        switch(event.code) {
            case "Tab":
            console.log("TEST");
            Playerlist.showScoreboard();
            break;
        }

        // Consume the event so it doesn't get handled twice
        event.preventDefault();
    }, true);

    console.log(rect.visitedFields);

}

function fillAll(){
    // Von x bis max(x in fields)
    // Von y bis max(y in fields)
    // Add every pos to visitedFields
    
}


/**
 * This method starts the match (player movement and time will start)
 * @param {Players} rectangle 
 * @param {Canvas} canvas 
 */
function startMatch(rectangle, canvas){

    // Move player ever 100ms
    setInterval(function(){
        rectangle.move(canvas);
        rectangle.addField([rectangle.xPos, rectangle.yPos]);
    }, 100);

    // Update time every second (1000 ms)
    setInterval(function(){
        timeLeft -= 1;
        $(".timer").text("Time left: " + timeLeft);

        if (timeLeft <= 0){
            finish();
        }
    }, 1000);
}

/**
 * adapted from https://medium.com/@doomgoober/understanding-html-canvas-scaling-and-sizing-c04925d9a830
 * @param {Canvas object} myCanvas 
 * @param {Original height of the canvas} originalHeight 
 * @param {Original width of the canvas} originalWidth 
 */
function render(myCanvas, originalHeight, originalWidth) {
    let dimensions = getObjectFitSize(
        true,
        myCanvas.clientWidth,
        myCanvas.clientHeight,
        myCanvas.width,
        myCanvas.height
    );
    myCanvas.width = dimensions.width;
    myCanvas.height = dimensions.height;

    let ctx = myCanvas.getContext("2d");
    let ratio = Math.min(
        myCanvas.clientWidth / originalWidth,
        myCanvas.clientHeight / originalHeight
    );
    ctx.scale(ratio, ratio); //adjust this!
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fill();
    ctx.closePath();
}

/**
 * 
 */
function finish(){
    // Code here
    // -> Look at Trello Board "Pop Up Ending"
}

/**
 * Draws a rectangle
 * @param {Context of the canvas obj} ctx 
 */
function drawRect(canvas, xPos, yPos, width, height){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(xPos, yPos, width, height);
    // ToDo -> Get a random color (which has to be different for each player)
    ctx.fillStyle = "blue";
    ctx.fill();
    ctx.stroke();
}

/**
 * Changes the opacity when the mouse is hovering over the top data (time left etc)
 * -> Text is nearly invisible
 * @param {document or class/id} doc 
 */
function highOpacity(doc){
    doc.style.opacity = 0.99;
}

/**
// Changes the opacity when the mouse is hovering over the top data (time left etc)
 * -> Text is clearly visible
 * @param {document or class/id} doc 
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

// Fits the object size to the canvas
// adapted from: https://www.npmjs.com/package/intrinsic-scale
function getObjectFitSize(
    contains /* true = contain, false = cover */,
    containerWidth,
    containerHeight,
    width,
    height)
    {
    var doRatio = width / height;
    var cRatio = containerWidth / containerHeight;
    var targetWidth = 0;
    var targetHeight = 0;
    var test = contains ? doRatio > cRatio : doRatio < cRatio;
  
    if (test) {
      targetWidth = containerWidth;
      targetHeight = targetWidth / doRatio;
    } else {
      targetHeight = containerHeight;
      targetWidth = targetHeight * doRatio;
    }
  
    return {
      width: targetWidth,
      height: targetHeight,
      x: (containerWidth - targetWidth) / 2,
      y: (containerHeight - targetHeight) / 2
    };
}
