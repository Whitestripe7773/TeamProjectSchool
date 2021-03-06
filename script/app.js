
/**
 * @var {time left before the game is over} timeLeft 
 * @var {game points that a player has} points 
 * @var {rank that the player has} rank 
 * @var {coordinates of start pos for each player} position
 * @var {count of players ingame} players
 */
var timeLeft = 60;
var points = 0;
var rank = 1;
var positions = {};
var players = 1;


// see: https://stackoverflow.com/questions/16206322/how-to-get-js-variable-to-retain-value-after-page-refresh#16206342
let pName
let pColor
function getDetails() {
    let link = document.getElementById('local')
    
    link.onclick = function(){ 
        pColor = $('#playerColour').val()
        sessionStorage.setItem("pColor", pColor)

        pName = $('#playerName').val()
        sessionStorage.setItem("pName", pName)
    }
}

window.onload = function() {

    console.log("Starting game...")

    // color and nickname selected by the player
    pColor = sessionStorage.getItem("pColor");
    pName = sessionStorage.getItem("pName");

    /**
     * @var {Get the canvas from the HTML} myCanvas
     * @var {Gets the height of the canvas} originalHeight
     * @var {Gets the width of the canvas} originalWidth
     * @var {If true the timer starts and player will move} gameStarted
     */
    const myCanvas = document.getElementById("game-box");
    const originalHeight = myCanvas.height;
    const originalWidth = myCanvas.width;

    /**
     * @var {boolean to show if the game has started} gameStarted
     */
    var gameStarted = false; 

    /**
     * @var {boolean to show if scoreboard is displayed} boardDisplayed
     */
    let boardDisplayed = false;

    render(myCanvas, originalHeight, originalWidth);
    

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
    // TODO: get color from color picker (index.html)
    var rect = new Player(pName, pColor);
    console.log(Player.players);
    console.log("Start direction: " + rect.direction);
    rect.debug();
    
    // Draws the rect with the pos of the created rect and size of it
    drawRect(myCanvas, rect);
    
    // Player Movement -> This needs to be refactored maybe
    // Listens to the keys
    window.addEventListener("keydown", function(event) {

    switch(event.code) {
    /* "A" key or arrowLeft from here */
    // When "A" key is pressed
        case "KeyA":
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
    // When left key is pressed
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

    /* "D" key or arrowRight from here */
    // When "D" key is pressed
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
    // When right key is pressed
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
    // When "Enter" is pressed the game starts
        case "Enter":
            if (gameStarted != true){
                startMatch(rect, myCanvas);
                gameStarted = true;
            }
            break;
    // When "Tab" key is pressed
        case "KeyQ":
            if (boardDisplayed != true){
                Playerlist.showScoreboard(Player.players);
                boardDisplayed = true;
            }
            break;
        }
    }, true);


    window.addEventListener("keyup", function(event) {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }

        switch(event.code) {
            case "KeyQ":
            Playerlist.hideScoreboard();
            boardDisplayed = false;
            break;
        }

        // Consume the event so it doesn't get handled twice
        event.preventDefault();
    }, true);

}


function fillAll(canvas, rect){

    let vFields = rect.visitedFields;

    // Sorts visitedFields by X, then by Y
    vFields.sort(sortByX);
    vFields.sort(sortByY);

    /** 
        # vFields ist eine Liste von Listen z. B. [[0, 0], [10, 0], [20, 0], [30, 0], [0, 10], [30, 10]]
        # Wir gehen durch jedes Element im sortierten visitedFields
        # Dort schauen wir dann, ob das nächste Element (Beispiel: [30, 10]) auf der X-Achse größer ist als das jetzige Element [0, 10] + 10 = [10, 10] und beide Y-Werte gleich sind:
            # Wenn dem so ist, dann wird zwischen den beiden ein Rechteck gezeichnet
    */
    for(let i = 0; i < vFields.length - 1; i++){
        if (vFields[i+1][0] > vFields[i][0] + 10 && vFields[i+1][1] == vFields[i][1]){
            drawRectAtPos(canvas, rect, vFields[i][0] + 10, vFields[i+1][1]);
        }
    }
    // Updates the player's points and writes them into the text box
    rect.updatePoints()
    $(".points").text("Points: " + rect.points);
}

