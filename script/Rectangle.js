class Rectangle{

    /**
     * @var {Size of rectangle} Size
     * @var {Position on the x-axis of the rect} xPos
     * @var {Position on the y-axis of the rect} yPos
     * @var {Direction that the rectangle moves to} direction
     * @var {Color of the rectangle} color
     * @var {2D List of visited fields [[x, y]])} visitedFields
     */
    size;
    xPos;
    yPos;
    direction;
    visitedFields = [];

    /** Constructor
     * xSize = Size in pixels on x-axis
     * ySize = Size in pixels to y-axis
     */
    constructor(rectSize){
        this.size = rectSize;
        this.xPos = getRandomX();
        this.yPos = getRandomY();
        this.direction = this.getRandomDirection();
    }

    /* Setter */
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
    setDirection(direction){
        this.direction = direction;
    }

    /* Utilities */

    /**
     * This methods is just for debug purpose
     */
    debug(){
        console.log(`X-Pos: ${this.xPos} \n Y-Pos: ${this.yPos}`)
    }

    /**
     * Generate a random start direction, depending on the distance to the sides
     * Direction:
     * 0 = right
     * 1 = up
     * 2 = left
     * 3 = down
     */
    getRandomDirection(){
        if (this.xPos > 300 & this.xPos < 1000){
            return 0
        }
        else if (this.yPos > 350 & this.yPos < 720){
            return 1
        }
        else if (this.xPos > 500 & this.xPos < 1000){
            return 2
        }
        return 3
    }

    /**
     * With this function the rectangle moves on the canvas, depending on the direction
     * @param {Canvas that we draw on} canvas 
     */
    move(canvas){
        switch(this.direction) {
            case 0:
              this.updateXPositive(canvas);
              break;
            case 1:
              this.updateYPositive(canvas);
              break;
            case 2:
              this.updateXNegative(canvas);
              break;  
            default:
              this.updateYNegative(canvas);
          }
    }

    /**
     * This method updates the position depending on the direction
     * @param {*} canvas 
     */
    updatePos(canvas){
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.rect(this.xPos + this.size, this.yPos, this.size, this.size);
        ctx.fill();
        ctx.stroke();
        
        this.xPos += this.size;
    }

    /**
     * Go right
     * Draws new rectangle to the right side of the "old" one
     * We are updating the x-Position (+) on the canvas
     * @param {Canvas that we draw on} canvas
     */
    updateXPositive(canvas){
        this.xPos += this.size;
        var ctx = canvas.getContext("2d");

        this.drawRectangle(ctx, this.xPos, this.yPos, this.size, this.size)

        this.drawDot(ctx, this.xPos+this.size/4, this.yPos+this.size/4, this.size/2, this.size/2)

        this.clearDot(ctx, this.xPos - this.size, this.yPos, this.size)
    }

     /**
     * Go left
     * Draws new rectangle to the left side of the "old" one
     * We are updating the x-Position (-) on the canvas
     * @param {Canvas that we draw on} canvas
     */
    updateXNegative(canvas){
        this.xPos -= this.size;
        var ctx = canvas.getContext("2d");

        this.drawRectangle(ctx, this.xPos, this.yPos, this.size, this.size)

        this.drawDot(ctx, this.xPos+this.size/4, this.yPos+this.size/4, this.size/2, this.size/2)
        
        this.clearDot(ctx, this.xPos + this.size, this.yPos, this.size)
    }

    /**
     * Go up
     * Draws new rectangle on top of the "old" one
     * We are updating the y-Position (-) on the canvas
     * @param {Canvas that we draw on} canvas
     */
    updateYPositive(canvas){
        this.yPos -= this.size;
        var ctx = canvas.getContext("2d");

        this.drawRectangle(ctx, this.xPos, this.yPos, this.size, this.size)
        
        this.drawDot(ctx, this.xPos+this.size/4, this.yPos+this.size/4, this.size/2, this.size/2)

        this.clearDot(ctx, this.xPos, this.yPos + this.size, this.size)
    }
    
    /**
     * Go down
     * Draws new rectangle below the "old" one
     * We are updating the y-Position (+) on the canvas -> Start from top (0)
     * @param {Canvas that we draw on} canvas
     */
    updateYNegative(canvas){
        this.yPos += this.size;
        var ctx = canvas.getContext("2d");

        this.drawRectangle(ctx)

        this.drawDot(ctx, this.xPos + this.size/4, this.yPos + this.size/4, this.size/2)

        this.clearDot(ctx, this.xPos, this.yPos - this.size, this.size);
    }

    /**
     * Draws a rectangle at [xPos | yPos] with the given size
     * @param {Context of canvas} ctx 
     */
    drawRectangle(ctx){
    const {xPos, yPos, size} = this;
    ctx.beginPath();
    ctx.rect(xPos, yPos, size, size);
    ctx.fill();
    ctx.stroke();
    }

    /**
     * Draws a dot at [xPos | yPos] with the given size
     * Will be used to draw a dot within a rectangle
     * @param {Context of canvas} ctx 
     * @param {X-Position - Start} xPos 
     * @param {Y - Position Start} yPos 
     * @param {Size to draw} size 
     */
    drawDot(ctx, xPos, yPos, size){
        ctx.beginPath();
        ctx.rect(xPos, yPos, size, size);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.stroke();
    }

    /**
     * Clears the dot at [xPos | yPos] with the given size
     * Will be used to clear the dot that was drawn before
     * @param {Context of canvas} ctx 
     * @param {X-Position - Start} xPos 
     * @param {Y - Position Start} yPos 
     * @param {Size to draw} size 
     */
    clearDot(ctx, xPos, yPos, size){
        ctx.beginPath();
        ctx.rect(xPos, yPos, size, size)
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "black"
        ctx.fill();
        ctx.stroke();
    }

    /**
     * Adds a field to the visitedFields list
     * @param {Field [x | y]} field 
     */
    addField(field){
        this.visitedFields.push(field);
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
 * Multiple of 10
 */
function getRandomX(){
    var x = Math.ceil((getRandomInt(1180) - 10) / 10) * 10;
    return x;
}

/**
 * This method returns a randomNumber for the y-position of the rectangle
 * Multiple of 10
 */
function getRandomY(){
    var y = Math.ceil((getRandomInt(700) - 10) / 10) * 10;
    return y;
}

