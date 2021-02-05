class Rectangle{

    /**
     * @var {size of rectangle} Size
     * @var {position on the x-axis of the rect} xPos
     * @var {position on the y-axis of the rect} yPos
     */
    size;
    xPos;
    yPos;

    /** Constructor
     * xSize = Size in pixels on x-axis
     * ySize = Size in pixels to y-axis
     */
    constructor(rectSize){
        this.size = rectSize;
        this.xPos = getRandomX();
        this.yPos = getRandomY();
    }

    /** Setter */
    setXSize(x){
        this.x = x;
    }
    setYSize(y){
        this.y = y;
    }
    setXPos(xPos){
        this.xPos = xPos;
    }
    setYPos(yPos){
        this.yPos = yPos;
    }

    /** Utilities */
    debug(){
        return "Debug works!"
    }

    /**
     * ToDo Updating x-pos -> This has to be rethought first
     */
    updateX(){
        var rectX = this.xSize;
        var rectY = this.ySize;
    
        var x = this.x += 1;
        this.x += 1;
    
        var c = document.getElementsByClassName("game-box");
        var ctx = c[0].getContext("2d");
        ctx.beginPath();
        ctx.fillRect(x, this.y, rectX, rectY);
        ctx.stroke();
        return [x, this.y, ctx];
    }
    
    /**
     * ToDo Updating y-pos -> This has to be rethought first
     */
    updateY(){
    var rectX = this.xSize;
    var rectY = this.ySize;

    var y = this.y += 1;
    this.y += 1;

    var c = document.getElementsByClassName("game-box");
    var ctx = c[0].getContext("2d");
    ctx.beginPath();
    ctx.fillRect(this.x, y, rectX, rectY);
    ctx.stroke();
    return [this.x, y, ctx];
    }
}

/**
 * This method returns a random number from 0 to max (inclusive)
 * @param {Max random number (inclusive)} max 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

/**
 * This method returns a randomNumber for the x-position of the rectangle
 */
function getRandomX(){
    var x = getRandomInt(280) + 20;
    return x;
}

/**
 * This method returns a randomNumber for the y-position of the rectangle
 */
function getRandomY(){
    var y = getRandomInt(280) + 20;
    return y;
}