/**
 * @param {Array one} a 
 * @param {Array two} b 
 */
function sortByX(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

/**
 * @param {Array one} a 
 * @param {Array two} b 
 */
function sortByY(a, b) {
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] < b[1]) ? -1 : 1;
    }
}

/**
 * This method starts the match (player movement and time will start)
 * @param {Players} rectangle 
 * @param {Canvas} canvas 
 */
function startMatch(rectangle, canvas){

    // Update timer every second (1000 ms)
    let timer = setInterval(function(){
        timeLeft -= 1;
        $(".timer").text("Time left: " + timeLeft);

        // When time hits 0 -> end game
        if (timeLeft <= 0){;
            finish(play, timer, rectangle);
        }
    }, 1000);

    // Move player every 100ms
    let play = setInterval(function(){
        let currentPos = [rectangle.xPos, rectangle.yPos]
        if (currentPos[0] < 1200 && currentPos[0] > -10 && currentPos[1] < 720 && currentPos[1] > -10)
        {
            rectangle.move(canvas);
            //debugger;
            currentPos = [rectangle.xPos, rectangle.yPos]
            for(let i = 0; i < rectangle.visitedFields.length - 1; i++){
                if (rectangle.visitedFields[i][0] == currentPos[0] && rectangle.visitedFields[i][1] == currentPos[1]){
                    fillAll(canvas, rectangle);
                }
            }
            rectangle.addField(currentPos);
        }
        else{
            sessionStorage.setItem(pName + "-points", rectangle.points);
            console.log(sessionStorage.getItem(pName+"-points"));
            finish(play, timer, rectangle);
        }
    }, 100);
}

/**
 * Adapted from https://medium.com/@doomgoober/understanding-html-canvas-scaling-and-sizing-c04925d9a830
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
 * This method will be activated after 60 seconds passed
 */
function finish(play, timer, rectangle){
    // stops the game
    clearInterval(play);
    clearInterval(timer);

    // populates finish dialog
    $("#nickname_finish").append("<b style='color: "+rectangle.color+";'>"+rectangle.nickname+"</b>");
    $("#points_finish").append(rectangle.points);
    $("#rank_finish").append(rectangle.rank);

    // displays finish dialog
    let dialog = document.getElementById("finish");
    dialog.style.visibility = 'visible';
}

/**
 * Draws a rectangle for the first time 
 * Also draws the starting field of the player
 * @param {Context of the canvas obj} ctx 
 */
function drawRect(canvas, player){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();

    // Initial Position of Player
    ctx.rect(player.xPos, player.yPos, player.size, player.size);

    drawSurroundingBlocks(1, ctx, player);

    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.stroke();
}


/**
 * Draws the starting field around the player
 * @param {Layer surrounding the player's initial position (in blocks)} borderLayers 
 * @param {Context of canvas} ctx 
 * @param {Player} player 
 */
function drawSurroundingBlocks(borderLayers, ctx, player){
    // Loop iterates through points on y Axis
    for (let i = player.yPos-player.size*borderLayers; i<=player.yPos+player.size*borderLayers; i+=player.size){
        // Loop iterates through x Axis
        for (let j = player.xPos-player.size*borderLayers; j<=player.xPos+player.size*borderLayers; j+=player.size){
            ctx.rect(j,i,player.size,player.size);
            // Adds field to visitedFields list
            player.visitedFields.push([j, i]);
        }
    }
}

function drawRectAtPos(canvas, player, xPos, yPos){
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(xPos, yPos, player.size, player.size);
    // ToDo -> Get a random color (which has to be different for each player)
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.stroke();
    player.addField([xPos, yPos]);
}

// Fits the object size to the canvas (rectangles won't be pixelated)
// Adapted from: https://www.npmjs.com/package/intrinsic-scale
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

// -------------------------------------------------------------------------------------------------------------------------------
/** Optional
 * This was for testing purpose, don't delete it!
 * Logs the cursor position (x,y) when clicking somewhere in the canvas
*/
function getCursorPosition(canvas, event){
    var box = canvas[0].getBoundingClientRect();
    var x = event.clientX - box.left;
    var y = event.clientY - box.top;
    return [x, y];
}